import { ReactNode } from "react";
import { ChevronLeft, Search, Bell, Wifi, WifiOff } from "lucide-react";
import { BRAND } from "./mock-data";
import PulsoLogo from "@/components/PulsoLogo";

/**
 * Casca DARK — imita o modo OLED do app real (TopBar + container).
 * Mantém o nome do arquivo para evitar quebras de import.
 */
export default function LightShell({
  title,
  children,
  showSearch = true,
  offline = false,
}: {
  title?: string;
  children: ReactNode;
  showSearch?: boolean;
  offline?: boolean;
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        background: BRAND.bgDark,
        color: BRAND.text,
        fontFamily: "Inter, system-ui",
        backgroundImage:
          "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(10,109,217,0.18), transparent 60%)",
      }}
    >
      <div
        className="relative flex items-center gap-3 px-5 py-3 border-b"
        style={{ borderColor: BRAND.border, background: "rgba(11,20,38,0.85)", backdropFilter: "blur(10px)" }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: `linear-gradient(180deg, ${BRAND.primaryGlow}, ${BRAND.primary})`, boxShadow: `0 0 18px ${BRAND.primary}` }}
          aria-hidden
        />
        <ChevronLeft className="w-5 h-5" style={{ color: BRAND.textMuted }} />
        <div className="flex items-center gap-2 flex-1">
          <PulsoLogo size={28} forceVariant="dark" priority />
          <span className="font-bold text-[15px] tracking-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.primaryGlow }}>
            PULSO
          </span>
          {title && (
            <span className="text-[13px] font-medium ml-2 truncate" style={{ color: BRAND.textMuted, fontFamily: "Inter, system-ui" }}>
              · {title}
            </span>
          )}
        </div>
        {showSearch && <Search className="w-5 h-5" style={{ color: BRAND.textMuted }} />}
        <Bell className="w-5 h-5" style={{ color: BRAND.textMuted }} />
        {offline ? (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
            style={{ background: "rgba(255,77,94,0.15)", color: BRAND.danger, border: `1px solid ${BRAND.danger}` }}
          >
            <WifiOff className="w-3.5 h-3.5" /> Offline
          </span>
        ) : (
          <Wifi className="w-4 h-4" style={{ color: BRAND.ok }} />
        )}
      </div>
      <div className="flex-1 overflow-hidden relative">{children}</div>
    </div>
  );
}

/** Chip flutuante de métrica. Dark + glow. */
export function MetricChip({ children, accent = false, big = false }: { children: ReactNode; accent?: boolean; big?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap backdrop-blur ${
        big ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-xs"
      }`}
      style={{
        background: accent
          ? `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`
          : "rgba(15,27,48,0.85)",
        color: accent ? "white" : BRAND.text,
        border: accent ? "none" : `1px solid ${BRAND.borderStrong}`,
        boxShadow: accent
          ? `0 14px 36px -10px rgba(10,109,217,0.65), 0 0 0 1px ${BRAND.primaryGlow}40`
          : "0 6px 20px -8px rgba(0,0,0,0.4)",
        fontFamily: "Sora, system-ui",
      }}
    >
      {children}
    </span>
  );
}

/** Painel dark (substitui o `bg-white` dos cards das cenas). */
export function DarkPanel({ children, className = "", glow = false }: { children: ReactNode; className?: string; glow?: boolean }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        background: `linear-gradient(180deg, ${BRAND.surfaceElev}, ${BRAND.surface})`,
        border: `1px solid ${BRAND.border}`,
        boxShadow: glow
          ? `0 30px 60px -25px rgba(10,109,217,0.45), inset 0 1px 0 rgba(255,255,255,0.04)`
          : `0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)`,
      }}
    >
      {children}
    </div>
  );
}
