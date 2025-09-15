import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useState, useRef, useEffect } from "react";
import type { Age, DateErrors } from "../lib/types";
import { calculateAge } from "../lib/calculateAge";
import { calculateCountdown } from "../lib/calculateCountdown";
import { validateDate, type ValidationMode } from "../lib/validations";

type Props = {
  mode: ValidationMode; // 'age' | 'countdown'
  onResult: (res: Age) => void;
  onClear?: () => void;
  submitText?: string;
  clearText?: string;
};

function Form({
  mode,
  onResult,
  onClear,
  submitText = "Calcular",
  clearText = "Limpar",
}: Props) {
  const [errors, setErrors] = useState<DateErrors>({});
  const [hasResult, setHasResult] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;

    if (!form) return;
    const firstInvalid = form.querySelector<HTMLInputElement>(
      'input[aria-invalid="true"]'
    );
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [errors]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const day = parseInt((fd.get("day") as string) ?? "", 10);
    const month = parseInt((fd.get("month") as string) ?? "", 10);
    const year = parseInt((fd.get("year") as string) ?? "", 10);

    const { ok, errors: vErrors } = validateDate(day, month, year, new Date(), mode);
    if (!ok) {
      setErrors(vErrors);
      setHasResult(false);
      return;
    }

    const result = mode === "age"
      ? calculateAge(day, month, year, new Date())
      : calculateCountdown(day, month, year, new Date());

    setErrors({});
    setHasResult(true);
    onResult(result);
    form.reset();
  }

  function limpar() {
    
    setHasResult(false);
    onClear?.();
    formRef.current?.reset();
    formRef.current?.querySelector<HTMLInputElement>("#day")?.focus();
    setErrors({});
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="" action="">
      <div className="flex gap-4 mt-5">
        <div className="">
          <Label htmlFor="day">DIA</Label>
          <Input
            disabled={!!hasResult}
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
            disabled={!!hasResult}
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
            disabled={!!hasResult}
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
        {hasResult ? (
          <Button type="button" onClick={limpar}>
            {clearText}
          </Button>
        ) : (
          <Button type="submit">{submitText}</Button>
        )}
      </div>
    </form>
  );
}

export default Form;
