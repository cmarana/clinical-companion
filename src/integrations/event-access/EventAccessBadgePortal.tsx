import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { CalendarCheck } from "lucide-react";

/**
 * Mostra um aviso discreto "Acesso Web Summit ativo até [data]"
 * via portal — fica posicionado no topo da página /profile, sem editar Profile.tsx.
 */
export default function EventAccessBadgePortal() {
  const location = useLocation();
  const [until, setUntil] = useState<Date | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        if (active) setUntil(null);
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("event_access_until")
        .eq("user_id", userData.user.id)
        .maybeSingle();
      if (!active) return;
      const raw = (data as { event_access_until?: string | null } | null)?.event_access_until;
      if (raw) {
        const d = new Date(raw);
        if (d.getTime() > Date.now()) setUntil(d);
        else setUntil(null);
      } else {
        setUntil(null);
      }
    })();
    return () => {
      active = false;
    };
  }, [location.pathname]);

  if (location.pathname !== "/profile" || !until) return null;

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Sao_Paulo";
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: tz,
    timeZoneName: "short",
  }).format(until);

  return createPortal(
    <div
      className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-full text-sm shadow-lg border flex items-center gap-2 animate-fade-in"
      style={{
        background: "rgba(10,109,217,0.12)",
        borderColor: "rgba(10,109,217,0.35)",
        color: "hsl(var(--foreground))",
        backdropFilter: "blur(8px)",
      }}
      title={`Fuso horário: ${tz}`}
    >
      <CalendarCheck className="w-4 h-4" style={{ color: "#0A6DD9" }} />
      <span>
        Acesso Web Summit ativo até <strong>{formatted}</strong>
      </span>
    </div>,
    document.body,
  );
}
