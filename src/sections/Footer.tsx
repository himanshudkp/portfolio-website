import { ArrowUp } from "lucide-react";
import { useMemo, useCallback, useState, useEffect } from "react";
import { cn } from "@/utils";
import { CMDHintFooter, LogoBrand } from "@/components";
import { APP_TECH_STACK, CONTACT_LINKS, NAV_LINKS, SOCIAL_LINKS } from "@/data";
import BtnLink from "@/ui/BtnLink";
import { useTheme } from "@/hooks/useTheme";

const BrandSection = () => {
  const { isDark } = useTheme();
  return (
    <div className="space-y-7">
      <LogoBrand name="Himanshu Pandey" footer={true} />

      <p className="max-w-sm text-sm text-gray-400">
        Crafting exceptional digital experiences with modern web technologies
        and user-centric design.
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <BtnLink
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              variant="icon"
              size="icon"
            >
              <Icon className={`h-5 w-5 ${!isDark && "text-gray-800"}`} />
            </BtnLink>
          );
        })}
      </div>
    </div>
  );
};

const NavigationSection = () => (
  <div>
    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
      Quick Links
    </h4>
    <nav>
      <ul className="space-y-2">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <BtnLink
              href={link.href}
              variant="link"
              size="sm"
              className="hover:text-white"
            >
              {link.name}
            </BtnLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const ContactSection = () => {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
        Get in Touch
      </h4>
      <ul className="space-y-3">
        {CONTACT_LINKS.map((contact) => {
          const Icon = contact.icon;
          return (
            <li key={contact.text}>
              <BtnLink
                href={contact.href}
                target="_blank"
                aria-label={contact.label}
                variant="link"
                size="contact"
                className="gap-3 hover:text-white"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-gray-900">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm">{contact.text}</span>
              </BtnLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BottomBar = ({ year }: { year: number }) => (
  <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
    {/* Copyright */}
    <div className="flex flex-col items-center gap-2 text-sm text-gray-400 sm:flex-row">
      <span>© {year} Himanshu Pandey. All rights reserved.</span>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <span className="text-xs text-gray-500">Powered by</span>
      <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2">
        {APP_TECH_STACK.map((tech, idx) => (
          <span key={tech} className="flex items-center gap-2">
            <span className={cn("text-xs font-medium text-white")}>{tech}</span>
            {idx < APP_TECH_STACK.length - 1 && (
              <span className="text-gray-700">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Scroll to Top Button
const ScrollToTopButton = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-lg transition-all hover:bg-blue-700 sm:right-8",
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-20 opacity-0 pointer-events-none"
    )}
    aria-label="Scroll to top"
    type="button"
  >
    <ArrowUp className="h-5 w-5 text-white" />
  </button>
);

// Main Footer Component
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
    <footer
      id="footer"
      className="border-t border-gray-900 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Main Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-6">
            <BrandSection />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <NavigationSection />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ContactSection />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-900 lg:my-12" />

        {/* Bottom Bar */}
        <BottomBar year={currentYear} />
      </div>

      {/* CMD Hint */}
      <div className="flex items-center justify-center gap-4 border-t border-gray-900 py-4">
        <CMDHintFooter />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </footer>
  );
};
