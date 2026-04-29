import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Activity, ListChecks, ShieldAlert, BookOpen, Timer, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend,
} from "recharts";

interface DashboardData {
  kpi: any[];
  checklists: { total_executions: number; overall_adherence: number; by_unit: any[]; by_shift: any[] };
  errors: { baselines: any[]; epm_count: number; cddi_count: number; recent: any[] };
  guidelines: { all: any[]; upcoming_60d: any[] };
  ttp: { avg_seconds: number; total: number; by_source: any[]; outliers: any[] };
}

const PHASES = ["MVP", "Piloto", "iOS/Android", "Internacional"];
const STATUS_COLORS: Record<string, string> = {
  publicada: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  em_revisao: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  pendente: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30",
  arquivada: "bg-muted text-muted-foreground border-border",
};

export default function GovernanceDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [phase, setPhase] = useState("MVP");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result, error: err } = await supabase.functions.invoke("governance-dashboard");
        if (err) throw err;
        if (result?.error) throw new Error(result.error);
        setData(result);
      } catch (e: any) {
        setError(e.message || "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="px-4 pt-6 pb-24 max-w-6xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <ArrowLeft size={16} /> Voltar
        </button>
        <div className="text-center py-12">
          <ShieldAlert className="mx-auto text-amber-500 mb-3" size={32} />
          <p className="font-heading font-semibold">Acesso restrito</p>
          <p className="text-sm text-muted-foreground mt-1">{error || "Apenas administradores podem visualizar este painel."}</p>
        </div>
      </div>
    );
  }

  const phaseKpis = data.kpi.filter((k) => k.phase === phase);
  const epmBaseline = data.errors.baselines.find((b) => b.code === "EPM");
  const cddiBaseline = data.errors.baselines.find((b) => b.code === "CDDI");

  return (
    <div className="px-4 pt-4 pb-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="font-heading font-bold text-lg">Governança Clínica</h1>
          <p className="text-xs text-muted-foreground">Painel executivo — KPIs, adesão, erros, curadoria e TTP</p>
        </div>
      </div>

      <Tabs defaultValue="kpis" className="w-full">
        <TabsList className="grid grid-cols-5 w-full mb-6 h-auto">
          <TabsTrigger value="kpis" className="flex flex-col gap-1 py-2 text-[10px]">
            <Activity size={14} /> KPIs
          </TabsTrigger>
          <TabsTrigger value="checklists" className="flex flex-col gap-1 py-2 text-[10px]">
            <ListChecks size={14} /> Checklists
          </TabsTrigger>
          <TabsTrigger value="errors" className="flex flex-col gap-1 py-2 text-[10px]">
            <ShieldAlert size={14} /> EPM/CDDI
          </TabsTrigger>
          <TabsTrigger value="curation" className="flex flex-col gap-1 py-2 text-[10px]">
            <BookOpen size={14} /> Curadoria
          </TabsTrigger>
          <TabsTrigger value="ttp" className="flex flex-col gap-1 py-2 text-[10px]">
            <Timer size={14} /> TTP
          </TabsTrigger>
        </TabsList>

        {/* ============ KPI TAB ============ */}
        <TabsContent value="kpis" className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {PHASES.map((p) => (
              <button
                key={p}
                onClick={() => setPhase(p)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  phase === p ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {phaseKpis.length === 0 && (
              <p className="text-sm text-muted-foreground col-span-2 text-center py-8">Sem metas configuradas para esta fase.</p>
            )}
            {phaseKpis.map((k) => (
              <Card key={k.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-heading flex items-center justify-between">
                    <span>{k.kpi_label}</span>
                    <Badge variant="outline" className="text-[10px]">{k.kpi_code}</Badge>
                  </CardTitle>
                  <CardDescription className="text-xs">{k.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold font-heading">
                        {k.measured_value !== null ? k.measured_value : "—"}
                        <span className="text-xs text-muted-foreground ml-1">{k.unit}</span>
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Meta: {k.target_value} {k.unit} ({k.direction === "lower_better" ? "menor é melhor" : "maior é melhor"})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${k.progress_pct >= 80 ? "text-green-600 dark:text-green-400" : k.progress_pct >= 50 ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400"}`}>
                        {k.progress_pct}%
                      </p>
                      <p className="text-[10px] text-muted-foreground">progresso</p>
                    </div>
                  </div>
                  <Progress value={k.progress_pct} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ============ CHECKLISTS TAB ============ */}
        <TabsContent value="checklists" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground font-medium">Execuções totais</CardTitle></CardHeader>
              <CardContent><p className="text-2xl font-bold font-heading">{data.checklists.total_executions}</p></CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground font-medium">Adesão média</CardTitle></CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading text-primary">{data.checklists.overall_adherence}%</p>
                <Progress value={data.checklists.overall_adherence} className="h-1.5 mt-2" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-sm font-heading">Adesão por unidade</CardTitle></CardHeader>
            <CardContent>
              {data.checklists.by_unit.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">
                  Nenhuma execução registrada ainda. Configure checklists em /checklists para começar a coletar.
                </p>
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data.checklists.by_unit}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                    <Bar dataKey="avg_pct" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="Adesão (%)" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm font-heading">Adesão por turno</CardTitle></CardHeader>
            <CardContent>
              {data.checklists.by_shift.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">Sem dados por turno ainda.</p>
              ) : (
                <div className="space-y-3">
                  {data.checklists.by_shift.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.avg_pct}% • {s.executions}x</span>
                      </div>
                      <Progress value={s.avg_pct} className="h-2" />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ============ ERRORS TAB ============ */}
        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-500" /> EPM (mitigados)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading">{data.errors.epm_count}</p>
                {epmBaseline && (
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Baseline: {epmBaseline.baseline_value} {epmBaseline.baseline_unit}
                  </p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <AlertTriangle size={12} className="text-amber-500" /> CDDI (registros)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading">{data.errors.cddi_count}</p>
                {cddiBaseline && (
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Baseline: {cddiBaseline.baseline_value}{cddiBaseline.baseline_unit}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-heading">Linhas de base</CardTitle>
              <CardDescription className="text-xs">Referenciais usados para medir redução de erros</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {data.errors.baselines.map((b) => (
                <div key={b.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-heading font-semibold text-sm">{b.label}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Fonte: {b.source}</p>
                    </div>
                    <Badge variant="outline" className="text-[10px]">{b.category}</Badge>
                  </div>
                  <p className="text-lg font-bold mt-2">{b.baseline_value} <span className="text-xs text-muted-foreground font-normal">{b.baseline_unit}</span></p>
                  <p className="text-[10px] text-muted-foreground">
                    Período: {b.baseline_period_start} a {b.baseline_period_end}
                  </p>
                  {b.notes && <p className="text-xs text-muted-foreground mt-1 italic">{b.notes}</p>}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm font-heading">Eventos recentes</CardTitle></CardHeader>
            <CardContent>
              {data.errors.recent.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">Nenhum evento registrado ainda.</p>
              ) : (
                <div className="space-y-1">
                  {data.errors.recent.slice(0, 10).map((e: any, i: number) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b last:border-0 text-xs">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px]">{e.category}</Badge>
                        <span className={e.was_mitigated ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                          {e.was_mitigated ? "mitigado" : "ocorrido"}
                        </span>
                      </div>
                      <span className="text-muted-foreground">{new Date(e.occurred_at).toLocaleDateString("pt-BR")}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ============ CURATION TAB ============ */}
        <TabsContent value="curation" className="space-y-4">
          {data.guidelines.upcoming_60d.length > 0 && (
            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-heading flex items-center gap-2">
                  <Clock size={14} className="text-amber-500" /> Próximas revisões (60 dias)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.guidelines.upcoming_60d.map((g: any) => (
                    <div key={g.id} className="flex justify-between items-center text-xs">
                      <span className="font-medium">{g.title}</span>
                      <span className="text-muted-foreground">{new Date(g.next_review_date).toLocaleDateString("pt-BR")}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-heading">Diretrizes em curadoria</CardTitle>
              <CardDescription className="text-xs">Calendário de revisões e comitês responsáveis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {data.guidelines.all.map((g: any) => (
                <div key={g.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div className="flex-1">
                      <p className="font-heading font-semibold text-sm">{g.title}</p>
                      <p className="text-[10px] text-muted-foreground">{g.specialty} • {g.source}</p>
                    </div>
                    <Badge className={`text-[10px] ${STATUS_COLORS[g.status] || ""}`} variant="outline">
                      {g.status.replace("_", " ")}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div>
                      <p className="text-muted-foreground">Versão</p>
                      <p className="font-medium">{g.current_version}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Última revisão</p>
                      <p className="font-medium">{g.last_review_date ? new Date(g.last_review_date).toLocaleDateString("pt-BR") : "—"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Próxima</p>
                      <p className="font-medium">{new Date(g.next_review_date).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2 italic">Comitê: {g.responsible_committee}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ============ TTP TAB ============ */}
        <TabsContent value="ttp" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground font-medium">TTP médio</CardTitle></CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading text-primary">{data.ttp.avg_seconds}<span className="text-xs ml-1 text-muted-foreground">seg</span></p>
                <p className="text-[10px] text-muted-foreground mt-1">{data.ttp.total} eventos</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground font-medium">Outliers</CardTitle></CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading text-amber-600 dark:text-amber-400">{data.ttp.outliers.length}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{`>5 min entre início e protocolo`}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-sm font-heading">TTP por origem</CardTitle></CardHeader>
            <CardContent>
              {data.ttp.by_source.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">
                  Sem eventos ainda. O sistema captura automaticamente quando o usuário ativa Sala Vermelha ou inicia atendimento e abre um protocolo.
                </p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={data.ttp.by_source}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="source" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                    <Bar dataKey="avg_seconds" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="TTP médio (s)" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {data.ttp.outliers.length > 0 && (
            <Card className="border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-sm font-heading flex items-center gap-2">
                  <AlertTriangle size={14} className="text-amber-500" /> Outliers recentes
                </CardTitle>
                <CardDescription className="text-xs">Eventos com TTP acima de 5 minutos — investigar fluxo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {data.ttp.outliers.map((o: any, i: number) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b last:border-0 text-xs">
                      <div className="flex-1">
                        <p className="font-medium truncate">{o.protocol_title || "Protocolo"}</p>
                        <p className="text-[10px] text-muted-foreground">{o.trigger_source}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-amber-600 dark:text-amber-400">{o.ttp_seconds}s</p>
                        <p className="text-[10px] text-muted-foreground">{new Date(o.created_at).toLocaleDateString("pt-BR")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
