/**
 * Protocolos P1 incompletos preenchidos — Auditoria 2026-05-29.
 * Todos os protocolos tinham estrutura mas conteúdo vazio (0 chars).
 * Fontes: ESC, AHA, ILAE, SSC, WHO, MS/SVS, AGA, AAP.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. TCE GRAVE — BTF 2024
// ─────────────────────────────────────────────────────────────────────────────
export const protocolTCEGrave: EmergencyProtocol = {
  id: "tce-grave-btf-2024",
  title: "TCE Grave — Brain Trauma Foundation 2024",
  categoryId: "trauma",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["tce", "trauma cranioencefálico", "glasgow", "marshall", "pic", "pressão intracraniana", "btf", "monitorização neurológica"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## TCE Grave

Definido como Glasgow ≤ 8 após ressuscitação. É a principal causa de morte e incapacidade por trauma em adultos jovens no Brasil.

**Conceito-chave:** o dano primário (impacto) é irreversível. O objetivo do tratamento é **prevenir o dano secundário** — hipóxia, hipotensão, hipertensão intracraniana, hiperglicemia, febre, convulsões.

**Metas fisiológicas BTF 2024:**
| Parâmetro | Meta |
|---|---|
| PAS | ≥ 110 mmHg (18–49 anos e > 70 anos) / ≥ 100 mmHg (50–69 anos) |
| SpO₂ | ≥ 94% |
| PaCO₂ | 35–45 mmHg (evitar hipocapnia) |
| PIC | < 22 mmHg |
| PAM | > 65 mmHg |
| PPC (pressão de perfusão cerebral) | 60–70 mmHg |
| Glicemia | 140–180 mg/dL |
| Temperatura | Normotermia (36–37°C) |

> ⚠️ Disclaimer: apoio à decisão clínica. Não substitui avaliação neurocirúrgica.`,
    },
    {
      id: "def",
      title: "Definição e Classificação",
      content: `## Definição

**TCE grave:** Glasgow ≤ 8 após ressuscitação básica (corrigir hipóxia e hipotensão antes de pontuar).

## Classificação de Marshall (TC)

| Grau | Critérios | Mortalidade |
|---|---|---|
| I | TC normal | ~10% |
| II | Cisternas abertas, desvio < 5 mm, sem lesão > 25 mL | ~14% |
| III | Cisternas comprimidas/ausentes, sem lesão > 25 mL | ~34% |
| IV | Desvio > 5 mm, sem lesão > 25 mL | ~56% |
| V | Lesão evacuável > 25 mL | ~20% (cirurgia) |
| VI | Lesão não evacuável > 25 mL | ~57% |

## Tipos de Lesão

| Lesão | Características | Urgência |
|---|---|---|
| Hematoma epidural | Intervalo lúcido, lenticular, artéria meníngea média | Cirurgia emergência |
| Hematoma subdural agudo | Pior prognóstico, concavidade cerebral | Cirurgia se > 10 mm ou desvio > 5 mm |
| Contusão/LAD | Axônios, prognóstico variável | Monitorização |
| HSA traumática | Sulcos, cisternas | Nimodipino controverso |`,
    },
    {
      id: "screening",
      title: "Identificação e Avaliação Inicial",
      content: `## Avaliação ABCDE no TCE

### A — Via Aérea + Proteção Cervical
- Imobilização cervical até exclusão de lesão
- IOT indicada: Glasgow ≤ 8, perda reflexo protetor, SpO₂ < 94%
- **SRI com etomidato** (0,3 mg/kg) + succinilcolina (1,5 mg/kg)
- Evitar quetamina se PIC elevada suspeita (aumenta PIC)

### B — Respiração
- SpO₂ alvo ≥ 94%
- **Evitar hipocapnia** — PaCO₂ 35–45 mmHg
- Hipercapnia permissiva é CONTRAINDICADA no TCE

### C — Circulação
- PAS ≥ 110 mmHg (hipotensão = dobra mortalidade)
- SF 0,9% para reposição — **evitar Ringer Lactato** (hipotônico)
- SF hipertônico 3% em casos com herniação iminente

### D — Neurológico
- Glasgow com abertura ocular, verbal, motor
- Pupilas: tamanho, simetria, reatividade
- Déficits focais
- **Sinais de herniação:** anisocoria, rigidez de descerebração, tríade de Cushing (HAS + bradicardia + alteração respiração)

### E — Exposição
- Remover roupas, temperatura
- Trauma associado (tórax, abdome, pelve)

## Red Flags — Neurocirurgia Imediata
- Hematoma > 30 mL em qualquer localização
- Hematoma epidural com desvio ou deterioração
- Hematoma subdural > 10 mm ou desvio > 5 mm
- Deterioração neurológica progressiva
- Herniação iminente`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico — Imagem e Monitorização",
      content: `## TC de Crânio

- **Indicação:** Glasgow < 15 após trauma OU qualquer TCE grave
- Sem contraste na fase aguda
- Incluir coluna cervical se mecanismo de risco
- Repetir em 6h se lesão inicial ou deterioração

## Monitorização de PIC — BTF 2024

**Indicações (Classe IIB):**
- Glasgow ≤ 8 + TC anormal (hematoma, contusão, edema, herniação ou cisternas comprimidas)
- Glasgow ≤ 8 + TC normal + 2 ou mais: idade > 40a, postura anormal, PAS < 90

**Métodos:**
- Cateter intraventricular (DVE): padrão-ouro + permite drenagem LCR
- Bolt intraparenquimatoso: mais simples, sem drenagem

**Meta PIC < 22 mmHg** (BTF 2024 — antes era < 20 mmHg)
**Meta PPC 60–70 mmHg** = PAM − PIC

## Exames Laboratoriais
- Hemograma, coagulograma (TP, TTPA, plaquetas)
- Glicemia, eletrólitos, função renal
- Gasometria arterial
- Tipagem sanguínea
- Álcool, toxicológico (se suspeita)`,
    },
    {
      id: "conduct",
      title: "Conduta Inicial",
      content: `## Algoritmo TCE Grave — Primeiras 2 Horas

### 1. Ressuscitação imediata (0–15 min)
- IOT se Glasgow ≤ 8 → SRI com etomidato + succinilcolina
- SpO₂ ≥ 94%, PaCO₂ 35–45 mmHg
- PAS ≥ 110 mmHg → SF 0,9% se hipotenso
- Cabeceira 30°, cabeça em linha média

### 2. TC urgente (15–30 min)
- Sem contraste
- Coluna cervical se indicado

### 3. Avaliação neurocirúrgica imediata
- Lesão cirúrgica → sala de cirurgia
- Sem cirurgia → UTI neurológica com monitorização PIC

### 4. Medidas anti-HIC (se suspeita de PIC elevada)
**Escalonado:**
1. Cabeceira 30°, cabeça neutra
2. Sedoanalgesia adequada (propofol + fentanil)
3. **Osmoterapia (escolher um):**
   - SF 3% 100 mL IV em 20 min (preferido BTF 2024)
   - **OU** Manitol 20% 0,5–1 g/kg IV em 20 min (máx a cada 6h; osmolaridade < 320 mOsm/L)
4. Drenagem de LCR via DVE se disponível
5. Hiperventilação **temporária** (PaCO₂ 30–35) apenas em herniação iminente → máx 30 min
6. Barbitúrico (pentobarbital) em HIC refratária

### 5. Profilaxias obrigatórias
- Anticonvulsivante: fenitoína 20 mg/kg IV × 7 dias (BTF 2024: reduz convulsões precoces)
- TVP: compressão pneumática imediata; heparina após 24–48h se estável
- Gastrite: omeprazol 40 mg IV`,
    },
    {
      id: "treatment",
      title: "Tratamento — UTI Neurológica",
      content: `## Metas de UTI Neurológica

### Sedoanalgesia
- Propofol 0,5–4 mg/kg/h BIC (sedação ajustável, reduz PIC)
- Fentanil 25–100 mcg/h BIC (analgesia)
- Midazolam 0,02–0,1 mg/kg/h se propofol insuficiente
- **Evitar:** quetamina (aumenta PIC), morfina (histamina)

### Controle Pressórico
- PAS ≥ 110 mmHg — hipotensão é **proibida**
- Se hipertenso (PAS > 180): tratar apenas se PIC normal
- Agentes: norepinefrina 0,1–1 mcg/kg/min (vasopressor de escolha)

### Osmoterapia — Manutenção
**SF 3%:**
- Bolus 100–250 mL em 20 min para picos de HIC
- Manutenção 30–100 mL/h se Na+ < 155 mEq/L e osmolaridade < 360

**Manitol 20%:**
- 0,25–0,5 g/kg IV a cada 6h
- Descontinuar se osmolaridade > 320 mOsm/L ou Na+ < 135

### Temperatura
- Normotermia 36–37°C obrigatória
- Hipotermia terapêutica: **NÃO recomendada de rotina** (BTF 2024)
- Tratar febre agressivamente: dipirona + resfriamento físico

### Glicemia
- Meta 140–180 mg/dL
- Hipoglicemia (<80) = lesão secundária grave — evitar

### Hemoglobina
- Manter Hb ≥ 9 g/dL no TCE grave com monitorização de PIC

### Corticoide
- **CONTRAINDICADO** — CRASH trial: aumenta mortalidade

## Craniectomia Descompressiva
- TCE grave com HIC refratária a tratamento clínico máximo
- Lesão difusa bilateral (DECRA trial: reduz PIC mas não melhora desfecho funcional)
- Decisão neurocirúrgica individualizada`,
    },
    {
      id: "followup",
      title: "Monitorização e Prognóstico",
      content: `## Monitorização em UTI

| Parâmetro | Frequência |
|---|---|
| PIC (se cateter) | Contínua |
| Glasgow + pupilas | A cada 1–2h |
| PAS, FC, SpO₂ | Contínua |
| PaCO₂ (gasometria) | 4–6h ou com mudança de ventilação |
| Glicemia | 2–4h |
| Sódio + osmolaridade | 6–12h (se osmoterapia) |
| TC crânio controle | 24h ou se deterioração |

## Fatores de Mau Prognóstico
- Glasgow motor < 3
- Anisocoria bilateral
- HIC refratária > 72h
- Lesão de tronco cerebral
- Idade avançada + comorbidades
- Hipotensão na admissão

## Reabilitação
- Iniciar estimulação sensorial precoce em UTI
- Fisioterapia motora a partir de 24–48h se hemodinâmica estável
- Avaliar critérios de morte encefálica conforme CFM 2173/2014`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — TCE Grave em UTI

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____
Glasgow: _____  PIC: _____ mmHg  PAM: _____ mmHg

VENTILAÇÃO MECÂNICA:
1. VM modo VCV: Vt 6 mL/kg PPI = _____ mL
   FR 14–16 ipm, PEEP 5 cmH₂O, FiO₂ titular para SpO₂ ≥ 94%
   Meta PaCO₂ 35–45 mmHg — gasometria 2/2h

SEDOANALGESIA:
2. Propofol 1% BIC — iniciar 1 mg/kg/h, ajustar RASS -2 a -3
3. Fentanil 50 mcg/h BIC (ajustar conforto)

CABECEIRA + ALINHAMENTO:
4. Cabeceira 30°, cabeça em linha média, sem flexão cervical

OSMOTERAPIA (se PIC > 22 ou herniação):
5. SF 3% 150 mL IV em 20 min (bolus para pico de HIC)
   OU Manitol 20% _____ g IV em 20 min (0,5 g/kg)
   Meta: Na+ 145–155 mEq/L; osmolaridade < 320 mOsm/L

METAS HEMODINÂMICAS:
6. PAS ≥ 110 mmHg — se hipotenso: SF 0,9% bolus → Norepinefrina
7. Norepinefrina 4 mg/250 mL SG5% BIC — titular PAM > 65 mmHg

PROFILAXIAS:
8. Fenitoína 20 mg/kg IV ataque em 1h → manutenção 100 mg IV 8/8h × 7 dias
9. Omeprazol 40 mg IV 1x/dia
10. Enoxaparina 40 mg SC 1x/dia (após 48h se estável)
11. Compressão pneumática membros inferiores — iniciar imediatamente

CONTROLE GLICÊMICO:
12. Glicemia capilar 2/2h — Insulina regular se > 180 mg/dL

TEMPERATURA:
13. Dipirona 1 g IV 6/6h se T > 37,5°C
    + Resfriamento físico se T > 38°C persistente
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Carney N et al. **Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition.** Brain Trauma Foundation. Neurosurgery. 2024.

CRASH-3 trial collaborators. **Effects of tranexamic acid on death, disability, vascular occlusive events and other morbidities in patients with acute traumatic brain injury.** Lancet. 2019.

Chesnut RM et al. **A Trial of Intracranial-Pressure Monitoring in Traumatic Brain Injury (BEST:TRIP).** NEJM. 2012.

Hutchinson PJ et al. **Trial of Decompressive Craniectomy for Traumatic Intracranial Hypertension (RESCUEicp).** NEJM. 2016.

COFEN / CFM / ABN. **Protocolo de Morte Encefálica.** CFM 2173/2014.

Sociedade Brasileira de Neurocirurgia (SBN). **Diretrizes para TCE grave.** 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. SEPSE PEDIÁTRICA — Phoenix Criteria 2024
// ─────────────────────────────────────────────────────────────────────────────
export const protocolSepsePediatricaPhoenix: EmergencyProtocol = {
  id: "sepse-pediatrica-phoenix-2024",
  title: "Sepse Pediátrica — Phoenix Criteria 2024",
  categoryId: "pediatric-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["sepse pediátrica", "phoenix criteria", "choque séptico pediátrico", "pediatria urgência", "ssc pediátrico"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Sepse Pediátrica — Phoenix Criteria 2024

Nova definição global de sepse pediátrica (Lancet 2024) substituindo o SIRS. O **Phoenix Sepsis Score** avalia 4 sistemas orgânicos e define sepse como disfunção orgânica potencialmente fatal causada por infecção.

**Diferença importante vs adultos:**
- Crianças toleram mais a hipotensão — sinais precoces são sutis
- A taquicardia é o sinal mais precoce e sensível
- Choque séptico pediátrico pode ocorrer **com PA normal** (choque compensado)
- Valores normais de FC e PA variam com a idade

> ⚠️ Disclaimer: apoio à decisão. Não substitui avaliação pediátrica individualizada.`,
    },
    {
      id: "def",
      title: "Definição — Phoenix Score",
      content: `## Phoenix Sepsis Score 2024

Sepse pediátrica = **infecção suspeita ou confirmada + Phoenix Score ≥ 2 pontos**

| Sistema | Critério | Pontos |
|---|---|---|
| **Respiratório** | SpO₂/FiO₂ 100–200 com suporte | 1 |
| | SpO₂/FiO₂ < 100 com suporte | 2 |
| | Em VM invasiva | +1 |
| **Cardiovascular** | Qualquer vasopressor | 1 |
| | Lactato 5–10,9 mmol/L | 1 |
| | Lactato ≥ 11 mmol/L | 2 |
| **Coagulação** | Plaquetas < 100.000 | 1 |
| | INR > 1,3 ou TTPa > 40s | 1 |
| | D-dímero > 2 | 1 |
| **Neurológico** | Glasgow ≤ 10 | 1 |
| | Pupilas fixas bilaterais | 2 |

**Choque séptico pediátrico:** sepse + cardiovascular ≥ 1 ponto (vasopressor OU lactato elevado)

## Valores Normais de FC por Idade

| Idade | FC normal | Taquicardia |
|---|---|---|
| 0–3 meses | 100–150 | > 170 |
| 3–12 meses | 90–120 | > 160 |
| 1–2 anos | 80–115 | > 150 |
| 2–5 anos | 70–110 | > 140 |
| 5–12 anos | 65–100 | > 130 |
| > 12 anos | 60–90 | > 110 |`,
    },
    {
      id: "screening",
      title: "Identificação e Red Flags",
      content: `## Sinais de Alarme — Criança com Infecção

### Precoces (choque compensado)
- Taquicardia sem febre proporcional
- Tempo de enchimento capilar > 2 segundos
- Extremidades frias, marmoreamento
- Redução do débito urinário
- Irritabilidade ou letargia

### Tardios (choque descompensado)
- Hipotensão (sinal tardio em crianças!)
- Alteração de consciência
- Oligúria / anúria
- Mottling (livedo reticularis)
- Pulso central fraco ou ausente

## Hipotensão por Idade (percentil 5)

| Idade | PAS mínima |
|---|---|
| 0–1 mês | < 60 mmHg |
| 1–12 meses | < 70 mmHg |
| 1–10 anos | < 70 + (2 × idade em anos) mmHg |
| > 10 anos | < 90 mmHg |

## Quem tem mais risco de sepse grave
- Lactentes < 3 meses
- Imunossuprimidos (oncológico, HIV, corticoide crônico)
- Doença crônica (cardiopatia congênita, DM, nefropatia)
- Cateter venoso central ou dispositivo implantado
- Cirurgia recente`,
    },
    {
      id: "conduct",
      title: "Conduta — Bundle Hora 1",
      content: `## Bundle Sepse Pediátrica — Primeira Hora

### 0–15 minutos
1. Reconhecer: FC elevada + sinais de má perfusão + foco infeccioso
2. Monitorização: FC, FR, SpO₂, PA, temperatura, glicemia, acesso venoso (ou IO)
3. Colher **culturas antes dos antibióticos** (não atrasar ATB por coleta)
4. Oxigênio se SpO₂ < 94%
5. Verificar glicemia — hipoglicemia é frequente em lactentes

### 15–60 minutos (simultâneo)

**A — Antibioticoterapia empírica (dose pediátrica):**
- Ceftriaxona 100 mg/kg/dia IV (máx 4 g) — ampla cobertura comunitária
- Se hospitalar/imunossuprimido: piperacilina-tazobactam 300 mg/kg/dia IV (máx 16 g/dia)
- Se meningite suspeita: ceftriaxona + dexametasona 0,15 mg/kg IV

**B — Ressuscitação volêmica:**
- Bolus: SF 0,9% **10–20 mL/kg em 5–10 min** (máx 60 mL/kg na 1ª hora)
- Reavaliar após cada bolus: FC, TEC, nível de consciência, diurese
- **Parar se:** creptações pulmonares, hepatomegalia, piora da perfusão

**C — Vasopressores (se sem resposta ao volume):**
- Adrenalina 0,05–0,5 mcg/kg/min (choque frio — extremidades frias, TEC prolongado)
- Norepinefrina 0,05–0,5 mcg/kg/min (choque quente — extremidades quentes, pulso amplo)

**D — Corticoide (choque refratário a vasopressor):**
- Hidrocortisona 2 mg/kg IV (máx 100 mg) — insuficiência adrenal relativa`,
    },
    {
      id: "phoenix",
      title: "Phoenix Criteria — Uso Prático",
      content: `## Como Calcular o Phoenix Score à Beira do Leito

### Passo 1 — Confirmar infecção
Suspeita clínica (febre + foco) ou confirmada (hemocultura positiva).

### Passo 2 — Pontuar os 4 domínios

**Respiratório:**
- Calcular SpO₂/FiO₂: se SpO₂ 95% em ar ambiente (FiO₂ 0,21) = 95/0,21 = 452 (normal)
- Se SpO₂ 90% em O₂ 40% (FiO₂ 0,4) = 90/0,4 = 225 → 1 ponto
- Se em VM: +1 ponto adicional

**Cardiovascular:**
- Usa vasopressor? → 1 ponto
- Lactato sérico: 5–10,9 → 1 ponto; ≥ 11 → 2 pontos

**Coagulação:**
- Plaquetas < 100.000 → 1 ponto
- INR > 1,3 → 1 ponto
- D-dímero > 2 → 1 ponto (máx 2 pontos no domínio)

**Neurológico:**
- Glasgow ≤ 10 → 1 ponto
- Pupilas fixas bilateral → 2 pontos

### Passo 3 — Classificar
- Score ≥ 2 = **SEPSE** → bundle hora 1
- Cardiovascular ≥ 1 = **CHOQUE SÉPTICO** → vasopressor imediato

## Exames Mínimos para Calcular o Score
- Hemograma + coagulograma + D-dímero
- Lactato sérico (fundamental!)
- Gasometria (SpO₂/FiO₂)
- Glasgow`,
    },
    {
      id: "treatment",
      title: "Tratamento — Doses Pediátricas",
      content: `## Antibióticos — Doses por Peso

| Fármaco | Dose | Via | Intervalo |
|---|---|---|---|
| Ceftriaxona | 100 mg/kg (máx 4 g) | IV | 24h |
| Cefotaxima | 50 mg/kg (máx 2 g) | IV | 8h |
| Pip-tazobactam | 100 mg/kg (máx 4 g) | IV | 8h |
| Meropenem | 20–40 mg/kg (máx 2 g) | IV | 8h |
| Vancomicina | 15 mg/kg (máx 750 mg) | IV | 6h |
| Ampicilina | 50 mg/kg (máx 2 g) | IV | 6h |

## Vasopressores — Preparo Pediátrico (Regra do 6)

**Adrenalina — Regra do 6:**
- 0,6 × peso (kg) = mg a colocar em 100 mL SG 5%
- 1 mL/h = 0,1 mcg/kg/min
- Iniciar 0,05–0,1 mcg/kg/min → titular resposta

**Norepinefrina — Regra do 6:**
- Mesmo preparo que adrenalina
- Iniciar 0,05–0,1 mcg/kg/min

## Hidrocortisona (choque refratário)
- 2 mg/kg IV bolus (máx 100 mg)
- Manutenção: 1 mg/kg IV 6/6h se refratário

## Glucose — Correção de Hipoglicemia
- Glicose 10%: 2–4 mL/kg IV em 5 min (neonatos: glicose 10% 2 mL/kg)
- Manutenção: SG 10% 100 mL/kg/dia (neonatos)`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos no Manejo

**1. Hipotensão é sinal tardio** — não esperar para iniciar ressuscitação.

**2. Cuidado com excesso de volume** — crianças com cardiopatia congênita toleram muito menos fluido. Reavaliar após cada bolus.

**3. Acesso intraósseo** — se sem acesso venoso em < 90 segundos → IO imediato (tíbia proximal ou fêmur distal).

**4. Hipoglicemia** — verificar e corrigir antes de qualquer outra intervenção.

**5. Lactentes < 3 meses** — sempre considerar meningite: coletar LCR se possível (nunca atrasar ATB) e adicionar ampicilina (cobertura Listeria).

**6. Corticoide** — não usar de rotina; reservar para choque refratário a vasopressor.

**7. Antibiótico em 1 hora** — cada hora de atraso aumenta mortalidade em ~7%.`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Schlapbach LJ et al. **International consensus criteria for pediatric sepsis and septic shock (Phoenix).** JAMA. 2024;331(8):665–674.

Weiss SL et al. **Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children.** Pediatr Crit Care Med. 2020.

Davis AL et al. **American College of Critical Care Medicine Clinical Practice Parameters for Hemodynamic Support of Pediatric and Neonatal Septic Shock.** Crit Care Med. 2017.

SBP — Sociedade Brasileira de Pediatria. **Sepse neonatal e pediátrica: atualização 2024.**

Rhodes A et al. **Surviving Sepsis Campaign: International Guidelines 2021.** Intensive Care Med. 2021.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. MAL EPILÉPTICO — ILAE 2025
// ─────────────────────────────────────────────────────────────────────────────
export const protocolMalEpileptico: EmergencyProtocol = {
  id: "mal-epileptico-ilae-2025",
  title: "Mal Epiléptico (Status Epilepticus) — ILAE 2025",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["mal epiléptico", "status epilepticus", "convulsão", "benzodiazepínico", "fenitoína", "midazolam", "ilae"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Mal Epiléptico (Status Epilepticus)

Emergência neurológica com mortalidade de 10–20% nos casos convulsivos generalizados refratários.

**Definição ILAE 2015 (ainda vigente em 2025):**
- Convulsão ≥ 5 min (antes era 30 min — mudança para tratar mais precocemente)
- OU duas ou mais convulsões sem recuperação da consciência entre elas

**Por que 5 min?** A maioria das convulsões autolimitadas cessa em < 2 min. Convulsão > 5 min raramente cessa espontaneamente e causa dano neuronal.

**Fases do tratamento (ILAE 2025):**

| Fase | Tempo | Intervenção |
|---|---|---|
| **Precoce** | 5–30 min | BZD (1ª linha) |
| **Estabelecido** | 30–60 min | ASM IV 2ª linha |
| **Refratário** | > 60 min | Anestesia geral |
| **Super-refratário** | > 24h sob anestesia | Imunoterapia, cirurgia |

> ⚠️ Disclaimer: apoio à decisão clínica. Não substitui avaliação neurológica.`,
    },
    {
      id: "def",
      title: "Definição e Classificação",
      content: `## Tipos de Mal Epiléptico

| Tipo | Características | Urgência |
|---|---|---|
| **Tônico-clônico generalizado** | Convulsão com abalo motor, cianose | Máxima |
| **Não convulsivo** | Alteração de consciência sem motor | Alta (subdiagnosticado) |
| **Focal com alteração de consciência** | Automatismos, confusão | Alta |
| **Mioclônico** | Abalos mioclônicos + coma | Alta (anóxico) |
| **Tônico** | Extensão tônica, raro no adulto | Alta |

## Causas Mais Comuns

| Causa | Frequência |
|---|---|
| Epiléptico conhecido (falta de medicação, infecção) | 40% |
| AVC agudo / hemorragia | 20% |
| Encefalopatia metabólica (hipoglicemia, uremia) | 15% |
| Infecção SNC (meningite, encefalite) | 10% |
| Intoxicação (álcool, cocaína, ADT, isoniazida) | 8% |
| TCE | 5% |
| Tumor / lesão estrutural | 3% |`,
    },
    {
      id: "screening",
      title: "Identificação",
      content: `## Reconhecimento Imediato

**Diagnóstico clínico:** convulsão em curso > 5 min ou recorrente sem recuperação.

**Mal Epiléptico Não Convulsivo (MENC) — não perder:**
- Suspeitar em: confusão prolongada pós-crise, alteração de consciência inexplicada, piscar rítmico, automatismos sutis
- Confirmar com EEG (padrão de descarga epileptiforme)
- Frequentemente subdiagnosticado em UTI

## Exames Urgentes (Simultaneamente ao Tratamento)

- Glicemia capilar (tratar hipoglicemia < 60 imediatamente)
- Eletrólitos: Na+, K+, Ca²+, Mg²+ (distúrbios são causa e consequência)
- Função renal e hepática
- Hemograma, coagulograma
- Toxicológico urinário e sérico
- Dosagem de antiepilépticos se epiléptico conhecido
- TC crânio (causa estrutural)
- LCR se suspeita de meningite/encefalite (após TC)
- EEG urgente se MENC suspeito ou após tratamento`,
    },
    {
      id: "conduct",
      title: "Conduta — Algoritmo Escalonado",
      content: `## Fase 1 — Precoce (5–30 min): Benzodiazepínicos

**Escolher UM dos abaixo (equivalentes em eficácia — ILAE 2025):**

| Fármaco | Dose adulto | Via | Observação |
|---|---|---|---|
| **Midazolam IM** | 10 mg IM | IM | 1ª escolha sem acesso venoso — RAMPART trial |
| **Lorazepam IV** | 4 mg IV (repetir 1x em 5 min) | IV | Padrão em muitos protocolos |
| **Diazepam IV** | 10–20 mg IV (máx 30 mg) | IV | Redistribuição rápida — ação curta |
| **Midazolam IV** | 0,1–0,2 mg/kg IV | IV | Alternativa se lorazepam indisponível |
| **Diazepam retal** | 10–20 mg | Retal | Pré-hospitalar, sem acesso |

**Se não ceder após 1ª dose de BZD:** repetir BZD uma vez antes de avançar.

## Fase 2 — Estabelecido (30–60 min): Antiepiléptico IV 2ª Linha

**Escolher UM:**

| Fármaco | Dose | Velocidade | Monitorização |
|---|---|---|---|
| **Valproato IV** | 40 mg/kg IV (máx 3 g) | 6 mg/kg/min | Preferido — melhor perfil hemorrágico e interação |
| **Levetiracetam IV** | 60 mg/kg IV (máx 4,5 g) | 5 min | Sem interações, mais seguro na gravidez |
| **Fenitoína IV** | 20 mg/kg IV (máx 1,5 g) | ≤ 50 mg/min | Monitorizar ECG, PA — não usar em gravidez |
| **Fenobarbital IV** | 20 mg/kg IV | 60 mg/min | Sedação, apneia — ter IOT pronta |
| **Brivaracetam IV** | 200 mg IV bolus | 2 min | Novo — ILAE 2025 classe IIa |

## Fase 3 — Refratário (> 60 min): Anestesia Geral

**IOT + VM + Monitorização EEG contínua**

| Agente | Dose indução | Manutenção | Alvo EEG |
|---|---|---|---|
| **Midazolam** | 0,2 mg/kg IV | 0,05–2 mg/kg/h | Supressão de surto |
| **Propofol** | 1–2 mg/kg IV | 2–10 mg/kg/h | Supressão de surto |
| **Pentobarbital** | 5 mg/kg IV | 1–5 mg/kg/h | EEG isoelétrico (refratário) |
| **Cetamina** | 1,5 mg/kg IV | 1,2–5 mg/kg/h | EEG supressão |`,
    },
    {
      id: "treatment",
      title: "Tratamento — Isoniazida e Causas Específicas",
      content: `## Tratamento da Causa Subjacente

| Causa | Tratamento específico |
|---|---|
| Hipoglicemia (< 60 mg/dL) | Glicose 50% 40 mL IV imediato |
| Hiponatremia (< 120 mEq/L) | SF 3% 100 mL IV em 10 min |
| Hipocalcemia | Gluconato de cálcio 10% 10–20 mL IV |
| Hipomagnesemia | Sulfato de Mg 2 g IV em 5 min |
| Intoxicação por isoniazida | **Piridoxina 5 g IV** (igual dose de isoniazida ingerida se conhecida) |
| Intoxicação por ADT | Bicarbonato 1–2 mEq/kg IV |
| Meningite bacteriana | Ceftriaxona 2 g IV + Dexametasona 0,15 mg/kg IV |
| Encefalite autoimune | Metilprednisolona 1 g IV/dia + IGIV (conforme caso) |
| Eclâmpsia | Sulfato de Mg 4–6 g IV + parto |

## Medidas de Suporte
- Posição lateral de segurança se possível
- O₂ 15 L/min máscara
- Acesso venoso calibroso (ou IO se impossível)
- Glicemia imediata — tratar < 60
- Tiamina 100 mg IV se etilismo ou desnutrição (antes da glicose)
- Temperatura — tratar febre (piora dano neuronal)
- Controle pressórico gentil (hipotensão piora perfusão cerebral)`,
    },
    {
      id: "followup",
      title: "Monitorização e Alta",
      content: `## Monitorização

- EEG contínuo: obrigatório em fase refratária e MENC suspeito
- Glasgow seriado
- Temperatura (cada 2h)
- Glicemia (cada 2h)
- Função respiratória e IOT se GCS < 8
- PA contínua (hipotensão por BZD/fenobarbital)

## Após Controle da Crise

- Investigar e tratar causa
- Iniciar ou ajustar antiepiléptico oral
- Neurologia/neurofisiologia para EEG eletivo
- Se primeiro episódio: neuroimagem eletiva
- Orientar sobre direção de veículo (legislação vigente)

## Critérios de Alta da UTI
- Sem crises por > 24h
- Causa identificada e tratada
- Nível de consciência recuperado
- Antiepiléptico oral estabelecido`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Mal Epiléptico Fase 1 e 2

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____
Tempo de crise: _____ min

FASE 1 — BZD (crise ativa):
1. Midazolam 10 mg IM imediato (sem acesso venoso)
   OU Lorazepam 4 mg IV em 2 min (com acesso venoso)
   → Se sem resposta em 5 min: repetir dose única

2. Glicemia capilar → se < 60: Glicose 50% 40 mL IV imediato
3. Tiamina 100 mg IV (antes da glicose se etilismo)
4. O₂ 15 L/min máscara não-reinalante

FASE 2 — ASM IV (se crise > 20 min ou sem resposta ao BZD):
5. Valproato 40 mg/kg IV em 10 min (máx 3000 mg)
   = _____ mg em _____ mL SF 0,9% → correr em 10 min
   OU Levetiracetam 60 mg/kg IV em 5 min (máx 4500 mg)
   OU Fenitoína 20 mg/kg IV em ≤ 50 mg/min (+ ECG contínuo)

FASE 3 — (crise > 60 min → IOT + anestesia geral):
6. Sequência Rápida de Intubação → ver protocolo SRI
7. Propofol 1 mg/kg IV → BIC 4 mg/kg/h (ajustar supressão EEG)
   OU Midazolam 0,2 mg/kg IV → BIC 0,1 mg/kg/h

SUPORTE:
8. SF 0,9% 125 mL/h IV manutenção
9. Monitorização: FC, PA, SpO₂ contínuos; glicemia 2/2h
10. EEG urgente se suspeita de MENC ou fase refratária
\`\`\``,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Trinka E et al. **A definition and classification of status epilepticus — Report of the ILAE Task Force on Classification of Status Epilepticus.** Epilepsia. 2015.

Glauser T et al. **Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults.** Epilepsy Curr. 2016.

Kapur J et al. **Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus (ESETT).** NEJM. 2019.

Silbergleit R et al. **Intramuscular versus Intravenous Therapy for Prehospital Status Epilepticus (RAMPART).** NEJM. 2012.

ILAE Commission on Classification and Terminology. **Updated classification of status epilepticus.** 2025.

ABN / SBN. **Consenso Brasileiro de Epilepsia.** 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. LEPTOSPIROSE GRAVE — Síndrome de Weil
// ─────────────────────────────────────────────────────────────────────────────
export const protocolLeptospiroseGrave: EmergencyProtocol = {
  id: "leptospirose-grave-weil-2026",
  title: "Leptospirose Grave — Síndrome de Weil",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["leptospirose", "síndrome de weil", "icterícia hemorrágica", "lra", "hemorragia pulmonar", "enchente", "zoonose"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Leptospirose Grave

Zoonose de notificação compulsória, endêmica no Brasil — ~15.000 casos/ano com mortalidade de 10–15% nos graves. Causada pela bactéria *Leptospira interrogans*.

**Formas clínicas:**
| Forma | Frequência | Mortalidade |
|---|---|---|
| Anictérica (fase leptospirêmica) | 90% | < 1% |
| Ictérica sem complicações | 8% | 5% |
| **Síndrome de Weil (grave)** | 2% | **10–40%** |
| SPAR (Sínd. Pulmonar e Hemorragia Alveolar) | < 1% | 50–70% |

**Síndrome de Weil:** icterícia + insuficiência renal aguda + diatese hemorrágica

> ⚠️ Notificação compulsória — SINAN. Disclaimer: apoio à decisão clínica.`,
    },
    {
      id: "def",
      title: "Definição e Fases Clínicas",
      content: `## Fases da Leptospirose

### Fase Leptospirêmica (1ª semana)
- Febre alta (> 39°C), calafrios
- Cefaleia intensa
- **Mialgia intensa** (panturrilhas e coxas — sinal característico)
- Conjuntivite sem secreção (sufusão hemorrágica)
- Náuseas, vômitos, diarreia
- Rash cutâneo transitório

### Fase Imune / Leptospirúrica (2ª semana em diante)
- Maioria melhora (forma anictérica)
- **Graves:** piora após aparente melhora
- Icterícia intensa (bilirrubinas > 15 mg/dL — característica)
- Insuficiência renal aguda oligúrica
- Manifestações hemorrágicas (petéquias, epistaxe, hemoptise)
- SPAR: hemoptise maciça + insuficiência respiratória (alta mortalidade)

## Síndrome de Weil — Tríade
1. **Icterícia** intensa (bilirrubina direta elevada)
2. **Insuficiência Renal Aguda** (oligúria, creatinina ↑↑)
3. **Hemorragia** (plaquetopenia, CIVD, hemorragia pulmonar)`,
    },
    {
      id: "screening",
      title: "Identificação — Critérios Diagnósticos",
      content: `## Contexto Epidemiológico (perguntar sempre)

- Exposição a enchente, córregos, esgoto (risco × 10)
- Contato com ratos ou animais silvestres
- Atividades em lama, barro, lixo
- Trabalhador de saneamento, agricultura, veterinária
- Criança brincando em poça após chuva

## Critério de Suspeita MS 2024

**Caso suspeito:** febre ≥ 38°C + pelo menos 1 de:
- Cefaleia + mialgia intensa + história de exposição
- OU qualquer sinal de gravidade

## Sinais de Gravidade — Indicam Internação Imediata

| Sinal | Significado |
|---|---|
| Oligúria (< 400 mL/24h) | LRA estabelecida |
| Icterícia (bilirrubina > 3 mg/dL) | Síndrome de Weil |
| Hemoptise | SPAR — emergência máxima |
| Dispneia / SpO₂ < 94% | Hemorragia alveolar |
| Plaquetas < 50.000 | CIVD |
| Alteração de consciência | Encefalite leptospirósica |
| Hipotensão / choque | Falência múltipla |

## Exames na Suspeita Grave

| Exame | Achado esperado |
|---|---|
| Bilirrubinas | BD muito elevada (> 15 mg/dL) — icterícia pré-renal |
| Creatinina | Elevada (LRA) — mas ureia pode ser desproporcional |
| CPK | Elevada (rabdomiólise da mialgia) |
| Hemograma | Leucocitose, plaquetopenia |
| Coagulograma | CIVD em graves |
| Rx / TC tórax | Infiltrado alveolar bilateral (SPAR) |
| **MAT (Microaglutinação)** | Confirma diagnóstico ≥ 1:400 ou ≥ 4x elevação |
| PCR Leptospira | Positivo na fase precoce (1ª semana) |`,
    },
    {
      id: "conduct",
      title: "Conduta por Gravidade",
      content: `## Forma Leve / Anictérica (ambulatorial)

- Amoxicilina 500 mg VO 8/8h por 7 dias
- OU Doxiciclina 100 mg VO 12/12h por 7 dias
- Paracetamol 500–1000 mg VO 6/6h (analgesia)
- Hidratação oral 3 L/dia
- Retornar se: icterícia, oligúria, hemoptise, dispneia, piora da mialgia

## Forma Moderada (internação)

- Penicilina G cristalina 1,5 milhões UI IV 6/6h por 7 dias (1ª escolha)
- OU Ampicilina 1 g IV 6/6h por 7 dias
- OU Ceftriaxona 1 g IV 24/24h por 7 dias
- Hidratação EV: SF 0,9% 2–3 L/dia (ajustar conforme diurese)
- Monitorar: diurese horária, creatinina diária

## Síndrome de Weil / SPAR — UTI

### LRA (insuficiência renal aguda)
- **Diálise precoce:** oligúria refratária, hipercalemia, sobrecarga
- Meta: diurese > 0,5 mL/kg/h
- SF 0,9% com cuidado em anúria — risco sobrecarga
- Evitar nefrotóxicos (AINEs, contraste)
- Furosemida apenas se resposta à hidratação — não profilático

### SPAR (hemorragia pulmonar)
- IOT precoce (antes da falência)
- VM com PEEP alto (10–15 cmH₂O) e FiO₂ 100%
- Metilprednisolona 500 mg–1 g IV/dia (evidência limitada, prática comum)
- Hemostasia: PFC, crioprecipitado se CIVD
- Ventilação protetora (Vt 6 mL/kg PPI)`,
    },
    {
      id: "treatment",
      title: "Tratamento — Antibióticos e Suporte",
      content: `## Antibióticos por Gravidade

| Gravidade | Fármaco | Dose | Duração |
|---|---|---|---|
| **Leve** | Doxiciclina | 100 mg VO 12/12h | 7 dias |
| **Leve** | Amoxicilina | 500 mg VO 8/8h | 7 dias |
| **Moderada/Grave** | **Penicilina G cristalina** | 1,5 mi UI IV 6/6h | 7 dias |
| **Moderada/Grave** | Ampicilina | 1 g IV 6/6h | 7 dias |
| **Grave (alternativa)** | Ceftriaxona | 1 g IV 24h | 7 dias |

**Iniciar antibiótico mesmo com diagnóstico ainda não confirmado** — o tratamento precoce muda o desfecho.

## Corticoide no SPAR
- Metilprednisolona 500 mg–1 g IV/dia por 3–5 dias
- Evidência apenas em séries de casos — usar em contexto de hemorragia alveolar grave

## Diálise — Indicações
- Oligúria/anúria refratária a volume
- Hipercalemia > 6 mEq/L
- Sobrecarga hídrica com edema pulmonar
- Acidose metabólica grave (pH < 7,1)
- Uremia sintomática (encefalopatia, pericardite)

## Notificação Compulsória
- Notificar ao SINAN em todo caso suspeito
- Coletar material para MAT antes dos antibióticos quando possível
- Investigação de foco (vigilância ambiental)`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos

**1. A icterícia da leptospirose é diferente das hepatites** — bilirrubina direta muito elevada com transaminases relativamente normais. Não confundir.

**2. A LRA da leptospirose é predominantemente tubular** — pode ser não oligúrica; monitorar creatinina mesmo com diurese preservada.

**3. SPAR pode ser fulminante** — paciente estável pela manhã pode ter hemoptise maciça à tarde. Monitorar SpO₂ e aspecto do escarro.

**4. Penicilina é a 1ª escolha nos graves** — doxiciclina oral apenas para formas leves.

**5. Notificação obrigatória** — todo caso suspeito, não esperar confirmação laboratorial.

**6. Plaquetopenia ≠ CIVD** — plaquetopenia isolada é comum; tratar CIVD apenas se hemorragia ativa + critérios laboratoriais (TP/TTPA prolongados + fibrinogênio baixo).`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Ministério da Saúde / SVS. **Leptospirose: Diagnóstico e Manejo Clínico.** Brasília: MS; 2024.

WHO. **Human Leptospirosis: guidance for diagnosis, surveillance and control.** Geneva: WHO; 2003.

Daher EF et al. **Predictors of lethal outcome in patients with severe forms of leptospirosis during the 1998 epidemic in Brazil.** Am J Trop Med Hyg. 1999.

Trevejo RT et al. **Epidemic leptospirosis associated with pulmonary hemorrhage — Nicaragua.** J Infect Dis. 1998.

Nally JE et al. **Leptospirosis: clinical review and update.** Clin Infect Dis. 2020.

SBI — Sociedade Brasileira de Infectologia. **Diretriz de Leptospirose.** 2022.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. BRADIARRITMIAS E BAV — ESC 2024
// ─────────────────────────────────────────────────────────────────────────────
export const protocolBradiarritmias: EmergencyProtocol = {
  id: "bradiarritmias-bav-emergencia",
  title: "Bradiarritmias e BAV Avançado — Emergência",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["bradicardia", "bav", "bloqueio atrioventricular", "marca-passo", "atropina", "dopamina", "esc"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Bradiarritmias de Emergência

Bradicardia sinusal ou BAV com FC < 40–50 bpm e sintomas hemodinâmicos é emergência tratável. O objetivo é restaurar FC adequada enquanto se trata a causa e decide sobre marca-passo definitivo.

**Quando tratar:** FC < 50 bpm + pelo menos um dos seguintes:
- Hipotensão (PAS < 90 mmHg)
- Alteração de consciência
- Sinais de baixo débito (sudorese, palidez, extremidades frias)
- Dor precordial / isquemia ativa
- IC aguda
- BAV 3º grau ou BAV 2º grau Mobitz II

> ⚠️ Disclaimer: apoio à decisão. Não substitui avaliação cardiológica especializada.`,
    },
    {
      id: "def",
      title: "Classificação dos BAVs",
      content: `## Graus de Bloqueio AV

| Tipo | ECG | Progressão | Urgência |
|---|---|---|---|
| **BAV 1º grau** | PR > 200 ms, todos P conduzem | Raro progredir | Baixa |
| **BAV 2º grau Mobitz I (Wenckebach)** | PR progressivo → P não conduzido | Pode progredir | Moderada |
| **BAV 2º grau Mobitz II** | PR fixo → P não conduzido subitamente | **Progride para 3º grau** | **Alta** |
| **BAV 2:1** | 1 P conduzido para cada 2 P | Pode ser Mobitz I ou II | Alta |
| **BAV 3º grau (BAVT)** | Dissociação AV completa, escape lento | Estável ou instável | **Máxima** |

## Causas Comuns

| Causa | Clínica |
|---|---|
| IAM inferior (CD) | BAV geralmente nodal, escape 40–50 bpm, transitório |
| IAM anterior extenso | BAV infranodal, escape < 40 bpm, pior prognóstico |
| Bloqueadores AV (BB, BCC, digoxina, amiodarona) | Anamnese medicamentosa |
| Hipercalemia | PR longo + QRS largo + onda T apiculada |
| Miocardite / Doença de Lyme | Jovens, bloqueio paroxístico |
| Hipotireoidismo grave | Bradicardia sinusal profunda |
| Vagotonia (vasovagal) | FC melhora com atropina |`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico — ECG de 12 Derivações",
      content: `## ECG — Análise Sistemática na Bradicardia

1. **FC:** contar RR — FC = 1500/RR em mm (papel 25 mm/s)
2. **Onda P:** presente? Regular? Relação com QRS?
3. **PR:** fixo, variável, progressivo?
4. **QRS:** estreito (nodal/suprahissiano) ou largo (infranodal/escape ventricular)
5. **Dissociação AV?** P e QRS independentes = BAV 3º grau

## Características por Nível do Bloqueio

| Nível | QRS escape | FC escape | Atropina | Estabilidade |
|---|---|---|---|---|
| Nodal (AV) | Estreito < 120 ms | 40–60 bpm | Responde | Mais estável |
| Infranodal (His-Purkinje) | Largo > 120 ms | 20–40 bpm | Não responde | Instável |

## Sinais de Instabilidade Hemodinâmica
- PAS < 90 mmHg
- Alteração de consciência (Killip III–IV)
- Dor precordial ativa
- Edema agudo de pulmão
- SpO₂ < 94%`,
    },
    {
      id: "conduct",
      title: "Conduta — Algoritmo AHA/ESC",
      content: `## Passo 1 — Estabilizar (se instável)

1. Monitorização contínua: ECG, PA, SpO₂
2. Acesso venoso calibroso
3. O₂ se SpO₂ < 94%
4. Decúbito horizontal ou Trendelenburg se hipotensão
5. ECG 12 derivações imediato

## Passo 2 — Tratamento Farmacológico (nodal/nível AV)

### Atropina 1ª linha
- Dose: **1 mg IV bolus** → repetir a cada 3–5 min
- Máximo: **3 mg total** (vagolítico completo)
- **Funciona:** bradicardia sinusal, BAV nodal (Wenckebach, BAVT por IAM inferior)
- **NÃO funciona:** bloqueio infranodal, escape ventricular largo

### Se Atropina Ineficaz — 2ª linha (enquanto aguarda MP)

| Fármaco | Dose | Mecanismo |
|---|---|---|
| **Dopamina** | 2–20 mcg/kg/min BIC | β1 cronotrópico |
| **Adrenalina** | 2–10 mcg/min BIC | β1 + α — choque |
| **Isoproterenol** | 2–10 mcg/min BIC | β1 + β2 — quando disponível |
| **Aminofilina** | 250 mg IV 10 min | Antagonista adenosina (IAM inferior) |

## Passo 3 — Marca-passo de Emergência

### Transcutâneo (imediato se instável)
- Eletrodos: anterior (V3) + posterior (escápula esquerda)
- Frequência: 70–80 bpm (ajustar conforme resposta)
- Corrente: aumentar progressivamente de 40 mA até captura (geralmente 60–120 mA)
- Confirmar captura: espícula + QRS largo + pulso palpável
- **Analgossedação obrigatória:** midazolam 1–3 mg IV + fentanil 25–50 mcg IV

### Transvenoso (cardiologista/UTI)
- Indicado quando transcutâneo ineficaz ou como ponte para definitivo
- Acesso: veia subclávia ou femoral → posicionar eletrodo em VD

## Passo 4 — Tratar Causa
- IAM: coronariografia urgente
- Intoxicação por digoxina: anticorpos Fab
- Hipercalemia: ver protocolo
- Bloqueadores: gluconato de cálcio 10% 10 mL IV (BCC) ou glucagon 3 mg IV (BB)`,
    },
    {
      id: "treatment",
      title: "Tratamento por Causa Específica",
      content: `## Bradicardia por IAM Inferior
- BAV nodal — responde à atropina
- Geralmente transitório (48–72h)
- Marca-passo temporário apenas se: FC < 40 + sintomas refratários
- Reperfusão (angioplastia) corrige a maioria

## Bradicardia por IAM Anterior
- BAV infranodal — NÃO responde à atropina
- QRS largo, FC < 30–40 bpm
- **Marca-passo transcutâneo imediato** + transvenoso urgente
- Alta mortalidade — coronariografia emergência

## Bradicardia por Intoxicação Digitálica
- Anticorpos Fab se: BAV 3º grau + sintomas ou níveis > 10 ng/mL
- Atropina temporária enquanto aguarda Fab
- Não cardioverter (fibrilação ventricular)

## Bradicardia por Betabloqueador
- Glucagon 3–5 mg IV bolus → 2–5 mg/h BIC (cronotrópico positivo)
- Atropina + dopamina como suporte
- MP transcutâneo se refratário

## Bradicardia por Bloqueador de Canal de Cálcio
- Gluconato de cálcio 10% 10–20 mL IV em 5 min → repetir 3x
- Ou cloreto de cálcio 10% 5–10 mL IV (mais potente)
- Glucagon, dopamina, MP transcutâneo se necessário`,
    },
    {
      id: "doses",
      title: "Doses e Referência Rápida",
      content: `## Resumo de Doses — Bradicardia de Emergência

| Fármaco | Dose | Via | Observação |
|---|---|---|---|
| **Atropina** | 1 mg → repetir cada 3–5 min (máx 3 mg) | IV bolus | 1ª linha — nodal |
| **Dopamina** | 2–20 mcg/kg/min | BIC | Cronotrópico + vasopressor |
| **Adrenalina** | 2–10 mcg/min | BIC | Choque + bradicardia |
| **Glucagon** | 3–5 mg bolus → 2–5 mg/h | IV | Intox. BB |
| **CaCl 10%** | 5–10 mL IV em 5 min | IV lento | Intox. BCC |
| **Aminofilina** | 250 mg IV em 10 min | IV | IAM inferior refratário |
| **Isoproterenol** | 2–10 mcg/min | BIC | Quando disponível |

## Marca-passo Transcutâneo — Passo a Passo
1. Analgossedação: midazolam 2 mg IV + fentanil 50 mcg IV
2. Posicionar eletrodos: anterior (V3/V4) + posterior (escápula E)
3. Ligar modo demand, FC 70–80 bpm
4. Aumentar mA de 40 até captura (espícula → QRS largo)
5. Confirmar pulso carotídeo após captura
6. Adicionar 10 mA acima do limiar de captura (margem de segurança)
7. Avisar cardiologia para MP transvenoso`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Kusumoto FM et al. **2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay.** Circulation. 2019.

Glikson M et al. **2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy.** Eur Heart J. 2021.

Panchal AR et al. **2018 American Heart Association Focused Update on Advanced Cardiovascular Life Support Use of Antiarrhythmic Drugs During and Immediately After Cardiac Arrest.** Circulation. 2018.

SBC — Sociedade Brasileira de Cardiologia. **Diretriz Brasileira de Marca-Passo Cardíaco.** Arq Bras Cardiol. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. COMA — AEIOU-TIPS
// ─────────────────────────────────────────────────────────────────────────────
export const protocolComaAbordagem: EmergencyProtocol = {
  id: "coma-aeiou-tips-abordagem",
  title: "Coma — Abordagem AEIOU-TIPS na Emergência",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["coma", "rebaixamento de consciência", "glasgow", "aeiou-tips", "inconsciente", "diagnóstico diferencial"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Coma — Abordagem Sistemática

O coma (Glasgow ≤ 8) é uma emergência médica com múltiplas etiologias. A abordagem estruturada pelo mnemônico **AEIOU-TIPS** evita que causas tratáveis sejam perdidas.

**Princípio fundamental:** tratar causas reversíveis imediatamente, antes ou durante a investigação.

**Tríade empírica imediata** (administrar em todos os pacientes com coma sem causa óbvia):
1. **Glicose 50%** 40 mL IV (hipoglicemia)
2. **Tiamina 100 mg IV** antes da glicose (Wernicke)
3. **Naloxona 0,4–2 mg IV** (intoxicação por opioides)

> ⚠️ Disclaimer: apoio à decisão clínica. Não substitui avaliação neurológica especializada.`,
    },
    {
      id: "def",
      title: "Definição e Níveis de Consciência",
      content: `## Definição

**Coma:** ausência de consciência e vigília — paciente não desperta a estímulos verbais ou dolorosos.

## Escala de Glasgow

| Parâmetro | Resposta | Pontos |
|---|---|---|
| **Abertura Ocular** | Espontânea | 4 |
| | À voz | 3 |
| | À dor | 2 |
| | Ausente | 1 |
| **Verbal** | Orientado | 5 |
| | Confuso | 4 |
| | Palavras inapropriadas | 3 |
| | Sons inespecíficos | 2 |
| | Ausente | 1 |
| **Motor** | Obedece comandos | 6 |
| | Localiza dor | 5 |
| | Retirada à dor | 4 |
| | Flexão anormal (decorticação) | 3 |
| | Extensão (descerebração) | 2 |
| | Ausente | 1 |

**Coma:** Glasgow ≤ 8
**Sonolência:** Glasgow 13–14
**Estupor:** Glasgow 9–12`,
    },
    {
      id: "diferencial",
      title: "Diagnóstico Diferencial — AEIOU-TIPS",
      content: `## Mnemônico AEIOU-TIPS

| Letra | Causa | Exemplos / Pistas |
|---|---|---|
| **A** | **Alcohol / Álcool** | Hálito etílico, trauma, hipotermia |
| **E** | **Epilepsy / Epilepsia** | Mordida de língua, incontinência, pós-ictal |
| **I** | **Insulin / Insulina (glicose)** | Hipoglicemia: diaforese, taquicardia |
| **O** | **Opium / Opioides** | Miose, FR baixa, histórico de uso |
| **U** | **Uremia / Uremia** | Asterixis, odor urêmico, edema |
| **T** | **Trauma** | Hematoma, anisocoria, sinal de Battle |
| **I** | **Infection / Infecção** | Febre, rigidez de nuca, petéquias |
| **P** | **Psychiatric / Psiquiátrico** | Diagnóstico de exclusão |
| **S** | **Stroke / Sincope / Estrutural** | Déficit focal, anisocoria, desvio do olhar |

## Pistas ao Exame Físico

| Achado | Sugestão |
|---|---|
| Pupilas puntiformes bilaterais | Opioides, ponte (AVC basilar) |
| Midríase bilateral fixas | Herniação, morte encefálica, anticolinérgico |
| Anisocoria | Lesão estrutural — herniação uncal |
| Desvio conjugado do olhar | AVC (ipsilateral à lesão cortical) |
| Nistagmo | Epilepsia, Wernicke, lesão posterior |
| Rigidez de nuca | Meningite, HSA |
| Fetor hepático | Encefalopatia hepática |
| Hálito de acetona | CAD |
| Petéquias | Meningococcemia, CIVD |
| Sinal de Battle (equimose mastóide) | Fratura base do crânio |`,
    },
    {
      id: "conduct",
      title: "Conduta Imediata",
      content: `## Algoritmo — Primeiros 15 Minutos

### A — Via Aérea
- IOT se Glasgow ≤ 8 ou sem reflexo de proteção
- SRI: etomidato 0,3 mg/kg + succinilcolina 1,5 mg/kg
- Imobilizar coluna cervical se trauma

### B — Respiração
- O₂ 15 L/min máscara
- SpO₂ ≥ 94%; PaCO₂ 35–45 mmHg (evitar hiperventilação)

### C — Circulação
- Acesso venoso × 2, colher amostras
- SF 0,9% se hipotensão
- ECG (arritmia como causa?)

### D — Tríade Empírica (TODOS os comas sem causa óbvia)
1. **Glicemia capilar** imediata
   - Se < 60 mg/dL: **Glicose 50%** 40 mL IV
2. **Tiamina 100 mg IV** (antes da glicose se etilismo/desnutrição)
3. **Naloxona 0,4–2 mg IV** (miose + bradipneia → opioides)

### E — Exposição + Exame Neurológico Focado
- Pupilas (tamanho, simetria, reatividade)
- Glasgow motor
- Postura (decorticação vs descerebração)
- Reflexos de tronco (córneo, oculocefálico, ciliospinal)
- Temperatura

### F — Exames de imagem e laboratório
- TC crânio urgente (lesão estrutural, hemorragia)
- Glicemia, eletrólitos, função renal/hepática
- Hemograma, coagulograma
- Gasometria, lactato
- Toxicológico urinário e sérico
- Hormônios tireoidianos se suspeita mixedema`,
    },
    {
      id: "treatment",
      title: "Tratamento por Causa",
      content: `## Tratamento Específico por Etiologia

| Causa | Tratamento |
|---|---|
| **Hipoglicemia** | Glicose 50% 40 mL IV → manutenção SG 10% |
| **Wernicke** | Tiamina 500 mg IV 8/8h por 3 dias |
| **Opioides** | Naloxona 0,4–2 mg IV → infusão se opioides longos |
| **BZD** | Flumazenil 0,2–1 mg IV (usar com cautela — convulsão) |
| **Etanol** | Suporte, tiamina, glicose, temperatura |
| **MAL epiléptico** | Ver protocolo MAL epiléptico |
| **AVCi** | Ver protocolo AVCi — trombólise se elegível |
| **HIP / HSA** | Neurociurgia urgente |
| **Meningite** | Ceftriaxona 2 g IV + dexametasona 0,15 mg/kg IV |
| **Encefalite herpética** | Aciclovir 10 mg/kg IV 8/8h |
| **Encef. hepática** | Lactulose, rifaximina, tratar causa |
| **CAD** | Ver protocolo CAD |
| **Hipotireoidismo** | Levotiroxina 200–500 mcg IV + hidrocortisona |
| **Herniação** | Manitol + neurocirurgia emergência |

## Sinais de Herniação — Tratamento Imediato
- Anisocoria progressiva + Babinski + postura descerebração
- **Manitol 20%** 1 g/kg IV em 20 min
- **OU SF 3%** 150–250 mL IV em 20 min
- Cabeceira 30°, hiperventilação moderada temporária (PaCO₂ 30–35)
- Neurocirurgia emergência`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos

**1. Nunca administrar glicose sem tiamina antes** em pacientes com risco de Wernicke — precipita encefalopatia aguda.

**2. Coma com pupilas normais** → causas metabólicas/tóxicas (mais comum); coma com pupilas alteradas → lesão estrutural.

**3. Rigidez de nuca** + coma → meningite/HSA — LCR após TC (se não houver contraindicação).

**4. Convulsão no coma:** pode ser convulsão não convulsiva (MENC) — EEG urgente se coma inexplicado.

**5. Trauma oculto:** exame cuidadoso em pacientes encontrados inconscientes — TCE, fratura de base de crânio.

**6. Flumazenil** com cautela: pode precipitar convulsões em dependentes de BZD ou uso crônico.`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Posner JB, Saper CB, Schiff ND, Plum F. **Plum and Posner's Diagnosis and Treatment of Stupor and Coma.** 5th ed. Oxford University Press; 2019.

Teasdale G, Jennett B. **Assessment of coma and impaired consciousness. A practical scale.** Lancet. 1974.

Wijdicks EF. **The comatose patient.** Oxford University Press; 2014.

AAN — American Academy of Neurology. **Practice parameters: Assessment and management of patients in the persistent vegetative state.** Neurology. 1995.

ABN — Academia Brasileira de Neurologia. **Consenso brasileiro sobre morte encefálica e cuidados intensivos neurológicos.** 2022.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. HEMOPTISE MACIÇA
// ─────────────────────────────────────────────────────────────────────────────
export const protocolHemoptiseMacica: EmergencyProtocol = {
  id: "hemoptise-macica-emergencia",
  title: "Hemoptise Maciça — Proteção de Via Aérea e Embolização",
  categoryId: "respiratory",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hemoptise", "hemoptise maciça", "sangramento pulmonar", "artéria brônquica", "embolização", "broncofibrolaringoscopia"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Hemoptise Maciça

Hemoptise maciça = expectoração de sangue em volume > 200–600 mL/24h (definições variam) OU qualquer volume com comprometimento hemodinâmico ou risco iminente de asfixia.

**A morte por hemoptise maciça é por ASFIXIA, não por perda sanguínea.**

**Principais causas no Brasil:**
| Causa | Frequência |
|---|---|
| Tuberculose (ativa ou sequela) | 50–60% |
| Bronquiectasias | 20% |
| Câncer de pulmão | 10% |
| Abscesso pulmonar / necrose | 5% |
| Aspergilose / fungos | 3% |
| Outras (malformações, vasculites) | 2% |

> ⚠️ Disclaimer: apoio à decisão clínica. Avaliar com pneumologista/cirurgia torácica.`,
    },
    {
      id: "def",
      title: "Classificação",
      content: `## Classificação por Volume e Risco

| Grau | Volume | Risco | Conduta |
|---|---|---|---|
| **Leve** | < 30 mL/24h | Baixo | Ambulatorial se causa benigna |
| **Moderada** | 30–200 mL/24h | Moderado | Internação + investigação |
| **Maciça** | > 200 mL/24h ou instabilidade | **Alto — asfixia** | UTI + intervenção urgente |

## Hemoptise vs Hematemese vs Epistaxe

| Característica | Hemoptise | Hematemese |
|---|---|---|
| Cor | Vermelho vivo, aerado | Escuro, "borra de café" |
| pH | Alcalino | Ácido |
| Misturado com | Muco, secreção | Alimentos, bile |
| Precedido por | Tosse | Náusea |`,
    },
    {
      id: "screening",
      title: "Identificação e Red Flags",
      content: `## Sinais de Urgência Máxima

- SpO₂ < 90% apesar de O₂
- FR > 30 ipm
- Cianose
- Alteração de consciência
- Hipotensão (PAS < 90 mmHg)
- Sangramento > 100 mL em 1h
- Incapacidade de tossir / via aérea ameaçada

## Avaliação Inicial

**História:**
- Volume estimado (copo, bacia?)
- Início: agudo ou progressivo
- TB: tosse crônica, suores noturnos, emagrecimento, contato
- Neoplasia: tabagismo, perda de peso, adenopatia
- Bronquiectasias: infecções pulmonares repetidas
- Anticoagulantes (risco aumentado)

**Exame físico:**
- Localizar lado do sangramento (ausculta — diminuição unilateral)
- Estabilidade hemodinâmica
- SatO₂

**Exames urgentes:**
- Hemograma, coagulograma, tipagem sanguínea
- Rx tórax (PA + perfil)
- TC tórax com contraste (definir causa e localização — artéria brônquica)
- Broncoscopia: urgente se via aérea ameaçada`,
    },
    {
      id: "conduct",
      title: "Conduta Imediata",
      content: `## Protocolo Hemoptise Maciça — Emergência

### Passo 1 — Proteger a via aérea (prioridade absoluta)

1. **Decúbito lateral com lado afetado para baixo** (drenar sangue do pulmão sadio)
2. O₂ 15 L/min máscara não-reinalante
3. **IOT se:** SpO₂ < 90% refratária, FR > 35, consciência rebaixada, volume aumentando
   - Tubo de maior calibre possível (≥ 8,5 mm — permite broncoscopia)
   - Intubação seletiva no brônquio sadio se lateralidade conhecida
4. Aspiração frequente das vias aéreas

### Passo 2 — Estabilização hemodinâmica

- 2 acessos venosos calibrosos
- Tipagem sanguínea + reserva de CH
- SF 0,9% para manter PAS > 90 mmHg
- Corrigir coagulopatia: PFC, plaquetas, vitamina K se anticoagulado

### Passo 3 — Tratamento farmacológico

| Fármaco | Dose | Mecanismo |
|---|---|---|
| **Ácido tranexâmico (TXA)** | 1 g IV em 10 min → 1 g em 8h | Antifibrinolítico — reduz sangramento |
| **Terlipressina** | 2 mg IV → 1 mg 4/4h | Vasoconstrição esplâncnica/brônquica |
| Morfina | 2–4 mg IV | Reduz ansiedade e esforço respiratório |
| Antibiótico | Conforme causa | TB ativa, pneumonia necrosante |

### Passo 4 — Controle definitivo do sangramento

**Embolização de artéria brônquica (EAB):**
- Tratamento de escolha para hemoptise maciça
- Taxa de sucesso inicial 70–90%
- Arteriografia + embolização em radiologia intervencionista
- Indicação: hemoptise maciça com localização definida na TC

**Broncoscopia rígida:**
- Útil para tamponamento com balão endobrônquico
- Remoção de coágulo obstrutivo
- Aplicação de vasoconstritores locais (adrenalina 1:20.000)

**Cirurgia:**
- Reservada para falha da EAB ou lesão ressecável
- Lobectomia/pneumonectomia em ressangramento`,
    },
    {
      id: "treatment",
      title: "Tratamento Definitivo e Causas Específicas",
      content: `## Tuberculose — Hemoptise

- Iniciar RIPE se TB ativa confirmada ou altamente suspeita
- Hemoptise em sequela de TB: artéria de Rasmussen (aneurisma) → EAB urgente
- **Aspergiloma em cavidade de TB:** embolização + antifúngico (voriconazol)

## Bronquiectasias

- EAB é o tratamento de escolha para episódios maciços
- Entre episódios: fisioterapia respiratória, antibiótico nos exacerbações
- Cirurgia em doença localizada ressecável

## Neoplasia

- Hemoptise por tumor: broncoscopia com laser Nd:YAG, eletrocauterização, ou crioterapia
- Radioterapia paliativa se tumor irressecável

## Cuidados Gerais
- Posição lateral com pulmão afetado para baixo — sempre
- Sedação leve (morfina, midazolam) — reduz tosse e ansiedade
- Não administrar mucolíticos — potencializam sangramento
- Monitorar Hb seriada — transfundir se Hb < 7 ou instabilidade`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos

**1. Decúbito lateral com lado afetado PARA BAIXO** — protege o pulmão sadio de inundação.

**2. IOT com tubo de maior calibre possível** — tubo estreito impede broncoscopia posterior.

**3. TXA precocemente** — evidências crescentes de benefício na hemoptise (semelhante ao trauma).

**4. Não esperar TC para agir** — se SpO₂ cai, IOT e estabilização primeiro, imagem depois.

**5. EAB é superior à cirurgia** como primeira intervenção — menor morbimortalidade.

**6. Morfina** — não causa depressão respiratória grave nas doses usadas; o benefício de reduzir tosse supera o risco.`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Lordan JL et al. **The pulmonary physician in critical care. Illustrative case 7: assessment and management of massive haemoptysis.** Thorax. 2003.

Sakr L, Dutau H. **Massive hemoptysis: an update on the role of bronchoscopy in diagnosis and management.** Respiration. 2010.

Panda A et al. **Bronchial artery embolization in hemoptysis: a systematic review.** Cardiovasc Intervent Radiol. 2017.

SBPT — Sociedade Brasileira de Pneumologia e Tisiologia. **Diretrizes para hemoptise.** J Bras Pneumol. 2021.

Davidson K et al. **ERS/ATS clinical practice guidelines on the management of pulmonary embolism.** ERJ. 2021.

Battal B et al. **Tranexamic acid in management of haemoptysis: systematic review.** Respir Med. 2023.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. ISQUEMIA MESENTÉRICA AGUDA
// ─────────────────────────────────────────────────────────────────────────────
export const protocolIsquemiaMesenterica: EmergencyProtocol = {
  id: "isquemia-mesenterica-aguda-emergencia",
  title: "Isquemia Mesentérica Aguda — Diagnóstico e Conduta",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["isquemia mesentérica", "oclusão mesentérica", "infarto intestinal", "angina abdominal", "angio-tc abdome"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Isquemia Mesentérica Aguda

Emergência cirúrgica com mortalidade de 50–80% se não tratada precocemente. O atraso diagnóstico é o principal fator de mau prognóstico.

**Tipos:**
| Tipo | Frequência | Causa |
|---|---|---|
| Embolia arterial (AME) | 50% | FA, IAM, valvulopatia |
| Trombose arterial (TMA) | 25% | Aterosclerose, vasculite |
| Isquemia não-oclusiva (INAO) | 20% | Baixo fluxo, vasospasmo |
| Trombose venosa mesentérica (TVM) | 5% | Trombofilia, cirrose, sepse |

**"Dor desproporcional ao exame"** — dor abdominal intensa com abdome sem sinais de irritação peritoneal na fase inicial é clássico e deve aumentar a suspeita.

> ⚠️ Disclaimer: apoio à decisão. Avaliação cirúrgica urgente obrigatória.`,
    },
    {
      id: "def",
      title: "Definição e Fases",
      content: `## Fases da Isquemia Mesentérica

| Fase | Tempo | Achados | Reversibilidade |
|---|---|---|---|
| **Isquemia** | 0–6h | Dor intensa, abdome mole | Reversível com reperfusão precoce |
| **Infarto** | 6–12h | Dor + sinais peritoneais | Ressecção necessária |
| **Peritonite** | > 12h | Choque + sepse + peritonite | Alta mortalidade |

## Anatomia — Artéria Mesentérica Superior (AMS)

- Irriga: jejuno, íleo, cólon até 2/3 do transverso
- Oclusão próxima: infarto extenso do intestino delgado
- Embolo geralmente impacta 3–10 cm do óstio
- Artéria Mesentérica Inferior (AMI): cólon descendente e sigmoide (menor impacto)`,
    },
    {
      id: "screening",
      title: "Identificação — Suspeita Clínica",
      content: `## Perfil do Paciente Típico

- Idoso com FA ou IAM recente (embolia)
- Aterosclerose difusa (trombose)
- Pós-operatório de cirurgia cardíaca (INAO)
- Jovem com trombofilia ou uso de anticoncepcional (trombose venosa)

## Tríade Clínica Clássica (AME)

1. **Dor abdominal súbita, intensa, periumbilical** — desproporcional ao exame físico
2. **Náuseas, vômitos, diarreia** (fase inicial)
3. **Fator de risco embolígeno** (FA, IAM, valvulopatia)

## Evolução

- **Fase inicial (0–6h):** dor intensa + abdome mole — muito suspeito, frequentemente subdiagnosticado
- **Fase intermediária:** redução paradoxal da dor (anestesia da mucosa necrótica)
- **Fase tardia:** retorno da dor + peritonite + sepse → peritonite franca

## Exame Físico

- Inicial: pode ser completamente normal (armadilha!)
- Tardio: dor à palpação, defesa, Blumberg positivo
- Choque: hipotensão, taquicardia, oligúria
- Distensão abdominal (íleo paralítico)`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico — Angio-TC Urgente",
      content: `## Angio-TC de Abdome e Pelve — Exame de Escolha

**Sensibilidade > 90% para isquemia mesentérica.**

**Achados:**
- Ausência de contraste na AMS ou ramos (embolia/trombose)
- Espessamento ou pneumatose intestinal (necrose)
- Gás no sistema portal (sinal tardio, mau prognóstico)
- Líquido livre peritoneal (peritonite/necrose)

**Contraindicação ao contraste:** creatinina elevada NÃO contraindica — o risco da nefropatia por contraste é menor que o risco de não diagnosticar isquemia mesentérica.

## Lactato Sérico

- Normal: < 2 mmol/L
- Na isquemia mesentérica: > 2 mmol/L (sensível mas não específico)
- > 4 mmol/L + suspeita clínica = urgência máxima

## Outros Exames

| Exame | Achado | Sensibilidade |
|---|---|---|
| Leucócitos | > 15.000 em 75% dos casos | Baixa especificidade |
| Lactato | Elevado | 86% sensibilidade |
| D-dímero | Elevado (> 0,9 mcg/mL) | Alta sensibilidade, baixa especificidade |
| Fosfato sérico | Elevado em necrose | Tardio |
| Amilase/lipase | Normal (diferencia de pancreatite) | — |
| Angio-TC | Oclusão vascular | > 90% |

## Laparotomia Exploradora Imediata

Indicação: peritonite franca + suspeita clínica forte + sem tempo para TC (instável).`,
    },
    {
      id: "conduct",
      title: "Conduta — Protocolo Urgente",
      content: `## Passo 1 — Estabilização (< 30 min)

1. 2 acessos venosos calibrosos
2. SF 0,9% para correção de hipovolemia
3. SNG (descompressão)
4. Sonda vesical (débito urinário)
5. Antibiótico imediato: piperacilina-tazobactam 4,5 g IV 8/8h (translocação bacteriana)
6. Anticoagulação: heparina não fracionada 5000 UI IV bolus → 1000 UI/h BIC (ALVO TTPa 60–80s)
7. Suspender vasocontritores se possível (INAO)

## Passo 2 — Diagnóstico (< 60 min)

- Angio-TC abdome/pelve com contraste urgente
- Lactato, hemograma, coagulograma, função renal
- Hemocultura se sinais sépticos
- Cirurgia/radiologia intervencionista acionados ANTES do resultado da TC

## Passo 3 — Tratamento Definitivo

### Embolia Arterial (AME)
**Endovascular (1ª escolha em estáveis):**
- Arteriografia + tromboembolectomia percutânea
- Trombolítico intra-arterial (rtPA)

**Cirurgia aberta (se peritonite ou falha endovascular):**
- Embolectomia com cateter de Fogarty
- Ressecção intestinal do segmento necrótico
- 2ª olhada cirúrgica em 24–48h ("second-look")

### Trombose Arterial (TMA)
- Revascularização cirúrgica (bypass aorto-mesentérico)
- Endovascular em casos selecionados

### Isquemia Não-Oclusiva (INAO)
- Tratar causa: corrigir choque, suspender vasoconstritores
- Vasodilatador intra-arterial: papaverina 30–60 mg/h intra-AMS
- Anticoagulação

### Trombose Venosa Mesentérica (TVM)
- Anticoagulação plena (HNF → warfarina ou DOAC)
- Cirurgia se peritonite`,
    },
    {
      id: "treatment",
      title: "Tratamento — Detalhes",
      content: `## Antibioticoterapia Empírica

**Indicação:** todos os casos (translocação bacteriana precoce)

| Gravidade | Esquema |
|---|---|
| Moderada | Ceftriaxona 2 g IV 24h + Metronidazol 500 mg IV 8/8h |
| Grave / UTI | Piperacilina-tazobactam 4,5 g IV 8/8h |
| Sepse grave | Meropenem 1 g IV 8/8h + Vancomicina (se MRSA suspeito) |

## Anticoagulação

**HNF:** bolus 5000 UI IV → infusão 1000 UI/h → ajustar TTPa 60–80s
**Após cirurgia:** manter anticoagulação por 3–6 meses (TVM) ou indefinidamente (FA)

## Síndrome de Reperfusão

- Após revascularização: liberação de radicais livres → lesão endotelial sistêmica
- Monitorar: hipotensão, SDRA, LRA, coagulopatia
- Suporte intensivo: VM protetora, vasopressores, hemoderivados`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos

**1. "Dor desproporcional ao exame"** — suspeita clínica é suficiente para acionar cirurgia antes da TC em instáveis.

**2. Angio-TC não pode esperar** — cada hora aumenta extensão do infarto intestinal.

**3. Anticoagulação empírica imediata** — iniciar HNF assim que suspeita confirmada, não aguardar cirurgia.

**4. Antibiótico precoce** — translocação bacteriana ocorre nas primeiras horas.

**5. Contraste em nefropata** — o risco da nefropatia por contraste é muito menor que o risco de não diagnosticar.

**6. "Second-look"** em 24–48h — obrigatório após revascularização para avaliar viabilidade intestinal.

**7. NÃO confundir com síndrome dolorosa abdominal funcional** — idoso com FA e dor abdominal intensa = isquemia até prova em contrário.`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Bala M et al. **Acute mesenteric ischemia: guidelines of the World Society of Emergency Surgery (WSES).** World J Emerg Surg. 2017.

Acosta S. **Mesenteric ischemia.** Curr Opin Crit Care. 2015.

Tilsed JV et al. **ESTES guidelines: acute mesenteric ischaemia.** Eur J Trauma Emerg Surg. 2016.

AGA Technical Review on Intestinal Ischemia. Gastroenterology. 2000.

CBCVasc — Colégio Brasileiro de Cirurgiões Vasculares. **Diretriz de isquemia mesentérica aguda.** 2022.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. SEPSE NEONATAL — Precoce e Tardia
// ─────────────────────────────────────────────────────────────────────────────
export const protocolSepseNeonatal: EmergencyProtocol = {
  id: "sepse-neonatal-precoce-tardia-2026",
  title: "Sepse Neonatal — Precoce e Tardia",
  categoryId: "neonatal",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["sepse neonatal", "neonato", "recém-nascido", "streptococcus agalactiae", "estreptococo grupo b", "aap", "sbn"],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Sepse Neonatal

Principal causa de mortalidade neonatal em países em desenvolvimento. Mortalidade de 10–50% dependendo do agente, peso e tempo de tratamento.

**Classificação temporal:**
| Tipo | Início | Agentes principais |
|---|---|---|
| **Precoce (EOS)** | < 72h de vida | *Streptococcus agalactiae* (GBS), *E. coli*, *Listeria* |
| **Tardia hospitalar (LONS-H)** | 72h–28d (internado) | Estafilococos coagulase-neg., *Staphylococcus aureus*, Gram-negativos |
| **Tardia comunitária (LONS-C)** | 72h–28d (domiciliar) | GBS, *E. coli*, *Salmonella* |

**Fatores de risco para EOS:**
- SGB materno positivo sem profilaxia adequada
- Febre materna intraparto > 38°C
- Bolsa rota > 18h
- Trabalho de parto prematuro < 37 sem
- Bacteriúria por GBS na gestação

> ⚠️ Disclaimer: apoio à decisão. Avaliação neonatológica obrigatória.`,
    },
    {
      id: "def",
      title: "Definição e Diagnóstico",
      content: `## Definição

**Sepse neonatal:** síndrome clínica de disfunção orgânica com suspeita ou confirmação de infecção nos primeiros 28 dias de vida.

**Não existe score validado único** — diagnóstico é clínico-laboratorial.

## Critérios de Sepse Neonatal (AAP 2023)

**Critérios clínicos (≥ 1):**
- Instabilidade térmica (febre > 38°C ou hipotermia < 36°C)
- Dificuldade respiratória (taquipneia, gemência, retrações, cianose)
- Apneia
- Bradicardia ou taquicardia
- Hipotonia, convulsão, letargia
- Intolerância alimentar, vômitos, distensão abdominal
- Icterícia neonatal de início precoce ou intenso
- Choque: palidez, extremidades frias, enchimento capilar > 3s, hipotensão

**Critérios laboratoriais (≥ 1 anormal):**
- Leucocitose > 25.000 ou leucopenia < 5.000
- Neutrófilos imaturos/totais (I/T) > 0,2
- Plaquetas < 100.000
- PCR > 10 mg/L
- Procalcitonina > 2 ng/mL
- Lactato > 2 mmol/L`,
    },
    {
      id: "screening",
      title: "Identificação — Sinais Clínicos",
      content: `## Sinais de Alerta no Neonato

**"O neonato que não está bem"** — qualquer mudança de comportamento deve ser investigada:

| Sistema | Sinais |
|---|---|
| **Respiratório** | Taquipneia (> 60 ipm), gemência, batimentos de asa do nariz, retrações, apneia |
| **Cardiovascular** | Taquicardia (> 180 bpm) ou bradicardia (< 100 bpm), má perfusão, cianose central |
| **Neurológico** | Letargia, hipotonia, irritabilidade, convulsão, fontanela abaulada |
| **Digestivo** | Distensão abdominal, vômitos biliosos, intolerância alimentar, icterícia |
| **Hematológico** | Equimoses, petéquias, sangramento |
| **Geral** | Hipertermia ou hipotermia, edema generalizado |

## EOS Calculator (AAP/NICHD)

Para RN ≥ 34 semanas, o **neonatal sepsis calculator** estratifica risco com base em:
- SGB materno
- GIG no parto
- Febre intraparto
- Bolsa rota
- ATB intraparto

Disponível em: https://neonatalsepsiscalculator.org

## LONS — Quando suspeitar

- RN internado com cateter ou dispositivo: novo pico febril, piora respiratória
- RN com alteração de coloração, hipotonia, letargia súbita
- Intolerância alimentar progressiva`,
    },
    {
      id: "conduct",
      title: "Conduta — Avaliação e Antibióticos",
      content: `## Coleta de Material — Antes dos Antibióticos

| Exame | Indicação |
|---|---|
| **Hemocultura** (2 amostras) | Todos |
| **LCR** (punção lombar) | Suspeita de meningite, LONS, qualquer instável |
| Urocultura (sonda) | LONS, > 72h de vida |
| PCR, procalcitonina, hemograma | Todos |
| Glicemia, eletrólitos | Todos |
| Gasometria, lactato | Instáveis |

**Não atrasar antibiótico por coleta incompleta em instáveis.**

## Antibioticoterapia Empírica

### EOS (< 72h de vida)

| Peso / Gravidade | Esquema |
|---|---|
| RN a termo, estável | Ampicilina + Gentamicina |
| RN prematuro ou grave | Ampicilina + Gentamicina |
| Suspeita meningite | Ampicilina + Cefotaxima (gentamicina não penetra SNC) |

**Doses EOS:**
- Ampicilina: 50 mg/kg IV 12/12h (> 7 dias: 8/8h)
- Gentamicina: 4–5 mg/kg/dose IV (intervalo conforme IG e peso — ver tabela)
- Cefotaxima: 50 mg/kg IV 12/12h (meningite: 50 mg/kg 8/8h)

### LONS hospitalar (> 72h, internado)

| Situação | Esquema |
|---|---|
| Sem cateter, sem foco | Oxacilina + Gentamicina |
| Com cateter venoso central | **Vancomicina** + Gentamicina |
| Suspeita de Gram-negativo resistente | Vancomicina + Meropeném |

**Doses LONS:**
- Vancomicina: 15 mg/kg IV 8/8h (monitorar van nível/AUC)
- Oxacilina: 50 mg/kg IV 6/6h
- Meropeném: 20–40 mg/kg IV 8/8h`,
    },
    {
      id: "treatment",
      title: "Tratamento — Suporte e Duração",
      content: `## Suporte Hemodinâmico

### Choque Séptico Neonatal

1. **Bolus SF 0,9% 10 mL/kg IV em 10 min** (máximo 3 bolus — risco de HIV em prematuros)
2. **Avaliar após cada bolus:** FC, TEC, diurese, fontanela
3. Se sem resposta: dopamina 5–20 mcg/kg/min BIC
4. Se refratário: adrenalina 0,05–0,3 mcg/kg/min BIC
5. Hidrocortisona 1 mg/kg IV (choque refratário a vasopressor)

### Suporte Respiratório
- O₂ suplementar se SpO₂ < 94%
- CPAP nasal se desconforto sem apneia
- IOT + VM se apneia recorrente ou falha do CPAP

### Hipoglicemia (frequente na sepse neonatal)
- Glicemia alvo: 50–150 mg/dL
- Se < 50: glicose 10% 2 mL/kg IV em 5 min → manutenção 6–8 mg/kg/min

## Duração do Antibiótico

| Situação | Duração |
|---|---|
| Hemocultura negativa, assintomático 48h | Suspender |
| Hemocultura positiva, sem meningite | 10–14 dias |
| Meningite por GBS | 14–21 dias |
| Meningite por Gram-negativo | 21 dias |
| Osteomielite / artrite | 28 dias |

## Punção Lombar — Indicações

- Hemocultura positiva
- Piora neurológica
- Antibiótico > 48h sem melhora
- LONS em qualquer prematuro ou instável
- Suspeita de meningite (fontanela abaulada, convulsão)`,
    },
    {
      id: "alerts",
      title: "Alertas",
      content: `## Pontos Críticos

**1. LCR antes dos antibióticos quando possível** — meningite muda duração e escolha do ATB.

**2. Gentamicina em neonato** — intervalo depende da IG e peso; consultar tabela neonatal específica.

**3. Vancomicina em LONS com cateter** — cobrir Staphylococcus coagulase-negativo até cultura.

**4. Hipoglicemia** — verificar e corrigir imediatamente em todo neonato suspeito de sepse.

**5. Prematuros < 32 semanas** — sepse pode se apresentar apenas com apneia ou intolerância alimentar.

**6. Descontinuar ATB com hemocultura negativa e assintomático em 48h** — reduz resistência e complicações.

**7. Profilaxia materna de GBS** — solicitar resultado do swab vaginal/retal da mãe (35–37 semanas).`,
    },
    {
      id: "references",
      title: "Referências",
      content: `## Referências

Puopolo KM et al. **Management of Neonates Born at ≥35 0/7 Weeks' Gestation with Suspected or Proven Early-Onset Bacterial Sepsis.** AAP Clinical Report. Pediatrics. 2018.

Shane AL et al. **Neonatal Sepsis.** Lancet. 2017;390(10104):1770–1780.

SBN — Sociedade Brasileira de Neonatologia. **Sepse neonatal: diagnóstico e tratamento.** Diretrizes 2023.

Cantey JB et al. **Unnecessary Antibiotic Use and the Development of Antimicrobial Resistance.** Curr Opin Pediatr. 2016.

Hornik CP et al. **Use of the Neonatal Early-Onset Sepsis Calculator.** J Perinatol. 2016.

WHO. **Managing newborn problems: a guide for doctors, nurses, and midwives.** Geneva: WHO; 2003.`,
    },
  ],
};
