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
  priceId?: string; // Stripe price ID for direct plans
}

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Mensal",
    interval: "month",
    intervalLabel: "/mês",
    price: 19.90,
    priceDisplay: "R$ 19,90",
    monthlyEquivalent: "R$ 19,90/mês",
  },
  {
    id: "quarterly",
    name: "Trimestral",
    interval: "quarter",
    intervalLabel: "/trimestre",
    price: 49.90,
    priceDisplay: "R$ 49,90",
    monthlyEquivalent: "R$ 16,63/mês",
    savings: "Economize 17%",
  },
  {
    id: "semiannual",
    name: "Semestral",
    interval: "semiannual",
    intervalLabel: "/semestre",
    price: 89.90,
    priceDisplay: "R$ 89,90",
    monthlyEquivalent: "R$ 14,98/mês",
    savings: "Economize 25%",
    popular: true,
  },
  {
    id: "annual",
    name: "Anual",
    interval: "year",
    intervalLabel: "/ano",
    price: 149.90,
    priceDisplay: "R$ 149,90",
    monthlyEquivalent: "R$ 12,49/mês",
    savings: "Economize 37%",
  },
];

// Free content: only these protocol sections are visible
export const FREE_PROTOCOL_SECTIONS = ["def", "diag"];
// Free content: only these medication fields are visible
export const FREE_MEDICATION_FIELDS = ["indication"] as const;
// Free protocols: only these 3 basic protocols are accessible for free users
export const FREE_PROTOCOL_IDS = ["dor-toracica", "dispneia", "itu"];
// Free medications: only these 3 basic medications are accessible for free users
export const FREE_MEDICATION_IDS = ["dipirona", "omeprazol", "ondansetrona"];
// Free features
export const FREE_FEATURES = {
  protocols: true,      // can browse list
  protocolPreview: true, // can see first 2 sections of free protocols only
  medications: true,     // can browse list
  medicationPreview: true, // can see indication of free meds only
  quiz: false,
  emergency: false,
  notes: false,
  favorites: true,
};
