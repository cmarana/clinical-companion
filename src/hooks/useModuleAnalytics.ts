import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

let specialty = localStorage.getItem("ps-guide-specialty") || "";

export function setAnalyticsSpecialty(s: string) {
  specialty = s;
}

export function useModuleAnalytics() {
  const { user } = useAuth();

  const trackModule = useCallback(
    (modulePath: string, moduleLabel: string) => {
      if (!user) return;

      // Fire-and-forget, non-blocking
      supabase
        .from("module_analytics" as any)
        .insert({
          user_id: user.id,
          module_path: modulePath,
          module_label: moduleLabel,
          specialty: specialty || "",
        })
        .then(() => {});
    },
    [user]
  );

  return { trackModule };
}
