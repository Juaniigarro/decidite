import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="grid place-items-center rounded-lg border border-dashed border-slate-300 bg-white px-4 py-14 text-center">
      <SearchX className="h-10 w-10 text-slate-400" aria-hidden="true" />
      <h2 className="mt-4 text-xl font-black text-ink">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}
