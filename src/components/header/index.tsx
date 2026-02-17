"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { CustomButton } from "../ui/custom-button";
import SocialLinks from "../ui/social-links";
import MenuButton from "./menu-button";
import { PortfolioLogo } from "../ui/portfolio-logo";
import DesktopNavigation from "./desk-top-nav";
import MobileNavigation from "./mobile-nav";
import { BUTTON_TEXT } from "@/lib/constants";

const MOBILE_NAV_ANIMATION = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.25, ease: "easeOut" },
} as const;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (linkName: string) => {
      setSelectedLink(linkName);
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full shadow-xl bg-[#1E1E1E] border-b border-teal-500/30 px-5 sm:px-6 lg:px-8 xl:px-[8%]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between gap-4 py-3">
            <PortfolioLogo />

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
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              className="fixed top-[4rem] inset-x-0 z-50 md:hidden"
              initial={MOBILE_NAV_ANIMATION.initial}
              animate={MOBILE_NAV_ANIMATION.animate}
              exit={MOBILE_NAV_ANIMATION.exit}
              transition={MOBILE_NAV_ANIMATION.transition}
            >
              <MobileNavigation
                isOpen={mobileMenuOpen}
                selectedLink={selectedLink}
                onLinkClick={handleNavClick}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Header.displayName = "Header";
export default Header;
