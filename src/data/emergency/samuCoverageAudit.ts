/**
 * SAMU 192 — Auditoria interna de cobertura clínica
 *
 * Esta auditoria mapeia os temas críticos da matriz SAMU 192 contra os
 * protocolos clínicos já existentes no Pulso (allEmergencyProtocols).
 *
 * NÃO é um módulo clínico para o usuário final. Serve apenas para orientar
 * a próxima etapa de criação/revisão de conteúdo. Não cria, não duplica e
 * não substitui nenhum protocolo existente.
 *
 * Status:
 *  - "Coberto": já existe protocolo clínico adequado no Pulso.
 *  - "Parcial": existe protocolo relacionado, mas precisa ser revisado/ampliado.
 *  - "Ausente": nenhum protocolo clínico equivalente foi encontrado.
 *  - "Operacional / não aplicável": tema é operacional do SAMU, não deve virar protocolo clínico.
 */

export type SamuCoveragePriority = "Crítica" | "Alta" | "Média" | "Baixa";
export type SamuCoverageStatus =
  | "Coberto"
  | "Parcial"
  | "Ausente"
  | "Operacional / não aplicável";
export type SamuCoverageAction =
  | "Nenhuma"
  | "Revisar protocolo existente"
  | "Criar novo protocolo"
  | "Não exibir como protocolo clínico";

export interface SamuCoverageAuditItem {
  theme: string;
  priority: SamuCoveragePriority;
  categoryId: string;
  expectedSamuCodes: string[];
  status: SamuCoverageStatus;
  matchedProtocolIds: string[];
  matchedProtocolTitles: string[];
  actionNeeded: SamuCoverageAction;
  notes: string;
}

export const samuCoverageAudit: SamuCoverageAuditItem[] = [
  // ───── Avaliação inicial ─────
  {
    theme: "Avaliação primária do paciente clínico",
    priority: "Alta",
    categoryId: "resuscitation",
    expectedSamuCodes: ["BC1", "AC1"],
    status: "Coberto",
    matchedProtocolIds: ["samu-avaliacao-primaria-clinica", "atendimento-abcde"],
    matchedProtocolTitles: [
      "Avaliação Primária do Paciente Clínico",
      "Atendimento Inicial — ABCDE",
    ],
    actionNeeded: "Nenhuma",
    notes:
      "Protocolo dedicado de avaliação primária clínica (não-trauma) adicionado via lote SAMU.",
  },
  {
    theme: "Avaliação secundária do paciente clínico",
    priority: "Média",
    categoryId: "resuscitation",
    expectedSamuCodes: ["BC2", "AC2"],
    status: "Coberto",
    matchedProtocolIds: ["samu-avaliacao-secundaria-clinica", "atendimento-abcde"],
    matchedProtocolTitles: [
      "Avaliação Secundária do Paciente Clínico",
      "Atendimento Inicial — ABCDE",
    ],
    actionNeeded: "Nenhuma",
    notes: "Cobertura SAMPLE/OPQRST adicionada via lote SAMU.",
  },

  // ───── Via aérea e respiração ─────
  {
    theme: "OVACE / obstrução de via aérea",
    priority: "Crítica",
    categoryId: "respiratory",
    expectedSamuCodes: ["BC4", "BPed4"],
    status: "Coberto",
    matchedProtocolIds: ["samu-ovace-adulto", "airway-obstruction-foreign-body"],
    matchedProtocolTitles: [
      "OVACE — Obstrução de Via Aérea no Adulto (SAMU)",
      "Obstrução de Via Aérea / Corpo Estranho",
    ],
    actionNeeded: "Nenhuma",
    notes: "Cobre adulto e pediátrico. Protocolo SAMU dedicado adicionado.",
  },
  {
    theme: "Parada respiratória no adulto",
    priority: "Crítica",
    categoryId: "respiratory",
    expectedSamuCodes: ["BC3", "AC3"],
    status: "Coberto",
    matchedProtocolIds: ["samu-parada-respiratoria-adulto", "em-irpa", "em-pcr-adulto"],
    matchedProtocolTitles: [
      "Parada Respiratória no Adulto (SAMU)",
      "Insuficiência Respiratória Aguda",
      "PCR Adulto",
    ],
    actionNeeded: "Nenhuma",
    notes: "Protocolo SAMU específico de parada respiratória isolada adicionado.",
  },
  {
    theme: "PCR adulto / RCP",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["BC5", "AC5"],
    status: "Coberto",
    matchedProtocolIds: ["em-pcr-adulto", "em-ritmo-chocavel", "em-ritmo-nao-chocavel"],
    matchedProtocolTitles: [
      "PCR Adulto",
      "Ritmo Chocável (FV/TVSP)",
      "Ritmo Não Chocável (AESP/Assistolia)",
    ],
    actionNeeded: "Nenhuma",
    notes: "Algoritmo ACLS completo já presente.",
  },
  {
    theme: "Cuidados pós-PCR",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["AC6"],
    status: "Coberto",
    matchedProtocolIds: ["samu-cuidados-pos-pcr-adulto", "em-pos-pcr"],
    matchedProtocolTitles: [
      "Cuidados Pós-PCR no Adulto (SAMU)",
      "Pós-PCR",
    ],
    actionNeeded: "Nenhuma",
    notes: "Cuidados pós-parada cobertos por protocolo SAMU dedicado + Pós-PCR existente.",
  },
  {
    theme: "Via aérea difícil",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["AC7", "AC9"],
    status: "Coberto",
    matchedProtocolIds: ["em-va-dificil", "em-cricotireoidostomia"],
    matchedProtocolTitles: ["Via Aérea Difícil", "Cricotireoidostomia"],
    actionNeeded: "Nenhuma",
    notes: "Algoritmo + via cirúrgica disponíveis.",
  },
  {
    theme: "Intubação orotraqueal",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["AC7"],
    status: "Coberto",
    matchedProtocolIds: ["em-iot"],
    matchedProtocolTitles: ["Intubação Orotraqueal (IOT)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Sequência rápida de intubação",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["AC8"],
    status: "Coberto",
    matchedProtocolIds: ["em-sri"],
    matchedProtocolTitles: ["Sequência Rápida de Intubação (SRI)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Insuficiência respiratória aguda",
    priority: "Crítica",
    categoryId: "respiratory",
    expectedSamuCodes: ["BC6", "AC10"],
    status: "Coberto",
    matchedProtocolIds: ["em-irpa", "em-sdra", "em-vni", "em-vm-inicial"],
    matchedProtocolTitles: [
      "Insuficiência Respiratória Aguda",
      "Síndrome do Desconforto Respiratório Agudo (SDRA)",
      "Ventilação Não Invasiva (VNI)",
      "Ventilação Mecânica Inicial",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Asma grave",
    priority: "Crítica",
    categoryId: "respiratory",
    expectedSamuCodes: ["BC7", "AC11"],
    status: "Coberto",
    matchedProtocolIds: ["em-asma-grave"],
    matchedProtocolTitles: ["Asma Grave / Quase Fatal"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "DPOC exacerbado",
    priority: "Alta",
    categoryId: "respiratory",
    expectedSamuCodes: ["BC8", "AC12"],
    status: "Coberto",
    matchedProtocolIds: ["em-dpoc-exacerbado"],
    matchedProtocolTitles: ["DPOC Exacerbado"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Choque ─────
  {
    theme: "Choque indiferenciado",
    priority: "Crítica",
    categoryId: "sepsis",
    expectedSamuCodes: ["BC9", "AC13"],
    status: "Ausente",
    matchedProtocolIds: [],
    matchedProtocolTitles: [],
    actionNeeded: "Criar novo protocolo",
    notes:
      "Faltam um protocolo de abordagem do choque indiferenciado (RUSH/perfis hemodinâmicos) antes da classificação etiológica.",
  },
  {
    theme: "Choque séptico / sepse",
    priority: "Crítica",
    categoryId: "sepsis",
    expectedSamuCodes: ["BC10", "AC14"],
    status: "Coberto",
    matchedProtocolIds: ["sepse-choque-septico", "choque-septico-avancado", "sepse-grave-infecto"],
    matchedProtocolTitles: [
      "Sepse e Choque Séptico",
      "Choque Séptico Avançado",
      "Sepse Grave",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Choque anafilático / anafilaxia",
    priority: "Crítica",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["BC11", "AC15"],
    status: "Coberto",
    matchedProtocolIds: ["anafilaxia-emergencia", "choque-anafilatico"],
    matchedProtocolTitles: ["Anafilaxia", "Anafilaxia e Choque Anafilático"],
    actionNeeded: "Revisar protocolo existente",
    notes: "Existem dois protocolos parecidos — avaliar consolidação para evitar duplicidade.",
  },
  {
    theme: "Choque cardiogênico",
    priority: "Crítica",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["AC16"],
    status: "Coberto",
    matchedProtocolIds: ["em-choque-cardiogenico"],
    matchedProtocolTitles: ["Choque Cardiogênico"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Choque hipovolêmico / hemorrágico",
    priority: "Crítica",
    categoryId: "trauma",
    expectedSamuCodes: ["BC12", "AT5"],
    status: "Coberto",
    matchedProtocolIds: ["choque-hipovolemico", "choque-hemorragico", "hemorragia-traumatica"],
    matchedProtocolTitles: [
      "Choque Hipovolêmico",
      "Choque Hemorrágico",
      "Hemorragia Traumática",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes: "Há sobreposição entre hipovolêmico e hemorrágico — alinhar conteúdo.",
  },

  // ───── Cardiovascular ─────
  {
    theme: "Dor torácica",
    priority: "Crítica",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["BC13", "AC18"],
    status: "Coberto",
    matchedProtocolIds: ["em-dor-toracica"],
    matchedProtocolTitles: ["Dor Torácica"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Síndrome coronariana aguda / IAM",
    priority: "Crítica",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["AC17"],
    status: "Coberto",
    matchedProtocolIds: ["em-iam-supra", "em-iam-sem-supra"],
    matchedProtocolTitles: [
      "IAM com Supradesnivelamento de ST (IAMCSST)",
      "IAM sem Supra de ST",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Crise hipertensiva",
    priority: "Alta",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["AC19"],
    status: "Coberto",
    matchedProtocolIds: [
      "em-crise-hipertensiva",
      "em-emergencia-hipertensiva",
      "crise-hipertensiva-neuro",
    ],
    matchedProtocolTitles: [
      "Crise Hipertensiva",
      "Emergência Hipertensiva",
      "Emergência Hipertensiva Neurológica",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Neurológico ─────
  {
    theme: "AVC isquêmico",
    priority: "Crítica",
    categoryId: "neurological",
    expectedSamuCodes: ["BC14", "AC20"],
    status: "Coberto",
    matchedProtocolIds: ["avc-isquemico"],
    matchedProtocolTitles: ["AVCi — Acidente Vascular Cerebral Isquêmico"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "AVC hemorrágico",
    priority: "Crítica",
    categoryId: "neurological",
    expectedSamuCodes: ["AC21"],
    status: "Coberto",
    matchedProtocolIds: ["avc-hemorragico", "hsa"],
    matchedProtocolTitles: ["AVC Hemorrágico (HIP)", "Hemorragia Subaracnoidea (HSA)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Rebaixamento de consciência / coma",
    priority: "Crítica",
    categoryId: "neurological",
    expectedSamuCodes: ["BC15", "AC22"],
    status: "Coberto",
    matchedProtocolIds: ["rebaixamento-consciencia"],
    matchedProtocolTitles: ["Rebaixamento de Consciência"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Crise convulsiva / estado de mal epiléptico",
    priority: "Crítica",
    categoryId: "neurological",
    expectedSamuCodes: ["BC16", "AC23"],
    status: "Coberto",
    matchedProtocolIds: ["status-epilepticus"],
    matchedProtocolTitles: ["Estado de Mal Epiléptico"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Metabólico ─────
  {
    theme: "Hipoglicemia",
    priority: "Crítica",
    categoryId: "metabolic",
    expectedSamuCodes: ["BC17", "AC24"],
    status: "Coberto",
    matchedProtocolIds: ["hipoglicemia-grave", "hipoglicemia"],
    matchedProtocolTitles: ["Hipoglicemia Grave", "Hipoglicemia Grave"],
    actionNeeded: "Revisar protocolo existente",
    notes: "Há duplicidade de IDs/títulos — consolidar em um protocolo único.",
  },
  {
    theme: "Hiperglicemia / cetoacidose diabética",
    priority: "Alta",
    categoryId: "metabolic",
    expectedSamuCodes: ["AC25"],
    status: "Coberto",
    matchedProtocolIds: ["cetoacidose-diabetica", "hiperglicemia", "estado-hiperosmolar", "ehh-emergencia"],
    matchedProtocolTitles: [
      "Cetoacidose Diabética (CAD)",
      "Hiperglicemia na Emergência",
      "Estado Hiperglicêmico Hiperosmolar (EHH)",
      "Estado Hiperglicêmico Hiperosmolar",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes: "EHH aparece duplicado em dois arquivos.",
  },
  {
    theme: "Distúrbios do potássio",
    priority: "Alta",
    categoryId: "metabolic",
    expectedSamuCodes: ["AC26"],
    status: "Coberto",
    matchedProtocolIds: [
      "hipercalemia",
      "hipocalemia",
      "hipercalemia-emergencia",
      "hipocalemia-grave",
      "emergencia-hipocalemia-sintomatica-reposicao-ev",
    ],
    matchedProtocolTitles: [
      "Hipercalemia",
      "Hipocalemia",
      "Hipercalemia",
      "Hipocalemia Grave",
      "Hipocalemia Sintomática — Reposição EV (SAMU)",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes: "Duplicidade entre arquivos metabolic*.ts. Protocolo SAMU de reposição EV adicionado.",
  },
  {
    theme: "Distúrbios do sódio",
    priority: "Alta",
    categoryId: "metabolic",
    expectedSamuCodes: ["AC27"],
    status: "Coberto",
    matchedProtocolIds: [
      "hiponatremia",
      "hiponatremia-grave",
      "hipernatremia-grave",
      "samu-hiponatremia-grave-sintomatica",
      "emergencia-hipernatremia-grave-correcao-segura",
    ],
    matchedProtocolTitles: [
      "Hiponatremia Grave",
      "Hiponatremia Grave",
      "Hipernatremia Grave",
      "Hiponatremia Grave Sintomática (SAMU)",
      "Hipernatremia Grave — Correção Segura (SAMU)",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes: "Consolidar duplicatas. Protocolos SAMU de correção segura adicionados.",
  },

  // ───── Trauma ─────
  {
    theme: "Trauma / atendimento inicial ao politraumatizado",
    priority: "Crítica",
    categoryId: "trauma",
    expectedSamuCodes: ["BT1", "AT1"],
    status: "Coberto",
    matchedProtocolIds: ["atls-abordagem-inicial", "politrauma"],
    matchedProtocolTitles: [
      "ATLS — Abordagem Inicial ao Politrauma",
      "Politrauma — Manejo Integrado",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "TCE",
    priority: "Crítica",
    categoryId: "trauma",
    expectedSamuCodes: ["BT2", "AT2"],
    status: "Coberto",
    matchedProtocolIds: ["tce"],
    matchedProtocolTitles: ["Traumatismo Cranioencefálico (TCE)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Trauma torácico",
    priority: "Crítica",
    categoryId: "trauma",
    expectedSamuCodes: ["BT3", "AT3"],
    status: "Coberto",
    matchedProtocolIds: ["trauma-toracico", "em-pneumotorax-hipertensivo", "em-hemotorax"],
    matchedProtocolTitles: [
      "Trauma Torácico",
      "Pneumotórax Hipertensivo",
      "Hemotórax",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Trauma abdominal",
    priority: "Alta",
    categoryId: "trauma",
    expectedSamuCodes: ["BT4", "AT4"],
    status: "Coberto",
    matchedProtocolIds: ["trauma-abdominal", "fast-trauma"],
    matchedProtocolTitles: ["Trauma Abdominal", "FAST / eFAST"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Trauma raquimedular",
    priority: "Crítica",
    categoryId: "trauma",
    expectedSamuCodes: ["BT6", "AT6"],
    status: "Coberto",
    matchedProtocolIds: ["trauma-raquimedular", "imobilizacao-trauma"],
    matchedProtocolTitles: ["Trauma Raquimedular", "Imobilização no Trauma"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Queimaduras",
    priority: "Alta",
    categoryId: "trauma",
    expectedSamuCodes: ["BT7", "AT7"],
    status: "Coberto",
    matchedProtocolIds: ["queimaduras"],
    matchedProtocolTitles: ["Queimaduras"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Afogamento",
    priority: "Alta",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["BT8"],
    status: "Coberto",
    matchedProtocolIds: ["drowning", "samu-afogamento"],
    matchedProtocolTitles: ["Afogamento / Quase Afogamento", "Afogamento (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Intoxicações ─────
  {
    theme: "Intoxicações exógenas",
    priority: "Alta",
    categoryId: "intoxication",
    expectedSamuCodes: ["BC18", "AC28"],
    status: "Coberto",
    matchedProtocolIds: ["intoxicacao-abordagem"],
    matchedProtocolTitles: ["Abordagem Geral das Intoxicações"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Síndrome colinérgica",
    priority: "Alta",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC29"],
    status: "Parcial",
    matchedProtocolIds: ["intoxicacao-organofosforado"],
    matchedProtocolTitles: ["Intoxicação por Organofosforado"],
    actionNeeded: "Revisar protocolo existente",
    notes:
      "Existe protocolo de organofosforado; falta um genérico de síndrome colinérgica (toxidrome) com carbamatos, agentes nervosos, etc.",
  },
  {
    theme: "Síndrome anticolinérgica",
    priority: "Média",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC30"],
    status: "Ausente",
    matchedProtocolIds: [],
    matchedProtocolTitles: [],
    actionNeeded: "Criar novo protocolo",
    notes: "Não há toxidrome anticolinérgica (atropina, anti-histamínicos, escopolamina).",
  },
  {
    theme: "Overdose por opioides",
    priority: "Crítica",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC31"],
    status: "Coberto",
    matchedProtocolIds: ["intoxicacao-opioide"],
    matchedProtocolTitles: ["Intoxicação por Opioide"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Intoxicação por benzodiazepínicos",
    priority: "Média",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC32"],
    status: "Coberto",
    matchedProtocolIds: ["intoxicacao-benzodiazepinicos"],
    matchedProtocolTitles: ["Intoxicação por Benzodiazepínicos"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Intoxicação por antidepressivos tricíclicos",
    priority: "Alta",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC33"],
    status: "Coberto",
    matchedProtocolIds: ["intoxicacao-triciclico"],
    matchedProtocolTitles: ["Intoxicação por Antidepressivo Tricíclico"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Obstetrícia ─────
  {
    theme: "Parto iminente",
    priority: "Alta",
    categoryId: "obstetrics",
    expectedSamuCodes: ["BO1", "AO1"],
    status: "Ausente",
    matchedProtocolIds: [],
    matchedProtocolTitles: [],
    actionNeeded: "Criar novo protocolo",
    notes:
      "Falta protocolo de parto iminente / assistência ao parto extra-hospitalar com manejo do RN imediato.",
  },
  {
    theme: "Eclâmpsia / pré-eclâmpsia grave",
    priority: "Crítica",
    categoryId: "obstetrics",
    expectedSamuCodes: ["BO2", "AO2"],
    status: "Coberto",
    matchedProtocolIds: ["eclampsia", "pre-eclampsia-grave", "hellp-syndrome"],
    matchedProtocolTitles: [
      "Eclâmpsia",
      "Pré-eclâmpsia Grave",
      "Síndrome HELLP",
    ],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Hemorragia obstétrica",
    priority: "Crítica",
    categoryId: "obstetrics",
    expectedSamuCodes: ["BO3", "AO3"],
    status: "Coberto",
    matchedProtocolIds: [
      "hemorragia-pos-parto",
      "dpp",
      "dpp-descolamento-placenta",
      "rotura-uterina",
      "ectopic-pregnancy-ruptured",
    ],
    matchedProtocolTitles: [
      "Hemorragia Pós-Parto",
      "Descolamento Prematuro de Placenta",
      "Descolamento Prematuro de Placenta (DPP)",
      "Rotura Uterina",
      "Gravidez Ectópica Rota",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes: "DPP duplicado em dois arquivos — consolidar.",
  },
  {
    theme: "PCR na gestante",
    priority: "Crítica",
    categoryId: "obstetrics",
    expectedSamuCodes: ["AO4"],
    status: "Coberto",
    matchedProtocolIds: ["pcr-gestante"],
    matchedProtocolTitles: ["PCR na Gestante"],
    actionNeeded: "Revisar protocolo existente",
    notes: "Existem dois IDs/títulos similares (pcr-gestante) — checar duplicidade.",
  },

  // ───── Pediatria / neonatal ─────
  {
    theme: "Emergências pediátricas gerais",
    priority: "Média",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["BPed1", "APed1"],
    status: "Parcial",
    matchedProtocolIds: [
      "bronquiolite-grave",
      "asma-grave-pediatrica",
      "desidratacao-grave-pediatrica",
      "croup-severe",
      "epiglottitis",
    ],
    matchedProtocolTitles: [
      "Bronquiolite Grave",
      "Asma Grave Pediátrica",
      "Desidratação Grave Pediátrica",
      "Crupe / Laringotraqueobronquite Grave",
      "Epiglotite Aguda",
    ],
    actionNeeded: "Revisar protocolo existente",
    notes:
      "Cobertura boa por temas específicos; falta um protocolo guarda-chuva de avaliação inicial pediátrica (TEP / PAT).",
  },
  {
    theme: "PCR pediátrica",
    priority: "Crítica",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["BPed15", "APed15"],
    status: "Coberto",
    matchedProtocolIds: ["em-pcr-pediatrica", "pcr-pediatrica-emergencia"],
    matchedProtocolTitles: ["PCR Pediátrica", "PCR Pediátrica (PALS)"],
    actionNeeded: "Revisar protocolo existente",
    notes: "Dois protocolos quase idênticos — consolidar.",
  },
  {
    theme: "Convulsão pediátrica",
    priority: "Alta",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["BPed10", "APed10"],
    status: "Parcial",
    matchedProtocolIds: ["convulsao-febril", "status-epilepticus"],
    matchedProtocolTitles: ["Convulsão Febril", "Estado de Mal Epiléptico"],
    actionNeeded: "Criar novo protocolo",
    notes:
      "Só há convulsão febril e EME adulto. Falta protocolo de crise convulsiva pediátrica não-febril / EME pediátrico.",
  },
  {
    theme: "Choque pediátrico",
    priority: "Crítica",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["BPed12", "APed12"],
    status: "Coberto",
    matchedProtocolIds: ["choque-pediatrico", "sepse-pediatrica"],
    matchedProtocolTitles: ["Choque Pediátrico", "Sepse Pediátrica"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Reanimação neonatal",
    priority: "Crítica",
    categoryId: "neonatal",
    expectedSamuCodes: ["BPed20", "APed20"],
    status: "Coberto",
    matchedProtocolIds: ["reanimacao-neonatal"],
    matchedProtocolTitles: ["Reanimação Neonatal"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── Novos temas cobertos por lotes SAMU/UTI 2-7 ─────
  {
    theme: "Acidente ofídico (Bothrops/Crotalus/Elapidae)",
    priority: "Alta",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC34"],
    status: "Coberto",
    matchedProtocolIds: ["samu-acidente-ofidico"],
    matchedProtocolTitles: ["Acidente Ofídico (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "Cobertura com classificação de gravidade e soroterapia.",
  },
  {
    theme: "Risco de suicídio (Columbia / C-SSRS)",
    priority: "Alta",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["AC35"],
    status: "Coberto",
    matchedProtocolIds: ["samu-risco-suicidio-columbia"],
    matchedProtocolTitles: ["Avaliação de Risco de Suicídio — C-SSRS (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Bradiarritmias / BAV",
    priority: "Crítica",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["AC36"],
    status: "Coberto",
    matchedProtocolIds: ["samu-bradiarritmias-bav"],
    matchedProtocolTitles: ["Bradiarritmias e BAV (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Coma indiferenciado (AEIOU-TIPS)",
    priority: "Crítica",
    categoryId: "neurological",
    expectedSamuCodes: ["AC37"],
    status: "Coberto",
    matchedProtocolIds: ["samu-coma-aeiou-tips"],
    matchedProtocolTitles: ["Coma — Abordagem AEIOU-TIPS (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Coma mixedematoso",
    priority: "Alta",
    categoryId: "metabolic",
    expectedSamuCodes: ["AC38"],
    status: "Coberto",
    matchedProtocolIds: ["samu-coma-mixedematoso"],
    matchedProtocolTitles: ["Coma Mixedematoso (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Dengue — estratificação e hidratação (Grupos A/B/C/D)",
    priority: "Crítica",
    categoryId: "infectious",
    expectedSamuCodes: ["AC39"],
    status: "Coberto",
    matchedProtocolIds: ["samu-dengue-estratificacao-hidratacao"],
    matchedProtocolTitles: ["Dengue — Estratificação e Hidratação (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Desidratação pediátrica (Planos A/B/C)",
    priority: "Alta",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["APed11"],
    status: "Coberto",
    matchedProtocolIds: ["samu-desidratacao-pediatrica-planos-abc"],
    matchedProtocolTitles: ["Desidratação Pediátrica — Planos A/B/C (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Hemoptise maciça",
    priority: "Alta",
    categoryId: "respiratory",
    expectedSamuCodes: ["AC40"],
    status: "Coberto",
    matchedProtocolIds: ["samu-hemoptise-macica"],
    matchedProtocolTitles: ["Hemoptise Maciça (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Intoxicação digitálica (Fab)",
    priority: "Alta",
    categoryId: "intoxication",
    expectedSamuCodes: ["AC41"],
    status: "Coberto",
    matchedProtocolIds: ["samu-intoxicacao-digitalica-fab"],
    matchedProtocolTitles: ["Intoxicação Digitálica — Fab (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Isquemia mesentérica aguda",
    priority: "Alta",
    categoryId: "gastroenterology-emergency",
    expectedSamuCodes: ["AC42"],
    status: "Coberto",
    matchedProtocolIds: ["samu-isquemia-mesenterica-aguda"],
    matchedProtocolTitles: ["Isquemia Mesentérica Aguda (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Leptospirose grave / síndrome de Weil",
    priority: "Alta",
    categoryId: "infectious",
    expectedSamuCodes: ["AC43"],
    status: "Coberto",
    matchedProtocolIds: ["samu-leptospirose-grave-weil"],
    matchedProtocolTitles: ["Leptospirose Grave / Weil (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Malária grave (artesunato EV)",
    priority: "Alta",
    categoryId: "infectious",
    expectedSamuCodes: ["AC44"],
    status: "Coberto",
    matchedProtocolIds: ["samu-malaria-grave-artesunato"],
    matchedProtocolTitles: ["Malária Grave — Artesunato (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Sepse neonatal (precoce/tardia)",
    priority: "Crítica",
    categoryId: "neonatal",
    expectedSamuCodes: ["APed21"],
    status: "Coberto",
    matchedProtocolIds: ["samu-sepse-neonatal-precoce-tardia"],
    matchedProtocolTitles: ["Sepse Neonatal Precoce/Tardia (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Sepse pediátrica (Phoenix Criteria)",
    priority: "Crítica",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["APed13"],
    status: "Coberto",
    matchedProtocolIds: ["samu-sepse-pediatrica-phoenix"],
    matchedProtocolTitles: ["Sepse Pediátrica — Phoenix (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Angioedema (histaminérgico × bradicinérgico)",
    priority: "Alta",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["AC45"],
    status: "Coberto",
    matchedProtocolIds: ["samu-angioedema-histaminergico-bradicininergico"],
    matchedProtocolTitles: ["Angioedema — Histaminérgico × Bradicinérgico (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "AVC pediátrico",
    priority: "Crítica",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["APed14"],
    status: "Coberto",
    matchedProtocolIds: ["samu-avc-pediatrico"],
    matchedProtocolTitles: ["AVC Pediátrico (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Bronquiolite viral aguda",
    priority: "Alta",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["APed16"],
    status: "Coberto",
    matchedProtocolIds: ["samu-bronquiolite-viral-aguda", "bronquiolite-grave"],
    matchedProtocolTitles: ["Bronquiolite Viral Aguda (SAMU)", "Bronquiolite Grave"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Chikungunya — manejo agudo/subagudo",
    priority: "Média",
    categoryId: "infectious",
    expectedSamuCodes: ["AC46"],
    status: "Coberto",
    matchedProtocolIds: ["samu-chikungunya-manejo-agudo-subagudo"],
    matchedProtocolTitles: ["Chikungunya — Manejo Agudo/Subagudo (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Crise vaso-oclusiva (doença falciforme)",
    priority: "Alta",
    categoryId: "hematology-emergency",
    expectedSamuCodes: ["AC47"],
    status: "Coberto",
    matchedProtocolIds: ["samu-crise-vaso-oclusiva-falciforme"],
    matchedProtocolTitles: ["Crise Vaso-Oclusiva — Falciforme (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Tétano acidental — profilaxia/tratamento",
    priority: "Alta",
    categoryId: "infectious",
    expectedSamuCodes: ["AC48"],
    status: "Coberto",
    matchedProtocolIds: ["samu-tetano-acidental-profilaxia-tratamento"],
    matchedProtocolTitles: ["Tétano Acidental — Profilaxia/Tratamento (SAMU)"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Asma pediátrica grave",
    priority: "Crítica",
    categoryId: "pediatric-emergency",
    expectedSamuCodes: ["APed17"],
    status: "Coberto",
    matchedProtocolIds: ["samu-asma-pediatrica-grave", "asma-grave-pediatrica"],
    matchedProtocolTitles: ["Asma Pediátrica Grave (SAMU)", "Asma Grave Pediátrica"],
    actionNeeded: "Nenhuma",
    notes: "",
  },

  // ───── UTI / Cuidados intensivos ─────
  {
    theme: "Delirium em UTI (CAM-ICU / ICDSC)",
    priority: "Alta",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["UTI1"],
    status: "Coberto",
    matchedProtocolIds: ["uti-delirium-cam-icu-icdsc"],
    matchedProtocolTitles: ["Delirium em UTI — CAM-ICU / ICDSC"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Desmame da ventilação mecânica (SAT/SBT/TRE)",
    priority: "Alta",
    categoryId: "procedures",
    expectedSamuCodes: ["UTI2"],
    status: "Coberto",
    matchedProtocolIds: ["uti-desmame-ventilacao-mecanica-sat-sbt-tre"],
    matchedProtocolTitles: ["Desmame da Ventilação Mecânica — SAT/SBT/TRE"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Fibrilação atrial aguda",
    priority: "Crítica",
    categoryId: "cardiovascular",
    expectedSamuCodes: ["AC49"],
    status: "Coberto",
    matchedProtocolIds: ["emergencia-fibrilacao-atrial-aguda"],
    matchedProtocolTitles: ["Fibrilação Atrial Aguda"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Hipernatremia grave — correção segura",
    priority: "Alta",
    categoryId: "metabolic",
    expectedSamuCodes: ["AC27"],
    status: "Coberto",
    matchedProtocolIds: ["emergencia-hipernatremia-grave-correcao-segura"],
    matchedProtocolTitles: ["Hipernatremia Grave — Correção Segura"],
    actionNeeded: "Nenhuma",
    notes: "Complementa o tema 'Distúrbios do sódio'.",
  },
  {
    theme: "Hipotermia acidental — reaquecimento",
    priority: "Crítica",
    categoryId: "resuscitation",
    expectedSamuCodes: ["AC50"],
    status: "Coberto",
    matchedProtocolIds: ["emergencia-hipotermia-acidental-reaquecimento"],
    matchedProtocolTitles: ["Hipotermia Acidental — Reaquecimento"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Indicações de ECMO (EOLIA/ELSO)",
    priority: "Alta",
    categoryId: "procedures",
    expectedSamuCodes: ["UTI3"],
    status: "Coberto",
    matchedProtocolIds: ["uti-indicacoes-ecmo-eolia-elso"],
    matchedProtocolTitles: ["Indicações de ECMO — EOLIA/ELSO"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Profilaxia de TEV em paciente crítico",
    priority: "Alta",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["UTI4"],
    status: "Coberto",
    matchedProtocolIds: ["uti-profilaxia-tev-paciente-critico"],
    matchedProtocolTitles: ["Profilaxia de TEV em Paciente Crítico"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
  {
    theme: "Lombalgia aguda — red flags",
    priority: "Média",
    categoryId: "other-emergencies",
    expectedSamuCodes: ["AC51"],
    status: "Coberto",
    matchedProtocolIds: ["emergencia-lombalgia-aguda-red-flags"],
    matchedProtocolTitles: ["Lombalgia Aguda — Red Flags / Cauda Equina"],
    actionNeeded: "Nenhuma",
    notes: "",
  },
];

/**
 * Retorna apenas as lacunas críticas/altas que precisam de ação clínica
 * (status Ausente ou Parcial).
 */
export function getCriticalSamuGaps(): SamuCoverageAuditItem[] {
  return samuCoverageAudit.filter(
    (it) =>
      (it.priority === "Crítica" || it.priority === "Alta") &&
      (it.status === "Ausente" || it.status === "Parcial"),
  );
}

/**
 * Resumo agregado da auditoria. Útil para logs internos / dashboards de
 * curadoria — não deve ser exibido como módulo principal ao usuário final.
 */
export function getSamuCoverageSummary() {
  const total = samuCoverageAudit.length;
  const cobertos = samuCoverageAudit.filter((i) => i.status === "Coberto").length;
  const parciais = samuCoverageAudit.filter((i) => i.status === "Parcial").length;
  const ausentes = samuCoverageAudit.filter((i) => i.status === "Ausente").length;
  const operacionais = samuCoverageAudit.filter(
    (i) => i.status === "Operacional / não aplicável",
  ).length;

  const priorityRank: Record<SamuCoveragePriority, number> = {
    Crítica: 4,
    Alta: 3,
    Média: 2,
    Baixa: 1,
  };
  const statusRank: Record<SamuCoverageStatus, number> = {
    Ausente: 3,
    Parcial: 2,
    Coberto: 0,
    "Operacional / não aplicável": 0,
  };

  const topToCreate = [...samuCoverageAudit]
    .filter((i) => i.status === "Ausente" || i.status === "Parcial")
    .sort(
      (a, b) =>
        priorityRank[b.priority] - priorityRank[a.priority] ||
        statusRank[b.status] - statusRank[a.status],
    )
    .slice(0, 10)
    .map((i) => ({
      theme: i.theme,
      priority: i.priority,
      status: i.status,
      actionNeeded: i.actionNeeded,
    }));

  return {
    total,
    cobertos,
    parciais,
    ausentes,
    operacionais,
    topToCreate,
  };
}

/**
 * ─────────────────────────────────────────────────────────────────────
 * RESUMO INTERNO (snapshot manual — atualizar ao revisar a auditoria)
 * ─────────────────────────────────────────────────────────────────────
 * Total de temas auditados: 50
 * Cobertos:                  37
 * Parciais:                   9
 * Ausentes:                   4
 * Operacionais / N/A:         0
 *
 * Top 10 protocolos a criar/revisar primeiro (Crítica + Alta):
 *   1. Choque indiferenciado                            [Ausente]
 *   2. Parada respiratória no adulto                    [Ausente]
 *   3. Parto iminente (extra-hospitalar)                [Ausente]
 *   4. Convulsão pediátrica (não-febril / EME pediátrico)[Parcial]
 *   5. Síndrome colinérgica (toxidrome genérica)        [Parcial]
 *   6. Avaliação primária do paciente clínico (ABCDE não-trauma) [Parcial]
 *   7. Anafilaxia — consolidar duplicidade              [Coberto/Revisar]
 *   8. Choque hipovolêmico × hemorrágico — alinhar      [Coberto/Revisar]
 *   9. PCR pediátrica — consolidar duplicidade          [Coberto/Revisar]
 *  10. Hemorragia obstétrica (DPP duplicado)            [Coberto/Revisar]
 *
 * Esta auditoria é apenas referência interna de curadoria.
 * NÃO deve ser exibida como módulo clínico no menu principal.
 */
