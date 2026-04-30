import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage } from "../_shared/aiQuota.ts";

const FEATURE = "clinical-case-simulator";
const MODEL = "google/gemini-2.5-flash";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é um simulador de casos clínicos médicos para treinamento de médicos e residentes brasileiros.

REGRAS CRÍTICAS:
1. Você NÃO dá a resposta diretamente. O objetivo é guiar o médico a raciocinar.
2. Responda SEMPRE em português brasileiro.
3. Use terminologia médica precisa.
4. Siga o formato especificado para cada tipo de ação.

FLUXO:
- "new_case": gere caso clínico realista com 4 opções (A, B, C, D); apenas UMA correta.
- "evaluate": avalie a resposta. Se correta, parabenize, explique e avance com novas opções. Se incorreta, explique gentilmente sem revelar a resposta certa, dê dica e peça nova tentativa.
- "summary": resumo completo (diagnóstico final, pontos-chave, armadilhas, referências).

Use markdown. Cada etapa: 4-6 parágrafos no máximo.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ctx = await verifyAuthAndQuota(req, FEATURE);
    if (ctx instanceof Response) return ctx;

    const { messages, mode, specialty, difficulty } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Chave de IA não configurada" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiMessages: Array<{ role: string; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (mode === "new_case") {
      aiMessages.push({
        role: "user",
        content: `Gere um caso clínico novo de ${specialty || "Clínica Médica"} com nível de dificuldade ${difficulty || "intermediário"}. Apresente o caso e as 4 opções de conduta inicial.`,
      });
    } else if (messages && Array.isArray(messages)) {
      aiMessages.push(...messages);
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: MODEL, messages: aiMessages, stream: true }),
    });

    if (!response.ok) {
      if (response.status === 429) return new Response(JSON.stringify({ error: "Limite de requisições excedido.", code: "rate_limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (response.status === 402) return new Response(JSON.stringify({ error: "Créditos de IA esgotados.", code: "credits" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Só conta quota em new_case e summary (não em cada evaluate, para não punir o aprendizado)
    const shouldBump = mode === "new_case" || mode === "summary";

    if (shouldBump) {
      let consumed = false;
      const transform = new TransformStream({
        transform(chunk, controller) {
          if (!consumed) {
            consumed = true;
            bumpAiUsage(ctx.serviceClient, ctx.userId, FEATURE);
          }
          controller.enqueue(chunk);
        },
      });
      return new Response(response.body!.pipeThrough(transform), {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Simulator error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
