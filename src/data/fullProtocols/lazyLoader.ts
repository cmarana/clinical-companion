import type { FullProtocol } from "./types";

/**
 * Lazy-loads full protocol content by category.
 * Each category is a separate chunk — only downloaded when needed.
 */
const categoryLoaders: Record<string, () => Promise<FullProtocol[]>> = {
  emergency: async () => {
    const [a, b, c] = await Promise.all([
      import("./emergency"), import("./emergency2"), import("./emergency3"),
    ]);
    return [...a.emergencyFullProtocols, ...b.emergencyFullProtocols2, ...c.emergencyFullProtocols3];
  },
  cardiology: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./cardiology"), import("./cardiology2"), import("./cardiology3"),
      import("./cardiology4"), import("./cardiology5"), import("./cardiology6"), import("./cardiology7"),
    ]);
    return [...a.cardioFullProtocols, ...b.cardioFullProtocols2, ...c.cardioFullProtocols3,
      ...d.cardioFullProtocols4, ...e.cardioFullProtocols5, ...f.cardioFullProtocols6, ...g.cardioFullProtocols7];
  },
  neurology: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import("./neurology"), import("./neurology2"), import("./neurology3"),
      import("./neurology4"), import("./neurology5"),
    ]);
    return [...a.neuroFullProtocols, ...b.neuroFullProtocols2, ...c.neuroFullProtocols3,
      ...d.neuroFullProtocols4, ...e.neuroFullProtocols5];
  },
  sepsis: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import("./sepsis"), import("./sepsis2"), import("./sepsis3"),
      import("./sepsis4"), import("./sepsis5"),
    ]);
    return [...a.sepsisFullProtocols, ...b.sepsisFullProtocols2, ...c.sepsisFullProtocols3,
      ...d.sepsisFullProtocols4, ...e.sepsisFullProtocols5];
  },
  metabolic: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import("./metabolic"), import("./metabolic2"), import("./metabolic3"),
      import("./metabolic4"), import("./metabolic5"),
    ]);
    return [...a.metabolicFullProtocols, ...b.metabolicFullProtocols2, ...c.metabolicFullProtocols3,
      ...d.metabolicFullProtocols4, ...e.metabolicFullProtocols5];
  },
  respiratory: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./respiratory"), import("./respiratory2"), import("./respiratory3"),
      import("./respiratory4"), import("./respiratory5"), import("./respiratory6"),
    ]);
    return [...a.respiratoryFullProtocols, ...b.respiratoryFullProtocols2, ...c.respiratoryFullProtocols3,
      ...d.respiratoryFullProtocols4, ...e.respiratoryFullProtocols5, ...f.respiratoryFullProtocols6];
  },
  trauma: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./trauma"), import("./trauma2"), import("./trauma3"), import("./trauma4"),
    ]);
    return [...a.traumaFullProtocols, ...b.traumaFullProtocols2, ...c.traumaFullProtocols3, ...d.traumaFullProtocols4];
  },
  obstetrics: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import("./obstetrics"), import("./obstetrics2"), import("./obstetrics3"),
      import("./obstetrics4"), import("./obstetrics5"),
    ]);
    return [...a.obstetricsFullProtocols, ...b.obstetricsFullProtocols2, ...c.obstetricsFullProtocols3,
      ...d.obstetricsFullProtocols4, ...e.obstetricsFullProtocols5];
  },
  gynecology: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./gynecology"), import("./gynecology2"), import("./gynecology3"), import("./gynecology4"),
    ]);
    return [...a.gynecologyFullProtocols, ...b.gynecologyFullProtocols2, ...c.gynecologyFullProtocols3, ...d.gynecologyFullProtocols4];
  },
  intoxication: async () => {
    const [a, b, c] = await Promise.all([
      import("./intoxication"), import("./intoxication2"), import("./intoxication3"),
    ]);
    return [...a.intoxicationFullProtocols, ...b.intoxicationFullProtocols2, ...c.intoxicationFullProtocols3];
  },
  procedures: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./procedures"), import("./procedures2"), import("./procedures3"), import("./procedures4"),
    ]);
    return [...a.proceduresFullProtocols, ...b.proceduresFullProtocols2, ...c.proceduresFullProtocols3, ...d.proceduresFullProtocols4];
  },
  pediatrics: async () => {
    const [a, b, c] = await Promise.all([
      import("./pediatric"), import("./pediatric2"), import("./pediatric3"),
    ]);
    return [...a.pediatricFullProtocols, ...b.pediatricFullProtocols2, ...c.pediatricFullProtocols3];
  },
  neonatal: async () => {
    const [a, b, c] = await Promise.all([
      import("./neonatal"), import("./neonatal2"), import("./neonatal3"),
    ]);
    return [...a.neonatalFullProtocols, ...b.neonatalFullProtocols2, ...c.neonatalFullProtocols3];
  },
  infectious: async () => {
    const [a, b, c, d, e] = await Promise.all([
      import("./infectious"), import("./infectious2"), import("./infectious3"),
      import("./infectious4"), import("./infectious5"),
    ]);
    return [...a.infectiousFullProtocols, ...b.infectiousFullProtocols2, ...c.infectiousFullProtocols3,
      ...d.infectiousFullProtocols4, ...e.infectiousFullProtocols5];
  },
  other_emergencies: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./otherEmergencies"), import("./otherEmergencies2"),
      import("./otherEmergencies3"), import("./otherEmergencies4"),
    ]);
    return [...a.otherEmergenciesFullProtocols, ...b.otherEmergenciesFullProtocols2,
      ...c.otherEmergenciesFullProtocols3, ...d.otherEmergenciesFullProtocols4];
  },
  gastroenterology: async () => {
    const [a, b, c] = await Promise.all([
      import("./gastroenterology"), import("./gastroenterology2"), import("./gastroenterology3"),
    ]);
    return [...a.gastroFullProtocols, ...b.gastroFullProtocols2, ...c.gastroFullProtocols3];
  },
  nephrology: async () => {
    const [a, b, c] = await Promise.all([
      import("./nephrology"), import("./nephrology2"), import("./nephrology3"),
    ]);
    return [...a.nephrologyFullProtocols, ...b.nephrologyFullProtocols2, ...c.nephrologyFullProtocols3];
  },
  psychiatry: async () => {
    const [a, b, c] = await Promise.all([
      import("./psychiatry"), import("./psychiatry2"), import("./psychiatry3"),
    ]);
    return [...a.psychiatryFullProtocols, ...b.psychiatryFullProtocols2, ...c.psychiatryFullProtocols3];
  },
  dermatology: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./dermatology"), import("./dermatology2"), import("./dermatology3"), import("./dermatology4"),
    ]);
    return [...a.dermatologyFullProtocols, ...b.dermatologyFullProtocols2, ...c.dermatologyFullProtocols3, ...d.dermatologyFullProtocols4];
  },
  ophthalmology: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./ophthalmology"), import("./ophthalmology2"), import("./ophthalmology3"), import("./ophthalmology4"),
    ]);
    return [...a.ophthalmologyFullProtocols, ...b.ophthalmologyFullProtocols2, ...c.ophthalmologyFullProtocols3, ...d.ophthalmologyFullProtocols4];
  },
  otorhinolaryngology: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./otorhinolaryngology"), import("./otorhinolaryngology2"),
      import("./otorhinolaryngology3"), import("./otorhinolaryngology4"),
    ]);
    return [...a.orlFullProtocols, ...b.orlFullProtocols2, ...c.orlFullProtocols3, ...d.orlFullProtocols4];
  },
  hematology: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./hematology"), import("./hematology2"), import("./hematology3"), import("./hematology4"),
    ]);
    return [...a.hematologyFullProtocols, ...b.hematologyFullProtocols2, ...c.hematologyFullProtocols3, ...d.hematologyFullProtocols4];
  },
  geriatrics: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./geriatrics"), import("./geriatrics2"), import("./geriatrics3"), import("./geriatrics4"),
    ]);
    return [...a.geriatricsFullProtocols, ...b.geriatricsFullProtocols2, ...c.geriatricsFullProtocols3, ...d.geriatricsFullProtocols4];
  },
  pain_palliative: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./painPalliative"), import("./painPalliative2"), import("./painPalliative3"), import("./painPalliative4"),
    ]);
    return [...a.painPalliativeFullProtocols, ...b.painPalliativeFullProtocols2, ...c.painPalliativeFullProtocols3, ...d.painPalliativeFullProtocols4];
  },
  triage: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./triage"), import("./triage2"), import("./triage3"), import("./triage4"),
    ]);
    return [...a.triageFullProtocols, ...b.triageFullProtocols2, ...c.triageFullProtocols3, ...d.triageFullProtocols4];
  },
  sus_protocols: async () => {
    const [a, b, c, d] = await Promise.all([
      import("./susProtocols"), import("./susProtocols2"), import("./susProtocols3"), import("./susProtocols4"),
    ]);
    return [...a.susProtocolsFullProtocols, ...b.susProtocolsFullProtocols2, ...c.susProtocolsFullProtocols3, ...d.susProtocolsFullProtocols4];
  },
};

// In-memory cache of loaded categories
const _cache = new Map<string, FullProtocol[]>();

/** Load all protocols for a category (cached) */
export async function loadCategoryProtocols(categoryId: string): Promise<FullProtocol[]> {
  const cached = _cache.get(categoryId);
  if (cached) return cached;
  
  const loader = categoryLoaders[categoryId];
  if (!loader) return [];
  
  const protocols = await loader();
  _cache.set(categoryId, protocols);
  return protocols;
}

/** Find a single protocol by ID — searches metadata first to identify category */
export async function getFullProtocolAsync(id: string): Promise<FullProtocol | undefined> {
  // Check cache first
  for (const protocols of _cache.values()) {
    const found = protocols.find(p => p.id === id);
    if (found) return found;
  }

  // Find category from metadata
  const { fullProtocolMetas } = await import("./metadata");
  const meta = fullProtocolMetas.find(m => m.id === id);
  if (!meta) return undefined;

  const protocols = await loadCategoryProtocols(meta.categoryId);
  return protocols.find(p => p.id === id);
}

/** Load ALL protocols (for search — loads everything) */
export async function loadAllFullProtocols(): Promise<FullProtocol[]> {
  const allCategories = Object.keys(categoryLoaders);
  const results = await Promise.all(allCategories.map(cat => loadCategoryProtocols(cat)));
  return results.flat();
}
