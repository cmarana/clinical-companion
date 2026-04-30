import { verifyAuthAndQuota, bumpAiUsage, hashPrompt, lookupCache, storeCache } from "../_shared/aiQuota.ts";

const FEATURE = "conduct-comparator";
const MODEL = "google/gemini-2.5-flash";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ctx = await verifyAuthAndQuota(req, FEATURE);
    if (ctx instanceof Response) return ctx;

    const { diagnosis, context } = await req.json();
    if (!diagnosis) {
      return new Response(JSON.stringify({ error: "Diagnóstico obrigatório" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const contextNote = context ? `\nContexto adicional: ${context}` : "";

    const systemPrompt = `Você é um especialista médico brasileiro. Dado um diagnóstico, compare as condutas recomendadas por 3 fontes (SUS, Sociedade Brasileira correspondente, Internacional). Responda SEMPRE em PT-BR.

Retorne JSON válido (sem markdown, sem backticks):
{
  "diagnosis_title": "...",
  "icd10": "...",
  "summary": "...",
  "sources": [
    {"source_name":"Ministério da Saúde / SUS","source_type":"sus","guideline_name":"...","year":"...","diagnostic_criteria":[],"first_line_treatment":"...","alternative_treatments":[],"medications":[{"name":"","dose":"","route":"","duration":""}],"red_flags":[],"follow_up":"...","notes":"..."},
    {"source_name":"Sociedade Brasileira ...","source_type":"brazilian_society", ...},
    {"source_name":"Guideline Internacional ...","source_type":"international", ...}
  ],
  "key_differences": [],
  "evidence_level": "...",
  "last_update_check": "Baseado em diretrizes até 2025"
}`;

    const userPrompt = `Diagnóstico: ${diagnosis}${contextNote}

Compare as condutas das 3 fontes. Seja específico com doses, nomes de medicamentos e critérios diagnósticos.`;

    // Cache
    const promptHash = await hashPrompt(`${systemPrompt}::${userPrompt}`);
    const cached = await lookupCache(ctx.serviceClient, promptHash, FEATURE, MODEL, "default");
    if (cached.hit && cached.response) {
      try {
        const parsed = JSON.parse(cached.response);
        return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
      } catch { /* falha cache → segue */ }
    }

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${LOVABLE_API_KEY}` },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!aiRes.ok) {
      if (aiRes.status === 429) return new Response(JSON.stringify({ error: "Limite de requisições excedido.", code: "rate_limit" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (aiRes.status === 402) return new Response(JSON.stringify({ error: "Créditos de IA esgotados.", code: "credits" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      console.error("AI gateway error:", aiRes.status);
      return new Response(JSON.stringify({ error: "Erro ao consultar IA" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const aiData = await aiRes.json();
    const raw = aiData.choices?.[0]?.message?.content || "";

    let parsed: unknown;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : raw);
    } catch {
      return new Response(JSON.stringify({ error: "Erro ao processar resposta da IA" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Bumpa quota e cacheia (fire-and-forget)
    bumpAiUsage(ctx.serviceClient, ctx.userId, FEATURE);
    storeCache(ctx.serviceClient, promptHash, FEATURE, MODEL, "default", JSON.stringify(parsed));

    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("conduct-comparator error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
