import { ReactNode } from "react";
import { ChevronLeft, Search, Bell, Wifi, WifiOff } from "lucide-react";
import { BRAND } from "./mock-data";
import PulsoLogo from "@/components/PulsoLogo";

/** Casca clara que imita o app real (TopBar + container). */
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
    <div className="absolute inset-0 flex flex-col" style={{ background: BRAND.bgLight, color: BRAND.text, fontFamily: "Inter, system-ui" }}>
      <div
        className="flex items-center gap-3 px-5 py-3 border-b"
        style={{ borderColor: BRAND.border, background: BRAND.surface }}
      >
        <ChevronLeft className="w-5 h-5" style={{ color: BRAND.textMuted }} />
        <div className="flex items-center gap-2 flex-1">
          <PulsoLogo size={28} forceVariant="light" priority />
          <span className="font-semibold text-[15px] tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>
            {title ?? "PULSO"}
          </span>
        </div>
        {showSearch && <Search className="w-5 h-5" style={{ color: BRAND.textMuted }} />}
        <Bell className="w-5 h-5" style={{ color: BRAND.textMuted }} />
        {offline ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "#FEE2E2", color: BRAND.danger }}>
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

/** Chip flutuante de métrica. */
export function MetricChip({ children, accent = false, big = false }: { children: ReactNode; accent?: boolean; big?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap backdrop-blur ${
        big ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-xs"
      }`}
      style={{
        background: accent ? BRAND.primary : "rgba(255,255,255,0.92)",
        color: accent ? "white" : BRAND.text,
        boxShadow: accent
          ? "0 10px 30px -10px rgba(10,109,217,0.55)"
          : "0 6px 20px -8px rgba(15,23,42,0.18)",
        fontFamily: "Sora, system-ui",
      }}
    >
      {children}
    </span>
  );
}
