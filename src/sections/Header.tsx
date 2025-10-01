"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
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
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import { NavLink } from "@/types";
import { NAV_LINKS, RESUME_PATH } from "@/data/header-data";
import { ButtonLink } from "@/ui/ButtonLink";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { CommandPaletteButton } from "@/components/CommandPaletteButton";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const {} = useCommandPalette();

  // Handle scroll for enhanced header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "Himanshu_Pandey_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        "fixed top-0 z-50 w-full px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
        scrolled
          ? isDark
            ? "shadow-lg shadow-purple-900/10 border-b border-gray-800/50 bg-gray-900/80"
            : "shadow-lg shadow-gray-200/50 border-b border-gray-200/50 bg-white/80"
          : isDark
          ? "border-b border-transparent bg-gray-900/60"
          : "border-b border-transparent bg-white/60"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <Logo isDark={isDark} />

        {/* Desktop Navigation */}
        <DesktopNav
          isDark={isDark}
          links={NAV_LINKS.slice(0, 5)}
          selectedLink={selectedLink}
          onLinkClick={handleNavClick}
        />

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <CommandPaletteButton isDark={isDark} />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <ContactButton isDark={isDark} />
          <ResumeButton isDark={isDark} onClick={downloadResume} />
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            isDark={isDark}
            onToggle={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        isDark={isDark}
        links={NAV_LINKS}
        selectedLink={selectedLink}
        onClose={closeMobileMenu}
        onDownloadResume={downloadResume}
        onLinkClick={handleNavClick}
      />
    </nav>
  );
}

interface LogoProps {
  isDark: boolean;
}

function Logo({ isDark }: LogoProps) {
  return (
    <Link href="#home" className="group relative flex items-center gap-2.5">
      {/* Logo Badge */}
      <div className="relative">
        {/* Glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl",
            isDark
              ? "bg-gradient-to-br from-blue-500/30 to-purple-600/30"
              : "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
          )}
        />
        <div
          className={cn(
            "relative flex h-11 w-11 items-center justify-center rounded-2xl text-base font-bold text-white transition-all duration-500 group-hover:scale-105 group-hover:rotate-3",
            isDark
              ? "bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 shadow-xl shadow-blue-500/25"
              : "bg-gradient-to-br from-blue-600 via-purple-500 to-purple-700 shadow-xl shadow-blue-600/30"
          )}
        >
          HP
        </div>
      </div>

      {/* Text */}
      <div className="hidden overflow-hidden sm:block">
        <span
          className={cn(
            "block text-lg font-bold tracking-tight transition-colors duration-300",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Himanshu
        </span>
        <span
          className={cn(
            "block text-xs font-medium transition-colors duration-300",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Software Developer
        </span>
      </div>
    </Link>
  );
}

interface DesktopNavProps {
  isDark: boolean;
  links: NavLink[];
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

function DesktopNav({
  isDark,
  links,
  selectedLink,
  onLinkClick,
}: DesktopNavProps) {
  const [hoveredLink, setHoveredLink] = useState("");

  const iconMap = {
    Home: House,
    About: User,
    Experience: Briefcase,
    Skills: Wrench,
    Projects: AppWindow,
  };

  return (
    <ul
      className={cn(
        "hidden items-center gap-1 rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-500 lg:flex xl:gap-1.5",
        isDark
          ? "border-gray-700/50 bg-gray-800/40 shadow-2xl shadow-purple-900/10"
          : "border-gray-200/60 bg-white/60 shadow-2xl shadow-gray-200/40"
      )}
    >
      {links.map((link, i) => {
        const Icon = iconMap[link.name as keyof typeof iconMap];
        const isSelected = selectedLink === link.name;
        const isHovered = hoveredLink === link.name;

        return (
          <li key={link.name} className="flex items-center gap-2">
            <ButtonLink
              href={link.href}
              variant="default"
              size="md"
              className={cn(
                "group relative overflow-hidden rounded-xl px-4 py-2.5 font-medium transition-all duration-300 xl:px-5",
                isSelected && "scale-105",
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-white"
              )}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink("")}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.name);
              }}
            >
              {/* Gradient background */}
              <span
                className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300",
                  isSelected
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                )}
              />

              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                {Icon && (
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      (isSelected || isHovered) && "scale-110"
                    )}
                  />
                )}
                <span className="hidden xl:inline">{link.name}</span>
              </span>

              {/* Bottom indicator */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300",
                  isSelected
                    ? "w-full"
                    : isHovered
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
              />
            </ButtonLink>

            {/* Separator */}
            {i < links.length - 1 && (
              <span
                className={cn(
                  "h-6 w-px bg-gradient-to-b transition-all duration-300",
                  isDark
                    ? "from-transparent via-gray-600 to-transparent"
                    : "from-transparent via-gray-300 to-transparent"
                )}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative overflow-hidden rounded-xl p-2.5 transition-all duration-300 hover:scale-110",
        isDark
          ? "border border-gray-700/50 bg-gray-800/60 text-yellow-400 hover:bg-gray-700/80"
          : "border border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-100/80"
      )}
      aria-label="Toggle theme"
    >
      {" "}
      {/* Glow on hover */}{" "}
      <span
        className={cn(
          "absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100",
          isDark ? "bg-yellow-400/20" : "bg-blue-400/20"
        )}
      />{" "}
      <span className="relative z-10">
        {" "}
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
        )}{" "}
      </span>{" "}
    </button>
  );
}

interface ContactButtonProps {
  isDark: boolean;
}

function ContactButton({ isDark }: ContactButtonProps) {
  return (
    <ButtonLink
      href="#contact"
      variant="gradient"
      size="lg"
      className={cn(
        "group relative hidden overflow-hidden rounded-xl px-5 py-2.5 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl md:flex",
        isDark
          ? "bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          : "bg-gradient-to-r from-blue-600 via-purple-500 to-purple-700 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
      )}
      icon={<Mail className="h-4 w-4" />}
      iconPosition="left"
    >
      <span className="relative z-10">Contact</span>
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </ButtonLink>
  );
}

interface ResumeButtonProps {
  isDark: boolean;
  onClick: () => void;
}

function ResumeButton({ isDark, onClick }: ResumeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative hidden items-center gap-2 overflow-hidden rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 lg:flex xl:px-5",
        isDark
          ? "border-gray-700/60 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          : "border-gray-300/60 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-200/50"
      )}
    >
      {" "}
      <ArrowDownToLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />{" "}
      <span>Resume</span>{" "}
    </button>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  isDark: boolean;
  onToggle: () => void;
}

function MobileMenuButton({ isOpen, isDark, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative overflow-hidden rounded-xl border p-2.5 transition-all duration-300 lg:hidden",
        isDark
          ? "border-gray-700/50 bg-gray-800/60 text-white hover:bg-gray-700/80"
          : "border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-100/80",
        isOpen && "scale-95"
      )}
      aria-label="Toggle menu"
    >
      {" "}
      <span className="relative z-10">
        {" "}
        {isOpen ? (
          <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <Menu className="h-5 w-5" />
        )}{" "}
      </span>{" "}
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  isDark: boolean;
  links: NavLink[];
  selectedLink: string;
  onClose: () => void;
  onDownloadResume: () => void;
  onLinkClick: (linkName: string) => void;
}

function MobileMenu({
  isOpen,
  isDark,
  links,
  selectedLink,
  onClose,
  onDownloadResume,
  onLinkClick,
}: MobileMenuProps) {
  const handleDownloadResume = () => {
    onDownloadResume();
    onClose();
  };

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
        "absolute left-0 right-0 top-full overflow-hidden backdrop-blur-xl transition-all duration-500 lg:hidden",
        isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0",
        isDark
          ? "border-b border-gray-800/50 bg-gray-900/90 shadow-2xl shadow-purple-900/20"
          : "border-b border-gray-200/50 bg-white/90 shadow-2xl shadow-gray-200/50"
      )}
    >
      <div className="px-4 py-6 sm:px-6">
        {/* Navigation Links */}
        <ul className="mb-6 flex flex-col gap-1.5">
          {links.map((link) => {
            const Icon = iconMap[link.name as keyof typeof iconMap];
            const isSelected = selectedLink === link.name;

            return (
              <li key={link.name}>
                <ButtonLink
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  variant="ghost"
                  size="lg"
                  className={cn(
                    "group relative flex items-center justify-between overflow-hidden rounded-xl px-4 py-3.5 transition-all duration-300",
                    isSelected &&
                      "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10",
                    isDark
                      ? "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100/80 hover:text-gray-900"
                  )}
                >
                  <span className="flex items-center gap-3">
                    {Icon && (
                      <Icon
                        className={cn(
                          "h-5 w-5 transition-all duration-300",
                          isSelected && "text-purple-500"
                        )}
                      />
                    )}
                    <span className="font-medium">{link.name}</span>
                  </span>

                  {/* Selected indicator */}
                  {isSelected && (
                    <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}

                  {/* Arrow */}
                  {!isSelected && (
                    <span
                      className={cn(
                        "text-lg transition-transform duration-300 group-hover:translate-x-1",
                        isDark ? "text-gray-600" : "text-gray-400"
                      )}
                    >
                      →
                    </span>
                  )}
                </ButtonLink>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleDownloadResume}
            className={cn(
              "group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
              isDark
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                : "bg-gradient-to-r from-blue-600 via-purple-500 to-purple-700 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
            )}
          >
            {" "}
            <ArrowDownToLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />{" "}
            <span>Download Resume</span> {/* Shimmer */}{" "}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />{" "}
          </button>

          <ButtonLink
            href="#contact"
            onClick={onClose}
            variant="outline"
            size="lg"
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02]",
              isDark
                ? "border-gray-700/60 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
                : "border-gray-300/60 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
            )}
            icon={<Mail className="h-5 w-5" />}
            iconPosition="left"
          >
            Contact Me
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
