import { useState, useCallback, useEffect } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";

export interface HistoryEntry {
  path: string;
  title: string;
  type: "protocol" | "prescription" | "medication" | "calculator" | "emergency" | "fullProtocol";
  timestamp: number;
}

const STORAGE_KEY = "psguide_recent_history";
const MAX_ITEMS = 20;

function loadHistory(): HistoryEntry[] {
  try {
    const raw = safeStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}

function saveHistory(entries: HistoryEntry[]) {
  safeStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function useRecentHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(loadHistory);

  const addEntry = useCallback((entry: Omit<HistoryEntry, "timestamp">) => {
    setHistory((prev) => {
      const filtered = prev.filter((e) => e.path !== entry.path);
      const updated = [{ ...entry, timestamp: Date.now() }, ...filtered].slice(0, MAX_ITEMS);
      saveHistory(updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    safeStorage.removeItem(STORAGE_KEY);
  }, []);

  // Sync across tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setHistory(loadHistory());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const recent = history.slice(0, 8);
  
  // Most accessed: count occurrences by path
  const accessCounts = history.reduce<Record<string, { entry: HistoryEntry; count: number }>>((acc, e) => {
    // Since we deduplicate, count = 1 per entry. Instead, use a separate counter.
    acc[e.path] = acc[e.path] || { entry: e, count: 0 };
    acc[e.path].count += 1;
    acc[e.path].entry = e; // latest
    return acc;
  }, {});

  return { history, recent, addEntry, clearHistory };
}
