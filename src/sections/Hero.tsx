"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowDownToLine,
  Code2,
  Sparkles,
  Rocket,
  Users,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import { SOCIAL_LINKS, TOP_5_TECH_STACK } from "@/data";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-16 h-16 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
  ),
});

const Animation = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    import("@/data/web_dev.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden justify-center items-center flex rounded-3xl transition-all duration-300 hover:shadow-2xl w-auto h-115 pt-10",
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
          : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg"
      )}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="h-auto w-full"
      />
    </div>
  );
};

export const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={cn(
        "relative flex min-h-screen items-center justify-center px-5 py-12 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
              : "bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          )}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500" : "bg-blue-300"
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500" : "bg-purple-300"
          )}
        />
      </div>

      <div className="relative z-10 mt-11 grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-5 text-center lg:text-left">
          <WelcomeBadge />
          <MainHeading />
          <Description />

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="group w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-8 py-4 bg-blue-600 text-white hover:bg-blue-700"
            >
              <span>View My Work</span>
              <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-8 py-4 ",
                isDark
                  ? "border-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              Get in Touch
            </a>
            <a
              href="./resume.pdf"
              download
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-8 py-4",
                isDark
                  ? "border-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              Resume
              <ArrowDownToLine className="h-5 w-5" />
            </a>
          </div>

          <SocialLinks />
        </div>

        {/* Animation & Stats Section */}
        <div className="flex flex-col gap-6 justify-center">
          <Animation />
          <ImpactMetrics />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

function WelcomeBadge() {
  const { isDark } = useTheme();
  return (
    <div className="inline-flex items-center justify-center lg:justify-start">
      <div
        className={cn(
          "group relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105",
          isDark
            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300"
            : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700"
        )}
      >
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full animate-pulse",
              isDark ? "bg-blue-400" : "bg-blue-600"
            )}
          />
          <span className="font-semibold">Open to Opportunities</span>
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function MainHeading() {
  const { isDark } = useTheme();
  return (
    <div className="space-y-4">
      <h1
        className={cn(
          "text-4xl font-bold leading-[1.1] tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl xl:text-7xl",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Hi, I'm{" "}
        <span
          className={cn(
            "relative inline-block",
            isDark
              ? "bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              : ""
          )}
        >
          Himanshu Pandey
          <span
            className={cn(
              "absolute -bottom-2 left-0 h-1 w-full rounded-full",
              isDark
                ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            )}
          />
        </span>
      </h1>

      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300",
          isDark
            ? "bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50"
            : "bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-sm"
        )}
      >
        <Code2
          className={cn("h-5 w-5", isDark ? "text-blue-400" : "text-blue-600")}
        />
        <span
          className={cn(
            "text-base font-bold sm:text-xl",
            isDark ? "text-gray-100" : "text-gray-900"
          )}
        >
          Full Stack Developer
          <span
            className={cn(
              "mx-2 text-xs font-normal",
              isDark ? "text-gray-400" : "text-gray-500"
            )}
          >
            •
          </span>
          <span
            className={cn(
              "text-sm font-normal",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Web, Mobile & AI
          </span>
        </span>
      </div>

      <p
        className={cn(
          "text-base font-medium",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        2+ Years Building Scalable Digital Solutions
      </p>
    </div>
  );
}

function Description() {
  const { isDark } = useTheme();
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0",
        isDark ? "text-gray-300" : "text-gray-700"
      )}
    >
      Specializing in building{" "}
      <span
        className={cn(
          "font-semibold",
          isDark ? "text-blue-400" : "text-blue-600"
        )}
      >
        high-performance applications
      </span>{" "}
      that drive business growth. I combine{" "}
      <span
        className={cn(
          "font-semibold",
          isDark ? "text-blue-400" : "text-blue-600"
        )}
      >
        modern tech stacks
      </span>{" "}
      with{" "}
      <span
        className={cn(
          "font-semibold",
          isDark ? "text-blue-400" : "text-blue-600"
        )}
      >
        user-centric design
      </span>{" "}
      to deliver solutions that exceed expectations.
    </p>
  );
}

function KeyHighlights() {
  const { isDark } = useTheme();

  const highlights = [
    { icon: Rocket, text: "Fast Delivery" },
    { icon: Users, text: "Client-Focused" },
    { icon: TrendingUp, text: "Results-Driven" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      {highlights.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.text}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-200 hover:scale-105",
              isDark
                ? "bg-gray-800/50 border border-gray-700/50"
                : "bg-white border border-gray-200 shadow-sm"
            )}
          >
            <IconComponent
              className={cn(
                "h-4 w-4",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            />
            <span
              className={cn(
                "text-sm font-medium",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function TechStack() {
  const { isDark } = useTheme();
  return (
    <div>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-wide mb-3 text-center lg:text-left",
          isDark ? "text-gray-500" : "text-gray-500"
        )}
      >
        Tech Stack
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {TOP_5_TECH_STACK.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105",
              isDark
                ? "bg-gray-800 border border-gray-700 text-gray-300 hover:border-blue-600/50 hover:bg-gray-700"
                : "bg-white border border-gray-200 text-gray-700 hover:border-blue-600/50 hover:shadow-md"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImpactMetrics() {
  const { isDark } = useTheme();

  const metrics = [
    { value: "Fast Delivery", icon: "⚡" },
    { value: "User-Focused", icon: "👥" },
    { value: "Results-Driven", icon: "📈" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={cn(
            "group relative rounded-3xl p-4 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-1",
            isDark
              ? "bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
              : "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border border-gray-200/50 shadow-md hover:shadow-xl hover:border-blue-300/50 hover:shadow-blue-200/30"
          )}
        >
          {/* Animated background glow */}
          <div
            className={cn(
              "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
              isDark
                ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                : "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            )}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {metric.icon}
            </div>
            <div
              className={cn(
                "text-sm font-semibold tracking-wide",
                isDark
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              )}
            >
              {metric.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialLinks() {
  const { isDark } = useTheme();
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <span
        className={cn(
          "text-sm font-medium",
          isDark ? "text-gray-500" : "text-gray-600"
        )}
      >
        Connect:
      </span>

      {SOCIAL_LINKS.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl h-12 w-12 p-0 hover:scale-110 transition-transform duration-200",
              isDark
                ? "border border-gray-700 bg-gray-800 hover:bg-gray-700"
                : "border border-gray-200 bg-white hover:bg-gray-100"
            )}
          >
            <IconComponent
              className={cn(
                "h-5 w-5 transition-colors duration-200",
                isDark
                  ? "text-gray-400 group-hover:text-blue-400"
                  : "text-gray-600 group-hover:text-blue-600"
              )}
            />
          </a>
        );
      })}
    </div>
  );
}

function ScrollIndicator() {
  const { isDark } = useTheme();
  return (
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
      <div
        className={cn(
          "flex h-12 w-7 items-start justify-center rounded-full border-2 p-2",
          isDark
            ? "border-gray-700 bg-gray-800"
            : "border-gray-300 bg-white shadow-sm"
        )}
      >
        <div
          className={cn(
            "h-2 w-2 animate-scroll rounded-full",
            isDark ? "bg-blue-400" : "bg-blue-600"
          )}
        />
      </div>
    </div>
  );
}
