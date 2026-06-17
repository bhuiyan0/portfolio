import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import type { Education, NavLink, SocialLink } from "./types";

/** Same person across every variant — define contact + identity once. */
export const email = "mamunbhuiyan919@gmail.com";

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
  { label: "Email", href: `mailto:${email}`, icon: Mail },
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
