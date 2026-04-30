import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { safeLocalStorage } from "@/lib/safeStorage";
import { startReminderScheduler, stopReminderScheduler } from "@/lib/pushNotifications";

export type NotificationType = "study" | "shift" | "protocol" | "system";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  path?: string;
  read: boolean;
  createdAt: number;
}

interface NotificationsContextType {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  dismissNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  unreadCount: 0,
  markAsRead: () => {},
  markAllAsRead: () => {},
  dismissNotification: () => {},
  clearAll: () => {},
});

const STORAGE_KEY = "ps_notifications";
const LAST_GEN_KEY = "ps_notif_last_gen";

function generateStudyNotifications(): AppNotification[] {
  const notes: AppNotification[] = [];
  const now = Date.now();

  try {
    const progressRaw = safeLocalStorage.getItem("flashcard_progress");
    if (progressRaw) {
      const progress = JSON.parse(progressRaw);
      const pending = Object.values(progress).filter((p: any) => p.next_review <= now).length;
      if (pending > 0) {
        notes.push({
          id: `study-flashcards-${new Date().toDateString()}`,
          type: "study",
          title: "Flashcards pendentes",
          message: `Você tem ${pending} card${pending > 1 ? "s" : ""} para revisar hoje. Mantenha seu streak! 🔥`,
          path: "/flashcards",
          read: false,
          createdAt: now,
        });
      }
    }
  } catch {}

  try {
    const streakRaw = safeLocalStorage.getItem("study_streak");
    if (streakRaw) {
      const streak = JSON.parse(streakRaw);
      if (streak.current >= 3) {
        notes.push({
          id: `study-streak-${streak.current}`,
          type: "study",
          title: `Streak de ${streak.current} dias! 🔥`,
          message: "Continue assim! Acesse o Dashboard de Estudo para ver seu progresso.",
          path: "/study-dashboard",
          read: false,
          createdAt: now,
        });
      }
    }
  } catch {}

  const hour = new Date().getHours();
  if (hour >= 8 && hour <= 22) {
    const quizRaw = safeLocalStorage.getItem("quiz_results");
    if (!quizRaw) {
      notes.push({
        id: `study-quiz-${new Date().toDateString()}`,
        type: "study",
        title: "Hora de estudar! 📚",
        message: "Responda algumas questões de residência para fortalecer seu conhecimento.",
        path: "/residency-quiz",
        read: false,
        createdAt: now,
      });
    }
  }

  return notes;
}

function generateShiftNotifications(): AppNotification[] {
  const notes: AppNotification[] = [];
  const now = Date.now();

  try {
    const shiftStart = safeLocalStorage.getItem("duty_shift_start");
    if (shiftStart) {
      const elapsed = now - parseInt(shiftStart);
      const hours = Math.floor(elapsed / 3600000);

      if (hours >= 6 && hours < 7) {
        notes.push({
          id: `shift-6h-${shiftStart}`,
          type: "shift",
          title: "6 horas de plantão ⏰",
          message: "Já se passaram 6 horas. Lembre-se de se hidratar e fazer uma pausa se possível.",
          path: "/duty",
          read: false,
          createdAt: now,
        });
      } else if (hours >= 12 && hours < 13) {
        notes.push({
          id: `shift-12h-${shiftStart}`,
          type: "shift",
          title: "12 horas de plantão ⚠️",
          message: "Plantão longo! Mantenha atenção redobrada e revise os checklists de segurança.",
          path: "/checklists",
          read: false,
          createdAt: now,
        });
      } else if (hours >= 24) {
        notes.push({
          id: `shift-24h-${shiftStart}`,
          type: "shift",
          title: "24h+ de plantão 🚨",
          message: "Plantão prolongado. Priorize a segurança do paciente e peça suporte se necessário.",
          path: "/duty",
          read: false,
          createdAt: now,
        });
      }
    }
  } catch {}

  return notes;
}

function generateProtocolNotifications(): AppNotification[] {
  const notes: AppNotification[] = [];
  const now = Date.now();

  const weekNum = Math.floor(now / (7 * 24 * 3600000));
  const protocolUpdates = [
    { title: "Atualização: Manejo da Sepse", message: "Novos critérios qSOFA e recomendações de antimicrobianos atualizadas.", path: "/full-protocols" },
    { title: "Novo: Protocolo de IAM com supra", message: "Fluxo de decisão atualizado para fibrinolítico vs ICP primária.", path: "/full-protocols" },
    { title: "Atualização: Drogas vasoativas", message: "Novas tabelas de diluição e velocidade de infusão revisadas.", path: "/iv-dilutions" },
    { title: "Atualização: Intoxicações agudas", message: "Novos antídotos e doses de carvão ativado atualizados.", path: "/full-protocols" },
    { title: "Novo: Checklist de Cirurgia Segura", message: "Checklist da OMS atualizado com campos personalizáveis.", path: "/checklists" },
    { title: "Atualização: PCR pediátrica", message: "Algoritmo PALS atualizado com novas doses de epinefrina.", path: "/emergency" },
    { title: "Novo: Escala NEWS2", message: "Score de alerta precoce disponível na calculadora.", path: "/calculators" },
    { title: "Atualização: Antimicrobianos por foco", message: "Prescrições de antibióticos atualizadas com novos perfis de resistência.", path: "/prescriptions" },
  ];

  const idx = weekNum % protocolUpdates.length;
  const update = protocolUpdates[idx];

  notes.push({
    id: `protocol-update-w${weekNum}`,
    type: "protocol",
    title: update.title,
    message: update.message,
    path: update.path,
    read: false,
    createdAt: now - (now % (24 * 3600000)),
  });

  const idx2 = (weekNum + 3) % protocolUpdates.length;
  const update2 = protocolUpdates[idx2];
  notes.push({
    id: `protocol-update-w${weekNum}-b`,
    type: "protocol",
    title: update2.title,
    message: update2.message,
    path: update2.path,
    read: false,
    createdAt: now - (now % (24 * 3600000)) + 1000,
  });

  return notes;
}

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  useEffect(() => {
    const saved = safeLocalStorage.getItem(STORAGE_KEY);
    let existing: AppNotification[] = [];
    if (saved) {
      try { existing = JSON.parse(saved); } catch {}
    }

    const lastGen = parseInt(safeLocalStorage.getItem(LAST_GEN_KEY) || "0");
    const now = Date.now();

    if (now - lastGen > 4 * 3600000) {
      const newNotifs = [
        ...generateStudyNotifications(),
        ...generateShiftNotifications(),
        ...generateProtocolNotifications(),
      ];

      const existingIds = new Set(existing.map(n => n.id));
      const merged = [...existing];
      for (const n of newNotifs) {
        if (!existingIds.has(n.id)) {
          merged.push(n);
        }
      }

      const trimmed = merged.sort((a, b) => b.createdAt - a.createdAt).slice(0, 30);
      setNotifications(trimmed);
      safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
      safeLocalStorage.setItem(LAST_GEN_KEY, String(now));
    } else {
      setNotifications(existing);
    }

    // Start push notification scheduler
    startReminderScheduler();
    return () => stopReminderScheduler();
  }, []);

  const save = useCallback((notifs: AppNotification[]) => {
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(notifs));
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, read: true } : n);
      save(updated);
      return updated;
    });
  }, [save]);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => {
      const updated = prev.map(n => ({ ...n, read: true }));
      save(updated);
      return updated;
    });
  }, [save]);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => {
      const updated = prev.filter(n => n.id !== id);
      save(updated);
      return updated;
    });
  }, [save]);

  const clearAll = useCallback(() => {
    setNotifications([]);
    save([]);
  }, [save]);

  const unreadCount = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  const value = useMemo(
    () => ({ notifications, unreadCount, markAsRead, markAllAsRead, dismissNotification, clearAll }),
    [notifications, unreadCount, markAsRead, markAllAsRead, dismissNotification, clearAll]
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationsContext);
