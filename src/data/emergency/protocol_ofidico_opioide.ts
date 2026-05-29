/**
 * Protocolos criados a partir da auditoria de cobertura (2026-05-29).
 * Status anterior: Faltante P1.
 * Fontes: MS/SVS, CIATox, OPAS, WHO, SAMHSA, ERS.
 */

import type { EmergencyProtocol } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// 1. ACIDENTE OFÍDICO — Bothrops, Crotalus, Lachesis, Micrurus
// ─────────────────────────────────────────────────────────────────────────────
export const protocolAcidenteOfidico: EmergencyProtocol = {
  id: "acidente-ofidico-completo",
  title: "Acidente Ofídico — Bothrops, Crotalus, Lachesis e Micrurus",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: [
    "ofídico", "serpente", "cobra", "bothrops", "crotalus", "lachesis",
    "micrurus", "soro antiofídico", "ciatox", "peçonhento", "veneno",
    "botrópico", "crotálico", "laquético", "elapídico",
  ],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Acidente Ofídico

Emergência tempo-dependente. O Brasil registra ~30.000 acidentes ofídicos/ano, com maior incidência nas regiões Norte e Centro-Oeste. Mortalidade geral ~0,3%, mas sobe para >5% nos casos graves sem soroterapia precoce.

**Gêneros de importância médica no Brasil:**
| Gênero | Síndrome | Frequência |
|---|---|---|
| Bothrops | Botrópica (local + coagulopática) | ~90% |
| Crotalus | Crotálica (neurotóxica + miotóxica) | ~8% |
| Lachesis | Laquética (local + vagal) | ~1–2% |
| Micrurus | Elapídica (neurotóxica pura) | <1% |

**Princípio fundamental:** identificar o gênero pela síndrome clínica — não pela serpente. A soroterapia deve ser iniciada o mais rápido possível.

> ⚠️ **Disclaimer:** Ferramenta de apoio à decisão clínica. Não substitui avaliação médica individualizada. Consulte o CIATox (0800 722 6001) em todos os casos graves ou de dúvida.`,
    },
    {
      id: "def",
      title: "Definição e Classificação",
      content: `## Definição

Acidente causado pela inoculação de veneno por serpente peçonhenta. Identificação sindrômica é mais importante do que identificação visual da serpente.

## Classificação de Gravidade por Gênero

### BOTHROPS (botrópico) — ~90% dos casos

**Manifestações:** edema local progressivo, dor intensa, equimose, bolhas, necrose, sangramento, coagulopatia, LRA.

| Gravidade | Critérios | Soro (amp) |
|---|---|---|
| Leve | Edema local, sem alteração sistêmica ou coagulação | 4 amp SAB |
| Moderado | Edema extenso, sangramento local ou sistêmico, coagulopatia | 8 amp SAB |
| Grave | Choque, oligúria, sangramento grave, coagulopatia severa, síndrome compartimental | 12 amp SAB |

### CROTALUS (crotálico) — ~8% dos casos

**Manifestações:** fácies neurotóxica (ptose, diplopia), mialgia difusa, urina escura (mioglobinúria), sem manifestações locais proeminentes.

| Gravidade | Critérios | Soro (amp) |
|---|---|---|
| Leve | Fácies miastênica sem paralisia respiratória, urina clara | 5 amp SABC |
| Moderado | Fácies + mialgia + urina alterada | 10 amp SABC |
| Grave | Insuficiência respiratória, paralisia, oligúria | 20 amp SABC |

### LACHESIS (laquético) — ~1–2% dos casos

**Manifestações:** similar ao botrópico + componente vagal (bradicardia, hipotensão, diarreia, vômitos).

| Gravidade | Critérios | Soro (amp) |
|---|---|---|
| Leve | Edema local leve, sem sistêmico | 10 amp SAL |
| Moderado | Edema extenso, componente vagal | 20 amp SAL |
| Grave | Choque, coagulopatia, vagal grave | 20 amp SAL |

### MICRURUS (elapídico) — <1% dos casos

**Manifestações:** neurotoxicidade pura com latência — sem manifestações locais. Ptose, disfagia, paralisia progressiva, insuficiência respiratória. **RISCO DE MORTE por paralisia respiratória.**

| Gravidade | Critérios | Soro (amp) |
|---|---|---|
| Todos os casos | Qualquer mordedura suspeita — todos são potencialmente graves | 10 amp SAE |`,
    },
    {
      id: "screening",
      title: "Identificação Sindrômica",
      content: `## Como Identificar o Gênero pela Síndrome

### Perguntas-chave na avaliação inicial

1. **Há manifestações locais?**
   - Sim + dor + edema → Bothrops ou Lachesis
   - Mínimo ou ausente → Crotalus ou Micrurus

2. **Há manifestações neurológicas?**
   - Ptose + diplopia + mialgia difusa → Crotalus
   - Ptose + disfagia + sem dor local → Micrurus
   - Ptose sem mialgia nem dor → Micrurus (mais provável)

3. **Há manifestações vagais?**
   - Bradicardia + hipotensão + diarreia + edema local → Lachesis

4. **Urina escura?**
   - Mioglobinúria → Crotalus (miotoxina)
   - Hemoglobinúria + coagulopatia → Bothrops grave

### Red Flags — solicitar UTI/transferência imediata

- Insuficiência respiratória ou SpO₂ < 94%
- Choque (PA < 90 mmHg)
- Ptose palpebral bilateral ou disfagia (Micrurus)
- Oligúria ou anúria
- Sangramento em múltiplos sítios
- Edema que ultrapassa articulação proximal
- Síndrome compartimental (dor à extensão passiva, pele tensa, parestesia)`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico e Exames",
      content: `## Exames Iniciais

### Todos os casos
- Tempo de coagulação (TC) de Lee-White à beira do leito — colher ao chegar
- Hemograma completo
- Coagulograma (TP, TTPA, fibrinogênio)
- Função renal (creatinina, ureia)
- Urinálise (cor, hematúria, proteinúria)

### Bothrops/Lachesis
- Adicionalmente: D-dímero, PDF
- TC > 30 min ou incoagulável → coagulopatia de consumo

### Crotalus
- CK total (rabdomiólise — pode ultrapassar 100.000 U/L)
- DHL, mioglobina sérica/urinária
- Eletrólitos (hipercalemia por rabdomiólise)
- Gasometria se mialgia grave

### Micrurus
- Monitorização cardiorrespiratória contínua obrigatória
- Gasometria arterial seriada
- Espirometria à beira do leito (CVF < 15 mL/kg → IOT iminente)

## TC de Lee-White à beira do leito
1. Colher 2 mL de sangue em tubo sem anticoagulante
2. Inclinação a cada 5 min
3. Normal: < 10 min
4. Incoagulável (sangue fluido > 30 min) → coagulopatia botrópica/laquética grave`,
    },
    {
      id: "conduct",
      title: "Conduta Inicial",
      content: `## Conduta Geral — Todos os Gêneros

### Primeiros 15 minutos

1. **ABCDE** — prioridade absoluta em Micrurus (risco respiratório)
2. **Monitorização:** ECG, SpO₂, PA, FR, débito urinário
3. **Acesso venoso** 2 acessos calibrosos
4. **Remover:** anéis, pulseiras, calçados, objetos constritivos
5. **Posição:** membro em posição funcional, não elevado, não dependente
6. **Lavar** ferida com água e sabão suavemente

### O que NÃO fazer (aumenta morbimortalidade)
- ❌ Torniquete ou garrote
- ❌ Cortes, incisões ou sucção
- ❌ Gelo direto ou calor
- ❌ Álcool, ervas, substâncias locais
- ❌ Compressão elástica apertada

### Analgesia
- Dipirona 1g IV lento OU
- Tramadol 50–100 mg IV (diluído, lento) para dor intensa
- Evitar AINEs → risco de potencializar coagulopatia e nefrotoxicidade

### Antitetânico
- Verificar e atualizar carteira vacinal em todos os casos

### Acionar
- **CIATox:** 0800 722 6001 (24h, gratuito)
- Regulação médica para transferência se serviço sem soro

---

## Soroterapia

### Pré-medicação (reação anafilática ocorre em 3–40%)
- Adrenalina IM 0,5 mg disponível à beira do leito antes de iniciar
- Difenidramina 25–50 mg IV + ranitidina 50 mg IV (opcional, evidência fraca)
- NÃO atrasar soro por pré-medicação

### Administração
- Diluir em 100–250 mL SF 0,9%
- Infundir em 1–2h (iniciar lento nos primeiros 10 min)
- Monitorizar sinais de anafilaxia durante toda a infusão

### Se reação anafilática durante infusão
1. Parar temporariamente
2. Adrenalina 0,5 mg IM imediato
3. Corticoide EV (metilprednisolona 1 mg/kg)
4. Retomar soro após estabilização — não abandonar o objetivo de neutralização

### Critérios para doses adicionais de soro
- TC permanece incoagulável 6h após soroterapia → nova dose
- Progressão de sintomas neurológicos (Crotalus/Micrurus)`,
    },
    {
      id: "treatment",
      title: "Tratamento Específico por Gênero",
      content: `## Bothrops — Tratamento Específico

### Coagulopatia
- Plasma fresco congelado: indicado se sangramento ativo ou procedimento necessário
- Crioprecipitado: hipofibrinogenemia grave (< 100 mg/dL)
- NÃO usar heparina

### Lesão Renal Aguda
- Hidratação vigorosa: SF 0,9% 250–500 mL/h até débito urinário > 1 mL/kg/h
- Furosemida apenas se sobrecarga confirmada — NÃO como nefroprotetor rotineiro
- TRR se anúria persistente, hipercalemia grave ou sobrecarga refratária
- Meta: débito urinário 1–2 mL/kg/h

### Síndrome Compartimental
- Pressão compartimental > 30 mmHg → cirurgia ortopédica urgente
- Fasciotomia NÃO indicada apenas por edema sem confirmação compartimental
- Soro antiveneno deve ser administrado antes da fasciotomia

---

## Crotalus — Tratamento Específico

### Rabdomiólise
- Meta: débito urinário 200–300 mL/h até CK < 1000 U/L
- SF 0,9% 1–1,5 L/h nas primeiras horas
- Alcalinização urinária (bicarbonato) se pH urinário < 6 e CK > 5000 — discutível
- Monitorar hipercalemia e sobrecarga

### Comprometimento Respiratório
- Gasometria e espirometria seriadas a cada 2–4h
- CVF < 20 mL/kg → preparar IOT
- CVF < 15 mL/kg → indicar IOT antes da falência
- Suporte ventilatório conforme Protocolo VM Protetora

---

## Lachesis — Tratamento Específico

### Síndrome Vagal
- Atropina 0,5–1 mg IV se bradicardia sintomática (repetir se necessário, máx 3 mg)
- Hidratação se hipotensão
- Evitar drogas vasoativas até correção da volemia

---

## Micrurus — Tratamento Específico

### Paralisia Respiratória Iminente
- IOT precoce — não esperar a falência instalada
- Critérios: CVF < 15 mL/kg, SpO₂ < 94%, FR > 30, uso de musculatura acessória
- VM protetora após IOT
- Paralisia pode durar dias a semanas — monitorar desmame criteriosamente

### Anticolinesterásicos (uso controverso, discutir com CIATox)
- Neostigmina 0,05 mg/kg IV (máx 5 mg) + atropina 0,02 mg/kg
- Pode ter resposta parcial em alguns casos — não é tratamento definitivo

---

## Antibioticoterapia

Não é rotina. Indicar apenas se:
- Sinais de infecção (febre, pus, celulite progressiva)
- Necrose extensa com manipulação inadequada prévia
- Imunocomprometidos

Se indicado: Amoxicilina-clavulanato 875/125 mg 12/12h VO (leve/moderado)
ou Ampicilina-sulbactam 3g IV 6/6h (grave)`,
    },
    {
      id: "followup",
      title: "Monitorização e Alta",
      content: `## Critérios de Internação

**Todos os casos devem ser observados no mínimo 24h.**

| Situação | Destino |
|---|---|
| Leve sem coagulopatia | Observação 24h PS |
| Moderado | Internação enfermaria |
| Grave / Crotalus / Micrurus | UTI |

## Monitorização

- **Bothrops:** TC de Lee-White 6h e 24h após soroterapia, creatinina, débito urinário
- **Crotalus:** CK seriada, creatinina, débito urinário, função respiratória
- **Micrurus:** Função respiratória a cada 2h nas primeiras 24h
- **Todos:** sinais vitais horários nas primeiras 12h

## Critérios de Alta

- TC normal ou em normalização
- Sem progressão clínica por > 24h
- Função renal estável
- Sem sinais de síndrome compartimental
- Analgesia controlada por via oral
- Orientação sobre retorno (sinais de infecção, sangramento, piora)`,
    },
    {
      id: "differential",
      title: "Diagnóstico Diferencial",
      content: `## Diagnóstico Diferencial

| Condição | Diferencial |
|---|---|
| Celulite/erisipela | Sem dor aguda na mordedura, evolução mais lenta, sem coagulopatia |
| Angioedema | Sem marca de mordedura, história alérgica |
| Trauma local | Sem veneno, coagulação normal |
| Acidente araneídico | Sem edema progressivo botrópico, síndrome loxoscélica diferente |
| Acidente escorpiônico | Marca diferente, dor em queimação, sem edema hemorrágico |
| Intoxicação por warfarina | Sem mordedura, anamnese positiva para rodenticida |`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Bothrops Moderado

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____

1. Soro Antibotrópico (SAB) 8 ampolas
   Diluir em 250 mL SF 0,9%
   Infundir EV em 2h (iniciar lento 10 min)
   → Ter adrenalina 0,5 mg IM disponível à beira do leito

2. Dipirona 1 g EV 6/6h (se dor intensa)
   ou Tramadol 50 mg EV 8/8h (diluído em 100 mL SF, infundir em 30 min)

3. SF 0,9% 125 mL/h EV (hidratação de manutenção)
   Ajustar para débito urinário > 1 mL/kg/h

4. Ranitidina 50 mg EV 8/8h

5. Monitorização: PA, FC, SpO₂, débito urinário horários
   TC Lee-White: ao chegar, 6h e 24h pós-soroterapia

CONTATO: CIATox 0800 722 6001
\`\`\`

---

## Prescrição Modelo — Crotalus Moderado

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____

1. Soro Antibotrópico-Crotálico (SABC) 10 ampolas
   Diluir em 250 mL SF 0,9%
   Infundir EV em 2h

2. Hidratação vigorosa: SF 0,9% 500 mL/h (meta: DU 200–300 mL/h)
   Ajustar conforme resposta

3. Dipirona 1 g EV 6/6h

4. Monitorização: CK seriada (6h, 24h), creatinina, débito urinário,
   função respiratória, espirometria beira do leito a cada 4h

CONTATO: CIATox 0800 722 6001
\`\`\``,
    },
    {
      id: "references",
      title: "Referências Bibliográficas",
      content: `## Referências

Ministério da Saúde / SVS. **Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos.** 2ª ed. Brasília: MS; 2001. (Referência nacional vigente)

Ministério da Saúde. **Guia de Vigilância em Saúde — Volume 3.** 6ª ed. Brasília: MS; 2023. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6ed_v3.pdf

Warrell DA. **Snake bite.** Lancet. 2010;375(9708):77–88.

WHO. **Guidelines for the Management of Snakebites.** 2nd ed. Geneva: WHO; 2016.

CIATox — Centro de Informação e Assistência Toxicológica. **0800 722 6001** (24h, gratuito).

Bochner R, Fiszon JT, Machado C. **Perfil epidemiológico dos acidentes com animais peçonhentos no Brasil.** Rev Pan-Amaz Saude. 2014.

Jorge MT, Ribeiro LA. **Epidemiologia e quadro clínico do acidente ofídico.** In: Cardoso JLC et al. Animais Peçonhentos no Brasil. 2ª ed. São Paulo: Sarvier; 2009.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. INTOXICAÇÃO POR OPIOIDES — Naloxona
// ─────────────────────────────────────────────────────────────────────────────
export const protocolIntoxicacaoOpioide: EmergencyProtocol = {
  id: "intoxicacao-opioide-naloxona",
  title: "Intoxicação por Opioides — Naloxona e Suporte",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: [
    "opioide", "naloxona", "heroína", "morfina", "fentanil", "codeína",
    "oxicodona", "tramadol", "overdose", "depressão respiratória",
    "toxicologia", "antídoto",
  ],
  sections: [
    {
      id: "intro",
      title: "Introdução",
      content: `## Intoxicação por Opioides

Emergência com mortalidade crescente no Brasil e no mundo. A **tríade clássica** (miose + depressão respiratória + rebaixamento de consciência) permite diagnóstico clínico imediato — não espere exames para tratar.

**Principais agentes no contexto brasileiro:**
| Agente | Via | Contexto |
|---|---|---|
| Morfina | EV, VO, SC | Hospitalar, dor crônica |
| Codeína | VO | Analgesia, xaropes |
| Tramadol | VO, EV | Muito prescrito — doses altas causam convulsão |
| Fentanil | EV, transdérmico, intranasal | Hospitalar, anestesia |
| Heroína | EV, inalada | Uso recreativo |
| Metadona | VO | Programa de substituição, dor crônica |
| Oxicodona | VO | Dor crônica |
| Buprenorfina | SL, transdérmico | Programa de substituição |

> ⚠️ **Atenção fentanil:** 100x mais potente que morfina. Doses mínimas podem causar apneia fatal. Naloxona pode precisar de doses repetidas.

> ⚠️ **Disclaimer:** Ferramenta de apoio à decisão clínica. Não substitui avaliação médica individualizada.`,
    },
    {
      id: "def",
      title: "Definição e Mecanismo",
      content: `## Definição

Síndrome clínica resultante do excesso de atividade em receptores opioides (μ, κ, δ), levando à depressão do SNC e do centro respiratório.

## Tríade Clínica

1. **Miose bilateral** (pupilas puntiformes)
2. **Depressão respiratória** (FR < 12 ipm, padrão irregular, apneia)
3. **Rebaixamento de consciência** (sonolência → coma)

**Atenção:** miose pode estar ausente em:
- Intoxicação mista (opioides + estimulantes)
- Fentanil (midríase paradoxal em altas doses)
- Meperidina (midríase por metabólito convulsivante)

## Farmacocinética — alerta clínico

| Opioide | Meia-vida | Risco de re-narcotização |
|---|---|---|
| Morfina | 2–4h | Moderado |
| Tramadol | 5–7h | Alto |
| Metadona | 24–36h | **Muito alto** — observação prolongada |
| Fentanil TD | 17–27h (patch) | Alto após remoção tardia |
| Buprenorfina | 24–60h | Alto |`,
    },
    {
      id: "screening",
      title: "Identificação e Triagem",
      content: `## Suspeitar de Intoxicação por Opioides

**Historia clínica sugestiva:**
- Encontrado inconsciente com agulhas, patches transdérmicos ou frascos de medicamento
- Usuário conhecido de opioides ou programa de substituição
- Pós-operatório imediato com excesso de opioide
- Criança com acesso a medicação de adulto (metadona, patches)

**Exame físico:**
- Pupilas: miose bilateral (puntiforme) — sinal mais específico
- Respiração: FR < 12 ipm, superficial, irregular, Cheyne-Stokes ou apneia
- Consciência: Glasgow < 12, não responsivo ao estímulo verbal
- Cianose ou SpO₂ < 94%
- Pele: fria, úmida (metadona/heroína) ou rubor (morfina IV)
- Cicatrizes de venopunção, track marks

**Teste diagnóstico-terapêutico:**
Naloxona — reversão confirma diagnóstico. Ausência de resposta após 2 mg → reconsiderar diagnóstico.`,
    },
    {
      id: "diagnosis",
      title: "Diagnóstico",
      content: `## Diagnóstico Clínico

O diagnóstico é **clínico** — a tríade é suficiente para iniciar tratamento.

## Exames Complementares

**Não atrasar naloxona por exames.**

| Exame | Objetivo |
|---|---|
| Glicemia capilar | Excluir hipoglicemia concomitante |
| Gasometria arterial | Avaliar hipoventilação (PaCO₂ ↑, pH ↓) |
| ECG | QTc prolongado (metadona > 500 ms = risco) |
| Toxicológico urinário | Confirmar/identificar agente (não altera conduta imediata) |
| Paracetamol sérico | Se ingestão mista suspeita |
| Eletrólitos | Hipocalemia com tramadol |

## Diagnóstico Diferencial da Tríade

| Condição | Como diferenciar |
|---|---|
| Hipoglicemia | Glicemia capilar, sem miose fixa |
| AVC/AVCI | TC crânio, déficit focal, pupilas assimétricas |
| Encefalopatia hepática | Fetor hepático, asterixis, bilirrubina |
| Intoxicação por BZD | Sem miose tão intensa, FR menos comprometida |
| Trauma craniano | História, sinais de trauma, pupila desigual |
| Hipóxia por outra causa | SpO₂ muito baixa, sem miose, história |`,
    },
    {
      id: "conduct",
      title: "Conduta Imediata",
      content: `## Algoritmo de Atendimento

### Passo 1 — Reconhecer e chamar ajuda (0–2 min)
- Avaliar responsividade e respiração
- Chamar time de emergência + desfibrilador
- Posicionar em decúbito lateral se inconsciente e respirando

### Passo 2 — Vias aéreas e oxigênio (2–5 min)
- Abertura de via aérea (head-tilt / chin-lift ou jaw thrust)
- Oxigênio 15 L/min por máscara não-reinalante
- Se apneia: ventilação BVM imediata — não aguardar naloxona
- Aspirar secreções se necessário

### Passo 3 — Naloxona (administrar imediatamente)
*Ver seção de tratamento para doses detalhadas*

### Passo 4 — Acesso venoso e glicemia
- Glicemia capilar imediata
- Se hipoglicemia: glicose 50% 40 mL IV
- Tiamina 100 mg IV (se etilismo ou desnutrição suspeita — antes da glicose)

### Passo 5 — Monitorização e decisão
- ECG de 12 derivações (metadona → QTc)
- Se sem resposta após naloxona: reconsiderar diagnóstico
- Decidir: alta + observação x internação x UTI`,
    },
    {
      id: "treatment",
      title: "Tratamento — Naloxona",
      content: `## Naloxona — Antídoto Específico

### Vias de administração e doses

**Via Intravenosa (preferencial em ambiente hospitalar):**
- Dose inicial: **0,4 mg IV** (1 ampola)
- Se sem resposta em 2–3 min: repetir 0,4 mg IV
- Máximo dose inicial: **2 mg** (5 ampolas)
- Se sem resposta com 2 mg: reconsiderar diagnóstico

**Via Intramuscular (pré-hospitalar, sem acesso venoso):**
- 0,4–2 mg IM (vasto lateral ou deltoide)
- Início de ação: 5–10 min (mais lento que IV)

**Via Intranasal (naloxona spray — quando disponível):**
- 4 mg intranasal (2 mg/narina)
- Repetir 4 mg após 2–3 min se sem resposta

**Via Endotraqueal (último recurso):**
- 2x a dose IV, diluída em 10 mL SF

### Meia-vida da Naloxona × Opioides Longos

**A naloxona tem meia-vida curta (30–90 min).**
Opioides de ação longa (metadona, buprenorfina, fentanil TD) têm meia-vida MUITO maior — risco de **re-narcotização.**

### Infusão contínua de Naloxona (opioides de ação longa)

**Quando indicar:** Re-narcotização após dose em bolus OU intoxicação por metadona/buprenorfina/fentanil TD.

**Como preparar:**
- 2/3 da dose de reversão eficaz → infundir por hora
- Diluir em SF 0,9% 100 mL, correr em 1h (repetir conforme resposta)
- Exemplo: se 0,8 mg reverteu → infundir 0,5–0,6 mg/h

### Cuidados com a reversão

⚠️ **Reverter gradualmente** — evitar síndrome de abstinência aguda em dependentes:
- Diluir 0,4 mg em 10 mL SF → administrar 1 mL (0,04 mg) a cada 2 min
- Objetivo: FR > 12 ipm e responsividade — não consciência plena imediata

⚠️ **Não superestimar a reversão** em pacientes com dor crônica usando opioides terapêuticos — risco de dor intratável aguda.

### Tramadol — alerta especial
- Pode causar **convulsão** (metabólito normeperidina-like)
- Naloxona pode precipitar convulsão ao reverter efeito sedativo
- Usar com cautela: 0,1–0,2 mg IV titulado
- Tratar convulsão com BZD se necessário

---

## Critérios para Intubação Orotraqueal

- Apneia sem resposta à naloxona
- SpO₂ < 88% refratária ao oxigênio
- GCS ≤ 8 persistente após naloxona
- Vômito com risco de broncoaspiração e sem reflexo de proteção de via aérea
- Intoxicação por agente sem antídoto eficaz (carfentanila, fentanil análogos)

---

## Alta e Redução de Danos

**Critérios mínimos para observação ambulatorial:**
- Pelo menos 4–6h de observação após naloxona
- Metadona/buprenorfina: **12–24h de observação**
- FR > 14 ipm, SpO₂ > 95%, GCS 15, ambulando

**Orientações na alta:**
- Informar sobre risco de re-narcotização
- Oferecer naloxona domiciliar (onde disponível)
- Encaminhar para programa de atenção ao usuário de drogas`,
    },
    {
      id: "followup",
      title: "Monitorização e Internação",
      content: `## Critérios de Internação

| Situação | Destino |
|---|---|
| Resposta completa à naloxona, opioide curto, sem comorbidade | Alta após 4h observação |
| Resposta à naloxona + opioide longo (metadona, buprenorfina, fentanil TD) | Internação 12–24h + infusão contínua naloxona |
| Sem resposta completa à naloxona | Internação + investigação |
| Apneia / IOT realizada | UTI |
| Intoxicação mista com BZD ou álcool | Internação mínimo 12h |
| Tentativa de suicídio | Internação + avaliação psiquiátrica |

## Monitorização Durante Observação

- SpO₂, FR, GCS, PA a cada 30 min nas primeiras 4h
- Repetir ECG se QTc > 450 ms (metadona)
- Glicemia se alteração de consciência recorrente

## Avaliação Psiquiátrica

- Indicada em todos os casos de uso não-terapêutico
- Especialmente em tentativa de suicídio
- Avaliar elegibilidade para programa de redução de danos / substituição`,
    },
    {
      id: "prescriptions",
      title: "Prescrições",
      content: `## Prescrição Modelo — Intoxicação por Opioide Adulto

\`\`\`
PACIENTE: _____ PESO: _____ kg   DATA: _____

1. O₂ 15 L/min máscara não-reinalante (ajustar para SpO₂ > 94%)

2. Naloxona 0,4 mg IV IMEDIATO
   Se sem resposta em 2–3 min: repetir 0,4 mg IV
   (máximo 2 mg na 1ª abordagem)

3. SF 0,9% 500 mL EV em 1h (hidratação de manutenção)

4. Tiamina 100 mg IV (se etilismo ou desnutrição)

5. SE RE-NARCOTIZAÇÃO / OPIOIDE LONGO:
   Naloxona _____ mg/h EV em infusão contínua
   (2/3 da dose eficaz de reversão por hora)
   Preparar: _____ mg + 100 mL SF 0,9% → correr em 1h

6. Monitorização: ECG, SpO₂ contínuo, FR e GCS a cada 30 min

CONTATO: CIATox 0800 722 6001
\`\`\``,
    },
    {
      id: "references",
      title: "Referências Bibliográficas",
      content: `## Referências

SAMHSA. **Opioid Overdose Prevention Toolkit.** Substance Abuse and Mental Health Services Administration. Rockville, MD: SAMHSA; 2023.

Gomes T et al. **Naloxone dispensing and overdose death among people prescribed opioids.** NEJM. 2018.

Boyer EW. **Management of opioid analgesic overdose.** NEJM. 2012;367:146–155.

Vowles KE et al. **Rates of opioid misuse, abuse, and addiction in chronic pain.** Pain. 2015;156(4):569–576.

Ministério da Saúde / SVS. **Nota Técnica sobre uso de naloxona.** Brasília: MS; 2023.

American College of Emergency Physicians (ACEP). **Clinical Policy: Critical Issues in the Management of Patients Presenting to the Emergency Department with Opioid Toxicity.** Ann Emerg Med. 2021.

WHO. **Clinical Guidelines for Withdrawal Management and Treatment of Drug Dependence in Closed Settings.** Geneva: WHO; 2009.

Kapur BM, Lala PK, Shaw JL. **Pharmacogenetics of opioid dependence and addiction.** Drug Alcohol Depend. 2014.`,
    },
  ],
};
