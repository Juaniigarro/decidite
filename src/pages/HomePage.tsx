import { ArrowRight, BookOpenCheck, Building2, Clock3, Layers3, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { careers, universities } from "../data/academicData";

const steps = [
  {
    title: "Elegí una universidad",
    description: "Buscá por nombre, sigla o tipo de institución.",
    icon: Building2
  },
  {
    title: "Explorá facultades y carreras",
    description: "Entrá al detalle y mirá qué opciones aparecen cargadas.",
    icon: Layers3
  },
  {
    title: "Revisá planes y duración",
    description: "Compará años, modalidad, salida laboral y materias de ejemplo.",
    icon: BookOpenCheck
  },
  {
    title: "Decidí con más claridad",
    description: "Guardá mentalmente tus opciones favoritas y seguí investigando.",
    icon: Sparkles
  }
];

export function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex rounded-md bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-700 ring-1 ring-emerald-100">
              Orientación universitaria simple
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              DECIDITE
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-700">
              Elegí qué estudiar con información clara, simple y en un solo lugar.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explorá universidades, carreras, planes de estudio y duración estimada para tomar una mejor decisión
              sobre tu futuro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/carreras"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ocean px-5 text-sm font-black text-white shadow-soft transition hover:bg-ink"
              >
                Explorar carreras
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/universidades"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-black text-ink transition hover:border-ocean hover:text-ocean"
              >
                Ver universidades
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-cloud p-4 shadow-soft">
            <div className="rounded-lg bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">Explorador académico</p>
                  <h2 className="mt-1 text-xl font-black text-ink">Primer mapa de opciones</h2>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-md bg-ocean text-white">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-ink">{universities.length} universidades</p>
                    <Building2 className="h-5 w-5 text-ocean" aria-hidden="true" />
                  </div>
                  <div className="mt-3 h-2 rounded-md bg-slate-100">
                    <div className="h-2 w-4/5 rounded-md bg-ocean" />
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-ink">{careers.length} carreras cargadas</p>
                    <BookOpenCheck className="h-5 w-5 text-mint" aria-hidden="true" />
                  </div>
                  <div className="mt-3 h-2 rounded-md bg-slate-100">
                    <div className="h-2 w-3/5 rounded-md bg-mint" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-2xl font-black text-ocean">9</p>
                    <p className="mt-1 text-xs font-bold text-slate-600">áreas de conocimiento</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <Clock3 className="h-6 w-6 text-sunrise" aria-hidden="true" />
                    <p className="mt-3 text-xs font-bold text-slate-600">duración estimada visible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wide text-mint">Cómo funciona</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Un recorrido corto para orientarte mejor</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-ocean">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-black text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
