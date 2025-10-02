import { useState, useCallback, memo, useEffect } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  FileText,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
  Rocket,
  Star,
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
    const [imageError, setImageError] = useState(false);
    const Icon = project.icon;
    const displayTags = project.tags && project.tags.slice(0, 3);
    const remainingTags = project.tags && project.tags.length - 3;

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    const getGradientClass = (gradient: string) => {
      if (gradient.includes("blue")) return "from-blue-600 to-blue-700";
      if (gradient.includes("purple")) return "from-purple-600 to-purple-700";
      if (gradient.includes("pink")) return "from-pink-600 to-pink-700";
      if (gradient.includes("green")) return "from-green-600 to-green-700";
      if (gradient.includes("orange")) return "from-orange-600 to-orange-700";
      if (gradient.includes("cyan")) return "from-cyan-600 to-cyan-700";
      return "from-blue-600 to-blue-700";
    };

    // Use Unsplash for project screenshots - free, high-quality images
    const getProjectImage = (title: string) => {
      const seed = title.toLowerCase().replace(/\s+/g, "-");
      return `https://source.unsplash.com/800x600/?${seed},web,app,technology`;
    };

    return (
      <article
        className={cn(
          "group rounded-3xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-105",
          isDark
            ? "border border-white/10 bg-gray-800/50"
            : "border border-gray-200 bg-white shadow-xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Project Image/Banner */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          {!imageError ? (
            <img
              src={getProjectImage(project.title)}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className={cn(
                "h-full w-full flex items-center justify-center",
                `bg-gradient-to-br ${getGradientClass(project.gradient || "")}`
              )}
            >
              <div className="rounded-2xl bg-white/20 p-8 backdrop-blur-md">
                {Icon && <Icon className="h-14 w-14 text-white" />}
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Top Badges */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md",
                "bg-white/90 text-gray-800 shadow-lg"
              )}
            >
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              Featured
            </span>
          </div>

          {/* Stats Badge */}
          {project.stats && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-md">
              <Users className="h-3.5 w-3.5" />
              {project.stats.users}
            </div>
          )}

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {project.stats && (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {project.stats.impact}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-7">
          {/* Title */}
          <h3
            className={cn(
              "mb-3 text-xl font-bold sm:text-2xl",
              isDark
                ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "text-gray-900"
            )}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "mb-5 text-sm leading-relaxed sm:text-base line-clamp-3",
              isDark ? "text-gray-300" : "text-gray-600"
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
                    "rounded-lg px-3 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all hover:scale-105",
                    isDark
                      ? "border border-gray-700 bg-gray-900/50 text-gray-300 hover:border-blue-600/50"
                      : "border border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-600/50"
                  )}
                >
                  {tag}
                </span>
              ))}
            {remainingTags && remainingTags > 0 && (
              <span
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-semibold",
                  isDark ? "text-gray-500" : "text-gray-500"
                )}
              >
                +{remainingTags}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <BtnLink
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={ExternalLink}
              iconPosition="right"
              className="flex-1"
            >
              Live Demo
            </BtnLink>

            <BtnLink
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={Github}
              aria-label="View on GitHub"
            />

            <button
              onClick={() => onOpenCaseStudy(project)}
              className={cn(
                "flex items-center justify-center rounded-xl border px-4 backdrop-blur-xl transition-all duration-200 hover:scale-105",
                isDark
                  ? "border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800 hover:border-blue-600/50"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-600/50 shadow-sm"
              )}
              aria-label="Read Case Study"
            >
              <FileText className="h-5 w-5" />
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
          isDark ? "bg-gray-900" : "bg-gray-50"
        )}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={cn(
              "absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
              isDark ? "bg-purple-500" : "bg-purple-300"
            )}
          />
          <div
            className={cn(
              "absolute bottom-1/3 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
              isDark ? "bg-blue-500" : "bg-blue-300"
            )}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <header
            className={cn(
              "mb-16 text-center transition-all duration-700",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-sm",
                  isDark
                    ? "border-blue-500/30 bg-blue-500/10"
                    : "border-blue-200 bg-blue-50"
                )}
              >
                <Rocket
                  className={cn(
                    "h-3.5 w-3.5",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                >
                  Portfolio Showcase
                </span>
              </div>
            </div>

            <h2
              className={cn(
                "mb-6 text-4xl font-bold tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
                isDark
                  ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                  : "text-gray-900"
              )}
            >
              Featured Work
            </h2>

            <p
              className={cn(
                "mx-auto max-w-2xl text-base sm:text-lg mb-6",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              Real-world projects delivering measurable impact and exceptional
              user experiences
            </p>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles
                  className={cn(
                    "h-4 w-4",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                />
                <span
                  className={cn(
                    "font-semibold",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  Production Ready
                </span>
              </div>
              <div
                className={cn(
                  "h-4 w-px",
                  isDark ? "bg-gray-700" : "bg-gray-300"
                )}
              />
              <div className="flex items-center gap-2">
                <TrendingUp
                  className={cn(
                    "h-4 w-4",
                    isDark ? "text-green-400" : "text-green-600"
                  )}
                />
                <span
                  className={cn(
                    "font-semibold",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  Proven Impact
                </span>
              </div>
            </div>
          </header>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              "mt-16 relative overflow-hidden rounded-3xl p-10 text-center transition-all duration-700 delay-500",
              "bg-gradient-to-br from-blue-600 to-purple-600",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative z-10">
              <h3 className="mb-3 text-3xl font-bold text-white">
                Impressed by What You See?
              </h3>
              <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
                Explore my complete portfolio on GitHub with 50+ projects,
                open-source contributions, and code samples
              </p>
              <div className="flex items-center justify-center gap-4">
                <BtnLink
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={Github}
                  iconPosition="left"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  View GitHub Profile
                </BtnLink>
                <BtnLink
                  href="#contact"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Let's Collaborate
                </BtnLink>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
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
