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
  isDark: boolean;
}> = ({ icon: Icon, title, iconColor, isDark }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`p-2 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3
      className={`text-xl sm:text-2xl font-semibold ${
        isDark ? "text-white" : "text-gray-900"
      }`}
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

  const bg = isDark ? "bg-gray-900" : "bg-white";
  const text = isDark ? "text-gray-300" : "text-gray-600";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const border = isDark ? "border-gray-800" : "border-gray-100";
  const card = isDark ? "bg-gray-800/50" : "bg-gray-50";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className={`relative w-full sm:max-w-4xl lg:max-w-5xl h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-hidden rounded-t-3xl sm:rounded-3xl shadow-2xl ${bg} transition-all duration-300 flex flex-col`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header - Fixed */}
        <header
          className={`sticky top-0 z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b ${border} backdrop-blur-xl ${
            isDark ? "bg-gray-900/95" : "bg-white/95"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                  isDark
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Case Study
              </div>
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${textPrimary} truncate`}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                isDark
                  ? "hover:bg-gray-800 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-4xl mx-auto">
            {/* Overview */}
            <section>
              <SectionHeading
                icon={Sparkles}
                title="Overview"
                iconColor="text-blue-500"
                isDark={isDark}
              />
              <p className={`text-base sm:text-lg leading-relaxed ${text}`}>
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Problem */}
              <section
                className={`p-5 sm:p-6 rounded-2xl border-l-4 border-red-500 ${
                  isDark ? "bg-red-500/5" : "bg-red-50/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-red-500" />
                  <h3 className={`text-lg font-semibold ${textPrimary}`}>
                    Problem
                  </h3>
                </div>
                <p className={`text-sm sm:text-base ${text}`}>
                  {project.caseStudy.problem}
                </p>
              </section>

              {/* Solution */}
              <section
                className={`p-5 sm:p-6 rounded-2xl border-l-4 border-green-500 ${
                  isDark ? "bg-green-500/5" : "bg-green-50/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                  <h3 className={`text-lg font-semibold ${textPrimary}`}>
                    Solution
                  </h3>
                </div>
                <p className={`text-sm sm:text-base ${text}`}>
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
                isDark={isDark}
              />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {project.caseStudy.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-xl ${card} transition-transform hover:scale-[1.02]`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm sm:text-base ${text}`}>
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
                isDark={isDark}
              />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {project.caseStudy.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105`}
                  >
                    <div
                      className={`aspect-video bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
                    >
                      <div className="text-white text-center p-4">
                        <div className="text-2xl sm:text-3xl mb-1">📱</div>
                        <p className="text-xs sm:text-sm font-medium">
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
                iconColor="text-blue-500"
                isDark={isDark}
              />
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-transform hover:scale-105 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
                    }`}
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
                isDark={isDark}
              />
              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div key={idx} className={`p-4 sm:p-5 rounded-xl ${card}`}>
                    <h4
                      className={`font-semibold text-sm sm:text-base mb-2 flex items-center gap-2 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                      {challenge.title}
                    </h4>
                    <p className={`text-xs sm:text-sm ${text}`}>
                      <span className="font-semibold text-green-500">
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
                title="Impact"
                iconColor="text-green-500"
                isDark={isDark}
              />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {project.caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-xl text-center transition-transform hover:scale-105 ${
                      isDark
                        ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
                        : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                    <p
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <section className="flex flex-col sm:flex-row gap-3 pt-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all ${
                    isDark
                      ? "bg-gray-800 text-white hover:bg-gray-700 border-gray-700"
                      : "bg-white text-gray-900 hover:bg-gray-50 border-gray-300"
                  }`}
                >
                  <Github className="w-5 h-5" />
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
