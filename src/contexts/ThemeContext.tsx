import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";

type Theme = "light" | "dark" | "oled";
type FontSize = "small" | "normal" | "large" | "xlarge";

const fontSizeMap: Record<FontSize, string> = {
  small: "14px",
  normal: "16px",
  large: "18px",
  xlarge: "20px",
};

const fontSizeLabels: Record<FontSize, string> = {
  small: "Pequena",
  normal: "Normal",
  large: "Grande",
  xlarge: "Extra Grande",
};

const themeLabels: Record<Theme, string> = {
  light: "Claro",
  dark: "Escuro",
  oled: "Plantão Noturno",
};

const themeCycle: Theme[] = ["light", "dark", "oled"];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
  themeLabel: string;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  fontSizeOptions: { value: FontSize; label: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = safeLocalStorage.getItem("app-theme");
    if (stored === "dark" || stored === "light" || stored === "oled") return stored;
    return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    const stored = safeLocalStorage.getItem("app-font-size");
    if (stored && stored in fontSizeMap) return stored as FontSize;
    return "normal";
  });

  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove("dark", "oled");
    if (theme === "dark") el.classList.add("dark");
    if (theme === "oled") el.classList.add("dark", "oled");
    safeLocalStorage.setItem("app-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = fontSizeMap[fontSize];
    safeLocalStorage.setItem("app-font-size", fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setThemeState((t) => {
      const idx = themeCycle.indexOf(t);
      return themeCycle[(idx + 1) % themeCycle.length];
    });
  };

  const setTheme = (t: Theme) => setThemeState(t);

  const setFontSize = (size: FontSize) => setFontSizeState(size);

  const fontSizeOptions = (Object.keys(fontSizeMap) as FontSize[]).map((k) => ({
    value: k,
    label: fontSizeLabels[k],
  }));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, themeLabel: themeLabels[theme], fontSize, setFontSize, fontSizeOptions }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
