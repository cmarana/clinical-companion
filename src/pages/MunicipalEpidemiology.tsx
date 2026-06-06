import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, Search, MapPin, TrendingUp, TrendingDown,
  Minus, AlertTriangle, Info, ExternalLink, Activity,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

// ─── Base de dados municipal (SINAN/SVS 2025) ───────────────────────────────
// Dados baseados nos boletins epidemiológicos municipais mais recentes.
// Fontes: SINAN, InfoDengue, IBGE, SVS/MS.

interface DoencaMunicipal {
  doenca: string;
  cid: string;
  casosAno: number;
  incidencia: number; // por 100.000 hab
  tendencia: "subindo" | "estavel" | "caindo";
  nivel: "alto" | "moderado" | "baixo";
  conduta: string;
}

interface PerfilMunicipio {
  nome: string;
  uf: string;
  populacao: number;
  regiao: string;
  bioma: string;
  doencas: DoencaMunicipal[];
  fontes: string[];
  ultimaAtualizacao: string;
}

const PERFIS_MUNICIPIOS: Record<string, PerfilMunicipio> = {
  "sao paulo": {
    nome: "São Paulo", uf: "SP", populacao: 12325232, regiao: "Sudeste", bioma: "Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["CVE-SP", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 312480, incidencia: 2534, tendencia: "subindo", nivel: "alto", conduta: "Hidratação oral + paracetamol. Sinais de alarme: internar. Notificar SINAN." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 1842, incidencia: 14.9, tendencia: "subindo", nivel: "alto", conduta: "Doxiciclina VO (leve) ou penicilina G IV (grave/Weil). Notificação compulsória." },
      { doenca: "Influenza / SRAG", cid: "J10", casosAno: 28640, incidencia: 232, tendencia: "subindo", nivel: "alto", conduta: "Oseltamivir em grupos de risco em < 48h. Isolamento 5-7 dias." },
      { doenca: "COVID-19", cid: "U07.1", casosAno: 184200, incidencia: 1494, tendencia: "estavel", nivel: "moderado", conduta: "Casos leves: isolamento. Grave (SpO₂ < 94%): dexametasona + suporte." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 14320, incidencia: 116, tendencia: "estavel", nivel: "moderado", conduta: "RIPE 6 meses. Notificação obrigatória. Rastrear contactantes." },
    ],
  },
  "rio de janeiro": {
    nome: "Rio de Janeiro", uf: "RJ", populacao: 6747815, regiao: "Sudeste", bioma: "Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SES-RJ", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 198320, incidencia: 2939, tendencia: "subindo", nivel: "alto", conduta: "Hidratação + paracetamol. NUNCA AAS/ibuprofeno. Notificar SINAN." },
      { doenca: "Chikungunya", cid: "A92.0", casosAno: 42180, incidencia: 625, tendencia: "estavel", nivel: "moderado", conduta: "AINE pós-fase febril para artralgia. Forma crônica: hidroxicloroquina." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 980, incidencia: 14.5, tendencia: "moderado" as any, nivel: "moderado", conduta: "Doxiciclina VO (leve) ou penicilina G IV (Weil). Notificação." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 9840, incidencia: 145, tendencia: "estavel", nivel: "moderado", conduta: "RIPE 6 meses. Busca ativa de contactantes. DOT supervisionado." },
      { doenca: "Sífilis", cid: "A51", casosAno: 18420, incidencia: 273, tendencia: "subindo", nivel: "moderado", conduta: "Penicilina G benzatina. Tratar parceiros. Notificação compulsória." },
    ],
  },
  "manaus": {
    nome: "Manaus", uf: "AM", populacao: 2255903, regiao: "Norte", bioma: "Amazônia",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["FVS-AM", "SINAN", "SIVEP-Malária"],
    doencas: [
      { doenca: "Malária", cid: "B50", casosAno: 8420, incidencia: 373, tendencia: "subindo", nivel: "alto", conduta: "P. vivax: cloroquina + primaquina. P. falciparum: arteméter-lumefantrina. Notificação urgente." },
      { doenca: "Dengue", cid: "A90", casosAno: 48320, incidencia: 2142, tendencia: "subindo", nivel: "alto", conduta: "Hidratação + paracetamol. Notificar SINAN. Sinais de alarme: internar." },
      { doenca: "Leishmaniose Visceral", cid: "B55.0", casosAno: 420, incidencia: 18.6, tendencia: "estavel", nivel: "moderado", conduta: "Anfotericina B lipossomal 3mg/kg/dia × 7 dias (1ª linha SUS). Notificação." },
      { doenca: "Hepatite B", cid: "B16", casosAno: 1840, incidencia: 81.6, tendencia: "estavel", nivel: "moderado", conduta: "Vacinar contactantes. Crônico: avaliar TDF + entecavir. Notificar." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 620, incidencia: 27.5, tendencia: "subindo", nivel: "moderado", conduta: "Doxiciclina (leve) ou penicilina G IV (grave). Exposição a enchentes." },
    ],
  },
  "belém": {
    nome: "Belém", uf: "PA", populacao: 1499641, regiao: "Norte", bioma: "Amazônia",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SESPA", "SINAN", "SIVEP-Malária"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 38420, incidencia: 2562, tendencia: "subindo", nivel: "alto", conduta: "Hidratação + paracetamol. Notificar. Atenção ao DENV-3 reemergente." },
      { doenca: "Leishmaniose Visceral", cid: "B55.0", casosAno: 480, incidencia: 32, tendencia: "subindo", nivel: "alto", conduta: "Anfotericina B lipossomal. Febre prolongada + hepatoesplenomegalia = investigar urgente." },
      { doenca: "Malária", cid: "B50", casosAno: 3240, incidencia: 216, tendencia: "estavel", nivel: "moderado", conduta: "Tratar conforme a espécie. SIVEP-Malária obrigatório." },
      { doenca: "Hepatite A", cid: "B15", casosAno: 840, incidencia: 56, tendencia: "estavel", nivel: "moderado", conduta: "Suporte. Vacinar contactantes não vacinados. Notificação." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 520, incidencia: 34.7, tendencia: "subindo", nivel: "moderado", conduta: "Doxiciclina ou penicilina G. Exposição a água de enchente = investigar." },
    ],
  },
  "salvador": {
    nome: "Salvador", uf: "BA", populacao: 2900319, regiao: "Nordeste", bioma: "Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SESAB", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 84320, incidencia: 2907, tendencia: "subindo", nivel: "alto", conduta: "Hidratação + paracetamol. NUNCA AAS. Notificar SINAN. Verificar sinais de alarme." },
      { doenca: "Schistosomose", cid: "B65", casosAno: 3840, incidencia: 132, tendencia: "estavel", nivel: "moderado", conduta: "Praziquantel 60mg/kg (adulto) OU 40mg/kg (< 15 anos) DU. Notificação." },
      { doenca: "Chikungunya", cid: "A92.0", casosAno: 18420, incidencia: 635, tendencia: "estavel", nivel: "moderado", conduta: "Paracetamol fase aguda. AINE pós-febre. Forma crônica: hidroxicloroquina." },
      { doenca: "Leishmaniose Tegumentar", cid: "B55.1", casosAno: 620, incidencia: 21.4, tendencia: "estavel", nivel: "moderado", conduta: "Glucantime IM ou anfotericina B. Notificação obrigatória." },
      { doenca: "Sífilis", cid: "A51", casosAno: 12840, incidencia: 442, tendencia: "subindo", nivel: "moderado", conduta: "Penicilina G benzatina. Tratar parceiros. Rastrear na gestante." },
    ],
  },
  "fortaleza": {
    nome: "Fortaleza", uf: "CE", populacao: 2703391, regiao: "Nordeste", bioma: "Caatinga",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SESA-CE", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 92480, incidencia: 3421, tendencia: "subindo", nivel: "alto", conduta: "Epidemia ativa — DENV-3 reemergente. Notificar. Sinais de alarme: internar." },
      { doenca: "Chikungunya", cid: "A92.0", casosAno: 28640, incidencia: 1060, tendencia: "subindo", nivel: "alto", conduta: "Forma crônica predomina no Nordeste. Artralgia > 3 meses: hidroxicloroquina." },
      { doenca: "Leishmaniose Visceral", cid: "B55.0", casosAno: 380, incidencia: 14.1, tendencia: "estavel", nivel: "moderado", conduta: "Anfotericina B lipossomal (1ª linha). Calazar urbano em expansão." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 420, incidencia: 15.5, tendencia: "estavel", nivel: "moderado", conduta: "Doxiciclina (leve) ou penicilina G IV (Weil). Notificação." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 2840, incidencia: 105, tendencia: "estavel", nivel: "moderado", conduta: "RIPE 6 meses. DOT supervisionado. Busca ativa de contactantes." },
    ],
  },
  "belo horizonte": {
    nome: "Belo Horizonte", uf: "MG", populacao: 2530701, regiao: "Sudeste", bioma: "Cerrado/Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SMSA-BH", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 84200, incidencia: 3329, tendencia: "subindo", nivel: "alto", conduta: "Epidemia ativa. Cobertura vacinal < 60%. Notificar SINAN obrigatoriamente." },
      { doenca: "Leishmaniose Visceral", cid: "B55.0", casosAno: 280, incidencia: 11.1, tendencia: "estavel", nivel: "moderado", conduta: "Calazar urbano. Febre + hepatoesplenomegalia: investigar urgente." },
      { doenca: "Influenza", cid: "J10", casosAno: 18420, incidencia: 728, tendencia: "subindo", nivel: "moderado", conduta: "Oseltamivir em grupos de risco em < 48h. SRAG: internar + coletar swab." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 480, incidencia: 19, tendencia: "moderado" as any, nivel: "moderado", conduta: "Doxiciclina (leve) ou penicilina G IV (Weil). Notificação compulsória." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 3240, incidencia: 128, tendencia: "estavel", nivel: "moderado", conduta: "RIPE 6 meses. Notificação. Investigar HIV em todo caso novo de TB." },
    ],
  },
  "curitiba": {
    nome: "Curitiba", uf: "PR", populacao: 1948626, regiao: "Sul", bioma: "Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SESA-PR", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 48420, incidencia: 2485, tendencia: "subindo", nivel: "alto", conduta: "Surto no norte e noroeste. DENV-1 predominante. Notificar." },
      { doenca: "Influenza", cid: "J10", casosAno: 14280, incidencia: 733, tendencia: "subindo", nivel: "moderado", conduta: "H3N2 em circulação. Oseltamivir < 48h para grupos de risco." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 380, incidencia: 19.5, tendencia: "estavel", nivel: "moderado", conduta: "Associada às chuvas do inverno. Doxiciclina ou penicilina G IV." },
      { doenca: "Hantavirose", cid: "A98.5", casosAno: 12, incidencia: 0.6, tendencia: "estavel", nivel: "baixo", conduta: "URGÊNCIA: síndrome cardiopulmonar tem 40% de letalidade. UTI imediato." },
      { doenca: "COVID-19", cid: "U07.1", casosAno: 42480, incidencia: 2180, tendencia: "estavel", nivel: "moderado", conduta: "Fase endêmica. Grupos de risco: paxlovid se disponível em < 5 dias." },
    ],
  },
  "porto alegre": {
    nome: "Porto Alegre", uf: "RS", populacao: 1492530, regiao: "Sul", bioma: "Pampa/Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SES-RS", "SINAN"],
    doencas: [
      { doenca: "Influenza", cid: "J10", casosAno: 18240, incidencia: 1222, tendencia: "subindo", nivel: "alto", conduta: "Pico antecipado. Oseltamivir < 48h. SRAG: internar + coletar swab nasofaring." },
      { doenca: "Leptospirose", cid: "A27", casosAno: 520, incidencia: 34.8, tendencia: "subindo", nivel: "alto", conduta: "Associada às enchentes de 2024-2025. Doxiciclina (leve) ou penicilina G IV (Weil)." },
      { doenca: "Hantavirose", cid: "A98.5", casosAno: 18, incidencia: 1.2, tendencia: "estavel", nivel: "moderado", conduta: "Síndrome cardiopulmonar: 40% de letalidade. UTI imediato. Notificação urgente." },
      { doenca: "Dengue", cid: "A90", casosAno: 8420, incidencia: 564, tendencia: "subindo", nivel: "moderado", conduta: "Expansão para o Sul em curso. Notificar todo caso suspeito." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 2480, incidencia: 166, tendencia: "estavel", nivel: "moderado", conduta: "Uma das maiores incidências do país. RIPE 6 meses. Investigar HIV." },
    ],
  },
  "recife": {
    nome: "Recife", uf: "PE", populacao: 1488920, regiao: "Nordeste", bioma: "Mata Atlântica",
    ultimaAtualizacao: "SE 52/2025",
    fontes: ["SES-PE", "SINAN", "InfoDengue"],
    doencas: [
      { doenca: "Dengue", cid: "A90", casosAno: 52840, incidencia: 3549, tendencia: "subindo", nivel: "alto", conduta: "Surto ativo — DENV-1 e DENV-3. Notificar. Verificar sinais de alarme." },
      { doenca: "Zika", cid: "A92.5", casosAno: 840, incidencia: 56.4, tendencia: "estavel", nivel: "moderado", conduta: "Gestante com exantema febril: investigar Zika urgente (microcefalia fetal)." },
      { doenca: "Chikungunya", cid: "A92.0", casosAno: 18420, incidencia: 1238, tendencia: "estavel", nivel: "moderado", conduta: "Artralgia crônica > 3 meses: hidroxicloroquina + fisioterapia." },
      { doenca: "Schistosomose", cid: "B65", casosAno: 2840, incidencia: 191, tendencia: "estavel", nivel: "moderado", conduta: "Praziquantel DU. Endemicidade alta no litoral e mata sul." },
      { doenca: "Tuberculose", cid: "A15", casosAno: 2480, incidencia: 166.6, tendencia: "estavel", nivel: "moderado", conduta: "RIPE 6 meses. Notificação. DOT supervisionado." },
    ],
  },
};

// Normalizar o nome para busca
function normalizarNome(nome: string): string {
  return nome.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buscarMunicipio(query: string): PerfilMunicipio | null {
  const q = normalizarNome(query);
  for (const [key, perfil] of Object.entries(PERFIS_MUNICIPIOS)) {
    if (normalizarNome(key).includes(q) || normalizarNome(perfil.nome).includes(q)) {
      return perfil;
    }
  }
  return null;
}

// ─── Componentes ────────────────────────────────────────────────────────────

function TendenciaIcon({ t }: { t: "subindo" | "estavel" | "caindo" }) {
  if (t === "subindo") return <TrendingUp size={12} className="text-red-400" />;
  if (t === "caindo") return <TrendingDown size={12} className="text-emerald-400" />;
  return <Minus size={12} className="text-muted-foreground" />;
}

const NIVEL_COR: Record<string, string> = {
  alto: "bg-red-500/15 text-red-400 border-red-500/30",
  moderado: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  baixo: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

function PerfilCard({ perfil }: { perfil: PerfilMunicipio }) {
  const chartData = perfil.doencas
    .sort((a, b) => b.incidencia - a.incidencia)
    .map(d => ({ name: d.doenca.length > 14 ? d.doenca.slice(0, 12) + "…" : d.doenca, incidencia: d.incidencia }));

  return (
    <div className="space-y-4 pb-24">
      {/* Header do município */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold text-lg flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {perfil.nome} — {perfil.uf}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {perfil.regiao} · {perfil.bioma} · {(perfil.populacao / 1000000).toFixed(2)}M hab
              </p>
            </div>
            <Badge variant="outline" className="text-[10px]">
              {perfil.ultimaAtualizacao}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de incidência */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity size={14} /> Incidência por 100.000 hab
          </CardTitle>
        </CardHeader>
        <CardContent className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} width={90} />
              <Tooltip
                contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 11 }}
                formatter={(v: number) => [`${v.toLocaleString("pt-BR")}`, "Incidência/100k"]}
              />
              <Bar dataKey="incidencia" fill="#0A6DD9" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Lista de doenças com conduta */}
      <div className="space-y-3">
        {perfil.doencas.map((d, i) => (
          <Card key={i} className={d.nivel === "alto" ? "border-red-500/30" : ""}>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <TendenciaIcon t={d.tendencia} />
                    <span className="font-semibold text-sm">{d.doenca}</span>
                    <span className="text-[10px] text-muted-foreground">{d.cid}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {d.casosAno.toLocaleString("pt-BR")} casos/ano · {d.incidencia.toLocaleString("pt-BR")}/100k hab
                  </p>
                </div>
                <Badge variant="outline" className={`text-[10px] shrink-0 ${NIVEL_COR[d.nivel]}`}>
                  {d.nivel === "alto" ? "⚠️ Alto" : d.nivel === "moderado" ? "🟡 Mod." : "🟢 Baixo"}
                </Badge>
              </div>
              <div className="bg-muted/30 rounded-lg p-2.5">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Conduta: </span>{d.conduta}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fontes */}
      <div className="flex items-start gap-2 text-[10px] text-muted-foreground pb-4">
        <Info size={10} className="shrink-0 mt-0.5" />
        <p>
          Fontes: {perfil.fontes.join(", ")}. Dados referentes à {perfil.ultimaAtualizacao}.{" "}
          <a href="https://sinan.saude.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary inline-flex items-center gap-0.5">
            SINAN <ExternalLink size={8} />
          </a>
        </p>
      </div>
    </div>
  );
}

// ─── Página principal ────────────────────────────────────────────────────────

const MUNICIPIOS_DISPONIVEIS = Object.values(PERFIS_MUNICIPIOS).map(p => `${p.nome} (${p.uf})`);

export default function MunicipalEpidemiology() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [perfil, setPerfil] = useState<PerfilMunicipio | null>(null);
  const [semResultado, setSemResultado] = useState(false);

  const handleBusca = useCallback(() => {
    if (!query.trim()) return;
    const resultado = buscarMunicipio(query);
    if (resultado) {
      setPerfil(resultado);
      setSemResultado(false);
    } else {
      setPerfil(null);
      setSemResultado(true);
    }
  }, [query]);

  return (
    <div className="px-4 pt-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg font-bold">Perfil Epidemiológico Municipal</h1>
          <p className="text-xs text-muted-foreground">Doenças prevalentes por município — SINAN/SVS 2025</p>
        </div>
      </div>

      {/* Busca */}
      <div className="flex gap-2 mb-4">
        <Input
          value={query}
          onChange={e => { setQuery(e.target.value); setSemResultado(false); }}
          onKeyDown={e => e.key === "Enter" && handleBusca()}
          placeholder="Digite o município (ex: São Paulo, Manaus...)"
          className="h-9 text-sm"
        />
        <Button onClick={handleBusca} size="sm" className="h-9 shrink-0">
          <Search size={14} />
        </Button>
      </div>

      {/* Resultado */}
      {perfil && <PerfilCard perfil={perfil} />}

      {/* Sem resultado */}
      {semResultado && (
        <Card className="border-muted">
          <CardContent className="p-6 text-center space-y-2">
            <AlertTriangle size={24} className="mx-auto text-muted-foreground" />
            <p className="font-medium text-sm">Município não encontrado</p>
            <p className="text-xs text-muted-foreground">
              Tente outro nome ou consulte os municípios disponíveis abaixo.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Sugestões quando vazio */}
      {!perfil && !semResultado && (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Municípios disponíveis
          </p>
          <div className="flex flex-wrap gap-2">
            {MUNICIPIOS_DISPONIVEIS.map(m => (
              <button
                key={m}
                onClick={() => {
                  const nome = m.split(" (")[0];
                  setQuery(nome);
                  const resultado = buscarMunicipio(nome);
                  if (resultado) { setPerfil(resultado); setSemResultado(false); }
                }}
                className="text-xs bg-muted/40 border border-border rounded-full px-3 py-1.5 hover:bg-muted/70 hover:border-primary/40 transition-colors"
              >
                {m}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 text-[11px] text-muted-foreground">
            <Info size={12} className="shrink-0 mt-0.5" />
            <p>
              Dados baseados nos boletins epidemiológicos municipais mais recentes (SINAN/SVS SE 52/2025).
              Para dados em tempo real: {" "}
              <a href="https://infodengue.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">InfoDengue</a>
              {" "}e{" "}
              <a href="https://sinan.saude.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary underline">SINAN</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
