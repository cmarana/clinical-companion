import { useNavigate } from "react-router-dom";
import { Sparkles, X } from "lucide-react";
import { setDemoMode, useDemoMode } from "@/lib/demoMode";

export default function DemoBanner() {
  const demo = useDemoMode();
  const navigate = useNavigate();
  if (!demo) return null;

  const exit = () => {
    setDemoMode(false);
    navigate("/demo", { replace: true });
  };

  return (
    <div className="sticky top-0 z-[60] w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-1.5 text-xs font-medium">
        <div className="flex items-center gap-2 min-w-0">
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            <strong className="font-bold">MODO DEMO</strong>
            <span className="hidden sm:inline"> · Apresentação navegável · dados de exemplo, sem persistência</span>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => navigate("/demo")}
            className="hidden sm:inline rounded bg-primary-foreground/15 px-2 py-0.5 hover:bg-primary-foreground/25 transition"
          >
            ← Menu demo
          </button>
          <button
            onClick={exit}
            className="flex items-center gap-1 rounded bg-primary-foreground/15 px-2 py-0.5 hover:bg-primary-foreground/25 transition"
            aria-label="Sair do modo demo"
          >
            <X className="h-3 w-3" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </div>
  );
}
