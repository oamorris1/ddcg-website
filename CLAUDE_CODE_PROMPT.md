# Claude Code Prompt — Digital Dynamics Consultants Group (v3)

Paste everything below this line into Claude Code after running `claude` in your project folder.

---

Build a complete Next.js 14 website for **Digital Dynamics Consultants Group (DDCG)** using the App Router and Tailwind CSS. Follow the DESIGN.md in this folder for all design decisions. The aesthetic is a dark premium agency style inspired by the Markem Webflow template — editorial, bold typography, disciplined whitespace, hairline borders.

## Initial Setup

1. Scaffold a Next.js 14 project with App Router, TypeScript, and Tailwind CSS
2. Install Google Fonts via `next/font/google`: `Syne` (700, 800) and `DM Sans` (300, 400, 500)
3. Define all CSS custom properties from DESIGN.md in `globals.css`
4. Set `html { scroll-behavior: smooth }` and base body styles in globals.css

---

## globals.css

Define these CSS variables and base styles:

```css
:root {
  --bg: #07090D;
  --bg2: #0C0F15;
  --bg3: #12161E;
  --bg4: #171C26;
  --cyan: #00C8F0;
  --cyan-dim: rgba(0,200,240,0.09);
  --cyan-glow: rgba(0,200,240,0.28);
  --blue: #2563EB;
  --text: #F4F7FB;
  --text-sub: #A0B2C4;
  --text-muted: #5E7487;
  --border: rgba(255,255,255,0.06);
  --border-light: rgba(255,255,255,0.10);
  --border-cyan: rgba(0,200,240,0.22);
}
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-dm-sans), sans-serif;
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}
```

---

## Components

Build each as its own `.tsx` file in `/components`. Use CSS modules or inline Tailwind utility classes. All colors must reference CSS variables — no hardcoded hex values except where noted.

---

### Navbar.tsx
- Sticky, height 74px, `backdrop-filter: blur(24px)`, background `rgba(7,9,13,0.92)`, border-bottom with `--border`
- Left: logo mark (DD in 36px rounded square, cyan-to-blue gradient, white text) + "Digital Dynamics" (Dynamics in `--cyan`)
- Center: nav links — Services, About, Work, Contact. 13px, 500 weight, uppercase, 0.07em tracking. Color `--text-sub`, hover white. Smooth scroll on click.
- Right: solid cyan CTA button — "Get Started". 13px, 700, uppercase. Hover: `translateY(-1px)` + cyan glow. Clicks smooth-scroll to `#contact`.

---

### Hero.tsx
- `min-height: 100vh`, flex column, justify-content: center, padding `100px 60px 80px`
- Background: CSS grid overlay 80×80px at 3% cyan opacity, masked with radial gradient
- Single radial orb top-right: blue/cyan gradient, 900×900px, no pointer events
- **Eyebrow row:** 40px cyan line + "Full-Service Digital & Technology Consultants" (12px, 700, cyan, 0.14em tracking, uppercase). Margin bottom 40px.
- **H1:** Three lines using Syne 800, `clamp(56px, 8vw, 100px)`, -0.04em tracking, line-height 1.03:
  - "Scale Faster." — color `#FFFFFF`
  - "Build Smarter." — color `var(--cyan)`
  - "Lead the Market." — color `rgba(255,255,255,0.35)`
- **Bottom row** (flex, space-between, align flex-end, margin-top 56px):
  - Left: subtext paragraph, 17px, weight 300, `--text-sub`, max-width 480px, line-height 1.85
  - Right: two buttons side by side:
    - Primary: solid cyan, dark text, "Schedule a Consultation"
    - Ghost: transparent, `--border-light` border, `--text-sub` text, "Our Services →"
  - Both buttons: 15px padding top/bottom, 34px left/right, border-radius 6px, hover translateY(-2px) + glow

---

### StatsBar.tsx
- 4-column CSS grid, 1px gap, `--border` as grid background color, `--bg2` cell background
- Border-top and border-bottom with `--border`
- Each stat: padding `48px 52px`, left-aligned (not centered)
- Stat number: Syne 800, 54px, -0.04em tracking, white — with cyan `<span>` for suffix (+, %, M+)
- Stat label: 14px, 400, `--text-muted`, 0.03em tracking

---

### Services.tsx
- Section padding `120px 60px`
- **Section header:** eyebrow ("What We Do") + H2 "Full-Spectrum **Expertise** Under One Roof" (Expertise in cyan em) + short paragraph below
- **2×2 card grid:**
  - Grid: `1px` gap, `--border` background, `border: 1px solid var(--border)`, `border-radius: 16px`, `overflow: hidden`
  - Each card: `--bg2` bg, padding `60px 56px`, flex column
  - **Card top row** (flex, space-between): service icon left (54px square, `--cyan-dim` bg, `--border-cyan` border, 14px radius) + arrow icon top-right (36px square, `--border-light` border, 8px radius, `--text-muted` color)
  - H3: Syne 700, 26px, -0.03em tracking, white, line-height 1.25
  - Body: 15px, 300 weight, `--text-sub`, line-height 1.85, flex: 1
  - Hairline divider: 1px, `--border`, full width
  - Tag pills: 11px, 600, `--cyan`, `--cyan-dim` bg, `--border-cyan` border, 4px radius, 5px/12px padding
  - Hover: card bg → `--bg3`, arrow border → `--border-cyan`, arrow color → `--cyan`
- Four services: Marketing & Advertising (📣), AI Reels & Content Creation (🎬), Digital Transformation (⚡), Logistics & Engineering (🏗️). Tags from DESIGN.md.

---

### About.tsx
- `--bg2` background, border-top and border-bottom with `--border`
- Section padding `120px 60px`
- **2-column grid, 100px gap, align items center:**

**LEFT column:**
  - Eyebrow ("About DDCG")
  - Big statement: Syne 800, `clamp(48px, 5.5vw, 72px)`, -0.04em tracking, line-height 1.06, white. "Results." in cyan em. Four lines: "Built by / Experts. / Driven by / Results."
  - **2×2 metrics grid** below (margin-top 48px): same hairline gap pattern as services, `--bg3` cells, border + 12px radius. Each cell: padding 28px 32px. Metric number: Syne 800, 36px, -0.03em, cyan. Metric label: 13px, 400, `--text-muted`. Four metrics: 8+ years / 150+ clients / 98% retention / $40M+ revenue.

**RIGHT column:**
  - Two paragraphs: 16px, 300, `--text-sub`, line-height 1.9
  - **Pillar list** (margin-top 44px): `border: 1px solid var(--border)`, `border-radius: 12px`, `overflow: hidden`
  - Each pillar row: flex, align center, gap 18px, padding `18px 24px`, `--bg3` bg, border-bottom `--border`, hover → `--bg4`. Last row no border-bottom.
  - Pillar dot: 7px circle, `--cyan` bg, flex-shrink 0
  - Pillar text: 15px, 400, `#C8D8E8`

---

### Portfolio.tsx
- Section padding `120px 60px`
- **Section header:** eyebrow + H2 "Results That Speak **Louder**" + paragraph
- **3-column card grid** (margin-top 72px): same hairline gap pattern, `border-radius: 16px`, `overflow: hidden`
- Each card: `--bg2` bg, padding `48px 44px`, hover → `--bg3`
- **Card top:** flex, space-between — category label (10px, 700, cyan, 0.15em tracking, uppercase) + arrow icon (30px square, `--border-light` border, 6px radius, `--text-muted`). Hover: arrow border → `--border-cyan`, color → `--cyan`
- Hairline divider below top row
- H3: Syne 700, 20px, -0.02em, white, line-height 1.35
- Body: 14px, 300, `--text-sub`, line-height 1.85, margin-bottom 32px
- Result number: Syne 800, 40px, white, -0.04em — suffix in cyan span
- Result label: 13px, 400, `--text-muted`, margin-top 8px

---

### Contact.tsx
- `--bg2` background, border-top with `--border`, section padding `120px 60px`
- **2-column grid, 100px gap:**

**LEFT:**
  - Eyebrow ("Get In Touch")
  - H2: "Let's Build Something **Great.**" (Great in cyan em), `clamp(36px, 4.5vw, 58px)`, Syne 800
  - Paragraph: 16px, 300, `--text-sub`, line-height 1.9
  - **Contact items card:** `border: 1px solid var(--border)`, `border-radius: 12px`, overflow hidden. Two rows (email + location). Each row: flex, align center, gap 20px, padding `22px 28px`, `--bg3` bg, border-bottom, hover → `--bg4`. Icon: 42px square, `--cyan-dim` bg, `--border-cyan` border, 10px radius. Title 15px 500 `#D4E2EE`, subtitle 13px `--text-muted`.

**RIGHT — Contact form:**
  - Form fields: Name + Company (row), Email + Phone (row), Service Interest (select), Project Description (textarea)
  - All inputs: `--bg3` bg, `--border-light` border, 8px radius, padding `14px 18px`, 15px font, `--text` color. Placeholder: `#2E3D4E`. Focus: `--border-cyan` + `box-shadow: 0 0 0 3px rgba(0,200,240,0.06)`
  - Labels: 11px, 700, `--text-muted`, 0.10em tracking, uppercase
  - Submit: full width, solid `--cyan`, dark text, 17px padding, 8px radius, 15px 700. Hover: glow + translateY(-2px)
  - Service select options: Marketing & Advertising, AI Reels & Content Creation, Digital Transformation, Logistics & Engineering, Multiple Services

---

### Footer.tsx
- `--bg` background, border-top with `--border`, padding `0 60px`
- **Footer top** (padding `64px 0 48px`, flex, space-between, border-bottom `--border`):
  - Left: logo mark + "Digital Dynamics" text (same as nav) + description paragraph (14px, 300, `--text-muted`)
  - Right: three link columns side by side (64px gap):
    - Services: Marketing, AI Content, Digital Transformation, Logistics
    - Company: About Us, Our Work, Contact, Privacy Policy
    - Connect: LinkedIn, Instagram, Twitter/X, YouTube
  - Column headers: Syne 700, 12px, white, 0.10em tracking, uppercase, margin-bottom 20px
  - Links: 14px, `--text-muted`, no underline, hover → `--cyan`
- **Footer bottom** (padding `24px 0`, flex, space-between):
  - Left: "© 2025 Digital Dynamics Consultants Group. All rights reserved."
  - Right: "Built with purpose. Driven by results."
  - Both: 13px, `--text-muted`

---

## app/page.tsx

```tsx
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
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
```

---

## app/layout.tsx

```tsx
import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'Digital Dynamics Consultants Group | Scale. Transform. Lead.',
  description: 'Full-service consulting firm specializing in marketing, AI content creation, digital transformation, software engineering, and logistics.',
  openGraph: {
    title: 'Digital Dynamics Consultants Group',
    description: 'Scale Faster. Build Smarter. Lead the Market.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Mobile Responsive Rules

Apply these breakpoints at `max-width: 900px`:
- Nav: hide nav links, reduce padding to `0 24px`
- Hero: reduce padding to `72px 24px`, stack hero-bottom vertically
- Stats bar: 2-column grid
- Services grid: 1-column
- About grid: 1-column (hide left column's visual on very small screens)
- Portfolio grid: 1-column
- Contact grid: 1-column
- Form rows: 1-column
- Footer: stack vertically, reduce padding

---

## Final Checklist

- [ ] All smooth scroll nav links work (`#services`, `#about`, `#portfolio`, `#contact`)
- [ ] "Get Started" and "Schedule a Consultation" both scroll to `#contact`
- [ ] Service card hover: bg darkens + arrow border turns cyan
- [ ] Pillar rows and contact items have hover background transitions
- [ ] Form inputs show cyan focus ring
- [ ] All fonts load correctly via `next/font`
- [ ] CSS variables defined in globals.css and used consistently
- [ ] Mobile responsive at 900px breakpoint
- [ ] `npm run build` passes with zero errors
- [ ] No hardcoded hex colors in components — use CSS variables

