/** Comprehensive medication type for the Bulário system (scalable to 10k+ entries) */

export interface BularioMedication {
  id: string;
  name: string;
  activeIngredient: string;
  brandNames: string[];
  drugClass: string;
  category: string; // e.g. "Cardiovascular", "Antimicrobiano", "Analgésico"
  dosageForm: string; // e.g. "Comprimido", "Ampola", "Solução oral"
  route: string; // e.g. "VO", "IV", "IM", "SC", "Tópico"
  controlled: boolean;
  pediatric: boolean;
  pregnancySafe: boolean;

  // Detail fields
  mechanismOfAction: string;
  indications: string;
  adultDosage: string;
  pediatricDosage: string;
  renalAdjustment: string;
  hepaticAdjustment: string;
  contraindications: string;
  adverseEffects: string;
  interactions: string;
  pregnancyUse: string;
  lactationUse: string;
  elderlyUse: string;
  monitoring: string;
  presentations: string;
  ivDilution: string;
  compatibility: string;
  prescriptionType: string; // "Branca", "Azul (B)", "Amarela (A)", "Notificação especial"
  anvisaCategory: string;
  clinicalNotes: string;
  references: string;

  tags: string[];
}

/** Filter state for the medications list */
export interface BularioFilters {
  search: string;
  drugClass: string | null;
  category: string | null;
  dosageForm: string | null;
  route: string | null;
  controlled: boolean | null;
  pediatric: boolean | null;
  pregnancySafe: boolean | null;
}

export const INITIAL_FILTERS: BularioFilters = {
  search: "",
  drugClass: null,
  category: null,
  dosageForm: null,
  route: null,
  controlled: null,
  pediatric: null,
  pregnancySafe: null,
};

/** Static options for filters — will grow as medications are added */
export const DRUG_CLASSES = [
  "Analgésico", "Antibiótico", "Antifúngico", "Anti-hipertensivo",
  "Anticoagulante", "Antiarrítmico", "Anticonvulsivante", "Antidepressivo",
  "Antipsicótico", "Ansiolítico", "Broncodilatador", "Corticosteroide",
  "Diurético", "Hipoglicemiante", "Inibidor de bomba de prótons",
  "Opioide", "Sedativo", "Vasopressor", "Outro",
];

export const CATEGORIES = [
  "Cardiovascular", "Antimicrobiano", "Neurologia", "Endocrinologia",
  "Pneumologia", "Gastroenterologia", "Reumatologia", "Nefrologia",
  "Hematologia", "Psiquiatria", "Anestesiologia", "Emergência",
  "Pediatria", "Obstetrícia", "Outro",
];

export const DOSAGE_FORMS = [
  "Comprimido", "Cápsula", "Ampola", "Frasco-ampola",
  "Solução oral", "Suspensão", "Xarope", "Pomada",
  "Creme", "Colírio", "Supositório", "Inalatório", "Adesivo", "Outro",
];

export const ROUTES = ["VO", "IV", "IM", "SC", "Tópico", "Inalatório", "Retal", "Nasal", "Ocular", "SL"];
