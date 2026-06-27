import { Code2, Layers, Map, Server, Sparkles } from "lucide-react";
import { email } from "./shared";
import type { PortfolioData } from "./types";

/**
 * Full-stack JavaScript variant. Selected when
 * NEXT_PUBLIC_PORTFOLIO_VARIANT === "fullstack".
 *
 * Content mirrors public/Mamun_Bhuiyan_Resume_Full_Stack.pdf
 * ("Full Stack JavaScript Engineer").
 */
export const fullstack: PortfolioData = {
  profile: {
    name: "Mamun Bhuiyan",
    role: "Full Stack JavaScript Engineer",
    tagline:
      "Senior Full Stack JavaScript Engineer with 5+ years of experience building scalable SaaS, PropTech, ecommerce, geospatial, and business applications — proficient in React, Next.js, NestJS, TypeScript, GraphQL, and REST APIs, delivering end-to-end solutions from backend services to modern frontend interfaces.",
    headline: "Building scalable, full-stack JavaScript applications from backend to browser.",
    aboutTitle: "A full-stack engineer who ships end-to-end",
    about: [
      "I'm a Senior Full Stack JavaScript Engineer with 5+ years of experience building scalable SaaS, PropTech, e-commerce, geospatial, and business applications — comfortable owning a feature from the database to the UI.",
      "On the backend I build services with Node.js and NestJS, designing REST and GraphQL APIs, authentication, and third-party integrations, with data layers backed by TypeORM over MySQL.",
      "On the frontend I build modern applications with React, Next.js, and Svelte, styled with Tailwind CSS and shadcn/ui — including interactive geospatial work with the ArcGIS Maps SDK for JavaScript.",
    ],
    email,
    location: "Dhaka, Bangladesh",
    availability: "Open to opportunities",
    resumeUrl: "/Mamun_Bhuiyan_Resume_Full_Stack.pdf",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "End-to-end", label: "TypeScript across client, API, and data" },
      { value: "4", label: "Domains: SaaS, PropTech, e-commerce, geospatial" },
    ],
  },

  skillGroups: [
    {
      title: "Backend & APIs",
      description:
        "Server-side services, clean REST and GraphQL APIs across the Node ecosystem.",
      icon: Server,
      skills: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "REST APIs",
        "GraphQL",
        "TypeORM",
        "MySQL",
      ],
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
        "ArcGIS Maps SDK for JavaScript",
        "Spatial Data Visualization",
        "Interactive Mapping",
      ],
    },
    {
      title: "AI-Assisted Engineering",
      description: "Multiplying output with LLM tooling and agentic workflows.",
      icon: Sparkles,
      skills: ["Claude", "Cursor", "Prompt Engineering", "Agentic Development Workflows"],
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
  ],

  experiences: [
    {
      company: "Softwrd Ltd",
      role: "Senior Frontend Engineer",
      period: "Jan 2021 — Jun 2026",
      location: "Dhaka, Bangladesh",
      summary:
        "Worked on Norway's leading PropTech SaaS platforms (Placepoint & PropCloud), delivering property management, valuation, and geospatial solutions.",
      highlights: [
        "Developed scalable applications using React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
        "Integrated REST and GraphQL APIs to deliver dynamic, data-driven user experiences.",
        "Built interactive geospatial features using the ArcGIS Maps SDK for JavaScript.",
        "Developed reusable UI components with Storybook and contributed to an Nx monorepo architecture.",
      ],
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "GraphQL",
        "ArcGIS Maps SDK",
        "Storybook",
        "Nx",
      ],
    },
    {
      company: "Everexpert Info System",
      role: "Full Stack Developer",
      period: "Jun 2020 — Dec 2021",
      location: "Dhaka, Bangladesh",
      summary:
        "Built full-stack e-commerce applications using React, Next.js, NestJS, and MySQL.",
      highlights: [
        "Developed responsive frontend applications with React, Next.js, and TypeScript.",
        "Designed and implemented backend REST APIs, authentication, and business workflows using NestJS.",
        "Delivered scalable, maintainable features across the full software development lifecycle.",
      ],
      stack: [
        "Next.js",
        "NestJS",
        "Node.js",
        "TypeScript",
        "MySQL",
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
