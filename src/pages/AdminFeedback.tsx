import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare, Bug, Lightbulb, MessageSquarePlus, Loader2, CheckCircle, Clock, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Feedback {
  id: string;
  user_id: string;
  type: string;
  message: string;
  page_url: string;
  status: string;
  created_at: string;
}

const typeConfig: Record<string, { label: string; icon: typeof Bug; color: string }> = {
  bug: { label: "Bug", icon: Bug, color: "text-red-500 bg-red-500/10" },
  suggestion: { label: "Sugestão", icon: Lightbulb, color: "text-amber-500 bg-amber-500/10" },
  support: { label: "Suporte", icon: MessageSquare, color: "text-blue-500 bg-blue-500/10" },
  other: { label: "Outro", icon: MessageSquarePlus, color: "text-muted-foreground bg-muted" },
};

const statusConfig: Record<string, { label: string; color: string }> = {
  new: { label: "Novo", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  reviewing: { label: "Em análise", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
  resolved: { label: "Resolvido", color: "bg-green-500/10 text-green-500 border-green-500/20" },
};

export default function AdminFeedback() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const { data, error: err } = await supabase.functions.invoke("admin-feedback", {
        method: "GET",
      });
      if (err) throw err;
      setFeedbacks(data || []);
    } catch (e: any) {
      setError(e.message || "Acesso negado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFeedback(); }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error: err } = await supabase.functions.invoke("admin-feedback", {
        method: "PATCH",
        body: { id, status },
      });
      if (err) throw err;
      setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, status } : f));
      toast.success(`Status atualizado para "${statusConfig[status]?.label || status}"`);
    } catch {
      toast.error("Erro ao atualizar status");
    }
  };

  const filtered = feedbacks.filter(f => {
    if (filterType !== "all" && f.type !== filterType) return false;
    if (filterStatus !== "all" && f.status !== filterStatus) return false;
    return true;
  });

  const counts = {
    total: feedbacks.length,
    new: feedbacks.filter(f => f.status === "new").length,
    bug: feedbacks.filter(f => f.type === "bug").length,
    support: feedbacks.filter(f => f.type === "support").length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-destructive font-semibold">{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate(-1)}>Voltar</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-muted">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="font-heading font-bold text-base">Feedbacks & Suporte</h1>
            <p className="text-[10px] text-muted-foreground">{counts.total} mensagens • {counts.new} novas</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 px-4 py-3">
        {[
          { label: "Total", value: counts.total, color: "text-foreground" },
          { label: "Novos", value: counts.new, color: "text-blue-500" },
          { label: "Bugs", value: counts.bug, color: "text-red-500" },
          { label: "Suporte", value: counts.support, color: "text-blue-500" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-xl p-3 text-center border border-border">
            <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="px-4 pb-3 space-y-2">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {["all", "bug", "suggestion", "support", "other"].map(t => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filterType === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {t === "all" ? "Todos" : typeConfig[t]?.label || t}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {["all", "new", "reviewing", "resolved"].map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filterStatus === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {s === "all" ? "Todos" : statusConfig[s]?.label || s}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback list */}
      <div className="px-4 space-y-2">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">Nenhum feedback encontrado</p>
        )}
        {filtered.map(f => {
          const tc = typeConfig[f.type] || typeConfig.other;
          const sc = statusConfig[f.status] || statusConfig.new;
          const TypeIcon = tc.icon;
          const isExpanded = expandedId === f.id;
          const date = new Date(f.created_at);

          return (
            <div
              key={f.id}
              className="bg-card rounded-xl border border-border p-3 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`p-1.5 rounded-lg ${tc.color}`}>
                    <TypeIcon size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold">{tc.label}</span>
                      <Badge variant="outline" className={`text-[9px] px-1.5 py-0 ${sc.color}`}>
                        {sc.label}
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {date.toLocaleDateString("pt-BR")} {date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                      {f.page_url && ` • ${f.page_url}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedId(isExpanded ? null : f.id)}
                  className="p-1 rounded hover:bg-muted shrink-0"
                >
                  <Eye size={14} className="text-muted-foreground" />
                </button>
              </div>

              <p className={`text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                {f.message}
              </p>

              {isExpanded && (
                <div className="flex gap-1.5 pt-1">
                  {f.status !== "reviewing" && (
                    <Button size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={() => updateStatus(f.id, "reviewing")}>
                      <Clock size={12} /> Em análise
                    </Button>
                  )}
                  {f.status !== "resolved" && (
                    <Button size="sm" variant="outline" className="h-7 text-xs gap-1 text-green-600" onClick={() => updateStatus(f.id, "resolved")}>
                      <CheckCircle size={12} /> Resolvido
                    </Button>
                  )}
                  {f.status !== "new" && (
                    <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => updateStatus(f.id, "new")}>
                      Reabrir
                    </Button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
