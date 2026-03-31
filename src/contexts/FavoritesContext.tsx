import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";

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
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      return JSON.parse(safeLocalStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    safeLocalStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === item.id)
        ? prev.filter((f) => f.id !== item.id)
        : [...prev, { ...item, specialty: item.specialty || inferSpecialty(item) }]
    );
  };

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

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, grouped, specialties }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
