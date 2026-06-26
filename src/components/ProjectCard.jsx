import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const { title, description, stack, github, details } = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.article
        layoutId={`project-card-${title}`}
        onClick={() => setIsOpen(true)}
        className="glassmorphism group relative flex flex-col cursor-pointer overflow-hidden rounded-3xl p-6 transition duration-300 hover:border-cyber-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div layoutId={`project-bg-${title}`} className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />
        <motion.h3 layoutId={`project-title-${title}`} className="font-futuristic text-xl font-bold text-slate-900 dark:text-white">{title}</motion.h3>
        <motion.p layoutId={`project-desc-${title}`} className="mt-3 flex-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</motion.p>
        <motion.ul layoutId={`project-stack-${title}`} className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-400 border border-brand-500/20"
            >
              {tech}
            </li>
          ))}
        </motion.ul>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyber-cyan transition hover:text-brand-400">
          Read Case Study
          <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm dark:bg-slate-950/60" onClick={() => setIsOpen(false)} />

            <motion.div
              layoutId={`project-card-${title}`}
              className="glassmorphism relative w-full max-w-2xl overflow-hidden rounded-3xl p-6 border border-white/10 dark:border-white/5 sm:p-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <motion.div layoutId={`project-bg-${title}`} className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />

              <motion.h3 layoutId={`project-title-${title}`} className="font-futuristic text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                {title}
              </motion.h3>

              <motion.ul layoutId={`project-stack-${title}`} className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-400 border border-brand-500/20"
                  >
                    {tech}
                  </li>
                ))}
              </motion.ul>

              <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Overview</h4>
                  <p className="mt-2 leading-relaxed">{description}</p>
                </motion.div>

                {details && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Architecture & Impact</h4>
                    <p className="mt-2 leading-relaxed">{details}</p>
                  </motion.div>
                )}
              </div>

              <motion.div className="mt-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
