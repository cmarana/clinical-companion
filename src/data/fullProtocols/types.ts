export interface FullProtocolSection {
  id: string;
  title: string;
  content: string;
}

export interface EvidenceLevel {
  class: "I" | "IIa" | "IIb" | "III";
  level: "A" | "B" | "C";
}

export interface FullProtocol {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  tags: string[];
  evidence?: EvidenceLevel;
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
