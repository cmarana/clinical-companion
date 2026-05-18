import type { EmergencyCategory } from "./types";
import { resuscitationProtocols } from "./resuscitation";
import { cardiovascularProtocols } from "./cardiovascular";
import { cardiovascularProtocols2 } from "./cardiovascular2";
import { cardiovascularProtocols3 } from "./cardiovascular3";
import { respiratoryProtocols } from "./respiratory";
import { respiratoryProtocols2 } from "./respiratory2";
import { neurologicalProtocols } from "./neurological";
import { neurologicalProtocols2 } from "./neurological2";
import { neurologicalProtocols3 } from "./neurological3";
import { neurologicalProtocols4 } from "./neurological4";
import { sepsisProtocols } from "./sepsis";
import { sepsisProtocols2 } from "./sepsis2";
import { sepsisProtocols3 } from "./sepsis3";
import { metabolicProtocols } from "./metabolic";
import { metabolicProtocols2 } from "./metabolic2";
import { metabolicProtocols3 } from "./metabolic3";
import { metabolicProtocols4 } from "./metabolic4";
import { metabolicProtocols5 } from "./metabolic5";
import { nephrologyEmergencyProtocols } from "./nephrology";
import { traumaProtocols } from "./trauma";
import { traumaProtocols2 } from "./trauma2";
import { traumaProtocols3 } from "./trauma3";
import { traumaProtocols4 } from "./trauma4";
import { traumaProtocols5 } from "./trauma5";
import { intoxicationProtocols } from "./intoxication";
import { intoxicationProtocols4 } from "./intoxication4";
import { intoxicationProtocols5 } from "./intoxication5";
import { proceduresProtocols } from "./procedures";
import { proceduresProtocols4 } from "./procedures4";
import { pediatricEmergencyProtocols } from "./pediatric";
import { pediatricEmergencyProtocols2 } from "./pediatric2";
import { neonatalProtocols } from "./neonatal";
import { obstetricsProtocols } from "./obstetrics";
import { obstetricsProtocols2 } from "./obstetrics2";
import { obstetricsProtocols4 } from "./obstetrics4";
import { obstetricsProtocols5 } from "./obstetrics5";
import { infectiousProtocols } from "./infectious";
import { infectiousProtocols2 } from "./infectious2";
import { infectiousProtocols3 } from "./infectious3";
import { infectiousProtocols4 } from "./infectious4";
import { hematologyEmergencyProtocols } from "./hematology";
import { oncologyEmergencyProtocols } from "./oncology";
import { gastroenterologyEmergencyProtocols } from "./gastroenterology";
import { surgeryEmergencyProtocols } from "./surgery";
import { urologyEmergencyProtocols } from "./urology";
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
import { neurologicalProtocols5 } from "./neurological5";
import { vascularGeriatricsEmergencyProtocols } from "./vascular_geriatrics";
import { thoracicEntEmergencyProtocols } from "./thoracic_ent";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

export const emergencyCategories: EmergencyCategory[] = [
  { id: "resuscitation", title: "Ressuscitação e Via Aérea", protocols: resuscitationProtocols },
  { id: "cardiovascular", title: "Cardiovasculares de Emergência", protocols: [...cardiovascularProtocols, ...cardiovascularProtocols2, ...cardiovascularProtocols3] },
  { id: "respiratory", title: "Respiratório", protocols: [...respiratoryProtocols, ...respiratoryProtocols2, ...thoracicEntEmergencyProtocols.filter(p => p.id === "pleural-empyema")] },
  { id: "neurological", title: "Neurológico", protocols: [...neurologicalProtocols, ...neurologicalProtocols2, ...neurologicalProtocols3, ...neurologicalProtocols4, ...neurologicalProtocols5] },
  { id: "sepsis", title: "Sepse e Choque", protocols: [...sepsisProtocols, ...sepsisProtocols2, ...sepsisProtocols3, ...vascularGeriatricsEmergencyProtocols.filter(p => p.id === "ruptured-aaa" || p.id === "massive-pe-hemodynamic")] },
  { id: "metabolic", title: "Metabólico e Eletrolítico", protocols: [...metabolicProtocols, ...metabolicProtocols2, ...metabolicProtocols3, ...metabolicProtocols4, ...metabolicProtocols5, ...nephrologyEmergencyProtocols, ...urologyEmergencyProtocols, ...thoracicEntEmergencyProtocols.filter(p => p.id === "adrenal-crisis")] },
  { id: "trauma", title: "Trauma (ATLS)", protocols: [...traumaProtocols, ...traumaProtocols2, ...traumaProtocols3, ...traumaProtocols4, ...traumaProtocols5] },
  { id: "obstetrics", title: "Obstetrícia de Emergência", protocols: [...obstetricsProtocols, ...obstetricsProtocols2, ...obstetricsProtocols4, ...obstetricsProtocols5] },
  { id: "intoxication", title: "Intoxicações e Envenenamentos", protocols: [...intoxicationProtocols, ...intoxicationProtocols4, ...intoxicationProtocols5] },
  { id: "procedures", title: "Procedimentos de Emergência", protocols: [...proceduresProtocols, ...proceduresProtocols4] },
  { id: "infectious", title: "Infectologia de Emergência", protocols: [...infectiousProtocols, ...infectiousProtocols2, ...infectiousProtocols3, ...infectiousProtocols4] },
  { id: "hematology-emergency", title: "Hematologia e Oncologia de Emergência", protocols: [...hematologyEmergencyProtocols, ...oncologyEmergencyProtocols] },
  { id: "gastroenterology-emergency", title: "Gastroenterologia e Cirurgia de Emergência", protocols: [...gastroenterologyEmergencyProtocols, ...surgeryEmergencyProtocols, ...thoracicEntEmergencyProtocols.filter(p => p.id === "boerhaave-esophageal-perforation")] },
  { id: "pediatric-emergency", title: "Pediatria de Emergência", protocols: [...pediatricEmergencyProtocols, ...pediatricEmergencyProtocols2, ...pediatricEmergencyProtocols3] },
  { id: "neonatal", title: "Neonatal", protocols: neonatalProtocols },
  { id: "psychiatry-emergency", title: "Psiquiatria de Emergência", protocols: [...psychiatryEmergencyProtocols, ...psychiatryEmergencyProtocols2] },
  { id: "ophthalmology-emergency", title: "Oftalmologia de Emergência", protocols: ophthalmologyEmergencyProtocols },
  { id: "otorhino-emergency", title: "ORL de Emergência", protocols: otorhinolaryngologyEmergencyProtocols },
  { id: "vascular-emergency", title: "Vascular Periférico de Emergência", protocols: vascularEmergencyProtocols },
  { id: "dermatology-emergency", title: "Dermatologia de Emergência", protocols: dermatologyEmergencyProtocols },
  { id: "orthopedic-emergency", title: "Ortopedia de Emergência", protocols: orthopedicEmergencyProtocols },
  { id: "other-emergencies", title: "Outras Emergências Frequentes", protocols: [...otherEmergencyProtocols, ...allergyEmergencyProtocols, ...vascularGeriatricsEmergencyProtocols.filter(p => p.id === "delirium-elderly" || p.id === "hip-fracture-elderly"), ...thoracicEntEmergencyProtocols.filter(p => p.id === "central-vertigo-emergency")] },
];

// Flat list for search/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}

export function getEmergencyCategory(id: string) {
  return emergencyCategories.find(c => c.id === id);
}

/** Categorias adicionadas/atualizadas em Mai/2026 (exibem badge "Novo"). */
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
  const protocolsWithoutSections: string[] = [];
  const emptySections: { protocolId: string; sectionId: string }[] = [];
  const seenIds = new Map<string, number>();
  const duplicateIds: string[] = [];

  for (const cat of emergencyCategories) {
    if (!cat.protocols || cat.protocols.length === 0) emptyCategories.push(cat.id);
    for (const p of cat.protocols ?? []) {
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
    if (protocolsWithoutSections.length) console.warn("[emergency] protocolos sem seções:", protocolsWithoutSections);
    if (emptySections.length) console.warn("[emergency] seções vazias:", emptySections);
    if (duplicateIds.length) console.warn("[emergency] IDs duplicados:", duplicateIds);
  }
  return {
    emptyCategories, protocolsWithoutSections, emptySections, duplicateIds,
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
