/**
 * Verificação automatizada de safe-areas (iPhone notch / Android status bar).
 *
 * Estratégia: snapshot estático sobre o código-fonte. Garante que TopBar, Home,
 * AdminAiCosts e AppLayout NUNCA percam o tratamento de safe-area que evita
 * sobreposição com relógio, bateria e barra de status (iOS e Android).
 *
 * Quebrar qualquer asserção indica risco de o conteúdo passar por baixo da
 * status bar nativa em PWA standalone, Capacitor iOS ou Capacitor Android.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

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
    expect(css).toMatch(
      /\.top-after-topbar\s*\{[^}]*calc\(var\(--safe-top\)\s*\+\s*var\(--topbar-h\)\)/
    );
    expect(css).toMatch(/\.pb-nav\s*\{[^}]*var\(--safe-bottom\)/);
  });
});

describe("Safe area · TopBar", () => {
  const src = read("src/components/TopBar.tsx");

  it("<header> usa sticky top-0 + safe-area-top (não fica sob status bar)", () => {
    // Header é renderizado uma vez; valida classes essenciais juntas
    expect(src).toMatch(
      /<header[\s\S]*?className=\{cn\(\s*["'][^"']*\bsticky\b[^"']*\btop-0\b[^"']*\bsafe-area-top\b/
    );
  });

  it("usa top-after-topbar para overlays sticky abaixo do header", () => {
    expect(src).toMatch(/\btop-after-topbar\b/);
  });
});

describe("Safe area · AppLayout (mobile + desktop)", () => {
  const src = read("src/components/AppLayout.tsx");

  it("header desktop aplica safe-area-top", () => {
    expect(src).toMatch(/<header[^>]*className="[^"]*\bsafe-area-top\b/);
  });

  it("<main> usa pb-nav (reserva para bottom nav + home indicator)", () => {
    expect(src).toMatch(/<main[^>]*className="[^"]*\bpb-nav\b/);
  });
});

describe("Safe area · Home (header institucional)", () => {
  const src = read("src/pages/Home.tsx");

  it("container raiz aplica paddingTop com env(safe-area-inset-top)", () => {
    expect(src).toMatch(
      /paddingTop:\s*["']calc\(env\(safe-area-inset-top[^)]*\)\s*\+\s*0\.75rem\)["']/
    );
  });

  it("header sticky usa top: env(safe-area-inset-top) (não cobre relógio/bateria)", () => {
    expect(src).toMatch(
      /className="[^"]*\bsticky\b[^"]*"\s*\n?\s*style=\{\{\s*top:\s*["']env\(safe-area-inset-top[^)]*\)["']/
    );
  });
});

describe("Safe area · AdminAiCosts", () => {
  const src = read("src/pages/AdminAiCosts.tsx");

  it("header sticky combina top-safe + pt-safe-0", () => {
    expect(src).toMatch(
      /className="[^"]*\bsticky\b[^"]*\btop-safe\b[^"]*\bpt-safe-0\b/
    );
  });
});
