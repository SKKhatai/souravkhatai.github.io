import { motion } from 'framer-motion';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      {/* Liquid Light-Orange Morphing Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-orange-50 via-amber-50/50 to-orange-100/80 dark:hidden" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden" aria-hidden="true">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[5%] top-[0%] h-[450px] w-[450px] bg-orange-300/40 mix-blend-multiply blur-[60px] filter"
        />
        <motion.div
          animate={{
            rotate: [360, 180, 0],
            borderRadius: ["60% 40% 30% 70% / 50% 60% 40% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 50%"],
            x: [0, -40, 20, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-[5%] top-[10%] h-[500px] w-[500px] bg-amber-300/40 mix-blend-multiply blur-[60px] filter"
        />
        <motion.div
          animate={{
            rotate: [0, 270, 360],
            borderRadius: ["50% 50% 40% 60% / 60% 40% 50% 50%", "40% 60% 50% 50% / 50% 50% 60% 40%", "50% 50% 40% 60% / 60% 40% 50% 50%"],
            scale: [1, 1.1, 1],
            x: [0, 20, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute left-[20%] top-[30%] h-[400px] w-[400px] bg-rose-200/50 mix-blend-multiply blur-[60px] filter"
        />
      </div>

      {/* Static Dark Mode Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.20),transparent)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4 inline-flex items-center rounded-full border border-brand-200/80 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
            Open to opportunities
          </motion.p>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m{' '}
            <motion.span
              className="inline-block text-gradient cursor-default"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sourav Kumar Khatai
            </motion.span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-2 text-xl font-medium text-brand-600 dark:text-brand-400 sm:text-2xl">
            SDE-1 · Java Backend · Cloud
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I build reliable backend services with Java + Spring Boot, deploy on AWS, and ship
            production-ready systems with observability, strong data modeling, and test-first practices.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('projects')}
              className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 dark:shadow-brand-900/40"
            >
              View projects
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('contact')}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500"
            >
              Get in touch
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
