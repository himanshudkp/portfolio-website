import { COLOR_CLASSES, SKILL_CATEGORIES } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { ColorClasses, Skill, SkillCategory } from "@/types";
import { calculateAverage, cn } from "@/utils";
import { TrendingUp, Award } from "lucide-react";
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

  // Convert gradient to solid color
  const getSolidColorClass = (gradient: string) => {
    if (gradient.includes("blue")) return "bg-blue-600";
    if (gradient.includes("purple")) return "bg-purple-600";
    if (gradient.includes("orange")) return "bg-orange-600";
    if (gradient.includes("green")) return "bg-green-600";
    if (gradient.includes("pink")) return "bg-pink-600";
    if (gradient.includes("cyan")) return "bg-cyan-600";
    return "bg-blue-600";
  };

  return (
    <div className="group/skill">
      <div className="flex items-center justify-between mb-2">
        <span
          className={cn(
            "text-sm font-semibold",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          {skill.name}
        </span>
        <span
          className={cn(
            "flex h-7 w-12 items-center justify-center rounded-lg text-xs font-bold text-white",
            getSolidColorClass(colors.gradient)
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
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            getSolidColorClass(colors.gradient)
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

  // Convert gradient to solid color
  const getSolidColorClass = (gradient: string) => {
    if (gradient.includes("blue")) return "bg-blue-600";
    if (gradient.includes("purple")) return "bg-purple-600";
    if (gradient.includes("orange")) return "bg-orange-600";
    if (gradient.includes("green")) return "bg-green-600";
    if (gradient.includes("pink")) return "bg-pink-600";
    if (gradient.includes("cyan")) return "bg-cyan-600";
    return "bg-blue-600";
  };

  const getTextColorClass = (text: string) => {
    if (text.includes("blue")) return "text-blue-600";
    if (text.includes("purple")) return "text-purple-600";
    if (text.includes("orange")) return "text-orange-600";
    if (text.includes("green")) return "text-green-600";
    if (text.includes("pink")) return "text-pink-600";
    if (text.includes("cyan")) return "text-cyan-600";
    return "text-blue-600";
  };

  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-xl transition-all duration-700",
        isDark
          ? "border border-gray-700 bg-gray-800/80"
          : "border border-gray-200 bg-white shadow-lg",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-6 sm:p-7">
        {/* Icon Header */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl",
              getSolidColorClass(colors.gradient)
            )}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3
              className={cn(
                "text-xl font-bold",
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
              delay={delay + index * 100}
            />
          ))}
        </div>

        {/* Category Stats */}
        <div
          className={cn(
            "mt-6 flex items-center justify-between rounded-xl p-3",
            isDark ? "bg-gray-900/50" : "bg-gray-50"
          )}
        >
          <div className="flex items-center gap-2">
            <Award className={cn("h-4 w-4", getTextColorClass(colors.text))} />
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
              getTextColorClass(colors.text)
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

  return (
    <section
      id="skills"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-12 text-center transition-all duration-700 lg:mb-16",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm",
              isDark
                ? "border-blue-600/50 bg-blue-600/10"
                : "border-blue-200 bg-blue-50"
            )}
          >
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            >
              What I Do
            </span>
          </div>

          <h2
            className={cn(
              "mb-4 text-4xl font-bold [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark ? "text-white" : "text-gray-900"
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

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
        </header>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional Info Card */}
        <div
          className={cn(
            "mt-12 rounded-2xl p-6 text-center backdrop-blur-xl transition-all duration-700 delay-500 sm:p-8",
            isDark
              ? "border border-blue-600/30 bg-blue-600/10"
              : "border border-blue-200 bg-blue-50",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p
            className={cn(
              "text-sm font-semibold sm:text-base",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            <span className="font-bold text-blue-600">Always learning:</span> I
            continuously update my skills and explore new technologies to stay
            at the forefront of web development
          </p>
        </div>
      </div>
    </section>
  );
};
