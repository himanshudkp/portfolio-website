"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowDownToLine,
  Sparkles,
  Code2,
  Rocket,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { RESUME_PATH, SOCIAL_LINKS, TECH_STACK } from "@/data/hero-data";
import { cn } from "@/utils";
import { SocialLink } from "@/ui/SocialLink";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
  ),
});

export default function Animation() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    import("@/data/web_dev.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-full animate-pulse bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
    );
  }

  return <AnimationSection animationData={animationData} />;
}

export const Hero = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "Himanshu_Pandey_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
      id="home"
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 transition-colors duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      )}
    >
      {/* Enhanced Background Effects */}
      <BackgroundEffects isDark={isDark} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:space-y-8 lg:text-left">
          <WelcomeBadge isDark={isDark} isVisible={isVisible} />
          <MainHeading isDark={isDark} isVisible={isVisible} />
          <Description isDark={isDark} isVisible={isVisible} />
          <TechStack isDark={isDark} isVisible={isVisible} />
          <CTAButtons
            isDark={isDark}
            onDownloadResume={downloadResume}
            isVisible={isVisible}
          />
          <SocialLinks isDark={isDark} isVisible={isVisible} />
        </div>

        {/* Animation Section */}
        <div
          className={cn(
            "flex items-center justify-center transition-all duration-1000 delay-300",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          )}
        >
          <Animation />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator isDark={isDark} />
    </section>
  );
};

// Subcomponents
interface ThemeProps {
  isDark: boolean;
  isVisible?: boolean;
}

function BackgroundEffects({ isDark }: ThemeProps) {
  return (
    <>
      {/* Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -right-20 top-20 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl",
            isDark ? "bg-blue-500" : "bg-blue-400"
          )}
        />
        <div
          className={cn(
            "absolute -left-20 bottom-20 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl animation-delay-2000",
            isDark ? "bg-purple-500" : "bg-purple-400"
          )}
        />
        <div
          className={cn(
            "absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-10 blur-3xl animation-delay-4000",
            isDark ? "bg-pink-500" : "bg-pink-400"
          )}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0 bg-grid-pattern opacity-[0.02]",
          isDark ? "bg-white" : "bg-black"
        )}
      />
    </>
  );
}

function WelcomeBadge({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center transition-all duration-1000 lg:justify-start mt-2",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-full px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:scale-105",
          isDark
            ? "border border-blue-500/30 bg-blue-500/10 shadow-lg shadow-blue-500/20"
            : "border border-blue-200/60 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg shadow-blue-200/50"
        )}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative flex items-center gap-2 text-sm font-semibold">
          <Sparkles
            className={cn(
              "h-4 w-4 animate-pulse",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
          <span
            className={cn(
              "bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-blue-400 to-purple-400"
                : "from-blue-600 to-purple-600"
            )}
          >
            Welcome to my portfolio
          </span>
          <Star className="h-3.5 w-3.5 animate-spin-slow text-yellow-500" />
        </span>
      </div>
    </div>
  );
}

function MainHeading({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "space-y-4 transition-all duration-1000 delay-150",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      {/* Main Title */}
      <h1
        className={cn(
          "text-4xl font-bold leading-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl xl:text-7xl",
          "bg-gradient-to-r bg-clip-text text-transparent",
          isDark
            ? "from-white via-blue-200 to-purple-200"
            : "from-gray-900 via-blue-800 to-purple-900"
        )}
      >
        Hi, {"I'm"}{" "}
        <span
          className={cn(
            "relative inline-block text-4xl font-bold leading-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl xl:text-7xl",
            "bg-gradient-to-r bg-clip-text text-transparent",
            isDark
              ? "from-white via-blue-200 to-purple-200"
              : "from-gray-900 via-blue-800 to-purple-900"
          )}
        >
          Himanshu
          {/* Underline decoration */}
          <span className="absolute -bottom-0 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </span>
      </h1>

      {/* Role Badge */}
      <div className="flex items-center justify-center gap-3 lg:justify-start">
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2",
            isDark
              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              : "bg-gradient-to-r from-blue-100 to-purple-100"
          )}
        >
          <Code2
            className={cn(
              "h-5 w-5",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
          <span
            className={cn(
              "text-xl font-bold sm:text-2xl",
              isDark
                ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "text-gray-800"
            )}
          >
            Frontend Developer
          </span>
          <Rocket
            className={cn(
              "h-5 w-5 animate-bounce",
              isDark ? "text-purple-400" : "text-purple-600"
            )}
          />
        </div>
      </div>

      {/* Experience Badge */}
      <div className="flex items-center justify-center gap-2 lg:justify-start">
        <Zap className="h-4 w-4 text-yellow-500" />
        <span
          className={cn(
            "text-sm font-medium",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          2+ Years of Professional Experience
        </span>
      </div>
    </div>
  );
}

function Description({ isDark, isVisible }: ThemeProps) {
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 lg:text-xl",
        isDark ? "text-gray-300" : "text-gray-700",
        "transition-all duration-1000 delay-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      Passionate about crafting{" "}
      <span className="font-semibold text-blue-500">
        responsive web and mobile apps
      </span>{" "}
      with clean UIs and user-centric design using{" "}
      <span className="font-semibold text-purple-500">modern technologies</span>
      . Transforming ideas into elegant digital experiences.
    </p>
  );
}

function TechStack({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2.5 lg:justify-start",
        "transition-all duration-1000 delay-500",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      {TECH_STACK.map((tech, index) => (
        <span
          key={tech}
          className={cn(
            "group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg",
            isDark
              ? "border border-gray-700/50 bg-gray-800/50 text-gray-300 hover:border-blue-500/50 hover:bg-gray-700/50 backdrop-blur-xl"
              : "border border-gray-200/50 bg-white/50 text-gray-700 hover:border-blue-400/50 hover:shadow-xl backdrop-blur-xl"
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Shimmer on hover */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">{tech}</span>
        </span>
      ))}
    </div>
  );
}

interface CTAButtonsProps extends ThemeProps {
  onDownloadResume: () => void;
}

function CTAButtons({ isDark, onDownloadResume, isVisible }: CTAButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start",
        "transition-all duration-1000 delay-700",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      <a
        href="#projects"
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-pos-100 hover:shadow-blue-500/50 sm:w-auto"
      >
        <span className="relative z-10">View My Work</span>
        <ChevronRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        {/* Shimmer */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </a>
      <a
        href="#contact"
        className={cn(
          "group flex w-full items-center justify-center gap-2 rounded-2xl border-2 px-8 py-4 font-bold transition-all duration-300 hover:scale-105 sm:w-auto",
          isDark
            ? "border-gray-700/50 bg-gray-800/30 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-xl"
            : "border-gray-300/50 bg-white/30 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg backdrop-blur-xl"
        )}
      >
        Get in Touch
      </a>

      {/* Resume Download */}
      <button
        onClick={onDownloadResume}
        className={cn(
          "group flex w-full items-center justify-center gap-2 rounded-2xl border-2 px-8 py-4 font-bold transition-all duration-300 hover:scale-105 sm:w-auto",
          isDark
            ? "border-gray-700/50 bg-gray-800/30 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-xl"
            : "border-gray-300/50 bg-white/30 text-gray-700 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600 hover:shadow-lg backdrop-blur-xl"
        )}
      >
        {" "}
        <span>Resume</span>{" "}
        <ArrowDownToLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />{" "}
      </button>
    </div>
  );
}

function SocialLinks({ isDark, isVisible }: ThemeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 pt-6 lg:justify-start",
        "transition-all duration-1000 delay-1000",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      {/* Social Links Label */}
      <span
        className={cn(
          "text-sm font-medium",
          isDark ? "text-gray-500" : "text-gray-600"
        )}
      >
        Connect:
      </span>

      {/* Social Icons */}
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = social.icon;
        return (
          <SocialLink
            key={social.label}
            href={social.href}
            label={social.label}
            icon={
              <IconComponent
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  isDark
                    ? "text-gray-400 group-hover:text-white"
                    : "text-gray-600 group-hover:text-gray-900"
                )}
              />
            }
            color={social.color}
            className={cn(
              "group relative h-12 w-12 backdrop-blur-xl",
              isDark
                ? "border border-gray-700/50 bg-gray-800/50"
                : "border border-gray-200/50 bg-white/50"
            )}
          />
        );
      })}
    </div>
  );
}

function ScrollIndicator({ isDark }: ThemeProps) {
  return (
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
      <div
        className={cn(
          "flex h-12 w-7 items-start justify-center rounded-full border-2 p-2 backdrop-blur-xl",
          isDark
            ? "border-gray-700/50 bg-gray-800/30"
            : "border-gray-300/50 bg-white/30"
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

interface AnimationSectionProps {
  animationData: object;
}

function AnimationSection({ animationData }: AnimationSectionProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] sm:p-6 lg:p-8",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30 shadow-2xl shadow-purple-900/20"
          : "border border-gray-200/50 bg-gradient-to-br from-white/50 to-gray-50/50 shadow-2xl shadow-gray-200/50"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Animation */}
      <div className="relative z-10">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="h-auto w-full drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
