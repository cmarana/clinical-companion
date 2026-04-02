import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { ChevronRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { fullProtocolCategories } from "@/data/fullProtocols";
import { fullProtocolMetas } from "@/data/fullProtocols/metadata";

export default function FullProtocols() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = activeCat === "all" ? fullProtocolMetas : fullProtocolMetas.filter((p) => p.categoryId === activeCat);
    if (search.length >= 2) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    return list;
  }, [activeCat, search]);

  // Derive category label from fullProtocolCategories
  const catLabel = (catId: string) => fullProtocolCategories.find(c => c.id === catId)?.title || catId;

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Protocolos Completos" />
        <PremiumGate />
      </>
    );
  }

  return (
    <>
      <TopBar title="Protocolos Completos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-5 pb-24">
        <div className="space-y-1">
          <h1 className="font-heading font-bold text-base tracking-tight">Biblioteca de Protocolos</h1>
          <p className="text-xs text-muted-foreground">
            Protocolos clínicos completos com 14 seções padronizadas, baseados em diretrizes nacionais e internacionais.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar protocolo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 h-12 text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setActiveCat("all")}
            className={cn(
              "shrink-0 px-4 py-2 rounded-2xl text-xs font-heading font-medium transition-all duration-200 active:scale-[0.97]",
              activeCat === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-card text-secondary-foreground shadow-sm"
            )}
          >
            Todos
          </button>
          {fullProtocolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-2xl text-xs font-heading font-medium transition-all duration-200 active:scale-[0.97]",
                activeCat === cat.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-card text-secondary-foreground shadow-sm"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:space-y-0">
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/full-protocols/${p.id}`)}
              className="cursor-pointer bg-card rounded-[20px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0"
            >
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-heading font-semibold text-sm">{p.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{catLabel(p.categoryId)}</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0" />
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">Nenhum protocolo encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
}
