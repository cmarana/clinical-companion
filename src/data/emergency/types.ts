export interface EmergencySection {
  id: string;
  title: string;
  content: string;
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  categoryId: string;
  sections: EmergencySection[];
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
