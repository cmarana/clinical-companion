/**
 * Protocolos P1 — Intoxicações e Emergências Cardiovasculares
 * Auditoria 2026-05-29: todos faltantes ou incompletos.
 * Fontes: AAPCC, AHA, ESC, DAS, SBC, CIATox, WHO.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. INTOXICAÇÃO DIGITÁLICA — Anticorpos Fab
// ─────────────────────────────────────────────────────────────────────────────
export const protocolDigitalico: EmergencyProtocol = {
  id: "intoxicacao-digitalica-fab-completo",
  title: "Intoxicação Digitálica — Anticorpos Fab e Manejo",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["digoxina", "digitálico", "fab", "anticorpo antidigoxina", "hipercalemia", "bav", "toxicidade"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Intoxicação Digitálica

A digoxina tem janela terapêutica estreita (0,5–2 ng/mL). Intoxicação ocorre em idosos com função renal reduzida, interações medicamentosas ou superdose.

**Mecanismo:** inibição da Na+/K+-ATPase → aumento do Ca²+ intracelular → arritmias + hipercalemia.

**Formas clínicas:**
| Tipo | Características | Nível sérico |
|---|---|---|
| **Aguda** | Superdose intencional, hipercalemia proeminente | Pode ser muito alto (> 10 ng/mL) |
| **Crônica** | Idoso, dose habitual + IR, interação | Nível levemente elevado (2–4 ng/mL) |

> ⚠️ Contato CIATox: 0800 722 6001. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Definição e ECG Diagnóstico",
      content: `## Achados de ECG por Nível de Toxicidade

| Nível sérico | Achados ECG | Conduta |
|---|---|---|
| Terapêutico (< 2 ng/mL) | Prolongamento PR, achatamento/inversão de T, "escavação" ST | Monitorar |
| Tóxico leve (2–4 ng/mL) | Bigeminismo, bloqueio AV 1º/2º grau (Wenckebach) | Suspender digoxina |
| Tóxico moderado (4–8 ng/mL) | BAV 2:1, BAV 3º grau, TSV com BAV | Considerar Fab |
| Grave (> 8 ng/mL) | FA/flutter com resposta lenta, taquicardia bidirecional, FV | Fab urgente |

**Taquicardia ventricular bidirecional** = patognomônica de intoxicação digitálica.

## Distúrbios Eletrolíticos Associados

- **Intoxicação aguda:** hipercalemia (bloqueio da Na+/K+-ATPase)
- **Intoxicação crônica:** hipocalemia (diuréticos) — piora a toxicidade
- Hipomagnesemia e hipocalcemia também aumentam toxicidade`,
    },
    {
      id: "screening",
      title: "Identificação Clínica",
      content: `## Manifestações Clínicas

**Gastrointestinais (primeiros sintomas):**
- Náuseas, vômitos, anorexia, dor abdominal
- Diarreia

**Neurológicos:**
- Confusão, desorientação, fadiga
- Distúrbios visuais: xantopsia (visão amarela/verde), halos luminosos, diplopia

**Cardiovasculares (causa de morte):**
- Bradicardias: sinusal, BAV, ritmo juncional
- Taquiarritmias: extrassístoles, TV bidirecional, FV
- Qualquer combinação de bradiarritmia supraventricular + taquicardia ventricular

## Fatores que Precipitam Toxicidade

| Fator | Mecanismo |
|---|---|
| Insuficiência renal | Reduz excreção → acúmulo |
| Hipocalemia | Potencializa toxicidade (diuréticos) |
| Hipomagnesemia | Idem |
| Amiodarona | Aumenta nível sérico 2x (reduzir dose 50%) |
| Claritromicina/Eritromicina | Aumentam nível sérico |
| Verapamil/Diltiazem | Aumentam nível sérico |
| Desidratação | Reduz volemia → concentra |`,
    },
    {
      id: "conduct",
      title: "Conduta Inicial",
      content: `## Passo 1 — Estabilização

1. Monitorização ECG contínua, PA, SpO₂
2. Acesso venoso, colher: digoxina sérica, eletrólitos, Mg²+, Ca²+, função renal
3. **Suspender digoxina e fármacos que aumentam seu nível**
4. Corrigir hipocalemia: KCl IV se K+ < 3,5 mEq/L (cuidado em intoxicação aguda — K+ pode ser normal ou alto)
5. Corrigir hipomagnesemia: MgSO₄ 2g IV em 10 min

## Passo 2 — Descontaminação (intoxicação aguda < 2h)

- Carvão ativado 50g VO/SNG se via aérea protegida e ingesta < 1–2h
- NÃO induzir vômito
- Colestiramina: quelante para circulação entero-hepática (uso limitado)

## Passo 3 — Tratar Arritmias

**Bradicardia / BAV:**
- Atropina 1 mg IV (parcialmente eficaz — não corrige bloqueio infranodal)
- Se refratária: Fab urgente + marca-passo temporário se Fab indisponível

**Arritmias ventriculares:**
- Lidocaína 1–1,5 mg/kg IV bolus → manutenção 1–4 mg/min
- Sulfato de Mg²+ 2g IV em 10 min (TVP/TV bidirecional)
- **EVITAR:** quinidina, amiodarona (pioram condução), procainamida
- **EVITAR cardioversão elétrica** se possível — risco de FV irredutível; se necessária, usar menor energia (10–25 J)

**Hipercalemia (aguda):**
- Gluconato de cálcio **CONTROVERSO** em toxicidade digitálica (risco de "pedra de cálcio") — discutir com toxicologista
- Glucose + insulina: 50 mL glicose 50% + insulina regular 10 UI IV
- Bicarbonato 1–2 mEq/kg IV se acidose`,
    },
    {
      id: "treatment",
      title: "Anticorpos Fab — Indicações e Doses",
      content: `## Indicações de Digoxin Immune Fab (DigiFab/Digibind)

**Indicações absolutas:**
- Parada cardíaca por toxicidade digitálica
- Arritmia ventricular grave (TV bidirecional, FV)
- BAV 3º grau com instabilidade hemodinâmica
- Hipercalemia grave (K+ > 5,5 mEq/L) em intoxicação aguda
- Ingestão aguda > 10 mg (adultos) ou > 4 mg (crianças)

**Indicações relativas:**
- Qualquer arritmia significativa em paciente instável
- Nível sérico de digoxina > 10 ng/mL (aguda) ou > 4 ng/mL (crônica com sintomas)

## Cálculo da Dose de Fab

### Por quantidade ingerida (intoxicação aguda)
```
N° de frascos = mg ingeridos × 0,8 / 0,6
Ou: mg ingeridos × 1,33
```

### Por nível sérico
```
N° de frascos = (nível sérico em ng/mL × peso em kg) / 100
```

### Dose empírica (nível desconhecido, instável)
- **Adultos:** 10–20 frascos IV (800 mg–1600 mg)
- **Crianças e intoxicação crônica:** 1–6 frascos

**Administração:** diluir cada frasco em 50 mL SF 0,9% → infundir em 30 min (bolus se parada cardíaca)

## Após Fab

- Nível sérico de digoxina SOBE (mede digoxina livre + ligada ao Fab) — não usar para guiar conduta
- Monitorar resposta clínica: FC, arritmias, K+
- Hipocalemia pode ocorrer após reversão (K+ entra de volta nas células)
- Insuficiência renal: Fab é eliminado lentamente → duração de ação prolongada
- Pacientes dependentes de digoxina: monitorar FA/IC após reversão`,
    },
    {
      id: "followup",
      title: "Monitorização e Alta",
      content: `## Monitorização

- ECG contínuo por 12–24h após Fab
- Eletrólitos 2/2h nas primeiras 6h
- Glicemia (insulina no tratamento de hipercalemia)
- Função renal diária

## Critérios de Alta / Redução de Vigilância

- Ritmo sinusal estável por > 12h
- Eletrólitos normais
- Sintomas GI/neuro resolvidos
- Se reiniciar digoxina: aguardar 7 dias (Fab pode interferir)

## Reinício da Digoxina

- Avaliar se ainda indicada (muitos pacientes têm alternativas)
- Se necessário: iniciar em dose reduzida após 7 dias
- Corrigir fatores precipitantes antes do reinício`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Intoxicação Digitálica Grave

\`\`\`
PACIENTE: _____ PESO: _____ kg   Digoxina sérica: _____ ng/mL

1. Suspender digoxina e todos os fármacos que aumentam seu nível

2. Monitorização ECG contínua, PA e SpO₂

3. KCl 10 mEq/h IV BIC (se K+ < 3,5 mEq/L — crônica)
   SG 5% 250 mL + KCl 40 mEq → correr em 4h

4. MgSO₄ 50% 4 mL (2g) IV em 10 min
   (se Mg²+ < 1,5 mg/dL ou arritmia ventricular)

5. Digoxin Immune Fab _____ frascos
   [Cálculo: (___ng/mL × ___ kg) / 100 = ___ frascos]
   Diluir em 50 mL SF 0,9% por frasco → infundir em 30 min

6. Se parada cardíaca: Fab bolus IV imediato

7. Lidocaína 1 mg/kg IV bolus SE arritmia ventricular
   → Manutenção 2 mg/min BIC

8. EVITAR: cardioversão elétrica, amiodarona, quinidina

CONTATO: CIATox 0800 722 6001 (24h)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Andrews P et al. **Diagnosis and practical management of digoxin toxicity.** Eur J Emerg Med. 2023.

Hack JB. **Cardioactive Steroid Poisoning.** In: Goldfrank's Toxicologic Emergencies. 11th ed. McGraw-Hill; 2019.

AHA/ACC. **Focused Update on Management of Patients With Cardiac Arrest Due to Poisoning.** Circulation. 2023.

CIATox. **Manual de toxicologia clínica.** São Paulo; 2024.

Antman EM et al. **Treatment of 150 cases of life-threatening digitalis intoxication with digoxin-specific Fab antibody fragments.** Circulation. 1990.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. INTOXICAÇÃO POR ANTIDEPRESSIVOS TRICÍCLICOS (ADT) — Bicarbonato
// ─────────────────────────────────────────────────────────────────────────────
export const protocolIntoxicacaoADT: EmergencyProtocol = {
  id: "intoxicacao-adt-biciclico-emergencia",
  title: "Intoxicação por Antidepressivos Tricíclicos — Bicarbonato",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["tricíclico", "adt", "amitriptilina", "imipramina", "bicarbonato", "qrs largo", "convulsão", "hipotensão"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Intoxicação por ADT

Os antidepressivos tricíclicos (amitriptilina, imipramina, nortriptilina, clomipramina) são causa frequente de overdose grave no Brasil. Têm índice terapêutico estreito e deterioração clínica rápida.

**Mecanismos de toxicidade:**
| Mecanismo | Consequência |
|---|---|
| Bloqueio canal de Na+ (cardíaco) | QRS largo, arritmias, choque |
| Bloqueio receptor muscarínico | Taquicardia, boca seca, retenção urinária |
| Bloqueio α1-adrenérgico | Hipotensão |
| Bloqueio receptor GABA-A | Convulsões |
| Bloqueio canal de K+ (hERG) | QTc longo, TdP |

**"A morte por ADT é por QRS largo + convulsão + hipotensão"** — tratar os três ao mesmo tempo.

> ⚠️ CIATox: 0800 722 6001. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Definição e Toxicocinética",
      content: `## Principais ADTs no Brasil

| Fármaco | Dose tóxica adulto | Meia-vida |
|---|---|---|
| Amitriptilina | > 10–20 mg/kg | 9–25h |
| Imipramina | > 10–20 mg/kg | 6–20h |
| Nortriptilina | > 5 mg/kg | 18–96h |
| Clomipramina | > 10 mg/kg | 17–28h |

## Fases da Intoxicação

**Fase 1 (0–2h):** sintomas anticolinérgicos — taquicardia, boca seca, agitação, pupilas midriáticas

**Fase 2 (2–6h):** deterioração cardíaca — QRS se alarga, hipotensão, arritmias

**Fase 3 (6h+):** convulsões, coma, parada cardíaca

**Importante:** a deterioração pode ser súbita em paciente que parecia estável. Monitorizar por 6h mínimo.`,
    },
    {
      id: "screening",
      title: "Identificação",
      content: `## Síndrome Anticolinérgica Central + Cardiotoxicidade

**Mnemônico:** "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter"
- Hipertermia
- Midríase
- Pele seca / retenção urinária
- Flush cutâneo
- Agitação / delirium

## ECG — Sinais de Alerta

| Achado ECG | Significado | Limiar de risco |
|---|---|---|
| **QRS > 100 ms** | Bloqueio de Na+ | Risco de convulsão |
| **QRS > 160 ms** | Bloqueio severo | Alto risco de arritmia ventricular |
| **R em aVR > 3 mm** | Bloqueio de Na+ | Indicador de gravidade |
| **R/S em aVR > 0,7** | Bloqueio de Na+ | Alta especificidade |
| QTc > 500 ms | Bloqueio de K+ | Risco de TdP |
| Bloqueio de ramo D | Canal de Na+ | Monitorar |

## Critérios de Internação em UTI

- QRS > 100 ms
- Convulsão
- Hipotensão (PAS < 90 mmHg)
- Rebaixamento de consciência
- Arritmia`,
    },
    {
      id: "conduct",
      title: "Conduta Imediata",
      content: `## Algoritmo ADT — Emergência

### 0–15 min
1. ECG imediato — medir QRS e QTc
2. Monitorização contínua
3. Acesso venoso × 2 + colher toxicológico
4. Glicemia capilar
5. IOT se: GCS ≤ 8, convulsão refratária, apneia

### Bicarbonato de Sódio — INDICAÇÃO PRINCIPAL

**Indicar se QUALQUER um dos critérios abaixo:**
- QRS > 100 ms
- Arritmia ventricular (TV, FV)
- Hipotensão refratária ao volume
- pH < 7,10

**Mecanismo:** aumenta pH → reverte bloqueio dos canais de Na+ → estreita QRS.

**Dose:**
- Bolus: NaHCO₃ 8,4% **1–2 mEq/kg IV** (50–100 mL) em 5 min
- Repetir até QRS < 100 ms ou pH 7,50–7,55
- Manutenção: NaHCO₃ 8,4% em infusão + SF 0,9% para manter pH 7,45–7,55
- Monitorar Na+ (risco de hipernatremia) e Ca²+ (alcalose reduz Ca²+ ionizado)

### Convulsão
- Diazepam 10 mg IV bolus (1ª escolha)
- Lorazepam 4 mg IV (alternativa)
- Fenobarbital 20 mg/kg IV se refratária
- **EVITAR:** fenitoína (piora bloqueio de canal de Na+, sem eficácia nessa intoxicação)

### Hipotensão
- SF 0,9% 500 mL IV em 15 min
- Norepinefrina 0,1–1 mcg/kg/min (vasopressor de escolha — α1 agonista)
- **EVITAR:** dopamina (esgota reservas de catecolaminas nos tricíclicos)`,
    },
    {
      id: "treatment",
      title: "Tratamento Específico",
      content: `## Descontaminação

- Carvão ativado 50g VO/SNG se < 1h da ingestão e via aérea protegida
- NÃO catártico, NÃO lavagem gástrica de rotina (convulsão súbita)

## Arritmias Ventriculares

| Situação | Conduta |
|---|---|
| TV estável + QRS largo | Bicarbonato 1–2 mEq/kg IV bolus |
| TV instável | Bicarbonato IV + cardioversão 200 J bifásico |
| TdP (QTc longo) | MgSO₄ 2g IV + isoproterenol para FC > 100 |
| FV | RCP + bicarbonato + desfibrilação |

**Antiarrítmicos CONTRAINDICADOS:** amiodarona, quinidina, procainamida, flecainida (todos bloqueiam canal de Na+ e pioram).

## Emulsão Lipídica (Intralipid)

- Indicação: toxicidade cardiovascular grave refratária ao bicarbonato
- Dose: Intralipid 20% **1,5 mL/kg IV** em 1 min → 0,25 mL/kg/min por 30–60 min
- Mecanismo: "sink lipídico" — sequestra ADT no compartimento lipídico

## Hiperalcalinização

- Meta pH arterial: 7,50–7,55
- Sódio hipertônico (se hipernatremia impede mais bicarbonato): NaCl 3% 100 mL IV

## Duração da Observação

- Assintomático + ECG normal + 6h de observação → alta segura
- QRS alargou em algum momento → 24h de observação em UTI
- Convulsão → 24h mínimo`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — ADT com QRS > 100 ms

\`\`\`
PACIENTE: _____ PESO: _____ kg   QRS: _____ ms

1. ECG contínuo + monitorização SpO₂ e PA

2. NaHCO₃ 8,4% 100 mL IV em 5 min (1–2 mEq/kg)
   → Repetir se QRS > 100 ms ou pH < 7,45
   → Meta: QRS < 100 ms E pH 7,50–7,55

3. SF 0,9% 500 mL IV em 15 min (se PA < 90)
   → Norepinefrina 4 mg/250 mL SG5% BIC se refratário
      Iniciar 0,1 mcg/kg/min, titular PAM ≥ 65 mmHg

4. SE CONVULSÃO:
   Diazepam 10 mg IV bolus
   → Repetir em 5 min se necessário
   → Fenobarbital 20 mg/kg IV se refratário

5. SF 0,9% 125 mL/h IV manutenção

6. Carvão ativado 50g VO/SNG (se < 1h, via aérea protegida)

7. Gasometria arterial + eletrólitos + Ca²+ ionizado a cada 2h
   Na+ alvo < 155 mEq/L (monitorar com bicarbonato)

EVITAR: fenitoína, amiodarona, quinidina, dopamina
CONTATO: CIATox 0800 722 6001
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Woolf AD et al. **Tricyclic antidepressant poisoning: an evidence-based consensus guideline for out-of-hospital management.** Clin Toxicol. 2007.

Body R et al. **Guidelines on the management of acute tricyclic antidepressant poisoning.** Emerg Med J. 2011.

Blackman K et al. **Tricyclic antidepressant overdose: clinical presentation and plasma levels.** Clin Toxicol. 2001.

AAPCC — American Association of Poison Control Centers. **National Poison Data System.** 2023.

CIATox. **Protocolo de intoxicação por antidepressivos tricíclicos.** São Paulo; 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. INTOXICAÇÃO POR ORGANOFOSFORADO — Atropina + Pralidoxima
// ─────────────────────────────────────────────────────────────────────────────
export const protocolOrganofosforado: EmergencyProtocol = {
  id: "intoxicacao-organofosforado-atropina",
  title: "Intoxicação por Organofosforado — Atropina e Pralidoxima",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["organofosforado", "agrotóxico", "atropina", "pralidoxima", "inibidor colinesterase", "sínagoga colinérgica", "sludge"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Intoxicação por Organofosforado

Principal causa de morte por agrotóxico no Brasil (~4.000 casos/ano). Usados em pesticidas (malation, paration, clorpirifós) e agentes de guerra química (sarín, VX).

**Mecanismo:** inibição irreversível da acetilcolinesterase → acúmulo de acetilcolina nos receptores muscarínicos e nicotínicos → crise colinérgica.

**Mnemônico SLUDGE (muscarínico):**
- **S**alivação excessiva
- **L**acrimejamento
- **U**rinação involuntária
- **D**efecação / diarreia
- **G**astroentese (náuseas, vômitos, câimbras)
- **E**mese

**Mnemônico DUMBELS (nicotínico + muscarínico):**
D — Defecação/Diarreia | U — Urinação | M — Miose | B — Bradicardia/Broncoespasmo/Broncorreia | E — Emese | L — Lacrimejamento | S — Salivação/Sudorese

> ⚠️ Risco de contaminação secundária — EPI obrigatório. CIATox: 0800 722 6001.`,
    },
    {
      id: "def",
      title: "Definição e Gravidade",
      content: `## Classificação de Gravidade

| Grau | Manifestações | Atropina inicial |
|---|---|---|
| **Leve** | Miose, salivação, lacrimejamento, náuseas | 2–4 mg IV |
| **Moderado** | + Broncorreia, bradicardia, fraqueza muscular | 4–8 mg IV |
| **Grave** | + Convulsão, coma, insuficiência respiratória, crise nicotínica | 8–16 mg IV (titular) |

## Síndrome Nicotínica (músculo esquelético)

- Fasciculações (precoce e característico)
- Fraqueza muscular progressiva
- Paralisia dos músculos respiratórios (causa de morte)
- Taquicardia (efeito nicotínico supera bradicardia muscarínica)

## Síndrome Intermediária

- Ocorre 24–96h após intoxicação aguda
- Fraqueza muscular proximal + músculos cranianos + respiratórios
- Não responde à pralidoxima (enzima já envelhecida)
- Tratamento: suporte ventilatório`,
    },
    {
      id: "screening",
      title: "Identificação e Descontaminação",
      content: `## Reconhecimento

**História:** exposição a agrotóxico (campo, jardim, acidente industrial, tentativa de suicídio).

**Exame físico:**
- Miose bilateral intensa (pupilas puntiformes) — mais específico
- Broncorreia + broncoespasmo
- Salivação intensa, lacrimejamento
- Fasciculações musculares
- Bradicardia
- Sudorese profusa

**Laboratório:**
- Colinesterase eritrocitária (mais específica): < 50% do normal = intoxicação
- Colinesterase plasmática (butirílcolinesterase): cai mais precocemente
- Ambas podem estar normais no início — resultado não nega diagnóstico clínico

## Descontaminação — PRIORIDADE (EPI obrigatório)

1. **Retirar todas as roupas** do paciente (reduz exposição em 80%)
2. **Lavar pele** com água e sabão abundante (mínimo 15 min)
3. **Lavar olhos** com SF 0,9% (30 min se exposição ocular)
4. **EPI para equipe:** avental impermeável, luvas duplas, máscara N95, óculos
5. NÃO recolher roupas sem saco plástico fechado`,
    },
    {
      id: "conduct",
      title: "Conduta — Algoritmo",
      content: `## Passo 1 — EPI e Descontaminação (simultâneos)

Nunca se aproximar sem EPI. Descontaminação é emergência médica.

## Passo 2 — ABCDE

- Via aérea: IOT precoce se: insuficiência respiratória, coma, broncorreia intensa
- O₂ 15 L/min máscara
- Monitor: ECG (bradicardia, QTc)
- Acesso venoso calibroso × 2
- Aspiração frequente das secreções

## Passo 3 — Atropina (ANTÍDOTO MUSCARÍNICO)

**Dose inicial por gravidade:**
- Leve: 2–4 mg IV bolus
- Moderado: 4–8 mg IV bolus
- Grave: 8–16 mg IV bolus → dobrar a cada 5 min até secar secreções

**Meta da atropinização:**
- Broncorreia ausente (pulmões secos)
- Frequência cardíaca ≥ 80 bpm
- Ausência de broncospasmo
- NÃO usar midríase, taquicardia ou boca seca como meta (efeitos periféricos não refletem situação pulmonar)

**Infusão contínua:** 10–20% da dose de ataque por hora; titular conforme broncorreia

**Atenção:** doses massivas podem ser necessárias (200–1000 mg nas primeiras 24h)

## Passo 4 — Pralidoxima (REATIVADOR DA COLINESTERASE)

**Janela de ação:** eficaz nas primeiras 24–48h (antes do "envelhecimento" irreversível da enzima)

**Dose:**
- 1–2 g IV em 15–30 min (crianças: 25–50 mg/kg)
- Manutenção: 500 mg/h BIC por 24–48h
- OU 1 g IV a cada 4–6h

**Indicações:** fraqueza muscular moderada/grave, fasciculações, paralisia respiratória

**Contraindicações relativas:** carbamato (algumas espécies podem piorar)`,
    },
    {
      id: "treatment",
      title: "Tratamento Complementar",
      content: `## Convulsões

- Diazepam 10–20 mg IV bolus (1ª escolha — BZD são mais eficazes que fenitoína nesta intoxicação)
- Fenobarbital 20 mg/kg IV se refratário
- Midazolam 0,1–0,2 mg/kg IV como alternativa

## Contraindicados

- **Morfina, aminofilinas** — pioram broncoespasmo
- **Succinilcolina** — metabolismo pela pseudocolinesterase; efeito prolongado (paralisia prolongada)
- **Fenotiazinas** — reduzem limiar de convulsão

## Intoxicação por Carbamato

- Mecanismo similar ao organofosforado, mas **reversível espontaneamente** (horas)
- Atropina é eficaz
- Pralidoxima: controversa (geralmente não necessária, pode ser prejudicial em alguns carbamatos)
- Tratamento de suporte + atropina

## Monitorização

- Colinesterase seriada (até normalizar)
- Função respiratória: CVF, FR, SpO₂ — IOT profilática se CVF < 15 mL/kg
- ECG: QTc (risco de TdP após atropina)
- Balanço hídrico rigoroso`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Organofosforado Grave

\`\`\`
PACIENTE: _____ PESO: _____ kg

DESCONTAMINAÇÃO IMEDIATA:
- EPI obrigatório para equipe
- Retirar roupas + banho com água e sabão 15 min

ATROPINA (titular até secar secreções):
1. Atropina 8 mg IV bolus imediato
   → Repetir 4–8 mg IV a cada 5 min se broncorreia persistir
   → Quando secar: iniciar infusão 10–20% da dose total/hora
   → Preparar: Atropina _____ mg + SF 0,9% 100 mL → _____ mL/h

PRALIDOXIMA:
2. Pralidoxima 2g IV em 250 mL SF 0,9% em 30 min (se < 48h da exposição)
   → Manutenção: 500 mg/h BIC por 24–48h

SUPORTE:
3. O₂ 15 L/min máscara (IOT se CVF < 15 mL/kg ou coma)
4. SF 0,9% 500 mL/h (aspiração e secreções → desidratação)
5. Diazepam 10 mg IV SE convulsão
6. Monitorização: ECG contínuo, SpO₂, FR, aspiração frequente

CONTATO: CIATox 0800 722 6001
Notificação SINAN obrigatória
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Eddleston M et al. **Management of acute organophosphorus pesticide poisoning.** Lancet. 2008.

Roberts DM et al. **Influence of pesticide regulation on acute poisoning deaths.** Bull WHO. 2003.

WHO. **The WHO recommended classification of pesticides by hazard.** Geneva: WHO; 2019.

Ministério da Saúde / SVS. **Notificação de intoxicações exógenas — SINAN.** Brasília: MS; 2024.

CIATox. **Protocolo de intoxicação por agrotóxicos organofosforados e carbamatos.** São Paulo; 2024.

Eddleston M, Buckley NA. **Medical management of acute organophosphorus pesticide self-poisoning.** Pract Neurol. 2020.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. INTOXICAÇÃO POR METANOL/ETILENOGLICOL — Fomepizol/Hemodiálise
// ─────────────────────────────────────────────────────────────────────────────
export const protocolMetanol: EmergencyProtocol = {
  id: "intoxicacao-metanol-etilenoglicol-fomepizol",
  title: "Intoxicação por Metanol e Etilenoglicol — Fomepizol e Diálise",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["metanol", "etilenoglicol", "álcool de limpeza", "anticongelante", "fomepizol", "etanol antídoto", "acidose metabólica", "hemodiálise"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Intoxicação por Álcoois Tóxicos

Emergência toxicológica grave com mortalidade elevada se não tratada precocemente.

| Álcool | Fonte | Metabólito tóxico | Órgão-alvo |
|---|---|---|---|
| **Metanol** | Álcool de limpeza, falsificação de bebidas, solventes | Ácido fórmico | Nervo óptico, SNC |
| **Etilenoglicol** | Anticongelante (radiador), fluido de freio | Ácido oxálico | Rim |

**Latência:** o próprio álcool é pouco tóxico. A toxicidade vem dos **metabólitos** — que levam 12–24h para se acumular.

**Tríade clínica inicial:** embriaguez aparente + acidose metabólica com hiato aniônico elevado + hiato osmolar elevado.

> ⚠️ CIATox: 0800 722 6001. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Farmacologia e Cálculos",
      content: `## Hiato Osmolar

\`\`\`
Osmolalidade calculada = 2 × Na+ + Glicose/18 + Ureia/2,8
Hiato osmolar = Osmolalidade medida − Osmolalidade calculada
Normal < 10 mOsm/kg — se > 20 com acidose: suspeitar álcool tóxico
\`\`\`

## Hiato Aniônico

\`\`\`
Hiato aniônico = Na+ − (Cl− + HCO₃−)
Normal: 8–12 mEq/L
Elevado (> 16): MUDPILES — Metanol, Uremia, Diabética (CAD), Propileno glicol, Isoniazida, Lactato, Etilenoglicol, Salicilatos
\`\`\`

## Fases Clínicas

### Metanol

| Fase | Tempo | Manifestações |
|---|---|---|
| Fase 1 | 0–12h | Embriaguez leve, cefaleia, náuseas |
| Fase 2 | 12–24h | Acidose grave, cegueira (ácido fórmico), coma |
| Fase 3 | > 24h | Hemorragia de gânglio basal, morte |

**Cegueira:** borramento visual, fotofobia, visão de disco solar → pode ser irreversível.

### Etilenoglicol

| Fase | Tempo | Manifestações |
|---|---|---|
| Fase 1 (neurológica) | 0–12h | Embriaguez, nistagmo, ataxia, convulsão |
| Fase 2 (cardiovascular) | 12–24h | Taquicardia, ICC, SDRA |
| Fase 3 (renal) | 24–72h | LRA oligúrica (cristais de oxalato de Ca²+) |`,
    },
    {
      id: "screening",
      title: "Identificação",
      content: `## Suspeitar em

- Embriaguez sem odor etílico (metanol não cheira)
- Acidose metabólica grave com hiato aniônico elevado + hiato osmolar elevado
- Cegueira súbita ou distúrbio visual (metanol)
- LRA rápida + sedimento urinário com cristais de oxalato (etilenoglicol)
- Surto coletivo (falsificação de bebida alcoólica — metanol)
- Ingestão de anticongelante (suicídio, crianças)

## Exames Urgentes

| Exame | Achado esperado |
|---|---|
| Gasometria + eletrólitos | Acidose metabólica grave (pH 6,9–7,2), HCO₃ muito baixo |
| Osmolalidade sérica | Elevada → hiato osmolar > 20 |
| Função renal | LRA (etilenoglicol) |
| Nível sérico de metanol/etilenoglicol | Confirma e guia tratamento |
| Ácido lático | Diferencial (normal no álcool tóxico, elevado no choque) |
| Glicemia | Hipoglicemia (metanol) |
| Urinálise | Cristais de oxalato de Ca²+ em forma de agulha (etilenoglicol) |
| Fundo de olho | Edema de papila, hiperemia (metanol) |

## Cálculo do Nível Pelo Hiato Osmolar

\`\`\`
Nível estimado de metanol (mg/dL) = Hiato osmolar × 3,2
Nível estimado de etilenoglicol (mg/dL) = Hiato osmolar × 6,2
\`\`\``,
    },
    {
      id: "conduct",
      title: "Conduta — Antídoto e Diálise",
      content: `## Indicações de Antídoto (INICIAR IMEDIATAMENTE)

| Critério | Nível sérico | Alternativa |
|---|---|---|
| Qualquer suspeita + acidose | — | Iniciar empírico |
| Metanol | > 20 mg/dL | Fomepizol ou Etanol |
| Etilenoglicol | > 20 mg/dL | Fomepizol ou Etanol |

## Fomepizol (4-metilpirazol) — 1ª ESCOLHA

**Mecanismo:** inibe álcool desidrogenase → bloqueia formação dos metabólitos tóxicos

**Dose:**
- Ataque: **15 mg/kg IV** em 30 min
- Manutenção: **10 mg/kg IV** a cada 12h × 4 doses
- Após 48h: 15 mg/kg a cada 12h (indução enzimática)
- Diluir em 100 mL SF 0,9% ou SG 5%

**Vantagem sobre etanol:** sem sedação, sem hipoglicemia, dose precisa, melhor monitoramento.

## Etanol IV — Alternativa (Fomepizol Indisponível)

**Mecanismo:** compete com o álcool tóxico pela álcool desidrogenase

**Alvo:** nível sérico de etanol 100–150 mg/dL (equivale a 1–2g/L)

**Dose:**
- Ataque: etanol 10% IV 7,6 mL/kg em 30–60 min
- Manutenção: 1–2 mL/kg/h (ajustar por nível sérico e uso crônico de álcool)
- Monitorar: glicemia (hipoglicemia), sedação, nível de etanol 2/2h

## Hemodiálise — INDICAÇÕES

**Indicar se qualquer um dos critérios:**
- Acidose grave: pH < 7,1 (metanol) ou < 7,25 (etilenoglicol) apesar do antídoto
- Nível sérico: metanol > 50 mg/dL ou etilenoglicol > 50 mg/dL
- LRA grave (etilenoglicol)
- Cegueira ou coma (metanol)
- Deterioração clínica apesar do antídoto

**A hemodiálise remove o álcool tóxico E seus metabólitos — é curativa.**

**Durante HD:** aumentar dose do antídoto (fomepizol é dialisável — dar extra após cada sessão).`,
    },
    {
      id: "treatment",
      title: "Tratamento Complementar",
      content: `## Ácido Fólico / Folato (Metanol)

- Ácido fólico 50 mg IV a cada 4–6h (metaboliza ácido fórmico)
- Leucovorina 1 mg/kg IV (forma ativa — preferida se disponível)
- Continuar até metanol indetectável

## Tiamina + Piridoxina + Magnésio (Etilenoglicol)

- Tiamina 100 mg IV 6/6h (desvia metabolismo do etilenoglicol)
- Piridoxina 100 mg IV 6/6h (idem)
- MgSO₄ 2g IV (cofator enzimático)
- Objetivo: reduzir produção de oxalato

## Bicarbonato

- Tratar acidose grave (pH < 7,1)
- NaHCO₃ 1–2 mEq/kg IV → meta pH ≥ 7,2
- **Não** corrigir completamente — pode mascarar a resposta ao tratamento

## Critérios de Alta do Antídoto

- Nível sérico indetectável
- pH normalizado
- Hiato aniônico e osmolar normalizados
- Visão estável (metanol)
- Função renal estável (etilenoglicol)`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Metanol/Etilenoglicol

\`\`\`
PACIENTE: _____ PESO: _____ kg   pH: _____  HCO₃: _____

ANTÍDOTO (iniciar imediatamente):
1. Fomepizol 15 mg/kg IV em 30 min (ATAQUE)
   = _____ mg em 100 mL SF 0,9% → correr em 30 min
   → Manutenção: Fomepizol 10 mg/kg IV 12/12h
   (se fomepizol indisponível: Etanol 10% IV 7,6 mL/kg em 60 min → 1 mL/kg/h BIC)

SE METANOL:
2. Ácido fólico 50 mg IV 4/4h (metaboliza ácido fórmico)

SE ETILENOGLICOL:
3. Tiamina 100 mg IV 6/6h
4. Piridoxina 100 mg IV 6/6h
5. MgSO₄ 2g IV em 10 min

ACIDOSE GRAVE (pH < 7,1):
6. NaHCO₃ 8,4% 100 mL IV em 15 min → titular pH ≥ 7,2

SUPORTE:
7. SF 0,9% 125 mL/h IV
8. Glicemia 2/2h (etanol causa hipoglicemia)
9. Monitorizar função renal, diurese, eletrólitos 4/4h

CONTATO IMEDIATO: Nefrologia (diálise), CIATox 0800 722 6001

INDICAR HEMODIÁLISE SE:
□ pH < 7,1 apesar do antídoto
□ Nível metanol > 50 mg/dL ou etilenoglicol > 50 mg/dL
□ LRA progressiva
□ Distúrbio visual (metanol)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Barceloux DG et al. **American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning.** J Toxicol Clin Toxicol. 2002.

Barceloux DG et al. **American Academy of Clinical Toxicology practice guidelines on the treatment of ethylene glycol poisoning.** J Toxicol Clin Toxicol. 1999.

Brent J et al. **Fomepizole for the treatment of methanol poisoning (MP1 and MP2).** NEJM. 2001.

CIATox. **Protocolo de álcoois tóxicos.** São Paulo; 2024.

Hovda KE et al. **Methanol outbreak in Norway.** Clin Toxicol. 2005.

Mégarbane B et al. **Methanol and ethylene glycol: current approach.** Intensive Care Med. 2016.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. TAMPONAMENTO CARDÍACO — Pericardiocentese
// ─────────────────────────────────────────────────────────────────────────────
export const protocolTamponamento: EmergencyProtocol = {
  id: "tamponamento-cardiaco-pericardiocentese",
  title: "Tamponamento Cardíaco — Pericardiocentese de Emergência",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["tamponamento cardíaco", "derrame pericárdico", "pericardiocentese", "tríade de beck", "pulso paradoxal", "eco pericárdico"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Tamponamento Cardíaco

Emergência circulatória por compressão das câmaras cardíacas pelo líquido pericárdico acumulado, impedindo o enchimento diastólico e reduzindo o débito cardíaco.

**Fisiopatologia:** acúmulo de líquido no espaço pericárdico → ↑ pressão intrapericárdica → colapso de câmaras (AD e VD primeiro) → ↓ DC → choque obstrutivo.

**A velocidade de acúmulo importa mais que o volume:**
- Acúmulo rápido (trauma, ruptura): 150–200 mL causam tamponamento
- Acúmulo lento (derrame crônico): > 1 litro pode ser tolerado

> ⚠️ Emergência cirúrgica. Pericardiocentese salva vidas. Avaliação cardiológica/cirúrgica urgente.`,
    },
    {
      id: "def",
      title: "Causas e Fisiopatologia",
      content: `## Causas por Contexto Clínico

| Contexto | Causa mais provável |
|---|---|
| Trauma torácico | Hemopericárdio (laceração cardíaca) |
| Neoplasia conhecida | Derrame neoplásico (pulmão, mama, linfoma) |
| IRC/uremia | Pericardite urêmica |
| Pós-IAM | Ruptura de parede livre (Dressler) |
| Pós-cirurgia cardíaca | Hemopericárdio pós-operatório |
| Dissecção de aorta tipo A | Hemopericárdio por extensão |
| LES/AR/esclerodermia | Pericardite autoimune |
| HIV/TB | Pericardite infecciosa |
| Hipotireoidismo | Derrame mixedematoso |

## Adaptação Fisiológica

O pericárdio é inextensível. A relação pressão-volume é exponencial:
- Pequenos volumes adicionais em pericárdio cheio → grande aumento de pressão
- Não existe "nível seguro" para choque — tratar baseado na clínica, não no volume`,
    },
    {
      id: "screening",
      title: "Diagnóstico — Tríade de Beck e Ecocardiograma",
      content: `## Tríade de Beck (clássica, mas incompleta)

1. **Hipotensão** (↓ DC)
2. **Turgência jugular** (↑ pressão venosa)
3. **Bulhas abafadas** (líquido amortece sons)

**Presente completa em < 40% dos casos** — não aguardar a tríade para suspeitar.

## Sinais Diagnósticos

| Sinal | Sensibilidade | Especificidade |
|---|---|---|
| **Pulso paradoxal** > 10 mmHg | 80% | 80% |
| Taquicardia sinusal | 95% | Baixa |
| Hipotensão | 60% | Variável |
| Alternância elétrica no ECG | 20% | 90% |
| Colapso de AD no eco | 80–90% | 80% |

## Pulso Paradoxal — Como Medir

1. Insuflar o manguito acima da PAS
2. Deflar lentamente até ouvir os primeiros sons (apenas na expiração)
3. Deflar até ouvir em todos os ciclos
4. **Diferença > 10 mmHg = pulso paradoxal positivo**

## Ecocardiograma Pericárdico (FAST Cardíaco)

- **Exame de escolha** — disponível na emergência
- Colapso diastólico do AD: sinal mais precoce (sensibilidade 85%)
- Colapso diastólico do VD: mais específico (60%)
- Variação respiratória do fluxo mitral > 25%: confirma tamponamento
- Guia a pericardiocentese

## ECG

- Taquicardia sinusal (quase sempre)
- Alternância elétrica: QRS com amplitude variável ciclo a ciclo (patognomônico — 20%)
- Microvoltagem (QRS < 5 mm nas derivações dos membros)`,
    },
    {
      id: "conduct",
      title: "Conduta — Pericardiocentese",
      content: `## Medidas de Estabilização (Nunca Definitivas)

1. **Posição:** cabeceira 45° (melhora retorno venoso)
2. **Volume:** SF 0,9% 500 mL IV rápido (aumenta pré-carga temporariamente)
3. **Evitar:** diuréticos, vasodilatadores, betabloqueadores (podem precipitar colapso)
4. **Vasopressor:** dopamina ou norepinefrina se choque grave
5. **IOT:** com cautela — VPP reduz pré-carga e pode causar colapso → ter pericardiocentese pronta antes

## Pericardiocentese de Emergência

### Técnica Subxifoide (Marfan) — mais usada

**Material:** agulha espinal 18G ou kit de pericardiocentese, seringa 50 mL, cabo de ECG, guia.

1. Posicionar paciente 45° semi-sentado
2. Antissepsia + anestesia local (lidocaína 2%)
3. Inserir agulha no ângulo entre processo xifoide e rebordo costal esquerdo
4. Direcionar para ombro esquerdo em ângulo de 45°
5. Aspirar suavemente avançando (~3–5 cm)
6. Se contato com miocárdio: ECG mostra supradesnivelamento de ST ou extrassístoles → recuar
7. Ao aspirar líquido: fixar posição, conectar guia, introduzir cateter de pigtail
8. Drenar lentamente (50 mL de cada vez) — melhora hemodinâmica imediata

**Guiado por eco:** preferido quando disponível — aumenta segurança.

**Atenção ao hemopericárdio:** sangue pericárdico não coagula (fibrina consumida). Se coagular → puncionou VD.

### Janela Pericárdica Cirúrgica

- Preferida em: trauma (hemopericárdio), suspeita de dissecção de aorta, pericardiocentese sem sucesso
- Urgência máxima em dissecção tipo A`,
    },
    {
      id: "treatment",
      title: "Tratamento por Causa",
      content: `## Após Pericardiocentese

- Manter dreno pericárdico por 24–48h (drenagem contínua, reduz recidiva)
- Enviar líquido para: citologia, cultura, ADA (TB), proteínas, DHL, glicose
- Investigar e tratar causa

## Tratamento por Etiologia

| Causa | Tratamento específico |
|---|---|
| Trauma / hemopericárdio | Cirurgia cardíaca urgente |
| Neoplásico | Pericardiocentese + quimio/radioterapia |
| Urêmico | Diálise + pericardiocentese se hemodinâmico |
| Infeccioso bacteriano | ATB + drenagem cirúrgica |
| TB | RIPE + pericardiocentese |
| LES/autoimune | Corticoide + AINEs |
| Pós-IAM (Dressler) | AINEs + corticoide; cirurgia se ruptura |
| Dissecção Aorta tipo A | Cirurgia cardíaca imediata |

## Recidiva

- Pericardiocentese + escleroterapia (tetraciclina, bleomicina) em neoplásico
- Janela pericárdica cirúrgica em recidivas frequentes`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Tamponamento Cardíaco

\`\`\`
PACIENTE: _____  PA: _____/_____  FC: _____  SpO₂: _____

ESTABILIZAÇÃO IMEDIATA:
1. SF 0,9% 500 mL IV em 15 min (aumenta pré-carga)
2. Cabeceira 45° — manter sempre
3. O₂ 15 L/min máscara não-reinalante
4. Monitorização: ECG, PA, SpO₂ contínuos
5. Acionar ecocardiografia URGENTE (FAST cardíaco)

SE CHOQUE:
6. Norepinefrina 4 mg/250 mL SG5% BIC
   Iniciar 0,1 mcg/kg/min → titular PAM ≥ 65 mmHg

PERICARDIOCENTESE (imediata se instável):
- Material: agulha 18G, seringa 50 mL, guia J, cateter pigtail
- Técnica subxifoide → aspirar → dreno pericárdico
- Enviar líquido: citologia, cultura, ADA, proteínas, DHL

APÓS PERICARDIOCENTESE:
7. Dreno pericárdico fechado, registrar débito horário
8. Eco pericárdico de controle após 1h
9. Solicitar: TC tórax com contraste (se dissecção suspeita)

CONTATO URGENTE: Cardiologia / Cirurgia Cardíaca
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Adler Y et al. **2015 ESC Guidelines for the diagnosis and management of pericardial diseases.** Eur Heart J. 2015.

Imazio M et al. **Management of pericardial effusion.** Eur Heart J. 2013.

Spodick DH. **Acute cardiac tamponade.** NEJM. 2003.

Maisch B et al. **Guidelines on the diagnosis and management of pericardial diseases.** Eur Heart J. 2004.

SBC. **Diretriz Brasileira de Pericardiopatias.** Arq Bras Cardiol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. VIA AÉREA DIFÍCIL — DAS/PUMA
// ─────────────────────────────────────────────────────────────────────────────
export const protocolViaAereaDificil: EmergencyProtocol = {
  id: "via-aerea-dificil-das-puma",
  title: "Manejo de Via Aérea Difícil — DAS/PUMA 2022",
  categoryId: "resuscitation",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["via aérea difícil", "intubação difícil", "das", "puma", "videolaringoscopia", "cricotireoidotomia", "cant intubate cant oxygenate", "cico"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Via Aérea Difícil

Situação em que o profissional treinado encontra dificuldade para manter oxigenação, ventilar com máscara ou realizar laringoscopia/intubação.

**Regra de ouro:** manter oxigenação é sempre mais importante que intubar.

**Diretrizes referência:**
- DAS (Difficult Airway Society) Guidelines 2015 — adultos
- PUMA (Pre-hospital Unanticipated Difficult Airway) Guidelines 2022
- aSA Difficult Airway Algorithm 2022

**Hierarquia:**
1. Manter oxigenação (máscara, BVM, supraglótico)
2. Intubar com menor risco possível
3. Acesso cirúrgico de emergência (CICO)

> ⚠️ Disclaimer: apoio à decisão. Habilidade técnica é fundamental.`,
    },
    {
      id: "def",
      title: "Definição e Preditores",
      content: `## Definição DAS 2015

**Via aérea difícil:** dificuldade para um médico experiente em:
- Ventilação com máscara facial
- Uso de dispositivo supraglótico
- Laringoscopia
- Intubação traqueal
- Oxigenação

## Preditores de Dificuldade (LEMON)

| L | Look externally | Macroglossia, micrognatia, obesidade, trauma facial |
| E | Evaluate 3-3-2 rule | Abertura bocal < 3 dedos, mento-hióideo < 3 dedos, tireoidiano < 2 dedos |
| M | Mallampati | Classe III–IV (úvula não visível) |
| O | Obstruction | Massa, hematoma, epiglotite |
| N | Neck mobility | Cervical fixo, colar, obesidade cervical |

## Classificação de Cormack-Lehane

| Grau | Visualização | Dificuldade |
|---|---|---|
| I | Glote completa | Fácil |
| II | Glote parcial | Moderada |
| III | Somente epiglote | Difícil |
| IV | Nada visível | Muito difícil |`,
    },
    {
      id: "screening",
      title: "Avaliação e Planejamento",
      content: `## Avaliação Pré-Intubação — SOAP ME

- **S** — Suction (aspirador funcionando)
- **O** — Oxygen (O₂ pré-oxigenação pronta)
- **A** — Airway equipment (laringoscópio, guia, tubos, supraglótico)
- **P** — Pharmacy (drogas de SRI prontas, reversor NMB)
- **M** — Monitoring (ECG, SpO₂, capnógrafo)
- **E** — End tidal CO₂ (capnografia disponível)

## Pré-Oxigenação — Obrigatória

**Meta:** SpO₂ ≥ 95% antes da apneia.

| Técnica | Aplicação |
|---|---|
| Máscara facial alta concentração | Todos os pacientes |
| BVM com PEEP valve 5 cmH₂O | Ventilação assistida se FR < 10 |
| OHD (oxigenação apneica) | Cânula nasal 15 L/min durante laringoscopia — estende apneia segura |
| CPAP/VNI | Obesos, gestantes, pneumonia |

## Identificar: Pode Ventilar? Pode Intubar?

| Situação | Estratégia |
|---|---|
| Pode ventilar + pode intubar | SRI padrão |
| Pode ventilar + difícil intubar | Acordado com sedação leve + videolaringoscópio |
| Não pode ventilar + pode intubar | SRI urgente + plano B imediato |
| **CICO** (Can't Intubate, Can't Oxygenate) | **Cricotireoidotomia imediata** |`,
    },
    {
      id: "conduct",
      title: "Algoritmo de Via Aérea Difícil",
      content: `## Algoritmo DAS 2015 — Intubação Não Planejada Difícil

### Passo 1 — Primeira Tentativa de Laringoscopia

- Laringoscópio de lâmina adequada
- Posição de cheiramento (HELP em obesos)
- Máxima 3 tentativas de laringoscopia direta

**Se Cormack III/IV:**
- Usar guia articulada (bougie) — sempre ter na mão
- BURP (Backwards Upwards Rightwards Pressure)
- Trocar para videolaringoscópio na 2ª tentativa

### Passo 2 — Falha na Intubação

**Declarar falha após 3 tentativas.**

1. **Chamar ajuda** imediata
2. **Manter oxigenação:** máscara BVM eficaz? → manter
3. **Dispositivo supraglótico** (LMA/iGEL) — inserir e ventila?
   - Se sim → considerar cirurgia com laringoscópio + fibroscópio via LMA
4. **Videolaparingoscópio** com segunda operadora

### Passo 3 — Não Ventila + Não Intuba (CICO)

**EMERGÊNCIA MÁXIMA — TEMPO É VIDA**

**Cricotireoidotomia imediata:**

**Técnica Cirúrgica Rápida (FONA — Front Of Neck Access):**
1. Palpar membrana cricotireóidea
2. Incisão vertical na pele 3–4 cm
3. Incisão transversal na membrana cricotireóidea
4. Introduzir tubo traqueal 6,0 cuffed ou cânula de traqueostomia 6,0
5. Inflar cuff, ventilar, confirmar capnografia

**Se não palpar membrana:** incisão ampla vertical + blunt dissection

**Técnica por punção (provisória):**
- Agulha 14G → insuflação de O₂ → 1–4 min de oxigenação (depois hipercapnia)
- Preferir técnica cirúrgica se treinado`,
    },
    {
      id: "treatment",
      title: "Dispositivos e Técnicas Específicas",
      content: `## Videolaringoscópio

- **Indicação:** Cormack III–IV, pescoço imóvel, PUMA
- Melhora visualização em 1–2 graus de Cormack
- Curva de aprendizado mais rápida que laringoscopia direta
- Modelos: McGrath, GlideScope, C-MAC

## Dispositivos Supraglóticos (LMA)

| Dispositivo | Vantagem |
|---|---|
| LMA clássica | Mais disponível |
| LMA Supreme | Canal de drenagem gástrica |
| iGEL | Fácil inserção, sem manguito inflável |
| Fastrach LMA | Permite intubação cega |

**Indicação:** falha de intubação + manutenção da oxigenação

## Fibroscópio Flexível (intubação acordado)

- **Indicação:** via aérea difícil prevista + paciente cooperativo
- Sedação com midazolam 1–2 mg + fentanil 50–100 mcg
- Anestesia tópica: lidocaína 10% spray + nebulização
- Permite intubação com paciente respirando espontaneamente

## SRI — Drogas

| Droga | Dose | Observação |
|---|---|---|
| **Etomidato** | 0,3 mg/kg IV | Hemodinâmica estável — padrão |
| **Cetamina** | 1–2 mg/kg IV | Choque, broncoespasmo, trauma |
| Propofol | 1–2 mg/kg IV | Evitar em choque |
| Midazolam | 0,1–0,2 mg/kg IV | Dose menor em choque |
| **Succinilcolina** | 1,5 mg/kg IV | Relaxante rápido (60s) — cuidado hipercalemia |
| Rocurônio | 1,2 mg/kg IV | Reversível com sugamadex 16 mg/kg |`,
    },
    {
      id: "followup",
      title: "Confirmação e Pós-Intubação",
      content: `## Confirmação da Intubação

**Sempre usar capnografia — padrão-ouro:**
- EtCO₂ > 35 mmHg em cada ciclo = intubação traqueal confirmada
- EtCO₂ ausente = esôfago (retirar e reposicionar)

**Outros sinais:**
- Ausculta epigástrica (ausência de borbulhamento)
- Ausculta bilateral do tórax
- Fogagem do tubo
- Rx tórax: tubo 2–3 cm acima da carina

## Pós-IOT Imediato

1. Fixar tubo adequadamente (fita + combi-fix)
2. VM: VCV, Vt 6–8 mL/kg PPI, FR 12–14 ipm, PEEP 5
3. Sedoanalgesia: propofol + fentanil BIC
4. Rx tórax confirmação de posição
5. Gasometria 30 min após

## Extubação Difícil

- Planejar com mesmo rigor da intubação
- Teste de respiração espontânea antes
- Introduzir guia pelo tubo antes de extubar (emergência)
- Dexametasona 8 mg IV 6–8h antes (edema pós-extubação)`,
    },
    {
      id: "prescriptions",
      title: "Prescrições — SRI",
      content: `## Prescrição Modelo — SRI Padrão

\`\`\`
PACIENTE: _____ PESO: _____ kg

PRÉ-OXIGENAÇÃO (3–5 min):
1. O₂ 15 L/min máscara não-reinalante
   + Cânula nasal 15 L/min durante laringoscopia (oxigenação apneica)

PRÉ-MEDICAÇÃO (3 min antes):
2. Lidocaína 1,5 mg/kg IV (= _____ mg) — se TCE ou broncoespasmo

INDUÇÃO (simultânea):
3. Etomidato 0,3 mg/kg IV bolus (= _____ mg)
   OU Cetamina 1,5 mg/kg IV (= _____ mg) se choque/broncoespasmo

RELAXANTE NEUROMUSCULAR (após indução):
4. Succinilcolina 1,5 mg/kg IV bolus (= _____ mg)
   OU Rocurônio 1,2 mg/kg IV (= _____ mg) se contraindicação à succinilcolina

PÓS-IOT:
5. Propofol 1% BIC — iniciar 2 mg/kg/h (ajustar RASS -2 a -3)
6. Fentanil 50 mcg/h BIC (analgesia)
7. VM: VCV Vt 6 mL/kg, FR 14, PEEP 5, FiO₂ 100% → reduzir conforme SpO₂
8. Capnografia contínua
9. Rx tórax + gasometria

SE CICO (não ventila, não intuba):
→ CRICOTIREOIDOTOMIA CIRÚRGICA IMEDIATA
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Frerk C et al. **Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults.** Br J Anaesth. 2015.

Higgs A et al. **Guidelines for the management of tracheal intubation in critically ill adults.** Br J Anaesth. 2018.

Cook TM et al. **Fourth National Audit Project of the Royal College of Anaesthetists (NAP4).** Br J Anaesth. 2011.

Sorbello M et al. **PUMA Guidelines 2022 — Pre-hospital Unanticipated difficult airway.** Resuscitation. 2022.

ASA. **Practice Guidelines for Management of the Difficult Airway.** Anesthesiology. 2022.

SBA — Sociedade Brasileira de Anestesiologia. **Consenso de via aérea difícil.** 2023.`,
    },
  ],
};
