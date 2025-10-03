"use client";
import { FC, useEffect, useCallback } from "react";
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
import { useTheme } from "@/hooks/useTheme";
import BtnLink from "@/ui/BtnLink";

// Types
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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const SectionHeading: FC<{
  icon: LucideIcon;
  title: string;
}> = ({ icon: Icon, title }) => {
  const { isDark } = useTheme();
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg",
          isDark ? "bg-gray-800" : "bg-gray-100"
        )}
      >
        <Icon className="h-5 w-5 text-blue-600" />
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative flex h-[95vh] w-full flex-col overflow-hidden rounded-t-2xl shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-2xl lg:max-w-5xl",
          isDark
            ? "border-t border-gray-800 bg-gray-900 sm:border"
            : "border-t border-gray-200 bg-white sm:border"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <header
          className={cn(
            "sticky top-0 z-20 border-b px-4 py-4 sm:px-6 sm:py-5 lg:px-8",
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div
                className={cn(
                  "mb-2 inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-semibold",
                  isDark
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                )}
              >
                <FileText className="h-3.5 w-3.5" />
                Case Study
              </div>
              <h2
                className={cn(
                  "truncate text-xl font-bold sm:text-2xl lg:text-3xl",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors",
                isDark
                  ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              )}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
            {/* Overview */}
            <section>
              <SectionHeading icon={Sparkles} title="Overview" />
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
                  "rounded-lg border-l-4 border-red-500 p-5 sm:p-6",
                  isDark ? "bg-gray-800" : "bg-red-50"
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
                  "rounded-lg border-l-4 border-green-500 p-5 sm:p-6",
                  isDark ? "bg-gray-800" : "bg-green-50"
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
              <SectionHeading icon={Zap} title="Key Features" />
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.caseStudy.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex items-start gap-3 rounded-lg p-4",
                      isDark ? "bg-gray-800" : "bg-gray-50"
                    )}
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
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
              <SectionHeading icon={Sparkles} title="Project Showcase" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {project.caseStudy.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow">
                    <div
                      className={cn(
                        "flex aspect-video items-center justify-center",
                        screenshot.color
                      )}
                    >
                      <div className="p-4 text-center text-white">
                        <div className="mb-1 text-2xl sm:text-3xl">📱</div>
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
              <SectionHeading icon={Zap} title="Technologies" />
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm",
                      isDark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-100 text-blue-700"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section>
              <SectionHeading icon={Target} title="Challenges & Solutions" />
              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "rounded-lg p-4 sm:p-5",
                      isDark ? "bg-gray-800" : "bg-gray-50"
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
              <SectionHeading icon={TrendingUp} title="Impact & Results" />
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "rounded-lg border p-4 text-center sm:p-5",
                      isDark
                        ? "border-green-500/30 bg-gray-800"
                        : "border-green-200 bg-green-50"
                    )}
                  >
                    <div className="mb-2 text-2xl sm:text-3xl">🎯</div>
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
            <section
              className={cn(
                "flex flex-col gap-3 border-t pt-6 sm:flex-row sm:pt-8",
                isDark ? "border-gray-800" : "border-gray-200"
              )}
            >
              {project.links.demo && (
                <BtnLink
                  href={project.links.demo || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={ExternalLink}
                  iconPosition="right"
                  className="flex-1 rounded-lg"
                >
                  View Live Demo
                </BtnLink>
              )}
              {project.links.github && (
                <BtnLink
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={Github}
                  iconPosition="right"
                  className="flex-1 rounded-lg"
                >
                  View Source
                </BtnLink>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
