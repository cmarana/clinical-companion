import { memo, type ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type IconType = ComponentType<LucideProps>;

/**
 * Cards memoizados da Home.
 *
 * Por que memo aqui faz sentido:
 *   - Os arrays de módulos são estáticos (definidos fora do componente Home).
 *   - A callback `onNavigate` é estabilizada com useCallback no Home.
 *   - Assim, quando o pai re-renderiza por mudança de tema, unreadCount,
 *     avatar, etc., os ~40 cards não são re-renderizados (props rasos
 *     iguais → memo bloqueia).
 *
 * Por que NÃO memoizar diretamente o JSX inline na Home:
 *   - Cada render do Home cria novas closures `() => navigate(...)`,
 *     o que invalida memo. Por isso passamos primitivos (path, label)
 *     e a callback estável.
 */

type Variant = "ai" | "emergency" | "cyan" | "default";

const cardStyles: Record<Variant, string> = {
  ai: "col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/40 ring-1 ring-white/10",
  emergency: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-destructive/5 dark:shadow-destructive/10 ring-1 ring-destructive/15 dark:ring-destructive/25",
  cyan: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-cyan-500/5 dark:shadow-cyan-500/10 ring-1 ring-cyan-500/15 dark:ring-cyan-500/25",
  default: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-primary/5 dark:shadow-primary/10 ring-1 ring-border/50 dark:ring-border/30",
};

const iconStyles: Record<Variant, string> = {
  ai: "bg-white/20 text-white backdrop-blur-sm",
  emergency: "bg-gradient-to-br from-destructive/10 to-destructive/20 text-destructive dark:from-destructive/15 dark:to-destructive/30",
  cyan: "bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 text-cyan-600 dark:from-cyan-500/15 dark:to-cyan-500/30 dark:text-cyan-400",
  default: "bg-gradient-to-br from-primary/10 to-primary/20 text-primary dark:from-primary/15 dark:to-primary/30",
};

interface PrimaryCardProps {
  path: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  variant: Variant;
  onNavigate: (path: string, label: string) => void;
}

function PrimaryCardImpl({ path, label, sub, icon: Icon, variant, onNavigate }: PrimaryCardProps) {
  return (
    <div className={variant === "ai" ? "col-span-2" : ""}>
      <button
        onClick={() => onNavigate(path, label)}
        data-tour={path === "/clinical-ai" ? "ai" : path === "/emergency" ? "emergency" : undefined}
        className={`group w-full flex items-center gap-3 px-4 py-4 lg:py-5 rounded-[20px] border-0 transition-all duration-200 active:scale-[0.97] hover:shadow-xl hover:-translate-y-0.5 text-left ${cardStyles[variant]}`}
      >
        <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-2xl shrink-0 ${iconStyles[variant]}`}>
          <Icon size={20} className="lg:hidden" />
          <Icon size={24} className="hidden lg:block" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-heading font-semibold text-[13px] lg:text-sm leading-tight truncate">{label}</span>
          <span className={`text-[11px] lg:text-xs leading-tight mt-0.5 truncate ${variant === "ai" ? "text-white/70" : "text-muted-foreground"}`}>
            {sub}
          </span>
        </div>
      </button>
    </div>
  );
}

export const PrimaryCard = memo(PrimaryCardImpl);

interface SecondaryCardProps {
  path: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  iconBg: string;
  ringColor: string;
  onNavigate: (path: string, label: string) => void;
}

function SecondaryCardImpl({ path, label, sub, icon: Icon, iconBg, ringColor, onNavigate }: SecondaryCardProps) {
  return (
    <button
      onClick={() => onNavigate(path, label)}
      className={`group w-full flex items-center gap-2.5 px-3.5 py-3.5 rounded-2xl bg-card text-card-foreground ring-1 ${ringColor} hover:ring-2 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 text-left border-0`}
    >
      <div className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 ${iconBg}`}>
        <Icon size={18} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-heading font-semibold text-[12px] leading-tight truncate">{label}</span>
        <span className="text-[10px] leading-tight mt-0.5 truncate text-muted-foreground">{sub}</span>
      </div>
    </button>
  );
}

export const SecondaryCard = memo(SecondaryCardImpl);

interface EmergencyShortcutProps {
  path: string;
  label: string;
  onNavigate: (path: string, label: string) => void;
}

function EmergencyShortcutImpl({ path, label, onNavigate }: EmergencyShortcutProps) {
  return (
    <button
      onClick={() => onNavigate(path, label)}
      className="px-4 py-2 rounded-xl bg-destructive/8 dark:bg-destructive/15 hover:bg-destructive/15 dark:hover:bg-destructive/25 active:scale-[0.96] transition-all duration-200 font-heading font-semibold text-xs text-destructive ring-1 ring-destructive/10 hover:ring-destructive/25"
    >
      {label}
    </button>
  );
}

export const EmergencyShortcut = memo(EmergencyShortcutImpl);
