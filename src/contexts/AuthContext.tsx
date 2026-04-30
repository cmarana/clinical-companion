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
  profileComplete: boolean | null; // null = still checking
  checkSubscription: (force?: boolean) => Promise<void>;
  recheckProfile: () => Promise<void>;
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
  profileComplete: null,
  checkSubscription: async () => {},
  recheckProfile: async () => {},
  signOut: async () => {},
});

const REQUIRED_FIELDS = ["first_name", "last_name", "birth_date", "gender", "phone", "city", "state", "zip_code"];

function isProfileComplete(profile: any): boolean {
  if (!profile) return false;
  return REQUIRED_FIELDS.every((f) => {
    const val = profile[f];
    return val !== null && val !== undefined && String(val).trim() !== "";
  });
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionInfo>(defaultSub);
  const [profileComplete, setProfileComplete] = useState<boolean | null>(null);

  const pendingCheck = useRef<Promise<void> | null>(null);
  const lastCheckTime = useRef<number>(0);
  const MIN_CHECK_INTERVAL = 30_000;

  const checkProfile = useCallback(async (userId?: string) => {
    const uid = userId || user?.id;
    if (!uid) { setProfileComplete(null); return; }
    try {
      const { data } = await supabase
        .from("profiles")
        .select("first_name, last_name, birth_date, gender, phone, city, state, zip_code")
        .eq("user_id", uid)
        .maybeSingle();
      setProfileComplete(isProfileComplete(data));
    } catch {
      setProfileComplete(false);
    }
  }, [user?.id]);

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
      async (event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
        if (newSession?.user) {
          if (!initialCheckDone) {
            initialCheckDone = true;
            setTimeout(() => {
              checkSubscription();
              checkProfile(newSession.user.id);
            }, 0);
          }
          // Send welcome email on first sign-up
          if (event === 'SIGNED_IN' && newSession.user.created_at) {
            const createdAt = new Date(newSession.user.created_at).getTime();
            const now = Date.now();
            if (now - createdAt < 60000) {
              supabase.functions.invoke("send-transactional-email", {
                body: {
                  templateName: "welcome",
                  recipientEmail: newSession.user.email,
                  idempotencyKey: `welcome-${newSession.user.id}`,
                  templateData: { name: newSession.user.user_metadata?.full_name },
                },
              }).catch(() => {});
            }
          }
        } else {
          setSubscription(defaultSub);
          setProfileComplete(null);
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
        checkProfile(s.user.id);
      }
    });

    return () => authSub.unsubscribe();
  }, [checkSubscription, checkProfile]);

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
    setProfileComplete(null);
  };

  const value = useMemo(
    () => ({
      user, session, loading, subscription, profileComplete,
      checkSubscription, recheckProfile: checkProfile, signOut,
    }),
    [user, session, loading, subscription, profileComplete, checkSubscription, checkProfile]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
