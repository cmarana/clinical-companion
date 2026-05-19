import pulsoLogo from "@/assets/pulso-logo.png";

type Props = {
  /** Tamanho em pixels (largura = altura). Default 24. */
  size?: number;
  /** Classe extra para o wrapper. */
  className?: string;
  /**
   * Força uma variante independentemente do tema.
   * - "dark"  → logo BRANCA (para fundos escuros)
   * - "light" → logo AZUL ESCURA (para fundos claros)
   * Se omitido, segue o tema do <html> via Tailwind `dark:`.
   */
  forceVariant?: "dark" | "light";
  /** Texto alternativo. Default "PULSO". */
  alt?: string;
  /** Prioridade de carregamento. */
  priority?: boolean;
  /** Aplica animação contínua de batida cardíaca. */
  animate?: boolean;
};

/**
 * Logo PULSO padronizada — sempre transparente.
 * Imagem única em azul escuro; em fundo escuro aplica filtro para virar branca.
 */
export function PulsoLogo({
  size = 24,
  className = "",
  forceVariant,
  alt = "PULSO",
  priority = false,
}: Props) {
  const common = {
    width: size,
    height: size,
    alt,
    src: pulsoLogo,
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    loading: priority ? ("eager" as const) : ("lazy" as const),
  };

  // Filtro para converter o logo azul-escuro em branco puro
  const whiteFilter = { filter: "brightness(0) invert(1)" };

  if (forceVariant === "dark") {
    return (
      <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
        <img
          {...common}
          className="block w-full h-full object-contain bg-transparent"
          style={whiteFilter}
        />
      </span>
    );
  }
  if (forceVariant === "light") {
    return (
      <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
        <img {...common} className="block w-full h-full object-contain bg-transparent" />
      </span>
    );
  }

  // Auto: troca por tema usando classe `dark` no <html>
  return (
    <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img
        {...common}
        className="block w-full h-full object-contain bg-transparent dark:hidden"
      />
      <img
        {...common}
        className="hidden dark:block w-full h-full object-contain bg-transparent"
        style={whiteFilter}
      />
    </span>
  );
}

export default PulsoLogo;
