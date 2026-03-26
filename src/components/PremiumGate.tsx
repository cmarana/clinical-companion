import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PremiumGateProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export default function PremiumGate({ children, fallback, className }: PremiumGateProps) {
  // Premium gate temporarily disabled — all content unlocked
  return <>{children}</>;

  /* Original gate logic — will be re-enabled when pricing is configured
  const { subscription } = useAuth();
  const navigate = useNavigate();

  if (subscription.subscribed) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className={`relative ${className || ""}`}>
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Lock size={24} className="text-primary" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-base">Conteúdo Premium</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Assine o Manual de Plantão Pro para acessar todos os protocolos, medicamentos e funcionalidades.
          </p>
        </div>
        <Button onClick={() => navigate("/pricing")} className="gap-2">
          <Crown size={16} /> Ver planos
        </Button>
      </div>
    </div>
  );
}

export function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold bg-primary/10 text-primary">
      <Crown size={10} /> PRO
    </span>
  );
}
