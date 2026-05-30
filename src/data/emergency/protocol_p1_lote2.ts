/**
 * Protocolos P1 — Lote 2. Auditoria 2026-05-29.
 * Alta frequência no PS/UPA brasileiro.
 * Fontes: AACE, AHA, ESC, WSES, SBC, SBN, MS/SVS, KDIGO.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. LRA — KDIGO 2024
// ─────────────────────────────────────────────────────────────────────────────
export const protocolLRA: EmergencyProtocol = {
  id: "lra-kdigo-2024-emergencia",
  title: "Lesão Renal Aguda — KDIGO 2024 na Emergência",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["lra", "lesão renal aguda", "kdigo", "oligúria", "creatinina", "hemodiálise", "ira", "diálise"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## LRA — Lesão Renal Aguda

Complicação frequente no PS, associada a alta mortalidade quando não tratada precocemente.

**Definição KDIGO 2024:**
- Creatinina ≥ 0,3 mg/dL em 48h OU
- Creatinina ≥ 1,5× o valor basal em 7 dias OU
- Débito urinário < 0,5 mL/kg/h por ≥ 6h

**Estadiamento KDIGO:**
| Estágio | Creatinina | Débito Urinário |
|---|---|---|
| **1** | 1,5–1,9× basal ou ↑ ≥ 0,3 mg/dL | < 0,5 mL/kg/h por 6–12h |
| **2** | 2,0–2,9× basal | < 0,5 mL/kg/h por ≥ 12h |
| **3** | ≥ 3× basal ou Cr ≥ 4 mg/dL ou TRR | < 0,3 mL/kg/h por ≥ 24h ou anúria 12h |

> ⚠️ Avaliação nefrológica para estágios 2–3. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Causas e Classificação",
      content: `## Classificação por Mecanismo

| Tipo | Causas mais comuns | Urinálise |
|---|---|---|
| **Pré-renal** | Hipovolemia, ICC, sepse, hepatorrenal | Sedimento pobre, FENa < 1% |
| **Intrínseca** | NTA isquêmica/tóxica, glomerulonefrite, CIVD | Cilindros granulosos, FENa > 2% |
| **Pós-renal** | Obstrução ureteral, retenção urinária, bexiga neurogênica | Normal ou hematúria |

## Causas de LRA no PS (Mnemônico AEIOU)

- **A** — Azotemia pré-renal (desidratação, choque, ICC)
- **E** — Excreção obstruída (retenção urinária, bexiga de bexiga)
- **I** — Infecção (sepse = mais comum de NTA)
- **O** — Obstáculo vascular (embolia renal, estenose)
- **U** — Uso de nefrotóxicos (AINEs, aminoglicosídeos, contraste, quimio)`,
    },
    {
      id: "screening",
      title: "Identificação e Diagnóstico Diferencial",
      content: `## Sinais de Alerta — Urgência de TRR

| Sinal | Threshold para TRR emergencial |
|---|---|
| Hipercalemia grave | K+ > 6,5 mEq/L com alteração de ECG |
| Acidose metabólica | pH < 7,15 refratária |
| Sobrecarga hídrica | Edema pulmonar refratário a diurético |
| Encefalopatia urêmica | Asterixis, confusão, convulsão |
| Sangramento urêmico | Pericardite, diátese |
| Anúria > 12h | Com instabilidade clínica |

## Diagnóstico Diferencial Oligúria

**Passo 1:** Verificar sonda vesical/cateter — está obstruída? → irrigar
**Passo 2:** POCUS renal — hidronefrose? (pós-renal)
**Passo 3:** Bolus SF 0,9% 500 mL → responde? (pré-renal)
**Passo 4:** Urinálise + sedimento urinário + FENa

## Fração de Excreção de Sódio (FENa)

\`\`\`
FENa = (Na urina × Cr sérica) / (Na sérico × Cr urina) × 100
FENa < 1% → pré-renal
FENa > 2% → intrínseca (NTA)
(Inválida se uso de diurético → usar FE ureia)
\`\`\``,
    },
    {
      id: "conduct",
      title: "Conduta por Estágio",
      content: `## LRA Estágio 1 — Medidas Conservadoras

1. Identificar e remover causa (suspender nefrotóxicos, tratar sepse, corrigir volemia)
2. Otimizar volemia: SF 0,9% 250–500 mL bolus se hipovolemia → reavaliar
3. Débito urinário ≥ 0,5 mL/kg/h como meta
4. Suspender AINEs, IECA, BRA, aminoglicosídeos, contraste se possível
5. Ajustar doses de medicamentos conforme CrCl
6. Monitorar K+, pH, creatinina diariamente

## LRA Estágio 2–3 — Medidas Intensivas

1. Internação (UTI se estágio 3)
2. Monitorização horária do débito urinário
3. Controle rigoroso do balanço hídrico
4. **Furosemida:** indicada apenas se sobrecarga hídrica confirmada
   - NÃO usar para "forçar diurese" ou "nefroproteção" (sem evidência)
   - Dose: 1–3 mg/kg IV bolus (resistência é frequente na LRA estabelecida)
5. Avaliar indicação de TRR (ver critérios acima)
6. Nutrição: não restringir proteína por causa da LRA isoladamente

## Hipercalemia na LRA

| K+ | Alterações ECG | Tratamento |
|---|---|---|
| 5,5–6,0 | Ausentes | Medidas conservadoras |
| 6,0–6,5 | Onda T apiculada | Resinas + bicarbonato + dieta |
| > 6,5 OU alteração ECG grave | BAV, QRS largo, sinusoidal | Gluconato de Ca²+ + insulina + bicarbonato + TRR |

**Gluconato de cálcio 10%:** 10–20 mL IV em 3 min (estabiliza membrana — efeito em 1–3 min, dura 30–60 min)`,
    },
    {
      id: "treatment",
      title: "Tratamento — TRR e Nefrotóxicos",
      content: `## Terapia de Substituição Renal (TRR) — Modalidades

| Modalidade | Indicação | Vantagem |
|---|---|---|
| **Hemodiálise intermitente** | Estável, hipercalemia aguda | Rápida, acessível |
| **HDVVC/CVVHDF** | Instável, choque, HIC | Contínua, hemodinâmica melhor |
| **Diálise peritoneal** | Sem acesso vascular, criança | Mais simples |

**Acesso:** cateter de duplo lúmen jugular interno ou femoral

## Contraste Iodado — Prevenção de LRC

**Risco moderado/alto:** CrCl < 60 mL/min, diabetes, ICC, LRA ativa

**Medidas preventivas:**
- SF 0,9% 1 mL/kg/h por 6–12h antes e 4–6h após
- N-acetilcisteína 1200 mg VO 12h antes e depois (evidência fraca mas sem risco)
- Contraste iso-osmolar se possível
- Suspender IECA/BRA/metformina antes

## Nefrotóxicos — Ajuste de Dose

| Medicamento | Ajuste na LRA |
|---|---|
| Vancomicina | Dosar nível/AUC, aumentar intervalo |
| Aminoglicosídeo | Evitar se CrCl < 30; dose única diária |
| IECA/BRA | Suspender na LRA aguda |
| Metformina | Suspender se Cr > 1,5 (H) ou 1,4 (M) |
| AINE | Suspender sempre na LRA |
| Lítio | Monitorar nível — excreção renal |`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — LRA Estágio 2 com Hipercalemia

\`\`\`
PACIENTE: _____  K+: _____  pH: _____  Cr: _____  Basal: _____

HIPERCALEMIA (K+ > 6,5 ou ECG alterado):
1. Gluconato de cálcio 10% 10 mL IV em 3 min
   (estabiliza membrana — repetir se ECG não melhora)

2. Insulina regular 10 UI IV + Glicose 50% 40 mL IV
   (redistribui K+ para células — efeito em 30 min)

3. Bicarbonato de sódio 8,4% 100 mL IV em 30 min
   (se pH < 7,2 — potencializa efeito da insulina)

4. Furosemida 80–120 mg IV
   (se ainda há diurese preservada)

5. Kayexalate 30g VO 8/8h OU Patiromer 8,4g VO (resinas)

SE TRR INDICADA: acionar nefrologia urgente

SUPORTE GERAL:
6. SF 0,9% 1 mL/kg/h IV (se hipovolêmico — não em sobrecarga)
7. Suspender: AINE, IECA, BRA, aminoglicosídeo, contraste
8. Sonda vesical → débito urinário horário
9. Eletrólitos + creatinina + gasometria 4/4h
10. Balanço hídrico rigoroso a cada 6h
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

KDIGO. **Clinical Practice Guideline for Acute Kidney Injury.** Kidney Int Suppl. 2024.

Kellum JA et al. **Acute kidney injury.** Nat Rev Dis Primers. 2021.

Zarbock A et al. **Effect of early vs delayed initiation of renal replacement therapy on mortality (ELAIN).** JAMA. 2016.

SBN — Sociedade Brasileira de Nefrologia. **Diretrizes de LRA em UTI.** J Bras Nefrol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. EHH — Estado Hiperosmolar Hiperglicêmico
// ─────────────────────────────────────────────────────────────────────────────
export const protocolEHH: EmergencyProtocol = {
  id: "ehh-hiperosmolar-hiperglicemico",
  title: "Estado Hiperosmolar Hiperglicêmico (EHH)",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["ehh", "hiperosmolar", "hiperglicemia", "diabetes", "glicemia", "desidratação", "insulina"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Estado Hiperosmolar Hiperglicêmico (EHH)

Emergência metabólica do DM2, com mortalidade de 5–20% (maior que a CAD).

**Diferenças EHH vs CAD:**
| Característica | EHH | CAD |
|---|---|---|
| Tipo de DM | DM2 (geralmente) | DM1 |
| Glicemia | > 600 mg/dL | 250–600 mg/dL |
| Osmolaridade | > 320 mOsm/kg | Normal ou ↑ leve |
| Cetose | Ausente ou mínima | Proeminente |
| pH | ≥ 7,3 | < 7,3 |
| HCO₃ | ≥ 18 mEq/L | < 18 mEq/L |
| Consciência | Frequentemente alterada | Variável |
| Déficit hídrico | **8–10 L** | 3–5 L |

> ⚠️ Déficit hídrico é muito maior que na CAD. Hidratação é a pedra angular. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Critérios Diagnósticos e Causas",
      content: `## Critérios Diagnósticos ADA (EHH)

- Glicemia > 600 mg/dL
- Osmolaridade sérica efetiva > 320 mOsm/kg
- pH > 7,3 e HCO₃ > 18 mEq/L (sem acidose significativa)
- Ausência ou mínima cetonemia/cetonúria

## Osmolaridade Efetiva

\`\`\`
Osmolaridade efetiva = 2 × Na+ + Glicose/18
Normal: 275–295 mOsm/kg
EHH: > 320 mOsm/kg
\`\`\`

## Sódio Corrigido na Hiperglicemia

\`\`\`
Na+ corrigido = Na+ medido + 1,6 × (glicose − 100) / 100
(Para cada 100 mg/dL acima de 100, Na+ real é 1,6 mEq/L maior)
\`\`\`

## Causas Precipitantes

- Infecção (mais comum — ITU, pneumonia)
- Omissão de medicação ou insulina
- IAM, AVC
- Corticoide, diuréticos tiazídicos
- Desidratação grave (calor, diarreia)
- Primeira manifestação de DM2`,
    },
    {
      id: "screening",
      title: "Identificação",
      content: `## Apresentação Clínica

- Polidipsia, poliúria progressiva (dias a semanas)
- Desidratação grave (turgor reduzido, mucosas secas)
- Alteração de consciência (de confusão a coma) — proporcional à osmolaridade
- Sem hálito cetônico, sem respiração de Kussmaul
- Taquicardia, hipotensão
- Déficits neurológicos focais possíveis (hemiparesia, convulsões focais)

**Regra:** osmolaridade > 340 mOsm/kg → coma
          osmolaridade 320–340 mOsm/kg → torpor/confusão

## Exames Urgentes

| Exame | Meta/Achado |
|---|---|
| Glicemia capilar + sérica | > 600 mg/dL |
| Na+, K+, Cl− | Hipernatremia (relativa), hipocalemia frequente |
| Ureia + Creatinina | LRA pré-renal frequente |
| Osmolaridade sérica | > 320 mOsm/kg |
| Gasometria | pH > 7,3 (sem acidose significativa) |
| Cetonúria | Ausente ou trace |
| ECG | Hipocalemia? Arritmia? IAM precipitante? |
| Urinálise + urocultura | ITU precipitante |
| Hemograma + PCR | Infecção precipitante |`,
    },
    {
      id: "conduct",
      title: "Conduta — Protocolo EHH",
      content: `## Fase 1 — Ressuscitação Hídrica (1ª hora)

**SF 0,9% 1 L IV em 1h** (independente do Na+)

- Repor volemia antes de qualquer correção
- Monitorar PA, FC, débito urinário

## Fase 2 — Hidratação Progressiva (horas 1–12)

**Calcular déficit hídrico:**
\`\`\`
Déficit = 0,6 × peso × (Na+ corrigido/140 − 1)
T�pico no EHH: 8–10 L
\`\`\`

**Escolha do fluido:**
- Na+ corrigido < 135: SF 0,9% 250–500 mL/h
- Na+ corrigido 135–145: SF 0,45% 250–500 mL/h
- Na+ corrigido > 145: SF 0,45% 150–250 mL/h

**Meta de redução da glicemia:** 50–75 mg/dL/hora

## Fase 3 — Insulina (SOMENTE após volemia restaurada)

**NUNCA iniciar insulina sem hidratação adequada** — colapso hemodinâmico.

**Indicar insulina quando:**
- Glicemia ainda > 300 mg/dL após 1–2h de hidratação
- Volemia restaurada (débito urinário ≥ 0,5 mL/kg/h)

**Dose:**
- Insulina regular 0,1 UI/kg/h BIC (sem bolus)
- Meta: redução de 50–75 mg/dL/hora
- Quando glicemia < 300: trocar para SG5% + insulina 0,05 UI/kg/h
- Meta de glicemia no EHH: 250–300 mg/dL até osmolaridade normalizar

## Fase 4 — Potássio

- K+ > 5,0: não repor, monitorar
- K+ 3,5–5,0: KCl 20–30 mEq/h EV
- K+ < 3,5: repor K+ antes de iniciar insulina (risco de hipocalemia grave)

**Monitorar K+ a cada 2–4h.**`,
    },
    {
      id: "treatment",
      title: "Tratamento — Detalhes e Armadilhas",
      content: `## Armadilhas Frequentes

**1. Iniciar insulina sem hidratação** → queda brusca da osmolaridade → edema cerebral → morte.

**2. Reduzir glicemia muito rápido** → meta é 50–75 mg/dL/hora. Redução > 100 mg/dL/hora = risco de edema cerebral.

**3. Não corrigir o Na+** → Na+ medido está falsamente baixo. Usar Na+ corrigido para guiar o fluido.

**4. Não tratar a causa** → infecção é causa em 50% dos casos. ATB empírico se suspeita de infecção.

**5. Hipocalemia após insulina** → monitorar K+ a cada 2h. K+ pode cair rapidamente.

## Objetivos de Tratamento

| Parâmetro | Meta |
|---|---|
| Glicemia | < 300 mg/dL (fase aguda); < 200 mg/dL (recuperação) |
| Osmolaridade | < 315 mOsm/kg |
| Débito urinário | ≥ 0,5 mL/kg/h |
| K+ | 3,5–5,0 mEq/L |
| Nível de consciência | Melhora progressiva com normalização osmolar |

## Alta e Prevenção

- Investigar causa precipitante
- Ajustar esquema de insulina
- Educação sobre sinais de descompensação
- Monitorização ambulatorial de glicemia`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — EHH

\`\`\`
PACIENTE: _____  PESO: _____ kg
Glicemia: _____  Na+: _____  K+: _____  Osm: _____

FASE 1 — 1ª HORA (ressuscitação):
1. SF 0,9% 1000 mL IV em 1h

FASE 2 — HIDRATAÇÃO (horas 1–12):
Na+ corrigido = _____ + 1,6 × (_____−100)/100 = _____

SE Na+ corrigido ≤ 145:
2. SF 0,45% _____ mL/h IV
   (Meta: reduzir glicemia 50–75 mg/dL/h)

SE Na+ corrigido > 145:
2. SF 0,45% 150 mL/h IV

POTÁSSIO (após débito urinário ≥ 30 mL/h):
SE K+ 3,5–5,0: 3. KCl 20 mEq/h IV adicionado ao fluido
SE K+ < 3,5: repor K+ ANTES da insulina

INSULINA (glicemia > 300 após 2h de hidratação):
4. Insulina regular _____ UI/h BIC (0,1 UI/kg/h)
   = _____ UI + 100 mL SF 0,9% → _____ mL/h
   Glicemia capilar 1/1h — meta: queda 50–75 mg/dL/h

QUANDO GLICEMIA < 300:
5. SG5% + SF 0,45% 1:1 _____ mL/h
   + Insulina 0,05 UI/kg/h BIC
   Meta glicemia EHH: 250–300 mg/dL até Osm normalizar

MONITORIZAÇÃO:
6. Glicemia capilar 1/1h
7. Eletrólitos + Cr + Osmolaridade 2/2h
8. Débito urinário horário (sonda vesical)
9. ECG (hipocalemia)

TRATAR CAUSA:
□ Antibiótico se infecção suspeita
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

ADA. **Hyperglycemic Crises in Adults with Diabetes — Standards of Care 2024.** Diabetes Care. 2024.

Kitabchi AE et al. **Hyperglycemic Crises in Adult Patients With Diabetes.** Diabetes Care. 2009.

SBD — Sociedade Brasileira de Diabetes. **Diretrizes de Emergências Hiperglicêmicas.** 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. HIPONATREMIA GRAVE — NaCl 3%
// ─────────────────────────────────────────────────────────────────────────────
export const protocolHiponatremia: EmergencyProtocol = {
  id: "hiponatremia-grave-sintomatica-nacl3",
  title: "Hiponatremia Grave/Sintomática — Correção com NaCl 3%",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hiponatremia", "natremia", "nacl 3%", "siadh", "síndrome osmótica desmielinização", "sódio"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Hiponatremia Grave/Sintomática

Na+ < 130 mEq/L com sintomas neurológicos graves (convulsão, coma, herniação) — emergência médica.

**Regra de ouro:** velocidade de correção importa mais que o valor absoluto.
- Correção muito lenta → edema cerebral → morte
- Correção muito rápida → Síndrome de Osmótica de Desmielinização (SOD) → paraplegia, locked-in, morte

**Metas de correção:**
| Situação | Velocidade | Máximo 24h |
|---|---|---|
| Sintomática grave (convulsão) | 1–2 mEq/L/h nas primeiras 3–4h | ≤ 10 mEq/L |
| Sintomática moderada | 0,5 mEq/L/h | ≤ 10 mEq/L |
| Assintomática crônica | 0,5 mEq/L/h | ≤ 8 mEq/L |

> ⚠️ Monitorização rigorosa do Na+ a cada 2–4h. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Classificação e Causas",
      content: `## Classificação por Duração

| Tipo | Duração | Risco de SOD | Velocidade de correção |
|---|---|---|---|
| **Aguda** | < 48h | Baixo | Até 12 mEq/L/24h |
| **Crônica** | > 48h ou desconhecida | **Alto** | ≤ 8–10 mEq/L/24h |

## Avaliação da Volemia (guia o tratamento)

| Volemia | Causa provável | Tratamento |
|---|---|---|
| **Hipovolêmica** | Perdas (diarreia, diurético, Addison) | SF 0,9% + NaCl 3% se grave |
| **Euvolêmica** | SIADH, hipotireoidismo, cortisol | Restrição hídrica + NaCl 3% se grave |
| **Hipervolêmica** | ICC, cirrose, síndrome nefrótica | Restrição hídrica + furosemida |

## Causas de SIADH

- Pneumonia, TB pulmonar
- AVC, TCE, tumor cerebral
- Antidepressivos (SSRI, TCA)
- Carbamazepina, oxicarbamazepina
- Cisplatina
- Dor, náuseas, pós-operatório`,
    },
    {
      id: "screening",
      title: "Identificação e Gravidade",
      content: `## Sintomas por Na+

| Na+ (mEq/L) | Sintomas |
|---|---|
| 130–134 | Náuseas, mal-estar, confusão leve |
| 125–129 | Cefaleia, sonolência, confusão moderada |
| 120–124 | Torpor, vômitos, desorientação grave |
| < 120 | **Convulsão, coma, herniação** |

## Exames Urgentes

- Na+ sérico (confirmar)
- Osmolaridade sérica
- Na+ urinário + Osmolaridade urinária (diferencia SIADH de outras causas)
- K+, glicemia, ureia, creatinina
- Função tireoidiana (hipotireoidismo?)
- Cortisol (insuficiência adrenal?)

## Diagnóstico de SIADH (critérios)

- Na+ < 135 mEq/L + Osmolaridade sérica < 275 + Osmolaridade urinária > 100 + Na+ urinário > 40
- Euvolemia clínica
- Função tireoidiana e adrenal normais`,
    },
    {
      id: "conduct",
      title: "Conduta — Sintomática Grave",
      content: `## Sintomática Grave (Convulsão, Coma) — NaCl 3% IMEDIATO

**Objetivo inicial:** elevar Na+ 4–6 mEq/L nas primeiras 2–3h para reverter sintomas graves.

### Bolus de NaCl 3% (Tratamento de Emergência)

\`\`\`
NaCl 3% 150 mL IV em 20 min
→ Verificar Na+ em 20 min
→ Repetir 150 mL se ainda sintomático
→ Máximo: 3 bolus de 150 mL
\`\`\`

Após estabilização clínica, manter infusão lenta para atingir meta diária.

### Fórmula de Adrogue-Madias (cálculo da infusão)

\`\`\`
ΔNa = (Na do fluido − Na sérico) / (ACT + 1)
ACT = 0,6 × peso (homem) ou 0,5 × peso (mulher)

Para NaCl 3% (Na+ = 513 mEq/L):
ΔNa = (513 − Na sérico) / (ACT + 1)

Volume para elevar 1 mEq/L = 1 / ΔNa × 1000 mL
\`\`\`

### Conversão Prática

Para elevar Na+ em 1 mEq/L → aproximadamente 1 mL/kg de NaCl 3%

Exemplo: 70 kg, Na+ = 115, meta +6 em 6h:
→ NaCl 3% 70 mL/h × 6h = 420 mL → ↑ ~6 mEq/L

## Monitorização

- Na+ sérico a cada **2h** durante a correção ativa
- Se Na+ subir > 12 mEq/L em 24h → risco de SOD → medidas corretivas
- Débito urinário horário`,
    },
    {
      id: "treatment",
      title: "Tratamento — Corrseção Excessiva e Causas Específicas",
      content: `## Correção Excessiva — Prevenir SOD

**Se Na+ subiu > 12 mEq/L em 24h (meta foi ultrapassada):**

1. **Parar** NaCl 3%
2. **Água livre:** SG5% 10 mL/kg IV em 1h (reduz Na+)
3. **Desmopressina 2–4 mcg IV** (se urina diluída está sendo eliminada muito rápido)
4. Meta: diminuir Na+ de volta para o limite de segurança

## SIADH — Tratamento Específico

| Gravidade | Tratamento |
|---|---|
| Grave sintomática | NaCl 3% (ver acima) |
| Moderada, crônica | Restrição hídrica 800–1000 mL/dia |
| Refratária a restrição | Urea 30g VO/dia ou Tolvaptan 15–30 mg VO |

**Restrição hídrica só funciona se osmolaridade urinária < 500 mOsm/kg.**

## Hiponatremia Hipovolêmica

- SF 0,9% para repor volemia
- Não usar NaCl 3% de imediato — a própria expansão corrige Na+ (diluição revertida)
- Monitorar Na+ rigorosamente (pode subir rapidamente com reposição)

## Hipotireoidismo e Insuficiência Adrenal

- Tratar a causa → Na+ normaliza
- Hiponatremia pode ser grave e refratária se não tratar a doença subjacente`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Hiponatremia Grave Sintomática

\`\`\`
PACIENTE: _____  PESO: _____ kg  Na+: _____  SINTOMAS: _____

EMERGÊNCIA (convulsão/coma):
1. NaCl 3% 150 mL IV em 20 min
   → Na+ em 20 min: se ainda sintomático, repetir 150 mL
   → Máximo 3 bolus de 150 mL

APÓS CONTROLE DOS SINTOMAS:
2. NaCl 3% _____ mL/h BIC
   [Meta: elevar Na+ 1 mEq/L/h por mais 2–3h]
   [Cálculo: 1 mL/kg/h = ~1 mEq/L/hora para _____ kg]
   Velocidade: _____ mL/h → Na+ alvo em 24h: _____ mEq/L

   LIMITE ABSOLUTO: ≤ 10 mEq/L em 24h (crônica) ou ≤ 12 mEq/L (aguda)

MONITORIZAÇÃO:
3. Na+ sérico 2/2h durante correção ativa
   → Se subiu > 10 mEq/L: parar NaCl 3%, dar SG5% 10 mL/kg em 1h
4. Débito urinário horário
5. Glasgow + pupilas 1/1h

TRATAR CAUSA:
□ SIADH: restrição hídrica 800 mL/dia (após fase aguda)
□ Hipovolemia: SF 0,9% 500 mL → monitorar Na+
□ Hipotireoidismo: levotiroxina
□ Insuficiência adrenal: hidrocortisona 100 mg IV
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Spasovski G et al. **Clinical practice guideline on diagnosis and treatment of hyponatraemia (ESE/ERA-EDTA).** Eur J Endocrinol. 2014.

Verbalis JG et al. **Diagnosis, Evaluation, and Treatment of Hyponatremia.** Am J Med. 2013.

Adrogue HJ, Madias NE. **Hyponatremia.** NEJM. 2000.

SBN. **Diretrizes para distúrbios do sódio.** J Bras Nefrol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. REVERSÃO DE ANTICOAGULAÇÃO — Vit K / PCC / Idarucizumabe / Andexanete
// ─────────────────────────────────────────────────────────────────────────────
export const protocolReversaoAnticoag: EmergencyProtocol = {
  id: "reversao-anticoagulacao-emergencia",
  title: "Reversão de Anticoagulação — Vit K / PCC / Idarucizumabe / Andexanete",
  categoryId: "hematology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["reversão anticoagulação", "warfarina", "dabigatrana", "rivaroxabana", "apixabana", "idarucizumabe", "andexanete", "pcc", "vitamina k"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Reversão de Anticoagulação na Emergência

Sangramento grave ou necessidade de procedimento urgente em paciente anticoagulado exige reversão rápida e específica.

**Regra geral:** conhecer o anticoagulante usado, o horário da última dose e a função renal.

**Quando reverter:**
- Sangramento grave (intracraniano, retroperitoneal, gastrointestinal maciço, pericárdico)
- Necessidade de cirurgia emergencial (< 8h)
- Superdose com risco de vida

> ⚠️ Avaliação hematológica/hemodinâmica urgente. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Anticoagulantes e Mecanismos",
      content: `## Anticoagulantes Mais Usados no Brasil

| Fármaco | Mecanismo | Meia-vida | Antídoto específico |
|---|---|---|---|
| **Varfarina** | Anti-vitamina K (II, VII, IX, X) | 36–42h | Vitamina K + CCP |
| **Heparina NF** | Anti-Xa + IIa | 1–2h | Protamina |
| **HBPM** (enoxaparina) | Anti-Xa predominante | 4–6h | Protamina (parcial) |
| **Dabigatrana** | Inibidor direto da trombina | 12–17h | **Idarucizumabe** |
| **Rivaroxabana** | Inibidor direto do Xa | 5–9h | **Andexanete alfa** |
| **Apixabana** | Inibidor direto do Xa | 8–15h | **Andexanete alfa** |
| **Edoxabana** | Inibidor direto do Xa | 10–14h | Andexanete alfa |

## Exames para Avaliar Anticoagulação

| Anticoagulante | Exame | Anticoagulado |
|---|---|---|
| Varfarina | INR | > 2,0 (terapêutico) |
| HNF | TTPa | > 2× normal |
| HBPM | Anti-Xa | 0,5–1,0 UI/mL |
| Dabigatrana | TTPa, Hemoclot (específico) | TTPa > 80s |
| Rivaroxabana/Apixabana | Anti-Xa calibrado | Detectável |`,
    },
    {
      id: "screening",
      title: "Avaliação e Gravidade do Sangramento",
      content: `## Classificação do Sangramento

| Gravidade | Definição | Reversão |
|---|---|---|
| **Leve** | Hematoma superficial, epistaxe | Compressão local, aguardar |
| **Moderado** | Hematúria, sangramento gengivival | Suspender anticoagulante |
| **Grave** | GI com instabilidade, hemotórax | **Reversão urgente** |
| **Crítico** | Intracraniano, retroperitoneal, pericárdico | **Reversão emergencial imediata** |

## Questões-Chave na Avaliação

1. Qual anticoagulante?
2. Horário da última dose?
3. Função renal (CrCl) — afeta meia-vida dos DOACs
4. INR atual (varfarina)?
5. Tipo e gravidade do sangramento?
6. Risco trombótico do paciente (FA, prótese valvar, TVP)?`,
    },
    {
      id: "conduct",
      title: "Conduta por Anticoagulante",
      content: `## VARFARINA — Reversão

### Sangramento grave + INR elevado

**1ª linha:** CCP 4 fatores (Complexo Protrombínico)
- **25–50 UI/kg IV** (dose baseada no INR e peso)
- Reverte em minutos
- Sempre associar Vitamina K para reverter a warfarina

| INR | Dose CCP | Vitamina K |
|---|---|---|
| 2,0–4,0 | 25 UI/kg | 10 mg IV |
| 4,0–6,0 | 35 UI/kg | 10 mg IV |
| > 6,0 | 50 UI/kg | 10 mg IV |

**Alternativa se CCP indisponível:** PFC 15–25 mL/kg IV (mais lento, grande volume)

**Vitamina K:** 10 mg IV em 30 min — mantém a reversão por 24h enquanto CCP age rapidamente.

---

## HNF — Protamina

- 1 mg de protamina para cada 100 UI de heparina nas últimas 2–3h
- Máximo 50 mg IV (em 10 min)
- TTPa 15 min depois — repetir se necessário

## HBPM (Enoxaparina) — Protamina Parcial

- 1 mg de protamina para cada 1 mg de enoxaparina (se < 8h da dose)
- Neutraliza ~60–80% da atividade anti-Xa

---

## DABIGATRANA — Idarucizumabe

**Indicações:**
- Sangramento grave/crítico
- Cirurgia emergencial
- TTPa > 80s ou Hemoclot > 200s

**Dose:** Idarucizumabe 5 g IV (2 frascos de 2,5 g) em bolus ou infusão de 5–10 min

**Efeito:** reversão completa em minutos, duração 24h
**Disponibilidade:** verificar banco de sangue/farmácia do hospital

**Se idarucizumabe indisponível:** CCP 4 fatores 50 UI/kg (off-label, evidência limitada)

---

## RIVAROXABANA / APIXABANA — Andexanete Alfa

**Indicações:**
- Sangramento intracraniano ou grave
- Dose baseada no anticoagulante e horário

| Situação | Dose | Infusão |
|---|---|---|
| Rivaroxabana > 10 mg ou dose desconhecida | 800 mg bolus → 960 mg em 2h | Imediata |
| Rivaroxabana ≤ 10 mg ou ≥ 8h da dose | 400 mg bolus → 480 mg em 2h | Imediata |
| Apixabana > 5 mg ou dose desconhecida | 800 mg bolus → 960 mg em 2h | Imediata |
| Apixabana ≤ 5 mg ou ≥ 8h da dose | 400 mg bolus → 480 mg em 2h | Imediata |

**Se andexanete indisponível:** CCP 4 fatores 50 UI/kg (off-label)`,
    },
    {
      id: "treatment",
      title: "Tratamento Complementar e Reinício",
      content: `## Medidas Gerais no Sangramento por Anticoagulante

- Compressão mecânica em sangramentos externos
- Ácido tranexâmico (TXA) 1g IV em 10 min (adjuvante em sangramento grave)
- Transfusão de CH se Hb < 7 g/dL
- Endoscopia urgente se GI (clipagem/cauterização)
- Neurocirurgia urgente se HIC (hematoma em expansão)

## Quando Reiniciar Anticoagulação

| Indicação original | Reintrodução |
|---|---|
| FA sem prótese valvar | 4–14 dias após HIC (individualizar) |
| Prótese valvar mecânica | 2–7 dias (risco trombótico alto) |
| TVP/EP | 3–7 dias após sangramento controlado |
| Cirurgia cardíaca | Discutir com cirurgião |

**Risco de suspender anticoagulante × risco de ressangrar** — decisão individualizada com hematologia/cardiologia.

## Monitorização Pós-Reversão

- INR/TTPa após CCP (varfarina/HNF)
- Anti-Xa após 30–60 min (se disponível)
- Coagulograma completo a cada 4–6h
- Hematócrito seriado`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Reversão de Varfarina (Sangramento Crítico)

\`\`\`
PACIENTE: _____  INR: _____  PESO: _____ kg  SANGRAMENTO: _____

1. CCP 4 fatores _____ UI IV (dose: _____ UI/kg × _____ kg)
   INR 2–4 → 25 UI/kg; INR 4–6 → 35 UI/kg; INR > 6 → 50 UI/kg
   Infundir em 10–15 min (máx 8 mL/min)

2. Vitamina K 10 mg IV em 30 min (junto ao CCP)

3. INR 30 min após — se > 1,5: repetir CCP 10–15 UI/kg

SE SANGRAMENTO DIGESTIVO:
4. Omeprazol 80 mg IV bolus → 8 mg/h BIC
5. Endoscopia urgente
\`\`\`

---

## Prescrição Modelo — Reversão de Dabigatrana

\`\`\`
PACIENTE: _____  TTPa: _____  ÚLTIMA DOSE: _____

1. Idarucizumabe 2,5 g IV → 2,5 g IV (total 5 g)
   Infundir cada frasco em 5–10 min (bolus sequencial)

2. TTPa 30 min após — deve normalizar
3. Hemostasia local / cirurgia conforme indicação
\`\`\`

---

## Prescrição Modelo — Reversão de Rivaroxabana/Apixabana

\`\`\`
PACIENTE: _____  ANTICOAGULANTE: _____  DOSE HABITUAL: _____
ÚLTIMA DOSE: _____  SANGRAMENTO: _____

SE ANDEXANETE DISPONÍVEL:
1. Andexanete alfa _____ mg IV bolus em 15–30 min
   → Imediatamente: _____ mg em 2h BIC

SE ANDEXANETE INDISPONÍVEL:
1. CCP 4 fatores 50 UI/kg IV (off-label)
   = _____ UI para _____ kg

2. TXA 1g IV em 10 min (adjuvante)
3. Suporte hemostático específico conforme sangramento
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Pollack CV et al. **Idarucizumab for Dabigatran Reversal (RE-VERSE AD).** NEJM. 2017.

Connolly SJ et al. **Andexanet Alfa for Acute Major Bleeding Associated with Factor Xa Inhibitors (ANNEXA-4).** NEJM. 2019.

Frontera JA et al. **Guideline for Reversal of Antithrombotics in Intracranial Hemorrhage.** Neurocrit Care. 2016.

ESC. **2022 ESC Guidelines on Cardiovascular Assessment and Management of Patients Undergoing Non-cardiac Surgery.** Eur Heart J. 2022.

SBH. **Consenso sobre anticoagulação e reversão em emergências.** 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. CRISE ADRENAL — Insuficiência Adrenal Aguda
// ─────────────────────────────────────────────────────────────────────────────
export const protocolCriseAdrenal: EmergencyProtocol = {
  id: "crise-adrenal-insuficiencia-aguda",
  title: "Crise Adrenal — Insuficiência Adrenal Aguda",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["crise adrenal", "insuficiência adrenal", "addison", "hidrocortisona", "choque refratário", "cortisol"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Crise Adrenal

Emergência endocrinológica potencialmente fatal caracterizada por déficit agudo de cortisol. Causa de choque refratário a vasopressores frequentemente subdiagnosticada.

**Suspeitar em todo choque refratário sem causa óbvia.**

**Causas:**
| Tipo | Causa |
|---|---|
| **Primária** (IA primária) | Doença de Addison, hemorragia adrenal bilateral, Waterhouse-Friderichsen (meningococcemia) |
| **Secundária** (ACTH deficiente) | Retirada abrupta de corticoide, hipopituitarismo |
| **Precipitante em IA conhecida** | Infecção, cirurgia, trauma, omissão da dose |

**Regra clínica:** corticoide crônico por > 3 semanas → supressão do eixo → crise adrenal em situação de estresse.

> ⚠️ Tratar antes de confirmar — não aguardar cortisol para iniciar hidrocortisona em crise grave.`,
    },
    {
      id: "def",
      title: "Fisiopatologia e Apresentação",
      content: `## Apresentação Clínica

| Forma | Sintomas |
|---|---|
| **Aguda (crise)** | Choque, vômitos, dor abdominal, febre, confusão, hiponatremia, hipercalemia |
| **Crônica (IA)** | Fadiga, hipotensão ortostática, náuseas, hiperpigmentação (primária), perda de peso |

## Tríade Clínica da Crise Adrenal

1. **Hipotensão grave** (frequentemente refratária a vasopressores)
2. **Hiponatremia** + Hipercalemia (IA primária)
3. **Hipoglicemia** (especialmente em crianças)

## Diagnóstico Diferencial de Choque Refratário

Suspeitar de insuficiência adrenal quando:
- Choque não responde a fluidos + vasopressores
- Hiponatremia + hipercalemia sem outra causa
- Uso crônico de corticoide (qualquer via — inclusive tópico, inalado em altas doses)
- Febre + choque + meningococcemia (Waterhouse-Friderichsen)`,
    },
    {
      id: "screening",
      title: "Diagnóstico e Exames",
      content: `## Teste de Estimulação com ACTH (Diagnóstico Definitivo)

**Na emergência:** coletar cortisol basal ANTES da hidrocortisona, depois tratar sem esperar resultado.

**Interpretação:**
- Cortisol basal > 18–20 mcg/dL: IA improvável
- Cortisol basal < 10 mcg/dL + choque: IA muito provável
- Teste de estimulação: ACTH 250 mcg IV → cortisol 60 min depois < 18 = confirma

**Atenção:** cortisol "normal" pode ser inadequado para o nível de estresse — paciente criticamente doente deveria ter cortisol > 25–30 mcg/dL.

## Exames Urgentes

| Exame | Achado na IA |
|---|---|
| Na+ | Hiponatremia (< 130) |
| K+ | Hipercalemia (primária) |
| Glicemia | Hipoglicemia |
| Cortisol basal | < 10 mcg/dL (fortemente sugestivo) |
| ACTH | Elevado (primária) / Baixo ou normal (secundária) |
| Hemograma | Eosinofilia (sugestivo mas inespecífico) |
| Aldosterona | Baixa na IA primária |`,
    },
    {
      id: "conduct",
      title: "Conduta — Tratamento Imediato",
      content: `## TRATAR ANTES DE CONFIRMAR (crise grave)

### Passo 1 — Colher cortisol basal (não atrasar tratamento)

### Passo 2 — Hidrocortisona (IMEDIATO)

**Dose de crise:**
- **Hidrocortisona 100 mg IV bolus** imediato
- Manutenção: 50–100 mg IV 6/6h (200–400 mg/dia)
- OU infusão contínua: 200 mg em 24h BIC

**Alternativas se hidrocortisona indisponível:**
- Dexametasona 4 mg IV (não interfere com o teste de cortisol → colher teste antes; sem efeito mineralocorticoide)
- Metilprednisolona 40–80 mg IV 6/6h

### Passo 3 — Ressuscitação Hídrica

- SF 0,9% 1 L IV em 1h (repor volume + corrigir hiponatremia)
- Continuar 1–2 L nas próximas horas
- NÃO usar Ringer Lactato (hipotônico — piora hiponatremia)

### Passo 4 — Glicose

- Glicemia capilar imediata
- Se hipoglicemia (< 60): glicose 50% 40 mL IV + manutenção SG10%

### Passo 5 — Tratar Precipitante

- Infecção → antibiótico
- Trauma → suporte
- Omissão de corticoide → reintroduzir`,
    },
    {
      id: "treatment",
      title: "Tratamento — Desmame e Manutenção",
      content: `## Desmame da Hidrocortisona

Após resolução da crise (24–48h):

**Redução gradual:**
- Dia 1–2: hidrocortisona 200 mg/dia IV dividido 6/6h
- Dia 3–4: 100 mg/dia IV ou VO
- Dia 5: transição para dose de manutenção oral

**Dose de manutenção (IA primária — Addison):**
- Hidrocortisona 15–25 mg/dia VO dividido em 2–3 doses
- + Fludrocortisona 0,05–0,1 mg/dia VO (mineralocorticoide — só na primária)

## "Sick Day Rules" — Prevenção de Crises

Orientar para pacientes com IA conhecida:
- Febre ou doença leve: dobrar a dose oral
- Doença grave, cirurgia: 100 mg hidrocortisona IV + acionar médico
- Vômitos (não consegue tomar VO): 100 mg hidrocortisona IM/IV imediato
- Portador de kit de emergência (seringa com hidrocortisona) em casa

## Insuficiência Adrenal Relativa no Choque Séptico

- Choque séptico refratário a vasopressor (norepinefrina > 0,25 mcg/kg/min)
- Hidrocortisona 200 mg/dia BIC ou 50 mg IV 6/6h (APROCCHSS trial)
- Não rotineiro — apenas em choque refratário`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Crise Adrenal

\`\`\`
PACIENTE: _____  PESO: _____ kg  Cortisol basal coletado: □ Sim □ Não

1. Colher cortisol basal + ACTH + eletrólitos imediatamente
   (NÃO atrasar o tratamento aguardando resultado)

2. Hidrocortisona 100 mg IV bolus IMEDIATO
   → Manutenção: 50 mg IV 6/6h (200 mg/dia)
   OU BIC: Hidrocortisona 200 mg + SF 0,9% 50 mL → 2,1 mL/h

3. SF 0,9% 1000 mL IV em 1h
   → Continuar 500 mL/h por mais 2h conforme PA e diurese

4. Glicemia capilar → SE < 60:
   Glicose 50% 40 mL IV bolus → SG10% 125 mL/h manutenção

5. Monitorização: PA, FC, glicemia 1/1h; Na+, K+, cortisol pós-tratamento 6h

6. Tratar causa precipitante:
   □ Antibiótico (infecção)
   □ Analgesia (trauma/dor)
   □ Reintroduzir corticoide oral se omissão

DESMAME (após 24–48h de resolução):
7. Hidrocortisona 100 mg/dia VO dividido 8/8h
   → Reduzir 50% a cada 2 dias até dose de manutenção (15–25 mg/dia)
   + Fludrocortisona 0,1 mg VO 1x/dia (se IA primária)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Bornstein SR et al. **Diagnosis and Treatment of Primary Adrenal Insufficiency (ESE).** Eur J Endocrinol. 2016.

Annane D et al. **Hydrocortisone plus Fludrocortisone for Adults with Septic Shock (APROCCHSS).** NEJM. 2018.

Society for Endocrinology. **Emergency guidance: Adrenal crisis.** Endocrine Connections. 2020.

SBEM — Sociedade Brasileira de Endocrinologia. **Insuficiência Adrenal e Crise Adrenal.** 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. HSA — Hemorragia Subaracnoide
// ─────────────────────────────────────────────────────────────────────────────
export const protocolHSA: EmergencyProtocol = {
  id: "hsa-hemorragia-subaracnoide-emergencia",
  title: "Hemorragia Subaracnoide — Hunt-Hess / WFNS e Manejo",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hemorragia subaracnoide", "hsa", "aneurisma", "cefaleia trovão", "hunt-hess", "wfns", "nimodipino", "vasoespasmo"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Hemorragia Subaracnoide (HSA)

Acidente vascular com mortalidade de 30–50% nas primeiras 24–48h. Causa mais comum: ruptura de aneurisma intracraniano (85%).

**"Pior cefaleia da minha vida"** — sentinela do diagnóstico. Qualquer cefaleia súbita e intensa merece investigação com TC sem contraste + LCR.

**Escores prognósticos:**

| Hunt-Hess | WFNS | Clínica | Mortalidade |
|---|---|---|---|
| 1 | I | Assintomático ou cefaleia leve | < 5% |
| 2 | II | Cefaleia intensa, rigidez de nuca | 10% |
| 3 | III | Confusão leve, déficit leve | 20% |
| 4 | IV | Estupor, déficit moderado | 40% |
| 5 | V | Coma, descerebração | > 70% |

> ⚠️ Neurocirurgia/neurorradiologia intervencionista urgente. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Definição e Diagnóstico",
      content: `## Apresentação Clínica Típica

- **Cefaleia "trovão"** — onset máximo em < 1 min, descrita como "a pior da vida"
- Rigidez de nuca (meningismo — pode levar horas para aparecer)
- Náuseas, vômitos
- Fotofobia, sonolência
- Perda de consciência transitória no ictus
- Déficit neurológico focal (aneurisma em expansão, hematoma)
- Convulsão (10–20%)

## Diagnóstico — Algoritmo

### 1ª Escolha: TC sem contraste (0–6h do ictus)
- Sensibilidade 98% nas primeiras 6h
- Sangue nos sulcos basais, cisternas, fissura inter-hemisférica
- Hidrocefalia (complicação precoce)

### Se TC negativa + alta suspeita: LCR (6–12h do ictus)
- Xantocromia (ouro para sangue velho): específica para HSA
- Eritrócitos > 2000/mm³ no tubo 4
- Diferir punção se TC mostra efeito de massa

### Confirmação: Angio-TC ou Arteriografia
- Localizar aneurisma para clipagem/coiling`,
    },
    {
      id: "screening",
      title: "Complicações Precoces",
      content: `## Complicações — Reconhecer e Prevenir

| Complicação | Tempo | Prevenção/Tratamento |
|---|---|---|
| **Ressangramento** | Primeiras 24h (risco 20–30%) | Clipagem/coiling urgente |
| **Vasoespasmo** | Dias 3–14 | Nimodipino + euvolemia |
| **Hidrocefalia** | Horas a dias | DVE se sintomático |
| **Hiponatremia** | Dias 3–10 (cerebral salt wasting) | SF 0,9% + monitorar |
| **Convulsão** | 1ª semana | Levetiracetam profilático |
| **Disfunção cardíaca** | Aguda (stunned myocardium) | ECG, troponina, eco |

## Vasoespasmo — Diagnóstico

- Piora neurológica dias 3–14 após o ictus
- DTC (Doppler transcraniano): velocidades > 120 cm/s na ACM
- Angio-TC/Arteriografia confirma

**Tratamento:**
- Nimodipino (profilático e terapêutico)
- Triple H: Hipertensão + Hipervolemia + Hemodiluição (controverso atualmente)
- Angioplastia/papaverina intra-arterial em vasoespasmo grave`,
    },
    {
      id: "conduct",
      title: "Conduta — Fase Aguda",
      content: `## Medidas Imediatas (Todas as HSAs)

1. **Repouso absoluto** em quarto escuro
2. **Analgesia:** dipirona 1g IV + tramadol 100 mg IV se necessário
3. **Antieméticos:** metoclopramida 10 mg IV
4. **Controle de PA:**
   - Se PA muito alta (> 180/110): labetalol ou nicardipina IV
   - Antes do tratamento definitivo do aneurisma: PAS 140–160 mmHg
   - Evitar hipotensão (piora perfusão cerebral)
5. **Nimodipino 60 mg VO/SNG a cada 4h** (iniciar imediatamente, por 21 dias)
6. Acesso venoso, monitor, TC urgente
7. Acionar neurocirurgia / neurointervencionismo

## Tratamento do Aneurisma — Urgência

| Grau Hunt-Hess | Timing da cirurgia |
|---|---|
| 1–3 | **Clipagem/coiling nas primeiras 24h** (reduz ressangramento) |
| 4–5 | Estabilizar → tratar assim que melhorar |

**Clipagem cirúrgica vs Coiling endovascular:**
- ISAT trial: coiling tem melhor desfecho funcional
- Clipagem preferida em aneurismas de colo largo ou com hematoma compressivo
- Decisão da equipe neurovascular

## Hidrocefalia — DVE (Derivação Ventricular Externa)

- Indicação: hidrocefalia comunicante com sintomas
- Rebaixamento progressivo após HSA → TC → DVE se hidrocefalia confirmada`,
    },
    {
      id: "treatment",
      title: "Tratamento — Detalhes e UTI",
      content: `## Nimodipino — Protocolo

- **60 mg VO ou SNG a cada 4h** (240 mg/dia) por **21 dias**
- Administrar mesmo se não houver sinais de vasoespasmo (profilático)
- Se hipotensão: 30 mg a cada 2h
- NÃO usar via IV (risco de hipotensão grave — formulação oral/SNG apenas)

## Monitorização em UTI Neurológica

- Glasgow + pupilas a cada 1–2h
- PA contínua (invasiva se instável)
- Na+ diário (risco hiponatremia — cerebral salt wasting)
- ECG diário + troponina (stunned myocardium)
- DTC diário a partir do dia 3 (vasoespasmo)
- Temperatura — normotermia rigorosa

## Profilaxia

- Levetiracetam 500–1000 mg IV/VO 12/12h por 7 dias (anticonvulsivante)
- Compressão pneumática (TVP)
- Omeprazol 40 mg IV/dia
- Glicemia 140–180 mg/dL`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — HSA Aguda

\`\`\`
PACIENTE: _____  Hunt-Hess: _____  TC: _____

URGENTE — ACIONAR NEUROCIRURGIA IMEDIATAMENTE

1. Repouso absoluto, quarto silencioso e escuro
2. Dieta zero até avaliação neurocirúrgica

ANALGESIA + ANTIEMÉTICOS:
3. Dipirona 1g IV 6/6h
4. Tramadol 100 mg IV 8/8h (se dor intensa)
5. Metoclopramida 10 mg IV 8/8h

NIMODIPINO (iniciar IMEDIATAMENTE):
6. Nimodipino 60 mg VO/SNG 4/4h × 21 dias
   (NÃO usar IV — apenas VO ou SNG)

CONTROLE DE PA:
7. Meta: PAS 140–160 mmHg (antes de tratar aneurisma)
   SE PAS > 180: Labetalol 20 mg IV em 2 min → titular

PREVENÇÃO DE CONVULSÃO:
8. Levetiracetam 500 mg IV 12/12h × 7 dias

SUPORTE:
9. SF 0,9% 125 mL/h IV (euvolemia)
10. Omeprazol 40 mg IV 1x/dia
11. Monitorização: ECG, Na+, troponina
12. TC controle 24h (ressangramento? hidrocefalia?)

DVE SE: rebaixamento progressivo + hidrocefalia na TC
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Connolly ES et al. **Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage (AHA/ASA).** Stroke. 2012 (updated 2023).

Molyneux AJ et al. **International Subarachnoid Aneurysm Trial (ISAT).** Lancet. 2002.

Steiner T et al. **European Stroke Organisation Guidelines for the Management of Intracranial Aneurysms and Subarachnoid Haemorrhage.** Cerebrovasc Dis. 2013.

ABN / SBN. **Diretrizes Brasileiras de Hemorragia Subaracnoide.** Arq Neuropsiquiatr. 2022.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. ABDOME AGUDO — Abordagem Sindrômica
// ─────────────────────────────────────────────────────────────────────────────
export const protocolAbdomeAgudo: EmergencyProtocol = {
  id: "abdome-agudo-abordagem-sindromica",
  title: "Abdome Agudo — Abordagem Sindrômica na Emergência",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["abdome agudo", "dor abdominal", "peritonite", "obstrução intestinal", "apendicite", "cólica biliar", "pancreatite"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Abdome Agudo

Síndrome clínica de dor abdominal intensa de início súbito exigindo avaliação e potencialmente tratamento cirúrgico urgente.

**Síndromes principais:**
| Síndrome | Exemplos | Urgência |
|---|---|---|
| **Peritonite** | Perfuração, apendicite complicada, DIP grave | Cirurgia imediata |
| **Obstrutiva** | Obstrução intestinal, vólvulo, hérnia estrangulada | Cirurgia urgente |
| **Isquêmica** | Isquemia mesentérica, torção ovariana | Emergência máxima |
| **Inflamatória** | Pancreatite, diverticulite, colecistite | Conservador ou eletivo |
| **Hemorrágica** | Gravidez ectópica rota, AAA roto, trauma | Cirurgia imediata |

> ⚠️ Avaliação cirúrgica urgente em qualquer abdome agudo com sinais peritoneais. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Avaliação Sistemática",
      content: `## Anamnese Dirigida

**OPQRST:**
- **O** — Onset (início súbito = perfuração, isquemia; progressivo = inflamação)
- **P** — Palliating/Precipitating (o que melhora/piora)
- **Q** — Quality (cólica = obstrução, constante = peritonite)
- **R** — Radiation (fossa ilíaca direita = apendicite, dorso = pancreatite/AAA)
- **S** — Severity (0–10)
- **T** — Time (horas? dias?)

**Perguntas essenciais:**
- Última evacuação / flatulência? (obstrução)
- Menstruação / possibilidade de gravidez? (ectópica)
- Cirurgia abdominal prévia? (aderências)
- Uso de AINEs? (úlcera péptica)
- Anticoagulantes? (hematoma retroperitoneal)

## Exame Físico por Achado

| Achado | Significado |
|---|---|
| Defesa muscular involuntária | Peritonite |
| Blumberg positivo | Peritonite (dor à descompressão) |
| Murphy positivo | Colecistite aguda |
| McBurney positivo | Apendicite |
| Timpanismo generalizado | Obstrução ou perfuração |
| Ausência de RHA | Peritonite ou íleo paralítico |
| Massa pulsátil | Aneurisma de aorta |
| Abdome "em tábua" | Perfuração com peritonite difusa |`,
    },
    {
      id: "screening",
      title: "Diagnóstico Diferencial por Localização",
      content: `## Diagnóstico por Quadrante

### Fossa Ilíaca Direita
- Apendicite aguda (mais comum)
- Doença inflamatória pélvica (mulher)
- Torção ovariana (mulher)
- Gravidez ectópica (mulher)
- Colecistite (dor irradiada)

### Epigástrio
- Pancreatite aguda
- Úlcera péptica / perfuração
- IAM inferior (diagnóstico diferencial!)
- Colecistite

### Hipocôndrio Direito
- Colecistite aguda
- Colangite
- Hepatite aguda

### Fossa Ilíaca Esquerda
- Diverticulite
- Doença inflamatória intestinal
- Vólvulo de sigmoide

### Difuso
- Peritonite generalizada
- Isquemia mesentérica
- Obstrução intestinal avançada
- Cetoacidose diabética

## Exames Urgentes

| Exame | Uso |
|---|---|
| Hemograma + PCR | Infecção/inflamação |
| Amilase/Lipase | Pancreatite |
| Bilirrubinas + TGO/TGP | Hepato-biliar |
| β-hCG | Gravidez ectópica (toda mulher em idade fértil) |
| Urinálise | Cólica renal, pielonefrite |
| Lactato | Isquemia mesentérica |
| **FAST/POCUS** | Líquido livre, colelitíase, aorta |
| **TC abdome com contraste** | Gold standard para maioria das causas |`,
    },
    {
      id: "conduct",
      title: "Conduta por Síndrome",
      content: `## Peritonite — Tratamento Imediato

1. Acesso venoso + ressuscitação hídrica (SF 0,9% 1–2 L)
2. **Antibiótico:** piperacilina-tazobactam 4,5g IV 8/8h (ou meropenem 1g IV 8/8h se grave)
3. SNG (descompressão)
4. **Cirurgia urgente** — não atrasar

## Obstrução Intestinal — Avaliação

- TC com contraste: localização e causa da obstrução
- SNG: descompressão e diagnóstico de estrangulamento
- **Sinais de estrangulamento** (cirurgia urgente): febre, taquicardia, leucocitose, peritonite
- Sem estrangulamento: tentativa conservadora 24–48h

## Gravidez Ectópica Rota — Emergência Máxima

- β-hCG positivo + dor + líquido livre no FAST = cirurgia imediata
- Ressuscitação enquanto prepara a cirurgia
- NÃO perder tempo com imagem adicional se instável

## Pancreatite Aguda — Conservador

- Hidratação agressiva: RL 250–500 mL/h (superiora ao SF nas primeiras 24h)
- Analgesia: dipirona + tramadol, morfina se refratário
- Jejum nas primeiras 24–48h + reinício precoce de dieta leve
- ATB: NÃO rotineiro (apenas se necrose infectada confirmada)
- Monitorar: PA, diurese, glicemia, Ca²+

## Colangite (Tokyo Grade III — Grave)

- Antibiótico: piperacilina-tazobactam 4,5g IV 8/8h
- CPRE urgente (drenagem biliar)
- Se instável: drenagem percutânea`,
    },
    {
      id: "treatment",
      title: "Analgesia e Antibióticos",
      content: `## Analgesia no Abdome Agudo

**Mito:** analgesia mascarar o diagnóstico → **FALSO**. Analgesia adequada não dificulta o diagnóstico e melhora a avaliação.

**Protocolo analgésico:**
1. Dipirona 1g IV em 15 min (1ª escolha)
2. Tramadol 100 mg IV em 30 min se insuficiente
3. Morfina 2–4 mg IV se dor intensa refratária

## Antibióticos por Síndrome

| Síndrome | Esquema |
|---|---|
| Peritonite comunitária | Ceftriaxona 2g IV + Metronidazol 500 mg IV 8/8h |
| Peritonite grave/nosocomial | Piperacilina-tazobactam 4,5g IV 8/8h |
| Colangite grave | Pip-tazo 4,5g IV 8/8h + considerar Vancomicina |
| DIP grave | Ceftriaxona 2g IV + Doxiciclina 100 mg IV 12/12h + Metronidazol |
| Diverticulite leve | Amoxicilina-clavulanato VO (ambulatorial) |
| Diverticulite grave | Pip-tazo IV ou Ceftriaxona + Metronidazol IV |`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Peritonite com Indicação Cirúrgica

\`\`\`
PACIENTE: _____  PA: _____/_____  FC: _____  T: _____

RESSUSCITAÇÃO:
1. SF 0,9% 1000 mL IV em 30 min
   → Continuar 250–500 mL/h conforme resposta

ANALGESIA:
2. Dipirona 1g IV agora
3. Morfina 4 mg IV se dor > 7/10 (repetir 2 mg em 15 min se necessário)
4. Metoclopramida 10 mg IV SE náuseas/vômitos

ANTIBIÓTICO (pré-operatório):
5. Piperacilina-tazobactam 4,5g IV em 30 min
   → Manutenção 4,5g IV 8/8h

SONDA NASOGÁSTRICA:
6. SNG de alívio — registrar débito

CATETER VESICAL:
7. Débito urinário horário (meta ≥ 0,5 mL/kg/h)

JEJUM ABSOLUTO

EXAMES PENDENTES:
□ β-hCG (mulher em idade fértil)
□ Tipagem + prova cruzada
□ TC abdome com contraste

ACIONAR CIRURGIA IMEDIATAMENTE
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Sartelli M et al. **WSES guidelines for emergency repair of complicated abdominal wall hernias.** World J Emerg Surg. 2021.

Kirkpatrick AW et al. **WSES/GAIS guidelines for management of intra-abdominal infections.** World J Emerg Surg. 2022.

Mayumi T et al. **Tokyo Guidelines 2018 for acute cholangitis and cholecystitis.** J Hepatobiliary Pancreat Sci. 2018.

CBCFig — Colégio Brasileiro de Cirurgiões. **Condutas em abdome agudo.** 2023.

WSES. **Severe acute pancreatitis: WSES 2024 guidelines.** World J Emerg Surg. 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. PALS — RCP Pediátrica AHA 2025
// ─────────────────────────────────────────────────────────────────────────────
export const protocolPALS: EmergencyProtocol = {
  id: "pals-rcp-pediatrica-aha-2025",
  title: "PALS — RCP Pediátrica (AHA 2025)",
  categoryId: "pediatric-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["pals", "rcp pediátrica", "pediatria", "parada cardíaca pediátrica", "desfibrilação pediátrica", "aha 2025", "acls pediátrico"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## PALS — Suporte de Vida Avançado Pediátrico

RCP pediátrica difere da adulta em aspectos fundamentais:

**Diferenças-chave vs adulto:**
| Aspecto | Pediátrico | Adulto |
|---|---|---|
| Causa mais comum de PCR | Hipóxia/asfixia | Cardíaca |
| Ritmo mais frequente | Assistolia/AESP | FV/TV |
| Sequência de RCP | **C-A-B** (ênfase em ventilação) | C-A-B |
| Ventilação | Fundamental (causa hipóxica) | Menos priorizada |
| Adrenalina | 0,01 mg/kg IV/IO | 1 mg IV |
| Desfibrilação | 2–4 J/kg | 200 J bifásico |
| Razão compressão:ventilação | 15:2 (2 socorristas) | 30:2 |

**Faixas etárias:**
- Neonato: < 28 dias
- Lactente: 28 dias – 1 ano
- Criança: 1–8 anos (PALS)
- Adolescente > 8 anos: protocolo de adulto

> ⚠️ Treinamento em PALS obrigatório. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Algoritmo PALS — PCR Pediátrica",
      content: `## Algoritmo Básico

### 1. Avaliar (< 10 segundos)
- Responsividade?
- Respiração (agonal = ausente)?
- Pulso central (braquial < 1 ano; carotídeo/femoral > 1 ano) por ≤ 10s

### 2. Ativar sistema de emergência + desfibrilador

### 3. RCP de Alta Qualidade

**Frequência:** 100–120 compressões/minuto

**Profundidade:**
- Lactente: 4 cm (1/3 do diâmetro AP)
- Criança: 5 cm (1/3 do diâmetro AP)

**Relação:**
- 1 socorrista: 30:2
- 2 socorristas: 15:2

**Técnica de compressão:**
- Lactente < 1 ano: 2 polegares (circunferencial) ou 2 dedos
- Criança: 1 ou 2 mãos no centro do tórax

### 4. Ventilação
- BVM com O₂ 100%
- Volume: elevação visível do tórax
- Frequência: 1 ventilação a cada 3–5s (12–20 ipm)
- Após IOT: 1 ventilação a cada 2–3s sem pausa nas compressões`,
    },
    {
      id: "screening",
      title: "Ritmos e Desfibrilação",
      content: `## Ritmos de PCR Pediátrica

| Ritmo | Frequência | Tratamento |
|---|---|---|
| **Assistolia** | 50–60% | RCP + Adrenalina |
| **AESP** | 30% | RCP + Adrenalina + tratar causa |
| **FV/TV** | 10–15% | Desfibrilação + RCP + Adrenalina |

## Desfibrilação Pediátrica

**Energia:**
- 1ª dose: **2 J/kg**
- 2ª dose: **4 J/kg**
- Doses subsequentes: 4–10 J/kg (máx 200 J)

**Técnica:**
- Pás pediátricas (< 10 kg) ou adulto (> 10 kg)
- Modo não sincronizado (desfibrilação)
- Retomar RCP imediatamente após o choque (sem verificar pulso)

## Causas Reversíveis — 5H 5T

**5H:** Hipóxia, Hipovolemia, Hipotermia, Hipo/Hipercalemia, Hidrogênio (acidose)
**5T:** Tensão pneumotórax, Tamponamento, Toxinas, Trombose pulmonar, Trombose coronariana`,
    },
    {
      id: "conduct",
      title: "Algoritmo Pediátrico — Drogas e Sequência",
      content: `## Acesso Vascular

1. **IV periférico** (tentativa ≤ 90s)
2. **IO (Intraósseo)** — se IV impossível (tíbia proximal ou fêmur distal)
3. **Via endotraqueal** — somente adrenalina e lidocaína (10× a dose IV, diluída em 5 mL SF)

## Drogas na PCR Pediátrica

### Adrenalina — PRINCIPAL

- **Dose:** 0,01 mg/kg IV/IO (máx 1 mg)
- **Preparar:** 0,1 mL/kg da solução 1:10.000 (0,1 mg/mL)
- **Frequência:** a cada 3–5 min (após 1ª dose no ritmo não chocável)
- Para ritmo chocável: adrenalina após o 2º choque sem resposta

### Amiodarona ou Lidocaína — FV/TV Refratária

| Fármaco | Dose | Via |
|---|---|---|
| Amiodarona | 5 mg/kg IV/IO bolus | Após 3ª desfibrilação |
| Lidocaína | 1 mg/kg IV/IO bolus | Alternativa |

### Atropina — Bradicardia Sintomática

- 0,02 mg/kg IV/IO (mín 0,1 mg, máx 0,5 mg)
- Repetir em 5 min se necessário

### Bicarbonato — Apenas Se Indicado

- 1 mEq/kg IV/IO em hipercalemia, acidose grave pH < 7,1, intoxicação por ADT
- NÃO usar de rotina na PCR

## Ritmo de Choque (FV/TV) — Sequência

1. RCP 2 min
2. Verificar ritmo → FV/TV → Desfibrilar 2 J/kg
3. RCP 2 min → ritmo → FV/TV → desfibrilar 4 J/kg
4. RCP 2 min → adrenalina 0,01 mg/kg + amiodarona 5 mg/kg
5. Continuar ciclos a cada 2 min`,
    },
    {
      id: "treatment",
      title: "Pós-Ressuscitação e Causas Especiais",
      content: `## Cuidados Pós-PCR Pediátrica

- **Temperatura:** normotermia estrita (36–37,5°C) por 5 dias (THAPCA trial)
- **Glicemia:** 70–180 mg/dL
- **PaCO₂:** 35–45 mmHg (hipocapnia piora outcomes neurológicos)
- **PA:** PAM > 65 mmHg (ou percentil > 5 para idade)
- **Hb:** > 7 g/dL
- ECG — causa cardíaca?
- TC crânio — lesão estrutural?

## Situações Especiais

### Drowning (Afogamento Pediátrico)

- Hipóxia é a causa principal → **ventilação é prioridade máxima**
- Iniciar com 5 ventilações de resgate antes das compressões
- Hipotermia frequente → ressuscitação prolongada (60 min mínimo)

### Intoxicação

- Causa tratable → RCP prolongada justificada
- Antídoto específico se disponível (naloxona, flumazenil, TXA)

### Cardiopatia Congênita

- Fisiologia diferente → acionar cardiologista pediátrico
- Shunt D-E ou E-D altera resposta à RCP`,
    },
    {
      id: "prescriptions",
      title: "Prescrições — Tabela de Doses por Peso",
      content: `## Tabela de Doses Pediátricas na PCR

\`\`\`
PESO DO PACIENTE: _____ kg

ADRENALINA:
  Dose: 0,01 mg/kg = _____ mg
  Solução 1:10.000 (0,1 mg/mL): _____ mL IV/IO
  Repetir a cada 3–5 min

DESFIBRILAÇÃO:
  1ª: 2 J/kg = _____ J
  2ª: 4 J/kg = _____ J
  Subsequente: 4–10 J/kg = _____ J

AMIODARONA (FV/TV refratária):
  5 mg/kg IV/IO = _____ mg bolus após 3ª desfibrilação

ATROPINA (bradicardia sintomática):
  0,02 mg/kg = _____ mg (mín 0,1 mg, máx 0,5 mg)

ADENOSINA (TSVP):
  0,1 mg/kg IV rápido (máx 6 mg) → 0,2 mg/kg se não responde (máx 12 mg)

GLICOSE (hipoglicemia):
  Glicose 10%: 2 mL/kg IV = _____ mL

FLUIDO (PCR):
  SF 0,9% 10 mL/kg IV/IO bolus = _____ mL

RCP:
  Frequência: 100–120 compressões/min
  Profundidade: 4 cm (lactente) ou 5 cm (criança)
  Relação: 15:2 (2 socorristas)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Topjian AA et al. **Part 4: Pediatric Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.** Circulation. 2020.

AHA. **2025 Update to PALS Guidelines.** Circulation. 2025.

Moler FW et al. **Therapeutic Hypothermia after Out-of-Hospital Cardiac Arrest in Children (THAPCA-OH).** NEJM. 2015.

SBP — Sociedade Brasileira de Pediatria. **Suporte de Vida Avançado Pediátrico.** 2024.`,
    },
  ],
};
