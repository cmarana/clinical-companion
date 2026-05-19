import React from 'react';
import {
  BookOpen,
  Pill,
  Brain,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

/**
 * ContinueWhereYouLeft — "Continue de onde parou".
 *
 * Esse é um dos componentes mais fortes da Home. Médico chega no app de
 * plantão e quer voltar pra onde estava. Trata isso como dashboard, não
 * lista qualquer.
 *
 * Cada item tem:
 *   - Categoria (eyebrow uppercase)
 *   - Título do item
 *   - Timestamp relativo
 *   - CTA implícito (chevron)
 *
 * Itens com ação primária (ex: Flashcards "Revisar") podem ter botão direito.
 */

type ContinueItem = {
  id: string;
  category: string; // 'ÚLTIMO PROTOCOLO', 'ÚLTIMO MEDICAMENTO', etc.
  title: string;
  timestamp: string; // 'há 1h'
  iconKind: 'protocol' | 'medication' | 'flashcard' | 'study';
  action?: {
    label: string;
    onClick: () => void;
  };
  onClick: () => void;
};

const ICON_MAP: Record<ContinueItem['iconKind'], LucideIcon> = {
  protocol: BookOpen,
  medication: Pill,
  flashcard: Brain,
  study: Brain,
};

// Mapeamento semântico de cor:
// - Protocolo → primary (referência clínica)
// - Medicação → primary (referência clínica)
// - Flashcard → primary (ferramenta de estudo)
// - Study    → primary
// Padronizado, sem rainbow.

type Props = {
  items: ContinueItem[];
  emptyMessage?: string;
};

export const ContinueWhereYouLeft: React.FC<Props> = ({
  items,
  emptyMessage = 'Você ainda não acessou nada hoje.',
}) => {
  if (items.length === 0) {
    return (
      <div className="mx-5 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-700 px-4 py-6 text-center">
        <p className="text-[12.5px] text-neutral-400 dark:text-neutral-500">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2 px-5">
      {items.map((item) => (
        <ContinueRow key={item.id} item={item} />
      ))}
    </div>
  );
};

const ContinueRow: React.FC<{ item: ContinueItem }> = ({ item }) => {
  const Icon = ICON_MAP[item.iconKind];

  return (
    <button
      type="button"
      onClick={item.onClick}
      className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-left transition-transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary-300"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-50 dark:bg-primary-500/15 text-primary-500 dark:text-primary-400 flex-shrink-0">
        <Icon size={17} strokeWidth={2.2} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-neutral-400 dark:text-neutral-500 mb-0.5">
          {item.category}
        </div>
        <div className="font-display font-semibold text-[14px] leading-tight text-neutral-900 dark:text-neutral-50 truncate">
          {item.title}
        </div>
        <div className="text-[11px] mt-0.5 text-neutral-400 dark:text-neutral-500 tabular-nums">
          {item.timestamp}
        </div>
      </div>

      {item.action ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            item.action!.onClick();
          }}
          className="px-3 py-1.5 rounded-full bg-primary-500 text-white text-[12px] font-semibold font-display flex-shrink-0 transition-transform active:scale-95"
        >
          {item.action.label}
        </button>
      ) : (
        <ChevronRight
          size={16}
          className="text-neutral-400 dark:text-neutral-500 flex-shrink-0"
          strokeWidth={2.2}
        />
      )}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════
// EXEMPLO DE USO
// ═══════════════════════════════════════════════════════════════════

/*
import { ContinueWhereYouLeft } from '@/components/ContinueWhereYouLeft';
import { SectionHeader } from '@/components/SectionHeader';

function HomeSection() {
  const items = [
    {
      id: '1',
      category: 'ÚLTIMO PROTOCOLO',
      title: 'Sepse e Choque Séptico',
      timestamp: 'há 1h',
      iconKind: 'protocol' as const,
      onClick: () => navigate('/protocolo/sepse'),
    },
    {
      id: '2',
      category: 'ÚLTIMO MEDICAMENTO',
      title: 'AAS (Ácido Acetilsalicílico)',
      timestamp: 'há 1h',
      iconKind: 'medication' as const,
      onClick: () => navigate('/medicamento/aas'),
    },
    {
      id: '3',
      category: 'FLASHCARDS PENDENTES',
      title: '536 cards aguardando revisão',
      timestamp: 'Revisão espaçada (SM-2)',
      iconKind: 'flashcard' as const,
      action: { label: 'Revisar', onClick: () => navigate('/flashcards/review') },
      onClick: () => navigate('/flashcards'),
    },
  ];

  return (
    <section>
      <SectionHeader
        title="Continue de onde parou"
        description="Retome onde você estava antes de pausar o app"
      />
      <ContinueWhereYouLeft items={items} />
    </section>
  );
}
*/
