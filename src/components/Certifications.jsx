import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeCertifications } from '../data/resumeData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Certifications"
          title="Learning & credentials"
          subtitle="Highlights from structured learning and certification programs."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {resumeCertifications.map((c, idx) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950/40"
            >
              <div>
                <p className="font-display text-base font-semibold text-slate-900 dark:text-white">{c.name}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.note}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                Verified
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

