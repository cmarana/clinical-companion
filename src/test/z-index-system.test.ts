/**
 * Sistema centralizado de z-index — testes de coerência.
 * ──────────────────────────────────────────────────────
 * Garante que:
 *   1. Os tokens semânticos (z-nav, z-modal, z-toast…) existem em
 *      tailwind.config.ts e seguem a hierarquia esperada.
 *   2. Componentes-chave usam o token CORRETO da camada à qual pertencem.
 *   3. Nenhum overlay novo introduz números mágicos (z-[99999]) fora da
 *      escala oficial — fonte comum de bugs de sobreposição.
 */
import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { resolve, join } from "path";

// ─── 1. Hierarquia esperada (do mais baixo ao mais alto) ────────────────
const LAYERS: Array<[string, number]> = [
  ["base", 1],
  ["sticky-low", 10],
  ["sticky-mid", 20],
  ["page-header", 30],
  ["app-chrome", 40],
  ["nav", 50],
  ["status-bar", 60],
  ["banner", 65],
  ["floating", 70],
  ["toast", 80],
  ["modal", 90],
  ["tour", 100],
  ["tour-pop", 110],
];

describe("Z-index · tokens em tailwind.config.ts", () => {
  let cfg = "";
  beforeAll(() => {
    cfg = readFileSync(resolve(process.cwd(), "tailwind.config.ts"), "utf8");
  });

  it.each(LAYERS)("define o token z-%s = %i", (name, value) => {
    const re = new RegExp(`["']?${name}["']?\\s*:\\s*["']${value}["']`);
    expect(cfg, `Token z-${name} ausente em zIndex`).toMatch(re);
  });

  it("hierarquia é estritamente crescente (sem empates)", () => {
    const values = LAYERS.map(([, v]) => v);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });
});

// ─── 2. Componentes-chave usam o token correto da sua camada ────────────
const EXPECTED_USAGES: Array<{ file: string; token: string; reason: string }> = [
  { file: "src/components/StatusBarScrim.tsx", token: "z-status-bar", reason: "Cobre relógio/bateria" },
  { file: "src/components/ui/toast.tsx",        token: "z-toast",      reason: "Notificações sobre modais" },
  { file: "src/components/ui/dialog.tsx",       token: "z-modal",      reason: "Diálogo modal" },
  { file: "src/components/ui/sheet.tsx",        token: "z-modal",      reason: "Sheet lateral" },
  { file: "src/components/ui/alert-dialog.tsx", token: "z-modal",      reason: "Alert dialog" },
  { file: "src/components/ui/drawer.tsx",       token: "z-modal",      reason: "Drawer mobile" },
  { file: "src/components/PWAInstallPrompt.tsx", token: "z-banner",     reason: "Banner global offline/PWA" },
  { file: "src/components/FloatingThemeToggle.tsx", token: "z-floating", reason: "FAB toggle de tema" },
  { file: "src/components/WelcomeScreen.tsx",   token: "z-tour",       reason: "Overlay de boas-vindas" },
  { file: "src/components/GuidedTour.tsx",      token: "z-tour",       reason: "Overlay do tour" },
];

describe("Z-index · componentes-chave usam o token correto", () => {
  it.each(EXPECTED_USAGES)("$file → $token ($reason)", ({ file, token }) => {
    const src = readFileSync(resolve(process.cwd(), file), "utf8");
    expect(src, `${file} não usa ${token}`).toContain(token);
  });
});

// ─── 3. Anti-regressão: nenhum z-[NN] mágico fora dos tokens oficiais ───
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

const MAGIC_Z = /z-\[(\d+)\]/g;
const ALLOWED_BRACKET_VALUES = new Set<number>([
  // Vazio: queremos forçar uso dos tokens nomeados (z-nav, z-modal, etc.).
  // Adicionar aqui apenas casos legítimos justificados em comentário.
]);

describe("Z-index · anti-regressão (sem números mágicos)", () => {
  it("nenhum z-[NN] em src/ fora da escala oficial", () => {
    const files = walk(resolve(process.cwd(), "src"));
    const offenders: string[] = [];
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      let m: RegExpExecArray | null;
      while ((m = MAGIC_Z.exec(src))) {
        const value = parseInt(m[1], 10);
        if (!ALLOWED_BRACKET_VALUES.has(value)) {
          offenders.push(`${f.replace(process.cwd() + "/", "")} → z-[${value}]`);
        }
      }
    }
    expect(
      offenders,
      `Use tokens nomeados (z-nav, z-modal, z-toast…) em vez de números mágicos:\n${offenders.join("\n")}`,
    ).toEqual([]);
  });
});
