import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.aacf366df8e043b2abf55d860c297835',
  appName: 'PULSO',
  webDir: 'dist',
  ios: {
    // 'never' = WebView desenha edge-to-edge sob a status bar.
    // Necessário para que env(safe-area-inset-top) retorne o valor real
    // (~47px em iPhones com notch / Dynamic Island) e empurre o header
    // para baixo do horário/bateria. Com 'automatic', o WebKit aplica
    // inset por conta própria e zera o env(), causando sobreposição.
    contentInset: 'never',
    allowsLinkPreview: false,
    scrollEnabled: true,
    backgroundColor: '#0a0a0a',
    preferredContentMode: 'mobile',
  },
  android: {
    backgroundColor: '#0a0a0a',
    allowMixedContent: false,
    useLegacyBridge: false,
    // Draw under the system bars so we can use CSS env(safe-area-inset-*)
    // to keep the clock, signal and battery icons visible on top.
    adjustMarginsForEdgeToEdge: 'force',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 2000,
      launchFadeOutDuration: 500,
      backgroundColor: '#0a0a0a',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#00000000',
      overlaysWebView: true,
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
};

export default config;
