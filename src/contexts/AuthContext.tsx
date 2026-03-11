import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface SubscriptionInfo {
  subscribed: boolean;
  productId: string | null;
  subscriptionEnd: string | null;
  isTrial: boolean;
  trialDaysLeft: number;
}

const TRIAL_DAYS = 7;

function getTrialInfo(user: User | null): { isTrial: boolean; trialDaysLeft: number } {
  if (!user?.created_at) return { isTrial: false, trialDaysLeft: 0 };
  const created = new Date(user.created_at);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const daysLeft = Math.max(0, Math.ceil(TRIAL_DAYS - diffDays));
  return { isTrial: daysLeft > 0, trialDaysLeft: daysLeft };
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  subscription: SubscriptionInfo;
  checkSubscription: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  subscription: { subscribed: false, productId: null, subscriptionEnd: null, isTrial: false, trialDaysLeft: 0 },
  checkSubscription: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionInfo>({
    subscribed: false,
    productId: null,
    subscriptionEnd: null,
    isTrial: false,
    trialDaysLeft: 0,
  });

  const checkSubscription = useCallback(async () => {
    try {
      const { data, error } = await supabase.functions.invoke("check-subscription");
      if (error) throw error;
      const hasPaidSub = data?.subscribed ?? false;
      const trial = getTrialInfo(user);
      setSubscription({
        subscribed: hasPaidSub || trial.isTrial,
        productId: data?.product_id ?? null,
        subscriptionEnd: data?.subscription_end ?? null,
        isTrial: !hasPaidSub && trial.isTrial,
        trialDaysLeft: trial.trialDaysLeft,
      });
    } catch {
      const trial = getTrialInfo(user);
      setSubscription({
        subscribed: trial.isTrial,
        productId: null,
        subscriptionEnd: null,
        isTrial: trial.isTrial,
        trialDaysLeft: trial.trialDaysLeft,
      });
    }
  }, [user]);

  useEffect(() => {
    const { data: { subscription: authSub } } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
        if (newSession?.user) {
          setTimeout(() => checkSubscription(), 0);
        } else {
          setSubscription({ subscribed: false, productId: null, subscriptionEnd: null, isTrial: false, trialDaysLeft: 0 });
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) checkSubscription();
    });

    return () => authSub.unsubscribe();
  }, [checkSubscription]);

  // Auto-refresh subscription every 60s
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(checkSubscription, 60_000);
    return () => clearInterval(interval);
  }, [user, checkSubscription]);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setSubscription({ subscribed: false, productId: null, subscriptionEnd: null, isTrial: false, trialDaysLeft: 0 });
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, subscription, checkSubscription, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
