import { Code2, Database, Layers, Map, Server, Sparkles } from "lucide-react";
import { email } from "./shared";
import type { PortfolioData } from "./types";

/**
 * Full-stack JavaScript variant. Selected when
 * NEXT_PUBLIC_PORTFOLIO_VARIANT === "fullstack".
 *
 * Content mirrors public/Mamun_Bhuiyan_Resume_Full_Stack.pdf
 * ("Full Stack JavaScript Developer").
 */
export const fullstack: PortfolioData = {
  profile: {
    name: "Mamun Bhuiyan",
    role: "Full Stack JavaScript Developer",
    tagline:
      "Full Stack Developer with 5+ years of experience building SaaS, e-commerce, and geospatial web applications with JavaScript and TypeScript — Node.js, NestJS, and TypeORM over MySQL and MongoDB on the back; React, Next.js, and Svelte on the front.",
    headline: "Building robust, full-stack applications for the modern web.",
    aboutTitle: "A full-stack developer who ships end-to-end",
    about: [
      "I'm a full-stack developer with 5+ years of experience building SaaS, e-commerce, and geospatial web applications across the JavaScript and TypeScript stack — comfortable owning a feature from the database to the UI.",
      "On the backend I build services with Node.js and NestJS, designing REST APIs, authentication and authorization (JWT), and third-party integrations, with data layers backed by TypeORM over MySQL and MongoDB.",
      "On the frontend I build modern applications with React, Next.js, and Svelte, styled with Tailwind CSS and shadcn/ui — including interactive mapping work with ArcGIS, Mapbox, and OpenLayers.",
    ],
    email,
    location: "Dhaka, Bangladesh",
    availability: "Open to opportunities",
    resumeUrl: "/Mamun_Bhuiyan_Resume_Full_Stack.pdf",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "End-to-end", label: "TypeScript across client, API, and data" },
      { value: "3", label: "Domains: SaaS, e-commerce, geospatial" },
    ],
  },

  skillGroups: [
    {
      title: "Backend & APIs",
      description:
        "Server-side services, clean REST APIs, and secure auth across the Node ecosystem.",
      icon: Server,
      skills: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "REST APIs",
        "TypeORM",
        "Authentication & Authorization (JWT)",
        "API Integration",
      ],
    },
    {
      title: "Databases",
      description: "Relational and document data layers — schema design and queries.",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Frontend",
      description:
        "Component architecture, performance, and design systems on a modern React/Svelte stack.",
      icon: Code2,
      skills: [
        "React.js",
        "Next.js",
        "Svelte",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "shadcn/ui",
        "HTML5",
        "CSS3",
      ],
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
      skills: ["Claude", "Cursor", "Prompt Engineering"],
    },
    {
      title: "Architecture & Engineering",
      description:
        "The practices that keep large codebases fast to work in and easy to scale.",
      icon: Layers,
      skills: [
        "Full Stack Development",
        "Monorepo Architecture",
        "Component Libraries",
        "Performance Optimization",
        "Code Quality",
        "Agile Development",
        "Git",
      ],
      wide: true,
    },
  ],

  experiences: [
    {
      company: "Softwrd Ltd",
      role: "Frontend Engineer",
      period: "Jan 2022 — Jun 2026",
      location: "Dhaka, Bangladesh",
      summary:
        "Building scalable SaaS and geospatial products, and driving platform consolidation efforts.",
      highlights: [
        "Led migration of legacy PropCloud features into Placepoint, supporting platform consolidation efforts.",
        "Built scalable SaaS applications using React, Svelte, TypeScript, Tailwind CSS, and shadcn/ui.",
        "Developed geospatial features using ArcGIS, Mapbox, and OpenLayers for map-based workflows and data visualization.",
      ],
      stack: [
        "React",
        "Svelte",
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
        "Designed and maintained full-stack web applications for e-commerce and business clients.",
      highlights: [
        "Designed and maintained full-stack web applications using Next.js, NestJS, TypeScript, and JavaScript.",
        "Built customer-facing interfaces, backend services, and REST APIs for e-commerce platforms.",
        "Implemented authentication and authorization systems, API integrations, and core business workflows.",
        "Developed and maintained backend services using NestJS and Node.js.",
      ],
      stack: [
        "Next.js",
        "NestJS",
        "Node.js",
        "TypeScript",
        "MySQL",
        "MongoDB",
        "TypeORM",
        "REST APIs",
      ],
    },
  ],

  // TODO: add live/source links and screenshots where available
  projects: [
    {
      title: "E-commerce Web Platform",
      description:
        "Full-stack e-commerce application — storefront, NestJS backend services, REST APIs, authentication and authorization, and a relational data layer with TypeORM over MySQL, plus third-party integrations.",
      stack: ["Next.js", "NestJS", "TypeScript", "MySQL", "TypeORM", "REST APIs"],
      links: {},
    },
    {
      title: "Placepoint — Platform Consolidation",
      description:
        "Led the migration of legacy PropCloud features into Placepoint, a geospatial property platform — map-based workflows, data visualization, and a unified frontend built on a modern stack.",
      stack: ["Next.js", "Svelte", "TypeScript", "Mapbox", "OpenLayers"],
      links: {},
    },
    {
      title: "Shared UI Component System",
      description:
        "Reusable component library and shared utilities powering multiple SaaS products — standardized UI patterns and cut duplicate API requests across teams.",
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
  ],
};
