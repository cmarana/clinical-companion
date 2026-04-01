import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Search, ChevronDown, ChevronUp, Shield, AlertTriangle, Clock, Pill, Syringe } from "lucide-react";
import { antimicrobialGuide, searchAntimicrobials, type InfectiousFocus, type InfectionScenario, type AntimicrobialRegimen } from "@/data/antimicrobialGuide";
import { cn } from "@/lib/utils";

function RegimenRow({ regimen, label }: { regimen: AntimicrobialRegimen; label?: string }) {
  return (
    <div className="flex flex-col gap-0.5 p-2.5 rounded-lg bg-muted/40 border border-border/50">
      <div className="flex items-center gap-2">
        <Pill size={12} className="text-primary shrink-0" />
        <span className="font-semibold text-sm">{regimen.drug}</span>
        {label && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{label}</span>}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-0.5 ml-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Syringe size={10} /> {regimen.dose}</span>
        <span>{regimen.route}</span>
        <span className="flex items-center gap-1"><Clock size={10} /> {regimen.duration}</span>
      </div>
      {regimen.notes && <p className="ml-5 text-[11px] text-amber-600 dark:text-amber-400 italic">{regimen.notes}</p>}
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: InfectionScenario }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-3 text-left hover:bg-accent/30 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-heading font-bold text-sm">{scenario.name}</h4>
            {scenario.severity && (
              <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1",
                scenario.severity.includes("EMERGÊNCIA") || scenario.severity.includes("URGÊNCIA")
                  ? "bg-destructive/15 text-destructive"
                  : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
              )}>
                <AlertTriangle size={10} /> {scenario.severity}
              </span>
            )}
          </div>
          {scenario.context && <p className="text-xs text-muted-foreground mt-0.5">{scenario.context}</p>}
          {/* Preview first drug */}
          {!expanded && scenario.firstLine[0] && (
            <p className="text-xs text-primary mt-1 font-medium">
              1ª linha: {scenario.firstLine[0].drug} {scenario.firstLine[0].dose}
            </p>
          )}
        </div>
        {expanded ? <ChevronUp size={16} className="text-muted-foreground shrink-0 mt-1" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0 mt-1" />}
      </button>

      {expanded && (
        <div className="px-3 pb-3 space-y-3">
          {/* 1st line */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Shield size={12} className="text-emerald-500" />
              <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">1ª Linha</h5>
            </div>
            <div className="space-y-1.5">
              {scenario.firstLine.map((r, i) => <RegimenRow key={i} regimen={r} />)}
            </div>
          </div>

          {/* 2nd line */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Shield size={12} className="text-amber-500" />
              <h5 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">2ª Linha / Alternativa</h5>
            </div>
            <div className="space-y-1.5">
              {scenario.secondLine.map((r, i) => <RegimenRow key={i} regimen={r} />)}
            </div>
          </div>

          {/* Allergic alternative */}
          {scenario.allergicAlternative && scenario.allergicAlternative.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <AlertTriangle size={12} className="text-rose-500" />
                <h5 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Alergia a Betalactâmicos</h5>
              </div>
              <div className="space-y-1.5">
                {scenario.allergicAlternative.map((r, i) => <RegimenRow key={i} regimen={r} />)}
              </div>
            </div>
          )}

          {/* Key points */}
          {scenario.keyPoints && scenario.keyPoints.length > 0 && (
            <div className="bg-primary/5 border border-primary/15 rounded-lg p-2.5">
              <h5 className="text-xs font-bold text-primary mb-1.5 uppercase tracking-wider">📌 Pontos-chave</h5>
              <ul className="space-y-1">
                {scenario.keyPoints.map((p, i) => (
                  <li key={i} className="text-xs leading-relaxed text-foreground/80 flex gap-1.5">
                    <span className="text-primary shrink-0">•</span>
                    <span>{p}</span>
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

export default function AntimicrobialGuide() {
  const [search, setSearch] = useState("");
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);

  const searchResults = search.length >= 2 ? searchAntimicrobials(search) : [];
  const isSearching = search.length >= 2;

  const activeFocus = selectedFocus
    ? antimicrobialGuide.find(f => f.id === selectedFocus)
    : null;

  return (
    <>
      <TopBar title="Antimicrobianos por Foco" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por infecção, antibiótico ou foco..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Search results */}
        {isSearching ? (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-2">
              {searchResults.length} resultado(s) para "{search}"
            </p>
            {searchResults.map((r, i) => (
              <div key={i}>
                <p className="text-[10px] text-muted-foreground font-medium mb-1">
                  {r.focus.icon} {r.focus.category}
                </p>
                <ScenarioCard scenario={r.scenario} />
              </div>
            ))}
            {searchResults.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                Nenhum resultado encontrado
              </div>
            )}
          </div>
        ) : !activeFocus ? (
          /* Category grid */
          <div className="grid grid-cols-2 gap-2">
            {antimicrobialGuide.map(focus => (
              <button
                key={focus.id}
                onClick={() => setSelectedFocus(focus.id)}
                className="flex flex-col items-start gap-1 p-4 rounded-xl border border-border bg-card hover:bg-accent/30 active:scale-[0.98] transition-all text-left"
              >
                <span className="text-2xl">{focus.icon}</span>
                <span className={cn("font-heading font-bold text-sm", focus.color)}>{focus.category}</span>
                <span className="text-[10px] text-muted-foreground">{focus.scenarios.length} protocolos</span>
              </button>
            ))}
          </div>
        ) : (
          /* Scenarios list */
          <div className="space-y-3">
            <button
              onClick={() => setSelectedFocus(null)}
              className="text-xs text-primary font-medium hover:underline"
            >
              ← Voltar aos focos
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{activeFocus.icon}</span>
              <h2 className={cn("font-heading font-bold text-lg", activeFocus.color)}>{activeFocus.category}</h2>
            </div>
            <div className="space-y-2">
              {activeFocus.scenarios.map(s => (
                <ScenarioCard key={s.id} scenario={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
