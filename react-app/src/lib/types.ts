export type Age = {
  years: number;
  months: number;
  days: number;
};

export type DateErrors = {
  day?: string;
  month?: string;
  year?: string;
  /** Erro “cruzado” (ex.: data futura) */
  date?: string;
};
