import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ivDrugs, ivCategories, type IVDrug } from "@/data/ivDilutions";
import {
  Search, Droplets, AlertTriangle, Calculator, ChevronDown, ChevronUp,
  Beaker, Clock, ShieldAlert, Syringe, Check, X
} from "lucide-react";

const categoryColors: Record<string, string> = {
  "Vasopressor": "bg-red-500/15 text-red-700 dark:text-red-400",
  "Inotrópico": "bg-orange-500/15 text-orange-700 dark:text-orange-400",
  "Sedativo": "bg-purple-500/15 text-purple-700 dark:text-purple-400",
  "Analgésico": "bg-blue-500/15 text-blue-700 dark:text-blue-400",
  "Antiarrítmico": "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400",
  "Anti-hipertensivo": "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  "Antibiótico": "bg-teal-500/15 text-teal-700 dark:text-teal-400",
  "Anticoagulante": "bg-pink-500/15 text-pink-700 dark:text-pink-400",
  "Eletrólito": "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400",
  "Outros": "bg-gray-500/15 text-gray-700 dark:text-gray-400",
};

function DrugCard({ drug }: { drug: IVDrug }) {
  const [expanded, setExpanded] = useState(false);
  const [weight, setWeight] = useState("70");
  const [dose, setDose] = useState("");

  const calculated = useMemo(() => {
    if (!drug.calculatorHelper) return null;
    const w = parseFloat(weight) || 70;
    const d = parseFloat(dose) || drug.calculatorHelper.doseMin;
    const conc = drug.concentrationValue;

    if (drug.calculatorHelper.unit === "mcg/kg/min") {
      const mlh = (d * w * 60) / conc;
      const gtsMin = mlh / 3;
      return { mlh: mlh.toFixed(1), gtsMin: gtsMin.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "mcg/kg/h") {
      const mlh = (d * w) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "mg/kg/h") {
      const mlh = (d * w * 1000) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "UI/kg/h") {
      const mlh = (d * w) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "mcg/min") {
      const mlh = (d * 60) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "mg/min") {
      const mlh = (d * 60 * 1000) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "UI/min") {
      const mlh = (d * 60) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    // mg/h, mEq/h, g/h, UI/h
    if (drug.calculatorHelper.unit === "mg/h") {
      const mlh = (d * 1000) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "mEq/h") {
      return { mlh: "Variável — ver diluição", dose: d };
    }
    if (drug.calculatorHelper.unit === "g/h") {
      const mlh = (d * 1000000) / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    if (drug.calculatorHelper.unit === "UI/h") {
      const mlh = d / conc;
      return { mlh: mlh.toFixed(1), dose: d };
    }
    return null;
  }, [weight, dose, drug]);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-3 flex items-center gap-2"
      >
        <Droplets size={16} className="text-primary shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold truncate">{drug.name}</p>
          <p className="text-[10px] text-muted-foreground truncate">{drug.finalConcentration} · {drug.doseRange}</p>
        </div>
        <Badge className={`text-[9px] shrink-0 ${categoryColors[drug.category] || ""}`}>{drug.category}</Badge>
        {expanded ? <ChevronUp size={14} className="shrink-0 text-muted-foreground" /> : <ChevronDown size={14} className="shrink-0 text-muted-foreground" />}
      </button>

      {expanded && (
        <CardContent className="p-3 pt-0 space-y-3 border-t border-border">
          {/* Apresentações */}
          <Section icon={<Syringe size={12} />} title="Apresentações">
            {drug.presentations.map((p, i) => <p key={i} className="text-xs text-foreground">{p}</p>)}
          </Section>

          {/* Reconstituição */}
          <Section icon={<Beaker size={12} />} title="Reconstituição">
            <p className="text-xs text-foreground">{drug.reconstitution}</p>
          </Section>

          {/* Diluição padrão */}
          <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/20">
            <p className="text-[10px] font-bold text-primary mb-1">📋 DILUIÇÃO PADRÃO</p>
            <p className="text-xs font-medium text-foreground">{drug.standardDilution}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Concentração final: <strong>{drug.finalConcentration}</strong></p>
          </div>

          {/* Dose e velocidade */}
          <Section icon={<Clock size={12} />} title="Dose e Infusão">
            <p className="text-xs"><strong>Dose:</strong> {drug.doseRange}</p>
            <p className="text-xs"><strong>Velocidade:</strong> {drug.infusionRate}</p>
            <p className="text-xs"><strong>Via:</strong> {drug.route}</p>
            <p className="text-xs"><strong>Acesso:</strong> {drug.lineType}</p>
            <p className="text-xs"><strong>Estabilidade:</strong> {drug.stability}</p>
          </Section>

          {/* Calculadora */}
          {drug.calculatorHelper && (
            <div className="bg-accent/30 rounded-lg p-2.5 space-y-2">
              <p className="text-[10px] font-bold text-foreground flex items-center gap-1">
                <Calculator size={12} /> CALCULADORA DE INFUSÃO
              </p>
              <div className="flex gap-2">
                {drug.weightBased && (
                  <div className="flex-1">
                    <label className="text-[10px] text-muted-foreground">Peso (kg)</label>
                    <Input value={weight} onChange={e => setWeight(e.target.value)} className="h-8 text-xs" type="number" />
                  </div>
                )}
                <div className="flex-1">
                  <label className="text-[10px] text-muted-foreground">Dose ({drug.calculatorHelper.unit})</label>
                  <Input
                    value={dose}
                    onChange={e => setDose(e.target.value)}
                    placeholder={`${drug.calculatorHelper.doseMin}-${drug.calculatorHelper.doseMax}`}
                    className="h-8 text-xs"
                    type="number"
                    step="any"
                  />
                </div>
              </div>
              {calculated && (
                <div className="bg-background rounded p-2 text-center">
                  <p className="text-lg font-bold text-primary">{calculated.mlh} mL/h</p>
                  {(calculated as any).gtsMin && (
                    <p className="text-[10px] text-muted-foreground">≈ {(calculated as any).gtsMin} macrogotas/min (sem bomba)</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Sem bomba */}
          {drug.noBombTip && (
            <div className="bg-yellow-500/10 rounded-lg p-2 border border-yellow-500/20">
              <p className="text-[10px] font-bold text-yellow-700 dark:text-yellow-400 mb-0.5">💡 SEM BOMBA DE INFUSÃO</p>
              <p className="text-[10px] text-foreground">{drug.noBombTip}</p>
            </div>
          )}

          {/* Compatibilidade */}
          <Section icon={<Check size={12} />} title="Compatível em Y">
            <div className="flex flex-wrap gap-1">
              {drug.compatibilities.length > 0
                ? drug.compatibilities.map(c => <Badge key={c} variant="outline" className="text-[9px] border-green-500/30 text-green-700 dark:text-green-400">{c}</Badge>)
                : <span className="text-[10px] text-muted-foreground">Sem dados confiáveis — via exclusiva</span>
              }
            </div>
          </Section>

          <Section icon={<X size={12} />} title="Incompatível em Y">
            <div className="flex flex-wrap gap-1">
              {drug.incompatibilities.length > 0
                ? drug.incompatibilities.map(c => <Badge key={c} variant="outline" className="text-[9px] border-red-500/30 text-red-700 dark:text-red-400">{c}</Badge>)
                : <span className="text-[10px] text-muted-foreground">Sem incompatibilidades conhecidas</span>
              }
            </div>
          </Section>

          {/* Alertas */}
          <div className="bg-red-500/5 rounded-lg p-2 border border-red-500/20 space-y-1">
            <p className="text-[10px] font-bold text-red-700 dark:text-red-400 flex items-center gap-1">
              <ShieldAlert size={12} /> ALERTAS
            </p>
            {drug.warnings.map((w, i) => (
              <p key={i} className="text-[10px] text-foreground">⚠ {w}</p>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1 mb-1">{icon} {title.toUpperCase()}</p>
      {children}
    </div>
  );
}

export default function IVDilutions() {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("");

  const filtered = useMemo(() => {
    let list = ivDrugs;
    if (filterCat) list = list.filter(d => d.category === filterCat);
    if (search.length >= 2) {
      const s = search.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(s) ||
        d.category.toLowerCase().includes(s) ||
        d.incompatibilities.some(x => x.toLowerCase().includes(s)) ||
        d.compatibilities.some(x => x.toLowerCase().includes(s))
      );
    }
    return list;
  }, [search, filterCat]);

  return (
    <>
      <TopBar title="Diluições IV e Compatibilidade" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl mx-auto space-y-4 pb-24">
        <p className="text-xs text-muted-foreground">{filtered.length} drogas com tabela de reconstituição, diluição, velocidade de infusão e calculadora</p>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Buscar droga, categoria ou compatibilidade..." value={search} onChange={e => setSearch(e.target.value)} className="pl-8 h-10 text-sm rounded-xl" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilterCat("")}
            className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${!filterCat ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`}
          >Todas</button>
          {ivCategories.map(c => (
            <button
              key={c}
              onClick={() => setFilterCat(filterCat === c ? "" : c)}
              className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${filterCat === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`}
            >{c}</button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map(d => <DrugCard key={d.id} drug={d} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8">
            <Droplets size={32} className="mx-auto text-muted-foreground/30 mb-2" />
            <p className="text-sm text-muted-foreground">Nenhuma droga encontrada</p>
          </div>
        )}

        <Card className="border-yellow-500/20">
          <CardContent className="p-3">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              ⚠ <strong>Fonte:</strong> Baseado em Trissel's™ 2 IV Compatibility, King Guide®, bulas e protocolos institucionais.
              Compatibilidade pode variar conforme concentração, diluente e temperatura. Sempre confirme com a farmácia clínica local.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
