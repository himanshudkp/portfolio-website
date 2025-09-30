import { SOCIAL_LINKS } from "@/data/cantact-data";
import { CONTACT_INFO, QUICK_LINKS, TECH_STACK } from "@/data/footer-data";
import { ArrowUp, Heart, Code } from "lucide-react";
import { useMemo } from "react";

const BrandSection = () => (
  <div className="md:col-span-5 space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span className="text-2xl font-bold">HP</span>
      </div>
      <div>
        <h3 className="text-xl font-bold [font-family:var(--font-ovo)]">
          Himanshu Pandey
        </h3>
        <p className="text-xs text-gray-400">Software Developer</p>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">
      Crafting beautiful and functional web experiences with React, Next.js, and
      React Native. Passionate about clean code and exceptional user interfaces.
    </p>
    <SocialLinksGroup />
  </div>
);

const SocialLinksGroup = () => (
  <div className="flex gap-3 pt-2">
    {SOCIAL_LINKS.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-transparent`}
        >
          <Icon className="w-4 h-4" />
        </a>
      );
    })}
  </div>
);

const QuickLinksSection = () => (
  <div className="md:col-span-3">
    <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-300">
      Navigation
    </h4>
    <nav aria-label="Footer navigation">
      <ul className="space-y-2">
        {QUICK_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
            >
              <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300" />
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const ContactSection = () => (
  <div className="md:col-span-4">
    <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-300">
      Get In Touch
    </h4>
    <ul className="space-y-3">
      {CONTACT_INFO.map((contact) => {
        const Icon = contact.icon;
        const content = (
          <>
            <div
              className={`w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center transition-colors duration-300 ${contact.hoverColor}`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs">{contact.text}</span>
          </>
        );

        return (
          <li key={contact.text}>
            {contact.href ? (
              <a
                href={contact.href}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {content}
              </a>
            ) : (
              <div className="flex items-center gap-3 text-sm text-gray-400">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const CopyrightSection = ({ year }: { year: number }) => (
  <p className="text-gray-400 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
    <span>© {year} Himanshu Pandey. Built with</span>
    <Heart className="w-4 h-4 text-red-500 inline animate-pulse" />
    <span>and</span>
    <Code className="w-4 h-4 text-blue-500 inline" />
  </p>
);

const TechStackBadge = () => (
  <div className="flex items-center gap-2 text-gray-400 flex-wrap justify-center sm:justify-end">
    <span className="text-xs">Powered by</span>
    <div className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
      {TECH_STACK.map((tech, idx) => (
        <span key={tech.name} className="flex items-center gap-1">
          <span className={`text-xs font-semibold ${tech.color}`}>
            {tech.name}
          </span>
          {idx < TECH_STACK.length - 1 && (
            <span className="text-gray-600">•</span>
          )}
        </span>
      ))}
    </div>
  </div>
);

const ScrollToTopButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group z-50 border border-white/10"
    aria-label="Scroll to top"
    type="button"
  >
    <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
  </button>
);

const DecorativeBackground = () => (
  <div className="absolute inset-0 opacity-10" aria-hidden="true">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
  </div>
);

// Main component
export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <DecorativeBackground />

      <div className="relative px-5 lg:px-8 xl:px-[8%] py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            <BrandSection />
            <QuickLinksSection />
            <ContactSection />
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <CopyrightSection year={currentYear} />
            <TechStackBadge />
          </div>
        </div>
      </div>

      <ScrollToTopButton onClick={scrollToTop} />
    </footer>
  );
}
