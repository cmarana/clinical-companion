import type { EmergencyCategory } from "./types";
import { resuscitationProtocols } from "./resuscitation";
import { cardiovascularProtocols } from "./cardiovascular";
import { cardiovascularProtocols2 } from "./cardiovascular2";
import { respiratoryProtocols } from "./respiratory";
import { neurologicalProtocols } from "./neurological";
import { neurologicalProtocols2 } from "./neurological2";
import { neurologicalProtocols3 } from "./neurological3";
import { sepsisProtocols } from "./sepsis";
import { sepsisProtocols2 } from "./sepsis2";
import { sepsisProtocols3 } from "./sepsis3";
import { metabolicProtocols } from "./metabolic";
import { metabolicProtocols2 } from "./metabolic2";
import { metabolicProtocols3 } from "./metabolic3";
import { traumaProtocols } from "./trauma";
import { traumaProtocols2 } from "./trauma2";
import { traumaProtocols3 } from "./trauma3";
import { intoxicationProtocols } from "./intoxication";
import { proceduresProtocols } from "./procedures";
import { proceduresProtocols3 } from "./procedures3";
import { pediatricEmergencyProtocols } from "./pediatric";
import { obstetricsProtocols } from "./obstetrics";
import { obstetricsProtocols2 } from "./obstetrics2";
import { obstetricsProtocols3 } from "./obstetrics3";
import { obstetricsProtocols4 } from "./obstetrics4";
import { traumaProtocols4 } from "./trauma4";
import { intoxicationProtocols4 } from "./intoxication4";
import { proceduresProtocols4 } from "./procedures4";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

export const emergencyCategories: EmergencyCategory[] = [
  { id: "resuscitation", title: "Ressuscitação e Via Aérea", protocols: resuscitationProtocols },
  { id: "cardiovascular", title: "Cardiovasculares de Emergência", protocols: [...cardiovascularProtocols, ...cardiovascularProtocols2] },
  { id: "respiratory", title: "Respiratório", protocols: respiratoryProtocols },
  { id: "neurological", title: "Neurológico", protocols: [...neurologicalProtocols, ...neurologicalProtocols2, ...neurologicalProtocols3] },
  { id: "sepsis", title: "Sepse e Choque", protocols: [...sepsisProtocols, ...sepsisProtocols2, ...sepsisProtocols3] },
  { id: "metabolic", title: "Metabólico e Eletrolítico", protocols: [...metabolicProtocols, ...metabolicProtocols2, ...metabolicProtocols3] },
  { id: "trauma", title: "Trauma (ATLS)", protocols: [...traumaProtocols, ...traumaProtocols2, ...traumaProtocols3] },
  { id: "obstetrics", title: "Obstetrícia de Emergência", protocols: [...obstetricsProtocols, ...obstetricsProtocols2, ...obstetricsProtocols3] },
  { id: "intoxication", title: "Intoxicações", protocols: intoxicationProtocols },
  { id: "procedures", title: "Procedimentos de Emergência", protocols: [...proceduresProtocols, ...proceduresProtocols3] },
  { id: "pediatric-emergency", title: "Pediatria de Emergência", protocols: pediatricEmergencyProtocols },
];

// Flat list for search/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}
