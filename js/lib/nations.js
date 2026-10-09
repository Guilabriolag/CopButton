export const NATIONS = [
    {
        code: "BRA", name: "Brasil", flag: "🇧🇷", primary: "#f7d417", secondary: "#0b3d91", accent: "#1fa34a",
        stars: 5, style: "Botões leves, deslize alto e borda média — jogo de tabela.",
        attrs: { attack: 92, defense: 86, precision: 90, force: 82, slide: 88, control: 91 },
        formation: "4-3-3", tactic: "ofensiva", buttonShape: "media",
    },
    {
        code: "ARG", name: "Argentina", flag: "🇦🇷", primary: "#7bb7e8", secondary: "#1b2a4a", accent: "#f2f2f2",
        stars: 4, style: "Borda inclinada: especialistas em chute levantado e efeito.",
        attrs: { attack: 90, defense: 84, precision: 88, force: 86, slide: 78, control: 89 },
        formation: "4-4-2", tactic: "equilibrada", buttonShape: "inclinada",
    },
    {
        code: "FRA", name: "França", flag: "🇫🇷", primary: "#1f3d99", secondary: "#e6e9f2", accent: "#d4213d",
        stars: 4, style: "Massa alta e força bruta — transferência de impulso violenta.",
        attrs: { attack: 89, defense: 88, precision: 85, force: 92, slide: 76, control: 84 },
        formation: "4-3-3", tactic: "ofensiva", buttonShape: "vertical",
    },
    {
        code: "GER", name: "Alemanha", flag: "🇩🇪", primary: "#1c1c1c", secondary: "#d9252b", accent: "#f2c300",
        stars: 4, style: "Botões pesados, atrito alto, estabilidade defensiva.",
        attrs: { attack: 84, defense: 92, precision: 87, force: 90, slide: 70, control: 85 },
        formation: "4-2-3-1", tactic: "pressao", buttonShape: "vertical",
    },
    {
        code: "ESP", name: "Espanha", flag: "🇪🇸", primary: "#c60b1e", secondary: "#ffc400", accent: "#1b1b1b",
        stars: 4, style: "Deslize máximo: a bola corre, o botão quase não freia.",
        attrs: { attack: 86, defense: 83, precision: 93, force: 76, slide: 93, control: 94 },
        formation: "4-3-3", tactic: "equilibrada", buttonShape: "media",
    },
    {
        code: "POR", name: "Portugal", flag: "🇵🇹", primary: "#0f6b3c", secondary: "#d6202c", accent: "#f5d300",
        stars: 4, style: "Precisão cirúrgica no vetor e borda alta para finalização.",
        attrs: { attack: 88, defense: 81, precision: 91, force: 84, slide: 80, control: 88 },
        formation: "4-3-3", tactic: "ofensiva", buttonShape: "inclinada",
    },
    {
        code: "ENG", name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", primary: "#eef2f7", secondary: "#1b2a5b", accent: "#c8102e",
        stars: 3, style: "Botões largos e massudos, duelos físicos no meio-campo.",
        attrs: { attack: 83, defense: 87, precision: 84, force: 89, slide: 74, control: 82 },
        formation: "4-4-2", tactic: "pressao", buttonShape: "vertical",
    },
    {
        code: "ITA", name: "Itália", flag: "🇮🇹", primary: "#1c6b3c", secondary: "#e8ecf1", accent: "#c8102e",
        stars: 4, style: "Defesa em bloco baixo, atrito alto e recuo programado.",
        attrs: { attack: 80, defense: 93, precision: 88, force: 82, slide: 72, control: 86 },
        formation: "3-5-2", tactic: "defensiva", buttonShape: "media",
    },
    {
        code: "NED", name: "Holanda", flag: "🇳🇱", primary: "#e8561f", secondary: "#1b3a8c", accent: "#f4f4f4",
        stars: 3, style: "Botões finos e rápidos: transição curtíssima.",
        attrs: { attack: 87, defense: 82, precision: 86, force: 80, slide: 86, control: 87 },
        formation: "4-3-3", tactic: "ofensiva", buttonShape: "media",
    },
    {
        code: "URU", name: "Uruguai", flag: "🇺🇾", primary: "#5cb8e8", secondary: "#1b2a4a", accent: "#f2c300",
        stars: 3, style: "Raio grande, massa alta: botão que não sai do lugar.",
        attrs: { attack: 81, defense: 89, precision: 82, force: 91, slide: 68, control: 80 },
        formation: "4-4-2", tactic: "pressao", buttonShape: "vertical",
    },
    {
        code: "COL", name: "Colômbia", flag: "🇨🇴", primary: "#f2c300", secondary: "#1b3a8c", accent: "#c8102e",
        stars: 3, style: "Efeito lateral abusado, curva de Magnus no limite.",
        attrs: { attack: 85, defense: 79, precision: 87, force: 79, slide: 84, control: 88 },
        formation: "4-2-3-1", tactic: "equilibrada", buttonShape: "inclinada",
    },
    {
        code: "MEX", name: "México", flag: "🇲🇽", primary: "#1c6b3c", secondary: "#e8ecf1", accent: "#c8102e",
        stars: 3, style: "Agilidade e drible curto: botões pequenos e leves.",
        attrs: { attack: 82, defense: 78, precision: 84, force: 74, slide: 89, control: 85 },
        formation: "4-3-3", tactic: "equilibrada", buttonShape: "media",
    },
    {
        code: "JPN", name: "Japão", flag: "🇯🇵", primary: "#eef2f7", secondary: "#c8102e", accent: "#1b1b1b",
        stars: 3, style: "Precisão técnica altíssima, força moderada.",
        attrs: { attack: 80, defense: 82, precision: 92, force: 72, slide: 85, control: 90 },
        formation: "4-2-3-1", tactic: "pressao", buttonShape: "media",
    },
    {
        code: "SEN", name: "Senegal", flag: "🇸🇳", primary: "#1fa34a", secondary: "#f2c300", accent: "#c8102e",
        stars: 3, style: "Impulso explosivo: pouca massa, muita velocidade de saída.",
        attrs: { attack: 86, defense: 84, precision: 79, force: 88, slide: 82, control: 81 },
        formation: "4-3-3", tactic: "ofensiva", buttonShape: "vertical",
    },
    {
        code: "CRO", name: "Croácia", flag: "🇭🇷", primary: "#c8102e", secondary: "#1b3a8c", accent: "#eef2f7",
        stars: 3, style: "Meio-campo de controle, deslize fino e passes longos.",
        attrs: { attack: 82, defense: 83, precision: 90, force: 78, slide: 83, control: 90 },
        formation: "4-3-3", tactic: "equilibrada", buttonShape: "media",
    },
    {
        code: "MAR", name: "Marrocos", flag: "🇲🇦", primary: "#c1272d", secondary: "#1fa34a", accent: "#f2c300",
        stars: 3, style: "Bloco defensivo denso e saída rápida em borda inclinada.",
        attrs: { attack: 83, defense: 90, precision: 83, force: 84, slide: 77, control: 84 },
        formation: "4-3-3", tactic: "defensiva", buttonShape: "inclinada",
    },
];
const EXTRA = [
    ["BEL", "Bélgica", "🇧🇪", "#c8102e", "#1b1b1b", "#f2c300", 3, "Botões médios e precisos, meio-campo técnico.", 84, 83, 88, 80, 81, 87, "4-3-3", "equilibrada", "media"],
    ["SUI", "Suíça", "🇨🇭", "#d52b1e", "#f2f2f2", "#c8102e", 3, "Disciplina defensiva, atrito alto e pouca fantasia.", 78, 89, 85, 82, 74, 83, "3-5-2", "defensiva", "vertical"],
    ["USA", "Estados Unidos", "🇺🇸", "#1b3a8c", "#c8102e", "#eef2f7", 3, "Botões leves e velozes, transição em deslize alto.", 82, 80, 82, 84, 87, 81, "4-3-3", "pressao", "media"],
    ["POL", "Polônia", "🇵🇱", "#eef2f7", "#c8102e", "#1b1b1b", 3, "Centroavante pesado: impulso alto em pouco espaço.", 80, 81, 81, 88, 72, 79, "4-4-2", "equilibrada", "vertical"],
    ["KOR", "Coreia do Sul", "🇰🇷", "#1b3a8c", "#c8102e", "#eef2f7", 3, "Pressão curta, botões pequenos e ágeis.", 81, 82, 84, 76, 88, 85, "4-2-3-1", "pressao", "media"],
    ["AUS", "Austrália", "🇦🇺", "#0f8a44", "#f2c300", "#1b3a8c", 2, "Duelos aéreos: borda alta e massa elevada.", 78, 84, 78, 89, 70, 77, "4-4-2", "pressao", "inclinada"],
    ["EGY", "Egito", "🇪🇬", "#c8102e", "#1b1b1b", "#f2c300", 2, "Um craque de precisão extrema carregando o time.", 79, 78, 86, 76, 82, 84, "4-2-3-1", "defensiva", "media"],
    ["NGA", "Nigéria", "🇳🇬", "#1fa34a", "#eef2f7", "#1b1b1b", 3, "Explosão: pouca massa, velocidade de saída altíssima.", 85, 78, 80, 87, 86, 82, "4-3-3", "ofensiva", "vertical"],
    ["CRC", "Costa Rica", "🇨🇷", "#c8102e", "#1b3a8c", "#eef2f7", 2, "Bloco baixo, goleiro de raio grande e reflexo.", 74, 87, 82, 76, 75, 80, "3-5-2", "defensiva", "media"],
    ["ECU", "Equador", "🇪🇨", "#f2c300", "#1b3a8c", "#c8102e", 3, "Altitude: bola mais rápida, deslize generoso.", 83, 82, 81, 83, 85, 82, "4-3-3", "pressao", "media"],
    ["CAN", "Canadá", "🇨🇦", "#c8102e", "#eef2f7", "#1b1b1b", 2, "Pontas velozes, botões finos e efeito lateral.", 80, 77, 80, 79, 86, 81, "4-3-3", "ofensiva", "media"],
    ["SRB", "Sérvia", "🇷🇸", "#1b3a8c", "#c8102e", "#eef2f7", 3, "Força pura e bola parada com borda inclinada.", 82, 84, 83, 90, 73, 80, "4-2-3-1", "pressao", "inclinada"],
    ["DEN", "Dinamarca", "🇩🇰", "#c8102e", "#eef2f7", "#1b3a8c", 3, "Coletivo equilibrado, sem ponto fraco físico.", 81, 84, 85, 81, 80, 85, "4-3-3", "equilibrada", "media"],
    ["SWE", "Suécia", "🇸🇪", "#1b5fa8", "#f2c300", "#eef2f7", 3, "Botões largos, jogo direto e estável.", 79, 85, 82, 86, 74, 81, "4-4-2", "equilibrada", "vertical"],
    ["KSA", "Arábia Saudita", "🇸🇦", "#1fa34a", "#eef2f7", "#f2c300", 2, "Toque curto e deslize fino em grama rápida.", 77, 79, 83, 74, 86, 84, "4-3-3", "defensiva", "media"],
    ["GHA", "Gana", "🇬🇭", "#c8102e", "#f2c300", "#1fa34a", 2, "Físico elástico: massa média e impulsos longos.", 82, 80, 78, 88, 80, 79, "4-3-3", "ofensiva", "vertical"],
];
for (const r of EXTRA) {
    NATIONS.push({
        code: r[0], name: r[1], flag: r[2], primary: r[3], secondary: r[4], accent: r[5],
        stars: r[6], style: r[7],
        attrs: { attack: r[8], defense: r[9], precision: r[10], force: r[11], slide: r[12], control: r[13] },
        formation: r[14], tactic: r[15], buttonShape: r[16],
    });
}
export const NATION_MAP = Object.fromEntries(NATIONS.map((n) => [n.code, n]));
export function getNation(code) {
    return NATION_MAP[code] ?? NATIONS[0];
}
export const FIRST_NAMES = [
    "Ronaldo", "Zico", "Nilton", "Kaique", "Diego", "Mateus", "Ivan", "Yuri", "Hugo", "Bruno",
    "Éder", "Talles", "Vini", "Caio", "Renan", "Djalma", "Otávio", "Luan", "Pedro", "Sandro",
];
export const LAST_NAMES = [
    "Fonseca", "Barreto", "Nogueira", "Vasques", "Amaral", "Peixoto", "Cardozo", "Moreira",
    "Santana", "Vilar", "Queiroz", "Bittar", "Lacerda", "Antunes", "Ramalho",
];
