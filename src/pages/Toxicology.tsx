import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { toxicAgents, searchToxicAgents, toxicologyCategories, type ToxicAgent } from "@/data/toxicology";
import { Search, ChevronDown, ChevronUp, AlertTriangle, Pill, Shield, HeartPulse, FlaskConical } from "lucide-react";

const SEVERITY_CONFIG = {
  leve: { label: "Leve", color: "bg-primary0/10 text-primary dark:text-primary border-primary0/20" },
  moderado: { label: "Moderado", color: "bg-destructive0/10 text-destructive dark:text-destructive border-destructive0/20" },
  grave: { label: "Grave", color: "bg-destructive0/10 text-destructive dark:text-destructive border-destructive0/20" },
  potencialmente_fatal: { label: "Potencialmente Fatal", color: "bg-destructive/10 text-destructive border-destructive/20" },
} as const;

function AgentCard({ agent }: { agent: ToxicAgent }) {
  const [expanded, setExpanded] = useState(false);
  const sev = SEVERITY_CONFIG[agent.severity];

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-accent/30 transition-colors"
      >
        <span className="text-2xl shrink-0" aria-hidden>{agent.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-heading font-semibold text-sm">{agent.name}</h3>
            <Badge variant="outline" className={`text-[10px] ${sev.color}`}>{sev.label}</Badge>
          </div>
          {agent.aliases && (
            <p className="text-xs text-muted-foreground mt-0.5">Também: {agent.aliases.join(", ")}</p>
          )}
          {!expanded && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{agent.symptoms[0]}</p>
          )}
        </div>
        {expanded
          ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
          : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
        }
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-1 space-y-4 border-t border-border">
          {agent.mechanism && (
            <section>
              <h4 className="text-[11px] uppercase tracking-wider font-heading font-semibold text-muted-foreground mb-1">Mecanismo</h4>
              <p className="text-sm text-foreground/90">{agent.mechanism}</p>
            </section>
          )}

          {agent.redFlags.length > 0 && (
            <section className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
              <h4 className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-heading font-semibold text-destructive mb-2">
                <AlertTriangle className="h-3.5 w-3.5" /> Sinais de Alarme
              </h4>
              <ul className="space-y-1">
                {agent.redFlags.map((f, i) => (
                  <li key={i} className="text-sm flex gap-2"><span className="text-destructive">⚠</span>{f}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h4 className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-heading font-semibold text-muted-foreground mb-2">
              <HeartPulse className="h-3.5 w-3.5" /> Quadro Clínico
            </h4>
            <ul className="space-y-1">
              {agent.symptoms.map((s, i) => (
                <li key={i} className="text-sm flex gap-2"><span className="text-primary">•</span>{s}</li>
              ))}
            </ul>
          </section>

          {agent.antidotes.length > 0 && (
            <section>
              <h4 className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-heading font-semibold text-primary mb-2">
                <Pill className="h-3.5 w-3.5" /> Antídotos
              </h4>
              <div className="space-y-2">
                {agent.antidotes.map((a, i) => (
                  <div key={i} className="rounded-lg border border-primary/20 bg-primary/5 p-3 space-y-1">
                    <p className="font-heading font-semibold text-sm">{a.drug}</p>
                    <p className="text-xs"><span className="font-semibold">Dose:</span> {a.dose}</p>
                    <p className="text-xs"><span className="font-semibold">Via:</span> {a.route}</p>
                    {a.notes && <p className="text-xs text-muted-foreground italic">{a.notes}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {agent.decontamination.length > 0 && (
            <section>
              <h4 className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-heading font-semibold text-muted-foreground mb-2">
                <Shield className="h-3.5 w-3.5" /> Descontaminação
              </h4>
              <div className="space-y-2">
                {agent.decontamination.map((d, i) => (
                  <div key={i} className="rounded-lg border border-border bg-muted/40 p-3 space-y-1">
                    <p className="font-heading font-semibold text-sm">{d.method}</p>
                    <p className="text-xs"><span className="font-semibold">Indicação:</span> {d.indication}</p>
                    {d.contraindication && (
                      <p className="text-xs text-destructive"><span className="font-semibold">Contraindicação:</span> {d.contraindication}</p>
                    )}
                    <p className="text-xs"><span className="font-semibold">Como fazer:</span> {d.howTo}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {agent.supportiveCare.length > 0 && (
            <section>
              <h4 className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-heading font-semibold text-muted-foreground mb-2">
                <FlaskConical className="h-3.5 w-3.5" /> Medidas de Suporte
              </h4>
              <ul className="space-y-1">
                {agent.supportiveCare.map((s, i) => (
                  <li key={i} className="text-sm flex gap-2"><span className="text-primary">•</span>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {agent.keyPoints && agent.keyPoints.length > 0 && (
            <section className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <h4 className="text-[11px] uppercase tracking-wider font-heading font-semibold text-primary mb-2">Pontos-chave</h4>
              <ul className="space-y-1">
                {agent.keyPoints.map((k, i) => (
                  <li key={i} className="text-sm flex gap-2"><span className="text-primary">→</span>{k}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default function Toxicology() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = search.length >= 2 ? searchToxicAgents(search) : toxicAgents;
    if (activeCategory) list = list.filter(a => a.category === activeCategory);
    return list;
  }, [search, activeCategory]);

  return (
    <PremiumPageGuard feature="toxicologia" title="Toxicologia de Emergência">
      <TopBar title="Toxicologia" />
      <div className="container max-w-3xl mx-auto px-4 py-4 space-y-4 pb-24">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-primary" />
            <h1 className="font-heading font-bold text-xl">Toxicologia de Emergência</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Antídotos, descontaminação e condutas para as principais intoxicações agudas.
            Baseado em protocolos da ANVISA, SBT e Poison Control Centers.
          </p>
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-xs text-destructive font-medium">
            ⚠️ Em caso de intoxicação grave, contate o CIATOX: 0800 722 6001
          </div>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar tóxico, antídoto ou sintoma..."
            className="pl-9 h-10 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1 rounded-full text-[11px] font-heading font-semibold border transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted/60"
            }`}
          >
            Todos
          </button>
          {toxicologyCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-heading font-semibold border transition-colors ${
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">Nenhum tóxico encontrado.</p>
          ) : (
            filtered.map(agent => <AgentCard key={agent.id} agent={agent} />)
          )}
        </div>

        <p className="text-[11px] text-muted-foreground text-center pt-4">
          Conteúdo baseado em evidências para uso por profissionais de saúde.
          Não substitui avaliação clínica individualizada. PULSO — apoio à decisão clínica.
        </p>
      </div>
    </PremiumPageGuard>
  );
}
