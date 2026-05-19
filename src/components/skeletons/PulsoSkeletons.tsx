import React from 'react';

/**
 * Skeletons — placeholders pros estados de loading do PULSO.
 *
 * Substitui o padrão atual de spinner sozinho em tela branca, que deixa o
 * usuário em limbo durante transições.
 *
 * Regra de uso:
 *   - Toda query/Suspense que demore > 200ms deve mostrar skeleton
 *   - O skeleton TEM que ter o mesmo shape do conteúdo que vai chegar
 *   - Bottom nav nunca some — só o conteúdo principal vira skeleton
 */

// ═══════════════════════════════════════════════════════════════════
// PRIMITIVES
// ═══════════════════════════════════════════════════════════════════

const Pulse: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`animate-pulse bg-neutral-200 dark:bg-neutral-700 ${className}`}
    aria-hidden="true"
  />
);

// ═══════════════════════════════════════════════════════════════════
// SKELETONS DE COMPONENTES
// ═══════════════════════════════════════════════════════════════════

/**
 * Skeleton de um card genérico (ex: ToolCard).
 * Use em grid de cards.
 */
export const CardSkeleton: React.FC<{ height?: number }> = ({
  height = 112,
}) => (
  <div
    className="rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 p-4 flex flex-col justify-between"
    style={{ height }}
    aria-busy="true"
  >
    <Pulse className="w-10 h-10 rounded-xl" />
    <div className="space-y-1.5">
      <Pulse className="h-3.5 rounded w-3/4" />
      <Pulse className="h-2.5 rounded w-1/2" />
    </div>
  </div>
);

/**
 * Skeleton de item de lista horizontal (ex: ContinueWhereYouLeft).
 */
export const ListItemSkeleton: React.FC = () => (
  <div
    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700"
    aria-busy="true"
  >
    <Pulse className="w-10 h-10 rounded-xl flex-shrink-0" />
    <div className="flex-1 space-y-2">
      <Pulse className="h-3 rounded w-1/3" />
      <Pulse className="h-4 rounded w-3/4" />
    </div>
  </div>
);

/**
 * Skeleton de chip / pill (ex: Emergência em 1 toque).
 */
export const ChipSkeleton: React.FC = () => (
  <Pulse className="h-9 w-20 rounded-full" />
);

/**
 * Skeleton de hero card (ex: Modo Plantão).
 */
export const HeroSkeleton: React.FC = () => (
  <div
    className="rounded-3xl p-5 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700"
    style={{ minHeight: 156 }}
    aria-busy="true"
  >
    <Pulse className="h-3 w-24 rounded mb-3" />
    <Pulse className="h-6 w-40 rounded mb-2" />
    <Pulse className="h-3 w-3/4 rounded mb-1" />
    <Pulse className="h-3 w-2/3 rounded mb-5" />
    <Pulse className="h-10 w-32 rounded-full" />
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SKELETONS DE LAYOUT
// ═══════════════════════════════════════════════════════════════════

/**
 * Grid 2x2 ou 2xN de cards. Use em listas tipo Essenciais do Plantão.
 */
export const GridSkeleton: React.FC<{
  count?: number;
  cardHeight?: number;
}> = ({ count = 4, cardHeight = 112 }) => (
  <div className="grid grid-cols-2 gap-2.5 px-5">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} height={cardHeight} />
    ))}
  </div>
);

/**
 * Lista vertical de items (ex: lista de protocolos).
 */
export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="space-y-2 px-5">
    {Array.from({ length: count }).map((_, i) => (
      <ListItemSkeleton key={i} />
    ))}
  </div>
);

/**
 * Linha horizontal de chips (ex: Acesso Rápido).
 */
export const ChipRowSkeleton: React.FC<{ count?: number }> = ({
  count = 5,
}) => (
  <div className="flex gap-2 px-5 overflow-hidden">
    {Array.from({ length: count }).map((_, i) => (
      <ChipSkeleton key={i} />
    ))}
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// SKELETON DE TELA INTEIRA (HOME)
// ═══════════════════════════════════════════════════════════════════

/**
 * Skeleton da Home inteira. Use durante o boot inicial.
 */
export const HomeSkeleton: React.FC = () => (
  <div className="space-y-7 py-5" aria-busy="true">
    {/* Greeting */}
    <div className="px-5 space-y-2">
      <Pulse className="h-7 w-40 rounded" />
      <Pulse className="h-3 w-60 rounded" />
    </div>

    {/* Search */}
    <div className="px-5">
      <Pulse className="h-12 rounded-2xl" />
    </div>

    {/* Hero */}
    <div className="px-5">
      <HeroSkeleton />
    </div>

    {/* Chips section */}
    <div>
      <div className="px-5 mb-3 space-y-1">
        <Pulse className="h-5 w-44 rounded" />
        <Pulse className="h-3 w-60 rounded" />
      </div>
      <ChipRowSkeleton />
    </div>

    {/* Grid section */}
    <div>
      <div className="px-5 mb-3 space-y-1">
        <Pulse className="h-5 w-44 rounded" />
        <Pulse className="h-3 w-52 rounded" />
      </div>
      <GridSkeleton count={4} />
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════
// EXEMPLO DE USO
// ═══════════════════════════════════════════════════════════════════

/*
import { GridSkeleton } from '@/components/Skeletons';

function ProtocolList() {
  const { data, isLoading } = useQuery({ ... });

  if (isLoading) return <GridSkeleton count={6} />;

  return <div className="grid grid-cols-2 gap-2.5">{data.map(...)}</div>;
}
*/
