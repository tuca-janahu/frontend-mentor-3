export function validateYear(year: number): boolean {
  return year > 0 && year <= new Date().getFullYear();
}

export function validateMonth(month: number): boolean {
  return month > 0 && month <= 12;
}


export function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export function validateDay(day: number, month: number, year: number): boolean {
  if(!validateMonth(month) || !validateYear(year))  return false;
  
  const dim = daysInMonth(month, year);
  return day >= 1 && day <= dim;
}


export function validateDate(y: number, m: number, d: number): boolean {
  return validateYear(y) && validateMonth(m) && validateDay(d, m, y);
}