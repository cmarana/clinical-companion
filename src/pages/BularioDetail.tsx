import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { bularioMedications } from "@/data/bularioMedications";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

/** Section helper — only renders if content is non-empty */
function Section({ title, content }: { title: string; content?: string }) {
  if (!content) return null;
  return (
    <Card>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-sm font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {content.split("\n").map((line, i) => (
          <p key={i} className="text-sm leading-relaxed mb-1">{line}</p>
        ))}
      </CardContent>
    </Card>
  );
}

export default function BularioDetail() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const med = bularioMedications.find((m) => m.id === id);

  if (!med) {
    return (
      <>
        <TopBar title="Bulário" />
        <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
          Medicamento não encontrado.
        </div>
      </>
    );
  }

  const fav = isFavorite(med.id);

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
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        {/* Header badges */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">{med.drugClass}</Badge>
          <Badge variant="outline">{med.category}</Badge>
          <Badge variant="outline">{med.dosageForm} — {med.route}</Badge>
          {med.controlled && <Badge variant="destructive">Controlado</Badge>}
          {med.prescriptionType && (
            <Badge variant="outline" className="border-warning text-warning-foreground">
              {med.prescriptionType}
            </Badge>
          )}
          {med.anvisaCategory && (
            <Badge variant="outline">ANVISA: {med.anvisaCategory}</Badge>
          )}
        </div>

        {/* Brand names */}
        {med.brandNames.length > 0 && (
          <p className="text-xs text-muted-foreground">
            <span className="font-heading font-semibold">Nomes comerciais:</span>{" "}
            {med.brandNames.join(", ")}
          </p>
        )}

        {/* Tabbed content */}
        <Tabs defaultValue="principal" className="w-full">
          <TabsList className="w-full grid grid-cols-3 lg:grid-cols-6 h-auto">
            <TabsTrigger value="principal" className="text-xs py-2">Principal</TabsTrigger>
            <TabsTrigger value="posologia" className="text-xs py-2">Posologia</TabsTrigger>
            <TabsTrigger value="cuidados" className="text-xs py-2">Cuidados</TabsTrigger>
            <TabsTrigger value="interacoes" className="text-xs py-2">Interações</TabsTrigger>
            <TabsTrigger value="diluicao" className="text-xs py-2">Diluição</TabsTrigger>
            <TabsTrigger value="referencias" className="text-xs py-2">Referências</TabsTrigger>
          </TabsList>

          {/* TAB: Principal */}
          <TabsContent value="principal" className="space-y-3 mt-3">
            <Section title="Mecanismo de ação" content={med.mechanismOfAction} />
            <Section title="Indicações" content={med.indications} />
            <Section title="Contraindicações" content={med.contraindications} />
            <Section title="Observações clínicas" content={med.clinicalNotes} />
          </TabsContent>

          {/* TAB: Posologia */}
          <TabsContent value="posologia" className="space-y-3 mt-3">
            <Section title="Posologia adulto" content={med.adultDosage} />
            <Section title="Posologia pediátrica" content={med.pediatricDosage} />
            <Section title="Ajuste renal" content={med.renalAdjustment} />
            <Section title="Ajuste hepático" content={med.hepaticAdjustment} />
            <Section title="Apresentações" content={med.presentations} />
          </TabsContent>

          {/* TAB: Cuidados */}
          <TabsContent value="cuidados" className="space-y-3 mt-3">
            <Section title="Efeitos adversos" content={med.adverseEffects} />
            <Section title="Uso na gestação" content={med.pregnancyUse} />
            <Section title="Uso na lactação" content={med.lactationUse} />
            <Section title="Uso em idosos" content={med.elderlyUse} />
            <Section title="Monitorização" content={med.monitoring} />
          </TabsContent>

          {/* TAB: Interações */}
          <TabsContent value="interacoes" className="space-y-3 mt-3">
            <Section title="Interações medicamentosas" content={med.interactions} />
          </TabsContent>

          {/* TAB: Diluição */}
          <TabsContent value="diluicao" className="space-y-3 mt-3">
            <Section title="Diluição EV" content={med.ivDilution} />
            <Section title="Compatibilidade" content={med.compatibility} />
          </TabsContent>

          {/* TAB: Referências */}
          <TabsContent value="referencias" className="space-y-3 mt-3">
            <Section title="Referências" content={med.references} />
          </TabsContent>
        </Tabs>

        {/* Tags */}
        {med.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {med.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-heading">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
