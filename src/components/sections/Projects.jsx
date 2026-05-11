import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { projects } from '../../data/projects';

function BrowserMockup({ accentColor }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/50 bg-[#080d1f]">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-[#0f1629] border-b border-white/[0.04] flex items-center px-4 gap-2 z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
        </div>
        <div className="flex-1 mx-4">
          <div className="w-32 h-3 rounded-md bg-white/[0.04] mx-auto" />
        </div>
      </div>

      {/* Mock content */}
      <div className="absolute inset-0 pt-9 p-4 flex flex-col gap-3">
        {/* Hero row */}
        <div className="flex gap-3 flex-1">
          <div
            className="flex-1 rounded-xl border"
            style={{
              background: `linear-gradient(135deg, ${accentColor}12, transparent)`,
              borderColor: `${accentColor}18`,
            }}
          />
          <div className="w-1/3 flex flex-col gap-3">
            <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.03]" />
            <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.03]" />
          </div>
        </div>
        {/* Cards row */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-lg border"
              style={{
                background: `${accentColor}${['08', '06', '04'][i]}`,
                borderColor: `${accentColor}15`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30 backdrop-blur-sm"
        style={{ background: `${accentColor}18` }}
      >
        <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md">
          View Project
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group/card flex flex-col glass-card border border-white/[0.06] rounded-[36px] overflow-hidden hover:border-blue-500/30 hover:shadow-[0_0_60px_rgba(59,130,246,0.08)] transition-all duration-500 h-full"
    >
      {/* Mockup */}
      <div className="p-5 pb-0">
        <BrowserMockup accentColor={project.accentColor} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-6 p-8 pt-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif] group-hover/card:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: project.accentColor, boxShadow: `0 0 8px ${project.accentColor}` }}
            />
            <span className="text-[10px] font-bold text-white/25 tracking-widest uppercase">{project.status}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/35 text-sm leading-[1.85] font-light flex-1">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {project.highlights.map(tag => (
            <span
              key={tag}
              className="text-[9px] font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 tracking-wide"
              style={{
                color: `${project.accentColor}cc`,
                background: `${project.accentColor}0c`,
                borderColor: `${project.accentColor}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl glass-card border border-white/[0.08] text-white/50 text-xs font-bold hover:text-white hover:border-white/20 transition-all tracking-widest uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white text-xs font-bold transition-all tracking-widest uppercase shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}aa)`,
              boxShadow: `0 8px 24px ${project.accentColor}25`,
            }}
          >
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col items-center gap-20">
          <SectionHeader
            badge="Portfolio"
            title="Featured"
            titleHighlight="Innovations"
            description="A selection of high-end projects showcasing my ability to transform complex ideas into seamless, polished digital products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 w-full">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* View all CTA */}
          <motion.a
            href="https://github.com/ragcoder"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl glass-card border border-white/[0.08] text-white font-bold text-sm tracking-widest uppercase hover:bg-white/[0.03] hover:border-white/[0.15] transition-all group"
          >
            <span className="text-xl">🐙</span>
            Explore Full Repository
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
