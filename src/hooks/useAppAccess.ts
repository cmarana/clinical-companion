import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { APP_ACCESS_ROLES, type AppAccessRole } from "@/config/launchStatus";

/**
 * Verifica se o usuário autenticado tem alguma das roles que liberam
 * acesso ao app durante o pré-lançamento (admin / tester / developer).
 */
export function useAppAccess() {
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [role, setRole] = useState<AppAccessRole | null>(null);

  useEffect(() => {
    let active = true;
    if (!user) {
      setHasAccess(false);
      setRole(null);
      return;
    }
    setHasAccess(null);
    (async () => {
      for (const r of APP_ACCESS_ROLES) {
        const { data } = await supabase.rpc("has_role", {
          _user_id: user.id,
          _role: r,
        });
        if (!active) return;
        if (data) {
          setRole(r);
          setHasAccess(true);
          return;
        }
      }
      if (active) {
        setHasAccess(false);
        setRole(null);
      }
    })();
    return () => {
      active = false;
    };
  }, [user]);

  return { hasAccess, role, loading: hasAccess === null && !!user };
}
