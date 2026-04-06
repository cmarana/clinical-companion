import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, Plus, Mic, MicOff, Trash2, Check, Clock, ChevronDown, ChevronUp, BedDouble, AlertTriangle, User, Loader2, FileDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface RoundsPatient {
  id: string;
  bed_number: string;
  patient_name: string;
  diagnosis: string;
  notes: string;
  status: string;
  admission_date: string | null;
}

interface RoundsTask {
  id: string;
  patient_id: string;
  description: string;
  completed: boolean;
  priority: string;
}

// ── Visit Timer ──
function VisitTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => { if (interval.current) clearInterval(interval.current); };
  }, [running]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span className={`font-mono text-lg font-bold ${running ? "text-primary" : "text-muted-foreground"}`}>
        {fmt(seconds)}
      </span>
      <Button size="sm" variant={running ? "destructive" : "default"} onClick={() => setRunning(!running)}>
        {running ? "Parar" : "Iniciar"}
      </Button>
      {seconds > 0 && !running && (
        <Button size="sm" variant="ghost" onClick={() => setSeconds(0)}>Zerar</Button>
      )}
    </div>
  );
}

// ── Patient Card ──
function PatientCard({
  patient,
  tasks,
  onUpdate,
  onDelete,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}: {
  patient: RoundsPatient;
  tasks: RoundsTask[];
  onUpdate: (id: string, data: Partial<RoundsPatient>) => void;
  onDelete: (id: string) => void;
  onAddTask: (patientId: string, desc: string, priority: string) => void;
  onToggleTask: (taskId: string, completed: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [taskPriority, setTaskPriority] = useState("normal");
  const recRef = useRef<any>(null);

  const pending = tasks.filter((t) => !t.completed).length;
  const urgent = tasks.filter((t) => t.priority === "urgent" && !t.completed).length;

  const startVoiceNote = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("Navegador sem suporte a voz"); return; }
    const r = new SR();
    r.lang = "pt-BR";
    r.continuous = true;
    r.interimResults = true;
    let final = patient.notes;
    r.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += " " + e.results[i][0].transcript;
        else interim = e.results[i][0].transcript;
      }
      onUpdate(patient.id, { notes: (final + " " + interim).trim() });
    };
    r.onend = () => { onUpdate(patient.id, { notes: final.trim() }); setIsListening(false); };
    r.onerror = () => setIsListening(false);
    recRef.current = r;
    r.start();
    setIsListening(true);
  }, [patient, onUpdate]);

  const stopVoiceNote = useCallback(() => { recRef.current?.stop(); setIsListening(false); }, []);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    onAddTask(patient.id, newTask.trim(), taskPriority);
    setNewTask("");
    setTaskPriority("normal");
  };

  return (
    <div className={`rounded-xl border transition-all ${
      patient.status === "discharged" ? "opacity-60 border-border bg-muted/30" : "border-border bg-card"
    }`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <div className={`flex items-center justify-center w-10 h-10 rounded-lg text-sm font-bold shrink-0 ${
          urgent > 0 ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary"
        }`}>
          {patient.bed_number || "—"}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">{patient.patient_name || "Sem nome"}</p>
          <p className="text-xs text-muted-foreground truncate">{patient.diagnosis || "Sem diagnóstico"}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {pending > 0 && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              urgent > 0 ? "bg-destructive/15 text-destructive" : "bg-amber-500/15 text-amber-600"
            }`}>
              {pending} pend.
            </span>
          )}
          {expanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-border pt-3">
          {/* Quick info edit */}
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="Leito"
              value={patient.bed_number}
              onChange={(e) => onUpdate(patient.id, { bed_number: e.target.value })}
              className="text-xs h-8"
            />
            <Input
              placeholder="Nome do paciente"
              value={patient.patient_name}
              onChange={(e) => onUpdate(patient.id, { patient_name: e.target.value })}
              className="text-xs h-8"
            />
          </div>
          <Input
            placeholder="Diagnóstico principal"
            value={patient.diagnosis}
            onChange={(e) => onUpdate(patient.id, { diagnosis: e.target.value })}
            className="text-xs h-8"
          />

          {/* Voice evolution */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground">Evolução / Notas</span>
              <Button
                size="sm"
                variant={isListening ? "destructive" : "outline"}
                className="h-7 text-xs gap-1"
                onClick={isListening ? stopVoiceNote : startVoiceNote}
              >
                {isListening ? <><MicOff className="h-3 w-3" /> Parar</> : <><Mic className="h-3 w-3" /> Voz</>}
              </Button>
            </div>
            <Textarea
              placeholder="Evolução do paciente..."
              value={patient.notes}
              onChange={(e) => onUpdate(patient.id, { notes: e.target.value })}
              rows={3}
              className="text-xs resize-none"
            />
          </div>

          {/* Tasks / Checklist */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-foreground">Pendências</span>
            {tasks.length > 0 && (
              <div className="space-y-1">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-2 group">
                    <button
                      onClick={() => onToggleTask(task.id, !task.completed)}
                      className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        task.completed
                          ? "bg-primary border-primary text-primary-foreground"
                          : task.priority === "urgent"
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    >
                      {task.completed && <Check className="h-3 w-3" />}
                    </button>
                    <span className={`text-xs flex-1 ${task.completed ? "line-through text-muted-foreground" : "text-foreground"} ${
                      task.priority === "urgent" && !task.completed ? "text-destructive font-medium" : ""
                    }`}>
                      {task.priority === "urgent" && !task.completed && "⚠️ "}
                      {task.description}
                    </span>
                    <button
                      onClick={() => onDeleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-1.5">
              <Input
                placeholder="Nova pendência..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                className="text-xs h-7 flex-1"
              />
              <select
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
                className="text-xs h-7 rounded border border-border bg-background px-1"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgente</option>
              </select>
              <Button size="sm" className="h-7 px-2" onClick={handleAddTask} disabled={!newTask.trim()}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 flex-1"
              onClick={() => onUpdate(patient.id, { status: patient.status === "discharged" ? "active" : "discharged" })}
            >
              {patient.status === "discharged" ? "Reativar" : "Alta"}
            </Button>
            <Button size="sm" variant="ghost" className="text-xs h-7 text-destructive" onClick={() => onDelete(patient.id)}>
              <Trash2 className="h-3 w-3 mr-1" /> Remover
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Rounds Page ──
const Rounds = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [patients, setPatients] = useState<RoundsPatient[]>([]);
  const [tasks, setTasks] = useState<RoundsTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [addOpen, setAddOpen] = useState(false);
  const [newBed, setNewBed] = useState("");
  const [newName, setNewName] = useState("");
  const [newDiag, setNewDiag] = useState("");
  const debounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Load data
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const [pRes, tRes] = await Promise.all([
        supabase.from("rounds_patients").select("*").eq("user_id", user.id).order("bed_number"),
        supabase.from("rounds_tasks").select("*").eq("user_id", user.id),
      ]);
      if (pRes.data) setPatients(pRes.data as any);
      if (tRes.data) setTasks(tRes.data as any);
      setLoading(false);
    };
    load();
  }, [user]);

  const addPatient = async () => {
    if (!user) return;
    const { data, error } = await supabase.from("rounds_patients").insert({
      user_id: user.id,
      bed_number: newBed.trim(),
      patient_name: newName.trim(),
      diagnosis: newDiag.trim(),
    }).select().single();
    if (error) { toast.error("Erro ao adicionar paciente"); return; }
    setPatients((p) => [...p, data as any]);
    setNewBed(""); setNewName(""); setNewDiag("");
    setAddOpen(false);
    toast.success("Paciente adicionado");
  };

  const updatePatient = useCallback((id: string, data: Partial<RoundsPatient>) => {
    setPatients((prev) => prev.map((p) => p.id === id ? { ...p, ...data } : p));
    // Debounced DB update
    if (debounceRef.current[id]) clearTimeout(debounceRef.current[id]);
    debounceRef.current[id] = setTimeout(async () => {
      await supabase.from("rounds_patients").update(data).eq("id", id);
    }, 800);
  }, []);

  const deletePatient = useCallback(async (id: string) => {
    setPatients((p) => p.filter((x) => x.id !== id));
    setTasks((t) => t.filter((x) => x.patient_id !== id));
    await supabase.from("rounds_patients").delete().eq("id", id);
    toast.success("Paciente removido");
  }, []);

  const addTask = useCallback(async (patientId: string, description: string, priority: string) => {
    if (!user) return;
    const { data, error } = await supabase.from("rounds_tasks").insert({
      patient_id: patientId,
      user_id: user.id,
      description,
      priority,
    }).select().single();
    if (!error && data) setTasks((t) => [...t, data as any]);
  }, [user]);

  const toggleTask = useCallback(async (taskId: string, completed: boolean) => {
    setTasks((t) => t.map((x) => x.id === taskId ? { ...x, completed } : x));
    await supabase.from("rounds_tasks").update({ completed }).eq("id", taskId);
  }, []);

  const deleteTask = useCallback(async (taskId: string) => {
    setTasks((t) => t.filter((x) => x.id !== taskId));
    await supabase.from("rounds_tasks").delete().eq("id", taskId);
  }, []);

  const activePatients = patients.filter((p) => p.status !== "discharged");
  const dischargedPatients = patients.filter((p) => p.status === "discharged");
  const totalPending = tasks.filter((t) => !t.completed).length;
  const totalUrgent = tasks.filter((t) => t.priority === "urgent" && !t.completed).length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-primary" />
              Modo Rounds
            </h1>
            <p className="text-xs text-muted-foreground">
              {activePatients.length} paciente{activePatients.length !== 1 ? "s" : ""} · {totalPending} pendência{totalPending !== 1 ? "s" : ""}
              {totalUrgent > 0 && <span className="text-destructive font-medium"> · {totalUrgent} urgente{totalUrgent !== 1 ? "s" : ""}</span>}
            </p>
          </div>
          <VisitTimer />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
        {/* Add patient */}
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button className="w-full gap-2" variant="outline">
              <Plus className="h-4 w-4" /> Adicionar Paciente
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Paciente</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 pt-2">
              <Input placeholder="Leito (ex: 301-A)" value={newBed} onChange={(e) => setNewBed(e.target.value)} />
              <Input placeholder="Nome do paciente" value={newName} onChange={(e) => setNewName(e.target.value)} />
              <Input placeholder="Diagnóstico principal" value={newDiag} onChange={(e) => setNewDiag(e.target.value)} />
              <Button className="w-full" onClick={addPatient} disabled={!newName.trim()}>
                <Plus className="h-4 w-4 mr-2" /> Adicionar
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Active patients */}
        {activePatients.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <BedDouble className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Nenhum paciente adicionado.</p>
            <p className="text-xs">Clique em "Adicionar Paciente" para começar o round.</p>
          </div>
        )}

        {activePatients.map((p) => (
          <PatientCard
            key={p.id}
            patient={p}
            tasks={tasks.filter((t) => t.patient_id === p.id)}
            onUpdate={updatePatient}
            onDelete={deletePatient}
            onAddTask={addTask}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        ))}

        {/* Discharged */}
        {dischargedPatients.length > 0 && (
          <div className="pt-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">Pacientes com alta ({dischargedPatients.length})</p>
            {dischargedPatients.map((p) => (
              <PatientCard
                key={p.id}
                patient={p}
                tasks={tasks.filter((t) => t.patient_id === p.id)}
                onUpdate={updatePatient}
                onDelete={deletePatient}
                onAddTask={addTask}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rounds;
