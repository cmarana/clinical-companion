import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const EVENT_FLAG = "pulso_event_src";
const EVENT_FLAG_EXPIRES = "pulso_event_src_expires";
const CLAIMED_FLAG = "pulso_event_claimed";

/**
 * Componente invisível que reivindica acesso de cortesia (Web Summit)
 * quando o usuário se autentica vindo da campanha. Não modifica nada existente.
 */
export default function EventAccessClaimer() {
  useEffect(() => {
    let cancelled = false;

    const tryClaim = async (userId: string) => {
      try {
        const src = localStorage.getItem(EVENT_FLAG);
        const expires = Number(localStorage.getItem(EVENT_FLAG_EXPIRES) ?? 0);
        if (src !== "websummit") return;
        if (expires && Date.now() > expires) {
          localStorage.removeItem(EVENT_FLAG);
          localStorage.removeItem(EVENT_FLAG_EXPIRES);
          return;
        }
        const claimedFor = localStorage.getItem(CLAIMED_FLAG);
        if (claimedFor === userId) return;

        const { data, error } = await supabase.rpc("claim_websummit_access" as never);
        if (cancelled) return;
        if (!error) {
          localStorage.setItem(CLAIMED_FLAG, userId);
          // Mantém o flag para um eventual segundo dispositivo do mesmo usuário em 7d
        } else {
          // silencioso — se a função ainda não existe (cache de types), não quebra app
          console.debug("[event-access] claim error", error.message);
        }
        // Trigger app to refresh subscription status
        window.dispatchEvent(new Event("pulso:refresh-subscription"));
      } catch (e) {
        console.debug("[event-access] claim exception", e);
      }
    };

    // tenta agora se já houver sessão
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) tryClaim(data.user.id);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        tryClaim(session.user.id);
      }
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return null;
}
