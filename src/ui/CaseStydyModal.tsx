import { FC, useEffect, useCallback } from "react";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  FileText,
  Github,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
  LucideIcon,
} from "lucide-react";
import { Project } from "@/types";

interface CaseStudyModalProps {
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
  <h3
    className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
      isDark ? "text-white" : "text-gray-900"
    }`}
  >
    <Icon className={`w-6 h-6 ${iconColor}`} />
    {title}
  </h3>
);

const Card: FC<{
  children: React.ReactNode;
  isDark: boolean;
  className?: string;
  hover?: boolean;
}> = ({ children, isDark, className = "", hover = false }) => (
  <div
    className={`
    p-6 rounded-2xl transition-all duration-300
    ${hover ? "hover:-translate-y-1" : ""}
    ${
      isDark
        ? "bg-gray-800 border border-gray-700"
        : "bg-gray-50 border border-gray-200"
    }
    ${className}
  `}
  >
    {children}
  </div>
);

const getThemeClasses = (isDark: boolean) => ({
  modal: isDark ? "bg-gray-900" : "bg-white",
  header: isDark
    ? "bg-gray-900/95 border-gray-800"
    : "bg-white/95 border-gray-200",
  text: isDark ? "text-gray-300" : "text-gray-700",
  textPrimary: isDark ? "text-white" : "text-gray-900",
  badge: isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-600",
  button: isDark
    ? "hover:bg-gray-800 text-gray-400"
    : "hover:bg-gray-100 text-gray-600",
  feature: isDark
    ? "bg-gray-800 hover:bg-gray-750"
    : "bg-gray-50 hover:bg-gray-100",
  tech: isDark
    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30"
    : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200",
  screenshotCard: isDark ? "bg-gray-800" : "bg-white",
  screenshotText: isDark ? "text-gray-400" : "text-gray-600",
  githubButton: isDark
    ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
    : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
});

const CaseStudyModal: FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  isDark,
}) => {
  // Handle escape key press and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
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
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  const theme = getThemeClasses(isDark);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${theme.modal}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <header
          className={`sticky top-0 z-10 px-8 py-6 border-b backdrop-blur-md ${theme.header}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${theme.badge}`}
              >
                <FileText className="w-4 h-4" />
                Case Study
              </span>
              <h2
                id="modal-title"
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${theme.button}`}
              aria-label="Close modal"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-8 space-y-12">
          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <SectionHeading
              icon={Sparkles}
              title="Overview"
              iconColor="text-blue-500"
              isDark={isDark}
            />
            <p className={`text-lg leading-relaxed ${theme.text}`}>
              {project.caseStudy.overview}
            </p>
          </section>

          {/* Problem Statement */}
          <section aria-labelledby="problem-heading">
            <SectionHeading
              icon={Target}
              title="Problem Statement"
              iconColor="text-red-500"
              isDark={isDark}
            />
            <div
              className={`p-6 rounded-2xl border-l-4 border-red-500 ${
                isDark ? "bg-red-500/10" : "bg-red-50"
              }`}
            >
              <p className={theme.text}>{project.caseStudy.problem}</p>
            </div>
          </section>

          {/* Solution */}
          <section aria-labelledby="solution-heading">
            <SectionHeading
              icon={Lightbulb}
              title="Solution"
              iconColor="text-yellow-500"
              isDark={isDark}
            />
            <div
              className={`p-6 rounded-2xl border-l-4 border-green-500 ${
                isDark ? "bg-green-500/10" : "bg-green-50"
              }`}
            >
              <p className={theme.text}>{project.caseStudy.solution}</p>
            </div>
          </section>

          {/* Key Features */}
          <section aria-labelledby="features-heading">
            <SectionHeading
              icon={Zap}
              title="Key Features"
              iconColor="text-purple-500"
              isDark={isDark}
            />
            <div className="grid md:grid-cols-2 gap-4">
              {project.caseStudy.features.map((feature, idx) => (
                <div
                  key={`feature-${idx}`}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${theme.feature}`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className={theme.text}>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section aria-labelledby="screenshots-heading">
            <SectionHeading
              icon={Sparkles}
              title="Project Screenshots"
              iconColor="text-pink-500"
              isDark={isDark}
            />
            <div className="grid md:grid-cols-3 gap-6">
              {project.caseStudy.screenshots.map((screenshot, idx) => (
                <div
                  key={`screenshot-${idx}`}
                  className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.screenshotCard}`}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2" aria-hidden="true">
                        📱
                      </div>
                      <p className="text-sm font-medium">{screenshot.title}</p>
                    </div>
                  </div>
                  <div className={`p-4 ${theme.screenshotText}`}>
                    <p className="text-sm text-center">{screenshot.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section aria-labelledby="technologies-heading">
            <SectionHeading
              icon={Zap}
              title="Technologies Used"
              iconColor="text-blue-500"
              isDark={isDark}
            />
            <div className="flex flex-wrap gap-3">
              {project.caseStudy.technologies.map((tech, idx) => (
                <span
                  key={`tech-${idx}`}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${theme.tech}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section aria-labelledby="challenges-heading">
            <SectionHeading
              icon={Target}
              title="Challenges & Solutions"
              iconColor="text-orange-500"
              isDark={isDark}
            />
            <div className="space-y-6">
              {project.caseStudy.challenges.map((challenge, idx) => (
                <Card key={`challenge-${idx}`} isDark={isDark}>
                  <h4
                    className={`font-bold text-lg mb-3 flex items-center gap-2 ${
                      isDark ? "text-orange-400" : "text-orange-600"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                    {challenge.title}
                  </h4>
                  <p className={theme.text}>
                    <span className="font-semibold text-green-500">
                      Solution:{" "}
                    </span>
                    {challenge.solution}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Results */}
          <section aria-labelledby="results-heading">
            <SectionHeading
              icon={TrendingUp}
              title="Results & Impact"
              iconColor="text-green-500"
              isDark={isDark}
            />
            <div className="grid md:grid-cols-2 gap-4">
              {project.caseStudy.results.map((result, idx) => (
                <div
                  key={`result-${idx}`}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
                      : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                  }`}
                >
                  <div className="text-3xl mb-2" aria-hidden="true">
                    🎯
                  </div>
                  <p
                    className={`font-bold ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Actions */}
          <section className="flex gap-4 pt-4" aria-label="Project links">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${theme.githubButton}`}
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
