import { Link } from "react-router-dom";
import { company } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="section-max section-pad grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{company.name}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-clay">
            {company.legalLine}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">{company.vision}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sand/50">Office</p>
          <p className="mt-3 text-sm leading-relaxed text-sand/80">{company.address}</p>
          <a className="mt-4 inline-block text-sm text-clay hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sand/50">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/projects" className="hover:text-clay">
              Selected works
            </Link>
            <Link to="/#services" className="hover:text-clay">
              Services
            </Link>
            <Link to="/#about" className="hover:text-clay">
              The firm
            </Link>
            <Link to="/#contact" className="hover:text-clay">
              Enquire
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-sand/45 sm:px-8">
        © {new Date().getFullYear()} {company.name}, Anand. All rights reserved.
      </div>
    </footer>
  );
}
