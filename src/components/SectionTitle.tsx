import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}

export function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-black uppercase tracking-wide text-mint">{eyebrow}</p> : null}
      <h1 className="mt-2 text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h1>
      {children ? <p className="mt-3 text-base leading-7 text-slate-600">{children}</p> : null}
    </div>
  );
}
