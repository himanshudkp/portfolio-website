import { useTheme } from "@/hooks/useTheme";
import { Code2, Palette, Settings, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "ReactJS", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    color: "purple",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "SCSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Shadcn UI", level: 88 },
    ],
  },
  {
    title: "State Management",
    icon: Settings,
    color: "pink",
    skills: [
      { name: "Redux", level: 90 },
      { name: "Redux Toolkit", level: 92 },
      { name: "TanStack Query", level: 85 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.IO", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 88 },
    ],
  },
];

const colorClasses = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500",
    tag: "from-blue-50 to-cyan-50",
    tagDark: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500",
    tag: "from-purple-50 to-pink-50",
    tagDark: "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",

    border: "border-pink-500/30",
    text: "text-pink-400",
    hover: "hover:border-pink-500",
    tag: "from-pink-50 to-rose-50",
    tagDark: "bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20",
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
};

export default function Skills() {
  const { isDark } = useTheme();
  return (
    <section
      id="skills"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
              What I Do
            </span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colorKey = category.color as
              | "blue"
              | "purple"
              | "pink"
              | "orange";
            const colors = colorClasses[colorKey];
            const IconComponent = category.icon;

            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                    : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Gradient corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6">
                  {/* Icon Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-2xl ${
                        isDark ? colors.bg : `bg-gradient-to-br ${colors.tag}`
                      } ${isDark ? `border ${colors.border}` : ""}`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          isDark ? colors.text : `text-${category.color}-600`
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with proficiency bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill">
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-sm font-medium ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              isDark
                                ? colors.text
                                : `text-${category.color}-600`
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        {/* Proficiency bar */}
                        <div
                          className={`h-2 rounded-full overflow-hidden ${
                            isDark ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div
                    className={`mt-6 pt-4 border-t ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        {category.skills.length} Skills
                      </span>
                      <span
                        className={`font-semibold ${
                          isDark ? colors.text : `text-${category.color}-600`
                        }`}
                      >
                        {Math.round(
                          category.skills.reduce((acc, s) => acc + s.level, 0) /
                            category.skills.length
                        )}
                        % Avg
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center p-6 rounded-2xl ${
            isDark
              ? "bg-gray-900/50 border border-gray-800"
              : "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            💡 <span className="font-semibold">Always learning:</span> I
            continuously update my skills and explore new technologies to stay
            at the forefront of web development
          </p>
        </div>
      </div>
    </section>
  );
}
