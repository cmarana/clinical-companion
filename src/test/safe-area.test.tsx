/**
 * Verificação automatizada de safe-areas (iPhone notch / Android status bar).
 *
 * Garantias cobertas:
 *  1. Os tokens CSS de safe-area existem em src/index.css e usam env(safe-area-inset-*).
 *  2. TopBar renderiza com a classe `safe-area-top` (padding-top respeitando o notch).
 *  3. AppLayout reserva espaço inferior com `pb-nav` (home indicator iOS / nav Android)
 *     e o header desktop também aplica `safe-area-top`.
 *  4. Home aplica padding-top usando env(safe-area-inset-top) no header sticky.
 *  5. AdminAiCosts usa as utilities `top-safe` + `pt-safe-0` no header sticky.
 *
 * Estes testes são independentes de plataforma — validam a *contratação* de estilos
 * que o CSS já resolve em iOS (env nativo) e Android (Capacitor StatusBar overlay
 * + WebView env). Quebrar qualquer asserção indica risco de sobreposição com a
 * barra de status / relógio / bateria.
 */
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { readFileSync } from "fs";
import { resolve } from "path";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import TopBar from "@/components/TopBar";

const read = (p: string) => readFileSync(resolve(process.cwd(), p), "utf8");

describe("Safe area · tokens CSS globais (index.css)", () => {
  const css = read("src/index.css");

  it("define --safe-top a partir de env(safe-area-inset-top)", () => {
    expect(css).toMatch(/--safe-top:\s*env\(safe-area-inset-top[^)]*\)/);
  });

  it("define --safe-bottom a partir de env(safe-area-inset-bottom)", () => {
    expect(css).toMatch(/--safe-bottom:\s*env\(safe-area-inset-bottom[^)]*\)/);
  });

  it("expõe utilities .safe-area-top, .pt-safe, .top-safe, .top-after-topbar e .pb-nav", () => {
    expect(css).toMatch(/\.safe-area-top\s*\{[^}]*padding-top:\s*var\(--safe-top\)/);
    expect(css).toMatch(/\.pt-safe\s*\{[^}]*var\(--safe-top\)/);
    expect(css).toMatch(/\.top-safe\s*\{[^}]*top:\s*var\(--safe-top\)/);
    expect(css).toMatch(/\.top-after-topbar\s*\{[^}]*calc\(var\(--safe-top\)\s*\+\s*var\(--topbar-h\)\)/);
    expect(css).toMatch(/\.pb-nav\s*\{[^}]*var\(--safe-bottom\)/);
  });
});

describe("Safe area · TopBar", () => {
  beforeAll(() => {
    // jsdom não implementa matchMedia para o ThemeProvider
    if (!window.matchMedia) {
      // @ts-ignore
      window.matchMedia = () => ({
        matches: false, media: "", onchange: null,
        addListener: () => {}, removeListener: () => {},
        addEventListener: () => {}, removeEventListener: () => {},
        dispatchEvent: () => false,
      });
    }
  });

  it("aplica safe-area-top + sticky top-0 no <header> para não passar por baixo da status bar", () => {
    render(
      <MemoryRouter initialEntries={["/algum"]}>
        <ThemeProvider>
          <TopBar title="Teste" />
        </ThemeProvider>
      </MemoryRouter>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    const cls = header.className;
    expect(cls).toMatch(/\bsafe-area-top\b/);
    expect(cls).toMatch(/\bsticky\b/);
    expect(cls).toMatch(/\btop-0\b/);
  });
});

describe("Safe area · AppLayout (mobile + desktop)", () => {
  const src = read("src/components/AppLayout.tsx");

  it("header desktop usa safe-area-top", () => {
    expect(src).toMatch(/<header[^>]*className="[^"]*\bsafe-area-top\b/);
  });

  it("<main> reserva espaço inferior com pb-nav (home indicator + bottom nav)", () => {
    expect(src).toMatch(/<main[^>]*className="[^"]*\bpb-nav\b/);
  });
});

describe("Safe area · Home (header institucional)", () => {
  const src = read("src/pages/Home.tsx");

  it("container raiz aplica paddingTop com env(safe-area-inset-top)", () => {
    expect(src).toMatch(/paddingTop:\s*["']calc\(env\(safe-area-inset-top[^)]*\)\s*\+\s*0\.75rem\)["']/);
  });

  it("header sticky usa top: env(safe-area-inset-top) para não cobrir o relógio", () => {
    expect(src).toMatch(/top:\s*["']env\(safe-area-inset-top[^)]*\)["']/);
    expect(src).toMatch(/className="[^"]*\bsticky\b[^"]*"\s*\n?\s*style=\{\{\s*top:\s*["']env\(safe-area-inset-top/);
  });
});

describe("Safe area · AdminAiCosts", () => {
  const src = read("src/pages/AdminAiCosts.tsx");

  it("header sticky usa top-safe + pt-safe-0", () => {
    expect(src).toMatch(/className="[^"]*\bsticky\b[^"]*\btop-safe\b[^"]*\bpt-safe-0\b/);
  });
});
