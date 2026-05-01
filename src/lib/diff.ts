/**
 * Diff de linhas baseado em LCS (Longest Common Subsequence).
 * Sem dependências externas. Adequado para textos pequenos a médios (<5k linhas).
 */

export type DiffOp = "equal" | "add" | "remove";

export interface DiffLine {
  op: DiffOp;
  /** Conteúdo da linha (sem \n). */
  text: string;
  /** Número da linha original (1-indexed) ou null se for adição. */
  oldLine: number | null;
  /** Número da linha nova (1-indexed) ou null se for remoção. */
  newLine: number | null;
}

/** Computa o diff linha-a-linha entre dois textos. */
export function diffLines(oldText: string, newText: string): DiffLine[] {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const m = oldLines.length;
  const n = newLines.length;

  // Matriz LCS
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (oldLines[i] === newLines[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Backtrack para gerar as operações
  const result: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (oldLines[i] === newLines[j]) {
      result.push({ op: "equal", text: oldLines[i], oldLine: i + 1, newLine: j + 1 });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ op: "remove", text: oldLines[i], oldLine: i + 1, newLine: null });
      i++;
    } else {
      result.push({ op: "add", text: newLines[j], oldLine: null, newLine: j + 1 });
      j++;
    }
  }
  while (i < m) {
    result.push({ op: "remove", text: oldLines[i], oldLine: i + 1, newLine: null });
    i++;
  }
  while (j < n) {
    result.push({ op: "add", text: newLines[j], oldLine: null, newLine: j + 1 });
    j++;
  }

  return result;
}

/** Estatísticas do diff. */
export function diffStats(lines: DiffLine[]): { added: number; removed: number; unchanged: number } {
  let added = 0;
  let removed = 0;
  let unchanged = 0;
  for (const l of lines) {
    if (l.op === "add") added++;
    else if (l.op === "remove") removed++;
    else unchanged++;
  }
  return { added, removed, unchanged };
}
