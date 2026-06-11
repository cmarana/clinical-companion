import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";

export default function Impact({ kicker, lines }: { kicker?: string; lines: string[] }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 18, stiffness: 110 } });
  const opacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BRAND.navy }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(10,109,217,0.32), transparent 70%)` }} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 120px", textAlign: "center", opacity, transform: `scale(${0.94 + s * 0.06})` }}>
        {kicker && (
          <div style={{ fontFamily: sora.fontFamily, fontWeight: 700, fontSize: 22, letterSpacing: 8, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: 36 }}>
            {kicker}
          </div>
        )}
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 96, lineHeight: 1.05, color: "white", letterSpacing: -2 }}>
            {l}
          </div>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
