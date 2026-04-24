import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeEducation } from '../data/resumeData';

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Education" title="Academics" subtitle="Formal foundations that support my engineering work." />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {resumeEducation.map((edu, idx) => (
            <motion.article
              key={`${edu.degree}-${edu.school}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 dark:border-slate-800/60 dark:bg-white/5"
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
