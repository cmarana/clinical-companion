import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface SubscriptionInfo {
  subscribed: boolean;
  productId: string | null;
  subscriptionEnd: string | null;
  isTrial: boolean;
  trialDaysLeft: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  subscription: SubscriptionInfo;
  checkSubscription: () => Promise<void>;
  signOut: () => Promise<void>;
}

const defaultSub: SubscriptionInfo = {
  subscribed: false,
  productId: null,
  subscriptionEnd: null,
  isTrial: false,
  trialDaysLeft: 0,
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  subscription: defaultSub,
  checkSubscription: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionInfo>(defaultSub);

  const pendingCheck = useRef<Promise<void> | null>(null);
  const lastCheckTime = useRef<number>(0);
  const MIN_CHECK_INTERVAL = 30_000;

  const checkSubscription = useCallback(async (force = false) => {
    if (pendingCheck.current) return pendingCheck.current;
    const now = Date.now();
    if (!force && now - lastCheckTime.current < MIN_CHECK_INTERVAL) return;

    const doCheck = async () => {
      try {
        lastCheckTime.current = Date.now();
        const { data, error } = await supabase.functions.invoke("check-subscription");
        if (error) throw error;
        const hasPaidSub = data?.subscribed ?? false;
        setSubscription({
          subscribed: hasPaidSub,
          productId: data?.product_id ?? null,
          subscriptionEnd: data?.subscription_end ?? null,
          isTrial: false,
          trialDaysLeft: 0,
        });
      } catch {
        setSubscription(defaultSub);
      } finally {
        pendingCheck.current = null;
      }
    };

    pendingCheck.current = doCheck();
    return pendingCheck.current;
  }, []);

  useEffect(() => {
    let initialCheckDone = false;

    const { data: { subscription: authSub } } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
        if (newSession?.user) {
          if (!initialCheckDone) {
            initialCheckDone = true;
            setTimeout(() => checkSubscription(), 0);
          }
        } else {
          setSubscription(defaultSub);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) {
        initialCheckDone = true;
        checkSubscription();
      }
    });

    return () => authSub.unsubscribe();
  }, [checkSubscription]);

  useEffect(() => {
    if (!user) return;
    const interval = setInterval(checkSubscription, 60_000);
    return () => clearInterval(interval);
  }, [user, checkSubscription]);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setSubscription(defaultSub);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, subscription, checkSubscription, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
