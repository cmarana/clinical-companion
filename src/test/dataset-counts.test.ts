/**
 * Anti-regressão: as constantes em src/data/datasetCounts.ts devem
 * sempre refletir o tamanho real dos arrays de flashcards e questões.
 *
 * Por que existe:
 *   • Home/Landing exibem essas contagens. Se um lote novo for
 *     adicionado e a constante não for atualizada, a UI mente.
 *   • Importar os arrays direto na Home incharia o chunk crítico,
 *     então mantemos as contagens em um módulo leve — este teste
 *     garante que elas continuam corretas.
 *
 * Como conta:
 *   Cada flashcard tem `front:` único. Cada questão tem `question:`.
 *   Mesma heurística usada pelo script de auditoria manual.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";
import { DATASET_COUNTS, QUIZ_TOTAL } from "@/data/datasetCounts";

function countMatches(file: string, key: string): number {
  const src = readFileSync(resolve(process.cwd(), file), "utf8");
  const re = new RegExp(`\\b${key}\\s*:`, "g");
  return (src.match(re) ?? []).length;
}

describe("Dataset counts · sincronizadas com os arquivos-fonte", () => {
  it("flashcards == soma de Data + Extras + Lotes 4-15", () => {
    const real =
      countMatches("src/data/flashcardsData.ts", "front") +
      countMatches("src/data/flashcardsExtra.ts", "front") +
      countMatches("src/data/flashcardsExtra2.ts", "front") +
      countMatches("src/data/flashcardsExtra3.ts", "front") +
      countMatches("src/data/flashcardsLote4.ts", "front") +
      countMatches("src/data/flashcardsLote5.ts", "front") +
      countMatches("src/data/flashcardsLote6.ts", "front") +
      countMatches("src/data/flashcardsLote7.ts", "front") +
      countMatches("src/data/flashcardsLote8.ts", "front") +
      countMatches("src/data/flashcardsLote9.ts", "front") +
      countMatches("src/data/flashcardsLote10.ts", "front") +
      countMatches("src/data/flashcardsLote11.ts", "front") +
      countMatches("src/data/flashcardsLote12.ts", "front") +
      countMatches("src/data/flashcardsLote13.ts", "front") +
      countMatches("src/data/flashcardsLote14.ts", "front") +
      countMatches("src/data/flashcardsLote15.ts", "front");
    expect(
      DATASET_COUNTS.flashcards,
      `Atualize DATASET_COUNTS.flashcards para ${real}`,
    ).toBe(real);
  });

  it("quizQuestions == soma de quizQuestions + quizQuestionsExtra", () => {
    const real =
      countMatches("src/data/quizQuestions.ts", "question") +
      countMatches("src/data/quizQuestionsExtra.ts", "question");
    expect(
      DATASET_COUNTS.quizQuestions,
      `Atualize DATASET_COUNTS.quizQuestions para ${real}`,
    ).toBe(real);
  });

  it("residencyQuestions == count em residencyQuestions.ts", () => {
    const real = countMatches("src/data/residencyQuestions.ts", "question");
    expect(
      DATASET_COUNTS.residencyQuestions,
      `Atualize DATASET_COUNTS.residencyQuestions para ${real}`,
    ).toBe(real);
  });

  it("QUIZ_TOTAL == quizQuestions + residencyQuestions", () => {
    expect(QUIZ_TOTAL).toBe(
      DATASET_COUNTS.quizQuestions + DATASET_COUNTS.residencyQuestions,
    );
  });
});

describe("Home e Landing usam as constantes (sem números mágicos)", () => {
  const home = readFileSync(resolve(process.cwd(), "src/pages/Home.tsx"), "utf8");
  const landing = readFileSync(resolve(process.cwd(), "src/pages/Landing.tsx"), "utf8");

  it("Home importa DATASET_COUNTS / QUIZ_TOTAL", () => {
    expect(home).toMatch(/from\s+["']@\/data\/datasetCounts["']/);
    expect(home).toMatch(/DATASET_COUNTS\.flashcards/);
    expect(home).toMatch(/QUIZ_TOTAL/);
  });

  it("Landing importa DATASET_COUNTS / QUIZ_TOTAL", () => {
    expect(landing).toMatch(/from\s+["']@\/data\/datasetCounts["']/);
    expect(landing).toMatch(/DATASET_COUNTS\.flashcards/);
    expect(landing).toMatch(/QUIZ_TOTAL/);
  });

  it("Home não usa mais hard-codes '500+ cards' ou '1.000+ questões'", () => {
    expect(home).not.toMatch(/500\+ cards/);
    expect(home).not.toMatch(/1\.000\+ questões comentadas/);
  });
});
