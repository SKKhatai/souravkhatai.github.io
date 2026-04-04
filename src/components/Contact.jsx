import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const socials = [
  {
    label: 'Email',
    value: 'sourav.khatai@example.com',
    href: 'mailto:sourav.khatai@example.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
  },
  {
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
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
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Replace the placeholder links with your real profiles. The form is frontend-only."
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
              <li key={s.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-brand-600 transition hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {s.value}
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 lg:col-span-3"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none ring-brand-500/0 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  placeholder="Tell me about your project or role…"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
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
