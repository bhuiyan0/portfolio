import { Code2, Layers, Mail, Map, Server, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";

/** Minimal icon contract satisfied by both lucide icons and custom SVGs. */
export type IconComponent = React.ComponentType<{ className?: string }>;

export interface Profile {
  name: string;
  role: string;
  tagline: string;
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

export const profile: Profile = {
  name: "Mamun Bhuiyan",
  role: "Senior Frontend Engineer",
  tagline:
    "Senior Frontend Engineer with 5+ years of experience building SaaS, geospatial, and full-stack web applications with React, Next.js, TypeScript, and Svelte.",
  about: [
    "I'm a frontend engineer with 5+ years of experience shipping SaaS, geospatial, and full-stack web applications. I've led platform modernization initiatives — most recently migrating legacy PropCloud features into Placepoint as part of a platform consolidation effort.",
    "I work in two domains most frontend engineers don't: geospatial applications built on ArcGIS, Mapbox, and OpenLayers, and AI-assisted engineering — using Claude and Cursor to accelerate debugging, refactoring, and feature delivery.",
    "When a feature needs to go end-to-end, I'm comfortable crossing the boundary: NestJS and Node.js services, MongoDB data layers, authentication, and clean REST APIs.",
  ],
  email: "mamunbhuiyan919@gmail.com",
  location: "Dhaka, Bangladesh",
  availability: "Open to opportunities",
  resumeUrl: "/Mamun_Bhuiyan_Resume.pdf",
  stats: [
    { value: "5+", label: "Years of experience" },
    {
      value: "30%",
      label: "Fewer duplicate API requests via shared UI systems",
    },
    { value: "3", label: "Mapping platforms: ArcGIS, Mapbox, OpenLayers" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/bhuiyan0",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamun0",
    icon: LinkedinIcon,
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "The core craft — component architecture, performance, and design systems.",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Svelte",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    description: "Full-stack delivery when features need to go end-to-end.",
    icon: Server,
    skills: ["NestJS", "Node.js", "REST APIs", "Authentication", "MongoDB"],
  },
  {
    title: "Geospatial & Mapping",
    description: "Interactive maps and spatial data visualization at scale.",
    icon: Map,
    skills: [
      "ArcGIS",
      "Mapbox",
      "OpenLayers",
      "Spatial Data Visualization",
      "Interactive Mapping",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    description: "Multiplying output with LLM tooling and agentic workflows.",
    icon: Sparkles,
    skills: [
      "Claude",
      "Cursor",
      "Prompt Engineering",
      "Agentic Development Workflows",
    ],
  },
  {
    title: "Architecture & Engineering",
    description:
      "The practices that keep large codebases fast to work in and easy to scale.",
    icon: Layers,
    skills: [
      "Frontend Architecture",
      "Monorepo Architecture",
      "Component Libraries",
      "Performance Optimization",
      "Code Quality",
      "Agile Development",
      "Git",
    ],
    wide: true,
  },
];

export const experiences: Experience[] = [
  {
    company: "Softwrd Ltd",
    role: "Frontend Engineer",
    period: "Jan 2022 — Jun 2026",
    location: "Dhaka, Bangladesh",
    summary:
      "Building scalable SaaS and geospatial products, and driving platform consolidation efforts.",
    highlights: [
      "Led migration of legacy PropCloud features into Placepoint, supporting platform consolidation efforts.",
      "Built scalable SaaS applications using React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
      "Developed geospatial features using ArcGIS, Mapbox, and OpenLayers for map-based workflows and data visualization.",
      "Created reusable UI components and shared utilities, reducing duplicate API requests by 30%.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "ArcGIS",
      "Mapbox",
      "OpenLayers",
    ],
  },
  {
    company: "Everexpert Info System",
    role: "Full Stack Developer",
    period: "Jun 2020 — Dec 2021",
    location: "Dhaka, Bangladesh",
    summary:
      "Developed and maintained full-stack web applications for e-commerce and business clients.",
    highlights: [
      "Built customer-facing interfaces, backend services, and REST APIs for e-commerce and business applications.",
      "Implemented authentication, API integrations, and business workflows across frontend and backend systems.",
      "Contributed to modernization initiatives, migrating legacy applications to modern frameworks and architectures.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "JavaScript", "REST APIs"],
  },
];

export const education: Education[] = [
  {
    degree: "Diploma, Enterprise System Analysis & Design",
    institution: "IDB-BISEW IT Scholarship",
    period: "2018 — 2019",
  },
  {
    degree: "Bachelor of Commerce (BCom)",
    institution: "National University, Bangladesh",
    period: "2013 — 2016",
  },
];

// TODO: add live/source links and screenshots where available
export const projects: Project[] = [
  {
    title: "Placepoint — Platform Consolidation",
    description:
      "Led the migration of legacy PropCloud features into Placepoint, a geospatial property platform — map-based workflows, data visualization, and a unified frontend built on a modern stack.",
    stack: ["Next.js", "TypeScript", "Mapbox", "OpenLayers", "Tailwind CSS"],
    links: {},
  },
  {
    title: "Shared UI Component System",
    description:
      "Reusable component library and shared utilities powering multiple SaaS products — cut duplicate API requests by 30% and standardized UI patterns across teams.",
    stack: ["React", "TypeScript", "shadcn/ui", "Monorepo"],
    links: {},
  },
  {
    title: "AI-Assisted Engineering Workflows",
    description:
      "Agentic development workflows built around Claude and Cursor — accelerating debugging, refactoring, and feature delivery across the engineering team.",
    stack: ["Claude", "Cursor", "Prompt Engineering"],
    links: {},
  },
  {
    title: "E-commerce Web Platform",
    description:
      "Full-stack e-commerce application — customer-facing storefront, backend services, REST APIs, authentication, and third-party integrations.",
    stack: ["Next.js", "NestJS", "TypeScript", "REST APIs"],
    links: {},
  },
];
