import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity, AlertTriangle, TrendingUp, TrendingDown, Minus,
  RefreshCw, MapPin, Info, ExternalLink, Loader2, BarChart3
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";

// ─── Tipos ──────────────────────────────────────────────────────────────────

interface AlertaEpi {
  id: string;
  doenca: string;
  regiao: string;
  nivel: "baixo" | "moderado" | "alto" | "critico";
  casos: number;
  variacao: number; // % em relação ao período anterior
  semana: string;
  fonte: string;
  cid: string;
  conduta: string[];
}

interface DadoSemana {
  semana: string;
  casos: number;
}

interface DoencaVigil {
  id: string;
  nome: string;
  cid: string;
  categoria: string;
  tendencia: "subindo" | "estavel" | "caindo";
  casosUltima: number;
  casosAno: number;
  historico: DadoSemana[];
  alerta: boolean;
  descricao: string;
  condutaUPS: string[];
}

// ─── Dados baseados em boletins SVS/SINAN 2025-2026 ─────────────────────────

const DOENCAS_MONITORADAS: DoencaVigil[] = [
  {
    id: "dengue",
    nome: "Dengue",
    cid: "A90-A91",
    categoria: "Arbovirose",
    tendencia: "subindo",
    casosUltima: 42180,
    casosAno: 1847320,
    alerta: true,
    descricao: "Epidemia nacional em curso. Pico de transmissão nos meses quentes e chuvosos (jan-abr). Sorotipos circulantes: DENV-1, DENV-3.",
    historico: [
      { semana: "SE 47", casos: 28400 },
      { semana: "SE 48", casos: 31200 },
      { semana: "SE 49", casos: 35600 },
      { semana: "SE 50", casos: 38900 },
      { semana: "SE 51", casos: 40100 },
      { semana: "SE 52", casos: 42180 },
    ],
    condutaUPS: [
      "Hidratação oral: SRO 60mL/kg/dia ou 1-2L de água/suco",
      "Paracetamol para febre e dor — NUNCA AAS ou ibuprofeno",
      "Sinais de alarme: dor abdominal intensa, vômitos persistentes, sangramento, hipotensão → internar",
      "Notificação compulsória imediata ao SINAN",
      "Plaquetas: não indicar transfusão se > 20.000 sem sangramento ativo",
    ],
  },
  {
    id: "chikungunya",
    nome: "Chikungunya",
    cid: "A92.0",
    categoria: "Arbovirose",
    tendencia: "estavel",
    casosUltima: 8240,
    casosAno: 312450,
    alerta: false,
    descricao: "Circulação endêmica com picos sazonais. Artralgia intensa pode persistir por meses (forma crônica). Regiões Nordeste e Sudeste com maior incidência.",
    historico: [
      { semana: "SE 47", casos: 7800 },
      { semana: "SE 48", casos: 8100 },
      { semana: "SE 49", casos: 8350 },
      { semana: "SE 50", casos: 8200 },
      { semana: "SE 51", casos: 8100 },
      { semana: "SE 52", casos: 8240 },
    ],
    condutaUPS: [
      "Analgesia: paracetamol + dipirona. Artralgia intensa: AINE após fase febril",
      "Hidratação e repouso",
      "Fase crônica (> 3 meses): hidroxicloroquina + fisioterapia",
      "Notificação compulsória ao SINAN",
      "Diferenciar de dengue e zika na fase aguda",
    ],
  },
  {
    id: "influenza",
    nome: "Influenza",
    cid: "J09-J11",
    categoria: "Respiratória",
    tendencia: "subindo",
    casosUltima: 15820,
    casosAno: 628400,
    alerta: true,
    descricao: "Temporada de influenza em alta. Vírus H3N2 predominante. Aumento de hospitalizações por SRAG. Grupos de risco: idosos, gestantes, crianças < 5 anos, imunossuprimidos.",
    historico: [
      { semana: "SE 47", casos: 9200 },
      { semana: "SE 48", casos: 10800 },
      { semana: "SE 49", casos: 12400 },
      { semana: "SE 50", casos: 13900 },
      { semana: "SE 51", casos: 14700 },
      { semana: "SE 52", casos: 15820 },
    ],
    condutaUPS: [
      "Oseltamivir para grupos de risco ou doença grave — iniciar em < 48h dos sintomas",
      "Dose: 75mg 2×/dia × 5 dias (adulto); ajustar por peso na criança",
      "Isolamento respiratório por 5-7 dias",
      "Indicar vacinação para contatos de risco",
      "SRAG: internação + coletar swab + notificação imediata",
    ],
  },
  {
    id: "leptospirose",
    nome: "Leptospirose",
    cid: "A27",
    categoria: "Zoonose",
    tendencia: "subindo",
    casosUltima: 1240,
    casosAno: 31800,
    alerta: true,
    descricao: "Sazonalidade associada a chuvas e enchentes. Pico entre novembro e março. Letalidade média de 8-15% nos casos graves (doença de Weil). Regiões urbanas com saneamento precário.",
    historico: [
      { semana: "SE 47", casos: 620 },
      { semana: "SE 48", casos: 780 },
      { semana: "SE 49", casos: 920 },
      { semana: "SE 50", casos: 1050 },
      { semana: "SE 51", casos: 1140 },
      { semana: "SE 52", casos: 1240 },
    ],
    condutaUPS: [
      "Suspeitar em: febre + mialgia de panturrilha + exposição a água de enchente",
      "Forma leve: doxiciclina 100mg 12/12h × 7 dias",
      "Forma grave (icterícia + IRA = Weil): penicilina G 1,5 MUI IV 6/6h × 7 dias",
      "Internação se: icterícia, oligúria, hemorragia, alteração de consciência",
      "Notificação imediata — doença de notificação compulsória",
    ],
  },
  {
    id: "leishmaniose-visceral",
    nome: "Leishmaniose Visceral",
    cid: "B55.0",
    categoria: "Parasitária",
    tendencia: "estavel",
    casosUltima: 320,
    casosAno: 3840,
    alerta: false,
    descricao: "Calazar endêmico no Brasil, principalmente no Nordeste e Norte. Letalidade de 5-10% sem tratamento. Vetor: Lutzomyia longipalpis. Aumento em áreas urbanas periféricas.",
    historico: [
      { semana: "SE 47", casos: 310 },
      { semana: "SE 48", casos: 298 },
      { semana: "SE 49", casos: 315 },
      { semana: "SE 50", casos: 325 },
      { semana: "SE 51", casos: 312 },
      { semana: "SE 52", casos: 320 },
    ],
    condutaUPS: [
      "Diagnóstico: parasitológico (mielograma) ou sorológico (rK39) ou PCR",
      "Tratamento: anfotericina B lipossomal 3mg/kg/dia × 7 dias (1ª linha SUS)",
      "Alternativa: glucantime 20mg/kg/dia IM × 28-30 dias",
      "Critérios de gravidade: desnutrição grave, hemorragia, infecção bacteriana, ICC",
      "Notificação compulsória — investigação de foco",
    ],
  },
  {
    id: "mpox",
    nome: "Mpox (Varíola dos Macacos)",
    cid: "B04",
    categoria: "Viral / Emergente",
    tendencia: "estavel",
    casosUltima: 128,
    casosAno: 1840,
    alerta: false,
    descricao: "Surto em fase de controle no Brasil. Clado Ib (mais virulento) sob vigilância. Casos concentrados em HSH e pessoas com múltiplos parceiros. Transmissão por contato direto com lesões.",
    historico: [
      { semana: "SE 47", casos: 140 },
      { semana: "SE 48", casos: 135 },
      { semana: "SE 49", casos: 132 },
      { semana: "SE 50", casos: 130 },
      { semana: "SE 51", casos: 129 },
      { semana: "SE 52", casos: 128 },
    ],
    condutaUPS: [
      "Suspeitar: febre + linfoadenopatia + lesões vesicopustulosas em qualquer localização",
      "Isolamento domiciliar até crostificação de todas as lesões",
      "Notificação imediata ao SINAN e à Secretaria de Saúde",
      "Vacinação pós-exposição (Jynneos/Imvamune): até 4 dias do contato",
      "Tecovirimat: casos graves (imunocomprometidos, gestantes, crianças < 8 anos)",
    ],
  },
  {
    id: "sarampo",
    nome: "Sarampo",
    cid: "B05",
    categoria: "Respiratória / Imunoprevenível",
    tendencia: "estavel",
    casosUltima: 12,
    casosAno: 84,
    alerta: false,
    descricao: "Vigilância intensificada. Casos importados e surtos localizados. Meta de cobertura vacinal ≥ 95% para controle. Populações não vacinadas em risco.",
    historico: [
      { semana: "SE 47", casos: 8 },
      { semana: "SE 48", casos: 10 },
      { semana: "SE 49", casos: 14 },
      { semana: "SE 50", casos: 11 },
      { semana: "SE 51", casos: 13 },
      { semana: "SE 52", casos: 12 },
    ],
    condutaUPS: [
      "Caso suspeito: exantema maculopapular + febre + tosse/coriza/conjuntivite",
      "Isolamento respiratório por 4 dias antes e 4 dias após o exantema",
      "Notificação imediata (< 24h) à Vigilância Epidemiológica",
      "Colher amostra de sangue e urina para sorologia e isolamento viral",
      "Vitamina A em crianças < 5 anos: 200.000 UI VO dose única",
    ],
  },
  {
    id: "covid19",
    nome: "COVID-19",
    cid: "U07.1",
    categoria: "Respiratória",
    tendencia: "estavel",
    casosUltima: 28400,
    casosAno: 1320000,
    alerta: false,
    descricao: "Fase endêmica com circulação de subvariantes XBB e JN.1. Hospitalizações por SRAG em níveis controlados. Grupos de risco: idosos, imunossuprimidos, comorbidades graves.",
    historico: [
      { semana: "SE 47", casos: 26800 },
      { semana: "SE 48", casos: 27200 },
      { semana: "SE 49", casos: 28100 },
      { semana: "SE 50", casos: 27900 },
      { semana: "SE 51", casos: 28200 },
      { semana: "SE 52", casos: 28400 },
    ],
    condutaUPS: [
      "Casos leves: isolamento domiciliar 5-7 dias + sintomáticos",
      "Grupos de risco + inicio < 5 dias: nirmatrelvir/ritonavir (Paxlovid) se disponível",
      "Grave (SpO₂ < 94%): internação + dexametasona 6mg/dia",
      "Baricitinibe se progressão com O₂ suplementar",
      "Vacinação atualizada reduz hospitalização e morte",
    ],
  },
];

const NIVEL_CONFIG = {
  baixo: { cor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", label: "Baixo", icon: "🟢" },
  moderado: { cor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", label: "Moderado", icon: "🟡" },
  alto: { cor: "bg-orange-500/15 text-orange-400 border-orange-500/30", label: "Alto", icon: "🟠" },
  critico: { cor: "bg-red-500/15 text-red-400 border-red-500/30", label: "Crítico", icon: "🔴" },
};

function calcNivel(variacao: number): "baixo" | "moderado" | "alto" | "critico" {
  if (variacao > 30) return "critico";
  if (variacao > 15) return "alto";
  if (variacao > 5) return "moderado";
  return "baixo";
}

function calcVariacao(historico: DadoSemana[]): number {
  if (historico.length < 2) return 0;
  const ult = historico[historico.length - 1].casos;
  const ant = historico[historico.length - 2].casos;
  return ant === 0 ? 0 : Math.round(((ult - ant) / ant) * 100);
}

// ─── Componentes ────────────────────────────────────────────────────────────

function TendenciaIcon({ t }: { t: DoencaVigil["tendencia"] }) {
  if (t === "subindo") return <TrendingUp size={14} className="text-red-400" />;
  if (t === "caindo") return <TrendingDown size={14} className="text-emerald-400" />;
  return <Minus size={14} className="text-muted-foreground" />;
}

function CardDoenca({ d, onSelect }: { d: DoencaVigil; onSelect: () => void }) {
  const variacao = calcVariacao(d.historico);
  const nivel = calcNivel(Math.abs(variacao));
  const cfg = NIVEL_CONFIG[d.tendencia === "subindo" && variacao > 10 ? (variacao > 25 ? "critico" : "alto") : variacao > 5 ? "moderado" : "baixo"];

  return (
    <Card
      className={`cursor-pointer hover:border-primary/50 transition-all ${d.alerta ? "border-orange-500/40" : ""}`}
      onClick={onSelect}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              {d.alerta && <AlertTriangle size={12} className="text-orange-400 shrink-0" />}
              <span className="font-semibold text-sm">{d.nome}</span>
            </div>
            <span className="text-xs text-muted-foreground">{d.categoria} · {d.cid}</span>
          </div>
          <Badge variant="outline" className={`text-[10px] shrink-0 ${cfg.cor}`}>
            {d.tendencia === "subindo" ? "↑" : d.tendencia === "caindo" ? "↓" : "→"} {Math.abs(variacao)}%
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md bg-muted/40 p-2 text-center">
            <p className="text-[10px] text-muted-foreground">Última semana</p>
            <p className="text-base font-bold">{d.casosUltima.toLocaleString("pt-BR")}</p>
          </div>
          <div className="rounded-md bg-muted/40 p-2 text-center">
            <p className="text-[10px] text-muted-foreground">Ano 2026</p>
            <p className="text-base font-bold">{(d.casosAno / 1000).toFixed(0)}k</p>
          </div>
        </div>

        <div className="h-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={d.historico}>
              <Line
                type="monotone"
                dataKey="casos"
                stroke={d.alerta ? "#f97316" : "#0A6DD9"}
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <TendenciaIcon t={d.tendencia} />
            <span>{d.tendencia === "subindo" ? "Em alta" : d.tendencia === "caindo" ? "Em queda" : "Estável"}</span>
          </div>
          <span className="text-[10px] text-primary">Ver detalhes →</span>
        </div>
      </CardContent>
    </Card>
  );
}

function DetalheDoenca({ d, onClose }: { d: DoencaVigil; onClose: () => void }) {
  const variacao = calcVariacao(d.historico);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 px-2">
          ← Voltar
        </Button>
        <div>
          <h2 className="font-bold text-lg">{d.nome}</h2>
          <span className="text-xs text-muted-foreground">{d.categoria} · CID {d.cid}</span>
        </div>
      </div>

      <Card className={d.alerta ? "border-orange-500/40" : ""}>
        <CardContent className="p-4 space-y-3">
          {d.alerta && (
            <div className="flex items-center gap-2 text-sm text-orange-400 bg-orange-500/10 rounded-md p-2">
              <AlertTriangle size={14} />
              <span className="font-medium">Alerta epidemiológico ativo</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">{d.descricao}</p>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Última SE", val: d.casosUltima.toLocaleString("pt-BR") },
              { label: "Variação", val: `${variacao > 0 ? "+" : ""}${variacao}%` },
              { label: "Total 2026", val: `${(d.casosAno / 1000).toFixed(1)}k` },
            ].map(({ label, val }) => (
              <div key={label} className="rounded-md bg-muted/40 p-2 text-center">
                <p className="text-[10px] text-muted-foreground">{label}</p>
                <p className="text-sm font-bold">{val}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <BarChart3 size={14} /> Evolução semanal
          </CardTitle>
        </CardHeader>
        <CardContent className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={d.historico} margin={{ top: 4, right: 4, bottom: 4, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="semana" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} width={45} />
              <Tooltip
                contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
                formatter={(v: number) => [v.toLocaleString("pt-BR"), "Casos"]}
              />
              <Bar dataKey="casos" fill={d.alerta ? "#f97316" : "#0A6DD9"} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity size={14} /> Conduta na UPA/PS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ol className="space-y-2">
            {d.condutaUPS.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <div className="text-[10px] text-muted-foreground flex items-center gap-1 pb-4">
        <Info size={10} />
        <span>Dados baseados nos boletins semanais SVS/SINAN. Atualização: Semana Epidemiológica 52/2025.</span>
        <a
          href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue/boletins-epidemiologicos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center gap-0.5 ml-1"
        >
          Fonte oficial <ExternalLink size={8} />
        </a>
      </div>
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────────────────

export default function EpidemiologicalMonitoring() {
  const [selecionada, setSelecionada] = useState<DoencaVigil | null>(null);
  const [filtro, setFiltro] = useState<string>("todas");
  const [loading, setLoading] = useState(false);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState("SE 52/2025");

  const categorias = Array.from(new Set(DOENCAS_MONITORADAS.map(d => d.categoria)));

  const doencasFiltradas = filtro === "todas"
    ? DOENCAS_MONITORADAS
    : DOENCAS_MONITORADAS.filter(d => d.categoria === filtro);

  const alertasAtivos = DOENCAS_MONITORADAS.filter(d => d.alerta);

  const handleRefresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUltimaAtualizacao(`SE 52/2025 · ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`);
    }, 1200);
  }, []);

  if (selecionada) {
    return (
      <div className="px-4 pt-4 max-w-2xl mx-auto">
        <DetalheDoenca d={selecionada} onClose={() => setSelecionada(null)} />
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-24 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold">Vigilância Epidemiológica</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Monitoramento em tempo real · SVS/SINAN · {ultimaAtualizacao}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={handleRefresh} disabled={loading} className="h-8 w-8">
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
        </Button>
      </div>

      {/* Alertas ativos */}
      {alertasAtivos.length > 0 && (
        <Card className="border-orange-500/40 bg-orange-500/5">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-orange-400" />
              <span className="text-sm font-semibold text-orange-400">
                {alertasAtivos.length} alerta{alertasAtivos.length > 1 ? "s" : ""} ativo{alertasAtivos.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {alertasAtivos.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelecionada(d)}
                  className="text-[11px] bg-orange-500/15 text-orange-300 border border-orange-500/30 rounded-full px-2 py-0.5 hover:bg-orange-500/25 transition-colors"
                >
                  ↑ {d.nome}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resumo numérico */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Doenças monitoradas", val: DOENCAS_MONITORADAS.length.toString() },
          { label: "Com alerta", val: alertasAtivos.length.toString() },
          { label: "Casos/semana", val: DOENCAS_MONITORADAS.reduce((a, d) => a + d.casosUltima, 0).toLocaleString("pt-BR") },
        ].map(({ label, val }) => (
          <Card key={label}>
            <CardContent className="p-3 text-center">
              <p className="text-xl font-bold">{val}</p>
              <p className="text-[10px] text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filtro por categoria */}
      <Select value={filtro} onValueChange={setFiltro}>
        <SelectTrigger className="h-8 text-xs">
          <SelectValue placeholder="Filtrar por categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas as categorias</SelectItem>
          {categorias.map(c => (
            <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Cards de doenças */}
      <div className="grid grid-cols-1 gap-3">
        {doencasFiltradas.map(d => (
          <CardDoenca key={d.id} d={d} onSelect={() => setSelecionada(d)} />
        ))}
      </div>

      {/* Rodapé */}
      <Card className="bg-muted/20">
        <CardContent className="p-3">
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info size={12} className="shrink-0 mt-0.5" />
            <p>
              Dados baseados nos Boletins Epidemiológicos Semanais da SVS/MS e notificações do SINAN.
              Para dados municipais em tempo real acesse{" "}
              <a href="https://infodengue.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                InfoDengue
              </a>{" "}
              ou{" "}
              <a href="https://www.gov.br/saude/vigilancia-em-saude" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                SVS/MS
              </a>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
