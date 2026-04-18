import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeExperience } from '../data/resumeData';
import nikeSwoosh from '../assets/nike-swoosh.png';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've shipped"
          subtitle="Production-focused backend work across microservices, cloud, and operational excellence."
        />

        <div className="mx-auto max-w-4xl space-y-6">
          {resumeExperience.map((role, idx) => (
            <motion.article
              key={`${role.company}-${role.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {role.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                      <NikeBadge />
                      <span>
                        {role.company} · {role.location}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {role.period}
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500/80" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NikeBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-extrabold tracking-[0.2em] text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <img
        src={nikeSwoosh}
        alt=""
        className="h-3.5 w-auto flex-none object-contain"
        style={{ filter: 'contrast(1.05) saturate(1.1)' }}
        aria-hidden
      />
      NIKE
    </span>
  );
}

