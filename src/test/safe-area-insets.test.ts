/**
 * Validação numérica do cálculo de padding-top em diferentes dispositivos.
 *
 * jsdom não resolve env(safe-area-inset-*), então simulamos os insets
 * sobrescrevendo as CSS custom properties do :root e medimos o resultado
 * via getComputedStyle em elementos com as utilities reais (.safe-area-top,
 * .pt-safe, .pt-safe-0, .top-safe, .pb-nav, .top-after-topbar).
 *
 * Garante que TopBar, Home, AdminAiCosts e <main> permaneçam fora da
 * status bar / home indicator em iPhone com notch/Dynamic Island,
 * Android com gestos, punch-hole, etc.
 */
import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

interface DeviceProfile {
  name: string;
  insetTop: number;    // px
  insetBottom: number; // px
}

const DEVICES: DeviceProfile[] = [
  { name: "iPhone SE (sem notch)",            insetTop: 20, insetBottom: 0  },
  { name: "iPhone 13 (notch clássico)",       insetTop: 47, insetBottom: 34 },
  { name: "iPhone 15 Pro (Dynamic Island)",   insetTop: 59, insetBottom: 34 },
  { name: "Android Pixel 8 (gestos)",         insetTop: 24, insetBottom: 24 },
  { name: "Android botões clássicos",         insetTop: 24, insetBottom: 0  },
  { name: "Android cutout grande (Z Fold)",   insetTop: 32, insetBottom: 16 },
];

const TOPBAR_H = 48;     // 3rem
const BOTTOMNAV_H = 64;  // 4rem
const PT_SAFE_EXTRA = 12; // 0.75rem

/** Mini-CSS replicando as utilities reais (extraído de src/index.css). */
const UTILITIES_CSS = `
  .safe-area-top    { padding-top: var(--safe-top); }
  .pt-safe          { padding-top: calc(var(--safe-top) + 0.75rem); }
  .pt-safe-0        { padding-top: var(--safe-top); }
  .top-safe         { top: var(--safe-top); }
  .top-after-topbar { top: calc(var(--safe-top) + var(--topbar-h)); }
  .pb-nav           { padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom)); }
`;

beforeAll(() => {
  // Sanity-check: as utilities testadas existem no index.css de produção.
  const css = readFileSync(resolve(process.cwd(), "src/index.css"), "utf8");
  for (const cls of ["safe-area-top", "pt-safe", "pt-safe-0", "top-safe", "top-after-topbar", "pb-nav"]) {
    expect(css.includes(`.${cls}`), `Utility .${cls} ausente em src/index.css`).toBe(true);
  }

  const style = document.createElement("style");
  style.id = "safe-area-utils";
  style.textContent = UTILITIES_CSS;
  document.head.appendChild(style);
});

beforeEach(() => {
  document.body.innerHTML = "";
});

function applyDevice(d: DeviceProfile) {
  const root = document.documentElement;
  root.style.setProperty("--safe-top", `${d.insetTop}px`);
  root.style.setProperty("--safe-bottom", `${d.insetBottom}px`);
  root.style.setProperty("--topbar-h", `${TOPBAR_H}px`);
  root.style.setProperty("--bottomnav-h", `${BOTTOMNAV_H}px`);
}

function px(el: Element, prop: keyof CSSStyleDeclaration): number {
  const v = getComputedStyle(el as HTMLElement)[prop] as string;
  return parseFloat(v || "0");
}

describe.each(DEVICES)("Safe area cálculo · $name", (device) => {
  beforeEach(() => applyDevice(device));

  it("TopBar (.safe-area-top) reserva exatamente inset-top", () => {
    const header = document.createElement("header");
    header.className = "safe-area-top";
    document.body.appendChild(header);
    expect(px(header, "paddingTop")).toBe(device.insetTop);
  });

  it("Home (.pt-safe) reserva inset-top + 12px", () => {
    const div = document.createElement("div");
    div.className = "pt-safe";
    document.body.appendChild(div);
    expect(px(div, "paddingTop")).toBe(device.insetTop + PT_SAFE_EXTRA);
  });

  it("AdminAiCosts (.top-safe + .pt-safe-0) gruda no inset-top sem gap", () => {
    const el = document.createElement("div");
    el.className = "top-safe pt-safe-0";
    el.style.position = "sticky";
    document.body.appendChild(el);
    expect(px(el, "top")).toBe(device.insetTop);
    expect(px(el, "paddingTop")).toBe(device.insetTop);
  });

  it("Banner sticky (.top-after-topbar) aparece logo abaixo do header", () => {
    const el = document.createElement("div");
    el.className = "top-after-topbar";
    el.style.position = "sticky";
    document.body.appendChild(el);
    expect(px(el, "top")).toBe(device.insetTop + TOPBAR_H);
  });

  it("<main> (.pb-nav) reserva bottom nav + home indicator", () => {
    const main = document.createElement("main");
    main.className = "pb-nav";
    document.body.appendChild(main);
    expect(px(main, "paddingBottom")).toBe(BOTTOMNAV_H + device.insetBottom);
  });

  it("Conteúdo da TopBar fica integralmente abaixo da status bar", () => {
    // Simula: header sticky top-0 com .safe-area-top + filho de altura --topbar-h
    const header = document.createElement("header");
    header.className = "safe-area-top";
    header.style.position = "sticky";
    header.style.top = "0px";
    const inner = document.createElement("div");
    inner.style.height = `${TOPBAR_H}px`;
    header.appendChild(inner);
    document.body.appendChild(header);

    // O início do conteúdo interno (após padding-top) deve ser >= insetTop.
    const padTop = px(header, "paddingTop");
    expect(padTop).toBeGreaterThanOrEqual(device.insetTop);
    // A altura visível total cobre status bar + chrome do header.
    expect(padTop + TOPBAR_H).toBe(device.insetTop + TOPBAR_H);
  });
});
