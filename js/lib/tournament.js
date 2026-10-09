import { buildSquad, mulberry } from "../game/attributes.js";
import { simulateMatch } from "../game/match.js";
import { NATIONS, getNation } from "./nations.js";
export function createCup(userNation, seed, stadiumCode) {
    const rng = mulberry(seed);
    const codes = NATIONS.map((n) => n.code).filter((c) => c !== userNation);
    for (let i = codes.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [codes[i], codes[j]] = [codes[j], codes[i]];
    }
    const ordered = [userNation, ...codes];
    const groups = [];
    for (let g = 0; g < 8; g++) {
        const teams = [ordered[g], ordered[g + 8], ordered[g + 16], ordered[g + 24]];
        groups.push({ name: String.fromCharCode(65 + g), teams, rounds: roundRobin(teams, rng() > 0.5) });
    }
    const ko = [];
    for (let i = 0; i < 8; i++)
        ko.push({ id: `o${i}`, stage: "oitavas", slot: i, home: null, away: null, hs: null, as: null, pens: null, played: false });
    for (let i = 0; i < 4; i++)
        ko.push({ id: `q${i}`, stage: "quartas", slot: i, home: null, away: null, hs: null, as: null, pens: null, played: false });
    for (let i = 0; i < 2; i++)
        ko.push({ id: `s${i}`, stage: "semi", slot: i, home: null, away: null, hs: null, as: null, pens: null, played: false });
    ko.push({ id: "t", stage: "terceiro", slot: 0, home: null, away: null, hs: null, as: null, pens: null, played: false });
    ko.push({ id: "f", stage: "final", slot: 0, home: null, away: null, hs: null, as: null, pens: null, played: false });
    return { version: 1, userNation, seed, phase: "groups", groups, ko, champion: null, third: null, stadiumCode };
}
function roundRobin(teams, swap) {
    const fixed = teams[0];
    const rot = teams.slice(1);
    const rounds = [];
    for (let r = 0; r < 3; r++) {
        const a = rot[r % 3];
        const b = rot[(r + 1) % 3];
        const c = rot[(r + 2) % 3];
        const pairs = [[fixed, a], [b, c]];
        rounds.push(pairs.map(([h, aw]) => ({
            home: swap ? aw : h, away: swap ? h : aw,
            hs: null, as: null, pens: null, played: false, byUser: false,
        })));
    }
    return rounds;
}
export function standings(group) {
    const table = new Map();
    for (const t of group.teams) {
        table.set(t, { code: t, pld: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 });
    }
    for (const round of group.rounds) {
        for (const fx of round) {
            if (!fx.played || fx.hs === null || fx.as === null)
                continue;
            const h = table.get(fx.home);
            const a = table.get(fx.away);
            if (!h || !a)
                continue;
            h.pld++;
            a.pld++;
            h.gf += fx.hs;
            h.ga += fx.as;
            a.gf += fx.as;
            a.ga += fx.hs;
            if (fx.hs > fx.as) {
                h.w++;
                h.pts += 3;
                a.l++;
            }
            else if (fx.hs < fx.as) {
                a.w++;
                a.pts += 3;
                h.l++;
            }
            else {
                h.d++;
                a.d++;
                h.pts++;
                a.pts++;
            }
        }
    }
    for (const s of table.values())
        s.gd = s.gf - s.ga;
    return [...table.values()].sort((x, y) => y.pts - x.pts || y.gd - x.gd || y.gf - x.gf || x.code.localeCompare(y.code));
}
export function teamSetup(code, squads, settings, seed) {
    const nation = getNation(code);
    const custom = squads[code];
    const base = buildSquad(code, nation.formation, seed);
    let squad = base;
    if (custom?.length) {
        squad = base.map((b) => {
            const c = custom.find((x) => x.id === b.id || x.shirt === b.shirt);
            return c ? { ...c, role: b.role, shirt: b.shirt, primary: nation.primary, secondary: nation.secondary } : b;
        });
    }
    return { nationCode: code, squad, formation: nation.formation, tactic: nation.tactic };
}
export function simFixture(home, away, settings, squads, seed) {
    const fast = { ...settings, halfSeconds: Math.min(settings.halfSeconds, 24) };
    const r = simulateMatch(fast, teamSetup(home, squads, settings, seed), teamSetup(away, squads, settings, seed + 977), seed);
    return { hs: r.home, as: r.away, pens: null, winner: r.home === r.away ? "" : r.home > r.away ? home : away, possession: r.possession };
}
export function shootout(home, away, seed) {
    const rng = mulberry(seed * 31 + 7);
    const ph = getNation(home).attrs.precision;
    const pa = getNation(away).attrs.precision;
    let sh = 0, sa = 0;
    for (let i = 0; i < 5; i++) {
        if (rng() < 0.55 + ph / 320)
            sh++;
        if (rng() < 0.55 + pa / 320)
            sa++;
    }
    let k = 0;
    while (sh === sa && k < 12) {
        if (rng() < 0.55 + ph / 320)
            sh++;
        if (rng() < 0.55 + pa / 320)
            sa++;
        k++;
    }
    if (sh === sa)
        sh += 1;
    return [sh, sa];
}
export function currentRound(cup) {
    for (let r = 0; r < 3; r++) {
        if (cup.groups.some((g) => g.rounds[r].some((f) => !f.played)))
            return r;
    }
    return 2;
}
export function isRoundDone(cup, round) {
    return cup.groups.every((g) => g.rounds[round].every((f) => f.played));
}
export function groupsDone(cup) {
    return cup.groups.every((g) => g.rounds.every((r) => r.every((f) => f.played)));
}
export function applyGroupResult(cup, gi, ri, fi, hs, as) {
    const fx = cup.groups[gi].rounds[ri][fi];
    fx.hs = hs;
    fx.as = as;
    fx.played = true;
    if (groupsDone(cup))
        qualifyKo(cup);
}
export function qualifyKo(cup) {
    const winners = [];
    const runners = [];
    for (const g of cup.groups) {
        const t = standings(g);
        winners.push(t[0].code);
        runners.push(t[1].code);
    }
    const pairs = [
        [winners[0], runners[1]], [winners[2], runners[3]],
        [winners[4], runners[5]], [winners[6], runners[7]],
        [winners[1], runners[0]], [winners[3], runners[2]],
        [winners[5], runners[4]], [winners[7], runners[6]],
    ];
    pairs.forEach((p, i) => {
        const m = cup.ko.find((k) => k.id === `o${i}`);
        m.home = p[0];
        m.away = p[1];
    });
    cup.phase = "ko";
}
export function nextKo(cup) {
    return cup.ko.find((m) => !m.played && m.home && m.away) ?? null;
}
export function applyKoResult(cup, id, hs, as, pens) {
    const m = cup.ko.find((k) => k.id === id);
    m.hs = hs;
    m.as = as;
    m.pens = pens;
    m.played = true;
    const winner = hs === as
        ? (pens && pens[0] >= pens[1] ? m.home : m.away)
        : hs > as ? m.home : m.away;
    const loser = winner === m.home ? m.away : m.home;
    if (m.stage === "oitavas") {
        const q = cup.ko.find((k) => k.id === `q${Math.floor(m.slot / 2)}`);
        if (m.slot % 2 === 0)
            q.home = winner;
        else
            q.away = winner;
    }
    else if (m.stage === "quartas") {
        const s = cup.ko.find((k) => k.id === `s${Math.floor(m.slot / 2)}`);
        if (m.slot % 2 === 0)
            s.home = winner;
        else
            s.away = winner;
    }
    else if (m.stage === "semi") {
        const f = cup.ko.find((k) => k.id === "f");
        const t = cup.ko.find((k) => k.id === "t");
        if (m.slot === 0) {
            f.home = winner;
            t.home = loser;
        }
        else {
            f.away = winner;
            t.away = loser;
        }
    }
    else if (m.stage === "final") {
        cup.champion = winner;
        cup.phase = "done";
    }
    else if (m.stage === "terceiro") {
        cup.third = winner;
    }
}
export function nextMatch(cup) {
    if (cup.phase === "done")
        return null;
    if (cup.phase === "groups") {
        for (let gi = 0; gi < cup.groups.length; gi++) {
            for (let ri = 0; ri < 3; ri++) {
                for (let fi = 0; fi < cup.groups[gi].rounds[ri].length; fi++) {
                    const fx = cup.groups[gi].rounds[ri][fi];
                    if (!fx.played) {
                        return {
                            kind: "group", gi, ri, fi, home: fx.home, away: fx.away, stage: `Grupo ${cup.groups[gi].name}`,
                            byUser: fx.home === cup.userNation || fx.away === cup.userNation,
                        };
                    }
                }
            }
        }
        return null;
    }
    const m = nextKo(cup);
    if (!m)
        return null;
    return {
        kind: "ko", koId: m.id, stage: m.stage, home: m.home, away: m.away,
        byUser: m.home === cup.userNation || m.away === cup.userNation,
    };
}
/** Simula tudo que não é do usuário, mantendo a UI responsiva. */
export async function autoSimulate(cup, settings, squads, onProgress) {
    let guard = 0;
    while (guard++ < 200) {
        const nm = nextMatch(cup);
        if (!nm || nm.byUser)
            break;
        const queue = [];
        if (nm.kind === "group") {
            // simula a rodada inteira de uma vez
            const ri = nm.ri;
            for (let gi = 0; gi < cup.groups.length; gi++) {
                for (let fi = 0; fi < cup.groups[gi].rounds[ri].length; fi++) {
                    const fx = cup.groups[gi].rounds[ri][fi];
                    if (!fx.played && !(fx.home === cup.userNation || fx.away === cup.userNation)) {
                        queue.push({ kind: "group", gi, ri, fi, home: fx.home, away: fx.away, byUser: false });
                    }
                }
            }
        }
        else {
            // mata-mata: todas as partidas disponíveis que não sejam do usuário
            for (const m of cup.ko) {
                if (!m.played && m.home && m.away && m.home !== cup.userNation && m.away !== cup.userNation) {
                    queue.push({ kind: "ko", koId: m.id, home: m.home, away: m.away, byUser: false, stage: m.stage });
                }
            }
        }
        if (!queue.length)
            break;
        let done = 0;
        for (const q of queue) {
            const seed = cup.seed + q.home.charCodeAt(0) * 131 + q.away.charCodeAt(1) * 17 + guard * 7;
            const r = simFixture(q.home, q.away, settings, squads, seed);
            if (q.kind === "group") {
                applyGroupResult(cup, q.gi, q.ri, q.fi, r.hs, r.as);
            }
            else {
                let hs = r.hs, as = r.as, pens = null;
                if (hs === as) {
                    pens = shootout(q.home, q.away, seed);
                    // placar de pênaltis decide; mantém o empate no tempo normal
                    hs = hs + (pens[0] > pens[1] ? 0 : 0);
                }
                applyKoResult(cup, q.koId, hs, as, pens);
            }
            done++;
            onProgress?.(done, queue.length, `${getNation(q.home).flag} ${q.home} × ${q.away} ${getNation(q.away).flag}`);
            await new Promise((res) => setTimeout(res, 0));
        }
        if (cup.phase === "done")
            break;
        const after = nextMatch(cup);
        if (!after)
            break;
        if (after.byUser)
            break;
        if (after.kind === "group" && after.ri === nm.ri && queue.length === 0)
            break;
    }
}
export function cupProgress(cup) {
    const total = 8 * 6 + 16;
    const playedG = cup.groups.reduce((a, g) => a + g.rounds.flat().filter((f) => f.played).length, 0);
    const playedK = cup.ko.filter((k) => k.played).length;
    return { played: playedG + playedK, total, pct: Math.round(((playedG + playedK) / total) * 100) };
}
