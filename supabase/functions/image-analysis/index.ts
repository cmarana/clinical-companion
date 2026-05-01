// ─────────────────────────────────────────────────────────────
// EDGE FUNCTION — image-analysis (PULSO IA Clínica)
// Análise de exames de imagem (RX, TC, RM, USG, ECG impresso)
// via Gemini 2.5 Flash multimodal. Resposta única (não stream).
// ─────────────────────────────────────────────────────────────
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, corsHeaders } from "../_shared/aiQuota.ts";

const SYSTEM_PROMPT_IMAGE = `Você é um médico radiologista assistente do PULSO Emergência.
Analise a imagem clínica enviada (radiografia, TC, RM, USG, ECG impresso, ferida, lesão de pele, etc.) com o máximo rigor.

REGRAS OBRIGATÓRIAS:
1. Português do Brasil. Linguagem técnica mas clara para o médico generalista de plantão.
2. Baseie-se em diretrizes brasileiras (CBR, SBC, MS, AMIB) e internacionais (Fleischner, ACR, ESR) quando aplicáveis.
3. NUNCA invente achados. Se a imagem tem qualidade ruim ou não permite análise → declarar explicitamente.
4. Seja CAUTELOSO: laudos automáticos por IA têm taxa de erro. Sempre recomendar correlação clínica e laudo formal por radiologista.
5. NÃO dê diagnóstico definitivo — apenas hipóteses ordenadas por probabilidade.
6. Para ECG: comente ritmo, frequência, eixo, intervalos (PR/QRS/QT), alterações ST-T, sinais de isquemia/sobrecarga.

FORMATO OBRIGATÓRIO (markdown, exatamente estes H2):

## TIPO DE EXAME
[Modalidade + região + projeção/corte]

## QUALIDADE TÉCNICA
[Adequada / Limitada — descrever limitações]

## ACHADOS
- [achado objetivo 1]
- [achado objetivo 2]

## HIPÓTESES DIAGNÓSTICAS
1. **[mais provável]** — fundamento
2. **[diferencial 1]** — fundamento

## CONDUTA SUGERIDA
- [exame complementar / interconsulta / urgência]

## ALERTAS / RED FLAGS
- [achados críticos OU "Nenhum achado de gravidade imediata identificado"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — NÃO substitui laudo formal de radiologista. Correlação clínica obrigatória.`;

const SYSTEM_PROMPT_DOCUMENT = `Você é um médico assistente do PULSO Emergência analisando documentos clínicos em PDF
(resultados de exames laboratoriais, laudos radiológicos, sumários de alta, prescrições, evoluções).

REGRAS OBRIGATÓRIAS:
1. Português do Brasil. Linguagem técnica e objetiva.
2. Baseie-se em diretrizes brasileiras (SBPC, MS, SBC, AMIB) e valores de referência adultos quando aplicável.
3. NUNCA invente valores ou achados. Se o texto extraído está fragmentado, ilegível ou incompleto → declarar.
4. Para LABORATÓRIO: identificar valores ALTERADOS, classificar gravidade (leve/moderado/crítico), interpretar conjunto (ex.: anemia + ferritina baixa = ferropriva).
5. Para LAUDOS: extrair achados principais, traduzir jargão e sinalizar urgências (BI-RADS 4/5, Lung-RADS 4, lesões críticas).
6. Para PRESCRIÇÕES/SUMÁRIOS: identificar medicações ativas, interações relevantes e pendências.
7. Sinalize valores de PÂNICO/CRÍTICOS que exijam ação imediata (K+ >6,5; Hb <7; troponina elevada; lactato >4; INR >5; etc.).

FORMATO OBRIGATÓRIO (markdown, exatamente estes H2):

## TIPO DE DOCUMENTO
[Hemograma / Bioquímica / Laudo TC / Sumário de alta / etc.]

## VALORES / ACHADOS RELEVANTES
- [parâmetro: valor (referência) — alterado/normal/crítico]
- agrupar por sistema quando fizer sentido

## INTERPRETAÇÃO CLÍNICA
[Síntese integrada dos achados — o que isso significa em conjunto]

## HIPÓTESES / CORRELAÇÕES
1. **[hipótese 1]** — fundamento
2. **[hipótese 2]** — fundamento

## CONDUTA SUGERIDA
- [exames complementares / repetição / interconsulta / tratamento]

## ALERTAS / VALORES CRÍTICOS
- [achados que exigem ação imediata OU "Nenhum valor crítico identificado"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — sempre confirmar valores no documento original e correlacionar clinicamente.`;

const SYSTEM_PROMPT_MIXED = `Você é um médico assistente do PULSO Emergência analisando MÚLTIPLOS materiais clínicos
de um mesmo paciente: imagens (RX/TC/USG/ECG) E documentos PDF (laboratório, laudos, sumários).

INTEGRE todas as fontes em uma análise única e coerente:
1. Português do Brasil, técnico e objetivo.
2. Para cada IMAGEM: descrever achados (sem inventar).
3. Para cada DOCUMENTO: extrair valores/achados relevantes e alterações.
4. Sintetizar TUDO em uma interpretação integrada (correlacionar imagem + laboratório + clínica).
5. Sinalizar valores críticos e red flags.
6. NÃO dê diagnóstico definitivo — hipóteses ordenadas + correlação clínica obrigatória.

FORMATO OBRIGATÓRIO (markdown, exatamente estes H2):

## MATERIAIS RECEBIDOS
- Imagem(ns): [tipo + número]
- Documento(s): [tipo + nome]

## ACHADOS DE IMAGEM
- [por imagem, breve]

## ACHADOS DOCUMENTAIS
- [valores alterados / achados relevantes]

## INTERPRETAÇÃO INTEGRADA
[síntese clínica unindo imagem + laboratório/laudo]

## HIPÓTESES DIAGNÓSTICAS
1. **[mais provável]** — fundamento
2. **[diferencial 1]** — fundamento

## CONDUTA SUGERIDA
- [próximos passos clínicos / exames / interconsulta]

## ALERTAS / RED FLAGS
- [crítico OU "Nenhum achado de gravidade imediata"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — não substitui avaliação clínica e laudo formal.`;

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
    const imageDataUrls: unknown = body.imageDataUrls;
    const documentsRaw: unknown = body.documents;
    const context: string = typeof body.context === "string" ? body.context.slice(0, 2000) : "";

    // Imagens
    let images: string[] = [];
    if (Array.isArray(imageDataUrls)) {
      images = imageDataUrls.filter(
        (u): u is string => typeof u === "string" && u.startsWith("data:image/"),
      );
    } else if (typeof imageDataUrl === "string" && imageDataUrl.startsWith("data:image/")) {
      images = [imageDataUrl];
    }

    // Documentos PDF (texto extraído no client)
    interface DocPayload { fileName: string; pages: number; pagesAnalyzed: number; truncated?: boolean; text: string }
    let documents: DocPayload[] = [];
    if (Array.isArray(documentsRaw)) {
      documents = documentsRaw
        .filter((d): d is Record<string, unknown> => !!d && typeof d === "object")
        .map((d) => ({
          fileName: typeof d.fileName === "string" ? d.fileName.slice(0, 200) : "documento.pdf",
          pages: typeof d.pages === "number" ? d.pages : 0,
          pagesAnalyzed: typeof d.pagesAnalyzed === "number" ? d.pagesAnalyzed : 0,
          truncated: !!d.truncated,
          text: typeof d.text === "string" ? d.text.slice(0, 80_000) : "",
        }))
        .filter((d) => d.text.trim().length >= 20)
        .slice(0, 3);
    }

    if (images.length === 0 && documents.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhuma imagem ou documento válido fornecido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const MAX_IMAGES = 5;
    if (images.length > MAX_IMAGES) {
      return new Response(JSON.stringify({ error: `Máximo de ${MAX_IMAGES} imagens por análise` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (images.length > 0) {
      const totalSize = images.reduce((acc, u) => acc + u.length, 0);
      for (const u of images) {
        if (u.length > 8_500_000) {
          return new Response(
            JSON.stringify({ error: "Uma das imagens excede 6MB. Reduza a resolução." }),
            { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } },
          );
        }
      }
      if (totalSize > 35_000_000) {
        return new Response(
          JSON.stringify({ error: "Lote muito grande (>25MB total). Reduza imagens ou envie menos." }),
          { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI gateway não configurado" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Seleciona prompt baseado no tipo de material
    const hasImages = images.length > 0;
    const hasDocs = documents.length > 0;
    const systemPrompt = hasImages && hasDocs
      ? SYSTEM_PROMPT_MIXED
      : hasImages
        ? SYSTEM_PROMPT_IMAGE
        : SYSTEM_PROMPT_DOCUMENT;

    const isBatchImg = images.length > 1;
    const headerParts: string[] = [];
    if (hasImages && isBatchImg) {
      headerParts.push(`Lote com ${images.length} imagens da MESMA investigação — analise como sequência.`);
    }
    if (hasDocs) {
      headerParts.push(`${documents.length} documento(s) PDF anexado(s) (texto já extraído abaixo).`);
    }
    const header = headerParts.length ? headerParts.join(" ") + "\n\n" : "";

    const userText = header + (context.trim()
      ? `Contexto clínico fornecido pelo médico:\n${context}\n\nAnalise os materiais em anexo seguindo o formato obrigatório.`
      : `Analise os materiais em anexo seguindo o formato obrigatório. Sem contexto clínico fornecido.`);

    // Monta content multimodal
    const userContent: Array<Record<string, unknown>> = [{ type: "text", text: userText }];

    images.forEach((url, idx) => {
      if (isBatchImg) {
        userContent.push({ type: "text", text: `\n--- Imagem ${idx + 1} de ${images.length} ---` });
      }
      userContent.push({ type: "image_url", image_url: { url } });
    });

    documents.forEach((doc, idx) => {
      const truncNote = doc.truncated ? " (truncado)" : "";
      userContent.push({
        type: "text",
        text: `\n--- Documento ${idx + 1}${hasDocs && documents.length > 1 ? ` de ${documents.length}` : ""}: ${doc.fileName} (${doc.pagesAnalyzed}/${doc.pages} pág.${truncNote}) ---\n\n${doc.text}`,
      });
    });

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
          { role: "user", content: userContent },
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
    console.log(`[image-analysis] user=${userId} tier=${tier} used=${used + 1}/${limit} batch=${images.length}`);

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
