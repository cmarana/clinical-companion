import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ─── Types ───────────────────────────────────────────────────────
type ChatMessage = { role: "user" | "assistant" | "system"; content: string };
type Scenario = "PS" | "UTI" | "UBS" | "SAMU" | "ENFERMARIA" | "HOSPITAL" | "NÃO INFORMADO";
type ClinicalMode = "NEURO" | "CARDIO" | "PEDIATRIA" | "UTI" | "TRAUMA" | "ORTOPEDIA" | "GASTRO" | "ENDOCRINO" | "RESPIRATORIO" | "PSIQUIATRIA" | "UROLOGIA" | "DERMATOLOGIA" | "HEMATOLOGIA" | "GERAL";
type Focus = "PULMONAR" | "URINÁRIO" | "ABDOMINAL" | "PELE/TECIDOS" | "SNC" | "SEM FOCO DEFINIDO";
type RenalStage = "NORMAL" | "LEVE" | "MODERADA" | "GRAVE" | "TERMINAL";
type InfectionOrigin = "COMUNITÁRIA" | "HOSPITALAR" | "NÃO DEFINIDA";
type AllergyType = "ANAFILÁTICA" | "LEVE" | "NÃO INFORMADA";

interface PatientData {
  weightKg?: number;
  ageYears?: number;
  ageMonths?: number; // for pediatric precision
  creatinineMgDl?: number;
  sex?: "M" | "F";
  allergies?: string;
  allergyType: AllergyType;
  scenario: Scenario;
  focus: Focus;
  infectionOrigin: InfectionOrigin;
  medicationsInUse: string[];
  riskFactors: {
    previousICU: boolean;
    recentATB: boolean;
    catheter: boolean;
    ventilated: boolean;
    hospitalized30d: boolean;
    immunosuppressed: boolean;
  };
  hasHeartFailure: boolean;
  isElderly: boolean;
  isDialytic: boolean;
  hasAnticoagulationIndication: string | null;
  // Pediatric
  isPediatric: boolean; // age < 14
  isNeonate: boolean; // age < 28 days
  isInfant: boolean; // age < 1 year
  estimatedWeightKg?: number; // weight estimated by age if not provided
  vaccinesUpToDate?: boolean;
  // Neuro
  isNeuroCase: boolean;
  glasgowScore?: number;
  hasAnticoagulantInUse: boolean;
  // Obstetric
  isPregnant: boolean;
  isPuerperal: boolean;
  gestationalWeeks?: number;
  isFertileAge: boolean;
  pregnancyConfirmed: boolean;
  // ICU / Critical
  isCriticalCase: boolean;
  // Trauma / Surgery
  isTraumaCase: boolean;
  // Orthopedics
  isOrthoCase: boolean;
  // Gastroenterology
  isGastroCase: boolean;
  // Endocrine / Metabolic
  isEndocrineCase: boolean;
  // Respiratory
  isRespiratoryCase: boolean;
  // Psychiatry
  isPsychiatryCase: boolean;
  // Urology
  isUrologyCase: boolean;
  // Dermatology
  isDermatologyCase: boolean;
  // Hematology
  isHematologyCase: boolean;
}

interface RenalCalcResult {
  clcrMlMin?: number;
  stage: RenalStage;
  formula?: string;
  adjustments: string[];
}

interface DoseCalcResult {
  fluidRecommendation: string;
  fluidWarning?: string;
  noraMinMcgMin?: string;
  noraMaxMcgMin?: string;
  noraDilution: string;
  hepProphylaxis?: string;
  hepTherapeutic?: string;
  hepWarning?: string;
  enoxProphylaxis?: string;
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
  allergyWarnings: string[];
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
  safetyAlerts: string[];
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
    contraindications: ["Alergia a carbapenêmicos", "Alergia anafilática a penicilina (preferir alternativa)"],
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
  aztreonam: {
    name: "Aztreonam", dose: "2g 8/8h IV",
    renalAdj: { "10-30": "1g 8/8h", "<10": "500mg 8/8h" },
    contraindications: [],
    interactions: [],
    class: "Antibiótico — Monobactâmico", route: "IV",
  },
  linezolida: {
    name: "Linezolida", dose: "600mg 12/12h IV/VO",
    renalAdj: {},
    contraindications: ["Uso de IMAO", "Feocromocitoma"],
    interactions: ["ISRS (síndrome serotoninérgica)", "IMAO (crise hipertensiva)", "Alimentos ricos em tiramina"],
    class: "Antibiótico — Oxazolidinona", route: "IV/VO",
  },
  daptomicina: {
    name: "Daptomicina", dose: "6-8 mg/kg 1x/dia IV",
    renalAdj: { "<30": "Dose padrão, intervalo 48/48h" },
    contraindications: ["Pneumonia (inativada por surfactante)"],
    interactions: ["Estatinas (risco de rabdomiólise)"],
    class: "Antibiótico — Lipopeptídeo", route: "IV",
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
    name: "Enoxaparina", dose: "Profilaxia: 40mg 1x/dia SC | Terapêutica: 1mg/kg 12/12h SC",
    renalAdj: { "<30": "Terapêutica: 1mg/kg 1x/dia OU preferir HNF. Profilaxia: 20mg/dia" },
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
    name: "Heparina Não Fracionada (HNF)", dose: "Profilaxia: 5000 UI SC 8/8h | Terapêutica: 80 UI/kg bolus + 18 UI/kg/h",
    renalAdj: {}, contraindications: ["HIT", "Sangramento ativo", "Plaquetas < 50.000"],
    interactions: ["AINEs (sangramento)", "Fibrinolíticos (sangramento grave)"],
    class: "Anticoagulante", route: "IV/SC",
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
  gabapentina: {
    name: "Gabapentina", dose: "300-600mg 8/8h",
    renalAdj: { "30-59": "200-700mg 12/12h", "15-29": "100-300mg 1x/dia", "<15": "100-300mg em dias alternados ou pós-diálise" },
    contraindications: [],
    interactions: ["Opioides (depressão respiratória)", "Antiácidos (reduz absorção — dar 2h antes)"],
    class: "Anticonvulsivante / Analgésico adjuvante", route: "VO",
  },
  morfina: {
    name: "Morfina", dose: "2-10mg IV 4/4h ou BIC 1-5mg/h",
    renalAdj: { "30-59": "Reduzir dose 25%. Intervalo aumentado.", "15-29": "Reduzir dose 50%. Preferir fentanil.", "<15": "EVITAR — metabólito ativo (M6G) acumula. Usar fentanil ou hidromorfona." },
    contraindications: ["Depressão respiratória grave", "Íleo paralítico"],
    interactions: ["Benzodiazepínicos (depressão respiratória)", "IMAO (crise hipertensiva)", "Gabapentina (depressão respiratória)"],
    class: "Opioide", route: "IV/SC/VO",
  },
  tramadol: {
    name: "Tramadol", dose: "50-100mg 6/6h",
    renalAdj: { "30-59": "50mg 12/12h (máx 200mg/dia)", "<30": "50mg 12/12h. Considerar alternativa.", "<15": "EVITAR — acúmulo de metabólitos." },
    contraindications: ["Epilepsia não controlada", "Uso de IMAO", "< 12 anos"],
    interactions: ["ISRS (síndrome serotoninérgica)", "IMAO (contraindicado)", "Carbamazepina (reduz efeito)"],
    class: "Opioide fraco", route: "IV/VO",
  },
  digoxina: {
    name: "Digoxina", dose: "0,125-0,25mg 1x/dia",
    renalAdj: { "30-59": "0,125mg/dia ou dias alternados", "15-29": "0,0625-0,125mg/dia. Monitorar nível sérico.", "<15": "0,0625mg dias alternados. Nível sérico obrigatório." },
    contraindications: ["BAV 2º/3º grau sem MP", "Cardiomiopatia hipertrófica obstrutiva", "Hipocalemia não corrigida"],
    interactions: ["Amiodarona (aumenta nível 70-100%)", "Verapamil (aumenta nível + bradicardia)", "Furosemida (hipocalemia → toxicidade)", "Espironolactona (aumenta nível)"],
    class: "Digitálico", route: "VO/IV",
  },
  metformina: {
    name: "Metformina", dose: "500-1000mg 12/12h",
    renalAdj: { "30-44": "Máx 1000mg/dia. Monitorar.", "<30": "CONTRAINDICADO — risco de acidose lática." },
    contraindications: ["ClCr < 30", "IC descompensada", "Acidose metabólica", "Uso de contraste iodado (suspender 48h)"],
    interactions: ["Contraste iodado (acidose lática)", "Álcool (acidose lática)", "Diuréticos (piora renal)"],
    class: "Hipoglicemiante — Biguanida", route: "VO",
  },
  espironolactona: {
    name: "Espironolactona", dose: "25-100mg 1x/dia",
    renalAdj: { "30-59": "Máx 25mg/dia. Monitorar K.", "<30": "EVITAR — risco hipercalemia grave." },
    contraindications: ["K > 5,0", "ClCr < 30 (relativo)", "Insuficiência adrenal"],
    interactions: ["IECA/BRA (hipercalemia)", "Suplemento de K (hipercalemia)", "Digoxina (aumenta nível)", "AINEs (piora renal + reduz efeito)"],
    class: "Diurético poupador de K", route: "VO",
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
  { drugs: ["losartana", "ieca"], severity: "🔴", mechanism: "Hipercalemia + IRA", action: "EVITAR duplo bloqueio SRAA." },
  { drugs: ["losartana", "espironolactona"], severity: "🔴", mechanism: "Hipercalemia grave se DRC associada", action: "Monitorar K rigoroso. Evitar se ClCr < 30." },
  // DOAC interactions
  { drugs: ["rivaroxabana", "cetoconazol"], severity: "🔴", mechanism: "Inibição CYP3A4 + P-gp → aumento nível DOAC", action: "CONTRAINDICADO. Trocar antifúngico." },
  { drugs: ["rivaroxabana", "rifampicina"], severity: "🔴", mechanism: "Indução CYP3A4 → reduz nível DOAC", action: "CONTRAINDICADO. Trocar um dos dois." },
  { drugs: ["apixabana", "cetoconazol"], severity: "🔴", mechanism: "Inibição CYP3A4 → aumento nível DOAC", action: "CONTRAINDICADO ou reduzir dose 50%." },
  { drugs: ["dabigatrana", "amiodarona"], severity: "🟡", mechanism: "Aumento nível dabigatrana via P-gp", action: "Monitorar sangramento. Considerar reduzir dose." },
  // Antidepressant interactions
  { drugs: ["fluoxetina", "tramadol"], severity: "🔴", mechanism: "Síndrome serotoninérgica + reduz conversão tramadol", action: "EVITAR. Usar analgésico alternativo." },
  { drugs: ["sertralina", "tramadol"], severity: "🔴", mechanism: "Síndrome serotoninérgica", action: "EVITAR. Trocar analgésico." },
  { drugs: ["fluoxetina", "warfarina"], severity: "🟡", mechanism: "Inibição CYP2C9 → aumento INR", action: "Monitorar INR semanal." },
  { drugs: ["paroxetina", "tamoxifeno"], severity: "🔴", mechanism: "Inibição CYP2D6 → reduz eficácia tamoxifeno", action: "CONTRAINDICADO. Trocar antidepressivo." },
  { drugs: ["venlafaxina", "imao"], severity: "🔴", mechanism: "Síndrome serotoninérgica grave", action: "CONTRAINDICADO. Wash-out 14 dias." },
  // Antipsychotic interactions
  { drugs: ["haloperidol", "amiodarona"], severity: "🔴", mechanism: "QT prolongado aditivo → Torsades", action: "EVITAR. Se necessário, QTc seriado." },
  { drugs: ["haloperidol", "metoclopramida"], severity: "🟡", mechanism: "Efeitos extrapiramidais aditivos", action: "Monitorar rigidez/distonia." },
  { drugs: ["quetiapina", "fluconazol"], severity: "🟡", mechanism: "Inibição CYP3A4 → aumento quetiapina", action: "Reduzir dose quetiapina." },
  // Anticonvulsant interactions
  { drugs: ["carbamazepina", "warfarina"], severity: "🔴", mechanism: "Indução CYP → reduz warfarina", action: "Monitorar INR. Pode precisar aumentar dose." },
  { drugs: ["fenitoina", "fluconazol"], severity: "🔴", mechanism: "Inibição CYP2C9 → toxicidade fenitoina", action: "Monitorar nível sérico fenitoína." },
  { drugs: ["valproato", "lamotrigina"], severity: "🟡", mechanism: "Valproato dobra nível de lamotrigina", action: "Reduzir lamotrigina 50%." },
  // Opioid interactions  
  { drugs: ["morfina", "benzodiazepínico"], severity: "🔴", mechanism: "Depressão respiratória sinérgica", action: "EVITAR combinação. Se necessário, monitorar SpO2 contínuo." },
  { drugs: ["fentanil", "benzodiazepínico"], severity: "🔴", mechanism: "Depressão respiratória sinérgica", action: "EVITAR. Monitorar em UTI com capnografia." },
  { drugs: ["metformina", "contraste"], severity: "🟡", mechanism: "Risco de acidose lática com contraste iodado", action: "Suspender metformina 48h antes/depois do contraste. Monitorar Cr." },
  // Digoxin expanded
  { drugs: ["digoxina", "furosemida"], severity: "🟡", mechanism: "Hipocalemia por furosemida → toxicidade digitálica", action: "Monitorar K rigoroso. Manter K > 4,0." },
  { drugs: ["digoxina", "verapamil"], severity: "🔴", mechanism: "Aumento nível digoxina + bradicardia aditiva", action: "Reduzir digoxina 50%. Monitorar FC e nível." },
];

// ─── Pediatric Database ─────────────────────────────────────────
// Weight estimation by age (emergency only)
function estimateWeightByAge(ageYears: number, ageMonths?: number): number {
  const totalMonths = (ageYears * 12) + (ageMonths || 0);
  if (totalMonths < 1) return 3.5; // newborn
  if (totalMonths <= 12) return 3.5 + (totalMonths * 0.5); // ~0.5kg/month
  if (ageYears <= 5) return (ageYears * 2) + 8; // APLS formula
  if (ageYears <= 12) return (ageYears * 3) + 7; // APLS formula
  return (ageYears * 3) + 7; // cap at 13
}

// Pediatric drug doses (mg/kg or mcg/kg)
interface PedDrugEntry {
  name: string;
  dosePerKg: string;
  maxDose: string;
  frequency: string;
  route: string;
  ageRestrictions?: string;
  warnings?: string[];
}

const PEDIATRIC_DRUGS: Record<string, PedDrugEntry> = {
  ceftriaxona: {
    name: "Ceftriaxona", dosePerKg: "50-100 mg/kg/dia", maxDose: "4g/dia",
    frequency: "12/12h ou 1x/dia", route: "IV/IM",
    ageRestrictions: "⚠️ CONTRAINDICADO em RN com hiperbilirrubinemia. NÃO misturar com cálcio IV em neonatos.",
    warnings: ["Evitar em < 28 dias se ictérico", "Não administrar com soluções de cálcio em neonatos"],
  },
  amoxicilina: {
    name: "Amoxicilina", dosePerKg: "40-90 mg/kg/dia", maxDose: "3g/dia",
    frequency: "8/8h", route: "VO",
  },
  amoxicilina_clav: {
    name: "Amoxicilina + Clavulanato", dosePerKg: "40-90 mg/kg/dia (amoxicilina)", maxDose: "3g/dia",
    frequency: "8/8h ou 12/12h", route: "VO",
  },
  ampicilina: {
    name: "Ampicilina", dosePerKg: "100-200 mg/kg/dia (meningite: 200-400 mg/kg/dia)", maxDose: "12g/dia",
    frequency: "6/6h", route: "IV",
  },
  cefepime_ped: {
    name: "Cefepime", dosePerKg: "50 mg/kg/dose", maxDose: "2g/dose",
    frequency: "8/8h", route: "IV",
  },
  vancomicina_ped: {
    name: "Vancomicina", dosePerKg: "15 mg/kg/dose (40-60 mg/kg/dia)", maxDose: "2g/dose",
    frequency: "6/6h", route: "IV",
    warnings: ["Infundir em ≥ 60 min", "Monitorar nível sérico"],
  },
  meropenem_ped: {
    name: "Meropenem", dosePerKg: "20-40 mg/kg/dose (meningite: 40 mg/kg/dose)", maxDose: "2g/dose",
    frequency: "8/8h", route: "IV",
  },
  gentamicina_ped: {
    name: "Gentamicina", dosePerKg: "5-7,5 mg/kg/dia", maxDose: "Guiado por nível",
    frequency: "24/24h (dose única diária)", route: "IV",
    warnings: ["Monitorar nível sérico", "Nefro e ototoxicidade"],
  },
  dipirona_ped: {
    name: "Dipirona", dosePerKg: "10-25 mg/kg/dose", maxDose: "1g/dose",
    frequency: "6/6h", route: "IV/VO",
    ageRestrictions: "Evitar em < 3 meses",
  },
  paracetamol_ped: {
    name: "Paracetamol", dosePerKg: "10-15 mg/kg/dose", maxDose: "75 mg/kg/dia (máx 4g/dia)",
    frequency: "4/4h ou 6/6h", route: "VO/VR",
  },
  ibuprofeno_ped: {
    name: "Ibuprofeno", dosePerKg: "5-10 mg/kg/dose", maxDose: "40 mg/kg/dia (máx 2,4g/dia)",
    frequency: "6/6h ou 8/8h", route: "VO",
    ageRestrictions: "Evitar em < 6 meses",
  },
  adrenalina_ped: {
    name: "Adrenalina", dosePerKg: "PCR: 0,01 mg/kg (0,1 mL/kg da 1:10.000) | Anafilaxia: 0,01 mg/kg IM (máx 0,3mg < 6a, 0,5mg > 6a)",
    maxDose: "1mg/dose (PCR)", frequency: "3-5 min (PCR)", route: "IV/IO/IM",
  },
  midazolam_ped: {
    name: "Midazolam", dosePerKg: "Convulsão: 0,15-0,2 mg/kg IV/IO | 0,2 mg/kg IN | 0,3 mg/kg IM",
    maxDose: "10mg", frequency: "Dose única, repetir 1x se necessário", route: "IV/IO/IN/IM",
    warnings: ["⚠️ Risco depressão respiratória", "Monitorar SpO2"],
  },
  diazepam_ped: {
    name: "Diazepam", dosePerKg: "Convulsão: 0,2-0,5 mg/kg VR | 0,1-0,3 mg/kg IV",
    maxDose: "10mg (< 5a: 5mg)", frequency: "Dose única", route: "VR/IV",
    warnings: ["⚠️ Risco depressão respiratória"],
  },
  sf_bolus_ped: {
    name: "SF 0,9% / RL (bolus)", dosePerKg: "10-20 mL/kg", maxDose: "Reavaliar após cada bolus",
    frequency: "Bolus em 10-20 min", route: "IV",
    warnings: ["NÃO usar 30 mL/kg como adulto", "Reavaliar após CADA bolus"],
  },
  noradrenalina_ped: {
    name: "Noradrenalina", dosePerKg: "0,05-2 mcg/kg/min", maxDose: "Titular por resposta",
    frequency: "BIC contínua", route: "IV central",
  },
};

// Drugs contraindicated or requiring special caution in pediatrics
const PEDIATRIC_CONTRAINDICATED: { drug: string; reason: string; ageLimit?: string }[] = [
  { drug: "quinolona", reason: "Risco de artropatia / lesão cartilagem de crescimento", ageLimit: "< 18 anos (relativo)" },
  { drug: "ciprofloxacino", reason: "Risco de artropatia (uso excepcional em Pseudomonas)", ageLimit: "< 18 anos" },
  { drug: "levofloxacino", reason: "Risco de artropatia", ageLimit: "< 18 anos" },
  { drug: "tetraciclina", reason: "Manchas dentárias permanentes + depósito ósseo", ageLimit: "< 8 anos" },
  { drug: "doxiciclina", reason: "Manchas dentárias (risco menor que tetraciclina)", ageLimit: "< 8 anos" },
  { drug: "codeína", reason: "Metabolismo variável CYP2D6 → depressão respiratória fatal", ageLimit: "< 12 anos (CONTRAINDICADO)" },
  { drug: "tramadol", reason: "Mesmo risco que codeína em metabolizadores rápidos", ageLimit: "< 12 anos" },
  { drug: "ácido acetilsalicílico", reason: "Síndrome de Reye", ageLimit: "< 16 anos (exceto Kawasaki)" },
  { drug: "metoclopramida", reason: "Risco extrapiramidal alto em crianças", ageLimit: "< 1 ano (relativo < 18)" },
  { drug: "ondansetrona", reason: "QT prolongado — cautela", ageLimit: "Cautela em < 2 anos" },
  { drug: "benzodiazepínico", reason: "Depressão respiratória — usar com monitorização", ageLimit: "Todas as idades" },
  { drug: "opioide", reason: "Depressão respiratória — dose rigorosa por kg com monitorização SpO2", ageLimit: "Todas as idades" },
];

// Pediatric dehydration classification
function classifyDehydration(text: string): { level: string; fluidMlKg: string; plan: string } | null {
  if (/desidrata/i.test(text)) {
    if (/grave|choque|letárgic|inconsciente|pulso fraco/i.test(text)) {
      return { level: "GRAVE (≥10%)", fluidMlKg: "20 mL/kg SF rápido (repetir até 60 mL/kg)", plan: "Plano C (SNG/IV)" };
    }
    if (/moderada|olhos fundos|turgor diminuído|irritad|sedento/i.test(text)) {
      return { level: "MODERADA (5-10%)", fluidMlKg: "50-100 mL/kg em 4h (SRO)", plan: "Plano B (TRO supervisionada)" };
    }
    return { level: "LEVE (<5%)", fluidMlKg: "50 mL/kg em 4h (SRO)", plan: "Plano A (domiciliar)" };
  }
  return null;
}

// Pediatric emergency protocols
const PEDIATRIC_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  pals_pcr: {
    name: "PCR Pediátrica — PALS (AHA 2020)",
    steps: [
      { order: 1, action: "Confirmar PCR: sem pulso central (braquial < 1a, carotídeo/femoral > 1a) em 10s" },
      { order: 2, action: "Iniciar RCP: 15:2 (2 socorristas) ou 30:2 (1 socorrista)", target: "100-120/min, profundidade ⅓ AP" },
      { order: 3, action: "Adrenalina 0,01 mg/kg IV/IO (0,1 mL/kg da 1:10.000)", target: "A cada 3-5 min" },
      { order: 4, action: "Avaliar ritmo: FV/TV sem pulso → desfibrilação 2 J/kg → 4 J/kg" },
      { order: 5, action: "Via aérea: IOT (tubo sem cuff < 8a, com cuff preferível)", target: "Tubo = (idade/4) + 3,5 (com cuff)" },
      { order: 6, action: "Acesso vascular: IO se IV não obtido em 60-90s" },
      { order: 7, action: "Amiodarona 5 mg/kg IV/IO se FV/TV refratária (máx 300mg)" },
      { order: 8, action: "Tratar causas reversíveis: 5H e 5T" },
    ],
  },
  sepse_ped: {
    name: "Sepse Pediátrica — ACCM/PALS (2020)",
    steps: [
      { order: 1, action: "Reconhecimento: FC alterada + perfusão ruim ± hipotensão" },
      { order: 2, action: "O2 100% + acesso vascular (IO se necessário)" },
      { order: 3, action: "SF 0,9% 10-20 mL/kg em bolus rápido (10 min)", target: "Até 40-60 mL/kg na 1ª hora se necessário" },
      { order: 4, action: "Reavaliar após CADA bolus: FC, perfusão, hepatomegalia, crepitações" },
      { order: 5, action: "Se refratário a fluido → adrenalina (choque frio) ou noradrenalina (choque quente)" },
      { order: 6, action: "Antibiótico amplo espectro em ≤ 1 HORA" },
      { order: 7, action: "Hemoculturas ANTES do ATB se não atrasar > 15 min" },
      { order: 8, action: "Glicemia capilar: corrigir hipoglicemia", target: "Glicemia > 60 mg/dL" },
      { order: 9, action: "Calcemia: corrigir hipocalcemia" },
      { order: 10, action: "Hidrocortisona 2 mg/kg (máx 100mg) se choque refratário ou suspeita insuf. adrenal" },
      { order: 11, action: "Monitorar diurese", target: "> 1 mL/kg/h" },
      { order: 12, action: "Lactato sérico seriado" },
    ],
  },
  convulsao_ped: {
    name: "Estado de Mal Epiléptico Pediátrico",
    steps: [
      { order: 1, action: "0-5 min: Estabilizar via aérea, O2, posição lateral, glicemia" },
      { order: 2, action: "5-10 min: Midazolam 0,2 mg/kg IN ou 0,15 mg/kg IV/IO (máx 10mg)" },
      { order: 3, action: "Se refratário: repetir benzodiazepínico 1x" },
      { order: 4, action: "10-20 min: Fenitoína 20 mg/kg IV em 20 min OU Levetiracetam 40-60 mg/kg IV" },
      { order: 5, action: "20-40 min: Se refratário → Fenobarbital 20 mg/kg IV" },
      { order: 6, action: "> 40 min: Considerar midazolam BIC ou tiopental (UTI)" },
      { order: 7, action: "Investigar causa: TC, labs, LCR se indicado" },
    ],
  },
  febre_rn: {
    name: "RN Febril (< 28 dias) — ALTO RISCO",
    steps: [
      { order: 1, action: "🔴 RN FEBRIL = INTERNAÇÃO OBRIGATÓRIA até exclusão de sepse" },
      { order: 2, action: "Hemograma + PCR/PCT + hemocultura" },
      { order: 3, action: "Urina tipo I + urocultura (cateterismo vesical)" },
      { order: 4, action: "Punção lombar (LCR)" },
      { order: 5, action: "RX tórax se sintomas respiratórios" },
      { order: 6, action: "Antibiótico empírico: Ampicilina 50mg/kg 6/6h + Gentamicina 5mg/kg/dia" },
      { order: 7, action: "Se suspeita herpes: Aciclovir 20mg/kg 8/8h" },
      { order: 8, action: "Monitorar em UTI neonatal se instável" },
    ],
  },
};

// ─── Anticoagulation Indications ─────────────────────────────────
const ANTICOAG_INDICATIONS = ["tev", "tep", "tvp", "tromboembolismo", "embolia pulmonar", "trombose venosa",
  "fa ", "fibrilação atrial", "flutter", "iam", "infarto", "sca", "síndrome coronariana",
  "prótese valvar", "válvula mecânica", "válvula protética"];

// ─── Antibiotic Selection Engine ─────────────────────────────────
function selectAntibiotic(patient: PatientData, renal: RenalCalcResult): AntibioticRecommendation | null {
  const { focus, scenario, infectionOrigin, riskFactors, allergies, allergyType } = patient;
  const isHospital = infectionOrigin === "HOSPITALAR" || riskFactors.previousICU || riskFactors.hospitalized30d;
  // UTI scenario alone does NOT mean hospital infection - only if explicitly stated
  const hasResistanceRisk = riskFactors.recentATB || riskFactors.catheter || riskFactors.ventilated || isHospital;
  const penicillinAllergy = allergies ? /penicilina|amoxicilina|ampicilina/i.test(allergies) : false;
  const isAnaphylactic = penicillinAllergy && allergyType === "ANAFILÁTICA";

  const questionsNeeded: string[] = [];
  const allergyWarnings: string[] = [];

  if (infectionOrigin === "NÃO DEFINIDA") questionsNeeded.push("Infecção comunitária ou hospitalar?");
  if (!riskFactors.previousICU && scenario === "UTI") questionsNeeded.push("UTI prévia nos últimos 90 dias?");
  if (!riskFactors.recentATB) questionsNeeded.push("Uso de antibiótico nos últimos 90 dias?");
  if (scenario === "UTI" && !riskFactors.catheter) questionsNeeded.push("Cateter venoso central / SVD / outros dispositivos?");
  if (scenario === "UTI" && !riskFactors.ventilated) questionsNeeded.push("Em ventilação mecânica?");
  if (focus === "SEM FOCO DEFINIDO") questionsNeeded.push("Qual o FOCO INFECCIOSO provável? (pulmonar, urinário, abdominal, pele, SNC)");

  // ALLERGY SAFETY RULES
  if (isAnaphylactic) {
    allergyWarnings.push("🔴 ANAFILAXIA A PENICILINA → EVITAR: penicilinas, cefalosporinas, carbapenêmicos (se alternativa existir)");
    allergyWarnings.push("✅ PREFERIR: Aztreonam, Quinolona (levo/cipro), Vancomicina, Linezolida, Daptomicina");
  } else if (penicillinAllergy) {
    allergyWarnings.push("🟡 ALERGIA NÃO-ANAFILÁTICA A PENICILINA → Cefalosporinas: risco cruzado ~2%. Carbapenêmicos: risco < 1%.");
    allergyWarnings.push("Perguntar: Tipo de reação (rash? urticária? edema? anafilaxia?)");
    if (allergyType === "NÃO INFORMADA") {
      questionsNeeded.push("TIPO de alergia a penicilina: foi anafilaxia (edema de glote, choque) ou reação leve (rash, urticária)?");
    }
  }

  let primary = "";
  let alternatives: string[] = [];
  let rationale = "";
  let coverageNeeded: string[] = [];

  // Helper for anaphylactic-safe choices
  const anaphylaxSafe = (normal: string, normalAlts: string[]): [string, string[]] => {
    if (isAnaphylactic) {
      return [
        "Aztreonam 2g 8/8h + Vancomicina 15-20mg/kg 12/12h",
        ["Levofloxacino 750mg/dia + Vancomicina", "Aztreonam + Linezolida 600mg 12/12h"]
      ];
    }
    if (penicillinAllergy) {
      // Non-anaphylactic: can use cephalosporins with caution
      return [normal, normalAlts];
    }
    return [normal, normalAlts];
  };

  if (focus === "PULMONAR") {
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["Pseudomonas", "MRSA", "Gram-negativos MDR"];
      if (isAnaphylactic) {
        primary = "Aztreonam 2g 8/8h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Levofloxacino 750mg/dia + Vancomicina", "Aztreonam + Linezolida 600mg 12/12h"];
        rationale = "⚠️ ANAFILAXIA PENICILINA: Aztreonam (monobactâmico, sem reação cruzada) + Vancomicina para MRSA.";
      } else if (penicillinAllergy) {
        primary = "Cefepime 2g 8/8h + Vancomicina 15-20mg/kg 12/12h (reação cruzada ~2%, monitorar)";
        alternatives = ["Aztreonam 2g 8/8h + Vancomicina", "Meropenem 1g 8/8h + Vancomicina (cruzada < 1%)"];
        rationale = "Alergia não-anafilática: cefalosporina 4ª com cautela. Monitorar 1ª dose.";
      } else {
        primary = "Piperacilina-Tazobactam 4,5g 6/6h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Cefepime 2g 8/8h + Vancomicina", "Meropenem 1g 8/8h + Vancomicina"];
        rationale = "Pneumonia hospitalar/associada a VM: cobertura anti-Pseudomonas + MRSA (ATS/IDSA 2016).";
      }
    } else {
      coverageNeeded = ["S. pneumoniae", "H. influenzae", "Atípicos"];
      if (isAnaphylactic) {
        primary = "Levofloxacino 750mg 1x/dia (monoterapia respiratória)";
        alternatives = ["Aztreonam 2g 8/8h + Azitromicina 500mg/dia"];
        rationale = "ANAFILAXIA: quinolona respiratória como monoterapia em PAC.";
      } else {
        primary = "Ceftriaxona 1g 12/12h + Azitromicina 500mg 1x/dia";
        alternatives = ["Levofloxacino 750mg 1x/dia (monoterapia)", "Ampicilina-Sulbactam 3g 6/6h + Azitromicina"];
        rationale = "PAC grave internada: beta-lactâmico + macrolídeo (BTS/IDSA 2019).";
      }
    }
  } else if (focus === "URINÁRIO") {
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["E. coli ESBL", "Pseudomonas", "Enterococcus"];
      if (isAnaphylactic) {
        primary = "Aztreonam 2g 8/8h (Gram-neg) ± Vancomicina (se suspeita Enterococcus)";
        alternatives = ["Ciprofloxacino 400mg 12/12h IV", "Gentamicina 5mg/kg/dia (dose única)"];
        rationale = "ANAFILAXIA: Aztreonam cobre gram-neg incluindo Pseudomonas.";
      } else {
        primary = "Piperacilina-Tazobactam 4,5g 6/6h";
        alternatives = ["Meropenem 1g 8/8h", "Cefepime 2g 8/8h"];
        rationale = "ITU complicada hospitalar: cobertura ESBL.";
      }
    } else {
      coverageNeeded = ["E. coli", "Klebsiella", "Proteus"];
      primary = "Ceftriaxona 1g 12/12h";
      alternatives = ["Ciprofloxacino 400mg 12/12h IV", "Ampicilina-Sulbactam 3g 6/6h"];
      rationale = "Pielonefrite comunitária: cefalosporina 3ª geração.";
      if (isAnaphylactic) {
        primary = "Ciprofloxacino 400mg 12/12h IV";
        alternatives = ["Gentamicina 5mg/kg/dia (dose única)", "Aztreonam 2g 8/8h"];
        rationale = "ANAFILAXIA: quinolona para ITU comunitária.";
      }
    }
  } else if (focus === "ABDOMINAL") {
    coverageNeeded = ["Gram-negativos", "Anaeróbios", "Enterococcus"];
    if (isHospital || hasResistanceRisk) {
      if (isAnaphylactic) {
        primary = "Aztreonam 2g 8/8h + Metronidazol 500mg 8/8h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Ciprofloxacino 400mg 12/12h + Metronidazol 500mg 8/8h"];
        rationale = "ANAFILAXIA: Aztreonam (gram-neg) + Metronidazol (anaeróbios) + Vanco (Enterococcus).";
      } else {
        primary = "Piperacilina-Tazobactam 4,5g 6/6h";
        alternatives = ["Meropenem 1g 8/8h", "Cefepime 2g 8/8h + Metronidazol 500mg 8/8h"];
        rationale = "Infecção intra-abdominal hospitalar (SIS/IDSA 2017).";
      }
    } else {
      if (isAnaphylactic) {
        primary = "Ciprofloxacino 400mg 12/12h + Metronidazol 500mg 8/8h";
        alternatives = ["Aztreonam 2g 8/8h + Metronidazol 500mg 8/8h"];
        rationale = "ANAFILAXIA: quinolona + anaerobicida para infecção abdominal comunitária.";
      } else {
        primary = "Ceftriaxona 1g 12/12h + Metronidazol 500mg 8/8h";
        alternatives = ["Ampicilina-Sulbactam 3g 6/6h", "Piperacilina-Tazobactam 4,5g 6/6h"];
        rationale = "Infecção intra-abdominal comunitária: cef3 + anaerobicida.";
      }
    }
  } else if (focus === "PELE/TECIDOS") {
    coverageNeeded = ["S. aureus (MSSA/MRSA)", "Streptococcus", "Anaeróbios (se necrotizante)"];
    if (isHospital || hasResistanceRisk) {
      primary = "Vancomicina 15-20mg/kg 12/12h + Piperacilina-Tazobactam 4,5g 6/6h (se necrotizante)";
      alternatives = ["Vancomicina + Meropenem", "Daptomicina 6-8mg/kg/dia + Aztreonam"];
      rationale = "Infecção de pele hospitalar/necrotizante: cobrir MRSA + gram-negativos + anaeróbios.";
      if (isAnaphylactic) {
        primary = "Vancomicina 15-20mg/kg 12/12h + Aztreonam 2g 8/8h + Metronidazol 500mg 8/8h";
        alternatives = ["Daptomicina 6-8mg/kg/dia + Aztreonam", "Linezolida 600mg 12/12h + Aztreonam"];
        rationale = "ANAFILAXIA: Vancomicina/Daptomicina (MRSA) + Aztreonam (gram-neg) + Metronidazol (anaeróbios).";
      }
    } else {
      primary = "Cefazolina 2g 8/8h (celulite simples)";
      alternatives = ["Clindamicina 600mg 8/8h", "Oxacilina 2g 4/4h"];
      rationale = "Celulite comunitária: anti-estafilocócica.";
      if (isAnaphylactic) {
        primary = "Clindamicina 600mg 8/8h";
        alternatives = ["Vancomicina 15-20mg/kg 12/12h", "Daptomicina 4mg/kg/dia"];
        rationale = "ANAFILAXIA: Clindamicina como alternativa segura para pele.";
      }
    }
  } else if (focus === "SNC") {
    coverageNeeded = ["S. pneumoniae", "N. meningitidis", "Listeria (se > 50a ou imunossuprimido)"];
    if (isAnaphylactic) {
      primary = "Meropenem 2g 8/8h (exceção: SNC sem alternativa segura — risco cruzado < 1%, MONITORAR) + Dexametasona";
      alternatives = ["Cloranfenicol 1g 6/6h (se disponível)", "Aztreonam NÃO cobre gram-positivos — insuficiente para SNC"];
      rationale = "⚠️ ANAFILAXIA + SNC: situação crítica. Meropenem pode ser usado com cautela em SNC (sem alternativa monobactâmica adequada). Skin test prévio se possível.";
      allergyWarnings.push("🔴 SNC + ANAFILAXIA: Meropenem usado como EXCEÇÃO — sem alternativa monobactâmica para cobertura SNC. Monitorar reação alérgica.");
    } else {
      primary = "Ceftriaxona 2g 12/12h + Dexametasona 0,15mg/kg 6/6h (iniciar antes/junto ATB)";
      if (patient.ageYears && patient.ageYears > 50) {
        primary += " + Ampicilina 2g 4/4h (cobertura Listeria)";
      }
      alternatives = ["Meropenem 2g 8/8h (se alergia cefalosporina)"];
      rationale = "Meningite bacteriana: cef3 + dexametasona ± ampicilina (IDSA 2004/ESCMID 2016).";
    }
  } else {
    // Sem foco definido
    if (isHospital || hasResistanceRisk) {
      coverageNeeded = ["Gram-positivos (MRSA)", "Gram-negativos (Pseudomonas)", "Anaeróbios"];
      if (isAnaphylactic) {
        primary = "Aztreonam 2g 8/8h + Vancomicina 15-20mg/kg 12/12h + Metronidazol 500mg 8/8h";
        alternatives = ["Levofloxacino 750mg/dia + Vancomicina + Metronidazol", "Aztreonam + Linezolida + Metronidazol"];
        rationale = "ANAFILAXIA + sepse sem foco hospitalar: Aztreonam (gram-neg) + Vanco (MRSA) + Metro (anaeróbios).";
      } else {
        primary = "Piperacilina-Tazobactam 4,5g 6/6h + Vancomicina 15-20mg/kg 12/12h";
        alternatives = ["Cefepime 2g 8/8h + Vancomicina + Metronidazol", "Meropenem 1g 8/8h + Vancomicina"];
        rationale = "Sepse sem foco hospitalar: espectro amplo cobrindo MRSA + Pseudomonas + anaeróbios.";
      }
    } else {
      coverageNeeded = ["Gram-positivos", "Gram-negativos", "Atípicos"];
      if (isAnaphylactic) {
        primary = "Levofloxacino 750mg 1x/dia + Metronidazol 500mg 8/8h";
        alternatives = ["Aztreonam 2g 8/8h + Metronidazol", "Ciprofloxacino 400mg 12/12h + Metronidazol"];
        rationale = "ANAFILAXIA + sepse comunitária: quinolona amplo espectro.";
      } else {
        primary = "Ceftriaxona 1g 12/12h + Metronidazol 500mg 8/8h (se suspeita abdominal)";
        alternatives = ["Piperacilina-Tazobactam 4,5g 6/6h", "Levofloxacino 750mg 1x/dia"];
        rationale = "Sepse comunitária sem foco: cefalosporina amplo espectro. Definir foco para estreitar.";
      }
    }
  }

  // Renal adjustment note
  if (renal.clcrMlMin !== undefined && renal.clcrMlMin < 50) {
    rationale += ` ⚠️ Ajustar doses para ClCr ${renal.clcrMlMin} mL/min.`;
  }

  // MEROPENEM JUSTIFICATION CHECK
  if (/meropenem/i.test(primary)) {
    const justifications: string[] = [];
    if (isHospital) justifications.push("infecção hospitalar");
    if (riskFactors.recentATB) justifications.push("ATB recente");
    if (riskFactors.ventilated) justifications.push("ventilação mecânica");
    if (focus === "SNC") justifications.push("SNC (necessita alta penetração)");
    if (justifications.length === 0) {
      rationale += " ⚠️ JUSTIFICATIVA para Meropenem: NÃO HÁ JUSTIFICATIVA CLARA. Considerar esquema mais estreito.";
      questionsNeeded.push("Há justificativa para carbapenêmico? (falha ATB prévio, ESBL confirmado, choque séptico grave?)");
    } else {
      rationale += ` Justificativa Meropenem: ${justifications.join(", ")}.`;
    }
  }

  return { primary, alternatives, rationale, coverageNeeded, questionsNeeded, allergyWarnings };
}

// ─── Protocols ───────────────────────────────────────────────────
const PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  sepsis: {
    name: "Sepse / Choque Séptico — Bundle 1 Hora (Surviving Sepsis 2021)",
    steps: [
      { order: 1, action: "Lactato sérico IMEDIATO (repetir em 2-4h se > 2 mmol/L)", target: "Queda ≥ 20% em 2h" },
      { order: 2, action: "Hemoculturas (2 pares de sítios diferentes) ANTES do antibiótico" },
      { order: 3, action: "Antibiótico de amplo espectro em ≤ 1 HORA (ver recomendação do motor)" },
      { order: 4, action: "Cristaloide — VER REGRA DE VOLUME DO MOTOR (pode ser restrito em idoso/DRC/IC)", target: "Reavaliar a cada 250-500mL" },
      { order: 5, action: "Noradrenalina se PAM < 65 mmHg após volume adequado", target: "PAM ≥ 65 mmHg" },
      { order: 6, action: "Reavaliar responsividade a fluidos (elevação passiva de MMII, variação PP, eco POCUS)" },
      { order: 7, action: "Diurese alvo > 0,5 mL/kg/h — SVD para monitoração" },
      { order: 8, action: "Balanço hídrico rigoroso a cada 6h" },
      { order: 9, action: "Lactato seriado (repetir a cada 2-4h até normalização)" },
      { order: 10, action: "Hidrocortisona 200mg/dia (50mg 6/6h) se choque refratário a vasopressor ≥ 4h" },
      { order: 11, action: "Considerar TRS (diálise) se: oligúria refratária, K > 6,5, pH < 7,1, sobrecarga hídrica" },
      { order: 12, action: "Glicemia capilar 4/4h → insulina se > 180 mg/dL", target: "Glicemia 140-180 mg/dL" },
      { order: 13, action: "Profilaxia TVP: enoxaparina profilática OU HNF profilática (NÃO terapêutica sem indicação)" },
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
      { order: 7, action: "Cristaloide — VER REGRA DE VOLUME DO MOTOR (restrito em idoso/DRC/IC/dialítico)", target: "Reavaliar após cada 250-500mL com POCUS" },
      { order: 8, action: "Noradrenalina se PAM < 65 após volume — iniciar PRECOCE", target: "PAM ≥ 65 mmHg" },
      { order: 9, action: "Vasopressina 0,03 UI/min como 2º vasopressor se nora > 0,5 mcg/kg/min" },
      { order: 10, action: "Reavaliar volemia: eco POCUS, variação PP, elevação passiva MMII" },
      { order: 11, action: "SVD — diurese horária", target: "Diurese > 0,5 mL/kg/h" },
      { order: 12, action: "Balanço hídrico rigoroso a cada 6h" },
      { order: 13, action: "Hidrocortisona 200mg/dia (50mg 6/6h) se choque refratário ≥ 4h" },
      { order: 14, action: "Considerar TRS: oligúria refratária, K > 6,5, pH < 7,1, sobrecarga hídrica" },
      { order: 15, action: "Gasometria arterial seriada (a cada 2-4h)" },
      { order: 16, action: "Glicemia capilar 4/4h → insulina IV se > 180", target: "140-180 mg/dL" },
      { order: 17, action: "Profilaxia TVP: enoxaparina 40mg/dia SC (HNF 5000 UI 8/8h se ClCr < 30) — APENAS PROFILÁTICA" },
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
      { order: 4, action: "Ressuscitação volêmica se hipovolêmico/distributivo (CUIDADO em cardiogênico)" },
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
      { order: 6, action: "Anticoagulação (enoxaparina ou HNF) — INDICAÇÃO CLARA: SCA" },
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
  meningitis: {
    name: "Meningite Bacteriana — Protocolo de Emergência",
    steps: [
      { order: 1, action: "🔴 ANTIBIÓTICO IMEDIATO se suspeita forte — NÃO ATRASAR POR EXAME" },
      { order: 2, action: "Dexametasona 0,15mg/kg 6/6h IV (iniciar ANTES ou junto com 1ª dose ATB)", target: "Manter por 4 dias" },
      { order: 3, action: "Ceftriaxona 2g 12/12h IV (+ Ampicilina 2g 4/4h se > 50a ou imunossuprimido)" },
      { order: 4, action: "Hemoculturas (2 pares) ANTES do ATB se não atrasar" },
      { order: 5, action: "Punção lombar (LCR): citologia, bioquímica, gram, cultura, látex, PCR" },
      { order: 6, action: "TC crânio ANTES da PL se: papiledema, déficit focal, Glasgow < 12, imunossuprimido, convulsão recente" },
      { order: 7, action: "Monitorar Glasgow, pupilas, sinais vitais a cada 1-2h" },
      { order: 8, action: "Isolamento respiratório se suspeita de meningococo" },
      { order: 9, action: "Quimioprofilaxia contactantes se meningococo: Rifampicina 600mg 12/12h 2 dias" },
    ],
  },
  seizure: {
    name: "Estado de Mal Epiléptico — Adulto",
    steps: [
      { order: 1, action: "0-5 min: Estabilizar via aérea, O2, decúbito lateral, glicemia capilar" },
      { order: 2, action: "Acesso venoso. Tiamina 100mg IV + Glicose 50% 40mL (se hipoglicemia ou suspeita)" },
      { order: 3, action: "5-10 min: Diazepam 10mg IV (2mg/min) OU Midazolam 10mg IM", target: "Repetir 1x se necessário" },
      { order: 4, action: "10-20 min: Fenitoína 20mg/kg IV em 20 min (máx 50mg/min, monitorar ECG) OU Levetiracetam 60mg/kg IV (máx 4500mg) em 15 min" },
      { order: 5, action: "20-40 min: Se refratário → Fenobarbital 20mg/kg IV (máx 60mg/min)" },
      { order: 6, action: "> 40 min: EME refratário → Midazolam BIC 0,2mg/kg bolus + 0,1-0,4mg/kg/h OU Propofol (UTI)" },
      { order: 7, action: "Investigar causa: TC crânio, eletrólitos, toxicológico, LCR se febre" },
      { order: 8, action: "⚠️ Fenitoína: MONITORAR ECG (risco arritmia), não misturar com glicose" },
    ],
  },
  tce: {
    name: "TCE — Trauma Cranioencefálico",
    steps: [
      { order: 1, action: "ABCDE + imobilização cervical até exclusão de lesão" },
      { order: 2, action: "Glasgow: leve (13-15) | moderado (9-12) | grave (3-8)" },
      { order: 3, action: "TC crânio sem contraste URGENTE se: Glasgow < 15, perda de consciência, amnésia, vômitos, sinais de fratura, anticoagulado, > 65a" },
      { order: 4, action: "Se Glasgow ≤ 8: IOT + Ventilação mecânica. Cabeceira 30°", target: "PIC < 20 mmHg" },
      { order: 5, action: "Manitol 20% 1g/kg ou SF hipertônico 3% 250mL se hipertensão intracraniana" },
      { order: 6, action: "PA: manter PPC ≥ 60 mmHg (PPC = PAM - PIC)" },
      { order: 7, action: "⚠️ Se anticoagulado: reverter IMEDIATAMENTE (vitamina K, CCP, PFC conforme agente)" },
      { order: 8, action: "Profilaxia convulsão: Fenitoína 20mg/kg se TCE grave (7 dias)" },
      { order: 9, action: "Neurocirurgia se: hematoma epidural, subdural > 10mm, desvio linha média > 5mm" },
      { order: 10, action: "Monitorar: Glasgow horário, pupilas, glicemia, Na, osmolaridade" },
    ],
  },
  coma: {
    name: "Rebaixamento de Consciência / Coma — Abordagem Sistemática",
    steps: [
      { order: 1, action: "ABCDE + Glasgow + pupilas + glicemia capilar" },
      { order: 2, action: "Corrigir causas reversíveis IMEDIATAMENTE: Glicose (se hipoglicemia), Tiamina (etilista/desnutrido), Naloxone (suspeita opioide), Flumazenil (suspeita BZD)" },
      { order: 3, action: "Avaliar '5H e 5T': Hipoglicemia, Hipóxia, Hipotensão, Hipotermia, H+ (acidose), Toxinas, Tamponamento, Tensão (pneumotórax), TEP, Trauma" },
      { order: 4, action: "TC crânio sem contraste URGENTE" },
      { order: 5, action: "Gasometria + eletrólitos + glicemia + função renal + hepática + amônia + toxicológico" },
      { order: 6, action: "Se febre + rigidez nuca: pensar meningite/encefalite → ATB empírico + Aciclovir se suspeita viral" },
      { order: 7, action: "Se Glasgow ≤ 8: IOT + Ventilação mecânica" },
      { order: 8, action: "Monitorar: Glasgow horário, pupilas, Na, osmolaridade, PIC se disponível" },
    ],
  },
  delirium: {
    name: "Delirium — Avaliação e Manejo",
    steps: [
      { order: 1, action: "Diagnóstico: CAM (Confusion Assessment Method) — início agudo + flutuação + desatenção + pensamento desorganizado OU rebaixamento" },
      { order: 2, action: "Investigar causa: infecção, metabólico, droga, dor, retenção urinária, constipação, hipóxia" },
      { order: 3, action: "Exames: hemograma, PCR, eletrólitos, glicemia, função renal/hepática, gasometria, urina I, RX tórax" },
      { order: 4, action: "TC crânio se: déficit focal, TCE, anticoagulado, sem causa aparente" },
      { order: 5, action: "Medidas NÃO farmacológicas PRIMEIRO: reorientação, iluminação, mobilização, sono, óculos/prótese auditiva" },
      { order: 6, action: "Se agitação grave (risco para si/equipe): Haloperidol 0,5-2mg IV/IM (dose menor em idoso)", target: "NÃO usar BZD (piora delirium, exceto em abstinência)" },
      { order: 7, action: "⚠️ Haloperidol: monitorar QTc. EVITAR se QT > 500ms. EVITAR em Parkinson." },
      { order: 8, action: "Tratar causa base. Revisar medicações (suspender BZD, anticolinérgicos, opioides se possível)" },
    ],
  },
};

// ─── Obstetric Protocols ─────────────────────────────────────────
const OBSTETRIC_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  preeclampsia: {
    name: "Pré-eclâmpsia Grave / Eclâmpsia — FEBRASGO/ACOG",
    steps: [
      { order: 1, action: "🔴 EMERGÊNCIA OBSTÉTRICA — Estabilizar mãe é prioridade" },
      { order: 2, action: "Sulfato de Magnésio (Zuspan): 4g IV em 20min (diluir em 100mL SF) → 1-2g/h BIC", target: "Prevenir/tratar convulsão" },
      { order: 3, action: "Monitorar Mg: reflexo patelar, FR > 16, diurese > 25mL/h. Antídoto: Gluconato de Ca 1g IV se toxicidade" },
      { order: 4, action: "Anti-hipertensivo: Hidralazina 5mg IV a cada 20min (máx 20mg) OU Nifedipino 10mg VO", target: "PA < 160x110 (NÃO reduzir < 140x90)" },
      { order: 5, action: "⚠️ EVITAR: IECA, BRA, nitroprussiato (toxicidade fetal)" },
      { order: 6, action: "Exames: hemograma, plaquetas, TGO/TGP, LDH, bilirrubinas, Cr, ácido úrico, proteinúria" },
      { order: 7, action: "Avaliar HELLP: plaquetas < 100.000 + AST > 70 + LDH > 600 + esquizócitos" },
      { order: 8, action: "Se eclâmpsia (convulsão): MgSO4 + estabilizar + avaliar parto IMEDIATO" },
      { order: 9, action: "Avaliação fetal: cardiotocografia, USG doppler" },
      { order: 10, action: "Se ≥ 34 sem: considerar parto. Se < 34 sem: corticoide (betametasona 12mg IM 2 doses 24h) + avaliar" },
      { order: 11, action: "Manter MgSO4 por 24h pós-parto" },
    ],
  },
  obstetric_hemorrhage: {
    name: "Hemorragia Obstétrica — Protocolo de Emergência",
    steps: [
      { order: 1, action: "🔴 ATIVAR PROTOCOLO DE HEMORRAGIA MACIÇA" },
      { order: 2, action: "2 acessos calibrosos (16-18G) + cristaloide aquecido" },
      { order: 3, action: "Tipagem + reserva + solicitar hemoderivados" },
      { order: 4, action: "Ocitocina 10-40 UI em 500mL SF BIC (1ª linha para atonia)" },
      { order: 5, action: "Se refratário: Metilergometrina 0,2mg IM (⚠️ CONTRAINDICADO se HAS)" },
      { order: 6, action: "Misoprostol 800mcg VR se atonia refratária" },
      { order: 7, action: "Ácido tranexâmico 1g IV em 10min (se < 3h do início)" },
      { order: 8, action: "Massagem uterina bimanual" },
      { order: 9, action: "Avaliar causa: 4T (Tônus, Trauma, Tecido, Trombina)" },
      { order: 10, action: "Se refratário: balão de Bakri, sutura B-Lynch, embolização, histerectomia" },
      { order: 11, action: "Metas: Hb > 7, plaquetas > 50.000, fibrinogênio > 200" },
    ],
  },
  ectopic: {
    name: "Gravidez Ectópica — Conduta",
    steps: [
      { order: 1, action: "Suspeitar se: atraso menstrual + dor pélvica + sangramento ± instabilidade" },
      { order: 2, action: "Beta-hCG quantitativo + USG transvaginal" },
      { order: 3, action: "Se instável (choque): cirurgia IMEDIATA (laparoscopia/laparotomia)" },
      { order: 4, action: "Se estável + ectópica íntegra + hCG < 5000: considerar metotrexato 50mg/m² IM dose única" },
      { order: 5, action: "Contraindicações metotrexato: BCF +, hCG > 5000, massa > 4cm, contraindicação clínica" },
      { order: 6, action: "Seguimento hCG seriado após tratamento" },
      { order: 7, action: "Tipagem sanguínea: anti-D se Rh negativo" },
    ],
  },
  sepsis_puerperal: {
    name: "Sepse Puerperal — Conduta",
    steps: [
      { order: 1, action: "Suspeitar se: febre > 38°C + taquicardia + dor pélvica/uterina no puerpério" },
      { order: 2, action: "Hemoculturas (2 pares) ANTES do ATB" },
      { order: 3, action: "Antibiótico amplo espectro: Clindamicina 900mg 8/8h + Gentamicina 5mg/kg/dia ± Ampicilina 2g 6/6h" },
      { order: 4, action: "Alternativa: Piperacilina-Tazobactam 4,5g 6/6h" },
      { order: 5, action: "USG pélvica: avaliar restos ovulares, abscesso, coleção" },
      { order: 6, action: "Ressuscitação volêmica se sepse (seguir bundle sepse)" },
      { order: 7, action: "Avaliar necessidade de curetagem/drenagem" },
      { order: 8, action: "Profilaxia TEV: enoxaparina 40mg/dia (puerpério = risco alto)" },
    ],
  },
};

// ─── ICU / Critical Protocols ────────────────────────────────────
const ICU_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  icu_general: {
    name: "Paciente Crítico — Abordagem UTI Completa",
    steps: [
      { order: 1, action: "ABCDE obrigatório: via aérea, respiração, circulação, neurológico, exposição" },
      { order: 2, action: "Classificar choque: séptico, cardiogênico, hipovolêmico, obstrutivo, distributivo", target: "NÃO assumir sepse automaticamente" },
      { order: 3, action: "Acesso central (duplo lúmen) + PAI (linha arterial)", target: "PAM ≥ 65 mmHg contínua" },
      { order: 4, action: "Monitor multiparamétrico: ECG, SpO2, EtCO2, PAI, PVC" },
      { order: 5, action: "Volume: 250-500 mL cristaloide → reavaliar (POCUS, elevação MMII, variação PP)", target: "NÃO usar 30 mL/kg automático em idoso/DRC/IC" },
      { order: 6, action: "Noradrenalina se PAM < 65 após volume. Dose: 0,1-2 mcg/kg/min. Mostrar diluição + ml/h" },
      { order: 7, action: "Se refratário (nora > 0,5): vasopressina 0,03 UI/min → dobutamina se baixo DC → hidrocortisona 200mg/dia" },
      { order: 8, action: "IOT se: Glasgow < 8, hipoxemia refratária, fadiga, choque grave" },
      { order: 9, action: "VM: VT 6-8 mL/kg peso predito, PEEP ≥ 5, FiO2 para SpO2 92-96%, FR 14-20", target: "Evitar barotrauma" },
      { order: 10, action: "Sedação: midazolam/propofol + fentanil. Dose por kg. Dexmedetomidina se extubação precoce" },
      { order: 11, action: "Lactato sérico seriado a cada 2-4h", target: "Queda ≥ 20% em 2h" },
      { order: 12, action: "Gasometria arterial seriada" },
      { order: 13, action: "Calcular ClCr → ajustar TODAS as drogas renais" },
      { order: 14, action: "Glicemia capilar 4/4h → insulina se > 180", target: "140-180 mg/dL" },
      { order: 15, action: "Profilaxia TVP (enoxaparina/HNF profilática) + úlcera estresse (omeprazol 40mg)" },
      { order: 16, action: "Balanço hídrico rigoroso 6/6h. Diurese horária", target: "Diurese > 0,5 mL/kg/h" },
    ],
  },
  intubation_rsi: {
    name: "Intubação de Sequência Rápida (ISR)",
    steps: [
      { order: 1, action: "Pré-oxigenação: O2 100% 3-5 min ou 8 respirações VCF" },
      { order: 2, action: "Posicionamento: rampa (obeso) ou sniffing position" },
      { order: 3, action: "Indutor: Etomidato 0,3 mg/kg IV (estabilidade hemodinâmica) OU Ketamina 1-2 mg/kg IV (broncoespasmo, choque)" },
      { order: 4, action: "Bloqueador NM: Rocurônio 1,2 mg/kg IV (início 60s, duração 45min) OU Succinilcolina 1-1,5 mg/kg IV (início 30s, duração 5-10min)" },
      { order: 5, action: "⚠️ Succinilcolina: CI se hipercalemia, queimadura > 72h, lesão medular, miopatia, rabdomiólise" },
      { order: 6, action: "Confirmar posição: capnografia (EtCO2), ausculta bilateral, expansibilidade" },
      { order: 7, action: "Fixar tubo + RX tórax" },
      { order: 8, action: "Iniciar sedação contínua + analgesia" },
    ],
  },
};

// ─── Trauma / Surgery Protocols ──────────────────────────────────
const TRAUMA_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  trauma_atls: {
    name: "Trauma Grave — ATLS",
    steps: [
      { order: 1, action: "A: Via aérea com proteção cervical. IOT se necessário (colar cervical mantido)" },
      { order: 2, action: "B: Respiração — excluir pneumotórax hipertensivo, hemotórax, tórax instável. Drenagem se indicado" },
      { order: 3, action: "C: Circulação — 2 acessos calibrosos (16-18G). Compressão hemorragia externa" },
      { order: 4, action: "Cristaloide aquecido 500mL → reavaliar. Se choque classe III/IV → sangue precoce" },
      { order: 5, action: "Ácido tranexâmico 1g IV em 10min se < 3h do trauma" },
      { order: 6, action: "Tipagem + reserva + protocolo de transfusão maciça se indicado (CH:PFC:PLQ 1:1:1)" },
      { order: 7, action: "D: Neurológico — Glasgow, pupilas, déficit motor/sensitivo" },
      { order: 8, action: "E: Exposição — despir, avaliar lesões, prevenir hipotermia (manta térmica)" },
      { order: 9, action: "FAST (eco POCUS): líquido livre abdominal/pericárdico" },
      { order: 10, action: "TC corpo inteiro (pan-scan) se politrauma + instável pós-ressuscitação" },
      { order: 11, action: "Se anticoagulado: reverter IMEDIATAMENTE (vitamina K, CCP, PFC)" },
      { order: 12, action: "Avaliação secundária: head-to-toe após estabilização" },
    ],
  },
  abdome_agudo: {
    name: "Abdome Agudo — Avaliação e Conduta",
    steps: [
      { order: 1, action: "Avaliar instabilidade hemodinâmica — se presente: ressuscitar PRIMEIRO" },
      { order: 2, action: "Considerar diagnósticos: apendicite, colecistite, pancreatite, perfuração, obstrução, isquemia, ectópica" },
      { order: 3, action: "NUNCA assumir gastrite ou diagnóstico benigno sem investigar" },
      { order: 4, action: "Exames: hemograma, PCR, amilase/lipase, TGO/TGP, bilirrubinas, lactato, Cr, beta-hCG (mulher fértil)" },
      { order: 5, action: "Imagem: USG abdominal (1ª linha) → TC abdome com contraste se necessário" },
      { order: 6, action: "Analgesia: dipirona IV + opioide se dor intensa (NÃO atrasar analgesia)" },
      { order: 7, action: "ATB: Ceftriaxona 2g + Metronidazol 500mg se suspeita de perfuração/infecção abdominal" },
      { order: 8, action: "Jejum se possibilidade cirúrgica" },
      { order: 9, action: "Avaliação cirúrgica precoce se: perfuração, obstrução, isquemia, apendicite" },
      { order: 10, action: "⚠️ Idoso: abdome agudo com pouca dor = MAIS GRAVE. Investigar mais." },
    ],
  },
  hemorrhagic_shock: {
    name: "Choque Hemorrágico no Trauma",
    steps: [
      { order: 1, action: "Classe I (<15% volemia): FC normal, PA normal → cristaloide" },
      { order: 2, action: "Classe II (15-30%): FC 100-120, PA normal → cristaloide + considerar sangue" },
      { order: 3, action: "Classe III (30-40%): FC > 120, PA↓, confuso → sangue + protocolo maciço" },
      { order: 4, action: "Classe IV (>40%): FC > 140, PA muito↓, letárgico → sangue urgente + cirurgia" },
      { order: 5, action: "Ácido tranexâmico 1g IV se < 3h" },
      { order: 6, action: "Protocolo transfusão maciça: CH:PFC:PLQ 1:1:1" },
      { order: 7, action: "Metas: Hb > 7, plaquetas > 50.000, fibrinogênio > 200, pH > 7.2, Ca ionizado > 1.0, temp > 35°C" },
      { order: 8, action: "Evitar hipotermia (tríade letal: hipotermia + acidose + coagulopatia)" },
    ],
  },
};

// ─── Orthopedic Protocols ────────────────────────────────────────
const ORTHO_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  fracture: {
    name: "Fratura — Avaliação e Conduta Inicial",
    steps: [
      { order: 1, action: "Avaliar mecanismo de trauma: queda, acidente, impacto, altura" },
      { order: 2, action: "Exame neurovascular OBRIGATÓRIO: pulso distal, sensibilidade, motor, perfusão", target: "Se alterado → URGÊNCIA" },
      { order: 3, action: "Imobilizar ANTES de movimentar ou transportar" },
      { order: 4, action: "Analgesia: dipirona + opioide se dor intensa. Ajustar por peso/rim/idade" },
      { order: 5, action: "RX em 2 incidências (AP + perfil) incluindo articulações proximal e distal" },
      { order: 6, action: "Se fratura exposta: ATB profilático (cefalosporina ± aminoglicosídeo), curativo estéril, cirurgia" },
      { order: 7, action: "Avaliar necessidade de redução/cirurgia (ortopedia)" },
      { order: 8, action: "⚠️ Idoso: investigar causa da queda (síncope, arritmia, ortostatismo). Risco fraturas patológicas." },
      { order: 9, action: "⚠️ Anticoagulado: risco de hematoma. Monitorar compartimento." },
      { order: 10, action: "Profilaxia TEV se imobilização prolongada" },
    ],
  },
  luxation: {
    name: "Luxação — Avaliação e Conduta",
    steps: [
      { order: 1, action: "Exame neurovascular ANTES da redução" },
      { order: 2, action: "RX pré-redução para confirmar e excluir fratura associada" },
      { order: 3, action: "Analgesia/sedação para redução (midazolam + fentanil ou ketamina)" },
      { order: 4, action: "Redução pela técnica apropriada para cada articulação" },
      { order: 5, action: "RX pós-redução para confirmar" },
      { order: 6, action: "Exame neurovascular pós-redução" },
      { order: 7, action: "Imobilização + encaminhar ortopedia" },
    ],
  },
  low_back_pain: {
    name: "Dor Lombar — Red Flags e Conduta",
    steps: [
      { order: 1, action: "Red flags: déficit neurológico, retenção urinária, febre, perda ponderal, trauma, câncer, uso de corticoide" },
      { order: 2, action: "Se red flag presente → investigar: RM, hemograma, VHS/PCR, PSA se homem" },
      { order: 3, action: "Se sem red flags: lombalgia mecânica → analgesia + orientação" },
      { order: 4, action: "Analgesia: paracetamol/dipirona + AINE (se rim ok) + relaxante muscular ± opioide se grave" },
      { order: 5, action: "Repouso relativo (NÃO repouso absoluto)" },
      { order: 6, action: "Encaminhar ortopedia/neurocirurgia se: síndrome da cauda equina, déficit motor progressivo" },
    ],
  },
};

// ─── Gastroenterology Protocols ──────────────────────────────────
const GASTRO_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  hda: {
    name: "Hemorragia Digestiva Alta — Protocolo",
    steps: [
      { order: 1, action: "Avaliar choque: PA, FC, perfusão. 2 acessos calibrosos 16-18G" },
      { order: 2, action: "Hemograma, INR, tipagem, Cr, lactato, gasometria" },
      { order: 3, action: "IBP IV: omeprazol 80mg bolus + 8mg/h BIC (antes da EDA)" },
      { order: 4, action: "Se suspeita varicosa (cirrose): octreotida 50mcg bolus + 50mcg/h BIC OU terlipressina 2mg IV 4/4h" },
      { order: 5, action: "Antibiótico profilático se cirrose: ceftriaxona 1g IV 1x/dia (7 dias)" },
      { order: 6, action: "Transfusão se Hb < 7 (alvo conservador). Se choque → transfusão imediata" },
      { order: 7, action: "EDA em ≤ 12-24h (≤ 12h se alto risco / cirrose)", target: "Hemostasia endoscópica" },
      { order: 8, action: "Se anticoagulado: avaliar reversão (vitamina K, CCP). INR alvo." },
      { order: 9, action: "⚠️ Evitar SNG para lavagem — controverso e sem benefício comprovado" },
      { order: 10, action: "Se sangramento maciço refratário: angioembolização ou cirurgia" },
    ],
  },
  pancreatite: {
    name: "Pancreatite Aguda — Conduta",
    steps: [
      { order: 1, action: "Diagnóstico: 2 de 3 → dor abdominal típica + amilase/lipase > 3x + imagem" },
      { order: 2, action: "Classificar gravidade: BISAP, Ranson, APACHE II, TC (Balthazar)" },
      { order: 3, action: "Hidratação vigorosa: RL 250-500 mL/h nas primeiras 12-24h (reavaliar em idoso/DRC/IC)" },
      { order: 4, action: "Analgesia: dipirona + tramadol/morfina. Evitar meperidina." },
      { order: 5, action: "Jejum inicial → dieta oral precoce assim que tolerada (NÃO esperar amilase normalizar)" },
      { order: 6, action: "ATB: NÃO usar profilático. Apenas se necrose infectada confirmada" },
      { order: 7, action: "TC abdome com contraste se não melhora em 48-72h (avaliar necrose)" },
      { order: 8, action: "Se biliar: USG (colelitíase) → colecistectomia na mesma internação se leve" },
      { order: 9, action: "Monitorar: PCR, hemograma, Cr, Ca, glicemia" },
    ],
  },
  cirrose_descomp: {
    name: "Cirrose Descompensada — Conduta",
    steps: [
      { order: 1, action: "Avaliar: varizes (HDA), ascite, encefalopatia hepática (EH), PBE, SHR" },
      { order: 2, action: "Se HDA varicosa: octreotida/terlipressina + EDA + ceftriaxona profilática" },
      { order: 3, action: "Se ascite tensa: paracentese de alívio + albumina 8g/L retirado (se > 5L)" },
      { order: 4, action: "Se PBE (PMN > 250 no líquido): ceftriaxona 2g/dia 5-7 dias + albumina D1 e D3" },
      { order: 5, action: "Se EH: lactulose 30mL 8/8h (alvo 2-3 evacuações/dia) + rifaximina 550mg 12/12h" },
      { order: 6, action: "EVITAR excesso de volume. EVITAR AINEs, aminoglicosídeos. Cautela com opioides/BZD." },
      { order: 7, action: "Monitorar: Na, K, Cr, INR, albumina, bilirrubinas, amônia" },
      { order: 8, action: "MELD score para prognóstico e transplante" },
    ],
  },
  colecistite: {
    name: "Colecistite / Colangite Aguda",
    steps: [
      { order: 1, action: "Tríade de Charcot (colangite): febre + dor HCD + icterícia. Pêntade de Reynolds: + hipotensão + confusão" },
      { order: 2, action: "Exames: hemograma, PCR, TGO/TGP, FA, GGT, bilirrubinas, amilase, hemoculturas" },
      { order: 3, action: "USG abdominal: cálculo, espessamento parede, Murphy sonográfico, dilatação vias biliares" },
      { order: 4, action: "ATB: Ceftriaxona 2g/dia + Metronidazol 500mg 8/8h. Se grave: Piperacilina-Tazobactam" },
      { order: 5, action: "Colecistite: colecistectomia precoce (< 72h)" },
      { order: 6, action: "Colangite: CPRE para drenagem biliar de urgência se grave" },
    ],
  },
};

// ─── Endocrine / Metabolic Protocols ─────────────────────────────
const ENDOCRINE_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  cad: {
    name: "Cetoacidose Diabética (CAD) — Protocolo",
    steps: [
      { order: 1, action: "Critérios: glicose > 250 + pH < 7,3 + HCO3 < 18 + cetonemia/cetonúria" },
      { order: 2, action: "Hidratação: SF 0,9% 1000-1500 mL na 1ª hora → 250-500 mL/h", target: "Reavaliar em idoso/DRC/IC" },
      { order: 3, action: "⚠️ POTÁSSIO ANTES DA INSULINA: Se K < 3,3 → corrigir K ANTES. Se K 3,3-5,3 → KCl 20-40 mEq/L no soro. Se K > 5,3 → iniciar insulina, monitorar K 2/2h" },
      { order: 4, action: "Insulina Regular: 0,1 UI/kg/h IV (BIC). NÃO fazer bolus na CAD leve/moderada" },
      { order: 5, action: "Quando glicemia < 250: trocar para SG 5% + manter insulina até resolver cetoacidose" },
      { order: 6, action: "Resolução: pH > 7,3 + HCO3 > 18 + glicemia < 200 + anion gap normal" },
      { order: 7, action: "Transição para SC: insulina SC 1-2h ANTES de suspender BIC" },
      { order: 8, action: "Monitorar: glicemia 1/1h, gasometria 2-4h, K 2/2h, Na corrigido, osmolaridade" },
      { order: 9, action: "BIC (bicarbonato): APENAS se pH < 6,9 (100 mEq em 400mL em 2h)" },
      { order: 10, action: "Investigar fator precipitante: infecção, IAM, AVC, má adesão" },
    ],
  },
  hhs: {
    name: "Estado Hiperosmolar Hiperglicêmico (EHH)",
    steps: [
      { order: 1, action: "Critérios: glicose > 600 + osmolaridade > 320 + pH > 7,3 + desidratação grave" },
      { order: 2, action: "HIDRATAR PRIMEIRO: SF 0,9% 1000-1500 mL na 1ª hora → 250-500 mL/h" },
      { order: 3, action: "Quando PA estabilizar: avaliar Na corrigido. Se Na alto → SF 0,45%" },
      { order: 4, action: "Insulina: iniciar APÓS hidratação adequada. 0,05-0,1 UI/kg/h IV" },
      { order: 5, action: "Monitorar K igual CAD. Repor K conforme necessário" },
      { order: 6, action: "Osmolaridade alvo: queda < 3 mOsm/h (risco edema cerebral se rápido demais)" },
      { order: 7, action: "Profilaxia TEV: enoxaparina (alto risco trombótico)" },
      { order: 8, action: "Investigar precipitante: infecção, AVC, IAM, desidratação" },
    ],
  },
  hyperkalemia: {
    name: "Hipercalemia — Protocolo de Emergência",
    steps: [
      { order: 1, action: "ECG IMEDIATO: ondas T apiculadas, alargamento QRS, perda onda P, sine wave" },
      { order: 2, action: "Se alteração ECG: Gluconato de Cálcio 10% 10mL IV em 2-3 min (estabiliza membrana)", target: "Repetir em 5-10 min se necessário" },
      { order: 3, action: "Shift (mover K para dentro da célula): Insulina 10 UI + Glicose 50% 50mL (25g) IV" },
      { order: 4, action: "Nebulização com salbutamol 10-20mg (adjuvante)" },
      { order: 5, action: "Bicarbonato de sódio 50 mEq IV se acidose metabólica" },
      { order: 6, action: "Eliminação: Furosemida 40-80mg IV, resina de troca (poliestirenossulfonato de Ca)" },
      { order: 7, action: "Se refratário ou K > 6,5 com alteração ECG: diálise de urgência" },
      { order: 8, action: "Suspender drogas que elevam K: IECA, BRA, espironolactona, suplemento K" },
    ],
  },
  hyponatremia: {
    name: "Hiponatremia — Correção Segura",
    steps: [
      { order: 1, action: "Classificar: leve (130-134), moderada (125-129), grave (< 125)" },
      { order: 2, action: "Se sintomas graves (convulsão, coma): NaCl 3% 100mL IV em 10min, repetir até 2x", target: "Aumentar Na 4-6 mEq/L nas primeiras 6h" },
      { order: 3, action: "Correção LENTA: máximo 8-10 mEq/L em 24h", target: "Risco de mielinólise pontina se > 10-12 mEq/L/24h" },
      { order: 4, action: "Identificar causa: SIADH, hipovolêmica, hipervolêmica (IC, cirrose, DRC)" },
      { order: 5, action: "Monitorar Na a cada 2-4h durante correção" },
      { order: 6, action: "Se Na subir rápido demais: SG 5% + considerar desmopressina 2mcg IV para frear" },
    ],
  },
  thyroid_storm: {
    name: "Tireotoxicose / Tempestade Tireoidiana",
    steps: [
      { order: 1, action: "Score de Burch-Wartofsky > 45: tempestade tireoidiana provável" },
      { order: 2, action: "Betabloqueador: Propranolol 60-80mg VO 6/6h OU Esmolol IV se grave", target: "FC < 100" },
      { order: 3, action: "Antitireoidiano: PTU 200mg VO/SNG 6/6h (preferir PTU na crise por bloqueio T4→T3)" },
      { order: 4, action: "Iodo (1h APÓS PTU): Lugol 10 gotas 8/8h OU iodeto de potássio" },
      { order: 5, action: "Corticoide: Hidrocortisona 100mg IV 8/8h (bloqueia T4→T3 + insuf. adrenal relativa)" },
      { order: 6, action: "Suporte: resfriamento ativo (evitar AAS), hidratação, monitorização UTI" },
      { order: 7, action: "Investigar precipitante: infecção, cirurgia, iodo, suspensão de medicação" },
    ],
  },
  myxedema: {
    name: "Coma Mixedematoso — Emergência",
    steps: [
      { order: 1, action: "Suspeitar se: hipotermia + bradicardia + rebaixamento + hipotensão + hipoglicemia + hiponatremia" },
      { order: 2, action: "Levotiroxina IV: 200-500mcg bolus → 50-100mcg/dia IV" },
      { order: 3, action: "Hidrocortisona 100mg IV 8/8h (ANTES da levotiroxina — insuf. adrenal associada)" },
      { order: 4, action: "Aquecimento passivo (mantas). NÃO aquecer ativamente rápido" },
      { order: 5, action: "Suporte: IOT se necessário, vasopressor, correção hipoglicemia/hiponatremia" },
      { order: 6, action: "Monitorização em UTI" },
    ],
  },
};

// ─── Respiratory Protocols ───────────────────────────────────────
const RESPIRATORY_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  asthma_crisis: {
    name: "Crise Asmática — Protocolo",
    steps: [
      { order: 1, action: "O2 suplementar se SpO2 < 94%", target: "SpO2 ≥ 94%" },
      { order: 2, action: "Salbutamol 400-800 mcg (4-8 jatos) com espaçador a cada 20 min por 1h OU nebulização 2,5-5mg" },
      { order: 3, action: "Brometo de ipratrópio 80 mcg (4 jatos) a cada 20 min por 1h OU nebulização 0,5mg" },
      { order: 4, action: "Corticoide sistêmico: Prednisona 40-60mg VO OU Hidrocortisona 200mg IV (se grave)" },
      { order: 5, action: "Se crise grave/refratária: Sulfato de Magnésio 2g IV em 20 min" },
      { order: 6, action: "Se falha: considerar VNI. Se Glasgow < 8 ou fadiga → IOT" },
      { order: 7, action: "Classificar gravidade: leve (fala frases), moderada (fala palavras), grave (silêncio/cianose)" },
      { order: 8, action: "Reavaliação em 1h: se melhora → alta com corticoide 5-7 dias + plano de ação" },
    ],
  },
  dpoc_exacerbation: {
    name: "Exacerbação de DPOC — Protocolo",
    steps: [
      { order: 1, action: "O2 CONTROLADO: cateter nasal 1-3 L/min OU máscara Venturi", target: "SpO2 88-92% (NUNCA hiperóxia)" },
      { order: 2, action: "Broncodilatador: Salbutamol 400-800 mcg + Ipratrópio 80 mcg a cada 20 min por 1h" },
      { order: 3, action: "Corticoide: Prednisona 40mg VO 5-7 dias OU Hidrocortisona 200mg IV" },
      { order: 4, action: "Antibiótico se: purulência escarro + dispneia + aumento volume escarro (2/3 critérios Anthonisen)" },
      { order: 5, action: "ATB: Amoxicilina-Clavulanato VO OU Levofloxacino se grave" },
      { order: 6, action: "VNI (BiPAP) se: acidose respiratória (pH < 7,35), hipercapnia, fadiga", target: "IPAP 10-20, EPAP 4-8" },
      { order: 7, action: "Se falha VNI ou Glasgow < 8 → IOT" },
      { order: 8, action: "Gasometria arterial seriada" },
    ],
  },
  pneumonia_cap: {
    name: "Pneumonia Adquirida na Comunidade (PAC)",
    steps: [
      { order: 1, action: "Avaliar gravidade: CURB-65 ou PSI" },
      { order: 2, action: "CURB-65 0-1: ambulatório → Amoxicilina 1g 8/8h VO OU Azitromicina 500mg/dia 5 dias" },
      { order: 3, action: "CURB-65 2: internação → Ceftriaxona 1g/dia IV + Azitromicina 500mg/dia" },
      { order: 4, action: "CURB-65 3-5 ou UTI: Ceftriaxona 2g/dia + Azitromicina. Se Pseudomonas: Cefepime/Piptazo + Levofloxacino" },
      { order: 5, action: "Hemoculturas (2 pares) ANTES do ATB se internação" },
      { order: 6, action: "RX tórax (PA e perfil). TC se dúvida ou complicação" },
      { order: 7, action: "O2 suplementar se SpO2 < 94% (88-92% se DPOC)" },
      { order: 8, action: "Reavaliação em 48-72h" },
    ],
  },
  tep: {
    name: "Tromboembolismo Pulmonar (TEP)",
    steps: [
      { order: 1, action: "Suspeitar se: dispneia súbita + dor torácica + taquicardia + hipóxia ± hemoptise" },
      { order: 2, action: "Estratificar risco: Wells score. Se alta probabilidade ou instável → tratar" },
      { order: 3, action: "D-dímero: se baixa/intermediária probabilidade. Se negativo: exclui TEP" },
      { order: 4, action: "Angiotomografia de tórax (padrão ouro). Alternativa: cintilografia V/Q" },
      { order: 5, action: "Se TEP maciço (instável): trombólise → Alteplase 100mg IV em 2h OU 0,6mg/kg em 15min (máx 50mg)" },
      { order: 6, action: "Anticoagulação: Enoxaparina 1mg/kg 12/12h SC OU HNF 80 UI/kg bolus + 18 UI/kg/h" },
      { order: 7, action: "Ecocardiograma point-of-care: disfunção VD, McConnell" },
      { order: 8, action: "Se contraindicação à anticoagulação: filtro de VCI" },
      { order: 9, action: "Suporte: O2, volume (500mL se hipotenso, cautela se VD dilatado), vasopressor" },
    ],
  },
  pneumothorax: {
    name: "Pneumotórax — Conduta",
    steps: [
      { order: 1, action: "RX tórax PA em inspiração. USG point-of-care se disponível" },
      { order: 2, action: "Pneumotórax pequeno (< 2cm) + estável: observação + O2 alto fluxo + RX controle 6h" },
      { order: 3, action: "Pneumotórax grande ou sintomático: drenagem torácica (dreno 24-28F no 5º EIC LAM)" },
      { order: 4, action: "Pneumotórax hipertensivo: descompressão imediata (2º EIC LHC agulha 14G) → dreno" },
      { order: 5, action: "Monitorar: SpO2, FR, expansibilidade, sinais vitais" },
      { order: 6, action: "Se bilateral ou recorrente: avaliar cirurgia (VATS)" },
    ],
  },
  eap: {
    name: "Edema Agudo de Pulmão (EAP)",
    steps: [
      { order: 1, action: "Sentar paciente. O2 suplementar", target: "SpO2 ≥ 94%" },
      { order: 2, action: "VNI (CPAP 10cmH2O ou BiPAP) se consciente e colaborativo" },
      { order: 3, action: "Furosemida 40-80mg IV (repetir conforme resposta)" },
      { order: 4, action: "Nitroglicerina SL ou IV se PA > 90 (5-200 mcg/min)", target: "PAS > 100" },
      { order: 5, action: "Morfina 2-4mg IV se ansiedade intensa (cautela em DPOC, idoso)" },
      { order: 6, action: "Tratar causa: HAS, IAM, arritmia, sobrecarga volêmica" },
      { order: 7, action: "Se refratário ou Glasgow < 8 → IOT" },
      { order: 8, action: "Ecocardiograma, BNP/NT-proBNP, RX tórax" },
    ],
  },
};

// ─── Psychiatry Protocols ────────────────────────────────────────
const PSYCHIATRY_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  agitation: {
    name: "Agitação Psicomotora — Protocolo",
    steps: [
      { order: 1, action: "SEGURANÇA: proteger paciente e equipe. Avaliar risco auto/heteroagressão" },
      { order: 2, action: "EXCLUIR CAUSA ORGÂNICA PRIMEIRO: glicemia, SpO2, PA, temperatura, pupilas, Glasgow" },
      { order: 3, action: "Exames: hemograma, glicemia, eletrólitos, Cr, gasometria, toxicológico, TC se suspeita SNC" },
      { order: 4, action: "Contenção verbal PRIMEIRO: ambiente calmo, falar com tom baixo, não confrontar" },
      { order: 5, action: "Se contenção verbal falhar → sedação farmacológica:" },
      { order: 6, action: "1ª linha: Haloperidol 5mg IM + Midazolam 5mg IM (OU Haloperidol 5mg IM + Prometazina 25mg IM)" },
      { order: 7, action: "Alternativa: Olanzapina 10mg IM (NÃO combinar com BZD)" },
      { order: 8, action: "⚠️ Haloperidol: monitorar QTc. EVITAR se QT > 500ms, Parkinson, delirium por BZD/álcool" },
      { order: 9, action: "Contenção mecânica SÓ se risco iminente. Reavaliar a cada 15-30 min" },
      { order: 10, action: "Idoso: REDUZIR dose 50%. Haloperidol 2,5mg + Midazolam 2,5mg" },
    ],
  },
  intoxication: {
    name: "Intoxicação Aguda — Abordagem",
    steps: [
      { order: 1, action: "ABCDE. Via aérea é prioridade. IOT se Glasgow < 8 ou sem proteção" },
      { order: 2, action: "Identificar substância: perguntar o quê, quanto, quando, via" },
      { order: 3, action: "Antídotos específicos: Naloxone (opioide 0,4-2mg IV), Flumazenil (BZD 0,2mg IV — cautela), N-acetilcisteína (paracetamol)" },
      { order: 4, action: "Descontaminação: carvão ativado 1g/kg VO se < 1h da ingestão e via aérea protegida" },
      { order: 5, action: "Exames: glicemia, gasometria, eletrólitos, função renal/hepática, ECG, toxicológico" },
      { order: 6, action: "Monitorar: ECG contínuo (QT, QRS), SpO2, Glasgow, diurese" },
      { order: 7, action: "Lavagem gástrica: APENAS se < 1h + substância potencialmente letal + via aérea protegida" },
      { order: 8, action: "⚠️ Flumazenil: CONTRAINDICADO se uso crônico de BZD ou convulsão (risco de convulsão)" },
    ],
  },
  alcohol_withdrawal: {
    name: "Abstinência Alcoólica — Protocolo CIWA",
    steps: [
      { order: 1, action: "Aplicar escala CIWA-Ar. Tratar se CIWA ≥ 10" },
      { order: 2, action: "Benzodiazepínico: Diazepam 10mg VO/IV a cada hora até CIWA < 10 (máx 60mg)" },
      { order: 3, action: "Alternativa se hepatopata: Lorazepam 2mg (metabolismo extra-hepático)" },
      { order: 4, action: "Tiamina 300mg IV ANTES de glicose (prevenir Wernicke)" },
      { order: 5, action: "Hidratação + correção eletrólitos (Mg, K)" },
      { order: 6, action: "Se convulsão: Diazepam 10mg IV. Se Delirium Tremens: UTI + BZD agressivo + monitorização" },
      { order: 7, action: "Monitorar: CIWA a cada 1-2h, sinais vitais, glicemia, Glasgow" },
      { order: 8, action: "⚠️ Delirium tremens: mortalidade até 15% sem tratamento. NÃO subtratar" },
    ],
  },
  suicide_risk: {
    name: "Risco de Suicídio — Avaliação",
    steps: [
      { order: 1, action: "Avaliar risco: ideação ativa, plano, meios, tentativa prévia, desesperança" },
      { order: 2, action: "Garantir segurança: remover objetos perigosos, observação contínua" },
      { order: 3, action: "Estabilizar clinicamente se tentativa (tratar intoxicação, ferimento, etc.)" },
      { order: 4, action: "NÃO LIBERAR sem avaliação psiquiátrica se risco moderado/alto" },
      { order: 5, action: "Encaminhar para avaliação psiquiátrica de urgência" },
      { order: 6, action: "Documentar avaliação de risco no prontuário" },
      { order: 7, action: "Se risco alto: internação involuntária se necessário (conforme legislação)" },
    ],
  },
};

// ─── Urology Protocols ──────────────────────────────────────────
const UROLOGY_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  itu_simple: {
    name: "ITU Simples — Conduta",
    steps: [
      { order: 1, action: "Classificar: simples (mulher jovem, não grávida) vs complicada (homem, gestante, sonda, DRC, diabetes, anomalia)" },
      { order: 2, action: "ITU simples: Fosfomicina 3g dose única VO OU Nitrofurantoína 100mg 6/6h 5 dias" },
      { order: 3, action: "Alternativa: Sulfametoxazol-Trimetoprim 800/160mg 12/12h 3 dias (se sensibilidade local > 80%)" },
      { order: 4, action: "⚠️ EVITAR quinolona para ITU simples (reservar para complicada)" },
      { order: 5, action: "Pedir: EAS + urocultura se recorrente, complicada ou falha terapêutica" },
      { order: 6, action: "Se gestante: Cefalexina 500mg 6/6h 7 dias OU Nitrofurantoína (evitar 3º tri) OU Fosfomicina dose única" },
    ],
  },
  pyelonephritis: {
    name: "Pielonefrite — Conduta",
    steps: [
      { order: 1, action: "Suspeitar se: febre + dor lombar + disúria ± leucocitose. Giordano positivo" },
      { order: 2, action: "Exames: hemograma, PCR, Cr, EAS, urocultura + hemoculturas" },
      { order: 3, action: "Leve/ambulatório: Ciprofloxacino 500mg 12/12h 7 dias VO OU Ceftriaxona 1g/dia IM" },
      { order: 4, action: "Internação se: vômitos, sepse, gestante, obstrução, DRC, imunossuprimido" },
      { order: 5, action: "Internado: Ceftriaxona 1-2g/dia IV OU Ciprofloxacino 400mg 12/12h IV" },
      { order: 6, action: "USG renal se: febre persistente 72h, suspeita obstrução/abscesso, DRC" },
      { order: 7, action: "Ajustar ATB conforme urocultura em 48-72h" },
    ],
  },
  renal_colic: {
    name: "Cólica Renal / Litíase — Conduta",
    steps: [
      { order: 1, action: "Analgesia IMEDIATA: Dipirona 1g IV + Cetoprofeno 100mg IV OU Diclofenaco 75mg IM" },
      { order: 2, action: "Se dor refratária: Morfina 2-5mg IV OU Tramadol 50-100mg IV" },
      { order: 3, action: "Exames: EAS (hematúria), Cr, hemograma" },
      { order: 4, action: "TC abdome sem contraste (padrão ouro) OU USG (gestante, crianças)" },
      { order: 5, action: "Cálculo ≤ 6mm: tratamento conservador (hidratação oral, analgesia, tamsulosina 0,4mg/dia)" },
      { order: 6, action: "Cálculo > 6mm ou complicado (febre, anúria, rim único): urologia → litotripsia/cirurgia" },
      { order: 7, action: "⚠️ Febre + litíase = pielonefrite obstrutiva → URGÊNCIA UROLÓGICA (duplo J/nefrostomia)" },
      { order: 8, action: "⚠️ DRC: evitar AINEs. Preferir dipirona + opioide" },
    ],
  },
  urinary_retention: {
    name: "Retenção Urinária Aguda — Conduta",
    steps: [
      { order: 1, action: "Avaliar: bexigoma palpável, dor suprapúbica, volume (USG beira-leito)" },
      { order: 2, action: "Cateterismo vesical de alívio (sonda Foley 14-16Fr)" },
      { order: 3, action: "Se retenção > 400mL: clampear a cada 300-500mL (prevenir hematúria ex-vacuo)" },
      { order: 4, action: "Investigar causa: HPB, medicação (anticolinérgico, opioide), neurológica, estenose" },
      { order: 5, action: "Se HPB: Tansulosina 0,4mg/dia + avaliar finasterida" },
      { order: 6, action: "Exames: EAS, urocultura, Cr, PSA (se > 50 anos)" },
    ],
  },
};

// ─── Dermatology Protocols ───────────────────────────────────────
const DERMATOLOGY_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  anaphylaxis: {
    name: "Anafilaxia — Protocolo de Emergência",
    steps: [
      { order: 1, action: "🔴 ADRENALINA IM 0,3-0,5mg (adulto) na face lateral da coxa. Repetir a cada 5-15 min se necessário" },
      { order: 2, action: "Decúbito dorsal + elevar MMII (se hipotensão). Posição sentada se dispneia" },
      { order: 3, action: "O2 alto fluxo. IOT se edema de glote/estridor" },
      { order: 4, action: "Acesso venoso calibroso. SF 0,9% 1000-2000 mL rápido se hipotensão" },
      { order: 5, action: "Adjuvantes: Difenidramina 50mg IV + Ranitidina 50mg IV" },
      { order: 6, action: "Corticoide: Hidrocortisona 200mg IV (previne fase tardia — não é 1ª linha)" },
      { order: 7, action: "Se broncoespasmo: Salbutamol nebulizado" },
      { order: 8, action: "Monitorar por 6-24h (risco de reação bifásica)" },
      { order: 9, action: "Prescrever adrenalina autoinjetável na alta + encaminhar alergista" },
    ],
  },
  cellulitis: {
    name: "Celulite / Erisipela — Conduta",
    steps: [
      { order: 1, action: "Diferenciar: Erisipela (bordas bem definidas, superficial) vs Celulite (bordas mal definidas, profunda)" },
      { order: 2, action: "Leve/ambulatório: Cefalexina 500mg 6/6h VO 7-10 dias OU Amoxicilina-Clavulanato" },
      { order: 3, action: "Moderada/internação: Ceftriaxona 1g/dia IV OU Oxacilina 2g 4/4h IV" },
      { order: 4, action: "Se MRSA suspeito: adicionar Sulfametoxazol-Trimetoprim VO ou Vancomicina IV" },
      { order: 5, action: "Se necrose/crepitação/toxemia: pensar FASCEÍTE NECROTIZANTE → cirurgia URGENTE + mero + vanco" },
      { order: 6, action: "Exames se internado: hemograma, PCR, hemoculturas, Cr, glicemia" },
      { order: 7, action: "Diabético/imunossuprimido: ATB amplo + investigar osteomielite (RM se suspeita)" },
      { order: 8, action: "Marcar bordas da lesão para monitorar progressão" },
    ],
  },
  sjs_ten: {
    name: "Stevens-Johnson / Necrólise Epidérmica Tóxica (NET)",
    steps: [
      { order: 1, action: "🔴 EMERGÊNCIA DERMATOLÓGICA. Mortalidade: SJS 5-10%, NET até 30%" },
      { order: 2, action: "SUSPENDER DROGA CAUSADORA IMEDIATAMENTE (alopurinol, carbamazepina, fenitoína, sulfonamida, AINE)" },
      { order: 3, action: "Internação em UTI ou unidade de queimados se > 30% SCQ (NET)" },
      { order: 4, action: "Suporte: hidratação, analgesia, cuidados com feridas (NÃO desbridar epiderme)" },
      { order: 5, action: "Avaliação oftalmológica URGENTE (risco de sequela grave)" },
      { order: 6, action: "Avaliar mucosas: oral, genital, conjuntival" },
      { order: 7, action: "Score SCORTEN para prognóstico" },
      { order: 8, action: "Exames: hemograma, Cr, eletrólitos, hemoculturas, biópsia se dúvida" },
    ],
  },
  herpes_zoster: {
    name: "Herpes Zoster — Conduta",
    steps: [
      { order: 1, action: "Diagnóstico clínico: vesículas em dermátomo unilateral + dor neuropática" },
      { order: 2, action: "Antiviral em < 72h: Valaciclovir 1g 8/8h 7 dias OU Aciclovir 800mg 5x/dia 7 dias" },
      { order: 3, action: "Analgesia: Paracetamol/Dipirona + Gabapentina 300mg 8/8h + Amitriptilina 25mg à noite" },
      { order: 4, action: "Se dor refratária: Tramadol ou Pregabalina" },
      { order: 5, action: "⚠️ Zoster oftálmico (V1): URGÊNCIA oftalmológica" },
      { order: 6, action: "⚠️ Zoster disseminado (imunossuprimido): Aciclovir IV 10mg/kg 8/8h + internação" },
      { order: 7, action: "Cuidados locais: limpar com SF, não romper vesículas" },
    ],
  },
};

// ─── Hematology Protocols ────────────────────────────────────────
const HEMATOLOGY_PROTOCOLS: Record<string, { name: string; steps: ProtocolStep[] }> = {
  severe_anemia: {
    name: "Anemia Grave / Indicação de Transfusão",
    steps: [
      { order: 1, action: "Avaliar: Hb, sintomas (dispneia, taquicardia, angina, hipotensão)" },
      { order: 2, action: "Transfusão se: Hb < 7 g/dL (geral) OU Hb < 8 se cardiopatia/SCA OU sangramento ativo com instabilidade" },
      { order: 3, action: "1 CH eleva Hb em ~1 g/dL. Prescrever por unidade (NÃO ml/kg)" },
      { order: 4, action: "Infundir em 2-4h por unidade. Verificar tipagem + prova cruzada" },
      { order: 5, action: "Monitorar: PA, FC, temperatura, sinais reação transfusional" },
      { order: 6, action: "Investigar causa: hemograma completo, reticulócitos, ferro/ferritina, B12/folato, Coombs, haptoglobina" },
      { order: 7, action: "Se anemia hemolítica: Coombs direto, esfregaço, LDH, bilirrubinas, haptoglobina" },
    ],
  },
  thrombocytopenia: {
    name: "Plaquetopenia — Abordagem",
    steps: [
      { order: 1, action: "Confirmar: repetir hemograma (excluir pseudotrombocitopenia por EDTA)" },
      { order: 2, action: "Classificar risco: > 100k (leve), 50-100k (moderada), 20-50k (grave), < 20k (muito grave), < 10k (transfundir)" },
      { order: 3, action: "Transfusão de plaquetas se: < 10.000 OU < 20.000 com febre/sepse OU < 50.000 + sangramento ativo OU pré-procedimento" },
      { order: 4, action: "Investigar causa: esfregaço, Coombs, LDH, fibrinogênio (CIVD), heparina (HIT), HIV, hepatite" },
      { order: 5, action: "Se HIT (trombocitopenia induzida por heparina): suspender TODA heparina, usar argatroban ou fondaparinux" },
      { order: 6, action: "Se PTT (púrpura trombocitopênica trombótica): NÃO transfundir plaquetas → plasmaferese" },
      { order: 7, action: "Se CIVD: tratar causa base, repor fibrinogênio/crioprecipitado, PFC, plaquetas se < 50k + sangramento" },
    ],
  },
  inr_high: {
    name: "INR Elevado / Reversão Warfarina",
    steps: [
      { order: 1, action: "INR 4-6 sem sangramento: suspender warfarina 1-2 doses. Reavaliar" },
      { order: 2, action: "INR 6-9 sem sangramento: suspender warfarina + Vitamina K 2,5mg VO" },
      { order: 3, action: "INR > 9 sem sangramento: suspender + Vitamina K 5mg VO. INR em 24h" },
      { order: 4, action: "INR alto + sangramento grave: Vitamina K 10mg IV lento + CCP (complexo protrombínico) 25-50 UI/kg" },
      { order: 5, action: "Se CCP indisponível: PFC 15-20 mL/kg (menos eficaz, mais volume)" },
      { order: 6, action: "Monitorar INR a cada 6-12h até estável" },
      { order: 7, action: "Investigar interação (ATB, amiodarona, AINE, fluconazol, dieta)" },
    ],
  },
  dvt_pe: {
    name: "TVP / TEP — Anticoagulação",
    steps: [
      { order: 1, action: "TVP: Wells + D-dímero OU USG Doppler. TEP: Wells + D-dímero OU AngioTC" },
      { order: 2, action: "Anticoagulação IMEDIATA se alta probabilidade (enquanto aguarda exame)" },
      { order: 3, action: "Opções: Rivaroxabana 15mg 12/12h 21 dias → 20mg/dia OU Enoxaparina 1mg/kg 12/12h SC + Warfarina" },
      { order: 4, action: "Se DRC (ClCr < 30): HNF → Warfarina (evitar DOAC)" },
      { order: 5, action: "Duração: 1º episódio provocado → 3 meses. Não provocado → ≥ 6 meses. Recorrente → indefinido" },
      { order: 6, action: "Monitorar: INR (warfarina alvo 2-3), Cr, hemograma, sinais sangramento" },
      { order: 7, action: "Meia elástica compressiva para TVP proximal" },
    ],
  },
  civd: {
    name: "CIVD — Coagulação Intravascular Disseminada",
    steps: [
      { order: 1, action: "Suspeitar se: sepse + plaqueta baixa + INR alto + fibrinogênio baixo + D-dímero alto + esquizócitos" },
      { order: 2, action: "TRATAR CAUSA BASE (sepse, trauma, obstétrica, neoplasia)" },
      { order: 3, action: "Score ISTH para CIVD aberta" },
      { order: 4, action: "Se sangramento: PFC 15-20 mL/kg, Crioprecipitado (alvo fibrinogênio > 150), Plaquetas se < 50k" },
      { order: 5, action: "Anticoagulação profilática com HNF SC se predomínio trombótico" },
      { order: 6, action: "Monitorar: hemograma, INR, TTPa, fibrinogênio, D-dímero a cada 6-12h" },
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

  // Detect allergy TYPE
  let allergyType: AllergyType = "NÃO INFORMADA";
  if (allergies) {
    if (/anafila|choque.*alér|edema.*glote|angioedema/i.test(text)) {
      allergyType = "ANAFILÁTICA";
    } else if (/rash|urticária|leve|cutâne/i.test(text)) {
      allergyType = "LEVE";
    }
    // If allergy mentioned but type not specified, default to treating as potentially anaphylactic for safety
    if (allergyType === "NÃO INFORMADA" && /penicilina|amoxicilina|ampicilina/i.test(allergies)) {
      // Keep as NÃO INFORMADA - will prompt to ask
    }
  }

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

  // Heart failure detection
  const hasHeartFailure = /insuficiência cardíaca|ic\b|fração de ejeção|fe\s*reduzida|icc|edema pulmonar/i.test(text);

  // Elderly detection
  const ageNum = parseNumber(ageRaw);
  const isElderly = ageNum !== undefined && ageNum >= 65;

  // Pediatric detection
  const ageMonthsRaw = firstMatch(text, [/\b([0-9]{1,2})\s*meses?\b/i, /\b([0-9]{1,2})\s*m\b/i]);
  const ageMonths = parseNumber(ageMonthsRaw);
  const ageDaysRaw = firstMatch(text, [/\b([0-9]{1,3})\s*dias?\b/i]);
  const ageDays = parseNumber(ageDaysRaw);
  
  const isPediatric = (ageNum !== undefined && ageNum < 14) || 
    ageMonths !== undefined || ageDays !== undefined ||
    /pediátr|criança|lactente|neonat|rn\b|recém.?nascid|prematuro|escolar|adolescente/i.test(text);
  
  const isNeonate = (ageDays !== undefined && ageDays < 28) || 
    (ageNum !== undefined && ageNum === 0 && (ageMonths === undefined || ageMonths < 1)) ||
    /neonat|rn\b|recém.?nascid/i.test(text);
  
  const isInfant = (ageNum !== undefined && ageNum < 1) || 
    (ageMonths !== undefined && ageMonths < 12) ||
    /lactente/i.test(text);

  // Estimate weight if pediatric and no weight given
  let estimatedWeightKg: number | undefined;
  const actualWeight = parseNumber(weightRaw);
  if (isPediatric && !actualWeight && ageNum !== undefined) {
    estimatedWeightKg = estimateWeightByAge(ageNum, ageMonths);
  }

  // Vaccines
  const vaccinesUpToDate = /vacina.*dia|vacinação.*completa|cartão.*dia/i.test(text) ? true :
    /vacina.*atrasad|não vacin/i.test(text) ? false : undefined;

  // Dialysis: ONLY if EXPLICITLY stated
  const isDialytic = /dialí[ts]|hemodiálise|diálise|peritoneal|trs\b/i.test(text);

  // Anticoagulation indication detection
  let hasAnticoagulationIndication: string | null = null;
  for (const indication of ANTICOAG_INDICATIONS) {
    if (text.toLowerCase().includes(indication)) {
      hasAnticoagulationIndication = indication.toUpperCase();
      break;
    }
  }

  // Neuro case detection
  const isNeuroCase = /rebaixamento|consciência|convuls|avc|acidente vascular|cefaleia|déficit focal|coma|confus|tce|trauma.*crani|meningite|encefalite|delirium|glasgow|hemipar|hemiplegia|afasia|disartria|ataxia|pupila|rigidez de nuca/i.test(text);

  // Glasgow score extraction
  const glasgowRaw = firstMatch(text, [/glasgow\s*[:=]?\s*([0-9]{1,2})/i, /gcs\s*[:=]?\s*([0-9]{1,2})/i]);
  const glasgowScore = glasgowRaw ? parseNumber(glasgowRaw) : undefined;

  // Anticoagulant in use detection
  const hasAnticoagulantInUse = /warfarina|marevan|rivaroxabana|apixabana|dabigatrana|enoxaparina|heparina/i.test(medsRaw || "") ||
    /warfarina|marevan|rivaroxabana|apixabana|dabigatrana|enoxaparina|heparina/i.test(text);

  // Obstetric detection
  const isPregnant = /gestante|grávida|gravidez|gestação|gesta\b|g[0-9]p[0-9]|semanas?\s*de\s*(gestação|ig)|ig\s*[:=]?\s*[0-9]/i.test(text);
  const isPuerperal = /puérpera|puerpério|pós[- ]?parto|pós[- ]?cesárea|pós[- ]?operatório.*parto/i.test(text);
  const gestWeeksRaw = firstMatch(text, [/([0-9]{1,2})\s*sem(?:anas?)?\s*(?:de\s*)?(?:gestação|ig|gest)/i, /ig\s*[:=]?\s*([0-9]{1,2})/i]);
  const gestationalWeeks = gestWeeksRaw ? parseNumber(gestWeeksRaw) : undefined;
  const isFertileAge = sex === "F" && ageNum !== undefined && ageNum >= 12 && ageNum <= 55;
  const pregnancyConfirmed = isPregnant;

  // ICU / Critical case detection
  const isCriticalCase = /\buti\b|sala vermelha|choque|sepse grave|intuba[çc]|ventila[çc]|noradrenalina|coma\b|pcr\b|parada|instabilidade|instável|choque séptico|choque cardiogênico|choque hipovolêmico|vasopressor|drogas vasoativas/i.test(text);

  // Trauma / Surgery detection
  const isTraumaCase = /trauma|acidente|queda.*alt|ferimento|abdome agudo|politrauma|sala vermelha.*trauma|atropelamento|fac\b|faf\b|arma.*branca|arma.*fogo|colisão|capotamento|esmagamento|amputação|evisceração|fratura exposta/i.test(text);

  // Orthopedic detection
  const isOrthoCase = /fratura|luxação|entorse|dor lombar|dor articular|trauma.*membro|imobiliza[çc]|tala|gesso|deformidade.*membro|claudica|lesão.*ligament|tendin|artrose|artrite|lombalgia|cervicalgia|dorsalgia|ombro.*dor|joelho.*dor|tornozelo/i.test(text) && !isTraumaCase;

  // Gastroenterology detection
  const isGastroCase = /hematêmese|melena|enterorragia|hda\b|hdb\b|varizes esofág|cirrose|ascite|pancreatite|colecistite|colangite|icterícia|abdome agudo|obstrução intestinal|perfuração|isquemia mesentérica|hepatite.*agud|encefalopatia hepát|peritonite/i.test(text);

  // Endocrine / Metabolic detection
  const isEndocrineCase = /cetoacidose|cad\b|estado hiperosmolar|hhs\b|hipoglicemia|hiperglicemia.*grave|hipernatremia|hiponatremia|hipercalemia|hipocalemia|hipercalcemia|hipocalcemia|tireotoxicose|tempestade.*tireoid|mixedema|coma.*mixedematoso|crise.*adrenal|insuficiência adrenal|feocromocitoma|diabetes.*descompens/i.test(text);

  return {
    weightKg: actualWeight,
    ageYears: ageNum,
    ageMonths,
    creatinineMgDl: parseNumber(creatRaw),
    sex, allergies, allergyType, scenario, focus, infectionOrigin, medicationsInUse, riskFactors,
    hasHeartFailure, isElderly, isDialytic, hasAnticoagulationIndication,
    isPediatric, isNeonate, isInfant, estimatedWeightKg, vaccinesUpToDate,
    isNeuroCase, glasgowScore, hasAnticoagulantInUse,
    isPregnant, isPuerperal, gestationalWeeks, isFertileAge, pregnancyConfirmed,
    isCriticalCase, isTraumaCase, isOrthoCase, isGastroCase, isEndocrineCase,
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

  if (clcr >= 90) {
    result.stage = "NORMAL";
    result.adjustments.push("Função renal normal — doses padrão");
  } else if (clcr >= 60) {
    result.stage = "LEVE";
    result.adjustments.push("DRC leve (ClCr 60-89): Monitorar função renal");
    result.adjustments.push("Evitar nefrotóxicos desnecessários");
  } else if (clcr >= 30) {
    result.stage = "MODERADA";
    result.adjustments.push("⚠️ DRC MODERADA (ClCr 30-59): AJUSTAR DROGAS RENAIS");
    result.adjustments.push("Drogas que EXIGEM ajuste: vancomicina, aminoglicosídeos, meropenem, cefepime, piperacilina-tazo, cipro/levofloxacino, enoxaparina, gabapentina, tramadol, digoxina");
    result.adjustments.push("Metformina: máx 1000mg/dia se ClCr 30-44; SUSPENDER se ClCr < 30");
    result.adjustments.push("Evitar nefrotóxicos: AINEs, contraste iodado, aminoglicosídeos se possível");
    result.adjustments.push("Enoxaparina profilática: manter 40mg/dia. Terapêutica: 1mg/kg 12/12h (monitorar anti-Xa)");
  } else if (clcr >= 15) {
    result.stage = "GRAVE";
    result.adjustments.push("🔴 DRC GRAVE (ClCr 15-29): AJUSTAR TODAS AS DROGAS DE ELIMINAÇÃO RENAL");
    result.adjustments.push("Drogas que EXIGEM ajuste OBRIGATÓRIO: vancomicina, aminoglicosídeos, meropenem, cefepime, piperacilina-tazo, cipro/levofloxacino, gabapentina, tramadol, digoxina, morfina");
    result.adjustments.push("EVITAR: metformina (CONTRAINDICADO), AINEs, contraste iodado, espironolactona (hipercalemia)");
    result.adjustments.push("Enoxaparina: 1mg/kg 1x/dia OU PREFERIR HNF (mais seguro)");
    result.adjustments.push("Morfina: EVITAR — acúmulo M6G. Preferir fentanil.");
    result.adjustments.push("Avaliar indicação de diálise (NÃO ASSUMIR — perguntar se já dialisa)");
    result.adjustments.push("Monitorar K rigorosamente: alvo K < 5,0");
  } else {
    result.stage = "TERMINAL";
    result.adjustments.push("🔴 ClCr < 15 — INSUFICIÊNCIA RENAL TERMINAL");
    result.adjustments.push("NÃO ASSUMIR que paciente dialisa — PERGUNTAR");
    result.adjustments.push("Preferir HNF sobre enoxaparina (enoxaparina não dialisa)");
    result.adjustments.push("EVITAR: metformina, AINEs, espironolactona, morfina (M6G acumula)");
    result.adjustments.push("CONTRAINDICADOS: metformina, espironolactona em dose alta");
    result.adjustments.push("Gabapentina: dose mínima, dias alternados ou pós-diálise");
    result.adjustments.push("Digoxina: 0,0625mg dias alternados, nível sérico obrigatório");
    result.adjustments.push("Considerar diálise se: K > 6,5 | pH < 7,1 | edema pulmonar | uremia | oligúria refratária | intoxicação");
    result.adjustments.push("Monitorar K a cada 12-24h: alvo K < 5,0");
    result.adjustments.push("Avaliar TRS urgente se: K > 6,5, pH < 7,1, oligúria refratária, sobrecarga hídrica");
  }

  return result;
}

// ─── MODULE 3: Dose Calculator ──────────────────────────────────
function calcDoses(p: PatientData, renal: RenalCalcResult): DoseCalcResult {
  const w = p.weightKg;
  const clcr = renal.clcrMlMin;

  const result: DoseCalcResult = {
    fluidRecommendation: "",
    noraDilution: "16mg/250mL SF = 64 mcg/mL",
    mgSO4Attack: "MgSO₄ 50%: 4g (8mL) IV em 20min",
  };

  if (!w) {
    result.fluidRecommendation = "❌ PESO NÃO INFORMADO — não é possível calcular volume por kg.";
    return result;
  }

  // ─── FLUID RESUSCITATION RULES ───
  const needsRestrictedFluid = p.isElderly || p.hasHeartFailure || p.isDialytic || 
    renal.stage === "GRAVE" || renal.stage === "TERMINAL";

  if (needsRestrictedFluid) {
    const reasons: string[] = [];
    if (p.isElderly) reasons.push("idoso (≥65a)");
    if (p.hasHeartFailure) reasons.push("insuficiência cardíaca");
    if (p.isDialytic) reasons.push("dialítico");
    if (renal.stage === "GRAVE" || renal.stage === "TERMINAL") reasons.push(`DRC ${renal.stage} (ClCr ${clcr} mL/min)`);
    
    result.fluidRecommendation = `⚠️ VOLUME RESTRITO: Paciente ${reasons.join(" + ")}.\n` +
      `  → NÃO usar 30 mL/kg automaticamente.\n` +
      `  → Iniciar com 250-500 mL de cristaloide.\n` +
      `  → Reavaliar após CADA alíquota (POCUS, elevação MMII, variação PP).\n` +
      `  → Se piora (crepitações, hipoxemia): PARAR volume, iniciar vasopressor.\n` +
      `  → Referência: 30 mL/kg × ${w} kg = ${w * 30} mL (NÃO RECOMENDADO neste paciente).`;
    result.fluidWarning = `🔴 RISCO DE CONGESTÃO: ${reasons.join(", ")}. Volume cauteloso.`;
  } else {
    const fluid = w * 30;
    result.fluidRecommendation = `30 mL/kg × ${w} kg = ${fluid} mL de cristaloide (RL ou SF 0,9%).\n` +
      `  → Infundir em bolus. Reavaliar responsividade após cada 500 mL.`;
  }

  // Noradrenaline
  const noraMin = Number((0.1 * w).toFixed(1));
  const noraMax = Number((2 * w).toFixed(1));
  const noraMinMlH = Number((noraMin / 64 * 60).toFixed(1));
  const noraMaxMlH = Number((noraMax / 64 * 60).toFixed(1));
  result.noraMinMcgMin = `Dose mínima: 0,1 mcg/kg/min × ${w} kg = ${noraMin} mcg/min (${noraMinMlH} mL/h na diluição 64mcg/mL)`;
  result.noraMaxMcgMin = `Dose máxima: 2 mcg/kg/min × ${w} kg = ${noraMax} mcg/min (${noraMaxMlH} mL/h)`;

  // ─── HEPARIN RULES ───
  // PROPHYLAXIS always calculated
  if (clcr !== undefined && clcr < 30) {
    result.hepProphylaxis = `HNF profilática: 5000 UI SC 8/8h (preferir HNF pois ClCr ${clcr} < 30)`;
  } else {
    const enoxProf = 40;
    result.enoxProphylaxis = `Enoxaparina profilática: ${enoxProf} mg SC 1x/dia`;
    result.hepProphylaxis = `HNF profilática: 5000 UI SC 8/8h (alternativa)`;
  }

  // THERAPEUTIC only if indication exists
  if (p.hasAnticoagulationIndication) {
    const hepBolus = Math.round(80 * w);
    const hepMaint = Math.round(18 * w);
    result.hepTherapeutic = `HNF terapêutica (INDICAÇÃO: ${p.hasAnticoagulationIndication}):\n` +
      `  Bolus: 80 UI/kg × ${w} kg = ${hepBolus} UI\n` +
      `  Manutenção: 18 UI/kg/h × ${w} kg = ${hepMaint} UI/h\n` +
      `  Ajustar por TTPa a cada 6h.`;
    
    const enoxDose = Number((1 * w).toFixed(0));
    result.enoxTherapeutic = `Enoxaparina terapêutica: 1 mg/kg × ${w} kg = ${enoxDose} mg SC 12/12h`;
    if (clcr && clcr < 30) {
      result.enoxRenal = `⚠️ ClCr ${clcr} < 30: ${enoxDose} mg SC 1x/dia OU preferir HNF`;
    }
  } else {
    result.hepWarning = `🔴 ANTICOAGULAÇÃO TERAPÊUTICA NÃO INDICADA.\n` +
      `  Sem indicação detectada (TEV, FA, IAM, TEP, TVP, prótese valvar).\n` +
      `  → Usar apenas PROFILAXIA.\n` +
      `  → Se há indicação não detectada, informar.`;
  }

  // Insulin
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
function checkInteractions(medsInUse: string[], prescribedDrugs: string[], patient: PatientData, renal: RenalCalcResult): InteractionAlert[] {
  const allDrugs = [...new Set([...medsInUse, ...prescribedDrugs])].map(d => d.toLowerCase());
  const alerts: InteractionAlert[] = [];

  for (const pair of INTERACTION_PAIRS) {
    const found = pair.drugs.every(d => allDrugs.some(ad => ad.includes(d) || d.includes(ad)));
    if (found) {
      alerts.push({ pair: pair.drugs.join(" + "), severity: pair.severity, mechanism: pair.mechanism, action: pair.action });
    }
  }

  // QT prolongation combinations
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
      action: "Monitorar QTc. Corrigir K > 4,0 e Mg > 2,0. Se QTc > 500ms: suspender um dos agentes.",
    });
  }

  // Hyperkalemia risk with renal failure
  const hasRAS = allDrugs.some(d => /losartana|enalapril|captopril|ramipril|ieca|bra|espironolactona|amilorida/i.test(d));
  if (hasRAS && renal.clcrMlMin !== undefined && renal.clcrMlMin < 30) {
    alerts.push({
      pair: "BRA/IECA + DRC grave",
      severity: "🔴",
      mechanism: "Hipercalemia grave por bloqueio SRAA + DRC",
      action: "Monitorar K a cada 24h. Suspender se K > 5,5. Considerar suspensão temporária em sepse/IRA.",
    });
  }

  // Acidosis risk in sepsis + DRC
  if (renal.stage !== "NORMAL" && renal.stage !== "LEVE") {
    const userText = allDrugs.join(" ");
    if (/sepse|séptico|choque/i.test(userText) || patient.scenario === "UTI") {
      alerts.push({
        pair: "Sepse + DRC",
        severity: "🟡",
        mechanism: "Acidose metabólica composta: sepse (lactato) + DRC (retenção ácidos)",
        action: "Gasometria seriada. Monitorar pH, HCO3, lactato. Considerar BIC se pH < 7,1.",
      });
    }
  }

  // Polypharmacy warning
  if (allDrugs.length >= 5) {
    alerts.push({
      pair: `${allDrugs.length} medicamentos`,
      severity: "🔴",
      mechanism: "POLIFARMÁCIA: risco exponencial de interações com ≥ 5 drogas",
      action: "Revisar TODAS as combinações. Considerar desprescrição. Monitorar função renal e hepática.",
    });
  } else if (allDrugs.length >= 3) {
    alerts.push({
      pair: `${allDrugs.length} medicamentos`,
      severity: "🟡",
      mechanism: "Polifarmácia moderada: risco aumentado de interações",
      action: "Revisar combinações. Monitorar efeitos adversos.",
    });
  }

  // Elderly-specific interaction risk
  if (patient.isElderly) {
    const hasCNS = allDrugs.some(d => /benzodiazepínico|diazepam|midazolam|clonazepam|lorazepam|zolpidem|opioide|morfina|tramadol|codeína/i.test(d));
    if (hasCNS) {
      alerts.push({
        pair: "SNC depressor + Idoso",
        severity: "🔴",
        mechanism: "Risco de queda, delirium, depressão respiratória em idoso",
        action: "Reduzir dose 50%. Monitorar nível de consciência. Critérios de Beers.",
      });
    }
  }

  // Pediatric contraindicated drugs check
  if (patient.isPediatric) {
    for (const contra of PEDIATRIC_CONTRAINDICATED) {
      if (allDrugs.some(d => d.includes(contra.drug.toLowerCase()))) {
        alerts.push({
          pair: `${contra.drug} + Pediatria`,
          severity: "🔴",
          mechanism: `${contra.reason} (${contra.ageLimit || "pediátrico"})`,
          action: `EVITAR em criança. Considerar alternativa.`,
        });
      }
    }
  }

  // Warfarin universal check
  const hasWarfarin = allDrugs.some(d => /warfarina|marevan|coumadin/i.test(d));
  if (hasWarfarin) {
    const warfarinInteractors = allDrugs.filter(d => 
      /antibiótico|amiodarona|aine|ibuprofeno|diclofenaco|naproxeno|fluconazol|metronidazol|ciprofloxacino|fluoxetina|carbamazepina|fenitoína|omeprazol/i.test(d)
    );
    if (warfarinInteractors.length > 0) {
      alerts.push({
        pair: `Warfarina + ${warfarinInteractors.join(", ")}`,
        severity: "🔴",
        mechanism: "Múltiplas interações com warfarina → risco de sangramento ou perda de efeito",
        action: "INR seriado (2-3x/semana). Ajustar dose warfarina.",
      });
    }
  }

  // Nefrotoxic combination check
  const nephrotoxics = allDrugs.filter(d => /vancomicina|gentamicina|aminoglicosídeo|aine|ibuprofeno|diclofenaco|contraste|anfotericina/i.test(d));
  if (nephrotoxics.length >= 2) {
    alerts.push({
      pair: nephrotoxics.join(" + "),
      severity: "🔴",
      mechanism: "Nefrotoxicidade sinérgica: múltiplos agentes nefrotóxicos",
      action: "EVITAR combinação. Monitorar Cr e diurese a cada 12-24h.",
    });
  }

  return alerts;
}

// ─── MODULE 5: Protocol Selection ───────────────────────────────
function selectProtocol(text: string, scenario: Scenario, patient: PatientData): { name: string; steps: ProtocolStep[] } | null {
  const lower = text.toLowerCase();

  // Obstetric protocols first (highest priority for pregnant patients)
  if (patient.isPregnant || patient.isPuerperal) {
    if (/eclâmpsia|pré[- ]?eclâmpsia|hellp|convuls.*gestante|pa.*alta.*gestante/i.test(lower)) return OBSTETRIC_PROTOCOLS.preeclampsia;
    if (/hemorrag.*pós[- ]?parto|atonia|sangr.*puerpério|hpp\b/i.test(lower)) return OBSTETRIC_PROTOCOLS.obstetric_hemorrhage;
    if (/ectópica|ectopic|gravidez.*tubár/i.test(lower)) return OBSTETRIC_PROTOCOLS.ectopic;
    if (/sepse.*puerper|febre.*puerpério|endometrite|infec.*puerper/i.test(lower)) return OBSTETRIC_PROTOCOLS.sepsis_puerperal;
    // Bleeding in pregnancy
    if (/sangr.*gra|hemorrag.*gestação|descolamento|placenta prévia/i.test(lower)) return OBSTETRIC_PROTOCOLS.obstetric_hemorrhage;
  }

  // Pediatric protocols
  if (patient.isPediatric) {
    if (/pcr|parada|sem pulso|rcp/i.test(lower)) return PEDIATRIC_PROTOCOLS.pals_pcr;
    if (/sepse|séptic|choque séptico/i.test(lower)) return PEDIATRIC_PROTOCOLS.sepse_ped;
    if (/convuls|estado.*mal|status epilepticus/i.test(lower)) return PEDIATRIC_PROTOCOLS.convulsao_ped;
    if (/rn.*febr|neonat.*febr|recém.*febr|febre.*rn|febre.*neonat/i.test(lower)) return PEDIATRIC_PROTOCOLS.febre_rn;
    if (/febre/i.test(lower) && /neonat|rn\b|recém/i.test(lower)) return PEDIATRIC_PROTOCOLS.febre_rn;
  }

  if (/sepse|séptic|choque séptico/i.test(lower)) {
    if (patient.isPediatric) return PEDIATRIC_PROTOCOLS.sepse_ped;
    return scenario === "UTI" ? PROTOCOLS.sepsis_uti : PROTOCOLS.sepsis;
  }
  if (/choque|hipoten/i.test(lower) && !/séptic/i.test(lower)) return PROTOCOLS.shock;
  if (/hemorr|sangr.*ativo|choque hemorrágico/i.test(lower)) return PROTOCOLS.bleeding;
  if (/insuf.*resp|dispneia.*aguda|hipoxemia/i.test(lower)) return PROTOCOLS.respiratory_failure;
  if (/iam|infarto|sca|síndrome coronariana|dor torácica/i.test(lower)) return PROTOCOLS.cardiac;
  // Neuro protocols
  if (/meningite|encefalite/i.test(lower) && !/pediátr|criança/i.test(lower)) return PROTOCOLS.meningitis;
  if (/convuls|estado.*mal|status epilepticus|crise epiléptica/i.test(lower) && !patient.isPediatric) return PROTOCOLS.seizure;
  if (/tce|trauma.*crani|trauma.*crânio/i.test(lower)) return PROTOCOLS.tce;
  if (/coma\b|rebaixamento.*consciência|glasgow.*[3-8]\b/i.test(lower)) return PROTOCOLS.coma;
  if (/delirium|confus.*mental.*agud/i.test(lower)) return PROTOCOLS.delirium;
  if (/avc|acidente vascular|stroke/i.test(lower)) return PROTOCOLS.stroke;

  // Endocrine / Metabolic protocols
  if (/cetoacidose|cad\b/i.test(lower)) return ENDOCRINE_PROTOCOLS.cad;
  if (/estado hiperosmolar|hhs\b|hiperosmolar/i.test(lower)) return ENDOCRINE_PROTOCOLS.hhs;
  if (/hipercalemia|potássio.*alto|k\+?\s*>?\s*[56]/i.test(lower)) return ENDOCRINE_PROTOCOLS.hyperkalemia;
  if (/hiponatremia|sódio.*baixo|na\+?\s*<?\s*1[23]/i.test(lower)) return ENDOCRINE_PROTOCOLS.hyponatremia;
  if (/tireotoxicose|tempestade.*tireoid|crise.*tireotóxica/i.test(lower)) return ENDOCRINE_PROTOCOLS.thyroid_storm;
  if (/mixedema|coma.*mixedematoso|hipotireoidismo.*grave/i.test(lower)) return ENDOCRINE_PROTOCOLS.myxedema;

  // Gastro protocols
  if (/hematêmese|melena|hda\b|hemorragia.*digestiva.*alta|sangramento.*digestivo/i.test(lower)) return GASTRO_PROTOCOLS.hda;
  if (/pancreatite/i.test(lower)) return GASTRO_PROTOCOLS.pancreatite;
  if (/cirrose.*descomp|encefalopatia.*hepát|ascite.*tensa|pbe\b|peritonite.*espontânea/i.test(lower)) return GASTRO_PROTOCOLS.cirrose_descomp;
  if (/colecistite|colangite/i.test(lower)) return GASTRO_PROTOCOLS.colecistite;
  if (/enterorragia|hdb\b|hemorragia.*digestiva.*baixa/i.test(lower)) return GASTRO_PROTOCOLS.hda; // same initial approach

  // Trauma protocols
  if (/politrauma|trauma.*grave|atropelamento|faf\b|fac\b|colisão|capotamento/i.test(lower)) return TRAUMA_PROTOCOLS.trauma_atls;
  if (/choque.*hemorrágico|hemorragia.*trauma/i.test(lower)) return TRAUMA_PROTOCOLS.hemorrhagic_shock;
  if (/abdome agudo|perfuração|obstrução intestinal|isquemia mesentérica/i.test(lower)) return TRAUMA_PROTOCOLS.abdome_agudo;

  // Ortho protocols
  if (/fratura|fratura exposta/i.test(lower)) return ORTHO_PROTOCOLS.fracture;
  if (/luxação|luxação.*ombro|luxação.*quadril/i.test(lower)) return ORTHO_PROTOCOLS.luxation;
  if (/dor lombar|lombalgia|cervicalgia|dorsalgia|ciatalgia|hérnia.*disc/i.test(lower)) return ORTHO_PROTOCOLS.low_back_pain;

  // ICU protocols
  if (/intubação|iot\b|sequência rápida|isr\b/i.test(lower)) return ICU_PROTOCOLS.intubation_rsi;
  if (patient.isCriticalCase && scenario === "UTI") return ICU_PROTOCOLS.icu_general;

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
function checkAllergies(patient: PatientData): string[] {
  const { allergies, allergyType } = patient;
  if (!allergies) return [];
  const a = allergies.toLowerCase();
  const warnings: string[] = [];

  if (/penicilina|amoxicilina|ampicilina/i.test(a)) {
    if (allergyType === "ANAFILÁTICA") {
      warnings.push("🔴 ANAFILAXIA A PENICILINA CONFIRMADA:");
      warnings.push("  → EVITAR: Penicilinas, Cefalosporinas, Carbapenêmicos (se alternativa existir)");
      warnings.push("  → PREFERIR: Aztreonam, Quinolona (levo/cipro), Vancomicina, Linezolida, Daptomicina");
      warnings.push("  → Carbapenêmico APENAS se SNC ou situação sem alternativa, com skin test e monitorização");
    } else if (allergyType === "LEVE") {
      warnings.push("🟡 ALERGIA LEVE A PENICILINA (rash/urticária):");
      warnings.push("  → Cefalosporinas: reação cruzada ~2%, PODEM ser usadas com cautela (monitorar 1ª dose)");
      warnings.push("  → Carbapenêmicos: risco < 1%, PODEM ser usadas");
      warnings.push("  → Evitar penicilinas diretas");
    } else {
      warnings.push("🟡 ALERGIA A PENICILINA — TIPO NÃO INFORMADO:");
      warnings.push("  → PERGUNTAR: Foi anafilaxia (choque, edema de glote) ou reação leve (rash)?");
      warnings.push("  → Tratando como potencialmente grave até confirmação");
      warnings.push("  → EVITAR penicilinas. Cefalosporinas/carbapenêmicos com cautela.");
    }
  }
  if (/cefalosporina|ceftriaxona|cefazolina|cefepime/i.test(a)) {
    warnings.push("🔴 ALERGIA A CEFALOSPORINA: Evitar todas cefalosporinas. Usar Aztreonam, Quinolona ou Carbapenêmico.");
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

// ─── MODULE 9: Safety Alerts Generator ──────────────────────────
function generateSafetyAlerts(patient: PatientData, renal: RenalCalcResult): string[] {
  const alerts: string[] = [];

  // PEDIATRIC ALERTS
  if (patient.isPediatric) {
    alerts.push("👶 MODO PEDIATRIA ATIVADO: Todas as doses devem ser por kg. NUNCA usar dose adulta.");
    if (patient.isNeonate) {
      alerts.push("🔴 NEONATO (< 28 dias): ALTO RISCO. RN febril = sepse até provar contrário. Internação obrigatória.");
    }
    if (patient.isInfant) {
      alerts.push("🔴 LACTENTE (< 1 ano): Monitorar desidratação, hipoglicemia, hipotermia.");
    }
    if (!patient.weightKg) {
      if (patient.estimatedWeightKg) {
        alerts.push(`⚠️ PESO NÃO INFORMADO — Estimativa por idade: ~${patient.estimatedWeightKg} kg (CONFIRMAR peso real antes de prescrever)`);
      } else {
        alerts.push("🔴 PESO OBRIGATÓRIO EM PEDIATRIA — PERGUNTAR PESO ANTES DE PRESCREVER.");
      }
    }
    if (patient.vaccinesUpToDate === false) {
      alerts.push("🟡 VACINAÇÃO ATRASADA: Considerar etiologias preveníveis por vacina.");
    } else if (patient.vaccinesUpToDate === undefined) {
      alerts.push("ℹ️ Status vacinal não informado — perguntar.");
    }
  }

  if (patient.isElderly) alerts.push("🟡 IDOSO (≥65a): Reduzir doses. Volume cauteloso. Monitorar função renal. Critérios de Beers.");
  if (renal.stage === "MODERADA") {
    alerts.push(`🟡 DRC MODERADA (ClCr ${renal.clcrMlMin} mL/min): Ajustar drogas renais. Evitar nefrotóxicos.`);
  }
  if (renal.stage === "GRAVE") {
    alerts.push(`🔴 DRC GRAVE (ClCr ${renal.clcrMlMin} mL/min): Ajustar TODAS as drogas renais. EVITAR: AINEs, metformina, espironolactona, morfina.`);
    alerts.push("🔴 Enoxaparina: preferir HNF. Se usar, 1mg/kg 1x/dia.");
    alerts.push("🔴 Monitorar K a cada 24h. Se IECA/BRA em uso: risco hipercalemia grave.");
  }
  if (renal.stage === "TERMINAL") {
    alerts.push(`🔴 FALÊNCIA RENAL (ClCr ${renal.clcrMlMin} mL/min): Doses especiais para TODAS as drogas.`);
    alerts.push("🔴 CONTRAINDICADOS: metformina, espironolactona, AINEs, morfina.");
    alerts.push("🔴 Considerar diálise: K > 6,5 | pH < 7,1 | edema pulmonar | uremia | oligúria refratária.");
    alerts.push("🔴 NÃO ASSUMIR DIÁLISE — perguntar se paciente já faz.");
    alerts.push("🔴 Monitorar K a cada 12-24h. Suspender IECA/BRA/espironolactona se K > 5,5.");
  }
  if (patient.hasHeartFailure) alerts.push("🔴 IC: Volume restrito. Risco de congestão. POCUS antes de volume.");
  if (patient.isDialytic) alerts.push("🔴 DIALÍTICO (informado): Volume muito restrito. Avaliar necessidade de TRS urgente.");
  if (patient.allergies) alerts.push(`🟡 ALERGIA INFORMADA: "${patient.allergies}" (tipo: ${patient.allergyType})`);
  
  // Hyperkalaemia risk assessment
  if ((renal.stage === "GRAVE" || renal.stage === "TERMINAL") && patient.medicationsInUse.length > 0) {
    const kRiskDrugs = patient.medicationsInUse.filter(d => /ieca|enalapril|captopril|ramipril|losartana|bra|espironolactona|amilorida|potássio|suplemento.*k/i.test(d));
    if (kRiskDrugs.length > 0) {
      alerts.push(`🔴 HIPERCALEMIA: DRC ${renal.stage} + ${kRiskDrugs.join(", ")} → risco grave. Monitorar K a cada 12-24h. Suspender se K > 5,5.`);
    }
  }

  // Elderly + DRC combo
  if (patient.isElderly && (renal.stage === "MODERADA" || renal.stage === "GRAVE" || renal.stage === "TERMINAL")) {
    alerts.push("🔴 IDOSO + DRC: Dose menor que o habitual. Mais risco de toxicidade. Monitorar rigorosamente.");
  }
  
  if (!patient.hasAnticoagulationIndication && !patient.isPediatric) {
    alerts.push("ℹ️ SEM INDICAÇÃO DE ANTICOAGULAÇÃO TERAPÊUTICA detectada. Usar apenas profilaxia.");
  }

  if (patient.scenario === "UBS") {
    alerts.push("ℹ️ CENÁRIO UBS: Não pedir exames invasivos. Conduta simples. Referenciar se grave.");
  } else if (patient.scenario === "SAMU") {
    alerts.push("ℹ️ CENÁRIO SAMU: Foco em estabilização. Não prescrever medicações complexas.");
  }

  if (renal.stage === "MODERADA" || renal.stage === "GRAVE" || renal.stage === "TERMINAL") {
    alerts.push("🟡 EVITAR NEFROTÓXICOS: aminoglicosídeos, AINEs, contraste iodado (se possível), anfotericina B.");
  }

  // NEURO ALERTS
  if (patient.isNeuroCase) {
    alerts.push("🧠 MODO NEURO ATIVADO: Sempre excluir causas graves (AVC, hemorragia, meningite, hipoglicemia, hipóxia).");
    if (patient.glasgowScore !== undefined) {
      if (patient.glasgowScore <= 8) {
        alerts.push(`🔴 GLASGOW ${patient.glasgowScore} ≤ 8: IOT + VM indicadas. TC urgente. Avaliar PIC.`);
      } else if (patient.glasgowScore <= 12) {
        alerts.push(`🟡 GLASGOW ${patient.glasgowScore} (moderado): Monitorar rebaixamento. TC indicada.`);
      }
    }
    if (patient.hasAnticoagulantInUse) {
      alerts.push("🔴 NEURO + ANTICOAGULADO: Risco de sangramento intracraniano. TC urgente. Considerar reversão se hemorragia confirmada.");
    }
    if (patient.isElderly) {
      alerts.push("🔴 IDOSO + NEURO: Confusão pode ser infecção, droga, metabólico, AVC. NUNCA assumir demência sem investigar.");
    }
  }

  // OBSTETRIC ALERTS
  if (patient.isPregnant || patient.isPuerperal) {
    alerts.push("🤰 MODO OBSTETRÍCIA ATIVADO: Prioridade = segurança materna E fetal.");
    if (patient.isPregnant) {
      alerts.push(`🤰 GESTANTE${patient.gestationalWeeks ? ` — IG ${patient.gestationalWeeks} semanas` : " — IG não informada (PERGUNTAR)"}`);
      alerts.push("🔴 DROGAS PROIBIDAS NA GESTAÇÃO: IECA, BRA, warfarina, isotretinoína, tetraciclina, metotrexato, misoprostol (sem indicação)");
      alerts.push("🟡 EVITAR SE POSSÍVEL: quinolonas, AINEs (especialmente 3º trimestre), benzodiazepínicos");
      alerts.push("✅ SEGUROS: penicilinas, cefalosporinas, azitromicina, metronidazol (2º/3º tri), paracetamol, insulina");
      if (patient.gestationalWeeks && patient.gestationalWeeks >= 20) {
        alerts.push("🟡 IG ≥ 20 sem: Monitorar PA. Se PA ≥ 140x90: investigar pré-eclâmpsia.");
      }
    }
    if (patient.isPuerperal) {
      alerts.push("🔴 PUERPÉRIO: Risco aumentado de TEV, infecção, hemorragia, depressão pós-parto.");
      alerts.push("🟡 Profilaxia TEV: enoxaparina 40mg/dia (puerpério = alto risco).");
    }
  }
  if (patient.isFertileAge && !patient.isPregnant && !patient.isPuerperal) {
    alerts.push("🟡 MULHER EM IDADE FÉRTIL: Confirmar se gestante antes de prescrever drogas teratogênicas.");
  }

  // ICU / CRITICAL ALERTS
  if (patient.isCriticalCase) {
    alerts.push("🏥 MODO UTI/CRÍTICO ATIVADO: ABCDE obrigatório. Classificar choque. Volume cauteloso.");
    if (patient.scenario === "UTI") {
      alerts.push("🔴 UTI: Acesso central, PAI, monitor multiparamétrico. PAM ≥ 65. Lactato seriado.");
    }
    if (patient.hasHeartFailure || patient.isDialytic || patient.isElderly) {
      alerts.push("🔴 VOLUME RESTRITO em paciente crítico: 250-500 mL + reavaliar (POCUS). NÃO 30 mL/kg automático.");
    }
  }

  // TRAUMA ALERTS
  if (patient.isTraumaCase) {
    alerts.push("🚑 MODO TRAUMA ATIVADO: Seguir ATLS. ABCDE. Tratar primeiro o que mata.");
    alerts.push("🔴 Não assumir trauma leve. Considerar: hemorragia, TCE, pneumotórax, tamponamento, fratura instável.");
    if (patient.hasAnticoagulantInUse) {
      alerts.push("🔴 TRAUMA + ANTICOAGULADO: Reverter anticoagulação. Risco hemorrágico aumentado.");
    }
    if (patient.isElderly) {
      alerts.push("🔴 IDOSO + TRAUMA: Maior morbimortalidade. Investigar causa da queda. Menor reserva fisiológica.");
    }
  }

  // ORTHO ALERTS
  if (patient.isOrthoCase) {
    alerts.push("🦴 MODO ORTOPEDIA ATIVADO: Exame neurovascular obrigatório. Imobilizar antes de mover.");
    if (patient.isElderly) {
      alerts.push("🟡 IDOSO + ORTOPEDIA: Queda → investigar causa. Risco fratura patológica. Osteoporose.");
    }
    if (patient.hasAnticoagulantInUse) {
      alerts.push("🔴 ANTICOAGULADO + FRATURA/TRAUMA: Risco de hematoma compartimental. Monitorar.");
    }
  }

  // GASTRO ALERTS
  if (patient.isGastroCase) {
    alerts.push("🫄 MODO GASTRO ATIVADO: NÃO assumir gastrite. Investigar abdome agudo, HDA, perfuração.");
    if (patient.hasAnticoagulantInUse) {
      alerts.push("🔴 ANTICOAGULADO + SANGRAMENTO GI: Avaliar reversão. INR. Hemoderivados.");
    }
    if (patient.isElderly) {
      alerts.push("🔴 IDOSO + ABDOME: Maior risco de abdome grave com pouca dor. Investigar mais.");
    }
    if (renal.stage === "GRAVE" || renal.stage === "TERMINAL") {
      alerts.push("🔴 DRC + GASTRO: Cautela com AINEs, opioides, contraste. Evitar nefrotóxicos.");
    }
  }

  // ENDOCRINE ALERTS
  if (patient.isEndocrineCase) {
    alerts.push("🧬 MODO ENDÓCRINO ATIVADO: Monitorar K ANTES de insulina. Corrigir eletrólitos LENTAMENTE.");
    alerts.push("🔴 NUNCA assumir CAD/HHS sem confirmar critérios. Gasometria obrigatória.");
    if (patient.isElderly) {
      alerts.push("🟡 IDOSO + ENDÓCRINO: Mais risco de complicações. Corrigir mais lentamente.");
    }
    if (renal.stage !== "NORMAL" && renal.stage !== "LEVE") {
      alerts.push("🔴 DRC + EMERGÊNCIA METABÓLICA: Maior risco de hipercalemia, acidose. Considerar diálise precoce.");
    }
  }

  return alerts;
}

// ─── MODULE 10: Pediatric Dose Calculator ────────────────────────
function calcPediatricDoses(patient: PatientData): string[] {
  const lines: string[] = [];
  const w = patient.weightKg || patient.estimatedWeightKg;
  if (!w) {
    lines.push("❌ PESO NÃO DISPONÍVEL — não é possível calcular doses pediátricas.");
    return lines;
  }

  const isEstimated = !patient.weightKg && !!patient.estimatedWeightKg;
  if (isEstimated) {
    lines.push(`⚠️ PESO ESTIMADO: ~${w} kg (CONFIRMAR antes de prescrever)`);
  }

  lines.push(`\n  DOSES PEDIÁTRICAS (peso ${isEstimated ? "estimado" : "informado"}: ${w} kg):`);
  
  // Volume
  const vol10 = Math.round(10 * w);
  const vol20 = Math.round(20 * w);
  lines.push(`  Volume ressuscitação: 10-20 mL/kg = ${vol10}-${vol20} mL (NÃO usar 30 mL/kg)`);
  lines.push(`  → Reavaliar após CADA bolus de 10-20 mL/kg`);
  
  // Common pediatric drugs
  for (const [, drug] of Object.entries(PEDIATRIC_DRUGS)) {
    const doseMatch = drug.dosePerKg.match(/([0-9]+(?:[.,][0-9]+)?)/);
    if (doseMatch) {
      const dosePerKg = parseFloat(doseMatch[1]);
      const totalDose = Math.round(dosePerKg * w * 10) / 10;
      let line = `  ${drug.name}: ${drug.dosePerKg} × ${w}kg = ${totalDose} ${drug.dosePerKg.includes("mg") ? "mg" : "unid"} ${drug.frequency} ${drug.route}`;
      if (drug.maxDose) line += ` (máx: ${drug.maxDose})`;
      lines.push(line);
    }
    if (drug.ageRestrictions) lines.push(`    ${drug.ageRestrictions}`);
    if (drug.warnings) {
      for (const warn of drug.warnings) lines.push(`    ⚠️ ${warn}`);
    }
  }

  // Contraindicated drugs
  lines.push(`\n  🚫 DROGAS CONTRAINDICADAS/CAUTELA EM PEDIATRIA:`);
  for (const contra of PEDIATRIC_CONTRAINDICATED) {
    lines.push(`  ${contra.drug}: ${contra.reason} (${contra.ageLimit || "todas idades"})`);
  }

  // Dehydration if applicable
  const userText = patient.medicationsInUse.join(" "); // crude
  const dehydration = classifyDehydration(userText);
  if (dehydration) {
    lines.push(`\n  💧 DESIDRATAÇÃO ${dehydration.level}:`);
    lines.push(`  → ${dehydration.fluidMlKg}`);
    lines.push(`  → ${dehydration.plan}`);
  }

  return lines;
}

// ─── MAIN ENGINE ─────────────────────────────────────────────────
function runEngine(messages: ChatMessage[]): EngineResult {
  const patient = extractPatient(messages);
  const renal = calcRenal(patient);
  const doses = calcDoses(patient, renal);
  const userText = messages.filter(m => m.role === "user").map(m => m.content).join("\n");
  const protocol = selectProtocol(userText, patient.scenario, patient);
  const antibiotic = patient.isPediatric ? null : selectAntibiotic(patient, renal); // pediatric ATB handled by LLM with dose context
  const interactions = checkInteractions(patient.medicationsInUse, [], patient, renal);
  const drugRenalAdj = getDrugRenalAdjustments(renal.clcrMlMin);
  const allergyWarnings = checkAllergies(patient);
  const dataValidation = validateData(patient);
  const safetyAlerts = generateSafetyAlerts(patient, renal);

  const missingData: string[] = [];
  if (!patient.weightKg) {
    if (patient.isPediatric && patient.estimatedWeightKg) {
      missingData.push(`PESO (kg) — ESTIMADO ${patient.estimatedWeightKg}kg por idade. CONFIRMAR peso real.`);
    } else {
      missingData.push("PESO (kg) — necessário para cálculos mg/kg, mL/kg, UI/kg");
    }
  }
  if (!patient.sex) missingData.push("SEXO — necessário para ajuste ClCr (fator 0,85 feminino)");
  if (!patient.ageYears && !patient.ageMonths) missingData.push("IDADE — necessário para ClCr e ajustes etários");
  if (!patient.creatinineMgDl && !patient.isPediatric) missingData.push("CREATININA — necessário para função renal e ajuste de doses");
  if (!patient.allergies) missingData.push("ALERGIAS — necessário para validação de segurança");
  if (patient.scenario === "NÃO INFORMADO") missingData.push("CENÁRIO (PS/UTI/UBS/SAMU/Enfermaria)");
  if (patient.focus === "SEM FOCO DEFINIDO") missingData.push("FOCO INFECCIOSO");
  if (patient.allergies && patient.allergyType === "NÃO INFORMADA" && /penicilina/i.test(patient.allergies)) {
    missingData.push("TIPO DE ALERGIA a penicilina: anafilaxia ou reação leve?");
  }
  if (patient.isPediatric && patient.vaccinesUpToDate === undefined) {
    missingData.push("STATUS VACINAL — vacinação em dia?");
  }
  if ((patient.isPregnant || patient.isPuerperal) && !patient.gestationalWeeks && patient.isPregnant) {
    missingData.push("IDADE GESTACIONAL (semanas) — necessário para conduta obstétrica");
  }
  if (patient.isFertileAge && !patient.isPregnant && !patient.isPuerperal) {
    missingData.push("GRAVIDEZ — paciente em idade fértil, confirmar se gestante antes de prescrever");
  }

  const warnings = [...allergyWarnings];
  for (const adj of drugRenalAdj) {
    warnings.push(`💊 AJUSTE RENAL: ${adj}`);
  }

  return { patient, renal, doses, interactions, protocol, antibiotic, missingData, warnings, dataValidation, safetyAlerts };
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
  lines.push(`  Peso: ${e.patient.weightKg ? `${e.patient.weightKg} kg ✅` : "❌ NÃO INFORMADO — NÃO INVENTAR"}`);
  lines.push(`  Idade: ${e.patient.ageYears ? `${e.patient.ageYears} anos ✅${e.patient.isElderly ? " (IDOSO)" : ""}` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Sexo: ${e.patient.sex ? `${e.patient.sex === "M" ? "Masculino" : "Feminino"} ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Creatinina: ${e.patient.creatinineMgDl ? `${e.patient.creatinineMgDl} mg/dL ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Alergias: ${e.patient.allergies ? `"${e.patient.allergies}" (Tipo: ${e.patient.allergyType}) ✅` : "❌ NÃO INFORMADO"}`);
  lines.push(`  Cenário: ${e.patient.scenario}`);
  lines.push(`  Foco: ${e.patient.focus}`);
  lines.push(`  Origem infecção: ${e.patient.infectionOrigin}`);
  lines.push(`  Medicações em uso: ${e.patient.medicationsInUse.length ? e.patient.medicationsInUse.join(", ") : "não informadas"}`);
  lines.push(`  IC: ${e.patient.hasHeartFailure ? "SIM ⚠️" : "Não informado"}`);
  lines.push(`  Dialítico: ${e.patient.isDialytic ? "SIM (informado pelo usuário) ⚠️" : "NÃO INFORMADO — NÃO ASSUMIR"}`);
  lines.push(`  Indicação anticoagulação: ${e.patient.hasAnticoagulationIndication || "NENHUMA DETECTADA → só profilaxia"}`);

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
    lines.push(`  Classificação: ${e.renal.clcrMlMin >= 90 ? "≥90 Normal" : e.renal.clcrMlMin >= 60 ? "60-89 Leve" : e.renal.clcrMlMin >= 30 ? "30-59 Moderada" : e.renal.clcrMlMin >= 15 ? "15-29 Grave" : "<15 Falência Renal"}`);
  }
  if (e.renal.adjustments.length) {
    lines.push(`  AJUSTES RENAIS OBRIGATÓRIOS:`);
    for (const adj of e.renal.adjustments) {
      lines.push(`    → ${adj}`);
    }
  }

  // Doses
  lines.push("\n💊 DOSES CALCULADAS PELO MOTOR (copie exatamente):");
  if (!e.patient.weightKg) {
    lines.push("  ⚠️ PESO NÃO INFORMADO — doses por kg PENDENTES. NÃO INVENTE PESO.");
  } else {
    // Fluid
    lines.push(`  VOLUME: ${e.doses.fluidRecommendation}`);
    if (e.doses.fluidWarning) lines.push(`  ${e.doses.fluidWarning}`);
    
    // Vasopressors
    lines.push(`  Diluição nora: ${e.doses.noraDilution}`);
    if (e.doses.noraMinMcgMin) lines.push(`  ${e.doses.noraMinMcgMin}`);
    if (e.doses.noraMaxMcgMin) lines.push(`  ${e.doses.noraMaxMcgMin}`);
    
    // Heparin
    lines.push("\n  ANTICOAGULAÇÃO:");
    if (e.doses.hepProphylaxis) lines.push(`  PROFILAXIA: ${e.doses.hepProphylaxis}`);
    if (e.doses.enoxProphylaxis) lines.push(`  PROFILAXIA: ${e.doses.enoxProphylaxis}`);
    if (e.doses.hepTherapeutic) lines.push(`  TERAPÊUTICA: ${e.doses.hepTherapeutic}`);
    if (e.doses.enoxTherapeutic) lines.push(`  TERAPÊUTICA: ${e.doses.enoxTherapeutic}`);
    if (e.doses.enoxRenal) lines.push(`  ${e.doses.enoxRenal}`);
    if (e.doses.hepWarning) lines.push(`  ${e.doses.hepWarning}`);
    
    // Other
    if (e.doses.insulinCAD) lines.push(`\n  ${e.doses.insulinCAD}`);
    lines.push(`  ${e.doses.mgSO4Attack}`);
    if (e.doses.complexoPTmin) lines.push(`  ${e.doses.complexoPTmin}`);
    if (e.doses.complexoPTmax) lines.push(`  ${e.doses.complexoPTmax}`);

    // Vancomycin
    const w = e.patient.weightKg;
    const vancoStd = Math.round(15 * w);
    const vancoMax = Math.round(20 * w);
    const vancoAtaque = Math.round(25 * w);
    lines.push(`\n  Vancomicina manutenção: 15-20 mg/kg × ${w} kg = ${vancoStd}-${vancoMax} mg 12/12h`);
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
    if (e.antibiotic.allergyWarnings.length) {
      lines.push(`  ALERTAS DE ALERGIA:`);
      for (const aw of e.antibiotic.allergyWarnings) {
        lines.push(`    ${aw}`);
      }
    }
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

  // Safety Alerts
  if (e.safetyAlerts.length) {
    lines.push("\n🛡️ ALERTAS DE SEGURANÇA DO MOTOR:");
    for (const sa of e.safetyAlerts) {
      lines.push(`  ${sa}`);
    }
  }

  // Warnings
  if (e.warnings.length) {
    lines.push("\n🚨 ALERTAS ADICIONAIS:");
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

  // Pediatric section
  if (e.patient.isPediatric) {
    lines.push("\n👶 ═══ MODO PEDIATRIA ATIVADO ═══");
    lines.push(`  Neonato: ${e.patient.isNeonate ? "SIM 🔴" : "Não"}`);
    lines.push(`  Lactente: ${e.patient.isInfant ? "SIM ⚠️" : "Não"}`);
    lines.push(`  Peso estimado por idade: ${e.patient.estimatedWeightKg ? `~${e.patient.estimatedWeightKg} kg (CONFIRMAR)` : "N/A"}`);
    lines.push(`  Vacinas: ${e.patient.vaccinesUpToDate === true ? "Em dia" : e.patient.vaccinesUpToDate === false ? "ATRASADAS ⚠️" : "Não informado — PERGUNTAR"}`);
    
    const pedDoses = calcPediatricDoses(e.patient);
    for (const line of pedDoses) lines.push(line);
    
    lines.push("\n  REGRAS PEDIÁTRICAS:");
    lines.push("  → NUNCA usar dose adulta");
    lines.push("  → Volume: 10-20 mL/kg (NÃO 30 mL/kg)");
    lines.push("  → Reavaliar após CADA bolus");
    lines.push("  → Se RN febril: internar + ATB empírico");
    lines.push("  → EVITAR: quinolonas, tetraciclinas, codeína, tramadol em < 12a");
  }

  // Neuro section
  if (e.patient.isNeuroCase) {
    lines.push("\n🧠 ═══ MODO NEURO ATIVADO ═══");
    lines.push(`  Glasgow: ${e.patient.glasgowScore !== undefined ? `${e.patient.glasgowScore} (${e.patient.glasgowScore <= 8 ? "GRAVE — IOT indicada" : e.patient.glasgowScore <= 12 ? "MODERADO" : "LEVE"})` : "NÃO INFORMADO — AVALIAR"}`);
    lines.push(`  Anticoagulante em uso: ${e.patient.hasAnticoagulantInUse ? "SIM 🔴 (risco sangramento intracraniano)" : "Não detectado"}`);
    lines.push(`  Idoso: ${e.patient.isElderly ? "SIM — confusão pode ser infecção/droga/metabólico/AVC" : "Não"}`);
    lines.push(`\n  REGRAS NEURO:`);
    lines.push(`  → SEMPRE excluir: AVC, hemorragia, meningite, hipoglicemia, hipóxia, intoxicação`);
    lines.push(`  → Glasgow ≤ 8: IOT + VM + TC urgente`);
    lines.push(`  → Convulsão: BZD → fenitoína/levetiracetam → fenobarbital`);
    lines.push(`  → Cefaleia grave: excluir hemorragia (TC), meningite (LCR), AVC, dissecção`);
    lines.push(`  → TCE + anticoagulado: TC obrigatória + reverter anticoagulação se sangramento`);
    lines.push(`  → Febre + alteração mental: pensar meningite → ATB empírico NÃO ATRASAR`);
    lines.push(`  → AVC isquêmico < 4,5h: avaliar trombólise (Alteplase 0,9mg/kg)`);
    lines.push(`  → AVC hemorrágico: NÃO anticoagular. Reverter se anticoagulado.`);
    lines.push(`  → Idoso confuso: investigar infecção, droga, metabólico antes de assumir demência`);
    lines.push(`  → Delirium: medidas não farmacológicas PRIMEIRO. Haloperidol 0,5-2mg se agitação grave (monitorar QTc)`);
  }

  // Obstetric section
  if (e.patient.isPregnant || e.patient.isPuerperal) {
    lines.push("\n🤰 ═══ MODO OBSTETRÍCIA ATIVADO ═══");
    lines.push(`  Gestante: ${e.patient.isPregnant ? "SIM" : "Não"}`);
    lines.push(`  Puérpera: ${e.patient.isPuerperal ? "SIM" : "Não"}`);
    lines.push(`  IG: ${e.patient.gestationalWeeks ? `${e.patient.gestationalWeeks} semanas` : "NÃO INFORMADA — PERGUNTAR"}`);
    lines.push(`  Mulher em idade fértil: ${e.patient.isFertileAge ? "SIM" : "N/A"}`);
    lines.push(`\n  DROGAS PROIBIDAS NA GESTAÇÃO:`);
    lines.push(`  🔴 CONTRAINDICADAS: IECA, BRA, warfarina, isotretinoína, tetraciclina, doxiciclina, metotrexato, misoprostol (sem indicação obstétrica)`);
    lines.push(`  🟡 EVITAR: quinolonas, AINEs (3º tri: fechamento ducto arterioso), benzodiazepínicos, carbamazepina, valproato, fenitoína`);
    lines.push(`  ✅ SEGUROS: penicilinas, cefalosporinas, azitromicina, eritromicina, metronidazol (2º/3º tri), clindamicina, paracetamol, insulina`);
    lines.push(`\n  ANTIBIÓTICOS NA GESTAÇÃO:`);
    lines.push(`  → 1ª escolha: penicilinas, cefalosporinas`);
    lines.push(`  → Atípicos: azitromicina (NÃO usar quinolona)`);
    lines.push(`  → ITU: ceftriaxona, nitrofurantoína (NÃO no 3º tri), fosfomicina`);
    lines.push(`  → Anaeróbios: metronidazol (evitar 1º tri se possível), clindamicina`);
    lines.push(`\n  EMERGÊNCIAS OBSTÉTRICAS:`);
    lines.push(`  → Pré-eclâmpsia: MgSO4 (Zuspan: 4g IV → 1-2g/h) + anti-HAS (hidralazina/nifedipino). EVITAR IECA/BRA/nitroprussiato.`);
    lines.push(`  → Eclâmpsia: MgSO4 + avaliar parto IMEDIATO. Monitorar reflexo patelar, FR, diurese.`);
    lines.push(`  → Hemorragia pós-parto: ocitocina → metilergometrina → misoprostol → ác. tranexâmico → cirurgia`);
    lines.push(`  → Ectópica: beta-hCG + USG TV. Instável = cirurgia. Estável = metotrexato.`);
    lines.push(`  → Sepse puerperal: clinda + genta ± ampicilina. Profilaxia TEV obrigatória.`);
    lines.push(`\n  EXAMES NA GESTAÇÃO:`);
    lines.push(`  → EVITAR radiação (TC/RX) se possível. Preferir USG, RM sem contraste.`);
    lines.push(`  → Se TC imprescindível: proteção abdominal + anotar dose.`);
    lines.push(`\n  PUERPÉRIO:`);
    lines.push(`  → Riscos: TEV, infecção (endometrite), hemorragia tardia, depressão pós-parto, mastite`);
    lines.push(`  → Profilaxia TEV: enoxaparina 40mg/dia (cesárea, imobilização, obesidade, PE)`);
  }

  // ICU / Critical section
  if (e.patient.isCriticalCase) {
    lines.push("\n🏥 ═══ MODO UTI / PACIENTE CRÍTICO ATIVADO ═══");
    lines.push(`  Cenário: ${e.patient.scenario}`);
    lines.push(`  IC: ${e.patient.hasHeartFailure ? "SIM" : "Não informado"}`);
    lines.push(`  Dialítico: ${e.patient.isDialytic ? "SIM" : "NÃO ASSUMIR"}`);
    lines.push(`\n  REGRAS UTI:`);
    lines.push(`  → ABCDE obrigatório`);
    lines.push(`  → Classificar choque: séptico, cardiogênico, hipovolêmico, obstrutivo. NÃO assumir sepse.`);
    lines.push(`  → Volume: 250-500 mL → reavaliar (POCUS). NÃO 30 mL/kg automático em idoso/DRC/IC.`);
    lines.push(`  → Vasopressor: noradrenalina 1ª escolha. Mostrar mcg/kg/min + mL/h + diluição.`);
    lines.push(`  → Se refratário: vasopressina 0,03 UI/min → dobutamina → hidrocortisona 200mg/dia.`);
    lines.push(`  → IOT se: Glasgow < 8, hipoxemia, fadiga, choque grave.`);
    lines.push(`  → VM: VT 6-8 mL/kg, PEEP ≥ 5, FiO2 para SpO2 92-96%.`);
    lines.push(`  → Sedação: midazolam/propofol + fentanil/dexmedetomidina. Dose por kg.`);
    lines.push(`  → METAS: PAM ≥ 65, Sat > 92%, diurese > 0,5 mL/kg/h, lactato ↓, glicemia 140-180, pH > 7,2.`);
    lines.push(`  → Calcular ClCr → ajustar TODAS as drogas.`);
    lines.push(`  → Checar interações: vasoativo + sedação + ATB + anticoagulação + QT.`);
  }

  // Trauma section
  if (e.patient.isTraumaCase) {
    lines.push("\n🚑 ═══ MODO TRAUMA ATIVADO ═══");
    lines.push(`  REGRAS TRAUMA:`);
    lines.push(`  → ATLS obrigatório: A (via aérea + cervical) → B (respiração) → C (circulação) → D (neuro) → E (exposição).`);
    lines.push(`  → Tratar PRIMEIRO o que mata. Não assumir trauma leve.`);
    lines.push(`  → Choque no trauma: pensar hipovolêmico/hemorrágico PRIMEIRO. Não assumir sepse.`);
    lines.push(`  → Volume: cristaloide 500mL → reavaliar. Se choque III/IV → sangue precoce.`);
    lines.push(`  → Ácido tranexâmico 1g IV se < 3h do trauma.`);
    lines.push(`  → FAST (POCUS): líquido livre abdominal/pericárdico.`);
    lines.push(`  → Abdome agudo: NUNCA assumir gastrite. Considerar apendicite, perfuração, isquemia, ectópica.`);
    lines.push(`  → Analgesia: dipirona + opioide. Ajustar por peso/rim/idade.`);
    lines.push(`  → ATB cirúrgico se abdome: ceftriaxona + metronidazol. Se hospitalar: piptazo/mero.`);
    lines.push(`  → Anticoagulado + trauma: reverter IMEDIATAMENTE.`);
    lines.push(`  → Idoso + trauma: investigar causa da queda. Menor reserva.`);
    lines.push(`  → Mostrar cálculos: peso, dose, volume, BIC, ClCr.`);
  }

  // Orthopedic section
  if (e.patient.isOrthoCase) {
    lines.push("\n🦴 ═══ MODO ORTOPEDIA ATIVADO ═══");
    lines.push(`  REGRAS ORTOPEDIA:`);
    lines.push(`  → Exame neurovascular OBRIGATÓRIO: pulso, sensibilidade, motor, perfusão.`);
    lines.push(`  → Se déficit neurovascular → URGÊNCIA.`);
    lines.push(`  → Imobilizar ANTES de mover/transportar.`);
    lines.push(`  → RX se: dor forte, trauma, deformidade, edema, incapacidade de apoiar.`);
    lines.push(`  → Fratura: imobilizar + analgesia + RX + avaliar cirurgia.`);
    lines.push(`  → Luxação: RX pré + redução com sedação + RX pós + neurovascular pós.`);
    lines.push(`  → Dor lombar: excluir red flags (déficit neuro, retenção urinária, febre, câncer, trauma).`);
    lines.push(`  → Analgesia: dipirona/paracetamol + AINE (se rim ok) + opioide se grave.`);
    lines.push(`  → Idoso: investigar causa queda. Risco fratura patológica.`);
    lines.push(`  → Anticoagulado: risco hematoma. Monitorar compartimento.`);
    lines.push(`  → ADAPTAR: SAMU → imobilizar; PS → investigar; UBS → encaminhar.`);
  }

  // Gastro section
  if (e.patient.isGastroCase) {
    lines.push("\n🫄 ═══ MODO GASTRO ATIVADO ═══");
    lines.push(`  REGRAS GASTRO:`);
    lines.push(`  → Abdome agudo: NUNCA assumir gastrite/virose. Considerar apendicite, perfuração, isquemia, ectópica.`);
    lines.push(`  → HDA: IBP IV (omeprazol 80mg bolus + 8mg/h) + EDA ≤ 12-24h. Se cirrose: octreotida + ceftriaxona profilática.`);
    lines.push(`  → Cirrose: pensar varizes, ascite, encefalopatia, PBE. EVITAR excesso volume, AINEs, aminoglicosídeos.`);
    lines.push(`  → Pancreatite: hidratação vigorosa + analgesia + jejum inicial → dieta precoce. ATB só se necrose infectada.`);
    lines.push(`  → Colecistite/Colangite: USG + ATB (ceftriaxona + metronidazol). Colecistectomia precoce. CPRE se colangite grave.`);
    lines.push(`  → Hepatite: avaliar AST/ALT/bilirrubina/INR. EVITAR drogas hepatotóxicas.`);
    lines.push(`  → Anticoagulado: avaliar INR, risco sangramento.`);
    lines.push(`  → Cautela com: AINEs, paracetamol (dose máx), opioide, metformina em cirrose/DRC.`);
    lines.push(`  → Idoso: abdome grave com pouca dor → investigar mais.`);
  }

  // Endocrine section
  if (e.patient.isEndocrineCase) {
    lines.push("\n🧬 ═══ MODO ENDÓCRINO / METABÓLICO ATIVADO ═══");
    lines.push(`  REGRAS ENDÓCRINO:`);
    lines.push(`  → Hiperglicemia: SEMPRE avaliar CAD vs HHS. Não assumir hiperglicemia simples.`);
    lines.push(`  → CAD: SF → K (ANTES insulina!) → Insulina 0,1 UI/kg/h IV. Se K < 3,3 → CORRIGIR PRIMEIRO.`);
    lines.push(`  → HHS: HIDRATAR PRIMEIRO, insulina DEPOIS. Osmolaridade queda < 3 mOsm/h.`);
    lines.push(`  → Potássio: SEMPRE avaliar K antes de insulina. Se K alto → ECG → Gluconato Ca → Insulina+Glicose.`);
    lines.push(`  → Sódio: corrigir LENTAMENTE. Máx 8-10 mEq/L/24h. Risco mielinólise.`);
    lines.push(`  → Hipoglicemia: glicose EV imediata → reavaliar → investigar causa.`);
    lines.push(`  → Tireotoxicose: beta-bloq + PTU + iodo (1h após PTU) + corticoide.`);
    lines.push(`  → Mixedema: hidrocortisona ANTES de levotiroxina. Aquecimento passivo.`);
    lines.push(`  → DRC / idoso: ajustar doses. Mais risco.`);
    lines.push(`  → Mostrar cálculos: ml/kg, insulina/kg, Na corrigido, osmolaridade, ClCr.`);
    lines.push(`  → NUNCA assumir CAD/HHS. Confirmar com exames.`);
  }

  lines.push("\n═══ FIM DO MOTOR CLÍNICO ═══");
  return lines.join("\n");
}

// ─── System Prompt ───────────────────────────────────────────────
const SYSTEM_PROMPT = `Você é um assistente clínico de plantão no Brasil. O MOTOR CLÍNICO já calculou tudo. Você ORGANIZA e EXPLICA.

REGRAS ABSOLUTAS DE SEGURANÇA (NUNCA VIOLAR):

1. NÃO ASSUMIR DADOS NÃO INFORMADOS
   - NUNCA assumir: diálise, ventilação mecânica, UTI prévia, foco infeccioso, peso, idade, sexo
   - Se dado marcado ❌, PERGUNTE. NÃO invente.
   - Se o motor diz "NÃO ASSUMIR", obedeça.

2. AJUSTE RENAL OBRIGATÓRIO
   - Se creatinina informada → usar ClCr do motor (Cockcroft-Gault)
   - Classificação: ≥90 Normal | 60-89 Leve | 30-59 Moderada | 15-29 Grave | <15 Falência
   - ClCr < 60 → ajustar doses (vancomicina, aminoglicosídeos, meropenem, cefepime, piptazo, cipro/levo, gabapentina, tramadol, digoxina, morfina)
   - ClCr < 30 → ajuste OBRIGATÓRIO + EVITAR metformina, AINEs, espironolactona, morfina
   - ClCr < 15 → insuficiência renal grave/terminal. Doses especiais.
   - NUNCA prescrever antibiótico, heparina, enoxaparina, opioide sem considerar rim
   - SEMPRE mostrar: ClCr calculado, classificação, ajustes aplicados
   - Diálise: NÃO ASSUMIR. Considerar se K > 6,5, pH < 7,1, edema pulmonar, uremia, oligúria refratária
   - Hipercalemia: monitorar K se IECA/BRA/espironolactona + DRC. Suspender se K > 5,5

3. PESO = BASE DE CÁLCULO
   - Sempre usar doses por kg do motor
   - NUNCA usar dose fixa se peso disponível
   - COPIAR exatamente os valores do motor

4. VOLUME NÃO É AUTOMÁTICO
   - Se motor diz "VOLUME RESTRITO" → NÃO usar 30 mL/kg
   - Idoso, DRC, IC, dialítico → 250-500 mL + reavaliar + POCUS
   - Seguir EXATAMENTE a recomendação de volume do motor

5. ALERGIA É REGRA FORTE
   - Se anafilaxia a penicilina → EVITAR penicilinas, cefalosporinas, carbapenêmicos
   - PREFERIR: aztreonam, quinolona, vancomicina, linezolida, daptomicina
   - Seguir o antibiótico recomendado pelo motor (já considera alergia)
   - NUNCA ignorar alergia

6. NÃO ANTICOAGULAR SEM INDICAÇÃO
   - Se motor diz "ANTICOAGULAÇÃO TERAPÊUTICA NÃO INDICADA" → usar APENAS profilaxia
   - Anticoagulação plena SÓ se: TEV, FA, IAM, TEP, TVP, prótese valvar
   - Sepse SEM essas indicações = PROFILAXIA apenas

7. ANTIBIÓTICO DIRECIONADO
   - Meropenem + Vancomicina NÃO É AUTOMÁTICO
   - Só usar espectro máximo se: choque grave + hospitalar + sem foco + falha ATB
   - Seguir a recomendação do motor que considera foco, cenário, alergia

8. ALERTAS OBRIGATÓRIOS
   - Mostrar TODOS os alertas do motor
   - Se risco: DRC, idoso, alergia, interação, QT, hipercalemia, sangramento
   - Nunca omitir alerta de segurança

9. EXAMES COERENTES COM CENÁRIO
   - UBS → não pedir TC urgente ou invasivos
   - SAMU → não pedir ressonância
   - PS → exames básicos primeiro
   - UTI → pode pedir invasivos

10. ADAPTAR AO CENÁRIO
    - UBS → conduta simples
    - PS → conduta inicial
    - UTI → conduta completa (acesso central, PAI, monitor)
    - SAMU → estabilização
    - Enfermaria → manejo clínico

11. MOSTRAR TODOS OS CÁLCULOS
    - ClCr, dose/kg, volume/kg, diluição, velocidade BIC, ajuste renal
    - Nunca esconder cálculo

12. PRIORIDADE = SEGURANÇA DO PACIENTE
    - Se dúvida → ser conservador
    - Pedir mais dados antes de prescrever
    - Evitar droga arriscada se alternativa existir
    - Alertar risco

FORMATO OBRIGATÓRIO (nesta ordem):
1. 📊 VALIDAÇÃO — Checklist: ✅/❌ para cada dado. Score %.
2. 📋 RESUMO — 1-2 linhas. Impressão + gravidade.
3. 🎯 DIAGNÓSTICO — hipótese principal + 2-3 diferenciais (tabela: Hipótese | Probabilidade | Argumento).
4. ⚡ PRIORIDADES — 1-5 ações IMEDIATAS (verbo imperativo, em ordem de urgência).
5. 🔄 ALGORITMO — fluxo decisório com setas (→ ↓).
6. 🔬 EXAMES — "Imediatos" e "Complementares" (ADAPTAR AO CENÁRIO).
7. 💊 CONDUTA + PRESCRIÇÃO — Use ATB do motor. Copie doses do motor. Mostre fórmula + resultado. PROFILAXIA TVP = profilática (NÃO terapêutica sem indicação).
8. ⚠️ INTERAÇÕES — Copie alertas do motor + adicione QT, eletrólitos, renal.
9. 🚨 ALERTAS — red flags, contraindicações, segurança. INCLUIR todos os alertas de segurança do motor.
10. 📚 REFERÊNCIAS — guidelines brasileiras e internacionais.
11. 🎯 METAS (se UTI/grave) — PAM ≥65, diurese >0.5 mL/kg/h, lactato↓, Sat>92%, glicemia 140-180, K normal, pH>7.2.
12. ❓ PERGUNTAS — 3-5 perguntas OBRIGATÓRIAS. Incluir TODOS os dados faltantes do motor + perguntas de refinamento do ATB.

REGRAS PEDIÁTRICAS (se MODO PEDIATRIA ativado):
- TODAS as doses por kg. NUNCA dose fixa adulta.
- Volume: 10-20 mL/kg por bolus. NUNCA 30 mL/kg.
- Reavaliar após CADA bolus (FC, perfusão, hepatomegalia).
- RN febril (< 28 dias) = INTERNAÇÃO + ATB empírico + LCR.
- EVITAR: quinolonas (< 18a), tetraciclinas (< 8a), codeína/tramadol (< 12a), AAS (< 16a exceto Kawasaki).
- Se peso não informado: usar estimativa por idade MAS alertar que é estimativa.
- Perguntar VACINAÇÃO.
- Se emergência pediátrica (PCR, convulsão, sepse): usar protocolo PALS.
- Diurese alvo pediátrica: > 1 mL/kg/h.
- Hipoglicemia: corrigir ANTES de tratar sepse.

REGRAS DE INTERAÇÕES MEDICAMENTOSAS:
- Verificar TODAS as interações ANTES de prescrever.
- Se > 3 drogas: alerta moderado. Se > 5: alerta alto (polifarmácia).
- Varfarina: INR seriado com qualquer ATB, amiodarona, AINE, antidepressivo.
- Amiodarona: risco QT com quinolona, macrolídeo, haloperidol, ondansetrona.
- DOAC: checar inibidores/indutores CYP3A4 e P-gp.
- Nefrotóxicos: nunca combinar ≥ 2 sem monitorar Cr.
- Idoso > 65a + depressor SNC: reduzir dose 50%, critérios de Beers.
- Classificar severidade: 🟢 leve, 🟡 moderado, 🔴 grave/contraindicado.
- Se interação grave: sugerir alternativa.

REGRAS NEUROLÓGICAS (se MODO NEURO ativado):
- SEMPRE excluir causas graves primeiro: AVC, hemorragia, meningite, hipoglicemia, hipóxia, intoxicação, sepse, TCE, tumor.
- Rebaixamento de consciência: ABCDE → glicemia → oxigenação → pupilas → Glasgow → corrigir causas reversíveis.
- AVC: TC sem contraste URGENTE. Avaliar tempo de início. Se isquêmico < 4,5h: trombólise (Alteplase 0,9mg/kg). Se hemorrágico: NÃO anticoagular.
- Convulsão ativa: BZD (diazepam 10mg IV ou midazolam 10mg IM) → fenitoína 20mg/kg OU levetiracetam 60mg/kg → fenobarbital → BIC (UTI).
- Cefaleia grave: NUNCA assumir enxaqueca sem excluir hemorragia (TC), meningite (LCR), AVC, dissecção.
- TCE: Glasgow + pupilas + TC urgente. Se anticoagulado: TC OBRIGATÓRIA + reverter anticoagulação se sangramento. Glasgow ≤ 8: IOT.
- Meningite: ATB IMEDIATO se suspeita forte — NÃO ATRASAR POR EXAME. Dexametasona antes/junto ATB.
- Delirium: investigar causa (infecção, droga, metabólico). Medidas NÃO farmacológicas primeiro. Haloperidol só se agitação grave (monitorar QTc, EVITAR em Parkinson).
- Idoso confuso: NUNCA assumir demência. Investigar infecção, droga, metabólico, AVC primeiro.
- Anticoagulado + neuro: risco de sangramento intracraniano. TC urgente. Reverter se hemorragia.
- ADAPTAR AO CENÁRIO: SAMU → estabilizar (via aérea, glicemia); PS → TC + investigar; UTI → monitorar PIC, Glasgow horário; UBS → referenciar se grave.

REGRAS OBSTÉTRICAS (se MODO OBSTETRÍCIA ativado):
- Se gestante: NUNCA prescrever IECA, BRA, warfarina, isotretinoína, tetraciclina, metotrexato sem indicação obstétrica.
- EVITAR: quinolonas, AINEs (3º tri), benzodiazepínicos, valproato, carbamazepina, fenitoína.
- ANTIBIÓTICOS SEGUROS: penicilinas, cefalosporinas, azitromicina, metronidazol (2º/3º tri), clindamicina.
- Pré-eclâmpsia/Eclâmpsia: MgSO4 (Zuspan: 4g IV 20min → 1-2g/h). Anti-HAS: hidralazina 5mg IV ou nifedipino 10mg VO. NUNCA IECA/BRA.
- Hemorragia pós-parto: ocitocina → metilergometrina (⚠️ CI se HAS) → misoprostol 800mcg VR → ác. tranexâmico 1g IV → cirurgia.
- Gravidez ectópica: instável = cirurgia. Estável + hCG < 5000 = metotrexato.
- Sepse puerperal: clinda + genta ± ampicilina. Profilaxia TEV obrigatória.
- EXAMES: evitar radiação. Preferir USG, RM sem contraste.
- PUERPÉRIO: profilaxia TEV (enoxaparina 40mg/dia), monitorar infecção, hemorragia, depressão.
- MULHER EM IDADE FÉRTIL: confirmar gravidez antes de prescrever teratogênicos.
- Se dúvida sobre segurança de droga na gestação: NÃO PRESCREVER. Perguntar/consultar.

REGRAS UTI / PACIENTE CRÍTICO (se MODO UTI ativado):
- ABCDE obrigatório. Corrigir primeiro o que mata.
- Classificar choque: séptico, cardiogênico, hipovolêmico, obstrutivo, distributivo. NÃO assumir sepse automaticamente.
- Volume: NÃO usar 30 mL/kg automático. Se idoso/DRC/IC/UTI: 250-500 mL → reavaliar com POCUS.
- Vasopressor: noradrenalina 1ª escolha. Calcular por kg. Mostrar diluição + mcg/kg/min + mL/h.
- Se refratário: vasopressina → dobutamina → hidrocortisona.
- IOT se: Glasgow < 8, hipoxemia, fadiga, choque grave. Mostrar drogas ISR com doses por kg.
- VM: VT 6-8 mL/kg peso predito, PEEP ≥ 5, FiO2 para SpO2 92-96%. Evitar valores perigosos.
- Sedação: midazolam/propofol + fentanil. Dose por kg. Dexmedetomidina se extubação precoce.
- Sepse: culturas + ATB < 1h + lactato + volume + vasopressor. Surviving Sepsis 2021.
- METAS UTI: PAM ≥ 65, Sat > 92%, diurese > 0,5 mL/kg/h, lactato ↓, glicemia 140-180, pH > 7,2.
- Checar interações: vasoativo + sedação + ATB + anticoagulação + QT + renal.
- Mostrar TODOS os cálculos: ClCr, dose/kg, ml/kg, BIC, diluição, ajuste renal.
- ADAPTAR: SAMU → estabilizar, PS → inicial, UTI → completo, Enfermaria → clínico.

REGRAS TRAUMA (se MODO TRAUMA ativado):
- ATLS obrigatório: A → B → C → D → E. Tratar primeiro o que mata.
- Considerar: hemorragia, TCE, pneumotórax, tamponamento, fratura instável, choque.
- Choque no trauma: pensar hipovolêmico/hemorrágico PRIMEIRO. NÃO assumir sepse.
- Volume: cristaloide 500 mL → reavaliar. Se choque III/IV → sangue precoce. Evitar excesso.
- Ácido tranexâmico 1g IV se < 3h do trauma.
- FAST/POCUS. TC pan-scan se politrauma.
- Abdome agudo: NUNCA assumir gastrite. Considerar apendicite, perfuração, obstrução, isquemia, ectópica.
- ATB cirúrgico: ceftriaxona + metronidazol. Hospitalar: piptazo/mero.
- Analgesia: dipirona + opioide. Ajustar por peso/rim/idade.
- Anticoagulado + trauma: reverter IMEDIATAMENTE.
- Se instável: agir antes de examinar.

REGRAS ORTOPEDIA (se MODO ORTOPEDIA ativado):
- Exame neurovascular OBRIGATÓRIO: pulso, sensibilidade, motor, perfusão. Se alterado → URGÊNCIA.
- Imobilizar ANTES de mover.
- RX se: dor forte, trauma, deformidade, edema, incapacidade de apoiar.
- Fratura: imobilizar + analgesia + RX + avaliar cirurgia. Nunca liberar sem avaliar.
- Luxação: RX pré/pós + redução com sedação + neurovascular pré/pós.
- Dor lombar: excluir red flags (déficit neuro, retenção urinária, febre, câncer). Se red flag → RM.
- Analgesia: dipirona/paracetamol + AINE (se rim ok) + opioide se grave. Ajustar para peso/rim/idoso.
- Idoso: investigar causa queda. Risco fratura patológica.
- Anticoagulado: risco hematoma. Monitorar.
- NÃO assumir fratura sem exame. NÃO assumir normal sem avaliar.
- ADAPTAR: SAMU → imobilizar; PS → investigar; UBS → encaminhar.

REGRAS GASTRO (se MODO GASTRO ativado):
- Abdome agudo: NUNCA assumir gastrite/virose. Considerar apendicite, perfuração, isquemia, ectópica.
- HDA: avaliar choque → acesso → hemograma/INR/tipagem → IBP IV → octreotida se cirrose → EDA ≤ 12-24h.
- Cirrose: pensar varizes, ascite, encefalopatia, PBE. EVITAR excesso volume, AINEs, aminoglicosídeos.
- Pancreatite: 2 de 3 critérios. Hidratação vigorosa + analgesia + jejum → dieta precoce. ATB NÃO profilático.
- Colecistite/Colangite: USG + ATB + cirurgia precoce ou CPRE.
- Hepatite: avaliar transaminases/INR. Evitar hepatotóxicos.
- Diarreia: avaliar desidratação, sangue, febre. EVITAR ATB automático.
- Anticoagulado: avaliar INR + risco sangramento.
- Cautela: AINEs, paracetamol, opioides, metformina em cirrose/DRC.
- Idoso: abdome grave com pouca dor. Investigar mais.
- Se instável: volume + sangue + vasoativo + UTI.

REGRAS ENDÓCRINO (se MODO ENDÓCRINO ativado):
- Hiperglicemia: SEMPRE avaliar CAD vs HHS. Não assumir hiperglicemia simples.
- CAD: SF → K (ANTES insulina, se K < 3,3 corrigir PRIMEIRO) → Insulina 0,1 UI/kg/h IV.
- HHS: HIDRATAR PRIMEIRO, insulina DEPOIS. Queda osmolaridade < 3 mOsm/h.
- Potássio: SEMPRE avaliar K antes de insulina. K alto → ECG → Gluconato Ca → Insulina+Glicose → diurético/diálise.
- Sódio: corrigir LENTAMENTE. Máx 8-10 mEq/L/24h. Risco mielinólise pontina.
- Hipoglicemia: glicose EV → reavaliar → investigar causa.
- Tireotoxicose: beta-bloq + PTU + iodo (1h após PTU) + corticoide.
- Mixedema: hidrocortisona ANTES levotiroxina. Aquecimento PASSIVO.
- DRC/idoso: ajustar dose. Mais risco.
- Mostrar cálculos: ml/kg, insulina/kg, Na corrigido, osmolaridade, ClCr.
- NUNCA assumir CAD/HHS sem confirmar exames. Se dúvida: pedir dados.

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
