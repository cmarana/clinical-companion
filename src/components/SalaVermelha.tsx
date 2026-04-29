import { useNavigate } from "react-router-dom";
import { Heart, Wind, Zap, Bug, Brain, Syringe, AlertTriangle, Activity } from "lucide-react";
import { startTTPSession } from "@/hooks/useTTPTracking";

const items = [
  { id: "em-pcr-adulto", label: "PCR / RCP", icon: Heart, desc: "ACLS • Compressões • Drogas" },
  { id: "em-iot", label: "IOT / VA", icon: Wind, desc: "SRI • Via Aérea Difícil" },
  { id: "em-choque-cardiogenico", label: "Choque", icon: Activity, desc: "Hipo • Cardio • Séptico" },
  { id: "sepse-grave-infecto", label: "Sepse", icon: Bug, desc: "Bundle 1h • ATB • Volume" },
  { id: "em-iam-supra", label: "IAM", icon: Zap, desc: "STEMI • NSTEMI • Troponina" },
  { id: "avc-isquemico", label: "AVC", icon: Brain, desc: "Isquêmico • Hemorrágico" },
  { id: "em-taquiarritmia-instavel", label: "Arritmia", icon: AlertTriangle, desc: "Taqui • Bradi • CVE" },
  { id: "anafilaxia-emergencia", label: "Anafilaxia", icon: Syringe, desc: "Adrenalina IM • Volume" },
];

export default function SalaVermelha() {
  const navigate = useNavigate();

  const handleClick = (id: string, label: string) => {
    startTTPSession("sala_vermelha", label);
    navigate(`/emergency/${id}`);
  };

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
            onClick={() => handleClick(item.id, item.label)}
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

