import { ChevronDown, ExternalLink, FileSearch } from "lucide-react";
import type { StudyPlanYear } from "../types";

interface StudyPlanAccordionProps {
  studyPlan: StudyPlanYear[];
  verified: boolean;
  sourceUrl: string;
  note?: string;
}

export function StudyPlanAccordion({ studyPlan, verified, sourceUrl, note }: StudyPlanAccordionProps) {
  if (!verified || studyPlan.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-5 shadow-soft">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-blue-50 text-ocean">
            <FileSearch className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-black text-ink">Plan oficial pendiente de carga</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Para no mostrar materias inventadas, esta carrera queda marcada como pendiente hasta cargar su plan
              oficial materia por materia.
            </p>
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-black text-ocean hover:border-ocean"
              >
                Ver fuente oficial
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {note ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold leading-6 text-emerald-800">
          {note}
        </p>
      ) : null}
      {studyPlan.map((year, index) => (
        <details key={year.year} className="group rounded-lg border border-slate-200 bg-white p-4 shadow-soft" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-ink">
            {year.year}
            <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4">
            {year.terms?.map((term) => (
              <div key={term.term} className="rounded-md bg-slate-50 p-3">
                <h4 className="text-sm font-black text-ink">{term.term}</h4>
                <SubjectList subjects={term.subjects} />
              </div>
            ))}
            {year.subjects ? <SubjectList subjects={year.subjects} /> : null}
          </div>
        </details>
      ))}
    </div>
  );
}

function SubjectList({ subjects }: { subjects: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
      {subjects.map((subject) => (
        <li key={subject} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mint" />
          {subject}
        </li>
      ))}
    </ul>
  );
}
