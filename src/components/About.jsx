import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import profileImg from '../assets/profile.png';

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
          subtitle="Software Engineer Apprentice: Java backend engineering with AWS cloud fundamentals."
        />
        
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-center">
          
          {/* Left Column: Profile Picture */}
          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group max-w-sm overflow-hidden rounded-3xl p-2 bg-white/40 border border-white/60 shadow-lg dark:bg-[#0b0b22]/40 dark:border-white/5">
              {/* Glowing background ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-brand-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <img
                src={profileImg}
                alt="Sourav Kumar Khatai"
                className="relative rounded-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column: About Details Text */}
          <motion.div
            className="glassmorphism md:col-span-7 space-y-5 rounded-3xl p-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300 border border-white/10 dark:border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I&apos;m a backend developer who enjoys turning business requirements into stable,
              scalable services. I build APIs, database architectures, and distributed workflows
              that behave predictably under heavy load.
            </p>
            <p>
              Currently, as a <strong className="font-semibold text-orange-600 dark:text-brand-300">Software Engineer Apprentice at Nike</strong>, 
              I specialize in <strong className="font-semibold text-orange-600 dark:text-brand-300">Java</strong>, <strong className="font-semibold text-orange-600 dark:text-brand-300">Spring Boot</strong>, and microservice ecosystem migrations.
            </p>
            <p>
              I design systems with a focus on cloud availability (AWS), asynchronous messaging (Kafka), caching (Redis), and CI/CD automation. I build testable modules and set up proper observability so code can scale safely from dev to production.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
