/**
 * PULSO — Design System Tokens
 * ──────────────────────────────────────────────────────────────────
 * Sistema semântico de cores e estilos. Single source of truth.
 *
 * REGRA: nenhum componente do PULSO usa cor fora desses 4 tokens
 * (emergency, primary, success, neutral). Qualquer cor adicional
 * é um bug de padronização.
 *
 * Como usar:
 *   1. Adiciona este arquivo em src/styles/tokens.ts
 *   2. Importa no tailwind.config.ts (ver bloco no final)
 *   3. Usa via classes Tailwind (bg-emergency-500) ou imports diretos
 */

// ═══════════════════════════════════════════════════════════════════
// SEMANTIC COLOR TOKENS
// ═══════════════════════════════════════════════════════════════════

export const semanticColors = {
  /**
   * EMERGÊNCIA — vermelho
   * Uso: protocolos críticos, alertas, badge "Plantão ativo",
   * chips de Emergência em 1 toque, ações que demandam atenção imediata.
   * NUNCA usar como cor decorativa.
   */
  emergency: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171', // dark mode
    500: '#DC2626', // light mode default
    600: '#B91C1C',
    700: '#991B1B',
    tint: 'rgba(220, 38, 38, 0.07)',
    tintDark: 'rgba(248, 113, 113, 0.10)',
  },

  /**
   * PRIMARY — PULSO Blue
   * Uso: navegação, ações primárias, ícones de referência/info,
   * Modo Plantão hero, Bulário, Protocolos, Calculadoras.
   * Cor padrão para qualquer ícone que não tenha semântica específica.
   */
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#4A96F2', // dark mode
    500: '#0A6DD9', // PULSO Blue oficial
    600: '#0858B0',
    700: '#064987',
    tint: 'rgba(10, 109, 217, 0.07)',
    tintDark: 'rgba(74, 150, 242, 0.10)',
  },

  /**
   * SUCCESS — verde
   * Uso: confirmação, badge "IA", indicador de plantão ativo (pulsando),
   * check de protocolo cumprido, valores normais em referência laboratorial.
   */
  success: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399', // dark mode
    500: '#059669', // light mode default
    600: '#047857',
    700: '#065F46',
    tint: 'rgba(5, 150, 105, 0.08)',
    tintDark: 'rgba(52, 211, 153, 0.10)',
  },

  /**
   * NEUTRAL — cinzas
   * Uso: texto, divisores, ícones secundários, backgrounds, qualquer
   * elemento sem carga semântica. A maior parte da interface deve ser neutra.
   */
  neutral: {
    0: '#FFFFFF',
    50: '#FAFBFC',
    100: '#F4F5F8',
    200: '#E2E5EB',
    300: '#CBD0D9',
    400: '#8E96A3',
    500: '#5C6370',
    600: '#3A3F4A',
    700: '#252932',
    800: '#15181D',
    900: '#0A0B0D',
    1000: '#000000', // OLED true black
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// SEMANTIC CONTEXT MAPPING
// ═══════════════════════════════════════════════════════════════════

/**
 * Mapeia contextos do app aos tokens semânticos.
 * Sempre que for renderizar algo, pega a cor daqui — não inventa.
 */
export const contextColors = {
  // Emergência — sempre vermelho
  emergencyChip: 'emergency',
  emergencyCard: 'emergency',
  emergencyBadge: 'emergency',
  dutyActiveIndicator: 'emergency',
  criticalAlert: 'emergency',

  // Referência clínica — sempre azul
  protocols: 'primary',
  drugs: 'primary',
  calculators: 'primary',
  prescriptions: 'primary',
  diluitions: 'primary',
  modoPlantao: 'primary',
  specialty: 'primary',
  tools: 'primary',

  // IA e confirmação — sempre verde
  aiAssistant: 'success',
  aiBadge: 'success',
  successConfirmation: 'success',
  completedChecklist: 'success',

  // Neutro — default pra tudo o mais
  default: 'neutral',
  secondaryText: 'neutral',
  divider: 'neutral',
} as const;

// ═══════════════════════════════════════════════════════════════════
// SPACING, RADIUS, TYPOGRAPHY
// ═══════════════════════════════════════════════════════════════════

export const radius = {
  none: '0',
  sm: '6px',
  md: '12px',
  lg: '16px',   // padrão pra maioria dos cards
  xl: '20px',   // hero cards, containers grandes
  '2xl': '24px',
  full: '9999px', // chips, pills, avatars
} as const;

export const spacing = {
  // Padding interno de cards
  cardPadding: {
    sm: '12px',
    md: '14px',  // padrão
    lg: '18px',  // hero
  },
  // Gaps entre cards no grid
  gridGap: '10px',
  // Espaço entre seções
  sectionGap: '24px',
  // Padding lateral da página
  pagePadding: '20px',
} as const;

export const typography = {
  display: {
    family: "'Sora', system-ui, sans-serif",
    weights: { medium: 500, semibold: 600, bold: 700, extrabold: 800 },
    tracking: '-0.015em',
  },
  body: {
    family: "'Inter', system-ui, sans-serif",
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    tracking: '0',
  },
  // Escala de tamanhos (uso global, não local)
  scale: {
    display:  '24px', // page titles
    h1:       '20px',
    h2:       '18px', // section titles
    h3:       '15px', // card titles
    body:     '14px',
    sm:       '12.5px',
    xs:       '11px',
    eyebrow:  '10.5px',  // uppercase tracked labels
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// SHADOWS (sutis, clínicas — sem dramaticidade)
// ═══════════════════════════════════════════════════════════════════

export const shadows = {
  none: 'none',
  // Card sutil em fundo cinza
  card: '0 1px 2px rgba(10,11,13,0.03), 0 0 0 1px rgba(10,11,13,0.05)',
  // Card destacado/hover
  cardElevated: '0 4px 12px rgba(10,11,13,0.06), 0 0 0 1px rgba(10,11,13,0.06)',
  // Hero card com cor
  hero: '0 8px 24px rgba(10,109,217,0.18)',
  // Dark mode
  cardDark: '0 0 0 1px rgba(255,255,255,0.04)',
  heroDark: '0 8px 24px rgba(74,150,242,0.20)',
} as const;

// ═══════════════════════════════════════════════════════════════════
// HELPER: pega token a partir de contexto
// ═══════════════════════════════════════════════════════════════════

export type SemanticToken = keyof typeof semanticColors;
export type ContextKey = keyof typeof contextColors;

export function getContextColor(context: ContextKey): SemanticToken {
  return contextColors[context];
}

export function getColor(token: SemanticToken, shade: number = 500): string {
  const palette = semanticColors[token] as Record<number | string, string>;
  return palette[shade] ?? palette[500] ?? '#000';
}

// Exemplo de uso:
//   const cardColor = getColor(getContextColor('protocols'), 500);
//   // → '#0A6DD9'

// ═══════════════════════════════════════════════════════════════════
// TAILWIND CONFIG (copia pro seu tailwind.config.ts)
// ═══════════════════════════════════════════════════════════════════

/*
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { semanticColors, radius, typography } from './src/styles/tokens';

export default {
  content: ['./index.html', './src/**\/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emergency: semanticColors.emergency,
        primary: semanticColors.primary,
        success: semanticColors.success,
        neutral: semanticColors.neutral,
      },
      borderRadius: radius,
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: typography.display.tracking,
      },
    },
  },
  plugins: [],
} satisfies Config;
*/

// ═══════════════════════════════════════════════════════════════════
// REGRAS DE USO (cheat sheet)
// ═══════════════════════════════════════════════════════════════════

/**
 * 1. ÍCONES DE CARD
 *    - Container: w-10 h-10 rounded-xl bg-{token}-100/tint
 *    - Ícone: color={token}-500, size 17-18, strokeWidth 2.2
 *
 *    Exemplo:
 *    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
 *      <Icon size={17} className="text-primary-500" strokeWidth={2.2} />
 *    </div>
 *
 * 2. SECTION HEADERS
 *    - Title: text-[18px] font-display font-bold text-neutral-900
 *    - Description: text-[12.5px] text-neutral-500
 *    - Action: text-[12px] font-semibold text-primary-500
 *    - SEM ícone decorativo (ver componente SectionHeader)
 *
 * 3. CARDS
 *    - Background: bg-white dark:bg-neutral-800
 *    - Border radius: rounded-2xl (lg, 16px)
 *    - Padding: p-4 (16px)
 *    - Shadow: shadow-card (definida em CSS global)
 *
 * 4. CHIPS / PILLS
 *    - Border radius: rounded-full
 *    - Padding: px-3.5 py-2
 *    - Background: bg-{token}-tint
 *    - Text: text-{token}-500 font-semibold text-[12.5px]
 *
 * 5. ESTADOS
 *    - Active (tab): text-primary-500 + dot indicator below
 *    - Pressed: active:scale-[0.98] transition-transform
 *    - Disabled: opacity-40 cursor-not-allowed
 *    - SEM bordas coloridas como "highlight"
 *
 * 6. PROIBIDO
 *    - ❌ Roxo, laranja, mint, peach, rosa em ícones
 *    - ❌ Gradientes decorativos (exceto Dra. Clara hero, azul-azul)
 *    - ❌ Mais de UMA cor de ícone numa mesma seção
 *    - ❌ Ícone diferente do tamanho 17-18 em cards padrão
 */
