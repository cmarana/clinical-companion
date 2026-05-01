/**
 * Padroniza o uso de safe-area: proíbe inline-styles com env(safe-area-inset-*)
 * para padding-top / top, forçando uso das utilities da família .pt-safe* /
 * .top-safe* / .safe-area-* definidas em index.css.
 *
 * Por quê:
 *   • Inline-style escapa do design system, não pode ser auditado e
 *     impede que mudanças globais (ex: respiro padrão) propaguem.
 *   • Mantém um único caminho para padronização entre Landing, Home e
 *     páginas internas.
 *
 * Allowlist:
 *   • StatusBarScrim define a faixa física da status bar (height = inset).
 *   • OnboardingModal usa em max-height (não é padding-top/top).
 */
import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "fs";
import { join, resolve } from "path";

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (full.endsWith("/test")) continue;
      walk(full, out);
    } else if (/\.(tsx?|jsx?)$/.test(entry)) {
      out.push(full);
    }
  }
  return out;
}

const ALLOWLIST = new Set<string>([
  // Define a faixa física da status bar — height (não padding/top).
  "src/components/StatusBarScrim.tsx",
  // Usa env() para max-height de modal — caso legítimo, não é padding-top/top.
  "src/components/OnboardingModal.tsx",
]);

describe("Safe-area · padronização (sem inline-style env())", () => {
  it("nenhum inline-style com paddingTop:env(safe-area-inset-*) em src/", () => {
    const files = walk(resolve(process.cwd(), "src"));
    const offenders: string[] = [];
    // Match: paddingTop: "env(...)" OU style={{ paddingTop: `env(...)` }}
    const RE = /paddingTop\s*:\s*[`"']?[^,}`"']*env\(safe-area-inset-top/;
    for (const f of files) {
      const rel = f.replace(process.cwd() + "/", "");
      if (ALLOWLIST.has(rel)) continue;
      const src = readFileSync(f, "utf8");
      if (RE.test(src)) offenders.push(rel);
    }
    expect(
      offenders,
      `Use a utility .pt-safe / .pt-safe-fb em vez de inline-style:\n${offenders.join("\n")}`,
    ).toEqual([]);
  });

  it("nenhum inline-style com top:env(safe-area-inset-*) em src/", () => {
    const files = walk(resolve(process.cwd(), "src"));
    const offenders: string[] = [];
    // Match: top: "env(...)" sem capturar paddingTop (lookbehind negativo).
    const RE = /(?<!padding)top\s*:\s*[`"']env\(safe-area-inset-top/i;
    for (const f of files) {
      const rel = f.replace(process.cwd() + "/", "");
      if (ALLOWLIST.has(rel)) continue;
      const src = readFileSync(f, "utf8");
      if (RE.test(src)) offenders.push(rel);
    }
    expect(
      offenders,
      `Use .top-safe / .top-safe-fb em vez de inline-style:\n${offenders.join("\n")}`,
    ).toEqual([]);
  });
});
