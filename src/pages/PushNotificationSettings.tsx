import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Bell, BellRing, BellOff, Pill, Clock, Droplets, CheckSquare,
  Plus, Trash2, AlertTriangle, Shield, X, BookOpen, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getPushPermission,
  requestPushPermission,
  sendPushNotification,
  getReminders,
  addReminder,
  removeReminder,
  toggleReminder,
  getShiftAlertConfig,
  saveShiftAlertConfig,
  type MedicationReminder,
  type ShiftAlertConfig,
} from "@/lib/pushNotifications";
import { useAuth } from "@/contexts/AuthContext";
import { subscribeToPush, unsubscribeFromPush, isPushSubscribed, updatePushPreferences } from "@/lib/webPush";

export default function PushNotificationSettings() {
  const { user } = useAuth();
  const [permission, setPermission] = useState(getPushPermission());
  const [reminders, setReminders] = useState<MedicationReminder[]>(getReminders());
  const [shiftConfig, setShiftConfig] = useState<ShiftAlertConfig>(getShiftAlertConfig());
  const [pushSubscribed, setPushSubscribed] = useState(false);
  const [pushStudyReminders, setPushStudyReminders] = useState(true);
  const [pushProtocolUpdates, setPushProtocolUpdates] = useState(true);
  const [pushLoading, setPushLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    medicationName: "",
    dosage: "",
    intervalHours: 8,
    startTime: "08:00",
    notes: "",
  });


  useEffect(() => {
    isPushSubscribed().then(setPushSubscribed);
  }, []);

  const handleRequestPermission = async () => {
    const granted = await requestPushPermission();
    setPermission(getPushPermission());
    if (granted) {
      toast.success("Notificações push ativadas!");
      sendPushNotification(
        "🔔 Notificações Ativas",
        "Você receberá alertas de plantão e lembretes de medicação.",
        { tag: "test-notification" }
      );
    } else {
      toast.error("Permissão negada. Ative nas configurações do navegador.");
    }
  };

  const handleAddReminder = () => {
    if (!formData.medicationName.trim() || !formData.dosage.trim()) {
      toast.error("Preencha nome e posologia do medicamento.");
      return;
    }
    const newReminder = addReminder({
      medicationName: formData.medicationName.trim(),
      dosage: formData.dosage.trim(),
      intervalHours: formData.intervalHours,
      startTime: formData.startTime,
      notes: formData.notes.trim() || undefined,
    });
    setReminders([...reminders, newReminder]);
    setFormData({ medicationName: "", dosage: "", intervalHours: 8, startTime: "08:00", notes: "" });
    setShowAddForm(false);
    toast.success("Lembrete adicionado!");
  };

  const handleRemove = (id: string) => {
    removeReminder(id);
    setReminders(reminders.filter(r => r.id !== id));
  };

  const handleToggle = (id: string) => {
    toggleReminder(id);
    setReminders(reminders.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

  const updateShiftConfig = (key: keyof ShiftAlertConfig, value: boolean) => {
    const updated = { ...shiftConfig, [key]: value };
    setShiftConfig(updated);
    saveShiftAlertConfig(updated);
  };

  const isUnsupported = permission === "unsupported";
  const isGranted = permission === "granted";
  const isDenied = permission === "denied";

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Notificações Push" showBack />

      <div className="px-4 pt-3 max-w-lg mx-auto space-y-3">
        {/* Permission Card */}
        <div className="bg-card rounded-[20px] shadow-sm overflow-hidden">
          <div className={cn(
            "px-4 py-4 flex items-center gap-3",
            isGranted ? "bg-emerald-500/10" : isDenied ? "bg-destructive/10" : "bg-primary/5"
          )}>
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center",
              isGranted ? "bg-emerald-500/20" : isDenied ? "bg-destructive/20" : "bg-primary/10"
            )}>
              {isGranted ? <BellRing size={20} className="text-emerald-500" /> :
               isDenied ? <BellOff size={20} className="text-destructive" /> :
               <Bell size={20} className="text-primary" />}
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-sm">
                {isGranted ? "Notificações Ativas" :
                 isDenied ? "Notificações Bloqueadas" :
                 isUnsupported ? "Não Suportado" : "Ativar Notificações"}
              </h2>
              <p className="text-[11px] text-muted-foreground">
                {isGranted ? "Você receberá alertas de plantão e lembretes" :
                 isDenied ? "Ative nas configurações do navegador" :
                 isUnsupported ? "Seu navegador não suporta notificações push" :
                 "Permita receber alertas importantes durante o plantão"}
              </p>
            </div>
            {!isGranted && !isUnsupported && !isDenied && (
              <Button size="sm" onClick={handleRequestPermission} className="rounded-xl text-xs">
                Ativar
              </Button>
            )}
          </div>
        </div>

        {/* Shift Alerts Config */}
        <div className="bg-card rounded-[20px] shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Clock size={16} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-sm">Alertas de Plantão</h3>
              <p className="text-[10px] text-muted-foreground">Notificações automáticas durante o turno</p>
            </div>
            <Switch
              checked={shiftConfig.enabled}
              onCheckedChange={(v) => updateShiftConfig("enabled", v)}
            />
          </div>

          {shiftConfig.enabled && (
            <div className="space-y-2.5 pt-2 border-t border-border/50">
              <ShiftToggle
                label="Alerta de 6 horas"
                desc="Lembrete de hidratação e pausa"
                icon="⏰"
                checked={shiftConfig.alertAt6h}
                onChange={(v) => updateShiftConfig("alertAt6h", v)}
              />
              <ShiftToggle
                label="Alerta de 12 horas"
                desc="Atenção redobrada, revisar checklists"
                icon="⚠️"
                checked={shiftConfig.alertAt12h}
                onChange={(v) => updateShiftConfig("alertAt12h", v)}
              />
              <ShiftToggle
                label="Alerta de 24 horas"
                desc="Plantão prolongado, pedir suporte"
                icon="🚨"
                checked={shiftConfig.alertAt24h}
                onChange={(v) => updateShiftConfig("alertAt24h", v)}
              />
              <ShiftToggle
                label="Lembrete de hidratação"
                desc="A cada 2 horas"
                icon="💧"
                checked={shiftConfig.hydrationReminder}
                onChange={(v) => updateShiftConfig("hydrationReminder", v)}
              />
              <ShiftToggle
                label="Revisão de segurança"
                desc="Checklist a cada 4 horas"
                icon="📋"
                checked={shiftConfig.checklistReminder}
                onChange={(v) => updateShiftConfig("checklistReminder", v)}
              />
            </div>
          )}
        </div>

        {/* Medication Reminders */}
        <div className="bg-card rounded-[20px] shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Pill size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">Lembretes de Medicação</h3>
                <p className="text-[10px] text-muted-foreground">Alarmes para administração de fármacos</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAddForm(true)}
              className="rounded-xl text-xs gap-1"
            >
              <Plus size={14} /> Novo
            </Button>
          </div>

          {/* Add form */}
          {showAddForm && (
            <div className="bg-muted/40 rounded-xl p-3 mb-3 space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-heading font-semibold">Novo Lembrete</p>
                <button onClick={() => setShowAddForm(false)} className="p-1 rounded hover:bg-muted">
                  <X size={14} className="text-muted-foreground" />
                </button>
              </div>
              <input
                value={formData.medicationName}
                onChange={(e) => setFormData({ ...formData, medicationName: e.target.value })}
                placeholder="Nome do medicamento"
                className="w-full h-9 px-3 text-[12px] rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                value={formData.dosage}
                onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                placeholder="Posologia (ex: 500mg VO)"
                className="w-full h-9 px-3 text-[12px] rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[10px] text-muted-foreground font-medium">Intervalo</label>
                  <select
                    value={formData.intervalHours}
                    onChange={(e) => setFormData({ ...formData, intervalHours: Number(e.target.value) })}
                    className="w-full h-9 px-2 text-[12px] rounded-lg bg-background border border-border"
                  >
                    <option value={4}>4 em 4h</option>
                    <option value={6}>6 em 6h</option>
                    <option value={8}>8 em 8h</option>
                    <option value={12}>12 em 12h</option>
                    <option value={24}>24 em 24h</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-[10px] text-muted-foreground font-medium">Início</label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full h-9 px-2 text-[12px] rounded-lg bg-background border border-border"
                  />
                </div>
              </div>
              <input
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Observações (opcional)"
                className="w-full h-9 px-3 text-[12px] rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button onClick={handleAddReminder} size="sm" className="w-full rounded-xl text-xs h-9">
                Adicionar Lembrete
              </Button>
            </div>
          )}

          {/* Reminders list */}
          {reminders.length === 0 ? (
            <div className="text-center py-4">
              <Pill size={24} className="mx-auto text-muted-foreground/30 mb-2" />
              <p className="text-[11px] text-muted-foreground">Nenhum lembrete configurado</p>
            </div>
          ) : (
            <div className="space-y-2">
              {reminders.map((rem) => (
                <div
                  key={rem.id}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
                    rem.active ? "bg-muted/40" : "bg-muted/20 opacity-60"
                  )}
                >
                  <Switch
                    checked={rem.active}
                    onCheckedChange={() => handleToggle(rem.id)}
                    className="scale-75"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-heading font-semibold truncate">{rem.medicationName}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {rem.dosage} • {rem.intervalHours}h em {rem.intervalHours}h • início {rem.startTime}
                    </p>
                    {rem.notes && (
                      <p className="text-[9px] text-muted-foreground/70 truncate">{rem.notes}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(rem.id)}
                    className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-card rounded-[20px] shadow-sm p-4">
          <h3 className="font-heading font-semibold text-sm mb-2 flex items-center gap-2">
            <Shield size={14} className="text-primary" />
            Como funciona
          </h3>
          <div className="space-y-1.5 text-[11px] text-muted-foreground">
            <p>• <strong>Alertas de plantão</strong> disparam automaticamente quando o cronômetro de turno está ativo</p>
            <p>• <strong>Lembretes de medicação</strong> notificam nos horários configurados enquanto o app está aberto</p>
            <p>• <strong>Notificações funcionam em segundo plano</strong> quando o app está instalado como PWA</p>
            <p>• Todos os dados ficam salvos localmente no seu dispositivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShiftToggle({ label, desc, icon, checked, onChange }: {
  label: string;
  desc: string;
  icon: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2.5 py-1">
      <span className="text-sm">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-heading font-medium">{label}</p>
        <p className="text-[10px] text-muted-foreground">{desc}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} className="scale-75" />
    </div>
  );
}
