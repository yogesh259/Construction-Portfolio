import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../data/site.js";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const itemClass = ({ isActive }, hash) => {
    const onHomeHash = location.pathname === "/" && hash && location.hash === hash;
    const active = hash ? onHomeHash : isActive;
    return `text-sm tracking-wide ${active ? "text-clay" : "text-ink/80 hover:text-ink"}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="section-max section-pad flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-ink text-[11px] font-semibold tracking-[0.18em] text-sand">
            TR
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight">{company.name}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-stone sm:block">
              Anand · Gujarat
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.to.includes("#") ? (
              <Link
                key={link.to}
                to={link.to}
                className={itemClass({ isActive: false }, link.to.split("#")[1] ? `#${link.to.split("#")[1]}` : "")}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} className={(props) => itemClass(props)}>
                {link.label}
              </NavLink>
            )
          )}
          <a
            href={`tel:+91${company.contacts[0].phone}`}
            className="rounded-full bg-ink px-4 py-2 text-sm text-sand transition hover:bg-clay"
          >
            Call Rohit
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-base">
                {link.label}
              </Link>
            ))}
            <a href={`tel:+91${company.contacts[0].phone}`} className="text-clay">
              Call {company.contacts[0].name}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
