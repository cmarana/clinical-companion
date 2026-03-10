export interface Protocol {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  sections: ProtocolSection[];
  tags: string[];
}

export interface ProtocolSection {
  id: string;
  title: string;
  content: string;
}

export interface ProtocolCategory {
  id: string;
  title: string;
  icon: string;
  order: number;
}

export interface Medication {
  id: string;
  name: string;
  indication: string;
  dose: string;
  dilution: string;
  administration: string;
  precautions: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface Checklist {
  id: string;
  title: string;
  items: ChecklistItem[];
}
