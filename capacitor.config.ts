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
    // Fundo do WebView combinando com o splash HTML em dark/OLED.
    // Evita o "flash branco" entre o LaunchScreen nativo do iOS e o
    // momento em que o React monta + esconde o splash inline.
    backgroundColor: '#0b1220',
    preferredContentMode: 'mobile',
  },
  android: {
    backgroundColor: '#0b1220',
    allowMixedContent: false,
    useLegacyBridge: false,
    // Draw under the system bars so we can use CSS env(safe-area-inset-*)
    // to keep the clock, signal and battery icons visible on top.
    adjustMarginsForEdgeToEdge: 'force',
  },
  plugins: {
    SplashScreen: {
      // Esconde o splash NATIVO do Capacitor o mais rápido possível.
      // O splash HTML inline (em index.html) assume imediatamente,
      // garantindo continuidade visual: LaunchScreen iOS → WebView → React,
      // sem nenhum frame branco entre as camadas.
      launchAutoHide: true,
      launchShowDuration: 0,
      launchFadeOutDuration: 200,
      backgroundColor: '#0b1220',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: false,
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
