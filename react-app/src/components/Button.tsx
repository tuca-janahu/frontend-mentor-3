import type { ButtonHTMLAttributes } from "react";

function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className={`bg-purple-400 text-white md:w-20 md:h-20 h-14 w-14 text-xs md:text-base rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors ml-[-2.5rem] cursor-pointer z-10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}



export default Button;