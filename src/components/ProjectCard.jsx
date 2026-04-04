import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const { title, description, stack, github } = project;

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300/80 hover:shadow-xl hover:shadow-brand-600/10 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-brand-500/50 dark:hover:shadow-brand-900/20"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-400/10 blur-2xl transition group-hover:bg-brand-400/20 dark:bg-brand-500/10 dark:group-hover:bg-brand-500/20" />
      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 flex-1 text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200 dark:bg-slate-800 dark:text-brand-300 dark:ring-brand-800"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
      >
        View on GitHub
        <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
      </a>
    </motion.article>
  );
}
