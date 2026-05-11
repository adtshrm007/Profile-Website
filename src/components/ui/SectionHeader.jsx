import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, titleHighlight, description, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/[0.06] text-[11px] font-bold text-blue-400 tracking-[0.2em] uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
          </span>
          {badge}
        </div>
      )}
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1] font-['Space_Grotesk',sans-serif] text-white"
      >
        {title}{' '}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {description && (
        <p className={`text-white/40 text-[1.05rem] leading-[1.8] font-light ${centered ? 'max-w-2xl' : 'max-w-lg'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
