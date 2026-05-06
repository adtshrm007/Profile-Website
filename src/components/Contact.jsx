import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactContent } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo(headRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
      );
      
      gsap.fromTo('.contact-el',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.contact-content', start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center px-6 md:px-[5vw] max-w-[1400px] mx-auto">
      
      <div ref={lineRef} className="absolute top-0 left-6 md:left-[5vw] right-6 md:right-[5vw] h-px bg-[var(--clr-border)] origin-left" />

      {/* Background glow */}
      <div className="absolute bottom-[-20%] md:bottom-[-30%] left-1/2 -translate-x-1/2 w-[100vw] md:w-[70vw] h-[100vw] md:h-[70vw] rounded-full pointer-events-none -z-10 blur-[60px]" style={{ background: 'radial-gradient(circle, rgba(232,255,139,0.06) 0%, transparent 65%)' }} />

      <div ref={headRef} className="text-center mb-12 md:mb-20 opacity-0">
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-[clamp(3.5rem,10vw,7rem)] leading-[1.05] font-normal tracking-[-0.02em] mb-6 md:mb-8 text-[var(--clr-text)]">
          Let's build<br />
          <span className="text-[var(--clr-accent)]">something great.</span>
        </h2>
      </div>

      <div className="contact-content flex flex-col items-center gap-10 md:gap-16">
        <p className="contact-el max-w-[45ch] text-center text-[var(--clr-text)] opacity-80 text-[1.1rem] md:text-[1.25rem] leading-[1.8] font-light">
          {contactContent.message}
        </p>

        <div className="contact-el flex gap-4 md:gap-6 flex-wrap justify-center">
          {contactContent.links.map(link => (
            <a key={link.label} href={link.url} className="btn-magnetic px-8 md:px-12 py-4 text-[0.8rem] md:text-[0.85rem]" target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-6 md:left-[5vw] right-6 md:right-[5vw] flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[var(--clr-border)] pt-6 md:pt-8 text-center sm:text-left">
        <span className="text-[0.65rem] md:text-[0.75rem] text-[var(--clr-muted)] tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} ADITYA SHARMA
        </span>
        <span className="text-[0.65rem] md:text-[0.75rem] text-[var(--clr-muted)] tracking-[0.15em] uppercase">
          Built with React & GSAP
        </span>
      </div>
    </section>
  );
}
