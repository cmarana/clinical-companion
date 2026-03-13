import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Pill, ShieldCheck, Baby, Heart } from "lucide-react";
import { type BularioFilters, INITIAL_FILTERS } from "@/types/bulario";
import { bularioMedications } from "@/data/bularioMedications";
import BularioFilterBar from "@/components/BularioFilterBar";
import { cn } from "@/lib/utils";

export default function Bulario() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<BularioFilters>(INITIAL_FILTERS);

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim();
    return bularioMedications.filter((m) => {
      if (q) {
        const haystack = `${m.name} ${m.activeIngredient} ${m.drugClass} ${m.category} ${m.brandNames.join(" ")} ${m.tags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.drugClass && m.drugClass !== filters.drugClass) return false;
      if (filters.category && m.category !== filters.category) return false;
      if (filters.dosageForm && m.dosageForm !== filters.dosageForm) return false;
      if (filters.route && m.route !== filters.route) return false;
      if (filters.controlled === true && !m.controlled) return false;
      if (filters.pediatric === true && !m.pediatric) return false;
      if (filters.pregnancySafe === true && !m.pregnancySafe) return false;
      return true;
    });
  }, [filters]);

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
          totalCount={bularioMedications.length}
          filteredCount={filtered.length}
        />

        {filtered.length === 0 && bularioMedications.length === 0 && (
          <div className="text-center py-16 space-y-2">
            <Pill size={32} className="mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-heading">Bulário em construção</p>
            <p className="text-xs text-muted-foreground">
              A base de medicamentos será adicionada em breve.<br />
              A estrutura já suporta 10.000+ medicamentos.
            </p>
          </div>
        )}

        {filtered.length === 0 && bularioMedications.length > 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">Nenhum medicamento encontrado com esses filtros.</p>
          </div>
        )}

        <div className="space-y-1.5">
          {filtered.map((m) => (
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
                  <p className="font-heading font-semibold text-sm truncate">{m.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {m.activeIngredient} · {m.drugClass}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {m.controlled && <ShieldCheck size={12} className="text-destructive" />}
                  {m.pediatric && <Baby size={12} className="text-primary" />}
                  {m.pregnancySafe && <Heart size={12} className="text-success" />}
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
