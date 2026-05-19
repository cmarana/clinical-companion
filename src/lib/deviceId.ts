// Gera e persiste um identificador estável por dispositivo/navegador
// usado para marcar dispositivos confiáveis no fluxo de 2FA.

const KEY = "pulso_device_id";

export function getDeviceId(): string {
  if (typeof window === "undefined") return "server";
  try {
    let id = localStorage.getItem(KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    // Privacidade extrema (Safari Private etc.) — fallback ephemeral
    return "ephemeral-" + Math.random().toString(36).slice(2);
  }
}

export function getDeviceLabel(): string {
  if (typeof navigator === "undefined") return "Dispositivo desconhecido";
  const ua = navigator.userAgent || "";
  // tenta extrair browser + OS
  let browser = "Navegador";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua)) browser = "Safari";

  let os = "";
  if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "macOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
  else if (/Linux/.test(ua)) os = "Linux";

  return [browser, os].filter(Boolean).join(" · ") || "Dispositivo";
}
