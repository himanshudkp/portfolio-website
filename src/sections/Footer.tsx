import { ArrowUp } from "lucide-react";
import { useMemo, useCallback, useState, useEffect } from "react";
import { cn } from "@/utils/utils";
import {
  APP_TECH_STACK,
  CONTACT_LINKS,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/data/data";
import { useTheme } from "@/hooks/use-theme";
import { ContactLink } from "@/components/contact-link";
import { LogoBrand } from "@/components/logo-brand";
import { StatusBadge } from "@/components/status-badge";

const BrandSection = () => {
  const { isDark } = useTheme();
  return (
    <div className="space-y-6">
      <LogoBrand />

      <p
        className={cn(
          "max-w-md text-sm sm:text-base leading-relaxed",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Full Stack Developer specializing in building exceptional web and mobile
        applications with cutting-edge technologies.
      </p>

      {/* Availability Badge */}
      <StatusBadge text="Available for Opportunities" color="green" />

      {/* Social Links */}
      <div>
        <p
          className={cn(
            "text-xs sm:text-sm font-semibold mb-3",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Connect With Me
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg",
                  isDark
                    ? "border-gray-800 bg-gray-900 hover:border-blue-600/50 hover:bg-gray-800"
                    : "border-gray-200 bg-white hover:border-blue-500 hover:bg-gray-50"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
                    isDark
                      ? "text-gray-400 group-hover:text-blue-400"
                      : "text-gray-600 group-hover:text-blue-600"
                  )}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const NavigationSection = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <h4
        className={cn(
          "mb-4 sm:mb-5 text-sm sm:text-base font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Quick Links
      </h4>
      <nav>
        <ul className="space-y-2 sm:space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={cn(
                  "group inline-flex items-center text-xs sm:text-sm transition-colors",
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <span className="relative">
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                      isDark ? "bg-white" : "bg-gray-900"
                    )}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const ContactSection = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <h4
        className={cn(
          "mb-4 sm:mb-5 text-sm sm:text-base font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Get in Touch
      </h4>
      <ul className="space-y-3 sm:space-y-4">
        {CONTACT_LINKS.map((contact) => {
          return (
            <li key={contact.text}>
              <ContactLink
                href={contact.href}
                label={contact.label}
                icon={contact.icon}
                title={contact.title || ""}
                text={contact.text || ""}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BottomBar = ({ year }: { year: number }) => {
  const { isDark } = useTheme();
  return (
    <div
      className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t flex flex-col items-center justify-between gap-4 sm:gap-5 lg:flex-row"
      style={{
        borderColor: isDark ? "rgb(31, 41, 55)" : "rgb(229, 231, 235)",
      }}
    >
      {/* Copyright */}
      <div
        className={cn(
          "flex flex-col items-center gap-2 text-xs sm:text-sm text-center sm:flex-row",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        <span>&#xA9; {year} Himanshu Pandey. All rights reserved.</span>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 sm:flex-row">
        <span
          className={cn(
            "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
            isDark ? "text-gray-500" : "text-gray-500"
          )}
        >
          Built With
        </span>
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border px-3 py-2 sm:px-5 sm:py-2.5",
            isDark ? "border-gray-800" : "border-gray-200"
          )}
        >
          {APP_TECH_STACK.map((tech, idx) => (
            <span key={tech} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xs sm:text-sm font-bold",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                {tech}
              </span>
              {idx < APP_TECH_STACK.length - 1 && (
                <span
                  className={cn(isDark ? "text-gray-700" : "text-gray-400")}
                >
                  •
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

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
      "fixed bottom-6 right-4 z-50 flex h-12 w-12 sm:h-14 sm:w-14 sm:bottom-8 sm:right-6 lg:right-8 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl transition-all hover:shadow-blue-500/50 hover:scale-110",
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-20 opacity-0 pointer-events-none"
    )}
    aria-label="Scroll to top"
    type="button"
  >
    <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
  </button>
);

export const Footer = () => {
  const { isDark } = useTheme();
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
      className={cn(
        "relative border-t overflow-hidden",
        isDark
          ? "border-gray-900 bg-black text-white"
          : "border-gray-200 bg-gray-50 text-gray-900"
      )}
    >
      {/* Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          isDark
            ? "bg-gradient-to-b from-gray-900/50 to-black"
            : "bg-gradient-to-b from-white/50 to-gray-50"
        )}
      />

      {/* Decorative Elements */}
      <div
        className={cn(
          "absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl",
          isDark ? "bg-blue-600/5" : "bg-blue-600/10"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl",
          isDark ? "bg-purple-600/5" : "bg-purple-600/10"
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Main Content */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand - Full width on mobile, half on tablet, spans 5 on desktop */}
          <div className="sm:col-span-2 lg:col-span-5">
            <BrandSection />
          </div>

          {/* Navigation - Full width on mobile, half on tablet, spans 3 on desktop */}
          <div className="sm:col-span-1 lg:col-span-3">
            <NavigationSection />
          </div>

          {/* Contact - Full width on mobile, full on tablet, spans 4 on desktop */}
          <div className="sm:col-span-2 lg:col-span-4">
            <ContactSection />
          </div>
        </div>

        {/* Bottom Bar */}
        <BottomBar year={currentYear} />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </footer>
  );
};
