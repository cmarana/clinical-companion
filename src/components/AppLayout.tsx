import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import ScrollToTop from "./ScrollToTop";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import MedicalDisclaimer from "./MedicalDisclaimer";
import OfflineErrorBoundary from "./OfflineErrorBoundary";
import { AnimatePresence, motion } from "framer-motion";
import CommandPalette from "./CommandPalette";
import SupportChat from "./SupportChat";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Eclipse } from "lucide-react";
import { hapticLight } from "@/lib/haptics";
import { useIdlePrefetch } from "@/hooks/useRoutePrefetch";

const IDLE_PREFETCH_ROUTES = [
  "/home",
  "/full-protocols",
  "/duty",
  "/bulario",
  "/search",
  "/favorites",
];

export default function AppLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  useIdlePrefetch(IDLE_PREFETCH_ROUTES);

  const themeIcon = theme === "oled" ? <Eclipse size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Desktop sidebar trigger */}
          <header className="hidden md:flex h-10 items-center border-b border-border bg-card/80 backdrop-blur-sm px-3">
            <SidebarTrigger />
            <span className="ml-2 font-heading font-semibold text-xs text-primary">PULSO</span>
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => { hapticLight(); toggleTheme(); }}
                className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground"
                title={theme === "light" ? "Modo Escuro" : theme === "dark" ? "Plantão Noturno" : "Modo Claro"}
              >
                {themeIcon}
              </button>
              <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground cursor-pointer hover:bg-accent transition-colors"
                onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              >
                ⌘K
              </kbd>
            </div>
          </header>
          <main className="flex-1 bg-background text-foreground pb-16 md:pb-0">
            <OfflineErrorBoundary>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </OfflineErrorBoundary>
            <MedicalDisclaimer />
          </main>
        </div>
      </div>
      <CommandPalette />
      <SupportChat />
      <ScrollToTop />
      {/* BottomNav only on mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
