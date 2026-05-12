import { useState, useCallback, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { safeLocalStorage } from "@/lib/safeStorage";
import {
  Calendar, Plus, Clock, DollarSign, TrendingUp,
  ChevronDown, ChevronUp, Building2,
} from "lucide-react";

// ─── Tipos ───────────────────────────────────────────────────────────────────

type ShiftType = "12h" | "24h" | "6h" | "personalizado";
type ShiftStatus = "agendado" | "realizado" | "cancelado";

interface Shift {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  type: ShiftType;
  local: string;
  specialty: string;
  valueTotal: number;
  paid: boolean;
  status: ShiftStatus;
  notes?: string;
}

// ─── Storage ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = "pulso_shifts_v1";

function loadShifts(): Shift[] {
  try {
    return JSON.parse(safeLocalStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveShifts(shifts: Shift[]) {
  safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(shifts));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

function weekdayOf(d: string) {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return days[new Date(d + "T12:00:00").getDay()];
}

function shiftHours(start: string, end: string): number {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins <= 0) mins += 24 * 60;
  return Math.round((mins / 60) * 10) / 10;
}

function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(ym: string) {
  const [y, m] = ym.split("-");
  const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

const STATUS_CONFIG: Record<ShiftStatus, { label: string; color: string }> = {
  agendado:  { label: "Agendado",  color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
  realizado: { label: "Realizado", color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
  cancelado: { label: "Cancelado", color: "bg-destructive/10 text-destructive border-destructive/20" },
};

// ─── Formulário ──────────────────────────────────────────────────────────────

const EMPTY_FORM = {
  date: new Date().toISOString().slice(0, 10),
  startTime: "07:00",
  endTime: "19:00",
  type: "12h" as ShiftType,
  local: "",
  specialty: "",
  valueTotal: "",
  notes: "",
};

function ShiftForm({ onSave, onCancel }: {
  onSave: (s: Omit<Shift, "id" | "paid" | "status">) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState({ ...EMPTY_FORM });

  const set = (k: keyof typeof EMPTY_FORM, v: string) =>
    setForm(f => ({ ...f, [k]: v }));

  const handleTypeChange = (t: ShiftType) => {
    const presets: Record<ShiftType, { start: string; end: string }> = {
      "12h":           { start: "07:00", end: "19:00" },
      "24h":           { start: "07:00", end: "07:00" },
      "6h":            { start: "07:00", end: "13:00" },
      "personalizado": { start: form.startTime, end: form.endTime },
    };
    setForm(f => ({ ...f, type: t, startTime: presets[t].start, endTime: presets[t].end }));
  };

  const hours = shiftHours(form.startTime, form.endTime);
  const hourlyRate = form.valueTotal && hours > 0
    ? parseFloat(form.valueTotal) / hours
    : 0;

  const handleSubmit = () => {
    if (!form.date || !form.local || !form.specialty) {
      toast.error("Preencha data, local e especialidade");
      return;
    }
    onSave({
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      type: form.type,
      local: form.local,
      specialty: form.specialty,
      valueTotal: parseFloat(form.valueTotal) || 0,
      notes: form.notes,
    });
  };

  return (
    <Card className="border-primary/20">
      <CardContent className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Data</label>
            <Input type="date" value={form.date} onChange={e => set("date", e.target.value)} className="h-9 mt-1 text-sm" />
          </div>
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Tipo</label>
            <select
              value={form.type}
              onChange={e => handleTypeChange(e.target.value as ShiftType)}
              className="w-full h-9 mt-1 text-sm rounded-md border border-input bg-background px-3"
            >
              <option value="12h">12 horas</option>
              <option value="24h">24 horas</option>
              <option value="6h">6 horas</option>
              <option value="personalizado">Personalizado</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Início</label>
            <Input type="time" value={form.startTime} onChange={e => set("startTime", e.target.value)} className="h-9 mt-1 text-sm" />
          </div>
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Término</label>
            <Input type="time" value={form.endTime} onChange={e => set("endTime", e.target.value)} className="h-9 mt-1 text-sm" />
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted/40 border border-border text-xs">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="font-heading font-semibold">{hours}h de plantão</span>
          {hourlyRate > 0 && (
            <span className="ml-auto text-muted-foreground">
              ≈ {formatCurrency(hourlyRate)}/h
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Local / Hospital</label>
            <Input value={form.local} onChange={e => set("local", e.target.value)} placeholder="Ex: UPA Centro" className="h-9 mt-1 text-sm" />
          </div>
          <div>
            <label className="text-[11px] font-heading font-semibold text-muted-foreground">Especialidade</label>
            <Input value={form.specialty} onChange={e => set("specialty", e.target.value)} placeholder="Ex: Clínica Geral" className="h-9 mt-1 text-sm" />
          </div>
        </div>

        <div>
          <label className="text-[11px] font-heading font-semibold text-muted-foreground">Valor (R$)</label>
          <Input
            type="number"
            value={form.valueTotal}
            onChange={e => set("valueTotal", e.target.value)}
            placeholder="0,00"
            className="h-9 mt-1 text-sm"
            min="0"
            step="50"
          />
        </div>

        <div>
          <label className="text-[11px] font-heading font-semibold text-muted-foreground">Observações</label>
          <Input value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="Opcional" className="h-9 mt-1 text-sm" />
        </div>

        <div className="flex gap-2 pt-1">
          <Button onClick={handleSubmit} className="flex-1 h-9 text-xs">
            <Plus className="w-3.5 h-3.5 mr-1" /> Salvar plantão
          </Button>
          <Button variant="outline" onClick={onCancel} className="h-9 text-xs">
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Card de plantão ─────────────────────────────────────────────────────────

function ShiftCard({ shift, onDelete, onTogglePaid, onToggleStatus }: {
  shift: Shift;
  onDelete: (id: string) => void;
  onTogglePaid: (id: string) => void;
  onToggleStatus: (id: string, s: ShiftStatus) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hours = shiftHours(shift.startTime, shift.endTime);
  const status = STATUS_CONFIG[shift.status];

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-accent/30 transition-colors"
      >
        <div className="shrink-0 w-12 text-center">
          <div className="text-[10px] font-heading font-semibold text-muted-foreground uppercase">
            {weekdayOf(shift.date)}
          </div>
          <div className="text-lg font-heading font-bold leading-none">{shift.date.slice(8)}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">{shift.date.slice(5, 7)}/{shift.date.slice(0, 4)}</div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-heading font-semibold truncate">{shift.local}</p>
            <Badge variant="outline" className={`text-[10px] ${status.color}`}>{status.label}</Badge>
            {shift.paid && (
              <Badge variant="outline" className="text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20">
                Pago ✓
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">{shift.specialty}</p>
          <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {shift.startTime}–{shift.endTime} ({hours}h)
            </span>
            {shift.valueTotal > 0 && (
              <span className="font-semibold text-foreground">{formatCurrency(shift.valueTotal)}</span>
            )}
          </div>
        </div>

        {expanded
          ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        }
      </button>

      {expanded && (
        <div className="px-3.5 pb-3.5 pt-0 space-y-2 border-t border-border bg-muted/20">
          {shift.valueTotal > 0 && hours > 0 && (
            <p className="text-[11px] text-muted-foreground pt-2">
              Valor/hora: <span className="font-semibold text-foreground">{formatCurrency(shift.valueTotal / hours)}/h</span>
            </p>
          )}
          {shift.notes && (
            <p className="text-[11px] italic text-muted-foreground">"{shift.notes}"</p>
          )}

          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {(["agendado", "realizado", "cancelado"] as ShiftStatus[]).map(s => (
              <button
                key={s}
                onClick={() => onToggleStatus(shift.id, s)}
                className={`px-2 py-1 rounded-full text-[10px] font-heading font-semibold border transition-colors ${
                  shift.status === s
                    ? STATUS_CONFIG[s].color
                    : "border-border text-muted-foreground hover:bg-muted/60"
                }`}
              >
                {STATUS_CONFIG[s].label}
              </button>
            ))}
            <button
              onClick={() => onTogglePaid(shift.id)}
              className={`px-2 py-1 rounded-full text-[10px] font-heading font-semibold border transition-colors ml-auto ${
                shift.paid
                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                  : "border-border text-muted-foreground hover:bg-muted/60"
              }`}
            >
              {shift.paid ? "✓ Pago" : "Marcar como pago"}
            </button>
            <button
              onClick={() => { if (confirm("Remover este plantão?")) onDelete(shift.id); }}
              className="px-2 py-1 rounded-full text-[10px] font-heading font-semibold border border-destructive/30 text-destructive hover:bg-destructive/10 transition-colors"
            >
              Remover
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Página ──────────────────────────────────────────────────────────────────

export default function ShiftManager() {
  const [shifts, setShifts] = useState<Shift[]>(loadShifts);
  const [showForm, setShowForm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const persist = useCallback((updated: Shift[]) => {
    setShifts(updated);
    saveShifts(updated);
  }, []);

  const addShift = useCallback((data: Omit<Shift, "id" | "paid" | "status">) => {
    const shift: Shift = { ...data, id: Date.now().toString(), paid: false, status: "agendado" };
    persist([shift, ...shifts].sort((a, b) => a.date.localeCompare(b.date)));
    setShowForm(false);
    toast.success("Plantão adicionado!");
  }, [shifts, persist]);

  const deleteShift = useCallback((id: string) => {
    persist(shifts.filter(s => s.id !== id));
    toast.success("Plantão removido");
  }, [shifts, persist]);

  const togglePaid = useCallback((id: string) => {
    persist(shifts.map(s => s.id === id ? { ...s, paid: !s.paid } : s));
  }, [shifts, persist]);

  const toggleStatus = useCallback((id: string, status: ShiftStatus) => {
    persist(shifts.map(s => s.id === id ? { ...s, status } : s));
  }, [shifts, persist]);

  const months = useMemo(() => {
    const set = new Set(shifts.map(s => s.date.slice(0, 7)));
    set.add(currentMonth());
    return Array.from(set).sort().reverse();
  }, [shifts]);

  const monthShifts = useMemo(
    () => shifts.filter(s => s.date.startsWith(selectedMonth)),
    [shifts, selectedMonth]
  );

  const kpis = useMemo(() => {
    const realized = monthShifts.filter(s => s.status === "realizado");
    const scheduled = monthShifts.filter(s => s.status === "agendado");
    const totalHours = realized.reduce((acc, s) => acc + shiftHours(s.startTime, s.endTime), 0);
    const totalGross = realized.reduce((acc, s) => acc + s.valueTotal, 0);
    const totalPaid = realized.filter(s => s.paid).reduce((acc, s) => acc + s.valueTotal, 0);
    const totalPending = totalGross - totalPaid;
    const avgHourly = totalHours > 0 ? totalGross / totalHours : 0;
    const projectedGross = [...realized, ...scheduled].reduce((acc, s) => acc + s.valueTotal, 0);
    return { realized: realized.length, totalHours, totalGross, totalPaid, totalPending, avgHourly, projectedGross };
  }, [monthShifts]);

  const byLocal = useMemo(() => {
    const map: Record<string, { count: number; hours: number; gross: number }> = {};
    shifts.filter(s => s.status === "realizado").forEach(s => {
      if (!map[s.local]) map[s.local] = { count: 0, hours: 0, gross: 0 };
      map[s.local].count++;
      map[s.local].hours += shiftHours(s.startTime, s.endTime);
      map[s.local].gross += s.valueTotal;
    });
    return Object.entries(map).sort((a, b) => b[1].gross - a[1].gross);
  }, [shifts]);

  const totalRealizedAll = shifts.filter(s => s.status === "realizado");
  const totalHoursAll = totalRealizedAll.reduce((a, s) => a + shiftHours(s.startTime, s.endTime), 0);
  const totalGrossAll = totalRealizedAll.reduce((a, s) => a + s.valueTotal, 0);
  const maxGross = byLocal[0]?.[1].gross || 1;

  return (
    <>
      <TopBar title="Gestão de Plantão" />
      <div className="container max-w-3xl mx-auto px-4 py-4 pb-24 space-y-4">
        <header className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-heading font-bold">Gestão de Plantão</h1>
            </div>
            <Button size="sm" onClick={() => setShowForm(v => !v)} className="h-8 text-xs">
              <Plus className="w-3.5 h-3.5 mr-1" />
              {showForm ? "Cancelar" : "Novo plantão"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Controle sua agenda, escala e ganhos em um só lugar.
          </p>
        </header>

        {showForm && (
          <ShiftForm onSave={addShift} onCancel={() => setShowForm(false)} />
        )}

        <Tabs defaultValue="agenda">
          <TabsList className="grid w-full grid-cols-3 h-9">
            <TabsTrigger value="agenda" className="text-xs">Agenda</TabsTrigger>
            <TabsTrigger value="finance" className="text-xs">Financeiro</TabsTrigger>
            <TabsTrigger value="analysis" className="text-xs">Análise</TabsTrigger>
          </TabsList>

          {/* Agenda */}
          <TabsContent value="agenda" className="space-y-3 mt-3">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {months.map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-heading font-semibold border transition-colors ${
                    selectedMonth === m
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-muted/60"
                  }`}
                >
                  {monthLabel(m)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border p-3 bg-card">
                <p className="text-[10px] text-muted-foreground uppercase font-heading font-semibold">Plantões realizados</p>
                <p className="text-2xl font-heading font-bold mt-0.5">{kpis.realized}</p>
                <p className="text-[11px] text-muted-foreground">{Math.round(kpis.totalHours)}h trabalhadas</p>
              </div>
              <div className="rounded-lg border border-border p-3 bg-card">
                <p className="text-[10px] text-muted-foreground uppercase font-heading font-semibold">Bruto realizado</p>
                <p className="text-2xl font-heading font-bold mt-0.5">{formatCurrency(kpis.totalGross)}</p>
                <p className="text-[11px] text-muted-foreground">≈ {formatCurrency(kpis.avgHourly)}/h</p>
              </div>
            </div>

            {monthShifts.length === 0 ? (
              <div className="text-center py-10 text-sm text-muted-foreground">
                <Calendar className="w-8 h-8 mx-auto mb-2 opacity-40" />
                Nenhum plantão em {monthLabel(selectedMonth)}
              </div>
            ) : (
              <div className="space-y-2">
                {monthShifts.map(s => (
                  <ShiftCard
                    key={s.id}
                    shift={s}
                    onDelete={deleteShift}
                    onTogglePaid={togglePaid}
                    onToggleStatus={toggleStatus}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Financeiro */}
          <TabsContent value="finance" className="space-y-3 mt-3">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {months.map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-heading font-semibold border transition-colors ${
                    selectedMonth === m
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-muted/60"
                  }`}
                >
                  {monthLabel(m)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Card>
                <CardHeader className="pb-1 pt-3 px-3">
                  <CardTitle className="text-[10px] uppercase text-muted-foreground inline-flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Bruto realizado
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-lg font-heading font-bold">{formatCurrency(kpis.totalGross)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1 pt-3 px-3">
                  <CardTitle className="text-[10px] uppercase text-muted-foreground inline-flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Projeção (+ agendados)
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-lg font-heading font-bold">{formatCurrency(kpis.projectedGross)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1 pt-3 px-3">
                  <CardTitle className="text-[10px] uppercase text-muted-foreground inline-flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Recebido
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-lg font-heading font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(kpis.totalPaid)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1 pt-3 px-3">
                  <CardTitle className="text-[10px] uppercase text-muted-foreground inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> A receber
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <p className="text-lg font-heading font-bold text-amber-600 dark:text-amber-400">{formatCurrency(kpis.totalPending)}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-1.5">
              {monthShifts.filter(s => s.status !== "cancelado").map(s => (
                <div key={s.id} className="flex items-center gap-3 px-3 py-2 rounded-md border border-border bg-card">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-heading font-semibold truncate">{s.local}</p>
                    <p className="text-[11px] text-muted-foreground">{formatDate(s.date)} · {shiftHours(s.startTime, s.endTime)}h</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-heading font-bold">{formatCurrency(s.valueTotal)}</p>
                    <button
                      onClick={() => togglePaid(s.id)}
                      className={`text-[10px] font-semibold ${s.paid ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}
                    >
                      {s.paid ? "✓ Pago" : "Pendente →"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Análise */}
          <TabsContent value="analysis" className="space-y-3 mt-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-border p-3 bg-card">
                <p className="text-[10px] text-muted-foreground uppercase font-heading font-semibold">Total plantões</p>
                <p className="text-xl font-heading font-bold mt-0.5">{totalRealizedAll.length}</p>
              </div>
              <div className="rounded-lg border border-border p-3 bg-card">
                <p className="text-[10px] text-muted-foreground uppercase font-heading font-semibold">Total horas</p>
                <p className="text-xl font-heading font-bold mt-0.5">{Math.round(totalHoursAll)}h</p>
              </div>
              <div className="rounded-lg border border-border p-3 bg-card">
                <p className="text-[10px] text-muted-foreground uppercase font-heading font-semibold">Total bruto</p>
                <p className="text-base font-heading font-bold mt-0.5">{formatCurrency(totalGrossAll)}</p>
              </div>
            </div>

            {byLocal.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm inline-flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" /> Por local de trabalho
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {byLocal.map(([local, data]) => (
                    <div key={local} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-heading font-semibold">{local}</span>
                        <span className="font-heading font-bold">{formatCurrency(data.gross)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span>{data.count} plantão{data.count > 1 ? "s" : ""}</span>
                        <span>{Math.round(data.hours)}h</span>
                        <span>{formatCurrency(data.gross / data.hours)}/h</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${Math.min(100, (data.gross / maxGross) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {shifts.length === 0 && (
              <div className="text-center py-10 text-sm text-muted-foreground">
                Adicione plantões para ver a análise.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
