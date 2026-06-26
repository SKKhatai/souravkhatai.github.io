import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { resumeProjects } from '../data/resumeData';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-200/40 bg-transparent py-20 dark:border-slate-800/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Representative backend architecture and full-stack software developments."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {resumeProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
