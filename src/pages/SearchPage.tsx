import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { protocols } from "@/data/protocols";
import { prescriptionCategories } from "@/data/prescriptions";
import { symptomGuides } from "@/data/symptomGuides";
import { useBularioList } from "@/hooks/useBularioMedications";
import { fullProtocols } from "@/data/fullProtocols";
import { allEmergencyProtocols } from "@/data/emergency";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import {
  Search, FileText, Pill, ClipboardList, Stethoscope, BookOpen,
  Loader2, Zap, Calculator, Hash, Clock, X
} from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  path: string;
  icon: "protocol" | "medication" | "prescription" | "symptom" | "bulario" | "fullProtocol" | "emergency" | "calculator";
}

const typeColors: Record<string, string> = {
  protocol: "bg-primary/10 text-primary",
  medication: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  prescription: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  symptom: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  bulario: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  fullProtocol: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  emergency: "bg-destructive/10 text-destructive",
  calculator: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

const typeLabels: Record<string, string> = {
  protocol: "Protocolo",
  prescription: "Prescrição",
  symptom: "Sintoma",
  bulario: "Bulário",
  fullProtocol: "Protocolo Completo",
  emergency: "Emergência",
  calculator: "Calculadora",
};

// Calculator names for search
const calculatorItems = [
  { id: "glasgow", title: "Glasgow (ECG)", description: "Nível de consciência" },
  { id: "sofa", title: "SOFA Score", description: "Disfunção orgânica na sepse" },
  { id: "nihss", title: "NIHSS", description: "Gravidade do AVC" },
  { id: "heart", title: "HEART Score", description: "Risco na dor torácica" },
  { id: "wells", title: "Wells (TEP)", description: "Probabilidade de TEP" },
  { id: "cha2ds2", title: "CHA₂DS₂-VASc", description: "Risco de AVC em FA" },
  { id: "timi", title: "TIMI Score", description: "Risco na SCA sem supra" },
  { id: "meld", title: "MELD / MELD-Na", description: "Gravidade hepatopatia" },
  { id: "apacheii", title: "APACHE II", description: "Gravidade na UTI" },
  { id: "curb65", title: "CURB-65", description: "Gravidade de pneumonia" },
  { id: "apgar", title: "APGAR", description: "Avaliação do RN" },
  { id: "childpugh", title: "Child-Pugh", description: "Gravidade na cirrose" },
  { id: "clearance", title: "Clearance Creatinina", description: "Cockcroft-Gault" },
  { id: "dose", title: "Dose por Peso", description: "mg/kg → dose total e volume" },
  { id: "infusion", title: "Velocidade de Infusão", description: "BIC em mL/h" },
  { id: "parkland", title: "Parkland (Queimados)", description: "Reposição volêmica" },
  { id: "aniongap", title: "Anion Gap", description: "Acidose metabólica" },
  { id: "imc", title: "IMC", description: "Índice de Massa Corporal" },
];

// CID-10 codes for search (top frequent ones)
const cidItems = [
  { code: "I21", desc: "Infarto Agudo do Miocárdio" },
  { code: "J18", desc: "Pneumonia" },
  { code: "A41", desc: "Septicemia" },
  { code: "I64", desc: "AVC" },
  { code: "J96", desc: "Insuficiência Respiratória" },
  { code: "N39", desc: "ITU" },
  { code: "K35", desc: "Apendicite Aguda" },
  { code: "E11", desc: "Diabetes Mellitus tipo 2" },
  { code: "I10", desc: "Hipertensão Arterial" },
  { code: "J45", desc: "Asma" },
];

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { recent } = useRecentHistory();

  // Bulário search from database
  const bularioFilters = useMemo(() => ({
    search: query.length >= 2 ? query : "",
    drugClass: null, category: null, dosageForm: null,
    route: null, controlled: null, pediatric: null, pregnancySafe: null,
  }), [query]);

  const { data: bularioMeds = [], isLoading: bularioLoading } = useBularioList(bularioFilters);

  const allResults = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();

    const protocolResults: SearchResult[] = protocols
      .filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)))
      .map(p => ({ id: p.id, title: p.title, subtitle: p.category, type: "Protocolo", path: `/protocols/${p.id}`, icon: "protocol" as const }));

    const fullProtocolResults: SearchResult[] = fullProtocols
      .filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) ||
        p.sections.some(s => s.title.toLowerCase().includes(q)))
      .slice(0, 30)
      .map(p => ({ id: p.id, title: p.title, subtitle: p.category, type: "Protocolo Completo", path: `/full-protocols/${p.id}`, icon: "fullProtocol" as const }));

    const emergencyResults: SearchResult[] = allEmergencyProtocols
      .filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      .map(p => ({ id: p.id, title: p.title, subtitle: `Emergência · ${p.category}`, type: "Emergência", path: `/emergency/${p.id}`, icon: "emergency" as const }));

    const rxResults: SearchResult[] = prescriptionCategories
      .flatMap(c => c.items)
      .filter(p => p.title.toLowerCase().includes(q) || p.prescription.toLowerCase().includes(q))
      .slice(0, 30)
      .map(p => ({ id: p.id, title: p.title, subtitle: p.type, type: "Prescrição", path: `/prescriptions/${p.id}`, icon: "prescription" as const }));

    const symptomResults: SearchResult[] = symptomGuides
      .filter(s => s.symptom.toLowerCase().includes(q) || s.hypotheses.some(h => h.toLowerCase().includes(q)))
      .map(s => ({ id: s.id, title: s.symptom, subtitle: "Diagnóstico por Sintoma", type: "Sintoma", path: `/diagnosis`, icon: "symptom" as const }));

    const calcResults: SearchResult[] = calculatorItems
      .filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
      .map(c => ({ id: c.id, title: c.title, subtitle: c.description, type: "Calculadora", path: `/calculators`, icon: "calculator" as const }));

    const bularioResults: SearchResult[] = bularioMeds.map(m => ({
      id: m.id, title: m.nome, subtitle: `${m.principio_ativo} · ${m.classe}`,
      type: "Bulário", path: `/bulario/${m.id}`, icon: "bulario" as const,
    }));

    return [...emergencyResults, ...protocolResults, ...fullProtocolResults, ...rxResults, ...calcResults, ...symptomResults, ...bularioResults];
  }, [query, bularioMeds]);

  const filteredResults = activeFilter
    ? allResults.filter(r => r.icon === activeFilter)
    : allResults;

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allResults.forEach(r => { counts[r.icon] = (counts[r.icon] || 0) + 1; });
    return counts;
  }, [allResults]);

  const getIcon = (type: string) => {
    switch (type) {
      case "protocol": return <FileText size={16} />;
      case "prescription": return <ClipboardList size={16} />;
      case "symptom": return <Stethoscope size={16} />;
      case "bulario": return <Pill size={16} />;
      case "fullProtocol": return <BookOpen size={16} />;
      case "emergency": return <Zap size={16} />;
      case "calculator": return <Calculator size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const filters = Object.keys(typeCounts);

  return (
    <>
      <TopBar title="Busca Global" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        {/* Search bar */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            autoFocus
            placeholder="Protocolo, medicamento, prescrição, calculadora, CID..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveFilter(null); }}
            className="w-full pl-11 pr-10 h-[48px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
          {query && (
            <button onClick={() => { setQuery(""); setActiveFilter(null); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent text-muted-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter pills */}
        {query.length >= 2 && filters.length > 1 && (
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveFilter(null)}
              className={`shrink-0 px-3 py-1.5 rounded-2xl text-[11px] font-heading font-medium transition-all ${
                !activeFilter ? "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground hover:bg-accent"
              }`}
            >
              Todos ({allResults.length})
            </button>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                className={`shrink-0 px-3 py-1.5 rounded-2xl text-[11px] font-heading font-medium transition-all ${
                  activeFilter === f ? "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground hover:bg-accent"
                }`}
              >
                {typeLabels[f] || f} ({typeCounts[f]})
              </button>
            ))}
          </div>
        )}

        {/* Result count */}
        {query.length >= 2 && (
          <div className="flex items-center gap-2">
            <p className="text-[11px] text-muted-foreground font-heading">{filteredResults.length} resultado(s)</p>
            {bularioLoading && <Loader2 size={12} className="animate-spin text-muted-foreground" />}
          </div>
        )}

        {/* Results */}
        <div className="space-y-2">
          {filteredResults.slice(0, 50).map((r) => (
            <div
              key={`${r.icon}-${r.id}`}
              onClick={() => navigate(r.path)}
              className="cursor-pointer flex items-center gap-3 p-3 bg-card rounded-[16px] shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${typeColors[r.icon]}`}>
                {getIcon(r.icon)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading font-semibold text-[13px] truncate">{r.title}</p>
                <p className="text-[11px] text-muted-foreground truncate">{r.subtitle}</p>
              </div>
              <span className={`text-[9px] font-heading font-medium px-2 py-0.5 rounded-full shrink-0 ${typeColors[r.icon]}`}>
                {r.type}
              </span>
            </div>
          ))}
        </div>

        {/* Recent history when no query */}
        {query.length < 2 && recent.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={12} /> Acessados Recentemente
            </h3>
            {recent.map((entry) => (
              <div
                key={entry.path}
                onClick={() => navigate(entry.path)}
                className="cursor-pointer flex items-center gap-3 p-3 bg-card rounded-[16px] shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${typeColors[entry.type] || typeColors.protocol}`}>
                  {getIcon(entry.type)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-[13px] truncate">{entry.title}</p>
                  <p className="text-[11px] text-muted-foreground">{new Date(entry.timestamp).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query.length >= 2 && filteredResults.length === 0 && !bularioLoading && (
          <div className="text-center py-12">
            <Search size={32} className="mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm font-heading">Nenhum resultado encontrado</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">Tente outros termos ou abreviações</p>
          </div>
        )}

        {/* Suggestions when empty */}
        {query.length < 2 && recent.length === 0 && (
          <div className="text-center py-12">
            <Search size={32} className="mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm font-heading">Busca Global Unificada</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1 max-w-xs mx-auto">
              Pesquise em protocolos, prescrições, medicamentos, calculadoras e CID num só lugar
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-4">
              {["Sepse", "Amiodarona", "IAM", "Glasgow", "Pneumonia"].map(s => (
                <button key={s} onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-2xl bg-muted/60 hover:bg-accent text-[11px] font-heading text-muted-foreground transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
