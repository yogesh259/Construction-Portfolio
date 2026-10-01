import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/site.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [active, setActive] = useState(0);

  const related = useMemo(() => {
    if (!project) return [];
    return projects.filter((item) => item.id !== project.id).slice(0, 3);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const photo = project.images[active] || project.cover;

  return (
    <article className="pb-20">
      <div className="bg-ink text-sand">
        <div className="section-max section-pad py-10 sm:py-14">
          <Link to="/projects" className="text-xs uppercase tracking-[0.2em] text-sand/50 hover:text-clay">
            ← All projects
          </Link>
          <p className="kicker mt-6 text-clay">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl sm:text-6xl">{project.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-sand/70">
            <span>{project.client}</span>
            <span>{project.location}</span>
            <span>₹ {project.value}</span>
            <span>Start {project.date}</span>
          </div>
        </div>
      </div>

      <div className="section-max section-pad mt-8">
        <div className="overflow-hidden bg-sand">
          <img src={photo} alt={project.title} className="max-h-[70vh] w-full object-cover" />
        </div>
        {project.images.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
            {project.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className={`h-16 w-24 shrink-0 overflow-hidden border ${i === active ? "border-clay" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {project.highlight && (
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-clay">{project.highlight}</p>
            )}
            <p className="text-lg leading-relaxed text-stone">{project.description}</p>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.22em] text-stone">Scope notes</h2>
            <ul className="mt-4 space-y-3 border-t border-ink/10 pt-4">
              {project.facilities.map((item) => (
                <li key={item} className="border-b border-ink/10 pb-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl">Other works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.id} to={`/projects/${item.slug}`} className="group">
                <div className="overflow-hidden bg-sand">
                  <img src={item.cover} alt="" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-3 font-display text-xl">{item.title}</p>
                <p className="text-sm text-stone">{item.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
