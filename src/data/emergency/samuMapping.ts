// ──────────────────────────────────────────────────────────────────────────
// Aplica metadados SAMU 192 nos protocolos de Emergência/UTI existentes.
// Idempotente. Não duplica conteúdo, não altera condutas, não cria botões
// externos. A citação oficial entra APENAS na seção "Referências
// Bibliográficas". A resolução dos protocolos é feita por padrões de título
// (ver samuEmergencyMappings.ts) — nenhum ID é inventado.
// ──────────────────────────────────────────────────────────────────────────

import type { EmergencyProtocol } from "./types";
import { SAMU_REFERENCE, SAMU_REFERENCE_TEXT } from "./samuReference";
import { buildSamuMappings, type SamuMeta } from "./samuEmergencyMappings";

let _cache: Map<string, SamuMeta> | null = null;

function getMappings(arr: EmergencyProtocol[]): Map<string, SamuMeta> {
  if (_cache) return _cache;
  _cache = buildSamuMappings(arr);
  return _cache;
}

/** Anexa a citação SAMU à seção "Referências Bibliográficas", se ainda não houver. */
function appendSamuReference(p: EmergencyProtocol): EmergencyProtocol {
  if (!p.samuSource) return p;
  const citation = `\n\n• ${SAMU_REFERENCE_TEXT}`;
  const refIdx = p.sections.findIndex(s => s.id === "references");
  if (refIdx === -1) {
    return {
      ...p,
      sections: [
        ...p.sections,
        {
          id: "references",
          title: "Referências Bibliográficas",
          content: citation.trimStart(),
        },
      ],
    };
  }
  const ref = p.sections[refIdx];
  if (ref.content.includes("samu-192")) return p;
  const newSections = [...p.sections];
  newSections[refIdx] = { ...ref, content: ref.content + citation };
  return { ...p, sections: newSections };
}

function buildTags(existing: string[] | undefined, meta: SamuMeta): string[] {
  const codeTags = meta.codes.map(c => c.toLowerCase());
  return Array.from(
    new Set([
      ...(existing ?? []),
      "samu",
      "samu192",
      ...codeTags,
      ...meta.tags,
    ])
  );
}

/** Aplica metadados SAMU em uma lista inteira (única função pública usada). */
export function applySamuMetadataAll(arr: EmergencyProtocol[]): EmergencyProtocol[] {
  const map = getMappings(arr);
  return arr.map(p => {
    const meta = map.get(p.id);
    if (!meta) return p;
    const enriched: EmergencyProtocol = {
      ...p,
      samuCodes: Array.from(new Set([...(p.samuCodes ?? []), ...meta.codes])),
      samuLevel: Array.from(
        new Set([...(p.samuLevel ?? []), ...meta.level])
      ) as ("SBV" | "SAV")[],
      samuSource: p.samuSource ?? {
        title: SAMU_REFERENCE.title,
        url: SAMU_REFERENCE.url,
        sbvUrl: SAMU_REFERENCE.sbvUrl,
        savUrl: SAMU_REFERENCE.savUrl,
      },
      tags: buildTags(p.tags, meta),
    };
    return appendSamuReference(enriched);
  });
}

/** Lookup reverso: código SAMU → id do EmergencyProtocol (1º match). */
export function findEmergencyIdBySamuCode(code: string): string | undefined {
  if (!_cache) return undefined;
  const c = code.toUpperCase().trim();
  for (const [id, meta] of _cache) {
    if (meta.codes.some(k => k.toUpperCase() === c)) return id;
  }
  return undefined;
}
