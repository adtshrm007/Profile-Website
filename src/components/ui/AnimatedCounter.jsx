import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        gsap.to({ val: 0 }, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: function () {
            setCount(Math.floor(this.targets()[0].val));
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
}
