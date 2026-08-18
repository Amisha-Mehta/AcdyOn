import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DotField from '../DotField';
import { Btn, Head, Section } from './ui';

gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

function ProcessMotion() {
  const [activeStep, setActiveStep] = useState(1);
  const scope = useRef(null);
  const initial = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const box = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const buildTimeline = () => {
      const secondState = Flip.getState(second.current);
      const thirdState = Flip.getState(third.current);
      const fourthState = Flip.getState(fourth.current);
      const timeline = gsap.timeline({ scrollTrigger: { trigger: initial.current, start: 'top 65%', endTrigger: fourth.current, end: 'bottom 65%', scrub: 1, invalidateOnRefresh: true } });
      timeline.add(Flip.fit(box.current, secondState, { ease: 'none', duration: 1 }))
        .add(Flip.fit(box.current, thirdState, { ease: 'none', duration: 1 }))
        .add(Flip.fit(box.current, fourthState, { ease: 'none', duration: 1 }));
      let displayedStep = 1;
      timeline.eventCallback('onUpdate', () => {
        const nextStep = Math.min(4, Math.floor(timeline.time()) + 1);
        if (nextStep !== displayedStep) {
          displayedStep = nextStep;
          setActiveStep(nextStep);
        }
      });
      return timeline;
    };
    let timeline = buildTimeline();
    const onResize = () => { timeline.kill(); timeline = buildTimeline(); ScrollTrigger.refresh(); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); timeline.kill(); };
  }, { scope });

  const description = 'Clear next steps, thoughtful advice, and support that stays personal.';
  return <Section tone="parchment" className="process-motion-section"><div className="container process-motion" ref={scope}><p className="eyebrow">Guidance in motion</p><div className="process-motion__stage"><div className="process-motion__point process-motion__initial" ref={initial}><div className="process-motion__box" ref={box}>{String(activeStep).padStart(2, '0')}</div><div className="process-motion__step"><b>01</b><h3>Consultation</h3><p>{description}</p></div></div><div className="process-motion__point process-motion__second"><div className="process-motion__marker" ref={second}>02</div><div className="process-motion__step"><b>02</b><h3>Eligibility Review</h3><p>{description}</p></div></div><div className="process-motion__point process-motion__third"><div className="process-motion__marker" ref={third}>03</div><div className="process-motion__step"><b>03</b><h3>Program Selection</h3><p>{description}</p></div></div><div className="process-motion__point process-motion__fourth"><div className="process-motion__marker" ref={fourth}>04</div><div className="process-motion__step"><b>04</b><h3>Enrollment &amp; Guidance</h3><p>{description}</p></div></div></div><p className="process-motion__caption">A clear path, from the first conversation to your programme start.</p></div></Section>;
}

export function Process() {
  const steps = ['Consultation', 'Eligibility Review', 'Program Selection', 'Enrollment & Guidance'];
  return (
    <>
    {/* <Section tone="parchment">
      <div className="container">
        <Head eyebrow="Process">A guided four-step process from consultation to programme start</Head>
        <div className="process">
          {steps.map((step, index) => (
            <article key={step}>
              <b>0{index + 1}</b>
              <h3>{step}</h3>
              <p>Clear next steps, thoughtful advice, and support that stays personal.</p>
            </article>
          ))}
        </div>
      </div>
    </Section> */}
    <ProcessMotion />
    </>
  );
}

export function FAQ() {
  const questions = [
    ['Are programs globally recognised?', 'Our partnerships are selected for their international standing and the credibility they offer working professionals. Your advisor will explain the specific recognition and structure of any path you are considering.'],
    ['Can working professionals apply?', 'Yes. Many pathways are designed around executive schedules, with flexible formats and dedicated guidance throughout.'],
    ['Are AI programs beginner-friendly?', 'They are built to be practical and approachable, starting with the context and tools most useful to your role.'],
    ['Is mentorship included?', 'Selected programmes include live practitioner sessions and advisor support so you can apply learning with confidence.'],
    ['Are doctoral pathways flexible?', 'Doctoral routes accommodate professional commitments while maintaining the academic structure that makes the achievement meaningful.'],
  ];
  const [open, setOpen] = useState(0);

  return (
    <Section>
      <div className="container narrow">
        <Head eyebrow="FAQ">Questions, answered with clarity</Head>
        <div className="faq">
          {questions.map(([question, answer], index) => (
            <article key={question}>
              <button
                onClick={() => setOpen(index === open ? -1 : index)}
                aria-expanded={index === open}
              >
                {question}
                <span className={index === open ? 'rot' : ''}>⌄</span>
              </button>
              {index === open && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section tone="dark" className="final">
      <div className="container centered">
        <Head eyebrow="AcdyOn">Build Your Future With Global Learning & Recognition</Head>
        <p className="lead">A considered next step starts with a conversation about where you are going.</p>
        <Btn>Book Consultation</Btn>{' '}
        <Btn ghost>Explore Programs</Btn>
      </div>
    </Section>
  );
}

export function Footer() {
  const columns = [
    ['Explore', 'Programs', 'Doctoral', 'Universities', 'Resources'],
    ['US Office', 'New York', 'United States', '+1 646 000 0000'],
    ['UK Office', 'London', 'United Kingdom', '+44 20 0000 0000'],
    ['India Office', 'Bengaluru', 'India', '+91 80 0000 0000'],
  ];
  return (
    <footer>
      <DotField dark />
      <div className="footer-content">
        <div className="footergrid">
          <div>
            <a className="footerlogo" href="#">AcdyOn</a>
            <p>Global learning and recognition for professionals ready for what is next.</p>
            <div className="social">
              <span>in</span>
              <span>◎</span>
              <span>◉</span>
            </div>
          </div>
          {columns.map(([heading, ...links]) => (
            <div key={heading}>
              <b>{heading}</b>
              {links.map(link => (
                <a href="#" key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="legal">
          <span>© 2026 AcdyOn. All rights reserved.</span>
          <span>Privacy　 Terms　 Refund　 Cookie Policy</span>
          <span>AcdyOn Education Services</span>
        </div>
      </div>
    </footer>
  );
}
