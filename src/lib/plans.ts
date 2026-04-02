export interface Plan {
  id: string;
  name: string;
  interval: string;
  intervalLabel: string;
  price: number;
  priceDisplay: string;
  monthlyEquivalent: string;
  savings?: string;
  popular?: boolean;
  priceId: string;
}

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Mensal",
    interval: "month",
    intervalLabel: "/mês",
    price: 9.90,
    priceDisplay: "R$ 9,90",
    monthlyEquivalent: "R$ 9,90/mês",
    priceId: "price_1THgm6FLmvoivW0nM2oX7iwh",
  },
  {
    id: "annual",
    name: "Anual",
    interval: "year",
    intervalLabel: "/ano",
    price: 89.90,
    priceDisplay: "R$ 89,90",
    monthlyEquivalent: "R$ 7,49/mês",
    savings: "Economize 24%",
    popular: true,
    priceId: "price_1THgm7FLmvoivW0nIvfRyMSc",
  },
];

// ── FREE TIER LIMITS ─────────────────────────────────────────
// Free protocols: 10 most common emergency/clinical protocols
export const FREE_PROTOCOL_IDS = [
  "dor-toracica", "dispneia", "itu", "pneumonia", "sepse",
  "hipertensao-emergencia", "cetoacidose-diabetica", "anafilaxia",
  "crise-asmatica", "iam"
];

// Free medications: 10 most common drugs
export const FREE_MEDICATION_IDS = [
  "dipirona", "omeprazol", "ondansetrona", "paracetamol", "amoxicilina",
  "metoclopramida", "ibuprofeno", "dexametasona", "furosemida", "enoxaparina"
];

// Free bulario: 10 medications accessible in the full drug reference
export const FREE_BULARIO_COUNT = 10;

// Free protocol sections visible for free protocols
export const FREE_PROTOCOL_SECTIONS = ["def", "diag"];

// Free medication fields visible for free meds
export const FREE_MEDICATION_FIELDS = ["indication"] as const;

// ── FEATURE ACCESS MATRIX ────────────────────────────────────
export const FREE_FEATURES = {
  // Can browse lists
  protocols: true,
  protocolPreview: true,      // first 2 sections of free protocols only
  medications: true,
  medicationPreview: true,    // indication of free meds only
  bulario: true,              // browse list, view 10 free items

  // Fully accessible free
  favorites: true,            // up to 10 items
  calculatorsBasic: true,     // IMC, clearance, glasgow
  emergencyShortcuts: true,   // view quick links
  search: true,               // basic search (no voice)

  // Premium-only
  clinicalAI: false,
  voiceCommands: false,
  dutyMode: false,
  emergencyMode: false,
  prescriptions: false,
  calculatorsAdvanced: false,
  quiz: false,
  flashcards: false,
  offlineMode: false,
  sharing: false,
  clinicalAtlas: false,
  notes: false,
  procedureGuides: false,
  drugInteractions: false,
  ivDilutions: false,
  documentGenerator: false,
};

// Max favorites for free users
export const FREE_FAVORITES_LIMIT = 10;
// Max quiz questions per day for free users
export const FREE_QUIZ_DAILY_LIMIT = 3;
