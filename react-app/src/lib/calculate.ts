import { daysInMonth, isLeapYear } from "./validations";
import type { Age } from "./types";

function effectiveBirthDayForYear(birthDay: number, birthMonth: number, targetYear: number): number {
  if (birthMonth === 2 && birthDay === 29 && !isLeapYear(targetYear)) {
    return 28;
  }
  return birthDay;
}

export function calculateAge(
  birthDay: number,
  birthMonth: number,
  birthYear: number,
  today: Date = new Date()
): Age {
  const tY = today.getFullYear();
  const tM = today.getMonth() + 1; // 1..12
  const tD = today.getDate();

  const bDayThisYear = effectiveBirthDayForYear(birthDay, birthMonth, tY);

  // já fez aniversário neste ano?
  const birthdayHasHappened =
    tM > birthMonth || (tM === birthMonth && tD >= bDayThisYear);

  let years = tY - birthYear - (birthdayHasHappened ? 0 : 1);
  if (years < 0) years = 0; // guarda contra inconsistências (validação já evita)

  const lastBirthdayYear = birthdayHasHappened ? tY : tY - 1;
  const lastBirthdayMonth = birthMonth;
  const lastBirthdayDay = effectiveBirthDayForYear(birthDay, birthMonth, lastBirthdayYear);

  // meses desde o último aniversário
  let months =
    tM >= lastBirthdayMonth
      ? tM - lastBirthdayMonth
      : tM + 12 - lastBirthdayMonth;

  // dias desde o último “dia efetivo” do aniversário
  let days: number;
  if (tD >= lastBirthdayDay) {
    days = tD - lastBirthdayDay;
  } else {
    // empresta um mês
    let prevMonth = tM - 1;
    let prevYear = tY;
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear -= 1;
    }
    const dimPrev = daysInMonth(prevYear, prevMonth);
    days = tD + dimPrev - lastBirthdayDay;
    months -= 1;
    if (months < 0) {
      months += 12;
    }
  }

  return { years, months, days };
}
