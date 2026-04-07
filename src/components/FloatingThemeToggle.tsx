import { Eclipse, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";

interface FloatingThemeToggleProps {
  className?: string;
}

export default function FloatingThemeToggle({ className = "" }: FloatingThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const title = theme === "light"
    ? "Modo Escuro"
    : theme === "dark"
      ? "Plantão Noturno"
      : "Modo Claro";

  return (
    <button
      onClick={() => {
        hapticLight();
        toggleTheme();
      }}
      aria-label="Alternar tema"
      title={title}
      className={`fixed top-3 right-3 z-[90] safe-area-top rounded-2xl border border-border bg-card/95 p-2.5 text-muted-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent hover:text-foreground ${className}`}
    >
      {theme === "oled" ? <Eclipse size={18} /> : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
