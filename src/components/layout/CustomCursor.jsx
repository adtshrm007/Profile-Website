import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 300 };
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 4);
      mouseY.set(e.clientY - 4);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleHoverIn = () => {
      if (ringRef.current) ringRef.current.classList.add('hovered');
    };

    const handleHoverOut = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovered');
    };

    window.addEventListener('mousemove', moveCursor);

    const interactables = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          top: '18px',
          left: '18px',
        }}
      />
    </>
  );
}
