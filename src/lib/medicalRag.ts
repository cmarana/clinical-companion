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
}

/**
 * Consulta a IA Clínica RAG do PULSO.
 * - Classifica intenção, busca chunks na base interna, roteia modelo.
 * - Reusa cache semântico e respostas curadas quando possível.
 */
export async function askMedicalRag(question: string): Promise<RagAnswer> {
  const { data, error } = await supabase.functions.invoke("medical-rag-query", {
    body: { question },
  });
  if (error) throw error;
  return data as RagAnswer;
}
