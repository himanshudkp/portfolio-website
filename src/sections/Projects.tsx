import { useState, useCallback, memo, useEffect } from "react";
import {
  ExternalLink,
  Github,
  FileText,
  Sparkles,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Project } from "@/types";
import { PROJECTS_DATA } from "@/data/projects-data";
import { cn } from "@/utils";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  isDark: boolean;
  delay?: number;
}

const ProjectCard = memo<ProjectCardProps>(
  ({ project, onOpenCaseStudy, isDark, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const Icon = project.icon;
    const displayTags = project.tags && project.tags.slice(0, 3);
    const remainingTags = project.tags && project.tags.length - 3;

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <article
        className={cn(
          "group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-700",
          "hover:-translate-y-2 hover:scale-[1.02]",
          isDark
            ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-2xl shadow-purple-900/10"
            : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Project Banner */}
        <div
          className={cn(
            "relative h-52 overflow-hidden bg-gradient-to-br sm:h-56",
            project.gradient
          )}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />

          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          {/* Gradient blob */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/30 blur-2xl transition-all duration-500 group-hover:scale-125" />
              <div className="relative rounded-3xl bg-white/20 p-6 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 sm:p-8">
                {Icon && (
                  <Icon className="h-12 w-12 text-white sm:h-14 sm:w-14" />
                )}
              </div>
            </div>
          </div>

          {/* Stats Badge */}
          {project.stats && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Users className="h-3.5 w-3.5" />
              {project.stats.users}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-7">
          {/* Title */}
          <h3
            className={cn(
              "mb-3 text-xl font-bold transition-colors duration-300 sm:text-2xl",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {project.title}
          </h3>

          {/* Impact Badge */}
          {project.stats && (
            <div
              className={cn(
                "mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-xl",
                isDark
                  ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border border-blue-200 bg-blue-50 text-blue-600"
              )}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              {project.stats.impact}
            </div>
          )}

          {/* Description */}
          <p
            className={cn(
              "mb-5 text-sm leading-relaxed sm:text-base",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {displayTags &&
              displayTags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-medium backdrop-blur-xl transition-colors duration-300",
                    isDark
                      ? "border border-gray-600 bg-gray-700/50 text-gray-300 hover:border-blue-500"
                      : "border border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-400"
                  )}
                >
                  {tag}
                </span>
              ))}
            {remainingTags && remainingTags > 0 && (
              <span
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs font-medium",
                  isDark ? "text-gray-500" : "text-gray-500"
                )}
              >
                +{remainingTags} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <div className="flex gap-3">
              {/* Demo */}
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
                  `bg-gradient-to-r ${project.gradient}`
                )}
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                <span>Demo</span>
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              </a>

              {/* GitHub */}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/btn flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5",
                  isDark
                    ? "border-gray-600 bg-gray-700/50 text-white hover:border-blue-500 hover:bg-gray-700"
                    : "border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-400 hover:bg-gray-200"
                )}
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className={cn(
                "group/btn flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5",
                isDark
                  ? "border-gray-600 bg-gray-700/50 text-white hover:border-purple-500 hover:bg-gray-700"
                  : "border-gray-200 bg-gray-100 text-gray-700 hover:border-purple-400 hover:bg-gray-200"
              )}
              aria-label="Read Case Study"
            >
              {" "}
              <FileText className="h-4 w-4" />{" "}
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={cn(
            "h-1 bg-gradient-to-r transition-transform duration-500",
            project.gradient,
            "scale-x-0 group-hover:scale-x-100"
          )}
        />
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// Main component
export default function Projects() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const openCaseStudy = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeCaseStudy = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <>
      <section
        id="projects"
        className={cn(
          "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
          isDark
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-b from-white via-gray-50 to-white"
        )}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "absolute -left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000",
              isDark ? "bg-blue-500/10" : "bg-blue-500/5",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          />
          <div
            className={cn(
              "absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000 delay-300",
              isDark ? "bg-purple-500/10" : "bg-purple-500/5",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <header
            className={cn(
              "mb-12 text-center transition-all duration-1000 lg:mb-16",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse text-blue-500" />
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              >
                My Work
              </span>
              <Sparkles className="h-4 w-4 animate-pulse text-purple-500" />
            </div>

            <h2
              className={cn(
                "mb-4 text-4xl font-bold transition-colors duration-300 [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
                isDark
                  ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
              )}
            >
              Featured Projects
            </h2>

            <p
              className={cn(
                "mx-auto max-w-2xl text-sm sm:text-base lg:text-lg",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              A showcase of my recent work and contributions to the digital
              world
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          </header>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenCaseStudy={openCaseStudy}
                isDark={isDark}
                delay={index * 150}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={cn(
              "group relative mt-12 overflow-hidden rounded-3xl p-8 text-center backdrop-blur-xl transition-all duration-1000 delay-700 hover:scale-[1.01] sm:p-10 lg:mt-16",
              isDark
                ? "border border-gray-700/50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                : "border border-gray-200/50 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            </div>

            <div className="relative">
              <h3
                className={cn(
                  "mb-3 text-2xl font-bold sm:text-3xl",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                Want to see more?
              </h3>
              <p
                className={cn(
                  "mb-6 text-sm sm:text-base",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                Check out my GitHub for more projects and open-source
                contributions
              </p>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/link relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 px-6 py-3 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-pos-100 hover:shadow-blue-500/50 sm:px-8 sm:py-4"
                )}
              >
                <Github className="h-5 w-5" />
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/link:translate-x-full" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeCaseStudy}
          isDark={isDark}
        />
      )}
    </>
  );
}

// Export projects data for reuse
export { PROJECTS_DATA };
