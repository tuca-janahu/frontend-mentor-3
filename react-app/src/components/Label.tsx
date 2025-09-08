import type { LabelHTMLAttributes } from "react";

function Label({ children, ...props }: { children: React.ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="block text-neutral-400" {...props}>
      {children}
    </label>
  );
}
export default Label;