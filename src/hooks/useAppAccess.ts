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
      const checks = await Promise.all(
        APP_ACCESS_ROLES.map((r) => supabase.rpc("has_role", {
          _user_id: user.id,
          _role: r,
        }).then(({ data }) => ({ role: r, allowed: !!data })))
      );
        if (!active) return;
      const match = checks.find((c) => c.allowed);
      if (match) {
        setRole(match.role);
        setHasAccess(true);
        return;
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
