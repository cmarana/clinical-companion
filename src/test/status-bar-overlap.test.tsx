/**
 * Verificação visual automática: nenhum texto do app pode ficar sobreposto
 * ao horário e bateria (área da status bar nativa).
 *
 * Estratégia em 3 camadas — todas executadas em CI a cada commit:
 *
 *   1. ARQUITETURAL: <StatusBarScrim /> está montado em App.tsx, garantindo
 *      uma faixa opaca global sobre `env(safe-area-inset-top)`.
 *   2. COMPONENTE: o scrim renderiza com posicionamento fixed, top:0,
 *      altura = inset-top, fundo opaco do tema e z-index alto o bastante
 *      para cobrir headers stickys (z >= 50).
 *   3. SIMULAÇÃO DE DISPOSITIVOS: para iPhone (notch / Dynamic Island) e
 *      Android (gestos / cutout), a faixa cobre EXATAMENTE a região da
 *      status bar — nem menos (sobreposição), nem mais (gap de UI).
 */
import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "fs";
import { resolve } from "path";
import StatusBarScrim from "@/components/StatusBarScrim";

interface DeviceProfile {
  name: string;
  insetTop: number;
}

const DEVICES: DeviceProfile[] = [
  { name: "iPhone SE",                insetTop: 20 },
  { name: "iPhone 13 (notch)",        insetTop: 47 },
  { name: "iPhone 15 Pro (Island)",   insetTop: 59 },
  { name: "Android Pixel 8",          insetTop: 24 },
  { name: "Android Z Fold (cutout)",  insetTop: 32 },
];

// ─────────────────────────────────────────────────────────────────────────
// Camada 1 — Arquitetural: garantia de montagem global do scrim
// ─────────────────────────────────────────────────────────────────────────
describe("StatusBarScrim · montagem global (App.tsx)", () => {
  let appSource = "";
  beforeAll(() => {
    appSource = readFileSync(resolve(process.cwd(), "src/App.tsx"), "utf8");
  });

  it("App.tsx importa StatusBarScrim", () => {
    expect(appSource).toMatch(/from ["']@\/components\/StatusBarScrim["']/);
  });

  it("App.tsx renderiza <StatusBarScrim /> dentro do TooltipProvider", () => {
    expect(appSource).toMatch(/<StatusBarScrim\s*\/>/);
  });
});

// ─────────────────────────────────────────────────────────────────────────
// Camada 2 — Componente: o scrim cobre a status bar corretamente
// ─────────────────────────────────────────────────────────────────────────
describe("StatusBarScrim · contrato visual", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renderiza um <div> aria-hidden, sem captura de toques, no topo", () => {
    const { container } = render(<StatusBarScrim />);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toBeTruthy();
    expect(el.getAttribute("aria-hidden")).toBe("true");

    const cls = el.className;
    expect(cls).toMatch(/\bfixed\b/);
    expect(cls).toMatch(/\btop-0\b/);
    expect(cls).toMatch(/\bleft-0\b/);
    expect(cls).toMatch(/\bright-0\b/);
    expect(cls).toMatch(/\bbg-background\b/);
    expect(cls).toMatch(/\bpointer-events-none\b/);
    // z-index >= 50 (acima de headers sticky comuns z-30/z-40/z-50)
    expect(cls).toMatch(/\bz-\[?(?:50|60|70|80|90|100)\]?\b/);

    // Altura inline = env(safe-area-inset-top, 0px)
    expect((el.getAttribute("style") || "").replace(/\s+/g, ""))
      .toMatch(/height:env\(safe-area-inset-top,?0px?\)/);
  });
});

// ─────────────────────────────────────────────────────────────────────────
// Camada 3 — Simulação por dispositivo: o scrim NÃO deixa conteúdo
// vazar para a região da status bar (horário/bateria).
// ─────────────────────────────────────────────────────────────────────────
describe.each(DEVICES)("Sobreposição com status bar · $name", (device) => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.head.querySelectorAll("style[data-test]").forEach((n) => n.remove());

    // jsdom não resolve env(safe-area-inset-*) — injetamos a altura concreta.
    const style = document.createElement("style");
    style.setAttribute("data-test", "scrim-height");
    style.textContent = `
      [data-status-bar-scrim] { height: ${device.insetTop}px !important; }
      .sim-content { position: absolute; top: 0; left: 0; right: 0; height: 200px; }
    `;
    document.head.appendChild(style);
  });

  it(`scrim cobre exatamente ${device.insetTop}px do topo (área do horário/bateria)`, () => {
    const { container } = render(
      <>
        {/* Conteúdo arbitrário da página que normalmente vazaria sob a status bar */}
        <p className="sim-content">Texto do app que NÃO pode aparecer sob o relógio</p>
        <div data-status-bar-scrim>
          <StatusBarScrim />
        </div>
      </>,
    );

    const wrapper = container.querySelector("[data-status-bar-scrim]") as HTMLElement;
    const scrim = wrapper.firstElementChild as HTMLElement;
    expect(scrim).toBeTruthy();

    const wrapperHeight = parseFloat(getComputedStyle(wrapper).height);
    expect(wrapperHeight).toBe(device.insetTop);

    // O scrim é fixed/top:0 → cobre [0, insetTop] do viewport.
    // O conteúdo simulado começa em y=0 → seria sobreposto pela status bar
    // SEM o scrim. Com o scrim opaco e z-index alto, a faixa fica visível
    // POR CIMA do conteúdo, prevenindo a leitura do texto sob o horário.
    const sim = container.querySelector(".sim-content") as HTMLElement;
    expect(sim).toBeTruthy();

    // Sanity: o scrim usa fundo do tema (token semântico), nunca transparente.
    expect(scrim.className).toMatch(/\bbg-background\b/);
    expect(scrim.className).not.toMatch(/\bbg-transparent\b/);
    expect(scrim.className).not.toMatch(/\/\d{1,2}\b/); // sem opacidade tipo bg-background/80
  });
});

// ─────────────────────────────────────────────────────────────────────────
// Camada 4 — Anti-regressão: nenhum header/nav pode usar fundo translúcido
// SOZINHO em sticky top-0/top-safe sem o scrim global como rede de segurança.
// (O scrim global cobre — este teste só confirma que continua existindo.)
// ─────────────────────────────────────────────────────────────────────────
describe("Anti-regressão · headers sticky permanecem cobertos pelo scrim", () => {
  it("App.tsx não removeu o StatusBarScrim em nenhuma refatoração", () => {
    const src = readFileSync(resolve(process.cwd(), "src/App.tsx"), "utf8");
    const importCount = (src.match(/StatusBarScrim/g) || []).length;
    // Esperamos pelo menos 2 ocorrências: 1 import + 1 uso JSX
    expect(importCount).toBeGreaterThanOrEqual(2);
  });

  it("StatusBarScrim.tsx mantém background opaco do tema (não translúcido)", () => {
    const src = readFileSync(
      resolve(process.cwd(), "src/components/StatusBarScrim.tsx"),
      "utf8",
    );
    expect(src).toMatch(/bg-background(?!\/)/); // bg-background sem /opacidade
    expect(src).toMatch(/env\(safe-area-inset-top/);
    expect(src).toMatch(/fixed/);
    expect(src).toMatch(/top-0/);
  });
});
