# AcdyOn Homepage — Decisions

## 1. Why this ingestion strategy?

For this homepage, I used a **curated, static content model** in the React UI rather than scraping or fetching AcdyOn content at runtime. The product areas and positioning were taken from the existing AcdyOn site, then reduced to the few claims needed for the landing-page experience.

The obvious alternative was a live scraper or CMS/API request on every page load. I rejected that for this exercise because it adds failure points, creates a dependency on the source site’s HTML and availability, and can expose the homepage to stale, duplicated, or unreviewed copy. If the source detects, rate-limits, or blocks the ingestion job mid-run, a static build still serves the last reviewed version. The trade-off is that content updates require a new build or a future CMS sync.

I also deliberately avoided importing testimonials, user counts, or partner claims that I could not independently verify. The page uses the real AcdyOn categories—AI and automation, doctoral pathways, and corporate learning—while keeping the claims general and reviewable.

## 2. Trade-off under the time limit

I prioritised the first-screen experience and one meaningful interaction: the pathway selector. Selecting an ambition updates the pathway card, and the primary CTA opens an eligibility-review form. This gives the visitor a reason to interact and demonstrates the product idea immediately.

Under the time limit, I kept the form front-end only and did not connect it to a CRM, email workflow, or database. With a real week, I would add validation, consent and privacy copy, a reliable submission endpoint, analytics for pathway selection and CTA completion, and a tested fallback if the submission service is unavailable. I would also run accessibility and device testing across the final deployed URL.

## 3. AI tools and personal verification

I used AI assistance to audit the existing page structure, identify the risk of fabricated social proof, propose alternative value propositions, and speed up the React/CSS implementation. I personally verified the live AcdyOn positioning, kept only claims supported by the source material, replaced generic proof points with honest copy, and reviewed the interaction flow and responsive CSS.

I also ran the production build successfully. The final decisions—static reviewed content, the pathway selector, restrained motion, the CTA form, and the refusal to invent testimonials or metrics—are mine and I can explain the reasoning behind each one.
