/**
 * Design tokens compartilhados — fonte única da verdade para os cards
 * da Home, Ferramentas, Emergência e demais páginas internas.
 *
 * Para mudar a paleta de cores em todo o app, basta editar este arquivo.
 */

// ============== Gradientes ==============
export const GRADIENT_DEEP_BLUE =
  "linear-gradient(135deg, hsl(212 64% 16%) 0%, hsl(212 72% 28%) 100%)";

export const GRADIENT_DEEP_BLUE_SOFT =
  "linear-gradient(135deg, hsl(212 60% 18%) 0%, hsl(212 70% 26%) 100%)";

export const GRADIENT_BRIGHT_BLUE =
  "linear-gradient(135deg, hsl(212 90% 28%) 0%, hsl(212 88% 38%) 50%, hsl(212 86% 48%) 100%)";

export const GRADIENT_DANGER =
  "linear-gradient(135deg, hsl(355 52% 20%) 0%, hsl(358 48% 28%) 55%, hsl(0 45% 34%) 100%)";

// Aliases retrocompatíveis
export const PULSO_BG = GRADIENT_DEEP_BLUE;
export const DANGER_BG = GRADIENT_DANGER;

// ============== Tokens visuais reutilizáveis ==============
export const CARD_RADIUS = "rounded-2xl";
export const CARD_SHADOW = "shadow-md";
export const CARD_RING = "ring-1 ring-white/15";
export const ICON_PILL = "bg-white/18 ring-1 ring-white/30";
export const ICON_PILL_DANGER = "bg-white/15 ring-1 ring-white/25 backdrop-blur-sm";

// ============== Tone presets (Home etc.) ==============
export type ToneStyle = {
  background: string;
  iconBg: string;
  iconColor: string;
  titleColor: string;
  subColor: string;
  ring: string;
  ecgColor: string;
};

export const toneStyles: Record<"deep" | "danger", ToneStyle> = {
  deep: {
    background: GRADIENT_DEEP_BLUE,
    iconBg: ICON_PILL,
    iconColor: "text-white",
    titleColor: "text-white",
    subColor: "text-white/85",
    ring: CARD_RING,
    ecgColor: "text-white",
  },
  danger: {
    background: GRADIENT_DANGER,
    iconBg: ICON_PILL_DANGER,
    iconColor: "text-white",
    titleColor: "text-white",
    subColor: "text-white/85",
    ring: CARD_RING,
    ecgColor: "text-white",
  },
};
