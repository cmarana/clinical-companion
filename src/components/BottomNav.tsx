import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Activity, Star, User, Pill } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/search", icon: Search, label: "Busca" },
  { path: "/duty", icon: Activity, label: "Plantão" },
  { path: "/bulario", icon: Pill, label: "Bulário" },
  { path: "/favorites", icon: Star, label: "Favoritos" },
  { path: "/profile", icon: User, label: "Conta" },
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
      <div className="flex items-center justify-around h-16 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              data-tour={tab.path === "/favorites" ? "favorites" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active ? "text-primary" : "text-muted-foreground",
                tab.path === "/duty" && "text-destructive"
              )}
            >
              <tab.icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[9px] font-heading font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
