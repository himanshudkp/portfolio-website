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
  highlights: string[];
  paragraphs: string[];
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

export interface BadgeProps {
  text: string;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  image: string;
  topTools: string[];
  fullDescription: string;
  features: string[];
  allTech: string[];
  githubUrl: string;
  liveUrl: string;
  categories: string[];
}

export interface WorkProject {
  name: string;
  description: string;
  link: string;
}

export interface ExperienceData {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  projects: WorkProject[];
  technologies: string[];
}

export interface CoursesCertification {
  id: string;
  title: string;
  provider: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills: readonly string[];
  description: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href: string;
}

export interface ContactSocial {
  icon: LucideIcon;
  href: string;
}

export interface ButtonText {
  resume_web: string;
  resume_mobile: string;
  connect: string;
  work: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface Skill {
  category: string[];
  skill: string;
}
