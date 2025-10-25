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