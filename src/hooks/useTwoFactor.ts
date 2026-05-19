import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { getDeviceId } from "@/lib/deviceId";

interface TwoFactorState {
  loading: boolean;
  enabled: boolean;
  deviceTrusted: boolean;
  /** Pendente de verificação? true quando enabled && !deviceTrusted */
  needsVerification: boolean;
  trustedUntil: string | null;
  refresh: () => Promise<void>;
  markDeviceTrusted: (untilIso?: string) => void;
}

export function useTwoFactor(): TwoFactorState {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [deviceTrusted, setDeviceTrusted] = useState(false);
  const [trustedUntil, setTrustedUntil] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!user) {
      setLoading(false);
      setEnabled(false);
      setDeviceTrusted(false);
      return;
    }
    setLoading(true);
    try {
      const [{ data: settings }, { data: verifs }] = await Promise.all([
        supabase
          .from("user_2fa_settings")
          .select("enabled")
          .eq("user_id", user.id)
          .maybeSingle(),
        supabase
          .from("user_2fa_verifications")
          .select("expires_at")
          .eq("user_id", user.id)
          .eq("device_id", getDeviceId())
          .gt("expires_at", new Date().toISOString())
          .order("expires_at", { ascending: false })
          .limit(1),
      ]);
      setEnabled(!!settings?.enabled);
      const v = verifs?.[0];
      setDeviceTrusted(!!v);
      setTrustedUntil(v?.expires_at ?? null);
    } catch {
      // Falha silenciosa — assume não verificado
      setEnabled(false);
      setDeviceTrusted(false);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  const markDeviceTrusted = useCallback((untilIso?: string) => {
    setDeviceTrusted(true);
    if (untilIso) setTrustedUntil(untilIso);
  }, []);

  return {
    loading,
    enabled,
    deviceTrusted,
    needsVerification: enabled && !deviceTrusted,
    trustedUntil,
    refresh: load,
    markDeviceTrusted,
  };
}
