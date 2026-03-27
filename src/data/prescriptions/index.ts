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
  match: (type: string) => boolean;
}

const specialtyRules: SpecialtyRule[] = [
  { id: "cardiology", title: "Cardiologia", icon: "heart-pulse", match: t => /cardiolog/i.test(t) },
  { id: "ortho", title: "Ortopedia / Trauma", icon: "bone", match: t => /ortop|fratura|luxaç|compartimental/i.test(t) },
  { id: "psychiatry", title: "Psiquiatria", icon: "brain", match: t => /psiqui/i.test(t) },
  { id: "endocrinology", title: "Endocrinologia", icon: "activity", match: t => /endocrin/i.test(t) },
  { id: "ophthalmology", title: "Oftalmologia", icon: "eye", match: t => /oftalm/i.test(t) },
  { id: "hematology", title: "Hematologia", icon: "droplets", match: t => /hematol/i.test(t) },
  { id: "nephrology", title: "Nefrologia", icon: "kidney", match: t => /nefrol/i.test(t) },
  { id: "toxicology", title: "Toxicologia", icon: "skull", match: t => /toxicol/i.test(t) },
  { id: "vascular-surgery", title: "Cirurgia Vascular", icon: "scissors", match: t => /vascular/i.test(t) },
  { id: "general-surgery", title: "Cirurgia Geral / Torácica", icon: "scissors", match: t => /cirúrg|cirurg/i.test(t) && !/vascular/i.test(t) },
  { id: "anesthesiology", title: "Anestesiologia", icon: "syringe", match: t => /anest/i.test(t) },
  { id: "icu", title: "Terapia Intensiva / UTI", icon: "monitor", match: t => /\buti\b|terapia intensiva|desmame|ecmo/i.test(t) },
  { id: "med-legal", title: "Medicina Legal / Trabalho", icon: "shield", match: t => /legal|ocupacional|trabalho/i.test(t) },
  { id: "burns", title: "Queimados / CTQ", icon: "flame", match: t => /queim|ctq/i.test(t) },
  { id: "oncology", title: "Oncologia", icon: "ribbon", match: t => /oncol/i.test(t) },
  { id: "neurology", title: "Neurologia", icon: "brain", match: t => /neurol/i.test(t) },
];

function splitByDiagnosis(items: PrescriptionItem[]): PrescriptionCategory[] {
  const buckets = new Map<string, PrescriptionItem[]>();
  const unmatched: PrescriptionItem[] = [];

  for (const item of items) {
    let matched = false;
    for (const rule of specialtyRules) {
      if (rule.match(item.type)) {
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
