import type { LabelHTMLAttributes } from "react";

function Label({ children, ...props }: { children: React.ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="block text-neutral-400 md:text-base text-xs pb-1" {...props}>
      {children}
    </label>
  );
}
export default Label;