import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, corsHeaders } from "../_shared/aiQuota.ts";

const CHECKLISTS: Record<string, string> = {
  "rx_torax": `- Vias aéreas (traqueia centrada, calibre)\n- Parênquima (consolidações, infiltrados, nódulos, massas)\n- Pleura (derrame, pneumotórax, espessamento)\n- Mediastino e silhueta cardíaca (ICT, alargamento)\n- Hilos pulmonares\n- Diafragma e seios costofrênicos\n- Arcos costais e partes moles\n- Dispositivos (TOT, SNG, CVC, marcapasso)`,
  "rx_abdome": `- Padrão gasoso (distensão, níveis hidroaéreos)\n- Pneumoperitônio\n- Calcificações\n- Silhueta hepática, esplênica e renal\n- Psoas e linha pré-peritoneal\n- Esqueleto visível`,
  "rx_ossos": `- Alinhamento e cortical óssea\n- Linha de fratura, traços, desvios\n- Articulações (luxação, derrame)\n- Partes moles\n- Lesões líticas/blásticas`,
  "tc_cranio": `- Sistema ventricular\n- Sulcos corticais e cisternas basais\n- Hipodensidades / hiperdensidades\n- Hemorragias (epidural, subdural, subaracnoide, intraparenquimatosa)\n- Desvio de linha média\n- ASPECTS se suspeita de AVCi`,
  "tc_torax": `- Parênquima pulmonar\n- TEP (falha de enchimento se contrastada)\n- Mediastino e grandes vasos\n- Pleura e pericárdio\n- Aorta (dissecção, aneurisma)`,
  "tc_abdome": `- Fígado, vias biliares, vesícula\n- Baço, pâncreas, suprarrenais\n- Rins e vias urinárias\n- Alças intestinais\n- Líquido livre / coleções\n- Aorta e vasos mesentéricos`,
  "rm_cranio": `- Sequências disponíveis (T1/T2/FLAIR/DWI/SWI)\n- Restrição à difusão (isquemia aguda)\n- Lesões T2/FLAIR hiperintensas\n- Realce pelo gadolínio\n- Hemorragias\n- Sistema ventricular e linha média`,
  "usg_abdome": `- Fígado (ecotextura, dimensões, lesões)\n- Vesícula e vias biliares\n- Pâncreas\n- Rins (dimensões, hidronefrose)\n- Baço, bexiga, líquido livre`,
  "usg_obstetrica": `- BCF e vitalidade fetal\n- Biometria / idade gestacional\n- Placenta (localização, descolamento)\n- Líquido amniótico (ILA)\n- Apresentação fetal`,
  "ecg": `- Ritmo\n- Frequência cardíaca\n- Eixo elétrico\n- Intervalos: PR, QRS, QTc\n- Segmento ST (supra/infra)\n- Onda T\n- Onda Q patológica\n- Sinais de isquemia/IAM`,
  "pele_ferida": `- Localização e dimensões\n- Bordas\n- Coloração (regra ABCDE se pigmentada)\n- Sinais inflamatórios\n- Exsudato, necrose\n- Sinais de infecção`,
  "generico": `- Descrição objetiva do visível\n- Estruturas anatômicas reconhecíveis\n- Alterações morfológicas evidentes\n- Sinais de gravidade`,
};

const CLASSIFIER_PROMPT = `Você é um classificador de imagens médicas. Para CADA imagem enviada, responda APENAS com JSON válido (sem markdown) no formato:
{"items":[{"i":1,"modality":"RX|TC|RM|USG|ECG|FOTO_PELE|OUTRO","region":"texto curto em PT-BR","key":"rx_torax|rx_abdome|rx_ossos|tc_cranio|tc_torax|tc_abdome|rm_cranio|usg_abdome|usg_obstetrica|ecg|pele_ferida|generico"}]}`;

const SYSTEM_PROMPT_IMAGE = `Você é um médico radiologista assistente do PULSO Emergência.
Analise a imagem clínica (RX, TC, RM, USG, ECG, ferida) com rigor técnico.

REGRAS:
1. Português do Brasil. Linguagem técnica para médico de plantão.
2. NUNCA invente achados. Se qualidade ruim → declarar explicitamente.
3. Apenas hipóteses ordenadas — NÃO dê diagnóstico definitivo.
4. Use o checklist direcionado como roteiro mínimo.

FORMATO OBRIGATÓRIO:

## TIPO DE EXAME
[Modalidade + região + projeção]

## QUALIDADE TÉCNICA
[Adequada / Limitada — descrever limitações]

## CHECKLIST DIRECIONADO
- [item: presente/ausente/não avaliável — descrição]

## ACHADOS
- [achado objetivo]

## HIPÓTESES DIAGNÓSTICAS
1. **[mais provável]** — fundamento
2. **[diferencial]** — fundamento

## CONDUTA SUGERIDA
- [próximos passos]

## ALERTAS / RED FLAGS
- [achados críticos OU "Nenhum achado de gravidade imediata"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — NÃO substitui laudo formal de radiologista. Correlação clínica obrigatória.`;

const SYSTEM_PROMPT_DOCUMENT = `Você é um médico assistente do PULSO Emergência analisando documentos clínicos.

REGRAS:
1. Português do Brasil.
2. NUNCA invente valores. Se texto fragmentado → declarar.
3. Para laboratório: identificar alterados, classificar gravidade.
4. Sinalizar valores de pânico (K+>6,5; Hb<7; troponina elevada; lactato>4).

FORMATO OBRIGATÓRIO:

## TIPO DE DOCUMENTO
[Hemograma / Bioquímica / Laudo / Sumário / etc.]

## VALORES / ACHADOS RELEVANTES
- [parâmetro: valor (referência) — alterado/normal/crítico]

## INTERPRETAÇÃO CLÍNICA
[Síntese integrada]

## HIPÓTESES / CORRELAÇÕES
1. **[hipótese]** — fundamento

## CONDUTA SUGERIDA
- [próximos passos]

## ALERTAS / VALORES CRÍTICOS
- [achados críticos OU "Nenhum valor crítico"]

## OBSERVAÇÃO
⚠️ Análise de IA auxiliar — confirmar no documento original.`;

async function callGemini(model: string, messages: unknown[], responseFormat?: string): Promise<Response> {
  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY não configurada");

  const contents: unknown[] = [];
  for (const msg of messages as any[]) {
    if (msg.role === "system") continue;
    const parts: unknown[] = [];
    if (typeof msg.content === "string") {
      parts.push({ text: msg.content });
    } else if (Array.isArray(msg.content)) {
      for (const part of msg.content) {
        if (part.type === "text") {
          parts.push({ text: part.text });
        } else if (part.type === "image_url") {
          const url: string = part.image_url?.url ?? "";
          if (url.startsWith("data:")) {
            const [header, data] = url.split(",");
            const mimeType = header.replace("data:", "").replace(";base64", "");
            parts.push({ inline_data: { mime_type: mimeType, data } });
          }
        }
      }
    }
    contents.push({ role: msg.role === "assistant" ? "model" : "user", parts });
  }

  const systemMsg = (messages as any[]).find((m: any) => m.role === "system");
  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 4096,
      ...(responseFormat === "json" ? { responseMimeType: "application/json" } : {}),
    },
  };
  if (systemMsg) {
    body.systemInstruction = { parts: [{ text: typeof systemMsg.content === "string" ? systemMsg.content : "" }] };
  }

  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
  );
}

function extractGeminiText(data: any): string {
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authResult = await verifyAuthAndQuota(req.clone(), "clinical-ai");
    if (authResult instanceof Response) return authResult;
    const { userId, serviceClient, tier, used, limit } = authResult;

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new Response(JSON.stringify({ error: "Payload inválido" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const imageDataUrl: string | undefined = body.imageDataUrl;
    const imageDataUrls: unknown = body.imageDataUrls;
    const documentsRaw: unknown = body.documents;
    const context: string = typeof body.context === "string" ? body.context.slice(0, 2000) : "";

    let images: string[] = [];
    if (Array.isArray(imageDataUrls)) {
      images = imageDataUrls.filter((u): u is string => typeof u === "string" && u.startsWith("data:image/"));
    } else if (typeof imageDataUrl === "string" && imageDataUrl.startsWith("data:image/")) {
      images = [imageDataUrl];
    }

    interface DocPayload { fileName: string; pages: number; pagesAnalyzed: number; truncated?: boolean; text: string }
    let documents: DocPayload[] = [];
    if (Array.isArray(documentsRaw)) {
      documents = (documentsRaw as any[])
        .filter((d) => !!d && typeof d === "object")
        .map((d: any) => ({
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
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (images.length > 5) {
      return new Response(JSON.stringify({ error: "Máximo de 5 imagens por análise" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    for (const u of images) {
      if (u.length > 8_500_000) {
        return new Response(JSON.stringify({ error: "Uma das imagens excede 6MB. Reduza a resolução." }), {
          status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const hasImages = images.length > 0;
    const hasDocs = documents.length > 0;
    const systemPrompt = hasImages ? SYSTEM_PROMPT_IMAGE : SYSTEM_PROMPT_DOCUMENT;

    interface Classification { i: number; modality: string; region: string; key: string }
    let classifications: Classification[] = [];
    if (hasImages) {
      try {
        const clsContent: unknown[] = [
          { type: "text", text: `Classifique as ${images.length} imagem(ns) abaixo na ordem.` },
          ...images.map((url) => ({ type: "image_url", image_url: { url } })),
        ];
        const clsResp = await callGemini("gemini-2.5-flash-lite", [
          { role: "system", content: CLASSIFIER_PROMPT },
          { role: "user", content: clsContent },
        ], "json");
        if (clsResp.ok) {
          const clsData = await clsResp.json();
          const raw = extractGeminiText(clsData);
          const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
          if (Array.isArray(parsed?.items)) {
            classifications = parsed.items
              .filter((x: any) => x && typeof x === "object")
              .map((x: any, idx: number) => ({
                i: typeof x.i === "number" ? x.i : idx + 1,
                modality: typeof x.modality === "string" ? x.modality : "OUTRO",
                region: typeof x.region === "string" ? x.region : "não identificada",
                key: typeof x.key === "string" && CHECKLISTS[x.key] ? x.key : "generico",
              }))
              .slice(0, images.length);
          }
        }
      } catch (e) {
        console.warn("[image-analysis] classifier error:", e);
      }
    }

    const isBatchImg = images.length > 1;
    let classificationBlock = "";
    if (classifications.length > 0) {
      const lines = classifications.map((c) => `- Imagem ${c.i}: ${c.modality} — ${c.region}`).join("\n");
      const uniqueKeys = Array.from(new Set(classifications.map((c) => c.key)));
      const checklistBlocks = uniqueKeys
        .map((k) => `### Checklist (${k}):\n${CHECKLISTS[k] ?? CHECKLISTS["generico"]}`)
        .join("\n\n");
      classificationBlock = `\n\nCLASSIFICAÇÃO AUTOMÁTICA:\n${lines}\n\nCHECKLISTS:\n${checklistBlocks}\n`;
    }

    const headerParts: string[] = [];
    if (hasImages && isBatchImg) headerParts.push(`Lote com ${images.length} imagens — analise como sequência.`);
    if (hasDocs) headerParts.push(`${documents.length} documento(s) PDF em texto abaixo.`);

    const userText = (headerParts.join(" ") + classificationBlock + "\n" + (context.trim()
      ? `Contexto clínico:\n${context}\n\nAnalise seguindo o formato obrigatório.`
      : "Analise os materiais seguindo o formato obrigatório. Sem contexto clínico fornecido.")).trim();

    const userContent: unknown[] = [{ type: "text", text: userText }];
    images.forEach((url, idx) => {
      if (isBatchImg) userContent.push({ type: "text", text: `\n--- Imagem ${idx + 1} de ${images.length} ---` });
      userContent.push({ type: "image_url", image_url: { url } });
    });
    documents.forEach((doc, idx) => {
      userContent.push({
        type: "text",
        text: `\n--- Documento ${idx + 1}: ${doc.fileName} (${doc.pagesAnalyzed}/${doc.pages} pág.${doc.truncated ? " truncado" : ""}) ---\n\n${doc.text}`,
      });
    });

    const response = await callGemini("gemini-2.5-flash", [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent },
    ]);

    if (!response.ok) {
      const errText = await response.text();
      console.error("[image-analysis] Gemini error:", response.status, errText);
      const isQuota = response.status === 429;
      return new Response(
        JSON.stringify({ error: isQuota ? "Muitas requisições. Tente em instantes." : "Falha na análise de imagem. Tente novamente." }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const analysis = extractGeminiText(data);

    if (!analysis || analysis.length < 30) {
      return new Response(JSON.stringify({ error: "Resposta vazia da IA. Tente novamente." }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let summary = "";
    let alerts: unknown[] = [];
    try {
      const extractResp = await callGemini("gemini-2.5-flash-lite", [
        {
          role: "system",
          content: "Extraia um resumo clínico (2-3 frases) e lista de alertas críticos do laudo abaixo. Responda APENAS JSON: {\"summary\":\"...\",\"alerts\":[{\"level\":\"critico|atencao|informativo\",\"label\":\"...\",\"value\":\"...\",\"action\":\"...\"}]}. Se sem alterações relevantes, alerts=[]. Não invente.",
        },
        { role: "user", content: `Laudo:\n\n${analysis}` },
      ], "json");
      if (extractResp.ok) {
        const extractData = await extractResp.json();
        const raw = extractGeminiText(extractData).replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(raw);
        if (typeof parsed?.summary === "string") summary = parsed.summary.slice(0, 600);
        if (Array.isArray(parsed?.alerts)) {
          alerts = parsed.alerts
            .filter((a: any) => a?.label)
            .map((a: any) => ({
              level: ["critico", "atencao", "informativo"].includes(a.level) ? a.level : "atencao",
              label: String(a.label).slice(0, 80),
              value: typeof a.value === "string" ? a.value.slice(0, 80) : undefined,
              action: typeof a.action === "string" ? a.action.slice(0, 120) : undefined,
            }))
            .slice(0, 12);
        }
      }
    } catch (e) {
      console.warn("[image-analysis] extractor error:", e);
    }

    bumpAiUsage(serviceClient, userId, "clinical-ai").catch(console.error);
    console.log(`[image-analysis] user=${userId} tier=${tier} used=${used + 1}/${limit} imgs=${images.length} alerts=${alerts.length}`);

    return new Response(JSON.stringify({ analysis, classifications, summary, alerts }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (e) {
    console.error("[image-analysis] error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
