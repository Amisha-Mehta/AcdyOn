import { useState } from 'react';
import { Btn, Head, Icon, Link, Section } from './ui';

const programs = [
  ['spark', 'AI & Automation', 'Learn to turn advanced AI into practical professional leverage.'],
  ['globe', 'Doctoral Programs', 'Pursue respected, internationally oriented doctoral pathways.'],
  ['shield', 'Honorary Recognition', 'Give consequential work the recognition it deserves.'],
  ['brief', 'Executive Certifications', 'Build credible, modern expertise for your next chapter.'],
  ['spark', 'Corporate Training', 'Equip leadership teams for measurable transformation.'],
];

export function Programs() {
  return (
    <Section tone="parchment">
      <div className="container">
        <Head eyebrow="Programs">
          Premium pathways for career authority, future skills, and recognition
        </Head>
        <div className="cards programs">
          {programs.map(([icon, title, description]) => (
            <article className="card" key={title}>
              <i><Icon name={icon} /></i>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link>Explore pathway →</Link>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Journey() {
  const journeys = [
    ['Corporate Leader', 'DBA', 'Industry Authority'],
    ['Senior Professional', 'Executive Certificate', 'Confident Specialist'],
    ['Ambitious Builder', 'AI Mastery', 'Future-Ready Operator'],
    ['Established Contributor', 'Honorary Recognition', 'Visible Legacy'],
  ];
  return (
    <Section>
      <div className="container">
        <Head
          eyebrow="The transformation journey"
          sub="A considered pathway turns where you are now into the authority you want to carry next."
        >
          Progress with intention. Be recognised for the work ahead.
        </Head>
        <div className="journey">
          {journeys.map(route => (
            <div key={route[0]}>
              {route.map((step, index) => (
                <span key={step}>
                  {step}
                  {index < 2 && <b>→</b>}
                </span>
              ))}
            </div>
          ))}
        </div>
        <blockquote>
          "People do not buy a degree. They invest in credibility, authority,
          recognition, and professional transformation."
        </blockquote>
      </div>
    </Section>
  );
}

export function Selector() {
  const tabs = [
    ['AI / Tech', 'AI Practitioner · Automation Builder · Future-Ready Leader', 'Build the practical judgment and automation capability that modern work demands.'],
    ['Doctoral', 'Researcher · Executive Scholar · Industry Authority', 'Choose a flexible doctoral route shaped around your career experience.'],
    ['Recognition', 'Established Leader · Changemaker · Legacy Builder', 'Align your contribution with a recognition pathway that feels credible.'],
    ['Corporate', 'People Leader · Consultant · Team Builder', 'Create a tailored learning programme for your organisation\'s priorities.'],
  ];
  const [active, setActive] = useState(0);

  return (
    <Section tone="dark2">
      <div className="container selector">
        <Head eyebrow="Find your path">Choose The Path That Matches Your Goals</Head>
        <div className="tabbar" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab[0]}
              onClick={() => setActive(index)}
              className={index === active ? 'active' : ''}
              role="tab"
            >
              {tab[0]}
            </button>
          ))}
          <small>{active + 1} / 4</small>
        </div>
        <div className="tabbody">
          <p className="bodystrong">{tabs[active][1]}</p>
          <p>{tabs[active][2]}</p>
          <Btn>Explore this path →</Btn>
        </div>
      </div>
    </Section>
  );
}
