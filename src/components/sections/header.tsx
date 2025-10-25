"use client";
import { Download } from "lucide-react";
import { cn } from "@/utils";
import {
  LogoBrand,
  MenuButton,
  NavLinkMobile,
  NavLinkWeb,
  SocialLinks,
} from "@/components";
import { useCallback, useState } from "react";

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
        "fixed top-0 z-50 w-full transition-all duration-300 shadow-xl bg-[var(--dark)] border-b-5 border-b-teal-500"
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
            <NavLinkWeb
              selectedLink={selectedLink}
              onLinkClick={handleNavClick}
            />
          </div>

          {/* Right Items */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <SocialLinks />
              <a
                href="/resume.pdf"
                download={true}
                className="group inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm border-2 border-gray-700 text-gray-300 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>
            </div>

            <MenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </div>
      <NavLinkMobile
        isOpen={mobileMenuOpen}
        selectedLink={selectedLink}
        onLinkClick={handleNavClick}
      />
    </nav>
  );
};
