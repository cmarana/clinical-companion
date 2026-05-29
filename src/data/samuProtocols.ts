/**
 * Matriz SAMU 192 — Protocolos Nacionais
 * Estrutura de dados base para a Matriz SAMU dentro do Pulso Emergência.
 */

export type SamuProtocolLevel = "SBV" | "SAV";

export type SamuCoverageStatus =
  | "Encontrado"
  | "Parcial"
  | "Não localizado"
  | "Operacional SAMU"
  | "Sem título no sumário";

export type SamuContentStatus =
  | "Completo"
  | "Precisa revisar"
  | "Precisa criar"
  | "Não aplicável";

/** Categorias oficiais usadas pela Matriz SAMU. */
export const SAMU_CATEGORIES = [
  "Emergências Clínicas",
  "Trauma",
  "Procedimentos",
  "Protocolos Especiais",
  "Gineco-Obstetrícia",
  "Pediatria",
  "Intoxicações / Produtos Perigosos",
  "Incidentes com Múltiplas Vítimas",
  "Motolância",
  "Aeromédico",
] as const;

export type SamuProtocolCategory = (typeof SAMU_CATEGORIES)[number];

export interface SamuProtocol {
  id: string;
  code: string;
  title: string;
  level: SamuProtocolLevel;
  category: string;
  coverageStatus: SamuCoverageStatus;
  contentStatus: SamuContentStatus;
  relatedPulsoProtocolSlug?: string;
  relatedPulsoProtocolTitle?: string;
  tags: string[];
  source: string;
  notes?: string;
}

const SAMU_SOURCE = "SAMU 192 — Protocolos Nacionais (Ministério da Saúde)";

export const samuProtocols: SamuProtocol[] = [
  // ───────── Emergências Clínicas — SBV ─────────
  {
    id: "samu-bc2-pcr-sbv-adulto",
    code: "BC2",
    title: "Parada Cardiorrespiratória — Suporte Básico de Vida (Adulto)",
    level: "SBV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/acls-cpr",
    relatedPulsoProtocolTitle: "PCR / RCP no Adulto (PULSO)",
    tags: ["pcr", "rcp", "bls", "dea", "cadeia de sobrevivência"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-bc3-ovace",
    code: "BC3",
    title: "Obstrução de Vias Aéreas por Corpo Estranho",
    level: "SBV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/airway-obstruction-foreign-body",
    relatedPulsoProtocolTitle: "OVACE (PULSO)",
    tags: ["ovace", "heimlich", "via aérea"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-bc4-dor-toracica",
    code: "BC4",
    title: "Dor Torácica",
    level: "SBV",
    category: "Emergências Clínicas",
    coverageStatus: "Parcial",
    contentStatus: "Precisa revisar",
    tags: ["dor torácica", "sca", "iam"],
    source: SAMU_SOURCE,
    notes: "Pulso cobre SCA / IAM em emergência clínica — alinhar fluxograma SBV.",
  },
  {
    id: "samu-bc6-convulsao",
    code: "BC6",
    title: "Crise Convulsiva",
    level: "SBV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/status-epilepticus",
    relatedPulsoProtocolTitle: "Status Epilepticus (PULSO)",
    tags: ["convulsão", "estado de mal epiléptico"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-bc7-avc",
    code: "BC7",
    title: "Acidente Vascular Encefálico",
    level: "SBV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/stroke-ischemic",
    relatedPulsoProtocolTitle: "AVC Isquêmico (PULSO)",
    tags: ["avc", "cincinnati", "janela terapêutica"],
    source: SAMU_SOURCE,
  },

  // ───────── Emergências Clínicas — SAV ─────────
  {
    id: "samu-ac1-pcr-sav-adulto",
    code: "AC1",
    title: "Parada Cardiorrespiratória — Suporte Avançado de Vida (Adulto)",
    level: "SAV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/acls-cpr",
    relatedPulsoProtocolTitle: "ACLS — PCR no Adulto (PULSO)",
    tags: ["acls", "pcr", "ritmos chocáveis", "adrenalina", "amiodarona"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-ac2-sca",
    code: "AC2",
    title: "Síndrome Coronariana Aguda / IAM",
    level: "SAV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/stemi",
    relatedPulsoProtocolTitle: "IAMCSST (PULSO)",
    tags: ["sca", "iam", "iamcsst", "iamsst", "aas", "clopidogrel"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-ac3-eap",
    code: "AC3",
    title: "Edema Agudo de Pulmão",
    level: "SAV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/acute-pulmonary-edema",
    relatedPulsoProtocolTitle: "Edema Agudo de Pulmão (PULSO)",
    tags: ["eap", "icc", "vni", "furosemida"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-ac6-sepse-choque",
    code: "AC6",
    title: "Sepse e Choque Séptico",
    level: "SAV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/sepsis-bundle",
    relatedPulsoProtocolTitle: "Bundle de Sepse (PULSO)",
    tags: ["sepse", "choque séptico", "qsofa", "ressuscitação volêmica"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-ac7-anafilaxia",
    code: "AC7",
    title: "Anafilaxia",
    level: "SAV",
    category: "Emergências Clínicas",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/anaphylaxis",
    relatedPulsoProtocolTitle: "Anafilaxia (PULSO)",
    tags: ["anafilaxia", "adrenalina im", "alergia"],
    source: SAMU_SOURCE,
  },

  // ───────── Trauma ─────────
  {
    id: "samu-bt1-abordagem-trauma",
    code: "BT1",
    title: "Abordagem Primária no Trauma (XABCDE)",
    level: "SBV",
    category: "Trauma",
    coverageStatus: "Parcial",
    contentStatus: "Precisa revisar",
    tags: ["xabcde", "phtls", "avaliação primária"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-bt3-hemorragias",
    code: "BT3",
    title: "Hemorragias Externas e Controle de Sangramentos",
    level: "SBV",
    category: "Trauma",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    tags: ["torniquete", "compressão direta", "hemostasia"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-at1-trauma-toracico",
    code: "AT1",
    title: "Trauma Torácico (Pneumotórax Hipertensivo)",
    level: "SAV",
    category: "Trauma",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/tension-pneumothorax",
    relatedPulsoProtocolTitle: "Pneumotórax Hipertensivo (PULSO)",
    tags: ["pneumotórax", "toracocentese", "descompressão"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-at4-choque-hemorragico",
    code: "AT4",
    title: "Choque Hemorrágico no Trauma",
    level: "SAV",
    category: "Trauma",
    coverageStatus: "Parcial",
    contentStatus: "Precisa revisar",
    tags: ["choque hemorrágico", "ácido tranexâmico", "permissiva"],
    source: SAMU_SOURCE,
  },

  // ───────── Procedimentos ─────────
  {
    id: "samu-pr2-iot",
    code: "PR2",
    title: "Intubação Orotraqueal / Sequência Rápida",
    level: "SAV",
    category: "Procedimentos",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/rsi",
    relatedPulsoProtocolTitle: "Sequência Rápida de Intubação (PULSO)",
    tags: ["iot", "rsi", "via aérea avançada", "etomidato", "succinilcolina"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-pr3-crico",
    code: "PR3",
    title: "Cricotireoidostomia de Emergência",
    level: "SAV",
    category: "Procedimentos",
    coverageStatus: "Parcial",
    contentStatus: "Precisa revisar",
    tags: ["via aérea cirúrgica", "crico", "via aérea difícil"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-pr4-desfibrilacao",
    code: "PR4",
    title: "Desfibrilação e Cardioversão Elétrica",
    level: "SAV",
    category: "Procedimentos",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    tags: ["desfibrilação", "cardioversão sincronizada", "energia bifásica"],
    source: SAMU_SOURCE,
  },

  // ───────── Protocolos Especiais ─────────
  {
    id: "samu-es1-psiquiatrico",
    code: "ES1",
    title: "Atendimento ao Paciente Psiquiátrico",
    level: "SAV",
    category: "Protocolos Especiais",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/psychomotor-agitation",
    relatedPulsoProtocolTitle: "Agitação Psicomotora (PULSO)",
    tags: ["agitação", "contenção química", "haloperidol"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-es2-recusa",
    code: "ES2",
    title: "Recusa de Atendimento ou Remoção",
    level: "SBV",
    category: "Protocolos Especiais",
    coverageStatus: "Operacional SAMU",
    contentStatus: "Precisa criar",
    tags: ["recusa", "termo", "ética"],
    source: SAMU_SOURCE,
    notes: "Protocolo operacional do SAMU — não substitui conduta clínica.",
  },

  // ───────── Gineco-Obstetrícia ─────────
  {
    id: "samu-go2-eclampsia",
    code: "GO2",
    title: "Pré-eclâmpsia / Eclâmpsia",
    level: "SAV",
    category: "Gineco-Obstetrícia",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/preeclampsia-eclampsia",
    relatedPulsoProtocolTitle: "Pré-eclâmpsia / Eclâmpsia (PULSO)",
    tags: ["eclampsia", "sulfato de magnésio", "hipertensão gestacional"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-go3-hpp",
    code: "GO3",
    title: "Hemorragia Pós-Parto",
    level: "SAV",
    category: "Gineco-Obstetrícia",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/postpartum-hemorrhage",
    relatedPulsoProtocolTitle: "Hemorragia Pós-Parto (PULSO)",
    tags: ["hpp", "atonia", "ocitocina", "massagem uterina"],
    source: SAMU_SOURCE,
  },

  // ───────── Pediatria ─────────
  {
    id: "samu-pd2-pcr-pals",
    code: "PD2",
    title: "PCR em Pediatria — Suporte Avançado (PALS)",
    level: "SAV",
    category: "Pediatria",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    tags: ["pals", "rcp pediátrica", "drogas pediátricas"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-pd5-recem-nascido",
    code: "PD5",
    title: "Reanimação do Recém-Nascido",
    level: "SAV",
    category: "Pediatria",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/neonatal-resuscitation",
    relatedPulsoProtocolTitle: "Reanimação Neonatal (PULSO)",
    tags: ["apgar", "neonatal", "ventilação"],
    source: SAMU_SOURCE,
  },

  // ───────── Intoxicações / Produtos Perigosos ─────────
  {
    id: "samu-in1-intoxicacao-geral",
    code: "IN1",
    title: "Intoxicação Exógena — Abordagem Geral",
    level: "SAV",
    category: "Intoxicações / Produtos Perigosos",
    coverageStatus: "Parcial",
    contentStatus: "Precisa revisar",
    tags: ["intoxicação", "antídoto", "carvão ativado"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-in2-ofidico",
    code: "IN2",
    title: "Acidente Ofídico (Bothrops)",
    level: "SAV",
    category: "Intoxicações / Produtos Perigosos",
    coverageStatus: "Encontrado",
    contentStatus: "Completo",
    relatedPulsoProtocolSlug: "/emergency/snakebite-bothrops",
    relatedPulsoProtocolTitle: "Acidente Bothrópico (PULSO)",
    tags: ["jararaca", "soro antiofídico", "coagulopatia"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-in3-hazmat",
    code: "IN3",
    title: "Atendimento em Eventos com Produtos Perigosos (HAZMAT)",
    level: "SAV",
    category: "Intoxicações / Produtos Perigosos",
    coverageStatus: "Não localizado",
    contentStatus: "Precisa criar",
    tags: ["hazmat", "descontaminação", "epi"],
    source: SAMU_SOURCE,
  },

  // ───────── Incidentes com Múltiplas Vítimas ─────────
  {
    id: "samu-mv1-triagem-start",
    code: "MV1",
    title: "Triagem START em Múltiplas Vítimas",
    level: "SAV",
    category: "Incidentes com Múltiplas Vítimas",
    coverageStatus: "Não localizado",
    contentStatus: "Precisa criar",
    tags: ["start", "triagem", "imv"],
    source: SAMU_SOURCE,
  },
  {
    id: "samu-mv2-comando-controle",
    code: "MV2",
    title: "Comando e Controle em IMV",
    level: "SAV",
    category: "Incidentes com Múltiplas Vítimas",
    coverageStatus: "Operacional SAMU",
    contentStatus: "Precisa criar",
    tags: ["comando", "ics", "regulação"],
    source: SAMU_SOURCE,
  },

  // ───────── Motolância ─────────
  {
    id: "samu-mt1-motolancia-primeira-resposta",
    code: "MT1",
    title: "Atendimento Inicial pela Motolância",
    level: "SBV",
    category: "Motolância",
    coverageStatus: "Operacional SAMU",
    contentStatus: "Precisa criar",
    tags: ["motolância", "primeira resposta", "tempo-resposta"],
    source: SAMU_SOURCE,
  },

  // ───────── Aeromédico ─────────
  {
    id: "samu-ae1-aeromedico-acionamento",
    code: "AE1",
    title: "Atendimento Aeromédico — Critérios de Acionamento",
    level: "SAV",
    category: "Aeromédico",
    coverageStatus: "Operacional SAMU",
    contentStatus: "Precisa criar",
    tags: ["aeromédico", "asa rotativa", "helicóptero"],
    source: SAMU_SOURCE,
  },
];

export function getSamuProtocolById(id: string): SamuProtocol | undefined {
  return samuProtocols.find(p => p.id === id);
}

export function getSamuProtocolByCode(code: string): SamuProtocol | undefined {
  const c = code.toLowerCase();
  return samuProtocols.find(p => p.code.toLowerCase() === c);
}
