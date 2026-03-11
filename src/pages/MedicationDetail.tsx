import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { medications } from "@/data/medications";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PremiumGate, { PremiumBadge } from "@/components/PremiumGate";
import { FREE_MEDICATION_IDS } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PremiumGate, { PremiumBadge } from "@/components/PremiumGate";

const allSections = [
  { key: "indication" as const, label: "Indicação" },
  { key: "dose" as const, label: "Dose" },
  { key: "dilution" as const, label: "Diluição" },
  { key: "administration" as const, label: "Administração" },
  { key: "precautions" as const, label: "Precauções" },
];

export default function MedicationDetail() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { subscription } = useAuth();
  const med = medications.find((m) => m.id === id);

  if (!med) {
    return (
      <>
        <TopBar title="Medicamento" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">Medicamento não encontrado.</div>
      </>
    );
  }

  const fav = isFavorite(med.id);
  const isPremium = subscription.subscribed;

  return (
    <>
      <TopBar
        title={med.name}
        rightContent={
          <button
            onClick={() => toggleFavorite({ id: med.id, type: "medication", title: med.name })}
            className="p-1.5 rounded-md hover:bg-accent transition-colors"
          >
            <Star size={18} className={cn(fav ? "fill-warning text-warning" : "text-muted-foreground")} />
          </button>
        }
      />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-3">
        {!isPremium && (
          <div className="flex items-center gap-2">
            <PremiumBadge />
            <span className="text-xs text-muted-foreground">Conteúdo completo requer assinatura</span>
          </div>
        )}

        {/* Free users only see indication preview */}
        {!isPremium ? (
          <>
            <Card>
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-sm font-heading">Indicação</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-sm leading-relaxed">{med.indication.split("\n")[0]}</p>
                {med.indication.split("\n").length > 1 && (
                  <p className="text-xs text-muted-foreground mt-1">...</p>
                )}
              </CardContent>
            </Card>

            {allSections.filter(s => s.key !== "indication").map((s) => (
              <Card key={s.key} className="opacity-60">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-sm font-heading flex items-center gap-2">
                    🔒 {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="h-12 bg-muted/50 rounded flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Conteúdo premium</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <PremiumGate />
          </>
        ) : (
          <>
            {allSections.map((s) => (
              <Card key={s.key}>
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-sm font-heading">{s.label}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  {med[s.key].split("\n").map((line, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-1">{line}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </>
        )}

        <div className="flex flex-wrap gap-1.5 pt-2">
          {med.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-heading">
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
