/**
 * Offline module definitions for selective download.
 * Each module maps to dynamic imports that preload the JS chunks.
 */

export interface OfflineModule {
  id: string;
  label: string;
  desc: string;
  icon: string; // lucide icon name
  color: string;
  /** Estimated size in MB */
  sizeMb: number;
  /** Dynamic imports that preload this module's chunks */
  loader: () => Promise<unknown[]>;
}

const STORAGE_KEY = "pulso_offline_modules";

export const OFFLINE_MODULES: OfflineModule[] = [
  {
    id: "emergency",
    label: "Emergência",
    desc: "200+ protocolos de emergência (PCR, Sepse, IAM, AVC)",
    icon: "Shield",
    color: "text-destructive",
    sizeMb: 2.5,
    loader: () => Promise.all([
      import("@/pages/EmergencyMode"),
      import("@/pages/EmergencyProtocolDetail"),
      import("@/data/emergency/index"),
    ]),
  },
  {
    id: "cardiology",
    label: "Cardiologia",
    desc: "Protocolos de cardiologia completos",
    icon: "Heart",
    color: "text-red-500",
    sizeMb: 1.8,
    loader: () => Promise.all([
      import("@/data/fullProtocols/cardiology"),
      import("@/data/fullProtocols/cardiology2"),
      import("@/data/fullProtocols/cardiology3"),
      import("@/data/fullProtocols/cardiology4"),
      import("@/data/fullProtocols/cardiology5"),
      import("@/data/fullProtocols/cardiology6"),
      import("@/data/fullProtocols/cardiology7"),
      import("@/data/fullProtocols/cardiology8"),
      import("@/data/fullProtocols/cardiology9"),
      import("@/data/fullProtocols/cardiology10"),
      import("@/data/fullProtocols/cardiology11"),
      import("@/data/fullProtocols/cardiology12"),
    ]),
  },
  {
    id: "neurology",
    label: "Neurologia",
    desc: "Protocolos neurológicos completos",
    icon: "Brain",
    color: "text-purple-500",
    sizeMb: 1.5,
    loader: () => Promise.all([
      import("@/data/fullProtocols/neurology"),
      import("@/data/fullProtocols/neurology2"),
      import("@/data/fullProtocols/neurology3"),
      import("@/data/fullProtocols/neurology4"),
      import("@/data/fullProtocols/neurology5"),
      import("@/data/fullProtocols/neurology6"),
      import("@/data/fullProtocols/neurology7"),
      import("@/data/fullProtocols/neurology8"),
      import("@/data/fullProtocols/neurology9"),
      import("@/data/fullProtocols/neurology10"),
    ]),
  },
  {
    id: "respiratory",
    label: "Pneumologia",
    desc: "Protocolos respiratórios",
    icon: "Wind",
    color: "text-sky-500",
    sizeMb: 1.2,
    loader: () => Promise.all([
      import("@/data/fullProtocols/respiratory"),
      import("@/data/fullProtocols/respiratory2"),
      import("@/data/fullProtocols/respiratory3"),
      import("@/data/fullProtocols/respiratory4"),
      import("@/data/fullProtocols/respiratory5"),
      import("@/data/fullProtocols/respiratory6"),
      import("@/data/fullProtocols/respiratory7"),
      import("@/data/fullProtocols/respiratory8"),
      import("@/data/fullProtocols/respiratory9"),
    ]),
  },
  {
    id: "gastro",
    label: "Gastroenterologia",
    desc: "Protocolos gastro completos",
    icon: "Utensils",
    color: "text-amber-600",
    sizeMb: 1.0,
    loader: () => Promise.all([
      import("@/data/fullProtocols/gastroenterology"),
      import("@/data/fullProtocols/gastroenterology2"),
      import("@/data/fullProtocols/gastroenterology3"),
      import("@/data/fullProtocols/gastroenterology4"),
      import("@/data/fullProtocols/gastroenterology5"),
      import("@/data/fullProtocols/gastroenterology6"),
    ]),
  },
  {
    id: "obstetrics",
    label: "Obstetrícia",
    desc: "Protocolos obstétricos e ginecologia",
    icon: "Baby",
    color: "text-pink-500",
    sizeMb: 1.4,
    loader: () => Promise.all([
      import("@/data/fullProtocols/obstetrics"),
      import("@/data/fullProtocols/obstetrics2"),
      import("@/data/fullProtocols/obstetrics3"),
      import("@/data/fullProtocols/obstetrics4"),
      import("@/data/fullProtocols/obstetrics5"),
      import("@/data/fullProtocols/obstetrics6"),
      import("@/data/fullProtocols/obstetrics7"),
      import("@/data/fullProtocols/obstetrics8"),
      import("@/data/fullProtocols/obstetrics9"),
      import("@/data/fullProtocols/gynecology"),
      import("@/data/fullProtocols/gynecology2"),
      import("@/data/fullProtocols/gynecology3"),
      import("@/data/fullProtocols/gynecology4"),
      import("@/data/fullProtocols/gynecology5"),
      import("@/data/fullProtocols/gynecology6"),
    ]),
  },
  {
    id: "pediatric",
    label: "Pediatria",
    desc: "Protocolos pediátricos e neonatais",
    icon: "Baby",
    color: "text-teal-500",
    sizeMb: 1.3,
    loader: () => Promise.all([
      import("@/data/fullProtocols/pediatric"),
      import("@/data/fullProtocols/pediatric2"),
      import("@/data/fullProtocols/pediatric3"),
      import("@/data/fullProtocols/pediatric4"),
      import("@/data/fullProtocols/pediatric5"),
      import("@/data/fullProtocols/pediatric6"),
      import("@/data/fullProtocols/neonatal"),
      import("@/data/fullProtocols/neonatal2"),
      import("@/data/fullProtocols/neonatal3"),
      import("@/data/fullProtocols/neonatal4"),
      import("@/data/fullProtocols/neonatal5"),
      import("@/data/fullProtocols/neonatal6"),
    ]),
  },
  {
    id: "infectious",
    label: "Infectologia",
    desc: "Protocolos de doenças infecciosas",
    icon: "Bug",
    color: "text-green-600",
    sizeMb: 1.2,
    loader: () => Promise.all([
      import("@/data/fullProtocols/infectious"),
      import("@/data/fullProtocols/infectious2"),
      import("@/data/fullProtocols/infectious3"),
      import("@/data/fullProtocols/infectious4"),
      import("@/data/fullProtocols/infectious5"),
      import("@/data/fullProtocols/infectious6"),
      import("@/data/fullProtocols/infectious7"),
      import("@/data/fullProtocols/infectious8"),
    ]),
  },
  {
    id: "medications",
    label: "Medicamentos",
    desc: "1500+ fármacos com posologia completa",
    icon: "Pill",
    color: "text-emerald-500",
    sizeMb: 3.0,
    loader: () => Promise.all([
      import("@/data/medications"),
      import("@/data/medicationsData"),
      import("@/data/medicationsLote3"),
      import("@/data/medicationsLote4"),
      import("@/data/medicationsLote5"),
      import("@/data/medicationsLote6"),
      import("@/data/medicationsLote7"),
      import("@/data/medicationsLote8"),
      import("@/data/medicationsLote9"),
      import("@/data/medicationsLote10"),
      import("@/data/medicationsLote11"),
      import("@/data/medicationsLote12"),
      import("@/data/medicationsLote13"),
      import("@/data/medicationsLote14"),
      import("@/data/medicationsLote15"),
      import("@/data/medicationsLote16"),
      import("@/data/medicationsLote17"),
      import("@/data/medicationsLote18"),
      import("@/data/medicationsLote19"),
      import("@/data/medicationsLote20"),
      import("@/data/medicationsLote21"),
      import("@/data/medicationsLote22"),
      import("@/data/medicationsLote23"),
      import("@/data/medicationsLote24"),
      import("@/data/medicationsLote25"),
      import("@/data/medicationsLote26"),
    ]),
  },
  {
    id: "prescriptions",
    label: "Prescrições",
    desc: "1200+ modelos prontos de prescrições",
    icon: "ClipboardList",
    color: "text-amber-500",
    sizeMb: 1.5,
    loader: () => Promise.all([
      import("@/data/prescriptions/index"),
      import("@/pages/Prescriptions"),
      import("@/pages/PrescriptionDetail"),
    ]),
  },
  {
    id: "calculators",
    label: "Calculadoras",
    desc: "53 scores e calculadoras médicas",
    icon: "Calculator",
    color: "text-blue-500",
    sizeMb: 0.8,
    loader: () => Promise.all([
      import("@/pages/Calculators"),
      import("@/components/calculators/CalculatorsBatch2"),
      import("@/components/calculators/CalculatorsBatch3"),
    ]),
  },
  {
    id: "interactions",
    label: "Interações Medicamentosas",
    desc: "700+ pares de interações de alto risco",
    icon: "AlertTriangle",
    color: "text-orange-500",
    sizeMb: 0.6,
    loader: () => Promise.all([
      import("@/data/drugInteractionPairs"),
      import("@/data/drugInteractionsDB"),
      import("@/pages/DrugInteractions"),
    ]),
  },
  {
    id: "sepsis",
    label: "Sepse",
    desc: "Protocolos completos de sepse e choque",
    icon: "Thermometer",
    color: "text-red-600",
    sizeMb: 1.0,
    loader: () => Promise.all([
      import("@/data/fullProtocols/sepsis"),
      import("@/data/fullProtocols/sepsis2"),
      import("@/data/fullProtocols/sepsis3"),
      import("@/data/fullProtocols/sepsis4"),
      import("@/data/fullProtocols/sepsis5"),
      import("@/data/fullProtocols/sepsis6"),
      import("@/data/fullProtocols/sepsis7"),
      import("@/data/fullProtocols/sepsis8"),
    ]),
  },
  {
    id: "trauma",
    label: "Trauma",
    desc: "Protocolos de trauma (ATLS)",
    icon: "Siren",
    color: "text-orange-600",
    sizeMb: 1.0,
    loader: () => Promise.all([
      import("@/data/fullProtocols/trauma"),
      import("@/data/fullProtocols/trauma2"),
      import("@/data/fullProtocols/trauma3"),
      import("@/data/fullProtocols/trauma4"),
      import("@/data/fullProtocols/trauma5"),
      import("@/data/fullProtocols/trauma6"),
      import("@/data/fullProtocols/trauma7"),
      import("@/data/fullProtocols/trauma8"),
    ]),
  },
  {
    id: "protocols-core",
    label: "Protocolos (página)",
    desc: "Páginas de listagem e detalhe de protocolos",
    icon: "BookOpen",
    color: "text-primary",
    sizeMb: 0.5,
    loader: () => Promise.all([
      import("@/pages/FullProtocols"),
      import("@/pages/FullProtocolDetail"),
      import("@/data/fullProtocols/index"),
    ]),
  },
];

/** Get IDs of downloaded modules from localStorage */
export function getDownloadedModules(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Mark a module as downloaded */
export function markModuleDownloaded(id: string): void {
  const current = getDownloadedModules();
  if (!current.includes(id)) {
    current.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  }
}

/** Remove a module from downloaded list */
export function removeModuleDownloaded(id: string): void {
  const current = getDownloadedModules().filter(m => m !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

/** Clear all downloaded module records */
export function clearAllModules(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/** Download a specific module by preloading its chunks */
export async function downloadModule(mod: OfflineModule): Promise<void> {
  await mod.loader();
  markModuleDownloaded(mod.id);
}

/** Download all modules sequentially */
export async function downloadAllModules(
  onProgress?: (completed: number, total: number, currentLabel: string) => void
): Promise<void> {
  const total = OFFLINE_MODULES.length;
  for (let i = 0; i < total; i++) {
    const mod = OFFLINE_MODULES[i];
    onProgress?.(i, total, mod.label);
    try {
      await downloadModule(mod);
    } catch {
      // continue with next module
    }
  }
  onProgress?.(total, total, "Completo");
}

/** Features that require internet */
export const ONLINE_ONLY_FEATURES = [
  { id: "clinical-ai", label: "IA Clínica", path: "/clinical-ai" },
  { id: "support-chat", label: "Chat de Suporte", path: null },
  { id: "bulario-online", label: "Bulário Online (Supabase)", path: "/bulario" },
  { id: "sync", label: "Sincronização de dados", path: null },
  { id: "voice-evolution", label: "Evolução por Voz", path: "/voice-evolution" },
  { id: "case-simulator", label: "Simulador de Casos", path: "/case-simulator" },
  { id: "conduct-comparator", label: "Comparador de Condutas", path: "/conduct-comparator" },
  { id: "discharge-summary", label: "Sumário de Alta", path: "/discharge-summary" },
];
