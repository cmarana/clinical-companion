import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  ArrowLeft, Plus, Target, TrendingUp, Clock, Brain,
  CheckCircle2, XCircle, Loader2, BarChart3, BookOpen,
  Stethoscope, AlertTriangle, Heart, Activity,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, CartesianGrid,
} from "recharts";

// ─── Tipos ──────────────────────────────────────────────────────────────────

type Desfecho = "alta" | "internacao" | "uti" | "transferencia" | "obito" | "retorno_upa";
type Complexidade = "baixa" | "media" | "alta" | "critica";

interface ClinicalOutcome {
  id: string;
  local: string;
  specialty: string;
  hipotese_inicial: string | null;
  diagnostico_final: string;
  cid: string | null;
  desfecho: Desfecho;
  acertou_hipotese: boolean | null;
  procedimentos: string[];
  tempo_atendimento_min: number | null;
  complexidade: Complexidade;
  aprendizado: string | null;
  tags: string[];
  atendimento_at: string;
}

interface OutcomeStats {
  total_casos: number;
  total_alta: number;
  total_internacao: number;
  total_uti: number;
  total_obito: number;
  total_transferencia: number;
  total_retorno: number;
  taxa_acerto_hipotese: number | null;
  tempo_medio_min: number | null;
  diagnosticos_distintos: number;
  ultimo_atendimento: string | null;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const DESFECHO_CONFIG: Record<Desfecho, { label: string; cor: string; icon: string }> = {
  alta: { label: "Alta hospitalar", cor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: "✅" },
  internacao: { label: "Internação", cor: "bg-blue-500/15 text-blue-400 border-blue-500/30", icon: "🏥" },
  uti: { label: "UTI", cor: "bg-orange-500/15 text-orange-400 border-orange-500/30", icon: "⚠️" },
  transferencia: { label: "Transferência", cor: "bg-purple-500/15 text-purple-400 border-purple-500/30", icon: "🚑" },
  obito: { label: "Óbito", cor: "bg-red-500/15 text-red-400 border-red-500/30", icon: "🕊️" },
  retorno_upa: { label: "Retorno UPA", cor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", icon: "🔄" },
};

const COMPLEXIDADE_CONFIG: Record<Complexidade, string> = {
  baixa: "Baixa",
  media: "Média",
  alta: "Alta",
  critica: "Crítica",
};

const PIE_COLORS = ["#10b981", "#3b82f6", "#f97316", "#a855f7", "#ef4444", "#eab308"];

const PROCEDIMENTOS_COMUNS = [
  "Intubação orotraqueal",
  "Acesso venoso central",
  "Cardioversão elétrica",
  "Drenagem de tórax",
  "Pericardiocentese",
  "Punção lombar",
  "Desfibrilação",
  "Paracentese",
  "Dissecção venosa",
  "Cateter vesical",
  "Sondagem nasogástrica",
  "Sutura",
  "Redução de fratura/luxação",
  "CPAP/VNI",
  "Cardioversão química",
];

// ─── Formulário de registro ──────────────────────────────────────────────────

function FormNovoDesfecho({ onSave }: { onSave: () => void }) {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    local: "",
    specialty: "Emergência",
    hipotese_inicial: "",
    diagnostico_final: "",
    cid: "",
    desfecho: "" as Desfecho | "",
    acertou_hipotese: null as boolean | null,
    procedimentos: [] as string[],
    outro_procedimento: "",
    tempo_atendimento_min: "" as string,
    complexidade: "media" as Complexidade,
    aprendizado: "",
    tags: "" as string,
  });

  const toggleProcedimento = (p: string) => {
    setForm(f => ({
      ...f,
      procedimentos: f.procedimentos.includes(p)
        ? f.procedimentos.filter(x => x !== p)
        : [...f.procedimentos, p],
    }));
  };

  const handleSave = async () => {
    if (!form.diagnostico_final.trim() || !form.desfecho) {
      toast.error("Preencha diagnóstico final e desfecho.");
      return;
    }
    setSaving(true);
    try {
      const procs = [...form.procedimentos];
      if (form.outro_procedimento.trim()) procs.push(form.outro_procedimento.trim());

      const { error } = await supabase.from("clinical_outcomes").insert({
        user_id: user!.id,
        local: form.local.trim() || "UPA/PS",
        specialty: form.specialty,
        hipotese_inicial: form.hipotese_inicial.trim() || null,
        diagnostico_final: form.diagnostico_final.trim(),
        cid: form.cid.trim() || null,
        desfecho: form.desfecho,
        acertou_hipotese: form.acertou_hipotese,
        procedimentos: procs,
        tempo_atendimento_min: form.tempo_atendimento_min ? parseInt(form.tempo_atendimento_min) : null,
        complexidade: form.complexidade,
        aprendizado: form.aprendizado.trim() || null,
        tags: form.tags ? form.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
        atendimento_at: new Date().toISOString(),
      });

      if (error) throw error;
      toast.success("Desfecho registrado! 🎯");
      onSave();
    } catch (e) {
      toast.error("Erro ao salvar: " + (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Básico */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Stethoscope size={14} /> Dados do atendimento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">Local</label>
              <Input
                value={form.local}
                onChange={e => setForm(f => ({ ...f, local: e.target.value }))}
                placeholder="UPA, PS, SAMU..."
                className="h-8 text-sm mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Especialidade</label>
              <Select value={form.specialty} onValueChange={v => setForm(f => ({ ...f, specialty: v }))}>
                <SelectTrigger className="h-8 text-sm mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Emergência", "Cardiologia", "Neurologia", "Pneumologia", "Pediatria",
                    "Obstetrícia", "Cirurgia", "Ortopedia", "Psiquiatria", "Clínica Médica"].map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Hipótese diagnóstica inicial</label>
            <Input
              value={form.hipotese_inicial}
              onChange={e => setForm(f => ({ ...f, hipotese_inicial: e.target.value }))}
              placeholder="O que você pensou de início?"
              className="h-8 text-sm mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Diagnóstico final <span className="text-destructive">*</span></label>
            <Input
              value={form.diagnostico_final}
              onChange={e => setForm(f => ({ ...f, diagnostico_final: e.target.value }))}
              placeholder="Ex.: IAMCSST anterior extenso"
              className="h-8 text-sm mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">CID-10</label>
              <Input
                value={form.cid}
                onChange={e => setForm(f => ({ ...f, cid: e.target.value }))}
                placeholder="I21.0"
                className="h-8 text-sm mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Tempo (min)</label>
              <Input
                type="number"
                value={form.tempo_atendimento_min}
                onChange={e => setForm(f => ({ ...f, tempo_atendimento_min: e.target.value }))}
                placeholder="45"
                className="h-8 text-sm mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desfecho */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Target size={14} /> Desfecho <span className="text-destructive">*</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {(Object.entries(DESFECHO_CONFIG) as [Desfecho, typeof DESFECHO_CONFIG[Desfecho]][]).map(([key, cfg]) => (
              <button
                key={key}
                onClick={() => setForm(f => ({ ...f, desfecho: key }))}
                className={`rounded-lg border p-3 text-left transition-all ${
                  form.desfecho === key
                    ? cfg.cor + " border-current"
                    : "bg-muted/20 border-border hover:border-primary/40"
                }`}
              >
                <div className="text-base">{cfg.icon}</div>
                <div className="text-xs font-medium mt-1">{cfg.label}</div>
              </button>
            ))}
          </div>

          <div>
            <label className="text-xs text-muted-foreground">Complexidade do caso</label>
            <div className="flex gap-2 mt-1">
              {(Object.entries(COMPLEXIDADE_CONFIG) as [Complexidade, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setForm(f => ({ ...f, complexidade: key }))}
                  className={`flex-1 text-xs py-1.5 rounded-md border transition-all ${
                    form.complexidade === key
                      ? "bg-primary/15 border-primary/50 text-primary"
                      : "bg-muted/20 border-border"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Acertou a hipótese? */}
      {form.hipotese_inicial && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-3 flex items-center gap-2">
              <Brain size={14} /> Sua hipótese inicial estava correta?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setForm(f => ({ ...f, acertou_hipotese: true }))}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  form.acertou_hipotese === true
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                    : "bg-muted/20 border-border"
                }`}
              >
                <CheckCircle2 size={14} /> Sim
              </button>
              <button
                onClick={() => setForm(f => ({ ...f, acertou_hipotese: false }))}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  form.acertou_hipotese === false
                    ? "bg-red-500/15 border-red-500/50 text-red-400"
                    : "bg-muted/20 border-border"
                }`}
              >
                <XCircle size={14} /> Não
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Procedimentos */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity size={14} /> Procedimentos realizados
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {PROCEDIMENTOS_COMUNS.map(p => (
              <button
                key={p}
                onClick={() => toggleProcedimento(p)}
                className={`text-[11px] px-2 py-1 rounded-full border transition-all ${
                  form.procedimentos.includes(p)
                    ? "bg-primary/15 border-primary/50 text-primary"
                    : "bg-muted/20 border-border text-muted-foreground"
                }`}
              >
                {form.procedimentos.includes(p) ? "✓ " : ""}{p}
              </button>
            ))}
          </div>
          <Input
            value={form.outro_procedimento}
            onChange={e => setForm(f => ({ ...f, outro_procedimento: e.target.value }))}
            placeholder="Outro procedimento..."
            className="h-8 text-sm"
          />
        </CardContent>
      </Card>

      {/* Aprendizado */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <BookOpen size={14} /> O que aprendi nesse caso?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            value={form.aprendizado}
            onChange={e => setForm(f => ({ ...f, aprendizado: e.target.value }))}
            placeholder="Reflexão clínica, ponto de melhora, insight diagnóstico..."
            rows={3}
            className="text-sm resize-none"
          />
          <Input
            value={form.tags}
            onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
            placeholder="Tags: sepse, antibiótico, EC... (separadas por vírgula)"
            className="h-8 text-sm"
          />
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="w-full h-11">
        {saving ? <Loader2 size={16} className="animate-spin mr-2" /> : <Target size={16} className="mr-2" />}
        Registrar desfecho
      </Button>
    </div>
  );
}

// ─── Dashboard de estatísticas ───────────────────────────────────────────────

function Dashboard({ outcomes }: { outcomes: ClinicalOutcome[] }) {
  if (outcomes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-3 text-center">
        <div className="text-4xl">🎯</div>
        <p className="font-semibold">Nenhum desfecho registrado ainda</p>
        <p className="text-sm text-muted-foreground max-w-xs">
          Registre o desfecho dos seus casos e acompanhe sua evolução clínica ao longo do tempo.
        </p>
      </div>
    );
  }

  const total = outcomes.length;
  const porDesfecho = Object.entries(DESFECHO_CONFIG).map(([key, cfg]) => ({
    name: cfg.label,
    value: outcomes.filter(o => o.desfecho === key).length,
    icon: cfg.icon,
  })).filter(d => d.value > 0);

  const comHipotese = outcomes.filter(o => o.acertou_hipotese !== null);
  const acertos = comHipotese.filter(o => o.acertou_hipotese).length;
  const taxaAcerto = comHipotese.length > 0 ? Math.round((acertos / comHipotese.length) * 100) : null;

  const tempoMedio = (() => {
    const comTempo = outcomes.filter(o => o.tempo_atendimento_min);
    if (comTempo.length === 0) return null;
    return Math.round(comTempo.reduce((a, o) => a + (o.tempo_atendimento_min || 0), 0) / comTempo.length);
  })();

  // Últimos 30 casos por dia
  const ultimos = outcomes.slice(0, 30);
  const diagCount: Record<string, number> = {};
  ultimos.forEach(o => {
    const d = o.diagnostico_final;
    diagCount[d] = (diagCount[d] || 0) + 1;
  });
  const topDiags = Object.entries(diagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => ({ name: name.length > 20 ? name.slice(0, 18) + "…" : name, value }));

  const procedCount: Record<string, number> = {};
  outcomes.forEach(o => o.procedimentos.forEach(p => {
    procedCount[p] = (procedCount[p] || 0) + 1;
  }));
  const topProcs = Object.entries(procedCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => ({ name: name.length > 22 ? name.slice(0, 20) + "…" : name, value }));

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Casos", val: total.toString(), icon: <Stethoscope size={12} /> },
          { label: "Acerto diag.", val: taxaAcerto !== null ? `${taxaAcerto}%` : "—", icon: <Target size={12} /> },
          { label: "Tempo médio", val: tempoMedio ? `${tempoMedio}min` : "—", icon: <Clock size={12} /> },
        ].map(({ label, val, icon }) => (
          <Card key={label}>
            <CardContent className="p-3 text-center">
              <div className="flex justify-center text-muted-foreground mb-1">{icon}</div>
              <p className="text-lg font-bold">{val}</p>
              <p className="text-[10px] text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Distribuição de desfechos */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <BarChart3 size={14} /> Distribuição de desfechos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={porDesfecho}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={60}
                  dataKey="value"
                  label={({ name, value }) => `${value}`}
                  labelLine={false}
                >
                  {porDesfecho.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 11 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {porDesfecho.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <div className="w-2 h-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {d.name} ({d.value})
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top diagnósticos */}
      {topDiags.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Brain size={14} /> Diagnósticos mais frequentes
            </CardTitle>
          </CardHeader>
          <CardContent className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topDiags} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} width={110} />
                <Tooltip
                  contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 11 }}
                />
                <Bar dataKey="value" fill="#0A6DD9" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Top procedimentos */}
      {topProcs.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Activity size={14} /> Procedimentos mais realizados
            </CardTitle>
          </CardHeader>
          <CardContent className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProcs} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} width={110} />
                <Tooltip
                  contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 11 }}
                />
                <Bar dataKey="value" fill="#06b6d4" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ─── Lista de casos ──────────────────────────────────────────────────────────

function ListaCasos({ outcomes }: { outcomes: ClinicalOutcome[] }) {
  if (outcomes.length === 0) return null;

  return (
    <div className="space-y-3 pb-24">
      {outcomes.map(o => {
        const cfg = DESFECHO_CONFIG[o.desfecho];
        return (
          <Card key={o.id}>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{o.diagnostico_final}</p>
                  {o.hipotese_inicial && (
                    <p className="text-xs text-muted-foreground truncate">Hipótese: {o.hipotese_inicial}</p>
                  )}
                </div>
                <Badge variant="outline" className={`text-[10px] shrink-0 ${cfg.cor}`}>
                  {cfg.icon} {cfg.label}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                <span>{o.local}</span>
                {o.tempo_atendimento_min && <span>· {o.tempo_atendimento_min}min</span>}
                {o.acertou_hipotese !== null && (
                  <span className={o.acertou_hipotese ? "text-emerald-400" : "text-red-400"}>
                    · {o.acertou_hipotese ? "✓ Hipótese correta" : "✗ Hipótese errada"}
                  </span>
                )}
              </div>

              {o.procedimentos.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {o.procedimentos.slice(0, 3).map(p => (
                    <span key={p} className="text-[10px] bg-muted/40 px-1.5 py-0.5 rounded">{p}</span>
                  ))}
                  {o.procedimentos.length > 3 && (
                    <span className="text-[10px] text-muted-foreground">+{o.procedimentos.length - 3}</span>
                  )}
                </div>
              )}

              {o.aprendizado && (
                <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-2">
                  "{o.aprendizado}"
                </p>
              )}

              <p className="text-[10px] text-muted-foreground">
                {new Date(o.atendimento_at).toLocaleDateString("pt-BR", {
                  day: "2-digit", month: "short", year: "numeric",
                })}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────────────────

export default function PatientLoop() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [tab, setTab] = useState<"dashboard" | "novo" | "historico">("dashboard");
  const [outcomes, setOutcomes] = useState<ClinicalOutcome[]>([]);
  const [loading, setLoading] = useState(true);

  const loadOutcomes = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data } = await supabase
        .from("clinical_outcomes")
        .select("*")
        .eq("user_id", user.id)
        .order("atendimento_at", { ascending: false })
        .limit(200);
      setOutcomes((data as ClinicalOutcome[]) || []);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => { loadOutcomes(); }, [loadOutcomes]);

  const handleSave = () => {
    loadOutcomes();
    setTab("dashboard");
  };

  return (
    <div className="px-4 pt-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Heart size={18} className="text-primary shrink-0" />
            Patient Loop
          </h1>
          <p className="text-xs text-muted-foreground">Desfecho e aprendizado clínico contínuo</p>
        </div>
        {tab !== "novo" && (
          <Button size="sm" onClick={() => setTab("novo")} className="h-8">
            <Plus size={14} className="mr-1" /> Novo
          </Button>
        )}
      </div>

      {loading && tab !== "novo" ? (
        <div className="flex justify-center py-12">
          <Loader2 size={24} className="animate-spin text-muted-foreground" />
        </div>
      ) : tab === "novo" ? (
        <FormNovoDesfecho onSave={handleSave} />
      ) : (
        <Tabs value={tab} onValueChange={v => setTab(v as typeof tab)}>
          <TabsList className="w-full mb-4">
            <TabsTrigger value="dashboard" className="flex-1 text-xs">
              <TrendingUp size={12} className="mr-1" /> Dashboard
            </TabsTrigger>
            <TabsTrigger value="historico" className="flex-1 text-xs">
              <BookOpen size={12} className="mr-1" /> Histórico ({outcomes.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <Dashboard outcomes={outcomes} />
          </TabsContent>
          <TabsContent value="historico">
            <ListaCasos outcomes={outcomes} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
