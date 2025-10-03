import { ArrowUp, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useMemo, useCallback, useState, useEffect } from "react";
import { cn } from "@/utils";
import { CMDHintFooter, LogoBrand } from "@/components";
import { APP_TECH_STACK, CONTACT_LINKS, NAV_LINKS, SOCIAL_LINKS } from "@/data";
import BtnLink from "@/ui/BtnLink";
import { useTheme } from "@/hooks/useTheme";

const BrandSection = () => {
  const { isDark } = useTheme();
  return (
    <div className="space-y-6">
      <LogoBrand name="Himanshu Pandey" footer={true} />

      <p className="max-w-md text-base leading-relaxed text-gray-400">
        Full Stack Developer specializing in building exceptional web and mobile
        applications with cutting-edge technologies.
      </p>

      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-green-600/20 border border-green-600/30 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-semibold text-green-400">
          Available for Opportunities
        </span>
      </div>

      {/* Social Links */}
      <div>
        <p className="text-sm font-semibold text-gray-400 mb-3">
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
                  "border-gray-800 bg-gray-900 hover:border-blue-600/50 hover:bg-gray-800"
                )}
              >
                <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-400" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const NavigationSection = () => (
  <div>
    <h4 className="mb-5 text-base font-bold text-white">Quick Links</h4>
    <nav>
      <ul className="space-y-3">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="group flex items-center text-sm text-gray-400 transition-colors hover:text-white"
            >
              <span className="mr-2 text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
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

const ContactSection = () => {
  return (
    <div>
      <h4 className="mb-5 text-base font-bold text-white">Get in Touch</h4>
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 transition-all group-hover:border-blue-600/50 group-hover:bg-gray-800">
                  <Icon className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-400" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    {contact.title}
                  </p>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
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

const ServicesSection = () => (
  <div>
    <h4 className="mb-5 text-base font-bold text-white">Services</h4>
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
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          {service}
        </li>
      ))}
    </ul>
  </div>
);

const BottomBar = ({ year }: { year: number }) => (
  <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
    {/* Copyright */}
    <div className="flex flex-col items-center gap-2 text-sm text-gray-400 sm:flex-row">
      <span>© {year} Himanshu Pandey. All rights reserved.</span>
      <span className="hidden sm:inline text-gray-700">•</span>
      <span className="text-gray-500">Designed & Built with passion</span>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Built With
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-2.5 shadow-lg">
        {APP_TECH_STACK.map((tech, idx) => (
          <span key={tech} className="flex items-center gap-2">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {tech}
            </span>
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
      className="relative border-t border-gray-900 bg-black text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

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
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Bottom Bar */}
        <BottomBar year={currentYear} />
      </div>

      {/* CMD Hint */}
      <div className="relative border-t border-gray-900 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-4 py-4">
          <CMDHintFooter />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </footer>
  );
};
