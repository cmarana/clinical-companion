import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Users, MessageSquare, BarChart3, Shield, Loader2,
  Bug, Lightbulb, MessageSquarePlus, CheckCircle, Clock, Eye,
  Send, Search, Mail, ChevronDown, ChevronUp, RefreshCw
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// ── Types ──────────────────────────────────────────────
interface Feedback {
  id: string;
  user_id: string;
  type: string;
  message: string;
  page_url: string;
  status: string;
  created_at: string;
  user_email?: string;
}

interface UserProfile {
  user_id: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  specialty: string;
  city: string;
  state: string;
  university: string;
  academic_status: string;
  provider: string;
  created_at: string;
  avatar_url: string;
}

interface Stats {
  totalUsers: number;
  totalFeedback: number;
  newFeedback: number;
}

// ── Config ─────────────────────────────────────────────
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

const tabs = [
  { id: "overview", label: "Visão Geral", icon: BarChart3 },
  { id: "feedback", label: "Feedbacks", icon: MessageSquare },
  { id: "users", label: "Usuários", icon: Users },
] as const;

type TabId = typeof tabs[number]["id"];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, totalFeedback: 0, newFeedback: 0 });
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [sendingReply, setSendingReply] = useState<string | null>(null);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [userSearch, setUserSearch] = useState("");

  // ── Auth check ───────────────────────────────────────
  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase.rpc("has_role", {
        _user_id: user.id,
        _role: "admin",
      });
      if (!data) {
        toast.error("Acesso negado — apenas administradores");
        navigate("/");
        return;
      }
      setAuthorized(true);
      setLoading(false);
    })();
  }, [user, navigate]);

  // ── Data fetching ────────────────────────────────────
  const fetchStats = useCallback(async () => {
    const { data } = await supabase.functions.invoke("admin-feedback", {
      method: "GET",
      body: undefined,
    });
    // We need to use query params but invoke doesn't support them easily,
    // so let's just count from feedbacks
  }, []);

  const fetchFeedbacks = useCallback(async () => {
    const { data, error } = await supabase.functions.invoke("admin-feedback", { method: "GET" });
    if (!error && data) {
      setFeedbacks(data);
      setStats(prev => ({
        ...prev,
        totalFeedback: data.length,
        newFeedback: data.filter((f: Feedback) => f.status === "new").length,
      }));
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-feedback?action=users`,
      {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
      setStats(prev => ({ ...prev, totalUsers: data.length }));
    }
  }, []);

  useEffect(() => {
    if (!authorized) return;
    fetchFeedbacks();
    fetchUsers();
  }, [authorized, fetchFeedbacks, fetchUsers]);

  // ── Actions ──────────────────────────────────────────
  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.functions.invoke("admin-feedback", {
      method: "PATCH",
      body: { id, status },
    });
    if (!error) {
      setFeedbacks(prev => prev.map(f => f.id === id ? { ...f, status } : f));
      toast.success(`Status → ${statusConfig[status]?.label || status}`);
    }
  };

  const sendReply = async (feedback: Feedback) => {
    const msg = replyText[feedback.id]?.trim();
    if (!msg) return;
    if (!feedback.user_email) {
      toast.error("E-mail do usuário não disponível");
      return;
    }
    setSendingReply(feedback.id);
    try {
      const { error } = await supabase.functions.invoke("admin-feedback", {
        method: "POST",
        body: {
          feedbackId: feedback.id,
          replyMessage: msg,
          recipientEmail: feedback.user_email,
          originalMessage: feedback.message,
          originalType: feedback.type,
        },
      });
      if (error) throw error;
      toast.success("Resposta enviada por e-mail!");
      setReplyText(prev => ({ ...prev, [feedback.id]: "" }));
      setFeedbacks(prev => prev.map(f => f.id === feedback.id ? { ...f, status: "resolved" } : f));
    } catch {
      toast.error("Erro ao enviar resposta");
    } finally {
      setSendingReply(null);
    }
  };

  // ── Filters ──────────────────────────────────────────
  const filteredFeedbacks = feedbacks.filter(f => {
    if (filterType !== "all" && f.type !== filterType) return false;
    if (filterStatus !== "all" && f.status !== filterStatus) return false;
    return true;
  });

  const filteredUsers = users.filter(u => {
    if (!userSearch) return true;
    const q = userSearch.toLowerCase();
    return (
      u.full_name?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q) ||
      u.specialty?.toLowerCase().includes(q) ||
      u.city?.toLowerCase().includes(q)
    );
  });

  // ── Loading / Unauthorized ───────────────────────────
  if (loading || !authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-1.5 rounded-lg hover:bg-muted">
            <ArrowLeft size={18} />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              <h1 className="font-heading font-bold text-base">Painel Admin</h1>
            </div>
            <p className="text-[10px] text-muted-foreground">{user?.email}</p>
          </div>
          <button
            onClick={() => { fetchFeedbacks(); fetchUsers(); toast.info("Dados atualizados"); }}
            className="p-2 rounded-lg hover:bg-muted"
          >
            <RefreshCw size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border px-4">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={14} />
              {tab.label}
              {tab.id === "feedback" && stats.newFeedback > 0 && (
                <span className="bg-red-500 text-white text-[9px] rounded-full px-1.5 py-0.5 font-bold">
                  {stats.newFeedback}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Overview Tab ────────────────────────────────── */}
      {activeTab === "overview" && (
        <div className="px-4 py-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Usuários", value: stats.totalUsers, color: "text-primary", icon: Users },
              { label: "Feedbacks", value: stats.totalFeedback, color: "text-amber-500", icon: MessageSquare },
              { label: "Novos", value: stats.newFeedback, color: "text-red-500", icon: Clock },
            ].map(s => {
              const SIcon = s.icon;
              return (
                <div key={s.label} className="bg-card rounded-xl p-4 text-center border border-border">
                  <SIcon size={18} className={`mx-auto mb-1 ${s.color}`} />
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent feedbacks */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Feedbacks recentes</h3>
            {feedbacks.slice(0, 5).map(f => {
              const tc = typeConfig[f.type] || typeConfig.other;
              const sc = statusConfig[f.status] || statusConfig.new;
              return (
                <div key={f.id} className="flex items-start gap-2 py-2 border-b border-border last:border-0">
                  <div className={`p-1 rounded ${tc.color}`}>
                    <tc.icon size={12} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs line-clamp-1">{f.message}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {new Date(f.created_at).toLocaleDateString("pt-BR")}
                      {f.user_email && ` • ${f.user_email}`}
                    </p>
                  </div>
                  <Badge variant="outline" className={`text-[8px] px-1 py-0 ${sc.color} shrink-0`}>
                    {sc.label}
                  </Badge>
                </div>
              );
            })}
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-auto py-3 flex-col gap-1" onClick={() => setActiveTab("feedback")}>
              <MessageSquare size={16} />
              <span className="text-xs">Ver Feedbacks</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex-col gap-1" onClick={() => setActiveTab("users")}>
              <Users size={16} />
              <span className="text-xs">Ver Usuários</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-auto py-3 flex-col gap-1 text-xs" onClick={() => navigate("/admin/analytics")}>
              <BarChart3 size={16} />
              Módulos
            </Button>
            <Button variant="outline" className="h-auto py-3 flex-col gap-1 text-xs" onClick={() => navigate("/admin/users")}>
              <BarChart3 size={16} />
              Demographics
            </Button>
          </div>
          <Button
            variant="default"
            className="w-full h-auto py-3 flex-col gap-1 text-xs"
            onClick={() => navigate("/admin/governance")}
          >
            <Shield size={16} />
            Governança Clínica (KPIs, Checklists, EPM, Curadoria, TTP)
          </Button>
        </div>
      )}

      {/* ── Feedback Tab ────────────────────────────────── */}
      {activeTab === "feedback" && (
        <div className="px-4 py-3 space-y-3">
          {/* Filters */}
          <div className="space-y-2">
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
          {filteredFeedbacks.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">Nenhum feedback encontrado</p>
          )}
          {filteredFeedbacks.map(f => {
            const tc = typeConfig[f.type] || typeConfig.other;
            const sc = statusConfig[f.status] || statusConfig.new;
            const TypeIcon = tc.icon;
            const isExpanded = expandedId === f.id;
            const date = new Date(f.created_at);

            return (
              <div key={f.id} className="bg-card rounded-xl border border-border p-3 space-y-2">
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
                      {f.user_email && (
                        <p className="text-[10px] text-primary flex items-center gap-1">
                          <Mail size={10} /> {f.user_email}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : f.id)}
                    className="p-1 rounded hover:bg-muted shrink-0"
                  >
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                <p className={`text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                  {f.message}
                </p>

                {isExpanded && (
                  <div className="space-y-3 pt-1">
                    {/* Status actions */}
                    <div className="flex gap-1.5 flex-wrap">
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

                    {/* Reply section */}
                    {f.user_email && (
                      <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                        <p className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                          <Send size={11} /> Responder por e-mail para {f.user_email}
                        </p>
                        <textarea
                          value={replyText[f.id] || ""}
                          onChange={(e) => setReplyText(prev => ({ ...prev, [f.id]: e.target.value }))}
                          placeholder="Digite sua resposta..."
                          className="w-full h-20 rounded-lg bg-background border border-border p-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <Button
                          size="sm"
                          className="w-full gap-2"
                          disabled={!replyText[f.id]?.trim() || sendingReply === f.id}
                          onClick={() => sendReply(f)}
                        >
                          {sendingReply === f.id ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Send size={14} />
                          )}
                          {sendingReply === f.id ? "Enviando..." : "Enviar Resposta"}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Users Tab ───────────────────────────────────── */}
      {activeTab === "users" && (
        <div className="px-4 py-3 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Buscar por nome, e-mail, especialidade..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <p className="text-[10px] text-muted-foreground">
            {filteredUsers.length} usuário{filteredUsers.length !== 1 ? "s" : ""} encontrado{filteredUsers.length !== 1 ? "s" : ""}
          </p>

          {/* Users list */}
          {filteredUsers.map(u => (
            <div key={u.user_id} className="bg-card rounded-xl border border-border p-3">
              <div className="flex items-start gap-3">
                {u.avatar_url ? (
                  <img src={u.avatar_url} alt="" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {(u.first_name?.[0] || u.full_name?.[0] || "?").toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {u.full_name || `${u.first_name} ${u.last_name}`.trim() || "Sem nome"}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">{u.email}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {u.specialty && (
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0">{u.specialty}</Badge>
                    )}
                    {u.city && u.state && (
                      <Badge variant="outline" className="text-[9px] px-1.5 py-0">{u.city}/{u.state}</Badge>
                    )}
                    {u.provider && u.provider !== "email" && (
                      <Badge variant="outline" className="text-[9px] px-1.5 py-0">{u.provider}</Badge>
                    )}
                    {u.academic_status && (
                      <Badge variant="outline" className="text-[9px] px-1.5 py-0">{u.academic_status}</Badge>
                    )}
                  </div>
                  {u.university && (
                    <p className="text-[10px] text-muted-foreground mt-1">🎓 {u.university}</p>
                  )}
                  {u.phone && (
                    <p className="text-[10px] text-muted-foreground">📱 {u.phone}</p>
                  )}
                  <p className="text-[9px] text-muted-foreground mt-1">
                    Cadastro: {new Date(u.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
