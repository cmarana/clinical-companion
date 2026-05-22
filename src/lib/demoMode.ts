/**
 * Modo demo navegável — replica clicável do app sem login nem backend.
 * Quando ativo (sessionStorage), bypassa: auth, onboarding, 2FA,
 * pré-lançamento e gates de assinatura.
 */
const KEY = "pulso_demo_mode";

export function isDemoMode(): boolean {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function enterDemoMode() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch { /* noop */ }
}

export function exitDemoMode() {
  try {
    sessionStorage.removeItem(KEY);
  } catch { /* noop */ }
}

/** Hook leve para reatividade entre componentes. */
import { useEffect, useState } from "react";

export function useDemoMode(): boolean {
  const [on, setOn] = useState<boolean>(() => isDemoMode());
  useEffect(() => {
    const handler = () => setOn(isDemoMode());
    window.addEventListener("storage", handler);
    window.addEventListener("pulso:demo-changed", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("pulso:demo-changed", handler);
    };
  }, []);
  return on;
}

export function setDemoMode(active: boolean) {
  if (active) enterDemoMode();
  else exitDemoMode();
  try {
    window.dispatchEvent(new Event("pulso:demo-changed"));
  } catch { /* noop */ }
}
