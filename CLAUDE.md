# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build (runs TypeScript + ESLint checks)
npm run start    # Serve production build
npm run lint     # ESLint only
```

There are no tests configured. The build command is the primary correctness check.

## Architecture

**Next.js 14 App Router** single-page marketing site for JD Waters Energy Limited (Nigerian oilfield services company). The entire site is one route (`/`) composed of 11 ordered sections, plus a contact API route.

### Key Conventions

**`'use client'` boundary**: Only components that need browser APIs, state, or event handlers are client components — `Header`, `Footer`, `Stats`, `Services`, `Features`, `HSSE`, and `Contacts`. Server-rendered sections are `Hero`, `About`, `Vision`, `Projects`, `Technology`, `Quality`.

**All content lives in `src/lib/constants.ts`**. Never hardcode copy strings inside components — add them to the appropriate export in constants. This is the single source of truth for nav links, services, stats, advantages, HSSE pillars, tech/sustainability items, quality/CSR/outlook lists, project bullets, client tags, and contact details.

**Tailwind config overrides the default breakpoints entirely** (`tailwind.config.ts`). The breakpoints mirror the original WordPress theme:
- `xs`: 480px  
- `sm`: 640px  
- `md`: 768px  
- `lg`: 900px  (tablet portrait — maps to the theme's first major layout shift)
- `xl`: 1100px (tablet landscape — nav collapses, 2-col layouts activate)
- `2xl`: 1260px (page max-width)

Do not use Tailwind's default `lg`/`xl` assumptions — they are replaced.

**CSS component classes** are defined in `@layer components` inside `globals.css`. Use these instead of repeating long Tailwind utility strings: `.btn`, `.btn-amber`, `.btn-outline`, `.btn-lg`, `.content-wrap`, `.fp-section`, `.fp-section-dark`, `.fp-section-navy2`, `.fp-section-alt`, `.fp-section-light`, `.section-label`, `.section-title`, `.section-divider`, `.section-divider-left`, `.service-card`, `.hsse-card`, `.contact-input`, `.contact-label`, `.contact-detail-item`, `.client-tag`.

**Framer Motion animations**: Scroll-reveal uses `whileInView` + `viewport={{ once: true }}` with `staggerChildren` on the container. The `ease` value must be a cubic-bezier array (`[0.22, 1, 0.36, 1]`), not a string like `'easeOut'`, due to TypeScript strictness in `Variants`.

**Animated counters** (`Stats.tsx`): driven by `useInView` from framer-motion + a `requestAnimationFrame` loop. Stats with `number: null` (the `NOC/IOC` item) skip animation and render `display` instead.

### Design Tokens

Defined in `tailwind.config.ts` and mirrored as CSS custom properties in `globals.css`:

| Token       | Value     | Use |
|-------------|-----------|-----|
| `navy`      | `#0D2040` | Primary dark background |
| `navy2`     | `#162B52` | Secondary dark bg (Features section) |
| `cyan`      | `#17A8CE` | Primary accent, links, highlights |
| `amber`     | `#F5A623` | CTA buttons, secondary accent |
| `bg`        | `#F7F9FC` | Page background |
| `text`      | `#1A2840` | Body text |
| `text-light`| `#5A6B82` | Secondary text |

Fonts: **Outfit** (headings, `font-heading`) + **DM Sans** (body, `font-body`), loaded via `next/font/google` in `layout.tsx`.

### Contact API

`/api/contact` (POST) — validates required fields (`name`, `email`, `subject`, `message`) then sends via Resend SDK if `RESEND_API_KEY` is set in `.env.local`. Without the key, submissions are logged server-side (safe for development).

Environment variables:
- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO_EMAIL` — recipient address (defaults to `info@jdwaters.org`)

### Images

All images are local in `/public/images/`. Use `next/image` everywhere:
- Background images (hero, hsse, contacts): `fill` prop + `object-cover` inside a `relative` container with explicit dimensions
- Content images (about, vision, tech, projects): explicit `width`/`height`
- Hero image uses `priority` prop; all others use `loading="lazy"`
