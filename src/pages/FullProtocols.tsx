import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { fullProtocols, fullProtocolCategories } from "@/data/fullProtocols";
import { ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";

export default function FullProtocols() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = activeCat === "all" ? fullProtocols : fullProtocols.filter((p) => p.categoryId === activeCat);
    if (search.length >= 2) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    return list;
  }, [activeCat, search]);

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
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        <div className="space-y-1">
          <h1 className="font-heading font-bold text-base tracking-tight">Biblioteca de Protocolos</h1>
          <p className="text-xs text-muted-foreground">
            Protocolos completos com 14 secoes padronizadas. Estilo UpToDate / Whitebook / Amboss.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar protocolo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 h-9 text-xs rounded-lg"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveCat("all")}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-heading font-medium transition-colors",
              activeCat === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            )}
          >
            Todos
          </button>
          {fullProtocolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-heading font-medium transition-colors",
                activeCat === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-2">
          {filtered.map((p) => (
            <Card
              key={p.id}
              onClick={() => navigate(`/full-protocols/${p.id}`)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center justify-between p-3.5">
                <div>
                  <p className="font-heading font-semibold text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">Nenhum protocolo encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
}
