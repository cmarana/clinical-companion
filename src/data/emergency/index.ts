import type { EmergencyCategory } from "./types";
import { resuscitationProtocols } from "./resuscitation";
import { samuCriticalResuscitationProtocols } from "./samu_critical_resuscitation";
import { samuP1MissingBatch1Protocols } from "./samu_p1_faltantes_lote2";
import { samuP1MissingBatch2Protocols } from "./samu_p1_faltantes_lote3";
import { samuP1MissingBatch3Protocols } from "./samu_p1_faltantes_lote4";
import { cardiovascularProtocols } from "./cardiovascular";
import { cardiovascularProtocols2 } from "./cardiovascular2";
import { cardiovascularProtocols3 } from "./cardiovascular3";
import { respiratoryProtocols } from "./respiratory";
import { respiratoryProtocols2 } from "./respiratory2";
import { neurologicalProtocols } from "./neurological";
import { neurologicalProtocols2 } from "./neurological2";
import { neurologicalProtocols3 } from "./neurological3";
import { neurologicalProtocols4 } from "./neurological4";
import { neurologicalProtocols5 } from "./neurological5";
import { sepsisProtocols } from "./sepsis";
import { sepsisProtocols2 } from "./sepsis2";
import { sepsisProtocols3 } from "./sepsis3";
import { metabolicProtocols } from "./metabolic";
import { metabolicProtocols2 } from "./metabolic2";
import { metabolicProtocols4 } from "./metabolic4";
import { metabolicProtocols5 } from "./metabolic5";
import { nephrologyEmergencyProtocols } from "./nephrology";
import { traumaProtocols } from "./trauma";
import { traumaProtocols2 } from "./trauma2";
import { traumaProtocols5 } from "./trauma5";
import { intoxicationProtocols } from "./intoxication";
import { intoxicationProtocols4 } from "./intoxication4";
import { intoxicationProtocols5 } from "./intoxication5";
import { proceduresProtocols4 } from "./procedures4";
import { pediatricEmergencyProtocols } from "./pediatric";
import { pediatricEmergencyProtocols2 } from "./pediatric2";
import { neonatalProtocols } from "./neonatal";
import { obstetricsProtocols } from "./obstetrics";
import { obstetricsProtocols2 } from "./obstetrics2";
import { obstetricsProtocols5 } from "./obstetrics5";
import { infectiousProtocols } from "./infectious";
import { infectiousProtocols2 } from "./infectious2";
import { infectiousProtocols3 } from "./infectious3";
import { infectiousProtocols4 } from "./infectious4";
import { hematologyEmergencyProtocols } from "./hematology";
import { oncologyEmergencyProtocols } from "./oncology";
import { gastroenterologyEmergencyProtocols } from "./gastroenterology";
import { otherEmergencyProtocols } from "./other_emergencies";
import { psychiatryEmergencyProtocols } from "./psychiatry";
import { psychiatryEmergencyProtocols2 } from "./psychiatry2";
import {
  ophthalmologyEmergencyProtocols,
  otorhinolaryngologyEmergencyProtocols,
  allergyEmergencyProtocols,
  vascularEmergencyProtocols,
  dermatologyEmergencyProtocols,
  orthopedicEmergencyProtocols,
  pediatricEmergencyProtocols3,
} from "./combined_remaining";
import { vascularGeriatricsEmergencyProtocols } from "./vascular_geriatrics";
import { thoracicEntEmergencyProtocols } from "./thoracic_ent";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

/**
 * Deduplica por ID — mantém a primeira ocorrência de cada protocolo.
 * Evita que o mesmo protocolo apareça duas vezes em uma categoria
 * quando importado de múltiplos arquivos (ex: trauma2 + trauma4).
 */
function dedup<T extends { id: string }>(arr: T[]): T[] {
  const seen = new Set<string>();
  return arr.filter(p => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}

/**
 * IDs de protocolos que NÃO são emergência aguda e devem ficar
 * apenas em Especialidades — não aparecem aqui.
 *
 * Critério: protocolos que não exigem conduta imediata no PS/UTI,
 * são tipicamente ambulatoriais, cirúrgicos eletivos, ou de
 * acompanhamento de internação sem urgência imediata.
 */
const NAO_EMERGENCIA = new Set([
  // Cardiologia — ambulatorial/internação
  "endocarditis",
  "pericarditis-acute",
  // Neurologia — internação/ambulatorial
  "tia-management",
  "guillain-barre",
  "neurocysticercosis-hic",
  "brain-abscess",
  // Infectologia — internação sem urgência imediata
  "c-difficile-severe",
  // Cirurgia — eletiva ou especialidade
  "acute-cholecystitis",
  "acute-appendicitis",
  "bowel-obstruction",
  "strangulated-hernia",
  "hollow-viscus-perforation",
  "sigmoid-volvulus",
  "variceal-bleeding",
  // Trauma — ortopedia/especialidade
  "fratura-femur",
  "fratura-exposta",
  "imobilizacao-trauma",
  "fast-trauma",
  "fast-efast",
  // Geriatria/Ortopedia
  "hip-fracture-elderly",
  // Urologia — especialidade
  "priapism-ischemic",
  "paraphimosis",
  // Oftalmologia — já em combined_remaining, manter só se urgência real
  // (glaucoma agudo e oclusão artéria retina SÃO emergências oftalmológicas — manter)
]);

function filterEmergency<T extends { id: string }>(arr: T[]): T[] {
  return arr.filter(p => !NAO_EMERGENCIA.has(p.id));
}

export const emergencyCategories: EmergencyCategory[] = [
  {
    id: "resuscitation",
    title: "Ressuscitação e Via Aérea",
    protocols: dedup([
      ...resuscitationProtocols,
      ...samuCriticalResuscitationProtocols,
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "resuscitation"),
    ]),
  },
  {
    id: "cardiovascular",
    title: "Cardiovasculares de Emergência",
    protocols: dedup(filterEmergency([
      ...cardiovascularProtocols,
      ...cardiovascularProtocols2,
      ...cardiovascularProtocols3,
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "cardiovascular"),
    ])),
  },
  {
    id: "respiratory",
    title: "Respiratório",
    protocols: dedup([
      ...respiratoryProtocols,
      ...respiratoryProtocols2,
      ...thoracicEntEmergencyProtocols.filter(p => p.id === "pleural-empyema"),
      ...samuP1MissingBatch2Protocols.filter(p => p.categoryId === "respiratory"),
    ]),
  },
  {
    id: "neurological",
    title: "Neurológico",
    protocols: dedup(filterEmergency([
      ...neurologicalProtocols,
      ...neurologicalProtocols2,
      ...neurologicalProtocols3,
      ...neurologicalProtocols4,
      ...neurologicalProtocols5,
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "neurological"),
    ])),
  },
  {
    id: "sepsis",
    title: "Sepse e Choque",
    protocols: dedup([
      ...sepsisProtocols,
      ...sepsisProtocols2,
      ...sepsisProtocols3,
      ...vascularGeriatricsEmergencyProtocols.filter(p =>
        p.id === "ruptured-aaa" || p.id === "massive-pe-hemodynamic"
      ),
    ]),
  },
  {
    id: "metabolic",
    title: "Metabólico e Eletrolítico",
    protocols: dedup([
      ...metabolicProtocols,
      ...metabolicProtocols2,
      ...metabolicProtocols4,
      ...metabolicProtocols5,
      ...nephrologyEmergencyProtocols,
      ...thoracicEntEmergencyProtocols.filter(p => p.id === "adrenal-crisis"),
      ...samuP1MissingBatch2Protocols.filter(p => p.categoryId === "metabolic"),
    ]),
  },
  {
    id: "trauma",
    title: "Trauma (ATLS)",
    protocols: dedup(filterEmergency([
      ...traumaProtocols,
      ...traumaProtocols2,
      ...traumaProtocols5,
    ])),
  },
  {
    id: "obstetrics",
    title: "Obstetrícia de Emergência",
    protocols: dedup([
      ...obstetricsProtocols,
      ...obstetricsProtocols2,
      ...obstetricsProtocols5,
    ]),
  },
  {
    id: "intoxication",
    title: "Intoxicações e Envenenamentos",
    protocols: dedup([
      ...intoxicationProtocols,
      ...intoxicationProtocols4,
      ...intoxicationProtocols5,
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "intoxication"),
      ...samuP1MissingBatch2Protocols.filter(p => p.categoryId === "intoxication"),
    ]),
  },
  {
    id: "procedures",
    title: "Procedimentos de Emergência",
    protocols: dedup(proceduresProtocols4),
  },
  {
    id: "infectious",
    title: "Infectologia de Emergência",
    protocols: dedup([
      ...infectiousProtocols,
      ...infectiousProtocols2,
      ...infectiousProtocols3,
      ...infectiousProtocols4,
      ...samuP1MissingBatch2Protocols.filter(p => p.categoryId === "infectious"),
      ...samuP1MissingBatch3Protocols.filter(p => p.categoryId === "infectious"),
    ]),
  },
  {
    id: "hematology-emergency",
    title: "Hematologia e Oncologia de Emergência",
    protocols: dedup([
      ...hematologyEmergencyProtocols,
      ...oncologyEmergencyProtocols,
    ]),
  },
  {
    id: "gastroenterology-emergency",
    title: "Gastroenterologia de Emergência",
    // surgery.ts removido — contém cirurgias eletivas (apendicite, colecistite)
    // mantém apenas gastroenterologia de emergência real e Boerhaave
    protocols: dedup([
      ...gastroenterologyEmergencyProtocols,
      ...thoracicEntEmergencyProtocols.filter(p => p.id === "boerhaave-esophageal-perforation"),
      ...samuP1MissingBatch3Protocols.filter(p => p.categoryId === "gastroenterology-emergency"),
    ]),
  },
  {
    id: "pediatric-emergency",
    title: "Pediatria de Emergência",
    protocols: dedup([
      ...pediatricEmergencyProtocols,
      ...pediatricEmergencyProtocols2,
      ...pediatricEmergencyProtocols3,
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "pediatric-emergency"),
      ...samuP1MissingBatch2Protocols.filter(p => p.categoryId === "pediatric-emergency"),
      ...samuP1MissingBatch3Protocols.filter(p => p.categoryId === "pediatric-emergency"),
    ]),
  },
  {
    id: "neonatal",
    title: "Neonatal",
    protocols: dedup([
      ...neonatalProtocols,
      ...samuP1MissingBatch3Protocols.filter(p => p.categoryId === "neonatal"),
    ]),
  },
  {
    id: "psychiatry-emergency",
    title: "Psiquiatria de Emergência",
    protocols: dedup([
      ...psychiatryEmergencyProtocols,
      ...psychiatryEmergencyProtocols2,
    ]),
  },
  {
    id: "ophthalmology-emergency",
    title: "Oftalmologia de Emergência",
    // Glaucoma agudo e oclusão artéria retina SÃO emergências reais — mantidos
    protocols: dedup(ophthalmologyEmergencyProtocols),
  },
  {
    id: "otorhino-emergency",
    title: "ORL de Emergência",
    protocols: dedup(otorhinolaryngologyEmergencyProtocols),
  },
  {
    id: "vascular-emergency",
    title: "Vascular de Emergência",
    protocols: dedup(vascularEmergencyProtocols),
  },
  {
    id: "dermatology-emergency",
    title: "Dermatologia de Emergência",
    protocols: dedup(dermatologyEmergencyProtocols),
  },
  {
    id: "orthopedic-emergency",
    title: "Ortopedia de Emergência",
    // Remove fraturas eletivas — mantém apenas urgências ortopédicas reais
    protocols: dedup(filterEmergency(orthopedicEmergencyProtocols)),
  },
  {
    id: "other-emergencies",
    title: "Outras Emergências",
    protocols: dedup([
      ...otherEmergencyProtocols,
      ...allergyEmergencyProtocols,
      // delirium idoso mantido — pode ser emergência no PS
      ...vascularGeriatricsEmergencyProtocols.filter(p => p.id === "delirium-elderly"),
      ...thoracicEntEmergencyProtocols.filter(p => p.id === "central-vertigo-emergency"),
      ...samuP1MissingBatch1Protocols.filter(p => p.categoryId === "other-emergencies"),
    ]),
  },
];

// Aplica metadados SAMU 192 (samuCodes/samuLevel/samuSource + referência)
// de forma idempotente. Constrói o mapa a partir do conjunto completo
// antes de aplicar em cada categoria, para que protocolos de qualquer
// categoria possam casar com os grupos definidos.
import { applySamuMetadataAll, findEmergencyIdBySamuCode } from "./samuMapping";
const _allFlat = emergencyCategories.flatMap(c => c.protocols);
applySamuMetadataAll(_allFlat); // semeia o cache interno do resolvedor
for (const cat of emergencyCategories) {
  cat.protocols = applySamuMetadataAll(cat.protocols);
}
export { findEmergencyIdBySamuCode };

// Lista plana para busca/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}

export function getEmergencyCategory(id: string) {
  return emergencyCategories.find(c => c.id === id);
}

/** Categorias novas nesta release (exibem badge "Novo"). */
export const NEW_EMERGENCY_CATEGORY_IDS = new Set<string>([
  "hematology-emergency",
  "gastroenterology-emergency",
  "ophthalmology-emergency",
  "otorhino-emergency",
  "vascular-emergency",
  "dermatology-emergency",
  "orthopedic-emergency",
]);

/** Protocolos novos ou atualizados nesta release (badge "Atualizado"). */
export const UPDATED_EMERGENCY_PROTOCOL_IDS = new Set<string>([
  "endocarditis",
  "cerebral-venous-thrombosis",
  "airway-obstruction-foreign-body",
  "snakebite-bothrops",
  "hellp-syndrome",
  "psychomotor-agitation",
]);

let _validated = false;
export function validateEmergencyData() {
  const emptyCategories: string[] = [];
  const invalidProtocols: { categoryId: string; index: number }[] = [];
  const protocolsWithoutSections: string[] = [];
  const emptySections: { protocolId: string; sectionId: string }[] = [];
  const seenIds = new Map<string, number>();
  const duplicateIds: string[] = [];

  for (const cat of emergencyCategories) {
    if (!cat.protocols || cat.protocols.length === 0) emptyCategories.push(cat.id);
    for (const [index, p] of (cat.protocols ?? []).entries()) {
      if (!p?.id) {
        invalidProtocols.push({ categoryId: cat.id, index });
        continue;
      }
      seenIds.set(p.id, (seenIds.get(p.id) ?? 0) + 1);
      if (!p.sections || p.sections.length === 0) {
        protocolsWithoutSections.push(p.id);
      } else {
        for (const s of p.sections) {
          if (!s.content || s.content.trim().length === 0) {
            emptySections.push({ protocolId: p.id, sectionId: s.id });
          }
        }
      }
    }
  }
  for (const [id, count] of seenIds) {
    if (count > 1) duplicateIds.push(`${id} (x${count})`);
  }

  if (!_validated && import.meta.env?.DEV) {
    _validated = true;
    if (emptyCategories.length) console.warn("[emergency] categorias vazias:", emptyCategories);
    if (invalidProtocols.length) console.warn("[emergency] protocolos inválidos:", invalidProtocols);
    if (protocolsWithoutSections.length) console.warn("[emergency] protocolos sem seções:", protocolsWithoutSections);
    if (emptySections.length) console.warn("[emergency] seções vazias:", emptySections);
    if (duplicateIds.length) console.warn("[emergency] IDs duplicados:", duplicateIds);
  }
  return {
    emptyCategories, invalidProtocols, protocolsWithoutSections, emptySections, duplicateIds,
    totalCategories: emergencyCategories.length,
    totalProtocols: allEmergencyProtocols.length,
  };
}

if (typeof window !== "undefined" && import.meta.env?.DEV) {
  validateEmergencyData();
}

/** Extrai "Última revisão" e versão da seção de introdução, se presentes. */
export function extractProtocolMeta(protocol: import("./types").EmergencyProtocol) {
  if (protocol.version || protocol.lastReviewed) {
    return { version: protocol.version, lastReviewed: protocol.lastReviewed };
  }
  const intro = protocol.sections.find(s => s.id === "intro")?.content ?? "";
  const reviewMatch = intro.match(/Última revisão:\s*([^·.\n]+)/i);
  const versionMatch = intro.match(/\bv(\d+(?:\.\d+)*)\b/i);
  return {
    lastReviewed: reviewMatch ? reviewMatch[1].trim() : undefined,
    version: versionMatch ? `v${versionMatch[1]}` : undefined,
  };
}
