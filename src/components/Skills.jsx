import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const skills = [
  'Java',
  'Spring Boot',
  'MySQL',
  'PostgreSQL',
  'HTML',
  'CSS',
  'JavaScript',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tools & technologies"
          subtitle="Core stack I use to design, build, and ship backend-heavy applications."
        />
        <motion.ul
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skills.map((name) => (
            <motion.li key={name} variants={item} transition={{ type: 'spring', stiffness: 380, damping: 24 }}>
              <span className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500">
                {name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
