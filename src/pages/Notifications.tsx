import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useNotifications, NotificationType } from "@/contexts/NotificationsContext";
import { Bell, Brain, Clock, BookOpen, Info, Check, CheckCheck, Trash2, X, BellRing, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const typeConfig: Record<NotificationType, { icon: typeof Bell; label: string; color: string; bg: string }> = {
  study: { icon: Brain, label: "Estudo", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10 dark:bg-blue-500/20" },
  shift: { icon: Clock, label: "Plantão", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 dark:bg-amber-500/20" },
  protocol: { icon: BookOpen, label: "Protocolo", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 dark:bg-emerald-500/20" },
  system: { icon: Info, label: "Sistema", color: "text-muted-foreground", bg: "bg-muted" },
};

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Agora";
  if (mins < 60) return `${mins}min atrás`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h atrás`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Ontem";
  return `${days}d atrás`;
}

export default function Notifications() {
  const navigate = useNavigate();
  const { notifications, unreadCount, markAsRead, markAllAsRead, dismissNotification, clearAll } = useNotifications();

  const handleClick = (id: string, path?: string) => {
    markAsRead(id);
    if (path) navigate(path);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar
        title="Notificações"
        rightContent={
          unreadCount > 0 ? (
            <button onClick={markAllAsRead} className="text-xs text-primary font-medium flex items-center gap-1">
              <CheckCheck size={14} /> Marcar todas
            </button>
          ) : null
        }
      />

      {/* Push notification settings link */}
      <div className="px-3 pt-2">
        <button
          onClick={() => navigate("/push-notifications")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-[16px] bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors mb-3"
        >
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <BellRing size={16} className="text-primary" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[12px] font-heading font-semibold">Notificações Push & Lembretes</p>
            <p className="text-[10px] text-muted-foreground">Alertas de plantão e lembretes de medicação</p>
          </div>
          <Settings size={14} className="text-muted-foreground" />
        </button>
      </div>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Bell size={28} className="text-muted-foreground" />
          </div>
          <h3 className="font-heading font-semibold text-sm mb-1">Nenhuma notificação</h3>
          <p className="text-xs text-muted-foreground">Seus alertas de plantão, lembretes de estudo e atualizações aparecerão aqui.</p>
        </div>
      ) : (
        <div className="px-3 pt-2">
          {/* Summary badges */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
            {(["study", "shift", "protocol"] as NotificationType[]).map(type => {
              const count = notifications.filter(n => n.type === type && !n.read).length;
              const config = typeConfig[type];
              return (
                <div key={type} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.bg} shrink-0`}>
                  <config.icon size={12} className={config.color} />
                  <span className={`text-[11px] font-semibold ${config.color}`}>
                    {config.label}: {count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Notification list */}
          <div className="space-y-2">
            {notifications.map(n => {
              const config = typeConfig[n.type];
              const Icon = config.icon;
              return (
                <div
                  key={n.id}
                  className={`relative flex gap-3 p-3 rounded-2xl border transition-all ${
                    n.read
                      ? "bg-card border-border opacity-70"
                      : "bg-card border-primary/20 shadow-sm"
                  }`}
                >
                  {!n.read && (
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                  <div className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 ${config.bg}`}>
                    <Icon size={16} className={config.color} />
                  </div>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => handleClick(n.id, n.path)}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-heading font-semibold text-xs truncate">{n.title}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{n.message}</p>
                    <span className="text-[10px] text-muted-foreground/60 mt-1 block">{timeAgo(n.createdAt)}</span>
                  </div>
                  <button
                    onClick={() => dismissNotification(n.id)}
                    className="absolute top-2 right-6 p-1 rounded-md hover:bg-accent text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
          </div>

          {notifications.length > 0 && (
            <Button
              variant="ghost"
              onClick={clearAll}
              className="w-full mt-4 text-xs text-muted-foreground gap-1.5"
            >
              <Trash2 size={14} /> Limpar todas
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
