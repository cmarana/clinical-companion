import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Settings, WifiOff } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import FontSizeSelector from "./FontSizeSelector";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  className?: string;
  rightContent?: React.ReactNode;
}

export default function TopBar({ title, showBack, className, rightContent }: TopBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const on = () => setOffline(false);
    const off = () => setOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  const canGoBack = showBack ?? location.pathname !== "/";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 flex items-center h-12 px-3 border-b border-border bg-card/95 backdrop-blur-md gap-2",
          className
        )}
      >
        {canGoBack && (
          <button onClick={() => navigate(-1)} className="p-1.5 -ml-1 rounded-md hover:bg-accent transition-colors text-foreground">
            <ArrowLeft size={20} />
          </button>
        )}
        {title && (
          <h1 className="font-heading font-semibold text-sm truncate flex-1">{title}</h1>
        )}
        {!title && <div className="flex-1" />}
        {rightContent}
        {offline && (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/25 animate-in fade-in">
            <WifiOff size={12} className="text-amber-500" />
            <span className="text-[10px] font-heading font-semibold text-amber-500">Offline</span>
          </div>
        )}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground"
        >
          <Settings size={18} />
        </button>
      </header>

      {/* Settings dropdown */}
      {showSettings && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setShowSettings(false)} />
          <div className="sticky top-12 z-35 mx-3 mt-0 bg-card border border-border rounded-2xl shadow-lg p-4 space-y-4" style={{ zIndex: 35 }}>
            {/* Theme toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold">Modo escuro</span>
              <button
                onClick={toggleTheme}
                className={cn(
                  "relative w-11 h-6 rounded-full transition-colors",
                  theme === "dark" ? "bg-primary" : "bg-muted"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform flex items-center justify-center",
                    theme === "dark" ? "translate-x-5" : "translate-x-0.5"
                  )}
                >
                  {theme === "dark" ? <Moon size={12} className="text-primary" /> : <Sun size={12} className="text-amber-500" />}
                </span>
              </button>
            </div>

            {/* Font size */}
            <FontSizeSelector />
          </div>
        </>
      )}
    </>
  );
}
