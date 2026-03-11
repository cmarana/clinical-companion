import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { protocols } from "@/data/protocols";
import { Zap } from "lucide-react";

const emergencyIds = [
  "pcr", "sepse", "choque-hipovolemico", "choque-cardiogenico", "anafilaxia",
  "iam", "avc", "eap", "taquiarritmia", "bradicardia",
  "hipoglicemia", "hiperglicemia", "hipercalemia", "hipocalemia",
  "convulsao", "status-epileptico"
];

export default function EmergencyMode() {
  const navigate = useNavigate();
  const emergencyProtocols = protocols.filter((p) => emergencyIds.includes(p.id));

  return (
    <>
      <TopBar title="Modo Emergência" className="border-destructive bg-destructive/5" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-3">
        <div className="flex items-center gap-2 text-destructive mb-2">
          <Zap size={20} />
          <p className="font-heading font-bold text-sm">Acesso rápido a protocolos críticos</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {emergencyProtocols.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/protocols/${p.id}`)}
              className="p-3 rounded-lg border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all text-left"
            >
              <p className="font-heading font-semibold text-xs leading-tight">{p.title}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
