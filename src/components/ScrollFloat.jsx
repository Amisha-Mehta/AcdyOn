import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function ScrollFloat({ children, containerClassName = '', animationDuration = 1, ease = 'back.inOut(2)', scrollStart = 'center bottom-=10%', scrollEnd = 'bottom bottom-=40%', stagger = .03 }) {
  const containerRef = useRef(null);
  const characters = useMemo(() => (typeof children === 'string' ? children : '').split('').map((character, index) => <span className="scroll-float-char" key={index}>{character === ' ' ? '\u00a0' : character}</span>), [children]);
  useEffect(() => { const element = containerRef.current; if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined; const context = gsap.context(() => { gsap.fromTo(element.querySelectorAll('.scroll-float-char'), { opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: .7, transformOrigin: '50% 0%' }, { duration: animationDuration, ease, opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, stagger, scrollTrigger: { trigger: element, start: scrollStart, end: scrollEnd, scrub: true } }); }, element); return () => context.revert(); }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);
  return <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>{characters}</h2>;
}
