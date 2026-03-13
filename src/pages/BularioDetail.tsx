import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useBularioDetail } from "@/hooks/useBularioMedications";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Star, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import DrugInteractionAlert from "@/components/DrugInteractionAlert";

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
  const { data: med, isLoading } = useBularioDetail(id);

  if (isLoading) {
    return (
      <>
        <TopBar title="Bulário" />
        <div className="flex items-center justify-center h-64">
          <Loader2 size={24} className="animate-spin text-muted-foreground" />
        </div>
      </>
    );
  }

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
        title={med.nome}
        rightContent={
          <button
            onClick={() => toggleFavorite({ id: med.id, type: "medication", title: med.nome })}
            className="p-1.5 rounded-md hover:bg-accent transition-colors"
          >
            <Star size={18} className={cn(fav ? "fill-warning text-warning" : "text-muted-foreground")} />
          </button>
        }
      />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        {/* Header badges */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">{med.classe}</Badge>
          {med.subclasse && <Badge variant="outline">{med.subclasse}</Badge>}
          <Badge variant="outline">{med.categoria}</Badge>
          <Badge variant="outline">{med.forma_farmaceutica} — {med.via}</Badge>
          {med.controlado && <Badge variant="destructive">Controlado</Badge>}
          {med.receituario && (
            <Badge variant="outline" className="border-warning text-warning-foreground">
              {med.receituario}
            </Badge>
          )}
          {med.categoria_anvisa && (
            <Badge variant="outline">ANVISA: {med.categoria_anvisa}</Badge>
          )}
        </div>

        {/* Brand names */}
        {med.nomes_comerciais.length > 0 && (
          <p className="text-xs text-muted-foreground">
            <span className="font-heading font-semibold">Nomes comerciais:</span>{" "}
            {med.nomes_comerciais.join(", ")}
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

          <TabsContent value="principal" className="space-y-3 mt-3">
            <Section title="Mecanismo de ação" content={med.mecanismo} />
            <Section title="Indicações" content={med.indicacoes} />
            <Section title="Contraindicações" content={med.contraindicacoes} />
            <Section title="Observações clínicas" content={med.observacoes} />
          </TabsContent>

          <TabsContent value="posologia" className="space-y-3 mt-3">
            <Section title="Posologia adulto" content={med.posologia_adulto} />
            <Section title="Posologia pediátrica" content={med.posologia_pediatrica} />
            <Section title="Ajuste renal" content={med.ajuste_renal} />
            <Section title="Ajuste hepático" content={med.ajuste_hepatico} />
            <Section title="Apresentações" content={med.apresentacoes} />
          </TabsContent>

          <TabsContent value="cuidados" className="space-y-3 mt-3">
            <Section title="Efeitos adversos" content={med.efeitos_adversos} />
            <Section title="Uso na gestação" content={med.gestacao} />
            <Section title="Uso na lactação" content={med.lactacao} />
            <Section title="Uso em idosos" content={med.idoso} />
            <Section title="Monitorização" content={med.monitorizacao} />
          </TabsContent>

          <TabsContent value="interacoes" className="space-y-3 mt-3">
            <Section title="Interações medicamentosas" content={med.interacoes} />
          </TabsContent>

          <TabsContent value="diluicao" className="space-y-3 mt-3">
            <Section title="Diluição EV" content={med.diluicao_ev} />
            <Section title="Compatibilidade" content={med.compatibilidade_ev} />
          </TabsContent>

          <TabsContent value="referencias" className="space-y-3 mt-3">
            <Section title="Referências" content={med.referencias} />
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
