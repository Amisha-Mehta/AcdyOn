import { useState } from 'react';
import DotField from '../DotField';
import { Btn, Head, Section } from './ui';

export function Process() {
  const steps = ['Consultation', 'Eligibility Review', 'Program Selection', 'Enrollment & Guidance'];
  return (
    <Section tone="parchment">
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
    </Section>
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
