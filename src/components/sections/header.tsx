import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data";
import { LogoBrand } from "../logo-brand";
import { CustomButton } from "../ui/custom-button";
import { BUTTON_TEXT } from "@/content";
import SocialLinks from "../ui/social-links";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavigationProps {
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
      staggerChildren: 0.05,
    },
  },
};

const mobileItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="rounded-xl border p-2.5 transition-all duration-300 lg:hidden border-gray-700/50 text-white hover:bg-gray-800 cursor-pointer relative overflow-hidden"
      aria-label="Toggle menu"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-teal-500/10 rounded-xl"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative h-5 w-5"
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isOpen ? 90 : 0,
            scale: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Menu className="absolute inset-0" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isOpen ? 0 : -90,
            scale: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <X className="absolute inset-0" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

const DesktopNavigation = ({ selectedLink, onLinkClick }: NavigationProps) => {
  return (
    <motion.nav
      className="hidden lg:flex items-center gap-1 bg-[#252525] rounded-full p-1.5 border border-gray-700/50"
      variants={navContainerVariants}
    >
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;
        const isActive = selectedLink === link.name;

        return (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => onLinkClick(link.name)}
            className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300 flex items-center gap-2 ${
              isActive ? "text-white" : "text-gray-400"
            }`}
            variants={navItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isActive && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full"
                layoutId="activeNav"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={16} />
            </motion.div>
            <span className="relative z-10">{link.name}</span>
          </motion.a>
        );
      })}
    </motion.nav>
  );
};

const MobileNavigation = ({
  isOpen,
  selectedLink,
  onLinkClick,
}: NavigationProps & { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-[#252525] border-b border-gray-700/50 shadow-2xl mx-4 rounded-2xl overflow-hidden"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="p-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = selectedLink === link.name;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => onLinkClick(link.name)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                      : "text-gray-400 hover:text-teal-300 hover:bg-gray-800"
                  }`}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              );
            })}

            <motion.div
              className="pt-4 mt-4 border-t border-gray-700"
              variants={mobileItemVariants}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="p-2.5 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-gray-800 transition-colors duration-300"
                        aria-label={social.label}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
                <motion.a
                  href="/resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-teal-500/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
    <>
      <motion.nav
        className="fixed top-0 z-50 w-full shadow-xl bg-[#1E1E1E] border-b border-teal-500/30"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
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
                  href="/resume.pdf"
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
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-[4.5rem] inset-x-0 z-40"
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
