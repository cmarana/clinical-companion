import type { FullProtocol } from "./types";

export const neuroFullProtocols6: FullProtocol[] = [
  {
    id: "fp-guillain-barre",
    title: "Síndrome de Guillain-Barré",
    categoryId: "neurology",
    category: "neurology",
    tags: ["Guillain-Barré", "polineuropatia", "imunoglobulina", "plasmaférese", "paralisia"],
    sections: [
      { id: "intro", title: "Introdução", content: `Síndrome de Guillain-Barré (SGB) é polirradiculoneuropatia aguda autoimune, emergência neurológica.` },
      { id: "def", title: "Definição", content: `Polirradiculoneuropatia desmielinizante inflamatória aguda (AIDP), com variantes axonais (AMAN, AMSAN) e Miller Fisher.` },
      { id: "etiology", title: "Etiologia", content: `Pós-infecciosa (2/3 dos casos): Campylobacter jejuni, CMV, EBV, Zika, influenza, COVID-19. Mimetismo molecular com gangliosídeos.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Fraqueza ascendente simétrica (inicio distal → proximal)
- Hiporreflexia/arreflexia
- Dor neuropática
- Parestesias distais
- Disfunção autonômica (taquicardia, labilidade pressórica)
- Insuficiência respiratória (30%)
- Paralisia facial bilateral (variante)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**LCR:** dissociação albumino-citológica (proteína ↑, celularidade normal) — pode ser normal na 1ª semana
**ENMG:** padrão desmielinizante (latências prolongadas, bloqueio de condução, dispersão temporal)
**Espirometria seriada:** CVF a cada 4-6h — IOT se CVF <20mL/kg ou <1L
**Anticorpos:** anti-GQ1b (Miller Fisher), anti-GM1 (AMAN)` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Imunoglobulina IV 0.4g/kg/dia por 5 dias** (preferida)
**OU Plasmaférese** (5 sessões em 10-14 dias)
**NÃO usar corticoide** (sem benefício, pode piorar)
**Suporte ventilatório:** IOT se CVF <20mL/kg, PIMáx < -30cmH2O, ou FR >30
**Profilaxia de TVP:** HBPM
**Dor neuropática:** gabapentina, pregabalina
**Reabilitação precoce**` }
    ]
  },\n  {
    id: "fp-miastenia-gravis-crise",
    title: "Crise Miastênica",
    categoryId: "neurology",
    category: "neurology",
    tags: ["miastenia", "crise", "insuficiência respiratória", "imunoglobulina", "plasmaférese"],
    sections: [
      { id: "intro", title: "Introdução", content: `Crise miastênica é emergência com insuficiência respiratória por fraqueza muscular em MG.` },
      { id: "def", title: "Definição", content: `Exacerbação da miastenia gravis com insuficiência respiratória requerendo ventilação assistida ou IOT. Mortalidade: 4-8%.` },
      { id: "etiology", title: "Etiologia", content: `Gatilhos: infecção (mais comum), cirurgia, medicamentos (aminoglicosídeos, BCC, magnésio, betabloqueadores), redução/suspensão de tratamento, estresse.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dispneia progressiva, ortopneia
- Fraqueza bulbar: disfagia, disartria
- Fraqueza cervical (queda da cabeça)
- Fraqueza generalizada
- CVF em queda rápida` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Espirometria à beira-leito:** CVF <20mL/kg (regra 20-30-40)
**PIMáx < -30cmH₂O e PEMáx <40cmH₂O**
**Gasometria:** hipercapnia é sinal tardio
**Diferenciar de crise colinérgica:** excesso de anticolinesterásico (miose, sialorreia, bradicardia)` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**IOT precoce** (não esperar hipercapnia)
**Plasmaférese ou IVIG 0.4g/kg/dia por 5 dias**
**Suspender piridostigmina** temporariamente (secreções)
**Corticoide IV** com cautela (pode piorar inicialmente — iniciar sob monitorização)
**Tratar gatilho** (ATB se infecção)
**Evitar drogas que pioram MG:** aminoglicosídeos, magnésio, BCC` }
    ]
  },\n  {
    id: "fp-encefalite-autoimune",
    title: "Encefalite Autoimune (anti-NMDA)",
    categoryId: "neurology",
    category: "neurology",
    tags: ["encefalite", "autoimune", "anti-NMDA", "teratoma", "psicose"],
    sections: [
      { id: "intro", title: "Introdução", content: `Encefalite anti-receptor NMDA é a encefalite autoimune mais comum, predomina em mulheres jovens.` },
      { id: "def", title: "Definição", content: `Encefalite mediada por anticorpos contra subunidade NR1 do receptor NMDA, frequentemente paraneoplásica (teratoma ovariano).` },
      { id: "etiology", title: "Etiologia", content: `Anticorpos anti-NR1 do receptor NMDA. Associação com teratoma ovariano (em até 50% das mulheres). Pode ser pós-infecciosa (herpes).` },
      { id: "clinical", title: "Apresentação Clínica", content: `**Fases:**
1. Prodrômica: cefaleia, febre (tipo viral)
2. Psiquiátrica: psicose, alucinações, agitação, ansiedade
3. Neurológica: convulsões, discinesias orofaciais, disautonomia, rebaixamento
4. Hipoventilação central (UTI)
5. Recuperação lenta (semanas a meses)` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Anti-NMDA no LCR** (mais sensível que soro)
**RMC:** normal em 50%, ou hiperintensidade em FLAIR em hipocampo/córtex
**EEG:** extreme delta brush (padrão sugestivo)
**TC/RM pelve:** pesquisar teratoma ovariano
**LCR:** pleocitose linfocítica, proteína normal/leve elevação` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1ª linha:** Metilprednisolona 1g/dia IV por 5d + IVIG 0.4g/kg/dia por 5d + Plasmaférese
**2ª linha (se sem resposta em 2 semanas):** Rituximabe 375mg/m² semanal × 4 ou Ciclofosfamida
**Remoção do teratoma:** se presente, acelera recuperação
**Antiepilépticos:** para convulsões
**Suporte em UTI:** se disautonomia/hipoventilação` }
    ]
  },\n  {
    id: "fp-esclerose-multipla-surto",
    title: "Surto de Esclerose Múltipla",
    categoryId: "neurology",
    category: "neurology",
    tags: ["esclerose múltipla", "surto", "corticoide", "desmielinização", "RMC"],
    sections: [
      { id: "intro", title: "Introdução", content: `Surtos de EM são episódios agudos de disfunção neurológica por desmielinização do SNC.` },
      { id: "def", title: "Definição", content: `Episódio de disfunção neurológica com duração >24h, na ausência de febre/infecção, atribuível a desmielinização inflamatória do SNC.` },
      { id: "etiology", title: "Etiologia", content: `Doença autoimune desmielinizante do SNC. Linfócitos T e B atacam mielina. Fatores: genética (HLA-DRB1), deficiência de vitamina D, EBV, tabagismo.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Neurite óptica (dor ocular, perda visual unilateral)
- Mielite transversa (paraparesia, nível sensitivo, disfunção esfincteriana)
- Síndrome de tronco cerebral (diplopia, nistagmo, vertigem)
- Síndrome cerebelar (ataxia)
- Sinal de Lhermitte` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios de McDonald 2017:** disseminação no espaço e no tempo
**RMC:** lesões periventriculares, justacorticais, infratentoriais, medulares (T2/FLAIR + gadolínio)
**LCR:** bandas oligoclonais (95%), índice de IgG elevado
**PEV:** atraso de latência (neurite óptica prévia)` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Surto:**
- Metilprednisolona 1g IV/dia por 3-5 dias
- Se refratário: plasmaférese (5 sessões)

**Prevenção de surtos (DMDs):**
- Alta eficácia: Natalizumabe, Ocrelizumabe, Fingolimod, Cladribina
- Moderada: Fumarato de dimetila, Teriflunomida
- Interferon-beta, Acetato de glatirâmer (1ª linha histórica)
**Reabilitação multidisciplinar**` }
    ]
  },\n  {
    id: "fp-neuralgia-trigeminal",
    title: "Neuralgia do Trigêmeo",
    categoryId: "neurology",
    category: "neurology",
    tags: ["neuralgia", "trigêmeo", "carbamazepina", "dor facial", "paroxismo"],
    sections: [
      { id: "intro", title: "Introdução", content: `Neuralgia do trigêmeo é a causa mais comum de dor facial paroxística, intensamente dolorosa.` },
      { id: "def", title: "Definição", content: `Dor facial paroxística unilateral, lancinante, em choque, no território do nervo trigêmeo (V2/V3 > V1), durando segundos a 2 minutos.` },
      { id: "etiology", title: "Etiologia", content: `**Clássica:** compressão vascular (artéria cerebelar superior) na zona de entrada da raiz. **Secundária:** EM, tumor, malformação vascular. **Idiopática.**` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor em facada/choque elétrico, unilateral
- Duração: 1 segundo a 2 minutos
- Territórios V2 (maxilar) e V3 (mandibular) mais comuns
- Gatilhos: mastigar, falar, lavar rosto, vento frio, escovar dentes
- Períodos de remissão variáveis` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Clínico:** história típica é suficiente
**RMC com protocolo para trigêmeo:** excluir causas secundárias (tumor, EM, compressão vascular identificável)
**ENMG facial:** se suspeita de neuropatia` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1ª linha:** Carbamazepina 100-200mg 12/12h (titular até 1200mg/dia) ou Oxcarbazepina 300mg 12/12h
**2ª linha:** Lamotrigina, Baclofeno, Gabapentina
**Cirúrgico (refratário):**
- Descompressão microvascular (Janetta) — mais eficaz a longo prazo
- Radiocirurgia (Gamma Knife)
- Rizotomia percutânea` }
    ]
  },\n  {
    id: "fp-cefaleia-cluster",
    title: "Cefaleia em Salvas (Cluster)",
    categoryId: "neurology",
    category: "neurology",
    tags: ["cefaleia em salvas", "cluster", "oxigênio", "sumatriptano", "trigêmino-autonômica"],
    sections: [
      { id: "intro", title: "Introdução", content: `Cefaleia em salvas é a cefaleia primária mais intensa, conhecida como 'cefaleia suicida'.` },
      { id: "def", title: "Definição", content: `Cefaleia trigêmino-autonômica com ataques unilaterais de dor excruciante periorbital/temporal, durando 15-180 minutos, com sinais autonômicos ipsilaterais.` },
      { id: "etiology", title: "Etiologia", content: `Ativação hipotalâmica com padrão circadiano. Gatilhos: álcool (durante clusters), histamina, nitroglicerina. Predomina em homens (3:1).` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor unilateral periorbital/temporal EXCRUCIANTE
- Duração: 15-180 min
- Frequência: 1-8 crises/dia
- **Sinais autonômicos ipsilaterais:** lacrimejamento, congestão nasal, rinorreia, miose, ptose, edema palpebral
- **Agitação motora** (diferente da migrânea)
- Padrão em salvas: clusters de semanas/meses com remissões` },
      { id: "diagnosis", title: "Diagnóstico", content: `**Critérios ICHD-3:** ≥5 ataques com dor intensa unilateral + ≥1 sinal autonômico ipsilateral + agitação
**RMC:** excluir causas secundárias (lesão hipotalâmica, dissecção, tumor)
**Periodicidade e sazonalidade** são pistas diagnósticas` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Crise (abortivo):**
- **O₂ 100% a 12-15L/min por máscara non-rebreather por 15-20min** (eficácia >78%)
- **Sumatriptano 6mg SC** (mais rápido) ou nasal 20mg
- Zolmitriptano nasal 5mg

**Profilaxia (transição):**
- Verapamil 240-960mg/dia (1ª linha) — ECG seriado
- Prednisona 60-80mg/dia por 5d → desmame em 2-3 semanas (ponte)
- Lítio 600-1200mg/dia
- Topiramato, galcanezumabe (anti-CGRP)` }
    ]
  },\n  {
    id: "fp-status-epilepticus-refratario",
    title: "Status Epilepticus Refratário e Super-Refratário",
    categoryId: "neurology",
    category: "neurology",
    tags: ["status epilepticus", "refratário", "coma induzido", "midazolam", "propofol"],
    sections: [
      { id: "intro", title: "Introdução", content: `Status epilepticus refratário (SER) ocorre quando crises persistem apesar de 2 linhas de tratamento.` },
      { id: "def", title: "Definição", content: `Crises que não respondem a benzodiazepínico (1ª linha) E antiepiléptico de 2ª linha (fenitoína, levetiracetam, valproato). Super-refratário: persiste >24h após início de anestesia.` },
      { id: "etiology", title: "Etiologia", content: `Causas: lesão estrutural (AVC, tumor, TCE), metabólica, infecciosa (encefalite), autoimune (anti-NMDA), abstinência, intoxicação.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Crises contínuas ou recorrentes sem recuperação
- Pode ser convulsivo ou não convulsivo (EEG essencial)
- Disfunção autonômica
- Risco de lesão neuronal progressiva` },
      { id: "diagnosis", title: "Diagnóstico", content: `**EEG contínuo:** obrigatório para diagnóstico e monitorização de resposta
**Exames:** TC/RMC, LCR, toxicológico, eletrólitos, glicemia, autoanticorpos
**Monitorização:** PAM, SpO2, EtCO2, temperatura, EEG contínuo` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**3ª linha — Coma induzido:**
- Midazolam: 0.2mg/kg bolus → 0.1-0.4mg/kg/h (alvo: supressão-surto no EEG)
- Propofol: 2mg/kg bolus → 30-200mcg/kg/min
- Tiopental: 3-5mg/kg bolus → 3-5mg/h

**Super-refratário:**
- Cetamina infusão contínua
- Imunossupressão se autoimune (IVIG, plasmaférese, rituximabe)
- Dieta cetogênica
- Hipotermia terapêutica
- Electroconvulsoterapia (ECT) — última linha` }
    ]
  },\n  {
    id: "fp-mielopatia-aguda",
    title: "Mielopatia Aguda Não-Traumática",
    categoryId: "neurology",
    category: "neurology",
    tags: ["mielopatia", "medula", "mielite transversa", "compressão", "paraplegia"],
    sections: [
      { id: "intro", title: "Introdução", content: `Mielopatia aguda é emergência neurológica — diagnóstico precoce previne déficit permanente.` },
      { id: "def", title: "Definição", content: `Disfunção medular aguda/subaguda de causa não traumática, manifestando-se com déficit motor, sensitivo e autonômico abaixo do nível da lesão.` },
      { id: "etiology", title: "Etiologia", content: `**Compressiva:** metástase vertebral/epidural (mais comum), abscesso epidural, hérnia discal, hematoma epidural.
**Não compressiva:** mielite transversa, NMO (neuromielite óptica), EM, isquemia medular, deficiência de B12, HIV.` },
      { id: "clinical", title: "Apresentação Clínica", content: `- Fraqueza progressiva em MMII (paraparesia/plegia)
- Nível sensitivo definido
- Disfunção esfincteriana (retenção urinária precoce)
- Dor dorsal/lombar (compressiva)
- Evolução em horas-dias` },
      { id: "diagnosis", title: "Diagnóstico", content: `**RMC de coluna URGENTE** (com gadolínio): padrão-ouro
- Compressão extrínseca vs lesão intramedular
**LCR:** se não compressiva (pleocitose, bandas oligoclonais, anti-AQP4)
**Anticorpos:** anti-AQP4 (NMO), anti-MOG
**Laboratório:** B12, HIV, VDRL, hemograma` },
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Compressão medular (metástase/abscesso):**
- Dexametasona 10mg IV bolus → 4mg 6/6h
- Cirurgia descompressiva URGENTE (<24-48h)
- Radioterapia (se neoplásica)

**Mielite transversa:**
- Metilprednisolona 1g IV/dia por 3-5 dias
- Plasmaférese se refratária
- Investigar NMO (iniciar imunossupressão precoce)

**Abscesso epidural:** drenagem cirúrgica + ATB IV` }
    ]
  }
];
