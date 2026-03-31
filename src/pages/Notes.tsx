import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNotes } from "@/contexts/NotesContext";
import type { NoteCategory } from "@/types/medical";
import { clinicalTemplates, noteCategoryLabels, noteCategoryColors } from "@/data/clinicalTemplates";
import {
  Plus, Trash2, Edit2, X, Check, StickyNote, Search, Copy, FileText,
  ChevronDown, ChevronUp, LayoutTemplate, User, Clock, MessageCircle
} from "lucide-react";
import { shareViaWhatsApp, formatNoteForShare } from "@/lib/shareUtils";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const categoryFilters: { id: NoteCategory | "all"; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "admissao", label: "Admissão" },
  { id: "evolucao", label: "Evolução" },
  { id: "alta", label: "Alta" },
  { id: "procedimento", label: "Procedimento" },
  { id: "interconsulta", label: "Interconsulta" },
  { id: "plantao", label: "Plantão" },
  { id: "outro", label: "Outro" },
];

export default function Notes() {
  const { notes, addNote, updateNote, deleteNote, duplicateNote } = useNotes();
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<NoteCategory | "all">("all");
  const [showForm, setShowForm] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<NoteCategory>("outro");
  const [patient, setPatient] = useState("");

  const filtered = useMemo(() => {
    return notes.filter((n) => {
      const matchCat = filterCat === "all" || n.category === filterCat;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        (n.patient && n.patient.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [notes, filterCat, search]);

  const startNew = () => {
    setTitle("");
    setContent("");
    setCategory("outro");
    setPatient("");
    setEditId(null);
    setShowForm(true);
    setShowTemplates(false);
  };

  const startFromTemplate = (tpl: typeof clinicalTemplates[0]) => {
    setTitle(tpl.title);
    setContent(tpl.text);
    setCategory(tpl.category);
    setPatient("");
    setEditId(null);
    setShowTemplates(false);
    setShowForm(true);
  };

  const startEdit = (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setPatient(note.patient || "");
    setEditId(id);
    setShowForm(true);
    setExpandedId(null);
  };

  const save = () => {
    if (!title.trim()) return;
    if (editId) {
      updateNote(editId, title, content, category, patient);
      toast.success("Nota atualizada");
    } else {
      addNote(title, content, category, patient);
      toast.success("Nota criada");
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    deleteNote(id);
    toast.success("Nota excluída");
    if (expandedId === id) setExpandedId(null);
  };

  const handleDuplicate = (id: string) => {
    duplicateNote(id);
    toast.success("Nota duplicada");
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Conteúdo copiado!");
  };

  return (
    <>
      <TopBar
        title="Notas Clínicas"
        rightContent={
          <div className="flex gap-1">
            <button
              onClick={() => { setShowTemplates(!showTemplates); setShowForm(false); }}
              className="p-1.5 rounded-md hover:bg-accent transition-colors text-primary"
            >
              <LayoutTemplate size={20} />
            </button>
            <button onClick={startNew} className="p-1.5 rounded-md hover:bg-accent transition-colors text-primary">
              <Plus size={20} />
            </button>
          </div>
        }
      />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Buscar nota, paciente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 rounded-2xl bg-card border-0 shadow-sm h-10"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
          {categoryFilters.map((c) => {
            const count = c.id === "all" ? notes.length : notes.filter((n) => n.category === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => setFilterCat(c.id)}
                className={cn(
                  "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                  filterCat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                )}
              >
                {c.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Template selector */}
        {showTemplates && (
          <div className="bg-card rounded-2xl shadow-sm p-4 mb-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <LayoutTemplate size={16} className="text-primary" />
                Criar a partir de modelo
              </h3>
              <button onClick={() => setShowTemplates(false)} className="p-1 rounded-md hover:bg-accent">
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {clinicalTemplates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => startFromTemplate(tpl)}
                  className="text-left p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Badge className={cn("text-[9px] px-1.5 py-0 mb-1", noteCategoryColors[tpl.category])}>
                    {noteCategoryLabels[tpl.category]}
                  </Badge>
                  <p className="text-xs font-semibold leading-tight">{tpl.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{tpl.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="bg-card rounded-2xl shadow-sm p-4 mb-4 space-y-3">
            <h3 className="text-sm font-semibold">{editId ? "Editar Nota" : "Nova Nota Clínica"}</h3>

            <Input
              placeholder="Título da nota"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm h-9 rounded-xl"
            />

            <div className="flex gap-2">
              <div className="flex-1 relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                <Input
                  placeholder="Paciente (opcional)"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                  className="text-sm h-9 rounded-xl pl-8"
                />
              </div>
            </div>

            {/* Category selection */}
            <div className="flex gap-1.5 flex-wrap">
              {(Object.keys(noteCategoryLabels) as NoteCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors",
                    category === cat ? noteCategoryColors[cat] : "bg-muted text-muted-foreground"
                  )}
                >
                  {noteCategoryLabels[cat]}
                </button>
              ))}
            </div>

            <Textarea
              placeholder="Conteúdo da nota..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="text-xs font-mono rounded-xl leading-relaxed"
            />

            <div className="flex gap-2">
              <Button size="sm" onClick={save} className="gap-1 rounded-xl">
                <Check size={14} /> Salvar
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setShowForm(false)} className="gap-1 rounded-xl">
                <X size={14} /> Cancelar
              </Button>
            </div>
          </div>
        )}

        {/* Counter */}
        <p className="text-xs text-muted-foreground mb-3">{filtered.length} nota(s)</p>

        {/* Notes list */}
        {filtered.length === 0 && !showForm && !showTemplates && (
          <div className="text-center py-12 space-y-3">
            <StickyNote size={40} className="mx-auto text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Nenhuma nota clínica ainda.</p>
            <div className="flex gap-2 justify-center">
              <Button onClick={() => setShowTemplates(true)} variant="outline" className="gap-2 rounded-xl">
                <LayoutTemplate size={16} /> Usar modelo
              </Button>
              <Button onClick={startNew} variant="outline" className="gap-2 rounded-xl">
                <Plus size={16} /> Nota em branco
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {filtered.map((n) => {
            const isExpanded = expandedId === n.id;
            return (
              <div key={n.id} className="bg-card rounded-2xl shadow-sm overflow-hidden transition-all">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : n.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={cn("text-[9px] px-1.5 py-0", noteCategoryColors[n.category])}>
                        {noteCategoryLabels[n.category]}
                      </Badge>
                      {n.patient && (
                        <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                          <User size={10} /> {n.patient}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm leading-tight">{n.title}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
                      <Clock size={10} />
                      {new Date(n.updatedAt).toLocaleDateString("pt-BR")} às{" "}
                      {new Date(n.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={16} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3">
                    <pre className="text-[11px] leading-relaxed whitespace-pre-wrap bg-muted/50 rounded-xl p-3 font-mono max-h-[400px] overflow-y-auto">
                      {n.content}
                    </pre>
                    <div className="flex gap-2 flex-wrap">
                      <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs h-8" onClick={() => shareViaWhatsApp(formatNoteForShare(n.title, noteCategoryLabels[n.category], n.content, n.patient))}>
                        <MessageCircle size={12} /> WhatsApp
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs h-8" onClick={() => copyContent(n.content)}>
                        <Copy size={12} /> Copiar
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs h-8" onClick={() => startEdit(n.id)}>
                        <Edit2 size={12} /> Editar
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs h-8" onClick={() => handleDuplicate(n.id)}>
                        <FileText size={12} /> Duplicar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1.5 rounded-xl text-xs h-8 text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(n.id)}
                      >
                        <Trash2 size={12} /> Excluir
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
