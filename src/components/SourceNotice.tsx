import { AlertTriangle } from "lucide-react";

export function SourceNotice() {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
      <p>
        <strong>Datos organizados para MVP.</strong> Los nombres de carreras están cargados desde ofertas oficiales o
        catálogos institucionales consultados. Si una carrera dice "Plan oficial cargado", sus materias fueron cargadas
        desde una fuente oficial; si no, el plan queda pendiente para evitar mostrar materias inventadas.
      </p>
    </div>
  );
}
