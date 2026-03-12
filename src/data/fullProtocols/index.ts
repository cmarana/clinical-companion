import type { FullProtocol, FullProtocolCategory } from "./types";
export { FULL_SECTION_ORDER } from "./types";
export type { FullProtocol, FullProtocolSection, FullProtocolCategory } from "./types";

import { emergencyFullProtocols } from "./emergency";
import { emergencyFullProtocols2 } from "./emergency2";
import { cardioFullProtocols } from "./cardiology";
import { cardioFullProtocols2 } from "./cardiology2";
import { cardioFullProtocols3 } from "./cardiology3";
import { neuroFullProtocols } from "./neurology";
import { neuroFullProtocols2 } from "./neurology2";
import { sepsisFullProtocols } from "./sepsis";
import { sepsisFullProtocols2 } from "./sepsis2";
import { metabolicFullProtocols } from "./metabolic";
import { metabolicFullProtocols2 } from "./metabolic2";
import { traumaFullProtocols } from "./trauma";
import { traumaFullProtocols2 } from "./trauma2";
import { obstetricsFullProtocols } from "./obstetrics";
import { obstetricsFullProtocols2 } from "./obstetrics2";

export const fullProtocols: FullProtocol[] = [
  ...emergencyFullProtocols,
  ...emergencyFullProtocols2,
  ...cardioFullProtocols,
  ...cardioFullProtocols2,
  ...cardioFullProtocols3,
  ...neuroFullProtocols,
  ...neuroFullProtocols2,
  ...sepsisFullProtocols,
  ...sepsisFullProtocols2,
  ...metabolicFullProtocols,
  ...metabolicFullProtocols2,
  ...traumaFullProtocols,
  ...traumaFullProtocols2,
  ...obstetricsFullProtocols,
  ...obstetricsFullProtocols2,
];

export function getFullProtocol(id: string) {
  return fullProtocols.find(p => p.id === id);
}
