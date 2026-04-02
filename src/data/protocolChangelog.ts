export interface ChangelogEntry {
  id: string;
  date: string; // ISO date
  title: string;
  description: string;
  protocolIds: string[];
  category: "new" | "update" | "revision" | "fix";
}

/** Protocol last-updated dates (month/year) */
export const protocolLastUpdated: Record<string, string> = {
  // Emergency
  "fp-pcr-adulto": "2026-03",
  "fp-iot": "2026-03",
  "fp-sri": "2026-03",
  "fp-pneumotorax-hipertensivo": "2026-02",
  "fp-irpa": "2026-03",
  // Cardiology
  "fp-iam-supra": "2026-03",
  "fp-taquiarritmia-instavel": "2026-02",
  "fp-bradicardia-sintomatica": "2026-02",
  "fp-eap": "2026-03",
  "fp-tep-macico": "2026-03",
  "fp-tamponamento": "2026-02",
  "fp-disseccao-aorta": "2026-02",
  "fp-iam-sem-supra": "2026-03",
  "fp-choque-cardiogenico": "2026-03",
  "fp-crise-hipertensiva": "2026-03",
  "fp-fa-rvr": "2026-03",
  "fp-tv-fv": "2026-02",
  "fp-torsades": "2026-02",
  // Neurology
  "fp-avc-isquemico": "2026-03",
  "fp-eme": "2026-03",
  "fp-avc-hemorragico": "2026-02",
  "fp-hsa": "2026-02",
  "fp-convulsao-aguda": "2026-03",
  "fp-rebaixamento-consciencia": "2026-02",
  "fp-hic": "2026-02",
  "fp-meningite-completo": "2026-03",
  "fp-delirium-neuro": "2026-03",
  // Sepsis
  "fp-sepse-choque": "2026-03",
  "fp-choque-hemorragico": "2026-02",
  "fp-choque-anafilatico": "2026-03",
  "fp-hda-choque": "2026-02",
  // Metabolic
  "fp-hipercalemia": "2026-03",
  "fp-cad": "2026-03",
  "fp-hipoglicemia": "2026-02",
  "fp-hiponatremia": "2026-03",
  // Respiratory
  "fp-asma-grave": "2026-03",
  "fp-dpoc-exacerbado": "2026-03",
  "fp-pneumonia-grave": "2026-03",
  "fp-sdra": "2026-02",
  // Trauma
  "fp-atls": "2026-03",
  "fp-trauma-toracico": "2026-02",
  "fp-trauma-abdominal": "2026-02",
  // Obstetrics
  "fp-eclampsia": "2026-03",
  "fp-hpp": "2026-03",
  "fp-pre-eclampsia": "2026-03",
  // Intoxications
  "fp-intoxicacao-opioide": "2026-02",
  "fp-intoxicacao-triciclico": "2026-02",
  // Procedures
  "fp-cardioversao": "2026-02",
  "fp-pocus": "2026-03",
  "fp-cvc": "2026-03",
  // Pediatrics
  "full-pcr-pediatrica-pals": "2026-03",
  "full-convulsao-febril": "2026-02",
  "full-sepse-pediatrica": "2026-03",
  // Neonatal
  "full-reanimacao-neonatal": "2026-03",
  "full-sepse-neonatal": "2026-03",
};

/** Format "2026-03" → "Março/2026" */
const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

export function formatUpdateDate(isoMonth: string): string {
  const [year, month] = isoMonth.split("-");
  const m = parseInt(month, 10);
  return `${MONTHS_PT[m - 1]}/${year}`;
}

export function getProtocolUpdateLabel(protocolId: string): string | null {
  const date = protocolLastUpdated[protocolId];
  if (!date) return null;
  return `Atualizado em ${formatUpdateDate(date)}`;
}

/** Changelog feed entries */
export const changelog: ChangelogEntry[] = [
  {
    id: "cl-2026-03-04",
    date: "2026-03-28",
    title: "Atualização de Protocolos de Sepse e Choque",
    description: "Revisão completa dos protocolos de sepse com base nas diretrizes SSC 2024. Novos critérios de ressuscitação hemodinâmica, metas de lactato e abordagem escalonada de vasopressores.",
    protocolIds: ["fp-sepse-choque", "fp-choque-hemorragico", "fp-choque-anafilatico"],
    category: "revision",
  },
  {
    id: "cl-2026-03-03",
    date: "2026-03-20",
    title: "Novos Protocolos de Neonatologia",
    description: "Adicionados protocolos de reanimação neonatal e sepse neonatal seguindo as diretrizes NRP 2024 e SBP.",
    protocolIds: ["full-reanimacao-neonatal", "full-sepse-neonatal"],
    category: "new",
  },
  {
    id: "cl-2026-03-02",
    date: "2026-03-15",
    title: "Revisão de Cardiologia — IAM e Arritmias",
    description: "Protocolos de IAM com supra e sem supra atualizados conforme AHA/ACC 2025. Inclusão de novos algoritmos para FA com RVR e choque cardiogênico.",
    protocolIds: ["fp-iam-supra", "fp-iam-sem-supra", "fp-fa-rvr", "fp-choque-cardiogenico"],
    category: "update",
  },
  {
    id: "cl-2026-03-01",
    date: "2026-03-08",
    title: "Calculadoras Embutidas nos Protocolos",
    description: "Agora é possível calcular qSOFA, SOFA, Glasgow, Wells, NIHSS, CURB-65 e HEART diretamente dentro do protocolo relevante.",
    protocolIds: [],
    category: "new",
  },
  {
    id: "cl-2026-02-03",
    date: "2026-02-25",
    title: "Atualização de Neurologia — AVC e Status Epilepticus",
    description: "AVC isquêmico revisado com janela terapêutica expandida para trombectomia. Status epilepticus com novo esquema escalonado de anticonvulsivantes.",
    protocolIds: ["fp-avc-isquemico", "fp-eme", "fp-avc-hemorragico"],
    category: "revision",
  },
  {
    id: "cl-2026-02-02",
    date: "2026-02-18",
    title: "Novos Fluxogramas Interativos",
    description: "Mais de 25 protocolos agora contam com fluxogramas clicáveis (árvore de decisão) para conduta rápida e visual.",
    protocolIds: [],
    category: "new",
  },
  {
    id: "cl-2026-02-01",
    date: "2026-02-10",
    title: "Protocolos de Obstetrícia Atualizados",
    description: "Eclâmpsia, pré-eclâmpsia grave e hemorragia pós-parto revisados com base nas diretrizes FIGO 2024 e ACOG.",
    protocolIds: ["fp-eclampsia", "fp-hpp", "fp-pre-eclampsia"],
    category: "update",
  },
  {
    id: "cl-2026-01-02",
    date: "2026-01-20",
    title: "Lançamento do Modo Plantão",
    description: "Novo módulo com timer de turno, checklist de passagem de plantão, notas por leito e acesso rápido a emergências.",
    protocolIds: [],
    category: "new",
  },
  {
    id: "cl-2026-01-01",
    date: "2026-01-05",
    title: "Biblioteca de Protocolos Completos",
    description: "Lançamento da biblioteca com mais de 280 protocolos clínicos organizados em 14 seções padronizadas e 26 especialidades.",
    protocolIds: [],
    category: "new",
  },
];
