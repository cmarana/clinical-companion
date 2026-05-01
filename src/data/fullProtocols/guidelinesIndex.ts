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

import { cardioFullProtocols } from "./cardiology";
import { cardioFullProtocols4 } from "./cardiology4";
import { emergencyFullProtocols } from "./emergency";
import { neuroFullProtocols } from "./neurology";
import { neuroFullProtocols3 } from "./neurology3";
import { sepsisFullProtocols } from "./sepsis";

const SOURCES: FullProtocol[][] = [
  cardioFullProtocols,
  cardioFullProtocols4,
  emergencyFullProtocols,
  neuroFullProtocols,
  neuroFullProtocols3,
  sepsisFullProtocols,
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
  for (const list of SOURCES) {
    for (const p of list) {
      if (!p.guidelines || p.guidelines.length === 0) continue;
      const societies = Array.from(new Set(p.guidelines.map((g) => g.society))).sort();
      const latestYear = p.guidelines.reduce((max, g) => Math.max(max, g.year), 0);
      map.set(p.id, { protocolId: p.id, guidelines: p.guidelines, societies, latestYear });
    }
  }
  return map;
};

const INDEX = buildIndex();

/** Map<protocolId, entry> para lookup O(1) na lista. */
export const protocolGuidelinesIndex = INDEX;

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
