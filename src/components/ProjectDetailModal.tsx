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
} from "lucide-react";
import { cn } from "@/utils";

// Mock types for demonstration
interface Project {
  title: string;
  links: {
    demo?: string;
    github?: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    screenshots: Array<{ title: string; color: string }>;
    technologies: string[];
    challenges: Array<{ title: string; solution: string }>;
    results: string[];
  };
}

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

const SectionHeading: FC<{
  icon: LucideIcon;
  title: string;
  iconColor: string;
  iconBg: string;
  isDark: boolean;
}> = ({ icon: Icon, title, iconColor, iconBg, isDark }) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="relative">
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-50 blur-lg transition-opacity duration-300",
          iconBg
        )}
      />
      <div
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-3",
          iconBg
        )}
      >
        <Icon className={cn("h-5 w-5", iconColor)} />
      </div>
    </div>
    <h3
      className={cn(
        "text-xl font-bold sm:text-2xl",
        isDark ? "text-white" : "text-gray-900"
      )}
    >
      {title}
    </h3>
  </div>
);

export const ProjectDetailModal: FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  isDark,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

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
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative flex h-[95vh] w-full flex-col overflow-hidden rounded-t-3xl shadow-2xl backdrop-blur-xl transition-all duration-500 sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-3xl lg:max-w-5xl",
          isDark
            ? "border-t border-gray-700/50 bg-gradient-to-b from-gray-900/95 to-gray-950/95 sm:border"
            : "border-t border-gray-200/50 bg-gradient-to-b from-white/95 to-gray-50/95 sm:border",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 sm:translate-y-10"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header - Fixed */}
        <header
          className={cn(
            "sticky top-0 z-20 border-b px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5 lg:px-8",
            isDark
              ? "border-gray-800/50 bg-gray-900/95"
              : "border-gray-200/50 bg-white/95"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div
                className={cn(
                  "mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl",
                  isDark
                    ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
                    : "border border-blue-200 bg-blue-100 text-blue-600"
                )}
              >
                <FileText className="h-3.5 w-3.5" />
                Case Study
              </div>
              <h2
                className={cn(
                  "truncate text-xl font-bold sm:text-2xl lg:text-3xl",
                  isDark
                    ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    : "text-gray-900"
                )}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:rotate-90",
                isDark
                  ? "border border-gray-700/50 bg-gray-800/50 text-gray-400 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              )}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Overview */}
            <section className="animate-fadeIn">
              <SectionHeading
                icon={Sparkles}
                title="Overview"
                iconColor="text-blue-500"
                iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
                isDark={isDark}
              />
              <p
                className={cn(
                  "text-base leading-relaxed sm:text-lg",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              {/* Problem */}
              <section
                className={cn(
                  "rounded-2xl border-l-4 border-red-500 p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] sm:p-6",
                  isDark
                    ? "bg-red-500/10 shadow-lg shadow-red-500/5"
                    : "bg-red-50/80 shadow-lg"
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-500" />
                  <h3
                    className={cn(
                      "text-lg font-bold",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    Problem
                  </h3>
                </div>
                <p
                  className={cn(
                    "text-sm leading-relaxed sm:text-base",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {project.caseStudy.problem}
                </p>
              </section>

              {/* Solution */}
              <section
                className={cn(
                  "rounded-2xl border-l-4 border-green-500 p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] sm:p-6",
                  isDark
                    ? "bg-green-500/10 shadow-lg shadow-green-500/5"
                    : "bg-green-50/80 shadow-lg"
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-green-500" />
                  <h3
                    className={cn(
                      "text-lg font-bold",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    Solution
                  </h3>
                </div>
                <p
                  className={cn(
                    "text-sm leading-relaxed sm:text-base",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {project.caseStudy.solution}
                </p>
              </section>
            </div>

            {/* Key Features */}
            <section>
              <SectionHeading
                icon={Zap}
                title="Key Features"
                iconColor="text-purple-500"
                iconBg="bg-gradient-to-br from-purple-500 to-purple-600"
                isDark={isDark}
              />
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.caseStudy.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group flex items-start gap-3 rounded-xl p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]",
                      isDark
                        ? "bg-gray-800/50 hover:bg-gray-800"
                        : "bg-gray-50/80 hover:bg-gray-100 shadow-sm"
                    )}
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                    <span
                      className={cn(
                        "text-sm sm:text-base",
                        isDark ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            <section>
              <SectionHeading
                icon={Sparkles}
                title="Project Showcase"
                iconColor="text-pink-500"
                iconBg="bg-gradient-to-br from-pink-500 to-pink-600"
                isDark={isDark}
              />
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {project.caseStudy.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl"
                  >
                    <div
                      className={cn(
                        "flex aspect-video items-center justify-center bg-gradient-to-br",
                        screenshot.color
                      )}
                    >
                      <div className="p-4 text-center text-white">
                        <div className="mb-1 text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                          📱
                        </div>
                        <p className="text-xs font-semibold sm:text-sm">
                          {screenshot.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <SectionHeading
                icon={Zap}
                title="Technologies"
                iconColor="text-cyan-500"
                iconBg="bg-gradient-to-br from-cyan-500 to-cyan-600"
                isDark={isDark}
              />
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:px-4 sm:py-2 sm:text-sm",
                      isDark
                        ? "border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400"
                        : "border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section>
              <SectionHeading
                icon={Target}
                title="Challenges & Solutions"
                iconColor="text-orange-500"
                iconBg="bg-gradient-to-br from-orange-500 to-orange-600"
                isDark={isDark}
              />
              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "rounded-xl p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:p-5",
                      isDark
                        ? "bg-gray-800/50 hover:bg-gray-800"
                        : "bg-gray-50/80 shadow-sm hover:bg-gray-100"
                    )}
                  >
                    <h4
                      className={cn(
                        "mb-2 flex items-center gap-2 text-sm font-bold sm:text-base",
                        isDark ? "text-orange-400" : "text-orange-600"
                      )}
                    >
                      <ArrowRight className="h-4 w-4" />
                      {challenge.title}
                    </h4>
                    <p
                      className={cn(
                        "text-xs sm:text-sm",
                        isDark ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      <span className="font-bold text-green-500">
                        Solution:{" "}
                      </span>
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <SectionHeading
                icon={TrendingUp}
                title="Impact & Results"
                iconColor="text-green-500"
                iconBg="bg-gradient-to-br from-green-500 to-green-600"
                isDark={isDark}
              />
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group rounded-xl p-4 text-center backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:p-5",
                      isDark
                        ? "border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 shadow-lg shadow-green-500/5"
                        : "border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg"
                    )}
                  >
                    <div className="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                      🎯
                    </div>
                    <p
                      className={cn(
                        "text-xs font-bold sm:text-sm",
                        isDark ? "text-green-400" : "text-green-600"
                      )}
                    >
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <section className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:pt-8">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 px-6 py-3 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-pos-100 hover:shadow-blue-500/50"
                >
                  <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>View Live Demo</span>
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 font-bold backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]",
                    isDark
                      ? "border-gray-700 bg-gray-800/50 text-white hover:border-gray-600 hover:bg-gray-700/50"
                      : "border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                  )}
                >
                  <Github className="h-5 w-5" />
                  <span>View Source</span>
                </a>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
