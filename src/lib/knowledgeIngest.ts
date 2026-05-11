// Builder de chunks para ingestão na base medical_knowledge.
// Converte os datasets internos do PULSO (protocolos, medicamentos) em chunks
// prontos para serem enviados em lote para a Edge Function `ingest-medical-knowledge`.

import { fullProtocols } from "@/data/fullProtocols";
import { medications } from "@/data/medications";

export interface KnowledgeChunk {
  source_type: string;
  source_id: string;
  specialty?: string;
  category?: string;
  title: string;
  subtitle?: string;
  content: string;
  chunk_index?: number;
  tags?: string[];
  last_reviewed?: string;
}

const MAX_CHARS = 3000;

function chunkText(text: string): string[] {
  const clean = (text || "").trim();
  if (clean.length <= MAX_CHARS) return [clean];
  const parts: string[] = [];
  for (let i = 0; i < clean.length; i += MAX_CHARS) {
    parts.push(clean.slice(i, i + MAX_CHARS));
  }
  return parts;
}

/** Gera chunks de TODOS os full protocols (1 chunk por seção, splittando se grande). */
export function buildFullProtocolChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = [];
  for (const p of fullProtocols) {
    for (const s of p.sections) {
      const pieces = chunkText(s.content);
      pieces.forEach((piece, idx) => {
        out.push({
          source_type: "full_protocol",
          source_id: `${p.id}__${s.id}${idx > 0 ? `__${idx}` : ""}`,
          specialty: p.category,
          category: p.categoryId,
          title: `${p.title} — ${s.title}`,
          subtitle: p.category,
          content: piece,
          chunk_index: idx,
          tags: p.tags,
          last_reviewed: p.lastReviewed,
        });
      });
    }
  }
  return out;
}

/** Gera chunks de medicamentos do dataset estático (compacta info essencial). */
export function buildMedicationChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = [];
  for (const m of medications) {
    const content = [
      `Indicação: ${m.indication}`,
      `Dose: ${m.dose}`,
      `Diluição: ${m.dilution}`,
      `Administração: ${m.administration}`,
      `Precauções: ${m.precautions}`,
    ].filter(Boolean).join("\n");
    out.push({
      source_type: "medication",
      source_id: m.id,
      title: m.name,
      subtitle: m.indication,
      content,
      tags: m.tags,
    });
  }
  return out;
}

export function buildAllChunks(): KnowledgeChunk[] {
  return [...buildFullProtocolChunks(), ...buildMedicationChunks()];
}
