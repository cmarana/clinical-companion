export interface EmergencySection {
  id: string;
  title: string;
  content: string;
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  categoryId: string;
  /** Versão semântica opcional (ex.: "1.0", "2.1"). */
  version?: string;
  /** Data de última revisão (ex.: "Mai/2026"). */
  lastReviewed?: string;
  /** Marcador opcional para destacar conteúdos novos/atualizados. */
  badge?: "new" | "updated";
  sections: EmergencySection[];
  tags?: string[];
  /** Códigos da Matriz SAMU 192 cobertos por este protocolo (ex.: ["BC5","AC18"]). */
  samuCodes?: string[];
  /** Nível(is) SAMU aplicáveis. */
  samuLevel?: ("SBV" | "SAV")[];
  /** Fonte oficial SAMU para esta cobertura — exibida apenas em Referências. */
  samuSource?: {
    title: string;
    url: string;
    sbvUrl?: string;
    savUrl?: string;
  };
}

export interface EmergencyCategory {
  id: string;
  title: string;
  protocols: EmergencyProtocol[];
}

export const SECTION_ORDER = [
  { id: "intro", title: "Introdução" },
  { id: "def", title: "Definição" },
  { id: "screening", title: "Rastreamento e Identificação" },
  { id: "etiology", title: "Etiologia" },
  { id: "clinical", title: "Apresentação Clínica" },
  { id: "diagnosis", title: "Diagnóstico" },
  { id: "differential", title: "Diagnóstico Diferencial" },
  { id: "conduct", title: "Conduta" },
  { id: "followup", title: "Acompanhamento" },
  { id: "treatment", title: "Abordagem Terapêutica" },
  { id: "prescriptions", title: "Guia de Prescrições" },
  { id: "references", title: "Referências Bibliográficas" },
] as const;
