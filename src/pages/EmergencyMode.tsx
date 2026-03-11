import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { protocols } from "@/data/protocols";
import { Zap, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const emergencyIds = [
  "pcr", "sepse", "choque-hipovolemico", "choque-cardiogenico", "anafilaxia",
  "iam", "avc", "eap", "taquiarritmia", "bradicardia",
  "hipoglicemia", "hiperglicemia", "hipercalemia", "hipocalemia",
  "convulsao", "status-epileptico", "iot", "dor-toracica", "dispneia",
  "crise-hipertensiva", "trauma"
];

export default function EmergencyMode() {
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const [search, setSearch] = useState("");

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Emergência" className="border-destructive bg-destructive/5" />
        <PremiumGate />
      </>
    );
  }

  const emergencyProtocols = protocols.filter((p) => emergencyIds.includes(p.id));
  const filtered = emergencyProtocols.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(t => t.includes(search.toLowerCase()))
  );

  return (
    <>
      <TopBar title="Emergência" className="border-destructive bg-destructive/5" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-3 pb-24">
        <div className="flex items-center gap-2 text-destructive mb-1">
          <Zap size={18} />
          <p className="font-heading font-bold text-sm">Protocolos de emergência — Acesso em 1 clique</p>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Filtrar protocolo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 h-9 text-xs rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/protocols/${p.id}`)}
              className="p-3.5 rounded-xl border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all text-left"
            >
              <p className="font-heading font-semibold text-xs leading-tight">{p.title}</p>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-4">Nenhum protocolo encontrado.</p>
        )}
      </div>
    </>
  );
}
