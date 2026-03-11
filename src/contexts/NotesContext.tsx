import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Note } from "@/types/medical";

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  updateNote: (id: string, title: string, content: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("notes") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const now = Date.now();
    setNotes((prev) => [{ id: crypto.randomUUID(), title, content, createdAt: now, updatedAt: now }, ...prev]);
  };

  const updateNote = (id: string, title: string, content: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, title, content, updatedAt: Date.now() } : n))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}
