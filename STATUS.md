# DDCG Website — Project Status

## Current State
- **Live URL:** https://ddcg.net
- **Vercel URL:** https://ddcg-website-tau.vercel.app
- **Active Branch:** `version-b` (deployed to production)
- **Backup Branch:** `master` (version A — dark/light design)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Fonts: Cormorant Garamond (display) + DM Sans (body)
- Email: Resend API (noreply@ddcg.net → info@ddcg.net)
- Hosting: Vercel
- Domain: ddcg.net (DNS via Spaceship)

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

## Key Components
- AtomLogo.tsx — animated canvas DD atom with orbiting electrons
- Cursor.tsx — custom dot + lagging ring cursor
- Hero.tsx — ghost text parallax, staggered H1 line animations
- Services.tsx — numbered rows with sweep border hovers
- About.tsx — dark panel, ghost "DDCG" parallax, discipline list
- Portfolio.tsx — editorial list rows with hover slide
- Contact.tsx — working form via Resend API
- Footer.tsx — dark panel with atom logo + link columns

## Last Updated
2026-03-24
