"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  House,
  User,
  Briefcase,
  Wrench,
  AppWindow,
  Download,
} from "lucide-react";
import { cn } from "@/utils";
import { NavLink } from "@/types";
import { NAV_LINKS, RESUME_LINK } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { LogoBrand } from "@/components";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
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
            ? "border-b border-white/5 bg-gray-900/80 shadow-xl shadow-black/10"
            : "border-b border-gray-900/5 bg-white/80 shadow-xl shadow-gray-900/5"
          : isDark
          ? "border-b border-transparent bg-gray-900/40"
          : "border-b border-transparent bg-white/40"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
        <LogoBrand name="Himanshu Pandey" footer={false} />

        <DesktopNav
          links={NAV_LINKS.slice(0, 5)}
          selectedLink={selectedLink}
          onLinkClick={handleNavClick}
        />

        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          <div className="hidden md:flex items-center gap-2">
            <a
              href={RESUME_LINK}
              target="_blank"
              className={cn(
                "group inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm",
                isDark
                  ? "border-2 border-gray-700 text-gray-300 hover:border-blue-600 hover:bg-blue-600/10 hover:text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
              )}
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onToggle={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        links={NAV_LINKS}
        selectedLink={selectedLink}
        onClose={closeMobileMenu}
        onLinkClick={handleNavClick}
      />
    </nav>
  );
};

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative rounded-xl p-2.5 transition-all duration-300 hover:scale-105",
        isDark
          ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700/50"
          : "bg-white/60 hover:bg-gray-50 border border-gray-200/60"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <Sun
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark
              ? "rotate-0 scale-100 opacity-100 text-blue-400"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
}

interface DesktopNavProps {
  links: NavLink[];
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

function DesktopNav({ links, selectedLink, onLinkClick }: DesktopNavProps) {
  const { isDark } = useTheme();

  return (
    <ul
      className={cn(
        "hidden items-center gap-1 rounded-2xl border px-2 py-2 backdrop-blur-xl lg:flex",
        isDark
          ? "border-white/5 bg-gray-800/40"
          : "border-gray-900/5 bg-white/60 shadow-sm"
      )}
    >
      {links.map((link) => {
        const Icon = link.icon;
        const isSelected = selectedLink === link.name;

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => onLinkClick(link.name)}
              className={cn(
                "group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                isSelected
                  ? isDark
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : isDark
                  ? "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden xl:inline">{link.name}</span>

              {isSelected && (
                <span className="absolute inset-x-0 -bottom-2 mx-auto h-1 w-1 rounded-full bg-white" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  const { isDark } = useTheme();
  return (
    <button
      onClick={onToggle}
      className={cn(
        "rounded-xl border p-2.5 transition-all duration-300 lg:hidden hover:scale-105",
        isDark
          ? "border-gray-700/50 bg-gray-800/60 text-white hover:bg-gray-700/80"
          : "border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-50"
      )}
      aria-label="Toggle menu"
    >
      <div className="relative h-5 w-5">
        <Menu
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        <X
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  selectedLink: string;
  onClose: () => void;
  onLinkClick: (linkName: string) => void;
}

function MobileMenu({
  isOpen,
  links,
  selectedLink,
  onClose,
  onLinkClick,
}: MobileMenuProps) {
  const { isDark } = useTheme();

  const handleLinkClick = (linkName: string) => {
    onLinkClick(linkName);
  };

  const iconMap = {
    Home: House,
    About: User,
    Experience: Briefcase,
    Skills: Wrench,
    Projects: AppWindow,
    Contact: Mail,
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full overflow-hidden backdrop-blur-xl transition-all duration-300 lg:hidden",
        isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0",
        isDark
          ? "border-b border-white/5 bg-gray-900/95"
          : "border-b border-gray-900/5 bg-white/95 shadow-xl"
      )}
    >
      <div className="px-4 py-6 sm:px-6">
        <ul className="mb-6 flex flex-col gap-2">
          {links.map((link) => {
            const Icon = iconMap[link.name as keyof typeof iconMap];
            const isSelected = selectedLink === link.name;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
                    isSelected
                      ? isDark
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="font-medium">{link.name}</span>
                  </span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3">
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-5 py-2.5",
              isDark
                ? "border-2 border-gray-700 text-gray-300 hover:border-blue-600 hover:bg-blue-600/10 hover:text-white"
                : "border-2 border-gray-300 text-gray-700 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
            )}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
