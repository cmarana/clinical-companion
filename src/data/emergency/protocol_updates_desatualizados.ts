/**
 * Protocolos atualizados a partir da auditoria (2026-05-29).
 * Status anterior: Desatualizado.
 *
 * Este arquivo substitui os protocolos incompletos existentes
 * com versões completas e atualizadas.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. DENGUE — Estratificação A/B/C/D + Hidratação (MS 2024 + OPAS)
// ─────────────────────────────────────────────────────────────────────────────
export const protocolDengueAtualizado: EmergencyProtocol = {
  id: "dengue-estratificacao-completo",
  title: "Dengue — Estratificação A/B/C/D e Hidratação",
  categoryId: "infectious",
  version: "2.0",
  lastReviewed: "2026-05",
  tags: [
    "dengue", "arbovirose", "grupo a", "grupo b", "grupo c", "grupo d",
    "sinais de alarme", "choque dengue", "hidratação", "plaquetopenia",
    "hematócrito", "extravasamento plasmático", "aedes", "DENV",
    "dengue grave", "prova do laço",
  ],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Dengue

Arbovirose de maior impacto no Brasil — >1 milhão de casos/ano, com epidemias crescentes. Causada pelos sorotipos DENV 1–4, transmitida pelo *Aedes aegypti* e *Ae. albopictus*.

**A fase crítica é a defervescência (dias 4–6)** — quando o extravasamento plasmático é máximo e o risco de choque é maior.

**Bases do manejo:**
- Estratificar em Grupo A/B/C/D na chegada
- Hidratação adequada ao grupo e peso
- Reavaliação seriada — a condição pode mudar rapidamente
- Evitar AAS e AINEs em todo paciente com suspeita

> ⚠️ **Disclaimer:** Ferramenta de apoio à decisão clínica. Não substitui avaliação médica individualizada. Seguir protocolo local e diretrizes MS 2024.`,
    },
    {
      id: "def",
      title: "Definição e Classificação",
      content: `## Definição

Doença viral febril aguda causada pelo vírus dengue (DENV 1–4). Evolução em fases:
- **Fase febril:** dias 1–3, febre alta, sintomas inespecíficos
- **Fase crítica:** dias 4–6, defervescência, risco de extravasamento
- **Fase de recuperação:** dias 7–10, reabsorção de fluidos

## Classificação Operacional MS 2024

| Grupo | Definição | Local de cuidado |
|---|---|---|
| **A** | Sem sinais de alarme, sem condições especiais | Ambulatório / UBS |
| **B** | Sem alarme + condição especial OU sangramento espontâneo de pele | PS com observação |
| **C** | Sinais de alarme presentes | PS / internação |
| **D** | Dengue grave (choque, sangramento grave, disfunção orgânica) | UTI / Sala Vermelha |

## Condições Especiais (Grupo B automático)
- Gestação (qualquer trimestre)
- Lactente < 2 anos
- Idoso > 65 anos
- Comorbidade: DM, HAS, DPOC, doença renal/hepática crônica, hematológica
- Uso de anticoagulantes ou antiagregantes
- Morador de área de difícil acesso ou sem suporte domiciliar`,
    },
    {
      id: "screening",
      title: "Identificação e Sinais de Alarme",
      content: `## Critério de Suspeita

Febre ≤ 7 dias + pelo menos 2 dos seguintes em contexto epidemiológico:
- Cefaleia intensa
- Dor retro-orbitária
- Mialgia/artralgia
- Exantema
- Náuseas/vômitos
- Prova do laço positiva

## Sinais de Alarme (→ Grupo C)

| Sinal | Interpretação |
|---|---|
| Dor abdominal intensa e contínua | Extravasamento peritoneal |
| Vômitos persistentes (≥ 3/hora) | Desidratação + alarme |
| Acúmulo de fluidos (ascite, derrame pleural, edema) | Extravasamento |
| Hipotensão postural ou lipotimia | Pré-choque |
| Letargia ou irritabilidade | Comprometimento SNC |
| Hepatomegalia (> 2 cm abaixo do rebordo costal) | Hepatite dengue |
| Sangramento de mucosas | Plaquetopenia grave |
| Aumento progressivo do hematócrito | Hemoconcentração |

## Dengue Grave (→ Grupo D)

- **Choque:** PA convergente (diferencial ≤ 20 mmHg) ou hipotensão com sinais de má perfusão
- **Sangramento grave:** hematemese, melena, hematúria macroscópica, sangramento SNC
- **Disfunção orgânica:** hepatite grave (TGO/TGP > 1000 U/L), encefalite, miocardite, LRA

## Prova do Laço
1. Medir PA e calcular a média: (PAS + PAD) / 2
2. Inflar o manguito até a média por 5 minutos
3. Contar petéquias no quadrado de 2,5 cm²
4. **Positiva:** ≥ 20 petéquias (adultos) ou ≥ 10 (crianças)`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico e Exames",
      content: `## Confirmação Diagnóstica

| Exame | Quando pedir | Interpretação |
|---|---|---|
| NS1 Ag (teste rápido) | Dias 1–5 | Positivo = dengue confirmado |
| IgM anti-dengue | A partir do dia 6 | Positivo = infecção recente |
| RT-PCR | Dias 1–5 | Padrão-ouro (confirma sorotipo) |
| Hemograma com plaquetas | Grupos B, C, D — repetir conforme evolução | Leucopenia + plaquetopenia |

## Exames por Grupo

### Grupo A
- Hemograma se sintomas > 3 dias ou condição especial
- NS1 se disponível (dias 1–5)

### Grupo B
- Hemograma + plaquetas obrigatório
- NS1 ou IgM conforme dia da doença
- Glicemia, função renal

### Grupo C e D
- Hemograma completo seriado (6–12h)
- Hematócrito seriado (parâmetro principal)
- Função hepática (TGO, TGP, bilirrubinas)
- Função renal, eletrólitos
- Coagulograma (TP, TTPA, fibrinogênio) se sangramento
- Radiografia de tórax (derrame pleural)
- ECG e troponina (miocardite)
- Gasometria arterial e lactato (choque)

## Interpretação do Hematócrito

| Situação | Interpretação |
|---|---|
| Htc basal + aumento ≥ 10–20% | Hemoconcentração = extravasamento |
| Htc basal sem aumento | Hidratação adequada ou sem extravasamento |
| Htc basal elevado + queda súbita | Sangramento oculto |

**Plaquetas isoladas não definem gravidade — o hematócrito e a perfusão são os parâmetros principais.**`,
    },
    {
      id: "conduct",
      title: "Conduta por Grupo",
      content: `## Grupo A — Ambulatório

**Critérios:** sem alarme, sem condição especial, sem sangramento

**Conduta:**
1. Paracetamol 500–1000 mg VO 6/6h (se dor ou febre)
2. Hidratação oral: 60–80 mL/kg/dia para adultos (ver tabela abaixo)
3. Orientar retorno IMEDIATO se sinais de alarme
4. Orientar fase crítica: "Quando a febre abaixar (dias 4–6) é o período de mais risco — não significa melhora"
5. Retorno em 24h ou antes se piora

**Volumes de hidratação oral — Adultos (Grupo A):**
| Peso | Volume mínimo/dia |
|---|---|
| 40–50 kg | 2,4–3,0 L |
| 50–70 kg | 3,0–4,2 L |
| 70–90 kg | 4,2–5,4 L |
| > 90 kg | 5,4–6,0 L |

---

## Grupo B — PS com observação

**Critérios:** condição especial OU sangramento espontâneo de pele

**Conduta:**
1. Hemograma com plaquetas + NS1/IgM
2. Hidratação oral supervisionada (mesmos volumes grupo A)
3. Se vômitos: SRO fracionada 50 mL a cada 5 min
4. Observação 4–6h, reavaliação clínica e laboratorial
5. Alta com retorno em 24h se estável; internação se piora

---

## Grupo C — Internação / Observação Intensiva

**Critérios:** sinais de alarme presentes

### Hidratação EV — Fase de expansão (primeiras 6h)
| Fase | Solução | Volume | Velocidade |
|---|---|---|---|
| 1ª hora | SF 0,9% | 10 mL/kg/h | 1h |
| 2ª hora | SF 0,9% | 10 mL/kg/h | 1h |
| 3ª–6ª hora | SF 0,9% ou SG+E | 5 mL/kg/h | Reduzir conforme resposta |

**Critérios de resposta:** diurese ≥ 0,5 mL/kg/h, perfusão melhorada, Htc estabiliza

### Reavaliação obrigatória
- Sinais vitais + perfusão a cada 1–2h
- Htc após cada fase de expansão
- Se não melhora: aumentar volume; se piora: reavaliar diagnóstico (Grupo D)

---

## Grupo D — UTI / Sala Vermelha

**Critérios:** choque, sangramento grave, disfunção orgânica

### Choque compensado (PA convergente, mas sem hipotensão franca)
1. SF 0,9% **10–20 mL/kg em 20–30 min** (bolus)
2. Reavaliar perfusão e Htc
3. Se melhora: manter 5–10 mL/kg/h e reduzir progressivamente
4. Se não melhora ou piora: repetir bolus x1

### Choque grave / hipotensão
1. SF 0,9% **20 mL/kg em 15 min** (bolus rápido)
2. Repetir até 3x avaliando resposta
3. Se Htc cai com choque persistente → sangramento: transfundir CH
4. Se Htc sobe com choque persistente → extravasamento: coloide (albumina)
5. Norepinefrina 0,1–0,5 mcg/kg/min se refratário

### Sangramento grave
- Plaquetas < 20.000 sem sangramento ou < 50.000 com sangramento: transfundir plaquetas
- Sangramento ativo: PFC + crioprecipitado se coagulopatia
- Evitar transfusão de plaquetas profilática sem indicação`,
    },
    {
      id: "treatment",
      title: "Tratamento — Detalhes e Cuidados",
      content: `## O Que Não Fazer

| Proibido | Motivo |
|---|---|
| AAS / Ibuprofeno / Diclofenaco | Potencializam sangramento e nefrotoxicidade |
| Corticoide de rotina | Sem benefício comprovado no choque dengue |
| Excesso de fluidos | Edema agudo pulmão / derrame pleural iatrogênico |
| Antibiótico empírico de rotina | Dengue é viral — não usar sem foco bacteriano |
| Transfusão de plaquetas profilática | Aumenta risco, não melhora desfecho |

## Analgesia / Antitérmico Seguro

- **Paracetamol** 500–1000 mg VO/IV 6/6h (1ª escolha)
- **Dipirona** 500 mg–1 g VO/IV 6/6h (alternativa — atenção agranulocitose)
- Evitar AINEs em qualquer suspeita de dengue

## Cuidados na Fase de Recuperação (Dias 7–10)

- Reabsorção de fluidos → risco de sobrecarga hídrica
- Reduzir hidratação EV progressivamente
- Atentar para edema pulmonar e bradicardia sinusal (comum)
- Plaquetas sobem rapidamente — não transfundir nessa fase
- Leucocitose e linfocitose são normais na recuperação

## Populações Especiais

**Gestantes:** preferir SF, monitorar sinais de pré-eclâmpsia, internação em Grupo B
**Lactentes:** risco de desidratação rápida, hidratação oral fracionada, internação precoce
**Idosos:** cardiopatas têm risco de sobrecarga — reduzir volumes, monitorar mais frequentemente
**Nefropatas:** ajustar volumes, monitorar creatinina seriada`,
    },
    {
      id: "followup",
      title: "Monitorização e Alta",
      content: `## Parâmetros de Monitorização por Grupo

| Parâmetro | Grupo C | Grupo D |
|---|---|---|
| Sinais vitais | 1–2h | 30 min |
| Hematócrito | A cada fase de expansão | Horário |
| Diurese | Horária | Horária (sonda) |
| Glicemia | 4/4h | 2/2h |
| Hemograma completo | 4–6h | 2–4h |

## Critérios de Alta (Grupo C / D estabilizado)

- Ausência de sinais de alarme por ≥ 24h
- Hemograma estável, plaquetas em ascensão ou > 50.000
- Hidratação oral adequada (≥ 2 L/dia)
- Diurese adequada
- Sem febre por ≥ 48h (cuidado — pode ser fase crítica)
- Paciente capaz de compreender sinais de alarme e retornar

## Orientações de Alta

- Retornar IMEDIATAMENTE se: dor abdominal intensa, vômitos, sangramento, tontura, palidez, suor frio
- Manter hidratação oral abundante por 7 dias
- Repouso relativo
- Evitar AAS e AINEs por 30 dias
- Retorno em 24–48h para reavaliação clínica e laboratorial`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Dengue Grupo C (Adulto 70 kg)

\`\`\`
PACIENTE: _____ PESO: 70 kg   DATA: _____
DIA DE DOENÇA: _____ (fase crítica: dias 4–6)

1. Dieta oral fracionada (se tolerando) OU
   SRO fracionada 50 mL a cada 5 min se vômitos

2. SF 0,9% 700 mL IV em 1h (10 mL/kg)
   → Reavaliação 1h: sinais vitais + perfusão + Htc
   Se resposta: SF 0,9% 350 mL/h (5 mL/kg/h) por mais 2h
   → Reavaliação: reduzir para 2–3 mL/kg/h conforme resposta

3. Paracetamol 1 g IV 6/6h (se febre ou dor)
   NÃO usar AAS, ibuprofeno, diclofenaco

4. Omeprazol 20 mg VO ou IV 1x/dia

5. Monitorização:
   - PA + FC + FR + SpO₂ a cada 2h
   - Htc: ao chegar, pós-expansão, e 4/4h
   - Diurese horária (meta ≥ 0,5 mL/kg/h = 35 mL/h)
   - Hemograma completo a cada 6h

6. Observar sinais de alarme: piora, hipotensão, sangramento
   → Se piora: Grupo D / UTI
\`\`\`

---

## Prescrição Modelo — Dengue Grupo D / Choque (Adulto 70 kg)

\`\`\`
PACIENTE: _____ PESO: 70 kg   DATA: _____

RESSUSCITAÇÃO IMEDIATA:
1. SF 0,9% 1400 mL IV em 20 min (20 mL/kg)
   → Reavaliação: PA, FC, perfusão, enchimento capilar, Htc

2. Se melhora parcial: SF 0,9% 700 mL IV em 30 min (10 mL/kg)
   → Reavaliação

3. Se não melhora ou Htc cai: pensar sangramento
   → Solicitar coagulograma + tipo/Rh
   → Transfundir CH se Hb < 7 g/dL ou queda rápida

4. Norepinefrina 8 mg em 250 mL SG 5%
   Iniciar 0,1 mcg/kg/min BIC (= 5,25 mL/h para 70 kg)
   Titular para PAM ≥ 65 mmHg (se refratário a volume)

5. Monitorização contínua: ECG, PA invasiva, débito urinário (sonda)
   Htc horário, gasometria 2/2h, lactato seriado

CONTATO: Regulação UTI — caso grave
\`\`\``,
    },
    {
      id: "references",
      title: "Referências Bibliográficas",
      content: `## Referências

Ministério da Saúde / SVS. **Dengue: Diagnóstico e Manejo Clínico — Adulto e Criança.** 6ª ed. Brasília: MS; 2024. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/dengue/dengue-diagnostico-e-manejo-clinico-adulto-e-crianca

OPAS/OMS. **Dengue: Guias para Diagnóstico, Tratamento, Prevenção e Controle.** Washington: OPAS; 2016. Disponível em: https://www.paho.org/pt/topicos/dengue

WHO. **Dengue Guidelines for Diagnosis, Treatment, Prevention and Control.** 2nd ed. Geneva: WHO; 2009 (updated 2024).

Bhatt S et al. **The global distribution and burden of dengue.** Nature. 2013;496:504–507.

Simmons CP et al. **Dengue.** NEJM. 2012;366:1423–1432.

Brasil. **Alerta Epidemiológico — Dengue.** SVS/MS; 2026. Atualização epidemiológica nacional.

SBI — Sociedade Brasileira de Infectologia. **Posicionamento sobre Dengue no Brasil.** 2024.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. AVCi — Correção do lastReviewed + adição da SBDCV
//    (O conteúdo clínico já estava atualizado em neurological.ts)
//    Este protocolo substitui com campo lastReviewed correto
// ─────────────────────────────────────────────────────────────────────────────
export const protocolAVCiAtualizado: EmergencyProtocol = {
  id: "avci-trombolise-trombectomia-2026",
  title: "AVCi — Trombólise (TNK/Alteplase) e Trombectomia",
  categoryId: "neurological",
  version: "2.0",
  lastReviewed: "2026-05",
  tags: [
    "avc isquemico", "avci", "tenecteplase", "tnk", "alteplase", "tpa",
    "trombólise", "trombectomia", "código avc", "nihss", "lvo",
    "janela terapêutica", "wake-up stroke", "aha", "asa",
  ],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## AVCi — Acidente Vascular Cerebral Isquêmico

Emergência neurológica tempo-dependente. ~85% dos AVCs são isquêmicos.

**"Cada minuto sem reperfusão = perda de 1,9 milhão de neurônios"**

**Diretriz base:** AHA/ASA 2026 + SBDCV/ABN 2024.

**Principais atualizações 2026 vs 2019:**
- Tenecteplase **Classe I** (igual à alteplase) na janela < 4,5h — bolus único facilita transferência
- Trombólise estendida até **9h** com imagem avançada (mismatch penumbra/core)
- Trombólise **4,5–24h** em oclusão de grande vaso (LVO) sem acesso a trombectomia
- Contraindicações ao tPA **simplificadas** — menos exclusões arbitrárias
- Glicemia capilar = **ÚNICO exame obrigatório** antes do tPA

**Meta:** Porta-agulha < 60 min (ideal < 45 min).

> ⚠️ Ferramenta de apoio à decisão. Não substitui avaliação neurológica individualizada.`,
    },
    {
      id: "def",
      title: "Definição e Classificação",
      content: `## Definição

Déficit neurológico focal agudo por oclusão arterial cerebral com isquemia do parênquima.

**AIT:** déficit transitório sem infarto em imagem — investigar e tratar com a mesma urgência.

## Classificação TOAST

| Subtipo | Frequência |
|---|---|
| Cardioembólico (FA, trombo, valvopatia, FOP) | 30% |
| Aterosclerose de grandes artérias | 25% |
| Oclusão de pequenas artérias (lacunar) | 20% |
| Criptogênico (ESUS) | 25–30% |
| Outras etiologias | 5% |

## Oclusão de Grande Vaso (LVO)

Oclusão de ACI, M1, M2 proximal, basilar ou vertebral — indica trombectomia.

**Suspeitar de LVO:**
- NIHSS ≥ 6
- LAMS ≥ 4 ou RACE ≥ 5 (escalas pré-hospitalares)
- Síndrome de circulação posterior (5Ds)`,
    },
    {
      id: "screening",
      title: "Identificação e Código AVC",
      content: `## Escalas Pré-hospitalares

| Escala | Corte | Uso |
|---|---|---|
| FAST | ≥ 1 item | Triagem geral |
| LAMS | ≥ 4 | Suspeita de LVO |
| RACE | ≥ 5 | Suspeita de LVO |

**ATIVAR CÓDIGO AVC se:**
- Déficit motor ou sensitivo súbito unilateral
- Afasia ou disartria aguda
- Perda visual súbita (monocular ou hemianopsia)
- Ataxia, vertigem + déficit focal
- Cefaleia súbita intensa (pensar hemorrágico)

## Wake-up Stroke
Usar como início dos sintomas o **último momento visto assintomático** (acordar = início dos sintomas se dormiu assintomático).

## Stroke Mimics (30% dos Códigos AVC)
- Hipoglicemia (**SEMPRE verificar antes do tPA**)
- Paralisia de Todd pós-ictal
- Enxaqueca hemiplégica
- PRES / encefalopatia hipertensiva
- Encefalopatia de Wernicke

**AHA/ASA 2026:** NÃO atrasar tPA por medo de mimic se apresentação típica.`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico",
      content: `## Imagem — Porta-TC < 20 min

| Exame | Quando | O que busca |
|---|---|---|
| TC sem contraste | Obrigatória | Excluir hemorragia |
| Angio-TC crânio + pescoço | NIHSS ≥ 6 ou suspeita LVO | Confirmar oclusão |
| Perfusão TC ou RM-DWI | Janela 4,5–24h | Mismatch core/penumbra |

## Laboratório

**ÚNICO exame obrigatório antes do tPA (AHA/ASA 2026):**
- ✅ **Glicemia capilar** — excluir hipoglicemia < 60 mg/dL

**Demais colher em paralelo (não atrasar tPA):**
- Hemograma, coagulograma, eletrólitos
- Troponina, ECG (FA)
- Função renal (contraste para angio-TC)

## NIHSS à Beira do Leito

| Pontuação | Gravidade |
|---|---|
| 1–4 | Leve |
| 5–15 | Moderado |
| 16–20 | Moderado-grave |
| > 20 | Grave |

**NIHSS = 0 não exclui LVO** — síndrome de circulação posterior pode ser devastadora com NIHSS baixo.`,
    },
    {
      id: "conduct",
      title: "Conduta — Protocolo Código AVC",
      content: `## Algoritmo Código AVC — AHA/ASA 2026

### 0–10 min (chegada)
1. Monitorização, 2 acessos venosos, oxigênio se SpO₂ < 94%
2. **Glicemia capilar imediata** → tratar se < 60 mg/dL
3. NIHSS completo
4. TC crânio urgente (porta-TC < 20 min)

### 10–25 min (após TC)
5. Se TC sem hemorragia → avaliar elegibilidade para tPA
6. Se NIHSS ≥ 6: angio-TC crânio + pescoço (porta-angio < 25 min)
7. Controlar PA se > 185/110 (ver abaixo)

### 25–60 min (meta porta-agulha)
8. Consentimento informado ou familiar
9. Administrar tPA (ver seção Tratamento)
10. Transferir para trombectomia se LVO confirmada

---

## Controle Pressórico

| Situação | Meta | Agente |
|---|---|---|
| Candidato a tPA — antes | < 185/110 | Labetalol 10–20 mg IV ou Nicardipina 5–15 mg/h |
| Candidato a tPA — após (24h) | < 180/105 | Mesmos agentes |
| Não candidato a tPA | < 220/120 (reduzir ≤ 15%/24h) | Gradual |

---

## Contraindicações ao tPA (AHA/ASA 2026 — simplificadas)

**Absolutas:**
- Hemorragia intracraniana na TC
- Neoplasia intracraniana (exceto meningioma pequeno sem efeito de massa)
- Dissecção de aorta torácica
- INR > 1,7 ou plaquetas < 100.000
- DOAC < 48h (sem reversão documentada)
- PA > 185/110 não controlável
- AVC isquêmico ou TCE grave < 3 meses
- Hipoglicemia (glicemia < 50 após correção)`,
    },
    {
      id: "treatment",
      title: "Tratamento — Trombolíticos e Trombectomia",
      content: `## Trombólise IV

### Janelas Terapêuticas (AHA/ASA 2026)

| Janela | Agente | Indicação |
|---|---|---|
| **< 4,5h** (Classe I) | TNK 0,25 mg/kg bolus (máx 25 mg) — **PREFERIDO** | Todos elegíveis sem contraindicação |
| **< 4,5h** (Classe I) | Alteplase 0,9 mg/kg IV (máx 90 mg) | Alternativa se TNK indisponível |
| **4,5–9h** (Classe IIa) | TNK ou Alteplase | Com imagem avançada (mismatch) |
| **Wake-up / 4,5–9h** (Classe IIa) | TNK | Mismatch na RM-DWI/FLAIR |
| **4,5–24h + LVO** (Classe IIb) | TNK | Sem acesso ou impossibilidade de trombectomia |

### Vantagens do TNK sobre Alteplase
- Bolus único (não infusão de 1h) — facilita transferência para trombectomia
- Maior afinidade pela fibrina
- Menos fibrinogenólise sistêmica
- Mesma eficácia e segurança (AcT, ATTEST-2, TASTE trials)

### Preparo e Administração

**Tenecteplase (TNK):**
- Dose: 0,25 mg/kg IV bolus único (máx 25 mg)
- NÃO infundir em 1h — é bolus único
- Injetar em 5–10 segundos

**Alteplase:**
- Dose total: 0,9 mg/kg (máx 90 mg)
- 10% da dose em bolus IV (1 min)
- 90% restante em infusão IV 60 min

---

## Trombectomia Mecânica

| Critério | Detalhe |
|---|---|
| LVO confirmada | ACI, M1, M2 proximal, basilar |
| NIHSS ≥ 6 | (NIHSS baixo não exclui se LVO basilar) |
| ASPECTS ≥ 6 | TC sem infarto extenso |
| Janela < 6h | Indicação direta |
| 6–24h | DAWN (NIHSS ≥ 10 + mismatch) ou DEFUSE-3 |
| Basilar | Até 24h com tecido viável |

**Bridging (tPA + trombectomia):** preferido se elegível para ambos — não atrasar tPA aguardando vaga de hemodinâmica.

---

## Complicações do tPA

| Complicação | Conduta |
|---|---|
| Transformação hemorrágica | SUSPENDER tPA imediatamente; TC urgente; FFP + crioprecipitado + TXA |
| Angioedema orolingual | SUSPENDER; Adrenalina 0,1 mg IV; Anti-H1/H2; Hidrocortisona 200 mg IV |
| Piora neurológica durante infusão | SUSPENDER; TC urgente |`,
    },
    {
      id: "followup",
      title: "Monitorização e Acompanhamento",
      content: `## Durante Trombólise

- PA a cada 15 min por 2h → a cada 30 min por 6h → a cada 1h por 16h
- NIHSS a cada 15 min durante infusão

## Sinais de Alerta — SUSPENDER tPA imediatamente
- Cefaleia súbita intensa
- Vômito
- Piora neurológica (↑ NIHSS ≥ 4)
- PA > 180/105 refratária

## TC de Controle
- 24h pós-trombólise (excluir transformação hemorrágica)
- Urgente se piora clínica

## Antiagregação Pós-AVCi

| Situação | Conduta |
|---|---|
| Pós-tPA | AAS 100 mg após TC 24h sem hemorragia |
| Sem tPA | AAS 100–300 mg imediatamente |
| AVCi menor / AIT alto risco | DAPT: AAS + Clopidogrel 75 mg por 21 dias (CHANCE-2) |

## Anticoagulação (FA como causa) — Regra dias

| NIHSS | Iniciar anticoagulação |
|---|---|
| ≤ 7 | 2–3 dias |
| 8–15 | 3–6 dias |
| > 15 ou infarto extenso | 12–14 dias |

## Prevenção Secundária
- Atorvastatina 80 mg (LDL alvo < 70 mg/dL)
- Controle de HAS, DM, apneia do sono
- Reabilitação precoce: fisio em 24h se estável`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — AVCi com Trombólise (AHA/ASA 2026)

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____
NIHSS: _____  INÍCIO SINTOMAS: _____h  PORTA: _____h

PRÉ-TROMBÓLISE:
1. Glicemia capilar → tratar se < 60 mg/dL
2. Se PA > 185/110: Labetalol 10–20 mg IV (repetir 10 min, máx 4 doses)
   OU Nicardipina 5 mg/h IV → titular 2,5 mg/h a cada 5–15 min

TROMBÓLISE:
3. TENECTEPLASE _____ mg IV bolus único [0,25 mg/kg, máx 25 mg]
   (peso × 0,25 = _____ mg)
   NÃO infundir em 1 hora — bolus em 5–10 segundos
   OU
   ALTEPLASE _____ mg IV total [0,9 mg/kg, máx 90 mg]
   → Bolus: _____ mg em 1 min (10%)
   → Infusão: _____ mg em 60 min (90%)

DURANTE/APÓS TROMBÓLISE:
4. SF 0,9% 125 mL/h IV manutenção
5. PA a cada 15 min por 2h → 30 min por 6h → 1h por 16h
   Meta: < 180/105 mmHg pós-tPA
6. NIHSS a cada 15 min durante infusão → 1h por 6h
7. SpO₂ contínuo → O₂ se < 94%
8. Temperatura axilar 4/4h → Dipirona 1 g IV se > 37,5°C
9. Glicemia capilar 4/4h → Insulina se > 180 mg/dL
10. Nada por via oral até avaliação disfagia (fono em 24h)
11. Decúbito horizontal durante infusão → 30° após término

TC CONTROLE 24h:
12. Se sem hemorragia: AAS 100 mg VO 1x/dia
13. Atorvastatina 80 mg VO 1x/dia
14. Enoxaparina 40 mg SC 1x/dia (profilaxia TVP)
15. Omeprazol 20 mg VO 1x/dia
16. Fisioterapia + fonoaudiologia a partir de 24h

Se FA identificada: iniciar DOAC conforme NIHSS (regra 2-3-6-12 dias)
\`\`\``,
    },
    {
      id: "references",
      title: "Referências Bibliográficas",
      content: `## Referências

Powers WJ et al. **2026 AHA/ASA Guideline for the Early Management of Patients with Acute Ischemic Stroke.** Stroke. 2026. doi:10.1161/STR.0000000000000513

Menon BK et al. **Effect of Alteplase vs Tenecteplase on Death or Disability in Patients with Acute Ischemic Stroke and Large Vessel Occlusion (AcT Trial).** Lancet. 2022;400(10347):161–169.

Logallo N et al. **Tenecteplase versus alteplase for management of acute ischaemic stroke (NOR-TEST).** Lancet Neurol. 2017.

Nogueira RG et al. **Thrombectomy 6 to 24 Hours after Stroke (DAWN Trial).** NEJM. 2018;378:11–21.

Albers GW et al. **Thrombectomy for Stroke at 6 to 16 Hours (DEFUSE-3).** NEJM. 2018;378:708–718.

Wang Y et al. **Clopidogrel with Aspirin in Acute Minor Stroke or TIA (CHANCE-2).** JAMA. 2021;325(17):1?1738–1748.

**Sociedade Brasileira de Doenças Cerebrovasculares (SBDCV) / ABN.** Diretriz Brasileira para o Diagnóstico e Tratamento do AVC Isquêmico Agudo. 2024.

Pontes-Neto OM et al. **Diretrizes para o tratamento do AVC isquêmico agudo — ABN.** Arq Neuropsiquiatr. 2022.`,
    },
  ],
};
