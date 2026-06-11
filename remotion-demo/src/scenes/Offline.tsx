import { AbsoluteFill, interpolate, random, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import AppShell, { DarkPanel } from "../components/AppShell";

/**
 * Queda de Wi-Fi cinematográfica.
 * 0–24f: app online
 * 24–60f: BLACKOUT + glitch + "SINAL PERDIDO"
 * 60+f: app reaparece offline, cards continuam funcionando
 */
export default function Offline() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const blackout = frame >= 24 && frame < 60;
  const offlinePhase = frame >= 60;
  const showCard2 = frame >= 100;

  return (
    <AbsoluteFill>
      <AppShell title="PULSO" offline={offlinePhase}>
        {offlinePhase && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: 16, background: BRAND.danger, color: "white", textAlign: "center", fontWeight: 800, fontSize: 22, fontFamily: sora.fontFamily, zIndex: 5 }}>
            ⚠ Sem conexão · O PULSO continua funcionando
          </div>
        )}

        <div style={{ padding: 56, paddingTop: offlinePhase ? 100 : 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <DarkPanel glow={offlinePhase} style={{ padding: 32, opacity: offlinePhase ? 1 : frame < 24 ? 1 : 0.2 }}>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: BRAND.primaryGlow }}>Protocolo</div>
            <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 34, color: BRAND.text, marginTop: 6 }}>IAM com supra de ST</div>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10, color: BRAND.text, fontSize: 20 }}>
              <div>✓ AAS 200–300 mg VO mastigar</div>
              <div>✓ Clopidogrel 300 mg VO ataque</div>
              <div>✓ Trombólise se ICP {">"} 120 min</div>
            </div>
          </DarkPanel>

          <div style={{ opacity: showCard2 ? 1 : 0, transform: `translateX(${showCard2 ? 0 : 14}px)` }}>
            <DarkPanel glow style={{ padding: 32 }}>
              <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", color: BRAND.primaryGlow }}>Diluição IV</div>
              <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 34, color: BRAND.text, marginTop: 6 }}>Tenecteplase (TNK)</div>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10, color: BRAND.text, fontSize: 20 }}>
                <div><b style={{ color: BRAND.primaryGlow }}>Reconstituir:</b> 10 mL AD</div>
                <div><b style={{ color: BRAND.primaryGlow }}>Dose:</b> ajustada por peso (30–50 mg)</div>
                <div><b style={{ color: BRAND.primaryGlow }}>Via:</b> bolus EV em 5–10 s</div>
              </div>
            </DarkPanel>
          </div>
        </div>

        {offlinePhase && (
          <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
            <div style={{ padding: "18px 28px", borderRadius: 20, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white", fontWeight: 800, fontSize: 24, fontFamily: sora.fontFamily, boxShadow: `0 30px 60px -16px ${BRAND.primary}` }}>
              ⛔ Cache offline inteligente — funciona onde a rede não chega.
            </div>
          </div>
        )}
      </AppShell>

      {/* BLACKOUT overlay */}
      {blackout && (() => {
        const f = frame - 24;
        const flicker = random(`f${Math.floor(frame / 2)}`) > 0.75 ? 0.4 : 1;
        const scale = spring({ frame: f, fps, config: { damping: 12, stiffness: 140 } });
        return (
          <AbsoluteFill style={{ background: "#000", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: flicker }}>
            {/* scanlines */}
            <AbsoluteFill style={{ opacity: 0.5, backgroundImage: "repeating-linear-gradient(0deg, rgba(255,77,94,0.10) 0px, rgba(255,77,94,0.10) 2px, transparent 2px, transparent 6px)", mixBlendMode: "screen" }} />
            <div style={{ transform: `scale(${0.6 + scale * 0.5})`, display: "flex", alignItems: "center", gap: 24, color: BRAND.danger, fontFamily: sora.fontFamily }}>
              <div style={{ fontSize: 100 }}>⚡</div>
              <div>
                <div style={{ fontSize: 18, letterSpacing: 8, textTransform: "uppercase", opacity: 0.8 }}>Hospital · 03:14</div>
                <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>SINAL PERDIDO</div>
              </div>
            </div>
            <div style={{ marginTop: 22, fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontFamily: sora.fontFamily }}>Wi-Fi do hospital caiu</div>
          </AbsoluteFill>
        );
      })()}
    </AbsoluteFill>
  );
}
