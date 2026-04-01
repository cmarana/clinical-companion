import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Search, Baby, AlertTriangle, Scale, Pill, Clock, Syringe, ChevronDown, ChevronUp, Shield, Info } from "lucide-react";
import { pediatricDrugs, calculatePediatricDose, getPediatricCategories, type CalculatedDose, type PediatricDrug } from "@/data/pediatricDoses";
import { cn } from "@/lib/utils";

function DrugResultCard({ drug, weight }: { drug: PediatricDrug; weight: number }) {
  const [expanded, setExpanded] = useState(false);
  const calc = useMemo(() => calculatePediatricDose(drug, weight), [drug, weight]);

  const hasDoseByWeight = drug.dosePerKg > 0;

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-3 text-left hover:bg-accent/30 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-heading font-bold text-sm">{drug.name}</h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{drug.category}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{drug.indication}</p>
          {hasDoseByWeight && (
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-sm font-bold text-primary">{calc.singleDoseCapped}mg</span>
              <span className="text-xs text-muted-foreground">{drug.frequency} • {drug.route}</span>
              {calc.isCapped && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-medium flex items-center gap-0.5">
                  <AlertTriangle size={10} /> Dose máx
                </span>
              )}
            </div>
          )}
        </div>
        {expanded ? <ChevronUp size={16} className="text-muted-foreground shrink-0 mt-1" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0 mt-1" />}
      </button>

      {expanded && (
        <div className="px-3 pb-3 space-y-3 border-t border-border pt-3">
          {/* Dose calculation */}
          {hasDoseByWeight && (
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary/5 rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Dose/kg</p>
                <p className="text-sm font-bold text-primary">
                  {drug.dosePerKg}{drug.dosePerKgMax ? `-${drug.dosePerKgMax}` : ""}mg/kg
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Para {weight}kg</p>
                <p className="text-sm font-bold text-primary">{calc.singleDoseCapped}mg/dose</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Frequência</p>
                <p className="text-sm font-semibold flex items-center justify-center gap-1"><Clock size={12} /> {drug.frequency}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Dose diária</p>
                <p className="text-sm font-semibold">{calc.dailyDoseMg}mg/dia</p>
              </div>
            </div>
          )}

          {/* Volumes for liquid formulations */}
          {calc.formulations.length > 0 && (
            <div>
              <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Syringe size={12} /> Volume por dose
              </h5>
              <div className="space-y-1">
                {calc.formulations.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                    <span className="text-xs text-muted-foreground">{f.form}</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{f.volume}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All formulations */}
          <div>
            <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Pill size={12} /> Apresentações
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {drug.formulations.map((f, i) => (
                <span key={i} className="text-[11px] px-2 py-1 rounded-lg bg-muted/60 border border-border/50">{f.form}</span>
              ))}
            </div>
          </div>

          {/* Notes */}
          {drug.notes && (
            <div className="bg-blue-500/5 border border-blue-500/15 rounded-lg p-2.5">
              <p className="text-xs leading-relaxed text-foreground/80 flex gap-1.5">
                <Info size={12} className="text-blue-500 shrink-0 mt-0.5" />
                <span>{drug.notes}</span>
              </p>
            </div>
          )}

          {/* Age restriction */}
          {drug.ageRestriction && (
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
              <Baby size={12} /> Idade mínima: {drug.ageRestriction}
            </div>
          )}

          {/* Renal adjust */}
          {drug.renalAdjust && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield size={12} /> {drug.renalAdjust}
            </div>
          )}

          {/* Warnings */}
          {calc.warnings.length > 0 && (
            <div className="bg-destructive/5 border border-destructive/15 rounded-lg p-2.5">
              <h5 className="text-xs font-bold text-destructive mb-1 flex items-center gap-1">
                <AlertTriangle size={12} /> Alertas
              </h5>
              <ul className="space-y-0.5">
                {calc.warnings.map((w, i) => (
                  <li key={i} className="text-[11px] text-destructive/80 flex gap-1.5">
                    <span>•</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PediatricDoseCalculator() {
  const [weight, setWeight] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => getPediatricCategories(), []);
  const weightNum = parseFloat(weight) || 0;

  const filteredDrugs = useMemo(() => {
    let drugs = pediatricDrugs;

    if (selectedCategory) {
      drugs = drugs.filter(d => d.category === selectedCategory);
    }

    if (search.length >= 2) {
      const q = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      drugs = drugs.filter(d => {
        const searchable = [d.name, d.category, d.indication, ...(d.formulations.map(f => f.form))]
          .join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return searchable.includes(q);
      });
    }

    return drugs;
  }, [search, selectedCategory]);

  return (
    <>
      <TopBar title="Doses Pediátricas" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        {/* Weight input */}
        <div className="bg-card border border-border rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Scale size={16} className="text-primary" />
            <label className="font-heading font-bold text-sm">Peso do paciente</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={e => {
                const val = e.target.value;
                if (val === "" || (parseFloat(val) >= 0 && parseFloat(val) <= 200)) {
                  setWeight(val);
                }
              }}
              placeholder="Ex: 12.5"
              className="flex-1 px-3 py-2.5 rounded-xl border border-border bg-background text-lg font-bold text-center focus:outline-none focus:ring-2 focus:ring-primary/30"
              min="0"
              max="200"
              step="0.1"
            />
            <span className="text-sm font-medium text-muted-foreground">kg</span>
          </div>
          {weightNum > 0 && weightNum < 1 && (
            <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1.5 flex items-center gap-1">
              <AlertTriangle size={10} /> Peso muito baixo — verifique se está em kg
            </p>
          )}
          {weightNum > 100 && (
            <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1.5 flex items-center gap-1">
              <AlertTriangle size={10} /> Peso elevado para paciente pediátrico — considere doses de adulto
            </p>
          )}
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar medicamento..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Category filter */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 mb-4 pb-1">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "shrink-0 text-[11px] px-2.5 py-1.5 rounded-full font-medium transition-colors",
              !selectedCategory ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            )}
          >
            Todos ({pediatricDrugs.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={cn(
                "shrink-0 text-[11px] px-2.5 py-1.5 rounded-full font-medium transition-colors",
                selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {weightNum <= 0 ? (
          <div className="text-center py-12">
            <Baby size={40} className="mx-auto text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">Informe o peso para calcular as doses</p>
            <p className="text-xs text-muted-foreground/60 mt-1">As doses serão ajustadas automaticamente</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-2">
              {filteredDrugs.length} medicamento(s) • Peso: {weightNum}kg
            </p>
            {filteredDrugs.map(drug => (
              <DrugResultCard key={drug.id} drug={drug} weight={weightNum} />
            ))}
            {filteredDrugs.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                Nenhum medicamento encontrado
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-6 p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl">
          <p className="text-[10px] text-amber-600 dark:text-amber-400 leading-relaxed">
            ⚠️ <strong>Aviso:</strong> As doses calculadas são referências baseadas em guidelines (Nelson, SBP, PALS). 
            Sempre confirme a dose para o caso clínico específico, considere ajustes para idade gestacional, 
            função renal/hepática e interações medicamentosas. Esta ferramenta não substitui o julgamento clínico.
          </p>
        </div>
      </div>
    </>
  );
}
