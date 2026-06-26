import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeSkills } from '../data/resumeData';

// Accent theme colors per category for glowing border/shadow effects
const categoryGlows = {
  'Backend & Databases': 'hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-500/40 border-purple-500/10 dark:border-purple-500/10',
  'Frontend Development': 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 border-cyan-500/10 dark:border-cyan-500/10',
  'Cloud, DevOps & Tools': 'hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:border-rose-500/40 border-rose-500/10 dark:border-rose-500/10',
  'CS Fundamentals & Methods': 'hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-500/40 border-amber-500/10 dark:border-amber-500/10',
};

const categoryBadgeGlows = {
  'Backend & Databases': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Frontend Development': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Cloud, DevOps & Tools': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'CS Fundamentals & Methods': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const marqueeSkills = [
  'Java', 'Spring Boot', 'React', 'AWS', 'Docker', 'PostgreSQL', 
  'Tailwind CSS', 'Git', 'REST APIs', 'Microservices', 'Hibernate', 
  'SQL', 'Observability', 'Splunk', 'CI/CD', 'Jenkins'
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-200/40 py-20 dark:border-slate-800/40 sm:py-24"
    >
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite;
        }
        .marquee-container:hover .marquee-inner {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tools & Technologies"
          subtitle="A comprehensive overview of my technical capabilities spanning backend systems, cloud, and frontend rendering."
        />

        {/* 1. INFINITE SCROLLING MARQUEE */}
        <div className="mb-16 overflow-hidden relative w-full py-4 select-none">
          {/* Subtle overlay gradients to fade out edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#03030f] to-transparent z-10 pointer-events-none hidden dark:block" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#03030f] to-transparent z-10 pointer-events-none hidden dark:block" />
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f6f8fd] to-transparent z-10 pointer-events-none dark:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f6f8fd] to-transparent z-10 pointer-events-none dark:hidden" />

          {/* Marquee Row 1 (Left to Right) */}
          <div className="marquee-container flex overflow-hidden w-full mb-4">
            <div className="marquee-inner flex gap-6 animate-marquee-ltr whitespace-nowrap">
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <div
                  key={`m1-${skill}-${index}`}
                  className="glassmorphism inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-800 dark:text-white hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right to Left) */}
          <div className="marquee-container flex overflow-hidden w-full">
            <div className="marquee-inner flex gap-6 animate-marquee-rtl whitespace-nowrap">
              {[...marqueeSkills, ...marqueeSkills].reverse().map((skill, index) => (
                <div
                  key={`m2-${skill}-${index}`}
                  className="glassmorphism inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-800 dark:text-white hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-300"
                >
                  <span className="h-2 w-2 rounded-full bg-cyber-cyan" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. CATEGORIZED INTERACTIVE GRID */}
        <motion.div
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {resumeSkills.map((group) => {
            const glowClass = categoryGlows[group.category] || '';
            const badgeClass = categoryBadgeGlows[group.category] || '';
            
            return (
              <motion.section
                key={group.category}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                }}
                className={`glassmorphism rounded-3xl p-6 border transition-all duration-500 hover:-translate-y-1.5 ${glowClass}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 opacity-60">
                    {group.items.length} skills
                  </span>
                </div>
                
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((name) => (
                    <motion.li
                      key={name}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className={`inline-flex rounded-xl border px-3 py-2 text-xs font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 cursor-default ${badgeClass}`}
                    >
                      {name}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
