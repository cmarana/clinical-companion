import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  samuCoverageAudit,
  getSamuCoverageSummary,
  type SamuCoverageAuditItem,
} from "@/data/emergency/samuCoverageAudit";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const priorityVariant = (p: SamuCoverageAuditItem["priority"]) => {
  switch (p) {
    case "Crítica":
      return "destructive";
    case "Alta":
      return "default";
    case "Média":
      return "secondary";
    default:
      return "outline";
  }
};

function ItemCard({ item }: { item: SamuCoverageAuditItem }) {
  return (
    <Card className="border-border/60">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold">{item.theme}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={priorityVariant(item.priority) as any}>{item.priority}</Badge>
            <Badge
              variant={item.status === "Ausente" ? "destructive" : "secondary"}
            >
              {item.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <div>
            <span className="text-muted-foreground">categoryId:</span>{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {item.categoryId}
            </code>
          </div>
          <div>
            <span className="text-muted-foreground">actionNeeded:</span>{" "}
            <span className="font-medium">{item.actionNeeded}</span>
          </div>
        </div>

        <div>
          <span className="text-muted-foreground">expectedSamuCodes:</span>{" "}
          {item.expectedSamuCodes.length === 0 ? (
            <span className="italic text-muted-foreground">—</span>
          ) : (
            <span className="inline-flex flex-wrap gap-1">
              {item.expectedSamuCodes.map((c) => (
                <Badge key={c} variant="outline" className="font-mono text-[10px]">
                  {c}
                </Badge>
              ))}
            </span>
          )}
        </div>

        <div>
          <span className="text-muted-foreground">matchedProtocolTitles:</span>
          {item.matchedProtocolTitles.length === 0 ? (
            <span className="ml-1 italic text-muted-foreground">
              Nenhum protocolo correspondente
            </span>
          ) : (
            <ul className="ml-4 mt-1 list-disc space-y-0.5">
              {item.matchedProtocolTitles.map((t, i) => (
                <li key={`${t}-${i}`} className="text-foreground/90">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        {item.notes && (
          <div className="rounded-md border border-border/50 bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">notes:</span>{" "}
            {item.notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function AdminSamuAudit() {
  const summary = useMemo(() => getSamuCoverageSummary(), []);
  const ausentes = useMemo(
    () => samuCoverageAudit.filter((i) => i.status === "Ausente"),
    [],
  );
  const parciais = useMemo(
    () => samuCoverageAudit.filter((i) => i.status === "Parcial"),
    [],
  );

  return (
    <div className="container mx-auto max-w-5xl space-y-6 px-4 py-6">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Curadoria interna · não exibido no menu
        </p>
        <h1 className="text-2xl font-bold">Auditoria de cobertura SAMU 192</h1>
        <p className="text-sm text-muted-foreground">
          Resultado da análise de{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            src/data/emergency/samuCoverageAudit.ts
          </code>
          . Apenas itens com status <strong>Ausente</strong> ou{" "}
          <strong>Parcial</strong>.
        </p>
      </header>

      {/* Resumo */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Resumo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { label: "Total", value: summary.total },
              { label: "Cobertos", value: summary.cobertos },
              { label: "Parciais", value: summary.parciais },
              { label: "Ausentes", value: summary.ausentes },
              { label: "Operacionais", value: summary.operacionais },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border/60 bg-card px-3 py-2"
              >
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="text-2xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 text-sm font-semibold">
              Top 10 prioridades (Crítica + Alta)
            </h3>
            <ol className="space-y-1.5 text-sm">
              {summary.topToCreate.map((t, i) => (
                <li
                  key={`${t.theme}-${i}`}
                  className="flex flex-wrap items-center gap-2"
                >
                  <span className="w-6 text-right font-mono text-xs text-muted-foreground">
                    {i + 1}.
                  </span>
                  <span className="flex-1 font-medium">{t.theme}</span>
                  <Badge variant={priorityVariant(t.priority) as any}>
                    {t.priority}
                  </Badge>
                  <Badge
                    variant={t.status === "Ausente" ? "destructive" : "secondary"}
                  >
                    {t.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {t.actionNeeded}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Ausentes */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            1. Protocolos ausentes — criar novo protocolo
          </h2>
          <Badge variant="destructive">{ausentes.length}</Badge>
        </div>
        {ausentes.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum item ausente.</p>
        ) : (
          <div className="space-y-3">
            {ausentes.map((it) => (
              <ItemCard key={it.theme} item={it} />
            ))}
          </div>
        )}
      </section>

      {/* Parciais */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            2. Protocolos parciais — revisar protocolo existente
          </h2>
          <Badge variant="secondary">{parciais.length}</Badge>
        </div>
        {parciais.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum item parcial.</p>
        ) : (
          <div className="space-y-3">
            {parciais.map((it) => (
              <ItemCard key={it.theme} item={it} />
            ))}
          </div>
        )}
      </section>

      <footer className="pt-4 text-center text-xs text-muted-foreground">
        Acesso direto: <code>/admin/samu-audit</code> ·{" "}
        <Link to="/emergency" className="underline">
          Voltar para Emergência/UTI
        </Link>
      </footer>
    </div>
  );
}
