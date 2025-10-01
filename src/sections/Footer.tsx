import { QUICK_LINKS, SOCIAL_LINKS, TECH_STACK } from "@/data/footer-data";
import {
  ArrowUp,
  Heart,
  Code,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useMemo, useCallback, useState, useEffect } from "react";
import { cn } from "@/utils";
import { FooterCommandHint } from "@/components/CommandPaletteButton";

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
    {external && (
      <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
    )}
  </a>
);

// Brand Section
const BrandSection = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={cn(
      "space-y-6 transition-all duration-700",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
  >
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-xl" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/30 transition-transform duration-300 hover:scale-110 hover:rotate-3">
          <span className="text-xl font-bold text-white">HP</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">Himanshu Pandey</h3>
        <p className="text-sm text-gray-400">Frontend Developer</p>
      </div>
    </div>

    <p className="max-w-sm text-sm leading-relaxed text-gray-400">
      Crafting exceptional digital experiences with modern web technologies and
      user-centric design. Building the web, one component at a time.
    </p>

    {/* Social Links */}
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300 hover:scale-110",
              "border-gray-800/50 bg-gray-900/50 text-gray-400 hover:border-blue-500/50 hover:text-white"
            )}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Icon className="relative z-10 h-5 w-5" />
          </a>
        );
      })}
    </div>
  </div>
);

// Navigation Section
const NavigationSection = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={cn(
      "transition-all duration-700 delay-150",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
  >
    <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-400">
      Quick Links
    </h4>
    <nav>
      <ul className="space-y-3">
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
const ContactSection = ({ isVisible }: { isVisible: boolean }) => {
  const contacts = [
    { icon: Mail, text: "hi@himanshu.dev", href: "mailto:hi@himanshu.dev" },
    { icon: Phone, text: "+91 1234567890", href: "tel:+911234567890" },
    { icon: MapPin, text: "Pune, India", href: "#" },
  ];

  return (
    <div
      className={cn(
        "transition-all duration-700 delay-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-400">
        Get in Touch
      </h4>
      <ul className="space-y-4">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <li key={contact.text}>
              <a
                href={contact.href}
                className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{contact.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Newsletter Section (Optional)
const NewsletterSection = ({ isVisible }: { isVisible: boolean }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div
      className={cn(
        "transition-all duration-700 delay-450",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-400">
        Stay Updated
      </h4>
      <p className="mb-4 text-sm text-gray-400">
        Subscribe to get notified about new projects and articles.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full rounded-xl border border-gray-800/50 bg-gray-900/50 px-4 py-3 text-sm text-white backdrop-blur-xl transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/50"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

// Bottom Bar
const BottomBar = ({
  year,
  isVisible,
}: {
  year: number;
  isVisible: boolean;
}) => (
  <div
    className={cn(
      "flex flex-col items-center justify-between gap-6 transition-all duration-700 delay-600 lg:flex-row",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
  >
    {/* Copyright */}
    <div className="flex flex-col items-center gap-3 text-sm text-gray-400 sm:flex-row lg:items-start">
      <span>© {year} Himanshu Pandey. All rights reserved.</span>
      <span className="hidden text-gray-700 sm:inline">•</span>
      <span className="flex items-center gap-2">
        Built with
        <Heart className="h-4 w-4 animate-pulse text-red-500" />
        and
        <Code className="h-4 w-4 text-blue-500" />
      </span>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <span className="text-xs text-gray-500">Powered by</span>
      <div className="flex items-center gap-2 rounded-xl border border-gray-800/50 bg-gray-900/50 px-4 py-2 backdrop-blur-xl">
        {TECH_STACK.map((tech, idx) => (
          <span key={tech.name} className="flex items-center gap-2">
            <span className={cn("text-xs font-semibold", tech.color)}>
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
      "group fixed bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 bg-size-200 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:bg-pos-100 hover:shadow-blue-500/50 sm:right-8",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
    )}
    aria-label="Scroll to top"
    type="button"
  >
    {/* Shimmer effect */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    <ArrowUp className="relative z-10 h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-y-1" />
  </button>
);

// Main Footer Component
export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById("footer");
    if (footer) observer.observe(footer);

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-gray-900 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 overflow-hidden opacity-30"
        aria-hidden="true"
      >
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl animation-delay-2000" />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {/* Top Section */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Brand - Takes more space */}
            <div className="sm:col-span-2 lg:col-span-4">
              <BrandSection isVisible={isVisible} />
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <NavigationSection isVisible={isVisible} />
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <ContactSection isVisible={isVisible} />
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-3">
              <NewsletterSection isVisible={isVisible} />
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent lg:my-12" />

          {/* Bottom Bar */}
          <BottomBar year={currentYear} isVisible={isVisible} />
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75" />
      </div>
      <div className="flex items-center justify-center gap-4 py-4">
        <FooterCommandHint isDark={true} />
      </div>
      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} isVisible={showScrollTop} />
    </footer>
  );
}
