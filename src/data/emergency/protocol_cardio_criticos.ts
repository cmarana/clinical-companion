/**
 * Protocolos cardiovasculares e críticos P1 — todos faltantes no app.
 * Auditoria 2026-05-29. Fontes: ESC, AHA, SBC, ISTH, WHO, EAST.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. CHOQUE CARDIOGÊNICO — SCAI A–E
// ─────────────────────────────────────────────────────────────────────────────
export const protocolChoqueCardiogenico: EmergencyProtocol = {
  id: "choque-cardiogenico-scai",
  title: "Choque Cardiogênico — Classificação SCAI e Manejo",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["choque cardiogênico", "SCAI", "iabp", "impella", "dobutamina", "norepinefrina", "iamcsst", "disfunção ventricular"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Choque Cardiogênico

Mortalidade de 30–50% mesmo com intervenção. Definido como baixo débito cardíaco com hipoperfusão tecidual por disfunção cardíaca primária.

**Critérios diagnósticos:**
- PAS < 90 mmHg por > 30 min OU vasopressor para manter PAS ≥ 90 mmHg
- Sinais de hipoperfusão: alteração de consciência, extremidades frias, oligúria, lactato > 2 mmol/L
- Causa cardíaca (não hipovolemia, não sepse)

**Causa mais comum:** IAM com supra (IAMCSST) — responsável por 80% dos casos.

> ⚠️ Avaliação cardiológica e hemodinâmica urgente. Não substitui avaliação especializada.`,
    },
    {
      id: "def",
      title: "Classificação SCAI (Society for Cardiovascular Angiography and Interventions)",
      content: `## Estadiamento SCAI 2022

| Estágio | Nome | Características | Mortalidade |
|---|---|---|---|
| **A** | At Risk | Sem choque, alto risco (IAM grande, valvopatia) | < 5% |
| **B** | Beginning | Hipotensão/taquicardia sem hipoperfusão | 10–15% |
| **C** | Classic | Hipoperfusão + intervenção necessária | 25–40% |
| **D** | Deteriorating | Falha ao tratamento inicial | 40–60% |
| **E** | Extremis | PCR/colapso/desfibrilações | > 60% |

## Hemodinâmica do Choque Cardiogênico

| Parâmetro | Normal | Choque Cardiogênico |
|---|---|---|
| DC (L/min) | 4–8 | < 2,2 |
| IC (L/min/m²) | 2,5–4 | < 1,8 |
| PCAP (mmHg) | 8–12 | > 18 |
| RVS (dyn.s/cm⁵) | 800–1200 | > 1500 |
| SvO₂ (%) | 65–75 | < 55 |`,
    },
    {
      id: "screening",
      title: "Identificação e Causa",
      content: `## Causas de Choque Cardiogênico

| Causa | Frequência | Pista clínica |
|---|---|---|
| IAMCSST com disfunção VE | 80% | ECG, troponina |
| Complicação mecânica do IAM | 5% | Sopro novo, deterioração súbita |
| Miocardite fulminante | 5% | Jovem, pródromo viral |
| IC aguda descompensada | 5% | IC crônica conhecida |
| Valvopatia aguda | 3% | Regurgitação mitral/aórtica aguda |
| Cardiomiopatia de Takotsubo | 2% | Mulher idosa, estresse |

## Complicações Mecânicas do IAM (urgência máxima)

- **CIV (comunicação interventricular):** sopro holossistólico novo + choque + IAM inferior ou anterior extenso → cirurgia urgente
- **Regurgitação mitral aguda:** edema pulmonar + sopro sistólico + infarto inferior → cirurgia urgente
- **Ruptura de parede livre:** parada cardíaca, tamponamento → cirurgia emergência

## Exame Físico — Perfis de Choque

| Perfil | Úmido/Seco | Quente/Frio | Tratamento |
|---|---|---|---|
| Frio e Úmido | Úmido (congestão) | Frio (baixo DC) | Diurético + inotrópico |
| Frio e Seco | Seco | Frio | Volume + inotrópico |
| Quente e Úmido | Úmido | Quente (vasodilatado) | Diurético + vasopressor |`,
    },
    {
      id: "conduct",
      title: "Conduta — Estabilização e Reperfusão",
      content: `## Prioridade Máxima — Tratar a Causa

**IAMCSST com choque:** angioplastia primária emergencial — a reperfusão é o único tratamento que muda o prognóstico.

## Suporte Hemodinâmico Escalonado

### Nível 1 — Vasopressores e Inotrópicos

**Vasopressor de escolha:** Norepinefrina
- Dose: 0,1–1 mcg/kg/min BIC
- Meta: PAM ≥ 65 mmHg
- Superior à dopamina (menos arritmias — SOAP II trial)

**Inotrópico:** Dobutamina
- Dose: 2,5–20 mcg/kg/min BIC
- Meta: IC > 2,2 L/min/m², SvO₂ > 65%
- CUIDADO: aumenta consumo de O₂ miocárdico

**Combinação:** Norepinefrina + Dobutamina em choque grave

### Nível 2 — Suporte Circulatório Mecânico (SCM)

| Dispositivo | Suporte DC | Indicação |
|---|---|---|
| IABP (balão intra-aórtico) | 0,5–1 L/min | Complicações mecânicas, pré-cirurgia |
| Impella CP | 3–4 L/min | Choque refratário a drogas |
| ECMO VA | 4–6 L/min | Colapso circulatório, PCR |

**Indicar SCM se:** choque SCAI C/D refratário a 30 min de vasopressor+inotrópico

### Nível 3 — Transplante / VAD definitivo

Para pacientes sem recuperação miocárdica esperada.

## Manejo do Edema Pulmonar Concomitante

- Furosemida 40–80 mg IV (se PA permite)
- VNI (CPAP) se SpO₂ < 90% — reduz trabalho respiratório
- IOT se falha da VNI ou instabilidade`,
    },
    {
      id: "treatment",
      title: "Tratamento — Protocolos por Perfil",
      content: `## Choque SCAI C/D — Protocolo de Emergência

### 0–30 min

1. ECG, ecocardiograma emergencial (POCUS)
2. Cateter vesical + débito urinário horário
3. Gasometria + lactato
4. Acesso venoso central (se possível — Swan-Ganz em UTI)
5. Norepinefrina iniciar 0,1 mcg/kg/min, titular PAM ≥ 65 mmHg

### 30–60 min

6. Ecocardiograma completo (FEVE, valvas, pericárdio, complicações)
7. Se FEVE < 30% + sem resposta: Dobutamina 5 mcg/kg/min
8. Cateterismo urgente se IAMCSST/SCA

### 60 min em diante

9. Se refratário: considerar SCM (Impella/ECMO VA)
10. UTI com monitorização hemodinâmica contínua

## Metas de UTI

| Parâmetro | Meta |
|---|---|
| PAM | ≥ 65 mmHg |
| Lactato | < 2 mmol/L (queda 10%/2h) |
| Débito urinário | > 0,5 mL/kg/h |
| SvO₂ | > 65% |
| SpO₂ | > 94% |

## Contraindicações

- Trombolítico: NÃO usar em choque cardiogênico (não compensa angioplastia)
- Betabloqueador: CONTRAINDICADO na fase aguda do choque
- Verapamil/Diltiazem: CONTRAINDICADO se disfunção ventricular`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Choque Cardiogênico

\`\`\`
PACIENTE: _____ PESO: _____ kg   PA: _____/_____   Lactato: _____

1. Monitorização contínua: ECG, PA invasiva (PAI), SpO₂, débito urinário

2. Norepinefrina 4 mg/250 mL SG5% BIC
   Iniciar 0,1 mcg/kg/min (= _____ mL/h)
   Titular PAM ≥ 65 mmHg

3. Dobutamina 250 mg/250 mL SF 0,9% BIC
   Iniciar 5 mcg/kg/min (= _____ mL/h)
   SE: FEVE < 30% ou lactato > 2 sem melhora

4. Furosemida 40–80 mg IV (SE congestão + PA permite)
   OU Furosemida _____ mg/h BIC (meta: débito urinário _____ mL/h)

5. SF 0,9% manutenção 500 mL/6h (monitorar sobrecarga)

6. Gasometria arterial + lactato + eletrólitos 2/2h

7. Ecocardiograma urgente (POCUS) — avaliar FEVE, valvas, pericárdio

8. ECG 12 derivações — SCA? Arritmia?

9. Cateterismo urgente se IAMCSST (acionar hemodinâmica)

ESCALAR SE sem resposta em 30 min:
→ Suporte circulatório mecânico (Impella/ECMO VA)
→ Acionar UTI cardíaca / cirurgia cardíaca
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Naidu SS et al. **SCAI SHOCK Stage Classification Expert Consensus Update: 2022 Revision.** J Am Coll Cardiol. 2022.

Thiele H et al. **Intraaortic Balloon Support for Myocardial Infarction with Cardiogenic Shock (IABP-SHOCK II).** NEJM. 2012.

De Backer D et al. **Dopamine versus Norepinephrine in Shock (SOAP II).** NEJM. 2010.

ESC Guidelines on Acute Coronary Syndromes. Eur Heart J. 2023.

SBC. **Diretriz Brasileira de Insuficiência Cardíaca Aguda.** Arq Bras Cardiol. 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. CHOQUE HIPOVOLÊMICO — Hipotensão Permissiva
// ─────────────────────────────────────────────────────────────────────────────
export const protocolChoqueHipovolemico: EmergencyProtocol = {
  id: "choque-hipovolemico-hipotensao-permissiva",
  title: "Choque Hipovolêmico — Hipotensão Permissiva e Ressuscitação",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["choque hipovolêmico", "hipotensão permissiva", "ressuscitação", "cristaloide", "albumina", "choque hemorrágico", "EAST"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Choque Hipovolêmico

Déficit de volume intravascular por perda de sangue (hemorrágico) ou fluidos (não-hemorrágico — diarreia, vômitos, queimaduras).

**Conceito moderno:** ressuscitação balanceada > ressuscitação agressiva com cristaloides.

**Hipotensão permissiva no trauma hemorrágico:**
- Meta PAS 80–90 mmHg até controle cirúrgico do sangramento
- Exceção: TCE grave (PAS ≥ 110 mmHg) e lesão medular (PAM ≥ 85 mmHg)

> ⚠️ Avaliação cirúrgica urgente se hemorrágico. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Classificação ATLS",
      content: `## Classificação do Choque Hemorrágico (ATLS 11ª ed.)

| Classe | Perda sanguínea | FC | PAS | FR | Estado mental | Conduta |
|---|---|---|---|---|---|---|
| **I** | < 15% (< 750 mL) | Normal | Normal | 14–20 | Ansioso | Observação |
| **II** | 15–30% (750–1500 mL) | 100–120 | Normal/↓ | 20–30 | Ansioso | Volume |
| **III** | 30–40% (1500–2000 mL) | 120–140 | ↓ | 30–40 | Confuso | Volume + CH |
| **IV** | > 40% (> 2000 mL) | > 140 | ↓↓ | > 40 | Letárgico | Cirurgia emergência |

## Choque Distributivo vs Hipovolêmico

| Parâmetro | Hipovolêmico | Distributivo (sepse) |
|---|---|---|
| Pele | Fria, úmida | Quente, seca (inicial) |
| PVC | Baixa | Baixa (relativa) |
| RVS | Elevada | Reduzida |
| DC | Reduzido | Elevado (hiperdínâmico) |`,
    },
    {
      id: "screening",
      title: "Identificação",
      content: `## Sinais de Choque Hipovolêmico

**Precoces (classe I-II):**
- Taquicardia (sinal mais precoce)
- Ansiedade, agitação
- Redução da pressão de pulso
- Enchimento capilar > 2s

**Tardios (classe III-IV):**
- Hipotensão (sinal tardio — já perdeu 30%)
- Oligúria (< 0,5 mL/kg/h)
- Confusão, torpor
- Acidose metabólica (lactato ↑)

## Causas de Sangramento — "ABCDE do Sangramento"

- **A**bdome (trauma, AAA roto, gravidez ectópica)
- **B**acias (fratura de pelve — até 3–4 L de perda)
- **C**oxas (fratura de fêmur — até 1,5–2 L por fratura)
- **D**o solo (exsanguinação externa)
- **E**ndotorácico (hemotórax — até 2,5 L por lado)

## Exames Urgentes

- Hemograma (Hb pode ser normal no sangramento agudo)
- Lactato (melhor marcador de hipoperfusão)
- Coagulograma (coagulopatia precoce no trauma)
- Fibrinogênio (< 150 mg/dL = CIVD)
- Tipagem sanguínea + prova cruzada urgente
- FAST (sangramento abdominal/pericárdico)`,
    },
    {
      id: "conduct",
      title: "Conduta — Ressuscitação",
      content: `## Algoritmo de Ressuscitação

### Passo 1 — Controle do sangramento (simultaneamente)

- Compressão direta em sangramentos externos
- Torniquete se extremidade com sangramento arterial
- Imobilização de pelve (cinto pélvico/lençol)
- Acionar cirurgia se indicação

### Passo 2 — Acesso vascular

- 2 acessos venosos periféricos calibrosos (≥ 16G) ou
- Acesso intraósseo (IO) se periférico impossível em < 90s
- Cateter venoso central se refratário

### Passo 3 — Ressuscitação volêmica

**Choque hemorrágico — Protocolo de Transfusão Maciça (ver protocolo específico):**
- Proporção 1:1:1 (CH : PFC : Plaquetas)
- Ácido tranexâmico 1g IV em 10 min (se < 3h do trauma)
- Meta: Hb ≥ 7–8 g/dL, plaquetas ≥ 50.000, fibrinogênio ≥ 150 mg/dL

**Choque não-hemorrágico (diarreia, vômitos, queimaduras):**
- SF 0,9% 1–2 L IV rápido → reavaliar
- Manter 250–500 mL/h conforme resposta

### Passo 4 — Hipotensão permissiva (trauma hemorrágico)

**Meta: PAS 80–90 mmHg** até controle cirúrgico

**Exceções — manter PAS mais alta:**
- TCE grave: PAS ≥ 110 mmHg
- Lesão medular: PAM ≥ 85 mmHg
- Idosos/hipertensos: PAS ≥ 100 mmHg

**Vasopressor se hipotensão refratária a volume:**
- Norepinefrina 0,1–1 mcg/kg/min (ponte para cirurgia)`,
    },
    {
      id: "treatment",
      title: "Fluidos — Escolha e Volumes",
      content: `## Cristaloides — Qual Escolher?

| Fluido | Composição | Uso preferencial |
|---|---|---|
| **SF 0,9%** | Na 154, Cl 154 | Hiponatremia, alcalose metabólica, trauma crânio |
| **Ringer Lactato** | Balanceado | Choque hemorrágico, trauma (exceto TCE) |
| **SG 5%** | Glicose 50 g/L | Hipoglicemia, manutenção |
| **SF 0,45%** | Hipotônico | Hipernatremia — NÃO usar em ressuscitação |

**ATENÇÃO:** SF 0,9% em grandes volumes → acidose hiperclorêmica (Cl 154 mEq/L).

## Coloides

| Coloide | Indicação | Contraindicação |
|---|---|---|
| Albumina 20% | Sepse, cirrótico, pós-paracentese | Trauma (sem benefício claro) |
| Albumina 4–5% | Ressuscitação em sepse | — |
| Amidos (HES) | **Não usar** — nefrotoxicidade | Sepse, IR |
| Gelatinas | Limitada, evidência fraca | IR, coagulopatia |

## Resposta ao Volume — Avaliação Dinâmica

| Teste | Método | Resposta positiva |
|---|---|---|
| PLR (Passive Leg Raise) | Elevar pernas 45° por 1 min | ↑ DC > 10% |
| Bolus de 250 mL SF | Observar PA e FC | ↑ PA > 5 mmHg |
| VPP (ventilado) | Variação de pressão de pulso | VPP > 13% |`,
    },
    {
      id: "followup",
      title: "Monitorização",
      content: `## Metas de Ressuscitação

| Parâmetro | Meta |
|---|---|
| Lactato | Queda ≥ 10% a cada 2h; < 2 mmol/L |
| Débito urinário | ≥ 0,5 mL/kg/h |
| PAM | ≥ 65 mmHg (ou 80–90 no trauma) |
| Hb | ≥ 7 g/dL (≥ 8 se cardiopata ou sangramento ativo) |
| pH | > 7,25 |
| Temperatura | ≥ 35°C (prevenir coagulopatia) |

## Tríade da Morte no Trauma

**Hipotermia + Acidose + Coagulopatia** = mortalidade > 90% quando completa.

Prevenir ativamente:
- Fluidos aquecidos
- Cobertor térmico
- Corrigir coagulopatia precocemente
- Bicarbonato se pH < 7,1`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Choque Hipovolêmico Trauma

\`\`\`
PACIENTE: _____ PESO: _____ kg   PA: _____/_____  FC: _____

CONTROLE DO SANGRAMENTO (imediato):
- Compressão direta / torniquete se extremidade
- Imobilização pélvica
- Acionar cirurgia

RESSUSCITAÇÃO:
1. Ácido tranexâmico 1g IV em 10 min (se < 3h do trauma)
   → Segunda dose: 1g IV em 8h

2. Ativação Protocolo Transfusão Maciça (PTM) se: PAS < 90 + FC > 120
   → Concentrado de Hemácias 2 U IV
   → Plasma Fresco Congelado 2 U IV   (proporção 1:1)
   → Plaquetas 1 pool/aférese IV
   → Crioprecipitado 10 U se fibrinogênio < 150 mg/dL

3. SE não-hemorrágico: Ringer Lactato 1L IV em 15 min → reavaliar

META (trauma hemorrágico):
   PAS 80–90 mmHg (hipotensão permissiva)
   EXCETO TCE: PAS ≥ 110 mmHg

4. Norepinefrina 4 mg/250 mL SG5% BIC SE refratário ao volume
   Iniciar 0,1 mcg/kg/min → titular

MONITORIZAÇÃO:
5. Débito urinário horário (sonda vesical)
6. Gasometria + lactato 1/1h
7. Hemograma + coagulograma + fibrinogênio 2/2h
8. FAST urgente
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

ATLS Subcommittee. **Advanced Trauma Life Support: 11th Edition.** Chicago: ACS; 2023.

CRASH-2 trial collaborators. **Tranexamic acid in patients with traumatic bleeding.** Lancet. 2010.

Holcomb JB et al. **Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio (PROPPR).** JAMA. 2015.

EAST — Eastern Association for the Surgery of Trauma. **Guidelines for resuscitation of hemorrhagic shock.** J Trauma. 2022.

Corrêa TD et al. **Ressuscitação hemodinâmica no choque circulatório.** Rev Bras Ter Intensiva. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. EAP / IC DESCOMPENSADA — Perfis de Forrester
// ─────────────────────────────────────────────────────────────────────────────
export const protocolEAP: EmergencyProtocol = {
  id: "eap-ic-descompensada-forrester",
  title: "EAP / IC Descompensada — Perfis de Forrester e Manejo",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["edema agudo pulmão", "ic descompensada", "forrester", "furosemida", "nitrato", "cpap", "vni", "bnp"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Edema Agudo de Pulmão / IC Descompensada

Emergência cardiológica com mortalidade hospitalar de 5–10%. Tratamento guiado pelo **perfil clínico-hemodinâmico** (classificação de Forrester).

**Fisiopatologia:** ↑ pressão capilar pulmonar (> 25 mmHg) → extravasamento para alvéolos → hipóxia → ↑ trabalho respiratório → falência respiratória.

**Causas precipitantes ("6 I's"):**
- **I**nfecção (pneumonia, ITU, SBE)
- **I**squemia (IAM, angina instável)
- **I**ngestão (sal, água, falta de medicação)
- **I**ncumprimento terapêutico
- **I**nteração medicamentosa (AINE, BB novo)
- **I**nsuficiência renal aguda

> ⚠️ Avaliação cardiológica urgente. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Classificação de Forrester (Hemodinâmica)",
      content: `## Perfis Clínico-Hemodinâmicos

| Perfil | Congestão | Perfusão | PCAP | IC | Tratamento |
|---|---|---|---|---|---|
| **I (Normal)** | Não | Boa | < 18 | > 2,2 | Otimizar medicações |
| **II (Congestão)** | Sim | Boa | > 18 | > 2,2 | Diurético + vasodilatador |
| **III (Hipoperfusão)** | Não | Ruim | < 18 | < 2,2 | Volume + inotrópico |
| **IV (Choque)** | Sim | Ruim | > 18 | < 2,2 | Diurético + inotrópico + vasopressor |

## Perfis Simplificados (Clínica)

| Perfil | Exame Físico | Tratamento principal |
|---|---|---|
| **Quente e Úmido** | Congestão + boa perfusão | Diurético + nitrato |
| **Frio e Úmido** | Congestão + má perfusão | Diurético + dobutamina |
| **Frio e Seco** | Seco + má perfusão | Volume (cautela) + inotrópico |
| **Quente e Seco** | Compensado | Otimizar ambulatorialmente |

**90% dos casos de EAP/ICDA são "Quente e Úmido"** — a maioria responde a diurético + vasodilatador.`,
    },
    {
      id: "screening",
      title: "Identificação e Avaliação",
      content: `## Apresentação Clínica do EAP

- Dispneia intensa (ortopneia, platipneia)
- Tosse produtiva (espumosa, rósea em casos graves)
- Crepitações bibasais ou difusas
- SpO₂ < 90% em ar ambiente
- Taquicardia, sudorese fria
- B3, B4, sopros
- Distensão jugular, hepatomegalia, edema MMII (IC crônica)

## Exames de Urgência

| Exame | Achado | Relevância |
|---|---|---|
| ECG | IAM? Arritmia? | Causa precipitante |
| Rx tórax | Congestão, cardiomegalia, derrames | Confirmação |
| Ecocardiograma POCUS | FEVE, valvas, pericárdio | Guia tratamento |
| BNP / NT-proBNP | > 100 pg/mL (BNP) ou > 300 ng/L (NT-proBNP) | Confirma IC |
| Troponina | Elevada = IAM precipitante | Crucial |
| Creatinina, eletrólitos | Função renal basal | Dose de diurético |
| Gasometria | pH, PO₂, PCO₂ | Gravidade |

## Quando Suspeitar de Causa Cirúrgica

- Sopro novo + deterioração aguda → regurgitação valvar aguda
- IAM inferior + hipotensão grave → infarto VD
- Febre + sopro → endocardite`,
    },
    {
      id: "conduct",
      title: "Conduta — Algoritmo por Perfil",
      content: `## Todos os Casos — Medidas Imediatas

1. Posição sentada (45–90°)
2. O₂ alvo SpO₂ ≥ 94%
3. **VNI (CPAP/BiPAP)** se SpO₂ < 90% com O₂ convencional ou FR > 25
4. Acesso venoso, monitor, ECG 12 derivações
5. Ecocardiograma POCUS

## Perfil Quente e Úmido (maioria)

**A — Diurético IV:**
- Furosemida **40–80 mg IV bolus** (se virgem: 40 mg; se uso crônico: 2,5x a dose oral habitual)
- Avaliar resposta em 1–2h (meta: diurese ≥ 200 mL/2h)
- Se resposta insuficiente: dobrar dose ou infusão contínua 10–20 mg/h

**B — Vasodilatador** (se PAS ≥ 100 mmHg):
- Nitroglicerina 5–200 mcg/min BIC
  - Iniciar 5–10 mcg/min → aumentar 5–10 mcg/min a cada 3–5 min
  - Meta: aliviar dispneia, PAS ≥ 90 mmHg
- Nitroprussiato 0,3–5 mcg/kg/min (se hipertensivo e refratário ao nitrato)

## Perfil Frio e Úmido (choque cardiogênico com congestão)

- Ver protocolo Choque Cardiogênico
- Dobutamina 2,5–10 mcg/kg/min + furosemida em infusão
- Considerar SCM se refratário

## VNI — Indicações e Modo

| Situação | Modo VNI | Parâmetros iniciais |
|---|---|---|
| EAP agudo (hipóxia) | CPAP | 5–10 cmH₂O, FiO₂ 60% |
| DPOC + IC (hipercapnia) | BiPAP | IPAP 12–14 / EPAP 5–6 |

**IOT se:** falha de VNI após 30–60 min, apneia, rebaixamento de consciência`,
    },
    {
      id: "treatment",
      title: "Tratamento Detalhado",
      content: `## Furosemida — Otimização

| Situação | Dose inicial | Titulação |
|---|---|---|
| Sem uso prévio | 40 mg IV bolus | Dobrar se < 200 mL/2h |
| Uso oral habitual | 2,5x a dose oral IV | Infusão 10–20 mg/h |
| Refratário a bolus | Infusão contínua | 5–40 mg/h (DOSE-AHF trial) |
| IR grave (CrCl < 30) | 80–160 mg IV | Infusão 40 mg/h |

## Nitroglicerina — Infusão

\`\`\`
Preparar: Nitroglicerina 25 mg em 250 mL SG5% (= 100 mcg/mL)
Iniciar: 0,5 mL/h (= 50 mcg/min)
Aumentar 0,5 mL/h a cada 3–5 min
Meta: alívio da dispneia sem PAS < 90 mmHg
Máximo: 2 mL/h (= 200 mcg/min)
\`\`\`

## Morfina — Uso Controverso

**Não usar de rotina** (SURVIVE trial: associado a piora).
Usar apenas para sedação em IOT ou ansiedade refratária com SpO₂ controlada.

## Monitorização da Resposta

- Débito urinário horário (cateter vesical)
- SpO₂, FR a cada 30 min
- PA a cada 15–30 min (durante nitroglicerina)
- Peso diário
- Creatinina + eletrólitos 6/6h (diurese intensa → hipocalemia)`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — EAP / IC Descompensada (Quente e Úmido)

\`\`\`
PACIENTE: _____  PESO: _____ kg  PA: _____/_____  SpO₂: _____
BNP: _____  Creatinina basal: _____

POSIÇÃO + O₂:
1. Cabeceira 90° (sentado)
2. O₂ 15 L/min máscara não-reinalante (SpO₂ alvo ≥ 94%)

VNI (se SpO₂ < 90% ou FR > 25):
3. CPAP 5 cmH₂O, FiO₂ 60% → aumentar até 10 cmH₂O conforme SpO₂
   OU BiPAP IPAP 12 / EPAP 5 se DPOC associado

DIURÉTICO:
4. Furosemida _____ mg IV bolus agora
   (sem uso prévio: 40 mg; com uso oral _____ mg: dar 2,5x = _____ mg)
   → Meta diurese ≥ 200 mL/2h
   → Se insuficiente: Furosemida _____ mg/h BIC

VASODILATADOR (se PAS ≥ 100 mmHg):
5. Nitroglicerina 25 mg/250 mL SG5%
   Iniciar 0,5 mL/h → aumentar 0,5 mL/h a cada 5 min
   Meta: alívio da dispneia; manter PAS ≥ 90 mmHg

MONITORIZAÇÃO:
6. Sonda vesical → débito urinário horário
7. PA + SpO₂ + FR a cada 15–30 min
8. Eletrólitos + creatinina 6/6h
9. Ecocardiograma POCUS urgente

TRATAR CAUSA PRECIPITANTE:
   □ IAM (ECG/troponina) → cateterismo urgente
   □ Arritmia → controle de FC
   □ Infecção → antibiótico
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Ponikowski P et al. **2016 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure.** Eur Heart J. 2016 (updated 2023).

Felker GM et al. **Diuretic Strategies in Patients with Acute Decompensated Heart Failure (DOSE-AHF).** NEJM. 2011.

Masip J et al. **Noninvasive ventilation in acute cardiogenic pulmonary edema.** JAMA. 2005.

Gray A et al. **Noninvasive ventilation in acute cardiogenic pulmonary edema (3CPO trial).** NEJM. 2008.

SBC. **Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda.** Arq Bras Cardiol. 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. CRISE HIPERTENSIVA — Urgência vs Emergência
// ─────────────────────────────────────────────────────────────────────────────
export const protocolCriseHipertensiva: EmergencyProtocol = {
  id: "crise-hipertensiva-urgencia-emergencia",
  title: "Crise Hipertensiva — Urgência vs Emergência Hipertensiva",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["crise hipertensiva", "emergência hipertensiva", "urgência hipertensiva", "nitroprussiato", "labetalol", "nicardipina", "encefalopatia hipertensiva"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Crise Hipertensiva

PA ≥ 180/120 mmHg. A distinção entre urgência e emergência é fundamental para o tratamento correto.

| Tipo | Definição | Tratamento | Velocidade de redução |
|---|---|---|---|
| **Urgência** | PA ≥ 180/120 sem LOD aguda | Oral, ambulatorial | 25% em 24–48h |
| **Emergência** | PA ≥ 180/120 COM LOD aguda | IV, UTI | 25% em 1h, então gradual |

**LOD aguda (Lesão de órgão-alvo aguda):**
Encefalopatia hipertensiva, AVC hemorrágico, EAP, dissecção de aorta, IAM, IRA aguda, eclâmpsia.

**Regra importante:** redução muito rápida da PA causa hipoperfusão de órgãos → piora clínica.

> ⚠️ Disclaimer: apoio à decisão clínica. Avaliação médica individualizada obrigatória.`,
    },
    {
      id: "def",
      title: "Definição por Apresentação",
      content: `## Emergências Hipertensivas — Por Órgão-Alvo

| Apresentação | PA típica | Agente IV de escolha |
|---|---|---|
| **Encefalopatia hipertensiva** | > 220/120 | Nicardipina ou Labetalol |
| **AVC hemorrágico** | Qualquer elevada | Nicardipina (meta PAS < 140) |
| **AVCi agudo (pré-tPA)** | > 185/110 | Labetalol ou Nicardipina |
| **EAP / IC aguda** | > 180/110 | Nitroglicerina + Furosemida |
| **Dissecção de Aorta** | > 120 diastólica | Esmolol + Nitroprussiato |
| **IAM / SCA** | > 160/100 | Nitroglicerina IV |
| **IRA aguda hipertensiva** | > 180/110 | Nicardipina ou Labetalol |
| **Eclâmpsia** | > 160/110 | Hidralazina IV ou Labetalol IV |
| **Feocromocitoma** | Paroxística | Fentolamina (α-bloqueador) |

## Urgência Hipertensiva — Sem LOD Aguda

- PA ≥ 180/120 sem sintomas de lesão aguda
- Tratamento oral — não internar UTI de rotina
- Redução gradual em 24–48h
- Iniciar ou ajustar anti-hipertensivo oral`,
    },
    {
      id: "screening",
      title: "Identificação e Sintomas",
      content: `## Sintomas de LOD Aguda — Buscar Ativamente

| Sistema | Sintomas de alarme |
|---|---|
| **SNC** | Cefaleia intensa, confusão, deficit focal, convulsão, coma |
| **Cardíaco** | Dor precordial, dispneia, B3, crepitações |
| **Renal** | Oligúria, hematúria, edema |
| **Vascular** | Dor lombar/abdominal irradiada (dissecção) |
| **Ocular** | Embaçamento visual, diplopia, amaurose |
| **Obstétrico** | Cefaleia + edema + proteinúria (eclâmpsia) |

## Avaliação Mínima Urgente

- PA em ambos os braços (diferença > 15 mmHg = dissecção?)
- ECG (IAM, HVE)
- Creatinina, urinálise
- Rx tórax (EAP, alargamento mediastino)
- TC crânio se neurológico
- Fundoscopia (papiloma, hemorragias = maligna)

## Pseudocrise Hipertensiva

PA elevada por dor, ansiedade, abstinência de álcool ou medicação.
Tratar a causa — anti-hipertensivo pode não ser necessário.`,
    },
    {
      id: "conduct",
      title: "Conduta por Apresentação",
      content: `## Urgência Hipertensiva — Sem LOD

**Tratamento oral (1ª escolha):**
- Captopril 25 mg SL ou VO → repetir em 1h se necessário
- Clonidina 0,1–0,2 mg VO
- Amlodipina 5–10 mg VO
- Não usar nifedipina SL (queda brusca, isquemia)

**Alta com:**
- Anti-hipertensivo prescrito/ajustado
- Retorno em 24–48h para reavaliação
- Orientação sobre adesão ao tratamento

---

## Emergência Hipertensiva — Com LOD

**Princípio:** reduzir 25% da PAM na 1ª hora, depois gradual em 24–48h.

**Encefalopatia hipertensiva / IRA:**
- Nicardipina 5 mg/h IV → aumentar 2,5 mg/h a cada 5 min (máx 15 mg/h)
- OU Labetalol 20 mg IV → 40–80 mg cada 10 min (máx 300 mg)

**EAP/IC Aguda:**
- Nitroglicerina 5–200 mcg/min BIC + Furosemida (ver protocolo EAP)

**Dissecção de Aorta:**
- **Meta urgente:** FC < 60 e PAS 100–120 mmHg em 5–10 min
- Esmolol 500 mcg/kg bolus → 50–300 mcg/kg/min BIC
- + Nitroprussiato 0,3–5 mcg/kg/min (após BB para evitar reflex taquicardia)

**AVCi pré-tPA:**
- Labetalol 10–20 mg IV → repetir até PAS < 185/110
- OU Nicardipina 5 mg/h IV

**Eclâmpsia:**
- Hidralazina 5 mg IV → 10 mg em 20 min se necessário
- OU Labetalol 20–40 mg IV
- + Sulfato de Mg (anticonvulsivante — ver protocolo)`,
    },
    {
      id: "treatment",
      title: "Agentes IV — Preparo e Doses",
      content: `## Fármacos IV para Emergência Hipertensiva

| Fármaco | Preparo | Dose | Início | Indicação principal |
|---|---|---|---|---|
| **Nitroprussiato** | 50 mg/250 mL SG5% | 0,3–5 mcg/kg/min | 30s | Dissecção (com BB), EAP grave |
| **Nitroglicerina** | 25 mg/250 mL SG5% | 5–200 mcg/min | 2–5 min | EAP, IAM, pré-cirurgia |
| **Nicardipina** | Ampola direta | 5–15 mg/h | 5–15 min | Encefalopatia, AVCi |
| **Labetalol** | Ampola direta | 20–80 mg IV bolus | 5–10 min | AVCi, eclâmpsia, dissecção |
| **Esmolol** | 2,5 g/250 mL SF | 50–300 mcg/kg/min | 60s | Dissecção de aorta |
| **Hidralazina** | Ampola direta | 5–20 mg IV | 10–20 min | Eclâmpsia, gestação |
| **Fentolamina** | 5 mg IV bolus | Repetir em 5 min | Imediato | Feocromocitoma |

## Nitroprussiato — Cuidados

- Proteger da luz (papel alumínio)
- Risco de toxicidade por cianeto se > 10 mcg/kg/min ou uso > 48h
- Preferir nicardipina na maioria dos casos

## O Que Evitar

| Fármaco | Motivo |
|---|---|
| Nifedipina SL | Queda brusca → isquemia cerebral/miocárdica |
| Furosemida isolada | Não reduz PA de forma confiável — complementar |
| BB sem vasodilatador na dissecção | Aumenta RVS → piora dissecção |`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Emergência Hipertensiva (Encefalopatia)

\`\`\`
PACIENTE: _____ PA: _____/_____  PAM: _____  SINTOMAS: _____

META: reduzir PAM 25% em 1h (PAM alvo = _____ mmHg)

OPÇÃO A — Nicardipina:
1. Nicardipina 5 mg/h IV BIC
   → Aumentar 2,5 mg/h a cada 5 min conforme PA
   → Máximo 15 mg/h

OPÇÃO B — Labetalol:
2. Labetalol 20 mg IV em 2 min
   → Repetir 40 mg em 10 min se necessário
   → Máximo 300 mg total
   (contraindicado: asma, DPOC grave, BAV, IC aguda descompensada)

MONITORIZAÇÃO:
3. PA + FC a cada 5 min durante ajuste
   → A cada 15 min quando estabilizado
4. Neurológico: Glasgow + pupilas + déficit focal horário

APÓS CONTROLE (< 1h):
5. Captopril 25 mg VO + anti-hipertensivo oral ajustado
6. Investigar causa (TC crânio, eco, urinálise)

SE DISSECÇÃO DE AORTA (PA nos 2 braços + dor costal):
→ Esmolol 500 mcg/kg IV bolus → 100–300 mcg/kg/min BIC
→ + Nitroprussiato 0,5 mcg/kg/min (iniciar após BB)
→ Cirurgia cardiovascular urgente (tipo A)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Williams B et al. **2018 ESC/ESH Guidelines for the management of arterial hypertension.** Eur Heart J. 2018.

Whelton PK et al. **2017 ACC/AHA/AAPA/ABC Guidelines for High Blood Pressure.** J Am Coll Cardiol. 2018.

Marik PE et al. **Hypertensive crises: challenges and management.** Chest. 2007.

SBC. **7ª Diretriz Brasileira de Hipertensão Arterial.** Arq Bras Cardiol. 2021.

Tintinalli JE et al. **Tintinalli's Emergency Medicine.** 9th ed. McGraw-Hill; 2020.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. DISSECÇÃO AGUDA DE AORTA — Stanford A/B
// ─────────────────────────────────────────────────────────────────────────────
export const protocolDisseccaoAorta: EmergencyProtocol = {
  id: "disseccao-aorta-stanford-emergencia",
  title: "Dissecção Aguda de Aorta — Stanford A/B",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["dissecção aorta", "stanford a", "stanford b", "aneurisma aorta", "dor torácica", "esmolol", "nitroprussiato"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Dissecção Aguda de Aorta

Mortalidade de 1–2% por hora sem tratamento (tipo A). Diagnóstico frequentemente atrasado — exige alta suspeição clínica.

**Classificação de Stanford:**
| Tipo | Envolvimento | Tratamento | Mortalidade sem Tx |
|---|---|---|---|
| **A** | Aorta ascendente (± descendente) | Cirurgia emergência | 1–2%/hora |
| **B** | Apenas aorta descendente | Clínico (ou TEVAR) | 10–30%/mês |

**Fatores de risco:**
- HAS (80% dos casos)
- Síndrome de Marfan, Ehlers-Danlos
- Valva aórtica bicúspide
- Coarctação de aorta
- Gravidez (3º trimestre)
- Uso de cocaína/anfetaminas
- Trauma torácico

> ⚠️ Emergência cirúrgica no tipo A. Avaliação cardiovascular urgente. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Fisiopatologia e Classificação",
      content: `## Mecanismo

1. Ruptura da íntima aórtica (trauma, degeneração, HAS)
2. Sangue penetra na média → criação de falso lúmen
3. Progressão anterógrada ou retrógrada
4. Complicações: oclusão de ramos (coronárias, carótidas, mesentérica, renais, ilíacas), tamponamento (retrograd para tipo A), ruptura

## Classificação DeBakey

| DeBakey | Stanford | Localização |
|---|---|---|
| I | A | Ascendente + caydo + descendente |
| II | A | Apenas ascendente |
| III | B | Apenas descendente |

## Complicações Agudas

| Complicação | Mecanismo | Apresentação |
|---|---|---|
| IAM | Dissecção ostium coronário D | Dor + alteração ECG |
| AVCi | Dissecção carótidas | Déficit neurológico |
| Tamponamento | Hematoma pericárdico | Beck + eco |
| Isquemia mesentérica | Oclusão AMS | Dor abdominal |
| IRA | Oclusão artéria renal | Oligúria |
| Insuficiência aórtica aguda | Dilatação anel aórtico | Sopro diastólico novo |`,
    },
    {
      id: "screening",
      title: "Diagnóstico — Suspeita e Imagem",
      content: `## Apresentação Clínica — Alta Suspeição

**Dor torácica típica:**
- Início **súbito** e **máxima intensidade imediata** ("rasgando", "dilacerante")
- Irradiação para dorso/lombar (dissecção descendente)
- Migratória (acompanha progressão da dissecção)

**Tríade diagnóstica (nem sempre completa):**
1. Dor torácica súbita e intensa
2. Diferença de PA nos membros superiores (> 20 mmHg)
3. Alargamento de mediastino no Rx

## Diagnóstico Diferencial com IAM

| Característica | Dissecção | IAM |
|---|---|---|
| Início da dor | Súbito, máximo imediato | Progressivo |
| Irradiação | Dorso, lombar | Braço E, mandíbula |
| ECG | Normal ou inespecífico | Supra/BRE/ST-dep |
| D-dímero | > 500 ng/mL (alta sensibilidade) | Normal |
| Troponina | Normal (exceto se coronária acometida) | Elevada |

**ATENÇÃO:** trombólise em IAM com dissecção não diagnosticada = catástrofe.

## Exame de Imagem — Escolha

| Exame | Sensibilidade | Disponibilidade | Uso |
|---|---|---|---|
| **Angio-TC** | 95–98% | Alta | 1ª escolha (estável) |
| EcoTEE | 80–95% | Moderada | Instável (sala de cirurgia) |
| RM | > 98% | Baixa | Eletivo |
| Rx tórax | 50–90% | Alta | Triagem (alargamento mediastino)`,
    },
    {
      id: "conduct",
      title: "Conduta — Tipo A e B",
      content: `## Medidas Imediatas (Todos os Tipos)

1. Repouso absoluto, 2 acessos venosos calibrosos
2. Monitorização: PA em ambos os braços, ECG, SpO₂
3. O₂ se SpO₂ < 94%
4. Analgesia: morfina 2–4 mg IV (reduz dor e consequente pico hipertensivo)
5. **Meta hemodinâmica: FC < 60 bpm + PAS 100–120 mmHg em 5–10 min**
6. Acionar cirurgia cardiovascular IMEDIATAMENTE (tipo A)

## Controle Hemodinâmico (URGÊNCIA MÁXIMA)

### 1ª Linha — Betabloqueador (reduz força de ejeção + FC)

**Esmolol** (titulável, ação ultracurta — preferido):
- Ataque: 500 mcg/kg IV em 1 min
- Manutenção: 50 mcg/kg/min → aumentar 50 mcg/kg/min a cada 4 min
- Máximo: 300 mcg/kg/min
- Meta: FC < 60 bpm

**OU Labetalol** (α + β):
- 20 mg IV em 2 min → 40–80 mg a cada 10 min (máx 300 mg)

### 2ª Linha — Vasodilatador (somente APÓS betabloqueador)

**Nitroprussiato** (se PA elevada persistente):
- 0,3–5 mcg/kg/min BIC
- NUNCA iniciar sem betabloqueador → reflex taquicardia → ↑ dP/dt → piora dissecção

## Tipo A — Cirurgia Emergência

- Contactar cirurgia cardíaca imediatamente
- Não demorar na imagem se instável → EcoTEE na sala cirúrgica
- Anticoagulação NÃO indicada antes da cirurgia

## Tipo B — Tratamento Clínico (sem complicação)

- UTI, monitorização contínua, controle de PA
- BB + vasodilatador oral a longo prazo
- TEVAR (terapia endovascular) se: malperfusão, expansão, dor refratária`,
    },
    {
      id: "treatment",
      title: "Tratamento — Manutenção e Complicações",
      content: `## Manutenção do Controle de PA

**Transição para oral (tipo B estável após 24–48h):**
- Metoprolol 25–100 mg VO 12/12h + Amlodipina 5–10 mg VO
- Meta ambulatorial: PAS < 130/80 mmHg

## Complicações e Manejo

| Complicação | Conduta |
|---|---|
| Tamponamento | Pericardiocentese NÃO (ressangra); cirurgia imediata |
| IAM por oclusão coronária | Cirurgia → revascularização simultânea (não angioplastia isolada) |
| AVCi por dissecção carotídea | Controle de PA; anticoagulação controversa |
| Isquemia mesentérica | TEVAR ou cirurgia de urgência |
| IRA por oclusão renal | Diálise de suporte; TEVAR se indicado |
| Insuficiência aórtica aguda | Cirurgia urgente (substituição valvar + tubo aórtico) |

## Cirurgia Tipo A — O Que Esperar

- Substituição da aorta ascendente com ou sem raiz
- Mortalidade cirúrgica: 15–25% (alta, mas sem cirurgia = quase 100% em 48h)
- Complicações: AVCi, paraplegia, IRA, sangramento
- UTI pós-op com monitorização contínua`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Dissecção Aguda de Aorta

\`\`\`
PACIENTE: _____  PA D: _____/_____  PA E: _____/_____  FC: _____

META IMEDIATA: FC < 60 bpm + PAS 100–120 mmHg em 5–10 min

1. Morfina 4 mg IV lento (analgesia + reduz pico hipertensivo)

BETABLOQUEADOR (1ª linha — obrigatório antes do vasodilatador):
2. Esmolol 500 mcg/kg IV em 1 min (ataque)
   → Manutenção: Esmolol 50 mcg/kg/min BIC
      Preparar: 2,5 g/250 mL SF = 10 mg/mL
      Iniciar _____ mL/h → aumentar 50 mcg/kg/min a cada 4 min
      Máximo: 300 mcg/kg/min

SE PAS > 120 APÓS BETABLOQUEADOR:
3. Nitroprussiato 50 mg/250 mL SG5% BIC
   Iniciar 0,3 mcg/kg/min → titular até PAS 100–120 mmHg

MONITORIZAÇÃO:
4. PA em ambos os braços a cada 5 min (monitorar diferença)
5. ECG contínuo (IAM por oclusão coronária?)
6. SpO₂, débito urinário horário (sonda vesical)

ACIONAR URGENTEMENTE:
□ Cirurgia cardiovascular (tipo A → cirurgia emergência)
□ UTI cardiovascular
□ Banco de sangue (reserva de CH e hemoderivados)

CONTRAINDICADO: trombólise, anticoagulação antes da cirurgia
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Erbel R et al. **2014 ESC Guidelines on the diagnosis and treatment of aortic diseases.** Eur Heart J. 2014.

Isselbacher EM et al. **2022 ACC/AHA Guidelines for Diagnosis and Management of Aortic Disease.** Circulation. 2022.

Nienaber CA et al. **INSTEAD Trial — Investigation of Stent Grafts in Aortic Dissection.** Circulation. 2009.

SBC. **Diretriz de Diagnóstico e Tratamento das Doenças da Aorta.** Arq Bras Cardiol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. TAQUIARRITMIAS — Instável vs Estável
// ─────────────────────────────────────────────────────────────────────────────
export const protocolTaquiarritmias: EmergencyProtocol = {
  id: "taquiarritmias-instavel-estavel-emergencia",
  title: "Taquiarritmias — Instável vs Estável na Emergência",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["taquiarritmia", "fibrilação atrial", "flutter", "tsvp", "tv", "cardioversão", "amiodarona", "adenosina", "acls"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Taquiarritmias na Emergência

**Regra principal:** o tratamento depende da estabilidade hemodinâmica, NÃO do diagnóstico do ritmo.

**Taquiarritmia instável** (qualquer ritmo com FC > 100 + qualquer um abaixo):
- Hipotensão (PAS < 90 mmHg)
- Alteração de consciência
- Dor precordial isquêmica ativa
- Edema agudo de pulmão
- Choque

**→ Cardioversão elétrica sincronizada IMEDIATA** (independente do ritmo)

**Taquiarritmia estável:** investigar e tratar o ritmo específico com fármacos.

> ⚠️ Disclaimer: apoio à decisão clínica. Não substitui avaliação cardiológica especializada.`,
    },
    {
      id: "def",
      title: "Classificação por QRS",
      content: `## QRS Estreito (< 120 ms) — Supraventricular

| Ritmo | FC típica | Padrão P | Tratamento |
|---|---|---|---|
| **Taquicardia sinusal** | 100–150 | P antes de QRS | Tratar causa |
| **TSVP (reentrada)** | 150–250 | P escondido/retrograde | Manobras vagais → Adenosina |
| **FA** | 100–200 (irregular) | Sem P definido | BB/BCC → Cardioversão |
| **Flutter** | 150 (regular), 100 ou 75 | "Dente de serra" F a 300 | BB → Cardioversão |
| **TAM** | 100–200 | P multifocal, irregular | Verapamil, tratar causa |

## QRS Largo (≥ 120 ms)

| Ritmo | Características | Tratamento |
|---|---|---|
| **TV monomórfica** | Regular, QRS largo idêntico | Cardioversão ou Amiodarona |
| **TV polimórfica** | QRS variável | Cardioversão imediata |
| **Torsades de Pointes (TdP)** | QRS gira, QTc longo | MgSO₄ + Cardioversão |
| **TSV com aberrância** | QRS largo mas origem supra | Adenosina (diagnóstica) |
| **FA pré-excitada (WPW)** | Irregular, QRS largo variável | **NÃO usar adenosina/BCC** → Cardioversão |`,
    },
    {
      id: "screening",
      title: "Identificação e Avaliação",
      content: `## Avaliação Sistemática do ECG

1. **FC** — taqui (> 100) ou bradi (< 50)?
2. **QRS** — estreito (< 120 ms) ou largo (≥ 120 ms)?
3. **Regular ou irregular?**
4. **Ondas P** — visíveis? Relação com QRS?
5. **QTc** — prolongado? (TdP)

## Critérios de Brugada (TV vs TSV com aberrância)

Favor TV se qualquer critério presente:
1. RS ausente em V1–V6 (QRS = R puro ou S puro)
2. RS com duração > 100 ms em qualquer precordial
3. Dissociação AV (P e QRS independentes)
4. Morfologia QRS atípica (não BRD ou BRE puro)

**Se dúvida: tratar como TV** (mais seguro).

## Causas Reversíveis de Taquiarritmia (6 Hs)

- Hipoxemia → O₂
- Hipovolemia → Volume
- Hipocalemia → KCl IV
- Hipercalemia → Gluconato de Ca + insulina
- Hipomagnesemia → MgSO₄
- Hipotermia → Reaquecimento`,
    },
    {
      id: "conduct",
      title: "Conduta — Algoritmo",
      content: `## INSTÁVEL → Cardioversão Elétrica Sincronizada Imediata

1. Sedoanalgesia rápida: Etomidato 0,3 mg/kg + Midazolam 1–2 mg IV
2. Desfibrilador em modo **sincronizado** (espícula no QRS)
3. Gel condutor nos eletrodos (posição anterolateral)
4. **Energias iniciais:**

| Ritmo | Energia bifásica inicial |
|---|---|
| FA | 120–200 J |
| Flutter | 50–100 J |
| TSV | 50–100 J |
| TV monomórfica | 100 J |
| TV polimórfica | 200 J (dessincronizado = desfibrilação) |

5. Se sem conversão: dobrar energia, repetir
6. Se TV polimórfica/FV: **NÃO sincronizar** — usar 200 J dessincronizado

---

## ESTÁVEL — Tratamento por Ritmo

### FA / Flutter — Controle de FC

**1ª escolha (FE preservada):**
- Metoprolol 5 mg IV lento (repetir 3x a cada 5 min) → VO
- OU Diltiazem 0,25 mg/kg IV em 2 min → 5–15 mg/h BIC

**FE reduzida (< 40%):**
- Amiodarona 300 mg IV em 1h → 900 mg em 23h
- NÃO usar BB, BCC (inotrópicos negativos)

**Cardioversão elétrica (estável, mas para reversão a sinusal):**
- FA < 48h: cardioversão sem anticoagulação plena
- FA ≥ 48h: anticoagular ≥ 3 semanas antes OU EcoTEE para excluir trombo

### TSVP

1. **Manobra vagal** (Valsalva modificado): 40 mmHg por 15s + supino → supinação com MMII elevados por 15s
2. Se falha: **Adenosina 6 mg IV bolus** (rápido, com flush de 20 mL SF)
   - Atenção: reverter para sinusal confirma diagnóstico
   - 2ª dose: 12 mg se necessário
   - Contraindicado: WPW, asma grave, BA 2/3º
3. Se falha: Verapamil 5–10 mg IV (20 min)
4. Cardioversão se refratário

### TV Monomórfica Estável

- Amiodarona 150 mg IV em 10 min → 1 mg/min por 6h
- OU Procainamida 15–17 mg/kg IV (50 mg/min) — não disponível no Brasil
- Cardioversão se falha farmacológica

### Torsades de Pointes (QTc longo)

- **MgSO₄ 2g IV em 1–2 min** (independente de magnésio sérico)
- Corrigir hipocalemia: KCl IV
- Suspender drogas que prolongam QT
- Aumentar FC (isoproterenol 2–8 mcg/min) ou MP temporário (> 80 bpm)
- Cardioversão se instável`,
    },
    {
      id: "treatment",
      title: "Fármacos Antiarrítmicos — Doses",
      content: `## Resumo de Doses

| Fármaco | Dose IV | Indicação principal |
|---|---|---|
| **Adenosina** | 6 mg bolus rápido + flush | TSVP (diagnóstico e tratamento) |
| **Amiodarona** | 150 mg/10 min → 1 mg/min | FA, TV, ressuscitação |
| **Metoprolol** | 5 mg IV 3x (cada 5 min) | FA/flutter — controle FC |
| **Diltiazem** | 0,25 mg/kg IV → 5–15 mg/h | FA/flutter — FE preservada |
| **Verapamil** | 5–10 mg IV em 20 min | TSVP |
| **MgSO₄** | 2g IV em 1–2 min | TdP, TV polimórfica |
| **Esmolol** | 500 mcg/kg → 50–300 mcg/kg/min | FA/taquicardia cirúrgica |

## WPW — Cuidado Especial

**FA + WPW pré-excitada:**
- NÃO usar: adenosina, BCC, BB, digoxina (→ FV)
- Tratar: Cardioversão elétrica ou Procainamida/Amiodarona

## Anticoagulação na FA

**Para cardioversão:**
- FA < 48h: cardioversão sem anticoagulação (risco baixo de trombo)
- FA ≥ 48h ou duração desconhecida: anticoagular ≥ 3 semanas ou EcoTEE antes
- Após cardioversão: anticoagular por ≥ 4 semanas (independente do ritmo)

**CHA₂DS₂-VASc ≥ 2 (homem) ou ≥ 3 (mulher):** anticoagulação crônica`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — FA com Resposta Ventricular Rápida (Estável)

\`\`\`
PACIENTE: _____ FC: _____  PA: _____/_____  SpO₂: _____
FE: _____% (ecocardiograma)

CONTROLE DE FC:
SE FE ≥ 40%:
1. Metoprolol 5 mg IV lento em 2 min
   → Repetir 5 mg IV a cada 5 min (máx 3 doses)
   → Manutenção: Metoprolol 25–50 mg VO 12/12h
   OU Diltiazem 0,25 mg/kg IV em 2 min
      → BIC 5 mg/h → titular até FC 60–100 bpm

SE FE < 40%:
2. Amiodarona 300 mg + SG5% 250 mL IV em 60 min
   → Manutenção: Amiodarona 900 mg/500 mL SG5% em 23h

ANTICOAGULAÇÃO:
3. Tempo de FA: _____ horas
   SE < 48h: cardioversão possível sem anticoagulação
   SE ≥ 48h: Rivaroxabana 20 mg VO com janta
              OU Apixabana 5 mg VO 12/12h
              Aguardar ≥ 3 sem antes da cardioversão eletiva

MONITORIZAÇÃO:
4. ECG 12 derivações + monitor contínuo
5. PA a cada 15 min durante controle
6. Ecocardiograma (FE? valvopatia? trombo?)

SE INSTÁVEL (hipotensão/síncope/EAP/dor precordial):
→ Sedoanalgesia + CARDIOVERSÃO SINCRONIZADA 120–200J
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Hindricks G et al. **2020 ESC Guidelines for the diagnosis and management of atrial fibrillation.** Eur Heart J. 2021.

Panchal AR et al. **2018 AHA Focused Update on Advanced Cardiovascular Life Support.** Circulation. 2018.

Brugada P et al. **A new approach to the differential diagnosis of a regular tachycardia with a wide QRS complex.** Circulation. 1991.

Priori SG et al. **ESC Guidelines for the management of patients with ventricular arrhythmias.** Eur Heart J. 2015.

SBC. **Diretriz de Fibrilação Atrial.** Arq Bras Cardiol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. VASOPRESSORES E INOTRÓPICOS EM CHOQUE
// ─────────────────────────────────────────────────────────────────────────────
export const protocolVasopressores: EmergencyProtocol = {
  id: "vasopressores-inotropicos-choque",
  title: "Vasopressores e Inotrópicos em Choque — Guia Prático",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["vasopressor", "inotrópico", "norepinefrina", "adrenalina", "dopamina", "dobutamina", "vasopressina", "choque", "noradrena"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Vasopressores e Inotrópicos

Usados no choque quando a ressuscitação volêmica é insuficiente para manter perfusão.

**Regra geral:**
- **Vasopressor:** aumenta resistência vascular → eleva PA (indicado no choque distributivo/vasoplégico)
- **Inotrópico:** aumenta contratilidade miocárdica → eleva débito cardíaco (indicado no choque cardiogênico/baixo débito)
- **Vasopressor + Inotrópico:** choque misto (choque séptico grave, cardiogênico com vasoplegia)

**Meta primária:** PAM ≥ 65 mmHg (exceto TCE: PAM ≥ 80) com sinais de perfusão adequada.

> ⚠️ Sempre usar via acesso central quando possível. Monitorar efeitos adversos. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Farmacologia — Receptores e Efeitos",
      content: `## Receptores Adrenérgicos e Efeitos

| Receptor | Localização | Efeito |
|---|---|---|
| **α1** | Vasos (arteríolas) | Vasoconstrição → ↑ RVS → ↑ PA |
| **β1** | Miocárdio | ↑ FC, ↑ contratilidade → ↑ DC |
| **β2** | Brônquios, vasos musculares | Broncodilatação, vasodilatação periférica |
| **DA** (dopaminérgico) | Vasos renais/mesentéricos | Vasodilatação renal (doses baixas) |
| **V1** (vasopressina) | Vasos | Vasoconstrição potente (independente adrenérgico) |

## Perfil Receptor por Fármaco

| Fármaco | α1 | β1 | β2 | DA | V1 | Efeito principal |
|---|---|---|---|---|---|---|
| **Norepinefrina** | +++ | ++ | + | 0 | 0 | Vasopressor |
| **Adrenalina** | +++ | +++ | ++ | 0 | 0 | Vasopressor + Inotrópico |
| **Dopamina** | + a +++ | ++ | + | +++ | 0 | Dose-dependente |
| **Dobutamina** | + | +++ | ++ | 0 | 0 | Inotrópico |
| **Vasopressina** | 0 | 0 | 0 | 0 | +++ | Vasopressor |
| **Fenilefrina** | ++++ | 0 | 0 | 0 | 0 | Vasopressor puro |`,
    },
    {
      id: "screening",
      title: "Quando Iniciar e Qual Escolher",
      content: `## Indicação de Vasopressor/Inotrópico

**Iniciar quando:**
- PAM < 65 mmHg após ressuscitação volêmica adequada (≥ 20–30 mL/kg)
- OU sinais de hipoperfusão refratária ao volume
- OU contraindicação à ressuscitação volêmica agressiva (EAP, IC)

## Escolha por Tipo de Choque

| Tipo de Choque | 1ª Linha | 2ª Linha | Observação |
|---|---|---|---|
| **Séptico** | Norepinefrina | Vasopressina 0,03 U/min | Adrenalina se refratário |
| **Cardiogênico** | Norepinefrina + Dobutamina | Adrenalina | Levosimendan se disponível |
| **Anafilático** | **Adrenalina IM 0,5 mg** | Norepinefrina IV | Adrenalina = antídoto |
| **Hipovolêmico** | Volume primeiro | Norepinefrina se refratário | Tratar causa |
| **Neurogênico** | Norepinefrina | Vasopressina | Evitar dopamina |
| **Obstrutivo** | Tratar causa + suporte | Norepinefrina | Pericardiocentese/TEP/pneumotórax |`,
    },
    {
      id: "conduct",
      title: "Doses e Preparo",
      content: `## Norepinefrina — Vasopressor de 1ª Linha (Sepse e Maioria)

\`\`\`
Preparo padrão: 4 mg + 250 mL SG5% = 16 mcg/mL
Dose: 0,05–1 mcg/kg/min
Cálculo mL/h: (dose mcg/kg/min × peso × 60) / 16
Iniciar: 0,1 mcg/kg/min → titular PAM ≥ 65 mmHg
\`\`\`

## Adrenalina — Vasopressor + Inotrópico (Anafilaxia, Refratário)

\`\`\`
Anafilaxia: 0,5 mg IM (coxa lateral) — 1ª escolha
IV: 0,01–1 mcg/kg/min BIC
Preparo: 4 mg/250 mL SG5% = 16 mcg/mL (igual norepinefrina)
PCR: 1 mg IV bolus a cada 3–5 min
\`\`\`

## Dobutamina — Inotrópico (Choque Cardiogênico)

\`\`\`
Preparo: 250 mg/250 mL SF = 1 mg/mL (= 1000 mcg/mL)
Dose: 2,5–20 mcg/kg/min
Cálculo: (dose × peso × 60) / 1000 = mL/h
Atenção: pode causar hipotensão (vasodilatação β2)
\`\`\`

## Dopamina — Uso Limitado (Apenas Bradicardia Refratária)

\`\`\`
Preparo: 200 mg/250 mL SF = 800 mcg/mL
Doses:
  2–5 mcg/kg/min → efeito renal (sem benefício clínico comprovado)
  5–10 mcg/kg/min → efeito β1 (inotrópico)
  > 10 mcg/kg/min → efeito α1 (vasopressor)
Desvantagem: mais arritmias que norepinefrina (SOAP II)
\`\`\`

## Vasopressina — Adjuvante (Sepse Refratária)

\`\`\`
Dose fixa: 0,03 U/min (= 1,8 U/h)
Não titular — dose fixa de adjuvante
Preparo: 20 U/100 mL SF → 1,8 mL/h
Indicação: poupar norepinefrina, choque séptico refratário
\`\`\``,
    },
    {
      id: "treatment",
      title: "Monitorização e Desmame",
      content: `## Metas de Perfusão

| Parâmetro | Meta | Sinal de alerta |
|---|---|---|
| PAM | ≥ 65 mmHg | < 55 → aumentar dose |
| Lactato | < 2 mmol/L | Queda ≥ 10%/2h = boa resposta |
| Diurese | ≥ 0,5 mL/kg/h | Oligúria = hipoperfusão renal |
| SvO₂ | > 65% | < 55% = baixo DC |
| Temperatura das extremidades | Morna | Frias = baixo DC ou vasoconstricção excessiva |

## Efeitos Adversos por Fármaco

| Fármaco | Principal efeito adverso | Monitorar |
|---|---|---|
| Norepinefrina | Isquemia digital, mesentérica | Extremidades, débito urinário |
| Adrenalina | Taquicardia, hiperglicemia, lactatemia | ECG, glicemia, lactato |
| Dobutamina | Hipotensão, taquiarritmias | PA, ECG |
| Dopamina | Arritmias (FA), taquicardia | ECG contínuo |
| Vasopressina | Isquemia miocárdica, hiponatremia | ECG, Na+ |

## Desmame dos Vasopressores

- Iniciar desmame quando: lactato < 2, diurese adequada, PAM estável, foco tratado
- Reduzir 25–50% da dose a cada 2–4h
- Desmame do mais novo para o mais antigo
- Dobutamina: desmame mais lento (risco de piora do DC)

## Acesso Vascular

**Central:** preferido para todos os vasopressores (risco de necrose periférica)
**Periférico:** aceitável por curto período (norepinefrina em emergência) — usar veia calibrosa (antecubital ou femoral)`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Tabela Rápida — Preparo e Cálculo

\`\`\`
NOREPINEFRINA:
  Preparo: 4 mg + 250 mL SG5% = 16 mcg/mL
  Dose (mcg/kg/min) × Peso (kg) × 60 / 16 = mL/h
  Ex: 0,1 mcg/kg/min para 70 kg = 0,1 × 70 × 60 / 16 = 26 mL/h

DOBUTAMINA:
  Preparo: 250 mg + 250 mL SF = 1 mg/mL = 1000 mcg/mL
  Dose (mcg/kg/min) × Peso × 60 / 1000 = mL/h
  Ex: 5 mcg/kg/min para 70 kg = 5 × 70 × 60 / 1000 = 21 mL/h

ADRENALINA:
  Preparo: 4 mg + 250 mL SG5% = 16 mcg/mL (igual norepinefrina)
  Mesmo cálculo

VASOPRESSINA:
  Preparo: 20 U + 100 mL SF = 0,2 U/mL
  Dose fixa: 0,03 U/min = 1,8 U/h = 9 mL/h (sempre fixo)

DOPAMINA:
  Preparo: 200 mg + 250 mL SF = 800 mcg/mL
  Dose × Peso × 60 / 800 = mL/h
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Rhodes A et al. **Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021.** Intensive Care Med. 2021.

De Backer D et al. **Dopamine versus Norepinephrine in Patients with Septic Shock (SOAP II).** NEJM. 2010.

Russell JA et al. **Vasopressin versus Norepinephrine Infusion in Patients with Septic Shock (VASST).** NEJM. 2008.

Gordon AC et al. **Effect of Early Vasopressin vs Norepinephrine on Kidney Failure in Patients With Septic Shock (VANISH).** JAMA. 2016.

Jentzer JC et al. **Cardiogenic Shock Classification to Predict Mortality.** JACC. 2019.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. TRANSFUSÃO MACIÇA — 1:1:1 + TXA
// ─────────────────────────────────────────────────────────────────────────────
export const protocolTransfusaoMacica: EmergencyProtocol = {
  id: "transfusao-macica-1-1-1-txa",
  title: "Protocolo de Transfusão Maciça — 1:1:1 e TXA",
  categoryId: "hematology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["transfusão maciça", "ptm", "txa", "ácido tranexâmico", "concentrado de hemácias", "plasma", "plaquetas", "crioprecipitado", "trauma"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Protocolo de Transfusão Maciça (PTM)

Transfusão maciça = necessidade de ≥ 10 unidades de concentrado de hemácias em 24h (ou ≥ 4 CH em 1h).

**Por que um protocolo?** Hemorragia maciça causa a "Tríade da Morte": hipotermia + acidose + coagulopatia. A transfusão desequilibrada (só CH) piora a coagulopatia. A proporção 1:1:1 previne e trata a coagulopatia hemorrágica.

**Quando ativar o PTM:**
- Score ABC ≥ 2 (trauma penetrante, PAS < 90, FC > 120, FAST+)
- Choque hemorrágico classe III/IV refratário
- Qualquer sangramento ativo + instabilidade que não responde a cristaloides

> ⚠️ Contato imediato com banco de sangue. Cirurgia urgente para controle do sangramento.`,
    },
    {
      id: "def",
      title: "Score ABC e Indicação",
      content: `## Assessment of Blood Consumption (ABC Score)

| Critério | Pontuação |
|---|---|
| Trauma penetrante | 1 |
| PAS ≤ 90 mmHg | 1 |
| FC ≥ 120 bpm | 1 |
| FAST positivo (líquido abdominal) | 1 |

**Score ≥ 2 = ativar PTM** (sensibilidade 75%, especificidade 86%)

## Proporção 1:1:1

| Componente | Proporção | Função |
|---|---|---|
| Concentrado de Hemácias (CH) | 1 | Transportar O₂ |
| Plasma Fresco Congelado (PFC) | 1 | Repor fatores de coagulação |
| Plaquetas | 1 (aférese = 1 pool) | Hemostasia primária |

**Evidência:** PROPPR trial (JAMA 2015) — proporção 1:1:1 reduz mortalidade em 24h vs 1:1:2.

## Quando Adicionar Crioprecipitado

- Fibrinogênio < 150 mg/dL
- CIVD com hipofibrinogenemia
- **Dose:** 10 U de crioprecipitado = 5 g de fibrinogênio`,
    },
    {
      id: "screening",
      title: "Identificação e Ativação",
      content: `## Como Ativar o PTM

1. **Reconhecer:** sangramento maciço + ABC ≥ 2
2. **Ligar ao banco de sangue:** "Ativar Protocolo de Transfusão Maciça para paciente [nome/ID]"
3. **Banco libera:** pacote de 2 CH + 2 PFC a cada ciclo (adicionar plaquetas após 1º ciclo)
4. **Transfundir enquanto banco prepara o próximo ciclo**

## Monitorização Laboratorial

| Exame | Frequência | Meta |
|---|---|---|
| Hemograma | 30–60 min | Hb ≥ 7–8 g/dL |
| Coagulograma | 30–60 min | INR < 1,5, TTPa < 50s |
| Fibrinogênio | 30–60 min | ≥ 150 mg/dL |
| Ca²+ ionizado | 30–60 min | ≥ 1,1 mmol/L |
| Temperatura | Contínua | ≥ 35°C |
| pH / Lactato | 60 min | pH > 7,2; lactato em queda |
| Plaquetas | 30–60 min | ≥ 50.000 |

## Tromboelastografia (TEG/ROTEM)

Quando disponível — guia a transfusão de forma mais precisa:
- Deficiência de fibrinogênio: crioprecipitado
- Déficit de fatores: PFC
- Disfunção plaquetária: plaquetas
- Hiperfibrinólise: TXA`,
    },
    {
      id: "conduct",
      title: "Conduta — Protocolo Passo a Passo",
      content: `## Passo 1 — TXA (Ácido Tranexâmico) IMEDIATO

**Iniciar dentro de 3h do trauma** (cada hora de atraso reduz eficácia).

- 1ª dose: TXA 1g IV em 10 min
- 2ª dose: TXA 1g IV em 8h

**Não usar após 3h do trauma** (CRASH-2: aumenta mortalidade se tardio).

## Passo 2 — Cálcio (Evitar Hipocalcemia)

Cada unidade de hemácias tem citrato (quelante de cálcio). Em transfusão maciça, a hipocalcemia causa disfunção cardíaca grave.

- Gluconato de cálcio 10% **2g IV a cada 4 unidades de CH**
- Ca²+ ionizado < 1,1 → gluconato de cálcio 2g IV (repetir conforme monitorização)

## Passo 3 — Ciclos de Transfusão

**Ciclo 1 (banco libera imediatamente):**
- CH 2U + PFC 2U → transfundir o mais rápido possível

**Ciclo 2 (10–15 min depois):**
- CH 2U + PFC 2U + Plaquetas 1 pool

**Ciclos subsequentes:** repetir 1:1:1 até controle do sangramento

## Passo 4 — Crioprecipitado

- Fibrinogênio < 150 mg/dL → crioprecipitado 10U IV
- Fibrinogênio < 100 mg/dL → fibrinogênio concentrado (4g) se disponível

## Passo 5 — Controle da Temperatura

- Fluidos aquecidos (41°C)
- Cobertor térmico
- Ambiente aquecido (maca aquecida)
- Hipotermia piora todas as enzimas de coagulação

## Passo 6 — Controle Cirúrgico

**O PTM é ponte até a cirurgia** — o único tratamento definitivo é controlar o sangramento.

**Damage control resuscitation:**
1. Controle do sangramento (compressão, cinto pélvico, torniquete)
2. PTM
3. Cirurgia de controle de danos
4. UTI para ressuscitação
5. 2ª cirurgia definitiva 24–48h depois`,
    },
    {
      id: "treatment",
      title: "Tratamento de Complicações Transfusionais",
      content: `## Reações Transfusionais — Reconhecer e Tratar

| Reação | Sinais | Conduta |
|---|---|---|
| **Hemolítica aguda** | Febre, lombalgias, hemoglobinúria, choque | PARAR transfusão, SF 0,9%, hidratação |
| **Anafilática** | Broncoespasmo, urticária, hipotensão | Adrenalina 0,5 mg IM, anti-H1/H2 |
| **TRALI** | EAP não cardiogênico em < 6h | Suporte ventilatório, suspender |
| **Sobrecarga volêmica (TACO)** | EAP cardiogênico | Furosemida, reduzir velocidade |
| **Hipotermia** | T < 35°C | Fluidos aquecidos, cobertor |
| **Hipocalcemia** | Hipotensão, QTc longo, parestesia | Gluconato de Ca²+ 2g IV |
| **Hipercalemia** | QRS largo, pico T (sangue velho) | Gluconato de Ca²+ 2g IV |
| **Citrato** | Hipocalcemia | Gluconato de Ca²+ |

## Reversão de Anticoagulação no PTM

| Anticoagulante | Reversão |
|---|---|
| Varfarina | CCP 4 fatores 25–50 UI/kg + Vitamina K 10 mg IV |
| Heparina | Protamina 1 mg/100 UI heparina |
| Dabigatrana | Idarucizumab 5g IV |
| Rivaroxabana/Apixabana | Andexanet alfa OU CCP 50 UI/kg |`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Check-list PTM — Trauma Hemorrágico

\`\`\`
ATIVAR PTM — Banco de Sangue: _____

□ TXA 1g IV em 10 min (< 3h do trauma)
  → 2ª dose: 1g IV em 8h

□ Gluconato de Ca²+ 10% 2g IV agora
  → Repetir a cada 4 unidades de CH

□ Ciclo 1: CH 2U + PFC 2U IV (transfundir rápido)
□ Ciclo 2: CH 2U + PFC 2U + Plaquetas 1 pool
□ Ciclos subsequentes: 1:1:1 até controle

□ Aquecimento: fluidos aquecidos (41°C) + cobertor térmico

□ Crioprecipitado 10U IV se fibrinogênio < 150 mg/dL

MONITORIZAÇÃO (a cada 30–60 min):
□ Hb (meta ≥ 7 g/dL)
□ INR (meta < 1,5)
□ Fibrinogênio (meta ≥ 150 mg/dL)
□ Ca²+ ionizado (meta ≥ 1,1)
□ Temperatura (meta ≥ 35°C)
□ Plaquetas (meta ≥ 50.000)
□ pH + lactato

CONTROLE CIRÚRGICO: acionar cirurgia imediatamente
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Holcomb JB et al. **Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio (PROPPR).** JAMA. 2015.

CRASH-2 trial collaborators. **Effects of tranexamic acid on death, disability, vascular occlusive events.** Lancet. 2010.

Rossaint R et al. **The European guideline on management of major bleeding and coagulopathy following trauma.** Crit Care. 2023.

EAST — Eastern Association for the Surgery of Trauma. **Practice Management Guidelines for Hemorrhage in Trauma.** J Trauma. 2022.

CFM / SBHH. **Resolução sobre uso de hemocomponentes em emergências.** Brasília: CFM; 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. PNEUMOTÓRAX HIPERTENSIVO
// ─────────────────────────────────────────────────────────────────────────────
export const protocolPneumotoraxHipertensivo: EmergencyProtocol = {
  id: "pneumotorax-hipertensivo-descompressao",
  title: "Pneumotórax Hipertensivo — Descompressão Imediata",
  categoryId: "respiratory",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["pneumotórax hipertensivo", "pneumotórax", "descompressão", "drenagem", "trauma torácico", "ventilação mecânica"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Pneumotórax Hipertensivo

Emergência com risco de vida imediato. Ar acumula no espaço pleural sem saída (mecanismo valvar) → colapso pulmonar + desvio mediastinal + compressão cardíaca → parada cardíaca.

**Causa de morte cardíaca tratável e reversível** — descompressão resolve em segundos.

**Causas comuns:**
- Trauma torácico (aberto ou fechado)
- Barotrauma em ventilação mecânica (VM com PEEP alto)
- Pneumotórax espontâneo com obstrução parcial
- Após procedimentos (biópsia pleural, subclávia)
- PCR com RCP em andamento (complicação)

**Regra:** em paciente ventilado que piora subitamente (↑ pressão de pico, ↓ SpO₂, ↓ PA) → descomprimir o lado suspeito ANTES da confirmação radiológica.

> ⚠️ Diagnóstico clínico — não esperar radiografia. Disclaimer: apoio à decisão.`,
    },
    {
      id: "def",
      title: "Fisiopatologia",
      content: `## Mecanismo do Pneumotórax Hipertensivo

1. Ar entra no espaço pleural mas não sai (válvula unidirecional)
2. Pressão intrapleural aumenta progressivamente
3. Pulmão colaba ipsilateral
4. Mediastino desvia para o lado contralateral
5. Comprime VCS/VCI → reduz retorno venoso → ↓ pré-carga → ↓ DC
6. Comprime coração → ↑ pós-carga VD → falência VD
7. Hipóxia + hipotensão → PCR

## Pneumotórax Simples vs Hipertensivo

| Característica | Simples | Hipertensivo |
|---|---|---|
| Velocidade de deterioração | Lenta (horas) | Rápida (minutos) |
| Instabilidade hemodinâmica | Rara | Presente |
| Desvio de traqueia | Ausente | Pode ocorrer |
| Urgência | Alta | **MÁXIMA** |
| Diagnóstico | Clínico + Rx | **Apenas clínico** |`,
    },
    {
      id: "screening",
      title: "Diagnóstico Clínico — DCCM",
      content: `## Mnemônico DCCM

- **D**iminuição ou ausência de murmúrio vesicular (ipsilateral)
- **C**ianose
- **C**olabamento (distensão jugular)
- **M**A (movimento assimétrico da caixa torácica)

## Apresentação Clínica

| Sinal | Frequência | Observação |
|---|---|---|
| Dispneia súbita | 95% | Mais proeminente em VM |
| Diminuição do MV unilateral | 85% | Pode ser difícil auscutar em emergência |
| Taquicardia | 90% | Sinal precoce |
| Hipotensão | 75% | Sinal tardio |
| Distensão jugular | 60% | Pode não ocorrer se hipovolêmico |
| Desvio de traqueia | 30% | Sinal tardio — não esperar |
| Cianose | 40% | Sinal tardio |

## Em Ventilação Mecânica — Sinais

- Aumento súbito da pressão de pico inspiratória
- Alarme de alta pressão de vias aéreas
- SpO₂ em queda sem outra explicação
- Deterioração hemodinâmica súbita
- Dificuldade para ventilar com BVM após IOT

**Diagnóstico diferencial em VM:** intubação seletiva, obstrução do tubo, broncoespasmo grave.

## FAST Torácico (Ultrassom)

- Ausência de "lung sliding" (deslizamento pleural) = pneumotórax
- Ponto pulmonar = interface pneumotórax/pulmão expandido (confirma e localiza)
- Mais rápido que Rx — mas diagnóstico clínico ainda é suficiente para agir`,
    },
    {
      id: "conduct",
      title: "Conduta — Descompressão Imediata",
      content: `## Descompressão de Agulha (Toracocentese de Alívio)

**Indicação:** pneumotórax hipertensivo com instabilidade hemodinâmica — agir IMEDIATAMENTE.

### Técnica — 2º Espaço Intercostal (Linha Hemiclavicular)

1. Identificar 2º EIC na linha hemiclavicular do lado afetado
2. Antissepsia rápida (não demorar)
3. **Agulha 14G ou 16G** (cateter sobre agulha) — comprimento ≥ 8 cm (obesos precisam de agulha longa)
4. Inserir perpendicularmente, pela **borda superior da 3ª costela** (evita feixe neurovascular)
5. Avançar até sentir queda de resistência + saída de ar (som característico)
6. Retirar agulha, fixar cateter
7. Melhora clínica imediata = confirmação diagnóstica

### Local Alternativo — 4º ou 5º EIC (Linha Axilar Anterior)

- Evita músculo peitoral espesso
- Preferido em obesos ou quando 2º EIC não funciona
- Mesmo princípio — borda superior da costela de baixo

## Drenagem Torácica (Tubo) — Tratamento Definitivo

**Indicação:** após descompressão de agulha, ou pneumotórax simples ≥ 20%.

### Técnica do Tubo de Drenagem

1. Decúbito dorsal, braço ipsilateral elevado
2. 5º EIC, linha axilar média (seguro — acima do diafragma)
3. Antissepsia + anestesia local com lidocaína 2% (pele + periósteo da costela)
4. Incisão horizontal 2 cm na pele
5. Divulsão com pinça Kelly até espaço pleural (dedo ou pinça)
6. Introduzir tubo 28–32 Fr (trauma) ou 20–24 Fr (espontâneo)
7. Conectar frasco coletor subaquático
8. Confirmar: condensação no tubo, oscilação com respiração, expansão pulmonar

## Em PCR com Suspeita de Pneumotórax

- Descompressão bilateral de agulha durante a RCP
- Não interromper massagem — membro de equipe realiza simultaneamente`,
    },
    {
      id: "treatment",
      title: "Tratamento por Causa",
      content: `## Pneumotórax Espontâneo Primário

| Tamanho | Sintomas | Tratamento |
|---|---|---|
| < 20% | Mínimos | Observação + O₂ 10 L/min |
| 20–40% | Moderados | Toracocentese de alívio ou tubo fino |
| > 40% | Presentes | Tubo de drenagem |

## Pneumotórax em VM

- Drenagem imediata (mesmo pequeno — o pulmão não pode se re-expandir com pressão positiva)
- Tube 28–32 Fr conectado ao frasco subaquático
- PEEP: reduzir temporariamente enquanto drena
- Verificar tubo endotraqueal (intubação seletiva?)

## Pneumotórax Aberto ("Ferida Soprante")

1. Ocluir com curativo de 3 pontos (3 lados) — permite saída mas não entrada
2. **NÃO ocluir completamente** antes do tubo → converte para hipertensivo
3. Tubo de drenagem no local diferente da ferida

## Após a Drenagem

- Rx tórax confirmar posicionamento e re-expansão
- Se tubo bem posicionado + pulmão não re-expande → fístula broncoplural → avaliação torácica
- Retirar tubo quando: débito < 100 mL/24h, sem bullagem, pulmão re-expandido no Rx`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Check-list — Pneumotórax Hipertensivo

\`\`\`
DESCOMPRESSÃO IMEDIATA (não esperar Rx):

1. Identificar lado afetado: MV diminuído + hipotensão + distensão jugular
   Lado suspeito: _____________

2. Toracocentese de Alívio:
   Material: cateter 14G ≥ 8 cm
   Local: 2º EIC, linha hemiclavicular, borda sup da 3ª costela
   → Saída de ar = pneumotórax hipertensivo confirmado

3. Aguardar melhora clínica (segundos):
   PA: ___→___  SpO₂: ___→___  FC: ___→___

4. Drenagem Torácica Definitiva:
   Tubo: _____ Fr
   Local: 5º EIC, linha axilar média
   Conectar frasco subaquático
   Confirmação: oscilação + bullagem + melhora Rx

SUPORTE:
5. O₂ 15 L/min
6. SF 0,9% 500 mL IV (se hipotensão)
7. Analgesia após estabilização: dipirona 1g IV + tramadol 100 mg IV

EM VENTILAÇÃO MECÂNICA:
→ Reduzir PEEP temporariamente
→ Aumentar FiO₂ enquanto drena
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Roberts DJ et al. **Clinical Presentation of Patients with Tension Pneumothorax.** Ann Surg. 2015.

Leigh-Smith S, Harris T. **Tension pneumothorax — time for a re-think?** Emerg Med J. 2005.

ATLS Subcommittee. **Advanced Trauma Life Support: 11th Edition.** ACS; 2023.

MacDuff A et al. **Management of spontaneous pneumothorax: British Thoracic Society Pleural Disease Guideline 2010.** Thorax. 2010.

Yeo KK et al. **Tension pneumothorax: diagnosis and management.** Am J Emerg Med. 2017.

SBPT. **Diretrizes para Pneumotórax Espontâneo.** J Bras Pneumol. 2019.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. CIVD — Escore ISTH e Manejo
// ─────────────────────────────────────────────────────────────────────────────
export const protocolCIVD: EmergencyProtocol = {
  id: "civd-isth-manejo-emergencia",
  title: "CIVD — Escore ISTH e Manejo na Emergência",
  categoryId: "hematology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["civd", "coagulação intravascular disseminada", "isth", "plasma fresco", "crioprecipitado", "fibrinogênio", "coagulopatia"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## CIVD — Coagulação Intravascular Disseminada

Síndrome adquirida caracterizada por ativação sistêmica da coagulação, levando ao consumo de fatores e plaquetas, formação de microtrombos e sangramento paradoxal.

**CIVD não é diagnóstico primário** — é complicação de outra condição.

**Causas principais:**
| Causa | Mecanismo |
|---|---|
| Sepse (mais comum) | Endotoxinas ativam via extrínseca |
| Trauma grave/TCE | Liberação de tromboplastina tecidual |
| Neoplasia (especialmente leucemia) | Fator pró-coagulante tumoral |
| Complicações obstétricas | Descolamento, óbito fetal, eclâmpsia |
| Transfusão incompatível | Hemólise aguda |
| Picadas de cobra | Veneno ativa coagulação |
| Queimaduras graves | Lesão endotelial |

> ⚠️ Tratar a causa primária é fundamental. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Escore ISTH (Diagnóstico)",
      content: `## Escore ISTH para CIVD Manifesta

| Exame | Valor | Pontos |
|---|---|---|
| **Plaquetas** | > 100.000 | 0 |
| | 50.000–100.000 | 1 |
| | < 50.000 | 2 |
| **D-dímero** (ou PDF) | Normal | 0 |
| | Moderadamente elevado | 2 |
| | Muito elevado (> 5x normal) | 3 |
| **Tempo de protrombina (TP)** | < 3s de prolongamento | 0 |
| | 3–6s | 1 |
| | > 6s | 2 |
| **Fibrinogênio** | > 1 g/L | 0 |
| | < 1 g/L | 1 |

**Interpretação:**
- ≥ 5 pontos: CIVD manifesta — tratamento específico
- < 5 pontos: CIVD não manifesta — repetir em 24h

## Formas Clínicas

| Forma | Predominância | Apresentação |
|---|---|---|
| **Hemorrágica** | Consumo de fatores | Sangramentos múltiplos (pele, mucosas, sítios IV) |
| **Trombótica** | Microtrombos | Disfunção de múltiplos órgãos, extremidades isquêmicas |
| **Mista** | Ambas | Mais comum em sepse |`,
    },
    {
      id: "screening",
      title: "Identificação Clínica",
      content: `## Suspeitar de CIVD

**Sangramento multissítio** (define a CIVD hemorrágica):
- Sítios de punção venosa que não param de sangrar
- Equimoses extensas espontâneas
- Hematoma em locais de cateter/drenagem
- Hematúria macroscópica
- Sangramento digestivo
- Petéquias / púrpura

**Trombose microvascular** (CIVD trombótica):
- Necrose de dedos (gangena simétrica periférica)
- Purpura fulminans
- Disfunção renal, hepática, cerebral sem outra causa
- Enchimento capilar prejudicado

## Exames de Urgência

| Exame | Achado CIVD | Frequência |
|---|---|---|
| Hemograma | Plaquetopenia (tendência de queda) | A cada 4–6h |
| TP / TTPA | Prolongado | A cada 4–6h |
| Fibrinogênio | < 150 mg/dL (baixo em CIVD hemorrágica) | A cada 4–6h |
| D-dímero / PDF | Muito elevado | A cada 8h |
| Esfregaço de sangue | Esquizócitos (hemólise microangiopática) | 1x |
| Função renal, hepática | Disfunção orgânica | Diária |

**Monitorização seriada é fundamental** — o escore ISTH deve ser recalculado a cada 4–6h.`,
    },
    {
      id: "conduct",
      title: "Conduta — Tratar a Causa + Hemostasia",
      content: `## Passo 1 — TRATAR A CAUSA (Obrigatório e Prioritário)

Sem controle da causa, a CIVD não melhora.

| Causa | Tratamento |
|---|---|
| Sepse | Antibiótico + foco cirúrgico |
| Choque hemorrágico | PTM + cirurgia |
| Leucemia (especialmente M3) | Quimioterapia + ATRA urgente |
| Descolamento de placenta | Parto imediato |
| Reação transfusional | Parar transfusão + suporte |
| Veneno de cobra | Soro antiofídico |

## Passo 2 — Suporte Hemodinâmico

- Ressuscitação volêmica cuidadosa
- Vasopressores conforme protocolo de choque
- Tratar acidose e hipotermia (pioram coagulopatia)

## Passo 3 — Reposição de Hemostasia (Se Sangrando Ativamente)

**Plasma Fresco Congelado (PFC):**
- Dose: 15–25 mL/kg IV (= 4–6 unidades para adulto 70 kg)
- Repõe todos os fatores de coagulação
- Indicar se: TP/TTPA > 1,5x + sangramento ativo

**Plaquetas:**
- Meta: plaquetas ≥ 50.000 se sangramento ou procedimento
- Meta: ≥ 20.000 se sem sangramento (profilático)
- Dose: 1 pool de aférese (= 6–8 unidades convencionais)

**Crioprecipitado:**
- Dose: 10 U IV
- Indicar se: fibrinogênio < 150 mg/dL + sangramento
- 10 U de crioprecipitado = ~5g de fibrinogênio

**Vitamina K:**
- 10 mg IV lento (se deficiência de vitamina K concomitante)

## Passo 4 — Heparina (Controverso)

**Quando considerar:**
- CIVD predominantemente trombótica (necrose de extremidades, purpura fulminans, sem sangramento ativo)
- Leucemia promielocítica (M3) — trombose em fase inicial do tratamento

**NÃO usar:** se sangramento ativo predominante`,
    },
    {
      id: "treatment",
      title: "Tratamento Específico por Causa",
      content: `## CIVD em Sepse

- Tratar infecção agressivamente (Hour-1 Bundle)
- PFC se TP > 1,5x + sangramento ou procedimento invasivo
- Plaquetas se < 50.000 + sangramento
- **NÃO** transfundir de forma profilática apenas para corrigir exames
- Anticoagulação: não recomendada de rotina (HESPERIDIN, KyberSept trials)

## CIVD em Obstétrica

- Parto/evacuação uterina é o tratamento definitivo
- TXA 1g IV imediato (hemorragia pós-parto)
- PTM se hemorragia maciça (1:1:1)
- Fibrinogênio concentrado se disponível (mais rápido que crioprecipitado)

## CIVD em Leucemia M3 (LPA)

- ATRA (ácido all-trans-retinóico) urgente — reverte a CIVD em dias
- PFC + plaquetas + crioprecipitado até resposta ao ATRA
- Meta: fibrinogênio ≥ 150 mg/dL, plaquetas ≥ 50.000

## Monitorização do Tratamento

- Recalcular escore ISTH a cada 4–6h
- Se melhorando: manter tratamento da causa
- Se piorando apesar do tratamento: reavaliação diagnóstica + considerar outras complicações`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — CIVD com Sangramento Ativo

\`\`\`
PACIENTE: _____  ESCORE ISTH: _____/8  FIBRINOGÊNIO: _____

TRATAR CAUSA (PRIORITÁRIO):
□ _________________________________

REPOSIÇÃO HEMOSTASIA (se sangramento ativo):

1. PFC 4–6 unidades IV (15 mL/kg)
   = _____ unidades para _____ kg
   Transfundir o mais rápido possível

2. Plaquetas 1 pool aférese IV SE < 50.000 + sangramento

3. Crioprecipitado 10 U IV SE fibrinogênio < 150 mg/dL
   (alternativa: Fibrinogênio concentrado 4g IV se disponível)

4. TXA 1g IV em 10 min SE hemorragia maciça (exceto CIVD trombótica)

5. Vitamina K 10 mg IV lento (se desnutrição, hepatopatia ou uso de varfarina)

MONITORIZAÇÃO (a cada 4–6h):
□ Hemograma + plaquetas
□ TP + TTPA
□ Fibrinogênio
□ D-dímero
□ Recalcular escore ISTH

META:
□ Plaquetas ≥ 50.000 (sangramento ativo)
□ Fibrinogênio ≥ 150 mg/dL
□ INR < 1,5
□ Controle da causa primária
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Levi M et al. **Disseminated intravascular coagulation: a review for the internist.** Intern Emerg Med. 2018.

Toh CH et al. **Scoring for DIC: the 2009 SSC criteria and the 2017 ISTH Scientific and Standardization Committee recommendations.** J Thromb Haemost. 2019.

Gando S et al. **Disseminated intravascular coagulation.** Nat Rev Dis Primers. 2016.

Squizzato A et al. **Antifibrinolytics for acute non-variceal upper gastrointestinal bleeding.** Cochrane. 2020.

SBH — Sociedade Brasileira de Hematologia e Hemoterapia. **Consenso Brasileiro sobre CIVD.** 2022.`,
    },
  ],
};
