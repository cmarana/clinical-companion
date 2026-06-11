import { AbsoluteFill } from "remotion";
import { BRAND } from "../brand";

export default function BgGrid({ glow = true }: { glow?: boolean }) {
  return (
    <AbsoluteFill style={{ background: BRAND.navyDeep }}>
      {glow && (
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 60% 45% at 50% 35%, rgba(10,109,217,0.30), transparent 65%)`,
          }}
        />
      )}
      <AbsoluteFill
        style={{
          opacity: 0.07,
          backgroundImage:
            "linear-gradient(rgba(91,168,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,168,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </AbsoluteFill>
  );
}
