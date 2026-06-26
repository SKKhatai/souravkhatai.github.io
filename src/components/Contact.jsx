import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const socials = [
  {
    label: 'Email',
    value: 'souravkhatai6@gmail.com',
    href: 'mailto:souravkhatai6@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sourav-kumar-khatai/',
  },
  {
    label: 'GitHub',
    value: 'GitHub',
    href: 'https://github.com/SKKhatai',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's connect"
          subtitle=" Demo form is not sending data anywhere."
        />
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          <motion.ul
            className="space-y-4 lg:col-span-2"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {socials.map((s) => (
              <motion.li
                key={s.label}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-orange-600 transition hover:text-orange-800 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {s.value}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.form
            className="glassmorphism rounded-3xl p-6 lg:col-span-3 border border-white/10 dark:border-white/5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-slate-900 outline-none ring-orange-500/0 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 dark:border-slate-800/70 dark:bg-white/5 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 dark:border-slate-800/70 dark:bg-white/5 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 dark:border-slate-800/70 dark:bg-white/5 dark:text-white"
                  placeholder="Tell me about your project or role…"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-600/20 hover:bg-orange-700 dark:bg-brand-600 dark:shadow-brand-600/20 dark:hover:bg-brand-700"
              >
                Send message
              </motion.button>
              {submitted && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
                  Thanks — this demo form doesn&apos;t send data anywhere.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
