import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { changelog, formatUpdateDate } from "@/data/protocolChangelog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, RefreshCw, PenTool, Bug, ChevronRight, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryConfig = {
  new: { label: "Novo", icon: Sparkles, color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  update: { label: "Atualização", icon: RefreshCw, color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  revision: { label: "Revisão", icon: PenTool, color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  fix: { label: "Correção", icon: Bug, color: "bg-red-500/15 text-red-600 dark:text-red-400" },
};

function formatFullDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function UpdatesFeed() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar title="Atualizações" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl mx-auto pb-24">
        <div className="flex items-center gap-2 mb-4">
          <Newspaper size={20} className="text-primary" />
          <h1 className="text-lg font-heading font-bold">Feed de Atualizações</h1>
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          Acompanhe todas as atualizações de protocolos, novos conteúdos e melhorias do PULSO.
        </p>

        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border" />

          {changelog.map((entry, idx) => {
            const cat = categoryConfig[entry.category];
            const Icon = cat.icon;
            return (
              <div key={entry.id} className="relative pl-10 pb-6">
                {/* Timeline dot */}
                <div className={cn(
                  "absolute left-2.5 top-1.5 w-3 h-3 rounded-full ring-2 ring-background",
                  entry.category === "new" && "bg-emerald-500",
                  entry.category === "update" && "bg-sky-500",
                  entry.category === "revision" && "bg-amber-500",
                  entry.category === "fix" && "bg-red-500",
                )} />

                <Card className="p-3 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={cn("inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full", cat.color)}>
                      <Icon size={10} />
                      {cat.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground ml-auto">
                      {formatFullDate(entry.date)}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold font-heading mb-1">{entry.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{entry.description}</p>

                  {entry.protocolIds.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {entry.protocolIds.slice(0, 4).map(pid => (
                        <button
                          key={pid}
                          onClick={() => navigate(`/full-protocols/${pid}`)}
                          className="inline-flex items-center gap-0.5 text-[10px] text-primary hover:underline"
                        >
                          Ver protocolo <ChevronRight size={10} />
                        </button>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
