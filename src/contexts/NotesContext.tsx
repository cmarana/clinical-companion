import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Note, NoteCategory } from "@/types/medical";
import { safeLocalStorage } from "@/lib/safeStorage";

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string, category?: NoteCategory, patient?: string, templateId?: string) => void;
  updateNote: (id: string, title: string, content: string, category?: NoteCategory, patient?: string) => void;
  deleteNote: (id: string) => void;
  duplicateNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const raw = JSON.parse(safeLocalStorage.getItem("notes") || "[]");
      // migrate old notes without category
      return raw.map((n: any) => ({ ...n, category: n.category || "outro" }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    safeLocalStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string, category: NoteCategory = "outro", patient?: string, templateId?: string) => {
    const now = Date.now();
    setNotes((prev) => [
      { id: crypto.randomUUID(), title, content, category, patient, templateId, createdAt: now, updatedAt: now },
      ...prev,
    ]);
  };

  const updateNote = (id: string, title: string, content: string, category?: NoteCategory, patient?: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, title, content, ...(category && { category }), ...(patient !== undefined && { patient }), updatedAt: Date.now() }
          : n
      )
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const duplicateNote = (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    const now = Date.now();
    setNotes((prev) => [
      { ...note, id: crypto.randomUUID(), title: `${note.title} (cópia)`, createdAt: now, updatedAt: now },
      ...prev,
    ]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote, duplicateNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}
