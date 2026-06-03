import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota, bumpAiUsage, hashPrompt, lookupCache, storeCache } from "../_shared/aiQuota.ts";
import { geminiChat } from "../_shared/gemini.ts";

const FEATURE = "voice-evolution";
const MODEL = "google/gemini-2.5-flash-lite";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ── Prompts por formato ──────────────────────────────────────────────────────
function buildPrompt(format: string, context: string): string {
  const ctx = {
    ps: "Pronto-Socorro / UPA",
    uti: "UTI / Terapia Intensiva",
    enfermaria: "Enfermaria hospitalar",
    ambulatorio: "Ambulatório / Consulta eletiva",
  }[context] ?? "Pronto-Socorro";

  const base = `Você é um médico experiente trabalhando em ${ctx} no Brasil. Escreva em português médico formal. Use marcadores e seções claras. Inclua CID-10 quando mencionado ou óbvio. Se dados estiverem ausentes, escreva "Não informado". Nunca invente dados clínicos não presentes no relato. Ao final, adicione a linha: ⚕️ Uso exclusivo por profissional de saúde habilitado.`;

  const prompts: Record<string, string> = {
    SOAP: `${base}

Estruture a evolução no formato SOAP:

**S — Subjetivo**
Queixas e sintomas relatados pelo paciente ou acompanhante. Início, duração, intensidade, fatores de melhora/piora, sintomas associados.

**O — Objetivo**
Sinais vitais, exame físico, exames laboratoriais e de imagem relevantes.

**A — Avaliação**
Hipóteses diagnósticas principais e diferenciais. CID-10 quando aplicável.

**P — Plano**
Condutas, medicamentos (dose, via, frequência), exames solicitados, orientações, encaminhamentos.`,

    "I-PASS": `${base}

Estruture no formato I-PASS para passagem de plantão segura:

**I — Illness Severity (Gravidade)**
Estável / Em observação / Instável / Crítico. Justificativa breve.

**P — Patient Summary (Resumo do Paciente)**
Identificação, diagnóstico principal, histórico relevante, eventos do plantão.

**A — Action List (Lista de Ações)**
Pendências: exames aguardando resultado, condutas iniciadas, reavaliações necessárias.

**S — Situation Awareness (Situação e Plano Contingencial)**
O que pode mudar? Se piorar, o que fazer? Alertas críticos.

**S — Synthesis (Síntese para o Plantonista)**
Mensagem-chave para quem assume o paciente.`,

    ADMISSAO: `${base}

Gere um registro de admissão completo:

**IDENTIFICAÇÃO**
Dados do paciente conforme informado.

**MOTIVO DA ADMISSÃO / QUEIXA PRINCIPAL**

**HISTÓRIA DA DOENÇA ATUAL (HDA)**
Relato cronológico detalhado com início, progressão, fatores associados.

**ANTECEDENTES PESSOAIS**
Comorbidades, cirurgias prévias, internações.

**MEDICAMENTOS EM USO**
Lista de medicamentos (incluindo dose se mencionada) e alergias.

**EXAME FÍSICO**
Sinais vitais e achados relevantes de cada sistema.

**HIPÓTESES DIAGNÓSTICAS**
Diagnóstico principal e diferenciais (com CID-10).

**CONDUTA INICIAL**
Primeiros atendimentos, exames solicitados, medicamentos prescritos.

**PLANO DE INTERNAÇÃO**
Objetivos do tratamento, monitorização, critérios de alta.`,

    SBAR: `${base}

Gere uma comunicação de transferência/handoff no formato SBAR:

**S — Situation (Situação Atual)**
Nome, idade, diagnóstico principal, motivo da transferência em 2-3 linhas.

**B — Background (Contexto Clínico)**
História relevante, comorbidades, medicamentos em uso, evolução durante a internação.

**A — Assessment (Avaliação Atual)**
Estado atual do paciente: estável/instável, últimos sinais vitais, achados críticos, exames pendentes.

**R — Recommendation (Recomendações)**
O que o próximo médico/serviço precisa fazer: monitorizar, medicamentos, procedimentos, consultas.

**ALERTAS DE SEGURANÇA**
Alergias, riscos específicos, cuidados especiais.`,

    ALTA: `${base}

Gere um sumário de alta hospitalar completo:

**DADOS DA INTERNAÇÃO**
Data de admissão, data de alta, unidade, tempo de internação.

**DIAGNÓSTICO PRINCIPAL** (CID-10)
**DIAGNÓSTICOS SECUNDÁRIOS** (CID-10 quando aplicável)

**RESUMO DA INTERNAÇÃO**
Motivo da admissão, evolução clínica resumida, procedimentos realizados, intercorrências.

**EXAMES RELEVANTES**
Resultados mais importantes durante a internação.

**CONDIÇÃO NA ALTA**
Estado do paciente na saída (estável/melhora/alta a pedido).

**PRESCRIÇÃO DE ALTA**
Medicamentos (nome, dose, via, frequência, duração).

**ORIENTAÇÕES E RESTRIÇÕES**
Dieta, atividade física, curativos, cuidados especiais.

**RETORNO / ENCAMINHAMENTOS**
Consultas agendadas, retorno à emergência se sinais de alarme, encaminhamentos.

**SINAIS DE ALARME PARA RETORNO**
Quando voltar ao PS/emergência.`,
  };

  return prompts[format] ?? prompts["SOAP"];
}

// ── Handler ──────────────────────────────────────────────────────────────────
serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ctx = await verifyAuthAndQuota(req, FEATURE);
    if (ctx instanceof Response) return ctx;

    const { transcription, format = "SOAP", context = "ps" } = await req.json();
    if (!transcription) {
      return new Response(JSON.stringify({ error: "transcription is required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = buildPrompt(format, context);
    const userMessage = `Relato clínico (${format} — ${context}):\n\n${transcription}`;
    const cacheKey = `${format}::${context}`;

    const promptHash = await hashPrompt(`${systemPrompt}::${userMessage}`);
    const cached = await lookupCache(ctx.serviceClient, promptHash, FEATURE, MODEL, cacheKey);
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

    const response = await geminiChat({
      model: MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      stream: true,
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
        for (const line of text.split("\n")) {
          if (line.startsWith("data: ") && !line.includes("[DONE]")) {
            try {
              const delta = JSON.parse(line.slice(6)).choices?.[0]?.delta?.content;
              if (delta) fullResponse += delta;
            } catch { /* ignore partial */ }
          }
        }
        controller.enqueue(chunk);
      },
      async flush() {
        if (fullResponse.length > 0) {
          await bumpAiUsage(ctx.serviceClient, ctx.userId, FEATURE);
          await storeCache(ctx.serviceClient, promptHash, FEATURE, MODEL, cacheKey, fullResponse);
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
