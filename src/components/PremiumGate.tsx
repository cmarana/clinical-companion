import { Crown, Lock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PremiumGateProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  feature?: string;
  className?: string;
}

export default function PremiumGate({ children, fallback, feature, className }: PremiumGateProps) {
  const { subscription } = useAuth();
  const navigate = useNavigate();

  if (subscription.subscribed) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <Card className={`border-primary/20 bg-gradient-to-br from-primary/5 to-accent/20 ${className}`}>
      <CardContent className="p-6 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Lock size={24} className="text-primary" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-base">
            {feature ? `${feature} é Premium` : "Conteúdo Premium"}
          </h3>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Desbloqueie acesso completo com 7 dias grátis. Cancele quando quiser.
          </p>
        </div>
        <Button
          onClick={() => navigate("/pricing")}
          className="gap-2 font-heading font-bold"
          size="sm"
        >
          <Sparkles size={14} />
          Começar teste grátis
        </Button>
      </CardContent>
    </Card>
  );
}

export function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold bg-primary/10 text-primary">
      <Crown size={10} /> PRO
    </span>
  );
}

/** Inline lock indicator for list items */
export function PremiumLock({ label }: { label?: string }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => { e.stopPropagation(); navigate("/pricing"); }}
      className="inline-flex items-center gap-1 text-[10px] text-primary font-heading font-semibold hover:underline"
    >
      <Crown size={10} />
      {label || "PRO"}
    </button>
  );
}
