import { COLOR_CLASSES, SKILL_CATEGORIES } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { ColorClasses, Skill, SkillCategory } from "@/types";
import { calculateAverage, cn } from "@/utils";
import { TrendingUp, Award, Sparkles, Zap } from "lucide-react";
import { memo, useState, useEffect } from "react";

interface SkillBarProps {
  skill: Skill;
  colors: ColorClasses;
  delay?: number;
}

const SkillBar = memo<SkillBarProps>(({ skill, colors, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  const getGradientClass = (gradient: string) => {
    if (gradient.includes("blue")) return "from-blue-600 to-blue-700";
    if (gradient.includes("purple")) return "from-purple-600 to-purple-700";
    if (gradient.includes("orange")) return "from-orange-600 to-orange-700";
    if (gradient.includes("green")) return "from-green-600 to-green-700";
    if (gradient.includes("pink")) return "from-pink-600 to-pink-700";
    if (gradient.includes("cyan")) return "from-cyan-600 to-cyan-700";
    return "from-blue-600 to-blue-700";
  };

  // Get proficiency label
  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Proficient";
    return "Intermediate";
  };

  return (
    <div className="group/skill">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-sm font-bold",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            {skill.name}
          </span>
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded",
              isDark ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-600"
            )}
          >
            {getProficiencyLabel(skill.level)}
          </span>
        </div>
        <span
          className={cn(
            "flex h-7 w-12 items-center justify-center rounded-lg text-xs font-bold text-white shadow-md",
            `bg-gradient-to-r ${getGradientClass(colors.gradient)}`
          )}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className={cn(
          "relative h-3 overflow-hidden rounded-full",
          isDark ? "bg-gray-800" : "bg-gray-200"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out shadow-lg",
            `bg-gradient-to-r ${getGradientClass(colors.gradient)}`
          )}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency`}
        />
      </div>
    </div>
  );
});

SkillBar.displayName = "SkillBar";

interface SkillCardProps {
  category: SkillCategory;
  delay?: number;
}

const SkillCard = memo<SkillCardProps>(({ category, delay = 0 }) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const colors = COLOR_CLASSES[category.color];
  const Icon = category.icon;
  const avgLevel = calculateAverage(category.skills);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getGradientClass = (gradient: string) => {
    if (gradient.includes("blue")) return "from-blue-600 to-blue-700";
    if (gradient.includes("purple")) return "from-purple-600 to-purple-700";
    if (gradient.includes("orange")) return "from-orange-600 to-orange-700";
    if (gradient.includes("green")) return "from-green-600 to-green-700";
    if (gradient.includes("pink")) return "from-pink-600 to-pink-700";
    if (gradient.includes("cyan")) return "from-cyan-600 to-cyan-700";
    return "from-blue-600 to-blue-700";
  };

  const getTextColorClass = (text: string) => {
    if (text.includes("blue")) return "text-blue-400";
    if (text.includes("purple")) return "text-purple-400";
    if (text.includes("orange")) return "text-orange-400";
    if (text.includes("green")) return "text-green-400";
    if (text.includes("pink")) return "text-pink-400";
    if (text.includes("cyan")) return "text-cyan-400";
    return "text-blue-400";
  };

  return (
    <div
      className={cn(
        "group rounded-3xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-105",
        isDark
          ? "border border-white/10 bg-gray-800/50"
          : "border border-gray-200 bg-white shadow-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-7">
        {/* Gradient Top Border */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-1 rounded-t-3xl",
            `bg-gradient-to-r ${getGradientClass(colors.gradient)}`
          )}
        />

        {/* Icon Header */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110",
              `bg-gradient-to-br ${getGradientClass(colors.gradient)}`
            )}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3
              className={cn(
                "text-xl font-bold mb-1",
                isDark ? `${getTextColorClass(colors.text)}` : "text-gray-900"
              )}
            >
              {category.title}
            </h3>
            <p
              className={cn(
                "text-xs font-medium",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        {/* Skills with proficiency bars */}
        <div className="space-y-5 mb-6">
          {category.skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              colors={colors}
              delay={delay + index * 100}
            />
          ))}
        </div>

        {/* Category Stats */}
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl p-4 border",
            isDark
              ? "bg-gray-900/50 border-white/5"
              : "bg-gradient-to-r from-gray-50 to-white border-gray-200"
          )}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center",
                `bg-gradient-to-br ${getGradientClass(colors.gradient)}`
              )}
            >
              <Award className="h-4 w-4 text-white" />
            </div>
            <span
              className={cn(
                "text-sm font-semibold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              Average Proficiency
            </span>
          </div>
          <span
            className={cn(
              "flex items-center gap-1.5 text-lg font-bold",
              isDark ? getTextColorClass(colors.text) : "text-gray-900"
            )}
          >
            <TrendingUp className="h-4 w-4" />
            {avgLevel}%
          </span>
        </div>
      </div>
    </div>
  );
});

SkillCard.displayName = "SkillCard";

// Main component
export const Skills = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Calculate total skills
  const totalSkills = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500" : "bg-purple-300"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/3 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500" : "bg-blue-300"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-16 text-center transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-sm",
                isDark
                  ? "border-blue-500/30 bg-blue-500/10"
                  : "border-blue-200 bg-blue-50"
              )}
            >
              <Zap
                className={cn(
                  "h-3.5 w-3.5",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <span
                className={cn(
                  "text-sm font-semibold",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              >
                Technical Excellence
              </span>
            </div>
          </div>

          <h2
            className={cn(
              "mb-6 text-4xl font-bold tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark
                ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                : "text-gray-900"
            )}
          >
            Skills & Expertise
          </h2>

          <p
            className={cn(
              "mx-auto max-w-2xl text-base sm:text-lg mb-6",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Mastery across {totalSkills}+ technologies and frameworks,
            delivering production-ready solutions
          </p>

          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Sparkles
                className={cn(
                  "h-4 w-4",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <span
                className={cn(
                  "font-semibold",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Production Experience
              </span>
            </div>
            <div
              className={cn("h-4 w-px", isDark ? "bg-gray-700" : "bg-gray-300")}
            />
            <div className="flex items-center gap-2">
              <TrendingUp
                className={cn(
                  "h-4 w-4",
                  isDark ? "text-green-400" : "text-green-600"
                )}
              />
              <span
                className={cn(
                  "font-semibold",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Continuously Learning
              </span>
            </div>
          </div>
        </header>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
