# Coding Standards

Conventions for this codebase. Match the surrounding code first; these are the defaults
when there's no nearby example.

## TypeScript

- **Strict mode is on.** No implicit `any`; let inference work, annotate at boundaries.
- Prefer `interface` for object/data shapes (see `lib/data.ts`), `type` for unions,
  intersections, and function/utility types.
- Export the interface alongside the data it types. Content shapes live in `lib/data.ts`.
- Type icon slots with the shared `IconComponent` contract
  (`React.ComponentType<{ className?: string }>`) so lucide icons and custom SVGs are
  interchangeable.
- Extend native element props with `React.ComponentProps<"tag">` rather than redeclaring
  `className`, `children`, etc. (see `components/shared/section.tsx`).
- Use the `@/*` path alias for all internal imports — never deep relative paths
  (`../../lib/...`).

## Files & naming

- **Files:** `kebab-case.tsx` / `kebab-case.ts` (e.g. `site-header.tsx`, `fade-in.tsx`).
- **Components:** `PascalCase`, named exports — **no default exports** for components.
  (The only default exports are Next.js's required ones: `app/page.tsx`, `app/layout.tsx`.)
- **Functions / variables:** `camelCase`. **Types / interfaces:** `PascalCase`.
- One primary component per file; co-locate tiny helpers only if private to that file.

## Imports — ordering

1. External packages (`react`, `next/*`, `lucide-react`, …)
2. Internal `@/components/*`
3. Internal `@/lib/*`

Group with blank lines optional but keep external-before-internal. Type-only imports use
`import type`.

## Styling

- **Tailwind utility classes only.** No CSS modules, no inline `style` except for
  truly dynamic values (e.g. computed `transitionDelay` in `fade-in.tsx`).
- Always compose conditional/merged classes with `cn()` from `@/lib/utils` — never
  string-concatenate class names.
- Use semantic theme tokens (`text-foreground`, `bg-background`, `text-muted-foreground`,
  `text-brand`, `border-border`) — not raw colors like `text-gray-500`.
- Details on tokens, custom utilities, and spacing → `.claude/design-system.md`.

## Comments

- Comment **why**, not what. Use them sparingly for non-obvious decisions
  (e.g. the `motion-safe` reduced-motion note in `fade-in.tsx`, the `metadataBase` TODO).
- Use JSDoc `/** … */` on exported interfaces/fields when the meaning isn't obvious
  (see the field docs in `lib/data.ts`).

## Linting

- ESLint via `eslint-config-next`. Run `npm run lint` and fix before committing.
- Keep the build clean — no TypeScript errors, no `// @ts-ignore` without a reason note.

## Accessibility

- Semantic HTML first (`<section>`, `<nav>`, `<main>`, `<dl>/<dt>/<dd>`).
- Every interactive control is keyboard reachable and labelled.
- Respect reduced motion: gate animations behind `motion-safe:` (see React patterns).
- Provide meaningful `alt` text and accessible names for icon-only buttons.
