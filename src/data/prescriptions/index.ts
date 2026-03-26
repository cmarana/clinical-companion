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

export const prescriptionCategories: PrescriptionCategory[] = [
  {
    id: "by-diagnosis",
    title: "Prescrição por Diagnóstico",
    icon: "stethoscope",
    items: byDiagnosisItems,
  },
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
