import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, hashPrompt, lookupCache, storeCache } from "../_shared/aiQuota.ts";

const FEATURE = "voice-evolution";
const MODEL = "google/gemini-2.5-flash-lite"; // Estruturação simples → modelo barato

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ctx = await verifyAuthAndQuota(req, FEATURE);
    if (ctx instanceof Response) return ctx;

    const { transcription, format } = await req.json();
    if (!transcription || !format) {
      return new Response(JSON.stringify({ error: "transcription and format are required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const soapPrompt = `Você é um médico especialista em documentação clínica. Estruture o relato no formato SOAP (Subjetivo, Objetivo, Avaliação, Plano). Use linguagem médica formal, organize em tópicos, inclua CID-10 quando possível. Se faltar informação, escreva "Não informado".`;
    const ipassPrompt = `Você é um médico especialista em passagem de plantão. Estruture o relato no formato I-PASS (Illness Severity, Patient Summary, Action List, Situation Awareness, Synthesis). Linguagem formal, priorize segurança do paciente, destaque alertas críticos.`;

    const systemPrompt = format === "SOAP" ? soapPrompt : ipassPrompt;
    const userMessage = `Relato clínico transcrito por voz:\n\n${transcription}`;

    const promptHash = await hashPrompt(`${systemPrompt}::${userMessage}`);
    const cached = await lookupCache(ctx.serviceClient, promptHash, FEATURE, MODEL, format);
    if (cached.hit && cached.response) {
      const stream = new ReadableStream({
        start(controller) {
          const chunk = `data: ${JSON.stringify({ choices: [{ delta: { content: cached.response } }] })}\n\ndata: [DONE]\n\n`;
          controller.enqueue(new TextEncoder().encode(chunk));
          controller.close();
        },
      });
      return new Response(stream, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) return new Response(JSON.stringify({ error: "Limite de requisições excedido.", code: "rate_limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (response.status === 402) return new Response(JSON.stringify({ error: "Créditos de IA esgotados.", code: "credits" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "Erro interno do servidor" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let fullResponse = "";
    const transform = new TransformStream({
      transform(chunk, controller) {
        const text = new TextDecoder().decode(chunk);
        const lines = text.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ") && !line.includes("[DONE]")) {
            try {
              const json = JSON.parse(line.slice(6));
              const delta = json.choices?.[0]?.delta?.content;
              if (delta) fullResponse += delta;
            } catch { /* ignore */ }
          }
        }
        controller.enqueue(chunk);
      },
      async flush() {
        if (fullResponse.length > 0) {
          await bumpAiUsage(ctx.serviceClient, ctx.userId, FEATURE);
          await storeCache(ctx.serviceClient, promptHash, FEATURE, MODEL, format, fullResponse);
        }
      },
    });

    return new Response(response.body!.pipeThrough(transform), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("voice-evolution error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
