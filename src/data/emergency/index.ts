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
import { hematologyEmergencyProtocols } from "./hematology";
import { gastroenterologyEmergencyProtocols } from "./gastroenterology";
import { otherEmergencyProtocols } from "./other_emergencies";
import { psychiatryEmergencyProtocols } from "./psychiatry";
import {
  ophthalmologyEmergencyProtocols,
  otorhinolaryngologyEmergencyProtocols,
  allergyEmergencyProtocols,
  vascularEmergencyProtocols,
  dermatologyEmergencyProtocols,
  orthopedicEmergencyProtocols,
  pediatricEmergencyProtocols3,
} from "./combined_remaining";

export { SECTION_ORDER } from "./types";
export type { EmergencyProtocol, EmergencyCategory, EmergencySection } from "./types";

export const emergencyCategories: EmergencyCategory[] = [
  { id: "resuscitation", title: "Ressuscitação e Via Aérea", protocols: resuscitationProtocols },
  { id: "cardiovascular", title: "Cardiovasculares de Emergência", protocols: [...cardiovascularProtocols, ...cardiovascularProtocols2, ...cardiovascularProtocols3] },
  { id: "respiratory", title: "Respiratório", protocols: [...respiratoryProtocols, ...respiratoryProtocols2] },
  { id: "neurological", title: "Neurológico", protocols: [...neurologicalProtocols, ...neurologicalProtocols2, ...neurologicalProtocols3, ...neurologicalProtocols4] },
  { id: "sepsis", title: "Sepse e Choque", protocols: [...sepsisProtocols, ...sepsisProtocols2, ...sepsisProtocols3] },
  { id: "metabolic", title: "Metabólico e Eletrolítico", protocols: [...metabolicProtocols, ...metabolicProtocols2, ...metabolicProtocols3, ...metabolicProtocols4, ...metabolicProtocols5, ...nephrologyEmergencyProtocols] },
  { id: "trauma", title: "Trauma (ATLS)", protocols: [...traumaProtocols, ...traumaProtocols2, ...traumaProtocols3, ...traumaProtocols4, ...traumaProtocols5] },
  { id: "obstetrics", title: "Obstetrícia de Emergência", protocols: [...obstetricsProtocols, ...obstetricsProtocols2, ...obstetricsProtocols4, ...obstetricsProtocols5] },
  { id: "intoxication", title: "Intoxicações e Envenenamentos", protocols: [...intoxicationProtocols, ...intoxicationProtocols4, ...intoxicationProtocols5] },
  { id: "procedures", title: "Procedimentos de Emergência", protocols: [...proceduresProtocols, ...proceduresProtocols4] },
  { id: "infectious", title: "Infectologia de Emergência", protocols: [...infectiousProtocols, ...infectiousProtocols2, ...infectiousProtocols3] },
  { id: "hematology-emergency", title: "Hematologia de Emergência", protocols: hematologyEmergencyProtocols },
  { id: "gastroenterology-emergency", title: "Gastroenterologia de Emergência", protocols: gastroenterologyEmergencyProtocols },
  { id: "pediatric-emergency", title: "Pediatria de Emergência", protocols: [...pediatricEmergencyProtocols, ...pediatricEmergencyProtocols2, ...pediatricEmergencyProtocols3] },
  { id: "neonatal", title: "Neonatal", protocols: neonatalProtocols },
  { id: "psychiatry-emergency", title: "Psiquiatria de Emergência", protocols: psychiatryEmergencyProtocols },
  { id: "ophthalmology-emergency", title: "Oftalmologia de Emergência", protocols: ophthalmologyEmergencyProtocols },
  { id: "otorhino-emergency", title: "ORL de Emergência", protocols: otorhinolaryngologyEmergencyProtocols },
  { id: "vascular-emergency", title: "Vascular Periférico de Emergência", protocols: vascularEmergencyProtocols },
  { id: "dermatology-emergency", title: "Dermatologia de Emergência", protocols: dermatologyEmergencyProtocols },
  { id: "orthopedic-emergency", title: "Ortopedia de Emergência", protocols: orthopedicEmergencyProtocols },
  { id: "other-emergencies", title: "Outras Emergências Frequentes", protocols: [...otherEmergencyProtocols, ...allergyEmergencyProtocols] },
];

// Flat list for search/lookup
export const allEmergencyProtocols = emergencyCategories.flatMap(c => c.protocols);

export function getEmergencyProtocol(id: string) {
  return allEmergencyProtocols.find(p => p.id === id);
}

export function getEmergencyCategory(id: string) {
  return emergencyCategories.find(c => c.id === id);
}
