import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="section-inner flex items-center justify-between">

        {/* ── Logo ── */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollTo('#home')}
          className="relative group flex items-center gap-2.5"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-[11px] font-black text-white shadow-lg shadow-blue-500/30">
            RC
          </div>
          <span className="relative text-[1.1rem] font-bold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Rag<span className="gradient-text">Coder</span>
          </span>
        </motion.button>

        {/* ── Desktop Nav pill ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex items-center gap-1 p-1.5 glass border border-white/[0.07] rounded-2xl shadow-2xl shadow-black/30"
        >
          {navLinks.map(({ name, href }) => {
            const isActive = activeSection === href.replace('#', '');
            return (
              <button
                key={name}
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 rounded-[14px] text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 rounded-[14px] bg-white/[0.07] border border-white/[0.1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </button>
            );
          })}
        </motion.nav>

        {/* ── Desktop CTA ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex items-center gap-3"
        >
          <motion.a
            href="https://github.com/ragcoder"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-lg hover:border-blue-500/30 hover:bg-blue-500/[0.06] transition-all duration-300 shadow-xl shadow-black/20"
          >
            🐙
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('#contact')}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-[11px] tracking-[0.15em] uppercase shadow-xl shadow-white/5"
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="w-6 h-[2px] bg-white rounded-full origin-center"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
            className="w-5 h-[2px] bg-white/60 rounded-full"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="w-6 h-[2px] bg-white rounded-full origin-center"
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-[calc(100%+8px)] left-6 right-6 lg:hidden"
          >
            <div className="glass-card border border-white/[0.08] rounded-3xl p-8 shadow-2xl shadow-black/50 flex flex-col items-center gap-5">
              {navLinks.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => scrollTo(href)}
                  className={`text-base font-bold tracking-[0.1em] uppercase transition-colors ${
                    activeSection === href.replace('#', '') ? 'text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
              <div className="h-px w-full bg-white/[0.05]" />
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-widest uppercase"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
