import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Retorna o ranking pessoal dos protocolos mais acessados pelo usuário,
 * agregando contagens de `protocol_views`. Cache simples em memória.
 */
export function useTopProtocols(limit = 50) {
  const { user } = useAuth();
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    let mounted = true;

    supabase
      .from("protocol_views" as any)
      .select("protocol_id")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(500)
      .then(({ data }) => {
        if (!mounted) return;
        const map: Record<string, number> = {};
        (data ?? []).forEach((row: any) => {
          if (row?.protocol_id) map[row.protocol_id] = (map[row.protocol_id] ?? 0) + 1;
        });
        setCounts(map);
        setLoading(false);
      });

    return () => { mounted = false; };
  }, [user]);

  return { counts, loading, getCount: (id: string) => counts[id] ?? 0 };
}
