import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNotes } from "@/contexts/NotesContext";
import { Plus, Trash2, Edit2, X, Check, StickyNote } from "lucide-react";

export default function Notes() {
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const startNew = () => {
    setTitle("");
    setContent("");
    setEditId(null);
    setShowForm(true);
  };

  const startEdit = (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    setTitle(note.title);
    setContent(note.content);
    setEditId(id);
    setShowForm(true);
  };

  const save = () => {
    if (!title.trim()) return;
    if (editId) updateNote(editId, title, content);
    else addNote(title, content);
    setShowForm(false);
  };

  return (
    <>
      <TopBar
        title="Anotações"
        rightContent={
          <button onClick={startNew} className="p-1.5 rounded-md hover:bg-accent transition-colors text-primary">
            <Plus size={20} />
          </button>
        }
      />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
        {showForm && (
          <Card>
            <CardContent className="p-4 space-y-3">
              <Input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} className="text-sm h-9" />
              <Textarea placeholder="Conteúdo..." value={content} onChange={(e) => setContent(e.target.value)} rows={5} className="text-sm" />
              <div className="flex gap-2">
                <Button size="sm" onClick={save} className="gap-1"><Check size={14} /> Salvar</Button>
                <Button size="sm" variant="ghost" onClick={() => setShowForm(false)} className="gap-1"><X size={14} /> Cancelar</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {notes.length === 0 && !showForm && (
          <div className="text-center py-12 space-y-3">
            <StickyNote size={40} className="mx-auto text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Nenhuma anotação ainda.</p>
            <Button onClick={startNew} variant="outline" className="gap-2"><Plus size={16} /> Nova Anotação</Button>
          </div>
        )}

        {notes.map((n) => (
          <Card key={n.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-sm">{n.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(n.updatedAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => startEdit(n.id)} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground"><Edit2 size={14} /></button>
                  <button onClick={() => deleteNote(n.id)} className="p-1.5 rounded-md hover:bg-destructive-surface text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                </div>
              </div>
              <p className="text-sm mt-2 whitespace-pre-wrap leading-relaxed">{n.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
