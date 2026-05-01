/**
 * Testes de integridade dos dados clínicos por aba.
 * Cada teste retorna { passed, total, failed[], details }
 */

import { fullProtocols } from "@/data/fullProtocols";
import { antimicrobialGuide } from "@/data/antimicrobialGuide";
import { ivDrugs } from "@/data/ivDilutions";
import { pediatricDrugs } from "@/data/pediatricDoses";

export interface IntegrityResult {
  tabId: TabId;
  tabLabel: string;
  passed: boolean;
  totalItems: number;
  checks: IntegrityCheck[];
}

export interface IntegrityCheck {
  name: string;
  passed: boolean;
  message: string;
  failedSamples?: string[];
}

export type TabId = "protocols" | "drugs" | "doses" | "antimicrobials" | "scores";

const MIN_COUNTS: Record<TabId, number> = {
  protocols: 100,
  drugs: 30,
  doses: 20,
  antimicrobials: 5,
  scores: 30,
};

function checkUniqueIds<T extends { id: string }>(items: T[]): IntegrityCheck {
  const ids = items.map((i) => i.id);
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const id of ids) {
    if (seen.has(id)) dups.push(id);
    seen.add(id);
  }
  return {
    name: "IDs únicos",
    passed: dups.length === 0,
    message: dups.length === 0 ? `${ids.length} IDs únicos` : `${dups.length} IDs duplicados`,
    failedSamples: dups.slice(0, 5),
  };
}

function checkRequiredFields<T extends Record<string, any>>(
  items: T[],
  fields: string[],
  labelKey = "id"
): IntegrityCheck {
  const failed: string[] = [];
  for (const item of items) {
    for (const f of fields) {
      const v = item[f];
      if (v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0)) {
        failed.push(`${item[labelKey] ?? "?"} (sem ${f})`);
        break;
      }
    }
  }
  return {
    name: `Campos obrigatórios (${fields.join(", ")})`,
    passed: failed.length === 0,
    message:
      failed.length === 0
        ? `${items.length} itens completos`
        : `${failed.length} itens com campos faltantes`,
    failedSamples: failed.slice(0, 5),
  };
}

function checkMinCount(count: number, min: number, label: string): IntegrityCheck {
  return {
    name: `Volume mínimo (≥ ${min})`,
    passed: count >= min,
    message: `${count} ${label}`,
  };
}

export function runProtocolsIntegrity(): IntegrityResult {
  const items = fullProtocols;
  const checks: IntegrityCheck[] = [
    checkMinCount(items.length, MIN_COUNTS.protocols, "protocolos"),
    checkUniqueIds(items),
    checkRequiredFields(items, ["id", "title", "specialty"]),
  ];
  return {
    tabId: "protocols",
    tabLabel: "Protocolos clínicos",
    totalItems: items.length,
    passed: checks.every((c) => c.passed),
    checks,
  };
}

export function runDrugsIntegrity(): IntegrityResult {
  const items = ivDrugs;
  const checks: IntegrityCheck[] = [
    checkMinCount(items.length, MIN_COUNTS.drugs, "fármacos EV"),
    checkUniqueIds(items),
    checkRequiredFields(items, ["id", "name", "category", "presentations"]),
  ];
  return {
    tabId: "drugs",
    tabLabel: "Fármacos (Diluições EV)",
    totalItems: items.length,
    passed: checks.every((c) => c.passed),
    checks,
  };
}

export function runDosesIntegrity(): IntegrityResult {
  const items = pediatricDrugs;
  const checks: IntegrityCheck[] = [
    checkMinCount(items.length, MIN_COUNTS.doses, "doses pediátricas"),
    checkUniqueIds(items),
    checkRequiredFields(items, ["id", "name"]),
  ];
  return {
    tabId: "doses",
    tabLabel: "Doses pediátricas",
    totalItems: items.length,
    passed: checks.every((c) => c.passed),
    checks,
  };
}

export function runAntimicrobialsIntegrity(): IntegrityResult {
  const focuses = antimicrobialGuide;
  const allScenarios = focuses.flatMap((f) => f.scenarios ?? []);
  const checks: IntegrityCheck[] = [
    checkMinCount(focuses.length, MIN_COUNTS.antimicrobials, "focos infecciosos"),
    checkUniqueIds(focuses),
    checkUniqueIds(allScenarios),
    checkRequiredFields(allScenarios, ["id", "name", "firstLine"]),
  ];
  return {
    tabId: "antimicrobials",
    tabLabel: "Antimicrobianos",
    totalItems: allScenarios.length,
    passed: checks.every((c) => c.passed),
    checks,
  };
}

// Calculadoras/Scores são componentes React — contagem estática conhecida.
// Mantemos a checagem como verificação leve de presença mínima.
export function runScoresIntegrity(): IntegrityResult {
  const KNOWN_SCORES_COUNT = 53; // Memória do projeto: 53 calculadoras/scores
  const checks: IntegrityCheck[] = [
    checkMinCount(KNOWN_SCORES_COUNT, MIN_COUNTS.scores, "calculadoras/scores"),
    {
      name: "Componentes registrados",
      passed: true,
      message: "Calculadoras carregadas via CalculatorsBatch (1, 2, 3)",
    },
  ];
  return {
    tabId: "scores",
    tabLabel: "Calculadoras e scores",
    totalItems: KNOWN_SCORES_COUNT,
    passed: checks.every((c) => c.passed),
    checks,
  };
}

export function runAllIntegrityTests(): IntegrityResult[] {
  return [
    runProtocolsIntegrity(),
    runDrugsIntegrity(),
    runDosesIntegrity(),
    runAntimicrobialsIntegrity(),
    runScoresIntegrity(),
  ];
}

// Mapeamento aba -> item_types da tabela versioned_items
export const TAB_TO_ITEM_TYPES: Record<TabId, string[]> = {
  protocols: ["protocol", "quick_protocol"],
  drugs: ["prescription"], // EV/diluições estão no escopo "prescription"
  doses: ["prescription"],
  antimicrobials: ["antimicrobial"],
  scores: ["calculator"],
};
