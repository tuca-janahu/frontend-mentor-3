import { daysInMonth } from "./validations";
import type { Age } from "./types";

export function calculateCountdown(
  eventDay: number,
  eventMonth: number,
  eventYear: number,
  today: Date = new Date()
): Age {
  const sY = today.getFullYear();
  const sM = today.getMonth() + 1;
  const sD = today.getDate();

  let years = eventYear - sY;
  let months = eventMonth - sM;
  let days = eventDay - sD;

  if (days < 0) {
    // empresta mês anterior ao evento
    let prevMonth = eventMonth - 1;
    let prevYear = eventYear;
    if (prevMonth === 0) { prevMonth = 12; prevYear -= 1; }
    days += daysInMonth(prevYear, prevMonth);
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  if (years < 0) {
    return { years: 0, months: 0, days: 0 };
  }
  return { years, months, days };
}
