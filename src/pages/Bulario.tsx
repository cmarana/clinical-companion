import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Pill, ShieldCheck, Baby, Heart, Loader2, Upload } from "lucide-react";
import { type BularioFilters, INITIAL_FILTERS } from "@/types/bulario";
import BularioFilterBar from "@/components/BularioFilterBar";
import { useBularioInfiniteList, useBularioCount } from "@/hooks/useBularioMedications";
import { Button } from "@/components/ui/button";
import type { MedicationImportItem } from "@/data/medicationsData";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// Lazy-load the heavy medications data (45K+ lines) only when needed
let _cachedMedsData: MedicationImportItem[] | null = null;
async function loadMedicationsData(): Promise<MedicationImportItem[]> {
  if (_cachedMedsData) return _cachedMedsData;
  const mod = await import("@/data/medicationsData");
  _cachedMedsData = mod.allMedicationsData;
  return _cachedMedsData;
}

export default function Bulario() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<BularioFilters>(INITIAL_FILTERS);
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useBularioInfiniteList(filters);
  const { data: totalCount = 0 } = useBularioCount();
  const [importing, setImporting] = useState(false);
  const [medsCount, setMedsCount] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const medications = data?.pages.flatMap((p) => p.items) ?? [];

  // Infinite scroll sentinel
  const sentinelRef = useRef<HTMLDivElement>(null);
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleObserver]);

  const handleImport = async () => {
    if (allMedicationsData.length === 0) {
      toast.info("Nenhum medicamento para importar.");
      return;
    }
    setImporting(true);
    try {
      const result = await importFromArray(allMedicationsData);
      if (result.errors.length > 0) {
        toast.error(`Erros: ${result.errors.join(", ")}`);
      } else {
        toast.success(`${result.imported} medicamentos importados com sucesso!`);
      }
      queryClient.invalidateQueries({ queryKey: ["bulario-infinite"] });
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
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <p className="text-[11px] text-muted-foreground">
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
              {allMedicationsData.length > 0
                ? `${allMedicationsData.length} medicamentos prontos para importar.`
                : "A base de medicamentos será adicionada em breve."}
            </p>
            {allMedicationsData.length > 0 && (
              <Button onClick={handleImport} disabled={importing} size="sm" className="gap-2">
                {importing ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                {importing ? "Importando..." : `Importar ${allMedicationsData.length} medicamentos`}
              </Button>
            )}
          </div>
        )}

        {!isLoading && totalCount > 0 && totalCount < allMedicationsData.length && (
          <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
            <p className="text-xs text-muted-foreground">
              {totalCount} de {allMedicationsData.length} medicamentos importados.
            </p>
            <Button onClick={handleImport} disabled={importing} size="sm" variant="outline" className="gap-2">
              {importing ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
              {importing ? "Importando..." : "Importar restantes"}
            </Button>
          </div>
        )}

        {!isLoading && medications.length === 0 && totalCount > 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">Nenhum medicamento encontrado com esses filtros.</p>
          </div>
        )}

        <div className="space-y-2.5">
          {medications.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/bulario/${m.id}`)}
              className="cursor-pointer bg-card rounded-[20px] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border-0"
            >
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Pill size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-[13px] truncate">{m.nome}</p>
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
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        <div ref={sentinelRef} className="h-4" />
        {isFetchingNextPage && (
          <div className="flex items-center justify-center py-4">
            <Loader2 size={20} className="animate-spin text-muted-foreground" />
            <span className="ml-2 text-xs text-muted-foreground">Carregando mais...</span>
          </div>
        )}
        {!hasNextPage && medications.length > 0 && !isLoading && (
          <p className="text-center text-xs text-muted-foreground py-2">
            Todos os {medications.length} medicamentos carregados
          </p>
        )}
      </div>
    </>
  );
}
