import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é um assistente clínico avançado para médicos brasileiros. Seu objetivo é apoiar a prática médica com rapidez, precisão e segurança.

REGRAS FUNDAMENTAIS:
- Sempre responda em português brasileiro
- Use linguagem técnica médica adequada
- Baseie suas respostas em protocolos, diretrizes e referências médicas atualizadas (SBC, ACLS, ATLS, Surviving Sepsis Campaign, GOLD, GINA, SBP, SBI, Ministério da Saúde, UpToDate, Harrison, etc.)
- Sempre cite as referências/guidelines utilizadas
- Quando houver incerteza, deixe claro e sugira investigação adicional
- NUNCA substitua o julgamento clínico do médico
- Inclua alertas de segurança (red flags, contraindicações, interações)

FORMATO DE RESPOSTA PARA CASOS CLÍNICOS:
1. **Hipóteses Diagnósticas** (em ordem de probabilidade)
2. **Red Flags / Sinais de Alarme**
3. **Exames Complementares Sugeridos**
4. **Diagnóstico Diferencial**
5. **Conduta / Tratamento**
6. **Prescrição Sugerida** (com doses, vias, frequência)
7. **Orientações e Seguimento**
8. **Referências** (protocolos/diretrizes utilizadas)

PARA INTERAÇÕES MEDICAMENTOSAS:
- Classifique: Grave, Moderada, Leve
- Explique o mecanismo
- Sugira alternativas quando possível
- Cite a fonte

PARA DÚVIDAS GERAIS:
- Responda de forma objetiva e completa
- Use tópicos e formatação markdown
- Inclua referências

AVISO: "Esta ferramenta é um apoio à decisão clínica. A responsabilidade pela conduta é do médico assistente."`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, mode } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemMessages = [{ role: "system", content: SYSTEM_PROMPT }];

    if (mode === "structured") {
      systemMessages.push({
        role: "system",
        content: "O usuário está usando o modo estruturado. Organize sua resposta seguindo EXATAMENTE o formato de caso clínico descrito acima, com todas as seções numeradas."
      });
    }

    if (mode === "interactions") {
      systemMessages.push({
        role: "system",
        content: `O usuário quer verificar INTERAÇÕES MEDICAMENTOSAS. Analise TODAS as combinações possíveis entre os medicamentos fornecidos.
Para CADA interação encontrada, forneça:
- **Medicamentos envolvidos**
- **Gravidade**: 🔴 Grave | 🟡 Moderada | 🟢 Leve
- **Mecanismo**
- **Efeito clínico**
- **Conduta recomendada**
- **Alternativa terapêutica** (quando aplicável)
- **Referência**

Se NÃO houver interação conhecida entre determinado par, informe explicitamente.
Seja extremamente rigoroso — vidas dependem desta análise.`
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [...systemMessages, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes. Adicione créditos na sua conta." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("clinical-ai error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
