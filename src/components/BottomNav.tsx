import { useLocation, useNavigate } from "react-router-dom";
import { Home, Zap, Activity, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FileText, Pill, ClipboardList, Calculator, Stethoscope,
  Baby, Heart, BookOpen, GraduationCap, Star, StickyNote, Crown, Settings
} from "lucide-react";

const mainTabs = [
  { path: "/", icon: Home, label: "Início" },
  { path: "/emergency", icon: Zap, label: "Emergência" },
  { path: "/duty", icon: Activity, label: "Plantão" },
  { path: "/search", icon: Search, label: "Busca" },
];

const menuItems = [
  { path: "/protocols", icon: FileText, label: "Protocolos" },
  { path: "/medications", icon: Pill, label: "Medicações" },
  { path: "/prescriptions", icon: ClipboardList, label: "Prescrições" },
  { path: "/calculators", icon: Calculator, label: "Calculadoras" },
  { path: "/diagnosis", icon: Stethoscope, label: "Diagnóstico por Sintoma" },
  { path: "/pediatrics", icon: Baby, label: "Pediatria" },
  { path: "/obstetrics", icon: Heart, label: "Obstetrícia" },
  { path: "/internship", icon: BookOpen, label: "Internato / Residência" },
  { path: "/quiz", icon: GraduationCap, label: "Quiz" },
  { path: "/favorites", icon: Star, label: "Favoritos" },
  { path: "/notes", icon: StickyNote, label: "Notas" },
  { path: "/pricing", icon: Crown, label: "Assinatura" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {mainTabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active ? "text-primary" : "text-muted-foreground",
                tab.path === "/duty" && "text-destructive"
              )}
            >
              <tab.icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-heading font-medium">{tab.label}</span>
            </button>
          );
        })}

        {/* More menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors text-muted-foreground">
              <Menu size={22} strokeWidth={2} />
              <span className="text-[10px] font-heading font-medium">Mais</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl max-h-[70vh]">
            <SheetHeader>
              <SheetTitle className="font-heading text-sm">Menu</SheetTitle>
            </SheetHeader>
            <div className="grid grid-cols-3 gap-3 py-4 overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => { navigate(item.path); setMenuOpen(false); }}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-xl border border-border transition-all active:scale-[0.96]",
                    isActive(item.path) ? "bg-accent border-primary/30" : "bg-card"
                  )}
                >
                  <item.icon size={20} />
                  <span className="font-heading font-medium text-[10px] text-center leading-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
