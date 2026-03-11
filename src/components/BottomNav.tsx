import { useLocation, useNavigate } from "react-router-dom";
import { Home, FileText, Search, Star, Calculator, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/protocols", icon: FileText, label: "Protocolos" },
  { path: "/emergency", icon: Zap, label: "Emergência" },
  { path: "/search", icon: Search, label: "Busca" },
  { path: "/favorites", icon: Star, label: "Favoritos" },
  { path: "/notes", icon: StickyNote, label: "Notas" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <tab.icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-heading font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
