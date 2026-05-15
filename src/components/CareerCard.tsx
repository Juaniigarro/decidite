import { ArrowRight, BriefcaseBusiness, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Career } from "../types";
import { getCareerMeta } from "../utils/catalog";
import { Badge } from "./Badge";

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const { university, faculty } = getCareerMeta(career);

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-blue-200">
      <div className="flex flex-wrap gap-2">
        <Badge variant="blue">{career.area}</Badge>
        {career.studyPlanVerified ? <Badge variant="green">Plan oficial</Badge> : null}
        {career.sourcePending ? <Badge variant="orange">Info de ejemplo</Badge> : null}
      </div>

      <div className="mt-4 flex-1">
        <h2 className="text-xl font-black leading-snug text-ink">{career.name}</h2>
        <p className="mt-2 text-sm font-bold text-ocean">{university?.acronym ?? "Universidad"}</p>
        <p className="mt-1 text-sm text-slate-500">{faculty?.name ?? "Unidad académica pendiente"}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{career.description}</p>
      </div>

      <div className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm sm:grid-cols-2">
        <div className="flex items-center gap-2 text-slate-600">
          <Clock3 className="h-4 w-4 text-mint" aria-hidden="true" />
          {career.durationYears} años
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <BriefcaseBusiness className="h-4 w-4 text-mint" aria-hidden="true" />
          <span className="line-clamp-1">{career.degreeTitle}</span>
        </div>
      </div>

      <Link
        to={`/carreras/${career.id}`}
        className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ocean px-4 text-sm font-black text-white transition hover:bg-ink"
      >
        Ver carrera
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
