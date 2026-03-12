import type { FullProtocol, FullProtocolCategory } from "./types";
export { FULL_SECTION_ORDER } from "./types";
export type { FullProtocol, FullProtocolSection, FullProtocolCategory } from "./types";

import { emergencyFullProtocols } from "./emergency";
import { cardioFullProtocols } from "./cardiology";
import { neuroFullProtocols } from "./neurology";
import { sepsisFullProtocols } from "./sepsis";
import { metabolicFullProtocols } from "./metabolic";
import { traumaFullProtocols } from "./trauma";
import { obstetricsFullProtocols } from "./obstetrics";

export const fullProtocolCategories: FullProtocolCategory[] = [
  { id: "emergency", title: "Emergência e Ressuscitação", order: 1 },
  { id: "cardiology", title: "Cardiologia", order: 2 },
  { id: "neurology", title: "Neurologia", order: 3 },
  { id: "sepsis", title: "Sepse e Choque", order: 4 },
  { id: "metabolic", title: "Metabólico e Endócrino", order: 5 },
  { id: "trauma", title: "Trauma e Cirurgia", order: 6 },
  { id: "obstetrics", title: "Obstetrícia", order: 7 },
];

export const fullProtocols: FullProtocol[] = [
  ...emergencyFullProtocols,
  ...cardioFullProtocols,
  ...neuroFullProtocols,
  ...sepsisFullProtocols,
  ...metabolicFullProtocols,
  ...traumaFullProtocols,
  ...obstetricsFullProtocols,
];

export function getFullProtocol(id: string) {
  return fullProtocols.find(p => p.id === id);
}
