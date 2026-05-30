/**
 * Template padrão PULSO para protocolos clínicos.
 *
 * Define a lista canônica de seções, aliases (para mapeamento automático
 * de protocolos legados) e um normalizador que organiza qualquer array de
 * seções (Emergency, FullProtocol, Institutional) no formato padrão —
 * preservando seções "extras" não previstas no template.
 *
 * Não altera dados existentes. É consumido pelo <StandardProtocolView/>.
 */

export type StandardSectionId =
  | "definition"
  | "epidemiology"
  | "diagnosis"
  | "differential"
  | "severity"
  | "conduct"
  | "medications"
  | "monitoring"
  | "commonErrors"
  | "checklist"
  | "discharge"
  | "references";

export interface StandardSectionSpec {
  id: StandardSectionId;
  title: string;
  /** Ícone (lucide) sugerido — usado pelo renderer. */
  icon: string;
  /** Cor semântica (token Tailwind) para destaque opcional. */
  accent?: "primary" | "destructive" | "warning" | "success" | "muted";
  /** Lista de termos (lowercase, sem acento) que mapeiam para esta seção. */
  aliases: string[];
}

/** Ordem canônica de apresentação. */
export const STANDARD_SECTIONS: StandardSectionSpec[] = [
  {
    id: "definition",
    title: "Definição",
    icon: "BookOpen",
    accent: "primary",
    aliases: [
      "definicao", "definition", "conceito", "introducao", "intro",
      "visao geral", "overview", "o que e",
    ],
  },
  {
    id: "epidemiology",
    title: "Epidemiologia & Etiologia",
    icon: "Activity",
    aliases: [
      "epidemiologia", "etiologia", "causas", "fatores de risco",
      "fisiopatologia", "etiology", "pathophysiology",
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnóstico",
    icon: "Stethoscope",
    accent: "primary",
    aliases: [
      "diagnostico", "diagnosis", "quadro clinico", "apresentacao clinica",
      "clinical", "rastreamento", "rastreamento e identificacao",
      "avaliacao", "avaliacao inicial", "exame fisico", "anamnese",
      "exames", "exames complementares", "criterios diagnosticos",
    ],
  },
  {
    id: "differential",
    title: "Diagnóstico Diferencial",
    icon: "GitBranch",
    aliases: [
      "diagnostico diferencial", "differential", "diagnosticos diferenciais",
      "ddx",
    ],
  },
  {
    id: "severity",
    title: "Classificação de Gravidade",
    icon: "AlertTriangle",
    accent: "warning",
    aliases: [
      "gravidade", "classificacao", "classificacao de gravidade",
      "estratificacao", "estratificacao de risco", "severity",
      "escore", "escores",
    ],
  },
  {
    id: "conduct",
    title: "Conduta",
    icon: "ListChecks",
    accent: "primary",
    aliases: [
      "conduta", "manejo", "tratamento", "abordagem", "abordagem terapeutica",
      "treatment", "management", "fluxograma", "fluxo",
    ],
  },
  {
    id: "medications",
    title: "Medicações",
    icon: "Pill",
    aliases: [
      "medicacoes", "medicamentos", "drogas", "farmacos",
      "prescricao", "prescricoes", "guia de prescricoes",
      "medications", "drugs", "doses",
    ],
  },
  {
    id: "monitoring",
    title: "Monitorização & Acompanhamento",
    icon: "LineChart",
    aliases: [
      "monitorizacao", "monitoramento", "acompanhamento", "seguimento",
      "followup", "follow-up", "reavaliacao",
    ],
  },
  {
    id: "commonErrors",
    title: "Erros Comuns & Armadilhas",
    icon: "AlertOctagon",
    accent: "destructive",
    aliases: [
      "erros comuns", "armadilhas", "pitfalls", "erros",
      "cuidados", "alertas", "atencao",
    ],
  },
  {
    id: "checklist",
    title: "Checklist",
    icon: "CheckSquare",
    accent: "success",
    aliases: [
      "checklist", "lista de verificacao", "check list",
      "passo a passo", "resumo pratico",
    ],
  },
  {
    id: "discharge",
    title: "Critérios de Alta / Internação",
    icon: "LogOut",
    aliases: [
      "criterios de alta", "alta", "internacao", "criterios de internacao",
      "disposicao", "destino", "disposition", "discharge",
    ],
  },
  {
    id: "references",
    title: "Referências",
    icon: "Library",
    accent: "muted",
    aliases: [
      "referencias", "referencias bibliograficas", "bibliografia",
      "references", "fontes",
    ],
  },
];

/** Seção genérica aceita pelo normalizador (compatível com Emergency/Full). */
export interface RawProtocolSection {
  id: string;
  title: string;
  content: string;
}

/** Slot normalizado: spec do template + conteúdo concatenado das seções casadas. */
export interface NormalizedSection {
  spec: StandardSectionSpec;
  content: string;
  /** Títulos originais que foram fundidos neste slot. */
  sourceTitles: string[];
}

/** Seção "extra" — presente no protocolo mas fora do template padrão. */
export interface ExtraSection extends RawProtocolSection {}

export interface NormalizedProtocol {
  /** Seções padrão preenchidas, na ORDEM canônica. */
  standard: NormalizedSection[];
  /** Seções do protocolo que não casaram com nenhum slot padrão. */
  extras: ExtraSection[];
}

/** Remove acentos e normaliza para matching de aliases. */
const norm = (s: string): string =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

/** Mapa alias→specId, construído uma vez. */
const ALIAS_INDEX: Map<string, StandardSectionId> = (() => {
  const m = new Map<string, StandardSectionId>();
  for (const spec of STANDARD_SECTIONS) {
    m.set(norm(spec.title), spec.id);
    for (const a of spec.aliases) m.set(norm(a), spec.id);
  }
  return m;
})();

/** Resolve uma seção bruta para um id padrão (ou null). */
export function resolveStandardId(rawTitle: string): StandardSectionId | null {
  const n = norm(rawTitle);
  if (ALIAS_INDEX.has(n)) return ALIAS_INDEX.get(n)!;
  // Match parcial: pega o primeiro alias contido no título.
  for (const [alias, id] of ALIAS_INDEX) {
    if (n.includes(alias) || alias.includes(n)) return id;
  }
  return null;
}

/**
 * Normaliza um array de seções para o template padrão.
 * Seções que casam com o mesmo slot são concatenadas (preservando títulos originais).
 * Seções sem match vão para `extras`.
 */
export function normalizeProtocolSections(
  sections: RawProtocolSection[],
): NormalizedProtocol {
  const buckets = new Map<StandardSectionId, NormalizedSection>();
  const extras: ExtraSection[] = [];

  for (const s of sections) {
    const id = resolveStandardId(s.title);
    if (!id) {
      extras.push(s);
      continue;
    }
    const spec = STANDARD_SECTIONS.find(x => x.id === id)!;
    const existing = buckets.get(id);
    if (existing) {
      existing.content += `\n\n${s.content}`;
      existing.sourceTitles.push(s.title);
    } else {
      buckets.set(id, { spec, content: s.content, sourceTitles: [s.title] });
    }
  }

  const standard: NormalizedSection[] = STANDARD_SECTIONS
    .map(spec => buckets.get(spec.id))
    .filter((x): x is NormalizedSection => Boolean(x));

  return { standard, extras };
}
