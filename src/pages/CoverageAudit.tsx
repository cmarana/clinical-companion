import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  RefreshCw,
  Download,
  ExternalLink,
} from "lucide-react";
import {
  auditCoverage,
  rowsToCsv,
  summarize,
  summarizeBySector,
  SECTOR_LABELS,
  STATUS_LABELS,
  type CoverageAuditRow,
  type CoverageStatus,
} from "@/lib/coverage-audit";
import type { Sector, Priority } from "@/data/fullProtocols/_coverageMaster";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const STATUS_TONE: Record<CoverageStatus, string> = {
  ok: "bg-primary0/10 text-primary dark:text-primary border-primary0/30",
  outdated: "bg-destructive0/10 text-destructive dark:text-destructive border-destructive0/30",
  incomplete: "bg-destructive0/10 text-destructive dark:text-destructive border-destructive0/30",
  missing: "bg-destructive/10 text-destructive border-destructive/30",
};

const STATUS_ICON: Record<CoverageStatus, JSX.Element> = {
  ok: <CheckCircle2 className="h-3 w-3 mr-1" />,
  outdated: <Clock className="h-3 w-3 mr-1" />,
  incomplete: <AlertTriangle className="h-3 w-3 mr-1" />,
  missing: <XCircle className="h-3 w-3 mr-1" />,
};

const SECTORS: Sector[] = ["emergencia", "uti", "cti", "upa", "ps"];
const PRIORITIES: Priority[] = ["P1", "P2", "P3"];
const STATUSES: CoverageStatus[] = ["missing", "incomplete", "outdated", "ok"];

export default function CoverageAudit() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authorized, setAuthorized] = useState(false);
  const [rows, setRows] = useState<CoverageAuditRow[]>([]);
  const [tick, setTick] = useState(0);

  // Filtros
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState<Sector | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<Priority | "all">("all");
  const [statusFilter, setStatusFilter] = useState<CoverageStatus | "all">("all");

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (!data) {
        toast.error("Acesso negado — apenas administradores");
        navigate("/");
        return;
      }
      setAuthorized(true);
    })();
  }, [user, navigate]);

  useEffect(() => {
    if (authorized) setRows(auditCoverage());
  }, [authorized, tick]);

  const summary = useMemo(() => summarize(rows), [rows]);
  const bySector = useMemo(() => summarizeBySector(rows), [rows]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows
      .filter((r) => sectorFilter === "all" || r.entry.sectors.includes(sectorFilter))
      .filter((r) => priorityFilter === "all" || r.entry.priority === priorityFilter)
      .filter((r) => statusFilter === "all" || r.status === statusFilter)
      .filter(
        (r) =>
          !q ||
          r.entry.title.toLowerCase().includes(q) ||
          r.entry.guidelineHint.toLowerCase().includes(q) ||
          r.entry.expectedSocieties.join(" ").toLowerCase().includes(q)
      )
      .sort((a, b) => {
        // Faltante > Incompleto > Desatualizado > OK; depois P1>P2>P3
        const orderS: Record<CoverageStatus, number> = { missing: 0, incomplete: 1, outdated: 2, ok: 3 };
        const orderP: Record<Priority, number> = { P1: 0, P2: 1, P3: 2 };
        return (
          orderS[a.status] - orderS[b.status] ||
          orderP[a.entry.priority] - orderP[b.entry.priority] ||
          a.entry.title.localeCompare(b.entry.title)
        );
      });
  }, [rows, search, sectorFilter, priorityFilter, statusFilter]);

  const exportCsv = () => {
    const csv = rowsToCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `coverage-audit-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exportado");
  };

  if (!authorized) {
    return (
      <div className="container max-w-5xl py-10 text-center text-sm text-muted-foreground">
        Verificando permissões…
      </div>
    );
  }

  return (
    <div className="container max-w-7xl py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Auditoria de Cobertura 2025/2026</h1>
            <p className="text-sm text-muted-foreground">
              Cruza a master list de protocolos críticos por setor com os protocolos reais do app.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setTick((t) => t + 1)}>
            <RefreshCw className="h-4 w-4 mr-2" /> Recalcular
          </Button>
          <Button variant="outline" size="sm" onClick={exportCsv}>
            <Download className="h-4 w-4 mr-2" /> Exportar CSV
          </Button>
        </div>
      </div>

      {/* Resumo global */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <SummaryCard label="Total" value={summary.total} tone="neutral" />
        <SummaryCard label="OK" value={summary.ok} tone="ok" />
        <SummaryCard label="Desatualizados" value={summary.outdated} tone="warn" />
        <SummaryCard label="Incompletos" value={summary.incomplete} tone="orange" />
        <SummaryCard label="Faltantes" value={summary.missing} tone="err" />
      </div>

      {/* Resumo por setor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cobertura por setor</CardTitle>
          <CardDescription>
            Cada protocolo pode contar para mais de um setor (ex.: PCR conta em todos).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {SECTORS.map((s) => {
              const sm = bySector[s];
              const okPct = sm.total > 0 ? Math.round((sm.ok / sm.total) * 100) : 0;
              return (
                <div key={s} className="rounded-lg border p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{SECTOR_LABELS[s]}</div>
                    <Badge variant="outline" className="text-xs">
                      {okPct}% OK
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    <div>Total: <span className="text-foreground font-medium">{sm.total}</span></div>
                    <div>OK: <span className="text-primary font-medium">{sm.ok}</span></div>
                    <div>Desat.: <span className="text-destructive font-medium">{sm.outdated}</span></div>
                    <div>Incomp.: <span className="text-destructive font-medium">{sm.incomplete}</span></div>
                    <div className="col-span-2">Faltantes: <span className="text-destructive font-medium">{sm.missing}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6 space-y-3">
          <Input
            placeholder="Buscar por título, diretriz ou sociedade…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 flex-wrap">
            <FilterChip active={sectorFilter === "all"} onClick={() => setSectorFilter("all")}>
              Todos setores
            </FilterChip>
            {SECTORS.map((s) => (
              <FilterChip
                key={s}
                active={sectorFilter === s}
                onClick={() => setSectorFilter(s)}
              >
                {SECTOR_LABELS[s]}
              </FilterChip>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <FilterChip active={priorityFilter === "all"} onClick={() => setPriorityFilter("all")}>
              Todas prioridades
            </FilterChip>
            {PRIORITIES.map((p) => (
              <FilterChip
                key={p}
                active={priorityFilter === p}
                onClick={() => setPriorityFilter(p)}
              >
                {p}
              </FilterChip>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <FilterChip active={statusFilter === "all"} onClick={() => setStatusFilter("all")}>
              Todos status
            </FilterChip>
            {STATUSES.map((s) => (
              <FilterChip key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>
                {STATUS_LABELS[s]}
              </FilterChip>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabela */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {filtered.length} protocolo(s) — ordenados por gravidade
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Prio</TableHead>
                <TableHead>Protocolo</TableHead>
                <TableHead>Setores</TableHead>
                <TableHead>Diretriz alvo</TableHead>
                <TableHead>Revisão</TableHead>
                <TableHead>Motivos</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((r) => (
                <TableRow key={r.entry.expectedId}>
                  <TableCell>
                    <Badge variant="outline" className={cn("text-xs", STATUS_TONE[r.status])}>
                      {STATUS_ICON[r.status]}
                      {STATUS_LABELS[r.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {r.entry.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{r.entry.title}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {r.entry.sectors.map((s) => SECTOR_LABELS[s]).join(", ")}
                  </TableCell>
                  <TableCell className="text-xs">
                    <div className="font-medium">{r.entry.guidelineHint}</div>
                    <div className="text-muted-foreground">
                      Esperado: {r.entry.expectedSocieties.join(", ")}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs">
                    <div>Alvo: <span className="font-medium">{r.entry.targetYear}</span></div>
                    <div className="text-muted-foreground">
                      Atual: {r.reviewedYear ?? "—"}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-[280px]">
                    {r.reasons.length > 0 ? r.reasons.join(" · ") : "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    {r.matchedId ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => navigate(`/full-protocols/${r.matchedId}`)}
                      >
                        Abrir <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">criar</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-sm text-muted-foreground py-8">
                    Nenhum item para os filtros atuais.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "neutral" | "ok" | "warn" | "orange" | "err";
}) {
  const toneCls = {
    neutral: "text-foreground",
    ok: "text-primary",
    warn: "text-destructive",
    orange: "text-destructive",
    err: "text-destructive",
  }[tone];
  return (
    <Card>
      <CardContent className="pt-6">
        <div className={cn("text-3xl font-bold", toneCls)}>{value}</div>
        <div className="text-xs text-muted-foreground mt-1">{label}</div>
      </CardContent>
    </Card>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
      )}
    >
      {children}
    </button>
  );
}
