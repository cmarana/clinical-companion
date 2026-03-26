import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { protocols } from "@/data/protocols";

import { prescriptionCategories } from "@/data/prescriptions";
import { symptomGuides } from "@/data/symptomGuides";
import { useBularioList } from "@/hooks/useBularioMedications";
import { Search, FileText, Pill, ClipboardList, Stethoscope, BookOpen, Loader2 } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  path: string;
  icon: "protocol" | "medication" | "prescription" | "symptom" | "bulario";
}

const typeColors: Record<string, string> = {
  protocol: "bg-primary/10 text-primary",
  medication: "bg-success/10 text-success",
  prescription: "bg-accent text-accent-foreground",
  symptom: "bg-warning/10 text-warning",
  bulario: "bg-secondary text-secondary-foreground",
};

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  // Bulário search from database
  const bularioFilters = useMemo(() => ({
    search: query.length >= 2 ? query : "",
    drugClass: null,
    category: null,
    dosageForm: null,
    route: null,
    controlled: null,
    pediatric: null,
    pregnancySafe: null,
  }), [query]);

  const { data: bularioMeds = [], isLoading: bularioLoading } = useBularioList(bularioFilters);

  const localResults = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();

    const protocolResults: SearchResult[] = protocols
      .filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)) || p.sections.some(s => s.content.toLowerCase().includes(q)))
      .map(p => ({ id: p.id, title: p.title, subtitle: p.category, type: "Protocolo", path: `/protocols/${p.id}`, icon: "protocol" as const }));



    const rxResults: SearchResult[] = prescriptionCategories
      .flatMap(c => c.items)
      .filter(p => p.title.toLowerCase().includes(q) || p.prescription.toLowerCase().includes(q))
      .map(p => ({ id: p.id, title: p.title, subtitle: p.type, type: "Prescrição", path: `/prescriptions/${p.id}`, icon: "prescription" as const }));

    const symptomResults: SearchResult[] = symptomGuides
      .filter(s => s.symptom.toLowerCase().includes(q) || s.hypotheses.some(h => h.toLowerCase().includes(q)))
      .map(s => ({ id: s.id, title: s.symptom, subtitle: "Diagnóstico", type: "Sintoma", path: `/diagnosis`, icon: "symptom" as const }));

    return [...protocolResults, ...rxResults, ...symptomResults];
  }, [query]);

  const bularioResults = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return [];
    return bularioMeds.map(m => ({
      id: m.id,
      title: m.nome,
      subtitle: `${m.principio_ativo} · ${m.classe}`,
      type: "Bulário",
      path: `/bulario/${m.id}`,
      icon: "bulario" as const,
    }));
  }, [query, bularioMeds]);

  const results = useMemo(() => [...localResults, ...bularioResults], [localResults, bularioResults]);

  const getIcon = (type: string) => {
    switch (type) {
      case "protocol": return <FileText size={16} />;
      case "medication": return <Pill size={16} />;
      case "prescription": return <ClipboardList size={16} />;
      case "symptom": return <Stethoscope size={16} />;
      case "bulario": return <BookOpen size={16} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <>
      <TopBar title="Busca Global" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 pb-24">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Buscar protocolo, medicamento, prescrição, sintoma..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-11 text-sm rounded-xl"
          />
        </div>

        {query.length >= 2 && (
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">{results.length} resultado(s)</p>
            {bularioLoading && <Loader2 size={12} className="animate-spin text-muted-foreground" />}
          </div>
        )}

        <div className="space-y-2">
          {results.map((r) => (
            <Card
              key={`${r.icon}-${r.id}`}
              onClick={() => navigate(r.path)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center gap-3 p-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${typeColors[r.icon]}`}>
                  {getIcon(r.icon)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.subtitle}</p>
                </div>
                <span className={`text-[9px] font-heading font-medium px-2 py-0.5 rounded-full ${typeColors[r.icon]}`}>
                  {r.type}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {query.length >= 2 && results.length === 0 && !bularioLoading && (
          <p className="text-center text-muted-foreground text-sm py-8">Nenhum resultado encontrado.</p>
        )}
      </div>
    </>
  );
}
