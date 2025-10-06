"use client";
import { useState, useEffect } from "react";
import { ABOUT_SECTION_DATA } from "@/data/data";
import { useTheme } from "@/hooks/use-theme";
import { Stat, Tool } from "@/types/types";
import { cn } from "@/utils/utils";
import { Code2, ArrowRight, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const About = () => {
  const { isDark } = useTheme();
  const isVisible = useIntersectionObserver("about");

  return (
    <section
      id="about"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500" : "bg-blue-300"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500" : "bg-purple-300"
          )}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader isVisible={isVisible} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - 2 columns */}
          <div className="space-y-8 lg:col-span-2">
            <IntroductionCard isVisible={isVisible} />
            <StatsGrid isVisible={isVisible} />
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <TopToolsSidebar isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ThemeProps {
  isVisible?: boolean;
}

function SectionHeader({ isVisible }: ThemeProps) {
  const { isDark } = useTheme();
  return (
    <div
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
          <Sparkles
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
            Who I Am
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
        About Me
      </h2>

      <p
        className={cn(
          "mx-auto max-w-2xl text-base sm:text-lg",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Transforming ideas into powerful digital solutions with precision and
        creativity
      </p>
    </div>
  );
}

function IntroductionCard({ isVisible }: ThemeProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "group rounded-3xl transition-all duration-700 delay-100 hover:shadow-2xl",
        isDark
          ? "border border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-xl backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-8 sm:p-10 lg:p-12">
        {/* Gradient Overlay */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-1 rounded-t-3xl",
            "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
          )}
        />

        <CardHeader />
        <CardContent />
        <HighlightsGrid />
      </div>
    </div>
  );
}

function CardHeader() {
  const { isDark } = useTheme();
  return (
    <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
      <div
        className={cn(
          "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg",
          "bg-gradient-to-br from-blue-600 to-purple-600"
        )}
      >
        <Code2 className="h-8 w-8 text-white" />
      </div>

      <div className="flex-1">
        <h3
          className={cn(
            "mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl",
            isDark
              ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              : "text-gray-900"
          )}
        >
          Full Stack Developer
        </h3>
        <p
          className={cn(
            "text-base sm:text-lg font-medium",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Specializing in Web, Mobile & AI Solutions
        </p>
      </div>
    </div>
  );
}

function CardContent() {
  const { isDark } = useTheme();
  return (
    <div className="space-y-6">
      <p
        className={cn(
          "text-base leading-relaxed sm:text-lg",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        I'm a results-driven developer with{" "}
        <span
          className={cn(
            "font-bold",
            isDark ? "text-blue-400" : "text-blue-600"
          )}
        >
          2+ years of experience
        </span>{" "}
        building scalable applications using{" "}
        <span
          className={cn(
            "font-semibold",
            isDark ? "text-blue-400" : "text-blue-600"
          )}
        >
          React, Next.js, React Native, and AI technologies
        </span>
        . I specialize in creating high-performance solutions that drive
        business growth and deliver exceptional user experiences.
      </p>
      <p
        className={cn(
          "text-base leading-relaxed sm:text-lg",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        With a portfolio of{" "}
        <span
          className={cn(
            "font-bold",
            isDark ? "text-purple-400" : "text-purple-600"
          )}
        >
          50+ delivered projects
        </span>
        , I bring proven expertise in translating complex requirements into
        elegant, maintainable code. My focus is on{" "}
        <span
          className={cn(
            "font-semibold",
            isDark ? "text-blue-400" : "text-blue-600"
          )}
        >
          clean architecture, performance optimization,
        </span>{" "}
        and creating intuitive interfaces that users love.
      </p>
    </div>
  );
}

function HighlightsGrid() {
  const { isDark } = useTheme();
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ABOUT_SECTION_DATA.highlights.map((highlight, index) => {
        const IconComponent = highlight.icon;
        return (
          <div
            key={`${highlight.text}-${index}`}
            className={cn(
              "flex items-center gap-3 rounded-2xl p-4 transition-all duration-200 hover:scale-105",
              isDark
                ? "bg-gray-900/50 border border-white/5"
                : "bg-gray-50 border border-gray-200"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl",
                "bg-gradient-to-br from-blue-600 to-purple-600"
              )}
            >
              <IconComponent className="h-5 w-5 text-white" />
            </div>
            <span
              className={cn(
                "text-sm font-semibold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              {highlight.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function StatsGrid({ isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 transition-all duration-700 delay-200 lg:grid-cols-4",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {ABOUT_SECTION_DATA.stats.map((stat, index) => (
        <StatCard key={`${stat.label}-${index}`} stat={stat} />
      ))}
    </div>
  );
}

interface StatCardProps extends ThemeProps {
  stat: Stat;
}

function StatCard({ stat }: StatCardProps) {
  const IconComponent = stat.icon;
  const [count, setCount] = useState(0);
  const { isDark } = useTheme();
  const targetValue = parseInt(stat.value);

  useEffect(() => {
    if (isNaN(targetValue)) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  const getGradientClass = (gradient: string) => {
    if (gradient.includes("blue")) return "from-blue-600 to-blue-700";
    if (gradient.includes("purple")) return "from-purple-600 to-purple-700";
    if (gradient.includes("pink")) return "from-pink-600 to-pink-700";
    if (gradient.includes("green")) return "from-green-600 to-green-700";
    return "from-blue-600 to-blue-700";
  };

  return (
    <div
      className={cn(
        "group rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        isDark
          ? "border border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-lg"
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110",
          `bg-gradient-to-br ${getGradientClass(stat.color)}`
        )}
      >
        <IconComponent className="h-7 w-7 text-white" />
      </div>

      <h3
        className={cn(
          "mb-2 text-4xl font-bold",
          isDark
            ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            : "text-gray-900"
        )}
      >
        {isNaN(targetValue) ? stat.value : `${count}+`}
      </h3>

      <p
        className={cn(
          "text-sm font-medium",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        {stat.label}
      </p>
    </div>
  );
}

function TopToolsSidebar({ isVisible }: ThemeProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "sticky top-24 rounded-3xl transition-all duration-700 delay-300",
        isDark
          ? "border border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-xl backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="p-8">
        <SidebarHeader />
        <ToolsList />
        <CTACard />
      </div>
    </div>
  );
}

function SidebarHeader() {
  const { isDark } = useTheme();
  return (
    <div className="mb-8">
      <h3
        className={cn(
          "mb-2 text-2xl font-bold",
          isDark
            ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            : "text-gray-900"
        )}
      >
        Core Technologies
      </h3>
      <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
        Expert proficiency levels
      </p>
    </div>
  );
}

function ToolsList() {
  return (
    <div className="space-y-6 mb-8">
      {ABOUT_SECTION_DATA.topTools.map((tool, index) => (
        <ToolItem
          key={`${tool.name}-${index}`}
          tool={tool}
          delay={index * 100}
        />
      ))}
    </div>
  );
}

interface ToolItemProps extends ThemeProps {
  tool: Tool;
  delay?: number;
}

function ToolItem({ tool, delay = 0 }: ToolItemProps) {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(tool.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [tool.level, delay]);

  const getGradientClass = (
    color: keyof typeof ABOUT_SECTION_DATA.colorMap
  ) => {
    const gradient = ABOUT_SECTION_DATA.colorMap[color] || "";
    if (gradient.includes("blue")) return "from-blue-600 to-blue-700";
    if (gradient.includes("purple")) return "from-purple-600 to-purple-700";
    if (gradient.includes("orange")) return "from-orange-600 to-orange-700";
    if (gradient.includes("green")) return "from-green-600 to-green-700";
    if (gradient.includes("pink")) return "from-pink-600 to-pink-700";
    return "from-blue-600 to-blue-700";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-base font-bold",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          {tool.name}
        </span>
        <span
          className={cn(
            "flex h-8 w-14 items-center justify-center rounded-lg text-sm font-bold text-white shadow-md",
            `bg-gradient-to-r ${getGradientClass(tool.color)}`
          )}
        >
          {tool.level}%
        </span>
      </div>

      <div
        className={cn(
          "relative h-3 overflow-hidden rounded-full",
          isDark ? "bg-gray-900" : "bg-gray-200"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out shadow-lg",
            `bg-gradient-to-r ${getGradientClass(tool.color)}`
          )}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={tool.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${tool.name} proficiency`}
        />
      </div>
    </div>
  );
}

function CTACard() {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 text-center",
        "bg-gradient-to-br from-blue-600 to-purple-600"
      )}
    >
      <div className="relative z-10">
        <p className="mb-4 text-base font-semibold text-white">
          Ready to start your next project?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-5 py-2.5 bg-white text-blue-600 hover:bg-gray-100"
        >
          Let's Talk
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
    </div>
  );
}
