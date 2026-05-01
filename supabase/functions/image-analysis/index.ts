// ─────────────────────────────────────────────────────────────
// EDGE FUNCTION — image-analysis (PULSO IA Clínica)
// Análise de exames de imagem (RX, TC, RM, USG, ECG impresso)
// via Gemini 2.5 Flash multimodal. Resposta única (não stream).
// ─────────────────────────────────────────────────────────────
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, corsHeaders } from "../_shared/aiQuota.ts";

const SYSTEM_PROMPT = `Você é um médico radiologista assistente do PULSO Emergência.
Analise a imagem clínica enviada (radiografia, TC, RM, USG, ECG impresso, ferida, lesão de pele, etc.) com o máximo rigor.

REGRAS OBRIGATÓRIAS:
1. Português do Brasil. Linguagem técnica mas clara para o médico generalista de plantão.
2. Baseie-se em diretrizes brasileiras (CBR — Colégio Brasileiro de Radiologia, SBC, MS, AMIB) e internacionais (Fleischner, ACR, ESR) quando aplicáveis.
3. NUNCA invente achados. Se a imagem tem qualidade ruim, ângulo ruim ou não permite análise → declarar explicitamente.
4. Seja CAUTELOSO: laudos automáticos por IA têm taxa de erro. Sempre recomendar correlação clínica e laudo formal por radiologista.
5. NÃO dê diagnóstico definitivo — apenas hipóteses ordenadas por probabilidade.
6. Para ECG: comente ritmo, frequência, eixo, intervalos (PR/QRS/QT), alterações ST-T, sinais de isquemia/sobrecarga.

FORMATO OBRIGATÓRIO (markdown, use exatamente estes títulos H2):

## TIPO DE EXAME
[Modalidade identificada + região anatômica + projeção/corte]

## QUALIDADE TÉCNICA
[Adequada / Limitada — descrever limitações se houver]

## ACHADOS
- [achado 1 — descrição objetiva]
- [achado 2]
(o que VOCÊ está vendo na imagem; descreva sem interpretar)

## HIPÓTESES DIAGNÓSTICAS
1. **[mais provável]** — fundamento
2. **[diferencial 1]** — fundamento
3. **[diferencial 2]** — fundamento

## CONDUTA SUGERIDA
- [exame complementar / interconsulta / urgência]
- [tratamento empírico se aplicável]

## ALERTAS / RED FLAGS
- [se houver achado crítico que requer ação imediata]
- [se não houver, escrever "Nenhum achado de gravidade imediata identificado"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — NÃO substitui laudo formal de radiologista. Correlação clínica obrigatória.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Auth + quota (compartilha quota com clinical-ai para evitar abuso)
    const authResult = await verifyAuthAndQuota(req.clone(), "clinical-ai");
    if (authResult instanceof Response) return authResult;
    const { userId, serviceClient, tier, used, limit } = authResult;

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new Response(JSON.stringify({ error: "Payload inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const imageDataUrl: string | undefined = body.imageDataUrl;
    const context: string = typeof body.context === "string" ? body.context.slice(0, 2000) : "";

    if (!imageDataUrl || typeof imageDataUrl !== "string" || !imageDataUrl.startsWith("data:image/")) {
      return new Response(JSON.stringify({ error: "Imagem não fornecida ou formato inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Limite de tamanho (~6MB em base64 ≈ 4.5MB binário)
    if (imageDataUrl.length > 8_500_000) {
      return new Response(JSON.stringify({ error: "Imagem muito grande (máx 6MB). Reduza a resolução." }), {
        status: 413,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI gateway não configurado" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userText = context.trim()
      ? `Contexto clínico fornecido pelo médico:\n${context}\n\nAnalise a imagem em anexo seguindo o formato obrigatório.`
      : "Analise a imagem em anexo seguindo o formato obrigatório. Sem contexto clínico fornecido.";

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              { type: "text", text: userText },
              { type: "image_url", image_url: { url: imageDataUrl } },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições. Tente novamente em instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes no workspace de IA." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      return new Response(JSON.stringify({ error: "Falha na análise de imagem" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const analysis: string = data?.choices?.[0]?.message?.content ?? "";

    if (!analysis || analysis.length < 30) {
      return new Response(JSON.stringify({ error: "Resposta vazia da IA. Tente novamente." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Conta uso (best-effort)
    bumpAiUsage(serviceClient, userId, "clinical-ai").catch((e) =>
      console.error("bumpAiUsage failed:", e),
    );
    console.log(`[image-analysis] user=${userId} tier=${tier} used=${used + 1}/${limit}`);

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("image-analysis error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
