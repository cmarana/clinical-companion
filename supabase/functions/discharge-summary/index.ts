import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, hashPrompt, lookupCache, storeCache } from "../_shared/aiQuota.ts";

const FEATURE = "discharge-summary";
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

    const body = await req.json();
    const { patient_name, age, sex, admission_date, discharge_date, diagnosis, comorbidities, hospital_course, procedures, exams, medications_discharge, follow_up, extra_notes } = body;

    if (!patient_name && !diagnosis && !hospital_course) {
      return new Response(JSON.stringify({ error: "Preencha ao menos nome, diagnóstico ou evolução hospitalar." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Você é um médico hospitalar experiente. Gere um RESUMO DE ALTA HOSPITALAR completo, profissional e formatado para impressão.

Estrutura: IDENTIFICAÇÃO, DIAGNÓSTICOS (com CID-10), HISTÓRIA DA INTERNAÇÃO, PROCEDIMENTOS, EXAMES, CONDIÇÃO DE ALTA, PRESCRIÇÃO DE ALTA, ORIENTAÇÕES, SEGUIMENTO, MÉDICO RESPONSÁVEL.

Regras: omitir seções sem informação, linguagem médica formal, formatado para impressão.`;

    const userParts: string[] = [];
    if (patient_name) userParts.push(`Nome: ${patient_name}`);
    if (age) userParts.push(`Idade: ${age}`);
    if (sex) userParts.push(`Sexo: ${sex}`);
    if (admission_date) userParts.push(`Data de internação: ${admission_date}`);
    if (discharge_date) userParts.push(`Data de alta: ${discharge_date}`);
    if (diagnosis) userParts.push(`Diagnóstico: ${diagnosis}`);
    if (comorbidities) userParts.push(`Comorbidades: ${comorbidities}`);
    if (hospital_course) userParts.push(`Evolução hospitalar:\n${hospital_course}`);
    if (procedures) userParts.push(`Procedimentos: ${procedures}`);
    if (exams) userParts.push(`Exames relevantes:\n${exams}`);
    if (medications_discharge) userParts.push(`Medicamentos de alta:\n${medications_discharge}`);
    if (follow_up) userParts.push(`Seguimento: ${follow_up}`);
    if (extra_notes) userParts.push(`Observações adicionais:\n${extra_notes}`);

    const userMessage = userParts.join("\n");
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
          await storeCache(ctx.serviceClient, promptHash, FEATURE, MODEL, "default", fullResponse);
        }
      },
    });

    return new Response(response.body!.pipeThrough(transform), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("discharge-summary error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
