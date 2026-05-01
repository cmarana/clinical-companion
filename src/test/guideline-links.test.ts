import { describe, it, expect } from "vitest";
import { readdirSync } from "fs";
import { resolve, join } from "path";
import { pathToFileURL } from "url";

/**
 * Validação estática (sem rede) das URLs de diretrizes.
 * Falha o CI se houver `guideline.url` ausente, vazio ou malformado.
 * Verificação HTTP real fica no script `scripts/validate-guideline-links.ts`.
 */

const PROTOCOLS_DIR = resolve(process.cwd(), "src/data/fullProtocols");

function isValidUrl(u: unknown): boolean {
  if (typeof u !== "string" || u.trim().length === 0) return false;
  try {
    const parsed = new URL(u);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

async function loadAll(): Promise<any[]> {
  const files = readdirSync(PROTOCOLS_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => join(PROTOCOLS_DIR, f));
  const all: any[] = [];
  for (const f of files) {
    try {
      const mod = await import(pathToFileURL(f).href);
      const protocols = Object.values(mod)
        .flat()
        .filter(
          (p: any) =>
            p && typeof p === "object" && "id" in p && "sections" in p,
        );
      all.push(...protocols);
    } catch {
      // ignora arquivos que não exportam protocolos (types, loader, etc)
    }
  }
  return all;
}

describe("guideline links — validação estática", () => {
  it("toda guideline deve ter URL http(s) válida", async () => {
    const protocols = await loadAll();
    const broken: string[] = [];
    for (const p of protocols) {
      const guidelines = p.guidelines ?? [];
      for (const g of guidelines) {
        if (!isValidUrl(g.url)) {
          broken.push(
            `${p.id} → ${g.society} ${g.year}: ${g.url ?? "<ausente>"}`,
          );
        }
      }
    }
    if (broken.length > 0) {
      throw new Error(
        `URLs de diretrizes inválidas/ausentes (${broken.length}):\n` +
          broken.join("\n"),
      );
    }
    expect(broken.length).toBe(0);
  });
});
