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
    <nav
      className="fixed bottom-0 left-0 right-0 z-nav safe-area-bottom text-white"
      style={{ background: PLANTAO_GRADIENT }}
    >
      {/* decorative ECG line */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 400 64"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 32 L100 32 L110 18 L120 46 L130 32 L220 32 L230 14 L240 50 L250 32 L400 32" />
      </svg>
      {/* glow */}
      <div className="absolute -top-10 right-0 w-40 h-40 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/15 pointer-events-none" />

      <div className="relative flex items-center justify-around h-16 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-1">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          const isEmergency = tab.path === "/emergency";
          const isDuty = tab.path === "/duty";

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
                "relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full select-none transition-opacity",
                active ? "opacity-100" : "opacity-65 hover:opacity-90"
              )}
            >
              {active && (
                <motion.div
                  layoutId="bottomNavActivePill"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute inset-y-1.5 inset-x-1 rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20 shadow-inner"
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <div className="relative">
                  {isEmergency ? (
                    <div
                      className={cn(
                        "flex items-center justify-center w-7 h-7 rounded-lg shadow-sm",
                        active
                          ? "bg-red-500 shadow-red-500/40"
                          : "bg-red-500/90"
                      )}
                    >
                      <tab.icon size={16} strokeWidth={2.5} className="text-white" />
                    </div>
                  ) : (
                    <tab.icon
                      size={20}
                      strokeWidth={active ? 2.5 : 2}
                      className="text-white"
                    />
                  )}
                  {isDuty && (
                    <span className="absolute -top-1 -right-1.5 flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-[9px] font-heading leading-none text-white",
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
