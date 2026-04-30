import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { hapticLight } from "@/lib/haptics";

const ITEM_TYPE = "protocol";

/**
 * Gerencia favoritos do usuário para protocolos completos.
 * Persiste em `user_favorites` (RLS por user_id).
 */
export function useProtocolFavorites() {
  const { user } = useAuth();
  const [favs, setFavs] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    let mounted = true;
    supabase
      .from("user_favorites")
      .select("item_id")
      .eq("user_id", user.id)
      .eq("item_type", ITEM_TYPE)
      .then(({ data }) => {
        if (!mounted) return;
        setFavs(new Set((data ?? []).map((r: any) => r.item_id)));
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [user]);

  const toggle = useCallback(async (id: string, title: string, specialty?: string) => {
    if (!user) return;
    hapticLight();
    const isFav = favs.has(id);
    // Optimistic update
    setFavs(prev => {
      const next = new Set(prev);
      isFav ? next.delete(id) : next.add(id);
      return next;
    });
    if (isFav) {
      await supabase.from("user_favorites").delete()
        .eq("user_id", user.id).eq("item_type", ITEM_TYPE).eq("item_id", id);
    } else {
      await supabase.from("user_favorites").insert({
        user_id: user.id, item_type: ITEM_TYPE, item_id: id, title, specialty: specialty ?? null,
      });
    }
  }, [favs, user]);

  return { favs, loading, isFavorite: (id: string) => favs.has(id), toggle };
}
