import { useNavigate } from "react-router-dom";
import { Heart, Wind, Zap, Bug, Brain, Syringe, AlertTriangle, Activity } from "lucide-react";

const criticalProtocols = [
  { id: "em-pcr-adulto", label: "PCR", icon: Heart, color: "bg-destructive/15 text-destructive border-destructive/30" },
  { id: "em-iot", label: "IOT", icon: Wind, color: "bg-destructive/15 text-destructive border-destructive/30" },
  { id: "em-choque-cardiogenico", label: "Choque", icon: Activity, color: "bg-destructive/15 text-destructive border-destructive/30" },
  { id: "sepse-grave-infecto", label: "Sepse", icon: Bug, color: "bg-orange-500/15 text-orange-600 border-orange-500/30" },
  { id: "em-iam-supra", label: "IAM", icon: Zap, color: "bg-orange-500/15 text-orange-600 border-orange-500/30" },
  { id: "em-dor-toracica", label: "AVC", icon: Brain, color: "bg-orange-500/15 text-orange-600 border-orange-500/30" },
  { id: "em-bradicardia", label: "Convulsão", icon: AlertTriangle, color: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" },
  { id: "anafilaxia-emergencia", label: "Anafilaxia", icon: Syringe, color: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" },
];

// Override with correct IDs
const CORRECT_IDS: Record<string, string> = {
  "AVC": "em-dor-toracica", // will be overridden below
  "Convulsão": "em-bradicardia",
};

const SALA_VERMELHA_ITEMS = [
  { id: "em-pcr-adulto", label: "PCR / RCP", icon: Heart, desc: "ACLS • Ritmo • Drogas" },
  { id: "em-iot", label: "IOT / VA", icon: Wind, desc: "SRI • Via Aérea Difícil" },
  { id: "em-choque-cardiogenico", label: "Choque", icon: Activity, desc: "Hipo • Cardio • Sepse • Obst" },
  { id: "sepse-grave-infecto", label: "Sepse", icon: Bug, desc: "Bundle 1h • ATB • Volume" },
  { id: "em-iam-supra", label: "IAM / SCA", icon: Zap, desc: "STEMI • NSTEMI • Tropa" },
  { id: "pcr-pediatrica-emergencia", label: "AVC", icon: Brain, desc: "Isquêmico • Hemorrágico • NIHSS" },
  { id: "em-taquiarritmia-instavel", label: "Convulsão", icon: AlertTriangle, desc: "Status • Diazepam • Fenitoína" },
  { id: "anafilaxia-emergencia", label: "Anafilaxia", icon: Syringe, desc: "Adrenalina IM • Volume" },
];

export default function SalaVermelha() {
  const navigate = useNavigate();

  // Correct mappings
  const items = [
    { id: "em-pcr-adulto", label: "PCR / RCP", icon: Heart, desc: "ACLS • Compressões • Drogas" },
    { id: "em-iot", label: "IOT / VA", icon: Wind, desc: "SRI • Via Aérea Difícil" },
    { id: "em-choque-cardiogenico", label: "Choque", icon: Activity, desc: "Hipo • Cardio • Séptico" },
    { id: "sepse-grave-infecto", label: "Sepse", icon: Bug, desc: "Bundle 1h • ATB • Volume" },
    { id: "em-iam-supra", label: "IAM", icon: Zap, desc: "STEMI • NSTEMI • Troponina" },
    { id: "em-dor-toracica", label: "AVC", icon: Brain, desc: "Isquêmico • Hemorrágico" },
    { id: "em-taquiarritmia-instavel", label: "Arritmia", icon: AlertTriangle, desc: "Taqui • Bradi • CVE" },
    { id: "anafilaxia-emergencia", label: "Anafilaxia", icon: Syringe, desc: "Adrenalina IM • Volume" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
        <h2 className="font-heading font-bold text-sm text-destructive">MODO SALA VERMELHA</h2>
      </div>
      <p className="text-[10px] text-muted-foreground -mt-2">Acesso direto às condutas críticas — toque para abrir</p>
      <div className="grid grid-cols-2 gap-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => navigate(`/emergency/${item.id}`)}
            className="flex items-center gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-destructive/15 flex items-center justify-center shrink-0">
              <item.icon size={20} className="text-destructive" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm">{item.label}</p>
              <p className="text-[9px] text-muted-foreground leading-tight">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
