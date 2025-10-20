import { NavLink } from "@/types";
import { AppWindow, House, Mail, User, Wrench } from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: AppWindow },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Contact", href: "#contact", icon: Mail },
] as const;

export const RESUME_LINK =
  "https://drive.google.com/file/d/1ZuqfZxDznWVRvt970dEjX4bCEdfb3Xew/view?usp=sharing" as const;
