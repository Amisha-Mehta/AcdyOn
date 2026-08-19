import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Head, Section } from './ui';
import ScrollFloat from './ScrollFloat';
import OptionWheel from './effects/OptionWheel';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

function HorizontalNetworkTitle() {
  const wrapper = useRef(null);
  const text = useRef(null);

  useGSAP(() => {
    if (!wrapper.current || !text.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 736) return undefined;
    const split = new GSAPSplitText(text.current, { type: 'chars,words', charsClass: 'network-char' });
    const scrollTween = gsap.to(text.current, {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: { trigger: wrapper.current, pin: true, end: '+=2600px', scrub: true, invalidateOnRefresh: true },
    });
    split.chars.forEach(char => {
      gsap.from(char, {
        yPercent: () => gsap.utils.random(-200, 200, 1),
        rotation: () => gsap.utils.random(-20, 20, 1),
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: char, containerAnimation: scrollTween, start: 'left 100%', end: 'left 30%', scrub: 1 },
      });
    });
    return () => { scrollTween.kill(); split.revert(); };
  }, { scope: wrapper });

  return <section className="horizontal-network" ref={wrapper} aria-label="Global Academic Network"><h3 className="horizontal-network__text" ref={text}>Global Academic Network</h3></section>;
}

export function Stats() {
  const data = [
    ['18+', 'Countries'],
    ['5000+', 'Learners'],
    ['Global', 'Academic Partnerships'],
    ['Executive', 'Program Design'],
  ];
  return (
    <Section tone="parchment">
      <HorizontalNetworkTitle />
      <div className="container centered">
        <Head eyebrow="Academic network">
          <ScrollFloat containerClassName="network-scroll-float">Academic partnerships and institutional signals that inform before enrollment</ScrollFloat>
        </Head>
        <div className="stats">
          {data.map(([number, label]) => (
            <div key={label}>
              <b>{number}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Marquee() {
  const partners = ['KENNEDY UNIVERSITY', 'DUNSTER COLLEGE', 'LSMT', 'EIMT', 'BIRCHWOOD', 'LSBS'];
  return (
    <Section className="partner-wheel-section">
      <div className="partner-wheel-panel">
        <div className="container">
          <div className="partner-wheel-panel__label">Academic partners</div>
        </div>
        <OptionWheel
          items={partners}
          defaultSelected={0}
          textColor="var(--muted)"
          activeColor="var(--ink)"
          fontSize={2.8}
          spacing={1.45}
          curve={1}
          tilt={7}
          blur={0.8}
          fade={0.24}
          minOpacity={0.14}
          smoothing={110}
          inset={48}
          draggable
          className="partner-wheel"
        />
        <div className="container">
          <p className="partner-wheel-panel__hint">Scroll, drag, or use the arrow keys to explore.</p>
        </div>
      </div>
    </Section>
  );
}
