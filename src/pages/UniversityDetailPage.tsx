import { ArrowLeft, BookOpenCheck, Building2, ExternalLink, Globe2, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { CareerCard } from "../components/CareerCard";
import { EmptyState } from "../components/EmptyState";
import { SectionTitle } from "../components/SectionTitle";
import { SourceNotice } from "../components/SourceNotice";
import { getCareersByFaculty, getCareersByUniversity, getUniversityById } from "../utils/catalog";

export function UniversityDetailPage() {
  const { id } = useParams();
  const university = getUniversityById(id);

  if (!university) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          title="Universidad no encontrada"
          description="El enlace no coincide con una universidad cargada en el MVP."
        />
      </section>
    );
  }

  const universityCareers = getCareersByUniversity(university.id);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/universidades" className="mb-6 inline-flex items-center gap-2 text-sm font-black text-ocean hover:text-ink">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Volver a universidades
      </Link>

      <div className="grid gap-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="grid h-20 w-20 flex-none place-items-center rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
              <img src={university.logoUrl} alt={`Logo ${university.acronym}`} className="max-h-14 max-w-14 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={university.type === "Pública" ? "green" : "blue"}>{university.type}</Badge>
                <Badge>{university.acronym}</Badge>
              </div>
              <SectionTitle title={university.name}>{university.description}</SectionTitle>
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-4">
              <Building2 className="h-6 w-6 text-ocean" aria-hidden="true" />
              <div>
                <p className="font-black text-ink">{university.faculties.length}</p>
                <p className="text-sm text-slate-600">Facultades o unidades académicas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-emerald-50 p-4">
              <BookOpenCheck className="h-6 w-6 text-mint" aria-hidden="true" />
              <div>
                <p className="font-black text-ink">{universityCareers.length}</p>
                <p className="text-sm text-slate-600">Carreras cargadas en el MVP</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
              <MapPin className="mt-0.5 h-6 w-6 flex-none text-sunrise" aria-hidden="true" />
              <div>
                <p className="font-black text-ink">{university.location.name}</p>
                <p className="text-sm leading-5 text-slate-600">
                  {university.location.address}, {university.location.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-emerald-50 p-4">
              <Globe2 className="mt-0.5 h-6 w-6 flex-none text-mint" aria-hidden="true" />
              <div>
                <p className="font-black text-ink">Fuente oficial</p>
                <a
                  href={university.officialProgramsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-ocean hover:text-ink"
                >
                  Ver oferta
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <SourceNotice />

        <div className="grid gap-4">
          <h2 className="text-2xl font-black text-ink">Facultades y carreras</h2>
          {university.faculties.map((faculty) => {
            const facultyCareers = getCareersByFaculty(faculty.id);

            return (
              <details key={faculty.id} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft" open>
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-black text-ink">{faculty.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{faculty.description}</p>
                    </div>
                    <Badge variant="gray">{facultyCareers.length} carreras</Badge>
                  </div>
                </summary>

                <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-2">
                  {facultyCareers.length > 0 ? (
                    facultyCareers.map((career) => <CareerCard key={career.id} career={career} />)
                  ) : (
                    <p className="text-sm text-slate-500">Todavía no hay carreras cargadas para esta unidad académica.</p>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
