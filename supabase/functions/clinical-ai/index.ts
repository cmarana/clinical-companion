import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ─── Types ───────────────────────────────────────────────────────
type ChatMessage = { role: "user" | "assistant" | "system"; content: string };
type Scenario = "PS" | "UTI" | "UBS" | "SAMU" | "ENFERMARIA" | "HOSPITAL" | "NÃO INFORMADO";
type Focus = "PULMONAR" | "URINÁRIO" | "ABDOMINAL" | "PELE/TECIDOS" | "SNC" | "SEM FOCO DEFINIDO";
type RenalStage = "NORMAL" | "LEVE" | "MODERADA" | "GRAVE" | "DIALÍTICA";
type InfectionOrigin = "COMUNITÁRIA" | "HOSPITALAR" | "NÃO DEFINIDA";

interface PatientData {
  weightKg?: number;
  ageYears?: number;
  creatinineMgDl?: number;
  sex?: "M" | "F";
  allergies?: string;
  scenario: Scenario;
  focus: Focus;
  infectionOrigin: InfectionOrigin;
  medicationsInUse: string[];
  // Risk factors for resistant organisms
  riskFactors: {
    previousICU: boolean;
    recentATB: boolean;
    catheter: boolean;
    ventilated: boolean;
    hospitalized30d: boolean;
    immunosuppressed: boolean;
  };
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
  qtProlongation?: boolean;
}

interface InteractionAlert {
  pair: string;
  severity: "🔴" | "🟡" | "🟢";
  mechanism: string;
  action: string;
}

interface AntibioticRecommendation {
  primary: string;
  alternatives: string[];
  rationale: string;
  coverageNeeded: string[];
  questionsNeeded: string[];
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
  antibiotic: AntibioticRecommendation | null;
  missingData: string[];
  warnings: string[];
  dataValidation: { complete: boolean; missing: string[]; score: number };
}

// ─── CORS ────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ─── Drug Database ───────────────────────────────────────────────
const DRUG_DB: Record<string, DrugEntry> = {
  noradrenalina: {
    name: "Noradrenalina", dose: "0,1-2 mcg/kg/min BIC",
    renalAdj: {}, contraindications: [],
    interactions: ["Halotano (arritmia)", "IMAO (crise hipertensiva)"],
    class: "Vasopressor", route: "IV BIC",
  },
  meropenem: {
    name: "Meropenem", dose: "1-2g 8/8h",
    renalAdj: { "26-50": "1g 12/12h", "10-25": "500mg 12/12h", "<10": "500mg 24/24h" },
    contraindications: ["Alergia a carbapenêmicos"],
    interactions: ["Valproato (reduz nível em até 90% — CONTRAINDICADO)", "Probenecida (aumenta nível)"],
    class: "Antibiótico — Carbapenêmico", route: "IV",
  },
  "piperacilina-tazobactam": {
    name: "Piperacilina-Tazobactam", dose: "4,5g 6/6h",
    renalAdj: { "20-40": "4,5g 8/8h", "<20": "4,5g 12/12h" },
    contraindications: ["Alergia a penicilinas"],
    interactions: ["Metotrexato (toxicidade aumentada)", "Vancomicina (nefrotoxicidade aditiva)"],
    class: "Antibiótico — Penicilina + inibidor beta-lactamase", route: "IV",
  },
  vancomicina: {
    name: "Vancomicina", dose: "15-20 mg/kg 12/12h (dose de ataque 25-30 mg/kg)",
    renalAdj: { "30-50": "15mg/kg 24/24h", "10-29": "15mg/kg 48/48h ou guiado por nível", "<10": "15mg/kg dose única e monitorar nível" },
    contraindications: ["Alergia a vancomicina"],
    interactions: ["Aminoglicosídeos (nefrotoxicidade)", "Piperacilina-tazobactam (nefrotoxicidade)", "Furosemida (ototoxicidade)"],
    class: "Antibiótico — Glicopeptídeo", route: "IV",
  },
  ceftriaxona: {
    name: "Ceftriaxona", dose: "1-2g 12/12h",
    renalAdj: {}, contraindications: ["Alergia a cefalosporinas", "Neonatos com hiperbilirrubinemia"],
    interactions: ["Cálcio IV (precipitação em neonatos)", "Warfarina (aumento de INR)"],
    class: "Antibiótico — Cefalosporina 3ª geração", route: "IV/IM",
  },
  cefepime: {
    name: "Cefepime", dose: "2g 8/8h",
    renalAdj: { "30-60": "2g 12/12h", "11-29": "2g 24/24h", "<11": "1g 24/24h" },
    contraindications: ["Alergia a cefalosporinas"],
    interactions: ["Aminoglicosídeos (nefrotoxicidade)", "Warfarina (aumento INR)"],
    class: "Antibiótico — Cefalosporina 4ª geração (anti-Pseudomonas)", route: "IV",
  },
  gentamicina: {
    name: "Gentamicina", dose: "5-7 mg/kg/dia dose única ou dividida 8/8h",
    renalAdj: { "40-60": "Estender intervalo 12/12h", "20-40": "Estender intervalo 24/24h", "<20": "Dose por nível sérico" },
    contraindications: ["Miastenia gravis"],
    interactions: ["Vancomicina (nefro+ototoxicidade)", "Furosemida (ototoxicidade)", "Bloqueadores neuromusculares (potencializa)"],
    class: "Antibiótico — Aminoglicosídeo", route: "IV/IM",
  },
  "ampicilina-sulbactam": {
    name: "Ampicilina-Sulbactam", dose: "3g 6/6h",
    renalAdj: { "15-29": "3g 12/12h", "<15": "3g 24/24h" },
    contraindications: ["Alergia a penicilinas"],
    interactions: ["Alopurinol (rash aumentado)", "Metotrexato (toxicidade)"],
    class: "Antibiótico — Penicilina + inibidor beta-lactamase", route: "IV",
  },
  levofloxacino: {
    name: "Levofloxacino", dose: "750mg 1x/dia",
    renalAdj: { "20-49": "750mg 48/48h", "<20": "500mg 48/48h" },
    contraindications: ["Alergia a quinolonas", "Miastenia gravis", "Prolongamento QT"],
    interactions: ["Warfarina (aumento INR)", "QT-prolongadores", "Antiácidos (reduz absorção)"],
    class: "Antibiótico — Fluoroquinolona", route: "IV/VO", qtProlongation: true,
  },
  clindamicina: {
    name: "Clindamicina", dose: "600-900mg 8/8h",
    renalAdj: {},
    contraindications: ["Colite pseudomembranosa prévia"],
    interactions: ["Bloqueadores neuromusculares (potencializa)", "Eritromicina (antagonismo)"],
    class: "Antibiótico — Lincosamida", route: "IV/VO",
  },
  azitromicina: {
    name: "Azitromicina", dose: "500mg 1x/dia",
    renalAdj: {},
    contraindications: ["Prolongamento QT", "Hepatopatia grave"],
    interactions: ["QT-prolongadores", "Warfarina (aumento INR)", "Digoxina (aumento nível)"],
    class: "Antibiótico — Macrolídeo", route: "IV/VO", qtProlongation: true,
  },
  hidrocortisona: {
    name: "Hidrocortisona", dose: "Choque refratário: 200mg/dia (50mg 6/6h) | Insuf. adrenal: 100mg bolus + 50mg 8/8h",
    renalAdj: {},
    contraindications: ["Infecção fúngica sistêmica não tratada"],
    interactions: ["Insulina (hiperglicemia)", "AINEs (risco GI)", "Warfarina (efeito variável)"],
    class: "Corticoide", route: "IV",
  },
  dexametasona: {
    name: "Dexametasona", dose: "Meningite: 0,15mg/kg 6/6h 4 dias | Anti-emético: 4-8mg",
    renalAdj: {},
    contraindications: ["Infecção fúngica sistêmica não tratada"],
    interactions: ["Insulina (hiperglicemia)", "AINEs (risco GI)"],
    class: "Corticoide", route: "IV",
  },
  enoxaparina: {
    name: "Enoxaparina", dose: "1 mg/kg 12/12h (terapêutico) | 40mg 1x/dia (profilático)",
    renalAdj: { "<30": "1mg/kg 1x/dia (terapêutico) ou considerar HNF" },
    contraindications: ["Sangramento ativo", "Plaquetas < 50.000", "Alergia a heparina/HIT"],
    interactions: ["AINEs (sangramento)", "Antiplaquetários (sangramento aditivo)"],
    class: "Anticoagulante — HBPM", route: "SC",
  },
  furosemida: {
    name: "Furosemida", dose: "40-80mg IV",
    renalAdj: { "<30": "Doses maiores podem ser necessárias (até 200mg)" },
    contraindications: ["Anúria sem resposta a dose teste", "Hipovolemia"],
    interactions: ["Aminoglicosídeos (ototoxicidade)", "Vancomicina (ototoxicidade)", "Digital (hipocalemia → toxicidade)"],
    class: "Diurético de alça", route: "IV",
  },
  amiodarona: {
    name: "Amiodarona", dose: "PCR: 300mg IV push | TV estável: 150mg/10min → 1mg/min 6h → 0,5mg/min 18h",
    renalAdj: {}, contraindications: ["Bradicardia sinusal", "BAV 2º/3º grau sem MP", "Disfunção tireoidiana grave"],
    interactions: ["Warfarina (DOBRAR monitoramento INR)", "Digoxina (aumenta nível 70-100%)", "QT-prolongadores"],
    class: "Antiarrítmico classe III", route: "IV/VO", qtProlongation: true,
  },
  insulina_regular: {
    name: "Insulina Regular", dose: "CAD: 0,1 UI/kg/h IV | Hipercalemia: 10 UI + 25g glicose",
    renalAdj: { "<30": "Reduzir dose 25-50%" },
    contraindications: ["Hipoglicemia", "Hipocalemia < 3,3 (corrigir K antes)"],
    interactions: ["Corticoides (hiperglicemia)", "Beta-bloqueadores (mascara hipoglicemia)"],
    class: "Hipoglicemiante", route: "IV/SC",
  },
  heparina_nf: {
    name: "Heparina Não Fracionada (HNF)", dose: "Bolus 80 UI/kg + 18 UI/kg/h → ajustar por TTPa",
    renalAdj: {}, contraindications: ["HIT", "Sangramento ativo", "Plaquetas < 50.000"],
    interactions: ["AINEs (sangramento)", "Fibrinolíticos (sangramento grave)"],
    class: "Anticoagulante", route: "IV",
  },
  metronidazol: {
    name: "Metronidazol", dose: "500mg 8/8h IV",
    renalAdj: { "<10": "Reduzir 50% da dose" },
    contraindications: ["Uso de álcool", "Primeiro trimestre gestação (relativo)"],
    interactions: ["Álcool (reação dissulfiram)", "Warfarina (aumento INR)", "Lítio (toxicidade)"],
    class: "Antibiótico — Nitroimidazólico", route: "IV/VO",
  },
  ciprofloxacino: {
    name: "Ciprofloxacino", dose: "400mg 12/12h IV | 500mg 12/12h VO",
    renalAdj: { "30-50": "400mg 12/12h", "<30": "400mg 24/24h ou 200mg 12/12h" },
    contraindications: ["Alergia a quinolonas", "Miastenia gravis", "Prolongamento QT"],
    interactions: ["Teofilina (toxicidade)", "Warfarina (aumento INR)", "Antiácidos (reduz absorção)", "QT-prolongadores"],
    class: "Antibiótico — Fluoroquinolona", route: "IV/VO", qtProlongation: true,
  },
  alteplase: {
    name: "Alteplase (tPA)", dose: "AVC: 0,9mg/kg (máx 90mg), 10% bolus + 90% em 1h | IAM: 15mg bolus + 0,75mg/kg 30min + 0,5mg/kg 60min",
    renalAdj: {},
    contraindications: ["Sangramento ativo", "AVC hemorrágico", "Cirurgia/trauma < 14d", "PA > 185/110 (AVC)"],
    interactions: ["Anticoagulantes (sangramento grave)", "Antiplaquetários (sangramento)"],
    class: "Fibrinolítico", route: "IV",
  },
  losartana: {
    name: "Losartana", dose: "50-100mg 1x/dia",
    renalAdj: { "<30": "Iniciar 25mg, monitorar K e Cr" },
    contraindications: ["Gestação", "Hipercalemia > 5,5", "Estenose bilateral artéria renal"],
    interactions: ["IECA (hipercalemia)", "Espironolactona (hipercalemia)", "AINEs (reduz efeito + piora renal)", "Lítio (toxicidade)"],
    class: "Anti-hipertensivo — BRA", route: "VO",
  },
};

// ─── Interaction Database ────────────────────────────────────────
const INTERACTION_PAIRS: { drugs: string[]; severity: "🔴" | "🟡"; mechanism: string; action: string }[] = [
  { drugs: ["vancomicina", "piperacilina-tazobactam"], severity: "🔴", mechanism: "Nefrotoxicidade sinérgica comprovada", action: "Monitorar Cr 24-48h. Considerar meropenem ou cefepime." },
  { drugs: ["vancomicina", "furosemida"], severity: "🟡", mechanism: "Ototoxicidade aditiva", action: "Monitorar audiometria. Monitorar K/Mg." },
  { drugs: ["vancomicina", "gentamicina"], severity: "🔴", mechanism: "Nefro e ototoxicidade sinérgica", action: "Evitar. Se necessário, monitorar níveis séricos." },
  { drugs: ["meropenem", "valproato"], severity: "🔴", mechanism: "Reduz valproato em até 90%", action: "CONTRAINDICADO. Trocar ATB ou anticonvulsivante." },
  { drugs: ["amiodarona", "warfarina"], severity: "🔴", mechanism: "Inibição CYP2C9 → aumento INR", action: "Reduzir warfarina 30-50%. INR seriado." },
  { drugs: ["amiodarona", "digoxina"], severity: "🔴", mechanism: "Aumento digoxina 70-100%", action: "Reduzir digoxina 50%. Monitorar nível." },
  { drugs: ["amiodarona", "ciprofloxacino"], severity: "🔴", mechanism: "Prolongamento QT aditivo → Torsades de Pointes", action: "EVITAR combinação. Se necessário, monitorar QTc seriado e Mg/K." },
  { drugs: ["amiodarona", "levofloxacino"], severity: "🔴", mechanism: "Prolongamento QT aditivo → Torsades de Pointes", action: "EVITAR combinação. Se necessário, monitorar QTc seriado e Mg/K." },
  { drugs: ["amiodarona", "azitromicina"], severity: "🔴", mechanism: "Prolongamento QT aditivo → Torsades de Pointes", action: "EVITAR combinação. Considerar outro macrolídeo ou ATB." },
  { drugs: ["enoxaparina", "aine"], severity: "🟡", mechanism: "Sangramento aditivo", action: "Evitar AINEs. Monitorar sinais de sangramento." },
  { drugs: ["insulina_regular", "betabloqueador"], severity: "🟡", mechanism: "Mascara hipoglicemia", action: "Monitorar glicemia capilar frequente." },
  { drugs: ["ciprofloxacino", "teofilina"], severity: "🔴", mechanism: "Inibição CYP1A2 → toxicidade teofilina", action: "Evitar ou reduzir teofilina 30-40%." },
  { drugs: ["metronidazol", "warfarina"], severity: "🟡", mechanism: "Aumento INR", action: "Monitorar INR 2-3 dias." },
  { drugs: ["losartana", "espironolactona"], severity: "🟡", mechanism: "Hipercalemia aditiva", action: "Monitorar K a cada 24-48h. Alvo K < 5,0." },
  { drugs: ["losartana", "aine"], severity: "🟡", mechanism: "Reduz efeito anti-hipertensivo + piora função renal", action: "Evitar AINEs. Monitorar Cr e PA." },
];

// ─── Antibiotic Selection Engine ─────────────────────────────────
function selectAntibiotic(patient: PatientData, renal: RenalCalcResult): AntibioticRecommendation | null {
  const { focus, scenario, infectionOrigin, riskFactors, allergies } = patient;
  const isHospital = infectionOrigin === "HOSPITALAR" || scenario === "UTI" || riskFactors.previousICU || riskFactors.hospitalized30d;
  const hasResistanceRisk = riskFactors.recentATB || riskFactors.catheter || riskFactors.ventilated || isHospital;
  const penicillinAllergy = allergies ? /penicilina|amoxicilina|ampicilina/i.test(allergies) : false;

  const questionsNeeded: string[] = [];
  if (infectionOrigin === "NÃO DEFINIDA") questionsNeeded.push("Infecção comunitária ou hospitalar?");
  if (!riskFactors.previousICU && scenario === "UTI") questionsNeeded.push("UTI prévia nos últimos 90 dias?");
  if (!riskFactors.recentATB) questionsNeeded.push("Uso de antibiótico nos últimos 90 dias?");
  if (scenario === "UTI" && !riskFactors.catheter) questionsNeeded.push("Cateter venoso central / SVD / outros dispositivos?");
  if (scenario === "UTI" && !riskFactors.ventilated) questionsNeeded.push("Em ventilação mecânica?");

  let primary = "";
  let alternatives: string[] = [];
  let rationale = "";
  let coverageNeeded: string[] = [];

  if (focus === "PULMONAR") {
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["Pseudomonas", "MRSA", "Gram-negativos MDR"];
      if (penicillinAllergy) {
        primary = "Meropenem 1g 8/8h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Cefepime 2g 8/8h + Vancomicina (se alergia penicilina leve)", "Aztreonam + Vancomicina (se alergia grave)"];
      } else {
        primary = "Piperacilina-Tazobactam 4,5g 6/6h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Meropenem 1g 8/8h + Vancomicina", "Cefepime 2g 8/8h + Vancomicina"];
      }
      rationale = "Pneumonia hospitalar/associada a VM: cobertura anti-Pseudomonas + MRSA obrigatória (ATS/IDSA 2016).";
    } else {
      coverageNeeded = ["S. pneumoniae", "H. influenzae", "Atípicos"];
      primary = "Ceftriaxona 1g 12/12h + Azitromicina 500mg 1x/dia";
      alternatives = ["Levofloxacino 750mg 1x/dia (monoterapia)", "Ampicilina-Sulbactam 3g 6/6h + Azitromicina"];
      rationale = "PAC grave internada: beta-lactâmico + macrolídeo (BTS/IDSA 2019).";
    }
  } else if (focus === "URINÁRIO") {
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["E. coli ESBL", "Pseudomonas", "Enterococcus"];
      primary = "Meropenem 1g 8/8h";
      alternatives = ["Piperacilina-Tazobactam 4,5g 6/6h", "Cefepime 2g 8/8h"];
      rationale = "ITU complicada hospitalar: cobertura ESBL. Avaliar urocultura prévia.";
    } else {
      coverageNeeded = ["E. coli", "Klebsiella", "Proteus"];
      primary = "Ceftriaxona 1g 12/12h";
      alternatives = ["Ciprofloxacino 400mg 12/12h IV", "Ampicilina-Sulbactam 3g 6/6h"];
      rationale = "Pielonefrite comunitária: cefalosporina 3ª geração.";
    }
  } else if (focus === "ABDOMINAL") {
    coverageNeeded = ["Gram-negativos", "Anaeróbios", "Enterococcus"];
    if (isHospital || hasResistanceRisk) {
      primary = "Meropenem 1g 8/8h ± Vancomicina (se risco Enterococcus resistente)";
      alternatives = ["Piperacilina-Tazobactam 4,5g 6/6h"];
      rationale = "Infecção intra-abdominal hospitalar: carbapenêmico (SIS/IDSA 2017).";
    } else {
      primary = "Ceftriaxona 1g 12/12h + Metronidazol 500mg 8/8h";
      alternatives = ["Ampicilina-Sulbactam 3g 6/6h", "Piperacilina-Tazobactam 4,5g 6/6h"];
      rationale = "Infecção intra-abdominal comunitária: cef3 + anaerobicida.";
    }
  } else if (focus === "PELE/TECIDOS") {
    coverageNeeded = ["S. aureus (MSSA/MRSA)", "Streptococcus", "Anaeróbios (se necrotizante)"];
    if (isHospital || hasResistanceRisk) {
      primary = "Vancomicina 15-20mg/kg 12/12h + Piperacilina-Tazobactam 4,5g 6/6h (se necrotizante)";
      alternatives = ["Vancomicina + Meropenem", "Daptomicina 6-8mg/kg/dia"];
      rationale = "Infecção de pele hospitalar/necrotizante: cobrir MRSA + gram-negativos + anaeróbios.";
    } else {
      primary = "Cefazolina 2g 8/8h (celulite simples) | Clindamicina 600mg 8/8h (se alergia penicilina)";
      alternatives = ["Oxacilina 2g 4/4h"];
      rationale = "Celulite comunitária: anti-estafilocócica.";
    }
  } else if (focus === "SNC") {
    coverageNeeded = ["S. pneumoniae", "N. meningitidis", "Listeria (se > 50a ou imunossuprimido)"];
    primary = "Ceftriaxona 2g 12/12h + Dexametasona 0,15mg/kg 6/6h (iniciar antes/junto ATB)";
    if (patient.ageYears && patient.ageYears > 50) {
      primary += " + Ampicilina 2g 4/4h (cobertura Listeria)";
    }
    alternatives = ["Meropenem 2g 8/8h (se alergia cefalosporina)"];
    rationale = "Meningite bacteriana: cef3 + dexametasona ± ampicilina (IDSA 2004/ESCMID 2016).";
  } else {
    // Sem foco definido — sepse sem foco
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["Gram-positivos (MRSA)", "Gram-negativos (Pseudomonas)", "Anaeróbios"];
      primary = "Meropenem 1g 8/8h + Vancomicina 15-20mg/kg 12/12h";
      alternatives = ["Piperacilina-Tazobactam 4,5g 6/6h + Vancomicina", "Cefepime 2g 8/8h + Vancomicina + Metronidazol"];
      rationale = "Sepse sem foco hospitalar: espectro amplo cobrindo MRSA + Pseudomonas + anaeróbios.";
    } else {
      coverageNeeded = ["Gram-positivos", "Gram-negativos", "Atípicos"];
      primary = "Ceftriaxona 1g 12/12h + Metronidazol 500mg 8/8h (se suspeita abdominal)";
      alternatives = ["Piperacilina-Tazobactam 4,5g 6/6h", "Levofloxacino 750mg 1x/dia"];
      rationale = "Sepse comunitária sem foco: cefalosporina amplo espectro. Definir foco para estreitar.";
    }
  }

  // Renal adjustments for selected drugs
  if (renal.clcrMlMin !== undefined && renal.clcrMlMin < 50) {
    rationale += ` ⚠️ Ajustar doses para ClCr ${renal.clcrMlMin} mL/min.`;
  }

  return { primary, alternatives, rationale, coverageNeeded, questionsNeeded };
}

// ─── Protocols ───────────────────────────────────────────────────
const PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  sepsis: {
    name: "Sepse / Choque Séptico — Bundle 1 Hora (Surviving Sepsis 2021)",
    steps: [
      { order: 1, action: "Lactato sérico IMEDIATO (repetir em 2-4h se > 2 mmol/L)", target: "Queda ≥ 20% em 2h" },
      { order: 2, action: "Hemoculturas (2 pares de sítios diferentes) ANTES do antibiótico" },
      { order: 3, action: "Antibiótico de amplo espectro em ≤ 1 HORA (ver recomendação do motor)" },
      { order: 4, action: "Cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4 mmol/L", target: "Iniciar em ≤ 3h, completar com reavaliação" },
      { order: 5, action: "Noradrenalina se PAM < 65 mmHg após volume adequado", target: "PAM ≥ 65 mmHg" },
      { order: 6, action: "Reavaliar responsividade a fluidos (elevação passiva de MMII, variação PP, eco POCUS)" },
      { order: 7, action: "Diurese alvo > 0,5 mL/kg/h — SVD para monitoração" },
      { order: 8, action: "Balanço hídrico rigoroso a cada 6h" },
      { order: 9, action: "Lactato seriado (repetir a cada 2-4h até normalização)" },
      { order: 10, action: "Hidrocortisona 200mg/dia (50mg 6/6h) se choque refratário a vasopressor ≥ 4h" },
      { order: 11, action: "Considerar TRS (diálise) se: oligúria refratária, hipercalemia, acidose metabólica grave, sobrecarga hídrica" },
      { order: 12, action: "Glicemia capilar 4/4h → insulina se > 180 mg/dL", target: "Glicemia 140-180 mg/dL" },
      { order: 13, action: "Profilaxia TVP (enoxaparina ou HNF se ClCr < 30)" },
      { order: 14, action: "Profilaxia úlcera de estresse (omeprazol 40mg 1x/dia)" },
      { order: 15, action: "Reavaliação antibiótica em 48-72h com culturas" },
    ],
  },
  sepsis_uti: {
    name: "Sepse em UTI — Protocolo Completo",
    steps: [
      { order: 1, action: "ACESSO CENTRAL (duplo lúmen) — para vasopressor e monitoração PVC" },
      { order: 2, action: "PAI — Pressão Arterial Invasiva (linha arterial)", target: "PAM ≥ 65 mmHg contínua" },
      { order: 3, action: "Monitor multiparamétrico: ECG contínuo, SpO2, EtCO2, PAI, PVC" },
      { order: 4, action: "Lactato sérico IMEDIATO + seriado a cada 2h", target: "Queda ≥ 20% em 2h" },
      { order: 5, action: "Hemoculturas (2 pares) + culturas de todos os sítios suspeitos ANTES do ATB" },
      { order: 6, action: "Antibiótico amplo espectro em ≤ 1 HORA (ver recomendação motor)" },
      { order: 7, action: "Cristaloide 30 mL/kg em bolus", target: "Iniciar imediatamente" },
      { order: 8, action: "Noradrenalina se PAM < 65 após volume — iniciar PRECOCE", target: "PAM ≥ 65 mmHg" },
      { order: 9, action: "Vasopressina 0,03 UI/min como 2º vasopressor se nora > 0,5 mcg/kg/min" },
      { order: 10, action: "Reavaliar volemia: eco POCUS, variação PP, elevação passiva MMII" },
      { order: 11, action: "SVD — diurese horária", target: "Diurese > 0,5 mL/kg/h" },
      { order: 12, action: "Balanço hídrico rigoroso a cada 6h" },
      { order: 13, action: "Hidrocortisona 200mg/dia (50mg 6/6h) se choque refratário ≥ 4h" },
      { order: 14, action: "Considerar TRS: oligúria refratária, K > 6,5, pH < 7,1, sobrecarga hídrica" },
      { order: 15, action: "Gasometria arterial seriada (a cada 2-4h)" },
      { order: 16, action: "Glicemia capilar 4/4h → insulina IV se > 180", target: "140-180 mg/dL" },
      { order: 17, action: "Profilaxia TVP: enoxaparina 40mg/dia SC (HNF se ClCr < 30)" },
      { order: 18, action: "Profilaxia úlcera de estresse: omeprazol 40mg IV 1x/dia" },
      { order: 19, action: "Cabeceira elevada 30-45°" },
      { order: 20, action: "Reavaliação ATB em 48-72h com culturas + descalonar se possível" },
    ],
  },
  shock: {
    name: "Choque (Abordagem Geral)",
    steps: [
      { order: 1, action: "Identificar tipo: distributivo, cardiogênico, hipovolêmico, obstrutivo" },
      { order: 2, action: "Acesso venoso calibroso (2 acessos 16-18G)" },
      { order: 3, action: "Monitorização: PAM, FC, SpO2, diurese" },
      { order: 4, action: "Ressuscitação volêmica se hipovolêmico/distributivo" },
      { order: 5, action: "Vasopressor se PAM < 65 após volume adequado" },
      { order: 6, action: "Ecocardiograma point-of-care (POCUS)" },
      { order: 7, action: "Lactato + gasometria" },
      { order: 8, action: "Corrigir causa base" },
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
      { order: 1, action: "TC crânio sem contraste URGENTE" },
      { order: 2, action: "Glicemia capilar" },
      { order: 3, action: "Se isquêmico < 4,5h: avaliar trombólise (Alteplase 0,9mg/kg, máx 90mg)" },
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

  let infectionOrigin: InfectionOrigin = "NÃO DEFINIDA";
  if (/hospitalar|nosocomial|iras/i.test(text)) infectionOrigin = "HOSPITALAR";
  else if (/comunit[áa]ri[ao]/i.test(text)) infectionOrigin = "COMUNITÁRIA";

  const riskFactors = {
    previousICU: /uti prévia|internação prévia.*uti|uti anterior/i.test(text),
    recentATB: /antibiótico recente|atb recente|uso recente.*atb|atb.*últimos/i.test(text),
    catheter: /cateter|cvc|svd|sonda|dispositivo/i.test(text),
    ventilated: /ventila[çc][ãa]o|vm\b|intubado|iot\b|tubo/i.test(text),
    hospitalized30d: /internação recente|hospitalizado|internado.*últimos/i.test(text),
    immunosuppressed: /imunosuprimido|imunossuprimido|transplant|quimioterapia|hiv|aids|corticoide crônico/i.test(text),
  };

  return {
    weightKg: parseNumber(weightRaw),
    ageYears: parseNumber(ageRaw),
    creatinineMgDl: parseNumber(creatRaw),
    sex, allergies, scenario, focus, infectionOrigin, medicationsInUse, riskFactors,
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
    return result;
  }

  const base = ((140 - p.ageYears) * p.weightKg) / (72 * p.creatinineMgDl);
  const sexFactor = p.sex === "F" ? 0.85 : 1;
  const sexLabel = p.sex === "F" ? " × 0,85 (feminino)" : p.sex === "M" ? " (masculino)" : " (sexo não informado — usando fator masculino, PERGUNTAR SEXO)";
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
    result.adjustments.push("Avaliar TRS urgente");
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

  if (!w) return result;

  const fluid = w * 30;
  result.fluid30MlKg = `30 mL/kg × ${w} kg = ${fluid} mL de cristaloide`;

  const noraMin = Number((0.1 * w).toFixed(1));
  const noraMax = Number((2 * w).toFixed(1));
  const noraMinMlH = Number((noraMin / 64 * 60).toFixed(1));
  const noraMaxMlH = Number((noraMax / 64 * 60).toFixed(1));
  result.noraMinMcgMin = `Dose mínima: 0,1 mcg/kg/min × ${w} kg = ${noraMin} mcg/min (${noraMinMlH} mL/h na diluição 64mcg/mL)`;
  result.noraMaxMcgMin = `Dose máxima: 2 mcg/kg/min × ${w} kg = ${noraMax} mcg/min (${noraMaxMlH} mL/h)`;

  const hepBolus = Math.round(80 * w);
  const hepMaint = Math.round(18 * w);
  result.hepBolus = `HNF bolus: 80 UI/kg × ${w} kg = ${hepBolus} UI`;
  result.hepMaintenance = `HNF manutenção: 18 UI/kg/h × ${w} kg = ${hepMaint} UI/h`;

  const enoxDose = Number((1 * w).toFixed(0));
  result.enoxTherapeutic = `Enoxaparina terapêutica: 1 mg/kg × ${w} kg = ${enoxDose} mg SC 12/12h`;
  if (clcr && clcr < 30) {
    result.enoxRenal = `⚠️ ClCr ${clcr} < 30: ${enoxDose} mg SC 1x/dia OU preferir HNF`;
  }

  const insulinDose = Number((0.1 * w).toFixed(1));
  result.insulinCAD = `Insulina Regular CAD: 0,1 UI/kg/h × ${w} kg = ${insulinDose} UI/h IV`;

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
      alerts.push({ pair: pair.drugs.join(" + "), severity: pair.severity, mechanism: pair.mechanism, action: pair.action });
    }
  }

  // Check QT prolongation combinations
  const qtDrugs = allDrugs.filter(d => {
    for (const [key, drug] of Object.entries(DRUG_DB)) {
      if (drug.qtProlongation && (d.includes(key) || key.includes(d))) return true;
    }
    return false;
  });
  if (qtDrugs.length >= 2) {
    alerts.push({
      pair: qtDrugs.join(" + "),
      severity: "🔴",
      mechanism: "Múltiplos QT-prolongadores: risco de Torsades de Pointes",
      action: "Monitorar QTc seriado. Manter K > 4,0 e Mg > 2,0. Considerar trocar um dos agentes.",
    });
  }

  // Check hyperkalemia risk with renal failure
  const hasRenalDrug = allDrugs.some(d => /losartana|enalapril|captopril|espironolactona|ieca|bra/i.test(d));
  if (hasRenalDrug) {
    alerts.push({
      pair: "BRA/IECA + IRA/DRC",
      severity: "🟡",
      mechanism: "Risco de hipercalemia com IRA ou DRC",
      action: "Monitorar K a cada 24h. Suspender se K > 5,5 ou Cr em elevação progressiva.",
    });
  }

  return alerts;
}

// ─── MODULE 5: Protocol Engine ──────────────────────────────────
function selectProtocol(text: string, scenario: Scenario): { name: string; steps: ProtocolStep[] } | null {
  const t = text.toLowerCase();
  if (/sepse|séptico|sepsis|choque séptico/i.test(t)) {
    return scenario === "UTI" ? PROTOCOLS.sepsis_uti : PROTOCOLS.sepsis;
  }
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
    warnings.push("🔴 ALERGIA A PENICILINA: Evitar pipe-tazo, amoxicilina, ampicilina. Cefalosporinas: reação cruzada ~2%. Meropenem: < 1% cruzada.");
  }
  if (/cefalosporina|ceftriaxona|cefazolina|cefepime/i.test(a)) {
    warnings.push("🔴 ALERGIA A CEFALOSPORINA: Evitar todas cefalosporinas. Carbapenêmico ou fluoroquinolona.");
  }
  if (/sulfa|sulfametoxazol|bactrim/i.test(a)) {
    warnings.push("🟡 ALERGIA A SULFA: Evitar SMX-TMP. Atenção furosemida (cruzada rara).");
  }
  if (/heparina|hit/i.test(a)) {
    warnings.push("🔴 ALERGIA/HIT: CONTRAINDICADO heparina e enoxaparina. Usar fondaparinux ou argatroban.");
  }
  if (/aine|anti.?inflamatório|ibuprofeno|diclofenaco/i.test(a)) {
    warnings.push("🟡 ALERGIA A AINE: Evitar AINEs. Dipirona/paracetamol se tolerados.");
  }

  return warnings;
}

// ─── MODULE 8: Data Validation Checklist ─────────────────────────
function validateData(patient: PatientData): { complete: boolean; missing: string[]; score: number } {
  const checks = [
    { field: "Peso", present: !!patient.weightKg },
    { field: "Idade", present: !!patient.ageYears },
    { field: "Sexo", present: !!patient.sex },
    { field: "Creatinina", present: !!patient.creatinineMgDl },
    { field: "Alergias", present: !!patient.allergies },
    { field: "Cenário", present: patient.scenario !== "NÃO INFORMADO" },
    { field: "Foco infeccioso", present: patient.focus !== "SEM FOCO DEFINIDO" },
    { field: "Medicações em uso", present: patient.medicationsInUse.length > 0 },
  ];

  const missing = checks.filter(c => !c.present).map(c => c.field);
  const score = Math.round((checks.filter(c => c.present).length / checks.length) * 100);

  return { complete: missing.length === 0, missing, score };
}

// ─── MAIN ENGINE ─────────────────────────────────────────────────
function runEngine(messages: ChatMessage[]): EngineResult {
  const patient = extractPatient(messages);
  const renal = calcRenal(patient);
  const doses = calcDoses(patient, renal);
  const userText = messages.filter(m => m.role === "user").map(m => m.content).join("\n");
  const protocol = selectProtocol(userText, patient.scenario);
  const antibiotic = selectAntibiotic(patient, renal);
  const interactions = checkInteractions(patient.medicationsInUse, []);
  const drugRenalAdj = getDrugRenalAdjustments(renal.clcrMlMin);
  const allergyWarnings = checkAllergies(patient.allergies);
  const dataValidation = validateData(patient);

  const missingData: string[] = [];
  if (!patient.weightKg) missingData.push("PESO (kg) — necessário para cálculos mg/kg, mL/kg, UI/kg");
  if (!patient.sex) missingData.push("SEXO — necessário para ajuste ClCr (fator 0,85 feminino)");
  if (!patient.ageYears) missingData.push("IDADE — necessário para ClCr e ajustes etários");
  if (!patient.creatinineMgDl) missingData.push("CREATININA — necessário para função renal e ajuste de doses");
  if (!patient.allergies) missingData.push("ALERGIAS — necessário para validação de segurança");
  if (patient.scenario === "NÃO INFORMADO") missingData.push("CENÁRIO (PS/UTI/UBS/SAMU/Enfermaria)");
  if (patient.focus === "SEM FOCO DEFINIDO") missingData.push("FOCO INFECCIOSO");

  const warnings = [...allergyWarnings];
  if (renal.stage === "GRAVE" || renal.stage === "DIALÍTICA") {
    warnings.push(`🔴 DRC ${renal.stage} (ClCr ${renal.clcrMlMin} mL/min) — Ajustar doses de TODAS as drogas renais`);
  }
  for (const adj of drugRenalAdj) {
    warnings.push(`💊 AJUSTE RENAL: ${adj}`);
  }

  // Add acidosis warning for sepsis + renal failure
  if (renal.stage !== "NORMAL" && renal.stage !== "LEVE") {
    if (/sepse|séptico|choque/i.test(userText)) {
      warnings.push("🟡 RISCO ACIDOSE: Sepse + DRC → acidose metabólica composta. Monitorar pH, HCO3, lactato.");
    }
  }

  return { patient, renal, doses, interactions, protocol, antibiotic, missingData, warnings, dataValidation };
}

// ─── Format Engine Context ───────────────────────────────────────
function formatEngineContext(e: EngineResult): string {
  const lines: string[] = [];
  lines.push("═══ MOTOR CLÍNICO — DADOS PRÉ-CALCULADOS (use estes valores, NÃO recalcule) ═══\n");

  // Data Validation Score
  lines.push(`📊 VALIDAÇÃO DE DADOS: ${e.dataValidation.score}% completo`);
  if (!e.dataValidation.complete) {
    lines.push(`  ⚠️ DADOS FALTANTES: ${e.dataValidation.missing.join(", ")}`);
    lines.push("  → OBRIGATÓRIO perguntar dados faltantes ANTES de prescrever doses.");
    lines.push("  → Se dados críticos faltam (peso, sexo, Cr), ALERTAR que doses são ESTIMATIVAS e precisam confirmação.\n");
  } else {
    lines.push("  ✅ Todos os dados essenciais preenchidos.\n");
  }

  // Patient
  lines.push("👤 DADOS DO PACIENTE:");
  lines.push(`  Peso: ${e.patient.weightKg ? `${e.patient.weightKg} kg ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Idade: ${e.patient.ageYears ? `${e.patient.ageYears} anos ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Sexo: ${e.patient.sex ? `${e.patient.sex === "M" ? "Masculino" : "Feminino"} ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Creatinina: ${e.patient.creatinineMgDl ? `${e.patient.creatinineMgDl} mg/dL ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Alergias: ${e.patient.allergies ? `"${e.patient.allergies}" ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Cenário: ${e.patient.scenario}`);
  lines.push(`  Foco: ${e.patient.focus}`);
  lines.push(`  Origem infecção: ${e.patient.infectionOrigin}`);
  lines.push(`  Medicações em uso: ${e.patient.medicationsInUse.length ? e.patient.medicationsInUse.join(", ") : "não informadas"}`);

  // Risk factors
  const rf = e.patient.riskFactors;
  const activeRF = [];
  if (rf.previousICU) activeRF.push("UTI prévia");
  if (rf.recentATB) activeRF.push("ATB recente");
  if (rf.catheter) activeRF.push("Cateter/dispositivo");
  if (rf.ventilated) activeRF.push("Ventilação mecânica");
  if (rf.hospitalized30d) activeRF.push("Internação recente");
  if (rf.immunosuppressed) activeRF.push("Imunossuprimido");
  lines.push(`  Fatores de risco resistência: ${activeRF.length ? activeRF.join(", ") : "não identificados"}`);

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
  lines.push("\n💊 DOSES CALCULADAS PELO MOTOR (copie exatamente):");
  if (!e.patient.weightKg) {
    lines.push("  ⚠️ PESO NÃO INFORMADO — doses por kg PENDENTES. NÃO INVENTE PESO.");
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

    // Vancomycin
    const w = e.patient.weightKg;
    const vancoStd = Math.round(15 * w);
    const vancoMax = Math.round(20 * w);
    const vancoAtaque = Math.round(25 * w);
    lines.push(`  Vancomicina manutenção: 15-20 mg/kg × ${w} kg = ${vancoStd}-${vancoMax} mg 12/12h`);
    lines.push(`  Vancomicina ataque: 25 mg/kg × ${w} kg = ${vancoAtaque} mg`);
    if (e.renal.clcrMlMin !== undefined && e.renal.clcrMlMin < 50) {
      const adj = e.renal.clcrMlMin >= 30 ? `${vancoStd} mg 24/24h` : `${vancoStd} mg 48/48h ou por nível`;
      lines.push(`  ⚠️ AJUSTE RENAL vancomicina (ClCr ${e.renal.clcrMlMin}): ${adj}`);
    }
  }

  // Antibiotic recommendation
  if (e.antibiotic) {
    lines.push("\n🦠 RECOMENDAÇÃO ANTIBIÓTICA DO MOTOR:");
    lines.push(`  PRIMÁRIO: ${e.antibiotic.primary}`);
    lines.push(`  ALTERNATIVAS: ${e.antibiotic.alternatives.join(" | ")}`);
    lines.push(`  RACIONAL: ${e.antibiotic.rationale}`);
    lines.push(`  COBERTURA NECESSÁRIA: ${e.antibiotic.coverageNeeded.join(", ")}`);
    if (e.antibiotic.questionsNeeded.length) {
      lines.push(`  ❓ PERGUNTAS PARA REFINAR ATB:`);
      for (const q of e.antibiotic.questionsNeeded) {
        lines.push(`    - ${q}`);
      }
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
    lines.push(`\n📋 PROTOCOLO: ${e.protocol.name}`);
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
    lines.push("\n❓ DADOS FALTANTES (OBRIGATÓRIO perguntar na seção PERGUNTAS):");
    for (const m of e.missingData) {
      lines.push(`  - ${m}`);
    }
  }

  lines.push("\n═══ FIM DO MOTOR CLÍNICO ═══");
  return lines.join("\n");
}

// ─── System Prompt ───────────────────────────────────────────────
const SYSTEM_PROMPT = `Você é um assistente clínico de plantão no Brasil. O MOTOR CLÍNICO já calculou tudo. Você ORGANIZA e EXPLICA.

REGRAS ABSOLUTAS:
1. Use EXATAMENTE os valores do motor clínico. NÃO recalcule. NÃO invente peso/idade/sexo.
2. Se dado marcado ❌, PERGUNTE ao usuário. NÃO assuma valor.
3. Se motor calculou dose, COPIE exatamente. NÃO arredonde diferente.
4. ANTES de prescrever, VERIFIQUE a validação de dados. Se < 100%, ALERTE sobre dados faltantes.
5. Use o antibiótico recomendado pelo motor. Se dados insuficientes para refinar, PERGUNTE (comunitário vs hospitalar, dispositivos, ATB recente).
6. Se cenário = UTI, use protocolo UTI completo (acesso central, PAI, monitor invasivo, etc).
7. Comece pela AÇÃO. Máximo 1 frase antes das prioridades.

FORMATO OBRIGATÓRIO (nesta ordem):
1. 📊 VALIDAÇÃO — Checklist: ✅/❌ para cada dado. Score %.
2. 📋 RESUMO — 1-2 linhas. Impressão + gravidade.
3. 🎯 DIAGNÓSTICO — hipótese principal + 2-3 diferenciais (tabela: Hipótese | Probabilidade | Argumento).
4. ⚡ PRIORIDADES — 1-5 ações IMEDIATAS (verbo imperativo, em ordem de urgência).
5. 🔄 ALGORITMO — fluxo decisório com setas (→ ↓).
6. 🔬 EXAMES — "Imediatos" e "Complementares".
7. 💊 CONDUTA + PRESCRIÇÃO — Use ATB do motor. Copie doses do motor. Mostre fórmula + resultado.
8. ⚠️ INTERAÇÕES — Copie alertas do motor + adicione QT, eletrólitos, renal.
9. 🚨 ALERTAS — red flags, contraindicações, segurança.
10. 📚 REFERÊNCIAS — guidelines brasileiras e internacionais.
11. ❓ PERGUNTAS — 3-5 perguntas OBRIGATÓRIAS. Incluir TODOS os dados faltantes do motor + perguntas de refinamento do ATB.

DISCLAIMER: Apoio à decisão clínica — responsabilidade final é do médico.`;

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

    const systemMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "system", content: engineContext },
    ];

    if (mode === "structured") {
      systemMessages.push({ role: "system", content: "Modo estruturado: priorize checklist de ações imediatas e validação de dados." });
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
        model: "google/gemini-2.5-flash",
        messages: [...systemMessages, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente." }), {
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
