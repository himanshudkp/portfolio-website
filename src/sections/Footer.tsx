import { ArrowUp, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useMemo, useCallback, useState, useEffect } from "react";
import { cn } from "@/utils";
import { CMDHintFooter, LogoBrand } from "@/components";
import { APP_TECH_STACK, CONTACT_LINKS, NAV_LINKS, SOCIAL_LINKS } from "@/data";
import { useTheme } from "@/hooks/useTheme";

const BrandSection = () => {
  const { isDark } = useTheme();
  return (
    <div className="space-y-6">
      <LogoBrand name="Himanshu Pandey" footer={true} />

      <p
        className={cn(
          "max-w-md text-base leading-relaxed",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Full Stack Developer specializing in building exceptional web and mobile
        applications with cutting-edge technologies.
      </p>

      {/* Availability Badge */}
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2",
          isDark
            ? "bg-green-600/20 border-green-600/30"
            : "bg-green-100 border-green-300"
        )}
      >
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span
          className={cn(
            "text-sm font-semibold",
            isDark ? "text-green-400" : "text-green-700"
          )}
        >
          Available for Opportunities
        </span>
      </div>

      {/* Social Links */}
      <div>
        <p
          className={cn(
            "text-sm font-semibold mb-3",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Connect With Me
        </p>
        <div className="flex flex-wrap gap-3">
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
                  "group flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg",
                  isDark
                    ? "border-gray-800 bg-gray-900 hover:border-blue-600/50 hover:bg-gray-800"
                    : "border-gray-200 bg-white hover:border-blue-500 hover:bg-gray-50"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
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
          "mb-5 text-base font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Quick Links
      </h4>
      <nav>
        <ul className="space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={cn(
                  "group flex items-center text-sm transition-colors",
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <span
                  className={cn(
                    "mr-2 opacity-0 transition-opacity group-hover:opacity-100",
                    isDark ? "text-blue-600" : "text-blue-600"
                  )}
                >
                  →
                </span>
                {link.name}
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
          "mb-5 text-base font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Get in Touch
      </h4>
      <ul className="space-y-4">
        {CONTACT_LINKS.map((contact) => {
          const Icon = contact.icon;
          return (
            <li key={contact.text}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                className="group flex items-start gap-3 transition-colors"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border transition-all",
                    isDark
                      ? "border-gray-800 bg-gray-900 group-hover:border-blue-600/50 group-hover:bg-gray-800"
                      : "border-gray-200 bg-white group-hover:border-blue-500 group-hover:bg-gray-50"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isDark
                        ? "text-gray-400 group-hover:text-blue-400"
                        : "text-gray-600 group-hover:text-blue-600"
                    )}
                  />
                </div>
                <div className="flex-1 pt-1">
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider mb-1",
                      isDark ? "text-gray-500" : "text-gray-500"
                    )}
                  >
                    {contact.title}
                  </p>
                  <p
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isDark
                        ? "text-gray-300 group-hover:text-white"
                        : "text-gray-700 group-hover:text-gray-900"
                    )}
                  >
                    {contact.text}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ServicesSection = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <h4
        className={cn(
          "mb-5 text-base font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Services
      </h4>
      <ul className="space-y-3">
        {[
          "Web Development",
          "Mobile Apps",
          "UI/UX Design",
          "API Development",
          "Consulting",
        ].map((service) => (
          <li
            key={service}
            className={cn(
              "flex items-center gap-2 text-sm",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BottomBar = ({ year }: { year: number }) => {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
      {/* Copyright */}
      <div
        className={cn(
          "flex flex-col items-center gap-2 text-sm sm:flex-row",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        <span>© {year} Himanshu Pandey. All rights reserved.</span>
        <span
          className={cn(
            "hidden sm:inline",
            isDark ? "text-gray-700" : "text-gray-400"
          )}
        >
          •
        </span>
        <span className={cn(isDark ? "text-gray-500" : "text-gray-500")}>
          Designed & Built with passion
        </span>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            isDark ? "text-gray-500" : "text-gray-500"
          )}
        >
          Built With
        </span>
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border px-5 py-2.5 shadow-lg",
            isDark
              ? "border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800"
              : "border-gray-200 bg-gradient-to-r from-gray-50 to-white"
          )}
        >
          {APP_TECH_STACK.map((tech, idx) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
      "fixed bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl transition-all hover:shadow-blue-500/50 hover:scale-110 sm:right-8",
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-20 opacity-0 pointer-events-none"
    )}
    aria-label="Scroll to top"
    type="button"
  >
    <ArrowUp className="h-6 w-6 text-white" />
  </button>
);

// Main Footer Component
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
          "absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl",
          isDark ? "bg-blue-600/5" : "bg-blue-600/10"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl",
          isDark ? "bg-purple-600/5" : "bg-purple-600/10"
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Main Content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <BrandSection />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <NavigationSection />
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <ServicesSection />
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <ContactSection />
          </div>
        </div>

        {/* Divider */}
        <div
          className={cn(
            "my-10 h-px bg-gradient-to-r from-transparent to-transparent",
            isDark ? "via-gray-800" : "via-gray-300"
          )}
        />

        {/* Bottom Bar */}
        <BottomBar year={currentYear} />
      </div>

      {/* CMD Hint */}
      <div
        className={cn(
          "relative border-t backdrop-blur-sm",
          isDark ? "border-gray-900 bg-black/50" : "border-gray-200 bg-white/50"
        )}
      >
        <div className="flex items-center justify-center gap-4 py-4">
          <CMDHintFooter />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </footer>
  );
};
