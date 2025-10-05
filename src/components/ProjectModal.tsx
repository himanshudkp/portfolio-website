"use client";
import { FC, useEffect, useCallback, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
  ExternalLink,
  Github,
  type LucideIcon,
  Rocket,
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { cn } from "@/utils";
import { useTheme } from "@/hooks/useTheme";

// Types
interface Project {
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  gradient?: string;
  icon?: any;
  stats?: {
    users: string;
    impact: string;
  };
  links: {
    demo?: string;
    github?: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    screenshots: Array<{
      title: string;
      url: string;
      alt?: string;
    }>;
    technologies: string[];
    challenges: Array<{ title: string; solution: string }>;
    results: string[];
  };
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const SectionHeading: FC<{
  icon: LucideIcon;
  title: string;
  gradient?: string;
}> = ({ icon: Icon, title, gradient = "from-blue-600 to-purple-600" }) => {
  const { isDark } = useTheme();
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl shadow-lg",
          `bg-gradient-to-br ${gradient}`
        )}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3
        className={cn(
          "text-2xl font-bold sm:text-3xl",
          isDark
            ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            : "text-gray-900"
        )}
      >
        {title}
      </h3>
    </div>
  );
};

interface ImageCarouselProps {
  screenshots: Array<{ title: string; url: string; alt?: string }>;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ screenshots }) => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevLightboxImage();
        if (e.key === "ArrowRight") nextLightboxImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            onClick={() => openLightbox(currentIndex)}
            className={cn(
              "group relative aspect-video cursor-pointer overflow-hidden rounded-2xl",
              isDark ? "bg-gray-800" : "bg-gray-100"
            )}
          >
            <img
              src={screenshots[currentIndex].url}
              alt={
                screenshots[currentIndex].alt || screenshots[currentIndex].title
              }
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6">
              <p className="text-base sm:text-xl font-bold text-white">
                {screenshots[currentIndex].title}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <div
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-2 sm:px-4 sm:py-2 font-semibold text-sm sm:text-base",
                  isDark
                    ? "bg-white/90 text-gray-900"
                    : "bg-white/95 text-gray-900"
                )}
              >
                <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">
                  Click to view full size
                </span>
                <span className="sm:hidden">Tap to expand</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className={cn(
                  "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full shadow-xl transition-all hover:scale-110",
                  isDark
                    ? "bg-gray-800/90 text-white hover:bg-gray-700"
                    : "bg-white/90 text-gray-900 hover:bg-white"
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextSlide}
                className={cn(
                  "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full shadow-xl transition-all hover:scale-110",
                  isDark
                    ? "bg-gray-800/90 text-white hover:bg-gray-700"
                    : "bg-white/90 text-gray-900 hover:bg-white"
                )}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          {/* Counter */}
          <div
            className={cn(
              "absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg",
              isDark ? "bg-gray-800/90 text-white" : "bg-white/90 text-gray-900"
            )}
          >
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {screenshots.map((screenshot, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl transition-all",
                currentIndex === idx
                  ? "ring-2 sm:ring-4 ring-blue-500 scale-105"
                  : "opacity-60 hover:opacity-100 hover:scale-105",
                "w-20 h-14 sm:w-24 sm:h-16"
              )}
            >
              <img
                src={screenshot.url}
                alt={screenshot.alt || screenshot.title}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:rotate-90"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Navigation */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={prevLightboxImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
              <button
                onClick={nextLightboxImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div
            className={cn(
              "relative w-full h-full flex flex-col items-center justify-between py-16 sm:py-20 px-4 transition-colors duration-300",
              isDark
                ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
                : "bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900"
            )}
          >
            {/* Title - Fixed at Top */}
            <div className="flex-shrink-0 flex justify-center gap-5 items-center text-center mb-4">
              {/* Counter & Instructions - Fixed at Bottom */}
              <div
                className={cn(
                  "inline-block rounded-full backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold transition-all duration-300",
                  isDark
                    ? "bg-white/10 text-white"
                    : "bg-slate-800/10 text-slate-800"
                )}
              >
                {lightboxIndex + 1} / {screenshots.length}
              </div>

              <p
                className={cn(
                  "text-lg sm:text-2xl font-bold transition-colors duration-300",
                  isDark ? " text-white" : " text-slate-800"
                )}
              >
                {screenshots[lightboxIndex].title}
              </p>
            </div>

            {/* Image - Centered with proper constraints */}
            <div className="flex-1 flex items-center justify-center w-full max-w-7xl">
              <img
                src={screenshots[lightboxIndex].url}
                alt={
                  screenshots[lightboxIndex].alt ||
                  screenshots[lightboxIndex].title
                }
                className={cn(
                  "max-h-[60vh] sm:max-h-[65vh] max-w-full rounded-lg sm:rounded-2xl object-contain shadow-2xl transition-shadow duration-300",
                  isDark ? "shadow-blue-950/30" : "shadow-slate-300"
                )}
              />
            </div>
          </div>

          {/* Instructions */}
          <div
            className={cn(
              "absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center  text-xs sm:text-sm px-4",
              isDark ? "text-white/60" : "text-black/60"
            )}
          >
            <span className="hidden sm:inline">
              Press{" "}
              <kbd className="rounded bg-white/10 px-2 py-1 font-mono">ESC</kbd>{" "}
              to close or use arrow keys to navigate
            </span>
            <span className="sm:hidden">
              Tap X to close • Swipe to navigate
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export const ProjectModal: FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      {/* Enhanced Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative flex h-[95vh] w-full flex-col overflow-hidden rounded-t-3xl shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-5xl sm:rounded-3xl lg:max-w-6xl",
          "animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300",
          isDark
            ? "border-t border-gray-700/50 bg-gradient-to-b from-gray-900 to-gray-950 sm:border"
            : "border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 sm:border"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header with gradient accent */}
        <header
          className={cn(
            "sticky top-0 z-20 border-b backdrop-blur-xl px-6 py-6 sm:px-8 sm:py-7 lg:px-10",
            isDark
              ? "border-gray-800/50 bg-gray-900/80"
              : "border-gray-200/50 bg-white/80"
          )}
        >
          {/* Gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/25">
                <FileText className="h-4 w-4" />
                <span>Case Study</span>
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              </div>
              <h2
                className={cn(
                  "text-2xl font-bold sm:text-3xl lg:text-4xl",
                  isDark
                    ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                    : "text-gray-900"
                )}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={cn(
                "group flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all hover:scale-105",
                isDark
                  ? "bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 shadow-md"
              )}
              aria-label="Close modal"
            >
              <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="mx-auto max-w-5xl space-y-12">
            {/* Overview */}
            <section>
              <SectionHeading
                icon={Sparkles}
                title="Overview"
                gradient="from-blue-600 to-cyan-600"
              />
              <p
                className={cn(
                  "text-lg leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid - Enhanced */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Problem Card */}
              <section
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-2 p-6 transition-all hover:shadow-2xl",
                  isDark
                    ? "border-red-500/30 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-red-500/50"
                    : "border-red-200 bg-gradient-to-br from-red-50 to-pink-50 hover:border-red-300"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 shadow-lg">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold",
                        isDark ? "text-white" : "text-gray-900"
                      )}
                    >
                      The Challenge
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "leading-relaxed",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}
                  >
                    {project.caseStudy.problem}
                  </p>
                </div>
              </section>

              {/* Solution Card */}
              <section
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-2 p-6 transition-all hover:shadow-2xl",
                  isDark
                    ? "border-green-500/30 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-green-500/50"
                    : "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:border-green-300"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 shadow-lg">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold",
                        isDark ? "text-white" : "text-gray-900"
                      )}
                    >
                      The Solution
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "leading-relaxed",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}
                  >
                    {project.caseStudy.solution}
                  </p>
                </div>
              </section>
            </div>

            {/* Key Features - Enhanced */}
            <section>
              <SectionHeading
                icon={Zap}
                title="Key Features"
                gradient="from-yellow-600 to-orange-600"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {project.caseStudy.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group flex items-start gap-4 rounded-xl p-5 transition-all hover:scale-105",
                      isDark
                        ? "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 hover:shadow-xl"
                        : "bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-lg"
                    )}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span
                      className={cn(
                        "text-base font-medium",
                        isDark ? "text-gray-200" : "text-gray-800"
                      )}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots - Enhanced Carousel */}
            <section>
              <SectionHeading
                icon={Award}
                title="Project Showcase"
                gradient="from-purple-600 to-pink-600"
              />
              <ImageCarousel screenshots={project.caseStudy.screenshots} />
            </section>

            {/* Technologies - Enhanced */}
            <section>
              <SectionHeading
                icon={Rocket}
                title="Tech Stack"
                gradient="from-blue-600 to-indigo-600"
              />
              <div className="flex flex-wrap gap-3">
                {project.caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "group relative overflow-hidden rounded-xl px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 hover:shadow-lg",
                      isDark
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges - Enhanced */}
            <section>
              <SectionHeading
                icon={Target}
                title="Challenges & Solutions"
                gradient="from-orange-600 to-red-600"
              />
              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group rounded-2xl border p-6 transition-all hover:shadow-xl",
                      isDark
                        ? "border-gray-700/50 bg-gray-800/50 hover:bg-gray-800"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-md">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={cn(
                            "mb-3 text-base font-bold",
                            isDark ? "text-orange-400" : "text-orange-600"
                          )}
                        >
                          {challenge.title}
                        </h4>
                        <p
                          className={cn(
                            "text-sm leading-relaxed",
                            isDark ? "text-gray-300" : "text-gray-700"
                          )}
                        >
                          <span className="font-bold text-green-500">
                            Solution:{" "}
                          </span>
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results - Enhanced */}
            <section>
              <SectionHeading
                icon={TrendingUp}
                title="Impact & Results"
                gradient="from-green-600 to-emerald-600"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {project.caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border-2 p-6 text-center transition-all hover:scale-105 hover:shadow-2xl",
                      isDark
                        ? "border-green-500/30 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-green-500/50"
                        : "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:border-green-300"
                    )}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
                    <div className="relative">
                      <div className="mb-3 text-4xl">🎯</div>
                      <p
                        className={cn(
                          "text-base font-bold",
                          isDark ? "text-green-400" : "text-green-600"
                        )}
                      >
                        {result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons - Enhanced */}
            <section
              className={cn(
                "flex flex-col gap-4 border-t pt-8 sm:flex-row sm:pt-10",
                isDark ? "border-gray-800" : "border-gray-200"
              )}
            >
              {project.links.demo && (
                <a
                  href={project.links.demo || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  View Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-6 py-3 hover:scale-105 transition-all",
                    isDark
                      ? "border-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  )}
                >
                  View Source Code
                  <Github className="h-4 w-4" />
                </a>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
