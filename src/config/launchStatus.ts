/**
 * Controle global do estágio de lançamento do PULSO.
 *
 * - "prelaunch": / mostra a landing provisória; o app só é acessível
 *   por usuários com role admin, tester ou developer. Demais usuários
 *   autenticados caem em /coming-soon.
 * - "live": comportamento normal — / leva ao app para autenticados
 *   e para a landing original para visitantes.
 *
 * Para "soltar" o app publicamente, basta trocar para "live".
 */
export type AppLaunchStatus = "prelaunch" | "live";

export const APP_LAUNCH_STATUS: AppLaunchStatus = "prelaunch";

/** Roles que podem entrar no app durante o pré-lançamento. */
export const APP_ACCESS_ROLES = ["admin", "tester", "developer"] as const;
export type AppAccessRole = (typeof APP_ACCESS_ROLES)[number];
