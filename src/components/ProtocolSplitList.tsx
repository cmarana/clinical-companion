import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { fullProtocolCategories } from "@/data/fullProtocols";
import { fullProtocolMetas } from "@/data/fullProtocols/metadata";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  activeProtocolId?: string;
}

export default function ProtocolSplitList({ activeProtocolId }: Props) {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = activeCat === "all" ? fullProtocolMetas : fullProtocolMetas.filter((p) => p.categoryId === activeCat);
    if (search.length >= 2) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    return list;
  }, [activeCat, search]);

  const catLabel = (catId: string) => fullProtocolCategories.find(c => c.id === catId)?.title || catId;

  return (
    <div className="flex flex-col h-full border-r border-border bg-card/50">
      {/* Header */}
      <div className="p-4 border-b border-border space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-primary" />
          <h2 className="font-heading font-bold text-sm">Protocolos</h2>
          <span className="text-[10px] text-muted-foreground ml-auto bg-muted px-2 py-0.5 rounded-full">
            {filtered.length}
          </span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 h-9 text-xs rounded-xl bg-muted/60 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCat("all")}
            className={cn(
              "shrink-0 px-3 py-1 rounded-xl text-[10px] font-medium transition-all",
              activeCat === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Todos
          </button>
          {fullProtocolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={cn(
                "shrink-0 px-3 py-1 rounded-xl text-[10px] font-medium transition-all",
                activeCat === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/full-protocols/${p.id}`)}
              className={cn(
                "w-full text-left px-3 py-2.5 rounded-xl transition-all text-xs group",
                activeProtocolId === p.id
                  ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                  : "hover:bg-muted/60"
              )}
            >
              <p className="font-heading font-semibold text-[12px] leading-tight truncate">{p.title}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{catLabel(p.categoryId)}</p>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-xs text-muted-foreground py-8">Nenhum protocolo encontrado.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
