import { useState } from "react";
import { ShieldCheck, ShieldOff, Loader2, Monitor, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTwoFactor } from "@/hooks/useTwoFactor";
import TwoFactorSetupModal from "@/components/TwoFactorSetupModal";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";

export default function TwoFactorSettings() {
  const { user } = useAuth();
  const twoFa = useTwoFactor();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"enable" | "disable">("enable");
  const [devices, setDevices] = useState<Array<{ id: string; device_label: string | null; verified_at: string; expires_at: string }>>([]);

  const loadDevices = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("user_2fa_verifications")
      .select("id, device_label, verified_at, expires_at")
      .eq("user_id", user.id)
      .gt("expires_at", new Date().toISOString())
      .order("verified_at", { ascending: false });
    setDevices(data ?? []);
  };

  useEffect(() => { loadDevices(); }, [user, twoFa.enabled]);

  const revoke = async (id: string) => {
    const { error } = await supabase.from("user_2fa_verifications").delete().eq("id", id);
    if (error) return toast.error("Erro ao revogar dispositivo");
    toast.success("Dispositivo revogado");
    loadDevices();
  };

  const handleToggle = (checked: boolean) => {
    setModalMode(checked ? "enable" : "disable");
    setModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-muted/30 border border-border">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {twoFa.enabled ? (
            <ShieldCheck className="text-primary mt-0.5 shrink-0" size={20} />
          ) : (
            <ShieldOff className="text-muted-foreground mt-0.5 shrink-0" size={20} />
          )}
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">Autenticação em dois fatores</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {twoFa.enabled
                ? "Ativada. Códigos enviados por e-mail a cada novo dispositivo."
                : "Adicione uma camada extra de segurança via código por e-mail."}
            </p>
          </div>
        </div>
        {twoFa.loading ? (
          <Loader2 size={16} className="animate-spin text-muted-foreground" />
        ) : (
          <Switch checked={twoFa.enabled} onCheckedChange={handleToggle} />
        )}
      </div>

      {twoFa.enabled && devices.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Dispositivos confiáveis
          </p>
          {devices.map((d) => (
            <div key={d.id} className="flex items-center gap-3 p-2.5 rounded-lg border border-border bg-card">
              <Monitor size={16} className="text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">
                  {d.device_label || "Dispositivo"}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Válido até {new Date(d.expires_at).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => revoke(d.id)} className="h-7 px-2 text-destructive">
                <Trash2 size={13} />
              </Button>
            </div>
          ))}
        </div>
      )}

      <TwoFactorSetupModal
        open={modalOpen}
        mode={modalMode}
        onOpenChange={setModalOpen}
        onSuccess={() => { twoFa.refresh(); loadDevices(); }}
      />
    </div>
  );
}
