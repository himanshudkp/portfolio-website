import { SocialLink } from "@/types";
import { Github, Linkedin, Mail } from "lucide-react";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/himanshudkp",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Github,
    href: "https://github.com/himanshudkp",
    label: "GitHub",
    color: "from-gray-700 to-gray-600",
  },
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    label: "Email",
    color: "from-purple-600 to-pink-600",
  },
] as const;

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind",
] as const;

export const RESUME_PATH = "/Himanshu_Pandey_Resume.pdf";
