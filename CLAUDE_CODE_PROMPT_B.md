# Claude Code Prompt — Digital Dynamics Consultants Group (v4 Final)

Paste everything below this line into Claude Code after running `claude` in your project folder.

---

Build a complete Next.js 14 website for **Digital Dynamics Consultants Group (DDCG)**. Use the App Router, TypeScript, and Tailwind CSS. Follow `DESIGN.md` exactly for all design decisions. The `AtomLogo.tsx` file in this folder is the pre-built animated logo component — copy it directly into `/components/logo/AtomLogo.tsx`.

## Step 1 — Project Setup

1. Scaffold Next.js 14 with App Router, TypeScript, Tailwind CSS
2. Install Google Fonts via `next/font/google`: `Cormorant_Garamond` (400, 600, italic) and `DM_Sans` (300, 400, 500, 700, 800)
3. Copy `AtomLogo.tsx` from this folder into `/components/logo/AtomLogo.tsx`
4. Define all CSS variables from DESIGN.md in `globals.css`

---

## Step 2 — globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --cream: #F5F2EB;
  --cream2: #EDE9DF;
  --cream3: #E4DFD2;
  --ink: #1C1C16;
  --ink2: #2E2E24;
  --ink3: #3D3D31;
  --muted: #7A7868;
  --muted2: #9A9886;
  --border: rgba(28,28,22,0.10);
  --border2: rgba(28,28,22,0.06);
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-dm-sans), sans-serif;
  background: var(--cream);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  cursor: none;
}

/* Grain overlay */
body::after {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.028;
  pointer-events: none;
  z-index: 9999;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* Hero line animation */
@keyframes lineUp {
  from { opacity: 0; transform: translateY(100%); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Mobile cursor reset */
@media (max-width: 900px) {
  body { cursor: auto; }
}
```

---

## Step 3 — app/layout.tsx

```tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Digital Dynamics Consultants Group | Scale. Transform. Lead.',
  description: 'Full-service consulting — marketing, AI content, digital transformation, software engineering, and logistics.',
  openGraph: {
    title: 'Digital Dynamics Consultants Group',
    description: 'Scale Faster. Build Smarter. Lead the Market.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Step 4 — Components

Build each as its own `.tsx` file. Use CSS variables — no hardcoded hex.

---

### /components/Cursor.tsx
Custom cursor with dot + lagging ring. Add this as the first component in page.tsx:
- Dot: 10px circle, `--ink` fill, follows mouse exactly
- Ring: 36px circle, `rgba(28,28,22,0.3)` border, follows with 0.12 lerp lag using `requestAnimationFrame`
- On hover over `a, button, .service-row, .portfolio-row, .pillar`: dot shrinks to 6px, ring expands to 56px
- Hide on mobile (max-width 900px)
- Use `'use client'` directive

---

### /components/Navbar.tsx
- Sticky, height 72px, `backdrop-filter: blur(20px)`, background `rgba(245,242,235,0.92)`
- Border-bottom with `--border`
- Left: `<AtomLogo size={64} dark={false} />` + "Digital Dynamics" (DM Sans 500, uppercase, 15px, 0.08em tracking)
- Logo mark rotates 8° on hover (`transition: transform 0.3s`)
- Center: nav links — Services, About, Work, Contact. 12px, 500, uppercase, 0.08em. Color `--muted`, hover `--ink`. Underline sweeps left→right on hover using `::after` with `scaleX(0→1)`
- Right: solid `--ink` button "Get Started" → smooth scroll to #contact. Hover: `--ink2` bg, `translateY(-1px)`
- `'use client'` for smooth scroll

---

### /components/Hero.tsx
- `min-height: 100vh`, flex column, justify-content: center, padding `100px 60px 80px`
- CSS grid background: 80×80px lines at 3% `rgba(28,28,22,0.03)` opacity, radial gradient mask
- Radial orb: 600×600px, top-right, `rgba(28,28,22,0.03)`
- **Ghost text:** "Dynamics" — Cormorant Garamond, `clamp(160px,24vw,320px)`, 600, italic, `color: transparent`, `-webkit-text-stroke: 1px rgba(28,28,22,0.06)`, centered. Parallax: moves `scrollY * 0.18`px on scroll (use `useEffect` + scroll listener)
- **Eyebrow:** line (28px, 1px, `--muted2`) + "Full-Service Digital & Technology Consultants". Animates in with `fadeUp` at 0.3s delay
- **H1:** Three lines, each wrapped in `<span class="line"><span class="line-inner">`. Each inner span animates with `lineUp` 1s ease:
  - "Scale Faster." — delay 0.5s — `color: var(--ink)`
  - "Build Smarter." — delay 0.65s — `<em>` italic `--ink3`
  - "Lead the Market." — delay 0.8s — `color: var(--ink)`
- **Bottom row** (flex, space-between, align flex-end, margin-top 48px, animates in at 1.0s):
  - Left: subtext 16px 300 `--muted`, max-width 440px
  - Right: two buttons — solid ink primary + ghost secondary
- Bottom: "Est. 2024 — Jackson, MS" small italic label
- `'use client'` for parallax

---

### /components/StatsBar.tsx
4 stats, 1px gap grid, `--cream` cells, `--border` background:
- Numbers: Cormorant Garamond 600, 64px, `--ink`, -0.03em tracking
- Labels: DM Sans 400, 12px, `--muted`, uppercase, 0.06em
- Left-aligned, padding `52px 48px`
- Stats: 150+ Clients Served | 8 Core Disciplines | 98% Client Retention | $40M+ Revenue Generated
- All cells have `.reveal` class with stagger delays

---

### /components/Services.tsx
- `--cream2` background, border-top and border-bottom `--border`
- Section eyebrow: line + "What We Do"
- H2: `Full-Spectrum <em>Expertise</em> Under One Roof`
- Short paragraph below H2
- **List of 4 service rows** — each is a flex row with:
  - Left: italic Cormorant number (01–04), `--muted2`, 18px
  - Middle (flex:1): H3 title + body paragraph + tag pills
  - Right: ↗ arrow, `--muted2`, transitions on hover
  - Bottom border `--border` on each row
  - Hover: bottom border sweeps ink (`::after scaleX(0→1)`), arrow moves `translate(5px,-5px)`, tags darken
- Four services: Marketing & Advertising | AI Reels & Content Creation | Digital Transformation | Logistics & Engineering
- Tags from DESIGN.md, styled: 11px, 500, `--muted`, `transparent` bg, `--border` border, 2px radius, uppercase

---

### /components/About.tsx
- `--ink` background, `--cream` text, border-top and border-bottom `--border`
- **Ghost text:** "DDCG" — cream stroke 0.05 opacity, right side, parallax at 0.12×
- 2-column grid, 100px gap:

**LEFT:**
- Section eyebrow (cream 0.35 opacity)
- Big statement H2: "Built by Experts. Driven by *Results.*" — Cormorant Garamond 600, `--cream`, italic em at 0.55 opacity
- Two paragraphs: 16px, 300, `rgba(245,242,235,0.55)`
- 2×2 metrics grid (same hairline gap pattern, `rgba(245,242,235,0.03)` cells): 8+ years / 150+ clients / 98% retention / $40M+ revenue. Numbers in Cormorant Garamond 40px `--cream`.

**RIGHT:**
- Section eyebrow "Our Disciplines"
- Pillar list (8 disciplines) with dot + text. Each row: flex, padding `18px 0`, border-bottom `rgba(245,242,235,0.06)`, hover: color brightens + `padding-left` increases 8px
- `'use client'` for parallax

---

### /components/Portfolio.tsx
- `--cream2` background, border-top `--border`
- Section eyebrow + H2 `Results That Speak <em>Louder</em>` + paragraph
- **3-row list** — each row is a 3-column grid (category | title | result):
  - Category: 11px, 700, `--muted2`, uppercase, 0.12em
  - Title: Cormorant Garamond 600, `clamp(22px,2.8vw,36px)`, `--ink`
  - Result: Cormorant Garamond 600, 48px, `--ink`, right-aligned. Label below: 11px `--muted` uppercase
  - Row hover: `padding-left` increases 16px, bottom border sweeps ink
- Three case studies from DESIGN.md

---

### /components/Contact.tsx
- `--cream` background, border-top `--border`
- **Ghost text:** "Hello" — bottom right, `rgba(28,28,22,0.04)` stroke opacity
- 2-column grid, 100px gap:

**LEFT:**
- Eyebrow + H2 `Let's Build Something <em>Great.</em>` + paragraph
- Contact items list (bordered card rows): email + location. Each row: flex, padding `22px 0`, border-bottom `--border`, hover: `padding-left` increases 8px. Icon: 40px square, `--cream2` bg, `--border` border

**RIGHT — Form:**
- Fields: Name + Company (row), Email + Phone (row), Service select, Project textarea
- Inputs: `--cream2` bg, `--border` border, 3px radius, `14px 18px` padding, `--ink` text. Focus: `--ink3` border
- Labels: 11px, 500, `--muted`, uppercase, 0.10em tracking
- Submit: full-width, `--ink` bg, `--cream` text, 13px 500 uppercase. Hover: `--ink2`, `translateY(-2px)`

---

### /components/Footer.tsx
- `--ink` background, `--cream` text, padding `0 60px`
- **Footer top** (padding `72px 0 56px`, flex space-between, border-bottom `rgba(245,242,235,0.1)`):
  - Left: `<AtomLogo size={40} dark={true} />` + "Digital Dynamics" wordmark + description paragraph
  - Right: 3 link columns (Services, Company, Connect) — 72px gap. Headers: 11px 500 cream 0.35 opacity. Links: 14px 300 cream 0.5 opacity, hover cream
- **Footer bottom** (padding `24px 0`, flex space-between):
  - Left: © copyright, 12px, cream 0.25 opacity
  - Right: "Built with purpose. Driven by results." same style

---

## Step 5 — app/page.tsx

```tsx
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

---

## Step 6 — Scroll Reveal Setup

In a `'use client'` layout or in each component, initialize IntersectionObserver:
```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  return () => observer.disconnect()
}, [])
```
Add this in a `RevealProvider` client component that wraps the page, or in each section component individually.

---

## Mobile Responsive (max-width: 900px)
- Hide nav links
- Reduce padding to `72px 24px`
- Stats: 2-column grid
- Services, About, Portfolio, Contact: 1-column
- Form rows: 1-column
- Footer: stack vertically
- Hide custom cursor (`cursor: auto` on body)

---

## Final Checklist
- [ ] AtomLogo.tsx copied to `/components/logo/AtomLogo.tsx`
- [ ] Animated electrons orbit correctly on their paths
- [ ] Hero H1 lines animate in with stagger on load
- [ ] Scroll reveal fires on all sections
- [ ] Ghost text parallax works on scroll
- [ ] Custom cursor dot + ring follows mouse
- [ ] All nav links smooth scroll to correct sections
- [ ] Service row hover animations work
- [ ] Grain texture visible (subtle) on page
- [ ] Mobile responsive at 900px
- [ ] `npm run build` passes with zero TypeScript errors
