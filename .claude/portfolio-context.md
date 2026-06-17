# Portfolio Context

Personal portfolio website for **Mamun Bhuiyan**, a frontend engineer. A single-page,
content-driven marketing site that presents who Mamun is, what he can do, his
experience, selected projects, and how to reach him.

## Purpose & audience

- **Goal:** convert visitors (recruiters, hiring managers, potential clients) into a
  contact or résumé download.
- **Tone:** confident, concise, engineering-credible. No filler copy.
- **Primary calls to action:** the contact section and the résumé link.

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 16 (App Router, React Server Components)  |
| Language       | TypeScript (strict)                               |
| UI runtime     | React 19                                          |
| Styling        | Tailwind CSS v4 (CSS-first config in `globals.css`) |
| Components     | shadcn/ui (`radix-nova` style) on Radix UI        |
| Icons          | lucide-react + custom brand SVGs                   |
| Theming        | next-themes (dark default, system enabled)        |
| Fonts          | Geist Sans + Geist Mono via `next/font/google`    |

> ⚠️ This is **Next.js 16** — APIs and conventions differ from older versions.
> See `AGENTS.md`; consult `node_modules/next/dist/docs/` before writing framework code.

## Project structure

```
app/                      App Router entry
  layout.tsx              Root layout: fonts, ThemeProvider, header/footer, metadata
  page.tsx                Home — composes the section components in order
  globals.css             Tailwind v4 theme tokens + custom utilities
components/
  sections/               Page sections (hero, about, skills, experience, projects, contact)
  layout/                 Site chrome (site-header, site-footer, mobile-nav, theme-toggle)
  shared/                 Reusable building blocks (section, fade-in, glow, dividers, providers)
  ui/                     shadcn/ui primitives (button, card, badge, sheet, tooltip, separator)
lib/
  data/                   ALL site content + the TypeScript interfaces that type it
    types.ts              Interfaces (Profile, SkillGroup, …) + the PortfolioData bundle
    shared.ts             Content identical across variants (navLinks, socialLinks, education, email)
    frontend.ts           Frontend-engineer variant (default)
    fullstack.ts          Full-stack JavaScript variant
    index.ts              Selects the active variant via env var; re-exports the public API
  utils.ts                cn() class-merge helper
public/                   Static assets (résumé PDFs, images)
```

## Content lives in one place

Every piece of copy — profile, stats, skills, experience, projects, social links, nav —
is defined under **`lib/data/`** with an exported interface for each shape. Sections are
presentational: they import typed data from `@/lib/data` and render it. To change site
content, edit the relevant variant file (`frontend.ts` / `fullstack.ts`) or `shared.ts` —
not the components. The import path `@/lib/data` resolves to `lib/data/index.ts`.

## Portfolio variants

The site ships two personas selected at **build time** by the
`NEXT_PUBLIC_PORTFOLIO_VARIANT` environment variable:

- `frontend` (default, or any unrecognized value) — Senior Frontend Engineer.
- `fullstack` — Full Stack JavaScript Engineer (own résumé:
  `public/Mamun_Bhuiyan_Full_Stack_Resume.pdf`).

It **must** stay `NEXT_PUBLIC_`-prefixed: the header and mobile nav are client components
that read this data, and Next.js only inlines `NEXT_PUBLIC_*` vars into the client bundle.
`index.ts` picks the variant; `shared.ts` holds what doesn't change between them. See
`.env.example`. Example: `NEXT_PUBLIC_PORTFOLIO_VARIANT=fullstack npm run dev`.

## Key conventions (see the dedicated docs)

- Coding standards → `.claude/coding-standards.md`
- React / Next.js patterns → `.claude/react-patterns.md`
- Git workflow → `.claude/git-workflow.md`
- Design system → `.claude/design-system.md`

## Local development

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build
npm run lint     # eslint (eslint-config-next)
```
