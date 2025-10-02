import { type LucideIcon } from "lucide-react";

export type ColorKey =
  | "blue"
  | "purple"
  | "pink"
  | "cyan"
  | "green"
  | "orange"
  | "emerald";

export interface ColorClasses {
  gradient: string;
  bg: string;
  border: string;
  text: string;
  hover: string;
  tag: string;
  tagDark: string;
}
export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: ColorKey | string;
}

export interface Highlight {
  icon: LucideIcon;
  text: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface Link {
  icon: LucideIcon;
  text?: string;
  label: string;
  href: string;
  title?: string;
  value?: string;
}

export interface Tool {
  name: string;
  level: number;
  color: ColorKey;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: ColorKey;
  skills: Skill[];
}

export interface ProjectLink {
  name: string;
  link: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  projects: ProjectLink[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  achievements: string[];
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  verified: boolean;
  color: ColorKey | string;
  skills: string[];
  credentialId?: string;
}

export interface Screenshot {
  title: string;
  color: string;
}

export interface Challenge {
  title: string;
  solution: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: Challenge[];
  results: string[];
  screenshots: Screenshot[];
}

export interface ProjectLinks {
  demo: string;
  github: string;
}

export interface Project {
  title: string;
  description?: string;
  tags?: string[];
  gradient?: string;
  icon?: LucideIcon;
  stats?: {
    users: string;
    impact: string;
  };
  links: ProjectLinks;
  caseStudy: CaseStudy;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface AboutSectionData {
  stats: Stat[];
  highlights: Highlight[];
  topTools: Tool[];
  colorMap: Record<ColorKey, string>;
}
