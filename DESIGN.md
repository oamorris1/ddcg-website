# DESIGN.md — Digital Dynamics Consultants Group (v3)

## Project Overview
**Company:** Digital Dynamics Consultants Group (DDCG)
**Type:** Full-service consulting — marketing, AI content, digital transformation, logistics & engineering
**Stack:** Next.js 14 (App Router) + Tailwind CSS
**Inspiration:** Markem Webflow template — editorial, bold, premium agency aesthetic
**Goal:** Generate leads, showcase services, build brand credibility

---

## Brand Identity

### Name & Logo
- Full name: **Digital Dynamics Consultants Group**
- Short: **DDCG**
- Logo mark: "DD" in a rounded square with cyan-to-blue gradient, white text
- Nav display: "Digital **Dynamics**" — Dynamics in cyan
- Tagline: "Scale Faster. Build Smarter. Lead the Market."

### Aesthetic
Dark premium agency. Editorial and cinematic. Think bold oversized typography,
disciplined whitespace, hairline borders, and a cool cyan accent cutting through near-black backgrounds.
Inspired by Markem — confident, structured, no decoration for decoration's sake.

---

## Color Tokens

```css
--bg:           #07090D   /* Page background — near black */
--bg2:          #0C0F15   /* Section/card background */
--bg3:          #12161E   /* Hover states, nested cards, form inputs */
--bg4:          #171C26   /* Deep hover on list items */
--cyan:         #00C8F0   /* Primary accent — CTAs, highlights, icons */
--cyan-dim:     rgba(0,200,240,0.09)   /* Subtle cyan fills */
--cyan-glow:    rgba(0,200,240,0.28)   /* Glow on hover */
--blue:         #2563EB   /* Secondary — logo gradient only */
--text:         #F4F7FB   /* Primary text */
--text-sub:     #A0B2C4   /* Body copy, descriptions */
--text-muted:   #5E7487   /* Labels, metadata, footer copy */
--border:       rgba(255,255,255,0.06)  /* Default hairline borders */
--border-light: rgba(255,255,255,0.10)  /* Slightly visible borders */
--border-cyan:  rgba(0,200,240,0.22)    /* Cyan-tinted borders */
```

---

## Typography

### Fonts (Google Fonts)
- **Display/Headings:** `Syne` — weights 700, 800
- **Body/UI:** `DM Sans` — weights 300, 400, 500 (optical size 9..40)

### Scale
| Element            | Font    | Size                        | Weight | Letter Spacing |
|--------------------|---------|-----------------------------|--------|----------------|
| Hero H1            | Syne    | clamp(56px, 8vw, 100px)     | 800    | -0.04em        |
| Section H2         | Syne    | clamp(40px, 5vw, 64px)      | 800    | -0.04em        |
| About statement    | Syne    | clamp(48px, 5.5vw, 72px)    | 800    | -0.04em        |
| Contact H2         | Syne    | clamp(36px, 4.5vw, 58px)    | 800    | -0.04em        |
| Service card H3    | Syne    | 26px                        | 700    | -0.03em        |
| Portfolio card H3  | Syne    | 20px                        | 700    | -0.02em        |
| Stat numbers       | Syne    | 54px                        | 800    | -0.04em        |
| Body copy          | DM Sans | 16–17px                     | 300    | 0.01em         |
| Nav links          | DM Sans | 13px                        | 500    | 0.07em         |
| Section eyebrow    | DM Sans | 11px                        | 700    | 0.16em         |
| Tags/badges        | DM Sans | 11px                        | 600    | 0.05em         |
| Form labels        | DM Sans | 11px                        | 700    | 0.10em         |

### Line Heights
- Hero H1: 1.03
- Section H2: 1.08
- Body copy: 1.85–1.90
- Card titles: 1.25–1.35

---

## Layout & Spacing

- Nav height: 74px, sticky
- Section padding desktop: `120px 60px`
- Section padding mobile: `72px 24px`
- Footer padding: `0 60px`
- Card grid gap: `1px` (hairline, border color as background)
- Grid border-radius: `16px` with `overflow: hidden`
- About/Contact column gap: `100px`
- Hero content max-width: `1100px`
- Section header max-width: `720px`

---

## Key Design Patterns

### Eyebrow Labels
All section labels use this pattern — a short cyan line + uppercase text:
```html
<div class="section-eyebrow">
  <div class="eyebrow-line"></div>  <!-- 28px wide, 1px tall, cyan -->
  <span>Section Name</span>         <!-- 11px, 700, cyan, 0.16em tracking -->
</div>
```

### Hairline Grid Layout
Cards/grids use `1px` gap with the border color as the grid background,
plus `border: 1px solid var(--border)` and `border-radius: 16px; overflow: hidden`
This creates a clean cell-separator effect without visible outer border.

### Hero H1 Three-Line Treatment
```
Scale Faster.          ← white #FFFFFF
Build Smarter.         ← cyan var(--cyan)
Lead the Market.       ← dimmed rgba(255,255,255,0.35)
```
This creates a cinematic fade-down effect — the most important line is brightest.

### Stat Number Treatment
Large Syne 800 numbers in white, with only the suffix (+ % M+) in cyan:
`150<span style="color:var(--cyan)">+</span>`

### Portfolio Result Numbers
Large Syne 800 in white with cyan suffix — same pattern as stats.
No glow effect — clean and typographic.

---

## Components

### Navbar
- `position: sticky; top: 0; backdrop-filter: blur(24px)`
- Background: `rgba(7,9,13,0.92)`
- Logo: DD mark (gradient square) + "Digital Dynamics" text
- Links: uppercase, 13px, `--text-sub` → white on hover
- CTA: **solid cyan button** (not ghost) — "Get Started"

### Hero
- `min-height: 100vh`, flex column, justify-content: center
- CSS grid overlay: 80×80px at 3% cyan opacity, radial mask
- Single radial orb top-right (blue/cyan gradient)
- Eyebrow line + text at top
- H1 three-line treatment (white / cyan / dim)
- Bottom row: subtext left + two CTA buttons right (flex, space-between)
- No ticker — clean open space

### Stats Bar
- 4-column, 1px gap grid
- Left-aligned text (not centered)
- White numbers, cyan suffix
- `--bg2` background

### Service Cards (2×2)
- Each card: icon top-left + arrow top-right in `.service-card-top`
- H3 title, body paragraph, hairline divider, tag pills
- Hover: background darkens, arrow border turns cyan

### About Section
- `--bg2` background
- 2-column: LEFT = big statement + 2×2 metrics grid | RIGHT = paragraphs + pillar list
- Pillar list: styled as a bordered card with hover rows
- Metrics grid: same hairline gap pattern, `--bg3` cells

### Portfolio Cards (3-column)
- Category label + arrow top
- Hairline divider
- Title, description, large result number (white + cyan suffix)

### Contact Section
- `--bg2` background
- 2-column: LEFT = heading + contact items list | RIGHT = form
- Contact items: bordered card with hover rows (same as pillars)
- Form inputs: `--bg3` background, subtle border, cyan focus ring

### Footer
- Two-part: `footer-top` (logo/desc left, 3 link columns right) + `footer-bottom` (copyright)
- Logo repeated with mark
- Three link columns: Services, Company, Connect
- Hairline divider between top and bottom

---

## Animations & Interactions

- **Nav CTA button:** `translateY(-1px)` + cyan glow on hover
- **Primary buttons:** `translateY(-2px)` + strong cyan glow on hover
- **Service card arrow:** border-color → cyan on parent hover
- **Pillar rows:** background darkens on hover (`--bg3` → `--bg4`)
- **Contact items:** same hover treatment as pillars
- **Form inputs:** `border-color` + `box-shadow: 0 0 0 3px rgba(0,200,240,0.06)` on focus
- No CSS animations or keyframes needed — all transitions only

---

## Page Sections (in order)

1. `<Navbar>` — sticky
2. `<Hero>` — full viewport, big H1, bottom-aligned CTAs
3. `<StatsBar>` — 4 metrics, left-aligned
4. `<Services>` — intro paragraph, 2×2 card grid
5. `<About>` — big statement + metrics left, copy + pillars right
6. `<Portfolio>` — intro paragraph, 3 case study cards
7. `<Contact>` — contact info left, form right
8. `<Footer>` — full footer with link columns

---

## Copy & Content

### Hero
- Eyebrow: "Full-Service Digital & Technology Consultants"
- H1 line 1: "Scale Faster." (white)
- H1 line 2: "Build Smarter." (cyan)
- H1 line 3: "Lead the Market." (dim white)
- Subtext: "Digital Dynamics Consultants Group delivers end-to-end solutions — from AI-powered content and aggressive marketing to enterprise-grade tech transformation and logistics optimization."
- CTA Primary: "Schedule a Consultation"
- CTA Ghost: "Our Services →"

### Stats (update with real numbers)
- 150+ / Clients Served
- 8 / Core Disciplines
- 98% / Client Retention
- $40M+ / Revenue Generated

### Services
1. **Marketing & Advertising** — Social Media, Paid Ads, Traditional Media, Brand Strategy, SEO/SEM
2. **AI Reels & Content Creation** — AI Video, Reels & Shorts, Brand Films, Content Strategy
3. **Digital Transformation** — SDLC, Data Migration, Cloud Infra, Software Engineering, Agile
4. **Logistics & Engineering** — Supply Chain, Operations, Engineering Planning, Process Design

### About
- Big statement: "Built by Experts. Driven by Results."
- Para 1: DDCG founded on belief that businesses deserve truly excellent partners. Specialists across marketing, tech, engineering, logistics — genuine expertise, not generalists.
- Para 2: From startup social presence to Fortune 500 digital transformation. Senior-led work, no templates, no shortcuts.

### Portfolio (replace with real case studies)
- Marketing → "Regional Retail Brand Scale-Up" → 340% increase in qualified leads
- AI Content → "AI-Powered Content Engine" → 12× content output increase
- Digital Transformation → "Enterprise Legacy Migration" → 60% reduction in infrastructure costs

### Contact
- Email: hello@digitaldynamicscg.com
- Coverage: Serving Clients Nationwide, Remote & on-site

### Footer tagline
"Built with purpose. Driven by results."

---

## SEO Metadata

```
Title: Digital Dynamics Consultants Group | Scale. Transform. Lead.
Description: Full-service consulting firm specializing in marketing, AI content creation, digital transformation, software engineering, and logistics. We help businesses scale faster and lead their market.
OG Title: Digital Dynamics Consultants Group
OG Description: Scale Faster. Build Smarter. Lead the Market.
```

---

## File Structure (Next.js App Router)

```
/app
  layout.tsx          ← fonts, metadata, globals
  page.tsx            ← assembles all sections
/components
  Navbar.tsx
  Hero.tsx
  StatsBar.tsx
  Services.tsx
  About.tsx
  Portfolio.tsx
  Contact.tsx
  Footer.tsx
/styles
  globals.css         ← CSS variables, base styles, Tailwind directives
```
