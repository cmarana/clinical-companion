import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const { patient_name, age, sex, admission_date, discharge_date, diagnosis, comorbidities, hospital_course, procedures, exams, medications_discharge, follow_up, extra_notes } = body;

    if (!patient_name && !diagnosis && !hospital_course) {
      return new Response(JSON.stringify({ error: "Preencha ao menos nome, diagnóstico ou evolução hospitalar." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Você é um médico hospitalar experiente. Gere um RESUMO DE ALTA HOSPITALAR completo, profissional e formatado para impressão, com base nas informações fornecidas.

## Estrutura obrigatória do Resumo de Alta:

### IDENTIFICAÇÃO
- Nome, idade, sexo
- Data de internação e alta
- Tempo de internação

### DIAGNÓSTICOS
- Diagnóstico principal (com CID-10)
- Diagnósticos secundários / comorbidades

### HISTÓRIA DA INTERNAÇÃO
- Motivo da internação
- Evolução clínica durante a internação
- Intercorrências relevantes

### PROCEDIMENTOS REALIZADOS
- Cirurgias, procedimentos invasivos, transfusões

### EXAMES RELEVANTES
- Últimos resultados laboratoriais
- Exames de imagem relevantes

### CONDIÇÃO DE ALTA
- Estado clínico na alta
- Sinais vitais de alta (se informados)

### PRESCRIÇÃO DE ALTA
- Medicamentos com dose, via, posologia e duração
- Formatado em lista numerada

### ORIENTAÇÕES AO PACIENTE
- Cuidados domiciliares
- Sinais de alerta para retorno ao PS
- Restrições (dieta, atividade física)

### SEGUIMENTO
- Retorno ambulatorial (especialidade, prazo)
- Exames de controle solicitados

### MÉDICO RESPONSÁVEL
- Espaço para assinatura, nome e CRM

## Regras:
- Se alguma informação não foi fornecida, omita a seção (NÃO escreva "não informado")
- Use linguagem médica formal e objetiva
- Inclua CID-10 quando possível
- Formate para impressão: use headers claros e espaçamento
- O resumo deve ser pronto para anexar ao prontuário`;

    const userParts = [];
    if (patient_name) userParts.push(`Nome: ${patient_name}`);
    if (age) userParts.push(`Idade: ${age}`);
    if (sex) userParts.push(`Sexo: ${sex}`);
    if (admission_date) userParts.push(`Data de internação: ${admission_date}`);
    if (discharge_date) userParts.push(`Data de alta: ${discharge_date}`);
    if (diagnosis) userParts.push(`Diagnóstico: ${diagnosis}`);
    if (comorbidities) userParts.push(`Comorbidades: ${comorbidities}`);
    if (hospital_course) userParts.push(`Evolução hospitalar:\n${hospital_course}`);
    if (procedures) userParts.push(`Procedimentos: ${procedures}`);
    if (exams) userParts.push(`Exames relevantes:\n${exams}`);
    if (medications_discharge) userParts.push(`Medicamentos de alta:\n${medications_discharge}`);
    if (follow_up) userParts.push(`Seguimento: ${follow_up}`);
    if (extra_notes) userParts.push(`Observações adicionais:\n${extra_notes}`);

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
          { role: "user", content: userParts.join("\n") },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) return new Response(JSON.stringify({ error: "Limite de requisições excedido." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (status === 402) return new Response(JSON.stringify({ error: "Créditos de IA esgotados." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "Erro interno do servidor" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(response.body, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
  } catch (e) {
    console.error("discharge-summary error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
