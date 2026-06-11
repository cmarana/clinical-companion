import { AbsoluteFill } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";

/** Casca dark imitando o TopBar do app PULSO. */
export default function AppShell({ title, offline = false, children }: { title?: string; offline?: boolean; children: React.ReactNode }) {
  return (
    <AbsoluteFill style={{ background: BRAND.bgDark, color: BRAND.text, fontFamily: "Inter, sans-serif" }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 100% 60% at 50% -10%, rgba(10,109,217,0.18), transparent 60%)` }} />
      {/* TopBar */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "22px 36px",
          borderBottom: `1px solid ${BRAND.border}`,
          background: "rgba(11,20,38,0.85)",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: `linear-gradient(180deg, ${BRAND.primaryGlow}, ${BRAND.primary})`, boxShadow: `0 0 28px ${BRAND.primary}` }} />
        {/* Logo P (ECG) */}
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 24px ${BRAND.primary}80`, fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 26, color: "white" }}>P</div>
        <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 28, color: BRAND.primaryGlow, letterSpacing: -0.5 }}>PULSO</div>
        {title && <div style={{ fontSize: 22, color: BRAND.textMuted, marginLeft: 8 }}>· {title}</div>}
        <div style={{ flex: 1 }} />
        {offline ? (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "rgba(255,77,94,0.15)", color: BRAND.danger, border: `1px solid ${BRAND.danger}`, fontWeight: 700, fontSize: 16, fontFamily: sora.fontFamily }}>
            ⚠ Offline
          </div>
        ) : (
          <div style={{ width: 18, height: 18, borderRadius: 999, background: BRAND.ok, boxShadow: `0 0 12px ${BRAND.ok}` }} />
        )}
      </div>
      <AbsoluteFill style={{ top: 90 }}>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
}

export function DarkPanel({ children, style = {}, glow = false }: { children: React.ReactNode; style?: React.CSSProperties; glow?: boolean }) {
  return (
    <div
      style={{
        borderRadius: 24,
        background: `linear-gradient(180deg, ${BRAND.surfaceElev}, ${BRAND.surface})`,
        border: `1px solid ${BRAND.border}`,
        boxShadow: glow ? `0 40px 80px -25px rgba(10,109,217,0.55), inset 0 1px 0 rgba(255,255,255,0.04)` : `0 20px 40px -20px rgba(0,0,0,0.5)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
