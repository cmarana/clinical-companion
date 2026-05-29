/**
 * Design tokens compartilhados — fonte única da verdade para os cards
 * da Home, Ferramentas, Emergência e demais páginas internas.
 *
 * SISTEMA PREMIUM v2
 * ──────────────────
 * Princípio: cor como exceção, não como decoração.
 * Fundo sólido escuro no hero. Sem gradientes com blur em cards comuns.
 * Cor semântica restrita a contextos críticos e barras laterais de categoria.
 */

// ============== Backgrounds sólidos (substituem os gradientes) ==============

/** Hero banner e TopBar — Azul PULSO vivo. */
export const GRADIENT_DEEP_BLUE = "hsl(211 91% 45%)";

/** Variante levemente mais escura para hero em modo escuro. */
export const GRADIENT_DEEP_BLUE_SOFT = "hsl(211 91% 40%)";

/** Variante com tonalidade levemente mais fria — para cards internos. */
export const GRADIENT_BRIGHT_BLUE = "hsl(211 91% 45%)";

/** Emergência — vermelho destructive, vivo. Sem gradiente. */
export const GRADIENT_DANGER = "hsl(0 75% 50%)";

// Aliases retrocompatíveis (mantidos para não quebrar imports existentes)
export const PULSO_BG = GRADIENT_DEEP_BLUE;
export const DANGER_BG = GRADIENT_DANGER;

// ============== Tokens visuais reutilizáveis ==============

/** Border-radius padrão de cards */
export const CARD_RADIUS = "rounded-2xl";

/** Sombra sutil — apenas para cards sobre superfície clara */
export const CARD_SHADOW = "shadow-sm";

/** Ring interno — mais sutil que antes */
export const CARD_RING = "ring-1 ring-white/10";

/** Ícone pill sobre fundo escuro — menos opacidade, sem blur */
export const ICON_PILL = "bg-white/12 ring-1 ring-white/20";

/** Ícone pill para zona de perigo */
export const ICON_PILL_DANGER = "bg-white/12 ring-1 ring-white/20";

// ============== Cores semânticas de categoria clínica ==============
// Usadas APENAS como barras laterais de 2–3px em cards de protocolo.
// Nunca como fundo de card completo ou cor de ícone principal.

export const COLOR_CRITICAL = "#C0392B";   // cardio / via aérea / RCP
export const COLOR_NEURO    = "#5B21B6";   // neurologia
export const COLOR_INFECTO  = "#065F46";   // infecto / sepse
export const COLOR_TRAUMA   = "#92400E";   // trauma / cirurgia
export const COLOR_PULMO    = "#0E4D8A";   // pneumo / VM
export const COLOR_META     = "#7C3D12";   // metabólico / endócrino
export const COLOR_OB       = "#831843";   // obstetrícia
export const COLOR_TOXICO   = "#3D1A5C";   // toxicologia / envenomação

// ============== Tone presets (Home, cards de modo) ==============

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
    background: "hsl(var(--card))",
    iconBg: "bg-primary/10 ring-1 ring-primary/20",
    iconColor: "text-primary",
    titleColor: "text-foreground",
    subColor: "text-muted-foreground",
    ring: "ring-1 ring-border",
    ecgColor: "text-primary",
  },
  danger: {
    background: "hsl(var(--card))",
    iconBg: "bg-destructive/10 ring-1 ring-destructive/20",
    iconColor: "text-destructive",
    titleColor: "text-foreground",
    subColor: "text-muted-foreground",
    ring: "ring-1 ring-destructive/30",
    ecgColor: "text-destructive",
  },
};
