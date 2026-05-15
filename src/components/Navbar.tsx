import { Compass, GraduationCap, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/universidades", label: "Universidades", icon: GraduationCap },
  { to: "/carreras", label: "Carreras", icon: Search }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ocean text-white shadow-soft">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-black tracking-wide text-ink">DECIDITE</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">Orientación universitaria</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
                  isActive ? "bg-ocean text-white" : "text-slate-600 hover:bg-slate-100 hover:text-ink"
                }`
              }
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-ink md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden" aria-label="Principal móvil">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md px-3 py-3 text-sm font-bold ${
                    isActive ? "bg-ocean text-white" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
