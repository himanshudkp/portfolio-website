"use client";
import { useState, useEffect } from "react";
import { ABOUT_SECTION_DATA } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { Stat, Tool } from "@/types";
import { cn } from "@/utils";
import { Sparkles, Code2, Zap, ArrowRight, Star } from "lucide-react";
import { ButtonLink } from "@/ui/ButtonLink";

export default function About() {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
            "absolute -left-1/4 top-0 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute -right-1/4 bottom-0 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000 delay-300",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader isDark={isDark} isVisible={isVisible} />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main Content - 8 columns */}
          <div className="space-y-6 lg:col-span-8">
            <IntroductionCard isDark={isDark} isVisible={isVisible} />
            <StatsGrid isDark={isDark} isVisible={isVisible} />
          </div>

          {/* Sidebar - 4 columns */}
          <div className="lg:col-span-4">
            <TopToolsSidebar isDark={isDark} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ThemeProps {
  isDark: boolean;
  isVisible?: boolean;
}

function SectionHeader({ isDark, isVisible }: ThemeProps) {
  return (
    <div
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
          Get to know me
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
        About Me
      </h2>

      <p
        className={cn(
          "mx-auto max-w-2xl text-sm sm:text-base",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Passionate about creating digital experiences that make a difference
      </p>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
    </div>
  );
}

function IntroductionCard({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-1000 delay-150",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl"
          : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </div>

      <div className="relative p-6 sm:p-8 lg:p-10">
        <CardHeader isDark={isDark} />
        <CardContent isDark={isDark} />
        <HighlightsGrid isDark={isDark} />
      </div>
    </div>
  );
}

function CardHeader({ isDark }: ThemeProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-xl" />
        <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-3">
          <Code2 className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="flex-1">
        <h3
          className={cn(
            "mb-2 text-2xl font-bold transition-colors duration-300 sm:text-3xl",
            isDark
              ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              : "text-gray-900"
          )}
        >
          Frontend Developer & UI Enthusiast
        </h3>
        <p
          className={cn(
            "flex items-center gap-2 text-sm sm:text-base",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          <Star className="h-4 w-4 text-yellow-500" />
          Crafting exceptional digital experiences
        </p>
      </div>
    </div>
  );
}

function CardContent({ isDark }: ThemeProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <p
        className={cn(
          "text-sm leading-relaxed sm:text-base lg:text-lg",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        {"I'm"} a dedicated{" "}
        <span className="font-semibold text-blue-500">Frontend Developer</span>{" "}
        with expertise in modern web technologies including{" "}
        <span className="font-semibold text-purple-500">
          ReactJS, Next.js, and React Native
        </span>
        . With over 2 years of professional experience, I specialize in building
        responsive, performant applications that deliver exceptional user
        experiences.
      </p>
      <p
        className={cn(
          "text-sm leading-relaxed sm:text-base lg:text-lg",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        My journey in development has been driven by a passion for{" "}
        <span className="font-semibold text-pink-500">clean code</span>,
        performance optimization, and creating intuitive user interfaces.{" "}
        {"I've"} successfully delivered{" "}
        <span className="font-bold text-blue-500">
          4+ professional projects
        </span>{" "}
        and built{" "}
        <span className="font-bold text-purple-500">4+ personal projects</span>,
        continuously learning and staying up-to-date with the latest industry
        trends.
      </p>
    </div>
  );
}

function HighlightsGrid({ isDark }: ThemeProps) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ABOUT_SECTION_DATA.highlights.map((highlight, index) => {
        const IconComponent = highlight.icon;
        return (
          <div
            key={`${highlight.text}-${index}`}
            className={cn(
              "group flex items-center gap-3 rounded-xl p-3.5 transition-all duration-300 hover:scale-105 sm:p-4",
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
                isDark
                  ? "from-blue-500/20 to-purple-500/20"
                  : "from-blue-100 to-purple-100"
              )}
            >
              <IconComponent
                className={cn(
                  "h-4 w-4",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
            </div>
            <span
              className={cn(
                "text-xs font-medium sm:text-sm",
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

function StatsGrid({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 sm:gap-5 lg:grid-cols-4",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {ABOUT_SECTION_DATA.stats.map((stat, index) => (
        <StatCard
          key={`${stat.label}-${index}`}
          stat={stat}
          isDark={isDark}
          delay={index * 100}
        />
      ))}
    </div>
  );
}

interface StatCardProps extends ThemeProps {
  stat: Stat;
  delay?: number;
}

function StatCard({ stat, isDark, delay = 0 }: StatCardProps) {
  const IconComponent = stat.icon;
  const [count, setCount] = useState(0);
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

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 sm:p-6",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl hover:border-gray-600/50"
          : "border border-gray-200/50 bg-white shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Gradient on Hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          stat.color.replace("from-", "from-").replace("to-", "to-") + "/5"
        )}
      />

      <div className="relative">
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
            stat.color
          )}
        >
          <IconComponent className="h-6 w-6 text-white" />
        </div>

        <h3
          className={cn(
            "mb-1 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent transition-all duration-300 sm:text-4xl",
            stat.color
          )}
        >
          {isNaN(targetValue) ? stat.value : `${count}+`}
        </h3>

        <p
          className={cn(
            "text-xs font-medium sm:text-sm",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          {stat.label}
        </p>
      </div>

      {/* Decorative Corner */}
      <div
        className={cn(
          "absolute -right-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30",
          stat.color
        )}
      />
    </div>
  );
}

function TopToolsSidebar({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "sticky top-24 overflow-hidden rounded-3xl transition-all duration-1000 delay-500",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl"
          : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="p-6 sm:p-8">
        <SidebarHeader isDark={isDark} />
        <ToolsList isDark={isDark} />
        <CTACard isDark={isDark} />
      </div>
    </div>
  );
}

function SidebarHeader({ isDark }: ThemeProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-lg" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
          <Zap className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h3
          className={cn(
            "text-xl font-bold",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Top 5 Tools
        </h3>
        <p
          className={cn("text-xs", isDark ? "text-gray-400" : "text-gray-600")}
        >
          Technologies I excel at
        </p>
      </div>
    </div>
  );
}

function ToolsList({ isDark }: ThemeProps) {
  return (
    <div className="space-y-5">
      {ABOUT_SECTION_DATA.topTools.map((tool, index) => (
        <ToolItem
          key={`${tool.name}-${index}`}
          tool={tool}
          isDark={isDark}
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

function ToolItem({ tool, isDark, delay = 0 }: ToolItemProps) {
  const gradientColor = ABOUT_SECTION_DATA.colorMap[tool.color];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(tool.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [tool.level, delay]);

  return (
    <div className="group space-y-3">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-300 sm:text-base",
            isDark
              ? "text-gray-200 group-hover:text-white"
              : "text-gray-800 group-hover:text-gray-900"
          )}
        >
          {tool.name}
        </span>
        <span
          className={cn(
            "flex h-8 w-12 items-center justify-center rounded-lg bg-gradient-to-r text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110",
            gradientColor
          )}
        >
          {tool.level}%
        </span>
      </div>

      <div
        className={cn(
          "relative h-2.5 overflow-hidden rounded-full",
          isDark ? "bg-gray-800" : "bg-gray-200"
        )}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        {/* Progress Bar */}
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r shadow-lg transition-all duration-1000 ease-out",
            gradientColor
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

function CTACard({ isDark }: ThemeProps) {
  return (
    <div
      className={cn(
        "group relative mt-8 overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.02]",
        isDark
          ? "border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
          : "border border-blue-200/50 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg"
      )}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </div>

      <div className="relative">
        <p
          className={cn(
            "mb-3 text-sm font-medium sm:text-base",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          Interested in working together?
        </p>

        <ButtonLink
          href="#contact"
          variant="gradient"
          size="md"
          className="group/btn relative overflow-hidden"
          icon={
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          }
          iconPosition="right"
        >
          {"Let's"} Connect
        </ButtonLink>
      </div>
    </div>
  );
}
