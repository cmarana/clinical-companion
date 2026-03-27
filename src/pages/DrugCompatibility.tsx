import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

type Compat = "C" | "I" | "?" | "-";

const drugs = [
  "Noradrenalina","Adrenalina","Dobutamina","Dopamina","Nitroglicerina","Nitroprussiato",
  "Midazolam","Fentanil","Propofol","Cetamina","Dexmedetomidina",
  "Insulina","Heparina","Furosemida","Amiodarona","Fenitoína",
  "Vancomicina","Meropenem","Piperacilina-Tazo","Ceftriaxona",
  "Omeprazol","Metoclopramida","Dipirona","Tramadol","Morfina",
];

// C=Compatible, I=Incompatible, ?=Unknown/Variable
// Matrix is symmetric, - for self
const matrix: Record<string, Record<string, Compat>> = {};

// Helper to set bidirectional
function set(a: string, b: string, v: Compat) {
  if (!matrix[a]) matrix[a] = {};
  if (!matrix[b]) matrix[b] = {};
  matrix[a][b] = v;
  matrix[b][a] = v;
}

// Self
drugs.forEach(d => { if (!matrix[d]) matrix[d] = {}; matrix[d][d] = "-"; });

// Known incompatibilities (common Y-site)
const incompatibles: [string, string][] = [
  ["Fenitoína","Dobutamina"],["Fenitoína","Dopamina"],["Fenitoína","Noradrenalina"],["Fenitoína","Amiodarona"],
  ["Fenitoína","Fentanil"],["Fenitoína","Midazolam"],["Fenitoína","Heparina"],["Fenitoína","Insulina"],
  ["Fenitoína","Morfina"],["Fenitoína","Meropenem"],["Fenitoína","Vancomicina"],
  ["Furosemida","Dobutamina"],["Furosemida","Dopamina"],["Furosemida","Noradrenalina"],["Furosemida","Adrenalina"],
  ["Furosemida","Amiodarona"],["Furosemida","Midazolam"],["Furosemida","Vancomicina"],["Furosemida","Ciprofloxacino" as any],
  ["Propofol","Meropenem"],["Propofol","Amiodarona"],["Propofol","Vancomicina"],["Propofol","Fenitoína"],
  ["Amiodarona","Ceftriaxona"],["Amiodarona","Heparina"],["Amiodarona","Piperacilina-Tazo"],
  ["Omeprazol","Ceftriaxona"],["Omeprazol","Midazolam"],["Omeprazol","Fentanil"],["Omeprazol","Amiodarona"],
  ["Omeprazol","Vancomicina"],["Omeprazol","Meropenem"],
  ["Nitroprussiato","Dobutamina"],
  ["Insulina","Propofol"],
];

const compatibles: [string, string][] = [
  ["Noradrenalina","Adrenalina"],["Noradrenalina","Dobutamina"],["Noradrenalina","Fentanil"],
  ["Noradrenalina","Midazolam"],["Noradrenalina","Heparina"],["Noradrenalina","Insulina"],
  ["Noradrenalina","Meropenem"],["Noradrenalina","Vancomicina"],["Noradrenalina","Morfina"],
  ["Adrenalina","Dobutamina"],["Adrenalina","Fentanil"],["Adrenalina","Midazolam"],["Adrenalina","Heparina"],
  ["Dobutamina","Fentanil"],["Dobutamina","Midazolam"],["Dobutamina","Heparina"],["Dobutamina","Amiodarona"],
  ["Dopamina","Fentanil"],["Dopamina","Midazolam"],["Dopamina","Heparina"],["Dopamina","Amiodarona"],
  ["Fentanil","Midazolam"],["Fentanil","Propofol"],["Fentanil","Cetamina"],["Fentanil","Morfina"],
  ["Fentanil","Dobutamina"],["Fentanil","Dexmedetomidina"],["Fentanil","Insulina"],
  ["Midazolam","Cetamina"],["Midazolam","Morfina"],["Midazolam","Dobutamina"],["Midazolam","Insulina"],
  ["Heparina","Insulina"],["Heparina","Morfina"],["Heparina","Meropenem"],["Heparina","Vancomicina"],
  ["Insulina","Heparina"],
  ["Meropenem","Fentanil"],["Meropenem","Midazolam"],["Meropenem","Dobutamina"],["Meropenem","Dopamina"],
  ["Vancomicina","Fentanil"],["Vancomicina","Midazolam"],["Vancomicina","Meropenem"],
  ["Piperacilina-Tazo","Fentanil"],["Piperacilina-Tazo","Midazolam"],
  ["Ceftriaxona","Fentanil"],["Ceftriaxona","Midazolam"],["Ceftriaxona","Morfina"],
  ["Morfina","Dobutamina"],["Morfina","Dopamina"],["Morfina","Meropenem"],
  ["Dexmedetomidina","Midazolam"],["Dexmedetomidina","Propofol"],["Dexmedetomidina","Noradrenalina"],
  ["Dipirona","Metoclopramida"],["Dipirona","Tramadol"],["Tramadol","Metoclopramida"],
  ["Metoclopramida","Morfina"],
  ["Nitroglicerina","Fentanil"],["Nitroglicerina","Midazolam"],["Nitroglicerina","Heparina"],
  ["Nitroglicerina","Insulina"],
];

incompatibles.forEach(([a, b]) => { if (drugs.includes(a) && drugs.includes(b)) set(a, b, "I"); });
compatibles.forEach(([a, b]) => { if (drugs.includes(a) && drugs.includes(b)) set(a, b, "C"); });

// Fill unknowns
drugs.forEach(a => drugs.forEach(b => {
  if (!matrix[a]) matrix[a] = {};
  if (matrix[a][b] === undefined) matrix[a][b] = "?";
}));

const colorMap: Record<Compat, string> = {
  C: "bg-green-500/20 text-green-700 dark:text-green-400",
  I: "bg-red-500/20 text-red-700 dark:text-red-400",
  "?": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  "-": "bg-muted text-muted-foreground",
};
const labelMap: Record<Compat, string> = { C: "Compatível", I: "Incompatível", "?": "Dados insuficientes", "-": "-" };

export default function DrugCompatibility() {
  const { subscription } = useAuth();
  const [drugA, setDrugA] = useState("");
  const [drugB, setDrugB] = useState("");

  const filteredDrugs = useMemo(() => {
    const q = drugA.toLowerCase();
    if (q.length < 1) return drugs;
    return drugs.filter(d => d.toLowerCase().includes(q));
  }, [drugA]);

  const [selectedDrug, setSelectedDrug] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!selectedDrug) return null;
    const q = drugB.toLowerCase();
    return drugs
      .filter(d => d !== selectedDrug && (q.length < 1 || d.toLowerCase().includes(q)))
      .map(d => ({ drug: d, compat: matrix[selectedDrug]?.[d] || "?" as Compat }))
      .sort((a, b) => {
        const order: Record<Compat, number> = { I: 0, "?": 1, C: 2, "-": 3 };
        return order[a.compat] - order[b.compat];
      });
  }, [selectedDrug, drugB]);

  if (!subscription.subscribed) {
    return <><TopBar title="Compatibilidade EV" /><PremiumGate /></>;
  }

  return (
    <>
      <TopBar title="Compatibilidade de Drogas em Y" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <p className="text-xs text-muted-foreground">Tabela de compatibilidade para administração simultânea em Y na UTI/PS</p>

        <div className="flex gap-1.5 flex-wrap">
          <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-green-500/30 inline-block" /> Compatível</span>
          <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-red-500/30 inline-block" /> Incompatível</span>
          <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-yellow-500/20 inline-block" /> Sem dados</span>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Selecionar droga principal..."
            value={drugA}
            onChange={e => { setDrugA(e.target.value); setSelectedDrug(null); }}
            className="pl-8 h-10 text-sm rounded-xl"
          />
        </div>

        {!selectedDrug && (
          <div className="grid grid-cols-2 gap-1.5">
            {filteredDrugs.map(d => (
              <button
                key={d}
                onClick={() => { setSelectedDrug(d); setDrugA(d); }}
                className="text-left px-3 py-2.5 rounded-lg border border-border hover:bg-accent/50 active:scale-[0.98] transition-all"
              >
                <span className="text-xs font-medium">{d}</span>
              </button>
            ))}
          </div>
        )}

        {selectedDrug && (
          <>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Filtrar segunda droga..."
                value={drugB}
                onChange={e => setDrugB(e.target.value)}
                className="pl-8 h-10 text-sm rounded-xl"
              />
            </div>
            <button onClick={() => { setSelectedDrug(null); setDrugA(""); setDrugB(""); }} className="text-xs text-primary hover:underline">← Trocar droga principal</button>
            <div className="space-y-1">
              {results?.map(r => (
                <Card key={r.drug}>
                  <CardContent className="p-3 flex items-center justify-between">
                    <span className="text-xs font-medium">{r.drug}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorMap[r.compat]}`}>
                      {labelMap[r.compat]}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        <Card className="border-yellow-500/20">
          <CardContent className="p-3">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              ⚠ <strong>Atenção:</strong> Esta tabela é uma referência rápida baseada em fontes como Trissel's™ e King Guide®. 
              A compatibilidade pode variar conforme concentração, diluente, tempo de contato e temperatura. 
              Sempre consulte a farmácia clínica do serviço e verifique as condições específicas de preparo.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
