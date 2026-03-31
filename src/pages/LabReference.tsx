import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { labCategories } from "@/data/labValues";
import { Search, ChevronDown, ChevronUp, Info, X } from "lucide-react";

export default function LabReference() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(labCategories[0].id);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const currentCategory = labCategories.find(c => c.id === activeCategory)!;

  const filteredValues = useMemo(() => {
    if (!search.trim()) return currentCategory.values;
    const q = search.toLowerCase();
    return currentCategory.values.filter(v =>
      v.name.toLowerCase().includes(q) || v.unit.toLowerCase().includes(q)
    );
  }, [search, currentCategory]);

  // Cross-category search
  const allResults = useMemo(() => {
    if (search.length < 2) return null;
    const q = search.toLowerCase();
    const results: { catId: string; catTitle: string; values: typeof currentCategory.values }[] = [];
    labCategories.forEach(cat => {
      const matches = cat.values.filter(v => v.name.toLowerCase().includes(q) || v.unit.toLowerCase().includes(q));
      if (matches.length > 0) results.push({ catId: cat.id, catTitle: cat.title, values: matches });
    });
    return results.length > 0 ? results : null;
  }, [search]);

  const formatRange = (min: number | string, max: number | string) => {
    if (typeof min === "string" && min.startsWith("<")) return min;
    if (typeof min === "string" && min.startsWith(">")) return min;
    if (typeof min === "string" && min.startsWith("≥")) return min;
    if (max === "-") return String(min);
    if (min === "-") return String(max);
    return `${min} – ${max}`;
  };

  return (
    <>
      <TopBar title="Valores de Referência" />
      <div className="px-4 py-3 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        {/* Search */}
        <div className="relative mb-3">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar exame..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 h-[44px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent text-muted-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 -mx-1 px-1">
          {labCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setSearch(""); setExpandedItem(null); }}
              className={`shrink-0 px-3 py-1.5 rounded-2xl text-[11px] font-heading font-medium transition-all active:scale-[0.97] ${
                activeCategory === cat.id && !search
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/60 text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Results */}
        {search.length >= 2 && allResults ? (
          <div className="space-y-4">
            {allResults.map(group => (
              <div key={group.catId}>
                <h3 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">{group.catTitle}</h3>
                <div className="space-y-2">
                  {group.values.map(val => (
                    <LabValueCard key={`${group.catId}-${val.name}`} val={val} expanded={expandedItem === `${group.catId}-${val.name}`}
                      onToggle={() => setExpandedItem(expandedItem === `${group.catId}-${val.name}` ? null : `${group.catId}-${val.name}`)}
                      formatRange={formatRange} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredValues.map(val => (
              <LabValueCard key={val.name} val={val} expanded={expandedItem === val.name}
                onToggle={() => setExpandedItem(expandedItem === val.name ? null : val.name)}
                formatRange={formatRange} />
            ))}
            {filteredValues.length === 0 && (
              <div className="text-center py-12">
                <Search size={28} className="mx-auto text-muted-foreground/40 mb-2" />
                <p className="text-sm text-muted-foreground font-heading">Nenhum exame encontrado</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function LabValueCard({ val, expanded, onToggle, formatRange }: {
  val: (typeof labCategories)[0]["values"][0];
  expanded: boolean;
  onToggle: () => void;
  formatRange: (min: number | string, max: number | string) => string;
}) {
  const mainRange = val.ranges[0];

  return (
    <div
      className={`bg-card rounded-[16px] shadow-sm transition-all duration-200 ${expanded ? "shadow-md" : "hover:shadow-md"}`}
    >
      <button onClick={onToggle} className="w-full flex items-center gap-3 p-3.5 text-left">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-[13px]">{val.name}</span>
            {val.unit && <span className="text-[10px] text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded-md">{val.unit}</span>}
          </div>
          {!expanded && (
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {mainRange.group}: <span className="font-medium text-foreground">{formatRange(mainRange.min, mainRange.max)}</span>
              {val.unit && ` ${val.unit}`}
            </p>
          )}
        </div>
        <div className="text-muted-foreground shrink-0">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div className="px-3.5 pb-3.5 pt-0">
          <div className="rounded-xl overflow-hidden border border-border/50">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-3 py-2 font-heading font-semibold text-muted-foreground">Grupo</th>
                  <th className="text-right px-3 py-2 font-heading font-semibold text-muted-foreground">Valor de Referência</th>
                </tr>
              </thead>
              <tbody>
                {val.ranges.map((range, i) => (
                  <tr key={i} className="border-t border-border/30">
                    <td className="px-3 py-2 font-heading">
                      <span className="font-medium">{range.group}</span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <span className="font-semibold text-primary">{formatRange(range.min, range.max)}</span>
                      {val.unit && <span className="text-muted-foreground ml-1">{val.unit}</span>}
                      {range.note && (
                        <div className="flex items-start gap-1 mt-1 justify-end">
                          <Info size={10} className="text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-[10px] text-muted-foreground leading-tight">{range.note}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
