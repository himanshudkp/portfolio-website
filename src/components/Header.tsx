"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowDownToLine, Moon, Sun, Menu, X, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import { NavLink } from "@/types";
import { NAV_LINKS, RESUME_PATH } from "@/data/header-data";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full px-5 py-3 backdrop-blur-md transition-all duration-300 lg:px-8 xl:px-[8%]",
        "shadow-sm",
        isDark
          ? "border-b border-gray-800 bg-gray-900/90"
          : "border-b border-gray-200/50 bg-white/90"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Logo isDark={isDark} />

        {/* Desktop Navigation */}
        <DesktopNav isDark={isDark} links={NAV_LINKS.slice(0, 5)} />

        {/* Right Actions */}
        <div className="flex items-center gap-3">
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
        onClose={closeMobileMenu}
        onDownloadResume={downloadResume}
      />
    </nav>
  );
}

interface LogoProps {
  isDark: boolean;
}

function Logo({ isDark }: LogoProps) {
  return (
    <Link href="#home" className="group flex items-center gap-2">
      <div className="relative">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-bold text-white transition-all duration-300 group-hover:scale-110",
            isDark
              ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20"
              : "bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20"
          )}
        >
          HP
        </div>
      </div>
      <div className="hidden sm:block">
        <span
          className={cn(
            "text-lg font-bold",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Himanshu
        </span>
        <span
          className={cn(
            "block text-xs",
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
}

function DesktopNav({ isDark, links }: DesktopNavProps) {
  return (
    <ul
      className={cn(
        "hidden items-center gap-1 rounded-2xl border px-4 py-2 backdrop-blur-sm transition-colors duration-300 lg:flex",
        isDark
          ? "border-gray-700 bg-gray-800/50"
          : "border-gray-200 bg-white/50"
      )}
    >
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className={cn(
              "inline-block rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105",
              isDark
                ? "text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg"
                : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-md"
            )}
          >
            {link.name}
          </a>
        </li>
      ))}
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
        "rounded-xl p-2.5 transition-all duration-300 hover:scale-110",
        isDark
          ? "border border-gray-700 bg-gray-800 text-yellow-400 hover:bg-gray-700"
          : "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

interface ContactButtonProps {
  isDark: boolean;
}

function ContactButton({ isDark }: ContactButtonProps) {
  return (
    <a
      href="#contact"
      className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:flex"
    >
      <Mail className="h-4 w-4" />
      <span>Contact</span>
    </a>
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
        "hidden items-center gap-2 rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 lg:flex",
        isDark
          ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10"
          : "border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50"
      )}
    >
      <ArrowDownToLine className="h-4 w-4" />
      <span>Resume</span>
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
        "rounded-xl border p-2.5 transition-all duration-300 lg:hidden",
        isDark
          ? "border-gray-700 text-white hover:bg-gray-800"
          : "border-gray-200 text-gray-700 hover:bg-gray-100"
      )}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  isDark: boolean;
  links: NavLink[];
  onClose: () => void;
  onDownloadResume: () => void;
}

function MobileMenu({
  isOpen,
  isDark,
  links,
  onClose,
  onDownloadResume,
}: MobileMenuProps) {
  if (!isOpen) return null;

  const handleDownloadResume = () => {
    onDownloadResume();
    onClose();
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full backdrop-blur-md transition-all duration-300 lg:hidden",
        "shadow-xl",
        isDark
          ? "border-b border-gray-800 bg-gray-900/95"
          : "border-b border-gray-200 bg-white/95"
      )}
    >
      <div className="px-5 py-4">
        <ul className="mb-4 flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300",
                  isDark
                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <span className="font-medium">{link.name}</span>
                <span
                  className={cn(
                    "text-xs",
                    isDark ? "text-gray-500" : "text-gray-400"
                  )}
                >
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <button
            onClick={handleDownloadResume}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
          >
            <ArrowDownToLine className="h-4 w-4" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 font-semibold transition-all duration-300",
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            )}
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
