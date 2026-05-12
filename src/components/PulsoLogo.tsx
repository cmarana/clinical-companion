import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";

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
};

/**
 * Logo PULSO padronizada — sempre transparente.
 * Branca em fundo escuro, azul escura em fundo claro.
 * Substitui qualquer uso direto de pulso-logo*.png em avatares,
 * cabeçalhos, botões e cards.
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
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    loading: priority ? ("eager" as const) : ("lazy" as const),
    className: "block w-full h-full object-contain bg-transparent",
  };

  if (forceVariant === "dark") {
    return (
      <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
        <img src={pulsoLogoDark} {...common} />
      </span>
    );
  }
  if (forceVariant === "light") {
    return (
      <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
        <img src={pulsoLogoLight} {...common} />
      </span>
    );
  }

  // Auto: troca por tema usando classe `dark` no <html>
  return (
    <span className={`inline-flex shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img src={pulsoLogoLight} {...common} className={`${common.className} dark:hidden`} />
      <img src={pulsoLogoDark} {...common} className={`${common.className} hidden dark:block`} />
    </span>
  );
}

export default PulsoLogo;
