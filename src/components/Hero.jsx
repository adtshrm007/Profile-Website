import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalInfo, badges } from '../data/portfolio';

function splitText(text) {
  return text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
      {word.split('').map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.1em', marginTop: '-0.1em' }}>
          <span className="char" style={{ display: 'inline-block', transform: 'translateY(110%)' }}>
            {char}
          </span>
        </span>
      ))}
    </span>
  ));
}

export default function Hero() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const infoRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const chars1 = nameRef.current.querySelectorAll('.char');
    const chars2 = roleRef.current.querySelectorAll('.char');

    const tl = gsap.timeline();

    tl.to([...chars1, ...chars2], {
      y: '0%',
      duration: 1.2,
      stagger: 0.03,
      ease: 'power4.out',
      delay: 0.2,
    })
    .fromTo(infoRef.current.children, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );

    const blob = sectionRef.current.querySelector('.hero-blob');
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      gsap.to(blob, { x, y, duration: 1.5, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
      className="flex flex-col justify-center px-6 md:px-[8vw] py-[15vh] md:py-[20vh]"
    >
      <div
        className="hero-blob"
        style={{
          position: 'absolute',
          top: '20%', right: '10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(232,255,139,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <div className="grid grid-cols-1 gap-8 md:gap-12 w-full max-w-[1400px] mx-auto">
        <div className="max-w-[900px]">
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--clr-text)',
            }}
          >
            <div ref={nameRef}>{splitText(personalInfo.name)}</div>
            <div ref={roleRef} style={{ color: 'var(--clr-accent)', marginTop: '0.2rem' }}>{splitText(personalInfo.role)}</div>
          </h1>
        </div>

        <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', maxWidth: '550px' }}>
          <p style={{
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--clr-muted)',
            fontWeight: 500,
          }}>
            {personalInfo.tagline}
          </p>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: 'var(--clr-text)',
            opacity: 0.8,
            fontWeight: 300,
          }}>
            {personalInfo.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', paddingTop: '0.5rem' }}>
            {badges.map((badge, i) => (
              <span key={i} className="badge" style={{ padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.03)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--clr-accent)', boxShadow: '0 0 10px var(--clr-accent)' }} />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div ref={ctaRef} style={{ marginTop: '1rem' }}>
          <a href="#work" className="btn-magnetic" style={{ background: 'var(--clr-accent)', color: '#000', borderColor: 'var(--clr-accent)', padding: '1.2rem 2.5rem', fontWeight: 500 }}>
            View Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '1rem' }}>
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '8vh', right: '5vw',
          display: 'flex', alignItems: 'center', gap: '1.5rem',
          transform: 'rotate(90deg)', transformOrigin: 'right bottom'
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--clr-muted)' }}>
          Scroll
        </span>
        <div style={{ width: '80px', height: '1px', background: 'var(--clr-border)', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, height: '100%', width: '100%',
            background: 'var(--clr-accent)', transformOrigin: 'left',
            animation: 'scrollLine 2.5s cubic-bezier(0.7, 0, 0.2, 1) infinite'
          }} />
        </div>
        <style>{`@keyframes scrollLine { 0% { transform: scaleX(0); transform-origin: left; } 50% { transform: scaleX(1); transform-origin: left; } 50.1% { transform-origin: right; } 100% { transform: scaleX(0); transform-origin: right; } }`}</style>
      </div>
    </section>
  );
}
