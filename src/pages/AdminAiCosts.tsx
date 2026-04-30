import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Sparkles, TrendingDown, Users, Zap, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell,
} from "recharts";

interface AiCostsData {
  yearMonth: string;
  totals: {
    calls: number;
    costBrl: number;
    uniqueUsers: number;
    totalUsers: number;
    activePixUsers: number;
  };
  byFeature: Array<{
    feature: string;
    calls: number;
    users: number;
    costBrl: number;
    unitCostBrl: number;
  }>;
  cache: {
    entries: number;
    totalHits: number;
    savedBrl: number;
    hitRate: number;
  };
  topUsers: Array<{ email: string; calls: number }>;
}

const FEATURE_LABELS: Record<string, string> = {
  "clinical-ai": "IA Clínica",
  "prescription-check": "Verif. Prescrição",
  "discharge-summary": "Sumário de Alta",
  "voice-evolution": "Evolução por Voz",
  "conduct-comparator": "Comparador Conduta",
  "clinical-case-simulator": "Simulador de Casos",
};

const COLORS = ["#0a6dd9", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

export default function AdminAiCosts() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AiCostsData | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    checkAdmin();
  }, [user]);

  async function checkAdmin() {
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user!.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!roles) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    setIsAdmin(true);
    fetchData();
  }

  async function fetchData() {
    setLoading(true);
    try {
      const { data: result, error } = await supabase.functions.invoke("admin-ai-costs");
      if (error) throw error;
      setData(result as AiCostsData);
    } catch (e: any) {
      toast.error("Erro ao carregar dados", { description: e.message });
    } finally {
      setLoading(false);
    }
  }

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p className="text-muted-foreground">Esta página é restrita a administradores.</p>
        <Button onClick={() => navigate("/")}>Voltar ao início</Button>
      </div>
    );
  }

  if (!data) return null;

  // Estimativa de receita mensal (Pro = R$ 9,90)
  const estimatedRevenue = data.totals.activePixUsers * 9.9; // só PIX, Stripe não está aqui
  const margin = estimatedRevenue > 0
    ? (((estimatedRevenue - data.totals.costBrl) / estimatedRevenue) * 100).toFixed(1)
    : "—";

  const featureChartData = data.byFeature.map((f) => ({
    name: FEATURE_LABELS[f.feature] ?? f.feature,
    calls: f.calls,
    cost: f.costBrl,
  }));

  return (
    <div className="min-h-screen bg-background pb-12">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Custos de IA — {data.yearMonth}
            </h1>
            <p className="text-xs text-muted-foreground">Mês corrente · estimativas conservadoras</p>
          </div>
          <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* KPIs principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <Badge variant="secondary">{data.yearMonth}</Badge>
            </div>
            <p className="text-2xl font-bold">{data.totals.calls.toLocaleString("pt-BR")}</p>
            <p className="text-xs text-muted-foreground mt-1">Chamadas de IA no mês</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <Badge variant="destructive">Custo</Badge>
            </div>
            <p className="text-2xl font-bold">R$ {data.totals.costBrl.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">Estimado (pior caso)</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-green-500" />
              <Badge variant="outline">Ativos</Badge>
            </div>
            <p className="text-2xl font-bold">
              {data.totals.uniqueUsers}
              <span className="text-sm font-normal text-muted-foreground"> / {data.totals.totalUsers}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Usaram IA / total</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <Badge>Cache</Badge>
            </div>
            <p className="text-2xl font-bold">{data.cache.hitRate}%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Hit rate · economizou R$ {data.cache.savedBrl.toFixed(2)}
            </p>
          </Card>
        </div>

        {/* Margem estimada */}
        <Card className="p-5 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h2 className="font-semibold mb-3">Margem estimada</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Receita PIX (mês)</p>
              <p className="text-lg font-bold">R$ {estimatedRevenue.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">{data.totals.activePixUsers} × R$ 9,90</p>
            </div>
            <div>
              <p className="text-muted-foreground">Custo IA</p>
              <p className="text-lg font-bold text-red-500">- R$ {data.totals.costBrl.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Lucro PIX</p>
              <p className="text-lg font-bold text-green-600">
                R$ {(estimatedRevenue - data.totals.costBrl).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Margem</p>
              <p className="text-lg font-bold">{margin}%</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            ⚠️ Receita Stripe (assinaturas mensais/anuais) não incluída — consulte dashboard Stripe para receita total.
          </p>
        </Card>

        {/* Por feature */}
        <Card className="p-5">
          <h2 className="font-semibold mb-4">Custo por funcionalidade</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureChartData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-15} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(value: number, name: string) =>
                    name === "cost" ? `R$ ${value.toFixed(2)}` : value.toLocaleString("pt-BR")
                  }
                />
                <Bar dataKey="cost" name="Custo (R$)">
                  {featureChartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="py-2 font-medium">Feature</th>
                  <th className="py-2 font-medium text-right">Chamadas</th>
                  <th className="py-2 font-medium text-right">Usuários</th>
                  <th className="py-2 font-medium text-right">Custo unit.</th>
                  <th className="py-2 font-medium text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.byFeature.map((f) => (
                  <tr key={f.feature} className="border-b hover:bg-muted/30">
                    <td className="py-2">{FEATURE_LABELS[f.feature] ?? f.feature}</td>
                    <td className="py-2 text-right tabular-nums">{f.calls.toLocaleString("pt-BR")}</td>
                    <td className="py-2 text-right tabular-nums">{f.users}</td>
                    <td className="py-2 text-right tabular-nums text-muted-foreground">
                      R$ {f.unitCostBrl.toFixed(4)}
                    </td>
                    <td className="py-2 text-right tabular-nums font-semibold">
                      R$ {f.costBrl.toFixed(2)}
                    </td>
                  </tr>
                ))}
                {data.byFeature.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-muted-foreground">
                      Nenhum uso registrado este mês.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Top usuários */}
        <Card className="p-5">
          <h2 className="font-semibold mb-4">Top 10 usuários (chamadas)</h2>
          {data.topUsers.length === 0 ? (
            <p className="text-sm text-muted-foreground">Sem dados ainda.</p>
          ) : (
            <div className="space-y-2">
              {data.topUsers.map((u, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <Badge variant="outline" className="w-8 justify-center">{i + 1}</Badge>
                  <span className="flex-1 truncate">{u.email}</span>
                  <span className="tabular-nums font-semibold">{u.calls}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Cache stats */}
        <Card className="p-5">
          <h2 className="font-semibold mb-3">Cache global</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Entradas ativas</p>
              <p className="text-xl font-bold">{data.cache.entries}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Hits totais</p>
              <p className="text-xl font-bold">{data.cache.totalHits}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Economia</p>
              <p className="text-xl font-bold text-green-600">R$ {data.cache.savedBrl.toFixed(2)}</p>
            </div>
          </div>
        </Card>

        <p className="text-xs text-muted-foreground text-center">
          Custos calculados com tabela conservadora (sem cache). Real geralmente é 30-50% menor.
        </p>
      </div>
    </div>
  );
}
