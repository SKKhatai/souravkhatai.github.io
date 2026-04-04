import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About me"
          title="Background & focus"
          subtitle="Backend-first engineer with experience across the Java and PHP ecosystems."
        />
        <motion.div
          className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
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
            On the Java side I work with <strong className="font-semibold text-slate-800 dark:text-slate-200">Java</strong> and{' '}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">Spring Boot</strong> to build modular applications
            with clear layering and testable components. For PHP stacks I use{' '}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">Laravel</strong> and{' '}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">PHP</strong> to deliver rapid feature
            development with Eloquent, queues, and Blade or API resources as needed.
          </p>
          <p>
            Whether it&apos;s a greenfield service or extending an existing codebase, I aim for
            readable structure, sensible error handling, and documentation that helps the next
            developer move fast.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
