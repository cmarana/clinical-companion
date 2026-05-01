export interface FullProtocolSection {
  id: string;
  title: string;
  content: string;
}

export interface EvidenceLevel {
  class: "I" | "IIa" | "IIb" | "III";
  level: "A" | "B" | "C";
}

/** Fonte/diretriz citada em um protocolo, com link clicável para auditoria. */
export interface GuidelineSource {
  /** Sociedade/órgão emissor. Ex.: "SBC", "AHA/ACC", "ESC", "SSC", "MS Brasil". */
  society: string;
  /** Título resumido da diretriz. Ex.: "Diretriz de IAM com Supra de ST". */
  title: string;
  /** Ano da publicação ou da última atualização. */
  year: number;
  /** Recomendação/escopo principal extraído da diretriz para este protocolo. */
  recommendation: string;
  /** URL oficial (DOI, site da sociedade, PDF). Deve abrir em nova aba. */
  url: string;
  /** Classe de recomendação opcional (ACC/AHA). */
  class?: "I" | "IIa" | "IIb" | "III";
  /** Nível de evidência opcional. */
  level?: "A" | "B" | "C";
}

export interface FullProtocol {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  tags: string[];
  evidence?: EvidenceLevel;
  /** Diretrizes/fontes oficiais citadas (com link para auditoria e atualização). */
  guidelines?: GuidelineSource[];
  /** Marca da última revisão editorial PULSO (formato "YYYY-MM"). Usado para badge "Revisado em". */
  lastReviewed?: string;
  sections: FullProtocolSection[];
}

export interface FullProtocolCategory {
  id: string;
  title: string;
  order: number;
}

/** Ordem padronizada obrigatória — 14 seções */
export const FULL_SECTION_ORDER = [
  { id: "intro", title: "Introdução" },
  { id: "def", title: "Definição" },
  { id: "screening", title: "Rastreamento e Identificação" },
  { id: "etiology", title: "Etiologia" },
  { id: "clinical", title: "Apresentação Clínica" },
  { id: "diagnosis", title: "Diagnóstico" },
  { id: "differential", title: "Diagnóstico Diferencial" },
  { id: "conduct", title: "Conduta Inicial" },
  { id: "treatment", title: "Abordagem Terapêutica" },
  { id: "prescriptions", title: "Prescrições" },
  { id: "followup", title: "Acompanhamento" },
  { id: "complications", title: "Complicações" },
  { id: "criteria", title: "Critérios de Internação / UTI / Alta" },
  { id: "references", title: "Referências Bibliográficas" },
] as const;
