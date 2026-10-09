export const STADIUMS = [
    {
        code: "vila", name: "Ginásio da Vila", city: "Bairro", tier: "bairro",
        capacity: 1200, crowdDensity: 0.35, standHeight: 0.55, standDepth: 0.9,
        roof: false, lightRig: "simples", screens: 0, pitchTint: "#2f7d32",
        crowdColors: ["#e8ecf1", "#c8102e", "#1b3a8c", "#f2c300"],
        ambient: "Ginásio ecoante, torcida próxima", unlockXp: 0,
        description: "Mesa de bairro, iluminação simples e torcida a um palmo do campo.",
    },
    {
        code: "olimpico", name: "Arena Olímpica", city: "Capital", tier: "olimpico",
        capacity: 48000, crowdDensity: 0.72, standHeight: 1.15, standDepth: 1.7,
        roof: true, lightRig: "torres", screens: 2, pitchTint: "#277a34",
        crowdColors: ["#f2f2f2", "#1fa34a", "#f7d417", "#2b2b2b"],
        ambient: "Arquibancadas gigantes, coro contínuo", unlockXp: 0,
        description: "Arquibancada monumental em anel, quatro torres de luz e dois telões.",
    },
    {
        code: "maracana", name: "Maracanã Button", city: "Rio", tier: "copa",
        capacity: 78000, crowdDensity: 0.9, standHeight: 1.35, standDepth: 2.0,
        roof: true, lightRig: "anel", screens: 4, pitchTint: "#22803a",
        crowdColors: ["#f7d417", "#1fa34a", "#0b3d91", "#f2f2f2"],
        ambient: "Templo lotado, onda sonora", unlockXp: 400,
        description: "Templo da copa: anel de luz contínuo, quatro telões e mosaico da torcida.",
    },
    {
        code: "deserto", name: "Coliseu do Deserto", city: "Doha", tier: "copa",
        capacity: 62000, crowdDensity: 0.8, standHeight: 1.25, standDepth: 1.85,
        roof: true, lightRig: "anel", screens: 2, pitchTint: "#2c8a44",
        crowdColors: ["#f2f2f2", "#c1272d", "#f2c300", "#1b3a8c"],
        ambient: "Ar seco, torcida em ondas", unlockXp: 700,
        description: "Estrutura futurista branca, climatizada, com anel de refletores LED.",
    },
    {
        code: "norte", name: "Templo do Norte", city: "Reykjavík", tier: "copa",
        capacity: 35000, crowdDensity: 0.6, standHeight: 1.0, standDepth: 1.5,
        roof: true, lightRig: "torres", screens: 2, pitchTint: "#1f6f3a",
        crowdColors: ["#5cb8e8", "#f2f2f2", "#1b2a4a", "#c8102e"],
        ambient: "Vento gelado, cânticos graves", unlockXp: 1000,
        description: "Estádio fechado sob aurora, grama mais lenta e ar denso.",
    },
    {
        code: "costa", name: "Arena da Costa", city: "Dakar", tier: "olimpico",
        capacity: 40000, crowdDensity: 0.68, standHeight: 1.1, standDepth: 1.6,
        roof: false, lightRig: "torres", screens: 1, pitchTint: "#33903a",
        crowdColors: ["#1fa34a", "#f2c300", "#c8102e", "#f2f2f2"],
        ambient: "Brisa do mar, tambores", unlockXp: 250,
        description: "Aberto, vento lateral leve e torcida percussiva atrás dos gols.",
    },
];
export const STADIUM_MAP = Object.fromEntries(STADIUMS.map((s) => [s.code, s]));
export function getStadium(code) {
    return STADIUM_MAP[code] ?? STADIUMS[0];
}
export const WEATHERS = [
    { id: "sol", label: "Sol", icon: "☀", note: "Atrito nominal, deslize previsto" },
    { id: "nublado", label: "Nublado", icon: "☁", note: "Luz difusa, sem alteração física" },
    { id: "chuva", label: "Chuva", icon: "🌧", note: "−22% atrito, bola corre mais" },
    { id: "chuva-forte", label: "Chuva forte", icon: "⛈", note: "−40% atrito, quique morto, efeito reduzido" },
];
export const TIMES = [
    { id: "manha", label: "Manhã", icon: "🌅" },
    { id: "tarde", label: "Tarde", icon: "☀" },
    { id: "poente", label: "Pôr do sol", icon: "🌇" },
    { id: "noite", label: "Noite", icon: "🌙" },
];
export const GRASSES = [
    { id: "rapido", label: "Rápido (curto)", damping: 0.82, bounce: 1.12 },
    { id: "normal", label: "Normal", damping: 1.0, bounce: 1.0 },
    { id: "lento", label: "Lento (alto)", damping: 1.22, bounce: 0.86 },
    { id: "gasto", label: "Gasto (irregular)", damping: 1.08, bounce: 0.94 },
];
export const DEFAULT_RULES = {
    walls: true,
    halves: 2,
    halfSeconds: 90,
    gk: true,
    maxTouches: 3,
};
