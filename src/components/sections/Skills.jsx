import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { skills } from '../../data/skills';

const categoryConfig = {
  frontend: { label: 'Frontend',  color: '#3b82f6', glow: '#3b82f620', icon: '🎨' },
  backend:  { label: 'Backend',   color: '#8b5cf6', glow: '#8b5cf620', icon: '⚙️' },
  ai:       { label: 'AI & Tools',color: '#06b6d4', glow: '#06b6d420', icon: '🤖' },
};

function SkillCard({ skill, color, glow, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass-card border border-white/[0.05] rounded-3xl p-6 flex flex-col items-center gap-5 transition-all duration-400 hover:border-blue-500/25 overflow-hidden"
    >
      {/* Hover background glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl"
        style={{ background: `radial-gradient(circle at 50% 30%, ${glow}, transparent 70%)` }}
      />

      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border border-white/[0.05]"
        style={{ background: `${color}10`, borderColor: `${color}20` }}
      >
        {skill.icon}
      </motion.div>

      {/* Name */}
      <div className="relative z-10 w-full text-center">
        <h4 className="text-white font-bold text-sm mb-4 font-['Space_Grotesk',sans-serif] tracking-tight">{skill.name}</h4>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'circOut', delay: 0.3 + index * 0.04 }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}cc, ${color})`,
              boxShadow: `0 0 12px ${color}60`,
            }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[9px] font-bold text-white/20 tracking-widest uppercase">
          <span>Proficiency</span>
          <span style={{ color: `${color}90` }}>{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col items-center gap-16">
          <SectionHeader
            badge="Expertise"
            title="Professional"
            titleHighlight="Skillset"
            description="A curated toolkit of modern technologies I use to architect high-performance, visually stunning digital solutions."
          />

          {/* Category tab switcher */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {Object.entries(categoryConfig).map(([key, cfg]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === key
                    ? 'text-white'
                    : 'text-white/35 border-white/[0.06] hover:text-white/60 hover:border-white/[0.1]'
                }`}
                style={
                  activeCategory === key
                    ? {
                        background: `${cfg.color}15`,
                        borderColor: `${cfg.color}40`,
                        boxShadow: `0 0 20px ${cfg.color}20`,
                      }
                    : {}
                }
              >
                <span className="text-base leading-none">{cfg.icon}</span>
                {cfg.label}
              </motion.button>
            ))}
          </div>

          {/* Skill Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-7 w-full"
            >
              {skills[activeCategory].map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={categoryConfig[activeCategory].color}
                  glow={categoryConfig[activeCategory].glow}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Learning path banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-card border border-white/[0.05] rounded-[32px] p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                  Currently Learning
                </span>
                <h3 className="text-white font-bold text-2xl font-['Space_Grotesk',sans-serif] tracking-tight">
                  LLM Orchestration & AI Agents
                </h3>
                <p className="text-white/30 text-sm font-light">
                  Building with LangChain, RAG pipelines, and multi-agent systems.
                </p>
              </div>
              <div className="flex-1 w-full max-w-sm">
                <div className="flex justify-between text-[10px] font-bold text-white/25 tracking-widest uppercase mb-3">
                  <span>Progress</span>
                  <span className="text-blue-400">72%</span>
                </div>
                <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '72%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: 'circOut', delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
