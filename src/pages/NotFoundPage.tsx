import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState title="Página no encontrada" description="La ruta no existe o todavía no está disponible en este MVP." />
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-ocean px-4 text-sm font-black text-white hover:bg-ink"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
