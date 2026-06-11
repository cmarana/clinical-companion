import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { BRAND } from "./brand";
import "./fonts";
import ColdOpen from "./scenes/ColdOpen";
import Impact from "./scenes/Impact";
import RedRoom from "./scenes/RedRoom";
import Search from "./scenes/Search";
import Offline from "./scenes/Offline";
import Clara from "./scenes/Clara";
import Numbers from "./scenes/Numbers";
import Closing from "./scenes/Closing";

const T = 18; // transition frames
const trans = (presentation: any = fade()) => (
  <TransitionSeries.Transition presentation={presentation} timing={linearTiming({ durationInFrames: T })} />
);

export default function MainVideo() {
  return (
    <AbsoluteFill style={{ background: BRAND.bgDark, fontFamily: "Inter, sans-serif" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={105}>
          <ColdOpen />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={105}>
          <Impact kicker="3 da manhã · plantão lotado" lines={["A internet do hospital cai.", "A decisão clínica não pode."]} />
        </TransitionSeries.Sequence>
        {trans(wipe({ direction: "from-left" }))}
        <TransitionSeries.Sequence durationInFrames={180}>
          <RedRoom />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={195}>
          <Search />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Impact kicker="O que ninguém entrega" lines={["100% offline-first.", "Funciona onde o sinal não chega."]} />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={195}>
          <Offline />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={220}>
          <Clara />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={165}>
          <Numbers />
        </TransitionSeries.Sequence>
        {trans()}
        <TransitionSeries.Sequence durationInFrames={195}>
          <Closing />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
}
