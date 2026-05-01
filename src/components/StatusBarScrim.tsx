/**
 * StatusBarScrim
 * ------------------------------------------------------------------
 * Cobre permanentemente as áreas de recorte do dispositivo (notch /
 * status bar / dynamic island / câmeras laterais em landscape) com
 * faixas opacas usando a cor de fundo do tema.
 *
 * Por que existe:
 *   Em modo PWA / Capacitor (com `viewport-fit=cover`), o conteúdo da
 *   página rola POR BAIXO da status bar nativa e dos recortes do
 *   dispositivo. Sem camadas opacas cobrindo `env(safe-area-inset-*)`,
 *   textos / imagens da página aparecem atrás do horário, bateria e
 *   notch — causando sobreposição ilegível.
 *
 * Como funciona:
 *   - 4 faixas `position: fixed` (top, bottom, left, right), cada uma
 *     com altura/largura = ao respectivo `env(safe-area-inset-*)`.
 *   - As faixas top/bottom se estendem por toda a largura (cobrindo os
 *     "cantos" — região onde top + side se cruzam, comum em landscape).
 *   - z-index alto (acima de stickies, abaixo de modais/toasts).
 *   - `pointer-events: none` para nunca interceptar toques.
 *   - Background opaco usando o token `--background` (acompanha tema:
 *     light, dark, OLED).
 *   - SEM blur / transparência → mantém WCAG AAA para o relógio/bateria.
 *
 * Notas de plataforma:
 *   - iOS PWA standalone: cobre notch / Dynamic Island.
 *   - iOS landscape (Pro/Max): faixas laterais cobrem câmera lateral.
 *   - Android Capacitor com status bar overlay: cobre 24-30px do topo.
 *   - Web/desktop sem inset: faixas têm altura 0 (invisíveis, sem custo).
 */
export default function StatusBarScrim() {
  const base =
    "fixed z-status-bar pointer-events-none bg-background";

  return (
    <>
      {/* Top — status bar / notch / dynamic island */}
      <div
        aria-hidden="true"
        className={`${base} top-0 left-0 right-0`}
        style={{ height: "env(safe-area-inset-top, 0px)" }}
      />
      {/* Left — câmera lateral em landscape (iPhone Pro/Max) */}
      <div
        aria-hidden="true"
        className={`${base} top-0 bottom-0 left-0`}
        style={{ width: "env(safe-area-inset-left, 0px)" }}
      />
      {/* Right — câmera lateral em landscape */}
      <div
        aria-hidden="true"
        className={`${base} top-0 bottom-0 right-0`}
        style={{ width: "env(safe-area-inset-right, 0px)" }}
      />
      {/* Bottom — home indicator (iOS) / gesture bar (Android) */}
      <div
        aria-hidden="true"
        className={`${base} bottom-0 left-0 right-0`}
        style={{ height: "env(safe-area-inset-bottom, 0px)" }}
      />
    </>
  );
}
