import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/timeline';

const featureMap = {
  'Modern Frontend Development': ['Pixel-perfect UI', 'GSAP Animations', 'Responsive Design'],
  'MERN Stack Applications':     ['REST API Design', 'MongoDB Schemas', 'Auth & Security'],
  'AI Integrated Web Apps':      ['OpenAI Integration', 'Prompt Engineering', 'Smart UX'],
  'SaaS Dashboard Development':  ['Data Visualization', 'Real-time Updates', 'Bento Layouts'],
  'Portfolio Websites':          ['Premium Design', 'Recruiter Focused', 'Fully Animated'],
  'UI/UX Focused Development':   ['Micro-interactions', 'Accessible Code', 'Design Systems'],
};

function ServiceCard({ service, index }) {
  const features = featureMap[service.title] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative h-full"
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.color}60, ${service.color}20, transparent)`,
        }}
      />

      <div className="relative h-full glass-card border border-white/[0.06] rounded-[31px] p-9 sm:p-10 flex flex-col gap-7 overflow-hidden">
        {/* Decorative number */}
        <span className="absolute -top-4 -right-2 text-[100px] font-black text-white/[0.015] select-none pointer-events-none font-['Space_Grotesk',sans-serif] leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Top row: icon + title */}
        <div className="flex flex-col gap-5 relative z-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_var(--glow)] border"
            style={{
              '--glow': `${service.color}40`,
              background: `${service.color}12`,
              borderColor: `${service.color}25`,
            }}
          >
            {service.icon}
          </div>

          <div>
            <h3
              className="text-[1.2rem] font-bold text-white font-['Space_Grotesk',sans-serif] leading-snug mb-2 group-hover:transition-colors duration-300"
              style={{ '--hover-color': service.color }}
            >
              {service.title}
            </h3>
            <p className="text-white/35 text-sm leading-[1.9] font-light">
              {service.description}
            </p>
          </div>
        </div>

        {/* Feature list */}
        {features.length > 0 && (
          <div className="flex flex-col gap-2.5 pt-6 border-t border-white/[0.04] relative z-10 mt-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: service.color, opacity: 0.6 }}
                />
                <span className="text-white/30 text-[11px] font-bold tracking-widest uppercase">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col items-center gap-20">
          <SectionHeader
            badge="Services"
            title="What I Can"
            titleHighlight="Build For You"
            description="Full-spectrum engineering services — from concept to deployment — crafted with precision and passion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl glass-card border border-white/[0.06] rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-purple-600/[0.03]" />
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="text-4xl">🤝</div>
              <h4 className="text-white font-bold text-2xl font-['Space_Grotesk',sans-serif] tracking-tight">
                Have a unique project in mind?
              </h4>
              <p className="text-white/35 text-sm font-light max-w-md leading-relaxed">
                I'm always open to exploring custom challenges where my engineering background can make a real difference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-widest uppercase shadow-xl shadow-white/5"
              >
                Let's Collaborate
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
