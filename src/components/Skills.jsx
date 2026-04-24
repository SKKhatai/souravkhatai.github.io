import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeSkills } from '../data/resumeData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, rotateX: -25, y: 40 },
  show: { opacity: 1, rotateX: 0, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tools & technologies"
          subtitle="Java backend + cloud focused skill set, grouped for quick scanning."
        />
        <motion.div
          className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          style={{ perspective: 1000 }}
        >
          {resumeSkills.map((group) => (
            <motion.section
              key={group.category}
              variants={item}
              className="rounded-2xl bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 dark:border-slate-800/60 dark:bg-white/5"
            >
              <p className="font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                {group.category}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((name) => (
                  <motion.li
                    key={name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:border-orange-400 hover:text-orange-600 dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-500"
                  >
                    {name}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
