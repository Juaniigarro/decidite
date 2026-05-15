import { useMemo, useState } from "react";
import { EmptyState } from "../components/EmptyState";
import { SearchBar } from "../components/SearchBar";
import { SectionTitle } from "../components/SectionTitle";
import { UniversityCard } from "../components/UniversityCard";
import { universities } from "../data/academicData";
import type { UniversityType } from "../types";

const typeFilters: Array<"Todas" | UniversityType> = ["Todas", "Pública", "Privada"];

export function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"Todas" | UniversityType>("Todas");

  const filteredUniversities = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return universities.filter((university) => {
      const matchesSearch =
        university.name.toLowerCase().includes(normalizedSearch) ||
        university.acronym.toLowerCase().includes(normalizedSearch);
      const matchesType = typeFilter === "Todas" || university.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <SectionTitle eyebrow="Universidades" title="Explorá instituciones disponibles">
          Buscá por nombre o sigla, filtrá por tipo y entrá a cada universidad para ver facultades y carreras cargadas.
        </SectionTitle>

        <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-soft lg:grid-cols-[1fr_auto]">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar por nombre o sigla..." />
          <div className="grid grid-cols-3 gap-2">
            {typeFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setTypeFilter(filter)}
                className={`h-12 rounded-md px-3 text-sm font-black transition ${
                  typeFilter === filter ? "bg-ocean text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredUniversities.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No encontramos universidades"
            description="Probá cambiar la búsqueda o elegir otro filtro para ver más resultados."
          />
        )}
      </div>
    </section>
  );
}
