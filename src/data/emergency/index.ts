import type { EmergencyCategory } from "./types";
import { resuscitationProtocols } from "./resuscitation";
import { cardiovascularProtocols } from "./cardiovascular";
import { cardiovascularProtocols2 } from "./cardiovascular2";
import { respiratoryProtocols } from "./respiratory";
import { neurologicalProtocols } from "./neurological";
import { sepsisProtocols } from "./sepsis";
import { metabolicProtocols } from "./metabolic";
import { traumaProtocols } from "./trauma";
import { intoxicationProtocols } from "./intoxication";
import { proceduresProtocols } from "./procedures";
import { pediatricEmergencyProtocols } from "./pediatric";
import { obstetricsProtocols } from "./obstetrics";
import { obstetricsProtocols2 } from "./obstetrics2";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

export const emergencyCategories: EmergencyCategory[] = [
  { id: "resuscitation", title: "Ressuscitação e Via Aérea", protocols: resuscitationProtocols },
  { id: "cardiovascular", title: "Cardiovasculares de Emergência", protocols: [...cardiovascularProtocols, ...cardiovascularProtocols2] },
  { id: "respiratory", title: "Respiratório", protocols: respiratoryProtocols },
  { id: "neurological", title: "Neurológico", protocols: neurologicalProtocols },
  { id: "sepsis", title: "Sepse e Choque", protocols: sepsisProtocols },
  { id: "metabolic", title: "Metabólico e Eletrolítico", protocols: metabolicProtocols },
  { id: "trauma", title: "Trauma (ATLS)", protocols: [...traumaProtocols, ...traumaProtocols2] },
  { id: "obstetrics", title: "Obstetrícia de Emergência", protocols: [...obstetricsProtocols, ...obstetricsProtocols2] },
  { id: "intoxication", title: "Intoxicações", protocols: intoxicationProtocols },
  { id: "procedures", title: "Procedimentos de Emergência", protocols: proceduresProtocols },
  { id: "pediatric-emergency", title: "Pediatria de Emergência", protocols: pediatricEmergencyProtocols },
];

// Flat list for search/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}
