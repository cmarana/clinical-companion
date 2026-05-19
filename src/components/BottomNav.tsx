import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Activity, AlertTriangle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { hapticLight } from "@/lib/haptics";
import { motion } from "framer-motion";
import { prefetchRoute } from "@/hooks/useRoutePrefetch";

const tabs = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/search", icon: Search, label: "Buscar" },
  { path: "/emergency", icon: AlertTriangle, label: "Emergência" },
  { path: "/duty", icon: Activity, label: "Plantão" },
  { path: "/favorites", icon: Heart, label: "Favoritos" },
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
    <nav className="fixed bottom-0 left-0 right-0 z-nav safe-area-bottom bg-card/95 backdrop-blur-md border-t border-border/60">
      <div className="relative flex items-center justify-around h-16 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-1">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          const isEmergency = tab.path === "/emergency";

          return (
            <motion.button
              key={tab.path}
              onClick={() => handleTap(tab.path)}
              onTouchStart={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              onMouseEnter={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={cn(
                "relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full select-none",
                active
                  ? isEmergency
                    ? "text-destructive"
                    : "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span
                className={cn(
                  "text-[9px] font-heading leading-none",
                  active ? "font-semibold tracking-tight" : "font-medium"
                )}
              >
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
