import { QUICK_LINKS, SOCIAL_LINKS, TECH_STACK } from "@/data/footer-data";
import { ArrowUp, Heart, Code, Mail, Phone, MapPin } from "lucide-react";
import { useMemo, useCallback } from "react";

// Shared link component
const FooterLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className="group relative inline-flex items-center text-gray-400 transition-colors hover:text-white"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
    </span>
  </a>
);

// Brand Section
const BrandSection = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-lg" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
          <span className="text-lg font-bold text-white">HP</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">Himanshu Pandey</h3>
        <p className="text-xs text-gray-500">Frontend Developer</p>
      </div>
    </div>

    <p className="max-w-xs text-sm leading-relaxed text-gray-500">
      Crafting exceptional digital experiences with modern web technologies and
      user-centric design.
    </p>

    {/* Social Links */}
    <div className="flex gap-2">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800 hover:text-white hover:scale-110"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  </div>
);

// Navigation Section
const NavigationSection = () => (
  <div>
    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
      Navigate
    </h4>
    <nav>
      <ul className="space-y-2.5">
        {QUICK_LINKS.map((link) => (
          <li key={link.name}>
            <FooterLink href={link.href}>{link.name}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

// Contact Section
const ContactSection = () => {
  const contacts = [
    { icon: Mail, text: "hi@himanshu.dev", href: "mailto:hi@himanshu.dev" },
    { icon: Phone, text: "+91 1234567890", href: "tel:+911234567890" },
    { icon: MapPin, text: "Pune, India", href: "#" },
  ];

  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
        Get in Touch
      </h4>
      <ul className="space-y-3">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <li key={contact.text}>
              <a
                href={contact.href}
                className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900/50 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm">{contact.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Bottom Bar
const BottomBar = ({ year }: { year: number }) => (
  <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
    {/* Copyright */}
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
      <span>© {year} Himanshu Pandey</span>
      <span className="hidden sm:inline text-gray-700">•</span>
      <span className="flex items-center gap-1.5">
        Built with
        <Heart className="h-3.5 w-3.5 animate-pulse text-red-500" />
        and
        <Code className="h-3.5 w-3.5 text-blue-500" />
      </span>
    </div>

    {/* Tech Stack */}
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span className="text-xs text-gray-600">Powered by</span>
      <div className="flex items-center gap-2 rounded-lg border border-gray-800/50 bg-gray-900/50 px-3 py-1.5 backdrop-blur-sm">
        {TECH_STACK.map((tech, idx) => (
          <span key={tech.name} className="flex items-center gap-1.5">
            <span className={`text-xs font-medium ${tech.color}`}>
              {tech.name}
            </span>
            {idx < TECH_STACK.length - 1 && (
              <span className="text-gray-700">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Scroll to Top Button
const ScrollToTopButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40"
    aria-label="Scroll to top"
    type="button"
  >
    <ArrowUp className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
  </button>
);

// Main Footer Component
export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-gray-900 bg-gray-950 text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          {/* Top Section */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Brand - Takes more space */}
            <div className="lg:col-span-5">
              <BrandSection />
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <NavigationSection />
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <ContactSection />
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent lg:my-10" />

          {/* Bottom Bar */}
          <BottomBar year={currentYear} />
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50" />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} />
    </footer>
  );
}
