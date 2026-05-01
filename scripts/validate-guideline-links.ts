/**
 * Valida URLs de diretrizes (`guidelines[].url`) em todos os protocolos.
 *
 * - Verifica formato (http/https, host válido)
 * - Faz HEAD request com fallback para GET (timeout 10s)
 * - Sinaliza ausentes, malformados, 4xx/5xx, timeouts
 * - Gera relatório JSON em /mnt/documents/guideline-links-report.json
 *   e Markdown em /mnt/documents/guideline-links-report.md
 *
 * Uso: bun run scripts/validate-guideline-links.ts
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { pathToFileURL } from "url";

interface GuidelineSource {
  society: string;
  title: string;
  year: number;
  recommendation: string;
  url: string;
  class?: string;
  level?: string;
}

interface Issue {
  protocolFile: string;
  protocolId: string;
  protocolTitle: string;
  society: string;
  title: string;
  year: number;
  url: string;
  problem:
    | "missing_url"
    | "invalid_format"
    | "http_error"
    | "timeout"
    | "network_error";
  detail: string;
}

const PROTOCOLS_DIR = resolve(process.cwd(), "src/data/fullProtocols");
const OUT_DIR = "/mnt/documents";
const TIMEOUT_MS = 10_000;

function isValidUrl(u: unknown): u is string {
  if (typeof u !== "string" || u.trim().length === 0) return false;
  try {
    const parsed = new URL(u);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

async function checkUrl(
  url: string,
): Promise<{ ok: boolean; problem?: Issue["problem"]; detail: string }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "User-Agent": "PULSO-link-checker/1.0" },
    });
    // Algumas sociedades não respondem a HEAD — tenta GET parcial
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "User-Agent": "PULSO-link-checker/1.0", Range: "bytes=0-1024" },
      });
    }
    clearTimeout(timer);
    if (res.ok || res.status === 206) return { ok: true, detail: `HTTP ${res.status}` };
    return { ok: false, problem: "http_error", detail: `HTTP ${res.status}` };
  } catch (err: unknown) {
    clearTimeout(timer);
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("aborted") || msg.includes("timeout"))
      return { ok: false, problem: "timeout", detail: `Timeout após ${TIMEOUT_MS}ms` };
    return { ok: false, problem: "network_error", detail: msg };
  }
}

async function loadProtocols(file: string): Promise<any[]> {
  const url = pathToFileURL(file).href;
  const mod = await import(url);
  const exported = Object.values(mod).flat().filter(Boolean);
  return exported.filter(
    (p: any) => p && typeof p === "object" && "id" in p && "sections" in p,
  );
}

async function main() {
  const files = readdirSync(PROTOCOLS_DIR)
    .filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts"))
    .map((f) => join(PROTOCOLS_DIR, f));

  const issues: Issue[] = [];
  let totalGuidelines = 0;
  let checked = 0;
  let okCount = 0;

  for (const file of files) {
    let protocols: any[] = [];
    try {
      protocols = await loadProtocols(file);
    } catch {
      continue; // arquivo de tipos/loader/etc
    }
    for (const p of protocols) {
      const guidelines: GuidelineSource[] = p.guidelines || [];
      for (const g of guidelines) {
        totalGuidelines++;
        const base: Omit<Issue, "problem" | "detail"> = {
          protocolFile: file.replace(process.cwd() + "/", ""),
          protocolId: p.id,
          protocolTitle: p.title,
          society: g.society,
          title: g.title,
          year: g.year,
          url: g.url ?? "",
        };
        if (!isValidUrl(g.url)) {
          issues.push({
            ...base,
            problem: g.url ? "invalid_format" : "missing_url",
            detail: g.url ? `URL malformada: ${g.url}` : "URL ausente",
          });
          continue;
        }
        checked++;
        const r = await checkUrl(g.url);
        if (r.ok) {
          okCount++;
        } else {
          issues.push({ ...base, problem: r.problem!, detail: r.detail });
        }
      }
    }
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    totalGuidelines,
    networkChecked: checked,
    ok: okCount,
    issuesCount: issues.length,
    issues,
  };
  writeFileSync(
    join(OUT_DIR, "guideline-links-report.json"),
    JSON.stringify(report, null, 2),
    "utf8",
  );

  const md = [
    `# Relatório de validação de links de diretrizes`,
    ``,
    `**Gerado em:** ${report.generatedAt}`,
    `**Total de diretrizes:** ${totalGuidelines}`,
    `**Verificadas via rede:** ${checked}`,
    `**OK:** ${okCount}`,
    `**Problemas:** ${issues.length}`,
    ``,
    `## Problemas encontrados`,
    ``,
    issues.length === 0
      ? `_Nenhum problema detectado._`
      : issues
          .map(
            (i) =>
              `- **[${i.problem}]** \`${i.protocolId}\` (${i.protocolTitle}) — ${i.society} ${i.year}: ${i.detail}` +
              (i.url ? `\n  - ${i.url}` : ""),
          )
          .join("\n"),
    ``,
  ].join("\n");
  writeFileSync(join(OUT_DIR, "guideline-links-report.md"), md, "utf8");

  console.log(
    `Diretrizes: ${totalGuidelines} | OK: ${okCount} | Problemas: ${issues.length}`,
  );
  console.log(`Relatórios em ${OUT_DIR}/guideline-links-report.{json,md}`);
  if (issues.length > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
