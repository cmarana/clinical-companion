import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

type Scenario = "PS" | "UTI" | "UBS" | "SAMU" | "ENFERMARIA" | "HOSPITAL" | "NÃO INFORMADO";

type Focus = "PULMONAR" | "URINÁRIO" | "ABDOMINAL" | "PELE/TECIDOS" | "SNC" | "SEM FOCO DEFINIDO";

interface PatientContext {
  weightKg?: number;
  ageYears?: number;
  creatinineMgDl?: number;
  sex?: "M" | "F";
  allergies?: string;
  scenario: Scenario;
  focus: Focus;
  clcrMlMin?: number;
  clcrNote?: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const DRUG_DB = `BANCO CLÍNICO DE FÁRMACOS (resumo operacional)
- Noradrenalina: 0,1-2 mcg/kg/min BIC; diluição usual 16mg/250mL (64 mcg/mL); primeira linha no choque séptico.
- Adrenalina: PCR 1mg IV a cada 3-5 min; anafilaxia 0,3-0,5mg IM.
- Amiodarona: PCR 300mg IV; TV estável 150mg/10min → manutenção; interação forte com warfarina/digoxina.
- Piperacilina-tazobactam: 4,5g 6/6h (ajustar ClCr).
- Meropenem: 1-2g 8/8h (ajustar ClCr; reduz níveis de valproato).
- Ceftriaxona: 1-2g 12/12h (não é esquema universal; escolher por foco/cenário).
- Vancomicina: 15-20mg/kg; monitorar função renal e alvo terapêutico.
- Enoxaparina: 1mg/kg 12/12h (TEV terapêutico); se ClCr<30, preferir 1mg/kg 1x/dia ou HNF conforme protocolo local.
- HNF: bolus 80 UI/kg + 18 UI/kg/h; ajustar por TTPa.
- Furosemida: 40-80mg IV; monitorar K/Mg.
- Insulina regular: CAD 0,1 UI/kg/h IV; monitorar K+.
- MgSO4: eclâmpsia 4g ataque + manutenção; antídoto gluconato de cálcio.
`;

const CORE_PROMPT = `Você é um motor clínico para plantão no Brasil. Você NÃO é chatbot. Você é um pipeline de validação médica.

${DRUG_DB}

FILOSOFIA: AÇÃO PRIMEIRO. Máximo 1 frase de contexto antes das prioridades.

FORMATO OBRIGATÓRIO (nesta ordem exata, sem pular nenhuma):
1. 📋 RESUMO — máximo 2 linhas. Impressão + gravidade.
2. 🎯 DIAGNÓSTICO — hipótese principal + 2-3 diferenciais em tabela (Hipótese | Probabilidade | Argumento).
3. ⚡ PRIORIDADES — lista numerada 1-5 de ações IMEDIATAS (verbo imperativo, sem explicação).
4. 🔄 ALGORITMO — fluxo com setas (→ ↓). Ex: PAM<65 → Volume 30ml/kg → Nora se refratário → UTI.
5. 🔬 EXAMES — divididos em "Imediatos" e "Complementares".
6. 💊 CONDUTA + PRESCRIÇÃO — doses calculadas. Se peso disponível, mostrar cálculo: "dose × peso = resultado". Se peso AUSENTE, escrever "⚠️ DOSE PENDENTE — informar peso" e NÃO inventar peso.
7. ⚠️ INTERAÇÕES — incluir: droga-droga, droga-renal, droga-eletrólitos, droga-idade. Classificar 🔴🟡🟢.
8. 🚨 ALERTAS — red flags, contraindicações absolutas.
9. 📚 REFERÊNCIAS — diretrizes brasileiras quando possível.
10. ❓ PERGUNTAS — 2-5 perguntas objetivas para refinar conduta. Sempre perguntar dados faltantes.

REGRAS MATEMÁTICAS CRÍTICAS (você é um motor, não LLM):
- NUNCA invente peso. Se peso ausente → NÃO calcular mg/kg, mcg/kg/min, UI/kg. Pedir na seção PERGUNTAS.
- Se ClCr foi calculado na pré-validação, MOSTRAR a fórmula completa:
  "Cockcroft-Gault: ((140 - idade) × peso) / (72 × Cr) [× 0.85 se F] = X mL/min"
- Conferir TODA aritmética antes de responder. Exemplo: 0.1 mcg/kg/min × 64 kg = 6.4 mcg/min (NÃO 0.64).
- Doses absolutas: sempre mostrar "fórmula = resultado". Ex: "25 UI/kg × 64 kg = 1600 UI".

REGRAS DE VALIDAÇÃO PRÉ-PRESCRIÇÃO (checklist mental antes de prescrever):
✅ Peso confirmado? (não estimado)
✅ Alergias checadas contra cada droga?
✅ Função renal avaliada? Ajuste necessário?
✅ Interações checadas entre TODAS as drogas prescritas?
✅ Cenário (PS/UTI/UBS/SAMU) considerado na escolha?
Se algum item faltar → avisar explicitamente e pedir na seção PERGUNTAS.

REGRAS DE ANTIBIÓTICO:
- NUNCA prescrever antibiótico genérico. Sempre adaptar por: foco infeccioso, cenário (comunitário vs hospitalar), uso prévio de ATB, gravidade, perfil de resistência local.
- Se foco/cenário não informados → perguntar ANTES de prescrever. Oferecer cobertura empírica inicial com ressalva.

DISCLAIMER: apoio à decisão clínica; responsabilidade final é do médico assistente.`;

function parseNumber(input?: string | null): number | undefined {
  if (!input) return undefined;
  const sanitized = input.replace(/,/g, ".").replace(/[^0-9.]/g, "").trim();
  if (!sanitized) return undefined;
  const n = Number(sanitized);
  return Number.isFinite(n) ? n : undefined;
}

function firstMatch(text: string, patterns: RegExp[]): string | undefined {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return undefined;
}

function extractScenario(text: string): Scenario {
  if (/\bUTI\b/i.test(text)) return "UTI";
  if (/\bSAMU\b/i.test(text)) return "SAMU";
  if (/\bUBS\b|atenção primária|ambulatório/i.test(text)) return "UBS";
  if (/\bPS\b|pronto[-\s]?socorro|emergência|upa/i.test(text)) return "PS";
  if (/enfermaria/i.test(text)) return "ENFERMARIA";
  if (/hospitalar|hospital/i.test(text)) return "HOSPITAL";
  return "NÃO INFORMADO";
}

function extractFocus(text: string): Focus {
  if (/pulmonar|pneumonia|respirat/i.test(text)) return "PULMONAR";
  if (/urin[aá]r|pielo|cistite|itu/i.test(text)) return "URINÁRIO";
  if (/abdominal|intra[-\s]?abdominal|colecist|apendic|periton/i.test(text)) return "ABDOMINAL";
  if (/pele|tecido|celulite|ferida|partes moles/i.test(text)) return "PELE/TECIDOS";
  if (/mening|sistema nervoso|snc|encefal/i.test(text)) return "SNC";
  return "SEM FOCO DEFINIDO";
}

function calcClcr(ageYears?: number, weightKg?: number, creatinineMgDl?: number, sex?: "M" | "F") {
  if (!ageYears || !weightKg || !creatinineMgDl || creatinineMgDl <= 0) return { value: undefined as number | undefined, note: undefined as string | undefined };

  const maleBase = ((140 - ageYears) * weightKg) / (72 * creatinineMgDl);
  if (sex === "F") {
    return { value: Number((maleBase * 0.85).toFixed(1)), note: "Cockcroft-Gault (feminino)" };
  }
  if (sex === "M") {
    return { value: Number(maleBase.toFixed(1)), note: "Cockcroft-Gault (masculino)" };
  }

  return {
    value: Number(maleBase.toFixed(1)),
    note: "Cockcroft-Gault sem sexo informado (estimativa base masculina; confirmar sexo para ajuste)",
  };
}

function extractPatientContext(messages: ChatMessage[]): PatientContext {
  const userText = messages
    .filter((m) => m.role === "user")
    .map((m) => String(m.content || ""))
    .join("\n");

  const weightRaw = firstMatch(userText, [
    /peso\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)\s*kg/i,
    /\b([0-9]+(?:[.,][0-9]+)?)\s*kg\b/i,
  ]);

  const ageRaw = firstMatch(userText, [
    /idade\s*[:=]\s*([0-9]{1,3})/i,
    /\b([0-9]{1,3})\s*anos?\b/i,
  ]);

  const creatRaw = firstMatch(userText, [
    /creatinina\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)/i,
    /\bcr\s*[:=]\s*([0-9]+(?:[.,][0-9]+)?)/i,
  ]);

  const sexRaw = firstMatch(userText, [
    /sexo\s*[:=]\s*(masculino|feminino|m|f)\b/i,
    /\b(sexo\s*m|sexo\s*f)\b/i,
  ])?.toLowerCase();

  let sex: "M" | "F" | undefined;
  if (sexRaw) {
    if (sexRaw.includes("masc") || /\bm\b/.test(sexRaw)) sex = "M";
    if (sexRaw.includes("fem") || /\bf\b/.test(sexRaw)) sex = "F";
  }

  const allergies = firstMatch(userText, [
    /alergias?\s*[:=]\s*([^\n\]]+)/i,
  ]);

  const weightKg = parseNumber(weightRaw);
  const ageYears = parseNumber(ageRaw);
  const creatinineMgDl = parseNumber(creatRaw);
  const clcr = calcClcr(ageYears, weightKg, creatinineMgDl, sex);

  return {
    weightKg,
    ageYears,
    creatinineMgDl,
    sex,
    allergies,
    scenario: extractScenario(userText),
    focus: extractFocus(userText),
    clcrMlMin: clcr.value,
    clcrNote: clcr.note,
  };
}

function buildValidationGate(ctx: PatientContext): string {
  let clcrFormula = "❌ Não calculável (faltam dados)";
  if (ctx.clcrMlMin && ctx.ageYears && ctx.weightKg && ctx.creatinineMgDl) {
    const sexFactor = ctx.sex === "F" ? " × 0.85" : "";
    const sexLabel = ctx.sex === "F" ? " (feminino)" : ctx.sex === "M" ? " (masculino)" : "";
    clcrFormula = `✅ ((140 - ${ctx.ageYears}) × ${ctx.weightKg}) / (72 × ${ctx.creatinineMgDl})${sexFactor} = ${ctx.clcrMlMin} mL/min${sexLabel}`;
  }

  const checklist = [
    `- Peso: ${ctx.weightKg ? `✅ ${ctx.weightKg} kg (CONFIRMADO — usar para cálculos)` : "❌ NÃO INFORMADO — PROIBIDO estimar. Pedir ao usuário."}`,
    `- Idade: ${ctx.ageYears ? `✅ ${ctx.ageYears} anos` : "❌ NÃO"}`,
    `- Creatinina: ${ctx.creatinineMgDl ? `✅ ${ctx.creatinineMgDl} mg/dL` : "❌ NÃO"}`,
    `- Sexo: ${ctx.sex ? `✅ ${ctx.sex}` : "❌ NÃO — perguntar para ajuste de ClCr"}`,
    `- Alergias: ${ctx.allergies ? `✅ "${ctx.allergies}" — CHECAR contra cada droga prescrita` : "❌ NÃO INFORMADO — perguntar antes de prescrever"}`,
    `- Cenário: ${ctx.scenario !== "NÃO INFORMADO" ? `✅ ${ctx.scenario}` : "❌ NÃO INFORMADO — perguntar (PS/UTI/UBS/SAMU/Enfermaria)"}`,
    `- Foco infeccioso: ${ctx.focus !== "SEM FOCO DEFINIDO" ? `✅ ${ctx.focus}` : "❌ NÃO DEFINIDO — perguntar se suspeita infecciosa"}`,
    `- ClCr (Cockcroft-Gault): ${clcrFormula}`,
  ].join("\n");

  const missing: string[] = [];
  if (!ctx.weightKg) missing.push("peso");
  if (!ctx.sex) missing.push("sexo");
  if (!ctx.allergies) missing.push("alergias");
  if (ctx.scenario === "NÃO INFORMADO") missing.push("cenário");

  const missingWarning = missing.length > 0
    ? `\n⚠️ DADOS CRÍTICOS FALTANTES: ${missing.join(", ")}. OBRIGATÓRIO perguntar na seção PERGUNTAS.`
    : "\n✅ Todos os dados críticos presentes. Prosseguir com cálculos completos.";

  return `PRÉ-VALIDAÇÃO DO PIPELINE (executado automaticamente antes da resposta):

DADOS DO PACIENTE:
${checklist}
${missingWarning}

PIPELINE DE EXECUÇÃO:
1) ✅ Dados extraídos e validados acima
2) ${ctx.clcrMlMin ? "✅" : "⏳"} Função renal ${ctx.clcrMlMin ? `calculada: ${ctx.clcrMlMin} mL/min` : "pendente"}
3) ${ctx.scenario !== "NÃO INFORMADO" ? "✅" : "⏳"} Protocolo por cenário ${ctx.scenario !== "NÃO INFORMADO" ? ctx.scenario : "pendente"}
4) ${ctx.focus !== "SEM FOCO DEFINIDO" ? "✅" : "⏳"} Antibiótico por foco ${ctx.focus !== "SEM FOCO DEFINIDO" ? ctx.focus : "pendente"}
5) Validar dose no banco de fármacos → NA RESPOSTA
6) Validar interações (droga-droga + renal + eletrólitos + idade) → NA RESPOSTA
7) Gerar resposta no formato obrigatório de 10 seções

INSTRUÇÕES ARITMÉTICAS:
- Toda dose por kg: mostrar "dose × peso = resultado"
- ClCr: mostrar fórmula completa Cockcroft-Gault com números
- Conferir multiplicações (ex: 0.1 × 64 = 6.4, NÃO 0.64)
- Diluições: mostrar concentração final (ex: 16mg/250mL = 64 mcg/mL)`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const mode = body?.mode;

    const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
    const messages: ChatMessage[] = rawMessages
      .map((m: unknown) => {
        const role = typeof (m as { role?: string })?.role === "string" ? (m as { role: string }).role : "user";
        const content = typeof (m as { content?: string })?.content === "string" ? (m as { content: string }).content : "";
        return {
          role: role === "assistant" || role === "system" ? role : "user",
          content: content.slice(0, 12000),
        } as ChatMessage;
      })
      .filter((m) => m.content.trim().length > 0);

    if (!messages.length) {
      return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const patientContext = extractPatientContext(messages);
    const validationGate = buildValidationGate(patientContext);

    const systemMessages: ChatMessage[] = [
      { role: "system", content: CORE_PROMPT },
      { role: "system", content: validationGate },
    ];

    if (mode === "structured") {
      systemMessages.push({
        role: "system",
        content: "Modo estruturado: mantenha concisão operacional no início, priorize checklist de ações imediatas e solicite dados faltantes críticos antes de fechar prescrição por kg.",
      });
    }

    if (mode === "interactions") {
      systemMessages.push({
        role: "system",
        content:
          "Modo interações: para cada combinação, classifique gravidade (🔴🟡🟢), mecanismo, impacto clínico e conduta. Inclua sempre risco renal, eletrólitos e faixa etária.",
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [...systemMessages, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes. Adicione créditos para continuar." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("clinical-ai error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
