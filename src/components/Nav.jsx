import { useEffect, useState } from 'react';
import DotField from '../DotField';
import { Btn } from './ui';

const menuData = {
  Programs: [
    ['Agentic AI & Automation Mastery', 'Build practical automations that create visible outcomes.'],
    ['Cybersecurity & AI Mastery', 'Strengthen the systems your organisation relies on.'],
    ['AI for Business Leaders', 'Lead confidently through a changing technology landscape.'],
    ['Corporate Training', 'Develop capability across ambitious teams.'],
  ],
  Doctoral: [
    ['DBA / PhD / Honorary', 'Choose academic recognition aligned to your experience.'],
    ['Kennedy University', 'Professional doctorate pathways'],
    ['Dunster College', 'Flexible global learning'],
    ['LSMT · EIMT · Birchwood', 'International academic partners'],
  ],
};
const links = ['Home', 'Programs', 'Doctoral', 'Universities', 'Resources', 'About', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('acdyon-theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    localStorage.setItem('acdyon-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header>
      <nav className="nav-wrap">
        <DotField dark />
        <div className="nav-inner">
          <a className="wordmark" href="#">AcdyOn</a>
          <div className="navlinks">
            {links.map(item => (
              <button
                key={item}
                onClick={() => menuData[item] && setOpen(open === item ? null : item)}
                aria-expanded={open === item || undefined}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="nav-cta">
            <Btn className="btn-nav">Book Consultation</Btn>
          </div>
          <button className="theme-toggle" onClick={() => setDarkMode(value => !value)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} aria-pressed={darkMode}>
            <span aria-hidden="true">{darkMode ? '☼' : '◐'}</span>
          </button>
          <button
            className="hamburger"
            onClick={() => { setMobile(!mobile); setOpen(null); }}
            aria-label="Toggle menu"
          >
            {mobile ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <div className="mega">
            {menuData[open].map(([title, description]) => (
              <a key={title} href="#">
                <strong>{title}</strong>
                <span>{description}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
      {mobile && (
        <div className="mobile-menu open">
          {links.map(item => (
            <a key={item} href="#" onClick={() => setMobile(false)}>{item}</a>
          ))}
        </div>
      )}
    </header>
  );
}
