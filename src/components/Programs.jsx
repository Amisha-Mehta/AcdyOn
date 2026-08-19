import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Btn, Head, Icon, Link, Section } from './ui';

const programs = [
  ['spark', 'AI & Automation', 'Learn to turn advanced AI into practical professional leverage.'],
  ['globe', 'Doctoral Programs', 'Pursue respected, internationally oriented doctoral pathways.'],
  ['shield', 'Honorary Recognition', 'Give consequential work the recognition it deserves.'],
  ['brief', 'Executive Certifications', 'Build credible, modern expertise for your next chapter.'],
  ['spark', 'Corporate Training', 'Equip leadership teams for measurable transformation.'],
];

gsap.registerPlugin(ScrollTrigger);

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

  const listRef = useRef(null);
  const fillRef = useRef(null);
  const itemRefs = useRef([]);
  const slideRefs = useRef([]);
  const pinRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const listItems = itemRefs.current;
    const slides = slideRefs.current;
    const fill = fillRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: '+=' + listItems.length * 50 + '%',
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    fill &&
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: 'top left',
      });

    listItems.forEach((item, i) => {
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl.set(item, { opacity: 1 }, 0.5 * i)
          .to(slides[i], { autoAlpha: 1, duration: 0.2 }, '<')
          .set(previousItem, { opacity: 0.4 }, '<')
          .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, '<');
      } else {
        gsap.set(item, { opacity: 1 });
        gsap.set(slides[i], { autoAlpha: 1 });
      }
    });

    tl.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: 'top left',
        ease: 'none',
        duration: tl.duration(),
      },
      0
    ).to({}, {});

    return () => tl.scrollTrigger?.kill();
  }, { scope: pinRef });

  return (
    <Section>
      <div className="container">
        <Head
          eyebrow="The transformation journey"
          sub="A considered pathway turns where you are now into the authority you want to carry next."
        >
          Progress with intention. Be recognised for the work ahead.
        </Head>
      </div>

      <div className="journey-pin" ref={pinRef}>
        <div className="journey-pin__content container">
          <div className="journey-pin__list-col">
            <ul className="journey-pin__list" ref={listRef}>
              {journeys.map((route, i) => (
                <li
                  key={route[0]}
                  ref={el => { itemRefs.current[i] = el; }}
                  className="journey-pin__item"
                >
                  {route[0]}
                </li>
              ))}
            </ul>
            <div className="journey-pin__fill" ref={fillRef} />
          </div>

          <div className="journey-pin__stage-col">
            {journeys.map((route, i) => (
              <div
                className="journey-pin__slide"
                key={route[0]}
                ref={el => { slideRefs.current[i] = el; }}
              >
                <small className="journey-pin__count">{i + 1} / {journeys.length}</small>
                <div className="journey-pin__flow">
                  {route.map((step, index) => (
                    <span key={step}>
                      {step}
                      {index < route.length - 1 && <b>→</b>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <blockquote>
          "People do not buy a degree. They invest in credibility, authority,
          recognition, and professional transformation."
        </blockquote>
      </div>
    </Section>
  );
}

gsap.registerPlugin(ScrollTrigger);

export function Selector() {
  const tabs = [
    [
      'AI / Tech',
      'AI Practitioner · Automation Builder · Future-Ready Leader',
      'Build the practical judgment and automation capability that modern work demands.',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    ],
    [
      'Doctoral',
      'Researcher · Executive Scholar · Industry Authority',
      'Choose a flexible doctoral route shaped around your career experience.',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    ],
    [
      'Recognition',
      'Established Leader · Changemaker · Legacy Builder',
      'Align your contribution with a recognition pathway that feels credible.',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    ],
    [
      'Corporate',
      'People Leader · Consultant · Team Builder',
      "Create a tailored learning programme for your organisation's priorities.",
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    ],
  ];

  const listRef = useRef(null);
  const fillRef = useRef(null);
  const itemRefs = useRef([]);
  const slideRefs = useRef([]);
  const pinRef = useRef(null);

  useGSAP(() => {
    const listItems = itemRefs.current;
    const slides = slideRefs.current;
    const fill = fillRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: '+=' + listItems.length * 50 + '%',
        pin: true,
        scrub: true,
      },
    });

    // First element visible, set the marker
    fill &&
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: 'top left',
      });

    listItems.forEach((item, i) => {
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl.set(item, { color: 'var(--cream)', opacity: 1 }, 0.5 * i)
          .to(slides[i], { autoAlpha: 1, duration: 0.2 }, '<')
          .set(previousItem, { color: 'var(--cream)', opacity: 0.4 }, '<')
          .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, '<');
      } else {
        gsap.set(item, { color: 'var(--cream)', opacity: 1 });
        gsap.set(slides[i], { autoAlpha: 1 });
      }
    });

    tl.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: 'top left',
        ease: 'none',
        duration: tl.duration(),
      },
      0
    ).to({}, {}); // small pause before un-pin
  }, { scope: pinRef });

  return (
    <Section tone="dark2">
      <div className="container">
        <Head eyebrow="Find your path">Choose The Path That Matches Your Goals</Head>
      </div>

      <div className="section pin-section" ref={pinRef} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="content container" style={{ display: 'flex', position: 'relative', width: '100%' }}>

          <div style={{ flex: '0 0 30%', position: 'relative' }}>
            <ul className="list" ref={listRef} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {tabs.map((tab, i) => (
                <li
                  key={tab[0]}
                  ref={(el) => (itemRefs.current[i] = el)}
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '530', letterSpacing: '-0.055em', marginBottom: '30px', color: 'var(--cream)' }}
                >
                  {tab[0]}
                </li>
              ))}
            </ul>
            <div className="fill" ref={fillRef} style={{ position: 'absolute', top: 0, left: '-20px', width: '3px', height: '100%', backgroundColor: '#0ae448' }}></div>
          </div>

          <div className="right" style={{ flex: '1', position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
            {tabs.map((tab, i) => (
              <div
                className="slide"
                key={tab[0]}
                ref={(el) => (slideRefs.current[i] = el)}
                style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden', display: 'flex', alignItems: 'center', gap: '40px' }}
              >
                <div className="tabbody" style={{ flex: 1, padding: 0 }}>
                  <small style={{ color: '#c5d0c4', fontSize: '11px', display: 'block', marginBottom: '14px' }}>{i + 1} / {tabs.length}</small>
                  <p className="bodystrong" style={{ color: '#fff', fontWeight: '600', marginBottom: '14px' }}>{tab[1]}</p>
                  <p style={{ color: '#d2dad2', marginBottom: '24px' }}>{tab[2]}</p>
                  <Btn>Explore this path →</Btn>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <img src={tab[3]} alt={tab[0]} style={{ width: '100%', maxWidth: '350px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}