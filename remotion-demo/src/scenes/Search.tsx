import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import AppShell, { DarkPanel } from "../components/AppShell";

const bundle = [
  "Lactato sérico — repetir em 2h se >2 mmol/L",
  "Hemoculturas antes do antibiótico (2 pares)",
  "Antibiótico amplo espectro EV ≤ 1h",
  "Cristaloide 30 mL/kg em 3h se hipotensão",
  "Vasopressor (noradrenalina) se PAM <65",
];

const results = ["Protocolo Sepse — SSC 2026", "Sepse pediátrica — SBP 2025", "Calculadora qSOFA", "Noradrenalina — diluição IV"];
const query = "sepse";

export default function Search() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // typewriter
  const chars = Math.min(query.length, Math.floor(frame / 4));
  const typed = query.slice(0, chars);
  const phase2 = frame > 75;

  return (
    <AppShell title="Busca rápida">
      {!phase2 && (
        <AbsoluteFill style={{ background: "rgba(2,6,17,0.7)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 120 }}>
          <DarkPanel glow style={{ width: 920, padding: 16, boxShadow: `0 50px 100px -20px rgba(0,0,0,0.7), 0 0 0 1px ${BRAND.primary}50, 0 0 80px ${BRAND.primary}40` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderBottom: `1px solid ${BRAND.border}` }}>
              <div style={{ width: 24, height: 24, borderRadius: 999, border: `2.5px solid ${BRAND.primaryGlow}` }} />
              <div style={{ flex: 1, fontSize: 32, fontFamily: sora.fontFamily, color: BRAND.text }}>
                {typed}
                <span style={{ display: "inline-block", width: 3, height: 28, background: BRAND.primaryGlow, marginLeft: 4, verticalAlign: "middle", opacity: frame % 20 < 10 ? 1 : 0 }} />
              </div>
              <div style={{ fontFamily: "monospace", padding: "6px 12px", borderRadius: 8, border: `1px solid ${BRAND.border}`, color: BRAND.textMuted, fontSize: 16 }}>⌘K</div>
            </div>
            <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 6 }}>
              {results.map((r, i) => {
                const sp = spring({ frame: frame - 30 - i * 5, fps, config: { damping: 18 } });
                return (
                  <div key={r} style={{ opacity: sp, transform: `translateX(${(1 - sp) * -10}px)`, padding: "14px 18px", borderRadius: 12, background: i === 0 ? "rgba(10,109,217,0.18)" : "transparent", border: i === 0 ? `1px solid ${BRAND.primary}` : "1px solid transparent", color: BRAND.text, fontSize: 20, fontFamily: sora.fontFamily }}>
                    {r}
                  </div>
                );
              })}
            </div>
          </DarkPanel>
        </AbsoluteFill>
      )}

      {phase2 && (() => {
        const f = frame - 75;
        const fade = interpolate(f, [0, 12], [0, 1], { extrapolateRight: "clamp" });
        return (
          <div style={{ padding: 56, opacity: fade }}>
            <DarkPanel glow style={{ padding: 36, maxWidth: 1100, margin: "0 auto", overflow: "hidden", maxHeight: 600 }}>
              <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: BRAND.primaryGlow }}>Protocolo · SSC 2026</div>
              <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 44, color: BRAND.text, marginTop: 6 }}>Sepse e Choque Séptico — Bundle da 1ª hora</div>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                {bundle.map((b, i) => {
                  const sp = spring({ frame: f - 8 - i * 5, fps, config: { damping: 18 } });
                  return (
                    <div key={i} style={{ opacity: sp, transform: `translateY(${(1 - sp) * 12}px)`, display: "flex", gap: 14, padding: 16, borderRadius: 14, background: "rgba(91,168,255,0.06)", border: `1px solid ${BRAND.border}`, color: BRAND.text, fontSize: 20 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 999, background: BRAND.primary, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, boxShadow: `0 0 14px ${BRAND.primary}`, flexShrink: 0 }}>{i + 1}</div>
                      {b}
                    </div>
                  );
                })}
              </div>
            </DarkPanel>
          </div>
        );
      })()}
    </AppShell>
  );
}
