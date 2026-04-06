import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { transcription, format } = await req.json();
    if (!transcription || !format) {
      return new Response(JSON.stringify({ error: "transcription and format are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const soapPrompt = `Você é um médico especialista em documentação clínica. Receba o relato clínico abaixo (transcrito por voz) e estruture-o no formato SOAP completo.

## Formato SOAP:
### S — Subjetivo
Queixa principal, HDA (história da doença atual), história médica pregressa, medicações em uso, alergias, hábitos. Tudo que o paciente relata.

### O — Objetivo
Sinais vitais, exame físico, resultados de exames complementares mencionados.

### A — Avaliação
Hipóteses diagnósticas (principal e diferenciais), raciocínio clínico, classificação de risco se aplicável.

### P — Plano
Conduta terapêutica, exames solicitados, interconsultas, orientações, retorno.

## Regras:
- Se alguma informação não foi mencionada, escreva "Não informado" naquele item
- Use linguagem médica formal
- Organize em tópicos claros com marcadores
- Inclua CID-10 provável quando possível
- Mantenha fidelidade ao relato original`;

    const ipassPrompt = `Você é um médico especialista em passagem de plantão. Receba o relato clínico abaixo (transcrito por voz) e estruture-o no formato I-PASS para handoff seguro.

## Formato I-PASS:
### I — Illness Severity (Gravidade)
Classificação: Estável / Em observação / Instável. Justificativa clínica.

### P — Patient Summary (Resumo do Paciente)
Identificação, diagnóstico principal, breve história, eventos significativos durante internação/atendimento.

### A — Action List (Lista de Ações)
Pendências: exames aguardando resultado, medicações a ajustar, procedimentos programados, interconsultas solicitadas.

### S — Situation Awareness (Consciência Situacional)
O que pode mudar: sinais de alerta, plano B se piorar, parâmetros para reavaliação.

### S — Synthesis by Receiver (Síntese)
Resumo em 2-3 frases para confirmação. Pontos críticos a não esquecer.

## Regras:
- Se alguma informação não foi mencionada, escreva "Não informado"
- Use linguagem médica formal e objetiva
- Priorize informações de segurança do paciente
- Destaque alertas críticos em negrito
- Mantenha fidelidade ao relato original`;

    const systemPrompt = format === "SOAP" ? soapPrompt : ipassPrompt;

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
          { role: "user", content: `Relato clínico transcrito por voz:\n\n${transcription}` },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em instantes." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "Créditos de IA esgotados." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("AI gateway error:", status);
      return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("voice-evolution error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
