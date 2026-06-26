import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';
import { useTheme } from '../context/ThemeContext';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const { dark } = useTheme();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_50%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="mb-4 inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400 backdrop-blur-md"
            >
              Open to opportunities
            </motion.p>

            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white leading-[1.1]"
            >
              Hi, I&apos;m{' '}
              <motion.span
                className="inline-block text-gradient cursor-default font-display"
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Sourav Kumar Khatai
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="mt-4 text-xl font-display font-medium text-brand-600 dark:text-brand-400 sm:text-2xl"
            >
              Software Engineer Apprentice
            </motion.p>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-sans"
            >
              I build reliable backend services with Java + Spring Boot, deploy on AWS, and ship
              production-ready systems with observability, strong data modeling, and test-first practices.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToId('projects')}
                className="rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 hover:brightness-110 transition duration-300"
              >
                View projects
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToId('contact')}
                className="rounded-xl border border-slate-300/80 bg-white/40 dark:bg-white/5 dark:border-slate-800 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:border-brand-500 dark:hover:border-brand-500"
              >
                Get in touch
              </motion.button>
              <motion.a
                href="./Sourav_Kumar_Khatai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-xl border border-slate-300/80 bg-white/40 dark:bg-white/5 dark:border-slate-800 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:border-brand-500 dark:hover:border-brand-500"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right 3D Canvas */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroCanvas dark={dark} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
