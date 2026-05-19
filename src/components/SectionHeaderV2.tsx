import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * SectionHeader — cabeçalho único e padronizado pra toda seção do PULSO.
 *
 * Substitui:
 *   - Headers com ícone gigante colorido (Ferramentas, Especialidades)
 *   - Headers sem descrição
 *   - Headers com pattern misto
 *
 * Uso:
 *   <SectionHeader
 *     title="Emergência em 1 toque"
 *     description="Protocolos críticos para acesso imediato"
 *     action={{ label: 'Ver todos', onClick: () => navigate('/emergencia') }}
 *   />
 */

type Props = {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  count?: number;
  /** Reservado pra casos especiais — não use sem motivo claro */
  bullet?: 'emergency' | 'success';
  className?: string;
};

export const SectionHeader: React.FC<Props> = ({
  title,
  description,
  action,
  count,
  bullet,
  className = '',
}) => {
  return (
    <div className={`px-5 mb-3 ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-baseline gap-2">
          {bullet && (
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 self-center ${
                bullet === 'emergency' ? 'bg-destructive' : 'bg-success'
              }`}
              aria-hidden="true"
            />
          )}
          <h2 className="font-display font-bold text-[18px] leading-tight text-foreground">
            {title}
          </h2>
          {count !== undefined && (
            <span className="text-[12px] text-muted-foreground tabular-nums font-medium">
              · {count}
            </span>
          )}
        </div>

        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className="flex items-center gap-0.5 text-[12px] font-semibold text-primary hover:text-primary/80 transition-colors -mr-1 px-1 py-1"
          >
            {action.label}
            <ChevronRight size={13} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {description && (
        <p className="text-[12.5px] text-muted-foreground leading-snug">
          {description}
        </p>
      )}
    </div>
  );
};
