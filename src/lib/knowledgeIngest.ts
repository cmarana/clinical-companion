// Builder de chunks para ingestão na base medical_knowledge.
// Converte os datasets internos do PULSO em chunks prontos para a Edge Function
// `ingest-medical-knowledge` (pgvector + Gemini text-embedding-004).

import { fullProtocols } from "@/data/fullProtocols";
import { medications } from "@/data/medications";
import { symptomGuides } from "@/data/symptomGuides";
import { flashcards as flashcardsData } from "@/data/flashcardsData";
import { residencyQuestions } from "@/data/residencyQuestions";

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
  // Tenta quebrar em parágrafos primeiro
  const paragraphs = clean.split(/\n\n+/);
  let current = "";
  for (const p of paragraphs) {
    if ((current + "\n\n" + p).length > MAX_CHARS && current) {
      parts.push(current.trim());
      current = p;
    } else {
      current = current ? current + "\n\n" + p : p;
    }
  }
  if (current) parts.push(current.trim());
  // Se algum chunk ainda for grande, cortar por caracteres
  const final: string[] = [];
  for (const part of parts) {
    if (part.length <= MAX_CHARS) { final.push(part); continue; }
    for (let i = 0; i < part.length; i += MAX_CHARS) {
      final.push(part.slice(i, i + MAX_CHARS));
    }
  }
  return final.filter(Boolean);
}

// ─────────────────────────────────────────────
// 1. Full Protocols (1.167+ protocolos completos)
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// 2. Medicamentos (2.000+)
// ─────────────────────────────────────────────
export function buildMedicationChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = [];
  for (const m of medications) {
    const content = [
      m.indication && `Indicação: ${m.indication}`,
      m.dose && `Dose: ${m.dose}`,
      m.dilution && `Diluição: ${m.dilution}`,
      m.administration && `Administração: ${m.administration}`,
      m.precautions && `Precauções: ${m.precautions}`,
      (m as any).contraindications && `Contraindicações: ${(m as any).contraindications}`,
      (m as any).interactions && `Interações: ${(m as any).interactions}`,
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

// ─────────────────────────────────────────────
// 3. Diagnóstico por Sintoma (40 guias)
// ─────────────────────────────────────────────
export function buildSymptomGuideChunks(): KnowledgeChunk[] {
  return symptomGuides.map((g) => {
    const content = [
      `Sintoma: ${g.symptom}`,
      `\nHipóteses diagnósticas:\n${g.hypotheses.map((h, i) => `${i + 1}. ${h}`).join("\n")}`,
      `\nExames indicados:\n${g.exams.map((e) => `• ${e}`).join("\n")}`,
      `\nConduta:\n${g.conduct}`,
      g.redFlags?.length
        ? `\nRed Flags (sinais de alarme):\n${g.redFlags.map((r) => `⚠️ ${r}`).join("\n")}`
        : "",
      g.guideline ? `\nGuideline: ${g.guideline}` : "",
    ].filter(Boolean).join("\n");

    return {
      source_type: "symptom_guide",
      source_id: g.id,
      title: `Diagnóstico por Sintoma — ${g.symptom}`,
      subtitle: "Abordagem clínica sistematizada",
      content,
      tags: ["diagnóstico", "sintoma", "conduta", "emergência"],
      specialty: "Medicina de Emergência",
    };
  });
}

// ─────────────────────────────────────────────
// 4. Flashcards SM-2 (1.039+ cards)
// Agrupa por categoria para não criar chunk individual por card
// ─────────────────────────────────────────────
export function buildFlashcardChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = [];

  // Agrupar por categoria + tema
  const groups: Record<string, typeof flashcardsData> = {};
  for (const fc of flashcardsData) {
    const key = `${fc.category}__${(fc.tags?.[0] || "geral")}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(fc);
  }

  for (const [key, cards] of Object.entries(groups)) {
    const [category, tema] = key.split("__");
    const content = cards
      .map((c, i) => `[${i + 1}] P: ${c.front}\nR: ${c.back}`)
      .join("\n\n---\n\n");

    const pieces = chunkText(content);
    pieces.forEach((piece, idx) => {
      out.push({
        source_type: "flashcard",
        source_id: `flashcard__${key}${idx > 0 ? `__${idx}` : ""}`,
        specialty: category,
        category: category,
        title: `Flashcards — ${category}: ${tema}`,
        subtitle: `${cards.length} conceitos-chave`,
        content: piece,
        chunk_index: idx,
        tags: ["flashcard", "revisão", "residência", category, tema],
      });
    });
  }
  return out;
}

// ─────────────────────────────────────────────
// 5. Quiz de Residência (500 questões)
// Agrupa por especialidade em blocos de 10
// ─────────────────────────────────────────────
export function buildResidencyQuestionChunks(): KnowledgeChunk[] {
  const out: KnowledgeChunk[] = [];

  // Agrupar por categoria
  const groups: Record<string, typeof residencyQuestions> = {};
  for (const q of residencyQuestions) {
    if (!groups[q.category]) groups[q.category] = [];
    groups[q.category].push(q);
  }

  for (const [category, qs] of Object.entries(groups)) {
    // Lotes de 10 questões por chunk
    for (let i = 0; i < qs.length; i += 10) {
      const batch = qs.slice(i, i + 10);
      const content = batch.map((q, j) => {
        const opts = q.options.map((o, k) => `${String.fromCharCode(65 + k)}) ${o}`).join("\n");
        return `Questão ${i + j + 1} (${q.banca} ${q.year} — ${q.theme}):\n${q.question}\n${opts}\nGabarito: ${String.fromCharCode(65 + q.correctIndex)}\nExplicação: ${q.explanation}`;
      }).join("\n\n---\n\n");

      out.push({
        source_type: "residency_question",
        source_id: `residency__${category.replace(/\s+/g, "_")}__${i}`,
        specialty: category,
        category: category,
        title: `Quiz Residência — ${category} (questões ${i + 1}-${i + batch.length})`,
        subtitle: `${batch.length} questões comentadas`,
        content,
        chunk_index: Math.floor(i / 10),
        tags: ["residência", "quiz", "questão", "concurso", category.toLowerCase()],
      });
    }
  }
  return out;
}

// ─────────────────────────────────────────────
// Função principal — concatena tudo
// ─────────────────────────────────────────────
export function buildAllChunks(): KnowledgeChunk[] {
  return [
    ...buildFullProtocolChunks(),
    ...buildMedicationChunks(),
    ...buildSymptomGuideChunks(),
    ...buildFlashcardChunks(),
    ...buildResidencyQuestionChunks(),
  ];
}

/** Resumo dos chunks que serão gerados (sem processar tudo, só estimativa). */
export function getChunkSummary(): Record<string, number> {
  return {
    fullProtocols: buildFullProtocolChunks().length,
    medications: buildMedicationChunks().length,
    symptomGuides: buildSymptomGuideChunks().length,
    flashcards: buildFlashcardChunks().length,
    residencyQuestions: buildResidencyQuestionChunks().length,
  };
}
