import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface AiUsageStatus {
  tier: "free" | "pro" | "admin";
  used: number;
  limit: number; // -1 = ilimitado
  remaining: number; // -1 = ilimitado
  quotaExceeded: boolean;
}

/**
 * Busca uso atual de IA do usuário (consultas no mês corrente).
 * Free=3, Pro=200, Admin=ilimitado.
 */
export function useAiUsage(feature: string = "clinical-ai") {
  const { user } = useAuth();
  const [status, setStatus] = useState<AiUsageStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) {
      setStatus(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-usage-status", {
        body: {},
        method: "GET",
      });
      if (error) throw error;
      setStatus(data as AiUsageStatus);
    } catch (e) {
      console.error("useAiUsage error", e);
      setStatus(null);
    } finally {
      setLoading(false);
    }
  }, [user, feature]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { status, loading, refresh };
}
