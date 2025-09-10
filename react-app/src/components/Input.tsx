import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";


function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      type="number"
      inputMode="numeric"
      className={cn(` border border-gray-300 p-2 pl-4 flex-1 md:h-16 md:text-4xl md:w-50 w-18 font-extrabold  placeholder:text-gray-300 placeholder:font-weight-black rounded mb-4`, className)}
      {...props}
    />
  );
}

export default Input;
