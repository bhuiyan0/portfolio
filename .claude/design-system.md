# Design System

Tailwind CSS v4 with a CSS-first configuration. All tokens and custom utilities live in
`app/globals.css`. shadcn/ui (`radix-nova` style, `neutral` base) provides the primitives.

## Aesthetic

Clean, modern, engineering-credible — Linear/Vercel-adjacent. Dark theme by default
(system-aware). Generous whitespace, restrained color, subtle motion. The brand accent
(violet) carries the personality; everything else is neutral.

## Color tokens

Colors are OKLCH CSS variables with light (`:root`) and dark (`.dark`) values, exposed to
Tailwind via `@theme inline`. **Always use the semantic token utilities**, never raw
colors:

| Token            | Utility examples                          | Use for                          |
| ---------------- | ----------------------------------------- | -------------------------------- |
| background       | `bg-background`                            | page background                  |
| foreground       | `text-foreground`                         | primary text                     |
| muted-foreground | `text-muted-foreground`                   | secondary/supporting text        |
| brand            | `text-brand`, `border-brand/50`           | accent — eyebrows, highlights    |
| border           | `border-border`                           | hairlines, dividers              |
| card / popover   | `bg-card`, `bg-popover`                   | surfaces                         |
| primary/secondary/accent/destructive | shadcn semantic roles | buttons, states                  |

- The brand accent is violet: `--brand` ≈ `oklch(0.5 0.2 285)` (light) /
  `oklch(0.72 0.16 285)` (dark).
- Use opacity modifiers for subtlety: `text-foreground/55`, `border-brand/50`,
  `text-muted-foreground/60`.
- Text selection is tinted with the brand color (`::selection`).

## Typography

- **Sans:** Geist (`font-sans`, also `--font-heading`). **Mono:** Geist Mono (`font-mono`).
- Headings: `font-semibold tracking-tight`, sizes scale up at `sm:` (e.g. section titles
  `text-3xl sm:text-4xl`).
- Eyebrows: `font-mono text-xs uppercase tracking-[0.2em] text-brand`.
- Body: `text-base sm:text-lg text-muted-foreground`, `leading-relaxed` for prose.
- Big stat/display numbers use the `text-gradient` utility.

## Custom utilities (in `globals.css`)

- `text-gradient` — top-to-bottom foreground fade for display text/numbers.
- `bg-dots` — subtle radial dot grid background.
- `bg-hairline` — horizontal line that fades at both ends (Linear-style divider).

## Layout & spacing

- Use the shared `<Section>` component for every page section. It provides:
  - Container: `mx-auto w-full max-w-5xl px-6`
  - Vertical rhythm: `py-10 sm:py-12`, `scroll-mt-10` for anchored nav
  - Optional `eyebrow` / `title` / `description` header block
- Header block spacing: `mb-8 sm:mb-10`, constrained to `max-w-2xl`.
- Separate sections in `page.tsx` with `<SectionDivider />`.
- Bento/grid layouts use CSS grid (e.g. `lg:grid-cols-[2fr_1fr]`); a `wide` flag on skill
  groups spans full width.

## Radius

Radius scales from a single `--radius` (0.625rem) token: `rounded-sm`/`md`/`lg`/`xl`/`2xl`…
map to multipliers. Use the named radius utilities, not arbitrary pixel values.

## Motion

- Reveal-on-scroll via the `FadeIn` wrapper (fade + 6px rise, 700ms ease-out).
- **All motion is gated behind `motion-safe:`** — reduced-motion users see static content.
- Hover transitions are subtle and short (`transition-colors duration-300`).
- `scroll-smooth` is set globally on `<html>`.

## Iconography

- Default to **lucide-react** icons; custom brand glyphs (GitHub, LinkedIn) live in
  `components/shared/brand-icons.tsx`.
- Both satisfy `IconComponent` (`{ className?: string }`) so they're interchangeable in
  data. Size with `size-4` / `size-5` utilities and color with text tokens.

## Adding components

- Prefer existing `components/ui/*` shadcn primitives. Add new ones via the shadcn CLI
  (config in `components.json`, `radix-nova` style) so tokens and conventions stay
  consistent — don't hand-roll primitives that shadcn provides.
