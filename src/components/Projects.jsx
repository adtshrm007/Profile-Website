import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');

      cards.forEach((card) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="px-6 md:px-[5vw] py-[10vh] md:py-[15vh] max-w-[1600px] mx-auto">
      <div className="mb-16 md:mb-32 md:pl-[2vw]">
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <div className="w-10 h-px bg-[var(--clr-accent)]" />
          <p className="text-[0.75rem] tracking-[0.25em] uppercase text-[var(--clr-accent)] m-0">
            Selected Work
          </p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-[clamp(3rem,8vw,6rem)] leading-none tracking-[-0.02em] text-[var(--clr-text)]">
          Featured Projects
        </h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-40">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-[6vw] items-center">
            
            {/* Image Container */}
            <div className={`relative overflow-hidden rounded-lg aspect-[4/3] border border-[var(--clr-border)] bg-[#111] order-1 lg:order-${index % 2 === 0 ? 1 : 2}`}>
              <div className="absolute inset-0 bg-[var(--clr-accent)] mix-blend-overlay opacity-15 z-10 pointer-events-none" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity hover:scale-105 hover:grayscale-0 hover:contrast-100 hover:mix-blend-normal transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>

            {/* Content Container */}
            <div className={`order-2 lg:order-${index % 2 === 0 ? 2 : 1} py-2 md:py-8`}>
              <div style={{ fontFamily: 'var(--font-serif)', WebkitTextStroke: '1px var(--clr-border)' }} className="text-[clamp(3.5rem,10vw,6rem)] text-transparent leading-none mb-6 md:mb-10 opacity-50">
                0{index + 1}
              </div>
              
              <p className="text-[0.75rem] md:text-[0.8rem] tracking-[0.2em] uppercase text-[var(--clr-accent)] mb-4 md:mb-6 font-medium">
                {project.subtitle}
              </p>
              
              <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] mb-4 md:mb-6 text-[var(--clr-text)] text-balance">
                {project.title}
              </h3>
              
              <p className="text-[1rem] md:text-[1.05rem] text-[var(--clr-text)] opacity-70 leading-[1.8] font-light mb-8 md:mb-10 max-w-[500px]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
                {project.tags.map(tag => (
                  <span key={tag} className="badge bg-white/5">{tag}</span>
                ))}
              </div>

              <div className="border-t border-[var(--clr-border)] pt-6 md:pt-8">
                <p className="text-[0.7rem] md:text-[0.75rem] tracking-[0.15em] uppercase text-[var(--clr-text)] opacity-90 mb-4 md:mb-5 font-medium">Key Infrastructure</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                  {project.metrics.map(metric => (
                    <li key={metric} className="flex items-center gap-3 text-[0.85rem] md:text-[0.9rem] text-[var(--clr-muted)]">
                      <span className="w-1.5 h-1.5 bg-[var(--clr-border)] rounded-full shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
