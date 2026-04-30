import { Badge } from "@/components/ui/badge";
import { useAiUsage } from "@/hooks/useAiUsage";
import { Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Badge compacto mostrando uso mensal de IA.
 * Free: "2/3 grátis" → link para /pricing
 * Pro: "47/50 este mês"
 * Admin: "∞"
 */
export function AiUsageBadge({ feature = "clinical-ai" }: { feature?: string }) {
  const { status, loading } = useAiUsage(feature);

  if (loading || !status) return null;

  if (status.tier === "admin" || status.limit === -1) {
    return (
      <Badge variant="secondary" className="gap-1">
        <InfinityIcon className="h-3 w-3" />
        IA ilimitada
      </Badge>
    );
  }

  const isFree = status.tier === "free";
  const exhausted = status.remaining <= 0;
  const low = status.remaining <= 1;

  const variant = exhausted ? "destructive" : low ? "outline" : "secondary";
  const label = isFree
    ? `${status.used}/${status.limit} grátis no mês`
    : `${status.used}/${status.limit} este mês`;

  const badge = (
    <Badge variant={variant} className="gap-1">
      <Sparkles className="h-3 w-3" />
      {label}
    </Badge>
  );

  // Free → link para upgrade
  if (isFree) {
    return (
      <Link to="/pricing" className="hover:opacity-80 transition-opacity">
        {badge}
      </Link>
    );
  }
  return badge;
}
