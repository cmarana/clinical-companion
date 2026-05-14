import type { FullProtocol } from "./types";

/**
 * Lazy-loads full protocol content by category.
 * Each category is a separate chunk — only downloaded when needed.
 * Updated 2026-05 to include all batches through 18 + newProtocols2026.
 */

/* ────────── helpers ────────── */
const merge = <T>(arrs: T[][]): T[] => arrs.flat();

/* ────────── category loaders ────────── */
const categoryLoaders: Record<string, () => Promise<FullProtocol[]>> = {
  emergency: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./emergency"), import("./emergency2"), import("./emergency3"),
      import("./emergency4"), import("./emergency5"), import("./emergency6"), import("./emergency7"),
    ]);
    return merge([
      a.emergencyFullProtocols, b.emergencyFullProtocols2, c.emergencyFullProtocols3,
      d.emergencyFullProtocols4, e.emergencyFullProtocols5, f.emergencyFullProtocols6, g.emergencyFullProtocols7,
    ]);
  },

  cardiology: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r] = await Promise.all([
      import("./cardiology"), import("./cardiology2"), import("./cardiology3"),
      import("./cardiology4"), import("./cardiology5"), import("./cardiology6"),
      import("./cardiology7"), import("./cardiology8"), import("./cardiology9"),
      import("./cardiology10"), import("./cardiology11"), import("./cardiology12"),
      import("./cardiology13"), import("./cardiology14"), import("./cardiology15"),
      import("./cardiology16"), import("./cardiology17"), import("./cardiology18"),
    ]);
    return merge([
      a.cardioFullProtocols, b.cardioFullProtocols2, c.cardioFullProtocols3,
      d.cardioFullProtocols4, e.cardioFullProtocols5, f.cardioFullProtocols6,
      g.cardioFullProtocols7, h.cardioFullProtocols8, i.cardioFullProtocols9,
      j.cardioFullProtocols10, k.cardioFullProtocols11, l.cardioFullProtocols12,
      m.cardioFullProtocols13, n.cardioFullProtocols14, o.cardioFullProtocols15,
      p.cardioFullProtocols16, q.cardioFullProtocols17, r.cardioFullProtocols18,
    ]);
  },

  neurology: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p] = await Promise.all([
      import("./neurology"), import("./neurology2"), import("./neurology3"),
      import("./neurology4"), import("./neurology5"), import("./neurology6"),
      import("./neurology7"), import("./neurology8"), import("./neurology9"),
      import("./neurology10"), import("./neurology11"), import("./neurology12"),
      import("./neurology13"), import("./neurology14"), import("./neurology15"),
      import("./neurology16"),
    ]);
    return merge([
      a.neuroFullProtocols, b.neuroFullProtocols2, c.neuroFullProtocols3,
      d.neuroFullProtocols4, e.neuroFullProtocols5, f.neuroFullProtocols6,
      g.neuroFullProtocols7, h.neuroFullProtocols8, i.neuroFullProtocols9,
      j.neuroFullProtocols10, k.neuroFullProtocols11, l.neuroFullProtocols12,
      m.neuroFullProtocols13, n.neuroFullProtocols14, o.neuroFullProtocols15,
      p.neuroFullProtocols16,
    ]);
  },

  sepsis: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l] = await Promise.all([
      import("./sepsis"), import("./sepsis2"), import("./sepsis3"),
      import("./sepsis4"), import("./sepsis5"), import("./sepsis6"),
      import("./sepsis7"), import("./sepsis8"), import("./sepsis9"),
      import("./sepsis10"), import("./sepsis11"), import("./sepsis12"),
    ]);
    return merge([
      a.sepsisFullProtocols, b.sepsisFullProtocols2, c.sepsisFullProtocols3,
      d.sepsisFullProtocols4, e.sepsisFullProtocols5, f.sepsisFullProtocols6,
      g.sepsisFullProtocols7, h.sepsisFullProtocols8, i.sepsisFullProtocols9,
      j.sepsisFullProtocols10, k.sepsisFullProtocols11, l.sepsisFullProtocols12,
    ]);
  },

  metabolic: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m] = await Promise.all([
      import("./metabolic"), import("./metabolic2"), import("./metabolic3"),
      import("./metabolic4"), import("./metabolic5"), import("./metabolic6"),
      import("./metabolic7"), import("./metabolic8"), import("./metabolic9"),
      import("./metabolic10"), import("./metabolic11"), import("./metabolic12"),
      import("./metabolic13"),
    ]);
    return merge([
      a.metabolicFullProtocols, b.metabolicFullProtocols2, c.metabolicFullProtocols3,
      d.metabolicFullProtocols4, e.metabolicFullProtocols5, f.metabolicFullProtocols6,
      g.metabolicFullProtocols7, h.metabolicFullProtocols8, i.metabolicFullProtocols9,
      j.metabolicFullProtocols10, k.metaboFullProtocols11, l.metaboFullProtocols12,
      m.metaboFullProtocols13,
    ]);
  },

  respiratory: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = await Promise.all([
      import("./respiratory"), import("./respiratory2"), import("./respiratory3"),
      import("./respiratory4"), import("./respiratory5"), import("./respiratory6"),
      import("./respiratory7"), import("./respiratory8"), import("./respiratory9"),
      import("./respiratory10"), import("./respiratory11"), import("./respiratory12"),
      import("./respiratory13"), import("./respiratory14"),
    ]);
    return merge([
      a.respiratoryFullProtocols, b.respiratoryFullProtocols2, c.respiratoryFullProtocols3,
      d.respiratoryFullProtocols4, e.respiratoryFullProtocols5, f.respiratoryFullProtocols6,
      g.respiratoryFullProtocols7, h.respiratoryFullProtocols8, i.respiratoryFullProtocols9,
      j.respiratoryFullProtocols10, k.respiratoryFullProtocols11, l.respiraFullProtocols12,
      m.respiraFullProtocols13, n.respiraFullProtocols14,
    ]);
  },

  trauma: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m] = await Promise.all([
      import("./trauma"), import("./trauma2"), import("./trauma3"), import("./trauma4"),
      import("./trauma5"), import("./trauma6"), import("./trauma7"), import("./trauma8"),
      import("./trauma9"), import("./trauma10"), import("./trauma11"), import("./trauma12"),
      import("./trauma13"),
    ]);
    return merge([
      a.traumaFullProtocols, b.traumaFullProtocols2, c.traumaFullProtocols3, d.traumaFullProtocols4,
      e.traumaFullProtocols5, f.traumaFullProtocols6, g.traumaFullProtocols7, h.traumaFullProtocols8,
      i.traumaFullProtocols9, j.traumaFullProtocols10, k.traumaFullProtocols11, l.traumaFullProtocols12,
      m.traumaFullProtocols13,
    ]);
  },

  obstetrics: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = await Promise.all([
      import("./obstetrics"), import("./obstetrics2"), import("./obstetrics3"), import("./obstetrics4"),
      import("./obstetrics5"), import("./obstetrics6"), import("./obstetrics7"), import("./obstetrics8"),
      import("./obstetrics9"), import("./obstetrics10"), import("./obstetrics11"), import("./obstetrics12"),
      import("./obstetrics13"), import("./obstetrics14"),
    ]);
    return merge([
      a.obstetricsFullProtocols, b.obstetricsFullProtocols2, c.obstetricsFullProtocols3, d.obstetricsFullProtocols4,
      e.obstetricsFullProtocols5, f.obstetricsFullProtocols6, g.obstetricsFullProtocols7, h.obstetricsFullProtocols8,
      i.obstetricsFullProtocols9, j.obstetricsFullProtocols10, k.obstetricsFullProtocols11, l.obstFullProtocols12,
      m.obstFullProtocols13, n.obstFullProtocols14,
    ]);
  },

  gynecology: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./gynecology"), import("./gynecology2"), import("./gynecology3"), import("./gynecology4"),
      import("./gynecology5"), import("./gynecology6"), import("./gynecology7"),
    ]);
    return merge([
      a.gynecologyFullProtocols, b.gynecologyFullProtocols2, c.gynecologyFullProtocols3, d.gynecologyFullProtocols4,
      e.gynecologyFullProtocols5, f.gynecologyFullProtocols6, g.gynecologyFullProtocols7,
    ]);
  },

  intoxication: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./intoxication"), import("./intoxication2"), import("./intoxication3"),
      import("./intoxication4"), import("./intoxication5"), import("./intoxication6"), import("./intoxication7"),
    ]);
    return merge([
      a.intoxicationFullProtocols, b.intoxicationFullProtocols2, c.intoxicationFullProtocols3,
      d.intoxicationFullProtocols4, e.intoxicationFullProtocols5, f.intoxicationFullProtocols6, g.intoxFullProtocols7,
    ]);
  },

  procedures: async () => {
    const [a, b, c, d, e, f, g, h] = await Promise.all([
      import("./procedures"), import("./procedures2"), import("./procedures3"), import("./procedures4"),
      import("./procedures5"), import("./procedures6"), import("./procedures7"), import("./procedures8"),
    ]);
    return merge([
      a.proceduresFullProtocols, b.proceduresFullProtocols2, c.proceduresFullProtocols3, d.proceduresFullProtocols4,
      e.proceduresFullProtocols5, f.proceduresFullProtocols6, g.proceduresFullProtocols7, h.proceduresFullProtocols8,
    ]);
  },

  pediatrics: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k] = await Promise.all([
      import("./pediatric"), import("./pediatric2"), import("./pediatric3"), import("./pediatric4"),
      import("./pediatric5"), import("./pediatric6"), import("./pediatric7"), import("./pediatric8"),
      import("./pediatric9"), import("./pediatric10"), import("./pediatric11"),
    ]);
    return merge([
      a.pediatricFullProtocols, b.pediatricFullProtocols2, c.pediatricFullProtocols3, d.pediatricFullProtocols4,
      e.pediatricFullProtocols5, f.pediatricFullProtocols6, g.pediatricFullProtocols7, h.pediatricFullProtocols8,
      i.pediFullProtocols9, j.pediFullProtocols10, k.pediFullProtocols11,
    ]);
  },

  neonatal: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./neonatal"), import("./neonatal2"), import("./neonatal3"),
      import("./neonatal4"), import("./neonatal5"), import("./neonatal6"),
    ]);
    return merge([
      a.neonatalFullProtocols, b.neonatalFullProtocols2, c.neonatalFullProtocols3,
      d.neonatalFullProtocols4, e.neonatalFullProtocols5, f.neonatalFullProtocols6,
    ]);
  },

  infectious: async () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m] = await Promise.all([
      import("./infectious"), import("./infectious2"), import("./infectious3"), import("./infectious4"),
      import("./infectious5"), import("./infectious6"), import("./infectious7"), import("./infectious8"),
      import("./infectious9"), import("./infectious10"), import("./infectious11"), import("./infectious12"),
      import("./infectious13"),
    ]);
    return merge([
      a.infectiousFullProtocols, b.infectiousFullProtocols2, c.infectiousFullProtocols3, d.infectiousFullProtocols4,
      e.infectiousFullProtocols5, f.infectiousFullProtocols6, g.infectiousFullProtocols7, h.infectiousFullProtocols8,
      i.infectiousFullProtocols9, j.infectiousFullProtocols10, k.infectFullProtocols11, l.infectFullProtocols12,
      m.infectFullProtocols13,
    ]);
  },

  other_emergencies: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./otherEmergencies"), import("./otherEmergencies2"), import("./otherEmergencies3"), import("./otherEmergencies4"),
      import("./other_emergencies5"), import("./other_emergencies6"), import("./other_emergencies7"),
    ]);
    return merge([
      a.otherEmergenciesFullProtocols, b.otherEmergenciesFullProtocols2, c.otherEmergenciesFullProtocols3, d.otherEmergenciesFullProtocols4,
      e.otherEmergenciesFullProtocols5, f.otherEmergenciesFullProtocols6, g.otherEmergenciesFullProtocols7,
    ]);
  },

  gastroenterology: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./gastroenterology"), import("./gastroenterology2"), import("./gastroenterology3"),
      import("./gastroenterology4"), import("./gastroenterology5"), import("./gastroenterology6"),
    ]);
    return merge([
      a.gastroFullProtocols, b.gastroFullProtocols2, c.gastroFullProtocols3,
      d.gastroFullProtocols4, e.gastroFullProtocols5, f.gastroFullProtocols6,
    ]);
  },

  nephrology: async () => {
    const [a, b, c, d, e, f, g, h] = await Promise.all([
      import("./nephrology"), import("./nephrology2"), import("./nephrology3"), import("./nephrology4"),
      import("./nephrology5"), import("./nephrology6"), import("./nephrology7"), import("./nephrology8"),
    ]);
    return merge([
      a.nephrologyFullProtocols, b.nephrologyFullProtocols2, c.nephrologyFullProtocols3, d.nephrologyFullProtocols4,
      e.nephrologyFullProtocols5, f.nephrologyFullProtocols6, g.nephrologyFullProtocols7, h.nephrologyFullProtocols8,
    ]);
  },

  psychiatry: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./psychiatry"), import("./psychiatry2"), import("./psychiatry3"), import("./psychiatry4"),
      import("./psychiatry5"), import("./psychiatry6"), import("./psychiatry7"),
    ]);
    return merge([
      a.psychiatryFullProtocols, b.psychiatryFullProtocols2, c.psychiatryFullProtocols3, d.psychiatryFullProtocols4,
      e.psychiatryFullProtocols5, f.psychiatryFullProtocols6, g.psychiatryFullProtocols7,
    ]);
  },

  dermatology: async () => {
    const [a, b, c, d, e, f, g, h] = await Promise.all([
      import("./dermatology"), import("./dermatology2"), import("./dermatology3"), import("./dermatology4"),
      import("./dermatology5"), import("./dermatology6"), import("./dermatology7"), import("./dermatology8"),
    ]);
    return merge([
      a.dermatologyFullProtocols, b.dermatologyFullProtocols2, c.dermatologyFullProtocols3, d.dermatologyFullProtocols4,
      e.dermatologyFullProtocols5, f.dermatologyFullProtocols6, g.dermatologyFullProtocols7, h.dermatologyFullProtocols8,
    ]);
  },

  ophthalmology: async () => {
    const [a, b, c, d, e, f, g] = await Promise.all([
      import("./ophthalmology"), import("./ophthalmology2"), import("./ophthalmology3"), import("./ophthalmology4"),
      import("./ophthalmology5"), import("./ophthalmology6"), import("./ophthalmology7"),
    ]);
    return merge([
      a.ophthalmologyFullProtocols, b.ophthalmologyFullProtocols2, c.ophthalmologyFullProtocols3, d.ophthalmologyFullProtocols4,
      e.ophthalmologyFullProtocols5, f.ophthalmologyFullProtocols6, g.ophthalmologyFullProtocols7,
    ]);
  },

  otorhinolaryngology: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./otorhinolaryngology"), import("./otorhinolaryngology2"),
      import("./otorhinolaryngology3"), import("./otorhinolaryngology4"),
      import("./otorhinolaryngology5"), import("./otorhinolaryngology6"),
    ]);
    return merge([
      a.orlFullProtocols, b.orlFullProtocols2, c.orlFullProtocols3, d.orlFullProtocols4,
      e.orlFullProtocols5, f.orlFullProtocols6,
    ]);
  },

  hematology: async () => {
    const [a, b, c, d, e, f, g, h, i] = await Promise.all([
      import("./hematology"), import("./hematology2"), import("./hematology3"), import("./hematology4"),
      import("./hematology5"), import("./hematology6"), import("./hematology7"), import("./hematology8"), import("./hematology9"),
    ]);
    return merge([
      a.hematologyFullProtocols, b.hematologyFullProtocols2, c.hematologyFullProtocols3, d.hematologyFullProtocols4,
      e.hematologyFullProtocols5, f.hematologyFullProtocols6, g.hematologyFullProtocols7, h.hematoFullProtocols8,
      i.hematoFullProtocols9,
    ]);
  },

  geriatrics: async () => {
    const [a, b, c, d, e, f, g, h] = await Promise.all([
      import("./geriatrics"), import("./geriatrics2"), import("./geriatrics3"), import("./geriatrics4"),
      import("./geriatrics5"), import("./geriatrics6"), import("./geriatrics7"), import("./geriatrics8"),
    ]);
    return merge([
      a.geriatricsFullProtocols, b.geriatricsFullProtocols2, c.geriatricsFullProtocols3, d.geriatricsFullProtocols4,
      e.geriatricsFullProtocols5, f.geriatricsFullProtocols6, g.geriatricsFullProtocols7, h.geriatricsFullProtocols8,
    ]);
  },

  pain_palliative: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./painPalliative"), import("./painPalliative2"), import("./painPalliative3"), import("./painPalliative4"),
      import("./pain_palliative5"), import("./pain_palliative6"),
    ]);
    return merge([
      a.painPalliativeFullProtocols, b.painPalliativeFullProtocols2, c.painPalliativeFullProtocols3, d.painPalliativeFullProtocols4,
      e.painPalliativeFullProtocols5, f.painPalliativeFullProtocols6,
    ]);
  },

  triage: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./triage"), import("./triage2"), import("./triage3"), import("./triage4"),
      import("./triage5"), import("./triage6"),
    ]);
    return merge([
      a.triageFullProtocols, b.triageFullProtocols2, c.triageFullProtocols3, d.triageFullProtocols4,
      e.triageFullProtocols5, f.triageFullProtocols6,
    ]);
  },

  sus_protocols: async () => {
    const [a, b, c, d, e, f] = await Promise.all([
      import("./susProtocols"), import("./susProtocols2"), import("./susProtocols3"), import("./susProtocols4"),
      import("./sus_protocols5"), import("./sus_protocols6"),
    ]);
    return merge([
      a.susProtocolsFullProtocols, b.susProtocolsFullProtocols2, c.susProtocolsFullProtocols3, d.susProtocolsFullProtocols4,
      e.susProtocolsFullProtocols5, f.susProtocolsFullProtocols6,
    ]);
  },
};

/* ────────── in-memory cache ────────── */
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

  if (meta) {
    const protocols = await loadCategoryProtocols(meta.categoryId);
    const found = protocols.find(p => p.id === id);
    if (found) return found;
  }

  // Fallback: search in newProtocols2026 (cross-category new protocols)
  const { newProtocols2026 } = await import("./_newProtocols2026");
  return newProtocols2026.find(p => p.id === id);
}

/** Load ALL protocols (for search — loads everything) */
export async function loadAllFullProtocols(): Promise<FullProtocol[]> {
  const allCategories = Object.keys(categoryLoaders);
  const results = await Promise.all(allCategories.map(cat => loadCategoryProtocols(cat)));
  return results.flat();
}
