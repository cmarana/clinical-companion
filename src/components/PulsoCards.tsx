import React from 'react';
import { ChevronRight, ArrowUpRight, type LucideIcon } from 'lucide-react';

/**
 * Cards — componentes reutilizáveis pra todos os tipos de card do PULSO.
 *
 * 4 tipos definidos. NÃO crie um 5º sem motivo arquitetural forte.
 *   - HeroCard          → destaque grande (Modo Plantão)
 *   - ToolCard          → grid 2-col padrão (Bulário, Protocolos, etc.)
 *   - EmergencyChip     → pill horizontal (Acesso Rápido)
 *   - SpecialtyChip     → grid 4-col compacto (Especialidades)
 */

// ═══════════════════════════════════════════════════════════════════
// HERO CARD — destaque grande, full-width
// ═══════════════════════════════════════════════════════════════════

type HeroCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
  /** Decoração de EKG no canto inferior direito (default: true) */
  showEKG?: boolean;
};

export const HeroCard: React.FC<HeroCardProps> = ({
  eyebrow,
  title,
  description,
  cta,
  onClick,
  showEKG = true,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-5 text-left shadow-lg shadow-primary/20 transition-transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-ring"
    style={{
      minHeight: 156,
    }}
  >
    {showEKG && (
      <svg
        className="absolute bottom-0 right-0 opacity-20 pointer-events-none"
        width="240"
        height="60"
        viewBox="0 0 240 60"
        aria-hidden="true"
      >
        <path
          d="M0 30 L60 30 L72 10 L82 50 L92 5 L102 30 L240 30"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    )}

    <div className="relative z-10">
      {eyebrow && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-white/90">
            {eyebrow}
          </span>
        </div>
      )}

      <h3 className="font-display font-bold text-[24px] text-white leading-tight mb-2">
        {title}
      </h3>

      <p className="text-[13px] text-white/80 leading-snug mb-5 max-w-[280px]">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-foreground font-display font-semibold text-[13px] text-primary">
        {cta} <ArrowUpRight size={14} strokeWidth={2.5} />
      </span>
    </div>
  </button>
);

// ═══════════════════════════════════════════════════════════════════
// TOOL CARD — grid 2-col padrão
// ═══════════════════════════════════════════════════════════════════

type ToolCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
  /** Default: primary (azul). 'emergency' só pra cards de protocolo crítico. */
  semantic?: 'primary' | 'emergency';
};

export const ToolCard: React.FC<ToolCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  onClick,
  semantic = 'primary',
}) => {
  const colors =
    semantic === 'emergency'
      ? 'bg-destructive/10 text-destructive dark:bg-destructive/15 dark:text-destructive'
      : 'bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary';

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left p-4 rounded-2xl bg-card border border-border shadow-sm transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring flex flex-col h-[112px] justify-between"
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors}`}
      >
        <Icon size={18} strokeWidth={2.2} />
      </div>
      <div>
        <div className="font-display font-semibold text-[14.5px] leading-tight text-card-foreground line-clamp-2 break-words">
          {title}
        </div>
        <div className="text-[11.5px] mt-0.5 text-muted-foreground tabular-nums truncate">
          {subtitle}
        </div>
      </div>
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════
// EMERGENCY CHIP — pill horizontal pra Acesso Rápido
// ═══════════════════════════════════════════════════════════════════

type EmergencyChipProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

export const EmergencyChip: React.FC<EmergencyChipProps> = ({
  icon: Icon,
  label,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full whitespace-nowrap transition-transform active:scale-[0.96] bg-emergency-50 border border-emergency-100 dark:bg-emergency-500/10 dark:border-emergency-500/20 focus:outline-none focus:ring-2 focus:ring-emergency-300"
  >
    <Icon
      size={14}
      strokeWidth={2.3}
      className="text-emergency-500 dark:text-emergency-400"
    />
    <span className="text-[12.5px] font-semibold font-display text-emergency-500 dark:text-emergency-400 tracking-tight">
      {label}
    </span>
  </button>
);

// ═══════════════════════════════════════════════════════════════════
// SPECIALTY CHIP — grid 4-col compacto pra Especialidades
// ═══════════════════════════════════════════════════════════════════

type SpecialtyChipProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

export const SpecialtyChip: React.FC<SpecialtyChipProps> = ({
  icon: Icon,
  label,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 transition-transform active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-primary-300"
  >
    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary-50 text-primary-500 dark:bg-primary-500/15 dark:text-primary-400">
      <Icon size={16} strokeWidth={2.2} />
    </div>
    <span className="text-[10.5px] font-semibold font-display text-neutral-900 dark:text-neutral-50 tracking-tight">
      {label}
    </span>
  </button>
);

// ═══════════════════════════════════════════════════════════════════
// AI CARD — compacto pra Dra. Clara (sem grande outdoor)
// ═══════════════════════════════════════════════════════════════════

type AICardProps = {
  title: string;
  subtitle: string;
  onClick: () => void;
};

export const AICard: React.FC<AICardProps> = ({ title, subtitle, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/15 text-left transition-transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary-300"
  >
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-500 text-white flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <span className="font-display font-semibold text-[14.5px] text-neutral-900 dark:text-neutral-50">
          {title}
        </span>
        <span className="text-[9px] uppercase tracking-[0.12em] px-1.5 py-px rounded font-bold tabular-nums bg-success-100 text-success-600 dark:bg-success-500/20 dark:text-success-400">
          IA
        </span>
      </div>
      <div className="text-[12px] mt-0.5 truncate text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </div>
    </div>
    <ArrowUpRight
      size={16}
      strokeWidth={2.2}
      className="text-primary-500 flex-shrink-0"
    />
  </button>
);
