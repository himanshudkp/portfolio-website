import {
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Code,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/himanshudkp",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Github,
    href: "https://github.com/himanshudkp",
    label: "GitHub",
    color: "from-gray-700 to-gray-600",
  },
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    label: "Email",
    color: "from-purple-600 to-pink-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-5 lg:px-8 xl:px-[8%] py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">HP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold [font-family:var(--font-ovo)]">
                    Himanshu Pandey
                  </h3>
                  <p className="text-xs text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting beautiful and functional web experiences with React,
                Next.js, and React Native. Passionate about clean code and
                exceptional user interfaces.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-transparent`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-300">
                Navigation
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-300">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:himanshudkp@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs">himanshudkp@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919522498034"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs">+91-9522498034</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs">Pune, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} Himanshu Pandey. Built with{" "}
              <Heart className="w-4 h-4 text-red-500 inline animate-pulse" />{" "}
              and <Code className="w-4 h-4 text-blue-500 inline" />
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-xs">Powered by</span>
              <div className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                <span className="text-xs font-semibold text-blue-400">
                  React
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-xs font-semibold text-cyan-400">
                  TypeScript
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-xs font-semibold text-purple-400">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group z-50 border border-white/10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}
