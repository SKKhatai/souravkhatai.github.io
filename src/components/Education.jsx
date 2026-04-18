import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeEducation } from '../data/resumeData';

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Education" title="Academics" subtitle="Formal foundations that support my engineering work." />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {resumeEducation.map((edu, idx) => (
            <motion.article
              key={`${edu.degree}-${edu.school}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{edu.school}</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{edu.meta}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

