import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  tag = 'h1',
  onLetterAnimationComplete,
}) {
  const ref = useRef(null);
  const completed = useRef(false);
  const callback = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => { callback.current = onLetterAnimationComplete; }, [onLetterAnimationComplete]);
  useEffect(() => {
    if (document.fonts?.status === 'loaded') setFontsLoaded(true);
    else document.fonts?.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(() => {
    if (!ref.current || !text || !fontsLoaded || completed.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const element = ref.current;
    const startPct = (1 - threshold) * 100;
    const margin = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const value = margin ? parseFloat(margin[1]) : 0;
    const unit = margin?.[2] || 'px';
    const offset = value === 0 ? '' : value < 0 ? `-=${Math.abs(value)}${unit}` : `+=${value}${unit}`;
    const split = new GSAPSplitText(element, {
      type: splitType,
      smartWrap: true,
      charsClass: 'split-char',
      wordsClass: 'split-word',
      onSplit: instance => {
        const targets = splitType.includes('chars') ? instance.chars : splitType.includes('words') ? instance.words : instance.lines;
        return gsap.fromTo(targets, from, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          force3D: true,
          scrollTrigger: { trigger: element, start: `top ${startPct}%${offset}`, once: true, fastScrollEnd: true },
          onComplete: () => { completed.current = true; callback.current?.(); },
        });
      },
    });
    return () => split.revert();
  }, { dependencies: [text, delay, duration, ease, splitType, threshold, rootMargin, fontsLoaded], scope: ref });

  const Tag = tag;
  return <Tag ref={ref} className={`split-parent ${className}`} style={{ textAlign }}>{text}</Tag>;
}
