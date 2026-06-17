# Mamun Bhuiyan — Portfolio

Personal portfolio site for **Mamun Bhuiyan**. A single-page, content-driven site that
presents who he is, his skills, experience, selected work, and how to get in touch — with
two switchable personas (frontend engineer / full-stack JavaScript developer) driven by a
single environment variable.

## Tech stack

| Concern    | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, RSC)  |
| Language   | TypeScript (strict)                                 |
| UI runtime | React 19                                            |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config in `app/globals.css`) |
| Components | [shadcn/ui](https://ui.shadcn.com) (`radix-nova`) on Radix UI |
| Theming    | [next-themes](https://github.com/pacocoursey/next-themes) — dark default, system-aware |
| Icons      | [lucide-react](https://lucide.dev) + custom brand SVGs |
| Fonts      | Geist Sans + Geist Mono via `next/font`             |

## Getting started

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build (also type-checks)  |
| `npm run start` | Serve the production build           |
| `npm run lint`  | ESLint (`eslint-config-next`)        |

## Portfolio variants

The site ships two personas, selected at **build time** by the
`NEXT_PUBLIC_PORTFOLIO_VARIANT` environment variable:

| Value                  | Persona                          | Résumé                               |
| ---------------------- | -------------------------------- | ------------------------------------ |
| `frontend` _(default)_ | Senior Frontend Engineer         | `public/Mamun_Bhuiyan_Resume.pdf`    |
| `fullstack`            | Full Stack JavaScript Developer  | `public/Mamun_Bhuiyan_Resume_Full_Stack.pdf` |

Any unset or unrecognized value falls back to `frontend`.

```bash
# preview the full-stack persona
NEXT_PUBLIC_PORTFOLIO_VARIANT=fullstack npm run dev
```

Copy `.env.example` to `.env.local` to set it persistently. The variable **must** keep the
`NEXT_PUBLIC_` prefix: the header and mobile nav are client components that read this data,
and Next.js only inlines `NEXT_PUBLIC_*` variables into the client bundle.

## Editing content

All copy lives under **`lib/data/`** — components are presentational and render typed data.

```
lib/data/
├── types.ts      # interfaces (Profile, SkillGroup, …) + the PortfolioData bundle
├── shared.ts     # content identical across variants (nav, socials, education, email)
├── frontend.ts   # Senior Frontend Engineer variant
├── fullstack.ts  # Full Stack JavaScript Developer variant
└── index.ts      # selects the active variant via env var; re-exports the public API
```

To change site content, edit the relevant variant file (or `shared.ts`) — not the
components. The import path `@/lib/data` always resolves to the active variant.

## Project structure

```
app/                  App Router entry, root layout & metadata, global styles,
                      generated icons (icon.tsx, apple-icon.tsx), error & 404 pages
components/
  sections/           Page sections (hero, about, skills, experience, projects, contact)
  layout/             Site chrome (header, footer, mobile nav, theme toggle)
  shared/             Reusable building blocks (section, fade-in, glow, dividers, providers)
  ui/                 shadcn/ui primitives
lib/
  data/               All site content + the interfaces that type it
  utils.ts            cn() class-merge helper
public/               Static assets (résumé PDFs)
```

Contributor conventions (coding standards, React patterns, design system, git workflow)
are documented under [`.claude/`](.claude).

## Deploying

Deploy on any platform that supports Next.js (e.g. [Vercel](https://vercel.com)). Set
`NEXT_PUBLIC_PORTFOLIO_VARIANT` for the desired persona, and update `metadataBase` in
`app/layout.tsx` to the production domain before going live.
