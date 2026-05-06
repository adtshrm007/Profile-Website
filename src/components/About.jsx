import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo(headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(paraRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: paraRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 md:px-[5vw] py-[12vh] md:py-[15vh] max-w-[1400px] mx-auto"
    >
      <div ref={lineRef} className="absolute top-0 left-6 md:left-[5vw] right-6 md:right-[5vw] h-px bg-[var(--clr-border)] origin-left" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-[8vw] items-start pt-8 md:pt-[5vh]">
        {/* Left */}
        <div className="md:pr-8">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-10 h-px bg-[var(--clr-accent)]" />
            <p className="text-[0.75rem] tracking-[0.25em] uppercase text-[var(--clr-accent)] m-0">
              About Me
            </p>
          </div>
          <h2
            ref={headingRef}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[var(--clr-text)] text-balance"
          >
            A problem solver &amp;<br />system builder.
          </h2>
        </div>

        {/* Right */}
        <div ref={paraRef} className="flex flex-col gap-6 md:gap-8 md:pt-2">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className={`text-[1.1rem] md:text-[1.2rem] text-[var(--clr-text)] ${i === 0 ? 'opacity-90' : 'opacity-60'} leading-[1.8] font-light max-w-[650px]`}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
