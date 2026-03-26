# DDCG Website — Project Status

## Current State
- **Live URL:** https://ddcg.net
- **Vercel URL:** https://ddcg-website-tau.vercel.app
- **Active Branch:** `version-c` (deployed to production)
- **Previous Builds:** `version-b` (cream/ink Renaissance), `master` (dark/light editorial)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Fonts: Cormorant Garamond (display) + DM Sans (body)
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

## Key Components (Version C)
- **Hero** — Full-screen looping video background (hero1.mp4), dark gradient overlay, staggered text animations, "Welcome to the Renaissance of Business-Focused Transformations" headline
- **StatsBar** — 4-column metrics with Cormorant Garamond numbers, scroll reveal
- **Services** — 4 full-viewport pinned scroll panels with wipe-through-black transitions, per-image focal points, text appears before image reveal
- **About** — Dark section, chess image with parallax zoom, ghost "DDCG" text, discipline pillar list
- **Portfolio** — Analytics dashboard image, editorial list rows with hover sweep
- **Contact** — Welcoming handshake image, working Resend email form with status feedback
- **Footer** — Dark section with AtomLogo, link columns
- **Cursor** — Custom dot + lagging ring (desktop only)
- **RevealProvider** — Global IntersectionObserver for scroll animations
- **AtomLogo** — Animated canvas DD atom with orbiting electrons

## Branches
| Branch | Description | Status |
|--------|-------------|--------|
| `version-c` | Video hero, cinematic scroll panels, full imagery | **LIVE** |
| `version-b` | Cream/ink Renaissance, text-only, AtomLogo | Backup |
| `master` | Dark/light editorial, Inter Tight font | Archive |

## Image Assets (public/img/)
- hero.png — Renaissance café scene
- svc-marketing.png — Man with camera, media screens
- svc-ai-content.png — Woman with gold headphones, holographic reels
- svc-digital-transform.png — Woman in white suit, cityscape
- svc-logistics.png — Man overlooking futuristic supply chain
- about.png — Chess move close-up
- portfolio.png — Woman with analytics dashboards
- contact.png — Woman extending hand, DD laptop

## Video Assets (public/video/)
- hero1.mp4 (25MB) — Renaissance animated scene (IN USE)
- hero2.mp4 (28MB) — Alternate Renaissance scene

## Last Updated
2026-03-25
