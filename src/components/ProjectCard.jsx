import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative overflow-hidden bg-ink ${featured ? "md:col-span-2 md:row-span-2 min-h-[420px]" : "min-h-[280px]"}`}
    >
      <img
        src={project.cover}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="text-[11px] uppercase tracking-[0.22em] text-sand/70">
          {project.category} · {project.year} · ₹ {project.value}
        </p>
        <h3 className={`mt-2 font-display text-sand ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-sand/75">{project.location}</p>
      </div>
    </Link>
  );
}
