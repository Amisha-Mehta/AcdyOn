# AcdyOn — Global Learning & Recognition

<p align="center">
  <strong>A considered digital front door for ambitious professionals.</strong><br />
  Executive education · Applied AI · Doctoral pathways · Academic recognition
</p>

<p align="center">
  <a href="https://acdyon.com/">Live reference site</a> ·
  <a href="#getting-started">Run locally</a> ·
  <a href="./DECISIONS.md">Design decisions</a>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-UI-61DAFB?style=flat-square&logo=react&logoColor=111" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-build-646CFF?style=flat-square&logo=vite&logoColor=fff" />
  <img alt="Responsive" src="https://img.shields.io/badge/layout-responsive-183D32?style=flat-square" />
  <img alt="Status" src="https://img.shields.io/badge/status-portfolio%20build-E7F4E8?style=flat-square&labelColor=183D32" />
</p>

<br />

> **The brief:** make someone understand the value in three seconds, then give them a reason to explore.

## ✦ What this is

This is a responsive homepage redesign for **AcdyOn**, shaped around a premium editorial feel rather than a generic education template. The experience moves from a clear credential-led hero into programmes, pathways, trust signals, process, FAQ, and a final consultation CTA.

The visual language is intentionally quiet: warm paper surfaces, forest green, generous spacing, Geist typography, subtle grid/dot fields, and motion that supports orientation instead of competing for attention.

## ✨ Experience map

```mermaid
flowchart LR
    A[First impression\nClear authority-led value prop] --> B[Explore\nPrograms & pathways]
    B --> C[Understand\nJourney, trust & network]
    C --> D[Decide\nProcess + FAQ]
    D --> E[Act\nBook eligibility review]
    style A fill:#183D32,color:#F7FFF8,stroke:#183D32
    style E fill:#B9E6C3,color:#183D32,stroke:#183D32
```

## 🧭 Homepage sections

| Moment | What the visitor gets | Interaction |
| --- | --- | --- |
| Hero | A direct value proposition around authority and recognition | Split-text entrance + CTA |
| Network | Context for geographic reach and academic partners | Animated marquee / scroll title |
| Programmes | A scan-friendly view of the learning routes | Hover states + pathway links |
| Featured AI track | A concrete example of applied learning | Curriculum / mentorship / project framing |
| University network | Academic context before conversion | Registry-style responsive layout |
| Process & FAQ | Objection handling without pressure | Accordion + scroll-driven process motion |
| Final CTA | One clear next action | Consultation CTA |

## 📊 Interaction budget

The page uses a small number of purposeful interactions so the hierarchy stays readable.

```mermaid
pie title Interaction mix
    "Navigation + menu" : 30
    "Scroll reveal / motion" : 25
    "Pathway and FAQ exploration" : 25
    "CTA moments" : 20
```

## 🎨 Visual direction

<table>
  <tr>
    <td width="50%"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80" alt="University learning environment" /></td>
    <td width="50%">
      <h3>Premium, not loud.</h3>
      <p>The design uses editorial pacing and restrained contrast to make high-consideration decisions feel clear and credible.</p>
      <p><code>#183D32</code> forest · <code>#FCFBF8</code> paper · Geist Sans · Geist Mono</p>
    </td>
  </tr>
</table>

## 🧱 Component structure

```text
src/
├── HomePage.jsx              # Page composition
├── styles.css                # Design system, responsive rules, motion
├── DotField.jsx              # Decorative background texture
└── components/
    ├── Nav.jsx               # Desktop / mobile navigation + theme control
    ├── Hero.jsx              # First-screen value proposition
    ├── Programs.jsx          # Programme cards and pathway selector
    ├── NetworkStats.jsx      # Network facts and marquee treatment
    ├── Trust.jsx             # Advantage, featured track, network, stories
    ├── Closing.jsx           # Process, FAQ, CTA and footer
    ├── SplitText.jsx         # Lightweight entrance animation
    └── ui.jsx                # Shared buttons, icons, sections, reveal hook
```

## 🛠️ Tech choices

- **React** for composable sections and local interaction state.
- **Vite** for a fast, minimal build pipeline.
- **CSS-first visual system** for precise responsive control and easy handoff.
- **GSAP / IntersectionObserver** for deliberate entrance and scroll motion.
- **Local Geist fonts** to keep typography consistent without relying on a font request at runtime.

## Getting started

### Requirements

- Node.js 18+
- npm 9+

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

## ✅ Quality checklist

- Responsive layout includes a mobile breakpoint for narrow screens.
- Reduced-motion users are respected through `prefers-reduced-motion` rules.
- Navigation, FAQ, theme control, and CTAs are keyboard-focusable controls.
- The page is static and deployable to Vercel, Netlify, or GitHub Pages.
- No runtime scraper or external data dependency is required to render the page.

## Honesty note

This repository is a design and front-end exercise. It does not include a live admissions backend, CRM submission, analytics pipeline, or authentication flow. Any programme claims, partner information, testimonials, and numerical proof points should be reviewed by AcdyOn before production publication.

See [DECISIONS.md](./DECISIONS.md) for the reasoning behind the content and ingestion approach.

---

<p align="center">Built with care for AcdyOn ✦</p>
