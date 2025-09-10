import type { ButtonHTMLAttributes } from "react";

function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className={`bg-purple-400 text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ml-[-2.5rem] z-10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}



export default Button;