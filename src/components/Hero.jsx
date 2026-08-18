import { useEffect, useState } from 'react';
import { Btn, Icon, Section } from './ui';

export default function Hero() {
  const slides = [
    'Graduates at the Kennedy University convocation',
    'Executive cohort, London',
    'Academic partner session, Switzerland',
    'Applied AI workshop',
    'Global learners gathering',
  ];
  const tickers = [
    'Rajan M. from India enrolled in DBA',
    'Elena F. joined AI & Automation Mastery',
    'Omar A. began his doctoral pathway',
  ];
  const [slide, setSlide] = useState(0);
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTicker(v => (v + 1) % tickers.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <Section tone="dark" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Recognized at Kennedy University</p>
        <h1>Your next credential should carry real authority.</h1>
        <p className="lead">
          Start with an eligibility review designed around your experience,
          ambitions, and the recognition you want to earn.
        </p>
        <Btn>Book Your Eligibility Review <Icon /></Btn>
        <p className="ticker">
          <span className="ticker-dot" />
          {tickers[ticker]}
        </p>
        <p className="partners">Partners · Kennedy University · Dunster College</p>
      </div>
      <div className="hero-photo">
        <div className="photo-copy">
          <span>GLOBAL CONVOCATION</span>
          <b>{slides[slide]}</b>
        </div>
        <div className="paddles">
          <button onClick={() => setSlide((slide + 4) % 5)} aria-label="Previous slide">←</button>
          <em>{slide + 1} / 5</em>
          <button onClick={() => setSlide((slide + 1) % 5)} aria-label="Next slide">→</button>
        </div>
      </div>
    </Section>
  );
}
