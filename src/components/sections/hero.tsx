"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Code2, Download } from "lucide-react";
import { SocialLinks } from "../social-links";
import { StatusBadge } from "../ui/status-badge";
import { Button } from "../ui/button";
import { BUTTON_TEXT, HERO_SECTION_CONTENT } from "@/content";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-16 h-16 border-4 border-t-transparent border-teal-200 rounded-full animate-spin"></div>
  ),
});

const Animation = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    import("../../../public/web-dev.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) {
    return null;
  }

  return (
    <div className="relative overflow-hidden justify-center items-center flex transition-all duration-300 w-auto">
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
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%] bg-[var(--dark)]"
    >
      <div className="relative z-10 mt-10 grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-5 text-center lg:text-left relative">
          <div className="mt-12 flex items-center justify-center">
            <StatusBadge text="Open to Opportunities" />
          </div>
          <MainHeading />
          <Description />

          <div className="flex flex-col items-center justify-center gap-5 lg:hidden">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.work}
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.connect}
              </Button>
              <Button
                icon={Download}
                href="/resume.pdf"
                download={true}
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.resume_web}
              </Button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="h-px flex-1 sm:flex-none sm:w-12 bg-gradient-to-r from-transparent via-teal-600/30 to-transparent sm:via-teal-600/50" />
              <span className="text-xs text-teal-200/60 font-medium">OR</span>
              <div className="h-px flex-1 sm:flex-none sm:w-12 bg-gradient-to-r from-transparent via-teal-600/30 to-transparent sm:via-teal-600/50" />
            </div>

            <div className="flex items-center justify-center">
              <SocialLinks />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-start gap-3">
            <Button href="#projects" variant="primary" size="md">
              {BUTTON_TEXT.work}
            </Button>
            <Button href="#contact" variant="secondary" size="md">
              {BUTTON_TEXT.connect}
            </Button>
            <Button
              icon={Download}
              href="/resume.pdf"
              download={true}
              variant="outline"
              size="md"
            >
              {BUTTON_TEXT.resume_web}
            </Button>

            {/* Vertical Separator */}
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-teal-600/50 to-transparent" />
              <span className="text-xs text-teal-200/60 font-medium">OR</span>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-teal-600/50 to-transparent" />
            </div>

            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <Animation />
        </div>
      </div>
    </section>
  );
};

const RoleAndSkillBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 bg-gradient-to-r from-teal-600/20 to-teal-200/20 backdrop-blur-sm border border-teal-600/30">
      <Code2 className="h-5 w-5 text-teal-600" />
      <span className="text-base font-bold sm:text-xl text-gray-100">
        {HERO_SECTION_CONTENT.role}
        <span className="mx-2 text-xs font-normal text-teal-200">•</span>
        <span className="text-sm font-normal text-teal-200">
          {HERO_SECTION_CONTENT.skill}
        </span>
      </span>
    </div>
  );
};

const MainHeading = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl xl:text-7xl text-gray-100">
        {HERO_SECTION_CONTENT.iam}
        <span className="relative inline-block bg-gradient-to-r from-teal-600 via-teal-200 to-teal-600 bg-clip-text text-transparent">
          {HERO_SECTION_CONTENT.full_name}
          <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-teal-600 via-teal-200 to-teal-600" />
        </span>
      </h1>

      <RoleAndSkillBadge />

      <p className="text-base font-medium text-teal-200/80">
        {HERO_SECTION_CONTENT.experience}
      </p>
    </div>
  );
};

const Description = () => {
  return (
    <p className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 text-gray-100/90">
      {HERO_SECTION_CONTENT.desc_1}
      <span className="font-semibold text-teal-600">
        {HERO_SECTION_CONTENT.desc_2}
      </span>
      {HERO_SECTION_CONTENT.desc_3}
      <span className="font-semibold text-teal-600">
        {HERO_SECTION_CONTENT.desc_4}
      </span>
      {HERO_SECTION_CONTENT.desc_5}
      <span className="font-semibold text-teal-600">
        {HERO_SECTION_CONTENT.desc_6}
      </span>
      {HERO_SECTION_CONTENT.desc_7}
    </p>
  );
};
