export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  snippet?: string;
  type: string;
  path: string;
  icon: "protocol" | "medication" | "prescription" | "symptom" | "bulario" | "fullProtocol" | "emergency" | "calculator" | "cid" | "labValue";
}

const calculatorItems = [
  { id: "glasgow", title: "Glasgow (ECG)", description: "Nível de consciência" },
  { id: "sofa", title: "SOFA Score", description: "Disfunção orgânica na sepse" },
  { id: "nihss", title: "NIHSS", description: "Gravidade do AVC" },
  { id: "heart", title: "HEART Score", description: "Risco na dor torácica" },
  { id: "wells", title: "Wells (TEP)", description: "Probabilidade de TEP" },
  { id: "cha2ds2", title: "CHA₂DS₂-VASc", description: "Risco de AVC em FA" },
  { id: "timi", title: "TIMI Score", description: "Risco na SCA sem supra" },
  { id: "meld", title: "MELD / MELD-Na", description: "Gravidade hepatopatia" },
  { id: "apacheii", title: "APACHE II", description: "Gravidade na UTI" },
  { id: "curb65", title: "CURB-65", description: "Gravidade de pneumonia" },
  { id: "apgar", title: "APGAR", description: "Avaliação do RN" },
  { id: "childpugh", title: "Child-Pugh", description: "Gravidade na cirrose" },
  { id: "clearance", title: "Clearance Creatinina", description: "Cockcroft-Gault" },
  { id: "dose", title: "Dose por Peso", description: "mg/kg → dose total e volume" },
  { id: "infusion", title: "Velocidade de Infusão", description: "BIC em mL/h" },
  { id: "parkland", title: "Parkland (Queimados)", description: "Reposição volêmica" },
  { id: "aniongap", title: "Anion Gap", description: "Acidose metabólica" },
  { id: "imc", title: "IMC", description: "Índice de Massa Corporal" },
  { id: "bishop", title: "Bishop Score", description: "Maturidade cervical" },
  { id: "news", title: "NEWS / MEWS", description: "Deterioração clínica" },
  { id: "ranson", title: "Ranson", description: "Gravidade pancreatite" },
  { id: "hasbled", title: "HAS-BLED", description: "Risco de sangramento" },
  { id: "grace", title: "GRACE Score", description: "Risco na SCA" },
  { id: "perc", title: "PERC Rule", description: "Exclusão de TEP" },
  { id: "rockall", title: "Rockall", description: "HDA não varicosa" },
  { id: "blatchford", title: "Glasgow-Blatchford", description: "HDA — necessidade de intervenção" },
];

function extractSnippet(content: string, query: string, maxLen = 100): string | undefined {
  const clean = content.replace(/[#*_`>|[\]()]/g, "").replace(/\n+/g, " ").replace(/\s+/g, " ");
  const idx = clean.toLowerCase().indexOf(query);
  if (idx === -1) return undefined;
  const start = Math.max(0, idx - 30);
  const end = Math.min(clean.length, idx + query.length + maxLen - 30);
  let snippet = clean.slice(start, end).trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < clean.length) snippet = snippet + "…";
  return snippet;
}

// Lazy-loaded data cache — only loaded on first search
let _dataCache: {
  protocols: any[];
  prescriptionCategories: any[];
  symptomGuides: any[];
  fullProtocols: any[];
  allEmergencyProtocols: any[];
  cidData: any[];
  labCategories: any[];
} | null = null;

async function loadSearchData() {
  if (_dataCache) return _dataCache;
  const [
    { protocols },
    { prescriptionCategories },
    { symptomGuides },
    fullProtocolsData,
    { allEmergencyProtocols },
    { cidData },
    { labCategories },
  ] = await Promise.all([
    import("@/data/protocols"),
    import("@/data/prescriptions"),
    import("@/data/symptomGuides"),
    import("@/data/fullProtocols/lazyLoader").then(m => m.loadAllFullProtocols()),
    import("@/data/emergency"),
    import("@/data/cidData"),
    import("@/data/labValues"),
  ]);
  _dataCache = { protocols, prescriptionCategories, symptomGuides, fullProtocols: fullProtocolsData, allEmergencyProtocols, cidData, labCategories };
  return _dataCache;
}

/**
 * Full-text search across all static data sources (lazy-loaded).
 */
export async function fullTextSearch(query: string): Promise<SearchResult[]> {
  if (query.length < 2) return [];
  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter(t => t.length >= 2);
  if (terms.length === 0) return [];

  const data = await loadSearchData();

  const matchesAll = (text: string) => {
    const lower = text.toLowerCase();
    return terms.every(t => lower.includes(t));
  };

  const matchesAny = (text: string) => {
    const lower = text.toLowerCase();
    return terms.some(t => lower.includes(t));
  };

  // ── Full Protocols ──
  const fullProtocolResults: SearchResult[] = [];
  for (const p of data.fullProtocols) {
    const titleMatch = matchesAll(p.title) || matchesAll(p.category);
    const tagMatch = p.tags.some((t: string) => matchesAny(t));
    let contentSnippet: string | undefined;
    let matchSection = "";
    if (!titleMatch) {
      for (const s of p.sections) {
        if (matchesAll(s.content) || matchesAll(s.title)) {
          contentSnippet = extractSnippet(s.content, terms[0]);
          matchSection = s.title;
          break;
        }
      }
    }
    if (titleMatch || tagMatch || contentSnippet) {
      fullProtocolResults.push({
        id: p.id, title: p.title,
        subtitle: contentSnippet ? `${p.category} · ${matchSection}` : p.category,
        snippet: contentSnippet, type: "Protocolo Completo",
        path: `/full-protocols/${p.id}`, icon: "fullProtocol",
      });
    }
    if (fullProtocolResults.length >= 30) break;
  }

  // ── Emergency ──
  const emergencyResults: SearchResult[] = [];
  for (const p of data.allEmergencyProtocols) {
    const titleMatch = matchesAll(p.title) || matchesAny(p.categoryId);
    let contentSnippet: string | undefined;
    let matchSection = "";
    if (!titleMatch) {
      for (const s of p.sections) {
        if (matchesAll(s.content) || matchesAll(s.title)) {
          contentSnippet = extractSnippet(s.content, terms[0]);
          matchSection = s.title;
          break;
        }
      }
    }
    if (titleMatch || contentSnippet) {
      emergencyResults.push({
        id: p.id, title: p.title,
        subtitle: contentSnippet ? `Emergência · ${matchSection}` : `Emergência · ${p.categoryId}`,
        snippet: contentSnippet, type: "Emergência",
        path: `/emergency/${p.id}`, icon: "emergency",
      });
    }
    if (emergencyResults.length >= 20) break;
  }

  // ── Protocols ──
  const protocolResults: SearchResult[] = data.protocols
    .filter((p: any) => matchesAll(p.title) || p.tags.some((t: string) => matchesAny(t)))
    .slice(0, 20)
    .map((p: any) => ({ id: p.id, title: p.title, subtitle: p.category, type: "Protocolo", path: `/protocols/${p.id}`, icon: "protocol" as const }));

  // ── Prescriptions ──
  const rxResults: SearchResult[] = [];
  for (const cat of data.prescriptionCategories) {
    for (const p of cat.items) {
      const titleMatch = matchesAll(p.title);
      const contentMatch = matchesAll(p.prescription);
      const altMatch = p.alternatives ? matchesAll(p.alternatives) : false;
      const notesMatch = p.notes ? matchesAll(p.notes) : false;
      const warningsMatch = p.warnings ? matchesAll(p.warnings) : false;
      if (titleMatch || contentMatch || altMatch || notesMatch || warningsMatch) {
        let snippet: string | undefined;
        if (!titleMatch) {
          snippet = extractSnippet(p.prescription, terms[0]) ||
            (p.alternatives ? extractSnippet(p.alternatives, terms[0]) : undefined) ||
            (p.notes ? extractSnippet(p.notes, terms[0]) : undefined);
        }
        rxResults.push({ id: p.id, title: p.title, subtitle: p.type, snippet, type: "Prescrição", path: `/prescriptions/${p.id}`, icon: "prescription" });
      }
      if (rxResults.length >= 30) break;
    }
    if (rxResults.length >= 30) break;
  }

  // ── Symptom guides ──
  const symptomResults: SearchResult[] = data.symptomGuides
    .filter((s: any) => matchesAll(s.symptom) || s.hypotheses.some((h: string) => matchesAny(h)))
    .map((s: any) => ({ id: s.id, title: s.symptom, subtitle: "Diagnóstico por Sintoma", type: "Sintoma", path: `/diagnosis`, icon: "symptom" as const }));

  // ── Calculators ──
  const calcResults: SearchResult[] = calculatorItems
    .filter(c => matchesAll(c.title) || matchesAll(c.description))
    .map(c => ({ id: c.id, title: c.title, subtitle: c.description, type: "Calculadora", path: `/calculators`, icon: "calculator" as const }));

  // ── CID-10 ──
  const cidResults: SearchResult[] = data.cidData
    .filter((c: any) => matchesAny(c.code) || matchesAll(c.description))
    .slice(0, 30)
    .map((c: any) => ({ id: c.code, title: `${c.code} — ${c.description}`, subtitle: c.category, type: "CID-10", path: `/cid`, icon: "cid" as const }));

  // ── Lab values ──
  const labResults: SearchResult[] = data.labCategories
    .flatMap((cat: any) => cat.values.map((v: any) => ({ ...v, catTitle: cat.title })))
    .filter((v: any) => matchesAll(v.name) || matchesAny(v.unit))
    .slice(0, 20)
    .map((v: any) => ({ id: v.name, title: v.name, subtitle: `${v.catTitle} · ${v.unit}`, type: "Lab. Referência", path: `/lab-reference`, icon: "labValue" as const }));

  const titleResults = [...emergencyResults.filter(r => !r.snippet), ...protocolResults, ...fullProtocolResults.filter(r => !r.snippet), ...rxResults.filter(r => !r.snippet), ...calcResults, ...cidResults, ...labResults, ...symptomResults];
  const contentResults = [...emergencyResults.filter(r => r.snippet), ...fullProtocolResults.filter(r => r.snippet), ...rxResults.filter(r => r.snippet)];

  return [...titleResults, ...contentResults];
}

export { calculatorItems };

export const typeColors: Record<string, string> = {
  protocol: "bg-primary/10 text-primary",
  medication: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  prescription: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  symptom: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  bulario: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  fullProtocol: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  emergency: "bg-destructive/10 text-destructive",
  calculator: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  cid: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  labValue: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export const typeLabels: Record<string, string> = {
  protocol: "Protocolo",
  prescription: "Prescrição",
  symptom: "Sintoma",
  bulario: "Bulário",
  fullProtocol: "Protocolo Completo",
  emergency: "Emergência",
  calculator: "Calculadora",
  cid: "CID-10",
  labValue: "Lab. Referência",
};

export const typeIcons = {
  protocol: "FileText",
  prescription: "ClipboardList",
  symptom: "Stethoscope",
  bulario: "Pill",
  fullProtocol: "BookOpen",
  emergency: "Zap",
  calculator: "Calculator",
  cid: "Hash",
  labValue: "TestTubes",
} as const;

export const categoryOrder = ["emergency", "protocol", "fullProtocol", "prescription", "calculator", "cid", "bulario", "labValue", "symptom"];
