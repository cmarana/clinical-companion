import { useEffect, useCallback } from "react";

/**
 * Mapa de rotas → função de import dinâmico do chunk da página.
 * Usado para prefetch em hover/idle, reduzindo a latência de navegação.
 */
const routeLoaders: Record<string, () => Promise<unknown>> = {
  "/home": () => import("@/pages/Home"),
  "/full-protocols": () => import("@/pages/FullProtocols"),
  "/emergency": () => import("@/pages/EmergencyMode"),
  "/duty": () => import("@/pages/DutyMode"),
  "/quiz": () => import("@/pages/Quiz"),
  "/flashcards": () => import("@/pages/Flashcards"),
  "/study-dashboard": () => import("@/pages/StudyDashboard"),
  "/calculators": () => import("@/pages/Calculators"),
  "/bulario": () => import("@/pages/Bulario"),
  "/prescriptions": () => import("@/pages/Prescriptions"),
  "/clinical-ai": () => import("@/pages/ClinicalAI"),
  "/profile": () => import("@/pages/Profile"),
  "/search": () => import("@/pages/SearchPage"),
  "/favorites": () => import("@/pages/Favorites"),
  "/notes": () => import("@/pages/Notes"),
  "/cpr-timer": () => import("@/pages/CPRTimer"),
  "/checklists": () => import("@/pages/Checklists"),
  "/cid": () => import("@/pages/CIDSearch"),
  "/lab-reference": () => import("@/pages/LabReference"),
  "/iv-dilutions": () => import("@/pages/IVDilutions"),
  "/drug-interactions": () => import("@/pages/DrugInteractions"),
};

const prefetched = new Set<string>();

export function prefetchRoute(path: string) {
  if (prefetched.has(path)) return;
  const loader = routeLoaders[path];
  if (!loader) return;
  prefetched.add(path);
  // executa em background; ignora erros
  loader().catch(() => prefetched.delete(path));
}

/**
 * Retorna handlers para anexar a links e disparar prefetch em hover/touch/focus.
 */
export function usePrefetchHandlers(path: string) {
  const handler = useCallback(() => prefetchRoute(path), [path]);
  return {
    onMouseEnter: handler,
    onFocus: handler,
    onTouchStart: handler,
  };
}

/**
 * Pré-aquece um conjunto de rotas críticas durante o tempo ocioso do navegador.
 * Use uma única vez no app shell (após o login).
 */
export function useIdlePrefetch(paths: string[]) {
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    const run = () => paths.forEach(prefetchRoute);
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(run, { timeout: 4000 });
      return () => {
        const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
        if (typeof cancel === "function") cancel(id);
      };
    }
    const t = window.setTimeout(run, 2500);
    return () => window.clearTimeout(t);
  }, [paths]);
}
