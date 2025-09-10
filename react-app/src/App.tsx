import Input from "./components/Input";
import Label from "./components/Label";
import Button from "./components/Button";
import { useState } from "react";
import StandardDate from "./components/StandardDate";
import type { Age } from "./lib/types";
import { calculateAge } from "./lib/calculate";
import { validateDate } from "./lib/validations";
import type { DateErrors } from "./lib/types";
import BirthDate from "./components/BirthDate";

function App() {
  const [age, setAge] = useState<Age | null>(null);

  const [errors, setErrors] = useState<DateErrors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const dayString = formData.get("day");
    const monthString = formData.get("month");
    const yearString = formData.get("year");

    const day = typeof dayString === "string" ? parseInt(dayString, 10) : NaN;
    const month =
      typeof monthString === "string" ? parseInt(monthString, 10) : NaN;
    const year =
      typeof yearString === "string" ? parseInt(yearString, 10) : NaN;

    const { ok, errors: vErrors } = validateDate(day, month, year, new Date());

    if (!ok) {
      setErrors(vErrors);
      setAge(null);
      return;
    }

    // Se passou na validação, calcula e exibe a idade
    const result = calculateAge(day, month, year, new Date());
    setAge(result);
    setErrors({});
  }

  function limpar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setAge(null);
    setErrors({});
    e.currentTarget.form?.reset();
  }

  return (
    <main
      className="
    bg-white max-w-md m-4 mt-8 py-10 px-8 rounded-t-xl rounded-bl-xl  [border-end-end-radius:200px] shadow-lg
      md:max-w-4xl md:py-12 md:px-24 md:mx-auto md:mt-0.5 md:[border-end-end-radius:400px]"
    >
      <section className="">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex gap-4 mt-5">
            <div className="">
              <Label htmlFor="day">DIA</Label>
              <Input
                disabled={!!age}
                id="day"
                name="day"
                placeholder="DD"
                aria-invalid={!!errors.day}
                aria-describedby={errors.day ? "day-error" : undefined}
              />{" "}
              {errors.day && (
                <p id="day-error" className="mt-1 text-sm text-red-600">
                  {errors.day}
                </p>
              )}
            </div>
            <div className="">
              <Label htmlFor="month">MÊS</Label>
              <Input
                disabled={!!age}
                id="month"
                name="month"
                placeholder="MM"
                aria-invalid={!!errors.month}
                aria-describedby={errors.month ? "month-error" : undefined}
              />{" "}
              {errors.month && (
                <p id="month-error" className="mt-1 text-sm text-red-600">
                  {errors.month}
                </p>
              )}
            </div>
            <div className="">
              <Label htmlFor="year">ANO</Label>
              <Input
                disabled={!!age}
                id="year"
                name="year"
                placeholder="AAAA"
                aria-invalid={!!errors.year}
                aria-describedby={errors.year ? "year-error" : undefined}
              />{" "}
              {errors.year && (
                <p id="year-error" className="mt-1 text-sm text-red-600">
                  {errors.year}
                </p>
              )}
            </div>
          </div>

          {errors.date && (
            <div className="mt-2">
              <p className="text-sm text-red-700">{errors.date}</p>
            </div>
          )}

          <div className="flex items-center mt-4 mb-8">
            <div className="flex-1 h-px bg-gray-200" />
            {age ? (
              <Button type="button" onClick={limpar}>
                Limpar
              </Button>
            ) : (
              <Button type="submit">Calcular</Button>
            )}
          </div>
        </form>
      </section>
      <section>
        {age ? (
          <BirthDate age={age} />
        ) : (
          <StandardDate />
        )}
      </section>
    </main>
  );
}

export default App;
