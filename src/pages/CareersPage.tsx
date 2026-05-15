import { useEffect, useMemo, useState } from "react";
import { CareerCard } from "../components/CareerCard";
import { EmptyState } from "../components/EmptyState";
import { FilterBar, SelectFilter } from "../components/FilterBar";
import { SearchBar } from "../components/SearchBar";
import { SectionTitle } from "../components/SectionTitle";
import { areas, careers, universities } from "../data/academicData";
import { getCareerMeta } from "../utils/catalog";

const durationOptions = ["Todas", "Hasta 4 años", "5 años", "6 años o más"];
const typeOptions = ["Todas", "Pública", "Privada"];
const planOptions = ["Todas", "Plan oficial cargado", "Plan pendiente"];

export function CareersPage() {
  const [search, setSearch] = useState("");
  const [universityFilter, setUniversityFilter] = useState("Todas");
  const [facultyFilter, setFacultyFilter] = useState("Todas");
  const [areaFilter, setAreaFilter] = useState("Todas");
  const [durationFilter, setDurationFilter] = useState("Todas");
  const [typeFilter, setTypeFilter] = useState("Todas");
  const [planFilter, setPlanFilter] = useState("Todas");

  const facultyOptions = useMemo(() => {
    if (universityFilter === "Todas") {
      return [
        "Todas",
        ...universities.flatMap((university) =>
          university.faculties.map((faculty) => ({
            label: `${university.acronym} · ${faculty.name}`,
            value: faculty.id
          }))
        )
      ];
    }

    const selectedUniversity = universities.find((university) => university.id === universityFilter);
    return [
      "Todas",
      ...(selectedUniversity?.faculties.map((faculty) => ({
        label: faculty.name,
        value: faculty.id
      })) ?? [])
    ];
  }, [universityFilter]);

  useEffect(() => {
    if (facultyFilter === "Todas") return;
    const validValues = new Set(
      facultyOptions.map((option) => (typeof option === "string" ? option : option.value))
    );

    if (!validValues.has(facultyFilter)) {
      setFacultyFilter("Todas");
    }
  }, [facultyFilter, facultyOptions]);

  const filteredCareers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return careers.filter((career) => {
      const { university, faculty } = getCareerMeta(career);
      const searchableText = [career.name, career.degreeTitle, career.area, university?.name, university?.acronym, faculty?.name]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(normalizedSearch);
      const matchesUniversity = universityFilter === "Todas" || career.universityId === universityFilter;
      const matchesFaculty = facultyFilter === "Todas" || career.facultyId === facultyFilter;
      const matchesArea = areaFilter === "Todas" || career.area === areaFilter;
      const matchesType = typeFilter === "Todas" || university?.type === typeFilter;
      const matchesPlan =
        planFilter === "Todas" ||
        (planFilter === "Plan oficial cargado" && career.studyPlanVerified) ||
        (planFilter === "Plan pendiente" && !career.studyPlanVerified);
      const matchesDuration =
        durationFilter === "Todas" ||
        (durationFilter === "Hasta 4 años" && career.durationYears <= 4) ||
        (durationFilter === "5 años" && career.durationYears === 5) ||
        (durationFilter === "6 años o más" && career.durationYears >= 6);

      return matchesSearch && matchesUniversity && matchesFaculty && matchesArea && matchesDuration && matchesType && matchesPlan;
    });
  }, [areaFilter, durationFilter, facultyFilter, planFilter, search, typeFilter, universityFilter]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <SectionTitle eyebrow="Carreras" title="Encontrá opciones para empezar a decidir">
          Buscá por carrera, universidad o área. Usá los filtros para achicar el universo y entrar al detalle.
        </SectionTitle>

        <div className="grid gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar carrera, universidad, área..." />
          <FilterBar>
            <SelectFilter
              label="Universidad"
              value={universityFilter}
              onChange={setUniversityFilter}
              options={[
                "Todas",
                ...universities.map((university) => ({
                  label: university.acronym,
                  value: university.id
                }))
              ]}
            />
            <SelectFilter label="Facultad" value={facultyFilter} onChange={setFacultyFilter} options={facultyOptions} />
            <SelectFilter label="Área" value={areaFilter} onChange={setAreaFilter} options={["Todas", ...areas]} />
            <SelectFilter label="Duración" value={durationFilter} onChange={setDurationFilter} options={durationOptions} />
            <SelectFilter label="Tipo" value={typeFilter} onChange={setTypeFilter} options={typeOptions} />
            <SelectFilter label="Plan" value={planFilter} onChange={setPlanFilter} options={planOptions} />
          </FilterBar>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-slate-600">
            {filteredCareers.length} resultado{filteredCareers.length === 1 ? "" : "s"}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setUniversityFilter("Todas");
              setFacultyFilter("Todas");
              setAreaFilter("Todas");
              setDurationFilter("Todas");
              setTypeFilter("Todas");
              setPlanFilter("Todas");
            }}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 hover:border-ocean hover:text-ocean"
          >
            Limpiar filtros
          </button>
        </div>

        {filteredCareers.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredCareers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No encontramos carreras"
            description="Probá ajustar los filtros o buscar con otra palabra clave."
          />
        )}
      </div>
    </section>
  );
}
