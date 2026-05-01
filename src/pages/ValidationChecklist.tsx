import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, RefreshCw, Loader2 } from "lucide-react";
import {
  runAllIntegrityTests,
  TAB_TO_ITEM_TYPES,
  type IntegrityResult,
  type TabId,
} from "@/lib/integrity-tests";
import { toast } from "sonner";

const TARGET_YEAR = 2026;

interface VersionRow {
  item_type: string;
  current_year: number;
  last_check_result: string;
}

interface TabSummary {
  tabId: TabId;
  tabLabel: string;
  integrity: IntegrityResult;
  total: number;
  updated2026: number;
  pending: number;
  hasErrors: number;
  isUpdated2026: boolean;
}

export default function ValidationChecklist() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [versionRows, setVersionRows] = useState<VersionRow[]>([]);
  const [integrityResults, setIntegrityResults] = useState<IntegrityResult[]>([]);

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

  const loadAll = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("versioned_items")
        .select("item_type, current_year, last_check_result");
      if (error) throw error;
      setVersionRows((data ?? []) as VersionRow[]);
      setIntegrityResults(runAllIntegrityTests());
    } catch (e: any) {
      toast.error("Erro ao carregar dados", { description: e.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  const summaries = useMemo<TabSummary[]>(() => {
    return integrityResults.map((integrity) => {
      const types = TAB_TO_ITEM_TYPES[integrity.tabId];
      const rows = versionRows.filter((r) => types.includes(r.item_type));
      const total = rows.length;
      const updated2026 = rows.filter(
        (r) => r.current_year >= TARGET_YEAR && r.last_check_result === "up_to_date"
      ).length;
      const pending = rows.filter((r) => r.last_check_result === "update_suggested").length;
      const hasErrors = rows.filter((r) => r.last_check_result === "error").length;
      // Considera "Atualizado 2026" se há registros e ≥80% estão up_to_date no ano alvo
      const isUpdated2026 = total > 0 && updated2026 / total >= 0.8;
      return {
        tabId: integrity.tabId,
        tabLabel: integrity.tabLabel,
        integrity,
        total,
        updated2026,
        pending,
        hasErrors,
        isUpdated2026,
      };
    });
  }, [versionRows, integrityResults]);

  const allPassing = summaries.every((s) => s.integrity.passed && s.isUpdated2026);

  return (
    <div className="container max-w-5xl py-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Checklist de Validação 2026</h1>
            <p className="text-sm text-muted-foreground">
              Status de atualização e integridade por aba clínica
            </p>
          </div>
        </div>
        <Button onClick={loadAll} disabled={loading} variant="outline" size="sm">
          {loading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          Recarregar
        </Button>
      </div>

      {/* Banner global */}
      <Card className={allPassing ? "border-emerald-500/50 bg-emerald-500/5" : "border-amber-500/50 bg-amber-500/5"}>
        <CardHeader className="flex flex-row items-center gap-3 space-y-0">
          {allPassing ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          )}
          <div>
            <CardTitle className="text-base">
              {allPassing
                ? "Todas as abas validadas para 2026"
                : "Algumas abas ainda não estão 100% validadas para 2026"}
            </CardTitle>
            <CardDescription>
              {summaries.filter((s) => s.isUpdated2026 && s.integrity.passed).length} de{" "}
              {summaries.length} abas aprovadas
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Cards por aba */}
      <div className="grid gap-4 md:grid-cols-2">
        {summaries.map((s) => (
          <TabCard key={s.tabId} summary={s} />
        ))}
      </div>
    </div>
  );
}

function TabCard({ summary }: { summary: TabSummary }) {
  const integrityOk = summary.integrity.passed;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-lg">{summary.tabLabel}</CardTitle>
            <CardDescription>
              {summary.integrity.totalItems} itens no app · {summary.total} itens versionados
            </CardDescription>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <StatusBadge ok={summary.isUpdated2026} okLabel="Atualizado 2026" failLabel="Pendente 2026" />
            <StatusBadge ok={integrityOk} okLabel="Integridade OK" failLabel="Falha integridade" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Versionamento 2026 */}
        <div className="rounded-lg border p-3 space-y-2">
          <div className="text-sm font-medium">Versionamento 2026</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <Stat label="Atualizados" value={summary.updated2026} tone="ok" />
            <Stat label="Sugeridos" value={summary.pending} tone="warn" />
            <Stat label="Erros" value={summary.hasErrors} tone="err" />
          </div>
          {summary.total === 0 && (
            <p className="text-xs text-muted-foreground">
              Nenhum item registrado em <code>versioned_items</code> para este escopo.
              Rode o seed ou a verificação no painel de revisão.
            </p>
          )}
        </div>

        {/* Testes de integridade */}
        <div className="rounded-lg border p-3 space-y-2">
          <div className="text-sm font-medium">Testes de integridade</div>
          <ul className="space-y-1.5">
            {summary.integrity.checks.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                {c.passed ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 shrink-0" />
                )}
                <div className="flex-1">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-muted-foreground">{c.message}</div>
                  {c.failedSamples && c.failedSamples.length > 0 && (
                    <div className="text-destructive mt-0.5">
                      Ex: {c.failedSamples.join(" · ")}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ ok, okLabel, failLabel }: { ok: boolean; okLabel: string; failLabel: string }) {
  return (
    <Badge
      variant="outline"
      className={
        ok
          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
          : "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30"
      }
    >
      {ok ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
      {ok ? okLabel : failLabel}
    </Badge>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone: "ok" | "warn" | "err" }) {
  const colorMap = {
    ok: "text-emerald-600",
    warn: "text-amber-600",
    err: "text-destructive",
  };
  return (
    <div className="rounded border p-2 text-center">
      <div className={`text-lg font-bold ${colorMap[tone]}`}>{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
