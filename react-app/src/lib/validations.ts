import type { DateErrors } from "./types";

export type ValidationMode = "age" | "countdown";

export function validateDate(
  day: number,
  month: number,
  year: number,
  today: Date = new Date(),
  mode: ValidationMode = "age"
): { ok: boolean; errors: DateErrors } {
  const errors: DateErrors = {};

  const tY = today.getFullYear();
  const tM = today.getMonth() + 1;
  const tD = today.getDate();

  // ----- checagens por campo -----
  if (!Number.isInteger(day) || day <= 0 || day > 31) {
    errors.day = "Informe um dia entre 1 e 31.";
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    errors.month = "Mês deve ser 1 a 12.";
  }
  if (!Number.isInteger(year) || year <= 0) {
    errors.year = "Ano deve ser maior que 0.";
  } else if (mode === "age" && year > tY) {
    errors.year = `Ano deve ser ≤ ${tY}.`;
  }

  if (!errors.day && !errors.month && !errors.year) {
    const dim = daysInMonth(year, month);
    if (dim === 0 || day > dim) {
      errors.day = "Dia inválido para este mês.";
    } else {
      const isFuture =
        year > tY ||
        (year === tY && (month > tM || (month === tM && day > tD)));
      const isToday = year === tY && month === tM && day === tD;

      if (mode === "age") {
        if (isFuture) errors.date = "A data não pode estar no futuro.";
      } else {
        // countdown
        // escolha de regra: estritamente futuro
        if (isToday) {
          errors.date = "A data do evento é hoje! (Você provavelmente está atrasado).";
        } else if (!isFuture) {
          errors.date = "A data do evento precisa ser futura.";
        }
        
      }
    }
  }

  return { ok: Object.keys(errors).length === 0, errors };
}

export function isLeapYear(year: number): boolean {
  if (!Number.isInteger(year) || year <= 0) return false;

  // múltiplo de 4 via laço
  let multipleOf4 = false;
  for (let y = 0; y <= year; y += 4) {
    if (y === year) {
      multipleOf4 = true;
      break;
    }
  }
  if (!multipleOf4) return false;

  // exceções dos séculos
  if (year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}

export function daysInMonth(year: number, month: number): number {
  if (!Number.isInteger(month) || month < 1 || month > 12) return 0;

  if (month === 2) return isLeapYear(year) ? 29 : 28;
  if ([4, 6, 9, 11].includes(month)) return 30;
  return 31;
}
