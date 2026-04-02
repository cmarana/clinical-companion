import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import ScrollToTop from "./ScrollToTop";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import MedicalDisclaimer from "./MedicalDisclaimer";
import OfflineErrorBoundary from "./OfflineErrorBoundary";
import { AnimatePresence, motion } from "framer-motion";
import CommandPalette from "./CommandPalette";

export default function AppLayout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Desktop sidebar trigger */}
          <header className="hidden md:flex h-10 items-center border-b border-border bg-card/80 backdrop-blur-sm px-3">
            <SidebarTrigger />
            <span className="ml-2 font-heading font-semibold text-xs text-primary">PULSO</span>
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
      <ScrollToTop />
      {/* BottomNav only on mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
