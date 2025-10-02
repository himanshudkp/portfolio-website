"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ABOUT_SECTION_DATA } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { Stat, Tool } from "@/types";
import { cn } from "@/utils";
import { Code2, ArrowRight } from "lucide-react";
import BtnLink from "@/ui/BtnLink";

export const About = () => {
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
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader isVisible={isVisible} />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main Content - 8 columns */}
          <div className="space-y-6 lg:col-span-8">
            <IntroductionCard isVisible={isVisible} />
            <StatsGrid isVisible={isVisible} />
          </div>

          {/* Sidebar - 4 columns */}
          <div className="lg:col-span-4">
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
          Get to know me
        </span>
      </div>

      <h2
        className={cn(
          "mb-4 text-4xl font-bold [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-gray-900"
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

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
    </div>
  );
}

function IntroductionCard({ isVisible }: ThemeProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-700 delay-100",
        isDark
          ? "border border-gray-700 bg-gray-800/80 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-lg backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-6 sm:p-8 lg:p-10">
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
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
      <div
        className={cn(
          "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl",
          isDark ? "bg-blue-600" : "bg-blue-700"
        )}
      >
        <Code2 className="h-7 w-7 text-white" />
      </div>

      <div className="flex-1">
        <h3
          className={cn(
            "mb-2 text-2xl font-bold sm:text-3xl",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Frontend Developer & UI Enthusiast
        </h3>
        <p
          className={cn(
            "text-sm sm:text-base",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Crafting exceptional digital experiences
        </p>
      </div>
    </div>
  );
}

function CardContent() {
  const { isDark } = useTheme();
  return (
    <div className="space-y-4 sm:space-y-5">
      <p
        className={cn(
          "text-sm leading-relaxed sm:text-base lg:text-lg",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        {"I'm"} a dedicated{" "}
        <span className="font-semibold text-blue-600">Frontend Developer</span>{" "}
        with expertise in modern web technologies including{" "}
        <span className="font-semibold text-blue-600">
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
        <span className="font-semibold text-blue-600">clean code</span>,
        performance optimization, and creating intuitive user interfaces.{" "}
        {"I've"} successfully delivered{" "}
        <span className="font-bold text-blue-600">
          4+ professional projects
        </span>{" "}
        and built{" "}
        <span className="font-bold text-blue-600">4+ personal projects</span>,
        continuously learning and staying up-to-date with the latest industry
        trends.
      </p>
    </div>
  );
}

function HighlightsGrid() {
  const { isDark } = useTheme();
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ABOUT_SECTION_DATA.highlights.map((highlight, index) => {
        const IconComponent = highlight.icon;
        return (
          <div
            key={`${highlight.text}-${index}`}
            className={cn(
              "flex items-center gap-3 rounded-xl p-3.5 sm:p-4",
              isDark ? "bg-gray-900/50" : "bg-gray-50"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                isDark ? "bg-blue-600/20" : "bg-blue-100"
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

function StatsGrid({ isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 transition-all duration-700 delay-200 sm:gap-5 lg:grid-cols-4",
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

  // Extract gradient colors for solid background
  const getColorClass = (gradient: string) => {
    if (gradient.includes("blue")) return "bg-blue-600";
    if (gradient.includes("purple")) return "bg-purple-600";
    if (gradient.includes("pink")) return "bg-pink-600";
    if (gradient.includes("green")) return "bg-green-600";
    return "bg-blue-600";
  };

  const getTextColorClass = (gradient: string) => {
    if (gradient.includes("blue")) return "text-blue-600";
    if (gradient.includes("purple")) return "text-purple-600";
    if (gradient.includes("pink")) return "text-pink-600";
    if (gradient.includes("green")) return "text-green-600";
    return "text-blue-600";
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-5 transition-colors duration-200 sm:p-6",
        isDark
          ? "border border-gray-700 bg-gray-800/50 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-lg"
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
            getColorClass(stat.color)
          )}
        >
          <IconComponent className="h-6 w-6 text-white" />
        </div>

        <h3
          className={cn(
            "mb-1 text-3xl font-bold sm:text-4xl",
            getTextColorClass(stat.color)
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
    </div>
  );
}

function TopToolsSidebar({ isVisible }: ThemeProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "sticky top-24 rounded-2xl transition-all duration-700 delay-300",
        isDark
          ? "border border-gray-700 bg-gray-800/80 backdrop-blur-xl"
          : "border border-gray-200 bg-white shadow-lg backdrop-blur-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="p-6 sm:p-8">
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
    <div className="mb-6">
      <h3
        className={cn(
          "mb-1 text-xl font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Top 5 Tools
      </h3>
      <p className={cn("text-xs", isDark ? "text-gray-400" : "text-gray-600")}>
        Technologies I excel at
      </p>
    </div>
  );
}

function ToolsList() {
  return (
    <div className="space-y-5">
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
  const gradientColor = ABOUT_SECTION_DATA.colorMap[tool.color];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(tool.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [tool.level, delay]);

  // Convert gradient to solid color
  const getSolidColorClass = (gradient: string) => {
    if (gradient.includes("blue")) return "bg-blue-600";
    if (gradient.includes("purple")) return "bg-purple-600";
    if (gradient.includes("orange")) return "bg-orange-600";
    if (gradient.includes("green")) return "bg-green-600";
    if (gradient.includes("pink")) return "bg-pink-600";
    return "bg-blue-600";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-semibold sm:text-base",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          {tool.name}
        </span>
        <span
          className={cn(
            "flex h-8 w-12 items-center justify-center rounded-lg text-xs font-bold text-white",
            getSolidColorClass(gradientColor)
          )}
        >
          {tool.level}%
        </span>
      </div>

      <div
        className={cn(
          "relative h-2.5 overflow-hidden rounded-full",
          isDark ? "bg-gray-900" : "bg-gray-200"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            getSolidColorClass(gradientColor)
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
        "mt-8 rounded-2xl p-6 text-center",
        isDark
          ? "border border-blue-600/30 bg-blue-600/10"
          : "border border-blue-200 bg-blue-50"
      )}
    >
      <p
        className={cn(
          "mb-4 text-sm font-medium sm:text-base",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        Interested in working together?
      </p>
      <BtnLink href="#contact" variant="primary" icon={ArrowRight}>
        Let's Connect
      </BtnLink>
    </div>
  );
}
