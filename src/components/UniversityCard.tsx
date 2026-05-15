import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { University } from "../types";
import { getUniversityCareerCount } from "../utils/catalog";
import { Badge } from "./Badge";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  const careerCount = getUniversityCareerCount(university.id);

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-blue-200">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-blue-50 p-2">
          <img src={university.logoUrl} alt={`Logo ${university.acronym}`} className="h-8 w-8 object-contain" />
        </div>
        <Badge variant={university.type === "Pública" ? "green" : "blue"}>{university.type}</Badge>
      </div>

      <div className="mt-5 flex-1">
        <p className="text-sm font-black text-mint">{university.acronym}</p>
        <h2 className="mt-1 text-xl font-black leading-snug text-ink">{university.name}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{university.description}</p>
        <p className="mt-4 flex items-start gap-2 text-sm leading-5 text-slate-500">
          <MapPin className="mt-0.5 h-4 w-4 flex-none text-mint" aria-hidden="true" />
          {university.location.city}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
        <div>
          <p className="font-black text-ink">{university.faculties.length}</p>
          <p className="text-slate-500">Facultades</p>
        </div>
        <div>
          <p className="font-black text-ink">{careerCount}</p>
          <p className="text-slate-500">Carreras</p>
        </div>
      </div>

      <Link
        to={`/universidades/${university.id}`}
        className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-black text-white transition hover:bg-ocean"
      >
        Ver universidad
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
