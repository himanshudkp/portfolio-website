"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface NavigationProps {
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

const DesktopNavigation = ({ selectedLink, onLinkClick }: NavigationProps) => {
  return (
    <nav className="hidden lg:flex items-center gap-1 bg-[#252525] rounded-full p-1 border border-gray-700/50">
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;
        const isActive = selectedLink === link.name;

        return (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => onLinkClick(link.name)}
            className={`relative px-5 py-2 rounded-full font-medium text-sm transition-colors duration-300 flex items-center gap-2 ${
              isActive ? "text-white" : "text-gray-400"
            } hover:scale-105 active:scale-95`}
            layout
          >
            {isActive && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"
                layoutId="activeNav"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                style={{ zIndex: 0 }}
              />
            )}

            <Icon size={15} className="relative z-10" />
            <span className="relative z-10">{link.name}</span>
          </motion.a>
        );
      })}
    </nav>
  );
};

DesktopNavigation.displayName = "DesktopNavigation";
export default DesktopNavigation;
