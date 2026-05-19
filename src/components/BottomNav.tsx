import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Activity, AlertTriangle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { hapticLight } from "@/lib/haptics";
import { motion } from "framer-motion";
import { prefetchRoute } from "@/hooks/useRoutePrefetch";

const tabs = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/search", icon: Search, label: "Buscar" },
  { path: "/emergency", icon: AlertTriangle, label: "Emergência" },
  { path: "/tools", icon: Wrench, label: "Ferramentas" },
  { path: "/duty", icon: Activity, label: "Plantão" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleTap = (path: string) => {
    hapticLight();
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-nav border-t border-border bg-card safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <motion.button
              key={tab.path}
              onClick={() => handleTap(tab.path)}
              onTouchStart={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              onMouseEnter={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              whileTap={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              data-tour={tab.path === "/favorites" ? "favorites" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors select-none",
                tab.path === "/emergency"
                  ? active
                    ? "text-destructive"
                    : "text-destructive/60"
                  : tab.path === "/duty"
                    ? active
                      ? "text-muted-foreground"
                      : "text-muted-foreground/60"
                    : active
                      ? "text-primary"
                      : "text-muted-foreground"
              )}
            >
              <tab.icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[9px] font-heading font-medium">{tab.label}</span>
              {active && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 w-8 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
