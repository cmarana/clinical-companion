/**
 * Native StatusBar configuration for Capacitor (iOS + Android).
 *
 * Goal: Make the WebView render edge-to-edge under the system status bar so
 * the OS clock, signal and battery icons stay visible on top, while the app
 * content is pushed down using CSS `env(safe-area-inset-top)` (handled in
 * the TopBar component).
 *
 * This must run only on a real native device — never inside the browser
 * preview or PWA — to avoid touching APIs that don't exist on the web.
 */

let configured = false;

export async function configureNativeStatusBar() {
  if (configured) return;
  configured = true;

  try {
    const { Capacitor } = await import("@capacitor/core");
    if (!Capacitor.isNativePlatform?.()) return;

    const { StatusBar, Style } = await import("@capacitor/status-bar");

    // Let the WebView draw under the status bar so we can use safe-area insets.
    await StatusBar.setOverlaysWebView({ overlay: true });

    // Light icons on dark background (matches our app shell).
    await StatusBar.setStyle({ style: Style.Dark });

    // Android only — keep the bar transparent so our header bg shows through.
    if (Capacitor.getPlatform() === "android") {
      try {
        await StatusBar.setBackgroundColor({ color: "#00000000" });
      } catch {
        /* setBackgroundColor unsupported on some Android versions — ignore */
      }
    }
  } catch {
    /* Plugin not available (web/PWA) — silently ignore */
  }
}
