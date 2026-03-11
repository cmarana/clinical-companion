import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, ChevronRight, ChevronDown, Calculator } from "lucide-react";
import { Label } from "@/components/ui/label";

const obsEmergencies = [
  {
    title: "Eclâmpsia",
    conduct: "MgSO4 (Zuspan): Ataque 4g EV em 20 min → Manutenção 1-2g/h em BIC.\nMonitorar reflexo patelar, FR e diurese.\nResolução da gestação após estabilização.",
    guideline: "FEBRASGO / ACOG",
  },
  {
    title: "Pré-eclâmpsia grave",
    conduct: "PA ≥ 160x110 → Hidralazina 5mg EV a cada 20 min (máx 20mg) ou Nifedipino 10mg VO.\nMgSO4 profilático se sinais de gravidade.\nCorticoide se IG 24-34 sem (Betametasona 12mg IM 2 doses 24/24h).\nInternação e avaliação de resolução.",
    guideline: "FEBRASGO / Ministério da Saúde",
  },
  {
    title: "Hemorragia pós-parto",
    conduct: "Massagem uterina bimanual.\nOcitocina 10-40 UI em 500ml RL (BIC).\nÁcido tranexâmico 1g EV em 10 min (até 30 min pós-parto).\nMisoprostol 800mcg VR se refratária.\nBalão de tamponamento uterino.\nCirurgia se falha das medidas.",
    guideline: "OMS / FIGO",
  },
  {
    title: "DPP (Descolamento Prematuro de Placenta)",
    conduct: "Hipertonia uterina + sangramento vaginal + dor.\nEstabilizar hemodinamicamente.\nCesárea de emergência se feto vivo.\nCoagulograma e reserva de sangue.",
    guideline: "FEBRASGO",
  },
  {
    title: "Trabalho de parto prematuro",
    conduct: "Tocólise se IG 24-34 sem: Nifedipino 20mg VO → 10mg 6/6h.\nCorticoide: Betametasona 12mg IM 2 doses.\nNeuroproteção: MgSO4 se IG < 32 sem.\nATB se RPM: Ampicilina + Azitromicina.",
    guideline: "FEBRASGO / ACOG",
  },
];

const safeDrugs = [
  { drug: "Paracetamol", safe: true, note: "Categoria B — seguro" },
  { drug: "Dipirona", safe: true, note: "Evitar no 1º e 3º trimestre; aceito no 2º" },
  { drug: "Metildopa", safe: true, note: "Anti-hipertensivo de 1ª escolha na gestação" },
  { drug: "Cefalexina", safe: true, note: "Categoria B — seguro para ITU" },
  { drug: "Amoxicilina", safe: true, note: "Categoria B" },
  { drug: "AAS baixa dose", safe: true, note: "Profilaxia pré-eclâmpsia (75-150mg)" },
  { drug: "IECA / BRA", safe: false, note: "CONTRAINDICADO — teratogênico" },
  { drug: "Warfarina", safe: false, note: "CONTRAINDICADO — embriopatia" },
  { drug: "Metotrexato", safe: false, note: "CONTRAINDICADO — abortivo" },
  { drug: "AINEs (3º tri)", safe: false, note: "CONTRAINDICADO — fechamento do ducto arterioso" },
];

export default function Obstetrics() {
  const { subscription } = useAuth();
  const [expanded, setExpanded] = useState<string | null>("emergencies");
  const [dum, setDum] = useState("");

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Obstetrícia" />
        <PremiumGate />
      </>
    );
  }

  const calculateGA = () => {
    if (!dum) return null;
    const dumDate = new Date(dum);
    const today = new Date();
    const diffMs = today.getTime() - dumDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return null;
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    const dpp = new Date(dumDate);
    dpp.setDate(dpp.getDate() + 280);
    return { weeks, days, dpp: dpp.toLocaleDateString("pt-BR") };
  };

  const ga = calculateGA();

  return (
    <>
      <TopBar title="Obstetrícia" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-3 pb-24">
        <div className="flex items-center gap-2 mb-1">
          <Heart size={18} className="text-primary" />
          <p className="font-heading font-semibold text-sm">Guia rápido de Obstetrícia</p>
        </div>

        {/* GA Calculator */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "ga" ? null : "ga")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2">
              <Calculator size={16} className="text-primary" />
              <span className="font-heading font-semibold text-sm">Idade Gestacional</span>
            </div>
            {expanded === "ga" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "ga" && (
            <CardContent className="pt-0 pb-4 px-4 space-y-3">
              <div className="space-y-1.5">
                <Label className="font-heading text-xs">Data da última menstruação (DUM)</Label>
                <Input type="date" value={dum} onChange={e => setDum(e.target.value)} className="h-9 text-sm" />
              </div>
              {ga && (
                <div className="bg-accent/50 rounded-xl p-3 text-center space-y-1">
                  <p className="font-heading text-2xl font-bold">{ga.weeks}s {ga.days}d</p>
                  <p className="text-xs text-muted-foreground">DPP: {ga.dpp}</p>
                </div>
              )}
            </CardContent>
          )}
        </Card>

        {/* Emergencies */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "emergencies" ? null : "emergencies")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <span className="font-heading font-semibold text-sm">🚨 Emergências Obstétricas</span>
            {expanded === "emergencies" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "emergencies" && (
            <CardContent className="pt-0 pb-4 px-4 space-y-3">
              {obsEmergencies.map((e, i) => (
                <div key={i} className="border border-destructive/10 rounded-xl p-3 space-y-2 bg-destructive/5">
                  <p className="font-heading font-bold text-xs">{e.title}</p>
                  <div className="text-xs leading-relaxed whitespace-pre-line">{e.conduct}</div>
                  <p className="text-[10px] text-primary font-heading">Diretriz: {e.guideline}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Safe drugs */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === "drugs" ? null : "drugs")}
            className="w-full p-3.5 flex items-center justify-between text-left"
          >
            <span className="font-heading font-semibold text-sm">💊 Medicamentos na Gestação</span>
            {expanded === "drugs" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {expanded === "drugs" && (
            <CardContent className="pt-0 pb-4 px-4 space-y-2">
              {safeDrugs.map((d, i) => (
                <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${d.safe ? "bg-success/10" : "bg-destructive/10"}`}>
                  <div>
                    <p className="font-heading font-semibold text-xs">{d.drug}</p>
                    <p className="text-[10px] text-muted-foreground">{d.note}</p>
                  </div>
                  <span className={`text-[10px] font-heading font-bold ${d.safe ? "text-success" : "text-destructive"}`}>
                    {d.safe ? "SEGURO" : "CONTRA"}
                  </span>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}
