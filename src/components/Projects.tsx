import { useState, useCallback, memo } from "react";
import {
  ExternalLink,
  Github,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import CaseStudyModal from "../ui/CaseStydyModal";
import { Project } from "@/types";
import { PROJECTS_DATA } from "@/data/projects-data";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  isDark: boolean;
}

const ProjectCard = memo<ProjectCardProps>(
  ({ project, onOpenCaseStudy, isDark }) => {
    const Icon = project.icon;
    const displayTags = project.tags && project.tags.slice(0, 3);
    const remainingTags = project.tags && project.tags.length - 3;

    return (
      <article
        className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
          isDark
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl"
            : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
        }`}
      >
        {/* Project Banner */}
        <div
          className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300" />
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 transform group-hover:scale-110 transition-transform duration-300">
              {Icon && <Icon className="w-12 h-12 text-white" />}
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-gray-800">
            {project.stats && project.stats.users}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3
            className={`text-xl font-bold mb-3 transition-all duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              isDark
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                : "bg-blue-50 text-blue-600 border border-blue-200"
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            {project.stats && project.stats.impact}
          </div>
          <p
            className={`mb-4 text-sm leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {displayTags &&
              displayTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium ${
                    isDark
                      ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            {remainingTags && remainingTags > 0 && (
              <span
                className={`px-2.5 py-1 text-xs rounded-lg font-medium ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                +{remainingTags} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl`
                  : `bg-gradient-to-r ${project.gradient} text-white shadow-md hover:shadow-lg`
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenCaseStudy(project)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
              aria-label="Read Case Study"
            >
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
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
        className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
                My Work
              </span>
              <Sparkles className="w-5 h-5 text-blue-500" />
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A showcase of my recent work and contributions
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenCaseStudy={openCaseStudy}
                isDark={isDark}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`mt-16 text-center p-8 rounded-3xl ${
              isDark
                ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
                : "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Want to see more?
            </h3>
            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Check out my GitHub for more projects and open-source
              contributions
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-2xl"
              }`}
            >
              <Github className="w-5 h-5" />
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
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
