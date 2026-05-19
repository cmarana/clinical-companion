import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/contexts/FavoritesContext";
import { FileText, Pill, Star, ClipboardList, FolderOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { GRADIENT_DEEP_BLUE } from "@/lib/design-tokens";

export default function Favorites() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, grouped, specialties } = useFavorites();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (s: string) => setCollapsed((p) => ({ ...p, [s]: !p[s] }));

  const typeIcon = (type: string) =>
    type === "protocol" ? <FileText size={14} /> : type === "prescription" ? <ClipboardList size={14} /> : <Pill size={14} />;

  const typeLabel = (type: string) =>
    type === "protocol" ? "Protocolo" : type === "prescription" ? "Prescrição" : "Medicamento";

  const getPath = (f: { type: string; id: string }) =>
    f.type === "protocol" ? `/full-protocols/${f.id}`
    : f.type === "prescription" ? `/prescriptions/${f.id}`
    : f.type === "medication" ? `/bulario/${f.id}`
    : `/bulario/${f.id}`;

  return (
    <>
      <TopBar title="Favoritos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        {favorites.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto">
              <Star size={28} className="text-destructive/70" />
            </div>
            <div className="space-y-1">
              <p className="font-heading font-semibold text-sm">Nenhum favorito ainda</p>
              <p className="text-muted-foreground text-xs max-w-[260px] mx-auto">Toque na ⭐ em protocolos, prescrições ou medicamentos para acessar rapidamente aqui.</p>
            </div>
            <div className="flex gap-2 justify-center">
              <button onClick={() => navigate("/full-protocols")} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-heading font-medium">
                Explorar Protocolos
              </button>
              <button onClick={() => navigate("/bulario")} className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-xs font-heading font-medium">
                Ver Medicações
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">{favorites.length} favorito{favorites.length !== 1 ? "s" : ""} em {specialties.length} pasta{specialties.length !== 1 ? "s" : ""}</p>

            {specialties.map((spec) => {
              const items = grouped[spec] || [];
              const isOpen = !collapsed[spec];
              return (
                <div
                  key={spec}
                  className="rounded-2xl overflow-hidden text-white shadow-md ring-1 ring-white/15"
                  style={{ background: GRADIENT_DEEP_BLUE }}
                >
                  <button
                    onClick={() => toggle(spec)}
                    className="w-full flex items-center gap-3 p-3.5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                      <FolderOpen size={16} className="text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-heading font-semibold text-sm text-white">{spec}</p>
                      <p className="text-[10px] text-white/76">{items.length} item{items.length !== 1 ? "s" : ""}</p>
                    </div>
                    {isOpen ? <ChevronDown size={16} className="text-white/78" /> : <ChevronRight size={16} className="text-white/78" />}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/15">
                      {items.map((f) => (
                        <div key={f.id} className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-white/10 transition-colors">
                          <button
                            onClick={() => navigate(getPath(f))}
                            className="flex items-center gap-3 flex-1 min-w-0"
                          >
                            <div className="w-7 h-7 rounded-md bg-white/15 ring-1 ring-white/20 flex items-center justify-center text-white shrink-0">
                              {typeIcon(f.type)}
                            </div>
                            <div className="min-w-0">
                              <p className="font-heading font-medium text-xs text-white truncate">{f.title}</p>
                              <p className="text-[10px] text-white/74">{typeLabel(f.type)}</p>
                            </div>
                          </button>
                          <button
                            onClick={() => toggleFavorite(f)}
                            className="p-1.5 rounded-md hover:bg-accent transition-colors shrink-0"
                          >
                            <Star size={14} className="fill-destructive text-destructive" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
