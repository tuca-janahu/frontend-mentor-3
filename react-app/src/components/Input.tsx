import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";


function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      type="number"
      className={cn(`border border-gray-300 p-2 pl-4 flex-1 h-16 text-4xl font-extrabold w-50 placeholder:text-gray-300 placeholder:font-weight-black rounded mb-4`, className)}
      {...props}
    />
  );
}

export default Input;
