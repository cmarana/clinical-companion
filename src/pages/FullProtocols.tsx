import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import {
  ChevronRight, Search, Star, TrendingUp, ArrowDownAZ, Filter,
  Lock, Crown, X, Sparkles,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { fullProtocolCategories } from "@/data/fullProtocols";
import { fullProtocolMetas, type FullProtocolMeta } from "@/data/fullProtocols/metadata";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useTopProtocols } from "@/hooks/useTopProtocols";
import { useProtocolFavorites } from "@/hooks/useProtocolFavorites";
import { hapticLight } from "@/lib/haptics";
import { motion, AnimatePresence } from "framer-motion";

type SortKey = "popular" | "alpha" | "favorites";

const FREE_PREVIEW_PER_CAT = 5; // Free vê 5 protocolos por categoria, com badge de bloqueio nos demais
const FREE_TOTAL_LIMIT = 25;    // Limite global free

export default function FullProtocols() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const isPro = subscription.subscribed;
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCat = searchParams.get("cat") || "all";
  const initialSort = (searchParams.get("sort") as SortKey) || "popular";

  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [showFavOnly, setShowFavOnly] = useState(false);

  const { getCount, counts, loading: loadingTop } = useTopProtocols();
  const { isFavorite, toggle: toggleFav, favs } = useProtocolFavorites();

  // Sincroniza categoria/sort na URL
  useEffect(() => {
    const params: Record<string, string> = {};
    if (activeCat !== "all") params.cat = activeCat;
    if (sort !== "popular") params.sort = sort;
    setSearchParams(params, { replace: true });
  }, [activeCat, sort, setSearchParams]);

  // Contador por categoria (sempre sobre o universo total)
  const countByCat = useMemo(() => {
    const map: Record<string, number> = { all: fullProtocolMetas.length };
    fullProtocolMetas.forEach(p => { map[p.categoryId] = (map[p.categoryId] ?? 0) + 1; });
    return map;
  }, []);

  // Pipeline de filtragem + ordenação
  const filtered = useMemo(() => {
    let list: FullProtocolMeta[] =
      activeCat === "all" ? fullProtocolMetas : fullProtocolMetas.filter(p => p.categoryId === activeCat);

    if (showFavOnly) {
      list = list.filter(p => favs.has(p.id));
    }

    if (search.length >= 2) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    const sorted = [...list];
    if (sort === "alpha") {
      sorted.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
    } else if (sort === "popular") {
      sorted.sort((a, b) => {
        const diff = getCount(b.id) - getCount(a.id);
        return diff !== 0 ? diff : a.title.localeCompare(b.title, "pt-BR");
      });
    } else if (sort === "favorites") {
      sorted.sort((a, b) => {
        const fa = favs.has(a.id) ? 1 : 0;
        const fb = favs.has(b.id) ? 1 : 0;
        if (fa !== fb) return fb - fa;
        return a.title.localeCompare(b.title, "pt-BR");
      });
    }
    return sorted;
  }, [activeCat, search, sort, showFavOnly, favs, counts]);

  // Gating Pro: itens permitidos vs. bloqueados (preview)
  const { visibleItems, lockedCount } = useMemo(() => {
    if (isPro) return { visibleItems: filtered, lockedCount: 0 };

    // Free: agrupar por categoria e liberar primeiros N de cada
    if (activeCat === "all") {
      const byCat: Record<string, FullProtocolMeta[]> = {};
      filtered.forEach(p => {
        (byCat[p.categoryId] ||= []).push(p);
      });
      const open: FullProtocolMeta[] = [];
      Object.values(byCat).forEach(arr => open.push(...arr.slice(0, FREE_PREVIEW_PER_CAT)));
      const limited = open.slice(0, FREE_TOTAL_LIMIT);
      return { visibleItems: limited, lockedCount: filtered.length - limited.length };
    }
    const limited = filtered.slice(0, FREE_PREVIEW_PER_CAT);
    return { visibleItems: limited, lockedCount: filtered.length - limited.length };
  }, [filtered, isPro, activeCat]);

  const catLabel = (catId: string) =>
    fullProtocolCategories.find(c => c.id === catId)?.title || catId;

  const handleCard = (p: FullProtocolMeta) => {
    hapticLight();
    navigate(`/full-protocols/${p.id}`);
  };

  const clearFilters = () => {
    setSearch("");
    setActiveCat("all");
    setShowFavOnly(false);
    setSort("popular");
  };

  const hasActiveFilters = search.length > 0 || activeCat !== "all" || showFavOnly || sort !== "popular";

  return (
    <>
      <TopBar title="Protocolos Completos" />
      <div className="px-4 py-4 max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto space-y-4 pb-24">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h1 className="font-heading font-bold text-base lg:text-lg tracking-tight">
              Biblioteca de Protocolos
            </h1>
            <span className="text-[10px] text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full font-medium">
              {fullProtocolMetas.length} protocolos
            </span>
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Diretrizes nacionais e internacionais com 14 seções padronizadas.
          </p>
        </div>

        {/* Free banner */}
        {!isPro && (
          <button
            onClick={() => navigate("/pricing")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-amber-500/10 ring-1 ring-primary/20 hover:ring-primary/40 transition-all text-left active:scale-[0.99]"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 text-primary shrink-0">
              <Crown size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-xs">Modo Free — Pré-visualização limitada</p>
              <p className="text-[10px] text-muted-foreground">
                Veja {FREE_PREVIEW_PER_CAT} protocolos por categoria. Assine Pro para acesso total.
              </p>
            </div>
            <Sparkles size={14} className="text-primary shrink-0" />
          </button>
        )}

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar por nome, tag, sintoma..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 h-12 text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent text-muted-foreground"
              aria-label="Limpar busca"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Toolbar: ordenação + favoritos */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 bg-muted/60 rounded-xl p-0.5">
            {[
              { id: "popular" as const, label: "Mais usados", icon: TrendingUp },
              { id: "alpha" as const, label: "A–Z", icon: ArrowDownAZ },
              { id: "favorites" as const, label: "Favoritos", icon: Star },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => { hapticLight(); setSort(opt.id); }}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-heading font-semibold transition-all",
                  sort === opt.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <opt.icon size={11} /> {opt.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => { hapticLight(); setShowFavOnly(v => !v); }}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-heading font-semibold transition-all ring-1",
              showFavOnly
                ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 ring-amber-500/30"
                : "bg-card text-muted-foreground ring-border hover:text-foreground"
            )}
            title="Mostrar somente favoritos"
          >
            <Star size={11} className={showFavOnly ? "fill-current" : ""} />
            {favs.size}
          </button>
        </div>

        {/* Category pills com contador */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1">
          <CategoryPill
            label="Todos"
            count={countByCat.all}
            active={activeCat === "all"}
            onClick={() => { hapticLight(); setActiveCat("all"); }}
          />
          {fullProtocolCategories.map(cat => (
            <CategoryPill
              key={cat.id}
              label={cat.title}
              count={countByCat[cat.id] ?? 0}
              active={activeCat === cat.id}
              onClick={() => { hapticLight(); setActiveCat(cat.id); }}
            />
          ))}
        </div>

        {/* Resumo do filtro */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground px-1">
          <span>
            <strong className="text-foreground">{visibleItems.length}</strong>
            {lockedCount > 0 && <span className="text-amber-600 dark:text-amber-400"> + {lockedCount} bloqueados</span>}
            {" "}de {filtered.length}
          </span>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 text-primary hover:underline">
              <X size={10} /> Limpar filtros
            </button>
          )}
        </div>

        {/* List - responsive grid */}
        <div className="space-y-2.5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 md:space-y-0">
          <AnimatePresence mode="popLayout">
            {visibleItems.map(p => {
              const count = getCount(p.id);
              const fav = isFavorite(p.id);
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <HoverCard openDelay={300} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div
                        onClick={() => handleCard(p)}
                        className="cursor-pointer bg-card rounded-[20px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0 hover:ring-1 hover:ring-primary/20 group"
                      >
                        <div className="flex items-center justify-between p-4 gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="font-heading font-semibold text-sm truncate">{p.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] text-muted-foreground truncate">
                                {catLabel(p.categoryId)}
                              </span>
                              {count > 0 && (
                                <span className="flex items-center gap-0.5 text-[9px] text-primary font-medium">
                                  <TrendingUp size={9} /> {count}×
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleFav(p.id, p.title, p.categoryId); }}
                            className={cn(
                              "p-1.5 rounded-lg transition-all opacity-60 hover:opacity-100 hover:bg-accent",
                              fav && "opacity-100"
                            )}
                            aria-label={fav ? "Remover favorito" : "Favoritar"}
                          >
                            <Star
                              size={14}
                              className={fav ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}
                            />
                          </button>
                          <ChevronRight size={16} className="text-muted-foreground shrink-0" />
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent side="right" align="start" className="w-72 p-3 hidden md:block">
                      <p className="font-display font-semibold text-sm mb-1.5">{p.title}</p>
                      <p className="text-[10px] text-muted-foreground mb-2">{catLabel(p.categoryId)}</p>
                      {p.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {p.tags.slice(0, 6).map(tag => (
                            <span key={tag} className="text-[9px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                      )}
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Estado vazio */}
          {visibleItems.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 gap-2 text-center">
              <Filter size={28} className="text-muted-foreground/50" />
              <p className="text-sm font-heading font-semibold">Nenhum protocolo encontrado</p>
              <p className="text-xs text-muted-foreground max-w-xs">
                {showFavOnly ? "Você ainda não favoritou protocolos nesta categoria." : "Tente outra busca ou limpe os filtros."}
              </p>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="mt-2 text-xs text-primary hover:underline font-medium">
                  Limpar filtros
                </button>
              )}
            </div>
          )}
        </div>

        {/* Free → CTA bloqueio */}
        {!isPro && lockedCount > 0 && (
          <button
            onClick={() => navigate("/pricing")}
            className="w-full mt-2 flex items-center gap-3 px-4 py-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98]"
          >
            <Lock size={18} />
            <div className="flex-1 text-left">
              <p className="font-heading font-bold text-sm">+{lockedCount} protocolos bloqueados</p>
              <p className="text-[11px] opacity-90">Desbloqueie a biblioteca completa com Pro</p>
            </div>
            <ChevronRight size={16} />
          </button>
        )}

        {loadingTop && sort === "popular" && (
          <p className="text-center text-[10px] text-muted-foreground">Carregando ranking de mais acessados…</p>
        )}
      </div>
    </>
  );
}

function CategoryPill({
  label, count, active, onClick,
}: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-heading font-medium transition-all duration-200 active:scale-[0.97]",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-card text-secondary-foreground shadow-sm hover:bg-accent"
      )}
    >
      <span>{label}</span>
      <span className={cn(
        "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
        active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
      )}>
        {count}
      </span>
    </button>
  );
}
