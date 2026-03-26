import { Crown } from "lucide-react";

interface PremiumGateProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

// Premium gate temporarily disabled — all content unlocked
export default function PremiumGate({ children }: PremiumGateProps) {
  return <>{children}</>;
}

export function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold bg-primary/10 text-primary">
      <Crown size={10} /> PRO
    </span>
  );
}
