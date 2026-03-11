import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, ChevronDown, Stethoscope } from "lucide-react";
import { symptomGuides, type SymptomGuide } from "@/data/symptomGuides";

export default function DiagnosisBySymptom() {
  const { subscription } = useAuth();
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Diagnóstico por Sintoma" />
        <PremiumGate />
      </>
    );
  }

  const filtered = symptomGuides.filter(s =>
    s.symptom.toLowerCase().includes(query.toLowerCase()) ||
    s.hypotheses.some(h => h.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <TopBar title="Diagnóstico por Sintoma" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        <p className="text-xs text-muted-foreground">Selecione um sintoma para ver hipóteses diagnósticas, exames e conduta</p>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar sintoma..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pl-8 h-10 text-sm rounded-xl"
          />
        </div>

        <div className="space-y-2">
          {filtered.map(guide => (
            <Card
              key={guide.id}
              className="overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpanded(expanded === guide.id ? null : guide.id)}
                className="w-full p-3.5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Stethoscope size={16} className="text-primary" />
                  </div>
                  <span className="font-heading font-semibold text-sm">{guide.symptom}</span>
                </div>
                {expanded === guide.id ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
              </button>

              {expanded === guide.id && (
                <CardContent className="pt-0 pb-4 px-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xs text-primary">Hipóteses Diagnósticas</h3>
                    <ul className="space-y-1">
                      {guide.hypotheses.map((h, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xs text-primary">Exames Iniciais</h3>
                    <ul className="space-y-1">
                      {guide.exams.map((e, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xs text-primary">Conduta Inicial</h3>
                    <div className="text-xs leading-relaxed whitespace-pre-line bg-accent/30 rounded-lg p-3">{guide.conduct}</div>
                  </div>

                  {guide.redFlags && (
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold text-xs text-destructive">🚩 Sinais de Alarme</h3>
                      <ul className="space-y-1">
                        {guide.redFlags.map((f, i) => (
                          <li key={i} className="text-xs flex items-start gap-2 text-destructive">
                            <span className="mt-0.5">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {guide.guideline && (
                    <p className="text-[10px] text-primary font-heading">Diretriz: {guide.guideline}</p>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
