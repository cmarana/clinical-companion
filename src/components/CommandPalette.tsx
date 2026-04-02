import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, FileText, BookOpen, Pill, Calculator, Zap, ArrowRight } from "lucide-react";
import { fullProtocolMetas } from "@/data/fullProtocols/metadata";

const iconMap: Record<string, React.ReactNode> = {
  fullProtocol: <BookOpen size={14} className="text-primary" />,
  protocol: <FileText size={14} className="text-primary" />,
  medication: <Pill size={14} className="text-primary" />,
  calculator: <Calculator size={14} className="text-primary" />,
  emergency: <Zap size={14} className="text-destructive" />,
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const navigate = useNavigate();

  // Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const results = query.length >= 2
    ? fullProtocolMetas
        .filter(p => {
          const q = query.toLowerCase();
          return p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q));
        })
        .slice(0, 8)
    : [];

  const handleSelect = useCallback((id: string) => {
    navigate(`/full-protocols/${id}`);
    setOpen(false);
    setQuery("");
    setSelectedIdx(0);
  }, [navigate]);

  // Arrow key navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx(i => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[selectedIdx]) {
        e.preventDefault();
        handleSelect(results[selectedIdx].id);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selectedIdx, handleSelect]);

  // Reset selected on query change
  useEffect(() => { setSelectedIdx(0); }, [query]);

  const quickLinks = [
    { label: "Protocolos", path: "/full-protocols", icon: "fullProtocol" },
    { label: "Emergência", path: "/emergency", icon: "emergency" },
    { label: "Bulário", path: "/bulario", icon: "medication" },
    { label: "Calculadoras", path: "/calculators", icon: "calculator" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden rounded-2xl">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar protocolos, medicamentos..."
            className="flex-1 h-12 bg-transparent text-sm font-heading focus:outline-none placeholder:text-muted-foreground/60"
          />
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {/* Results */}
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    i === selectedIdx ? "bg-primary/10 text-primary" : "hover:bg-muted/60"
                  }`}
                >
                  {iconMap.fullProtocol}
                  <span className="truncate font-heading text-xs font-medium">{r.title}</span>
                  <ArrowRight size={12} className="ml-auto text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <p className="text-center text-xs text-muted-foreground py-8">Nenhum resultado encontrado.</p>
          ) : (
            <div className="p-3 space-y-3">
              <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-wider px-2">Acesso rápido</p>
              {quickLinks.map(l => (
                <button
                  key={l.path}
                  onClick={() => { navigate(l.path); setOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-heading hover:bg-muted/60 transition-colors"
                >
                  {iconMap[l.icon]}
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2 flex items-center gap-4 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-4 items-center rounded border border-border bg-muted px-1 font-mono text-[9px]">↑↓</kbd>
            navegar
          </span>
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-4 items-center rounded border border-border bg-muted px-1 font-mono text-[9px]">↵</kbd>
            abrir
          </span>
          <span className="flex items-center gap-1">
            <kbd className="inline-flex h-4 items-center rounded border border-border bg-muted px-1 font-mono text-[9px]">esc</kbd>
            fechar
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
