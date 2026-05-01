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

type AppTheme = "light" | "dark" | "oled";

let configured = false;

export async function configureNativeStatusBar() {
  if (configured) return;
  configured = true;

  try {
    const { Capacitor } = await import("@capacitor/core");
    if (!Capacitor.isNativePlatform?.()) return;

    const { StatusBar } = await import("@capacitor/status-bar");

    // Let the WebView draw under the status bar so we can use safe-area insets.
    await StatusBar.setOverlaysWebView({ overlay: true });

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

/**
 * Sync the native status bar icon color with the current app theme.
 *
 * - light  → Style.Light  (dark icons over light background)
 * - dark   → Style.Dark   (light icons over dark background)
 * - oled   → Style.Dark   (light icons over near-black background)
 *
 * Safe to call on web/PWA — no-ops if Capacitor StatusBar isn't available.
 */
export async function applyNativeStatusBarStyle(theme: AppTheme) {
  try {
    const { Capacitor } = await import("@capacitor/core");
    if (!Capacitor.isNativePlatform?.()) return;

    const { StatusBar, Style } = await import("@capacitor/status-bar");

    // In Capacitor: Style.Light = LIGHT content (dark icons),
    //               Style.Dark  = DARK content  (light icons).
    const style = theme === "light" ? Style.Light : Style.Dark;
    await StatusBar.setStyle({ style });

    // Keep Android transparent regardless of theme (overlay mode).
    if (Capacitor.getPlatform() === "android") {
      try {
        await StatusBar.setBackgroundColor({ color: "#00000000" });
      } catch {
        /* ignore */
      }
    }
  } catch {
    /* Plugin not available — ignore */
  }
}
