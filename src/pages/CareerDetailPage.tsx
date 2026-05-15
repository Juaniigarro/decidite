import { ArrowLeft, BriefcaseBusiness, Clock3, ExternalLink, GraduationCap, MapPin, Target, UserRoundCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { EmptyState } from "../components/EmptyState";
import { SectionTitle } from "../components/SectionTitle";
import { SourceNotice } from "../components/SourceNotice";
import { StudyPlanAccordion } from "../components/StudyPlanAccordion";
import { getCareerById, getCareerMeta } from "../utils/catalog";

export function CareerDetailPage() {
  const { id } = useParams();
  const career = getCareerById(id);

  if (!career) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState title="Carrera no encontrada" description="El enlace no coincide con una carrera cargada en el MVP." />
      </section>
    );
  }

  const { university, faculty } = getCareerMeta(career);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/carreras" className="mb-6 inline-flex items-center gap-2 text-sm font-black text-ocean hover:text-ink">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Volver a carreras
      </Link>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue">{career.area}</Badge>
              <Badge variant="green">{career.modality}</Badge>
              {career.studyPlanVerified ? <Badge variant="green">Plan oficial cargado</Badge> : null}
              {career.sourcePending ? <Badge variant="orange">Info de ejemplo</Badge> : null}
            </div>
            <SectionTitle title={career.name}>{career.description}</SectionTitle>
          </div>

          <SourceNotice />

          <InfoBlock title="Objetivos de la carrera" icon={<Target className="h-5 w-5" aria-hidden="true" />} items={career.objectives} />
          <InfoBlock
            title="Perfil del estudiante ideal"
            icon={<UserRoundCheck className="h-5 w-5" aria-hidden="true" />}
            items={career.idealStudentProfile}
          />
          <InfoBlock
            title="Salida laboral"
            icon={<BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />}
            items={career.jobOpportunities}
          />

          <div>
            <h2 className="mb-4 text-2xl font-black text-ink">Plan de estudio</h2>
            <StudyPlanAccordion
              studyPlan={career.studyPlan}
              verified={career.studyPlanVerified}
              sourceUrl={career.officialSourceUrl || university?.officialProgramsUrl || ""}
              note={career.studyPlanNote}
            />
          </div>
        </div>

        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-soft lg:sticky lg:top-24">
          <h2 className="text-lg font-black text-ink">Resumen rápido</h2>
          <div className="mt-4 grid gap-4 text-sm">
            <SummaryRow icon={<GraduationCap className="h-5 w-5" />} label="Universidad" value={university?.name ?? "Pendiente"} />
            <SummaryRow icon={<MapPin className="h-5 w-5" />} label="Facultad" value={faculty?.name ?? "Pendiente"} />
            <SummaryRow icon={<BriefcaseBusiness className="h-5 w-5" />} label="Título" value={career.degreeTitle} />
            <SummaryRow icon={<Clock3 className="h-5 w-5" />} label="Duración" value={`${career.durationYears} años`} />
            {university ? (
              <SummaryRow
                icon={<MapPin className="h-5 w-5" />}
                label="Ubicación"
                value={`${university.location.address}, ${university.location.city}`}
              />
            ) : null}
          </div>

          {university ? (
            <div className="mt-5 grid gap-2">
              <Link
                to={`/universidades/${university.id}`}
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-ink px-4 text-sm font-black text-white transition hover:bg-ocean"
              >
                Ver universidad
              </Link>
              <a
                href={career.officialSourceUrl || university.officialProgramsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-black text-ocean transition hover:border-ocean"
              >
                Fuente oficial
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

interface InfoBlockProps {
  title: string;
  icon: ReactNode;
  items: string[];
}

function InfoBlock({ title, icon, items }: InfoBlockProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-ocean">{icon}</span>
        <h2 className="text-xl font-black text-ink">{title}</h2>
      </div>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-mint" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface SummaryRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function SummaryRow({ icon, label, value }: SummaryRowProps) {
  return (
    <div className="flex gap-3 rounded-lg bg-slate-50 p-3">
      <span className="mt-0.5 text-ocean">{icon}</span>
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
        <p className="mt-1 font-bold leading-5 text-ink">{value}</p>
      </div>
    </div>
  );
}
