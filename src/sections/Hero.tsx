"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDownToLine, Code2, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import { SOCIAL_LINKS, TOP_5_TECH_STACK } from "@/data";
import BtnLink from "@/ui/BtnLink";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-gray-800 rounded-2xl" />
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
      <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-gray-800 rounded-2xl" />
    );
  }

  return <AnimationSection animationData={animationData} />;
}

export const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={cn(
        "relative flex min-h-screen items-center justify-center px-5 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:space-y-8 lg:text-left">
          <WelcomeBadge />
          <MainHeading />
          <Description />
          <AvailabilityBadge />
          <TechStack />
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
            <BtnLink href="#projects" variant="primary" size="xl" fullWidth>
              View My Work
            </BtnLink>
            <BtnLink href="#contact" variant="secondary" size="xl" fullWidth>
              Get in Touch
            </BtnLink>
            <BtnLink
              href="./Himanshu_Pandey_Resume.pdf"
              download={true}
              variant="secondary"
              size="xl"
              icon={ArrowDownToLine}
              iconPosition="left"
              fullWidth
              className="sm:w-auto"
            >
              Resume
            </BtnLink>
          </div>
          <SocialLinks />
        </div>

        {/* Animation Section */}
        <div className="flex items-center justify-center">
          <Animation />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

function WelcomeBadge() {
  const { isDark } = useTheme();
  return (
    <div className="inline-flex items-center justify-center lg:justify-start mt-2">
      <div
        className={cn(
          "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
          isDark
            ? "border border-blue-600/50 bg-blue-600/10 text-blue-400"
            : "border border-blue-200 bg-blue-50 text-blue-700"
        )}
      >
        Welcome to my portfolio
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
          "text-4xl font-bold leading-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl xl:text-7xl",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Hi, {"I'm"}{" "}
        <span className="relative inline-block">
          Himanshu
          <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-blue-600" />
        </span>
      </h1>

      {/* Role Badge */}
      <div className="flex items-center justify-center gap-3 lg:justify-start">
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2",
            isDark ? "bg-gray-800" : "bg-gray-100"
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
              isDark ? "text-blue-400" : "text-gray-800"
            )}
          >
            Frontend Developer
          </span>
        </div>
      </div>

      {/* Experience Badge */}
      <div className="flex items-center justify-center gap-2 lg:justify-start">
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

function Description() {
  const { isDark } = useTheme();
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 lg:text-xl",
        isDark ? "text-gray-300" : "text-gray-700"
      )}
    >
      Passionate about crafting{" "}
      <span className="font-semibold text-blue-600">
        responsive web and mobile apps
      </span>{" "}
      with clean UIs and user-centric design using{" "}
      <span className="font-semibold text-blue-600">modern technologies</span>.
      Transforming ideas into elegant digital experiences.
    </p>
  );
}

function AvailabilityBadge() {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "mx-auto rounded-lg border p-4 lg:mx-0",
        isDark
          ? "border-green-500/30 bg-gray-800"
          : "border-green-200 bg-green-50"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span
          className={cn(
            "text-sm font-bold",
            isDark ? "text-green-400" : "text-green-600"
          )}
        >
          Available for Work
        </span>
        <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
      </div>
      <p
        className={cn(
          "mt-3 text-sm",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Open to new opportunities and exciting projects
      </p>
    </div>
  );
}

function TechStack() {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
      {TOP_5_TECH_STACK.map((tech) => (
        <span
          key={tech}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200",
            isDark
              ? "border border-gray-700 bg-gray-800 text-gray-300"
              : "border border-gray-200 bg-white text-gray-700"
          )}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function SocialLinks() {
  const { isDark } = useTheme();
  return (
    <div className="flex items-center justify-center gap-3 pt-6 lg:justify-start">
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
          <BtnLink
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            variant="icon"
            size="icon"
          >
            <IconComponent
              className={cn(
                "h-5 w-5 transition-colors duration-200",
                isDark
                  ? "text-gray-400 group-hover:text-white"
                  : "text-gray-600 group-hover:text-gray-900"
              )}
            />
          </BtnLink>
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
          isDark ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
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
        "relative overflow-hidden rounded-2xl p-6 lg:p-8",
        isDark
          ? "border border-gray-700 bg-gray-800"
          : "border border-gray-200 bg-white"
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
}
