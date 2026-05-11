import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../ui/SectionHeader';
import { timeline } from '../../data/timeline';

gsap.registerPlugin(ScrollTrigger);

function TimelineCard({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center gap-0 mb-16 last:mb-0">
      {/* Left content or spacer */}
      <div className={`${isLeft ? 'flex justify-end' : 'hidden md:block'}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-md"
          >
            <TimelineContent item={item} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          className="relative z-20 w-14 h-14 rounded-2xl glass-card border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-blue-600/5 group"
        >
          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse-glow" />
          <span className="text-2xl relative z-10 group-hover:scale-125 transition-transform duration-300">
            {item.icon}
          </span>
        </motion.div>
      </div>

      {/* Right content or spacer */}
      <div className={`${!isLeft ? 'flex justify-start' : 'hidden md:block'}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-md"
          >
            <TimelineContent item={item} align="left" />
          </motion.div>
        )}
      </div>

      {/* Mobile: content always below */}
      <div className="md:hidden col-span-1 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TimelineContent item={item} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineContent({ item, align }) {
  return (
    <div
      className={`group glass-card border border-white/[0.06] rounded-[28px] p-8 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)] transition-all duration-500 relative overflow-hidden ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      {/* Subtle corner glow */}
      <div className={`absolute top-0 ${align === 'right' ? 'right-0' : 'left-0'} w-32 h-32 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all duration-500 rounded-full`} />

      <div className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} gap-3 relative z-10`}>
        <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.15em] uppercase">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif] tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
          {item.title}
        </h3>
        <p className="text-white/35 text-sm leading-[1.9] font-light">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#experience-list',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.8,
        }
      }
    );
  }, []);

  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/[0.015] rounded-full blur-[160px]" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col items-center gap-20">
          <SectionHeader
            badge="Journey"
            title="My Developer"
            titleHighlight="Timeline"
            description="From the first line of code to shipping production-grade applications — a chronicle of continuous growth."
          />

          <div id="experience-list" className="relative w-full max-w-5xl mx-auto">
            {/* Animated vertical line — desktop only */}
            <div className="absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-px bg-white/[0.04] rounded-full hidden md:block" />
            <div
              ref={lineRef}
              className="absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-px origin-top rounded-full hidden md:block z-10"
              style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4)' }}
            />

            {/* Mobile vertical line */}
            <div className="absolute left-[27px] top-7 bottom-7 w-px bg-white/[0.04] md:hidden" />

            {timeline.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
