import { useTheme } from "@/hooks/useTheme";
import {
  Sparkles,
  Code2,
  Zap,
  Users,
  Trophy,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: "30K+",
    label: "App Users",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    value: "8+",
    label: "Projects Built",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    value: "4+",
    label: "Technologies",
    color: "from-orange-500 to-red-500",
  },
];

const highlights = [
  { icon: Zap, text: "Performance Optimization Expert" },
  { icon: Code2, text: "Clean & Maintainable Code" },
  { icon: TrendingUp, text: "Continuous Learning Mindset" },
];

const topTools = [
  { name: "React", level: 95, color: "blue" },
  { name: "Next.js", level: 90, color: "purple" },
  { name: "TypeScript", level: 88, color: "cyan" },
  { name: "Tailwind CSS", level: 92, color: "pink" },
  { name: "React Native", level: 85, color: "green" },
];

export default function About() {
  const { isDark } = useTheme();
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
              Get to know me
            </span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Card */}
            <div
              className={`rounded-3xl p-8 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Frontend Developer & UI Enthusiast
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Crafting exceptional digital experiences
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {"I'm"} a dedicated Frontend Developer with expertise in
                  modern web technologies including ReactJS, Next.js, and React
                  Native. With over 2 years of professional experience, I
                  specialize in building responsive, performant applications
                  that deliver exceptional user experiences.
                </p>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  My journey in development has been driven by a passion for
                  clean code, performance optimization, and creating intuitive
                  user interfaces. {"I've"} successfully delivered 4+
                  professional projects and built 4+ personal projects,
                  continuously learning and staying up-to-date with the latest
                  industry trends and best practices.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800/50 hover:bg-gray-800"
                          : "bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-md"
                      }`}
                    >
                      <IconComponent
                        className={`w-4 h-4 flex-shrink-0 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {highlight.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-gray-900/50 border border-gray-800 hover:border-gray-700"
                        : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </h3>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Top Tools */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-3xl p-6 sticky top-24 transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Top 5 Tools
                </h3>
              </div>

              <div className="space-y-4">
                {topTools.map((tool, index) => {
                  const colorMap = {
                    blue: "from-blue-500 to-cyan-500",
                    purple: "from-purple-500 to-pink-500",
                    cyan: "from-cyan-500 to-blue-500",
                    pink: "from-pink-500 to-rose-500",
                    green: "from-green-500 to-emerald-500",
                  };

                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-semibold ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {tool.name}
                        </span>
                        <span
                          className={`text-xs font-bold bg-gradient-to-r ${
                            colorMap[tool.color as keyof typeof colorMap]
                          } bg-clip-text text-transparent`}
                        >
                          {tool.level}%
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          isDark ? "bg-gray-800" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className={`h-full bg-gradient-to-r ${
                            colorMap[tool.color as keyof typeof colorMap]
                          } rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div
                className={`mt-6 p-4 rounded-xl text-center ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
                }`}
              >
                <p
                  className={`text-xs font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Interested in working together?
                </p>
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  {"Let's"} Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
