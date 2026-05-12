// ─────────────────────────────────────────────────────────────
// EDGE FUNCTION — image-analysis (PULSO IA Clínica)
// Análise de exames de imagem (RX, TC, RM, USG, ECG impresso)
// via Gemini 2.5 Flash multimodal. Resposta única (não stream).
// ─────────────────────────────────────────────────────────────
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, corsHeaders } from "../_shared/aiQuota.ts";
import { geminiChat } from "../_shared/gemini.ts";

// Checklists direcionados por modalidade + região anatômica
const CHECKLISTS: Record<string, string> = {
  "rx_torax": `- Vias aéreas (traqueia centrada, calibre)\n- Parênquima (consolidações, infiltrados, nódulos, massas)\n- Pleura (derrame, pneumotórax, espessamento)\n- Mediastino e silhueta cardíaca (ICT, alargamento)\n- Hilos pulmonares\n- Diafragma e seios costofrênicos\n- Arcos costais e partes moles\n- Dispositivos (TOT, SNG, CVC, marcapasso)`,
  "rx_abdome": `- Padrão gasoso (distensão, níveis hidroaéreos, alças sentinela)\n- Pneumoperitônio (ar livre subdiafragmático)\n- Calcificações (litíase, vasculares, fecalomas)\n- Silhueta hepática, esplênica e renal\n- Psoas e linha pré-peritoneal\n- Esqueleto visível (coluna lombar, bacia)`,
  "rx_ossos": `- Alinhamento e cortical óssea\n- Linha de fratura, traços, desvios, angulação\n- Articulações (luxação, derrame, espaço articular)\n- Partes moles (edema, enfisema subcutâneo, corpos estranhos)\n- Lesões líticas/blásticas`,
  "tc_cranio": `- Sistema ventricular (tamanho, simetria, hidrocefalia)\n- Sulcos corticais e cisternas basais\n- Hipodensidades (isquemia, edema) / hiperdensidades (sangue)\n- Hemorragias (epidural, subdural, subaracnoide, intraparenquimatosa, IV)\n- Desvio de linha média / herniações\n- Calota craniana e seios paranasais\n- ASPECTS se suspeita de AVCi`,
  "tc_torax": `- Parênquima pulmonar (consolidação, vidro fosco, nódulos, enfisema)\n- TEP (falha de enchimento se contrastada)\n- Mediastino, linfonodos, grandes vasos\n- Pleura e pericárdio (derrame)\n- Esqueleto (fraturas costais, vertebrais)\n- Aorta (dissecção, aneurisma)`,
  "tc_abdome": `- Fígado, vias biliares, vesícula\n- Baço, pâncreas, suprarrenais\n- Rins e vias urinárias (litíase, hidronefrose)\n- Alças intestinais (distensão, espessamento, pneumatose)\n- Líquido livre / coleções\n- Aorta e vasos mesentéricos\n- Apêndice (se FID)`,
  "rm_cranio": `- Sequências disponíveis (T1/T2/FLAIR/DWI/SWI)\n- Restrição à difusão (DWI/ADC) — isquemia aguda\n- Lesões T2/FLAIR hiperintensas (desmielinização, gliose)\n- Realce pelo gadolínio (se contrastada)\n- Hemorragias (SWI/T2*)\n- Sistema ventricular e linha média`,
  "usg_abdome": `- Fígado (ecotextura, dimensões, lesões focais)\n- Vesícula (cálculos, espessamento parietal, sinal de Murphy US)\n- Vias biliares (calibre)\n- Pâncreas (quando visível)\n- Rins (dimensões, hidronefrose, cálculos)\n- Baço, bexiga, líquido livre`,
  "usg_obstetrica": `- BCF, vitalidade fetal\n- Idade gestacional / biometria\n- Placenta (localização, espessura, descolamento)\n- Líquido amniótico (ILA)\n- Apresentação fetal\n- Anatomia fetal (se trimestre adequado)`,
  "usg_doppler": `- Estrutura vascular avaliada\n- Fluxo (presente/ausente, fásico/contínuo)\n- Trombose (compressibilidade, eco intraluminal)\n- Velocidades / índices`,
  "ecg": `- Ritmo (sinusal, FA, flutter, juncional, ventricular)\n- Frequência cardíaca\n- Eixo elétrico (normal, desvio para esquerda/direita)\n- Intervalos: PR, QRS, QTc\n- Onda P (morfologia, sobrecarga atrial)\n- Complexo QRS (bloqueios de ramo, hipertrofias)\n- Segmento ST (supra/infra, localização)\n- Onda T (inversão, achatamento, apiculada)\n- Onda Q patológica\n- Sinais de isquemia/IAM, sobrecarga, distúrbios eletrolíticos`,
  "pele_ferida": `- Localização e dimensões\n- Bordas (regulares, irregulares, infiltradas)\n- Coloração e pigmentação (regra ABCDE se lesão pigmentada)\n- Sinais inflamatórios (rubor, edema, calor)\n- Exsudato, necrose, fibrina\n- Sinais de infecção (pus, celulite perilesional)\n- Profundidade aparente`,
  "generico": `- Descrição objetiva do que é visível\n- Estruturas anatômicas reconhecíveis\n- Alterações morfológicas evidentes\n- Sinais de gravidade`,
};

const CLASSIFIER_PROMPT = `Você é um classificador de imagens médicas. Para CADA imagem enviada, responda APENAS com JSON válido (sem markdown, sem texto extra) no formato:
{"items":[{"i":1,"modality":"RX|TC|RM|USG|ECG|FOTO_PELE|FOTO_FERIDA|OUTRO","region":"texto curto em PT-BR","key":"rx_torax|rx_abdome|rx_ossos|tc_cranio|tc_torax|tc_abdome|rm_cranio|usg_abdome|usg_obstetrica|usg_doppler|ecg|pele_ferida|generico"}]}
A "key" deve ser a melhor correspondência aos checklists disponíveis. Use "generico" apenas se nenhum se encaixar.`;

const SYSTEM_PROMPT_IMAGE = `Você é um médico radiologista assistente do PULSO Emergência.
Analise a imagem clínica enviada (radiografia, TC, RM, USG, ECG impresso, ferida, lesão de pele, etc.) com o máximo rigor.

REGRAS OBRIGATÓRIAS:
1. Português do Brasil. Linguagem técnica mas clara para o médico generalista de plantão.
2. Baseie-se em diretrizes brasileiras (CBR, SBC, MS, AMIB) e internacionais (Fleischner, ACR, ESR) quando aplicáveis.
3. NUNCA invente achados. Se a imagem tem qualidade ruim ou não permite análise → declarar explicitamente.
4. Seja CAUTELOSO: laudos automáticos por IA têm taxa de erro. Sempre recomendar correlação clínica e laudo formal por radiologista.
5. NÃO dê diagnóstico definitivo — apenas hipóteses ordenadas por probabilidade.
6. Para ECG: comente ritmo, frequência, eixo, intervalos (PR/QRS/QT), alterações ST-T, sinais de isquemia/sobrecarga.
7. Use o CHECKLIST DIRECIONADO fornecido (quando disponível) como roteiro mínimo de itens a comentar — marque cada item como presente, ausente ou não avaliável.

FORMATO OBRIGATÓRIO (markdown, exatamente estes H2):

## TIPO DE EXAME
[Modalidade + região + projeção/corte — confirmar ou corrigir a classificação automática]

## QUALIDADE TÉCNICA
[Adequada / Limitada — descrever limitações]

## CHECKLIST DIRECIONADO
- [item 1: presente/ausente/não avaliável — descrição]
- [item 2: ...]

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

    if (!Deno.env.get("GEMINI_API_KEY")) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY não configurada" }), {
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

    // ─── Passo 1: classificação automática (modalidade + região) ───
    interface Classification { i: number; modality: string; region: string; key: string }
    let classifications: Classification[] = [];
    if (hasImages) {
      try {
        const clsContent: Array<Record<string, unknown>> = [
          { type: "text", text: `Classifique as ${images.length} imagem(ns) abaixo na ordem.` },
        ];
        images.forEach((url) => clsContent.push({ type: "image_url", image_url: { url } }));

        const clsResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-lite",
            messages: [
              { role: "system", content: CLASSIFIER_PROMPT },
              { role: "user", content: clsContent },
            ],
            response_format: { type: "json_object" },
          }),
        });
        if (clsResp.ok) {
          const clsData = await clsResp.json();
          const raw = clsData?.choices?.[0]?.message?.content ?? "{}";
          const parsed = JSON.parse(raw);
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
        } else {
          console.warn("[image-analysis] classifier failed status=", clsResp.status);
        }
      } catch (e) {
        console.warn("[image-analysis] classifier error:", e);
      }
    }

    const isBatchImg = images.length > 1;
    const headerParts: string[] = [];
    if (hasImages && isBatchImg) {
      headerParts.push(`Lote com ${images.length} imagens da MESMA investigação — analise como sequência.`);
    }
    if (hasDocs) {
      headerParts.push(`${documents.length} documento(s) PDF anexado(s) (texto já extraído abaixo).`);
    }

    // Bloco de classificação + checklists direcionados
    let classificationBlock = "";
    if (classifications.length > 0) {
      const lines = classifications.map((c) => `- Imagem ${c.i}: ${c.modality} — ${c.region}`).join("\n");
      const uniqueKeys = Array.from(new Set(classifications.map((c) => c.key)));
      const checklistBlocks = uniqueKeys
        .map((k) => `### Checklist (${k}):\n${CHECKLISTS[k] ?? CHECKLISTS["generico"]}`)
        .join("\n\n");
      classificationBlock =
        `\n\nCLASSIFICAÇÃO AUTOMÁTICA (confirme ou corrija no laudo):\n${lines}\n\n` +
        `CHECKLISTS DIRECIONADOS — use como roteiro mínimo de itens a comentar:\n\n${checklistBlocks}\n`;
    }

    const header = headerParts.length ? headerParts.join(" ") + "\n" : "";

    const userText = header + classificationBlock + "\n" + (context.trim()
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
          { role: "system", content: systemPrompt },
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

    // ─── Passo 3: extração estruturada (resumo + alertas críticos) ───
    // Roda em paralelo ao retorno; se falhar, devolvemos a análise sem o bloco estruturado.
    interface CriticalAlert {
      level: "critico" | "atencao" | "informativo";
      label: string;
      value?: string;
      reference?: string;
      action?: string;
    }
    let summary = "";
    let alerts: CriticalAlert[] = [];
    try {
      const extractResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-lite",
          messages: [
            {
              role: "system",
              content:
                "Você extrai um resumo clínico e a lista de alertas críticos a partir de um laudo de IA já formatado em markdown. " +
                "REGRAS: (1) Português do Brasil. (2) Resumo: 2-3 frases focadas no que o médico precisa saber AGORA. " +
                "(3) Alertas SOMENTE para achados que exigem ação ou correlação imediata — valores fora da faixa, red flags clínicas, achados de imagem graves. " +
                "(4) Use 'critico' apenas para achados de pânico/risco iminente; 'atencao' para alterações relevantes; 'informativo' para observações úteis. " +
                "(5) Se não houver alteração relevante, retorne lista vazia. Não invente valores que não estejam no laudo.",
            },
            { role: "user", content: `Laudo a resumir:\n\n${analysis}` },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "extract_summary_and_alerts",
                description: "Extrai resumo executivo e lista de alertas críticos do laudo.",
                parameters: {
                  type: "object",
                  properties: {
                    summary: {
                      type: "string",
                      description: "Resumo clínico em 2-3 frases (máx. 400 caracteres).",
                    },
                    alerts: {
                      type: "array",
                      description: "Lista de alertas críticos. Vazia se nada relevante.",
                      items: {
                        type: "object",
                        properties: {
                          level: {
                            type: "string",
                            enum: ["critico", "atencao", "informativo"],
                          },
                          label: {
                            type: "string",
                            description: "Nome curto do achado (ex.: 'Hipercalemia', 'Pneumotórax', 'Supra de ST'). Máx. 60 chars.",
                          },
                          value: {
                            type: "string",
                            description: "Valor medido quando aplicável (ex.: 'K+ 6,8 mEq/L'). Opcional.",
                          },
                          reference: {
                            type: "string",
                            description: "Faixa de referência quando aplicável (ex.: '3,5-5,0 mEq/L'). Opcional.",
                          },
                          action: {
                            type: "string",
                            description: "Ação imediata sugerida em até 80 chars. Opcional.",
                          },
                        },
                        required: ["level", "label"],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ["summary", "alerts"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "extract_summary_and_alerts" } },
        }),
      });
      if (extractResp.ok) {
        const extractData = await extractResp.json();
        const toolCall = extractData?.choices?.[0]?.message?.tool_calls?.[0];
        const args = toolCall?.function?.arguments;
        if (typeof args === "string") {
          const parsed = JSON.parse(args);
          if (typeof parsed?.summary === "string") summary = parsed.summary.slice(0, 600);
          if (Array.isArray(parsed?.alerts)) {
            alerts = parsed.alerts
              .filter((a: any) => a && typeof a === "object" && typeof a.label === "string")
              .map((a: any) => ({
                level: ["critico", "atencao", "informativo"].includes(a.level) ? a.level : "atencao",
                label: String(a.label).slice(0, 80),
                value: typeof a.value === "string" ? a.value.slice(0, 80) : undefined,
                reference: typeof a.reference === "string" ? a.reference.slice(0, 80) : undefined,
                action: typeof a.action === "string" ? a.action.slice(0, 120) : undefined,
              }))
              .slice(0, 12);
          }
        }
      } else {
        console.warn("[image-analysis] extractor failed status=", extractResp.status);
      }
    } catch (e) {
      console.warn("[image-analysis] extractor error:", e);
    }

    // Conta uso (best-effort)
    bumpAiUsage(serviceClient, userId, "clinical-ai").catch((e) =>
      console.error("bumpAiUsage failed:", e),
    );
    console.log(`[image-analysis] user=${userId} tier=${tier} used=${used + 1}/${limit} batch=${images.length} cls=${classifications.length} alerts=${alerts.length}`);

    return new Response(JSON.stringify({ analysis, classifications, summary, alerts }), {
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
