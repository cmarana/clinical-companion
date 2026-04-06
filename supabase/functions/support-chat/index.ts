import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é o assistente de suporte do PULSO — um aplicativo médico de referência rápida para emergências, protocolos clínicos, calculadoras médicas, prescrições e estudo para residência.

Seu objetivo é ajudar usuários com dúvidas sobre o uso do app, funcionalidades, assinatura e problemas técnicos.

## Funcionalidades do PULSO:
- **Protocolos Clínicos**: +300 protocolos de emergência, cardiologia, neurologia, pediatria, obstetrícia, etc.
- **IA Clínica**: Chat com IA para suporte à decisão clínica (recurso Premium)
- **Bulário**: Base de medicamentos com doses, interações, ajustes renais/hepáticos
- **Calculadoras Médicas**: Glasgow, SOFA, CURB-65, Wells, dose pediátrica, etc.
- **Prescrições**: Modelos prontos organizados por diagnóstico e situação
- **Modo Plantão**: Cronômetro de plantão, notas de leito, checklist de passagem
- **Timer PCR**: Cronômetro para parada cardiorrespiratória
- **Interações Medicamentosas**: Verificador de interações entre drogas
- **Diluições IV**: Guia de diluições intravenosas
- **Flashcards / Quiz**: Estudo para residência com repetição espaçada
- **Evolução por Voz**: Transcrição de voz para evolução SOAP/I-PASS (Premium)
- **Notas**: Bloco de notas pessoal do médico
- **Favoritos**: Salvar protocolos e medicamentos favoritos
- **Modo Offline**: Acesso a conteúdos sem internet

## Sobre Assinatura Premium:
- Plano PRO: R$29,90/mês com 7 dias grátis de teste
- Recursos Premium: IA Clínica, Evolução por Voz, Simulador de Casos, Comparador de Condutas, Gerador de Documentos
- Pagamento via cartão de crédito/débito (Stripe)
- Gerenciamento da assinatura pelo app em Conta > Gerenciar Assinatura
- Cancelamento a qualquer momento

## Instruções:
- Responda APENAS sobre o PULSO e suas funcionalidades
- Seja breve, claro e amigável
- Se não souber a resposta, sugira que o usuário entre em contato por e-mail
- NÃO dê conselhos médicos — redirecione para a IA Clínica do app
- Responda sempre em português brasileiro
- Use markdown para formatar respostas quando útil`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("support-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
