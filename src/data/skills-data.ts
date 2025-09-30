import { ColorClasses, ColorKey, SkillCategory } from "@/types";
import { Code2, Palette, Settings, Wrench } from "lucide-react";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "ReactJS", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    color: "purple",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "SCSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Shadcn UI", level: 88 },
    ],
  },
  {
    title: "State Management",
    icon: Settings,
    color: "pink",
    skills: [
      { name: "Redux", level: 90 },
      { name: "Redux Toolkit", level: 92 },
      { name: "TanStack Query", level: 85 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.IO", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 88 },
    ],
  },
];

export const COLOR_CLASSES: Record<ColorKey, ColorClasses> = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500",
    tag: "from-blue-50 to-cyan-50",
    tagDark: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500",
    tag: "from-purple-50 to-pink-50",
    tagDark: "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    hover: "hover:border-pink-500",
    tag: "from-pink-50 to-rose-50",
    tagDark: "bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20",
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  cyan: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  green: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
};
