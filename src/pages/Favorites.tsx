import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/contexts/FavoritesContext";
import { FileText, Pill, Star, ClipboardList } from "lucide-react";

export default function Favorites() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <TopBar title="Favoritos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4">
        {favorites.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Star size={40} className="mx-auto text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Nenhum favorito salvo ainda.</p>
            <p className="text-muted-foreground text-xs">Toque na estrela em protocolos, prescrições ou medicamentos para salvar.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {favorites.map((f) => (
              <Card
                key={f.id}
                className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
              >
                <CardContent className="flex items-center gap-3 p-3.5">
                  <div
                    onClick={() => navigate(f.type === "protocol" ? `/protocols/${f.id}` : f.type === "prescription" ? `/prescriptions/${f.id}` : `/medications/${f.id}`)}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                      {f.type === "protocol" ? <FileText size={16} /> : f.type === "prescription" ? <ClipboardList size={16} /> : <Pill size={16} />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-semibold text-sm">{f.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{f.type === "protocol" ? "Protocolo" : f.type === "prescription" ? "Prescrição" : "Medicamento"}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(f)}
                    className="p-1.5 rounded-md hover:bg-accent transition-colors"
                  >
                    <Star size={16} className="fill-warning text-warning" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
