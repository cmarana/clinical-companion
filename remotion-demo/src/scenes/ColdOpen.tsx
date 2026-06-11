import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import BgGrid from "../components/BgGrid";

export default function ColdOpen() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const pathLen = interpolate(frame, [10, 60], [0, 1], { extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(frame, [55, 75], [12, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgGrid />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22, transform: `scale(${logoScale})`, marginBottom: 36 }}>
          <div style={{ width: 92, height: 92, borderRadius: 22, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 60px ${BRAND.primary}`, fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 56, color: "white" }}>P</div>
          <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 120, letterSpacing: -3, color: BRAND.text, textShadow: `0 0 60px ${BRAND.primary}` }}>PULSO</div>
        </div>

        <svg viewBox="0 0 800 100" width={1200} height={150}>
          <defs>
            <linearGradient id="ecg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={BRAND.primaryGlow} stopOpacity="0.2" />
              <stop offset="50%" stopColor={BRAND.primaryGlow} stopOpacity="1" />
              <stop offset="100%" stopColor={BRAND.primaryGlow} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 L160,50 L175,50 L185,18 L195,82 L205,50 L360,50 L375,50 L385,18 L395,82 L405,50 L560,50 L575,50 L585,18 L595,82 L605,50 L800,50"
            fill="none"
            stroke="url(#ecg)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - pathLen}
            style={{ filter: `drop-shadow(0 0 14px ${BRAND.primary})` }}
          />
        </svg>

        <div style={{ opacity: subOpacity, transform: `translateY(${subY}px)`, marginTop: 24, fontFamily: sora.fontFamily, fontWeight: 400, fontSize: 36, color: BRAND.textMuted, letterSpacing: 2 }}>
          Plataforma clínica de emergência
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
