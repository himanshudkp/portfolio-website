import { Link, NavLink } from "@/types";
import { AppWindow, Github, House, Linkedin, Mail, User, Wrench } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: AppWindow },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Contact", href: "#contact", icon: Mail },
] as const;

export const SOCIAL_LINKS: Link[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/himanshudkp",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/himanshudkp",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    label: "Email",
  },
] as const;