import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Btn, Head, Link, Section } from './ui';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CommitmentList({ items }) {
  const listRef = useRef(null);

  useGSAP(() => {
    if (!listRef.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const rows = listRef.current.querySelectorAll('li');
    gsap.set(rows, { opacity: 0, y: 14 });

    const tween = gsap.to(rows, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: listRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => tween.scrollTrigger?.kill();
  }, { scope: listRef });

  return (
    <ul className="commitment__list" ref={listRef}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Advantage() {
  const items = [
    'Globally Recognised Institutions',
    'University-Governed Evaluation',
    'Personalised Pathway Mapping',
    'Dedicated Academic Advisors',
    'International Learner Community',
    'Executive-Friendly Learning Models',
  ];
  const [expanded, setExpanded] = useState([]);
  const toggle = item =>
    setExpanded(v => (v.includes(item) ? v.filter(c => c !== item) : [...v, item]));

  const commitments = [
    'Academic fit before application',
    'Clear guidance at every decision point',
    'Global perspective, personal support',
  ];

  return (
    <Section tone="parchment">
      <div className="container">
        <Head
          eyebrow="The AcdyOn advantage"
          sub="Clarity first. Credibility always. A pathway built around the decision you are actually making."
        >
          Built for Ambitious Professionals Who Cannot Afford to Get This Wrong
        </Head>
        <article className="commitment">
          <h3>No programme is recommended before your profile is understood.</h3>
          <p>
            Our advisors begin with your experience, ambitions and the signal you
            need your next move to send.
          </p>
          <CommitmentList items={commitments} />
        </article>
        <div className="cards advantage">
          {items.map(item => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Designed to make each step of your professional growth feel grounded and worthwhile.</p>
              {['University-Governed Evaluation', 'Executive-Friendly Learning Models'].includes(item) && (
                <>
                  <button className="textbutton" onClick={() => toggle(item)}>
                    Read more {expanded.includes(item) ? '−' : '+'}
                  </button>
                  {expanded.includes(item) && (
                    <p className="expand">
                      A structured process brings clarity to expectations, flexibility
                      and academic standards.
                    </p>
                  )}
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Featured() {
  const details = [
    ['Curriculum', 'Six applied modules from agent design to deployment.'],
    ['Mentorship', 'Weekly live sessions with practitioners building in production.'],
    ['Projects', 'Ship two real automations you can show in interviews.'],
  ];
  return (
    <Section tone="dark">
      <div className="container featured">
        <div>
          <span className="track">4 Month Track</span>
          <Head eyebrow="Featured programme">Agentic AI & Automation Mastery</Head>
          <p className="lead">Practical AI mastery for professionals who need real outcomes.</p>
          <div className="chips">
            <span>Agent Architecture</span>
            <span>No-Code Workflows</span>
            <span>Business Automation</span>
          </div>
          <Btn>View Full Program</Btn>
        </div>
        <div className="featuregrid">
          {details.map(([title, copy]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function UniversityNetwork() {
  const rows = [
    ['🇺🇸', 'United States', 'Kennedy University', 'DBA · Executive Education', 'Professional pathways with a global academic outlook.'],
    ['🇨🇭', 'Switzerland', 'Dunster College + EIMT', 'DBA · Management', 'Executive learning designed for international professionals.'],
    ['🇬🇧', 'United Kingdom', 'LSMT + LSBS', 'MBA · Certificates', 'Specialist education with applied professional relevance.'],
    ['🇧🇪', 'Belgium', 'Birchwood', 'Recognition · Leadership', 'Recognition pathways for established contributors.'],
  ];
  return (
    <Section>
      <div className="container">
        <Head
          eyebrow="University network"
          sub="A carefully selected network of international institutions and academic pathways."
        >
          Learning partners with signals that travel
        </Head>
        <div className="registry">
          {rows.map(([flag, country, institution, study, copy]) => (
            <article key={country}>
              <span className="flag">{flag}</span>
              <div>
                <h3>{country}</h3>
                <small>{study}</small>
              </div>
              <div>
                <b>{institution}</b>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <Link>Explore All University Partners →</Link>
      </div>
    </Section>
  );
}

export function Testimonials() {
  const stories = [
    ['DMR', 'Dr. Maya Raman', 'Healthcare Director', 'The process gave my experience a more credible, visible language — and the confidence to lead from it.'],
    ['OA', 'Omar Al-Khatib', 'Founder & Strategy Consultant', 'This was not just a qualification. It made my next chapter feel both possible and properly recognised.'],
    ['EF', 'Elena Fischer', 'Corporate Learning Lead', 'The team understood the reality of a full professional life and designed the path around it.'],
  ];
  return (
    <Section tone="dark3">
      <div className="container">
        <Head
          eyebrow="Success stories"
          sub="What changes when professionals choose a pathway that truly reflects their ambition."
        >
          Recognition that carries into the work
        </Head>
        <div className="testimonials">
          {stories.map(([initials, name, role, quote]) => (
            <article key={initials}>
              <span className="avatar">{initials}</span>
              <h3>{name}</h3>
              <small>{role}</small>
              <blockquote>{quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}