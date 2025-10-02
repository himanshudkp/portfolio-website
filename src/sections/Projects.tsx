import { useState, useCallback, memo, useEffect } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  FileText,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Project } from "@/types";
import { cn } from "@/utils";
import { ProjectDetailModal } from "@/components/ProjectModal";
import { PROJECTS_DATA } from "@/data";
import BtnLink from "@/ui/BtnLink";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  delay?: number;
}

const ProjectCard = memo<ProjectCardProps>(
  ({ project, onOpenCaseStudy, delay = 0 }) => {
    const { isDark } = useTheme();
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

    // Convert gradient to solid color
    const getSolidColorClass = (gradient: string) => {
      if (gradient.includes("blue")) return "bg-blue-600";
      if (gradient.includes("purple")) return "bg-purple-600";
      if (gradient.includes("pink")) return "bg-pink-600";
      if (gradient.includes("green")) return "bg-green-600";
      if (gradient.includes("orange")) return "bg-orange-600";
      if (gradient.includes("cyan")) return "bg-cyan-600";
      if (gradient.includes("cyan")) return "bg-cyan-600";
      return "bg-blue-600";
    };

    return (
      <article
        className={cn(
          "rounded-2xl backdrop-blur-xl transition-all duration-700",
          isDark
            ? "border border-gray-700 bg-gray-800/80"
            : "border border-gray-200 bg-white shadow-lg",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Project Banner */}
        <div
          className={cn(
            "relative h-52 overflow-hidden sm:h-56",
            getSolidColorClass(project.gradient || "")
          )}
        >
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md sm:p-8">
              {Icon && (
                <Icon className="h-12 w-12 text-white sm:h-14 sm:w-14" />
              )}
            </div>
          </div>

          {/* Stats Badge */}
          {project.stats && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-sm">
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
              "mb-3 text-xl font-bold sm:text-2xl",
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
                  ? "border border-blue-600/50 bg-blue-600/10 text-blue-400"
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
                    "rounded-lg px-2.5 py-1 text-xs font-medium backdrop-blur-xl",
                    isDark
                      ? "border border-gray-700 bg-gray-900/50 text-gray-300"
                      : "border border-gray-200 bg-gray-100 text-gray-700"
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
              <BtnLink
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
                className="flex"
              >
                Demo
              </BtnLink>

              <BtnLink
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
                size="sm"
                icon={Github}
                aria-label="View on GitHub"
              />
            </div>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold backdrop-blur-xl transition-colors duration-200",
                isDark
                  ? "border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800"
                  : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              aria-label="Read Case Study"
            >
              <FileText className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// Main component
export const Projects = () => {
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
          "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
          isDark ? "bg-gray-900" : "bg-white"
        )}
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <header
            className={cn(
              "mb-12 text-center transition-all duration-700 lg:mb-16",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div
              className={cn(
                "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm",
                isDark
                  ? "border-blue-600/50 bg-blue-600/10"
                  : "border-blue-200 bg-blue-50"
              )}
            >
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              >
                My Work
              </span>
            </div>

            <h2
              className={cn(
                "mb-4 text-4xl font-bold [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
                isDark ? "text-white" : "text-gray-900"
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

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
          </header>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenCaseStudy={openCaseStudy}
                delay={index * 150}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={cn(
              "mt-12 rounded-2xl p-8 text-center backdrop-blur-xl transition-all duration-700 delay-500 sm:p-10 lg:mt-16",
              isDark
                ? "border border-blue-600/30 bg-blue-600/10"
                : "border border-blue-200 bg-blue-50",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
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
              <BtnLink
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={Github}
                iconPosition="left"
                className="sm:px-8 sm:py-4"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </BtnLink>
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
        />
      )}
    </>
  );
};

// Export projects data for reuse
export { PROJECTS_DATA };
