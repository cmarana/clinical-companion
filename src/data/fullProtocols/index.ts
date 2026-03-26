import type { FullProtocol, FullProtocolCategory } from "./types";
export { FULL_SECTION_ORDER } from "./types";
export type { FullProtocol, FullProtocolSection, FullProtocolCategory } from "./types";

import { emergencyFullProtocols } from "./emergency";
import { emergencyFullProtocols2 } from "./emergency2";
import { cardioFullProtocols } from "./cardiology";
import { cardioFullProtocols2 } from "./cardiology2";
import { cardioFullProtocols3 } from "./cardiology3";
import { cardioFullProtocols4 } from "./cardiology4";
import { cardioFullProtocols5 } from "./cardiology5";
import { neuroFullProtocols } from "./neurology";
import { neuroFullProtocols2 } from "./neurology2";
import { neuroFullProtocols3 } from "./neurology3";
import { neuroFullProtocols4 } from "./neurology4";

import { sepsisFullProtocols } from "./sepsis";
import { sepsisFullProtocols2 } from "./sepsis2";
import { sepsisFullProtocols3 } from "./sepsis3";
import { sepsisFullProtocols4 } from "./sepsis4";
import { metabolicFullProtocols } from "./metabolic";
import { metabolicFullProtocols2 } from "./metabolic2";
import { metabolicFullProtocols3 } from "./metabolic3";
import { metabolicFullProtocols4 } from "./metabolic4";
import { metabolicFullProtocols5 } from "./metabolic5";
import { respiratoryFullProtocols } from "./respiratory";
import { respiratoryFullProtocols2 } from "./respiratory2";
import { respiratoryFullProtocols3 } from "./respiratory3";
import { traumaFullProtocols } from "./trauma";
import { traumaFullProtocols2 } from "./trauma2";
import { traumaFullProtocols3 } from "./trauma3";
import { obstetricsFullProtocols } from "./obstetrics";
import { obstetricsFullProtocols2 } from "./obstetrics2";
import { obstetricsFullProtocols3 } from "./obstetrics3";
import { obstetricsFullProtocols4 } from "./obstetrics4";
import { intoxicationFullProtocols } from "./intoxication";
import { intoxicationFullProtocols2 } from "./intoxication2";
import { intoxicationFullProtocols3 } from "./intoxication3";
import { proceduresFullProtocols } from "./procedures";
import { proceduresFullProtocols2 } from "./procedures2";
import { pediatricFullProtocols } from "./pediatric";
import { pediatricFullProtocols2 } from "./pediatric2";
import { neonatalFullProtocols } from "./neonatal";
import { infectiousFullProtocols } from "./infectious";
import { infectiousFullProtocols2 } from "./infectious2";
import { infectiousFullProtocols3 } from "./infectious3";
import { infectiousFullProtocols4 } from "./infectious4";
import { otherEmergenciesFullProtocols } from "./otherEmergencies";
import { otherEmergenciesFullProtocols2 } from "./otherEmergencies2";
import { otherEmergenciesFullProtocols3 } from "./otherEmergencies3";

// New categories
import { gastroFullProtocols } from "./gastroenterology";
import { nephrologyFullProtocols } from "./nephrology";
import { psychiatryFullProtocols } from "./psychiatry";
import { dermatologyFullProtocols } from "./dermatology";
import { ophthalmologyFullProtocols } from "./ophthalmology";
import { orlFullProtocols } from "./otorhinolaryngology";
import { gynecologyFullProtocols } from "./gynecology";
import { hematologyFullProtocols } from "./hematology";
import { geriatricsFullProtocols } from "./geriatrics";
import { geriatricsFullProtocols2 } from "./geriatrics2";
import { painPalliativeFullProtocols } from "./painPalliative";
import { painPalliativeFullProtocols2 } from "./painPalliative2";
import { triageFullProtocols } from "./triage";
import { triageFullProtocols2 } from "./triage2";
import { susProtocolsFullProtocols } from "./susProtocols";
import { susProtocolsFullProtocols2 } from "./susProtocols2";
import { gastroFullProtocols2 } from "./gastroenterology2";
import { nephrologyFullProtocols2 } from "./nephrology2";
import { psychiatryFullProtocols2 } from "./psychiatry2";
import { dermatologyFullProtocols2 } from "./dermatology2";
import { ophthalmologyFullProtocols2 } from "./ophthalmology2";
import { orlFullProtocols2 } from "./otorhinolaryngology2";
import { gynecologyFullProtocols2 } from "./gynecology2";
import { hematologyFullProtocols2 } from "./hematology2";

// Batch 3
import { gastroFullProtocols3 } from "./gastroenterology3";
import { nephrologyFullProtocols3 } from "./nephrology3";
import { psychiatryFullProtocols3 } from "./psychiatry3";
import { dermatologyFullProtocols3 } from "./dermatology3";
import { ophthalmologyFullProtocols3 } from "./ophthalmology3";
import { orlFullProtocols3 } from "./otorhinolaryngology3";
import { hematologyFullProtocols3 } from "./hematology3";
import { geriatricsFullProtocols3 } from "./geriatrics3";
import { painPalliativeFullProtocols3 } from "./painPalliative3";
import { triageFullProtocols3 } from "./triage3";
import { susProtocolsFullProtocols3 } from "./susProtocols3";

// Batch 4
import { emergencyFullProtocols3 } from "./emergency3";
import { cardioFullProtocols6 } from "./cardiology6";
import { neuroFullProtocols5 } from "./neurology5";
import { respiratoryFullProtocols4 } from "./respiratory4";
import { infectiousFullProtocols5 } from "./infectious5";
import { traumaFullProtocols4 } from "./trauma4";
import { proceduresFullProtocols3 } from "./procedures3";
import { otherEmergenciesFullProtocols4 } from "./otherEmergencies4";

// Batch 5
import { cardioFullProtocols7 } from "./cardiology7";
import { obstetricsFullProtocols5 } from "./obstetrics5";
import { respiratoryFullProtocols5 } from "./respiratory5";
import { proceduresFullProtocols4 } from "./procedures4";
import { dermatologyFullProtocols4 } from "./dermatology4";
import { pediatricFullProtocols3 } from "./pediatric3";
import { gynecologyFullProtocols3 } from "./gynecology3";

// Batch 6
import { neonatalFullProtocols2 } from "./neonatal2";
import { geriatricsFullProtocols4 } from "./geriatrics4";
import { gynecologyFullProtocols4 } from "./gynecology4";
import { painPalliativeFullProtocols4 } from "./painPalliative4";
import { hematologyFullProtocols4 } from "./hematology4";
import { triageFullProtocols4 } from "./triage4";
import { ophthalmologyFullProtocols4 } from "./ophthalmology4";
import { orlFullProtocols4 } from "./otorhinolaryngology4";

export const fullProtocolCategories: FullProtocolCategory[] = [
  { id: "emergency", title: "Emergência e Ressuscitação", order: 1 },
  { id: "cardiology", title: "Cardiologia", order: 2 },
  { id: "neurology", title: "Neurologia", order: 3 },
  { id: "sepsis", title: "Sepse e Choque", order: 4 },
  { id: "metabolic", title: "Metabólico e Endócrino", order: 5 },
  { id: "respiratory", title: "Respiratório", order: 6 },
  { id: "trauma", title: "Trauma e Cirurgia", order: 7 },
  { id: "obstetrics", title: "Obstetrícia", order: 8 },
  { id: "gynecology", title: "Ginecologia de Emergência", order: 9 },
  { id: "intoxication", title: "Intoxicações", order: 10 },
  { id: "procedures", title: "Procedimentos de Emergência", order: 11 },
  { id: "pediatrics", title: "Pediatria de Emergência", order: 12 },
  { id: "neonatal", title: "Neonatal", order: 13 },
  { id: "infectious", title: "Infectologia de Emergência", order: 14 },
  { id: "gastroenterology", title: "Gastroenterologia de Emergência", order: 15 },
  { id: "nephrology", title: "Nefrologia / Urologia de Emergência", order: 16 },
  { id: "psychiatry", title: "Psiquiatria de Emergência", order: 17 },
  { id: "dermatology", title: "Dermatologia de Emergência", order: 18 },
  { id: "ophthalmology", title: "Oftalmologia de Emergência", order: 19 },
  { id: "otorhinolaryngology", title: "Otorrinolaringologia de Emergência", order: 20 },
  { id: "hematology", title: "Hematologia de Emergência", order: 21 },
  { id: "geriatrics", title: "Geriatria de Emergência", order: 22 },
  { id: "pain_palliative", title: "Dor Aguda / Cuidados Paliativos", order: 23 },
  { id: "triage", title: "Triagem / Classificação de Risco", order: 24 },
  { id: "sus_protocols", title: "Protocolos SUS / ATB / Prescrição", order: 25 },
  { id: "other_emergencies", title: "Outras Emergências Frequentes", order: 26 },
];

export const fullProtocols: FullProtocol[] = [
  ...emergencyFullProtocols,
  ...emergencyFullProtocols2,
  ...cardioFullProtocols,
  ...cardioFullProtocols2,
  ...cardioFullProtocols3,
  ...cardioFullProtocols4,
  ...cardioFullProtocols5,
  ...neuroFullProtocols,
  ...neuroFullProtocols2,
  ...neuroFullProtocols3,
  ...neuroFullProtocols4,
  
  ...sepsisFullProtocols,
  ...sepsisFullProtocols2,
  ...sepsisFullProtocols3,
  ...sepsisFullProtocols4,
  ...metabolicFullProtocols,
  ...metabolicFullProtocols2,
  ...metabolicFullProtocols3,
  ...metabolicFullProtocols4,
  ...metabolicFullProtocols5,
  ...respiratoryFullProtocols,
  ...respiratoryFullProtocols2,
  ...respiratoryFullProtocols3,
  ...traumaFullProtocols,
  ...traumaFullProtocols2,
  ...traumaFullProtocols3,
  ...obstetricsFullProtocols,
  ...obstetricsFullProtocols2,
  ...obstetricsFullProtocols3,
  ...obstetricsFullProtocols4,
  ...intoxicationFullProtocols,
  ...intoxicationFullProtocols2,
  ...intoxicationFullProtocols3,
  ...proceduresFullProtocols,
  ...proceduresFullProtocols2,
  ...pediatricFullProtocols,
  ...pediatricFullProtocols2,
  ...neonatalFullProtocols,
  ...infectiousFullProtocols,
  ...infectiousFullProtocols2,
  ...infectiousFullProtocols3,
  ...infectiousFullProtocols4,
  ...otherEmergenciesFullProtocols,
  ...otherEmergenciesFullProtocols2,
  ...otherEmergenciesFullProtocols3,

  // New categories
  ...gastroFullProtocols,
  ...gastroFullProtocols2,
  ...nephrologyFullProtocols,
  ...nephrologyFullProtocols2,
  ...psychiatryFullProtocols,
  ...psychiatryFullProtocols2,
  ...dermatologyFullProtocols,
  ...dermatologyFullProtocols2,
  ...ophthalmologyFullProtocols,
  ...ophthalmologyFullProtocols2,
  ...orlFullProtocols,
  ...orlFullProtocols2,
  ...gynecologyFullProtocols,
  ...gynecologyFullProtocols2,
  ...hematologyFullProtocols,
  ...hematologyFullProtocols2,
  ...geriatricsFullProtocols,
  ...geriatricsFullProtocols2,
  ...painPalliativeFullProtocols,
  ...painPalliativeFullProtocols2,
  ...triageFullProtocols,
  ...triageFullProtocols2,
  ...susProtocolsFullProtocols,
  ...susProtocolsFullProtocols2,

  // Batch 3 — new protocols
  ...gastroFullProtocols3,
  ...nephrologyFullProtocols3,
  ...psychiatryFullProtocols3,
  ...dermatologyFullProtocols3,
  ...ophthalmologyFullProtocols3,
  ...orlFullProtocols3,
  ...hematologyFullProtocols3,
  ...geriatricsFullProtocols3,
  ...painPalliativeFullProtocols3,
  ...triageFullProtocols3,
  ...susProtocolsFullProtocols3,

  // Batch 4 — new protocols
  ...emergencyFullProtocols3,
  ...cardioFullProtocols6,
  ...neuroFullProtocols5,
  ...respiratoryFullProtocols4,
  ...infectiousFullProtocols5,
  ...traumaFullProtocols4,
  ...proceduresFullProtocols3,
  ...otherEmergenciesFullProtocols4,

  // Batch 5 — new protocols
  ...cardioFullProtocols7,
  ...obstetricsFullProtocols5,
  ...respiratoryFullProtocols5,
  ...proceduresFullProtocols4,
  ...dermatologyFullProtocols4,
  ...pediatricFullProtocols3,
  ...gynecologyFullProtocols3,
];

export function getFullProtocol(id: string) {
  return fullProtocols.find(p => p.id === id);
}
