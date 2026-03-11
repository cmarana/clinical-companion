import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ─── Types ───────────────────────────────────────────────────────
type ChatMessage = { role: "user" | "assistant" | "system"; content: string };
type Scenario = "PS" | "UTI" | "UBS" | "SAMU" | "ENFERMARIA" | "HOSPITAL" | "NÃO INFORMADO";
type Focus = "PULMONAR" | "URINÁRIO" | "ABDOMINAL" | "PELE/TECIDOS" | "SNC" | "SEM FOCO DEFINIDO";
type RenalStage = "NORMAL" | "LEVE" | "MODERADA" | "GRAVE" | "DIALÍTICA";

interface PatientData {
  weightKg?: number;
  ageYears?: number;
  creatinineMgDl?: number;
  sex?: "M" | "F";
  allergies?: string;
  scenario: Scenario;
  focus: Focus;
  medicationsInUse: string[];
}

interface RenalCalcResult {
  clcrMlMin?: number;
  stage: RenalStage;
  formula?: string;
  adjustments: string[];
}

interface DoseCalcResult {
  fluid30MlKg?: string;
  noraMinMcgMin?: string;
  noraMaxMcgMin?: string;
  noraDilution: string;
  hepBolus?: string;
  hepMaintenance?: string;
  enoxTherapeutic?: string;
  enoxRenal?: string;
  insulinCAD?: string;
  mgSO4Attack: string;
  complexoPTmin?: string;
  complexoPTmax?: string;
}

interface DrugEntry {
  name: string;
  dose: string;
  renalAdj: Record<string, string>;
  contraindications: string[];
  interactions: string[];
  class: string;
  route: string;
}

interface InteractionAlert {
  pair: string;
  severity: "🔴" | "🟡" | "🟢";
  mechanism: string;
  action: string;
}

interface ProtocolStep {
  order: number;
  action: string;
  target?: string;
}

interface EngineResult {
  patient: PatientData;
  renal: RenalCalcResult;
  doses: DoseCalcResult;
  interactions: InteractionAlert[];
  protocol: { name: string; steps: ProtocolStep[] } | null;
  missingData: string[];
  warnings: string[];
}

// ─── CORS ────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ─── Drug Database ───────────────────────────────────────────────
const DRUG_DB: Record<string, DrugEntry> = {
  noradrenalina: {
    name: "Noradrenalina",
    dose: "0,1-2 mcg/kg/min BIC",
    renalAdj: {},
    contraindications: [],
    interactions: ["Halotano (arritmia)", "IMAO (crise hipertensiva)"],
    class: "Vasopressor",
    route: "IV BIC",
  },
  meropenem: {
    name: "Meropenem",
    dose: "1-2g 8/8h",
    renalAdj: { "26-50": "1g 12/12h", "10-25": "500mg 12/12h", "<10": "500mg 24/24h" },
    contraindications: ["Alergia a carbapenêmicos"],
    interactions: ["Valproato (reduz nível em até 90% — CONTRAINDICADO)", "Probenecida (aumenta nível)"],
    class: "Antibiótico — Carbapenêmico",
    route: "IV",
  },
  "piperacilina-tazobactam": {
    name: "Piperacilina-Tazobactam",
    dose: "4,5g 6/6h",
    renalAdj: { "20-40": "4,5g 8/8h", "<20": "4,5g 12/12h" },
    contraindications: ["Alergia a penicilinas"],
    interactions: ["Metotrexato (toxicidade aumentada)", "Vancomicina (nefrotoxicidade aditiva)"],
    class: "Antibiótico — Penicilina + inibidor beta-lactamase",
    route: "IV",
  },
  vancomicina: {
    name: "Vancomicina",
    dose: "15-20 mg/kg 12/12h (dose de ataque 25-30 mg/kg)",
    renalAdj: { "30-50": "15mg/kg 24/24h", "10-29": "15mg/kg 48/48h ou guiado por nível", "<10": "15mg/kg dose única e monitorar nível" },
    contraindications: ["Alergia a vancomicina (síndrome do homem vermelho com infusão rápida)"],
    interactions: ["Aminoglicosídeos (nefrotoxicidade)", "Piperacilina-tazobactam (nefrotoxicidade)", "Furosemida (ototoxicidade)"],
    class: "Antibiótico — Glicopeptídeo",
    route: "IV",
  },
  ceftriaxona: {
    name: "Ceftriaxona",
    dose: "1-2g 12/12h",
    renalAdj: {},
    contraindications: ["Alergia a cefalosporinas (avaliar reação cruzada com penicilina)", "Neonatos com hiperbilirrubinemia"],
    interactions: ["Cálcio IV (precipitação — NUNCA coadministrar em neonatos)", "Warfarina (aumento de INR)"],
    class: "Antibiótico — Cefalosporina 3ª geração",
    route: "IV/IM",
  },
  enoxaparina: {
    name: "Enoxaparina",
    dose: "1 mg/kg 12/12h (terapêutico) | 40mg 1x/dia (profilático)",
    renalAdj: { "<30": "1mg/kg 1x/dia (terapêutico) ou considerar HNF" },
    contraindications: ["Sangramento ativo", "Plaquetas < 50.000", "Alergia a heparina/HIT"],
    interactions: ["AINEs (sangramento)", "Antiplaquetários (sangramento aditivo)"],
    class: "Anticoagulante — HBPM",
    route: "SC",
  },
  furosemida: {
    name: "Furosemida",
    dose: "40-80mg IV (pode repetir/dobrar conforme resposta)",
    renalAdj: { "<30": "Doses maiores podem ser necessárias (até 200mg)" },
    contraindications: ["Anúria sem resposta a dose teste", "Hipovolemia"],
    interactions: ["Aminoglicosídeos (ototoxicidade)", "Vancomicina (ototoxicidade)", "Digital (hipocalemia potencializa toxicidade)"],
    class: "Diurético de alça",
    route: "IV",
  },
  amiodarona: {
    name: "Amiodarona",
    dose: "PCR: 300mg IV push | TV estável: 150mg/10min → 1mg/min 6h → 0,5mg/min 18h",
    renalAdj: {},
    contraindications: ["Bradicardia sinusal", "BAV 2º/3º grau sem MP", "Disfunção tireoidiana grave"],
    interactions: ["Warfarina (DOBRAR monitoramento INR)", "Digoxina (aumenta nível 70-100%)", "QT-prolongadores"],
    class: "Antiarrítmico classe III",
    route: "IV/VO",
  },
  insulina_regular: {
    name: "Insulina Regular",
    dose: "CAD: 0,1 UI/kg/h IV | Hipercalemia: 10 UI + 25g glicose",
    renalAdj: { "<30": "Reduzir dose 25-50% (menor clearance de insulina)" },
    contraindications: ["Hipoglicemia", "Hipocalemia < 3,3 (corrigir K antes)"],
    interactions: ["Corticoides (hiperglicemia)", "Beta-bloqueadores (mascara hipoglicemia)"],
    class: "Hipoglicemiante",
    route: "IV/SC",
  },
  heparina_nf: {
    name: "Heparina Não Fracionada (HNF)",
    dose: "Bolus 80 UI/kg + 18 UI/kg/h → ajustar por TTPa",
    renalAdj: {},
    contraindications: ["HIT", "Sangramento ativo", "Plaquetas < 50.000"],
    interactions: ["AINEs (sangramento)", "Fibrinolíticos (sangramento grave)"],
    class: "Anticoagulante",
    route: "IV",
  },
  metronidazol: {
    name: "Metronidazol",
    dose: "500mg 8/8h IV",
    renalAdj: { "<10": "Reduzir 50% da dose" },
    contraindications: ["Uso de álcool (efeito dissulfiram)", "Primeiro trimestre gestação (relativo)"],
    interactions: ["Álcool (reação dissulfiram)", "Warfarina (aumento INR)", "Lítio (toxicidade)"],
    class: "Antibiótico — Nitroimidazólico",
    route: "IV/VO",
  },
  ciprofloxacino: {
    name: "Ciprofloxacino",
    dose: "400mg 12/12h IV | 500mg 12/12h VO",
    renalAdj: { "30-50": "400mg 12/12h", "<30": "400mg 24/24h ou 200mg 12/12h" },
    contraindications: ["Alergia a quinolonas", "Miastenia gravis", "Prolongamento QT"],
    interactions: ["Teofilina (toxicidade)", "Warfarina (aumento INR)", "Antiácidos (reduz absorção)", "QT-prolongadores"],
    class: "Antibiótico — Fluoroquinolona",
    route: "IV/VO",
  },
};

// ─── Interaction Database ────────────────────────────────────────
const INTERACTION_PAIRS: { drugs: string[]; severity: "🔴" | "🟡" | "🟢"; mechanism: string; action: string }[] = [
  { drugs: ["vancomicina", "piperacilina-tazobactam"], severity: "🔴", mechanism: "Nefrotoxicidade sinérgica comprovada", action: "Monitorar Cr a cada 24-48h. Considerar trocar pipe-tazo por meropenem ou cefepime." },
  { drugs: ["vancomicina", "furosemida"], severity: "🟡", mechanism: "Ototoxicidade aditiva", action: "Monitorar audiometria se uso prolongado. Monitorar K/Mg." },
  { drugs: ["vancomicina", "aminoglicosideo"], severity: "🔴", mechanism: "Nefro e ototoxicidade sinérgica", action: "Evitar combinação. Se necessário, monitorar níveis séricos de ambas." },
  { drugs: ["meropenem", "valproato"], severity: "🔴", mechanism: "Reduz nível de valproato em até 90%", action: "CONTRAINDICADO. Trocar antibiótico ou anticonvulsivante." },
  { drugs: ["amiodarona", "warfarina"], severity: "🔴", mechanism: "Inibição CYP2C9 — aumento INR", action: "Reduzir warfarina 30-50%. INR seriado." },
  { drugs: ["amiodarona", "digoxina"], severity: "🔴", mechanism: "Aumento nível digoxina 70-100%", action: "Reduzir digoxina 50%. Monitorar nível sérico." },
  { drugs: ["enoxaparina", "aine"], severity: "🟡", mechanism: "Sangramento aditivo", action: "Evitar AINEs. Se indispensável, monitorar sinais de sangramento." },
  { drugs: ["insulina_regular", "betabloqueador"], severity: "🟡", mechanism: "Mascara sinais de hipoglicemia", action: "Monitorar glicemia capilar mais frequentemente." },
  { drugs: ["ciprofloxacino", "teofilina"], severity: "🔴", mechanism: "Inibição CYP1A2 — toxicidade teofilina", action: "Evitar combinação ou reduzir teofilina 30-40%." },
  { drugs: ["metronidazol", "warfarina"], severity: "🟡", mechanism: "Aumento INR", action: "Monitorar INR a cada 2-3 dias." },
];

// ─── Protocols ───────────────────────────────────────────────────
const PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  sepsis: {
    name: "Sepse / Choque Séptico (Surviving Sepsis 2021)",
    steps: [
      { order: 1, action: "Lactato sérico (repetir se > 2)" },
      { order: 2, action: "Hemoculturas (2 pares) ANTES do antibiótico" },
      { order: 3, action: "Antibiótico de amplo espectro em ≤ 1h" },
      { order: 4, action: "Cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4", target: "Iniciar em ≤ 3h" },
      { order: 5, action: "Noradrenalina se PAM < 65 após volume", target: "PAM ≥ 65 mmHg" },
      { order: 6, action: "Reavaliar responsividade a fluidos" },
      { order: 7, action: "Considerar hidrocortisona 200mg/dia se choque refratário a vasopressor" },
      { order: 8, action: "Diurese alvo > 0,5 mL/kg/h" },
      { order: 9, action: "Lactato seriado (queda ≥ 20% em 2h)" },
      { order: 10, action: "UTI se vasopressor necessário" },
    ],
  },
  shock: {
    name: "Choque (Abordagem Geral)",
    steps: [
      { order: 1, action: "Identificar tipo: distributivo, cardiogênico, hipovolêmico, obstrutivo" },
      { order: 2, action: "Acesso venoso calibroso (2 acessos)" },
      { order: 3, action: "Monitorização: PAM, FC, SpO2, diurese" },
      { order: 4, action: "Ressuscitação volêmica se hipovolêmico/distributivo" },
      { order: 5, action: "Vasopressor se PAM < 65 após volume adequado" },
      { order: 6, action: "Ecocardiograma point-of-care" },
      { order: 7, action: "Corrigir causa base" },
    ],
  },
  bleeding: {
    name: "Hemorragia / Choque Hemorrágico",
    steps: [
      { order: 1, action: "Compressão direta / torniquete se hemorragia externa" },
      { order: 2, action: "Acesso calibroso (2 acessos 16-18G)" },
      { order: 3, action: "Tipagem + reserva (protocolo de transfusão maciça se classe III/IV)" },
      { order: 4, action: "Cristaloide aquecido até hemoderivados" },
      { order: 5, action: "Ácido tranexâmico 1g IV em 10min (se < 3h do evento)" },
      { order: 6, action: "Concentrado de hemácias (objetivo Hb > 7)" },
      { order: 7, action: "Corrigir coagulopatia: PFC, plaquetas, crioprecipitado, fibrinogênio" },
      { order: 8, action: "Cirurgia / endoscopia se indicado" },
    ],
  },
  respiratory_failure: {
    name: "Insuficiência Respiratória Aguda",
    steps: [
      { order: 1, action: "O2 suplementar — alvo SpO2 92-96% (88-92% se DPOC)" },
      { order: 2, action: "Avaliar via aérea — IOT se GCS ≤ 8, fadiga, hipoxemia refratária" },
      { order: 3, action: "VNI se EAP ou exacerbação DPOC sem contraindicação" },
      { order: 4, action: "Gasometria arterial" },
      { order: 5, action: "Raio-X tórax" },
      { order: 6, action: "Tratar causa base" },
    ],
  },
  cardiac: {
    name: "SCA / IAM",
    steps: [
      { order: 1, action: "ECG 12 derivações em ≤ 10 min" },
      { order: 2, action: "AAS 200-300mg mastigar" },
      { order: 3, action: "Nitroglicerina SL (se PA > 90 e sem sildenafil)" },
      { order: 4, action: "Troponina seriada (0h e 3h)" },
      { order: 5, action: "Se IAMCSST: CATE em ≤ 90min ou fibrinolítico em ≤ 30min" },
      { order: 6, action: "Anticoagulação (enoxaparina ou HNF)" },
      { order: 7, action: "Dupla antiagregação" },
    ],
  },
  stroke: {
    name: "AVC Agudo",
    steps: [
      { order: 1, action: "TC crânio sem contraste URGENTE (descartar hemorrágico)" },
      { order: 2, action: "Glicemia capilar (descartar hipoglicemia)" },
      { order: 3, action: "Se isquêmico < 4,5h: avaliar trombólise (Alteplase 0,9mg/kg)" },
      { order: 4, action: "PA permissiva (< 220/120 se não trombólise; < 185/110 se trombólise)" },
      { order: 5, action: "Neuroimagem vascular se candidato a trombectomia" },
      { order: 6, action: "NIH Stroke Scale" },
    ],
  },
};

// ─── Parsing Helpers ─────────────────────────────────────────────
function parseNumber(input?: string | null): number | undefined {
  if (!input) return undefined;
  const sanitized = input.replace(/,/g, ".").replace(/[^0-9.]/g, "").trim();
  if (!sanitized) return undefined;
  const n = Number(sanitized);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

function firstMatch(text: string, patterns: RegExp[]): string | undefined {
  for (const p of patterns) {
    const m = text.match(p);
    if (m?.[1]) return m[1].trim();
  }
  return undefined;
}

// ─── MODULE 1: Extract Patient Data ─────────────────────────────
function extractPatient(messages: ChatMessage[]): PatientData {
  const text = messages.filter(m => m.role === "user").map(m => m.content).join("\n");

  const weightRaw = firstMatch(text, [/peso\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)\s*kg/i, /\b([0-9]+(?:[.,][0-9]+)?)\s*kg\b/i]);
  const ageRaw = firstMatch(text, [/idade\s*[:=]\s*([0-9]{1,3})/i, /\b([0-9]{1,3})\s*anos?\b/i]);
  const creatRaw = firstMatch(text, [/creatinina\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)/i, /\bcr\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)/i]);
  const sexRaw = firstMatch(text, [/sexo\s*[:=]\s*(masculino|feminino|m|f)\b/i])?.toLowerCase();

  let sex: "M" | "F" | undefined;
  if (sexRaw) {
    if (sexRaw.includes("masc") || /^m$/.test(sexRaw)) sex = "M";
    if (sexRaw.includes("fem") || /^f$/.test(sexRaw)) sex = "F";
  }

  const allergies = firstMatch(text, [/alergias?\s*[:=]\s*([^\n\]]+)/i]);

  // Extract medications in use
  const medsRaw = firstMatch(text, [/medica[çc][õo]es?\s*(?:em uso|atuais?)?\s*[:=]\s*([^\n]+)/i, /drogas?\s*(?:em uso)?\s*[:=]\s*([^\n]+)/i]);
  const medicationsInUse = medsRaw ? medsRaw.split(/[,;+]/).map(s => s.trim().toLowerCase()).filter(Boolean) : [];

  let scenario: Scenario = "NÃO INFORMADO";
  if (/\bUTI\b/i.test(text)) scenario = "UTI";
  else if (/\bSAMU\b/i.test(text)) scenario = "SAMU";
  else if (/\bUBS\b|atenção primária|ambulatório/i.test(text)) scenario = "UBS";
  else if (/\bPS\b|pronto[-\s]?socorro|emergência|upa/i.test(text)) scenario = "PS";
  else if (/enfermaria/i.test(text)) scenario = "ENFERMARIA";
  else if (/hospitalar|hospital/i.test(text)) scenario = "HOSPITAL";

  let focus: Focus = "SEM FOCO DEFINIDO";
  if (/pulmonar|pneumonia|respirat/i.test(text)) focus = "PULMONAR";
  else if (/urin[aá]r|pielo|cistite|itu/i.test(text)) focus = "URINÁRIO";
  else if (/abdominal|intra[-\s]?abdominal|colecist|apendic|periton/i.test(text)) focus = "ABDOMINAL";
  else if (/pele|tecido|celulite|ferida|partes moles/i.test(text)) focus = "PELE/TECIDOS";
  else if (/mening|sistema nervoso|snc|encefal/i.test(text)) focus = "SNC";

  return {
    weightKg: parseNumber(weightRaw),
    ageYears: parseNumber(ageRaw),
    creatinineMgDl: parseNumber(creatRaw),
    sex,
    allergies,
    scenario,
    focus,
    medicationsInUse,
  };
}

// ─── MODULE 2: Renal Calculator ─────────────────────────────────
function calcRenal(p: PatientData): RenalCalcResult {
  const result: RenalCalcResult = { stage: "NORMAL", adjustments: [] };

  if (!p.ageYears || !p.weightKg || !p.creatinineMgDl || p.creatinineMgDl <= 0) {
    const missing: string[] = [];
    if (!p.ageYears) missing.push("idade");
    if (!p.weightKg) missing.push("peso");
    if (!p.creatinineMgDl) missing.push("creatinina");
    result.formula = `❌ Não calculável — faltam: ${missing.join(", ")}`;
    result.stage = "NORMAL";
    return result;
  }

  const base = ((140 - p.ageYears) * p.weightKg) / (72 * p.creatinineMgDl);
  const sexFactor = p.sex === "F" ? 0.85 : 1;
  const sexLabel = p.sex === "F" ? " × 0,85 (feminino)" : p.sex === "M" ? " (masculino)" : " (sexo não informado — cálculo base masculino)";
  const clcr = Number((base * sexFactor).toFixed(1));

  result.clcrMlMin = clcr;
  result.formula = `Cockcroft-Gault: ((140 - ${p.ageYears}) × ${p.weightKg}) / (72 × ${p.creatinineMgDl})${p.sex === "F" ? " × 0,85" : ""} = ${clcr} mL/min${sexLabel}`;

  if (clcr >= 90) result.stage = "NORMAL";
  else if (clcr >= 60) { result.stage = "LEVE"; result.adjustments.push("Monitorar função renal"); }
  else if (clcr >= 30) {
    result.stage = "MODERADA";
    result.adjustments.push("Ajustar drogas renais");
    result.adjustments.push("Evitar nefrotóxicos se possível");
  } else if (clcr >= 15) {
    result.stage = "GRAVE";
    result.adjustments.push("Ajustar TODAS as drogas de eliminação renal");
    result.adjustments.push("Considerar se diálise indicada");
    result.adjustments.push("Enoxaparina: 1mg/kg 1x/dia ou preferir HNF");
  } else {
    result.stage = "DIALÍTICA";
    result.adjustments.push("Dose para diálise");
    result.adjustments.push("Preferir HNF sobre enoxaparina");
    result.adjustments.push("Avaliar TRS");
  }

  return result;
}

// ─── MODULE 3: Dose Calculator ──────────────────────────────────
function calcDoses(p: PatientData, renal: RenalCalcResult): DoseCalcResult {
  const w = p.weightKg;
  const clcr = renal.clcrMlMin;

  const result: DoseCalcResult = {
    noraDilution: "16mg/250mL SF = 64 mcg/mL",
    mgSO4Attack: "MgSO₄ 50%: 4g (8mL) IV em 20min",
  };

  if (!w) return result; // All weight-based calcs need weight

  // Fluid resuscitation
  const fluid = w * 30;
  result.fluid30MlKg = `30 mL/kg × ${w} kg = ${fluid} mL de cristaloide`;

  // Noradrenaline
  const noraMin = Number((0.1 * w).toFixed(1));
  const noraMax = Number((2 * w).toFixed(1));
  const noraMinMlH = Number((noraMin / 64 * 60).toFixed(1));
  const noraMaxMlH = Number((noraMax / 64 * 60).toFixed(1));
  result.noraMinMcgMin = `Dose mínima: 0,1 mcg/kg/min × ${w} kg = ${noraMin} mcg/min (${noraMinMlH} mL/h na diluição 64mcg/mL)`;
  result.noraMaxMcgMin = `Dose máxima: 2 mcg/kg/min × ${w} kg = ${noraMax} mcg/min (${noraMaxMlH} mL/h)`;

  // Heparin
  const hepBolus = Math.round(80 * w);
  const hepMaint = Math.round(18 * w);
  result.hepBolus = `HNF bolus: 80 UI/kg × ${w} kg = ${hepBolus} UI`;
  result.hepMaintenance = `HNF manutenção: 18 UI/kg/h × ${w} kg = ${hepMaint} UI/h`;

  // Enoxaparin
  const enoxDose = Number((1 * w).toFixed(0));
  result.enoxTherapeutic = `Enoxaparina terapêutica: 1 mg/kg × ${w} kg = ${enoxDose} mg SC 12/12h`;
  if (clcr && clcr < 30) {
    result.enoxRenal = `⚠️ ClCr ${clcr} < 30: ${enoxDose} mg SC 1x/dia OU preferir HNF`;
  }

  // Insulin CAD
  const insulinDose = Number((0.1 * w).toFixed(1));
  result.insulinCAD = `Insulina Regular CAD: 0,1 UI/kg/h × ${w} kg = ${insulinDose} UI/h IV`;

  // Prothrombin complex
  const ptMin = Math.round(25 * w);
  const ptMax = Math.round(50 * w);
  result.complexoPTmin = `Complexo protrombínico 25 UI/kg × ${w} kg = ${ptMin} UI`;
  result.complexoPTmax = `Complexo protrombínico 50 UI/kg × ${w} kg = ${ptMax} UI`;

  return result;
}

// ─── MODULE 4: Interaction Checker ──────────────────────────────
function checkInteractions(medsInUse: string[], prescribedDrugs: string[]): InteractionAlert[] {
  const allDrugs = [...new Set([...medsInUse, ...prescribedDrugs])].map(d => d.toLowerCase());
  const alerts: InteractionAlert[] = [];

  for (const pair of INTERACTION_PAIRS) {
    const found = pair.drugs.every(d => allDrugs.some(ad => ad.includes(d) || d.includes(ad)));
    if (found) {
      alerts.push({
        pair: pair.drugs.join(" + "),
        severity: pair.severity,
        mechanism: pair.mechanism,
        action: pair.action,
      });
    }
  }

  return alerts;
}

// ─── MODULE 5: Protocol Engine ──────────────────────────────────
function selectProtocol(text: string): { name: string; steps: ProtocolStep[] } | null {
  const t = text.toLowerCase();
  if (/sepse|séptico|sepsis|choque séptico/i.test(t)) return PROTOCOLS.sepsis;
  if (/choque|shock|hipoten/i.test(t) && !/séptico/i.test(t)) return PROTOCOLS.shock;
  if (/hemorrag|sangramento|hda|hdb|choque hemorrágico/i.test(t)) return PROTOCOLS.bleeding;
  if (/insuf.*resp|dispneia|hipoxemia|ira\b|irpa/i.test(t)) return PROTOCOLS.respiratory_failure;
  if (/iam|infarto|sca|dor torác|síndrome coronar/i.test(t)) return PROTOCOLS.cardiac;
  if (/avc|acidente vascular|stroke|déficit focal/i.test(t)) return PROTOCOLS.stroke;
  return null;
}

// ─── MODULE 6: Drug Renal Adjustment ────────────────────────────
function getDrugRenalAdjustments(clcr: number | undefined): string[] {
  if (clcr === undefined) return [];
  const adjustments: string[] = [];

  for (const [, drug] of Object.entries(DRUG_DB)) {
    for (const [range, adj] of Object.entries(drug.renalAdj)) {
      let applies = false;
      if (range.startsWith("<")) {
        const val = parseFloat(range.slice(1));
        if (clcr < val) applies = true;
      } else if (range.includes("-")) {
        const [lo, hi] = range.split("-").map(Number);
        if (clcr >= lo && clcr <= hi) applies = true;
      }
      if (applies) {
        adjustments.push(`${drug.name}: ${adj} (ClCr ${clcr} mL/min)`);
      }
    }
  }

  return adjustments;
}

// ─── MODULE 7: Allergy Checker ──────────────────────────────────
function checkAllergies(allergies: string | undefined): string[] {
  if (!allergies) return [];
  const a = allergies.toLowerCase();
  const warnings: string[] = [];

  if (/penicilina|amoxicilina|ampicilina/i.test(a)) {
    warnings.push("🔴 ALERGIA A PENICILINA: Evitar piperacilina-tazobactam, amoxicilina. Reação cruzada com cefalosporinas ~2% (avaliar gravidade da reação). Meropenem geralmente seguro (< 1% cruzada).");
  }
  if (/cefalosporina|ceftriaxona|cefazolina/i.test(a)) {
    warnings.push("🔴 ALERGIA A CEFALOSPORINA: Evitar ceftriaxona, cefepime. Considerar carbapenêmico ou fluoroquinolona.");
  }
  if (/sulfa|sulfametoxazol|bactrim/i.test(a)) {
    warnings.push("🟡 ALERGIA A SULFA: Evitar SMX-TMP. Atenção com furosemida (reação cruzada rara mas possível).");
  }
  if (/heparina|hit/i.test(a)) {
    warnings.push("🔴 ALERGIA/HIT: CONTRAINDICADO heparina e enoxaparina. Usar fondaparinux ou argatroban.");
  }
  if (/aine|anti.?inflamatório|ibuprofeno|diclofenaco/i.test(a)) {
    warnings.push("🟡 ALERGIA A AINE: Evitar AINEs. Usar dipirona/paracetamol (se tolerados). Atenção asma induzida por AINE.");
  }

  return warnings;
}

// ─── MAIN ENGINE: Run all modules ────────────────────────────────
function runEngine(messages: ChatMessage[]): EngineResult {
  const patient = extractPatient(messages);
  const renal = calcRenal(patient);
  const doses = calcDoses(patient, renal);
  const userText = messages.filter(m => m.role === "user").map(m => m.content).join("\n");
  const protocol = selectProtocol(userText);
  const interactions = checkInteractions(patient.medicationsInUse, []);
  const drugRenalAdj = getDrugRenalAdjustments(renal.clcrMlMin);
  const allergyWarnings = checkAllergies(patient.allergies);

  // Collect missing data
  const missingData: string[] = [];
  if (!patient.weightKg) missingData.push("PESO (kg) — necessário para cálculos mg/kg, mL/kg, UI/kg");
  if (!patient.sex) missingData.push("SEXO — necessário para ajuste ClCr (fator 0,85 feminino)");
  if (!patient.ageYears) missingData.push("IDADE — necessário para ClCr e ajustes etários");
  if (!patient.creatinineMgDl) missingData.push("CREATININA — necessário para função renal e ajuste de doses");
  if (!patient.allergies) missingData.push("ALERGIAS — necessário para validação de segurança");
  if (patient.scenario === "NÃO INFORMADO") missingData.push("CENÁRIO (PS/UTI/UBS/SAMU/Enfermaria) — muda conduta e antibiótico");
  if (patient.focus === "SEM FOCO DEFINIDO") missingData.push("FOCO INFECCIOSO (se suspeita infecciosa) — muda escolha de antibiótico");

  // Warnings
  const warnings = [...allergyWarnings];
  if (renal.stage === "GRAVE" || renal.stage === "DIALÍTICA") {
    warnings.push(`🔴 DRC ${renal.stage} (ClCr ${renal.clcrMlMin} mL/min) — Ajustar doses de TODAS as drogas renais`);
  }
  for (const adj of drugRenalAdj) {
    warnings.push(`💊 AJUSTE RENAL: ${adj}`);
  }

  return { patient, renal, doses, interactions, protocol, missingData, warnings };
}

// ─── Format Engine Result for AI Context ─────────────────────────
function formatEngineContext(e: EngineResult): string {
  const lines: string[] = [];
  lines.push("═══ MOTOR CLÍNICO — DADOS PRÉ-CALCULADOS (use estes valores, NÃO recalcule) ═══\n");

  // Patient
  lines.push("📊 DADOS DO PACIENTE:");
  lines.push(`  Peso: ${e.patient.weightKg ? `${e.patient.weightKg} kg ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Idade: ${e.patient.ageYears ? `${e.patient.ageYears} anos ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Sexo: ${e.patient.sex ? `${e.patient.sex} ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Creatinina: ${e.patient.creatinineMgDl ? `${e.patient.creatinineMgDl} mg/dL ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Alergias: ${e.patient.allergies ? `"${e.patient.allergies}" ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Cenário: ${e.patient.scenario}`);
  lines.push(`  Foco: ${e.patient.focus}`);
  lines.push(`  Medicações em uso: ${e.patient.medicationsInUse.length ? e.patient.medicationsInUse.join(", ") : "não informadas"}`);

  // Renal
  lines.push("\n🧪 FUNÇÃO RENAL:");
  lines.push(`  ${e.renal.formula}`);
  if (e.renal.clcrMlMin !== undefined) {
    lines.push(`  Estágio: DRC ${e.renal.stage} (ClCr ${e.renal.clcrMlMin} mL/min)`);
  }
  if (e.renal.adjustments.length) {
    lines.push(`  Ajustes: ${e.renal.adjustments.join("; ")}`);
  }

  // Doses
  lines.push("\n💊 DOSES CALCULADAS PELO MOTOR (copie exatamente estes valores):");
  if (!e.patient.weightKg) {
    lines.push("  ⚠️ PESO NÃO INFORMADO — todas as doses por kg estão PENDENTES. NÃO INVENTE PESO.");
  } else {
    if (e.doses.fluid30MlKg) lines.push(`  ${e.doses.fluid30MlKg}`);
    lines.push(`  Diluição nora: ${e.doses.noraDilution}`);
    if (e.doses.noraMinMcgMin) lines.push(`  ${e.doses.noraMinMcgMin}`);
    if (e.doses.noraMaxMcgMin) lines.push(`  ${e.doses.noraMaxMcgMin}`);
    if (e.doses.hepBolus) lines.push(`  ${e.doses.hepBolus}`);
    if (e.doses.hepMaintenance) lines.push(`  ${e.doses.hepMaintenance}`);
    if (e.doses.enoxTherapeutic) lines.push(`  ${e.doses.enoxTherapeutic}`);
    if (e.doses.enoxRenal) lines.push(`  ${e.doses.enoxRenal}`);
    if (e.doses.insulinCAD) lines.push(`  ${e.doses.insulinCAD}`);
    lines.push(`  ${e.doses.mgSO4Attack}`);
    if (e.doses.complexoPTmin) lines.push(`  ${e.doses.complexoPTmin}`);
    if (e.doses.complexoPTmax) lines.push(`  ${e.doses.complexoPTmax}`);
  }

  // Vancomycin dose with weight
  if (e.patient.weightKg) {
    const w = e.patient.weightKg;
    const vancoStd = Math.round(15 * w);
    const vancoMax = Math.round(20 * w);
    const vancoAtaque = Math.round(25 * w);
    lines.push(`  Vancomicina manutenção: 15-20 mg/kg × ${w} kg = ${vancoStd}-${vancoMax} mg 12/12h`);
    lines.push(`  Vancomicina dose ataque: 25 mg/kg × ${w} kg = ${vancoAtaque} mg`);
    if (e.renal.clcrMlMin !== undefined && e.renal.clcrMlMin < 50) {
      const adj = e.renal.clcrMlMin >= 30 ? `${vancoStd} mg 24/24h` : `${vancoStd} mg 48/48h ou por nível`;
      lines.push(`  ⚠️ AJUSTE RENAL vancomicina (ClCr ${e.renal.clcrMlMin}): ${adj}`);
    }
  }

  // Interactions
  if (e.interactions.length) {
    lines.push("\n⚠️ INTERAÇÕES DETECTADAS:");
    for (const ia of e.interactions) {
      lines.push(`  ${ia.severity} ${ia.pair}: ${ia.mechanism} → ${ia.action}`);
    }
  }

  // Protocol
  if (e.protocol) {
    lines.push(`\n📋 PROTOCOLO SELECIONADO: ${e.protocol.name}`);
    for (const s of e.protocol.steps) {
      lines.push(`  ${s.order}. ${s.action}${s.target ? ` → ALVO: ${s.target}` : ""}`);
    }
  }

  // Warnings
  if (e.warnings.length) {
    lines.push("\n🚨 ALERTAS DO MOTOR:");
    for (const w of e.warnings) {
      lines.push(`  ${w}`);
    }
  }

  // Missing
  if (e.missingData.length) {
    lines.push("\n❓ DADOS FALTANTES (OBRIGATÓRIO perguntar ao usuário na seção PERGUNTAS):");
    for (const m of e.missingData) {
      lines.push(`  - ${m}`);
    }
  }

  lines.push("\n═══ FIM DO MOTOR CLÍNICO ═══");
  return lines.join("\n");
}

// ─── System Prompt (leaner — engine does the math) ──────────────
const SYSTEM_PROMPT = `Você é um assistente clínico para plantão no Brasil. Você NÃO calcula — o MOTOR CLÍNICO já calculou tudo. Você organiza e explica.

REGRAS ABSOLUTAS:
1. Use EXATAMENTE os valores do motor clínico. NÃO recalcule. NÃO invente peso.
2. Se o motor marcou dado como ❌, pergunte ao usuário. NÃO assuma valor.
3. Se o motor calculou dose, copie exatamente o valor. NÃO arredonde diferente.
4. Comece pela AÇÃO. Máximo 1 frase antes das prioridades.

FORMATO (nesta ordem, todas as seções):
1. 📋 RESUMO — 1-2 linhas. Impressão + gravidade.
2. 🎯 DIAGNÓSTICO — hipótese principal + 2-3 diferenciais (tabela: Hipótese | Probabilidade | Argumento).
3. ⚡ PRIORIDADES — 1-5 ações IMEDIATAS (verbo imperativo).
4. 🔄 ALGORITMO — fluxo com setas (→ ↓).
5. 🔬 EXAMES — "Imediatos" e "Complementares".
6. 💊 CONDUTA + PRESCRIÇÃO — copie doses do motor. Mostre fórmula + resultado.
7. ⚠️ INTERAÇÕES — copie alertas do motor + adicione renal, eletrólitos, idade.
8. 🚨 ALERTAS — red flags, contraindicações.
9. 📚 REFERÊNCIAS — diretrizes brasileiras.
10. ❓ PERGUNTAS — 2-5 perguntas. OBRIGATÓRIO incluir dados faltantes do motor.

Para antibióticos: SEMPRE adaptar por foco, cenário, comunitário vs hospitalar. Se não informado, perguntar ANTES.

DISCLAIMER: apoio à decisão clínica; responsabilidade final é do médico.`;

// ─── Serve ───────────────────────────────────────────────────────
serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const mode = body?.mode;

    const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
    const messages: ChatMessage[] = rawMessages
      .map((m: unknown) => {
        const msg = m as Record<string, unknown>;
        const role = typeof msg?.role === "string" ? msg.role : "user";
        const content = typeof msg?.content === "string" ? msg.content : "";
        return {
          role: (role === "assistant" || role === "system" ? role : "user") as ChatMessage["role"],
          content: content.slice(0, 12000),
        };
      })
      .filter((m) => m.content.trim().length > 0);

    if (!messages.length) {
      return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // ─── RUN CLINICAL ENGINE ───
    const engineResult = runEngine(messages);
    const engineContext = formatEngineContext(engineResult);

    // Build system messages
    const systemMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "system", content: engineContext },
    ];

    if (mode === "structured") {
      systemMessages.push({ role: "system", content: "Modo estruturado ativo. Priorize checklist de ações imediatas." });
    }
    if (mode === "interactions") {
      systemMessages.push({ role: "system", content: "Modo interações: classifique cada combinação 🔴🟡🟢, mecanismo, impacto, conduta." });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [...systemMessages, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("clinical-ai error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
