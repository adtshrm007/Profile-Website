import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const socialLinks = [
  { name: 'GitHub',   icon: '🐙', url: 'https://github.com/ragcoder' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Twitter',  icon: '🐦', url: '#' },
  { name: 'Discord',  icon: '💬', url: '#' },
];

function FloatingLabel({ label, type = 'text' }) {
  return (
    <div className="relative group w-full">
      <label className="absolute top-0 left-0 ml-5 mt-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/25 group-focus-within:text-blue-400 transition-colors duration-300 pointer-events-none z-10">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          className="w-full pt-8 pb-4 px-5 rounded-2xl glass-card border border-white/[0.06] text-white/80 text-sm placeholder:text-transparent focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.01] transition-all resize-none leading-relaxed"
        />
      ) : (
        <input
          type={type}
          className="w-full pt-8 pb-4 px-5 rounded-2xl glass-card border border-white/[0.06] text-white/80 text-sm placeholder:text-transparent focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.01] transition-all"
        />
      )}
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 25px rgba(59,130,246,0.07) inset' }} />
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1800);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background ambience */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600/[0.04] rounded-full blur-[160px]" />
      <div className="absolute top-[-10%]  left-[-5%]  w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[140px]" />

      <div className="section-inner relative z-10">
        <div className="flex flex-col items-center gap-20">
          <SectionHeader
            badge="Let's Talk"
            title="Start A"
            titleHighlight="Conversation"
            description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 w-full">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="relative glass-card border border-white/[0.06] rounded-[40px] p-10 sm:p-14 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-6 py-12 text-center"
                  >
                    <div className="text-6xl">✅</div>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">Message Sent!</h3>
                    <p className="text-white/40 text-sm max-w-sm leading-relaxed">I'll get back to you within 24 hours. Looking forward to connecting!</p>
                    <button onClick={() => setStatus('idle')} className="px-6 py-2.5 rounded-xl glass-card border border-white/[0.1] text-white/60 text-sm font-bold hover:text-white transition-colors">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FloatingLabel label="Full Name" type="text" />
                      <FloatingLabel label="Email Address" type="email" />
                    </div>
                    <FloatingLabel label="Subject" type="text" />
                    <FloatingLabel label="Your Message" type="textarea" />

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(59,130,246,0.35)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'sending'}
                      className="relative mt-4 w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold text-sm tracking-[0.1em] uppercase shadow-2xl shadow-blue-500/20 overflow-hidden group disabled:opacity-60"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={status === 'idle' ? 'group-hover:rotate-12 transition-transform' : 'animate-spin'}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      </span>
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right: Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Info cards */}
              {[
                { icon: '📧', label: 'Email', value: 'hello@ragcoder.com' },
                { icon: '📍', label: 'Location', value: 'Bangalore, India' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                  className="flex items-center gap-6 p-7 rounded-3xl glass-card border border-white/[0.05] hover:border-blue-500/25 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/25 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">{item.label}</div>
                    <div className="text-white font-semibold text-base font-['Space_Grotesk',sans-serif]">{item.value}</div>
                  </div>
                </motion.div>
              ))}

              {/* Social grid */}
              <div className="flex flex-col gap-5 mt-4">
                <p className="text-white/25 text-[10px] font-bold tracking-[0.25em] uppercase">Find Me Online</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.35)' }}
                      className="glass-card border border-white/[0.05] rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 group"
                    >
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                      <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-2 p-7 rounded-3xl border border-green-500/15 bg-green-500/[0.03] flex items-center gap-5"
              >
                <div className="relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400" />
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Currently available for{' '}
                  <span className="text-white font-bold">Summer 2025</span>{' '}
                  internships & freelance projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
