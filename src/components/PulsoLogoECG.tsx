/**
 * Logo PULSO animada — SVG puro com traçado de ECG real.
 * A linha do eletrocardiograma é desenhada continuamente sobre a letra "P",
 * cruzando uma onda QRS e voltando à linha de base.
 *
 * Usa `currentColor` → herda a cor do texto pai (text-white, text-primary, etc).
 */

type Props = {
  size?: number;
  className?: string;
  /** Velocidade do ciclo de batida em segundos. Default 1.8s. */
  speed?: number;
  /** Espessura da linha. Default 5. */
  strokeWidth?: number;
  alt?: string;
};

export function PulsoLogoECG({
  size = 28,
  className = "",
  speed = 1.8,
  strokeWidth = 5,
  alt = "PULSO",
}: Props) {
  // viewBox 64x64 — desenho compacto
  // Letra P: haste vertical + curva superior
  // ECG: linha horizontal com pico QRS no centro
  const ecgPath = "M2 38 L14 38 L18 38 L21 30 L24 46 L27 16 L30 50 L33 38 L62 38";

  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-flex shrink-0 ${className}`}
      style={{ width: size, height: size, color: "currentColor" }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Letra "P" — haste */}
        <path d="M22 10 L22 56" />
        {/* Letra "P" — curva superior (semicírculo) */}
        <path d="M22 10 L40 10 A12 12 0 0 1 40 34 L22 34" />

        {/* Linha de ECG animada (sobrepõe a base do P, atravessa horizontalmente) */}
        <path
          d={ecgPath}
          strokeWidth={strokeWidth - 0.5}
          style={{
            strokeDasharray: 220,
            strokeDashoffset: 220,
            animation: `pulso-ecg-draw ${speed}s ease-in-out infinite`,
          }}
        />
      </svg>
    </span>
  );
}

export default PulsoLogoECG;
