import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Loader2, MapPin, GraduationCap, Stethoscope, Globe, UserCheck, CalendarDays } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";

const COLORS = [
  "hsl(221, 83%, 53%)", "hsl(0, 84%, 60%)", "hsl(142, 71%, 45%)",
  "hsl(262, 83%, 58%)", "hsl(24, 95%, 53%)", "hsl(187, 85%, 43%)",
  "hsl(330, 81%, 60%)", "hsl(45, 93%, 47%)", "hsl(173, 80%, 40%)",
  "hsl(280, 67%, 50%)"
];

interface DemographicsData {
  totalUsers: number;
  byProvider: { name: string; count: number }[];
  bySpecialty: { name: string; count: number }[];
  byCity: { name: string; count: number }[];
  byState: { name: string; count: number }[];
  byUniversity: { name: string; count: number }[];
  byAcademicStatus: { name: string; count: number }[];
  byGender: { name: string; count: number }[];
  signupsTimeline: { month: string; count: number }[];
}

function ChartCard({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
      <h2 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
        <Icon size={16} className="text-primary" /> {title}
      </h2>
      {children}
    </div>
  );
}

function HorizontalBarSection({ data, color = COLORS[0] }: { data: { name: string; count: number }[]; color?: string }) {
  if (data.length === 0) return <p className="text-sm text-muted-foreground text-center py-6">Sem dados</p>;
  const maxCount = data[0].count;
  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
      {data.map((item, i) => {
        const pct = maxCount > 0 ? (item.count / maxCount) * 100 : 0;
        return (
          <div key={item.name}>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="font-medium truncate mr-2">{item.name}</span>
              <span className="text-muted-foreground shrink-0">{item.count}</span>
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
  );
}

const PROVIDER_LABELS: Record<string, string> = {
  email: "Email",
  google: "Google",
  apple: "Apple",
  "Não informado": "Não informado",
};

export default function UserAnalytics() {
  const navigate = useNavigate();
  const [data, setData] = useState<DemographicsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: result, error: err } = await supabase.functions.invoke("user-demographics");
        if (err) throw err;
        setData(result);
      } catch (e: any) {
        setError(e.message || "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };
    fetch();
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
      <div className="px-4 pt-6 pb-24 max-w-6xl mx-auto">
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

  const providerData = data.byProvider.map(p => ({
    ...p,
    name: PROVIDER_LABELS[p.name] || p.name,
  }));

  return (
    <div className="px-4 pt-4 pb-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="font-heading font-bold text-lg">Analytics de Usuários</h1>
          <p className="text-xs text-muted-foreground">Dados demográficos e distribuição da base</p>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { icon: Users, label: "Total de Usuários", value: data.totalUsers },
          { icon: Globe, label: "Provedores", value: providerData.filter(p => p.name !== "Não informado").length },
          { icon: MapPin, label: "Cidades", value: data.byCity.filter(c => c.name !== "Não informado").length },
          { icon: GraduationCap, label: "Faculdades", value: data.byUniversity.filter(u => u.name !== "Não informado").length },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-card rounded-2xl p-4 shadow-sm border border-border">
            <kpi.icon size={18} className="text-primary mb-2" />
            <p className="font-heading font-bold text-xl">{kpi.value}</p>
            <p className="text-[10px] text-muted-foreground leading-tight">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Signups Timeline */}
      {data.signupsTimeline.length > 0 && (
        <ChartCard title="Cadastros ao Longo do Tempo" icon={CalendarDays}>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.signupsTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Line type="monotone" dataKey="count" stroke={COLORS[0]} strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      )}

      {/* Provider + Gender row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ChartCard title="Método de Cadastro" icon={Globe}>
          {providerData.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sem dados</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={providerData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={3}
                >
                  {providerData.map((_, i) => (
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
                />
              </PieChart>
            </ResponsiveContainer>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {providerData.map((p, i) => (
              <span key={p.name} className="flex items-center gap-1 text-[11px]">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                {p.name} ({p.count})
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Gênero" icon={UserCheck}>
          <HorizontalBarSection data={data.byGender} />
        </ChartCard>
      </div>

      {/* Specialty + Academic Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ChartCard title="Especialidade" icon={Stethoscope}>
          <HorizontalBarSection data={data.bySpecialty} />
        </ChartCard>

        <ChartCard title="Status Acadêmico" icon={GraduationCap}>
          <HorizontalBarSection data={data.byAcademicStatus} />
        </ChartCard>
      </div>

      {/* City + University */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ChartCard title="Top Cidades" icon={MapPin}>
          <HorizontalBarSection data={data.byCity} />
        </ChartCard>

        <ChartCard title="Top Faculdades" icon={GraduationCap}>
          <HorizontalBarSection data={data.byUniversity} />
        </ChartCard>
      </div>

      {/* States bar chart */}
      <div className="mt-4">
        <ChartCard title="Distribuição por Estado" icon={MapPin}>
          {data.byState.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sem dados</p>
          ) : (
            <ResponsiveContainer width="100%" height={Math.max(200, data.byState.length * 28)}>
              <BarChart data={data.byState} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={35} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="count" fill={COLORS[0]} radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </div>
    </div>
  );
}
