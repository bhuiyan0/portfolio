/** Minimal icon contract satisfied by both lucide icons and custom SVGs. */
export type IconComponent = React.ComponentType<{ className?: string }>;

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  /** Heading shown on the About section. */
  aboutTitle: string;
  about: string[];
  email: string;
  location: string;
  availability: string;
  /** Path under /public, e.g. "/resume.pdf". */
  resumeUrl: string;
  stats: { value: string; label: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: IconComponent;
  skills: string[];
  /** Spans the full grid width when true (bento layout). */
  wide?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  links: { live?: string; source?: string };
}

/**
 * The variant-specific slice of site content. Each portfolio variant
 * (frontend, fullstack) supplies one of these; shared content (nav, socials,
 * education) is defined once in `shared.ts`.
 */
export interface PortfolioData {
  profile: Profile;
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
}
