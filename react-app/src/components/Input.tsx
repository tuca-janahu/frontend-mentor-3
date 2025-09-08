import type { InputHTMLAttributes } from "react";

function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input type="number" className={`border border-gray-300 p-2 flex-1 h-16 text-4xl font-extrabold  w-50 rounded mb-4 ${className}`} {...props} />
  );
}

export default Input;
