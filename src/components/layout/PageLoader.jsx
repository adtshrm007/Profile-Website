import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: onComplete,
          });
        }, 300);
      }
    });

    tl.fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .to(barRef.current, {
      width: '100%',
      duration: 1.6,
      ease: 'power2.inOut',
    }, 0.3)
    .to(percentRef.current, {
      innerText: 100,
      snap: { innerText: 1 },
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: function () {
        if (percentRef.current) {
          percentRef.current.textContent = Math.round(this.targets()[0]._gsap?.innerText || 0) + '%';
        }
      }
    }, 0.3);
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="page-loader">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div ref={textRef} className="flex flex-col items-center gap-4 opacity-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-blue-500/40 animate-pulse-glow">
            RC
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif]">
              Rag<span className="gradient-text">Coder</span>
            </h1>
            <p className="text-white/40 text-sm mt-1 tracking-widest uppercase font-light">Portfolio</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 flex flex-col gap-3">
          <div className="w-full h-px bg-white/[0.08] rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full rounded-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/30 text-xs tracking-widest uppercase">Loading</span>
            <span ref={percentRef} className="text-white/50 text-xs font-mono">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
