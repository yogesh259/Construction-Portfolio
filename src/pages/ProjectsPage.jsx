import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/site.js";

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-max section-pad">
        <p className="kicker">Archive</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-6xl">Government and civic works, photographed on site.</h1>
        <p className="mt-5 max-w-2xl text-stone">
          Police housing, municipal buildings, NDDB campus works, and public landscapes — principally in Anand, Surat, Bharuch, and Vadodara.
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
