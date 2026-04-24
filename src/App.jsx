import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Fluid Background (Light Mode) / Dark Mode Default */}
      <div className="fixed inset-0 -z-20 w-screen h-screen bg-gradient-to-br from-orange-50 via-amber-50/50 to-orange-100/80 dark:bg-slate-950 dark:bg-none transition-colors duration-300 pointer-events-none">
        {/* Animated Lava Lamp Blobs (Only visible in light mode, hidden in dark mode) */}
        <div className="absolute inset-0 overflow-hidden dark:hidden">
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-300/40 mix-blend-multiply blur-[60px]"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              x: [0, 50, -20, 0],
              y: [0, -40, 30, 0],
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 50% 50% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-amber-300/40 mix-blend-multiply blur-[60px]"
            animate={{
              rotate: [360, 270, 180, 90, 0],
              x: [0, -60, 40, 0],
              y: [0, 50, -30, 0],
              borderRadius: [
                "50% 50% 40% 60% / 60% 40% 50% 50%",
                "40% 60% 60% 40% / 50% 60% 40% 50%",
                "60% 40% 50% 50% / 40% 50% 60% 40%",
                "50% 50% 40% 60% / 60% 40% 50% 50%",
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] bg-rose-200/50 mix-blend-multiply blur-[60px]"
            animate={{
              rotate: [0, -90, -180, -270, -360],
              x: [0, 30, -50, 0],
              y: [0, -60, 20, 0],
              borderRadius: [
                "60% 40% 50% 50% / 40% 50% 60% 40%",
                "50% 50% 40% 60% / 60% 40% 50% 50%",
                "40% 60% 60% 40% / 50% 60% 40% 50%",
                "60% 40% 50% 50% / 40% 50% 60% 40%",
              ],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-slate-200/80 bg-white/30 backdrop-blur-md py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Sourav Kumar Khatai</p>
      </footer>
    </div>
  );
}
