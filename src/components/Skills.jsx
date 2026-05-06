import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const categoryAccents = {
  'Frontend': 'var(--purple)',
  'Backend': 'var(--blue)',
  'Database': 'var(--green)',
  'Other': '#f59e0b',
};

export default function Skills() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );
      gsap.fromTo('.skill-group',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div ref={headRef} style={{ marginBottom: '3.5rem', opacity: 0 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '0.75rem', fontWeight: 600 }}>
          Technical Skills
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
          Tools & Technologies<br />
          <span className="grad-green">I Work With.</span>
        </h2>
      </div>

      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
      }}>
        {skills.map(group => (
          <div
            key={group.category}
            className="skill-group"
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem',
              opacity: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: categoryAccents[group.category] || 'var(--purple)', display: 'block' }} />
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: categoryAccents[group.category] || 'var(--purple)',
              }}>
                {group.category}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.items.map(item => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
