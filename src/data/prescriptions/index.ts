import { PrescriptionCategory, PrescriptionItem } from "./types";
import { byDiagnosisItems } from "./byDiagnosis";
import { emergencyItems } from "./emergency";
import { susItems } from "./sus";
import { pediatricItems } from "./pediatric";
import { neonatalItems } from "./neonatal";
import { bySymptomItems } from "./bySymptom";
import { byDrugClassItems } from "./byDrugClass";
import { antibioticsByFocusItems } from "./antibioticsByFocus";
import { dischargeItems } from "./discharge";
import { dilutionItems } from "./dilutions";
import { standardModelItems } from "./standardModels";
import { obstetricsItems } from "./obstetrics";

export type { PrescriptionItem, PrescriptionCategory };

/* ── helpers to auto-split byDiagnosis into specialty sub-categories ── */

interface SpecialtyRule {
  id: string;
  title: string;
  icon: string;
  match: (type: string, title: string) => boolean;
}

const specialtyRules: SpecialtyRule[] = [
  { id: "cardiology", title: "Cardiologia", icon: "heart-pulse", match: (t, ti) => /cardiolog/i.test(t) || /\biam\b|infarto|fibrilação atrial|flutter|angina|pericardite|miocardite|insuficiência cardíaca|dissecção aórt|taquicardia|bradicardia|edema agudo/i.test(ti) },
  { id: "neurology", title: "Neurologia", icon: "brain", match: (t, ti) => /neurol/i.test(t) || /\bavc\b|avch|meningite|guillain|miastên|convuls|status epilép|encefalopatia|trombose venosa cerebral/i.test(ti) },
  { id: "respiratory", title: "Pneumologia", icon: "wind", match: (t, ti) => /pneumol/i.test(t) || /pneumonia|asma|dpoc|pneumotórax|hemoptise|derrame pleural|embolia gordurosa|tep\b|tromboembolismo pulmonar/i.test(ti) },
  { id: "gastro", title: "Gastroenterologia / Hepatologia", icon: "utensils", match: (t, ti) => /gastro|hepat/i.test(t) || /hemorragia digestiva|pancreatite|colecistite|diverticulite|obstrução intestinal|colangite|cirrose|ascite|abscesso hepático|insuficiência hepática|peritonite|abdome agudo/i.test(ti) },
  { id: "infectious", title: "Infectologia", icon: "bug", match: (t, ti) => /infect/i.test(t) || /sepse|choque séptico|endocardite|celulite|erisipela|fascite|tuberculose|leptospirose|dengue|herpes zoster|pep —|gangrena de fournier/i.test(ti) },
  { id: "nephrology", title: "Nefrologia", icon: "kidney", match: (t, ti) => /nefrol/i.test(t) || /insuficiência renal|hipercalemia|hiponatremia|cólica renal|retenção urinária|síndrome nefrótica|pielonefrite|infecção.*uriná/i.test(ti) },
  { id: "endocrinology", title: "Endocrinologia", icon: "activity", match: (t, ti) => /endocrin/i.test(t) || /cetoacidose|coma mixedematoso|hiperosmolar|crise adrenal|insuficiência adrenal/i.test(ti) },
  { id: "ortho", title: "Ortopedia / Trauma", icon: "bone", match: (t, ti) => /ortop/i.test(t) || /fratura|luxação|compartimental|rabdomiólise/i.test(ti) },
  { id: "psychiatry", title: "Psiquiatria", icon: "brain", match: (t, ti) => /psiqui/i.test(t) || /abstinência alcoólica|delirium tremens|agitação psicomotora|surto psicótico|síndrome neuroléptica|suicíd/i.test(ti) },
  { id: "ophthalmology", title: "Oftalmologia", icon: "eye", match: (t, ti) => /oftalm/i.test(t) || /glaucoma|descolamento de retina/i.test(ti) },
  { id: "hematology", title: "Hematologia", icon: "droplets", match: (t, ti) => /hematol/i.test(t) || /trombocitopenia|pti\b|civd|hemofilia|tromboembolismo venoso|tvp\b|anticoagula/i.test(ti) },
  { id: "toxicology", title: "Toxicologia", icon: "skull", match: (t, ti) => /toxicol/i.test(t) || /intoxica|envenenamento|ofídico|angioedema|anafilaxia|stevens-johnson/i.test(ti) },
  { id: "rheumatology", title: "Reumatologia", icon: "bone", match: (t, ti) => /reumatol/i.test(t) || /lúpus|artrite reumatoide|gota|crise gotosa/i.test(ti) },
  { id: "vascular-surgery", title: "Cirurgia Vascular", icon: "scissors", match: (t, ti) => /vascular/i.test(t) },
  { id: "general-surgery", title: "Cirurgia Geral / Torácica", icon: "scissors", match: (t, ti) => /cirúrg|cirurg/i.test(t) && !/vascular/i.test(t) || /apendicite/i.test(ti) },
  { id: "anesthesiology", title: "Anestesiologia", icon: "syringe", match: (t, ti) => /anest/i.test(t) },
  { id: "icu", title: "Terapia Intensiva / UTI", icon: "monitor", match: (t, ti) => /\buti\b|terapia intensiva|desmame|ecmo/i.test(t) },
  { id: "med-legal", title: "Medicina Legal / Trabalho", icon: "shield", match: (t, ti) => /legal|ocupacional|trabalho/i.test(t) },
  { id: "burns", title: "Queimados / CTQ", icon: "flame", match: (t, ti) => /queim|ctq/i.test(t) || /queimadura/i.test(ti) },
  { id: "oncology", title: "Oncologia", icon: "ribbon", match: (t, ti) => /oncol/i.test(t) },
  { id: "ent", title: "Otorrinolaringologia", icon: "ear", match: (t, ti) => /orl/i.test(t) || /epistaxe|sangramento nasal|abscesso peritonsilar|angina de ludwig|mastoidite|epiglotite|surdez súbita|corpo estranho.*via aérea/i.test(ti) },
];

function splitByDiagnosis(items: PrescriptionItem[]): PrescriptionCategory[] {
  const buckets = new Map<string, PrescriptionItem[]>();
  const unmatched: PrescriptionItem[] = [];

  for (const item of items) {
    let matched = false;
    for (const rule of specialtyRules) {
      if (rule.match(item.type, item.title)) {
        if (!buckets.has(rule.id)) buckets.set(rule.id, []);
        buckets.get(rule.id)!.push(item);
        matched = true;
        break;
      }
    }
    if (!matched) unmatched.push(item);
  }

  const cats: PrescriptionCategory[] = [];

  // General / unmatched items go first as "Por Diagnóstico (Geral)"
  if (unmatched.length > 0) {
    cats.push({
      id: "by-diagnosis-general",
      title: "Prescrição por Diagnóstico (Geral)",
      icon: "stethoscope",
      items: unmatched,
    });
  }

  // Add specialty buckets
  for (const rule of specialtyRules) {
    const items = buckets.get(rule.id);
    if (items && items.length > 0) {
      cats.push({
        id: `by-diagnosis-${rule.id}`,
        title: rule.title,
        icon: rule.icon,
        items,
      });
    }
  }

  return cats;
}

const diagnosisCategories = splitByDiagnosis(byDiagnosisItems);

export const prescriptionCategories: PrescriptionCategory[] = [
  ...diagnosisCategories,
  {
    id: "emergency",
    title: "Prescrição de Emergência (Rápida)",
    icon: "zap",
    items: emergencyItems,
  },
  {
    id: "obstetrics",
    title: "Obstetrícia e Ginecologia",
    icon: "heart-pulse",
    items: obstetricsItems,
  },
  {
    id: "sus",
    title: "Prescrição SUS / UPA / Hospital Público",
    icon: "building",
    items: susItems,
  },
  {
    id: "pediatric",
    title: "Prescrição Pediatria",
    icon: "baby",
    items: pediatricItems,
  },
  {
    id: "neonatal",
    title: "Prescrição Neonatal",
    icon: "heart-pulse",
    items: neonatalItems,
  },
  {
    id: "by-symptom",
    title: "Prescrição por Sintoma",
    icon: "thermometer",
    items: bySymptomItems,
  },
  {
    id: "by-drug-class",
    title: "Prescrição por Classe de Medicamento",
    icon: "pill",
    items: byDrugClassItems,
  },
  {
    id: "atb-by-focus",
    title: "Antibióticos por Foco",
    icon: "target",
    items: antibioticsByFocusItems,
  },
  {
    id: "discharge",
    title: "Prescrição para Alta",
    icon: "log-out",
    items: dischargeItems,
  },
  {
    id: "dilutions",
    title: "Diluições e Preparo",
    icon: "flask-conical",
    items: dilutionItems,
  },
  {
    id: "standard-models",
    title: "Prescrição Padrão (Modelo Pronto)",
    icon: "file-text",
    items: standardModelItems,
  },
];
