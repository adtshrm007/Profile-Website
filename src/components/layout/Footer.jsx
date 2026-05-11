import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/ragcoder', icon: '🐙' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Twitter',  href: '#', icon: '🐦' },
  { label: 'Discord',  href: '#', icon: '💬' },
];

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-blue-600/[0.04] blur-3xl rounded-full" />

      <div className="section-inner relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-blue-500/20">
                RC
              </div>
              <span className="font-bold text-white text-lg font-['Space_Grotesk',sans-serif]">
                Rag<span className="gradient-text">Coder</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed font-light">
              Full Stack & AI Engineer crafting premium digital experiences with code and creativity.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass-card border border-white/[0.06] flex items-center justify-center text-base hover:border-blue-500/30 hover:bg-blue-500/[0.06] transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase">Navigation</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((name) => (
                <button
                  key={name}
                  onClick={() => scrollTo(name)}
                  className="text-left text-white/40 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-blue-400 transition-all duration-300" />
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact snippet */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm">📧</div>
                <span className="text-white/40 text-sm">hello@ragcoder.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm">📍</div>
                <span className="text-white/40 text-sm">Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-green-400 text-sm font-semibold">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-widest uppercase font-light">
            Built with React · GSAP · Framer Motion
          </p>
          <p className="text-white/20 text-xs font-light">
            Designed & Engineered by{' '}
            <span className="gradient-text font-semibold">RagCoder</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
