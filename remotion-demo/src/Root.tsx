import { Composition } from "remotion";
import MainVideo from "./MainVideo";
import { FPS, W, H } from "./brand";

// 10 seqs + 9 transições de 18f. Soma: 105+105+180+195+90+195+220+165+195 = 1450 - 9*18 = 1450 - 162 = 1288
// Add small safety pad.
const TOTAL = 1288;

export const RemotionRoot = () => (
  <>
    <Composition id="main" component={MainVideo} durationInFrames={TOTAL} fps={FPS} width={W} height={H} />
  </>
);
