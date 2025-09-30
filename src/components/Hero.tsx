"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowDownToLine,
  Sparkles,
  Code2,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { RESUME_PATH, SOCIAL_LINKS, TECH_STACK } from "@/data/hero-data";
import { cn } from "@/utils";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse bg-gray-200/20 rounded-2xl" />
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
      <div className="w-full h-full animate-pulse bg-gray-200/20 rounded-2xl" />
    );
  }

  return <AnimationSection animationData={animationData} />;
}

export const Hero = () => {
  const { isDark } = useTheme();

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
        "relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 transition-colors duration-300 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Background Effects */}
      <BackgroundEffects isDark={isDark} />

      <div className="relative z-10 mx-auto mt-1 grid w-full max-w-7xl gap-12 md:grid-cols-2">
        {/* Content Section */}
        <div className="space-y-8 text-center">
          <WelcomeBadge isDark={isDark} />
          <MainHeading isDark={isDark} />
          <Description isDark={isDark} />
          <TechStack isDark={isDark} />
          <CTAButtons isDark={isDark} onDownloadResume={downloadResume} />
          <SocialLinks isDark={isDark} />
          <ScrollIndicator isDark={isDark} />
        </div>

        {/* Animation Section */}
        <Animation />
      </div>
    </section>
  );
};

// Subcomponents
interface ThemeProps {
  isDark: boolean;
}

function BackgroundEffects({ isDark }: ThemeProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute right-20 top-20 h-72 w-72 rounded-full opacity-20 blur-3xl",
          isDark ? "bg-blue-500" : "bg-blue-300"
        )}
      />
      <div
        className={cn(
          "absolute bottom-20 left-20 h-72 w-72 rounded-full opacity-20 blur-3xl",
          isDark ? "bg-purple-500" : "bg-purple-300"
        )}
      />
    </div>
  );
}

function WelcomeBadge({ isDark }: ThemeProps) {
  return (
    <div className="inline-flex animate-fadeIn items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
      <div
        className={cn(
          "rounded-full px-4 py-2",
          isDark
            ? "border border-blue-500/30 bg-blue-500/10"
            : "border border-blue-200 bg-gradient-to-r from-blue-100 to-purple-100"
        )}
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <Sparkles
            className={cn(
              "h-4 w-4",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
          <span className={isDark ? "text-blue-400" : "text-blue-700"}>
            Welcome to my portfolio
          </span>
        </span>
      </div>
    </div>
  );
}

function MainHeading({ isDark }: ThemeProps) {
  return (
    <div className="space-y-4">
      <h1
        className={cn(
          "text-3xl font-bold leading-tight [font-family:var(--font-ovo)] lg:text-4xl xl:text-5xl",
          "bg-gradient-to-r bg-clip-text text-transparent",
          isDark
            ? "from-blue-400 via-purple-400 to-pink-400"
            : "from-gray-900 via-blue-800 to-purple-900"
        )}
      >
        Hi, {"I'm"} Himanshu Pandey
      </h1>

      <div className="flex items-center justify-center gap-2">
        <Code2
          className={cn("h-5 w-5", isDark ? "text-blue-400" : "text-blue-600")}
        />
        <span
          className={cn(
            "text-xl font-semibold lg:text-2xl",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          Frontend Developer
        </span>
        <Rocket
          className={cn(
            "h-5 w-5",
            isDark ? "text-purple-400" : "text-purple-600"
          )}
        />
      </div>
    </div>
  );
}

function Description({ isDark }: ThemeProps) {
  return (
    <p
      className={cn(
        "mx-auto max-w-3xl text-lg leading-relaxed lg:text-xl",
        isDark ? "text-gray-400" : "text-gray-600"
      )}
    >
      2+ years of experience building responsive web and mobile apps. Passionate
      about crafting clean UIs and user-centric design with modern technologies.
    </p>
  );
}

function TechStack({ isDark }: ThemeProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {TECH_STACK.map((tech) => (
        <span
          key={tech}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110",
            isDark
              ? "border border-gray-700 bg-gray-800 text-gray-300 hover:border-blue-500"
              : "border border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-400 hover:shadow-md"
          )}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

interface CTAButtonsProps extends ThemeProps {
  onDownloadResume: () => void;
}

function CTAButtons({ isDark, onDownloadResume }: CTAButtonsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
      <a
        href="#projects"
        className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        View My Work
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <a
        href="#contact"
        className={cn(
          "rounded-2xl border-2 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1",
          isDark
            ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10"
            : "border-gray-300 text-gray-700 hover:border-blue-600 hover:bg-blue-50"
        )}
      >
        Get in Touch
      </a>

      <button
        onClick={onDownloadResume}
        className={cn(
          "flex items-center gap-2 rounded-2xl border-2 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1",
          isDark
            ? "border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10"
            : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50"
        )}
      >
        <span>Resume</span>
        <ArrowDownToLine className="h-5 w-5" />
      </button>
    </div>
  );
}

function SocialLinks({ isDark }: ThemeProps) {
  return (
    <div className="flex items-center justify-center gap-4 pt-6">
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
              "group relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg",
              isDark
                ? "border border-gray-700 bg-gray-800"
                : "border border-gray-200 bg-gray-100"
            )}
          >
            <IconComponent
              className={cn(
                "h-5 w-5",
                isDark
                  ? "text-gray-400 group-hover:text-white"
                  : "text-gray-600 group-hover:text-gray-900"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                social.color
              )}
            />
          </a>
        );
      })}
    </div>
  );
}

function ScrollIndicator({ isDark }: ThemeProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div
        className={cn(
          "flex h-10 w-6 items-start justify-center rounded-full border-2 p-2",
          isDark ? "border-gray-700" : "border-gray-300"
        )}
      >
        <div
          className={cn(
            "h-1.5 w-1.5 rounded-full",
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
  return (
    <div className="relative">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="h-auto w-full"
      />
    </div>
  );
}
