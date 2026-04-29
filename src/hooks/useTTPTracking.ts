import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const TTP_KEY = "pulso_ttp_session";
const OUTLIER_THRESHOLD_SECONDS = 300; // 5 min

interface TTPSession {
  source: "sala_vermelha" | "manual" | "plantao";
  label: string;
  startedAt: number; // epoch ms
}

export function startTTPSession(source: TTPSession["source"], label = "") {
  const session: TTPSession = { source, label, startedAt: Date.now() };
  try {
    sessionStorage.setItem(TTP_KEY, JSON.stringify(session));
  } catch {}
}

export function getTTPSession(): TTPSession | null {
  try {
    const raw = sessionStorage.getItem(TTP_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearTTPSession() {
  try {
    sessionStorage.removeItem(TTP_KEY);
  } catch {}
}

export function useTTPTracking() {
  const { user } = useAuth();

  const trackProtocolOpened = useCallback(
    (protocolId: string, protocolTitle: string) => {
      if (!user) return;
      const session = getTTPSession();
      if (!session) return;
      const now = Date.now();
      const seconds = Math.round((now - session.startedAt) / 1000);
      if (seconds < 1 || seconds > 7200) {
        clearTTPSession();
        return;
      }
      const isOutlier = seconds > OUTLIER_THRESHOLD_SECONDS;

      supabase
        .from("ttp_events" as any)
        .insert({
          user_id: user.id,
          trigger_source: session.source,
          trigger_label: session.label,
          protocol_id: protocolId,
          protocol_title: protocolTitle,
          started_at: new Date(session.startedAt).toISOString(),
          protocol_opened_at: new Date(now).toISOString(),
          ttp_seconds: seconds,
          is_outlier: isOutlier,
        })
        .then(() => clearTTPSession());
    },
    [user]
  );

  return { trackProtocolOpened, startTTPSession, clearTTPSession };
}
