"use client";
import { ABOUT_SECTION_DATA } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { Stat, Tool } from "@/types";
import { cn } from "@/utils";
import { Sparkles, Code2, Zap } from "lucide-react";

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={cn(
        "flex min-h-screen items-center px-5 py-20 transition-colors duration-300 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-800" : "bg-gradient-to-b from-white to-gray-50"
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader isDark={isDark} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            <IntroductionCard isDark={isDark} />
            <StatsGrid isDark={isDark} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TopToolsSidebar isDark={isDark} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ThemeProps {
  isDark: boolean;
}

function SectionHeader({ isDark }: ThemeProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <Sparkles className="h-5 w-5 text-blue-500" />
        <span className="text-sm font-medium uppercase tracking-wider text-blue-500">
          Get to know me
        </span>
        <Sparkles className="h-5 w-5 text-blue-500" />
      </div>
      <h2
        className={cn(
          "mb-6 mt-4 text-4xl font-bold transition-colors duration-300 [font-family:var(--font-ovo)] lg:text-5xl",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        About Me
      </h2>
      <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
    </div>
  );
}

function IntroductionCard({ isDark }: ThemeProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 transition-all duration-300",
        isDark
          ? "border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800"
          : "border border-gray-200 bg-white shadow-lg"
      )}
    >
      <CardHeader isDark={isDark} />
      <CardContent isDark={isDark} />
      <HighlightsGrid isDark={isDark} />
    </div>
  );
}

function CardHeader({ isDark }: ThemeProps) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
        <Code2 className="h-6 w-6 text-white" />
      </div>
      <div className="flex-1">
        <h3
          className={cn(
            "mb-2 text-2xl font-bold",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Frontend Developer & UI Enthusiast
        </h3>
        <p
          className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}
        >
          Crafting exceptional digital experiences
        </p>
      </div>
    </div>
  );
}

function CardContent({ isDark }: ThemeProps) {
  return (
    <div className="space-y-4">
      <p
        className={cn(
          "text-base leading-relaxed",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        {"I'm"} a dedicated Frontend Developer with expertise in modern web
        technologies including ReactJS, Next.js, and React Native. With over 2
        years of professional experience, I specialize in building responsive,
        performant applications that deliver exceptional user experiences.
      </p>
      <p
        className={cn(
          "text-base leading-relaxed",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        My journey in development has been driven by a passion for clean code,
        performance optimization, and creating intuitive user interfaces.{" "}
        {"I've"}
        successfully delivered 4+ professional projects and built 4+ personal
        projects, continuously learning and staying up-to-date with the latest
        industry trends and best practices.
      </p>
    </div>
  );
}

function HighlightsGrid({ isDark }: ThemeProps) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      {ABOUT_SECTION_DATA.highlights.map((highlight, index) => {
        const IconComponent = highlight.icon;
        return (
          <div
            key={`${highlight.text}-${index}`}
            className={cn(
              "flex items-center gap-2 rounded-xl p-3 transition-all duration-300",
              isDark
                ? "bg-gray-800/50 hover:bg-gray-800"
                : "bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-md"
            )}
          >
            <IconComponent
              className={cn(
                "h-4 w-4 flex-shrink-0",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium",
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

function StatsGrid({ isDark }: ThemeProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {ABOUT_SECTION_DATA.stats.map((stat, index) => (
        <StatCard key={`${stat.label}-${index}`} stat={stat} isDark={isDark} />
      ))}
    </div>
  );
}

interface StatCardProps extends ThemeProps {
  stat: Stat;
}

function StatCard({ stat, isDark }: StatCardProps) {
  const IconComponent = stat.icon;

  return (
    <div
      className={cn(
        "group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1",
        isDark
          ? "border border-gray-800 bg-gray-900/50 hover:border-gray-700"
          : "border border-gray-200 bg-white shadow-md hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r",
          stat.color
        )}
      >
        <IconComponent className="h-5 w-5 text-white" />
      </div>
      <h3
        className={cn(
          "mb-1 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent",
          stat.color
        )}
      >
        {stat.value}
      </h3>
      <p className={cn("text-xs", isDark ? "text-gray-400" : "text-gray-600")}>
        {stat.label}
      </p>
    </div>
  );
}

function TopToolsSidebar({ isDark }: ThemeProps) {
  return (
    <div
      className={cn(
        "sticky top-24 rounded-3xl p-6 transition-all duration-300",
        isDark
          ? "border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800"
          : "border border-gray-200 bg-white shadow-lg"
      )}
    >
      <SidebarHeader isDark={isDark} />
      <ToolsList isDark={isDark} />
      <CTACard isDark={isDark} />
    </div>
  );
}

function SidebarHeader({ isDark }: ThemeProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <h3
        className={cn(
          "text-lg font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Top 5 Tools
      </h3>
    </div>
  );
}

function ToolsList({ isDark }: ThemeProps) {
  return (
    <div className="space-y-4">
      {ABOUT_SECTION_DATA.topTools.map((tool, index) => (
        <ToolItem key={`${tool.name}-${index}`} tool={tool} isDark={isDark} />
      ))}
    </div>
  );
}

interface ToolItemProps extends ThemeProps {
  tool: Tool;
}

function ToolItem({ tool, isDark }: ToolItemProps) {
  const gradientColor = ABOUT_SECTION_DATA.colorMap[tool.color];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-semibold",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          {tool.name}
        </span>
        <span
          className={cn(
            "bg-gradient-to-r bg-clip-text text-xs font-bold text-transparent",
            gradientColor
          )}
        >
          {tool.level}%
        </span>
      </div>
      <div
        className={cn(
          "h-2 overflow-hidden rounded-full",
          isDark ? "bg-gray-800" : "bg-gray-200"
        )}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out",
            gradientColor
          )}
          style={{ width: `${tool.level}%` }}
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
        "mt-6 rounded-xl p-4 text-center",
        isDark
          ? "border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          : "border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50"
      )}
    >
      <p
        className={cn(
          "mb-2 text-xs font-medium",
          isDark ? "text-gray-300" : "text-gray-700"
        )}
      >
        Interested in working together?
      </p>
      <a
        href="#contact"
        className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {"Let's"} Connect
      </a>
    </div>
  );
}
