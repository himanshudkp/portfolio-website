import { COLOR_CLASSES, SKILL_CATEGORIES } from "@/data/skills-data";
import { useTheme } from "@/hooks/useTheme";
import { ColorClasses, Skill, SkillCategory } from "@/types";
import { calculateAverage } from "@/utils";
import { Sparkles } from "lucide-react";
import { memo } from "react";

interface SkillBarProps {
  skill: Skill;
  colors: ColorClasses;
  isDark: boolean;
}

const SkillBar = memo<SkillBarProps>(({ skill, colors, isDark }) => (
  <div className="group/skill">
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
          isDark ? colors.text : colors.text.replace("400", "600")
        }`}
      >
        {skill.level}%
      </span>
    </div>
    <div
      className={`h-2 rounded-full overflow-hidden ${
        isDark ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <div
        className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
));

SkillBar.displayName = "SkillBar";

interface SkillCardProps {
  category: SkillCategory;
  isDark: boolean;
}

const SkillCard = memo<SkillCardProps>(({ category, isDark }) => {
  const colors = COLOR_CLASSES[category.color];
  const Icon = category.icon;
  const avgLevel = calculateAverage(category.skills);

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
          : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
      }`}
    >
      {/* Gradient corner accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
      />

      <div className="relative p-6">
        {/* Icon Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-3 rounded-2xl ${
              isDark ? colors.bg : `bg-gradient-to-br ${colors.tag}`
            } ${isDark ? `border ${colors.border}` : ""}`}
          >
            <Icon className={`w-6 h-6 ${colors.text}`} />
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
          {category.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              colors={colors}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Category Stats */}
        <div
          className={`mt-6 pt-4 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between text-sm">
            <span className={isDark ? "text-gray-400" : "text-gray-600"}>
              {category.skills.length} Skills
            </span>
            <span className={`font-semibold ${colors.text}`}>
              {avgLevel}% Avg
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
      />
    </div>
  );
});

SkillCard.displayName = "SkillCard";

// Main component
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
        <header className="text-center mb-16">
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
              isDark={isDark}
            />
          ))}
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
