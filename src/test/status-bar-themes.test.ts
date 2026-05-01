/**
 * Verificação visual: a faixa do StatusBarScrim mantém legibilidade do
 * relógio/bateria nos 3 temas (light, dark, oled), sem artefatos visuais
 * (sem blur, sem opacidade fracionada).
 *
 * Por quê em vez de Playwright:
 *   • Os tokens HSL de --background são determinísticos. Calcular o contraste
 *     WCAG entre o texto da status bar (branco em dark/oled, preto em light)
 *     e o fundo do scrim cobre 100% dos casos sem flakiness.
 *   • O scrim é um <div> com altura fixa = inset-top. Se ele NÃO usa
 *     bg-background puro (ex: bg-background/80 ou backdrop-blur), a status
 *     bar do iOS/Android lê conteúdo da página rolando atrás → sobreposição.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

// ─── Utilidades de cor ───────────────────────────────────────────────────
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const srgb = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrastRatio(a: [number, number, number], b: [number, number, number]) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

function parseHslVar(css: string, scope: string, varName: string): [number, number, number] {
  // Captura a primeira ocorrência de --varName dentro do escopo (`:root`, `.dark`, `.oled`).
  const re = new RegExp(`${scope}[^}]*?--${varName}\\s*:\\s*([0-9.]+)\\s+([0-9.]+)%\\s+([0-9.]+)%`);
  const m = css.match(re);
  if (!m) throw new Error(`--${varName} não encontrado em ${scope}`);
  return hslToRgb(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]));
}

// ─── Tokens reais do projeto ────────────────────────────────────────────
const css = readFileSync(resolve(process.cwd(), "src/index.css"), "utf8");

interface ThemeProbe {
  name: string;
  scope: string;
  /** Cor que o SO desenha sobre o scrim (texto/ícones do relógio). */
  statusBarFg: [number, number, number];
}

const WHITE: [number, number, number] = [255, 255, 255];
const BLACK: [number, number, number] = [0, 0, 0];

const THEMES: ThemeProbe[] = [
  { name: "light", scope: ":root",  statusBarFg: BLACK }, // Style.Light → ícones escuros
  { name: "dark",  scope: "\\.dark", statusBarFg: WHITE }, // Style.Dark  → ícones claros
  { name: "oled",  scope: "\\.oled", statusBarFg: WHITE }, // Style.Dark  → ícones claros
];

// ─── Camada 1 — Contraste WCAG entre status bar e scrim ────────────────
describe("StatusBar overlap · contraste em todos os temas", () => {
  it.each(THEMES)("$name: scrim (--background) vs ícones do SO atende WCAG AA (≥ 4.5:1)", (t) => {
    const bg = parseHslVar(css, t.scope, "background");
    const ratio = contrastRatio(bg, t.statusBarFg);
    expect(ratio, `Contraste ${t.name}: ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(4.5);
  });

  it("OLED tem contraste máximo (preto puro vs branco)", () => {
    const bg = parseHslVar(css, "\\.oled", "background");
    const ratio = contrastRatio(bg, WHITE);
    expect(ratio).toBeGreaterThanOrEqual(20); // ~21:1 em puro
  });
});

// ─── Camada 2 — Anti-regressão: scrim sem blur nem opacidade ───────────
describe("StatusBarScrim · sem blur, sem opacidade (anti-artefato)", () => {
  const scrimSrc = readFileSync(
    resolve(process.cwd(), "src/components/StatusBarScrim.tsx"),
    "utf8",
  );

  it("usa bg-background sólido, sem opacidade fracionada", () => {
    expect(scrimSrc).toMatch(/\bbg-background(?![/\d])/);
    expect(scrimSrc, "bg-background/NN cria vazamento da página atrás do relógio")
      .not.toMatch(/bg-background\/\d/);
  });

  it("não aplica backdrop-blur nem filter (evita artefatos sob a status bar)", () => {
    expect(scrimSrc).not.toMatch(/\bbackdrop-blur/);
    expect(scrimSrc).not.toMatch(/\bblur-/);
    expect(scrimSrc).not.toMatch(/\bfilter:/);
  });

  it("cobre o inset-top com altura = env(safe-area-inset-top, 0px)", () => {
    expect(scrimSrc).toMatch(/height:\s*["']env\(safe-area-inset-top,\s*0px\)["']/);
  });

  it("cobre o inset-bottom (home indicator) com altura = env(safe-area-inset-bottom, 0px)", () => {
    expect(scrimSrc).toMatch(/height:\s*["']env\(safe-area-inset-bottom,\s*0px\)["']/);
  });

  it("cobre o inset-left (notch landscape) com largura = env(safe-area-inset-left, 0px)", () => {
    expect(scrimSrc).toMatch(/width:\s*["']env\(safe-area-inset-left,\s*0px\)["']/);
  });

  it("cobre o inset-right (notch landscape) com largura = env(safe-area-inset-right, 0px)", () => {
    expect(scrimSrc).toMatch(/width:\s*["']env\(safe-area-inset-right,\s*0px\)["']/);
  });

  it("não captura toques (pointer-events-none preservado)", () => {
    expect(scrimSrc).toMatch(/\bpointer-events-none\b/);
  });
});

// ─── Camada 3 — Style nativo ↔ tema (Capacitor) ────────────────────────
describe("StatusBar nativa · style sincronizado com tema", () => {
  const nativeSrc = readFileSync(
    resolve(process.cwd(), "src/lib/native-statusbar.ts"),
    "utf8",
  );

  it("light → Style.Light (ícones escuros sobre fundo claro)", () => {
    expect(nativeSrc).toMatch(/theme\s*===?\s*["']light["']\s*\?\s*Style\.Light/);
  });

  it("dark/oled → Style.Dark (ícones claros sobre fundo escuro)", () => {
    expect(nativeSrc).toMatch(/Style\.Dark/);
    // Garante que o fallback (não-light) é Style.Dark.
    expect(nativeSrc).toMatch(/light["']\s*\?\s*Style\.Light\s*:\s*Style\.Dark/);
  });

  it("Android usa overlay transparente (status bar sem fundo competindo com o scrim)", () => {
    expect(nativeSrc).toMatch(/setBackgroundColor\(\s*\{\s*color:\s*["']#00000000["']/);
  });

  it("ThemeContext sincroniza statusBar a cada troca de tema", () => {
    const themeCtx = readFileSync(
      resolve(process.cwd(), "src/contexts/ThemeContext.tsx"),
      "utf8",
    );
    expect(themeCtx).toMatch(/applyNativeStatusBarStyle\(theme\)/);
  });
});
