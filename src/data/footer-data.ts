import { ContactItem, QuickLink, SocialLink } from "@/types";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const QUICK_LINKS: QuickLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

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
];

export const CONTACT_INFO: ContactItem[] = [
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    text: "himanshudkp@gmail.com",
    hoverColor: "group-hover:bg-blue-600/20",
  },
  {
    icon: Phone,
    href: "tel:+919522498034",
    text: "+91-9522498034",
    hoverColor: "group-hover:bg-purple-600/20",
  },
  {
    icon: MapPin,
    text: "Pune, India",
    hoverColor: "",
  },
];

export const TECH_STACK = [
  { name: "React", color: "text-blue-400" },
  { name: "TypeScript", color: "text-cyan-400" },
  { name: "Tailwind", color: "text-purple-400" },
];
