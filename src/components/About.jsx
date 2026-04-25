import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About me"
          title="Background & focus"
          subtitle="SDE-1 profile: Java backend engineering with cloud fundamentals."
        />
        <motion.div
          className="mx-auto max-w-3xl space-y-5 rounded-2xl bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 text-lg leading-relaxed text-slate-700 dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I&apos;m a backend developer who enjoys turning business requirements into stable
            services: REST APIs, authentication, integrations, and databases that behave
            predictably under load.
          </p>
          <p>
            On the Java side I work with <strong className="font-semibold text-orange-600 dark:text-brand-300">Java</strong> and{' '}
            <strong className="font-semibold text-orange-600 dark:text-brand-300">Spring Boot</strong> to build modular applications
            with clear layering, sensible boundaries, and testable components.
          </p>
          <p>
            I care about cloud-ready delivery (AWS + Docker), production monitoring, and team-friendly code:
            readable structure, sensible error handling, and tests that protect behavior as systems evolve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
