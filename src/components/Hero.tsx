import Lottie from "lottie-react";
import animation from "@/data/web_dev.json"; // adjust path if needed
import {
  ArrowDownToLine,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

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

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind",
];

export const Hero = () => {
  const { isDark } = useTheme();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Himanshu_Pandey_Resume.pdf";
    link.download = "Himanshu_Pandey_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 relative overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-1">
        <div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                isDark ? "bg-blue-500" : "bg-blue-300"
              }`}
            ></div>
            <div
              className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                isDark ? "bg-purple-500" : "bg-purple-300"
              }`}
            ></div>
          </div>

          <div className="w-full max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-fadeIn">
                <div
                  className={`px-4 py-2 rounded-full ${
                    isDark
                      ? "bg-blue-500/10 border border-blue-500/30"
                      : "bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles
                      className={`w-4 h-4 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={isDark ? "text-blue-400" : "text-blue-700"}
                    >
                      Welcome to my portfolio
                    </span>
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className={`text-3xl lg:text-4xl xl:text-5xl font-bold [font-family:var(--font-ovo)] leading-tight ${
                    isDark
                      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent"
                  }`}
                >
                  Hi, {"I'm"} Himanshu Pandey
                </h1>

                {/* Role Badge */}
                <div className="flex items-center justify-center gap-2">
                  <Code2
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <span
                    className={`text-xl lg:text-2xl font-semibold ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Frontend Developer
                  </span>
                  <Rocket
                    className={`w-5 h-5 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                2+ years of experience building responsive web and mobile apps.
                Passionate about crafting clean UIs and user-centric design with
                modern technologies.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500"
                        : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-400 hover:shadow-md"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  View My Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="#contact"
                  className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10"
                      : "border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get in Touch
                </a>

                <button
                  onClick={downloadResume}
                  className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10"
                      : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <span>Resume</span>
                  <ArrowDownToLine className="w-5 h-5" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 pt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        isDark
                          ? "bg-gray-800 border border-gray-700"
                          : "bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${
                          isDark
                            ? "text-gray-400 group-hover:text-white"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`}
                      ></div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Stats */}
              {/* <div
                className={`inline-flex items-center gap-6 px-6 py-4 rounded-2xl ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    2+
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Years Exp.
                  </div>
                </div>
                <div
                  className={`w-px h-8 ${
                    isDark ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    30K+
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Users
                  </div>
                </div>
                <div
                  className={`w-px h-8 ${
                    isDark ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    8+
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div
              className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
                isDark ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Lottie animationData={animation} loop={true} autoplay={true} />
        </div>
      </div>
    </section>
  );
};
