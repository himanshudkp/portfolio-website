"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { LogoBrand } from "../logo-brand";
import SocialLinks from "../ui/social-links";

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
    text: "himanshudkp@gmail.com",
    href: "mailto:himanshudkp@gmail.com",
  },
  {
    icon: Phone,
    text: "+91 9522498034",
    href: "tel:+919522498034",
  },
  {
    icon: MapPin,
    text: "Pune, India",
    href: "#",
  },
];

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative bg-[#0b0b0b] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5">
            <LogoBrand />

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Full-Stack Developer crafting scalable Web, Mobile & AI-powered
              products with a focus on performance, clean architecture, and
              real-world impact.
            </p>

            <SocialLinks variant="hero" />
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Navigation
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Contact
            </h4>
            <ul className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={16} className="text-teal-400" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
          <span>© {year} Himanshu Pandey</span>
          <span>
            Built with{" "}
            <span className="text-gray-300">
              React • Next.js • Tailwind • AI
            </span>
          </span>
        </div>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl shadow-teal-500/20 hover:opacity-90 transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};
