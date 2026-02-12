"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { LogoBrand } from "../ui/logo-brand";
import { CustomButton } from "../ui/custom-button";
import SocialLinks from "../ui/social-links";
import { DesktopNavigation } from "./desk-top-nav";
import { MobileNavigation } from "./mobile-nav";
import { BUTTON_TEXT } from "@/lib/constants";
import MenuButton from "./menu-button";

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
    <>
      <nav className="fixed top-0 z-50 w-full shadow-xl bg-[#1E1E1E] border-b border-teal-500/30 px-5 sm:px-6 lg:px-8 xl:px-[8%]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between gap-4 py-3">
            <LogoBrand />

            <div className="flex-1 flex justify-center">
              <DesktopNavigation
                selectedLink={selectedLink}
                onLinkClick={handleNavClick}
              />
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="hidden md:flex items-center gap-2">
                <SocialLinks variant="header" />
                <CustomButton
                  icon={Download}
                  href="/Himanshu_Pandey_Resume.pdf"
                  download
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  {BUTTON_TEXT.resume_web}
                </CustomButton>
              </div>

              <MenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-[4rem] inset-x-0 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <MobileNavigation
              isOpen={mobileMenuOpen}
              selectedLink={selectedLink}
              onLinkClick={handleNavClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
