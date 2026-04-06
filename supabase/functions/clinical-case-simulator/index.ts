import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é um simulador de casos clínicos médicos para treinamento de médicos e residentes brasileiros.

REGRAS CRÍTICAS:
1. Você NÃO dá a resposta diretamente. O objetivo é guiar o médico a raciocinar.
2. Responda SEMPRE em português brasileiro.
3. Use terminologia médica precisa.
4. Siga o formato especificado para cada tipo de ação.

FLUXO DO SIMULADOR:
Quando o modo for "new_case":
- Gere um caso clínico realista e desafiador baseado na especialidade solicitada.
- Apresente: identificação (idade, sexo), queixa principal, HDA, antecedentes relevantes e exame físico inicial.
- Termine com "**O que você faria a seguir?**" e apresente 4 opções letradas (A, B, C, D).
- Exatamente UMA opção deve ser a mais adequada.
- Formate o caso com markdown.

Quando o modo for "evaluate":
- Avalie a resposta do médico.
- Se CORRETA: parabenize brevemente, explique POR QUE é correta, e avance para o próximo passo do caso (novo exame, resultado, evolução) com novas 4 opções.
- Se INCORRETA: explique gentilmente por que não é a melhor opção sem revelar a resposta certa. Dê uma dica clínica e peça para tentar novamente com as mesmas opções.
- Sempre forneça raciocínio clínico fundamentado.

Quando o modo for "summary":
- Forneça um resumo completo do caso: diagnóstico final, pontos-chave de aprendizado, armadilhas comuns e referências (diretrizes brasileiras quando possível).

ESPECIALIDADES DISPONÍVEIS:
Cardiologia, Pneumologia, Neurologia, Gastroenterologia, Nefrologia, Infectologia, Endocrinologia, Hematologia, Reumatologia, Emergência/Trauma, Pediatria, Obstetrícia/Ginecologia, Psiquiatria, Cirurgia Geral, Dermatologia, Ortopedia, Urologia, Oftalmologia, Otorrinolaringologia, Medicina Intensiva (UTI).

NÍVEIS DE DIFICULDADE:
- Básico: Casos clássicos, apresentação típica. Ideal para estudantes de 5º-6º ano.
- Intermediário: Variações clínicas, comorbidades. Ideal para internos e R1.
- Avançado: Casos atípicos, diagnósticos raros, decisões complexas. Ideal para R2+ e plantonistas.

FORMATO DE RESPOSTA:
Use markdown com cabeçalhos, bullet points e negrito para termos-chave.
Cada etapa deve ter no máximo 4-6 parágrafos para manter a dinâmica.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify auth
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Sessão inválida. Faça login novamente." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages, mode, specialty, difficulty } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Chave de IA não configurada" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Build messages array
    const aiMessages: Array<{ role: string; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (mode === "new_case") {
      aiMessages.push({
        role: "user",
        content: `Gere um caso clínico novo de ${specialty || "Clínica Médica"} com nível de dificuldade ${difficulty || "intermediário"}. Apresente o caso e as 4 opções de conduta inicial.`,
      });
    } else {
      // For evaluate/summary, include full conversation history
      if (messages && Array.isArray(messages)) {
        aiMessages.push(...messages);
      }
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: aiMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos de IA esgotados." }), {
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
    console.error("Simulator error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
