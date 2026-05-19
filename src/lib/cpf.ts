// Utilitários de CPF: normalização, validação (DV) e máscara.
export function onlyDigitsCpf(value: string): string {
  return (value || "").replace(/\D/g, "").slice(0, 11);
}

export function maskCpf(value: string): string {
  const d = onlyDigitsCpf(value);
  const p1 = d.slice(0, 3);
  const p2 = d.slice(3, 6);
  const p3 = d.slice(6, 9);
  const p4 = d.slice(9, 11);
  let out = p1;
  if (p2) out += "." + p2;
  if (p3) out += "." + p3;
  if (p4) out += "-" + p4;
  return out;
}

export function isValidCpf(value: string): boolean {
  const cpf = onlyDigitsCpf(value);
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  const calc = (base: string, factor: number) => {
    let sum = 0;
    for (let i = 0; i < base.length; i++) sum += parseInt(base[i], 10) * (factor - i);
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };
  const d1 = calc(cpf.slice(0, 9), 10);
  if (d1 !== parseInt(cpf[9], 10)) return false;
  const d2 = calc(cpf.slice(0, 10), 11);
  return d2 === parseInt(cpf[10], 10);
}
