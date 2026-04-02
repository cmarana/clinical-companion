import { safeLocalStorage } from "./safeStorage";

// ── Types ──
export interface MedicationReminder {
  id: string;
  medicationName: string;
  dosage: string;
  intervalHours: number;
  startTime: string; // HH:mm
  notes?: string;
  active: boolean;
  createdAt: number;
}

export interface ShiftAlertConfig {
  enabled: boolean;
  alertAt6h: boolean;
  alertAt12h: boolean;
  alertAt24h: boolean;
  hydrationReminder: boolean;   // every 2h
  checklistReminder: boolean;   // every 4h
}

const REMINDERS_KEY = "ps_med_reminders";
const SHIFT_ALERTS_KEY = "ps_shift_alerts_config";
const PUSH_PERMISSION_KEY = "ps_push_permission";
const REMINDER_TIMERS_KEY = "ps_reminder_timers";

// ── Permission ──
export function getPushPermission(): NotificationPermission | "unsupported" {
  if (!("Notification" in window)) return "unsupported";
  return Notification.permission;
}

export async function requestPushPermission(): Promise<boolean> {
  if (!("Notification" in window)) return false;
  const result = await Notification.requestPermission();
  safeLocalStorage.setItem(PUSH_PERMISSION_KEY, result);
  return result === "granted";
}

// ── Send notification ──
export function sendPushNotification(title: string, body: string, options?: {
  icon?: string;
  tag?: string;
  path?: string;
  vibrate?: number[];
}) {
  if (getPushPermission() !== "granted") return;

  const notifOptions: NotificationOptions & { vibrate?: number[] } = {
    body,
    icon: options?.icon || "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: options?.tag,
    requireInteraction: true,
  };

  // vibrate is supported in some browsers but not in the TS types
  if (options?.vibrate) {
    (notifOptions as any).vibrate = options.vibrate;
  }

  const notif = new Notification(title, notifOptions);

  if (options?.path) {
    notif.onclick = () => {
      window.focus();
      window.location.href = options.path!;
      notif.close();
    };
  }
}

// ── Medication Reminders ──
export function getReminders(): MedicationReminder[] {
  try {
    const raw = safeLocalStorage.getItem(REMINDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveReminders(reminders: MedicationReminder[]) {
  safeLocalStorage.setItem(REMINDERS_KEY, JSON.stringify(reminders));
}

export function addReminder(reminder: Omit<MedicationReminder, "id" | "createdAt" | "active">): MedicationReminder {
  const newReminder: MedicationReminder = {
    ...reminder,
    id: `rem-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    active: true,
    createdAt: Date.now(),
  };
  const reminders = getReminders();
  reminders.push(newReminder);
  saveReminders(reminders);
  return newReminder;
}

export function removeReminder(id: string) {
  const reminders = getReminders().filter(r => r.id !== id);
  saveReminders(reminders);
}

export function toggleReminder(id: string) {
  const reminders = getReminders().map(r =>
    r.id === id ? { ...r, active: !r.active } : r
  );
  saveReminders(reminders);
}

// ── Shift Alert Config ──
export function getShiftAlertConfig(): ShiftAlertConfig {
  try {
    const raw = safeLocalStorage.getItem(SHIFT_ALERTS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    enabled: true,
    alertAt6h: true,
    alertAt12h: true,
    alertAt24h: true,
    hydrationReminder: true,
    checklistReminder: true,
  };
}

export function saveShiftAlertConfig(config: ShiftAlertConfig) {
  safeLocalStorage.setItem(SHIFT_ALERTS_KEY, JSON.stringify(config));
}

// ── Reminder Scheduler (in-memory timers) ──
let activeTimers: ReturnType<typeof setInterval>[] = [];

export function startReminderScheduler() {
  stopReminderScheduler();

  // Check every 60 seconds for due reminders
  const timer = setInterval(() => {
    checkAndFireReminders();
    checkShiftAlerts();
  }, 60_000);

  activeTimers.push(timer);

  // Also fire immediately
  checkAndFireReminders();
  checkShiftAlerts();
}

export function stopReminderScheduler() {
  activeTimers.forEach(t => clearInterval(t));
  activeTimers = [];
}

function checkAndFireReminders() {
  if (getPushPermission() !== "granted") return;

  const reminders = getReminders().filter(r => r.active);
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const firedKey = `ps_fired_reminders_${now.toDateString()}`;
  let fired: Record<string, number[]> = {};
  try {
    const raw = safeLocalStorage.getItem(firedKey);
    if (raw) fired = JSON.parse(raw);
  } catch {}

  for (const rem of reminders) {
    const [startH, startM] = rem.startTime.split(":").map(Number);
    const startMinutes = startH * 60 + startM;
    const intervalMinutes = rem.intervalHours * 60;

    // Calculate all fire times for today
    const fireTimes: number[] = [];
    let t = startMinutes;
    while (t < 24 * 60) {
      fireTimes.push(t);
      t += intervalMinutes;
    }

    const firedForThis = fired[rem.id] || [];

    for (const fireTime of fireTimes) {
      // Fire if within 1 minute window and not already fired
      if (
        Math.abs(currentMinutes - fireTime) <= 1 &&
        !firedForThis.includes(fireTime)
      ) {
        sendPushNotification(
          `💊 ${rem.medicationName}`,
          `Hora de tomar: ${rem.dosage}${rem.notes ? ` — ${rem.notes}` : ""}`,
          {
            tag: `med-${rem.id}-${fireTime}`,
            vibrate: [300, 100, 300, 100, 300],
            path: "/notifications",
          }
        );

        firedForThis.push(fireTime);
        fired[rem.id] = firedForThis;
        safeLocalStorage.setItem(firedKey, JSON.stringify(fired));
      }
    }
  }
}

function checkShiftAlerts() {
  if (getPushPermission() !== "granted") return;

  const config = getShiftAlertConfig();
  if (!config.enabled) return;

  const shiftStart = safeLocalStorage.getItem("duty_shift_start");
  if (!shiftStart) return;

  const elapsed = Date.now() - parseInt(shiftStart);
  const hours = elapsed / 3600000;

  const firedKey = `ps_shift_push_${shiftStart}`;
  let firedAlerts: string[] = [];
  try {
    const raw = safeLocalStorage.getItem(firedKey);
    if (raw) firedAlerts = JSON.parse(raw);
  } catch {}

  const fire = (id: string, title: string, body: string) => {
    if (firedAlerts.includes(id)) return;
    sendPushNotification(title, body, {
      tag: `shift-${id}`,
      vibrate: [500, 200, 500],
      path: "/duty",
    });
    firedAlerts.push(id);
    safeLocalStorage.setItem(firedKey, JSON.stringify(firedAlerts));
  };

  if (config.alertAt6h && hours >= 6 && hours < 6.1) {
    fire("6h", "⏰ 6 horas de plantão", "Lembre-se de se hidratar e fazer uma pausa.");
  }
  if (config.alertAt12h && hours >= 12 && hours < 12.1) {
    fire("12h", "⚠️ 12 horas de plantão", "Plantão longo! Atenção redobrada e revise checklists.");
  }
  if (config.alertAt24h && hours >= 24 && hours < 24.1) {
    fire("24h", "🚨 24h+ de plantão", "Priorize segurança do paciente. Peça suporte se necessário.");
  }

  if (config.hydrationReminder) {
    const hydrationInterval = 2;
    const nextHydration = Math.floor(hours / hydrationInterval) * hydrationInterval;
    if (nextHydration > 0 && hours >= nextHydration && hours < nextHydration + 0.1) {
      fire(`hydration-${nextHydration}`, "💧 Hora de se hidratar", "Beba água e faça uma pausa breve.");
    }
  }

  if (config.checklistReminder) {
    const checkInterval = 4;
    const nextCheck = Math.floor(hours / checkInterval) * checkInterval;
    if (nextCheck > 0 && hours >= nextCheck && hours < nextCheck + 0.1) {
      fire(`checklist-${nextCheck}`, "📋 Revisão de segurança", "Revise os checklists de pacientes.");
    }
  }
}
