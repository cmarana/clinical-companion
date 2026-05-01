import { useState, useCallback, useEffect } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";

export interface ImageAnalysisClassification {
  i: number;
  modality: string;
  region: string;
}

export interface CriticalAlert {
  level: "critico" | "atencao" | "informativo";
  label: string;
  value?: string;
  reference?: string;
  action?: string;
}

export interface ImageAnalysisHistoryEntry {
  id: string;
  timestamp: number;
  // material counts
  imagesCount: number;
  docsCount: number;
  // names of attached PDFs (only metadata, no full text to keep storage small)
  docNames: string[];
  // optional clinical context typed by the user
  context: string;
  // classification objects returned by the edge function
  classifications: ImageAnalysisClassification[];
  // primary modality (from first classification, or "DOC" if only docs)
  primaryModality: string;
  // full markdown analysis (already includes the classification banner)
  analysis: string;
  // optional thumbnail (data URL, downscaled) of the first image, for visual recognition
  thumbnail?: string;
  // executive summary (2-3 sentences) — extracted from analysis by the AI
  summary?: string;
  // structured critical alerts list
  alerts?: CriticalAlert[];
}

const STORAGE_KEY = "psguide_image_analysis_history";
const MAX_ENTRIES = 30;

function loadHistory(): ImageAnalysisHistoryEntry[] {
  try {
    const raw = safeLocalStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as ImageAnalysisHistoryEntry[];
  } catch {
    return [];
  }
}

function saveHistory(entries: ImageAnalysisHistoryEntry[]) {
  try {
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    // Quota — drop oldest until it fits
    let trimmed = entries.slice();
    while (trimmed.length > 1) {
      trimmed = trimmed.slice(0, Math.floor(trimmed.length * 0.7));
      try {
        safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
        return;
      } catch {
        /* keep trimming */
      }
    }
  }
}

/** Downscale a data URL image to a small thumbnail (max ~96px) to keep storage tight. */
export async function makeThumbnail(dataUrl: string, maxSize = 96): Promise<string | undefined> {
  if (!dataUrl?.startsWith("data:image/")) return undefined;
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = dataUrl;
    });
    const ratio = Math.min(maxSize / img.width, maxSize / img.height, 1);
    const w = Math.max(1, Math.round(img.width * ratio));
    const h = Math.max(1, Math.round(img.height * ratio));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL("image/jpeg", 0.6);
  } catch {
    return undefined;
  }
}

export function useImageAnalysisHistory() {
  const [history, setHistory] = useState<ImageAnalysisHistoryEntry[]>(loadHistory);

  const addEntry = useCallback((entry: Omit<ImageAnalysisHistoryEntry, "id" | "timestamp">) => {
    const full: ImageAnalysisHistoryEntry = {
      ...entry,
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [full, ...prev].slice(0, MAX_ENTRIES);
      saveHistory(updated);
      return updated;
    });
    return full;
  }, []);

  const removeEntry = useCallback((id: string) => {
    setHistory((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      saveHistory(updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    safeLocalStorage.removeItem(STORAGE_KEY);
  }, []);

  // Sync across tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setHistory(loadHistory());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return { history, addEntry, removeEntry, clearHistory };
}
