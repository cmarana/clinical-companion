// Pipeline RAG completo do PULSO:
// 1. classifica intenção  2. busca cache semântico  3. busca chunks (vetorial+texto)
// 4. roteia modelo  5. chama LLM (ou resposta determinística)  6. loga consumo
//
// Retorna resposta final (não-streaming) — usado por clinical-ai para enriquecer.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { embedText } from "../_shared/embeddings.ts";
import { classifyIntent, pickModel } from "../_shared/intentRouter.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é a IA Clínica do PULSO, um sistema de apoio à decisão médica para o Brasil.

REGRAS ABSOLUTAS:
- Responda APENAS com base nos TRECHOS_FONTE fornecidos abaixo.
- Se a informação não estiver nos trechos, diga claramente: "Não encontrei essa informação na base do PULSO. Consulte a literatura ou um especialista."
- NUNCA invente doses, vias ou condutas.
- Sempre cite a fonte interna usada (título do protocolo).
- Use português brasileiro, terminologia médica padrão.

FORMATO OBRIGATÓRIO:
**Resposta direta:** (1-2 frases objetivas)
**Dose/Conduta:** (quando aplicável: dose, via, frequência, duração)
**Observações:** (ajustes renais/hepáticos, populações especiais)
**Alertas:** (contraindicações, interações graves, sinais de alarme)
**Fonte PULSO:** [Título da seção citada]

---
*Apoio à decisão clínica. O julgamento do médico assistente é soberano.*`;

interface Chunk {
  id: string;
  source_type: string;
  source_id: string;
  title: string;
  subtitle: string;
  content: string;
  specialty: string;
  category: string;
  similarity: number;
  text_rank: number;
  combined_score: number;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const t0 = Date.now();

  try {
    // Auth
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Auth necessária", code: "auth" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data: claimsData } = await userClient.auth.getClaims(authHeader.replace("Bearer ", ""));
    const userId = claimsData?.claims?.sub;
    if (!userId) {
      return new Response(JSON.stringify({ error: "Token inválido", code: "auth" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const service = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    const { question } = await req.json();
    if (!question || typeof question !== "string") {
      return new Response(JSON.stringify({ error: "question obrigatória" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 1. Classificar intenção (sem LLM)
    const { intent, complexity, sourceTypes } = classifyIntent(question);

    // 2. Embedding da pergunta (gratuito)
    const qEmbedding = await embedText(question);

    // 3. Curated answer? (similaridade ≥ 0.92)
    const { data: curated } = await service.rpc("match_medical_knowledge", {
      query_embedding: qEmbedding as unknown as string,
      query_text: question,
      filter_source_types: sourceTypes.length ? sourceTypes : null,
      match_count: 8,
      similarity_threshold: 0.5,
    });
    const chunks: Chunk[] = (curated as Chunk[]) || [];

    // 4. Cache semântico
    const { data: cacheHits } = await service
      .from("ai_response_cache")
      .select("response, id, hits, question_embedding")
      .eq("intent", intent)
      .gt("expires_at", new Date().toISOString())
      .not("question_embedding", "is", null)
      .limit(20);

    let cacheResponse: string | null = null;
    if (cacheHits && cacheHits.length > 0) {
      // similaridade local (cosine)
      for (const row of cacheHits) {
        const emb = row.question_embedding as unknown as number[];
        if (!Array.isArray(emb)) continue;
        const sim = cosine(qEmbedding, emb);
        if (sim >= 0.92) {
          cacheResponse = row.response as string;
          await service.from("ai_response_cache").update({
            hits: (row.hits as number) + 1,
            last_hit_at: new Date().toISOString(),
          }).eq("id", row.id);
          break;
        }
      }
    }

    if (cacheResponse) {
      await service.from("ai_query_log").insert({
        user_id: userId,
        question, intent, complexity,
        model_used: "cache",
        cache_hit: true,
        chunks_used: chunks.slice(0, 3).map((c) => ({ id: c.id, title: c.title, score: c.combined_score })),
        response: cacheResponse,
        latency_ms: Date.now() - t0,
      });
      return new Response(JSON.stringify({
        answer: cacheResponse,
        source: "cache",
        intent, complexity,
        chunks: chunks.slice(0, 3).map((c) => ({ title: c.title, source_type: c.source_type, source_id: c.source_id })),
      }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 5. Roteador de modelo
    const topScore = chunks[0]?.combined_score ?? 0;
    const { model, useLLM } = pickModel({ intent, complexity, topScore });

    let answer = "";
    let modelUsed = model;

    if (!useLLM && chunks.length > 0) {
      // Resposta determinística: monta direto dos chunks
      const c = chunks[0];
      answer = `**Resposta direta:** ${c.title}\n\n${truncate(c.content, 800)}\n\n**Fonte PULSO:** ${c.title}\n\n---\n*Apoio à decisão clínica. O julgamento do médico assistente é soberano.*`;
      modelUsed = "deterministic";
    } else {
      // Sem chunks suficientes → LLM com aviso
      const context = chunks.length > 0
        ? chunks.slice(0, 6).map((c, i) =>
            `[FONTE ${i + 1}: ${c.title} — ${c.source_type}]\n${c.content}`
          ).join("\n\n---\n\n")
        : "(Nenhum trecho relevante encontrado na base PULSO.)";

      const llmRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `PERGUNTA: ${question}\n\nTRECHOS_FONTE:\n${context}` },
          ],
        }),
      });

      if (!llmRes.ok) {
        const t = await llmRes.text();
        console.error("LLM error", llmRes.status, t);
        return new Response(JSON.stringify({ error: "Erro na IA", code: llmRes.status === 402 ? "credits" : "server" }), {
          status: llmRes.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const llmJson = await llmRes.json();
      answer = llmJson.choices?.[0]?.message?.content || "";
    }

    // 6. Salvar cache (só se resposta substancial)
    if (answer.length > 200 && answer.length < 30000) {
      await service.from("ai_response_cache").upsert({
        prompt_hash: await sha256(question.toLowerCase().trim()),
        feature: "clinical-ai-rag",
        model: modelUsed,
        mode: "rag",
        intent,
        chunks_hash: await sha256(chunks.map((c) => c.id).join(",")),
        response: answer,
        question_embedding: qEmbedding as unknown as string,
        last_hit_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      }, { onConflict: "prompt_hash,feature,model,mode" });
    }

    // 7. Log
    await service.from("ai_query_log").insert({
      user_id: userId,
      question, intent, complexity,
      model_used: modelUsed,
      cache_hit: false,
      chunks_used: chunks.slice(0, 6).map((c) => ({ id: c.id, title: c.title, score: c.combined_score })),
      response: answer,
      latency_ms: Date.now() - t0,
      cost_estimate: estimateCost(modelUsed, question.length, answer.length),
    });

    return new Response(JSON.stringify({
      answer,
      source: useLLM ? "llm" : "deterministic",
      model: modelUsed,
      intent, complexity,
      chunks: chunks.slice(0, 6).map((c) => ({
        title: c.title, source_type: c.source_type, source_id: c.source_id, score: c.combined_score,
      })),
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("medical-rag-query error:", e);
    return new Response(JSON.stringify({ error: "Erro no pipeline RAG" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1);
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n) + "…" : s;
}

async function sha256(s: string): Promise<string> {
  const buf = new TextEncoder().encode(s);
  const d = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(d)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function estimateCost(model: string, inLen: number, outLen: number): number {
  // estimativa muito grosseira em USD; ajustada pelo painel admin
  if (model === "deterministic" || model === "cache") return 0;
  const inTok = inLen / 4, outTok = outLen / 4;
  if (model.includes("flash-lite")) return (inTok * 0.0000001 + outTok * 0.0000004);
  if (model.includes("flash")) return (inTok * 0.0000003 + outTok * 0.0000012);
  return (inTok * 0.0000012 + outTok * 0.000005);
}
