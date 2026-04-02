import { useCallback, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export function useProtocolAnalytics(protocolId: string | undefined) {
  const { user } = useAuth();
  const startTime = useRef<number>(Date.now());
  const tracked = useRef(false);

  const trackView = useCallback(
    (title: string, category: string, source = "direct") => {
      if (!user || !protocolId || tracked.current) return;
      tracked.current = true;
      startTime.current = Date.now();

      supabase
        .from("protocol_views" as any)
        .insert({
          user_id: user.id,
          protocol_id: protocolId,
          protocol_title: title,
          protocol_category: category,
          source,
        })
        .then(() => {});
    },
    [user, protocolId]
  );

  // Update duration on unmount
  useEffect(() => {
    return () => {
      if (!user || !protocolId || !tracked.current) return;
      const duration = Math.round((Date.now() - startTime.current) / 1000);
      if (duration < 2) return; // skip accidental visits

      // Fire-and-forget duration update via upsert on most recent row
      supabase
        .from("protocol_views" as any)
        .update({ duration_seconds: duration } as any)
        .eq("user_id", user.id)
        .eq("protocol_id", protocolId)
        .order("created_at", { ascending: false })
        .limit(1)
        .then(() => {});
    };
  }, [user, protocolId]);

  return { trackView };
}
