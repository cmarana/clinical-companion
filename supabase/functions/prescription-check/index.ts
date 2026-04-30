import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, hashPrompt, lookupCache, storeCache } from "../_shared/aiQuota.ts";

const FEATURE = "prescription-check";
const MODEL = "google/gemini-2.5-flash";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ctx = await verifyAuthAndQuota(req, FEATURE);
    if (ctx instanceof Response) return ctx;

    const { prescription, allergies, patient_info } = await req.json();
    if (!prescription) {
      return new Response(JSON.stringify({ error: "prescription is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Você é um farmacêutico clínico especialista em segurança de prescrições médicas. Analise a prescrição completa abaixo e retorne TODOS os alertas encontrados.

## Você deve verificar:

### 1. INTERAÇÕES MEDICAMENTOSAS
- Identifique TODOS os pares de medicamentos com interação
- Classifique: 🔴 GRAVE (risco de vida), 🟡 MODERADA (monitorar), 🟢 LEVE (atenção)
- Explique o mecanismo farmacológico e a conduta

### 2. DOSES EXCESSIVAS OU INADEQUADAS
- Verifique se as doses estão dentro da faixa terapêutica
- Considere informações do paciente (peso, idade, função renal se informados)

### 3. ALERGIAS CRUZADAS
- Se alergias foram informadas, verifique reações cruzadas

### 4. INCOMPATIBILIDADES EV
- Compatibilidade em Y para medicamentos EV

### 5. DUPLICIDADES TERAPÊUTICAS

### 6. OMISSÕES IMPORTANTES

## Formato (Markdown):
### 📊 Resumo da Análise
### 🔴 Alertas Graves
### 🟡 Alertas Moderados
### 🟢 Alertas Leves
### 💊 Sugestões de Otimização
### ✅ Medicamentos sem alertas

Seja preciso e baseado em evidências.`;

    const userMessage = [
      "Prescrição completa para análise:",
      prescription,
      allergies ? `\nAlergias do paciente: ${allergies}` : "",
      patient_info ? `\nDados do paciente: ${patient_info}` : "",
    ].filter(Boolean).join("\n");

    // Cache lookup (global)
    const promptHash = await hashPrompt(`${systemPrompt}::${userMessage}`);
    const cached = await lookupCache(ctx.serviceClient, promptHash, FEATURE, MODEL, "default");
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
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido.", code: "rate_limit" }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos de IA esgotados.", code: "credits" }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Intercepta stream para cachear + bumpar quota
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
          await storeCache(ctx.serviceClient, promptHash, FEATURE, MODEL, "default", fullResponse);
        }
      },
    });

    return new Response(response.body!.pipeThrough(transform), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("prescription-check error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
