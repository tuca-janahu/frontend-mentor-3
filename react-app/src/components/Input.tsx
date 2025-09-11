import type { InputHTMLAttributes, AriaAttributes } from "react";
import { cn } from "../lib/utils";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  "aria-invalid"?: AriaAttributes["aria-invalid"];
};

function Input({ className, ...props }: Props) {
  const ariaInvalid = props["aria-invalid"];
  const isInvalid =
    ariaInvalid === true ||
    ariaInvalid === "true" ||
    ariaInvalid === "grammar" ||
    ariaInvalid === "spelling";

  return (
    <input
      type="number"
      inputMode="numeric"
      className={cn(
        "border p-2 pl-4 flex-1 md:h-16 md:text-4xl md:w-50 w-18 font-extrabold placeholder:text-gray-300 rounded mb-4 outline-none",
        isInvalid
          ? "border-red-600 focus:border-red-600 focus:ring-4 focus:ring-red-200 text-red-900 placeholder:text-red-300"
          : "border-gray-300 focus:border-purple-700 focus:ring-4 focus:ring-purple-200",
        className
      )}
      data-invalid={isInvalid ? true : undefined}
      {...props}
    />
  );
}

export default Input;
