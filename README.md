# Navchetna Charitable Trust

Production website for **Navchetna Charitable Trust** (Ahmedabad) — Next.js App Router.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Vitest + Playwright

## Project structure

```
app/            # Routes and layouts
components/     # UI, sections, forms, navigation, animations
config/         # Site, nav, SEO, donation, social
constants/      # Routes and statistics
data/           # Trust content and media paths
hooks/          # Scroll, hero, reduced-motion
lib/            # SEO helpers, GSAP registration
providers/      # App providers
public/images/  # Plantation and trustee photos
schemas/        # Form validation (Zod)
scripts/        # Route checks and bundle report
styles/theme/   # Spacing and motion tokens
tests/          # Unit and e2e
ai/design.md    # Design system reference
```

## Content

Edit trust facts, programs, and contact in [`data/demo.ts`](data/demo.ts).  
Page copy and blog posts: [`data/pages.ts`](data/pages.ts), [`data/home.ts`](data/home.ts).  
Images: [`data/media.ts`](data/media.ts) + files under `public/images/`.

## Scripts

```bash
npm run dev          # Local development
npm run build        # Production build
npm start            # Serve production build
npm test             # Unit tests
npm run test:routes  # Route integrity check
npm run test:e2e     # Playwright smoke tests
npm run lint         # ESLint
```

## Environment

Copy [`.env.example`](.env.example) to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for production.
