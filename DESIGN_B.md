# DESIGN.md — Digital Dynamics Consultants Group (v4 — Final)

## Project Overview
**Company:** Digital Dynamics Consultants Group (DDCG)
**Stack:** Next.js 14 (App Router) + Tailwind CSS
**Aesthetic:** Renaissance-inspired — warm off-white & near-black, editorial serif + clean sans, generous whitespace, ghost text depth elements, scroll animations, custom cursor, grain texture
**Inspiration:** The Renaissance Edition (Shopify Editions Winter 2026 — Awwwards SOTD)

---

## Brand Identity

### Logo — DD Atom Mark
The logo is an animated atom where the letters "DD" form the nucleus, with three elliptical orbital paths at 60° intervals and three electrons orbiting at different speeds.

**Concept:** DD as atomic nucleus — three orbital paths at 0°, 60°, -60°
**Style:** Sans-serif, no enclosing circle — DD floats freely inside the orbital paths
**Font:** DM Sans 800 weight for the DD lettermark
**Electrons:** Three filled circles, each on its own tilted elliptical orbit
**Animation:** Each electron orbits at a different speed (0.42, 0.28, 0.56 rad/sec) with different start offsets (0, 2.1, 4.2 rad) — they never sync, always feel organic

**Light version:** `#1C1C16` orbits + DD + electrons on transparent/cream bg
**Dark version:** `#F5F2EB` orbits + DD + electrons on `#1C1C16` bg

**Logo dimensions:**
- Mark only: 260×260px canvas
- Horizontal lockup: 380×90px canvas
- Small/nav: 80×80px mark, scaled down proportionally

**Orbital math (parametric):**
```js
const phase = (t * speed + offset) % (Math.PI * 2);
const angleRad = angleDeg * Math.PI / 180;
const lx = Math.cos(phase) * rx;
const ly = Math.sin(phase) * ry;
const ex = cx + lx * Math.cos(angleRad) - ly * Math.sin(angleRad);
const ey = cy + lx * Math.sin(angleRad) + ly * Math.cos(angleRad);
```

**Orbital parameters:**
- rx: 105, ry: 38 (full size) / rx: 37, ry: 13 (nav size)
- Orbit angles: [0, 60, -60] degrees
- Electron speeds: [0.42, 0.28, 0.56] rad/sec
- Electron offsets: [0, 2.1, 4.2] rad
- Electron radius: 7px (full) / 4px (nav)
- Orbit stroke: 2.2px, opacity 0.62 (light) / 0.55 (dark)

---

## Color Tokens

```css
--cream:    #F5F2EB   /* Page background */
--cream2:   #EDE9DF   /* Section alternate background */
--cream3:   #E4DFD2   /* Deeper warm surface */
--ink:      #1C1C16   /* Primary text, headings, logo */
--ink2:     #2E2E24   /* Button hover */
--ink3:     #3D3D31   /* Italic headings, em tags */
--muted:    #7A7868   /* Body copy, descriptions */
--muted2:   #9A9886   /* Labels, metadata, eyebrow lines */
--border:   rgba(28,28,22,0.10)  /* Default borders */
--border2:  rgba(28,28,22,0.06)  /* Subtle borders */
```

---

## Typography

### Fonts
- **Display/Headings:** `Cormorant Garamond` — weights 400, 600 (italic for em tags)
- **Body/UI/Logo:** `DM Sans` — weights 300, 400, 500, 700, 800

### Scale
| Element            | Font               | Size                     | Weight | Style         |
|--------------------|--------------------|--------------------------|--------|---------------|
| Hero H1            | Cormorant Garamond | clamp(64px, 9vw, 120px)  | 600    | line-height 0.95, -0.03em |
| Section H2         | Cormorant Garamond | clamp(44px, 5.5vw, 72px) | 600    | line-height 1.05, -0.02em |
| Service row H3     | Cormorant Garamond | clamp(28px, 3.5vw, 44px) | 600    | -0.02em       |
| Portfolio H3       | Cormorant Garamond | clamp(22px, 2.8vw, 36px) | 600    | -0.02em       |
| Stat numbers       | Cormorant Garamond | 64px                     | 600    | -0.03em       |
| About big stmt     | Cormorant Garamond | clamp(44px, 5.5vw, 72px) | 600    | -0.02em       |
| Body copy          | DM Sans            | 16–17px                  | 300    | line-height 1.85–1.9 |
| Nav links          | DM Sans            | 12px                     | 500    | uppercase, 0.08em |
| Eyebrow labels     | DM Sans            | 11px                     | 500    | uppercase, 0.14em |
| Tags               | DM Sans            | 11px                     | 500    | uppercase, 0.06em |
| Form labels        | DM Sans            | 11px                     | 500    | uppercase, 0.10em |
| Logo wordmark      | DM Sans            | 15px                     | 500    | uppercase, 0.08em |
| DD mark            | DM Sans            | 52px canvas / 18px nav   | 800    | letter-spacing -3 |

### Key Rule
All `<em>` tags in headings = italic Cormorant Garamond in `--ink3` color

---

## Ghost Text Elements
Three ghost text elements provide depth — large italic Cormorant Garamond, color transparent, webkit-text-stroke 1px at very low opacity:

| Location     | Text       | Size              | Position          | Opacity |
|--------------|------------|-------------------|-------------------|---------|
| Hero         | "Dynamics" | clamp(160px,24vw,320px) | centered, parallax on scroll | 0.06 stroke |
| About section | "DDCG"    | clamp(200px,28vw,380px) | right side, parallax | 0.05 stroke |
| Contact section | "Hello" | clamp(160px,22vw,300px) | bottom right      | 0.04 stroke |

Parallax: hero ghost moves at 0.18× scroll speed, about ghost at 0.12× relative to section

---

## Animations

### Page Load (Hero)
- Eyebrow label: `fadeUp` 1s ease, delay 0.3s
- H1 line 1 "Scale Faster.": `lineUp` (translateY 100%→0, opacity 0→1) 1s ease, delay 0.5s
- H1 line 2 "Build Smarter.": same, delay 0.65s
- H1 line 3 "Lead the Market.": same, delay 0.8s
- Hero bottom (subtext + CTAs): `fadeUp` 1s ease, delay 1.0s

### Scroll Reveal
All sections, cards, stats use `.reveal` class:
```css
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
.reveal.visible { opacity: 1; transform: translateY(0); }
```
Triggered by IntersectionObserver at threshold 0.12. Stagger delays: 0.1s, 0.2s, 0.3s, 0.4s

### Hover Interactions
- **Nav links:** underline sweeps left→right (`scaleX 0→1`) on hover
- **Logo mark:** rotates 8° on hover
- **Service rows:** thin ink line sweeps across bottom border on hover + arrow moves diagonally (+5px, -5px)
- **Portfolio rows:** `padding-left` increases 16px on hover + bottom border sweeps
- **Pillar rows:** `padding-left` increases 8px + color brightens
- **Contact items:** `padding-left` increases 8px on hover
- **Primary buttons:** `translateY(-2px)` on hover
- **Tags:** border and text color darken slightly on parent hover

### Custom Cursor
- Small dot: 10px circle, `#1C1C16`, follows mouse exactly
- Ring: 36px circle, 1px border `rgba(28,28,22,0.3)`, follows with lag (0.12 lerp factor)
- On interactive elements: dot shrinks to 6px, ring expands to 56px

### Grain Texture
```css
body::after {
  content: ''; position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  opacity: 0.028; pointer-events: none; z-index: 9999;
}
```

---

## Layout & Spacing

- Nav height: 72px, sticky
- Section padding desktop: `120px 60px`
- Section padding mobile: `72px 24px`
- Hero padding: `0 60px 80px`, min-height 100vh
- About / Contact column gap: `100px`
- Services / Portfolio list gap: hairline `1px solid var(--border)` between rows
- Footer padding: `0 60px`

---

## Components

### Navbar
- Animated DD atom canvas mark (80×80, scaled in nav, light version)
- "Digital Dynamics" wordmark next to mark (DM Sans 500, uppercase)
- Nav links: Services, About, Work, Contact — smooth scroll
- CTA: solid `--ink` button "Get Started" → scrolls to #contact

### Hero
- Full viewport, flex column, justify-content: center
- CSS grid background overlay (80×80px, 3% cyan opacity, radial masked)
- Radial orb top-right
- Ghost text "Dynamics" with parallax
- Eyebrow line + staggered H1 line animations
- Bottom row: subtext left + two CTAs right

### Stats Bar
- 4-column, 1px gap, `--border` background, `--cream` cells
- Left-aligned, Cormorant Garamond 600 64px numbers
- No glow — clean typographic

### Services (List layout)
- `--cream2` background
- Numbered rows (01–04) with italic Cormorant number
- Each row: number | content (H3 + body + tags) | arrow
- Hover: bottom border sweeps ink, arrow moves ↗, tags darken

### About (Dark panel)
- `--ink` background, cream text
- 2-column: LEFT = big statement + 2×2 metrics grid | RIGHT = discipline pillar list
- Ghost "DDCG" with parallax

### Portfolio (List layout)
- `--cream2` background
- 3-row list: category | title | result number (right-aligned)
- Hover: row slides right, border sweeps

### Contact
- `--cream` background
- 2-column: info + contact items list LEFT | form RIGHT
- Ghost "Hello" bottom right

### Footer
- `--ink` background
- Top: logo + desc left, 3 link columns right
- Bottom: copyright left, tagline right

---

## Page Sections Order
Navbar → Hero → StatsBar → Services → About → Portfolio → Contact → Footer

---

## Copy
- **Hero H1:** "Scale Faster. / *Build Smarter.* / Lead the Market."
- **Tagline:** "Built with purpose. Driven by results."
- **Email:** hello@digitaldynamicscg.com
- **Location:** Jackson, MS — Serving Clients Nationwide
- **Est.:** 2024

---

## SEO
```
Title: Digital Dynamics Consultants Group | Scale. Transform. Lead.
Description: Full-service consulting — marketing, AI content, digital transformation, software engineering, and logistics.
OG Title: Digital Dynamics Consultants Group
OG Description: Scale Faster. Build Smarter. Lead the Market.
```

---

## File Structure
```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Navbar.tsx
  Hero.tsx
  StatsBar.tsx
  Services.tsx
  About.tsx
  Portfolio.tsx
  Contact.tsx
  Footer.tsx
/components/logo
  AtomLogo.tsx       ← animated canvas logo component
```
