import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, Info, TrendingUp, Activity } from "lucide-react";

// ─── Dados por estado ────────────────────────────────────────────────────────

interface AlertaEstado {
  uf: string;
  nome: string;
  nivel: "critico" | "alto" | "moderado" | "baixo";
  principal: string;
  casos: string;
  tendencia: "subindo" | "estavel" | "caindo";
  alertas: { doenca: string; msg: string; nivel: "alto" | "moderado" }[];
}

const DADOS_ESTADOS: Record<string, AlertaEstado> = {
  AC: { uf: "AC", nome: "Acre", nivel: "alto", principal: "Malária", casos: "8.4k/ano", tendencia: "subindo", alertas: [{ doenca: "Malária", msg: "P. vivax e P. falciparum — alta transmissão em municípios ribeirinhos.", nivel: "alto" }, { doenca: "Dengue", msg: "Circulação ativa de DENV.", nivel: "moderado" }] },
  AL: { uf: "AL", nome: "Alagoas", nivel: "alto", principal: "Dengue", casos: "42k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Maceió com surto ativo. Notificação obrigatória.", nivel: "alto" }, { doenca: "Schistosomose", msg: "Alta endemicidade no interior.", nivel: "alto" }] },
  AP: { uf: "AP", nome: "Amapá", nivel: "alto", principal: "Malária", casos: "6.2k/ano", tendencia: "estavel", alertas: [{ doenca: "Malária", msg: "P. falciparum e P. vivax — alto risco no interior.", nivel: "alto" }, { doenca: "Dengue", msg: "Macapá com circulação ativa.", nivel: "moderado" }] },
  AM: { uf: "AM", nome: "Amazonas", nivel: "critico", principal: "Malária", casos: "48k/ano", tendencia: "subindo", alertas: [{ doenca: "Malária", msg: "Alta transmissão. Todo febril sem foco: investigar.", nivel: "alto" }, { doenca: "Dengue", msg: "Surto ativo em Manaus e interior.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Casos acima da média.", nivel: "moderado" }] },
  BA: { uf: "BA", nome: "Bahia", nivel: "alto", principal: "Dengue", casos: "180k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Salvador e interior em epidemia. DENV-1 e DENV-3.", nivel: "alto" }, { doenca: "Schistosomose", msg: "Alta endemicidade no interior baiano.", nivel: "moderado" }] },
  CE: { uf: "CE", nome: "Ceará", nivel: "alto", principal: "Dengue", casos: "145k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Fortaleza com epidemia. DENV-3 reemergente.", nivel: "alto" }, { doenca: "Chikungunya", msg: "Casos acima da média. Formas crônicas predominam.", nivel: "alto" }] },
  DF: { uf: "DF", nome: "Distrito Federal", nivel: "alto", principal: "Dengue", casos: "98k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Epidemia ativa. Hospitalizações acima da capacidade.", nivel: "alto" }, { doenca: "Influenza", msg: "H3N2 em circulação.", nivel: "moderado" }] },
  ES: { uf: "ES", nome: "Espírito Santo", nivel: "alto", principal: "Dengue", casos: "72k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Vitória e Grande Vitória com epidemia ativa.", nivel: "alto" }, { doenca: "Leptospirose", msg: "Associada às enchentes do litoral.", nivel: "moderado" }] },
  GO: { uf: "GO", nome: "Goiás", nivel: "alto", principal: "Dengue", casos: "160k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Goiânia com epidemia. Cobertura vacinal insuficiente.", nivel: "alto" }, { doenca: "Leishmaniose Tegumentar", msg: "Aumento em municípios rurais.", nivel: "moderado" }] },
  MA: { uf: "MA", nome: "Maranhão", nivel: "critico", principal: "Leishmaniose Visceral", casos: "240 calazar/ano", tendencia: "subindo", alertas: [{ doenca: "Leishmaniose Visceral", msg: "Uma das maiores incidências do país. Febre prolongada: investigar urgente.", nivel: "alto" }, { doenca: "Dengue", msg: "São Luís com surto. DENV-3 reemergente.", nivel: "alto" }] },
  MT: { uf: "MT", nome: "Mato Grosso", nivel: "alto", principal: "Dengue", casos: "128k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Cuiabá com epidemia. DENV-1 e DENV-3.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Municípios rurais com transmissão ativa.", nivel: "moderado" }] },
  MS: { uf: "MS", nome: "Mato Grosso do Sul", nivel: "alto", principal: "Dengue", casos: "94k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Campo Grande com surto ativo.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Cidades de fronteira com alta transmissão.", nivel: "moderado" }] },
  MG: { uf: "MG", nome: "Minas Gerais", nivel: "alto", principal: "Dengue", casos: "420k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "BH e região metropolitana em alerta máximo.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Calazar urbano em expansão.", nivel: "moderado" }] },
  PA: { uf: "PA", nome: "Pará", nivel: "alto", principal: "Malária", casos: "32k/ano", tendencia: "estavel", alertas: [{ doenca: "Malária", msg: "Alta transmissão em municípios da Amazônia paraense.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Belém com aumento de casos.", nivel: "alto" }] },
  PB: { uf: "PB", nome: "Paraíba", nivel: "moderado", principal: "Dengue", casos: "48k/ano", tendencia: "estavel", alertas: [{ doenca: "Dengue", msg: "João Pessoa com casos em alta.", nivel: "moderado" }, { doenca: "Leishmaniose Tegumentar", msg: "Casos no agreste e sertão.", nivel: "moderado" }] },
  PR: { uf: "PR", nome: "Paraná", nivel: "alto", principal: "Dengue", casos: "198k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Surto no norte e noroeste. Notificação obrigatória.", nivel: "alto" }, { doenca: "Leptospirose", msg: "Casos associados às chuvas de verão.", nivel: "moderado" }] },
  PE: { uf: "PE", nome: "Pernambuco", nivel: "alto", principal: "Dengue", casos: "142k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Recife e Grande Recife com surto ativo.", nivel: "alto" }, { doenca: "Zika", msg: "Casos esporádicos. Vigilância em gestantes.", nivel: "moderado" }] },
  PI: { uf: "PI", nome: "Piauí", nivel: "alto", principal: "Leishmaniose Visceral", casos: "180 calazar/ano", tendencia: "subindo", alertas: [{ doenca: "Leishmaniose Visceral", msg: "Alta endemicidade. Hepatoesplenomegalia + febre = investigar urgente.", nivel: "alto" }, { doenca: "Dengue", msg: "Teresina com casos acima da média.", nivel: "moderado" }] },
  RJ: { uf: "RJ", nome: "Rio de Janeiro", nivel: "alto", principal: "Dengue", casos: "380k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Surto ativo nas zonas norte e oeste. DENV-3 predominante.", nivel: "alto" }, { doenca: "Chikungunya", msg: "Casos acima da média histórica.", nivel: "moderado" }] },
  RN: { uf: "RN", nome: "Rio Grande do Norte", nivel: "alto", principal: "Dengue", casos: "68k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Natal com epidemia ativa. DENV-1 e DENV-3.", nivel: "alto" }, { doenca: "Chikungunya", msg: "Formas crônicas predominam no litoral.", nivel: "moderado" }] },
  RS: { uf: "RS", nome: "Rio Grande do Sul", nivel: "alto", principal: "Leptospirose", casos: "1.2k/ano", tendencia: "subindo", alertas: [{ doenca: "Leptospirose", msg: "Associada às enchentes de 2024-2025. Alta letalidade.", nivel: "alto" }, { doenca: "Influenza", msg: "Pico antecipado. SRAG em alta.", nivel: "alto" }, { doenca: "Hantavirose", msg: "Planalto gaúcho com casos. UTI imediato.", nivel: "moderado" }] },
  RO: { uf: "RO", nome: "Rondônia", nivel: "alto", principal: "Malária", casos: "18k/ano", tendencia: "subindo", alertas: [{ doenca: "Malária", msg: "P. vivax com alta transmissão. Todo febril sem foco: investigar.", nivel: "alto" }, { doenca: "Dengue", msg: "Porto Velho com circulação ativa.", nivel: "moderado" }] },
  RR: { uf: "RR", nome: "Roraima", nivel: "alto", principal: "Malária", casos: "12k/ano", tendencia: "subindo", alertas: [{ doenca: "Malária", msg: "Investigar em migrantes da fronteira com Venezuela.", nivel: "alto" }, { doenca: "Dengue", msg: "Boa Vista com circulação ativa.", nivel: "moderado" }] },
  SC: { uf: "SC", nome: "Santa Catarina", nivel: "alto", principal: "Influenza", casos: "28k SRAG/ano", tendencia: "subindo", alertas: [{ doenca: "Influenza", msg: "Pico antecipado da temporada. Internações por SRAG em alta.", nivel: "alto" }, { doenca: "Leptospirose", msg: "Casos associados às chuvas do sul.", nivel: "moderado" }] },
  SP: { uf: "SP", nome: "São Paulo", nivel: "critico", principal: "Dengue", casos: "1.8M/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Epidemia mais extensa do país. DENV-1 e DENV-3.", nivel: "alto" }, { doenca: "Leptospirose", msg: "Aumento de 42% nas últimas 4 semanas.", nivel: "alto" }, { doenca: "Influenza", msg: "H3N2 em circulação. Grupos de risco: oseltamivir.", nivel: "moderado" }] },
  SE: { uf: "SE", nome: "Sergipe", nivel: "moderado", principal: "Dengue", casos: "38k/ano", tendencia: "estavel", alertas: [{ doenca: "Dengue", msg: "Aracaju com casos acima da média.", nivel: "moderado" }, { doenca: "Leptospirose", msg: "Casos no baixo São Francisco.", nivel: "moderado" }] },
  TO: { uf: "TO", nome: "Tocantins", nivel: "alto", principal: "Dengue", casos: "62k/ano", tendencia: "subindo", alertas: [{ doenca: "Dengue", msg: "Palmas com surto ativo. Cobertura vacinal baixa.", nivel: "alto" }, { doenca: "Leishmaniose Visceral", msg: "Municípios do norte com transmissão.", nivel: "moderado" }] },
};

const NIVEL_COR: Record<string, string> = {
  critico: "#ef4444",
  alto:    "#f97316",
  moderado:"#eab308",
  baixo:   "#22c55e",
};

const NIVEL_BG: Record<string, string> = {
  critico: "bg-red-500/15 border-red-500/40 text-red-400",
  alto:    "bg-orange-500/15 border-orange-500/40 text-orange-400",
  moderado:"bg-yellow-500/15 border-yellow-500/40 text-yellow-400",
  baixo:   "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
};

// ─── Mapa SVG do Brasil (simplificado, estados clicáveis) ───────────────────
// Coordenadas aproximadas para os centróides de cada estado
const ESTADO_POS: Record<string, { x: number; y: number; w: number; h: number }> = {
  AM: { x: 95, y: 108, w: 100, h: 80 },
  PA: { x: 215, y: 100, w: 90, h: 80 },
  MT: { x: 170, y: 205, w: 85, h: 70 },
  TO: { x: 245, y: 185, w: 50, h: 70 },
  MA: { x: 290, y: 100, w: 60, h: 60 },
  PI: { x: 320, y: 138, w: 50, h: 55 },
  BA: { x: 300, y: 195, w: 80, h: 80 },
  GO: { x: 218, y: 220, w: 65, h: 55 },
  MS: { x: 170, y: 270, w: 70, h: 60 },
  MG: { x: 280, y: 248, w: 75, h: 65 },
  SP: { x: 248, y: 300, w: 65, h: 50 },
  PR: { x: 228, y: 340, w: 65, h: 40 },
  SC: { x: 235, y: 370, w: 55, h: 30 },
  RS: { x: 222, y: 390, w: 65, h: 45 },
  RJ: { x: 300, y: 298, w: 42, h: 30 },
  ES: { x: 320, y: 275, w: 38, h: 32 },
  RN: { x: 355, y: 110, w: 42, h: 35 },
  PB: { x: 350, y: 138, w: 42, h: 28 },
  PE: { x: 335, y: 160, w: 55, h: 28 },
  AL: { x: 355, y: 182, w: 32, h: 26 },
  SE: { x: 350, y: 202, w: 30, h: 26 },
  CE: { x: 330, y: 90, w: 52, h: 45 },
  RO: { x: 120, y: 188, w: 60, h: 52 },
  AC: { x: 65, y: 178, w: 55, h: 42 },
  RR: { x: 120, y: 50, w: 65, h: 60 },
  AP: { x: 225, y: 48, w: 50, h: 52 },
  DF: { x: 232, y: 226, w: 20, h: 16 },
};

function MapaSVG({ onSelect, selecionado }: { onSelect: (uf: string) => void; selecionado: string | null }) {
  return (
    <svg
      viewBox="30 30 370 425"
      className="w-full"
      style={{ maxHeight: 360 }}
    >
      {/* Fundo oceano */}
      <rect x="30" y="30" width="370" height="425" fill="#0f172a" rx="8" />

      {/* Estados como retângulos arredondados aproximados */}
      {Object.entries(ESTADO_POS).map(([uf, pos]) => {
        const dado = DADOS_ESTADOS[uf];
        const cor = dado ? NIVEL_COR[dado.nivel] : "#334155";
        const isSel = selecionado === uf;
        return (
          <g key={uf} onClick={() => onSelect(uf)} style={{ cursor: "pointer" }}>
            <rect
              x={pos.x} y={pos.y} width={pos.w} height={pos.h}
              rx={4} ry={4}
              fill={cor}
              fillOpacity={isSel ? 0.95 : 0.65}
              stroke={isSel ? "#fff" : "#0f172a"}
              strokeWidth={isSel ? 2 : 1}
            />
            <text
              x={pos.x + pos.w / 2}
              y={pos.y + pos.h / 2 + 4}
              textAnchor="middle"
              fontSize={pos.w < 45 ? 7 : 9}
              fontWeight="700"
              fill="#fff"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {uf}
            </text>
          </g>
        );
      })}

      {/* Legenda */}
      {[
        { label: "Crítico", cor: "#ef4444" },
        { label: "Alto", cor: "#f97316" },
        { label: "Moderado", cor: "#eab308" },
        { label: "Baixo", cor: "#22c55e" },
      ].map((item, i) => (
        <g key={item.label} transform={`translate(${38 + i * 68}, 440)`}>
          <rect x={0} y={0} width={12} height={12} rx={2} fill={item.cor} fillOpacity={0.8} />
          <text x={16} y={10} fontSize={8} fill="#94a3b8">{item.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Painel de detalhes ──────────────────────────────────────────────────────

function PainelEstado({ dado }: { dado: AlertaEstado }) {
  return (
    <Card className={`border ${NIVEL_BG[dado.nivel].split(" ")[1]}`}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-base">{dado.nome} ({dado.uf})</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <TrendingUp size={10} />
              Principal: {dado.principal} · {dado.casos}
            </p>
          </div>
          <Badge variant="outline" className={`text-[10px] ${NIVEL_BG[dado.nivel]}`}>
            {dado.nivel.charAt(0).toUpperCase() + dado.nivel.slice(1)}
          </Badge>
        </div>

        <div className="space-y-2">
          {dado.alertas.map((a, i) => (
            <div key={i} className={`rounded-lg border p-2.5 ${a.nivel === "alto" ? "bg-red-500/8 border-red-500/25" : "bg-orange-500/8 border-orange-500/25"}`}>
              <p className={`text-xs font-semibold mb-0.5 ${a.nivel === "alto" ? "text-red-400" : "text-orange-400"}`}>
                {a.nivel === "alto" ? "⚠️" : "📊"} {a.doenca}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{a.msg}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Página principal ────────────────────────────────────────────────────────

export default function EpidemicMap() {
  const navigate = useNavigate();
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const dadoSelecionado = selecionado ? DADOS_ESTADOS[selecionado] : null;

  // Contagem por nível
  const contagem = Object.values(DADOS_ESTADOS).reduce((acc, d) => {
    acc[d.nivel] = (acc[d.nivel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="px-4 pt-4 pb-24 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Activity size={18} className="text-primary" />
            Mapa Epidemiológico
          </h1>
          <p className="text-xs text-muted-foreground">Alertas SVS por estado · SE 52/2025</p>
        </div>
      </div>

      {/* Resumo rápido */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { nivel: "critico", label: "Crítico", icon: "🔴" },
          { nivel: "alto", label: "Alto", icon: "🟠" },
          { nivel: "moderado", label: "Mod.", icon: "🟡" },
          { nivel: "baixo", label: "Baixo", icon: "🟢" },
        ].map(({ nivel, label, icon }) => (
          <Card key={nivel}>
            <CardContent className="p-2 text-center">
              <p className="text-base">{icon}</p>
              <p className="text-lg font-bold">{contagem[nivel] || 0}</p>
              <p className="text-[10px] text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mapa */}
      <Card>
        <CardHeader className="pb-1">
          <CardTitle className="text-sm text-muted-foreground">
            Toque em um estado para ver os alertas
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <MapaSVG onSelect={setSelecionado} selecionado={selecionado} />
        </CardContent>
      </Card>

      {/* Painel do estado selecionado */}
      {dadoSelecionado ? (
        <PainelEstado dado={dadoSelecionado} />
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Estados em alerta crítico
          </p>
          {Object.values(DADOS_ESTADOS)
            .filter(d => d.nivel === "critico")
            .map(d => (
              <button
                key={d.uf}
                onClick={() => setSelecionado(d.uf)}
                className="w-full flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/8 px-3 py-2.5 hover:bg-red-500/12 transition-colors text-left"
              >
                <AlertTriangle size={14} className="text-red-400 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-red-400">{d.nome} ({d.uf})</p>
                  <p className="text-[11px] text-muted-foreground">{d.principal} · {d.casos}</p>
                </div>
              </button>
            ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-start gap-2 text-[10px] text-muted-foreground">
        <Info size={10} className="shrink-0 mt-0.5" />
        <p>Dados baseados nos Boletins Epidemiológicos Semanais SVS/MS (SE 52/2025). Para dados municipais em tempo real: InfoDengue e SINAN.</p>
      </div>
    </div>
  );
}
