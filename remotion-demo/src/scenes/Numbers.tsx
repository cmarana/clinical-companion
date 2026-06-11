import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import BgGrid from "../components/BgGrid";

const items = [
  { v: "1.004", k: "protocolos clínicos" },
  { v: "2.000", k: "medicamentos" },
  { v: "100%", k: "offline-first" },
  { v: "<200ms", k: "latência edge AI" },
  { v: "PT-BR", k: "RAG médico próprio" },
  { v: "1,2M", k: "profissionais TAM" },
];

export default function Numbers() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <BgGrid />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "60px 100px", maxWidth: 1500 }}>
          {items.map((n, i) => {
            const sp = spring({ frame: frame - i * 5, fps, config: { damping: 18 } });
            return (
              <div key={n.k} style={{ opacity: sp, transform: `translateY(${(1 - sp) * 14}px) scale(${0.95 + sp * 0.05})`, textAlign: "center" }}>
                <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 96, color: BRAND.primaryGlow, letterSpacing: -2, textShadow: `0 0 30px ${BRAND.primary}80` }}>{n.v}</div>
                <div style={{ fontSize: 20, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: 4, marginTop: 6 }}>{n.k}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 60, fontFamily: sora.fontFamily, fontSize: 38, fontWeight: 700, color: "white", textAlign: "center", opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" }) }}>
          Stack proprietária. Construída no Brasil.<br />
          <span style={{ fontSize: 26, fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>Pronta para escalar na América Latina.</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
