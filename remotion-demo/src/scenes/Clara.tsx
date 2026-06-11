import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import AppShell from "../components/AppShell";

const blocks = [
  "<b>Noradrenalina — choque séptico (70 kg)</b>",
  "<b>Diluição:</b> 16 mg em 234 mL SG 5% → 64 mcg/mL",
  "<b>Dose inicial:</b> 0,05 mcg/kg/min ≈ <b>3,3 mL/h</b> em BIC",
  "<b>Titulação:</b> ajustar a cada 5 min até PAM ≥ 65 mmHg",
  "<i style='opacity:.7'>Ref.: SSC 2026 · AMIB 2024</i>",
];

const question = "Dose de noradrenalina, choque séptico, 70 kg?";

export default function Clara() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chars = Math.min(question.length, Math.floor(frame / 1.6));
  const typed = question.slice(0, chars);
  const answerStart = 70;
  const shown = Math.max(0, Math.min(blocks.length, Math.floor((frame - answerStart) / 18)));

  return (
    <AppShell title="Dra. Clara · IA Clínica">
      <div style={{ padding: 56, display: "flex", flexDirection: "column", gap: 22, height: "100%" }}>
        {/* user bubble */}
        <div style={{ alignSelf: "flex-end", maxWidth: "75%", padding: "22px 28px", borderRadius: 24, borderBottomRightRadius: 6, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white", fontSize: 26, fontFamily: "Inter, sans-serif", boxShadow: `0 20px 40px -14px ${BRAND.primary}` }}>
          {typed}
          {chars < question.length && <span style={{ display: "inline-block", width: 3, height: 22, background: "white", marginLeft: 4, verticalAlign: "middle", opacity: frame % 20 < 10 ? 1 : 0 }} />}
        </div>

        {frame > answerStart - 8 && (
          <div style={{ alignSelf: "flex-start", maxWidth: "80%", padding: "22px 28px", borderRadius: 24, borderBottomLeftRadius: 6, background: BRAND.surfaceElev, border: `1px solid ${BRAND.border}`, boxShadow: `0 24px 50px -18px ${BRAND.primary}50` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 800, color: BRAND.primaryGlow, marginBottom: 14, fontFamily: sora.fontFamily, textTransform: "uppercase", letterSpacing: 3 }}>
              ✦ Dra. Clara
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 24, color: BRAND.text, lineHeight: 1.5 }}>
              {blocks.slice(0, shown).map((b, i) => {
                const sp = spring({ frame: frame - answerStart - i * 18, fps, config: { damping: 18 } });
                return <div key={i} style={{ opacity: sp, transform: `translateY(${(1 - sp) * 6}px)` }} dangerouslySetInnerHTML={{ __html: b }} />;
              })}
            </div>
          </div>
        )}

        <div style={{ flex: 1 }} />
        <div style={{ padding: "20px 24px", borderRadius: 20, background: BRAND.surfaceElev, border: `1px solid ${BRAND.border}`, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, color: BRAND.textMuted, fontSize: 22 }}>Pergunte algo clínico...</div>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: BRAND.primary, boxShadow: `0 0 24px ${BRAND.primary}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 28 }}>➤</div>
        </div>
      </div>
    </AppShell>
  );
}
