import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { prescription, allergies, patient_info } = await req.json();
    if (!prescription) {
      return new Response(JSON.stringify({ error: "prescription is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Você é um farmacêutico clínico especialista em segurança de prescrições médicas. Analise a prescrição completa abaixo e retorne TODOS os alertas encontrados.

## Você deve verificar:

### 1. INTERAÇÕES MEDICAMENTOSAS
- Identifique TODOS os pares de medicamentos com interação
- Classifique: 🔴 GRAVE (risco de vida), 🟡 MODERADA (monitorar), 🟢 LEVE (atenção)
- Explique o mecanismo farmacológico e a conduta

### 2. DOSES EXCESSIVAS OU INADEQUADAS
- Verifique se as doses estão dentro da faixa terapêutica
- Considere informações do paciente (peso, idade, função renal se informados)
- Alerte sobre doses subterapêuticas ou supraterapêuticas

### 3. ALERGIAS CRUZADAS
- Se alergias foram informadas, verifique reações cruzadas com TODOS os medicamentos
- Ex: alergia a penicilina → risco com cefalosporinas
- Ex: alergia a AINEs → risco com outros AINEs
- Ex: alergia a sulfa → risco com sulfoniluréias, tiazídicos

### 4. INCOMPATIBILIDADES EV (INTRAVENOSAS)
- Se houver medicamentos EV na prescrição, verifique compatibilidade em Y
- Alerte sobre precipitações, mudanças de pH, inativações

### 5. DUPLICIDADES TERAPÊUTICAS
- Identifique se há dois ou mais fármacos da mesma classe sem justificativa
- Ex: dois AINEs, dois IBPs, dois benzodiazepínicos

### 6. OMISSÕES IMPORTANTES
- Sugira proteções que podem estar faltando (ex: IBP com corticoide + AINE, antiemético com opioide)

## Formato de resposta (em Markdown):

### 📊 Resumo da Análise
- Total de medicamentos: X
- Alertas graves: X | Moderados: X | Leves: X

### 🔴 Alertas Graves
(listar cada um com medicamentos envolvidos, mecanismo e conduta)

### 🟡 Alertas Moderados
(listar cada um)

### 🟢 Alertas Leves
(listar cada um)

### 💊 Sugestões de Otimização
(ajustes de dose, horário, proteções faltando)

### ✅ Medicamentos sem alertas
(listar os que não apresentaram problemas)

Se não houver alertas em alguma categoria, escreva "Nenhum alerta nesta categoria."
Seja preciso e baseado em evidências. Cite referências quando possível.`;

    const userMessage = [
      "Prescrição completa para análise:",
      prescription,
      allergies ? `\nAlergias do paciente: ${allergies}` : "",
      patient_info ? `\nDados do paciente: ${patient_info}` : "",
    ].filter(Boolean).join("\n");

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
          { role: "user", content: userMessage },
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
    console.error("prescription-check error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
