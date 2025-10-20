"use client";
import { Mail, Download } from "lucide-react";
import { cn } from "@/utils";
import {
  LogoBrand,
  MenuButton,
  NavLinkMobile,
  NavLinkWeb,
  ThemeToggle,
} from "@/components";
import { RESUME_LINK } from "@/data";
import { useTheme } from "@/hooks";
import { NavLink } from "@/types";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const Header = () => {
  const { isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback((linkName: string) => {
    setSelectedLink(linkName);
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        scrolled
          ? isDark
            ? "border-b border-white/5 bg-[#1E1E1E]/80 shadow-xl shadow-black/10"
            : "border-b border-gray-900/5 bg-white/80 shadow-xl shadow-gray-900/5"
          : isDark
          ? "border-b border-transparent bg-[#1E1E1E]/40"
          : "border-b border-transparent bg-white/40"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo Section*/}
          <div className="flex-shrink-0">
            <LogoBrand />
          </div>

          {/* Nav Section */}
          <div className="flex-1 flex justify-center">
            <NavLinkWeb
              selectedLink={selectedLink}
              onLinkClick={handleNavClick}
            />
          </div>

          {/* Right Items */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />

            <div className="hidden md:flex items-center gap-2">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm",
                  isDark
                    ? "border-2 border-gray-700 text-gray-300 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400"
                    : "border-2 border-gray-300 text-gray-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600"
                )}
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm bg-teal-500 text-white hover:bg-teal-600"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Hire Me</span>
              </a>
            </div>

            <MenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </div>
      <NavLinkMobile
        isOpen={mobileMenuOpen}
        selectedLink={selectedLink}
        onClose={closeMobileMenu}
        onLinkClick={handleNavClick}
      />
    </nav>
  );
};
