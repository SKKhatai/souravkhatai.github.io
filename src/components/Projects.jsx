import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Supply Chain Management System',
    description:
      'End-to-end platform for inventory, orders, and supplier workflows. Includes role-based access, reporting endpoints, and transactional consistency for stock movements.',
    details: 'Built with Spring Boot and Spring Security for robust authentication. Employs MySQL with optimized indexes and JPA/Hibernate for complex relational querying. Achieved high transactional consistency across concurrent order processing, reducing race conditions and inventory drift. Deployed APIs follow strictly RESTful principles with structured error handling and DTO mappings.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs'],
    github: 'https://github.com/yourusername/supply-chain-spring',
  },
  {
    title: 'Student Management System',
    description:
      'Web application for managing students, courses, and enrollments. Features CRUD modules, validation, and an admin-friendly dashboard backed by a relational schema.',
    details: 'Developed a robust monolithic backend utilizing Spring Boot. Implemented strict data validation rules to ensure data integrity before persistence in MySQL. Integrated an MVC architecture to handle frontend templating or API JSON responses dynamically. Simplified deployment and configuration using Maven and Spring properties profiles across environments.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript'],
    github: 'https://github.com/yourusername/student-management-spring',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
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
