import { useEffect, useRef, useCallback } from 'react';
import DotField from '../DotField';

/* ── Scroll-reveal hook ── */
export function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Icons ── */
export function Icon({ name = 'arrow' }) {
  const paths = {
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    spark: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /></>,
    shield: <><path d="M12 3 5.5 6v5c0 4.2 2.8 8 6.5 10 3.7-2 6.5-5.8 6.5-10V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" /></>,
    brief: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2m-13 5h18" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{paths[name]}</svg>;
}

/* ── Button ── */
export const Btn = ({ children, ghost = false, className = '' }) => (
  <button className={`btn ${ghost ? 'btn-ghost' : ''} ${className}`}>{children}</button>
);

/* ── Text Link ── */
export const Link = ({ children }) => <a href="#" className="link">{children}</a>;

/* ── Section with DotField + scroll-reveal ── */
export const Section = ({ children, tone = 'light', className = '' }) => {
  const ref = useScrollReveal();
  const toneClass = tone === 'parchment' ? 'alt' : tone.startsWith('dark') ? tone : '';
  return (
    <section className={`tile ${toneClass} ${className}`}>
      <DotField dark />
      <div className="tile-content reveal" ref={ref}>{children}</div>
    </section>
  );
};

/* ── Section Head ── */
export const Head = ({ eyebrow, children, sub }) => (
  <div className="head">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{children}</h2>
    {sub && <p className="sub">{sub}</p>}
  </div>
);
