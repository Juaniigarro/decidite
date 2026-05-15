import type { ReactNode } from "react";

const variants = {
  blue: "bg-blue-50 text-ocean ring-blue-100",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  orange: "bg-orange-50 text-orange-700 ring-orange-100",
  gray: "bg-slate-100 text-slate-700 ring-slate-200"
};

interface BadgeProps {
  children: ReactNode;
  variant?: keyof typeof variants;
}

export function Badge({ children, variant = "gray" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${variants[variant]}`}>
      {children}
    </span>
  );
}
