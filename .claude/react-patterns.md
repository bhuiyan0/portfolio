# React & Next.js Patterns

This project uses the **Next.js 16 App Router** with React Server Components and React 19.

> ⚠️ Next.js 16 differs from earlier versions. Read the relevant guide in
> `node_modules/next/dist/docs/` before writing framework-level code (routing, metadata,
> fonts, caching).

## Server vs. Client components

- **Server Components are the default.** Do not add `"use client"` unless the component
  needs browser-only APIs, state, effects, or event handlers.
- Sections (`components/sections/*`) are Server Components — they render typed data from
  `lib/data.ts`. Keep them server-side.
- Only reach for `"use client"` when there's interactivity. Current client components:
  - `shared/fade-in.tsx` — `IntersectionObserver` + state
  - `shared/theme-provider.tsx` and `layout/theme-toggle.tsx` — theme state
  - `layout/mobile-nav.tsx` — open/close state
- Push the `"use client"` boundary as far down the tree as possible. Wrap a small
  interactive leaf rather than marking a whole section client.

## Component shape

```tsx
import { cn } from "@/lib/utils";

interface ThingProps extends React.ComponentProps<"div"> {
  title: string;
}

export function Thing({ title, className, children, ...props }: ThingProps) {
  return (
    <div className={cn("base classes", className)} {...props}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

- Named function declarations, destructured props with an explicit `Props` interface.
- Forward `className` and spread `...props` so callers can extend (see `Section`).
- Accept `children: React.ReactNode` for composition.

## Data flow

- Content is imported from `@/lib/data` and `.map()`-ed in the section. There is no client
  data fetching or global state — the site is static content.
- Give list items a **stable, content-derived `key`** (e.g. `entry.degree`,
  `stat.label`, `paragraph.slice(0, 32)`). Avoid array index as key.

## Composition over configuration

- Build pages by composing components. `app/page.tsx` assembles sections and wraps each in
  `<FadeIn>` with `<SectionDivider />` between them — sections themselves stay unaware of
  layout.
- Reusable structure lives in `components/shared/` (`Section`, `FadeIn`, `Glow`,
  `SectionDivider`). Use `Section` for every page section to get consistent
  eyebrow/title/description and container width.

## Animation & motion

- Scroll-reveal is handled by the `FadeIn` wrapper using `IntersectionObserver`
  (`disconnect()` after first reveal — one-shot, no re-trigger).
- All motion is gated behind `motion-safe:` so reduced-motion users and non-JS crawlers
  always see content. Never hide content in a state that only JS can undo.
- Use the `delay` prop on `FadeIn` for staggered reveals.

## Metadata & SEO

- Define `metadata` (or `generateMetadata`) per the App Router API in `layout.tsx` / page
  files. Title/description derive from `profile` in `lib/data.ts` via the title template.
- Keep `metadataBase` pointed at the production domain before deploy (there's a TODO in
  `app/layout.tsx`).

## Theming

- Wrap the app in `ThemeProvider` (next-themes), `attribute="class"`, dark default,
  system enabled. Use `suppressHydrationWarning` on `<html>`.
- Read/toggle theme only in client components via next-themes' `useTheme`.

## Don't

- Don't add client-side data fetching, global stores, or `useEffect` for things that can
  be server-rendered.
- Don't inline content strings in components — put them in `lib/data.ts`.
- Don't introduce a new animation library; the `FadeIn` + Tailwind approach is the pattern.
