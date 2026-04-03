# DDCG Website — Project Status

## Current State
- **Live URL:** https://ddcg.net
- **Vercel URL:** https://ddcg-website-tau.vercel.app
- **Active Branch (Live):** `version-c` (deployed to production)
- **In Development:** `version-d` (dark cinematic pivot)
- **Previous Builds:** `version-b` (cream/ink Renaissance), `master` (dark/light editorial)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Fonts: Cormorant Garamond (display) + DM Sans (body/headings)
- Email: Resend API (noreply@ddcg.net → info@ddcg.net)
- Hosting: Vercel
- Domain: ddcg.net (DNS via Spaceship)
- Email Inbox: Spacemail Pro (info@ddcg.net)

## DNS Records (Spaceship)
- A: `@` → `216.198.79.1` (Vercel)
- CNAME: `www` → `30d1dab1de44ac25.vercel-dns-017.com` (Vercel)
- MX: `send` → `feedback-smtp.us-east-1.amazonses.com` priority 10 (Resend)
- TXT: `resend._domainkey` → DKIM key (Resend)
- TXT: `send` → `v=spf1 include:amazonses.com ~all` (Resend)
- TXT: `_dmarc` → `v=DMARC1; p=none;` (Resend)

## Email
- Spacemail Pro handles inbox for info@ddcg.net
- Resend handles outbound from contact form (noreply@ddcg.net)
- Domain verified in Resend (DKIM, SPF, DMARC)

## Version D — Dark Cinematic Pivot (In Development)
### Design Direction
- **Palette:** Near-black (#0A0A0F) base, deep blue (#1E3A5F) accent, subtle gold (#B8943E) used sparingly
- **Typography:** DM Sans for headings + body (Cormorant Garamond retained for legacy/display use)
- **Aesthetic:** Dark cinematic film studio look, inspired by filmart.ai but distinct identity
- **Nav:** Standard visible navbar on desktop, hamburger on mobile, dark glassmorphic

### Service Pivot (Version D)
Dropping software/SDLC and logistics. New focus:
1. **Film & Cinematography** — AI-powered brand films, commercial spots, visual storytelling
2. **AI Content Creation** — High-volume content, reels, brand narratives
3. **Custom Character Models** — Bespoke AI characters, brand personas, digital avatars
4. **Social Media & Brand Strategy** — Content calendars, SEO, analytics dashboards, campaign execution

### Key Components (Version D)
- **Hero** — Full-screen video (hero3.mp4), dark overlay, "Elevate Your Brand with AI Film & Content Creation"
- **StatsBar** — 4 dark surface cards (150+ Projects, 4 Services, 98% Retention, 10M+ Views)
- **Services** — 4 full-viewport pinned scroll panels with new service content, gold accents
- **About** — Dark section, updated disciplines for film/content focus
- **Portfolio** — Film-focused case studies (AI Brand Film, Content Engine, Brand Launch)
- **Contact** — Dark form, blue focus borders, Calendly placeholder ready
- **Footer** — Updated links, tagline "Film. Create. Elevate."
- **Cursor** — White dot + gold ring (50% opacity)

## Version C (LIVE)
### Key Components
- **Hero** — Full-screen looping video (hero3.mp4), dark gradient overlay, "Welcome to the Renaissance of Data-Driven Optimization"
- **StatsBar** — 4-column metrics with Cormorant Garamond numbers
- **Services** — 4 full-viewport pinned scroll panels: Marketing, AI Content, Digital Transformation, Logistics
- **About** — Dark section, chess image with parallax zoom, ghost "DDCG" text
- **Portfolio** — Analytics dashboard image, editorial list rows
- **Contact** — Working Resend email form with status feedback
- **Footer** — Dark section with AtomLogo, link columns
- **Cursor** — Custom dot + lagging ring (desktop only)

## Branches
| Branch | Description | Status |
|--------|-------------|--------|
| `version-d` | Dark cinematic, film/content pivot | **In Development** |
| `version-c` | Video hero, cinematic scroll panels, full imagery | **LIVE** |
| `version-b` | Cream/ink Renaissance, text-only, AtomLogo | Backup |
| `master` | Dark/light editorial, Inter Tight font | Archive |

## Video Assets (public/video/)
- hero3.mp4 (25MB) — Hero background (IN USE)
- hero1.mp4 (25MB) — Renaissance animated scene (alternate)
- hero2.mp4 (28MB) — Alternate Renaissance scene
- svc-marketing.mp4 (16MB) — Marketing service panel
- svc-ai-content.mp4 (16MB) — AI Content service panel
- svc-digital-transform.mp4 (14MB) — Digital Transform service panel
- svc-logistics.mp4 (16MB) — Logistics service panel
- beauty-bar.mp4 (38MB) — Demo reel asset
- holo-reel.mp4 (1MB) — Holographic reel asset

## Image Assets (public/img/)
- hero.png — Renaissance café scene
- svc-marketing.png — Man with camera, media screens
- svc-ai-content.png — Woman with gold headphones, holographic reels
- svc-digital-transform.png — Woman in white suit, cityscape
- svc-logistics.png — Man overlooking futuristic supply chain
- about.png — Chess move close-up
- portfolio.png — Woman with analytics dashboards
- contact.png — Woman extending hand, DD laptop

## Last Updated
2026-04-02
