# DOGOO — Portfolio (React + Vite)

A single-page artist portfolio: glassmorphic navbar, hero, bio, past/upcoming
shows, and contact/socials — built around a black / white / grey palette with
gold used as a deliberate accent, and African stripe-pattern motifs (Kente-style
banding) worked into a signature "rhythm bar" divider.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx              → React entry point
  App.jsx                → assembles all sections
  index.css               → all styles + design tokens (:root variables)
  data/content.js          → ALL editable text, dates, links, photo paths
  hooks/
    useScrollReveal.js      → scroll-triggered fade/slide-in
    useActiveSection.js      → tracks active navbar link
  components/
    Navbar.jsx, Hero.jsx, Bio.jsx, Shows.jsx, Contact.jsx
    RhythmBar.jsx            → the signature pulsing stripe divider
    Reveal.jsx                → wrapper that applies the reveal animation
    SocialIcon.jsx             → inline SVG icons (Instagram/YouTube/Spotify/X)
```

## Editing content

Almost everything you'd want to change lives in **`src/data/content.js`**:
artist name, hero copy, bio text, milestones, and past shows,
contact email, and social links. You shouldn't need to touch component files
just to update text or dates.

### Adding real photos
Each content entry has a photo field set to `null` (which renders a dashed
placeholder). Drop images into `public/images/` and point the field at them,
e.g.:

```js
export const artist = {
  ...
  heroPhoto: '/images/hero.jpg',
}
```

## Customizing the palette

All colors are CSS custom properties at the top of `src/index.css`:

```css
:root {
  --ink: #0b0b0b;        /* background */
  --charcoal: #171717;
  --steel: #333333;
  --ash: #8f8f8c;
  --paper: #f6f5f1;      /* primary text */
  --gold: #c9a227;       /* accent — buttons, labels, stripes */
  --gold-bright: #e7c978;
  --gold-deep: #8f711a;
}
```

Gold is intentionally used sparingly — buttons, the pull-quote, ticket dates,
eyebrow labels, and thin accent lines in the rhythm bar and bio-portrait
stripe — rather than as a wash, to keep the "quality/editorial" feel.

## Notes

- No Framer Motion dependency — scroll reveals use `IntersectionObserver`
  directly via the `useScrollReveal` hook, so there's one less dependency
  to manage.
- Respects `prefers-reduced-motion`.
- Navbar collapses to a glass mobile panel below 860px.
