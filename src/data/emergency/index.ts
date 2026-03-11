import type { EmergencyCategory } from "./types";
import { resuscitationProtocols } from "./resuscitation";
import { cardiovascularProtocols } from "./cardiovascular";
import { cardiovascularProtocols2 } from "./cardiovascular2";
import { respiratoryProtocols } from "./respiratory";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

export const emergencyCategories: EmergencyCategory[] = [
  { id: "resuscitation", title: "Ressuscitação e Via Aérea", protocols: resuscitationProtocols },
  { id: "cardiovascular", title: "Cardiovasculares de Emergência", protocols: [...cardiovascularProtocols, ...cardiovascularProtocols2] },
  { id: "respiratory", title: "Respiratório", protocols: respiratoryProtocols },
];

// Flat list for search/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}
