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

export const fullProtocolCategories: FullProtocolCategory[] = [
  { id: "emergency", title: "Emergência e Ressuscitação", order: 1 },
  { id: "cardiology", title: "Cardiologia", order: 2 },
  { id: "neurology", title: "Neurologia", order: 3 },
  { id: "sepsis", title: "Sepse e Choque", order: 4 },
  { id: "metabolic", title: "Metabólico e Endócrino", order: 5 },
  { id: "respiratory", title: "Respiratório", order: 6 },
  { id: "trauma", title: "Trauma e Cirurgia", order: 7 },
  { id: "obstetrics", title: "Obstetrícia", order: 8 },
  { id: "intoxication", title: "Intoxicações", order: 9 },
  { id: "procedures", title: "Procedimentos de Emergência", order: 10 },
  { id: "pediatrics", title: "Pediatria de Emergência", order: 11 },
  { id: "neonatal", title: "Neonatal", order: 12 },
  { id: "infectious", title: "Infectologia de Emergência", order: 13 },
  { id: "other_emergencies", title: "Outras Emergências Frequentes", order: 14 },
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
  ...neuroFullProtocols5,
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
];

export function getFullProtocol(id: string) {
  return fullProtocols.find(p => p.id === id);
}
