import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { thinking } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Thinking() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );

      gsap.fromTo('.think-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.think-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="thinking" ref={sectionRef} className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div ref={headRef} style={{ marginBottom: '3.5rem', opacity: 0 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem', fontWeight: 600 }}>
          Problem-Solving Approach
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
          How I Think<br />
          <span className="grad-purple">& Solve Problems.</span>
        </h2>
      </div>

      <div className="think-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.2rem',
      }}>
        {thinking.map((t, i) => (
          <div key={t.title} className="think-card" style={{ opacity: 0 }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{t.icon}</div>
            <p style={{
              fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--blue)', fontWeight: 700, marginBottom: '0.5rem',
            }}>
              Step {String(i + 1).padStart(2, '0')}
            </p>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
              {t.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
