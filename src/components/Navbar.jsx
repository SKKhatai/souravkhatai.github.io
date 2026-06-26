import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'api', label: 'API' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Magnetic Button Wrapper
function MagneticButton({ children, onClick, className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Intersection Observer for Active Links
    const observers = [];
    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(link.id);
              }
            });
          },
          { rootMargin: '-40% 0px -40% 0px' }
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[60] dark:bg-brand-500"
        style={{ scaleX }}
      />

      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled
            ? 'border-b border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-black/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <MagneticButton
            onClick={() => scrollToId('hero')}
            className="font-display text-lg font-semibold text-slate-900 transition hover:text-orange-600 dark:text-white dark:hover:text-brand-400"
          >
            SKK
          </MagneticButton>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <MagneticButton
                  onClick={() => scrollToId(link.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeSection === link.id
                      ? 'text-orange-600 dark:text-brand-400'
                      : 'text-slate-600 hover:text-orange-600 dark:text-slate-300 dark:hover:text-brand-300'
                  }`}
                >
                  {link.label}
                </MagneticButton>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-600 dark:bg-brand-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <MagneticButton
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/70 text-slate-700 backdrop-blur-sm transition hover:border-orange-300 hover:text-orange-600 dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-600"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </MagneticButton>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur-sm md:hidden dark:border-slate-800/60 dark:bg-white/5"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            className="border-t border-slate-200/60 bg-white/80 px-4 py-4 backdrop-blur-md md:hidden dark:border-slate-800/60 dark:bg-black/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToId(link.id);
                      setOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium ${
                      activeSection === link.id
                        ? 'bg-orange-50 text-orange-700 dark:bg-slate-800 dark:text-brand-300'
                        : 'text-slate-700 hover:bg-orange-50 hover:text-orange-700 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
