import { useEffect, useState } from 'react';
import { Btn, Icon, Section } from './ui';
import SplitText from './SplitText';

export default function Hero() {
  const tickers = [
    'Rajan M. from India enrolled in DBA',
    'Elena F. joined AI & Automation Mastery',
    'Omar A. began his doctoral pathway',
  ];
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTicker(v => (v + 1) % tickers.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <Section tone="dark" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Recognized at Kennedy University</p>
        <SplitText text="Your next credential should carry real authority." />
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
    </Section>
  );
}
