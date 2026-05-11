import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const techStack = ['React', 'Node.js', 'MongoDB', 'GSAP', 'AI/ML', 'TypeScript'];

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-[420px] md:h-[560px]">
      {/* Ambient radial glows */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-600/10 blur-3xl animate-pulse-glow" />
      <div className="absolute w-[260px] h-[260px] rounded-full bg-purple-600/8 blur-3xl animate-pulse-glow delay-300" />

      {/* Concentric rings */}
      <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-blue-500/[0.08] animate-rotate-slow" />
      <div className="absolute w-[240px] h-[240px] md:w-[290px] md:h-[290px] rounded-full border border-purple-500/[0.08] animate-rotate-reverse" />
      <div className="absolute w-[164px] h-[164px] md:w-[200px] md:h-[200px] rounded-full border border-cyan-500/[0.08] animate-rotate" style={{ animationDuration: '22s' }} />

      {/* Orbiting dots */}
      <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px]" style={{ animation: 'rotate-ring 10s linear infinite' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/80" />
      </div>
      <div className="absolute w-[240px] h-[240px] md:w-[290px] md:h-[290px]" style={{ animation: 'rotate-ring-reverse 14s linear infinite' }}>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/80" />
      </div>
      <div className="absolute w-[164px] h-[164px] md:w-[200px] md:h-[200px]" style={{ animation: 'rotate-ring 22s linear infinite' }}>
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80" />
      </div>

      {/* Center orb */}
      <div className="relative z-10 w-[116px] h-[116px] md:w-[136px] md:h-[136px] rounded-full bg-gradient-to-br from-blue-600/25 via-purple-600/25 to-cyan-600/25 backdrop-blur-xl border border-white/[0.1] flex items-center justify-center shadow-2xl shadow-blue-500/15">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-2xl tracking-tighter shadow-inner font-['Space_Grotesk',sans-serif]">
          RC
        </div>
      </div>

      {/* Floating Code Card — desktop only */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-0 md:-right-4 w-[200px] md:w-[220px] glass-card rounded-2xl p-4 shadow-2xl shadow-black/40 hidden md:block border border-white/[0.06]"
      >
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <div className="w-2 h-2 rounded-full bg-green-400/80" />
          <span className="ml-auto text-white/20 text-[9px] font-['JetBrains_Mono',monospace]">ai.js</span>
        </div>
        <div className="space-y-1 font-['JetBrains_Mono',monospace] text-[9px] leading-[1.7]">
          <div><span className="text-purple-400">const</span> <span className="text-blue-300">res</span> <span className="text-white/50">=</span> <span className="text-yellow-400">await</span></div>
          <div className="pl-2"><span className="text-cyan-400">openai</span><span className="text-white/40">.chat({"{"}</span></div>
          <div className="pl-4"><span className="text-white/40">model: </span><span className="text-green-400">"gpt-4o"</span><span className="text-white/30">,</span></div>
          <div className="pl-4"><span className="text-white/30">messages:</span> <span className="text-white/20">[...]</span></div>
          <div className="pl-2"><span className="text-white/30">{"}"});</span></div>
        </div>
        <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400/70 text-[9px] font-['JetBrains_Mono',monospace]">Response OK · 312ms</span>
        </div>
      </motion.div>

      {/* Floating Stats Card — desktop only */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0.5, -0.5, 0.5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-10 left-0 md:-left-4 w-[156px] glass-card rounded-2xl p-4 shadow-2xl shadow-black/40 hidden md:block border border-white/[0.06]"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center text-xs">📊</div>
          <span className="text-white/50 text-[10px] font-semibold tracking-wide">Live Stats</span>
        </div>
        <div className="flex items-end gap-1 h-9">
          {[35, 58, 42, 76, 50, 88, 65].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm transition-colors"
              style={{ height: `${h}%`, background: `rgba(59,130,246,${0.2 + i * 0.05})` }} />
          ))}
        </div>
        <p className="text-green-400/80 text-[9px] mt-2 font-['JetBrains_Mono',monospace]">+24.5% · this month</p>
      </motion.div>

      {/* Available badge — desktop only */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-10 left-0 md:left-4 hidden md:flex items-center gap-2 px-3 py-2 rounded-full glass-card border border-white/[0.07]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-white/60 text-[10px] font-semibold tracking-wide">Available for hire</span>
      </motion.div>

      {/* Floating tech badges */}
      {[
        { label: 'React', color: '#61DAFB', x: -130, y: -30 },
        { label: 'AI/ML', color: '#a78bfa', x: 130, y: -55 },
        { label: 'Node.js', color: '#4DB33D', x: 145, y: 50 },
        { label: 'GSAP', color: '#88CE02', x: -140, y: 60 },
      ].map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-card border border-white/[0.06] text-[10px] font-semibold"
          style={{
            color: badge.color,
            top: `calc(50% + ${badge.y}px)`,
            left: `calc(50% + ${badge.x}px)`,
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: badge.color }} />
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const tagsRef = useRef(null);
  const statsRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headlineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .fromTo(subRef.current,      { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo(descRef.current,     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .fromTo(btnsRef.current,     { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.35')
      .fromTo(tagsRef.current,     { opacity: 0 },        { opacity: 1, duration: 0.5 }, '-=0.2')
      .fromTo(statsRef.current,    { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
  }, []);

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Mouse follow spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.05), transparent 65%)`,
        }}
      />

      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-5%]  w-[500px] h-[500px] rounded-full bg-blue-700/[0.05]  blur-[120px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-700/[0.05] blur-[120px] animate-blob delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-700/[0.03] blur-[100px] animate-blob delay-700" />

      {/* Content */}
      <div className="section-inner relative z-10 w-full pt-32 pb-24 lg:pt-0 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center min-h-screen">

        {/* ── Left ── */}
        <div className="flex flex-col gap-10 order-2 lg:order-1 items-center text-center lg:items-start lg:text-left">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-white/[0.08] text-[11px] font-semibold text-white/50 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Full Stack · AI Engineering · 2025
          </motion.div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="opacity-0 text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.06] tracking-[-0.02em] font-['Space_Grotesk',sans-serif]"
          >
            Building{' '}
            <span className="gradient-text">AI-Powered</span>
            <br />
            Digital{' '}
            <span className="text-white">Experiences</span>
          </h1>

          {/* Role tags */}
          <div ref={subRef} className="opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
            {['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'].map((tag, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/15 text-base">·</span>}
                <span className="text-white/55 font-medium text-base">{tag}</span>
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="opacity-0 text-white/38 text-[1.05rem] leading-[1.75] font-light max-w-[480px]"
          >
            I craft modern, scalable web applications that fuse full stack engineering,
            AI integrations, and exceptional frontend experiences into one seamless product.
          </p>

          {/* CTA Buttons */}
          <div ref={btnsRef} className="opacity-0 flex flex-wrap justify-center lg:justify-start gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 35px rgba(59,130,246,0.55)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#projects')}
              className="relative overflow-hidden px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/20 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, borderColor: 'rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 rounded-2xl glass-card border border-white/[0.1] text-white/75 font-semibold text-sm hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Tech chips */}
          <div ref={tagsRef} className="opacity-0 flex flex-wrap justify-center lg:justify-start gap-2">
            {techStack.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[11px] font-medium text-white/35 border border-white/[0.07] hover:border-blue-500/30 hover:text-white/65 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats strip */}
          <div
            ref={statsRef}
            className="opacity-0 w-full flex justify-center lg:justify-start gap-8 pt-5 border-t border-white/[0.06]"
          >
            {[
              { value: '3+',  label: 'Projects' },
              { value: '2nd', label: 'Year Student' },
              { value: '∞',   label: 'To Build' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] font-bold gradient-text font-['Space_Grotesk',sans-serif] leading-none">{stat.value}</span>
                <span className="text-white/30 text-xs font-light mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/18 text-[10px] tracking-[0.25em] uppercase font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
