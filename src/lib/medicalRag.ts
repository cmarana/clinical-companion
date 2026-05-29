import { supabase } from "@/integrations/supabase/client";

export interface RagChunk {
  title: string;
  source_type: string;
  source_id: string;
  score?: number;
}

export interface RagAnswer {
  answer: string;
  source: "cache" | "llm" | "deterministic";
  model?: string;
  intent: string;
  complexity: string;
  chunks: RagChunk[];
  cached?: boolean;
  latency_ms?: number;
}

const SESSION_CACHE_MAX = 30;
const SESSION_CACHE_SIMILARITY_THRESHOLD = 0.92;

interface CacheEntry {
  normalizedQuestion: string;
  answer: RagAnswer;
  ts: number;
}

const sessionCache: CacheEntry[] = [];

function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function bigramSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const bigrams = (s: string) => {
    const set = new Set<string>();
    for (let i = 0; i < s.length - 1; i++) set.add(s.slice(i, i + 2));
    return set;
  };
  const setA = bigrams(a);
  const setB = bigrams(b);
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  setA.forEach((g) => { if (setB.has(g)) intersection++; });
  return (2 * intersection) / (setA.size + setB.size);
}

function findInSessionCache(question: string): RagAnswer | null {
  const normalized = normalizeQuestion(question);
  for (const entry of sessionCache) {
    const sim = bigramSimilarity(normalized, entry.normalizedQuestion);
    if (sim >= SESSION_CACHE_SIMILARITY_THRESHOLD) {
      sessionCache.splice(sessionCache.indexOf(entry), 1);
      sessionCache.unshift(entry);
      return { ...entry.answer, source: "cache", cached: true };
    }
  }
  return null;
}

function addToSessionCache(question: string, answer: RagAnswer) {
  const normalized = normalizeQuestion(question);
  const existing = sessionCache.findIndex((e) => e.normalizedQuestion === normalized);
  if (existing !== -1) sessionCache.splice(existing, 1);
  sessionCache.unshift({ normalizedQuestion: normalized, answer, ts: Date.now() });
  if (sessionCache.length > SESSION_CACHE_MAX) sessionCache.pop();
}

export async function askMedicalRag(question: string): Promise<RagAnswer> {
  const cached = findInSessionCache(question);
  if (cached) return cached;

  const t0 = Date.now();
  const { data, error } = await supabase.functions.invoke("medical-rag-query", {
    body: { question },
  });
  if (error) throw error;

  // Edge function returns { error, code, message } for credit/rate errors with 200 status
  if (data && (data as any).error && !(data as any).answer) {
    const err: any = new Error((data as any).message || (data as any).error);
    err.code = (data as any).code;
    throw err;
  }

  const answer = data as RagAnswer;
  answer.latency_ms = Date.now() - t0;

  if (answer?.answer) {
    addToSessionCache(question, answer);
  }

  return answer;
}

export function clearRagSessionCache() {
  sessionCache.length = 0;
}

export function getRagSessionCacheStats() {
  return {
    size: sessionCache.length,
    max: SESSION_CACHE_MAX,
    entries: sessionCache.map((e) => ({
      question: e.normalizedQuestion,
      source: e.answer.source,
      intent: e.answer.intent,
      ts: e.ts,
    })),
  };
}
