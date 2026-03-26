export interface PrescriptionItem {
  id: string;
  title: string;
  type: string;
  prescription: string;
  alternatives?: string;
  notes?: string;
  warnings?: string;
  guideline?: string;
}

export interface PrescriptionCategory {
  id: string;
  title: string;
  icon?: string;
  items: PrescriptionItem[];
}
