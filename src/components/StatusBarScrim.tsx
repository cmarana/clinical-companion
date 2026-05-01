/**
 * StatusBarScrim
 * ------------------------------------------------------------------
 * Cobre permanentemente a área da status bar (notch / horário / bateria)
 * com uma faixa opaca usando a cor de fundo do tema.
 *
 * Por que existe:
 *   Em modo PWA / Capacitor, o conteúdo da página rola POR BAIXO da
 *   status bar nativa. Sem uma camada opaca cobrindo `env(safe-area-inset-top)`,
 *   textos / imagens da página aparecem atrás do horário e bateria,
 *   causando sobreposição ilegível.
 *
 * Como funciona:
 *   - `position: fixed` no topo, altura = `env(safe-area-inset-top)`.
 *   - z-index alto (acima de stickies, abaixo de modais/toasts).
 *   - `pointer-events: none` para nunca interceptar toques.
 *   - Background opaco usando o token `--background` (acompanha tema).
 */
export default function StatusBarScrim() {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none bg-background"
      style={{ height: "env(safe-area-inset-top, 0px)" }}
    />
  );
}
