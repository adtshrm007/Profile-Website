import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const ref = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(8, 8, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--clr-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
      className="px-6 md:px-[5vw] py-5 md:py-8 flex justify-between items-center"
    >
      <a href="#" style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700, color: 'var(--clr-text)' }}>
        A<span style={{ color: 'var(--clr-accent)' }}>.</span>
      </a>

      <div className="flex items-center gap-6 md:gap-12">
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--clr-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--clr-text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--clr-muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-magnetic" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
