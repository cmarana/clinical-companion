import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { buildAllChunks, getChunkSummary } from "@/lib/knowledgeIngest";
import { askMedicalRag, getRagSessionCacheStats, clearRagSessionCache, type RagAnswer } from "@/lib/medicalRag";
import {
  Loader2, Database, Sparkles, Search, Trash2, CheckCircle2,
  RefreshCw, ChevronDown, ChevronUp, AlertTriangle, BookOpen, Zap,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

interface KnowledgeItem {
  id: string;
  source_type: string;
  source_id: string;
  title: string;
  subtitle?: string;
  specialty?: string;
  content: string;
  tags?: string[];
  chunk_index?: number;
  version?: number;
  is_active: boolean;
  last_reviewed?: string;
  created_at: string;
}

interface QueryLogItem {
  id: string;
  question: string;
  intent: string;
  model_used?: string;
  cache_hit: boolean;
  tokens_in?: number;
  tokens_out?: number;
  cost_estimate?: number;
  latency_ms?: number;
  chunks_used?: { title: string; source_type: string; score: number }[];
  response?: string;
  created_at: string;
}

interface CuratedAnswer {
  id: string;
  question_pattern: string;
  answer: string;
  approved_by?: string;
  approved_at?: string;
  created_at: string;
}

interface Stats {
  total: number;
  bySource: Record<string, number>;
  recentQueries: number;
  cacheHits: number;
  cacheRate: number;
  avgLatency: number;
}

const SOURCE_LABELS: Record<string, string> = {
  full_protocol: "Protocolo Completo",
  medication: "Medicamento",
  symptom_guide: "Diagnóstico por Sintoma",
  flashcard: "Flashcard SM-2",
  residency_question: "Quiz Residência",
  emergency: "Emergência",
  prescription: "Prescrição",
  antimicrobial: "Antimicrobiano",
  dilution: "Diluição",
  calculator: "Calculadora",
  interaction: "Interação",
  score: "Score",
};

const SOURCE_COLORS: Record<string, string> = {
  full_protocol: "#0a6dd9",
  medication: "#22c55e",
  emergency: "#ef4444",
  antimicrobial: "#f59e0b",
  dilution: "#8b5cf6",
  calculator: "#06b6d4",
  interaction: "#ec4899",
  score: "#f97316",
};

export default function AdminMedicalKnowledge() {
  const { isAdmin, loading: roleLoading } = useIsAdmin();

  if (roleLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
      </div>
    );
  }
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-heading">Base Médica RAG</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Conteúdo interno do PULSO indexado para a IA Clínica responder com fonte rastreável.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="queries">Consultas</TabsTrigger>
          <TabsTrigger value="curated">Curadas</TabsTrigger>
          <TabsTrigger value="ingest">Ingestão</TabsTrigger>
        </TabsList>
        <TabsContent value="overview"><OverviewTab /></TabsContent>
        <TabsContent value="queries"><QueriesTab /></TabsContent>
        <TabsContent value="curated"><CuratedTab /></TabsContent>
        <TabsContent value="ingest"><IngestTab /></TabsContent>
      </Tabs>
    </div>
  );
}

function OverviewTab() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sessionStats = getRagSessionCacheStats();

  const loadStats = useCallback(async () => {
    setLoading(true);
    try {
      const { count: total } = await supabase
        .from("medical_knowledge")
        .select("*", { count: "exact", head: true })
        .eq("is_active", true);

      const { data: rows } = await supabase
        .from("medical_knowledge")
        .select("source_type")
        .eq("is_active", true)
        .limit(10000);

      const bySource: Record<string, number> = {};
      (rows || []).forEach((r: any) => {
        bySource[r.source_type] = (bySource[r.source_type] || 0) + 1;
      });

      const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const { count: recentQueries } = await supabase
        .from("ai_query_log")
        .select("*", { count: "exact", head: true })
        .gte("created_at", since);

      const { count: cacheHits } = await supabase
        .from("ai_query_log")
        .select("*", { count: "exact", head: true })
        .gte("created_at", since)
        .eq("cache_hit", true);

      const { data: latRows } = await supabase
        .from("ai_query_log")
        .select("latency_ms")
        .gte("created_at", since)
        .not("latency_ms", "is", null)
        .limit(200);

      const avgLatency =
        latRows && latRows.length > 0
          ? Math.round(latRows.reduce((acc: number, r: any) => acc + (r.latency_ms || 0), 0) / latRows.length)
          : 0;

      const rq = recentQueries || 0;
      const ch = cacheHits || 0;
      setStats({
        total: total || 0,
        bySource,
        recentQueries: rq,
        cacheHits: ch,
        cacheRate: rq > 0 ? Math.round((ch / rq) * 100) : 0,
        avgLatency,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadStats(); }, [loadStats]);

  const searchItems = async () => {
    if (!search.trim()) return;
    setLoadingItems(true);
    const { data } = await supabase
      .from("medical_knowledge")
      .select("id,source_type,source_id,title,subtitle,specialty,content,tags,chunk_index,version,is_active,last_reviewed,created_at")
      .eq("is_active", true)
      .ilike("title", `%${search}%`)
      .limit(20);
    setItems((data as KnowledgeItem[]) || []);
    setLoadingItems(false);
  };

  const toggleActive = async (item: KnowledgeItem) => {
    const { error } = await supabase
      .from("medical_knowledge")
      .update({ is_active: !item.is_active })
      .eq("id", item.id);
    if (error) { toast.error("Erro ao atualizar"); return; }
    toast.success(item.is_active ? "Chunk desativado" : "Chunk reativado");
    setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, is_active: !i.is_active } : i));
  };

  const chartData = stats
    ? Object.entries(stats.bySource).map(([k, v]) => ({
        name: SOURCE_LABELS[k] ?? k,
        chunks: v,
        fill: SOURCE_COLORS[k] ?? "#888",
      }))
    : [];

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Chunks ativos" value={String(stats?.total ?? 0)} icon={<Database size={12} />} />
        <KpiCard label="Consultas (7d)" value={String(stats?.recentQueries ?? 0)} icon={<Sparkles size={12} />} />
        <KpiCard
          label="Cache hit rate"
          value={`${stats?.cacheRate ?? 0}%`}
          sub={`${stats?.cacheHits ?? 0} hits`}
          icon={<Zap size={12} />}
        />
        <KpiCard
          label="Latência média"
          value={`${stats?.avgLatency ?? 0}ms`}
          icon={<RefreshCw size={12} />}
        />
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center justify-between">
            <span>Cache de sessão (client-side)</span>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2 text-[11px]"
              onClick={() => { clearRagSessionCache(); toast.success("Cache de sessão limpo"); }}
            >
              <Trash2 size={12} className="mr-1" /> Limpar
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-xs text-muted-foreground">
            {sessionStats.size} / {sessionStats.max} entradas em memória (similaridade bigram ≥ 92%)
          </p>
          {sessionStats.entries.length > 0 && (
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {sessionStats.entries.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px]">
                  <Badge variant="secondary" className="text-[9px] shrink-0">{e.source}</Badge>
                  <span className="truncate text-muted-foreground flex-1">{e.question}</span>
                  <Badge variant="outline" className="text-[9px] shrink-0">{e.intent}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {chartData.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Distribuição por fonte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="chunks" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Buscar na base</CardTitle>
          <CardDescription className="text-xs">
            Pesquise chunks por título para inspecionar ou desativar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ex.: ceftriaxona, sepse, STEMI..."
              className="h-9 text-sm"
              onKeyDown={(e) => { if (e.key === "Enter") searchItems(); }}
            />
            <Button size="sm" onClick={searchItems} disabled={loadingItems}>
              {loadingItems ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
            </Button>
          </div>

          {items.length > 0 && (
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="rounded-lg border border-border bg-card p-3 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1 mb-1">
                        <Badge variant="secondary" className="text-[9px]">
                          {SOURCE_LABELS[item.source_type] ?? item.source_type}
                        </Badge>
                        {item.specialty && (
                          <Badge variant="outline" className="text-[9px]">{item.specialty}</Badge>
                        )}
                        {item.chunk_index !== undefined && item.chunk_index > 0 && (
                          <Badge variant="outline" className="text-[9px]">chunk #{item.chunk_index}</Badge>
                        )}
                      </div>
                      <p className="text-[13px] font-medium leading-snug">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-[11px] text-muted-foreground">{item.subtitle}</p>
                      )}
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2"
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      >
                        {expandedId === item.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2 text-[10px]"
                        onClick={() => toggleActive(item)}
                      >
                        {item.is_active ? "Desativar" : "Reativar"}
                      </Button>
                    </div>
                  </div>
                  {expandedId === item.id && (
                    <pre className="pt-2 border-t border-border text-[10px] whitespace-pre-wrap leading-relaxed bg-muted/40 rounded p-2 max-h-48 overflow-y-auto font-sans">
                      {item.content}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function QueriesTab() {
  const [logs, setLogs] = useState<QueryLogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "cache" | "llm">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [promoting, setPromoting] = useState<string | null>(null);

  const loadLogs = useCallback(async () => {
    setLoading(true);
    let q = supabase
      .from("ai_query_log")
      .select("id,question,intent,model_used,cache_hit,tokens_in,tokens_out,cost_estimate,latency_ms,chunks_used,response,created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (filter === "cache") q = q.eq("cache_hit", true);
    if (filter === "llm") q = q.eq("cache_hit", false);
    const { data, error } = await q;
    if (error) toast.error("Erro ao carregar consultas");
    setLogs((data as QueryLogItem[]) || []);
    setLoading(false);
  }, [filter]);

  useEffect(() => { loadLogs(); }, [loadLogs]);

  const promoteToCurated = async (log: QueryLogItem) => {
    if (!log.response) { toast.error("Essa consulta não tem resposta salva"); return; }
    setPromoting(log.id);
    const { error } = await supabase.from("ai_curated_answers").insert({
      question_pattern: log.question,
      answer: log.response,
      approved_at: new Date().toISOString(),
    });
    if (error) toast.error("Erro ao promover");
    else toast.success("Resposta promovida para curadas!");
    setPromoting(null);
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">Filtro:</span>
        {(["all", "cache", "llm"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-[11px] font-heading font-semibold border transition-colors ${
              filter === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted/60"
            }`}
          >
            {f === "all" ? "Todas" : f === "cache" ? "Cache" : "LLM"}
          </button>
        ))}
        <Button size="sm" variant="ghost" className="h-7 px-2 text-[11px] ml-auto" onClick={loadLogs}>
          <RefreshCw size={12} className="mr-1" /> Atualizar
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin h-5 w-5 text-muted-foreground" />
        </div>
      ) : logs.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground py-8">Nenhuma consulta encontrada.</p>
      ) : (
        <div className="space-y-2">
          {logs.map((log) => (
            <div key={log.id} className="rounded-lg border border-border bg-card p-3 space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1 mb-1">
                    <Badge
                      variant="secondary"
                      className={`text-[9px] ${log.cache_hit ? "bg-primary/10 text-primary dark:text-primary" : ""}`}
                    >
                      {log.cache_hit ? "cache" : "llm"}
                    </Badge>
                    {log.intent && <Badge variant="outline" className="text-[9px]">{log.intent}</Badge>}
                    {log.model_used && <Badge variant="outline" className="text-[9px]">{log.model_used}</Badge>}
                    {log.latency_ms && <Badge variant="outline" className="text-[9px]">{log.latency_ms}ms</Badge>}
                    {log.cost_estimate ? (
                      <Badge variant="outline" className="text-[9px]">R$ {log.cost_estimate.toFixed(4)}</Badge>
                    ) : null}
                  </div>
                  <p className="text-[13px] font-medium leading-snug">{log.question}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {new Date(log.created_at).toLocaleString("pt-BR")}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2"
                    onClick={() => setExpandedId(expandedId === log.id ? null : log.id)}
                  >
                    {expandedId === log.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </Button>
                  {log.response && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2"
                      onClick={() => promoteToCurated(log)}
                      disabled={promoting === log.id}
                      title="Promover para respostas curadas"
                    >
                      {promoting === log.id ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle2 size={12} />}
                    </Button>
                  )}
                </div>
              </div>

              {expandedId === log.id && (
                <div className="pt-2 border-t border-border space-y-2">
                  {log.chunks_used && (log.chunks_used as any[]).length > 0 && (
                    <div>
                      <p className="text-[10px] font-heading font-semibold text-muted-foreground mb-1">Chunks usados</p>
                      <div className="space-y-1">
                        {(log.chunks_used as any[]).map((c: any, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-[11px]">
                            <Badge variant="secondary" className="text-[9px] shrink-0">
                              {SOURCE_LABELS[c.source_type] ?? c.source_type}
                            </Badge>
                            <span className="text-muted-foreground truncate flex-1">{c.title}</span>
                            {c.score && (
                              <span className="shrink-0 text-[9px] font-mono">{(c.score * 100).toFixed(0)}%</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {log.response && (
                    <div>
                      <p className="text-[10px] font-heading font-semibold text-muted-foreground mb-1">Resposta</p>
                      <pre className="text-[10px] whitespace-pre-wrap leading-relaxed bg-muted/40 rounded p-2 max-h-48 overflow-y-auto font-sans">
                        {log.response}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CuratedTab() {
  const [curated, setCurated] = useState<CuratedAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPattern, setNewPattern] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("ai_curated_answers")
      .select("id,question_pattern,answer,approved_by,approved_at,created_at")
      .order("created_at", { ascending: false })
      .limit(100);
    setCurated((data as CuratedAnswer[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    if (!newPattern.trim() || !newAnswer.trim()) {
      toast.error("Preencha o padrão e a resposta");
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("ai_curated_answers").insert({
      question_pattern: newPattern.trim(),
      answer: newAnswer.trim(),
      approved_at: new Date().toISOString(),
    });
    if (error) toast.error("Erro ao salvar");
    else {
      toast.success("Resposta curada salva!");
      setNewPattern("");
      setNewAnswer("");
      load();
    }
    setSaving(false);
  };

  const remove = async (id: string) => {
    if (!confirm("Remover essa resposta curada?")) return;
    const { error } = await supabase.from("ai_curated_answers").delete().eq("id", id);
    if (error) toast.error("Erro ao remover");
    else { toast.success("Removida"); setCurated((prev) => prev.filter((c) => c.id !== id)); }
  };

  return (
    <div className="space-y-4 mt-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <BookOpen size={14} /> Nova resposta curada
          </CardTitle>
          <CardDescription className="text-xs">
            Respostas curadas têm prioridade absoluta sobre o RAG e o LLM.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            value={newPattern}
            onChange={(e) => setNewPattern(e.target.value)}
            placeholder="Padrão de pergunta (ex.: dose de amoxicilina adulto)"
            className="h-9 text-sm"
          />
          <Textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Resposta aprovada em markdown..."
            rows={4}
            className="text-sm"
          />
          <Button size="sm" onClick={save} disabled={saving}>
            {saving ? <Loader2 size={14} className="animate-spin mr-1.5" /> : <CheckCircle2 size={14} className="mr-1.5" />}
            Salvar resposta curada
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin h-5 w-5 text-muted-foreground" />
        </div>
      ) : curated.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground py-8">
          Nenhuma resposta curada ainda. Promova respostas na aba Consultas ou adicione acima.
        </p>
      ) : (
        <div className="space-y-2">
          {curated.map((c) => (
            <div key={c.id} className="rounded-lg border border-border bg-card p-3 space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium leading-snug">{c.question_pattern}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {c.approved_at
                      ? `Aprovada em ${new Date(c.approved_at).toLocaleDateString("pt-BR")}`
                      : `Criada em ${new Date(c.created_at).toLocaleDateString("pt-BR")}`}
                    {c.approved_by && ` por ${c.approved_by}`}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2"
                    onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                  >
                    {expandedId === c.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-destructive hover:text-destructive"
                    onClick={() => remove(c.id)}
                  >
                    <Trash2 size={12} />
                  </Button>
                </div>
              </div>
              {expandedId === c.id && (
                <pre className="pt-2 border-t border-border text-[10px] whitespace-pre-wrap leading-relaxed text-foreground bg-muted/40 rounded p-2 max-h-48 overflow-y-auto font-sans">
                  {c.answer}
                </pre>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function IngestTab() {
  const PROGRESS_KEY = "pulso.ingest.progress";
  const [ingesting, setIngesting] = useState(false);
  const [progress, setProgress] = useState(() => {
    const v = Number(localStorage.getItem(PROGRESS_KEY) || 0);
    return Number.isFinite(v) && v > 0 ? v : 0;
  });
  const [progressTotal, setProgressTotal] = useState(0);
  const [lastResult, setLastResult] = useState<{ inserted: number; failed: number; skipped: number } | null>(null);
  const [question, setQuestion] = useState("");
  const [testAnswer, setTestAnswer] = useState<RagAnswer | null>(null);
  const [testing, setTesting] = useState(false);

  const handleIngest = async (startFrom = 0) => {
    setIngesting(true);
    setProgress(startFrom);
    setLastResult(null);
    try {
      const chunks = buildAllChunks();
      setProgressTotal(chunks.length);
      const BATCH = 5; // menor lote = menos chance de timeout
      let inserted = 0, failed = 0, skipped = 0;
      for (let i = startFrom; i < chunks.length; i += BATCH) {
        const batch = chunks.slice(i, i + BATCH);
        const { data, error } = await supabase.functions.invoke("ingest-medical-knowledge", {
          body: { items: batch },
        });
        if (error) {
          failed += batch.length;
          console.warn(`Lote ${i}-${i+BATCH} falhou:`, error.message);
        } else {
          inserted += (data as any)?.inserted || 0;
          failed += (data as any)?.failed || 0;
          skipped += (data as any)?.skipped || 0;
        }
        const newProgress = i + batch.length;
        setProgress(newProgress);
        localStorage.setItem(PROGRESS_KEY, String(newProgress));
        // delay entre lotes para não saturar a Gemini Embeddings API
        await new Promise(r => setTimeout(r, 200));
      }
      setLastResult({ inserted, failed, skipped });
      localStorage.removeItem(PROGRESS_KEY);
      setProgress(0);
      toast.success(`Ingestão concluída: ${inserted} novos, ${skipped} já existentes, ${failed} falharam.`);
    } catch (e) {
      toast.error(`Erro na ingestão: ${String(e)}`);
    } finally {
      setIngesting(false);
    }
  };


  const handleTest = async () => {
    if (!question.trim()) return;
    setTesting(true);
    setTestAnswer(null);
    try {
      const ans = await askMedicalRag(question.trim());
      setTestAnswer(ans);
    } catch (e) {
      toast.error(`Erro: ${String(e)}`);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="space-y-6 mt-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Database size={14} /> Reindexar base do PULSO
          </CardTitle>
          <CardDescription className="text-xs">
            Lê todos os datasets do PULSO (protocolos, medicamentos, sintomas, flashcards, quiz), gera embeddings com Gemini text-embedding-004 e faz upsert em lotes de 5. Estimativa: ~30 min para o corpus completo. Pode fechar e reabrir — use "Continuar" para retomar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {ingesting && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{progress.toLocaleString()} / {progressTotal.toLocaleString()} chunks</span>
                <span>{progressTotal > 0 ? Math.round((progress / progressTotal) * 100) : 0}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressTotal > 0 ? (progress / progressTotal) * 100 : 0}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Tempo estimado restante: ~{Math.ceil((progressTotal - progress) * 0.25 / 60)} min
              </p>
            </div>
          )}
          {lastResult && !ingesting && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 size={14} className="text-primary dark:text-primary" />
                <span>{lastResult.inserted} chunks indexados</span>
                {lastResult.failed > 0 && (
                  <>
                    <AlertTriangle size={14} className="text-destructive ml-2" />
                    <span className="text-destructive dark:text-destructive">{lastResult.failed} falharam</span>
                  </>
                )}
              </div>
              {lastResult.failed > 0 && (
                <p className="text-xs text-muted-foreground">
                  Houve falhas. Clique em "Continuar" para retomar do chunk {progress}.
                </p>
              )}
            </div>
          )}
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => handleIngest(0)} disabled={ingesting} size="sm">
              {ingesting ? (
                <><Loader2 size={14} className="animate-spin mr-1.5" /> Indexando...</>
              ) : (
                <><Database size={14} className="mr-1.5" /> Iniciar ingestão completa</>
              )}
            </Button>
            {progress > 0 && !ingesting && (
              <Button onClick={() => handleIngest(progress)} disabled={ingesting} size="sm" variant="outline">
                <RefreshCw size={14} className="mr-1.5" /> Continuar do chunk {progress.toLocaleString()}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Sparkles size={14} /> Testar RAG
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex.: Dose de ceftriaxona para pneumonia comunitária em adulto"
            rows={3}
            className="text-sm"
          />
          <Button size="sm" onClick={handleTest} disabled={testing || !question.trim()}>
            {testing ? <Loader2 size={14} className="animate-spin mr-1.5" /> : <Sparkles size={14} className="mr-1.5" />}
            Perguntar à IA Clínica
          </Button>

          {testAnswer && (
            <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
              <div className="flex flex-wrap gap-2">
                <Badge className={`text-[10px] ${testAnswer.source === "cache" ? "bg-primary/10 text-primary dark:text-primary border-primary/20" : "bg-primary/10 text-primary border-primary/20"}`}>
                  fonte: {testAnswer.source}
                </Badge>
                <Badge variant="outline" className="text-[10px]">intent: {testAnswer.intent}</Badge>
                <Badge variant="outline" className="text-[10px]">complexity: {testAnswer.complexity}</Badge>
                {testAnswer.model && <Badge variant="outline" className="text-[10px]">{testAnswer.model}</Badge>}
                {testAnswer.latency_ms && <Badge variant="outline" className="text-[10px]">{testAnswer.latency_ms}ms</Badge>}
                {testAnswer.cached && (
                  <Badge className="text-[10px] bg-primary/10 text-primary dark:text-primary border-primary/20">
                    session cache hit
                  </Badge>
                )}
              </div>
              <pre className="text-[11px] whitespace-pre-wrap leading-relaxed text-foreground font-sans">
                {testAnswer.answer}
              </pre>
              {testAnswer.chunks?.length > 0 && (
                <div>
                  <p className="text-[10px] font-heading font-semibold text-muted-foreground mb-1">Chunks usados</p>
                  <div className="space-y-1">
                    {testAnswer.chunks.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px]">
                        <Badge variant="secondary" className="text-[9px] shrink-0">
                          {SOURCE_LABELS[c.source_type] ?? c.source_type}
                        </Badge>
                        <span className="text-muted-foreground truncate">{c.title}</span>
                        {c.score && (
                          <span className="shrink-0 text-[9px] font-mono">
                            {(c.score * 100).toFixed(0)}%
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function KpiCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="pb-1 pt-4 px-4">
        <CardTitle className="text-xs font-heading text-muted-foreground flex items-center gap-1.5">
          {icon} {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="text-2xl font-bold font-heading">{value}</p>
        {sub && <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>}
      </CardContent>
    </Card>
  );
}
