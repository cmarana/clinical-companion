import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const sb = createClient(supabaseUrl, supabaseKey, { global: { headers: { Authorization: authHeader } } });
    const { data: { user }, error: authErr } = await sb.auth.getUser();
    if (authErr || !user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

    const { diagnosis, context } = await req.json();
    if (!diagnosis) return new Response(JSON.stringify({ error: "Diagnóstico obrigatório" }), { status: 400, headers: corsHeaders });

    const contextNote = context ? `\nContexto adicional: ${context}` : "";

    const systemPrompt = `Você é um especialista médico brasileiro. Dado um diagnóstico, compare as condutas recomendadas por 3 fontes distintas. Responda SEMPRE em português brasileiro.

Retorne um JSON válido (sem markdown, sem backticks) com esta estrutura exata:
{
  "diagnosis_title": "Nome padronizado do diagnóstico",
  "icd10": "CID-10 correspondente",
  "summary": "Resumo executivo de 2-3 linhas sobre o diagnóstico",
  "sources": [
    {
      "source_name": "Ministério da Saúde / SUS",
      "source_type": "sus",
      "guideline_name": "Nome do protocolo/diretriz específica",
      "year": "Ano da última atualização",
      "diagnostic_criteria": ["critério 1", "critério 2"],
      "first_line_treatment": "Tratamento de primeira linha",
      "alternative_treatments": ["alternativa 1", "alternativa 2"],
      "medications": [{"name": "Medicamento", "dose": "Dose", "route": "Via", "duration": "Duração"}],
      "red_flags": ["sinal de alarme 1"],
      "follow_up": "Recomendação de seguimento",
      "notes": "Observações específicas desta fonte"
    },
    {
      "source_name": "Sociedade Brasileira correspondente",
      "source_type": "brazilian_society",
      "guideline_name": "...",
      "year": "...",
      "diagnostic_criteria": [],
      "first_line_treatment": "...",
      "alternative_treatments": [],
      "medications": [],
      "red_flags": [],
      "follow_up": "...",
      "notes": "..."
    },
    {
      "source_name": "Guideline Internacional (ex: AHA, ESC, NICE, WHO)",
      "source_type": "international",
      "guideline_name": "...",
      "year": "...",
      "diagnostic_criteria": [],
      "first_line_treatment": "...",
      "alternative_treatments": [],
      "medications": [],
      "red_flags": [],
      "follow_up": "...",
      "notes": "..."
    }
  ],
  "key_differences": ["Diferença relevante 1 entre as fontes", "Diferença 2"],
  "evidence_level": "Nível de evidência geral (ex: Alto, Moderado, Baixo)",
  "last_update_check": "Baseado em diretrizes até 2025"
}`;

    const userPrompt = `Diagnóstico: ${diagnosis}${contextNote}

Compare as condutas das 3 fontes para este diagnóstico. Seja específico com doses, nomes de medicamentos e critérios diagnósticos. Use referências reais e atualizadas.`;

    const aiRes = await fetch("https://xwmqqwqynyhccmyqtxje.supabase.co/functions/v1/ai-gateway", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${supabaseKey}` },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        model: "google/gemini-2.5-flash",
        temperature: 0.3,
        max_tokens: 4000,
      }),
    });

    if (!aiRes.ok) {
      const err = await aiRes.text();
      console.error("AI gateway error:", err);
      return new Response(JSON.stringify({ error: "Erro ao consultar IA" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const aiData = await aiRes.json();
    const raw = aiData.choices?.[0]?.message?.content || "";

    // Extract JSON from response
    let parsed;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : raw);
    } catch {
      return new Response(JSON.stringify({ error: "Erro ao processar resposta da IA", raw }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify(parsed), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
