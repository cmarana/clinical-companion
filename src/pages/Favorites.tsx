import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/contexts/FavoritesContext";
import { FileText, Pill, Star, ClipboardList, FolderOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    f.type === "protocol" ? `/protocols/${f.id}` : f.type === "prescription" ? `/prescriptions/${f.id}` : `/medications/${f.id}`;

  return (
    <>
      <TopBar title="Favoritos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        {favorites.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Star size={40} className="mx-auto text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Nenhum favorito salvo ainda.</p>
            <p className="text-muted-foreground text-xs">Toque na estrela em protocolos, prescrições ou medicamentos para salvar.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">{favorites.length} favorito{favorites.length !== 1 ? "s" : ""} em {specialties.length} pasta{specialties.length !== 1 ? "s" : ""}</p>

            {specialties.map((spec) => {
              const items = grouped[spec] || [];
              const isOpen = !collapsed[spec];
              return (
                <div key={spec} className="rounded-2xl border bg-card overflow-hidden">
                  <button
                    onClick={() => toggle(spec)}
                    className="w-full flex items-center gap-3 p-3.5 hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FolderOpen size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-heading font-semibold text-sm">{spec}</p>
                      <p className="text-[10px] text-muted-foreground">{items.length} item{items.length !== 1 ? "s" : ""}</p>
                    </div>
                    {isOpen ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
                  </button>

                  {isOpen && (
                    <div className="border-t">
                      {items.map((f) => (
                        <div key={f.id} className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-accent/30 transition-colors">
                          <button
                            onClick={() => navigate(getPath(f))}
                            className="flex items-center gap-3 flex-1 min-w-0"
                          >
                            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                              {typeIcon(f.type)}
                            </div>
                            <div className="min-w-0">
                              <p className="font-heading font-medium text-xs truncate">{f.title}</p>
                              <p className="text-[10px] text-muted-foreground">{typeLabel(f.type)}</p>
                            </div>
                          </button>
                          <button
                            onClick={() => toggleFavorite(f)}
                            className="p-1.5 rounded-md hover:bg-accent transition-colors shrink-0"
                          >
                            <Star size={14} className="fill-warning text-warning" />
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
