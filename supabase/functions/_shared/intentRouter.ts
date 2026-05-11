// Classificador de intenção e roteador de modelo (sem LLM — fast path por keywords).
// Reduz custo: a maioria das perguntas é classificada sem chamada extra à IA.

export type Intent =
  | "dose"
  | "dilution"
  | "antibiotic"
  | "protocol"
  | "emergency"
  | "conduct"
  | "calculator"
  | "score"
  | "interaction"
  | "general"
  | "complex_case";

export type Complexity = "simple" | "medium" | "complex";

export interface IntentResult {
  intent: Intent;
  complexity: Complexity;
  sourceTypes: string[]; // filtros de retrieval prioritários
}

const PATTERNS: { intent: Intent; rx: RegExp; sourceTypes: string[] }[] = [
  { intent: "dose", rx: /\b(dose|posologia|mg\/kg|mg\/dia|dosagem)\b/i, sourceTypes: ["medication", "dose", "prescription"] },
  { intent: "dilution", rx: /\b(dilui[cç][aã]o|dilui[rç]|infus[aã]o|reconstitu)/i, sourceTypes: ["dilution", "medication"] },
  { intent: "antibiotic", rx: /\b(antibi[oó]tico|antimicrobiano|cefalospor|penicilin|carbapen|vancomicin|ceftriax|piperacil|meropen|azitrom)/i, sourceTypes: ["antibiotic", "medication", "prescription"] },
  { intent: "interaction", rx: /\b(intera[cç][aã]o|incompat|y-?site|associa[cç][aã]o)\b/i, sourceTypes: ["interaction", "medication"] },
  { intent: "score", rx: /\b(score|escore|chads|wells|sofa|qsofa|curb|news|apache|glasgow)\b/i, sourceTypes: ["score", "calculator"] },
  { intent: "calculator", rx: /\b(calcul[ao]|f[oó]rmula|estimar|clearance)\b/i, sourceTypes: ["calculator", "score"] },
  { intent: "emergency", rx: /\b(emerg[eê]ncia|parada|pcr|choque|sepse|iam|avc|trauma|anafilax)/i, sourceTypes: ["emergency", "full_protocol", "protocol"] },
  { intent: "conduct", rx: /\b(conduta|tratamento|manejo|abordagem|fluxograma)\b/i, sourceTypes: ["full_protocol", "protocol", "prescription"] },
  { intent: "protocol", rx: /\b(protocolo|diretriz|guideline)\b/i, sourceTypes: ["full_protocol", "protocol"] },
];

export function classifyIntent(question: string): IntentResult {
  const q = (question || "").toLowerCase().trim();
  for (const p of PATTERNS) {
    if (p.rx.test(q)) {
      const complexity = estimateComplexity(q);
      return { intent: p.intent, complexity, sourceTypes: p.sourceTypes };
    }
  }
  return {
    intent: estimateComplexCase(q) ? "complex_case" : "general",
    complexity: estimateComplexity(q),
    sourceTypes: [],
  };
}

function estimateComplexity(q: string): Complexity {
  const len = q.length;
  const hasMultiCondition = /(\be |, ).*(\be |, )/.test(q);
  const isCase = /\b(paciente|caso|hist[oó]ria|anos?,? )/i.test(q);
  if (isCase && len > 200) return "complex";
  if (len > 120 || hasMultiCondition) return "medium";
  return "simple";
}

function estimateComplexCase(q: string): boolean {
  return /\b(paciente|caso cl[ií]nico|relata|apresent[ao]|chega ao ps|admitido)/i.test(q) && q.length > 150;
}

/** Define qual modelo usar conforme intent + complexidade + qualidade dos chunks. */
export function pickModel(opts: {
  intent: Intent;
  complexity: Complexity;
  topScore: number; // melhor RRF score dos chunks recuperados
}): { model: string; useLLM: boolean } {
  // Sem chunks bons o suficiente → ainda assim usa Flash com aviso de "sem fonte"
  if (opts.topScore < 0.005) {
    return { model: "google/gemini-2.5-flash-lite", useLLM: true };
  }
  // Pergunta direta + chunks excelentes → resposta determinística (sem LLM)
  if (opts.complexity === "simple" && opts.topScore > 0.025 &&
      ["dose", "dilution", "score", "calculator"].includes(opts.intent)) {
    return { model: "deterministic", useLLM: false };
  }
  // Caso clínico complexo → Flash (mais raciocínio)
  if (opts.complexity === "complex" || opts.intent === "complex_case") {
    return { model: "google/gemini-2.5-flash", useLLM: true };
  }
  // Padrão econômico
  return { model: "google/gemini-2.5-flash-lite", useLLM: true };
}
