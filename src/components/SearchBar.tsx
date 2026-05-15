import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
}

export function SearchBar({ value, onChange, placeholder, label = "Buscar" }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <span className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-md border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-ink outline-none transition placeholder:text-slate-400 focus:border-ocean focus:ring-4 focus:ring-blue-100"
        />
      </span>
    </label>
  );
}
