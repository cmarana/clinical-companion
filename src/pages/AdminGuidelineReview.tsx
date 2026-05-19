import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Loader2, RefreshCw, Sparkles, CheckCircle2, XCircle, Play, AlertTriangle, GitCompare } from "lucide-react";
import { toast } from "sonner";
import { SuggestionDiffModal } from "@/components/admin/SuggestionDiffModal";

const SCOPES: { id: string; label: string }[] = [
  { id: "protocol", label: "Protocolos clínicos" },
  { id: "quick_protocol", label: "Protocolos rápidos (Sala Vermelha)" },
  { id: "prescription", label: "Prescrições" },
  { id: "calculator", label: "Calculadoras e scores" },
  { id: "antimicrobial", label: "Antimicrobianos" },
];

interface Job {
  id: string;
  status: string;
  scope: string[];
  target_year: number;
  source_policy: string;
  total_items: number;
  processed_items: number;
  suggestions_count: number;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  error_message: string;
}

interface Suggestion {
  id: string;
  job_id: string;
  item_type: string;
  item_id: string;
  item_title: string;
  current_version: string;
  proposed_version: string;
  change_summary: string;
  proposed_patch: string;
  evidence_sources: { name: string; url?: string; year?: number }[];
  impact: "low" | "medium" | "high" | "critical";
  status: "pending" | "approved" | "rejected" | "applied";
  reviewer_note: string;
  reviewed_at: string | null;
  applied_at: string | null;
  created_at: string;
}

const IMPACT_COLORS: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-destructive0/15 text-destructive dark:text-destructive",
  high: "bg-destructive0/15 text-destructive dark:text-destructive",
  critical: "bg-destructive/15 text-destructive",
};

export default function AdminGuidelineReview() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const [scope, setScope] = useState<string[]>(SCOPES.map((s) => s.id));
  const [targetYear, setTargetYear] = useState(2026);
  const [sourcePolicy, setSourcePolicy] = useState<"br_only" | "br_plus_intl">("br_plus_intl");
  const [running, setRunning] = useState(false);

  const [jobs, setJobs] = useState<Job[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [filter, setFilter] = useState<"pending" | "all">("pending");
  const [acting, setActing] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [diffOpenId, setDiffOpenId] = useState<string | null>(null);

  // Auth gate
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
      setLoading(false);
    })();
  }, [user, navigate]);

  const fetchData = useCallback(async () => {
    const [{ data: jobRows }, { data: sugRows }] = await Promise.all([
      supabase.from("guideline_review_jobs").select("*").order("created_at", { ascending: false }).limit(10),
      supabase.from("guideline_review_suggestions").select("*").order("created_at", { ascending: false }).limit(200),
    ]);
    setJobs((jobRows ?? []) as unknown as Job[]);
    setSuggestions((sugRows ?? []) as unknown as Suggestion[]);
  }, []);

  useEffect(() => {
    if (authorized) void fetchData();
  }, [authorized, fetchData]);

  const triggerCheck = async () => {
    if (scope.length === 0) {
      toast.error("Selecione pelo menos um escopo");
      return;
    }
    setRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke("check-guideline-updates", {
        body: { scope, target_year: targetYear, source_policy: sourcePolicy, limit: 25 },
      });
      if (error) throw error;
      toast.success(`Verificação concluída — ${data?.suggestions ?? 0} sugestão(ões) gerada(s)`);
      await fetchData();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Falha ao executar verificação");
    } finally {
      setRunning(false);
    }
  };

  const reviewSuggestion = async (suggestion: Suggestion, action: "approve" | "reject" | "apply") => {
    setActing(suggestion.id);
    try {
      const { error } = await supabase.functions.invoke("apply-guideline-suggestion", {
        body: { suggestion_id: suggestion.id, action, note: notes[suggestion.id] ?? "" },
      });
      if (error) throw error;
      toast.success(action === "apply" ? "Versão aplicada" : action === "approve" ? "Aprovado" : "Rejeitado");
      await fetchData();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Falha");
    } finally {
      setActing(null);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }
  if (!authorized) return null;

  const visible = filter === "pending"
    ? suggestions.filter((s) => s.status === "pending")
    : suggestions;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin")} aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Sparkles className="h-6 w-6 text-primary" />
            Revisão de diretrizes
          </h1>
          <p className="text-sm text-muted-foreground">
            Verifica atualizações {targetYear} e gera sugestões para aprovação manual.
          </p>
        </div>
      </div>

      {/* Trigger */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Disparar verificação</CardTitle>
          <CardDescription>A IA processa até 25 itens por execução, priorizando os menos checados.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-2 block">Escopo</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SCOPES.map((s) => (
                <label key={s.id} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={scope.includes(s.id)}
                    onCheckedChange={(c) =>
                      setScope((prev) => (c ? [...prev, s.id] : prev.filter((x) => x !== s.id)))
                    }
                  />
                  {s.label}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <Label htmlFor="year" className="mb-1 block text-xs">Ano-alvo</Label>
              <input
                id="year" type="number" value={targetYear}
                onChange={(e) => setTargetYear(parseInt(e.target.value, 10) || 2026)}
                className="w-24 rounded-md border bg-background px-2 py-1 text-sm"
              />
            </div>
            <div>
              <Label className="mb-1 block text-xs">Fontes</Label>
              <select
                value={sourcePolicy}
                onChange={(e) => setSourcePolicy(e.target.value as "br_only" | "br_plus_intl")}
                className="rounded-md border bg-background px-2 py-1 text-sm"
              >
                <option value="br_only">Apenas brasileiras</option>
                <option value="br_plus_intl">BR + internacionais</option>
              </select>
            </div>
          </div>
          <Button onClick={triggerCheck} disabled={running}>
            {running ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
            Verificar agora
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="suggestions">
        <TabsList>
          <TabsTrigger value="suggestions">Sugestões</TabsTrigger>
          <TabsTrigger value="jobs">Histórico de execuções</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button size="sm" variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>
                Pendentes ({suggestions.filter((s) => s.status === "pending").length})
              </Button>
              <Button size="sm" variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
                Todas ({suggestions.length})
              </Button>
            </div>
            <Button size="sm" variant="ghost" onClick={() => void fetchData()}>
              <RefreshCw className="mr-2 h-4 w-4" /> Atualizar
            </Button>
          </div>

          {visible.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-sm text-muted-foreground">
                Nenhuma sugestão {filter === "pending" ? "pendente" : ""}.
              </CardContent>
            </Card>
          ) : (
            visible.map((s) => (
              <Card key={s.id}>
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base">{s.item_title}</CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs">{s.item_type} · {s.item_id}</span>
                        <span>·</span>
                        <span>{s.current_version} → <strong>{s.proposed_version}</strong></span>
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={IMPACT_COLORS[s.impact]}>
                        {s.impact === "critical" && <AlertTriangle className="mr-1 h-3 w-3" />}
                        Impacto {s.impact}
                      </Badge>
                      <Badge variant={s.status === "applied" ? "default" : s.status === "rejected" ? "destructive" : "secondary"}>
                        {s.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="font-medium flex-1 min-w-0">{s.change_summary}</p>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setDiffOpenId(s.id)}
                      className="shrink-0"
                    >
                      <GitCompare className="mr-2 h-4 w-4" />
                      Revisar diff
                    </Button>
                  </div>
                  {s.evidence_sources?.length > 0 && (
                    <div className="text-xs text-muted-foreground">
                      <strong>Fontes:</strong>{" "}
                      {s.evidence_sources.map((src, i) => (
                        <span key={i}>
                          {src.url ? (
                            <a href={src.url} target="_blank" rel="noreferrer" className="underline">
                              {src.name}{src.year ? ` (${src.year})` : ""}
                            </a>
                          ) : (
                            <>{src.name}{src.year ? ` (${src.year})` : ""}</>
                          )}
                          {i < s.evidence_sources.length - 1 ? "; " : ""}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.status === "pending" && (
                    <>
                      <Textarea
                        placeholder="Nota do revisor (opcional)"
                        value={notes[s.id] ?? ""}
                        onChange={(e) => setNotes((p) => ({ ...p, [s.id]: e.target.value }))}
                        rows={2}
                      />
                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm" disabled={acting === s.id}
                          onClick={() => void reviewSuggestion(s, "apply")}
                        >
                          {acting === s.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
                          Aplicar versão
                        </Button>
                        <Button
                          size="sm" variant="outline" disabled={acting === s.id}
                          onClick={() => void reviewSuggestion(s, "approve")}
                        >
                          Aprovar (sem aplicar)
                        </Button>
                        <Button
                          size="sm" variant="ghost" disabled={acting === s.id}
                          onClick={() => void reviewSuggestion(s, "reject")}
                        >
                          <XCircle className="mr-2 h-4 w-4" /> Rejeitar
                        </Button>
                      </div>
                    </>
                  )}

                  {s.reviewer_note && (
                    <p className="text-xs text-muted-foreground">
                      <strong>Nota:</strong> {s.reviewer_note}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="jobs" className="space-y-3">
          {jobs.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-sm text-muted-foreground">
                Nenhuma execução ainda.
              </CardContent>
            </Card>
          ) : (
            jobs.map((j) => (
              <Card key={j.id}>
                <CardContent className="py-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <strong>{j.target_year}</strong> · {j.source_policy} · {j.scope.length} escopo(s)
                    </div>
                    <Badge variant={j.status === "completed" ? "default" : j.status === "failed" ? "destructive" : "secondary"}>
                      {j.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(j.created_at).toLocaleString("pt-BR")} ·
                    Processados {j.processed_items}/{j.total_items} ·
                    Sugestões {j.suggestions_count}
                  </p>
                  {j.error_message && (
                    <p className="mt-1 text-xs text-destructive">{j.error_message}</p>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      <p className="mt-6 text-xs text-muted-foreground">
        O PULSO é uma ferramenta de apoio à decisão clínica. O julgamento médico é soberano.
      </p>

      {/* Modal de diff antes/depois com navegação e atalhos */}
      {(() => {
        if (!diffOpenId) {
          return (
            <SuggestionDiffModal
              suggestion={null}
              open={false}
              acting={false}
              onOpenChange={() => setDiffOpenId(null)}
              onAction={() => {}}
            />
          );
        }
        const idx = visible.findIndex((x) => x.id === diffOpenId);
        const current = idx >= 0 ? visible[idx] : null;
        const prevId = idx > 0 ? visible[idx - 1].id : null;
        const nextId = idx >= 0 && idx < visible.length - 1 ? visible[idx + 1].id : null;
        return (
          <SuggestionDiffModal
            suggestion={current}
            position={idx >= 0 ? { current: idx + 1, total: visible.length } : undefined}
            open={!!current}
            acting={acting === diffOpenId}
            onOpenChange={(o) => !o && setDiffOpenId(null)}
            onAction={async (action, note) => {
              if (!current) return;
              setNotes((p) => ({ ...p, [current.id]: note }));
              await reviewSuggestion(current, action);
              // Pular para o próximo pendente após ação
              const nextPending = visible.slice(idx + 1).find((x) => x.status === "pending");
              setDiffOpenId(nextPending ? nextPending.id : null);
            }}
            onPrev={prevId ? () => setDiffOpenId(prevId) : undefined}
            onNext={nextId ? () => setDiffOpenId(nextId) : undefined}
          />
        );
      })()}
    </div>
  );
}
