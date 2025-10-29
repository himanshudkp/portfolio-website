import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils";
import { LogoBrand } from "../logo-brand";
import { StatusBadge } from "../ui/status-badge";
import SocialLinks from "../ui/social-links";

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const QUICK_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    text: "himanshudkp@gmail.com",
    href: "mailto:himanshudkp@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    text: "+91-9522498034",
    href: "tel:+919522498034",
  },
  {
    icon: MapPin,
    label: "Location",
    text: "Pune, India",
    href: "#",
  },
];

const TECH_STACK = ["React", "TypeScript", "Tailwind CSS"];

const NavigationSection = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h4
        className="mb-4 sm:mb-5 text-sm sm:text-base font-bold text-white"
        variants={itemVariants}
      >
        Quick Links
      </motion.h4>
      <nav>
        <motion.ul
          className="space-y-2 sm:space-y-3"
          variants={containerVariants}
        >
          {QUICK_LINKS.map((link) => (
            <motion.li key={link.name} variants={linkVariants}>
              <motion.a
                href={link.href}
                className="group inline-flex items-center text-xs sm:text-sm text-gray-400 hover:text-white transition-colors relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative">
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h4
        className="mb-4 sm:mb-5 text-sm sm:text-base font-bold text-white"
        variants={itemVariants}
      >
        Get in Touch
      </motion.h4>
      <motion.ul
        className="space-y-3 sm:space-y-4"
        variants={containerVariants}
      >
        {CONTACT_INFO.map((contact) => {
          const Icon = contact.icon;
          return (
            <motion.li key={contact.text} variants={linkVariants}>
              <motion.a
                href={contact.href}
                className="group flex items-start gap-3 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    size={16}
                    className="mt-0.5 text-teal-500 flex-shrink-0"
                  />
                </motion.div>
                <span className="break-all">{contact.text}</span>
              </motion.a>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

const BottomBar = ({ year }: { year: number }) => {
  return (
    <motion.div
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t flex flex-col items-center justify-between gap-4 sm:gap-5 lg:flex-row border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 text-xs sm:text-sm text-center sm:flex-row text-gray-400"
        whileHover={{ scale: 1.02 }}
      >
        <span>© {year} Himanshu Pandey. All rights reserved.</span>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-2 sm:gap-3 sm:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">
          Built With
        </span>
        <motion.div
          className="flex items-center gap-2 rounded-xl border border-gray-800 px-3 py-2 sm:px-5 sm:py-2.5"
          whileHover={{
            borderColor: "rgba(20, 184, 166, 0.3)",
            scale: 1.05,
          }}
        >
          {TECH_STACK.map((tech, idx) => (
            <span key={tech} className="flex items-center gap-2">
              <motion.span
                className="text-xs sm:text-sm font-bold text-white"
                whileHover={{ scale: 1.1, color: "#5eead4" }}
              >
                {tech}
              </motion.span>
              {idx < TECH_STACK.length - 1 && (
                <span className="text-gray-700">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ScrollToTopButton = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.button
        onClick={onClick}
        className="fixed bottom-6 right-4 z-50 flex h-12 w-12 sm:h-14 sm:w-14 sm:bottom-8 sm:right-6 lg:right-8 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 shadow-2xl"
        aria-label="Scroll to top"
        type="button"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(20, 184, 166, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </motion.div>
      </motion.button>
    )}
  </AnimatePresence>
);

const BrandSection = () => {
  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <LogoBrand />

      <motion.p
        className="max-w-md text-sm sm:text-base leading-relaxed text-gray-400"
        variants={itemVariants}
      >
        Frontend Developer specializing in building exceptional web and mobile
        applications with modern technologies.
      </motion.p>
      <StatusBadge text="Available for Opportunities" />

      <SocialLinks variant="hero" />
    </motion.div>
  );
};

export const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.footer
      id="footer"
      className="relative border-t border-gray-900 bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-900/50 to-black" />

      <motion.div
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-teal-600/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl bg-purple-600/5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <BrandSection />
          </motion.div>

          <motion.div className="md:col-span-1" variants={itemVariants}>
            <NavigationSection />
          </motion.div>

          <motion.div className="md:col-span-1" variants={itemVariants}>
            <ContactSection />
          </motion.div>
        </motion.div>

        <BottomBar year={currentYear} />
      </div>

      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </motion.footer>
  );
};
