import { useState, useEffect } from "react";
import { BedDouble, Plus, Trash2, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { safeLocalStorage } from "@/lib/safeStorage";
import { toast } from "sonner";

const STORAGE_KEY = "duty_bed_notes";

interface BedNote {
  id: string;
  bed: string;
  patient: string;
  note: string;
  createdAt: number;
}

export default function DutyBedNotes() {
  const [notes, setNotes] = useState<BedNote[]>(() => {
    const saved = safeLocalStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch { /* fallback */ }
    }
    return [];
  });
  const [showForm, setShowForm] = useState(false);
  const [bed, setBed] = useState("");
  const [patient, setPatient] = useState("");
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!bed.trim()) return;
    setNotes(prev => [{
      id: Date.now().toString(),
      bed: bed.trim(),
      patient: patient.trim(),
      note: noteText.trim(),
      createdAt: Date.now(),
    }, ...prev]);
    setBed("");
    setPatient("");
    setNoteText("");
    setShowForm(false);
    toast.success("Nota de leito adicionada");
  };

  const removeNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
    toast.success("Nota removida");
  };

  return (
    <div className="duty-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <BedDouble size={14} />
          Notas por Leito
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowForm(!showForm)}
          className="h-7 w-7 p-0"
        >
          {showForm ? <X size={14} className="text-muted-foreground" /> : <Plus size={14} className="text-primary" />}
        </Button>
      </div>

      {showForm && (
        <div className="space-y-2 bg-muted/30 rounded-xl p-3">
          <div className="flex gap-2">
            <Input
              placeholder="Leito (ex: 3A)"
              value={bed}
              onChange={e => setBed(e.target.value)}
              className="h-9 text-xs rounded-xl flex-[0.4]"
            />
            <Input
              placeholder="Paciente (opcional)"
              value={patient}
              onChange={e => setPatient(e.target.value)}
              className="h-9 text-xs rounded-xl flex-[0.6]"
            />
          </div>
          <Textarea
            placeholder="Observação rápida..."
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            rows={2}
            className="text-xs rounded-xl"
          />
          <Button size="sm" onClick={addNote} className="gap-1 rounded-xl w-full">
            <Check size={14} /> Salvar
          </Button>
        </div>
      )}

      {notes.length === 0 && !showForm ? (
        <div className="text-center py-4 space-y-2">
          <BedDouble size={24} className="mx-auto text-muted-foreground/40" />
          <p className="text-xs text-muted-foreground">Anote informações rápidas por leito para acompanhar seus pacientes durante o plantão.</p>
          <button onClick={() => setShowForm(true)} className="text-xs text-primary font-heading font-medium">
            + Adicionar nota de leito
          </button>
        </div>
      ) : (
        <div className="space-y-1.5">
          {notes.map(n => (
            <div key={n.id} className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-heading font-bold text-primary">{n.bed}</span>
              </div>
              <div className="flex-1 min-w-0">
                {n.patient && <p className="text-[10px] font-heading font-semibold text-foreground">{n.patient}</p>}
                {n.note && <p className="text-[11px] text-muted-foreground leading-relaxed">{n.note}</p>}
                <p className="text-[9px] text-muted-foreground/60 mt-0.5">
                  {new Date(n.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <button onClick={() => removeNote(n.id)} className="p-1 rounded-md hover:bg-destructive/10 transition-colors shrink-0">
                <Trash2 size={12} className="text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
