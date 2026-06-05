/**
 * Contagens reais dos datasets — fonte única para exibição em Home,
 * Landing, Flashcards e Quiz.
 *
 * Por que NÃO importar os arrays direto na Home:
 *   • flashcardsData + extras + quizQuestions somam ~2.000 linhas.
 *   • Importar na Home (rota inicial) inflaria o chunk crítico e
 *     atrasaria o LCP em 3G/plantão sem necessidade.
 *
 * Como manter sincronizado:
 *   • Há um teste anti-regressão em src/test/dataset-counts.test.ts
 *     que recomputa as contagens a partir dos arquivos-fonte e
 *     falha o build se divergir desta tabela.
 *   • Quando adicionar/remover cards/questões, atualize aqui e o
 *     teste validará automaticamente.
 */
export const DATASET_COUNTS = {
  /** Flashcards consolidados (Data + Extras + Lotes 4-17). */
  flashcards: 1040,
  /** Quiz clínico (quizQuestions + quizQuestionsExtra). */
  quizQuestions: 1027,
  /** Questões de residência por banca. */
  residencyQuestions: 501,
} as const;

/** Quiz total (clínico + residência) — usado em Home e Landing. */
export const QUIZ_TOTAL = DATASET_COUNTS.quizQuestions + DATASET_COUNTS.residencyQuestions;

/** Formata número PT-BR com separador de milhar. */
export const fmt = (n: number) => n.toLocaleString("pt-BR");
