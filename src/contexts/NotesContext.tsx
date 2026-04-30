import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from "react";
import type { Note, NoteCategory } from "@/types/medical";
import { safeLocalStorage } from "@/lib/safeStorage";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string, category?: NoteCategory, patient?: string, templateId?: string) => void;
  updateNote: (id: string, title: string, content: string, category?: NoteCategory, patient?: string) => void;
  deleteNote: (id: string) => void;
  duplicateNote: (id: string) => void;
  syncing: boolean;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const skipLocalSync = useRef(false);
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const raw = JSON.parse(safeLocalStorage.getItem("notes") || "[]");
      return raw.map((n: any) => ({ ...n, category: n.category || "outro" }));
    } catch {
      return [];
    }
  });

  // Save to localStorage
  useEffect(() => {
    if (!skipLocalSync.current) {
      safeLocalStorage.setItem("notes", JSON.stringify(notes));
    }
    skipLocalSync.current = false;
  }, [notes]);

  // Load from cloud when user logs in
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      setSyncing(true);
      try {
        const { data } = await supabase
          .from("user_notes")
          .select("*")
          .order("updated_at", { ascending: false });
        if (cancelled || !data) return;
        const cloud: Note[] = data.map((r: any) => ({
          id: r.id,
          title: r.title,
          content: r.content,
          category: r.category as NoteCategory,
          patient: r.patient || undefined,
          templateId: r.template_id || undefined,
          createdAt: new Date(r.created_at).getTime(),
          updatedAt: new Date(r.updated_at).getTime(),
        }));
        // Merge: keep cloud + push local-only
        const cloudIds = new Set(cloud.map((n) => n.id));
        const localOnly = notes.filter((n) => !cloudIds.has(n.id));
        if (localOnly.length > 0) {
          const rows = localOnly.map((n) => ({
            id: n.id,
            user_id: user.id,
            title: n.title,
            content: n.content,
            category: n.category,
            patient: n.patient || null,
            template_id: n.templateId || null,
            created_at: new Date(n.createdAt).toISOString(),
            updated_at: new Date(n.updatedAt).toISOString(),
          }));
          await supabase.from("user_notes").upsert(rows, { onConflict: "id" });
        }
        skipLocalSync.current = true;
        setNotes([...cloud, ...localOnly]);
      } finally {
        if (!cancelled) setSyncing(false);
      }
    })();
    return () => { cancelled = true; };
  }, [user?.id]);

  const addNote = useCallback((title: string, content: string, category: NoteCategory = "outro", patient?: string, templateId?: string) => {
    const now = Date.now();
    const id = crypto.randomUUID();
    const note: Note = { id, title, content, category, patient, templateId, createdAt: now, updatedAt: now };
    setNotes((prev) => [note, ...prev]);
    if (user) {
      supabase.from("user_notes").insert({
        id,
        user_id: user.id,
        title,
        content,
        category,
        patient: patient || null,
        template_id: templateId || null,
      }).then();
    }
  }, [user]);

  const updateNote = useCallback((id: string, title: string, content: string, category?: NoteCategory, patient?: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, title, content, ...(category && { category }), ...(patient !== undefined && { patient }), updatedAt: Date.now() }
          : n
      )
    );
    if (user) {
      const updates: any = { title, content, updated_at: new Date().toISOString() };
      if (category) updates.category = category;
      if (patient !== undefined) updates.patient = patient || null;
      supabase.from("user_notes").update(updates).eq("id", id).then();
    }
  }, [user]);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (user) {
      supabase.from("user_notes").delete().eq("id", id).then();
    }
  }, [user]);

  const duplicateNote = useCallback((id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    const now = Date.now();
    const newId = crypto.randomUUID();
    const dup: Note = { ...note, id: newId, title: `${note.title} (cópia)`, createdAt: now, updatedAt: now };
    setNotes((prev) => [dup, ...prev]);
    if (user) {
      supabase.from("user_notes").insert({
        id: newId,
        user_id: user.id,
        title: dup.title,
        content: dup.content,
        category: dup.category,
        patient: dup.patient || null,
        template_id: dup.templateId || null,
      }).then();
    }
  }, [notes, user]);

  const value = useMemo(
    () => ({ notes, addNote, updateNote, deleteNote, duplicateNote, syncing }),
    [notes, addNote, updateNote, deleteNote, duplicateNote, syncing]
  );

  return (
    <NotesContext.Provider value={value}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}
