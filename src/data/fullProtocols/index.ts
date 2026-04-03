import type { FullProtocol, FullProtocolCategory } from "./types";
export { FULL_SECTION_ORDER } from "./types";
export type { FullProtocol, FullProtocolSection, FullProtocolCategory, EvidenceLevel } from "./types";
export { getEvidence } from "./evidenceMap";

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

// Batch 7
import { sepsisFullProtocols5 } from "./sepsis5";
import { neonatalFullProtocols3 } from "./neonatal3";
import { respiratoryFullProtocols6 } from "./respiratory6";
import { susProtocolsFullProtocols4 } from "./susProtocols4";

// Batch 8 — expansion to 1000+
import { cardioFullProtocols8 } from "./cardiology8";
import { neuroFullProtocols6 } from "./neurology6";
import { sepsisFullProtocols6 } from "./sepsis6";
import { respiratoryFullProtocols7 } from "./respiratory7";
import { metabolicFullProtocols6 } from "./metabolic6";
import { infectiousFullProtocols6 } from "./infectious6";
import { traumaFullProtocols5 } from "./trauma5";
import { obstetricsFullProtocols6 } from "./obstetrics6";
import { pediatricFullProtocols4 } from "./pediatric4";

// Batch 9 — massive expansion
import { cardioFullProtocols9 } from "./cardiology9";
import { neuroFullProtocols7 } from "./neurology7";
import { gastroFullProtocols4 } from "./gastroenterology4";
import { nephrologyFullProtocols4 } from "./nephrology4";
import { psychiatryFullProtocols4 } from "./psychiatry4";
import { dermatologyFullProtocols5 } from "./dermatology5";
import { ophthalmologyFullProtocols5 } from "./ophthalmology5";
import { orlFullProtocols5 } from "./otorhinolaryngology5";
import { gynecologyFullProtocols5 } from "./gynecology5";
import { hematologyFullProtocols5 } from "./hematology5";
import { geriatricsFullProtocols5 } from "./geriatrics5";
import { painPalliativeFullProtocols5 } from "./pain_palliative5";
import { triageFullProtocols5 } from "./triage5";
import { susProtocolsFullProtocols5 } from "./sus_protocols5";
import { otherEmergenciesFullProtocols5 } from "./other_emergencies5";
import { emergencyFullProtocols4 } from "./emergency4";
import { proceduresFullProtocols5 } from "./procedures5";
import { intoxicationFullProtocols4 } from "./intoxication4";
import { neonatalFullProtocols4 } from "./neonatal4";

// Batch 11
import { cardioFullProtocols11 } from "./cardiology11";
import { neuroFullProtocols9 } from "./neurology9";
import { sepsisFullProtocols7 } from "./sepsis7";
import { traumaFullProtocols7 } from "./trauma7";
import { obstetricsFullProtocols8 } from "./obstetrics8";
import { nephrologyFullProtocols5 } from "./nephrology5";
import { psychiatryFullProtocols5 } from "./psychiatry5";
import { dermatologyFullProtocols6 } from "./dermatology6";
import { gynecologyFullProtocols6 } from "./gynecology6";
import { ophthalmologyFullProtocols6 } from "./ophthalmology6";
import { orlFullProtocols6 } from "./otorhinolaryngology6";
import { hematologyFullProtocols6 } from "./hematology6";
import { geriatricsFullProtocols6 } from "./geriatrics6";
import { painPalliativeFullProtocols6 } from "./pain_palliative6";
import { triageFullProtocols6 } from "./triage6";
import { susProtocolsFullProtocols6 } from "./sus_protocols6";

// Batch 10
import { cardioFullProtocols10 } from "./cardiology10";
import { neuroFullProtocols8 } from "./neurology8";
import { emergencyFullProtocols5 } from "./emergency5";
import { respiratoryFullProtocols8 } from "./respiratory8";
import { metabolicFullProtocols7 } from "./metabolic7";
import { infectiousFullProtocols7 } from "./infectious7";
import { traumaFullProtocols6 } from "./trauma6";
import { obstetricsFullProtocols7 } from "./obstetrics7";
import { pediatricFullProtocols5 } from "./pediatric5";
import { neonatalFullProtocols5 } from "./neonatal5";
import { proceduresFullProtocols6 } from "./procedures6";
import { intoxicationFullProtocols5 } from "./intoxication5";
import { gastroFullProtocols5 } from "./gastroenterology5";
import { otherEmergenciesFullProtocols6 } from "./other_emergencies6";

// Batch 12 — expansion to 1000+
import { cardioFullProtocols12 } from "./cardiology12";
import { neuroFullProtocols10 } from "./neurology10";
import { sepsisFullProtocols8 } from "./sepsis8";
import { respiratoryFullProtocols9 } from "./respiratory9";
import { metabolicFullProtocols8 } from "./metabolic8";
import { infectiousFullProtocols8 } from "./infectious8";
import { traumaFullProtocols8 } from "./trauma8";
import { obstetricsFullProtocols9 } from "./obstetrics9";
import { pediatricFullProtocols6 } from "./pediatric6";
import { neonatalFullProtocols6 } from "./neonatal6";
import { proceduresFullProtocols7 } from "./procedures7";
import { intoxicationFullProtocols6 } from "./intoxication6";
import { emergencyFullProtocols6 } from "./emergency6";
import { gastroFullProtocols6 } from "./gastroenterology6";
import { nephrologyFullProtocols6 } from "./nephrology6";
import { psychiatryFullProtocols6 } from "./psychiatry6";
import { otherEmergenciesFullProtocols7 } from "./other_emergencies7";
import { dermatologyFullProtocols7 } from "./dermatology7";
import { finalExpansionProtocols } from "./finalExpansion";

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

  // Batch 6 — expanding smaller categories
  ...neonatalFullProtocols2,
  ...geriatricsFullProtocols4,
  ...gynecologyFullProtocols4,
  ...painPalliativeFullProtocols4,
  ...hematologyFullProtocols4,
  ...triageFullProtocols4,
  ...ophthalmologyFullProtocols4,
  ...orlFullProtocols4,

  // Batch 7
  ...sepsisFullProtocols5,
  ...neonatalFullProtocols3,
  ...respiratoryFullProtocols6,
  ...susProtocolsFullProtocols4,

  // Batch 8 — expansion to 1000+
  ...cardioFullProtocols8,
  ...neuroFullProtocols6,
  ...sepsisFullProtocols6,
  ...respiratoryFullProtocols7,
  ...metabolicFullProtocols6,
  ...infectiousFullProtocols6,
  ...traumaFullProtocols5,
  ...obstetricsFullProtocols6,
  ...pediatricFullProtocols4,

  // Batch 9 — massive expansion
  ...cardioFullProtocols9,
  ...neuroFullProtocols7,
  ...gastroFullProtocols4,
  ...nephrologyFullProtocols4,
  ...psychiatryFullProtocols4,
  ...dermatologyFullProtocols5,
  ...ophthalmologyFullProtocols5,
  ...orlFullProtocols5,
  ...gynecologyFullProtocols5,
  ...hematologyFullProtocols5,
  ...geriatricsFullProtocols5,
  ...painPalliativeFullProtocols5,
  ...triageFullProtocols5,
  ...susProtocolsFullProtocols5,
  ...otherEmergenciesFullProtocols5,
  ...emergencyFullProtocols4,
  ...proceduresFullProtocols5,
  ...intoxicationFullProtocols4,
  ...neonatalFullProtocols4,

  // Batch 10
  ...cardioFullProtocols10,
  ...neuroFullProtocols8,
  ...emergencyFullProtocols5,
  ...respiratoryFullProtocols8,
  ...metabolicFullProtocols7,
  ...infectiousFullProtocols7,
  ...traumaFullProtocols6,
  ...obstetricsFullProtocols7,
  ...pediatricFullProtocols5,
  ...neonatalFullProtocols5,
  ...proceduresFullProtocols6,
  ...intoxicationFullProtocols5,
  ...gastroFullProtocols5,
  ...otherEmergenciesFullProtocols6,

  // Batch 11
  ...cardioFullProtocols11,
  ...neuroFullProtocols9,
  ...sepsisFullProtocols7,
  ...traumaFullProtocols7,
  ...obstetricsFullProtocols8,
  ...nephrologyFullProtocols5,
  ...psychiatryFullProtocols5,
  ...dermatologyFullProtocols6,
  ...gynecologyFullProtocols6,
  ...ophthalmologyFullProtocols6,
  ...orlFullProtocols6,
  ...hematologyFullProtocols6,
  ...geriatricsFullProtocols6,
  ...painPalliativeFullProtocols6,
  ...triageFullProtocols6,
  ...susProtocolsFullProtocols6,

  // Batch 12 — expansion to 1000+
  ...cardioFullProtocols12,
  ...neuroFullProtocols10,
  ...sepsisFullProtocols8,
  ...respiratoryFullProtocols9,
  ...metabolicFullProtocols8,
  ...infectiousFullProtocols8,
  ...traumaFullProtocols8,
  ...obstetricsFullProtocols9,
  ...pediatricFullProtocols6,
  ...neonatalFullProtocols6,
  ...proceduresFullProtocols7,
  ...intoxicationFullProtocols6,
  ...emergencyFullProtocols6,
  ...gastroFullProtocols6,
  ...nephrologyFullProtocols6,
  ...psychiatryFullProtocols6,
  ...otherEmergenciesFullProtocols7,
  ...dermatologyFullProtocols7,
  ...finalExpansionProtocols,
];
export function getFullProtocol(id: string) {
  return fullProtocols.find(p => p.id === id);
}
