import { COLOR_CLASSES, SKILL_CATEGORIES } from "@/data/skills-data";
import { useTheme } from "@/hooks/useTheme";
import { ColorClasses, Skill, SkillCategory } from "@/types";
import { calculateAverage, cn } from "@/utils";
import { Sparkles, TrendingUp, Award, Zap } from "lucide-react";
import { memo, useState, useEffect } from "react";

interface SkillBarProps {
  skill: Skill;
  colors: ColorClasses;
  isDark: boolean;
  delay?: number;
}

const SkillBar = memo<SkillBarProps>(({ skill, colors, isDark, delay = 0 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="group/skill">
      <div className="flex items-center justify-between mb-2">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-300",
            isDark
              ? "text-gray-300 group-hover/skill:text-white"
              : "text-gray-700 group-hover/skill:text-gray-900"
          )}
        >
          {skill.name}
        </span>
        <span
          className={cn(
            "flex h-7 w-12 items-center justify-center rounded-lg bg-gradient-to-r text-xs font-bold text-white transition-transform duration-300 group-hover/skill:scale-110",
            colors.gradient
          )}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className={cn(
          "relative h-2.5 overflow-hidden rounded-full",
          isDark ? "bg-gray-800" : "bg-gray-200"
        )}
      >
        {/* Shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        {/* Progress bar */}
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r shadow-lg transition-all duration-1000 ease-out",
            colors.gradient
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
  isDark: boolean;
  delay?: number;
}

const SkillCard = memo<SkillCardProps>(({ category, isDark, delay = 0 }) => {
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

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-700",
        "hover:-translate-y-2 hover:scale-[1.02]",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-2xl shadow-purple-900/10"
          : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {/* Gradient corner accent */}
      <div
        className={cn(
          "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br blur-3xl transition-all duration-500",
          colors.gradient.replace("from-", "from-").replace("to-", "to-") +
            "/20",
          "opacity-0 group-hover:opacity-100"
        )}
      />

      {/* Decorative line */}
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-full bg-gradient-to-r transition-transform duration-500",
          colors.gradient,
          "scale-x-0 group-hover:scale-x-100"
        )}
      />

      <div className="relative p-6 sm:p-7">
        {/* Icon Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative">
            {/* Glow effect */}
            <div
              className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-100",
                colors.gradient
              )}
            />
            <div
              className={cn(
                "relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                isDark
                  ? `bg-gradient-to-br ${colors.gradient}`
                  : `bg-gradient-to-br ${colors.tag}`
              )}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
          </div>
          <div>
            <h3
              className={cn(
                "text-xl font-bold transition-colors duration-300",
                isDark ? "text-white" : "text-gray-900"
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
        <div className="space-y-4">
          {category.skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              colors={colors}
              isDark={isDark}
              delay={delay + index * 100}
            />
          ))}
        </div>

        {/* Category Stats */}
        <div
          className={cn(
            "mt-6 flex items-center justify-between rounded-xl p-3 transition-colors duration-300",
            isDark
              ? "bg-gray-800/50 group-hover:bg-gray-700/50"
              : "bg-gradient-to-r from-gray-50 to-gray-100 group-hover:shadow-md"
          )}
        >
          <div className="flex items-center gap-2">
            <Award
              className={cn(
                "h-4 w-4",
                isDark ? colors.text : colors.text.replace("400", "600")
              )}
            />
            <span
              className={cn(
                "text-sm font-medium",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              Proficiency
            </span>
          </div>
          <span
            className={cn(
              "flex items-center gap-1 text-sm font-bold",
              isDark ? colors.text : colors.text.replace("400", "600")
            )}
          >
            <TrendingUp className="h-4 w-4" />
            {avgLevel}%
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={cn(
          "h-1 bg-gradient-to-r transition-transform duration-500",
          colors.gradient,
          "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </div>
  );
});

SkillCard.displayName = "SkillCard";

// Main component
export default function Skills() {
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

  return (
    <section
      id="skills"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000 delay-300",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-12 text-center transition-all duration-1000 lg:mb-16",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse text-blue-500" />
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            >
              What I Do
            </span>
            <Sparkles className="h-4 w-4 animate-pulse text-purple-500" />
          </div>

          <h2
            className={cn(
              "mb-4 text-4xl font-bold transition-colors duration-300 [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark
                ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
            )}
          >
            My Skills
          </h2>

          <p
            className={cn(
              "mx-auto max-w-2xl text-sm sm:text-base lg:text-lg",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build exceptional digital experiences
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        </header>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              isDark={isDark}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional Info Card */}
        <div
          className={cn(
            "group relative mt-12 overflow-hidden rounded-3xl p-6 text-center backdrop-blur-xl transition-all duration-1000 delay-700 hover:scale-[1.01] sm:p-8",
            isDark
              ? "border border-gray-700/50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
              : "border border-gray-200/50 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          </div>

          <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              )}
            >
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p
                className={cn(
                  "text-sm font-semibold sm:text-base",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent">
                  Always learning:
                </span>{" "}
                I continuously update my skills and explore new technologies to
                stay at the forefront of web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
