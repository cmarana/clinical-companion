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

  // Só carrega a base local pesada se o banco ainda estiver vazio.
  useEffect(() => {
    if (totalCount > 0 || medsCount !== null) return;
    loadMedicationsData().then(d => setMedsCount(d.length));
  }, [totalCount, medsCount]);

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
    const medsData = await loadMedicationsData();
    if (medsData.length === 0) {
      toast.info("Nenhum medicamento para importar.");
      return;
    }
    setImporting(true);
    try {
      const { importFromArray } = await import("@/lib/bularioImporter");
      const result = await importFromArray(medsData);
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
              {medsCount && medsCount > 0
                ? `${medsCount} medicamentos prontos para importar.`
                : "A base de medicamentos será adicionada em breve."}
            </p>
            {medsCount && medsCount > 0 && (
              <Button onClick={handleImport} disabled={importing} size="sm" className="gap-2">
                {importing ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                {importing ? "Importando..." : `Importar ${medsCount} medicamentos`}
              </Button>
            )}
          </div>
        )}

        {!isLoading && totalCount > 0 && medsCount !== null && totalCount < medsCount && (
          <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 ring-1 ring-primary/15">
            <p className="text-xs text-muted-foreground">
              {totalCount} de {medsCount} medicamentos importados.
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

        <div className="space-y-2">
          {medications.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/bulario/${m.id}`)}
              className="cursor-pointer relative overflow-hidden rounded-2xl bg-card ring-1 ring-border hover:ring-primary/30 shadow-sm hover:shadow-md active:scale-[0.99] transition-all"
            >
              <span aria-hidden className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
              <div className="relative flex items-center gap-3 px-3.5 py-3 pl-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Pill size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-[12.5px] text-foreground truncate">{m.nome}</p>
                  <p className="text-[10.5px] text-muted-foreground truncate">
                    {m.principio_ativo} · {m.classe}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
                  {m.controlado && <ShieldCheck size={11} />}
                  {m.pediatria && <Baby size={11} />}
                  {m.gestacao_seguro && <Heart size={11} />}
                  <ChevronRight size={13} className="text-primary ml-1" />
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
