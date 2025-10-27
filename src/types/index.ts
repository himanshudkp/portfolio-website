import type { LucideIcon } from "lucide-react";

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

export interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface AboutIntroduction {
  name: string;
  role: string;
  experience: string;
  technologies: string[];
  highlights: string[];
}

export interface AboutContent {
  introduction: AboutIntroduction;
  paragraphs: string[];
}

export interface Project {
  name: string;
  description: string;
  link: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
}
