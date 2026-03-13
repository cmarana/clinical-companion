import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Pill, ShieldCheck, Baby, Heart, Loader2, Upload } from "lucide-react";
import { type BularioFilters, INITIAL_FILTERS } from "@/types/bulario";
import BularioFilterBar from "@/components/BularioFilterBar";
import { useBularioList, useBularioCount } from "@/hooks/useBularioMedications";
import { Button } from "@/components/ui/button";
import { importFromArray } from "@/lib/bularioImporter";
import { medicationsData } from "@/data/medicationsData";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Bulario() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<BularioFilters>(INITIAL_FILTERS);
  const { data: medications = [], isLoading } = useBularioList(filters);
  const { data: totalCount = 0 } = useBularioCount();
  const [importing, setImporting] = useState(false);
  const queryClient = useQueryClient();

  const handleImport = async () => {
    if (medicationsData.length === 0) {
      toast.info("Nenhum medicamento para importar.");
      return;
    }
    setImporting(true);
    try {
      const result = await importFromArray(medicationsData);
      if (result.errors.length > 0) {
        toast.error(`Erros: ${result.errors.join(", ")}`);
      } else {
        toast.success(`${result.imported} medicamentos importados com sucesso!`);
      }
      queryClient.invalidateQueries({ queryKey: ["bulario"] });
      queryClient.invalidateQueries({ queryKey: ["bulario-count"] });
    } catch {
      toast.error("Erro ao importar medicamentos.");
    } finally {
      setImporting(false);
    }
  };

  return (
    <>
      <TopBar title="Bulário" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        <p className="text-xs text-muted-foreground">
          Bulário profissional completo — pesquise por nome, princípio ativo, classe ou categoria.
        </p>

        <BularioFilterBar
          filters={filters}
          onChange={setFilters}
          totalCount={totalCount}
          filteredCount={medications.length}
        />

        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 size={24} className="animate-spin text-muted-foreground" />
          </div>
        )}

        {!isLoading && medications.length === 0 && totalCount === 0 && (
          <div className="text-center py-16 space-y-3">
            <Pill size={32} className="mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-heading">Bulário em construção</p>
            <p className="text-xs text-muted-foreground">
              {medicationsData.length > 0
                ? `${medicationsData.length} medicamentos prontos para importar.`
                : "A base de medicamentos será adicionada em breve."}
            </p>
            {medicationsData.length > 0 && (
              <Button onClick={handleImport} disabled={importing} size="sm" className="gap-2">
                {importing ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                {importing ? "Importando..." : `Importar ${medicationsData.length} medicamentos`}
              </Button>
            )}
          </div>
        )}

        {!isLoading && medications.length === 0 && totalCount > 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">Nenhum medicamento encontrado com esses filtros.</p>
          </div>
        )}

        <div className="space-y-1.5">
          {medications.map((m) => (
            <Card
              key={m.id}
              onClick={() => navigate(`/bulario/${m.id}`)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center gap-3 p-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                  <Pill size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-sm truncate">{m.nome}</p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {m.principio_ativo} · {m.classe}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {m.controlado && <ShieldCheck size={12} className="text-destructive" />}
                  {m.pediatria && <Baby size={12} className="text-primary" />}
                  {m.gestacao_seguro && <Heart size={12} className="text-success" />}
                  <ChevronRight size={14} className="text-muted-foreground ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
