// Mocks PT-BR para o trailer. Conteúdo realista, zero chamadas externas.

export const BRAND = {
  primary: "#0A6DD9",
  primaryDark: "#0857AE",
  navy: "#050B1A",
  bgLight: "#F7F9FC",
  surface: "#FFFFFF",
  border: "#E4E8EF",
  text: "#0F172A",
  textMuted: "#5B6577",
  danger: "#DC2626",
  warning: "#F59E0B",
  ok: "#16A34A",
};

export const redRoomScenarios = [
  { id: "pcr", label: "PCR no Adulto", tag: "Crítico", color: "#DC2626" },
  { id: "avc", label: "AVCi — Janela", tag: "Tempo", color: "#F59E0B" },
  { id: "sepse", label: "Choque Séptico", tag: "Crítico", color: "#DC2626" },
  { id: "iam", label: "IAM com Supra", tag: "Tempo", color: "#F59E0B" },
];

export const pcrConduct = {
  title: "Parada Cardiorrespiratória — Adulto",
  steps: [
    { t: "00:00", a: "Iniciar RCP 30:2 · Compressões 100–120/min" },
    { t: "00:30", a: "Monitor / Desfibrilador · Checar ritmo" },
    { t: "02:00", a: "Adrenalina 1 mg EV · repetir 3–5 min" },
    { t: "04:00", a: "Amiodarona 300 mg EV (FV/TVSP refratária)" },
  ],
};

export const sepseProtocolBundle = [
  "Lactato sérico — repetir em 2h se >2 mmol/L",
  "Hemoculturas antes do antibiótico (2 pares)",
  "Antibiótico amplo espectro EV ≤ 1h",
  "Cristaloide 30 mL/kg em 3h se hipotensão / lactato ≥4",
  "Vasopressor (noradrenalina) se PAM <65 após volume",
];

export const noradrenalineDilution = {
  drug: "Noradrenalina",
  presentation: "Ampola 4 mg / 4 mL",
  dilution: "16 mg (4 amp) em 234 mL SG 5% = 64 mcg/mL",
  dose: "0,05 – 1,0 mcg/kg/min",
  startRate: "70 kg → 3,3 mL/h (BIC)",
  alert: "Interação grave: IMAO · Risco de extravasamento em via periférica",
};

export const qsofaItems = [
  { k: "Frequência respiratória ≥ 22 ipm", v: true },
  { k: "Alteração do nível de consciência (Glasgow < 15)", v: true },
  { k: "Pressão arterial sistólica ≤ 100 mmHg", v: true },
];

export const claraAnswerBlocks = [
  "**Noradrenalina — choque séptico (adulto 70 kg)**",
  "**Diluição:** 16 mg em 234 mL SG 5% → 64 mcg/mL",
  "**Dose inicial:** 0,05 mcg/kg/min ≈ **3,3 mL/h** em BIC",
  "**Titulação:** ajustar a cada 5 min até PAM ≥ 65 mmHg",
  "**Faixa usual:** 0,05 – 1,0 mcg/kg/min",
  "*Ref.: SSC 2026 · AMIB 2024*",
];

export const epidemicRegions: Array<{
  id: string; name: string; color: string; d: string; label: string;
}> = [
  { id: "n",  name: "Norte",         color: "#DC2626", label: "Malária — surto AM",   d: "M120,80 L260,75 L310,110 L300,200 L210,230 L130,210 Z" },
  { id: "ne", name: "Nordeste",      color: "#F59E0B", label: "Chikungunya",          d: "M310,110 L420,120 L430,230 L350,260 L300,200 Z" },
  { id: "co", name: "Centro-Oeste",  color: "#F59E0B", label: "Febre amarela",        d: "M200,230 L300,200 L350,260 L320,330 L220,330 Z" },
  { id: "se", name: "Sudeste",       color: "#DC2626", label: "Dengue +38%",          d: "M320,330 L420,310 L430,380 L340,400 Z" },
  { id: "s",  name: "Sul",           color: "#16A34A", label: "Influenza estável",    d: "M260,400 L370,400 L360,470 L240,460 Z" },
];

export const bigNumbers = [
  { v: "1.004", k: "protocolos" },
  { v: "2.000", k: "medicamentos" },
  { v: "53",    k: "calculadoras" },
  { v: "1.265", k: "templates SUS" },
  { v: "30+",   k: "árvores de decisão" },
  { v: "100%",  k: "em português" },
];
