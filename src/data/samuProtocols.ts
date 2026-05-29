/**
 * Matriz SAMU 192 — Protocolos Nacionais
 * Baseado nos protocolos do SAMU 192 / Ministério da Saúde.
 *
 * Estrutura inicial: tipos + seed de protocolos prontos para receber
 * o conteúdo completo. Cada protocolo pode ser vinculado a um
 * protocolo já existente no Pulso (clínico, emergência ou completo).
 */

export type SamuProtocolLevel = "SBV" | "SAV";

export type SamuProtocolCategory =
  | "clinicas"
  | "trauma"
  | "procedimentos"
  | "especiais"
  | "gineco-obstetricia"
  | "pediatria"
  | "intoxicacoes"
  | "multiplas-vitimas"
  | "motolancia"
  | "aeromedico";

/** Cobertura do protocolo dentro do Pulso. */
export type SamuCoverageStatus =
  | "encontrado"
  | "parcial"
  | "nao-localizado"
  | "operacional-samu"
  | "sem-titulo-sumario";

/** Status do conteúdo dentro desta matriz. */
export type SamuContentStatus =
  | "completo"
  | "revisar"
  | "criar";

/** Referência ao protocolo Pulso relacionado, quando houver. */
export interface SamuRelatedProtocol {
  /** id no app (ex.: id em fullProtocols, emergency ou prescriptions) */
  id: string;
  /** rota dentro do Pulso (ex.: /emergency/anaphylaxis) */
  route: string;
  /** label curto para exibição */
  label: string;
}

export interface SamuProtocol {
  /** Código oficial SAMU (ex.: "BC1", "AC10", "BT3"). */
  code: string;
  title: string;
  level: SamuProtocolLevel;
  category: SamuProtocolCategory;
  coverage: SamuCoverageStatus;
  content: SamuContentStatus;
  /** Resumo curto para card. */
  summary?: string;
  /** Tags clínicas para busca. */
  tags?: string[];
  /** Protocolo relacionado já existente no Pulso. */
  related?: SamuRelatedProtocol;
  /** Conteúdo expandido (markdown simples) — pode ser preenchido depois. */
  body?: string;
  /** Versão e revisão. */
  version?: string;
  lastReviewed?: string;
}

export const SAMU_CATEGORIES: { id: SamuProtocolCategory; title: string; short: string }[] = [
  { id: "clinicas",            title: "Emergências Clínicas",                 short: "Clínicas" },
  { id: "trauma",              title: "Trauma",                                short: "Trauma" },
  { id: "procedimentos",       title: "Procedimentos",                         short: "Procedimentos" },
  { id: "especiais",           title: "Protocolos Especiais",                  short: "Especiais" },
  { id: "gineco-obstetricia",  title: "Gineco-Obstetrícia",                    short: "Gineco-Obst." },
  { id: "pediatria",           title: "Pediatria",                             short: "Pediatria" },
  { id: "intoxicacoes",        title: "Intoxicações / Produtos Perigosos",     short: "Intoxicações" },
  { id: "multiplas-vitimas",   title: "Incidentes com Múltiplas Vítimas",      short: "IMV" },
  { id: "motolancia",          title: "Motolância",                            short: "Motolância" },
  { id: "aeromedico",          title: "Aeromédico",                            short: "Aeromédico" },
];

export const SAMU_LEVELS: { id: SamuProtocolLevel; title: string; description: string }[] = [
  { id: "SBV", title: "SBV", description: "Suporte Básico de Vida — USB / técnicos" },
  { id: "SAV", title: "SAV", description: "Suporte Avançado de Vida — USA / médico" },
];

export const SAMU_COVERAGE_META: Record<SamuCoverageStatus, { label: string; tone: "ok" | "warn" | "danger" | "neutral" | "info" }> = {
  "encontrado":          { label: "Encontrado",        tone: "ok" },
  "parcial":             { label: "Parcial",           tone: "warn" },
  "nao-localizado":      { label: "Não localizado",    tone: "danger" },
  "operacional-samu":    { label: "Operacional SAMU",  tone: "info" },
  "sem-titulo-sumario":  { label: "Sem título",        tone: "neutral" },
};

export const SAMU_CONTENT_META: Record<SamuContentStatus, { label: string; tone: "ok" | "warn" | "danger" }> = {
  "completo": { label: "Completo",        tone: "ok" },
  "revisar":  { label: "Precisa revisar", tone: "warn" },
  "criar":    { label: "Precisa criar",   tone: "danger" },
};

/**
 * Seed inicial — protocolos representativos cobrindo todas as categorias
 * e ambos os níveis. Pode ser ampliado posteriormente com os 100+
 * protocolos completos do SAMU 192.
 */
export const samuProtocols: SamuProtocol[] = [
  // ───────────── Clínicas — SBV ─────────────
  {
    code: "BC1", title: "Abordagem Primária do Paciente Clínico", level: "SBV",
    category: "clinicas", coverage: "parcial", content: "revisar",
    summary: "Avaliação inicial XABCDE no atendimento clínico pré-hospitalar.",
    tags: ["xabcde", "avaliação primária", "abordagem"],
  },
  {
    code: "BC2", title: "PCR — Suporte Básico de Vida no Adulto", level: "SBV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    summary: "RCP de alta qualidade, DEA precoce e cadeia de sobrevivência.",
    tags: ["pcr", "rcp", "dea", "bls"],
    related: { id: "acls-cpr", route: "/emergency/acls-cpr", label: "PCR adulto (PULSO)" },
  },
  {
    code: "BC3", title: "Obstrução de Vias Aéreas por Corpo Estranho", level: "SBV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["ovace", "heimlich", "via aérea"],
    related: { id: "airway-obstruction-foreign-body", route: "/emergency/airway-obstruction-foreign-body", label: "Obstrução VA (PULSO)" },
  },
  {
    code: "BC4", title: "Dor Torácica", level: "SBV",
    category: "clinicas", coverage: "parcial", content: "revisar",
    tags: ["dor torácica", "sca", "iam"],
  },
  {
    code: "BC5", title: "Dispneia", level: "SBV",
    category: "clinicas", coverage: "parcial", content: "revisar",
    tags: ["dispneia", "insuficiência respiratória"],
  },
  {
    code: "BC6", title: "Crise Convulsiva", level: "SBV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["convulsão", "epilepsia", "estado de mal"],
    related: { id: "status-epilepticus", route: "/emergency/status-epilepticus", label: "Status epilepticus (PULSO)" },
  },
  {
    code: "BC7", title: "Acidente Vascular Encefálico", level: "SBV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["avc", "avci", "avch", "cincinnati"],
    related: { id: "stroke-ischemic", route: "/emergency/stroke-ischemic", label: "AVC isquêmico (PULSO)" },
  },

  // ───────────── Clínicas — SAV ─────────────
  {
    code: "AC1", title: "PCR — Suporte Avançado de Vida no Adulto", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["acls", "pcr", "ritmos chocáveis"],
    related: { id: "acls-cpr", route: "/emergency/acls-cpr", label: "ACLS (PULSO)" },
  },
  {
    code: "AC2", title: "Síndrome Coronariana Aguda", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["sca", "iam", "iamcsst", "iamsst"],
    related: { id: "stemi", route: "/emergency/stemi", label: "IAMCSST (PULSO)" },
  },
  {
    code: "AC3", title: "Edema Agudo de Pulmão", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["eap", "icc", "vni"],
    related: { id: "acute-pulmonary-edema", route: "/emergency/acute-pulmonary-edema", label: "EAP (PULSO)" },
  },
  {
    code: "AC4", title: "Crise Hipertensiva", level: "SAV",
    category: "clinicas", coverage: "parcial", content: "revisar",
    tags: ["urgência hipertensiva", "emergência hipertensiva"],
  },
  {
    code: "AC5", title: "Bradiarritmias e Taquiarritmias", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["arritmia", "bradicardia", "taquicardia", "marca-passo"],
    related: { id: "tachyarrhythmias", route: "/emergency/tachyarrhythmias", label: "Taquiarritmias (PULSO)" },
  },
  {
    code: "AC6", title: "Choque", level: "SAV",
    category: "clinicas", coverage: "parcial", content: "revisar",
    tags: ["choque", "hipovolêmico", "séptico", "cardiogênico"],
  },
  {
    code: "AC7", title: "Anafilaxia", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["anafilaxia", "adrenalina", "alergia"],
    related: { id: "anaphylaxis", route: "/emergency/anaphylaxis", label: "Anafilaxia (PULSO)" },
  },
  {
    code: "AC8", title: "Hipoglicemia e Hiperglicemia", level: "SAV",
    category: "clinicas", coverage: "encontrado", content: "completo",
    tags: ["hipoglicemia", "cad", "ehh"],
    related: { id: "dka", route: "/emergency/dka", label: "CAD (PULSO)" },
  },

  // ───────────── Trauma — SBV ─────────────
  {
    code: "BT1", title: "Abordagem Primária no Trauma", level: "SBV",
    category: "trauma", coverage: "parcial", content: "revisar",
    tags: ["xabcde trauma", "phtls"],
  },
  {
    code: "BT2", title: "Imobilização e Transporte do Politraumatizado", level: "SBV",
    category: "trauma", coverage: "encontrado", content: "completo",
    tags: ["prancha", "colar cervical", "ked"],
  },
  {
    code: "BT3", title: "Hemorragias Externas", level: "SBV",
    category: "trauma", coverage: "encontrado", content: "completo",
    tags: ["torniquete", "compressão", "hemostasia"],
  },
  {
    code: "BT4", title: "Queimaduras", level: "SBV",
    category: "trauma", coverage: "parcial", content: "revisar",
    tags: ["queimadura", "regra dos nove", "parkland"],
  },
  {
    code: "BT5", title: "Trauma Cranioencefálico", level: "SBV",
    category: "trauma", coverage: "encontrado", content: "completo",
    tags: ["tce", "glasgow"],
    related: { id: "tbi", route: "/emergency/tbi", label: "TCE (PULSO)" },
  },

  // ───────────── Trauma — SAV ─────────────
  {
    code: "AT1", title: "Trauma Torácico", level: "SAV",
    category: "trauma", coverage: "encontrado", content: "completo",
    tags: ["pneumotórax hipertensivo", "toracocentese"],
    related: { id: "tension-pneumothorax", route: "/emergency/tension-pneumothorax", label: "Pneumotórax hipertensivo (PULSO)" },
  },
  {
    code: "AT2", title: "Trauma Abdominal", level: "SAV",
    category: "trauma", coverage: "parcial", content: "revisar",
    tags: ["trauma abdominal", "fast"],
  },
  {
    code: "AT3", title: "Trauma Raquimedular", level: "SAV",
    category: "trauma", coverage: "parcial", content: "revisar",
    tags: ["raquimedular", "lesão medular"],
  },
  {
    code: "AT4", title: "Choque Hemorrágico", level: "SAV",
    category: "trauma", coverage: "parcial", content: "revisar",
    tags: ["choque hemorrágico", "reposição volêmica"],
  },

  // ───────────── Procedimentos ─────────────
  {
    code: "PR1", title: "Acesso Venoso Periférico", level: "SBV",
    category: "procedimentos", coverage: "operacional-samu", content: "completo",
    tags: ["acesso venoso", "punção"],
  },
  {
    code: "PR2", title: "Intubação Orotraqueal", level: "SAV",
    category: "procedimentos", coverage: "encontrado", content: "completo",
    tags: ["iot", "sequência rápida", "via aérea avançada"],
    related: { id: "rsi", route: "/emergency/rsi", label: "Sequência rápida (PULSO)" },
  },
  {
    code: "PR3", title: "Cricotireoidostomia", level: "SAV",
    category: "procedimentos", coverage: "parcial", content: "revisar",
    tags: ["via aérea cirúrgica", "crico"],
  },
  {
    code: "PR4", title: "Desfibrilação e Cardioversão", level: "SAV",
    category: "procedimentos", coverage: "encontrado", content: "completo",
    tags: ["desfibrilação", "cardioversão sincronizada"],
  },

  // ───────────── Protocolos Especiais ─────────────
  {
    code: "ES1", title: "Atendimento ao Paciente Psiquiátrico", level: "SAV",
    category: "especiais", coverage: "encontrado", content: "completo",
    tags: ["agitação", "contenção", "psiquiatria"],
    related: { id: "psychomotor-agitation", route: "/emergency/psychomotor-agitation", label: "Agitação psicomotora (PULSO)" },
  },
  {
    code: "ES2", title: "Recusa de Atendimento / Remoção", level: "SBV",
    category: "especiais", coverage: "operacional-samu", content: "revisar",
    tags: ["recusa", "termo", "ética"],
  },
  {
    code: "ES3", title: "Constatação de Óbito em Local de Ocorrência", level: "SAV",
    category: "especiais", coverage: "operacional-samu", content: "revisar",
    tags: ["óbito", "constatação"],
  },

  // ───────────── Gineco-Obstetrícia ─────────────
  {
    code: "GO1", title: "Trabalho de Parto e Parto de Emergência", level: "SBV",
    category: "gineco-obstetricia", coverage: "encontrado", content: "completo",
    tags: ["parto", "extra-hospitalar"],
    related: { id: "emergency-delivery", route: "/emergency/emergency-delivery", label: "Parto de emergência (PULSO)" },
  },
  {
    code: "GO2", title: "Pré-eclâmpsia / Eclâmpsia", level: "SAV",
    category: "gineco-obstetricia", coverage: "encontrado", content: "completo",
    tags: ["eclampsia", "sulfato de magnésio"],
    related: { id: "preeclampsia-eclampsia", route: "/emergency/preeclampsia-eclampsia", label: "Pré-eclâmpsia (PULSO)" },
  },
  {
    code: "GO3", title: "Hemorragia Pós-Parto", level: "SAV",
    category: "gineco-obstetricia", coverage: "encontrado", content: "completo",
    tags: ["hpp", "ocitocina", "atonia"],
    related: { id: "postpartum-hemorrhage", route: "/emergency/postpartum-hemorrhage", label: "HPP (PULSO)" },
  },

  // ───────────── Pediatria ─────────────
  {
    code: "PD1", title: "PCR em Pediatria — SBV", level: "SBV",
    category: "pediatria", coverage: "encontrado", content: "completo",
    tags: ["pals", "rcp pediátrica"],
  },
  {
    code: "PD2", title: "PCR em Pediatria — SAV", level: "SAV",
    category: "pediatria", coverage: "encontrado", content: "completo",
    tags: ["pals", "ritmos", "drogas pediátricas"],
  },
  {
    code: "PD3", title: "Crise Convulsiva na Criança", level: "SAV",
    category: "pediatria", coverage: "parcial", content: "revisar",
    tags: ["convulsão febril", "pediatria"],
  },
  {
    code: "PD4", title: "Insuficiência Respiratória Pediátrica", level: "SAV",
    category: "pediatria", coverage: "parcial", content: "revisar",
    tags: ["bronquiolite", "crupe", "asma"],
  },
  {
    code: "PD5", title: "Atendimento ao Recém-Nascido", level: "SAV",
    category: "pediatria", coverage: "encontrado", content: "completo",
    tags: ["reanimação neonatal", "apgar"],
    related: { id: "neonatal-resuscitation", route: "/emergency/neonatal-resuscitation", label: "Reanimação neonatal (PULSO)" },
  },

  // ───────────── Intoxicações / Produtos Perigosos ─────────────
  {
    code: "IN1", title: "Intoxicação Exógena — Abordagem Geral", level: "SAV",
    category: "intoxicacoes", coverage: "parcial", content: "revisar",
    tags: ["intoxicação", "antídoto"],
  },
  {
    code: "IN2", title: "Acidente por Animais Peçonhentos — Ofídico", level: "SAV",
    category: "intoxicacoes", coverage: "encontrado", content: "completo",
    tags: ["bothrops", "soro antiofídico"],
    related: { id: "snakebite-bothrops", route: "/emergency/snakebite-bothrops", label: "Ofídico Bothrops (PULSO)" },
  },
  {
    code: "IN3", title: "Atendimento em Eventos com Produtos Perigosos", level: "SAV",
    category: "intoxicacoes", coverage: "nao-localizado", content: "criar",
    tags: ["hazmat", "descontaminação"],
  },

  // ───────────── Múltiplas Vítimas ─────────────
  {
    code: "MV1", title: "Triagem START em Múltiplas Vítimas", level: "SAV",
    category: "multiplas-vitimas", coverage: "nao-localizado", content: "criar",
    tags: ["start", "triagem", "imv"],
  },
  {
    code: "MV2", title: "Comando e Controle em IMV", level: "SAV",
    category: "multiplas-vitimas", coverage: "operacional-samu", content: "criar",
    tags: ["comando", "ics"],
  },

  // ───────────── Motolância ─────────────
  {
    code: "MT1", title: "Atendimento Inicial pela Motolância", level: "SBV",
    category: "motolancia", coverage: "operacional-samu", content: "criar",
    tags: ["motolância", "primeira resposta"],
  },
  {
    code: "MT2", title: "Equipamentos e Limitações da Motolância", level: "SBV",
    category: "motolancia", coverage: "operacional-samu", content: "criar",
    tags: ["motolância", "equipamento"],
  },

  // ───────────── Aeromédico ─────────────
  {
    code: "AE1", title: "Atendimento Aeromédico — Critérios de Acionamento", level: "SAV",
    category: "aeromedico", coverage: "operacional-samu", content: "criar",
    tags: ["aeromédico", "asa rotativa", "helicóptero"],
  },
  {
    code: "AE2", title: "Transporte Inter-hospitalar Aeromédico", level: "SAV",
    category: "aeromedico", coverage: "operacional-samu", content: "criar",
    tags: ["transporte", "ti aeromédico"],
  },
];

export function getSamuProtocol(code: string): SamuProtocol | undefined {
  const c = code.toLowerCase();
  return samuProtocols.find(p => p.code.toLowerCase() === c);
}

export function getSamuByCategory(category: SamuProtocolCategory): SamuProtocol[] {
  return samuProtocols.filter(p => p.category === category);
}
