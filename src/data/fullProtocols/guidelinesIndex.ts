/**
 * Índice derivado de diretrizes por protocolo.
 *
 * Importa apenas os arquivos que populam `guidelines` (atualmente 6),
 * mantendo o bundle da listagem leve (sem puxar os ~190 arquivos completos).
 *
 * Quando um novo arquivo de protocolo passar a incluir `guidelines`,
 * adicione-o ao array `SOURCES` abaixo.
 */
import type { FullProtocol, GuidelineSource } from "./types";
import { PATCHES_2026, mergeGuidelines } from "./_patches2026";

import { cardioFullProtocols } from "./cardiology";
import { cardioFullProtocols4 } from "./cardiology4";
import { emergencyFullProtocols } from "./emergency";
import { neuroFullProtocols } from "./neurology";
import { neuroFullProtocols3 } from "./neurology3";
import { sepsisFullProtocols } from "./sepsis";
import { pediatricFullProtocols2 } from "./pediatric2";

const SOURCES: FullProtocol[][] = [
  cardioFullProtocols,
  cardioFullProtocols4,
  emergencyFullProtocols,
  neuroFullProtocols,
  neuroFullProtocols3,
  sepsisFullProtocols,
  pediatricFullProtocols2,
];

export interface ProtocolGuidelinesEntry {
  protocolId: string;
  guidelines: GuidelineSource[];
  /** Sociedades únicas em ordem alfabética. */
  societies: string[];
  /** Ano da diretriz mais recente entre todas (para ordenação). */
  latestYear: number;
}

const buildIndex = (): Map<string, ProtocolGuidelinesEntry> => {
  const map = new Map<string, ProtocolGuidelinesEntry>();
  // 1) Coleta diretrizes nativas dos arquivos-fonte
  const native = new Map<string, GuidelineSource[]>();
  for (const list of SOURCES) {
    for (const p of list) {
      if (!p.guidelines || p.guidelines.length === 0) continue;
      native.set(p.id, p.guidelines);
    }
  }

  // 2) Aplica os patches 2025/2026 (mescla por society+year+title)
  const patchMap = new Map(PATCHES_2026.map((pt) => [pt.protocolId, pt]));
  const allIds = new Set<string>([...native.keys(), ...patchMap.keys()]);

  for (const id of allIds) {
    const base = native.get(id);
    const patch = patchMap.get(id);
    const merged = patch ? mergeGuidelines(base, patch.guidelines) : base!;
    if (!merged || merged.length === 0) continue;

    const societies = Array.from(new Set(merged.map((g) => g.society))).sort();
    const latestYear = merged.reduce((max, g) => Math.max(max, g.year), 0);
    map.set(id, { protocolId: id, guidelines: merged, societies, latestYear });
  }
  return map;
};

const INDEX = buildIndex();

/** Map<protocolId, entry> para lookup O(1) na lista. */
export const protocolGuidelinesIndex = INDEX;

/**
 * Conjunto de IDs com revisão editorial PULSO 2026 aplicada via patch.
 * Usado para renderizar o badge "Atualizado em 2026" na listagem
 * sem precisar carregar o objeto completo do protocolo.
 */
export const patched2026Ids: Set<string> = new Set(
  PATCHES_2026
    .filter((p) => p.lastReviewed.startsWith("2026"))
    .map((p) => p.protocolId),
);

/** Retorna o rótulo "YYYY/MM" se o protocolo foi revisado em 2026. */
export function getReview2026Label(protocolId: string): string | null {
  const p = PATCHES_2026.find((x) => x.protocolId === protocolId);
  if (!p || !p.lastReviewed.startsWith("2026")) return null;
  return p.lastReviewed.replace("-", "/");
}

/** Universo de sociedades disponíveis (para popular o filtro multi-select). */
export const allSocieties: string[] = Array.from(
  new Set(Array.from(INDEX.values()).flatMap((e) => e.societies)),
).sort();

/** Faixa de anos disponível [min, max] (para o slider de ano). */
export const yearRange: [number, number] = (() => {
  const years = Array.from(INDEX.values()).flatMap((e) =>
    e.guidelines.map((g) => g.year),
  );
  if (years.length === 0) return [new Date().getFullYear(), new Date().getFullYear()];
  return [Math.min(...years), Math.max(...years)];
})();

export function getProtocolGuidelines(
  protocolId: string,
): ProtocolGuidelinesEntry | undefined {
  return INDEX.get(protocolId);
}
