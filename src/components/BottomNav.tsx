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

const PLANTAO_GRADIENT =
  "linear-gradient(135deg, hsl(212 90% 28%) 0%, hsl(212 88% 38%) 50%, hsl(212 86% 48%) 100%)";

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
      <div className="flex items-center justify-around h-16 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-1">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          const isEmergency = tab.path === "/emergency";
          const isDuty = tab.path === "/duty";

          // Inactive color logic preserved
          const inactiveColor = isEmergency
            ? "text-destructive/60"
            : isDuty
              ? "text-muted-foreground/70"
              : "text-muted-foreground";

          return (
            <motion.button
              key={tab.path}
              onClick={() => handleTap(tab.path)}
              onTouchStart={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              onMouseEnter={() => prefetchRoute(tab.path === "/" ? "/home" : tab.path)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              data-tour={tab.path === "/favorites" ? "favorites" : undefined}
              className={cn(
                "relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full select-none transition-colors",
                active ? "text-white" : inactiveColor
              )}
            >
              {active && (
                <motion.div
                  layoutId="bottomNavActivePill"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute inset-y-1.5 inset-x-1 rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-lg shadow-primary/25"
                  style={{
                    background: isEmergency
                      ? "linear-gradient(135deg, hsl(0 72% 38%) 0%, hsl(0 75% 50%) 100%)"
                      : PLANTAO_GRADIENT,
                  }}
                >
                  {/* mini ECG trace */}
                  <svg
                    className="absolute inset-x-0 bottom-0 w-full h-5 opacity-30"
                    viewBox="0 0 80 20"
                    preserveAspectRatio="none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M0 12 L20 12 L24 4 L28 18 L32 12 L52 12 L56 6 L60 16 L64 12 L80 12" />
                  </svg>
                  {/* corner glow */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/25 blur-xl" />
                </motion.div>
              )}

              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <div className="relative">
                  <tab.icon size={20} strokeWidth={active ? 2.5 : 2} />
                  {isDuty && (
                    <span className="absolute -top-1 -right-1.5 flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-[9px] font-heading leading-none",
                    active ? "font-semibold tracking-tight" : "font-medium"
                  )}
                >
                  {tab.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
