"use client";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/utils";
import {
  Button,
  DesktopNavigation,
  LogoBrand,
  MobileNavigation,
  SocialLinks,
} from "@/components";
import { useCallback, useState } from "react";
import { BUTTON_TEXT } from "@/content";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="rounded-xl border p-2.5 transition-all duration-300 lg:hidden hover:scale-105 border-gray-700/50 text-white hover:bg-gray-800 cursor-pointer"
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
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");

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
        "fixed top-0 z-50 w-full transition-all duration-300 shadow-xl bg-[var(--dark)] border-b-1 border-b-teal-500"
      )}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo Section*/}
          <div className="flex-shrink-0">
            <LogoBrand />
          </div>

          {/* Nav Section */}
          <div className="flex-1 flex justify-center">
            <DesktopNavigation
              selectedLink={selectedLink}
              onLinkClick={handleNavClick}
            />
          </div>

          {/* Right Items */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <SocialLinks />
              <Button
                icon={Download}
                href="/resume.pdf"
                download={true}
                variant="primary"
                size="md"
              >
                {BUTTON_TEXT.resume_web}
              </Button>
            </div>

            {/* Toggle Mobile Menu */}
            <MenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        selectedLink={selectedLink}
        onLinkClick={handleNavClick}
      />
    </nav>
  );
};
