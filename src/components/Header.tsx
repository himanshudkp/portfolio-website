import { useState } from "react";
import { ArrowDownToLine, Moon, Sun, Menu, X, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Himanshu_Pandey_Resume.pdf";
    link.download = "Himanshu_Pandey_Resume.pdf";
    link.click();
  };

  return (
    <nav
      className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 backdrop-blur-md transition-all duration-300 ${
        isDark
          ? "bg-gray-900/90 border-b border-gray-800"
          : "bg-white/90 border-b border-gray-200/50"
      } shadow-sm`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 ${
                isDark
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20"
                  : "bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20"
              } text-white`}
            >
              HP
            </div>
          </div>
          <div className="hidden sm:block">
            <span
              className={`font-bold text-lg ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Himanshu
            </span>
            <span
              className={`block text-xs ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${
            isDark
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}
        >
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 inline-block ${
                  isDark
                    ? "text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-md"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Contact Button - Desktop */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>

          {/* Resume Button - Desktop */}
          <button
            onClick={downloadResume}
            className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 ${
              isDark
                ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10"
                : "border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50"
            }`}
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isDark
                ? "text-white hover:bg-gray-800 border border-gray-700"
                : "text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 right-0 lg:hidden shadow-xl transition-all duration-300 backdrop-blur-md ${
            isDark
              ? "bg-gray-900/95 border-b border-gray-800"
              : "bg-white/95 border-b border-gray-200"
          }`}
        >
          <div className="px-5 py-4">
            <ul className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                      isDark
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">{link.name}</span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      ›
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  downloadResume();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold border-2 transition-all duration-300 ${
                  isDark
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
