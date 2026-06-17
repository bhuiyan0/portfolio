import { frontend } from "./frontend";
import { fullstack } from "./fullstack";

// NEXT_PUBLIC_ so the value is inlined into both the server and client bundles
// at build time — site-header.tsx / mobile-nav.tsx are client components that
// read this data. Resolved once at build; defaults to "frontend".
const variant =
  process.env.NEXT_PUBLIC_PORTFOLIO_VARIANT === "fullstack"
    ? fullstack
    : frontend;

export const { profile, skillGroups, experiences, projects } = variant;
export { navLinks, socialLinks, education } from "./shared";
export type * from "./types";
