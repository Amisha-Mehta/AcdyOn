import { Head, Section } from './ui';

export function Stats() {
  const data = [
    ['18+', 'Countries'],
    ['5000+', 'Learners'],
    ['Global', 'Academic Partnerships'],
    ['Executive', 'Program Design'],
  ];
  return (
    <Section tone="parchment">
      <div className="container centered">
        <Head eyebrow="Global Academic Network">
          Academic partnerships and institutional signals that inform before enrollment
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
    <Section>
      <div className="marquee">
        <div>
          {[...partners, ...partners].map((partner, index) => (
            <span key={`${partner}-${index}`}>{partner}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
