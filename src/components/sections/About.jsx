import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionHeader from '../ui/SectionHeader';
import { techBadges } from '../../data/skills';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5,   suffix: '+',  label: 'Projects Shipped', icon: '🚀' },
  { value: 300, suffix: '+',  label: 'GitHub Commits',   icon: '⚡' },
  { value: 15,  suffix: '+',  label: 'Technologies',     icon: '🛠️' },
  { value: 100, suffix: '+',  label: 'Users Reached',    icon: '👥' },
];

const highlights = [
  { icon: '🎓', title: 'Background',         text: '2nd-year engineering student specialising in Full Stack & AI systems.' },
  { icon: '💡', title: 'Philosophy',          text: 'Passionate about building scalable products that solve real problems with elegant UI/UX.' },
  { icon: '🚀', title: 'Mission',             text: 'Actively seeking high-impact SaaS and AI opportunities where I can make a difference.' },
  { icon: '🧠', title: 'Continuous Growth',   text: 'Deep-diving into DSA, system design, LLM orchestration, and advanced AI integrations.' },
];

function FloatingBadge({ badge, angle, radius }) {
  const rad = (angle * Math.PI) / 180;
  const x   = Math.cos(rad) * radius;
  const y   = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border text-[10px] font-bold whitespace-nowrap z-20"
      style={{
        color: badge.color,
        background: `${badge.color}10`,
        borderColor: `${badge.color}28`,
        top: '50%',
        left: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
      animate={{ y: [y, y - 7, y] }}
      transition={{ duration: 3.5 + angle * 0.01, repeat: Infinity, ease: 'easeInOut', delay: angle * 0.02 }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: badge.color }} />
      {badge.label}
    </motion.div>
  );
}

function ProfileVisual() {
  const angles  = [0, 60, 120, 180, 240, 300];
  const radius  = 160;

  return (
    <div className="relative flex items-center justify-center w-full h-[440px]">
      {/* Ambient glows */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-blue-600/[0.07] blur-3xl animate-pulse-glow" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-purple-600/[0.05] blur-3xl animate-pulse-glow delay-300" />

      {/* Rotating rings */}
      <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/[0.08] animate-rotate-slow" />
      <div className="absolute w-[230px] h-[230px] rounded-full border border-purple-500/[0.06] animate-rotate-reverse" />
      <div className="absolute w-[165px] h-[165px] rounded-full border border-cyan-500/[0.06] animate-rotate" style={{ animationDuration: '22s' }} />

      {/* Orbiting dots */}
      <div className="absolute w-[300px] h-[300px]" style={{ animation: 'rotate-ring 12s linear infinite' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/80" />
      </div>
      <div className="absolute w-[230px] h-[230px]" style={{ animation: 'rotate-ring-reverse 16s linear infinite' }}>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/80" />
      </div>

      {/* Avatar */}
      <div className="relative z-10 w-[140px] h-[140px] rounded-full group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-cyan-600/25 blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="relative w-full h-full rounded-full glass-card border border-white/[0.12] overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-500/10">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-slate-900/70 flex flex-col items-center justify-center gap-1">
            <span className="text-5xl">👨‍💻</span>
            <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">Engineer</span>
          </div>
          {/* Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      {/* Floating tech badges */}
      {techBadges.map((badge, i) => (
        <FloatingBadge key={badge.label} badge={badge} angle={angles[i % angles.length]} radius={radius} />
      ))}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-highlight',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#about-content',
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4   right-[-8%] w-[400px] h-[400px] bg-blue-600/[0.025]   rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 left-[-8%]  w-[400px] h-[400px] bg-purple-600/[0.025] rounded-full blur-[120px] animate-blob delay-500" />

      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <ProfileVisual />
          </motion.div>

          {/* Text content */}
          <div id="about-content" className="order-1 lg:order-2 flex flex-col gap-12 text-center lg:text-left items-center lg:items-start">
            <SectionHeader
              badge="About Me"
              title="The Mind"
              titleHighlight="Behind the Code"
              centered={false}
            />

            <div className="flex flex-col gap-5 w-full">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="about-highlight opacity-0 flex items-start gap-6 p-7 rounded-3xl glass-card border border-white/[0.05] hover:border-blue-500/25 hover:bg-blue-500/[0.015] transition-all duration-400 group"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 group-hover:border-blue-500/20 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <h4 className="text-white font-bold text-[0.95rem] font-['Space_Grotesk',sans-serif]">{item.title}</h4>
                    <p className="text-white/35 text-sm leading-[1.8] font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-black font-bold text-sm tracking-widest uppercase shadow-xl shadow-white/5"
              >
                📄 Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-2xl glass-card border border-white/[0.1] text-white/60 font-bold text-sm tracking-widest uppercase hover:text-white hover:border-white/20 transition-all"
              >
                My Journey →
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group glass-card border border-white/[0.05] rounded-3xl p-8 text-center hover:border-blue-500/30 transition-all duration-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-400">{stat.icon}</span>
                <div className="text-3xl sm:text-4xl font-bold gradient-text font-['Space_Grotesk',sans-serif] leading-none">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/28 text-[10px] font-bold tracking-[0.2em] uppercase leading-tight">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
