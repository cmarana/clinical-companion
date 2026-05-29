/**
 * Auditoria de cobertura: cruza a master list (`COVERAGE_MASTER`) com os
 * protocolos reais carregados em `fullProtocols` (já com patches 2025/2026
 * aplicados em runtime via `applyGuidelinePatches2026`).
 *
 * Status possíveis por entrada:
 *  - `missing`    — não existe protocolo correspondente no app
 *  - `outdated`   — existe, mas `lastReviewed` < ano alvo (ou ausente)
 *  - `incomplete` — existe, mas faltam seções obrigatórias mínimas ou guidelines
 *  - `ok`         — coberto, atualizado e completo
 */

import { fullProtocols } from "@/data/fullProtocols";
import type { FullProtocol } from "@/data/fullProtocols/types";
import { allEmergencyProtocols } from "@/data/emergency";
import type { EmergencyProtocol } from "@/data/emergency/types";
import {
  COVERAGE_MASTER,
  type CoverageEntry,
  type Sector,
} from "@/data/fullProtocols/_coverageMaster";

export type CoverageStatus = "ok" | "outdated" | "incomplete" | "missing";

export interface CoverageAuditRow {
  entry: CoverageEntry;
  status: CoverageStatus;
  matchedProtocol?: FullProtocol;
  matchedId?: string;
  reasons: string[];
  /** Ano da `lastReviewed` (ex.: 2026) — quando aplicável. */
  reviewedYear?: number;
  /** Sociedades efetivamente presentes no protocolo. */
  presentSocieties: string[];
  /** Sociedades esperadas mas ausentes. */
  missingSocieties: string[];
}

const REQUIRED_SECTION_IDS = ["conduct", "treatment", "references"] as const;

function buildIndex(): Map<string, FullProtocol> {
  const map = new Map<string, FullProtocol>();
  for (const p of fullProtocols) map.set(p.id, p);
  return map;
}

function findByTitle(hint: string): FullProtocol | undefined {
  const needle = hint.toLowerCase();
  return fullProtocols.find((p) => p.title?.toLowerCase().includes(needle));
}

/**
 * Adapta um EmergencyProtocol (lotes SAMU/UTI) para o formato esperado pelo
 * auditor de cobertura. Sintetiza `guidelines` a partir das tags/referências
 * e usa `lastReviewed` declarado ou inferido (badge="new" → ano corrente).
 */
function adaptEmergencyToFull(p: EmergencyProtocol): FullProtocol {
  const refText =
    p.sections.find((s) => s.id === "references" || s.id === "referencias")?.content ?? "";
  const tagSet = new Set((p.tags ?? []).map((t) => t.toLowerCase()));
  const text = `${refText}\n${(p.tags ?? []).join(" ")}`.toLowerCase();

  const SOCIETY_KEYWORDS: { society: string; needles: string[] }[] = [
    { society: "MS Brasil", needles: ["ms brasil", "ministério da saúde", "ministerio da saude", "pcdt", "funasa", "samu"] },
    { society: "AHA", needles: ["aha", "american heart"] },
    { society: "ESC", needles: ["esc ", "european society of cardiology"] },
    { society: "ATS", needles: ["ats ", "american thoracic"] },
    { society: "ERS", needles: ["ers ", "european respiratory"] },
    { society: "ATA", needles: ["ata ", "american thyroid"] },
    { society: "KDIGO", needles: ["kdigo"] },
    { society: "ESE", needles: ["ese ", "european society of endocrinology"] },
    { society: "SCCM", needles: ["sccm", "padis", "society of critical care"] },
    { society: "ELSO", needles: ["elso", "eolia"] },
    { society: "CHEST", needles: ["chest "] },
    { society: "ASH", needles: ["ash ", "american society of hematology"] },
    { society: "GINA", needles: ["gina"] },
    { society: "SBP", needles: ["sbp ", "sociedade brasileira de pediatria"] },
    { society: "AAP", needles: ["aap ", "american academy of pediatrics"] },
    { society: "WHO", needles: ["who ", "world health"] },
    { society: "WSES", needles: ["wses"] },
    { society: "SOBRASA", needles: ["sobrasa"] },
    { society: "WMS", needles: ["wms", "wilderness medical"] },
    { society: "AAPCC", needles: ["aapcc"] },
    { society: "WAO", needles: ["wao "] },
    { society: "NICE", needles: ["nice "] },
    { society: "AAN", needles: ["aan ", "american academy of neurology"] },
    { society: "AHA/ASA", needles: ["aha/asa", "ahaasa"] },
    { society: "BTS", needles: ["bts "] },
  ];
  const presentSocieties = SOCIETY_KEYWORDS.filter(({ needles }) =>
    needles.some((n) => text.includes(n) || tagSet.has(n.trim()))
  ).map((s) => s.society);

  const reviewedYear =
    (p.lastReviewed && parseInt(p.lastReviewed.match(/\d{4}/)?.[0] ?? "", 10)) ||
    (p.badge === "new" || p.badge === "updated" ? 2026 : 2025);

  // Normaliza ids de seções PT-BR (lotes SAMU) para os ids esperados pelo auditor.
  const SECTION_ID_ALIASES: Record<string, string> = {
    conduta: "conduct",
    tratamento: "treatment",
    referencias: "references",
    definicao: "def",
    identificacao: "screening",
    avaliacao: "screening",
  };
  const normalizedSections = p.sections.map((s) => ({
    ...s,
    id: SECTION_ID_ALIASES[s.id] ?? s.id,
  }));

  return {
    id: p.id,
    title: p.title,
    category: p.categoryId,
    lastReviewed: `${reviewedYear}-01-01`,
    sections: normalizedSections,
    guidelines: presentSocieties.map((society) => ({
      society,
      year: reviewedYear,
      title: `Referência ${society}`,
    })),
  } as unknown as FullProtocol;
}

function resolveProtocol(
  entry: CoverageEntry,
  byId: Map<string, FullProtocol>
): FullProtocol | undefined {
  if (byId.has(entry.expectedId)) return byId.get(entry.expectedId);
  for (const alias of entry.aliases ?? []) {
    if (byId.has(alias)) return byId.get(alias);
    // Tenta resolver via emergencyProtocols (lotes SAMU/UTI)
    const em = allEmergencyProtocols.find((p) => p.id === alias);
    if (em) return adaptEmergencyToFull(em);
  }
  // Fallback: prefixo expectedId em qualquer ID (ex.: "fp-iam-supra-card")
  const prefixHit = fullProtocols.find((p) => p.id.startsWith(entry.expectedId));
  if (prefixHit) return prefixHit;
  for (const hint of entry.titleHints ?? []) {
    const hit = findByTitle(hint);
    if (hit) return hit;
  }
  return undefined;
}

function reviewYearOf(p: FullProtocol): number | undefined {
  if (!p.lastReviewed) {
    // tenta inferir do guideline mais recente
    if (p.guidelines && p.guidelines.length > 0) {
      return Math.max(...p.guidelines.map((g) => g.year));
    }
    return undefined;
  }
  const y = parseInt(p.lastReviewed.slice(0, 4), 10);
  return Number.isFinite(y) ? y : undefined;
}

export function auditCoverage(): CoverageAuditRow[] {
  const byId = buildIndex();
  return COVERAGE_MASTER.map<CoverageAuditRow>((entry) => {
    const matched = resolveProtocol(entry, byId);
    if (!matched) {
      return {
        entry,
        status: "missing",
        reasons: ["Protocolo não encontrado no app"],
        presentSocieties: [],
        missingSocieties: entry.expectedSocieties,
      };
    }

    const reasons: string[] = [];
    const reviewedYear = reviewYearOf(matched);
    const presentSocieties = Array.from(
      new Set((matched.guidelines ?? []).map((g) => g.society))
    );
    const missingSocieties = entry.expectedSocieties.filter(
      (s) => !presentSocieties.some((ps) => ps.toLowerCase().includes(s.toLowerCase()))
    );

    // Incompleto: faltam seções obrigatórias com conteúdo
    const sectionMap = new Map(matched.sections.map((s) => [s.id, s.content?.trim() ?? ""]));
    const missingSections = REQUIRED_SECTION_IDS.filter(
      (id) => !sectionMap.get(id) || sectionMap.get(id)!.length < 30
    );
    if (missingSections.length > 0) {
      reasons.push(`Seções vazias/curtas: ${missingSections.join(", ")}`);
    }
    if (!matched.guidelines || matched.guidelines.length === 0) {
      reasons.push("Sem diretrizes/fontes oficiais cadastradas");
    } else if (missingSocieties.length > 0) {
      reasons.push(`Sociedades esperadas ausentes: ${missingSocieties.join(", ")}`);
    }

    // Desatualizado
    if (!reviewedYear || reviewedYear < entry.targetYear) {
      reasons.push(
        reviewedYear
          ? `Última revisão ${reviewedYear} < alvo ${entry.targetYear}`
          : `Sem campo lastReviewed (alvo ${entry.targetYear})`
      );
    }

    let status: CoverageStatus = "ok";
    const isOutdated = !reviewedYear || reviewedYear < entry.targetYear;
    const isIncomplete =
      missingSections.length > 0 || !matched.guidelines || matched.guidelines.length === 0;
    if (isIncomplete) status = "incomplete";
    else if (isOutdated) status = "outdated";

    return {
      entry,
      status,
      matchedProtocol: matched,
      matchedId: matched.id,
      reasons,
      reviewedYear,
      presentSocieties,
      missingSocieties,
    };
  });
}

export interface CoverageSummary {
  total: number;
  ok: number;
  outdated: number;
  incomplete: number;
  missing: number;
}

export function summarize(rows: CoverageAuditRow[]): CoverageSummary {
  return rows.reduce<CoverageSummary>(
    (acc, r) => {
      acc.total += 1;
      acc[r.status] += 1;
      return acc;
    },
    { total: 0, ok: 0, outdated: 0, incomplete: 0, missing: 0 }
  );
}

export function summarizeBySector(rows: CoverageAuditRow[]): Record<Sector, CoverageSummary> {
  const sectors: Sector[] = ["emergencia", "uti", "cti", "upa", "ps"];
  const out = {} as Record<Sector, CoverageSummary>;
  for (const s of sectors) {
    out[s] = summarize(rows.filter((r) => r.entry.sectors.includes(s)));
  }
  return out;
}

export const SECTOR_LABELS: Record<Sector, string> = {
  emergencia: "Emergência",
  uti: "UTI",
  cti: "CTI",
  upa: "UPA",
  ps: "Pronto-Socorro",
};

export const STATUS_LABELS: Record<CoverageStatus, string> = {
  ok: "OK",
  outdated: "Desatualizado",
  incomplete: "Incompleto",
  missing: "Faltante",
};

export function rowsToCsv(rows: CoverageAuditRow[]): string {
  const header = [
    "Status",
    "Prioridade",
    "Título",
    "Setores",
    "Ano alvo",
    "Última revisão",
    "Diretriz hint",
    "Sociedades esperadas",
    "Sociedades presentes",
    "ID app",
    "Motivos",
  ];
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      STATUS_LABELS[r.status],
      r.entry.priority,
      r.entry.title,
      r.entry.sectors.join("|"),
      String(r.entry.targetYear),
      r.reviewedYear ? String(r.reviewedYear) : "—",
      r.entry.guidelineHint,
      r.entry.expectedSocieties.join("|"),
      r.presentSocieties.join("|"),
      r.matchedId ?? "—",
      r.reasons.join(" · "),
    ]
      .map(escape)
      .join(",")
  );
  return [header.map(escape).join(","), ...lines].join("\n");
}
