// ──────────────────────────────────────────────────────────────────────────
// Integração discreta da Matriz SAMU 192 nos protocolos de Emergência/UTI.
//
// Não duplica conteúdo: aplica metadados (samuCodes, samuLevel, samuSource)
// e — quando a seção "Referências Bibliográficas" existe — anexa a citação
// oficial SAMU. NÃO cria seções novas, NÃO altera condutas, NÃO insere
// botões externos no card.
//
// IDs de protocolo auditados manualmente contra src/data/emergency/*.
// Códigos SAMU 192 conforme PDFs oficiais do Ministério da Saúde.
// ──────────────────────────────────────────────────────────────────────────

import type { EmergencyProtocol } from "./types";

const SAMU_HUB = "https://www.gov.br/saude/pt-br/composicao/saes/samu-192/publicacoes";
const SAMU_SBV = "https://www.gov.br/saude/pt-br/composicao/saes/samu-192/publicacoes/protocolo-de-suporte-basico-de-vida-1-2.pdf";
const SAMU_SAV = "https://www.gov.br/saude/pt-br/composicao/saes/samu-192/publicacoes/protocolo-de-suporte-avancado-de-vida-1.pdf";

function srcFor(level: ("SBV" | "SAV")[]) {
  if (level.includes("SAV") && level.includes("SBV")) {
    return {
      title:
        "SAMU 192 / Ministério da Saúde. Protocolos Nacionais de Intervenção para o SAMU 192 — Suporte Básico e Avançado de Vida.",
      url: SAMU_HUB,
    };
  }
  if (level.includes("SAV")) {
    return {
      title:
        "SAMU 192 / Ministério da Saúde. Protocolo de Suporte Avançado de Vida.",
      url: SAMU_SAV,
    };
  }
  return {
    title:
      "SAMU 192 / Ministério da Saúde. Protocolo de Suporte Básico de Vida.",
    url: SAMU_SBV,
  };
}

interface SamuMeta {
  codes: string[];
  level: ("SBV" | "SAV")[];
  tags?: string[];
}

/**
 * Mapa: id real de EmergencyProtocol → metadados SAMU 192.
 * Apenas correspondências seguras. NÃO inventar IDs.
 */
const SAMU_BY_PROTOCOL_ID: Record<string, SamuMeta> = {
  // Ressuscitação / Via aérea
  "em-pcr-adulto":           { codes: ["BC5", "AC15"], level: ["SBV", "SAV"], tags: ["pcr", "rcp", "samu", "bls", "acls"] },
  "em-pcr-pediatrica":       { codes: ["BC6", "AC16"], level: ["SBV", "SAV"], tags: ["pcr", "pediatria", "samu", "pals"] },
  "em-ritmo-chocavel":       { codes: ["AC15"],        level: ["SAV"],         tags: ["fv", "tv", "samu", "desfibrilacao"] },
  "em-ritmo-nao-chocavel":   { codes: ["AC15"],        level: ["SAV"],         tags: ["aesp", "assistolia", "samu"] },
  "em-pos-pcr":              { codes: ["AC17"],        level: ["SAV"],         tags: ["pos-pcr", "samu"] },
  "em-iot":                  { codes: ["AC1", "AC2"],  level: ["SAV"],         tags: ["iot", "via aerea", "samu"] },
  "em-sri":                  { codes: ["AC2"],         level: ["SAV"],         tags: ["sri", "samu"] },
  "em-va-dificil":           { codes: ["AC3"],         level: ["SAV"],         tags: ["via aerea dificil", "samu"] },
  "em-cricotireoidostomia":  { codes: ["AC4"],         level: ["SAV"],         tags: ["cricotireoidostomia", "samu"] },

  // Cardiovasculares
  "em-iam-supra":            { codes: ["AC18"],        level: ["SAV"],         tags: ["iam", "sca", "samu"] },
  "em-iam-sem-supra":        { codes: ["AC18"],        level: ["SAV"],         tags: ["iam", "sca", "samu"] },
  "em-dor-toracica":         { codes: ["BC9", "AC18"], level: ["SBV", "SAV"],  tags: ["dor toracica", "samu"] },
  "em-eap":                  { codes: ["AC22"],        level: ["SAV"],         tags: ["edema agudo de pulmao", "samu"] },
  "em-choque-cardiogenico":  { codes: ["AC23"],        level: ["SAV"],         tags: ["choque cardiogenico", "samu"] },
  "em-taquiarritmia-estavel":   { codes: ["AC20"],     level: ["SAV"],         tags: ["taquiarritmia", "samu"] },
  "em-taquiarritmia-instavel":  { codes: ["AC20"],     level: ["SAV"],         tags: ["taquiarritmia instavel", "samu"] },
  "em-bradicardia":          { codes: ["AC21"],        level: ["SAV"],         tags: ["bradicardia", "samu"] },
  "em-crise-hipertensiva":   { codes: ["AC24"],        level: ["SAV"],         tags: ["crise hipertensiva", "samu"] },
  "em-emergencia-hipertensiva": { codes: ["AC24"],     level: ["SAV"],         tags: ["emergencia hipertensiva", "samu"] },

  // Respiratório
  "em-asma-grave":           { codes: ["AC25"],        level: ["SAV"],         tags: ["asma", "samu"] },
  "em-dpoc-exacerbado":      { codes: ["AC26"],        level: ["SAV"],         tags: ["dpoc", "samu"] },
  "em-irpa":                 { codes: ["AC27"],        level: ["SAV"],         tags: ["irpa", "samu"] },
  "em-pneumotorax-hipertensivo": { codes: ["AC28"],    level: ["SAV"],         tags: ["pneumotorax hipertensivo", "samu"] },

  // Neurológico
  "avc-isquemico":           { codes: ["AC30"],        level: ["SAV"],         tags: ["avc", "samu"] },
  "avc-hemorragico":         { codes: ["AC30"],        level: ["SAV"],         tags: ["avc", "samu"] },
  "status-epilepticus":      { codes: ["AC31"],        level: ["SAV"],         tags: ["estado de mal epileptico", "samu"] },

  // Sepse
  "sepse-choque-septico":    { codes: ["AC32"],        level: ["SAV"],         tags: ["sepse", "samu"] },

  // Metabólico
  "cetoacidose-diabetica":   { codes: ["AC34"],        level: ["SAV"],         tags: ["cad", "samu"] },
  "hipoglicemia":            { codes: ["BC12", "AC33"], level: ["SBV", "SAV"], tags: ["hipoglicemia", "samu"] },

  // Trauma
  "trauma-atls":             { codes: ["BC18", "AC40"], level: ["SBV", "SAV"], tags: ["atls", "politrauma", "samu"] },
  "atendimento-politrauma":  { codes: ["BC18", "AC40"], level: ["SBV", "SAV"], tags: ["atls", "politrauma", "samu"] },

  // Obstetrícia
  "eclampsia":               { codes: ["AC48"],        level: ["SAV"],         tags: ["eclampsia", "samu"] },
  "pre-eclampsia-grave":     { codes: ["AC48"],        level: ["SAV"],         tags: ["pre-eclampsia", "samu"] },
  "hemorragia-pos-parto":    { codes: ["AC49"],        level: ["SAV"],         tags: ["hpp", "samu"] },

  // Intoxicações
  "intoxicacao-abordagem":   { codes: ["AC50"],        level: ["SAV"],         tags: ["intoxicacao", "samu"] },

  // Anafilaxia (em other_emergencies / allergy)
  "anafilaxia":              { codes: ["AC36"],        level: ["SAV"],         tags: ["anafilaxia", "samu"] },

  // Pediatria / Neonatal
  "reanimacao-neonatal":     { codes: ["AC55"],        level: ["SAV"],         tags: ["reanimacao neonatal", "samu"] },
  "convulsao-febril":        { codes: ["AC56"],        level: ["SAV"],         tags: ["convulsao febril", "samu"] },
};

/** Anexa a citação SAMU à seção "Referências Bibliográficas", se existir. */
function appendSamuReference(p: EmergencyProtocol): EmergencyProtocol {
  if (!p.samuSource) return p;
  const refIdx = p.sections.findIndex(s => s.id === "references");
  const citation = `\n\n• ${p.samuSource.title} Disponível em: ${p.samuSource.url}`;
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
  if (ref.content.includes("samu-192")) return p; // já contém
  const newSections = [...p.sections];
  newSections[refIdx] = { ...ref, content: ref.content + citation };
  return { ...p, sections: newSections };
}

/**
 * Aplica metadados SAMU 192 em um protocolo, sem duplicar nem alterar
 * conteúdo clínico. Idempotente.
 */
export function applySamuMetadata(p: EmergencyProtocol): EmergencyProtocol {
  const meta = SAMU_BY_PROTOCOL_ID[p.id];
  if (!meta) return p;
  const mergedTags = Array.from(new Set([...(p.tags ?? []), ...(meta.tags ?? [])]));
  const enriched: EmergencyProtocol = {
    ...p,
    samuCodes: meta.codes,
    samuLevel: meta.level,
    samuSource: srcFor(meta.level),
    tags: mergedTags,
  };
  return appendSamuReference(enriched);
}

/** Aplica metadados SAMU em uma lista inteira. */
export function applySamuMetadataAll(arr: EmergencyProtocol[]): EmergencyProtocol[] {
  return arr.map(applySamuMetadata);
}

/** Lookup reverso: código SAMU → id do EmergencyProtocol (1º match). */
export function findEmergencyIdBySamuCode(code: string): string | undefined {
  const c = code.toUpperCase().trim();
  for (const [id, meta] of Object.entries(SAMU_BY_PROTOCOL_ID)) {
    if (meta.codes.some(k => k.toUpperCase() === c)) return id;
  }
  return undefined;
}
