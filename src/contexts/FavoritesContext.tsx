import { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef, type ReactNode } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface FavoriteItem {
  id: string;
  type: "protocol" | "medication" | "prescription";
  title: string;
  specialty?: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
  grouped: Record<string, FavoriteItem[]>;
  specialties: string[];
  syncing: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const SPECIALTY_ORDER = [
  "Cardiologia", "Pneumologia", "Neurologia", "Infectologia", "Gastroenterologia",
  "Nefrologia", "Endocrinologia", "Hematologia", "Reumatologia", "Dermatologia",
  "Pediatria", "Obstetrícia", "Ginecologia", "Psiquiatria", "Cirurgia",
  "Ortopedia", "Urologia", "Oftalmologia", "Otorrinolaringologia",
  "Emergência", "UTI", "Geriatria", "Outros",
];

function inferSpecialty(item: FavoriteItem): string {
  const t = item.title.toLowerCase();
  if (/cardio|iam|icc|arritmia|angina|pericardite|bradicardia|taquicardia|fibrilação|flutter|has\b|hipertens/.test(t)) return "Cardiologia";
  if (/pneumo|asma|dpoc|pneumonia|bronqui|respirat|eap|dispneia/.test(t)) return "Pneumologia";
  if (/neuro|avc|convuls|cefaleia|epilep|meningite|guillain/.test(t)) return "Neurologia";
  if (/infect|sepse|hiv|tuberculose|dengue|malária|antibiótico|antifúngico/.test(t)) return "Infectologia";
  if (/gastro|hepat|cirrose|pancreatite|úlcera|hemorragia digestiva/.test(t)) return "Gastroenterologia";
  if (/nefro|renal|diálise|ira\b|irc\b/.test(t)) return "Nefrologia";
  if (/endocrin|diabetes|hipoglicemia|tireoide|cetoacidose/.test(t)) return "Endocrinologia";
  if (/hemato|anemia|trombocitopenia|leucemia|anticoagul/.test(t)) return "Hematologia";
  if (/pediatr|neonat|criança|recém-nascido/.test(t)) return "Pediatria";
  if (/obstetr|gestante|eclâmpsia|pré-eclâmpsia|parto/.test(t)) return "Obstetrícia";
  if (/gineco|vulvovaginite|sangramento uterino/.test(t)) return "Ginecologia";
  if (/psiq|delirium|agitação|surto|abstinência/.test(t)) return "Psiquiatria";
  if (/dermat|pele|urticária|celulite/.test(t)) return "Dermatologia";
  if (/cirurg|apendicite|abdome agudo/.test(t)) return "Cirurgia";
  if (/orto|fratura|luxação/.test(t)) return "Ortopedia";
  if (/pcr|rcp|intubação|iot|choque|anafilaxia|trauma|queimadura/.test(t)) return "Emergência";
  return "Outros";
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      return JSON.parse(safeLocalStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });
  const skipLocalSync = useRef(false);

  // Save to localStorage
  useEffect(() => {
    if (!skipLocalSync.current) {
      safeLocalStorage.setItem("favorites", JSON.stringify(favorites));
    }
    skipLocalSync.current = false;
  }, [favorites]);

  // Load from cloud when user logs in
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      setSyncing(true);
      try {
        const { data } = await supabase
          .from("user_favorites")
          .select("item_id, item_type, title, specialty")
          .order("created_at", { ascending: false });
        if (cancelled || !data) return;
        const cloud: FavoriteItem[] = data.map((r: any) => ({
          id: r.item_id,
          type: r.item_type,
          title: r.title,
          specialty: r.specialty,
        }));
        // Merge: cloud wins, add local-only items
        const cloudIds = new Set(cloud.map((f) => f.id));
        const localOnly = favorites.filter((f) => !cloudIds.has(f.id));
        // Push local-only to cloud
        if (localOnly.length > 0) {
          const rows = localOnly.map((f) => ({
            user_id: user.id,
            item_id: f.id,
            item_type: f.type,
            title: f.title,
            specialty: f.specialty || inferSpecialty(f),
          }));
          await supabase.from("user_favorites").upsert(rows, { onConflict: "user_id,item_id" });
        }
        skipLocalSync.current = true;
        setFavorites([...cloud, ...localOnly]);
      } finally {
        if (!cancelled) setSyncing(false);
      }
    })();
    return () => { cancelled = true; };
  }, [user?.id]);

  const isFavorite = useCallback((id: string) => favorites.some((f) => f.id === id), [favorites]);

  const toggleFavorite = useCallback((item: FavoriteItem) => {
    const exists = favorites.some((f) => f.id === item.id);
    if (exists) {
      setFavorites((prev) => prev.filter((f) => f.id !== item.id));
      if (user) {
        supabase.from("user_favorites").delete().eq("user_id", user.id).eq("item_id", item.id).then();
      }
    } else {
      const withSpec = { ...item, specialty: item.specialty || inferSpecialty(item) };
      setFavorites((prev) => [...prev, withSpec]);
      if (user) {
        supabase.from("user_favorites").upsert({
          user_id: user.id,
          item_id: item.id,
          item_type: item.type,
          title: item.title,
          specialty: withSpec.specialty,
        }, { onConflict: "user_id,item_id" }).then();
      }
    }
  }, [favorites, user]);

  const grouped = useMemo(() => {
    const map: Record<string, FavoriteItem[]> = {};
    favorites.forEach((f) => {
      const spec = f.specialty || inferSpecialty(f);
      if (!map[spec]) map[spec] = [];
      map[spec].push(f);
    });
    return map;
  }, [favorites]);

  const specialties = useMemo(
    () => SPECIALTY_ORDER.filter((s) => grouped[s]?.length),
    [grouped]
  );

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite, grouped, specialties, syncing }),
    [favorites, isFavorite, toggleFavorite, grouped, specialties, syncing]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
