// components/Footer.jsx
import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              John Doe
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Developer passionate about creating beautiful,
              functional web experiences. {"Let's"} build something amazing
              together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-purple-400 transition"
                >
                  hello@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-purple-400 transition"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} John Doe. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500" /> and lots of
            coffee.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              Terms of Service
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 p-3 rounded-full transition transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
