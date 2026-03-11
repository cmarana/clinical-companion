import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const DRUG_DB = `BANCO DE MEDICAMENTOS (consulte ANTES de prescrever):
Noradrenalina: 0,1-2mcg/kg/min BIC. Diluição: 4amp(16mg)+SF234ml(64mcg/ml). Acesso central. Interações: IMAO, Halotano. Nefrotóxica indireta(hipovolemia).
Adrenalina: PCR 1mg IV 3-5min. Anafilaxia 0,3-0,5mg IM coxa. BIC 0,1-0,5mcg/kg/min. Interações: Betabloq, Tricíclicos.
Amiodarona: PCR 300mg bolus. TV 150mg/10min→1mg/min 6h. SG5% APENAS. Interações: Warfarina(↑INR50%), Digoxina(↑70%), Simvastatina(rabdo→máx20mg), ↑QT com fluoroquinolonas.
Furosemida: EAP 40-80mg IV. BIC 5-40mg/h. Interações: Aminoglic(oto), Digoxina(hipoK→tox), AINE(↓efeito). Depleta K/Mg/Ca.
Ceftriaxona: 1-2g IV 12/12h. Meningite 2g 12/12h. NUNCA+cálcio IV neonato. Interações: Warfarina(↑INR).
Piperacilina-Tazo: 4,5g 6/6h. Nosocomial/abd. ClCr<20→ajustar. Interações: Metotrexato, Vancomicina(↑nefrotox).
Meropenem: 1-2g 8/8h. MDR/ESBL. Meningite 2g 8/8h. Interações: Ác valproico(↓nível 80%).
Vancomicina: 15-20mg/kg 8-12h. Vale 15-20. Infundir≥60min. Interações: Aminoglic(nefro), PipTazo(nefro↑). Ajustar ClCr.
Morfina: 2-5mg IV titular. Antídoto Naloxona. Interações: BZD(depressão resp), IMAO.
Midazolam: 0,03-0,1mg/kg IV. Antídoto Flumazenil. Interações: Opioides, Azólicos.
Fentanil: 1-2mcg/kg IV. 100x morfina. Interações: BZD, IMAO.
Cetamina: ISR 1-2mg/kg IV. Mantém drive resp+PA. CI: psicose.
Insulina Regular: CAD 0,1UI/kg/h BIC. HiperK 10UI+25gGlicose. Interações: Betabloq(mascara hipo), Corticoides.
Dobutamina: 2-20mcg/kg/min. Choque cardiogênico. Interações: Betabloq(antagonismo).
Enoxaparina: TEP 1mg/kg 12/12h. ClCr<30→HNF. Interações: AINEs, AAS.
HNF: 80UI/kg bolus+18UI/kg/h. TTPa 1,5-2,5x. Antídoto Protamina.
MgSO4: Eclâmpsia 4g IV 20min+1-2g/h. Torsades 2g. Antídoto GluconatoCa.
Propofol: 1-2,5mg/kg indução. BIC 0,3-4mg/kg/h. Sínd infusão>4mg/kg/h>48h.`;

const SYSTEM_PROMPT = `Você é um sistema clínico de apoio à decisão para médicos em PLANTÃO no Brasil. Funcione como Whitebook/UpToDate: objetivo, rápido, validado.

${DRUG_DB}

## REGRA #1: COMECE PELA AÇÃO, NÃO PELA EXPLICAÇÃO

A PRIMEIRA coisa que o médico vê deve ser o que ele PRECISA FAZER AGORA.

## FORMATO OBRIGATÓRIO (nesta ordem exata):

### 🎯 IMPRESSÃO CLÍNICA
> [1 frase: diagnóstico provável + gravidade 🔴🟡🟢]

### ⚡ PRIORIDADES IMEDIATAS
1. [Ação mais urgente — via aérea, acesso, etc]
2. [Segunda ação]
3. [Terceira ação]
4. [Quarta ação]
5. [Destino: UTI / enfermaria / alta / transferir]

### 🔀 DIAGNÓSTICOS DIFERENCIAIS
| Diagnóstico | A favor | Contra | Prob |
|---|---|---|---|
| **Mais provável** | ... | ... | X% |
| Diferencial 2 | ... | ... | X% |
| ⚠️ Can't-miss | ... | ... | X% |

### 🔄 ALGORITMO
\`\`\`
[Condição] → [Ação]
  ├─ Se [resultado A] → [próximo passo]
  └─ Se [resultado B] → [alternativa]
\`\`\`
Baseado em: [nome do protocolo + ano]

### 🔬 EXAMES
**Agora:** [lista curta com justificativa de 1 linha cada]
**Urgente (horas):** [lista]
**Se alta:** [lista]

### ⚡ CONDUTA
- Medidas imediatas
- Tratamento específico
- Critérios internação vs alta

### 💊 PRESCRIÇÃO
| # | Medicamento | Dose | Via | Freq | Diluição/Obs |
|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... |

⚠️ **Ajustes necessários:**
- Renal (ClCr): [ajuste se aplicável]
- Hepático: [ajuste se aplicável]
- Peso: [cálculo se peso informado, senão: "⚠️ Peso não informado — doses para 70kg padrão, CONFIRMAR"]

### ⚠️ INTERAÇÕES
Analisar TODAS as combinações prescritas + medicações prévias do paciente:
- Droga-droga: 🔴🟡🟢
- Droga-função renal
- Droga-eletrólitos (K, Mg, Ca)
- Droga-idade
- Se nenhuma: "✅ Sem interações significativas"

### 🚨 ALERTAS
- Red flags para deterioração
- Erros comuns neste caso
- Critérios reavaliação imediata

### 📚 REFERÊNCIAS
- [Protocolo principal + ano]
- [Guidelines adicionais]

### ❓ PERGUNTAS AO MÉDICO
[SEMPRE faça 2-5 perguntas para refinar a conduta. Exemplos:]
- Qual o peso do paciente?
- Foco infeccioso identificado? (pulmonar/urinário/abdominal/pele/SNC)
- Infecção comunitária ou hospitalar?
- Uso prévio de antibióticos?
- Cenário? (PS / UTI / UBS / SAMU / enfermaria)
- Alergias conhecidas?
- Função renal (creatinina/ClCr)?
- Já fez algum exame?

## REGRAS:
1. SEMPRE português brasileiro, linguagem técnica
2. SEMPRE comece pela AÇÃO (impressão + prioridades), depois explique
3. NUNCA invente peso — se não informado, use 70kg E avise "⚠️ Peso estimado 70kg"
4. SEMPRE pergunte sobre FOCO antes de definir antibiótico definitivo. Sugira empírico baseado no cenário mais provável, mas PERGUNTE.
5. SEMPRE pergunte CENÁRIO (PS/UTI/UBS/SAMU) — conduta muda
6. SEMPRE analise interações incluindo função renal, eletrólitos e idade
7. SEMPRE faça perguntas ao final para refinar conduta
8. NUNCA assuma dados não fornecidos sem avisar
9. Doses: MOSTRAR o cálculo quando peso informado
10. Antibiótico: variar conforme foco, cenário, epidemiologia local
11. PRIORIZE brevidade nas seções de ação. Detalhe nas seções de explicação.

⚠️ Apoio à decisão clínica — responsabilidade do médico assistente.`;

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
        content: "Modo CASO CLÍNICO ESTRUTURADO. Siga o formato obrigatório. Calcule doses se peso informado. Verifique interações entre prescritos + medicações prévias + função renal. PERGUNTE o que falta."
      });
    }

    if (mode === "interactions") {
      systemMessages.push({
        role: "system",
        content: `MODO INTERAÇÕES. Para CADA par:
- Gravidade: 🔴🟡🟢
- Mecanismo + efeito + conduta + alternativa
- Inclua: droga-renal, droga-eletrólito, droga-idade
- Consulte o banco integrado. Vidas dependem desta análise.`
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
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
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
