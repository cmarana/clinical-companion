import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../brand";
import { sora } from "../fonts";
import BgGrid from "../components/BgGrid";

export default function Closing() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoOp = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const qrSp = spring({ frame: frame - 6, fps, config: { damping: 16, stiffness: 130 } });
  const headlineOp = interpolate(frame, [22, 38], [0, 1], { extrapolateRight: "clamp" });
  const subOp = interpolate(frame, [34, 52], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <BgGrid />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 60 }}>
        <div style={{ opacity: logoOp, display: "flex", alignItems: "center", gap: 18, marginBottom: 32 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${BRAND.primary}`, fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 44, color: "white" }}>P</div>
          <div style={{ fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 72, color: BRAND.text, textShadow: `0 0 40px ${BRAND.primary}80`, letterSpacing: -1 }}>PULSO</div>
        </div>

        <div style={{ transform: `scale(${0.88 + qrSp * 0.12})`, opacity: qrSp, background: "white", padding: 28, borderRadius: 32, boxShadow: `0 40px 100px -12px rgba(10,109,217,0.7), 0 0 0 2px ${BRAND.primaryGlow}, 0 0 80px ${BRAND.primary}` }}>
          <Img src={staticFile("qr.svg")} style={{ width: 380, height: 380, display: "block" }} />
        </div>

        <div style={{ opacity: headlineOp, transform: `translateY(${(1 - headlineOp) * 14}px)`, marginTop: 36, fontFamily: sora.fontFamily, fontWeight: 800, fontSize: 56, color: BRAND.text, textAlign: "center", maxWidth: 1200, letterSpacing: -1 }}>
          Experimente o PULSO completo por <span style={{ color: BRAND.primaryGlow, textShadow: `0 0 24px ${BRAND.primary}` }}>7 dias</span>
        </div>
        <div style={{ opacity: subOp, marginTop: 14, fontSize: 26, color: BRAND.textMuted, textAlign: "center", maxWidth: 1100 }}>
          Escaneie · cortesia Web Summit Rio 2026<br />
          <span style={{ fontSize: 20 }}>contato@pulsoemergencia.com.br</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
