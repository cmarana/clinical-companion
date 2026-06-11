import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import AppShell, { DarkPanel } from "../components/AppShell";

const scenarios = [
  { id: "pcr", label: "PCR no Adulto", tag: "Crítico", color: BRAND.danger },
  { id: "avc", label: "AVCi — Janela", tag: "Tempo", color: BRAND.warning },
  { id: "sepse", label: "Choque Séptico", tag: "Crítico", color: BRAND.danger },
  { id: "iam", label: "IAM com Supra", tag: "Tempo", color: BRAND.warning },
];

const steps = [
  { t: "00:00", a: "Iniciar RCP 30:2 · Compressões 100–120/min" },
  { t: "00:30", a: "Monitor / Desfibrilador · Checar ritmo" },
  { t: "02:00", a: "Adrenalina 1 mg EV · repetir 3–5 min" },
  { t: "04:00", a: "Amiodarona 300 mg EV (FV/TVSP refratária)" },
];

export default function RedRoom() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const activate = frame > 25;
  const showCond = frame > 50;

  return (
    <AppShell title="Sala Vermelha · Modo Emergência">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, padding: 56, height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: BRAND.textMuted }}>Cenário crítico</div>
          {scenarios.map((s, i) => {
            const sp = spring({ frame: frame - i * 4, fps, config: { damping: 18 } });
            const isActive = activate && s.id === "pcr";
            return (
              <div
                key={s.id}
                style={{
                  opacity: sp,
                  transform: `translateX(${(1 - sp) * -20}px)`,
                  borderRadius: 20,
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: isActive ? `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})` : BRAND.surfaceElev,
                  color: isActive ? "white" : BRAND.text,
                  border: `1px solid ${isActive ? BRAND.primaryGlow : BRAND.border}`,
                  boxShadow: isActive ? `0 24px 50px -14px ${BRAND.primary}` : "none",
                  fontFamily: sora.fontFamily,
                }}
              >
                <div style={{ width: 14, height: 14, borderRadius: 999, background: s.color, boxShadow: `0 0 12px ${s.color}` }} />
                <div style={{ flex: 1, fontWeight: 700, fontSize: 26 }}>{s.label}</div>
                <div style={{ background: s.color, color: "white", padding: "4px 12px", borderRadius: 999, fontSize: 14, fontWeight: 800 }}>{s.tag}</div>
              </div>
            );
          })}
        </div>

        <div style={{ opacity: showCond ? 1 : 0, transform: `translateY(${showCond ? 0 : 20}px)`, transition: "none" }}>
          <DarkPanel glow style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, fontFamily: sora.fontFamily, fontWeight: 700, fontSize: 28, color: BRAND.text }}>
              <span style={{ width: 12, height: 12, borderRadius: 999, background: BRAND.danger, boxShadow: `0 0 10px ${BRAND.danger}` }} />
              Parada Cardiorrespiratória — Adulto
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {steps.map((s, i) => {
                const sp = spring({ frame: frame - 55 - i * 6, fps, config: { damping: 18 } });
                return (
                  <div
                    key={i}
                    style={{
                      opacity: sp,
                      transform: `translateX(${(1 - sp) * 20}px)`,
                      display: "flex",
                      gap: 16,
                      padding: 14,
                      borderRadius: 14,
                      background: i === 0 ? "rgba(255,77,94,0.12)" : "rgba(91,168,255,0.06)",
                      border: `1px solid ${i === 0 ? "rgba(255,77,94,0.3)" : BRAND.border}`,
                    }}
                  >
                    <div style={{ minWidth: 80, fontFamily: "monospace", fontWeight: 700, fontSize: 18, color: i === 0 ? BRAND.danger : BRAND.primaryGlow }}>{s.t}</div>
                    <div style={{ flex: 1, fontSize: 20, color: BRAND.text }}>{s.a}</div>
                  </div>
                );
              })}
            </div>
          </DarkPanel>
        </div>
      </div>
      {/* badge */}
      <div style={{ position: "absolute", bottom: 36, right: 36, padding: "14px 24px", borderRadius: 999, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white", fontWeight: 700, fontSize: 20, boxShadow: `0 20px 40px -12px ${BRAND.primary}`, fontFamily: sora.fontFamily }}>
        Modo Emergência · resposta em segundos
      </div>
    </AppShell>
  );
}
