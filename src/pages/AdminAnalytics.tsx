import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3, Users, MousePointerClick, TrendingUp, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

const COLORS = [
  "hsl(221, 83%, 53%)", "hsl(0, 84%, 60%)", "hsl(142, 71%, 45%)",
  "hsl(262, 83%, 58%)", "hsl(24, 95%, 53%)", "hsl(187, 85%, 43%)",
  "hsl(330, 81%, 60%)", "hsl(45, 93%, 47%)", "hsl(173, 80%, 40%)",
  "hsl(280, 67%, 50%)"
];

interface AnalyticsData {
  totalEvents: number;
  uniqueUsers: number;
  topModules: { path: string; label: string; count: number }[];
  specialties: { name: string; count: number }[];
  topBySpecialty: Record<string, { label: string; count: number }[]>;
  dailyActivity: { date: string; count: number }[];
}

export default function AdminAnalytics() {
  const navigate = useNavigate();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result, error: err } = await supabase.functions.invoke("analytics-dashboard");
        if (err) throw err;
        setData(result);
      } catch (e: any) {
        setError(e.message || "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="px-4 pt-6 pb-24 max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <ArrowLeft size={16} /> Voltar
        </button>
        <div className="text-center py-12 text-muted-foreground">
          <p className="font-heading font-semibold">Erro ao carregar analytics</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  const specModules = selectedSpecialty ? data.topBySpecialty[selectedSpecialty] || [] : [];

  return (
    <div className="px-4 pt-4 pb-24 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="font-heading font-bold text-lg">Analytics de Uso</h1>
          <p className="text-xs text-muted-foreground">Módulos mais acessados por especialidade</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { icon: MousePointerClick, label: "Total de Acessos", value: data.totalEvents },
          { icon: Users, label: "Usuários Únicos", value: data.uniqueUsers },
          { icon: TrendingUp, label: "Especialidades", value: data.specialties.length },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-card rounded-2xl p-4 shadow-sm">
            <kpi.icon size={18} className="text-primary mb-2" />
            <p className="font-heading font-bold text-xl">{kpi.value.toLocaleString()}</p>
            <p className="text-[10px] text-muted-foreground leading-tight">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Daily Activity Line Chart */}
      {data.dailyActivity.length > 0 && (
        <div className="bg-card rounded-2xl p-4 shadow-sm mb-6">
          <h2 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <BarChart3 size={16} className="text-primary" /> Atividade Diária (30 dias)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                tickFormatter={(v) => v.slice(5)}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Line type="monotone" dataKey="count" stroke="hsl(221, 83%, 53%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Top Modules Bar Chart */}
      <div className="bg-card rounded-2xl p-4 shadow-sm mb-6">
        <h2 className="font-heading font-semibold text-sm mb-3">Top 15 Módulos</h2>
        {data.topModules.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">Sem dados ainda. Navegue pelo app para gerar analytics.</p>
        ) : (
          <ResponsiveContainer width="100%" height={Math.max(200, data.topModules.length * 32)}>
            <BarChart data={data.topModules} layout="vertical" margin={{ left: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis
                dataKey="label"
                type="category"
                tick={{ fontSize: 11 }}
                width={75}
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="count" fill="hsl(221, 83%, 53%)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Specialties Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Pie Chart */}
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <h2 className="font-heading font-semibold text-sm mb-3">Acessos por Especialidade</h2>
          {data.specialties.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">Sem dados de especialidade</p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.specialties}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={45}
                  paddingAngle={2}
                  onClick={(entry) => setSelectedSpecialty(entry.name)}
                  style={{ cursor: "pointer" }}
                >
                  {data.specialties.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  formatter={(value: number, name: string) => [value, name.replace(/-/g, " ")]}
                />
                <Legend
                  formatter={(value) => value.replace(/-/g, " ")}
                  wrapperStyle={{ fontSize: 10 }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Drill-down per specialty */}
        <div className="bg-card rounded-2xl p-4 shadow-sm">
          <h2 className="font-heading font-semibold text-sm mb-3">
            {selectedSpecialty
              ? `Top módulos: ${selectedSpecialty.replace(/-/g, " ")}`
              : "Selecione uma especialidade no gráfico"}
          </h2>
          {selectedSpecialty && specModules.length > 0 ? (
            <div className="space-y-2">
              {specModules.map((m, i) => {
                const maxCount = specModules[0].count;
                const pct = maxCount > 0 ? (m.count / maxCount) * 100 : 0;
                return (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-heading font-medium truncate mr-2">{m.label}</span>
                      <span className="text-muted-foreground shrink-0">{m.count}x</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: COLORS[i % COLORS.length] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              {selectedSpecialty ? "Sem dados para esta especialidade" : "Clique em uma fatia do gráfico ao lado"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
