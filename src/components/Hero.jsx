import { motion } from 'framer-motion';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="mb-4 inline-flex items-center rounded-full border border-orange-200/80 bg-orange-50/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
            Open to opportunities
          </motion.p>
          <motion.h1 variants={item} className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m{' '}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              Sourav Kumar Khatai
            </motion.span>
          </motion.h1>
          <motion.p variants={item} className="mt-2 text-xl font-medium text-orange-600 dark:text-brand-400 sm:text-2xl">
            SDE-1 · Java Backend · Cloud
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-400">
            I build reliable backend services with Java + Spring Boot, deploy on AWS, and ship
            production-ready systems with observability, strong data modeling, and test-first practices.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('projects')}
              className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 dark:bg-brand-600 dark:shadow-brand-900/40 dark:hover:bg-brand-700"
            >
              View projects
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('contact')}
              className="rounded-xl border border-orange-200 bg-white/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-orange-900 transition hover:border-orange-400 hover:text-orange-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500"
            >
              Get in touch
            </motion.button>
            <motion.a
              href="/resume.pdf" // Assuming a resume.pdf exists in public folder
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-xl border border-orange-200 bg-white/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-orange-900 transition hover:border-orange-400 hover:text-orange-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
