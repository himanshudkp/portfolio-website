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
  ExternalLink,
} from "lucide-react";
import { cn } from "@/utils";
import { NavLink } from "@/types";
import { NAV_LINKS, RESUME_LINK } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import BtnLink from "@/ui/BtnLink";
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
        "fixed top-0 z-50 w-full px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        scrolled
          ? isDark
            ? "border-b border-gray-800/50 bg-gray-900/90 shadow-lg"
            : "border-b border-gray-200/50 bg-white/90 shadow-lg"
          : isDark
          ? "border-b border-transparent bg-gray-900/60"
          : "border-b border-transparent bg-white/60"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <LogoBrand name="Himanshu" footer={false} />

        <DesktopNav
          links={NAV_LINKS.slice(0, 5)}
          selectedLink={selectedLink}
          onLinkClick={handleNavClick}
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className={cn(
              "rounded-xl border p-2.5 transition-colors duration-200",
              isDark
                ? "border-gray-700/50 bg-gray-800/60 text-yellow-400 hover:bg-gray-700"
                : "border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-100"
            )}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <BtnLink
            href="#contact"
            variant="primary"
            icon={Mail}
            iconPosition="left"
            className="hidden md:flex"
          >
            Contact
          </BtnLink>
          <BtnLink
            href="https://drive.google.com/..."
            target="_blank"
            variant="primary"
            icon={ExternalLink}
            className="hidden md:flex"
          >
            Resume
          </BtnLink>
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
        "hidden items-center gap-2 rounded-xl border px-3 py-2 backdrop-blur-xl lg:flex",
        isDark
          ? "border-gray-700/50 bg-gray-800/40"
          : "border-gray-200/60 bg-white/60"
      )}
    >
      {links.map((link, i) => {
        const Icon = link.icon;
        const isSelected = selectedLink === link.name;

        return (
          <li key={link.name} className="flex items-center gap-2">
            <>{console.log(link.href)}</>
            <BtnLink
              href={link.href}
              variant="ghost"
              size="nav"
              icon={Icon}
              isSelected={isSelected}
              onClick={() => onLinkClick(link.name)}
            >
              <span className="hidden xl:inline">{link.name}</span>
            </BtnLink>
            {i < links.length - 1 && (
              <span
                className={cn(
                  "h-6 w-px",
                  isDark ? "bg-gray-700" : "bg-gray-300"
                )}
              />
            )}
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
        "rounded-xl border p-2.5 transition-colors duration-200 lg:hidden",
        isDark
          ? "border-gray-700/50 bg-gray-800/60 text-white hover:bg-gray-700"
          : "border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-100"
      )}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
          ? "border-b border-gray-800/50 bg-gray-900/95"
          : "border-b border-gray-200/50 bg-white/95"
      )}
    >
      <div className="px-4 py-6 sm:px-6">
        <ul className="mb-6 flex flex-col gap-1.5">
          {links.map((link) => {
            const Icon = iconMap[link.name as keyof typeof iconMap];
            const isSelected = selectedLink === link.name;

            return (
              <li key={link.name}>
                <BtnLink
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  variant="ghost"
                  size="navMobile"
                  isSelected={isSelected}
                  className="justify-between w-full"
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="font-medium">{link.name}</span>
                  </span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </BtnLink>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row">
          <BtnLink
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={ExternalLink}
            fullWidth
            className="flex-1"
          >
            View Resume
          </BtnLink>

          <BtnLink
            href="#contact"
            onClick={onClose}
            variant="outline"
            size="md"
            icon={Mail}
            iconPosition="left"
            fullWidth
            className="flex-1"
          >
            Contact Me
          </BtnLink>
        </div>
      </div>
    </div>
  );
}
