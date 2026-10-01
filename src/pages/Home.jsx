import { Link } from "react-router-dom";
import { clients, company, machinery, projects, registrations, services } from "../data/site.js";
import ProjectCard from "../components/ProjectCard.jsx";

const featured = [projects[0], projects[1], projects[3], projects[2]];

export default function Home() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink text-sand">
        <div className="absolute inset-0">
          <img src="/nddb15.jpg" alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        </div>
        <div className="section-max section-pad relative grid min-h-[88vh] items-end gap-10 py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-clay">
              <span className="text-sm" style={{ fontFamily: '"Noto Sans Gujarati", sans-serif' }}>
                ગુજરાત
              </span>
              <span className="kicker">Government contractor · Anand</span>
            </p>
            <h1 className="mt-5 font-display text-[2.7rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem]">
              Civic works, built to be used every day.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/75">
              {company.name} is an A Class, Special Category II contractor from Anand.
              Since the early 1990s we have delivered police housing, municipal halls,
              institutional campuses, and public landscapes across Gujarat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-white hover:bg-claydeep"
              >
                See selected works
              </Link>
              <Link
                to="/#contact"
                className="rounded-full border border-sand/30 px-6 py-3 text-sm text-sand hover:border-sand"
              >
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 border border-white/10 bg-ink/50 backdrop-blur-sm">
              {[
                { n: "30+", l: "Years on site" },
                { n: "40+", l: "Projects delivered" },
                { n: "₹4.1 Cr", l: "Recent turnover" },
              ].map((stat) => (
                <div key={stat.l} className="border-r border-white/10 px-4 py-6 last:border-r-0 sm:px-5">
                  <p className="font-display text-2xl sm:text-3xl">{stat.n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sand/55">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-sand py-10">
        <div className="section-max section-pad">
          <p className="kicker mb-6">Clients who trust the work</p>
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
            {clients.map((client) => (
              <div key={client.name} className="flex h-20 items-center justify-center grayscale transition hover:grayscale-0">
                <img src={client.logo} alt={client.name} className="max-h-14 max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-max section-pad">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">Works</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Sites across Gujarat</h2>
            </div>
            <Link to="/projects" className="text-sm text-clay hover:underline">
              View all projects
            </Link>
          </div>
          <div className="mt-10 grid auto-rows-[280px] gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-forest py-20 text-sand">
        <div className="section-max section-pad">
          <p className="kicker text-clay">Capability</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">One contractor, several trades on a single site.</h2>
          <p className="mt-5 max-w-2xl text-sand/70">
            Planning through handover — with quality, programme, and client satisfaction as the measure of the job.
          </p>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="bg-forest p-7">
                <span className="font-display text-3xl text-clay/80">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/70">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-20">
        <div className="section-max section-pad grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">The firm</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">From a new yard in the nineties to A Class work statewide.</h2>
            <div className="mt-6 overflow-hidden">
              <img src="/value.png" alt="Construction site" className="h-[420px] w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <p className="text-lg leading-relaxed text-stone">
              {company.founder} laid the foundation of the company in the early 1990s.
              What began as a young contracting practice is now an A Class registered contractor
              with Special Category II standing — equipped to take government and institutional
              works across Gujarat.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-2xl">People</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Five engineers and a core of supervisors, with extra staff taken on as each site requires.
                </p>
              </div>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-2xl">Plant</h3>
                <ul className="mt-3 space-y-1 text-sm text-stone">
                  {machinery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {registrations.map((item) => (
                <div key={item.title} className="bg-sand p-5">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-ink/10 bg-sand py-20">
        <div className="section-max section-pad grid gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Bring the next civic job to Anand.</h2>
            <p className="mt-5 max-w-md text-stone">
              Enquiries, tenders, and project discussions — call, WhatsApp, or write. The office is on 100 Feet Road, Anand.
            </p>
            <div className="mt-10 space-y-6">
              {company.contacts.map((person) => (
                <div key={person.phone} className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <div>
                    <p className="font-display text-2xl">{person.name}</p>
                    <p className="text-sm text-stone">{person.display}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      className="rounded-full bg-ink px-4 py-2 text-xs text-sand hover:bg-clay"
                      href={`tel:+91${person.phone}`}
                    >
                      Call
                    </a>
                    <a
                      className="rounded-full border border-ink/20 px-4 py-2 text-xs hover:border-ink"
                      href={`https://wa.me/91${person.phone}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
              <div>
                <p className="text-sm text-stone">{company.address}</p>
                <a className="mt-2 inline-block text-sm text-clay hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-ink">
            <img src="/backDrop.png" alt="T.R. Prajapati office" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-ink/80 p-6 text-sand">
              <p className="text-xs uppercase tracking-[0.2em] text-clay">Site office</p>
              <p className="mt-2 font-display text-2xl">Kiran Complex, 100 Feet Road</p>
              <p className="text-sm text-sand/70">Anand 388001, Gujarat</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
