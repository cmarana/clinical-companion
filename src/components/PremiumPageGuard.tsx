import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import TopBar from "@/components/TopBar";

interface PremiumPageGuardProps {
  children: React.ReactNode;
  feature: string;
  title: string;
}

/**
 * Wraps a full page — if user is not subscribed, shows a premium gate instead.
 */
export default function PremiumPageGuard({ children, feature, title }: PremiumPageGuardProps) {
  const { subscription } = useAuth();

  if (subscription.subscribed) {
    return <>{children}</>;
  }

  return (
    <>
      <TopBar title={title} />
      <div className="px-4 py-8 max-w-lg mx-auto">
        <PremiumGate feature={feature} />
      </div>
    </>
  );
}
