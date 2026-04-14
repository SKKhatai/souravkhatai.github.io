import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Supply Chain Management System',
    description:
      'End-to-end platform for inventory, orders, and supplier workflows. Includes role-based access, reporting endpoints, and transactional consistency for stock movements.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs'],
    github: 'https://github.com/yourusername/supply-chain-spring',
  },
  {
    title: 'Student Management System',
    description:
      'Web application for managing students, courses, and enrollments. Features CRUD modules, validation, and an admin-friendly dashboard backed by a relational schema.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript'],
    github: 'https://github.com/yourusername/student-management-spring',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="Representative builds that highlight backend architecture and full-stack delivery."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
