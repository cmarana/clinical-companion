import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  type BularioFilters,
  INITIAL_FILTERS,
  DRUG_CLASSES,
  CATEGORIES,
  DOSAGE_FORMS,
  ROUTES,
} from "@/types/bulario";
import { cn } from "@/lib/utils";

interface Props {
  filters: BularioFilters;
  onChange: (f: BularioFilters) => void;
  totalCount: number;
  filteredCount: number;
}

export default function BularioFilterBar({ filters, onChange, totalCount, filteredCount }: Props) {
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount = [
    filters.drugClass,
    filters.category,
    filters.dosageForm,
    filters.route,
    filters.controlled,
    filters.pediatric,
    filters.pregnancySafe,
  ].filter((v) => v !== null).length;

  const reset = () => onChange(INITIAL_FILTERS);

  const set = (key: keyof BularioFilters, value: string | boolean | null) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar medicamento, princípio ativo, classe..."
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          className="pl-9 h-10 text-sm"
        />
      </div>

      {/* Toggle + count */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-1.5 text-xs"
        >
          <SlidersHorizontal size={13} />
          Filtros
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-[10px]">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
        <span className="text-xs text-muted-foreground">
          {filteredCount === totalCount
            ? `${totalCount} medicamentos`
            : `${filteredCount} de ${totalCount}`}
        </span>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-card border border-border">
          <FilterSelect
            label="Classe"
            options={DRUG_CLASSES}
            value={filters.drugClass}
            onValueChange={(v) => set("drugClass", v)}
          />
          <FilterSelect
            label="Categoria"
            options={CATEGORIES}
            value={filters.category}
            onValueChange={(v) => set("category", v)}
          />
          <FilterSelect
            label="Forma"
            options={DOSAGE_FORMS}
            value={filters.dosageForm}
            onValueChange={(v) => set("dosageForm", v)}
          />
          <FilterSelect
            label="Via"
            options={ROUTES}
            value={filters.route}
            onValueChange={(v) => set("route", v)}
          />

          {/* Toggle pills */}
          <div className="col-span-2 flex flex-wrap gap-1.5 pt-1">
            <TogglePill
              label="Controlado"
              active={filters.controlled === true}
              onClick={() => set("controlled", filters.controlled === true ? null : true)}
            />
            <TogglePill
              label="Pediátrico"
              active={filters.pediatric === true}
              onClick={() => set("pediatric", filters.pediatric === true ? null : true)}
            />
            <TogglePill
              label="Gestante"
              active={filters.pregnancySafe === true}
              onClick={() => set("pregnancySafe", filters.pregnancySafe === true ? null : true)}
            />
          </div>

          {activeFilterCount > 0 && (
            <div className="col-span-2 flex justify-end">
              <Button variant="ghost" size="sm" onClick={reset} className="text-xs gap-1 text-muted-foreground">
                <X size={12} /> Limpar filtros
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  options,
  value,
  onValueChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onValueChange: (v: string | null) => void;
}) {
  return (
    <Select
      value={value ?? "__all__"}
      onValueChange={(v) => onValueChange(v === "__all__" ? null : v)}
    >
      <SelectTrigger className="h-8 text-xs">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="__all__">Todos — {label}</SelectItem>
        {options.map((o) => (
          <SelectItem key={o} value={o}>
            {o}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function TogglePill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-muted-foreground border-border hover:border-primary/40"
      )}
    >
      {label}
    </button>
  );
}
