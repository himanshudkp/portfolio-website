import { useState, useCallback, memo, useEffect, useMemo } from "react";
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
  Code2,
  Server,
  Layers,
  Smartphone,
  Brain,
  Filter,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { ProjectModal } from "@/components";

// Types
interface Project {
  title: string;
  description: string;
  category: "frontend" | "backend" | "fullstack" | "mobile" | "ai";
  tags?: string[];
  gradient?: string;
  icon: React.ComponentType<{ className?: string }>;
  links: {
    demo: string;
    github: string;
  };
  stats?: {
    users: string;
    impact: string;
  };
}

// Sample Projects Data
const PROJECTS_DATA: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online marketplace with real-time inventory, payment processing, and advanced analytics dashboard.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "WebSocket"],
    gradient: "from-blue-600 to-blue-700",
    icon: Layers,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "10K+",
      impact: "95% uptime",
    },
  },
  {
    title: "AI Content Generator",
    description:
      "Advanced machine learning platform that generates human-like content using GPT models and natural language processing.",
    category: "ai",
    tags: ["Python", "TensorFlow", "FastAPI", "NLP", "GPT"],
    gradient: "from-purple-600 to-purple-700",
    icon: Brain,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "25K+",
      impact: "90% accuracy",
    },
  },
  {
    title: "Design System Library",
    description:
      "Comprehensive React component library with 100+ customizable components, accessibility features, and dark mode support.",
    category: "frontend",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    gradient: "from-pink-600 to-pink-700",
    icon: Code2,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "5K+",
      impact: "100+ components",
    },
  },
  {
    title: "Microservices API Gateway",
    description:
      "Scalable API gateway handling authentication, rate limiting, and routing for microservices architecture.",
    category: "backend",
    tags: ["Node.js", "Redis", "Docker", "Kubernetes", "GraphQL"],
    gradient: "from-green-600 to-green-700",
    icon: Server,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "50K+",
      impact: "99.9% uptime",
    },
  },
  {
    title: "Fitness Tracking App",
    description:
      "Native mobile application for tracking workouts, nutrition, and health metrics with social features.",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux", "HealthKit"],
    gradient: "from-orange-600 to-orange-700",
    icon: Smartphone,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "15K+",
      impact: "4.8★ rating",
    },
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive dashboard with live data visualization, custom reporting, and predictive analytics.",
    category: "frontend",
    tags: ["Vue.js", "D3.js", "WebSocket", "Chart.js"],
    gradient: "from-cyan-600 to-cyan-700",
    icon: Code2,
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
    stats: {
      users: "8K+",
      impact: "Real-time data",
    },
  },
];

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Category configuration
const CATEGORIES = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "fullstack", label: "Full Stack", icon: Layers },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ai", label: "AI/ML", icon: Brain },
];

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = memo<ProjectCardProps>(({ project, delay = 0 }) => {
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md bg-white/90 text-gray-800 shadow-lg">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            Featured
          </span>
        </div>

        {project.stats && (
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-md">
            <Users className="h-3.5 w-3.5" />
            {project.stats.users}
          </div>
        )}

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

        <p
          className={cn(
            "mb-5 text-sm leading-relaxed sm:text-base line-clamp-3",
            isDark ? "text-gray-300" : "text-gray-600"
          )}
        >
          {project.description}
        </p>

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

        <div className="flex gap-3">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition-all hover:scale-105",
              "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            )}
          >
            Live Demo
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center rounded-xl border px-4 backdrop-blur-xl transition-all hover:scale-105",
              isDark
                ? "border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800 hover:border-blue-600/50"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-600/50 shadow-sm"
            )}
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <button
            className={cn(
              "flex items-center justify-center rounded-xl border px-4 backdrop-blur-xl transition-all hover:scale-105",
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
});

ProjectCard.displayName = "ProjectCard";

// Main component
export const Projects = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const categoryStats = useMemo(() => {
    return CATEGORIES.reduce((acc, cat) => {
      if (cat.id === "all") {
        acc[cat.id] = PROJECTS_DATA.length;
      } else {
        acc[cat.id] = PROJECTS_DATA.filter((p) => p.category === cat.id).length;
      }
      return acc;
    }, {} as Record<string, number>);
  }, []);

  return (
    <section
      id="projects"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8",
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
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
              "mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
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
              className={cn("h-4 w-px", isDark ? "bg-gray-700" : "bg-gray-300")}
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

        {/* Category Filter */}
        <div
          className={cn(
            "mb-12 transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div
            className={cn(
              "rounded-2xl p-6 backdrop-blur-xl border",
              isDark
                ? "bg-gray-800/50 border-white/10"
                : "bg-white border-gray-200 shadow-lg"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <Filter
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              />
              <h3
                className={cn(
                  "text-lg font-semibold",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                Filter by Category
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                const count = categoryStats[category.id] || 0;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition-all hover:scale-105",
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : isDark
                        ? "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.label}</span>
                    <span
                      className={cn(
                        "ml-1 rounded-full px-2 py-0.5 text-xs font-bold",
                        isActive
                          ? "bg-white/20"
                          : isDark
                          ? "bg-gray-600"
                          : "bg-gray-200"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={index * 150}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Filter
              className={cn(
                "h-16 w-16 mb-4",
                isDark ? "text-gray-700" : "text-gray-300"
              )}
            />
            <h3
              className={cn(
                "text-xl font-semibold mb-2",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              No projects found
            </h3>
            <p
              className={cn(
                "text-sm",
                isDark ? "text-gray-500" : "text-gray-500"
              )}
            >
              Try selecting a different category
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={cn(
            "mt-16 relative overflow-hidden rounded-3xl p-10 text-center transition-all duration-700 delay-500",
            "bg-gradient-to-br from-blue-600 to-purple-600",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-100"
              >
                <Github className="h-5 w-5" />
                View GitHub Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
              >
                Let's Collaborate
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
      {/* {true && (
        <ProjectModal
          project={{
            title: "AI-Powered Task Manager",
            links: {
              demo: "https://taskmanager.ai/demo",
              github: "https://github.com/username/taskmanager-ai",
            },
            caseStudy: {
              overview:
                "An AI-driven task management application that helps teams organize, prioritize, and automate their workflows.",
              problem:
                "Traditional task managers lacked intelligent prioritization, often overwhelming users with too many tasks and no clear action plan.",
              solution:
                "We integrated machine learning models to analyze task urgency, dependencies, and team workload to automatically suggest an optimal task order.",
              features: [
                "AI-based task prioritization",
                "Smart reminders and notifications",
                "Collaboration with real-time updates",
                "Cross-platform support (web, mobile)",
                "Dark/Light mode with theme persistence",
              ],
              screenshots: [
                { title: "Dashboard Overview", color: "blue" },
                { title: "Task Details", color: "green" },
                { title: "Analytics & Insights", color: "purple" },
              ],
              technologies: [
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "Express",
                "MongoDB",
                "OpenAI API",
              ],
              challenges: [
                {
                  title: "Task Prioritization Algorithm",
                  solution:
                    "Implemented a hybrid model combining rule-based logic with machine learning to balance deadlines and importance.",
                },
                {
                  title: "Real-time Collaboration",
                  solution:
                    "Used WebSockets with Socket.io to synchronize task updates instantly across multiple clients.",
                },
                {
                  title: "Scalability",
                  solution:
                    "Optimized database queries with indexing and caching to handle thousands of concurrent users.",
                },
              ],
              results: [
                "Improved team productivity by 35%",
                "Reduced missed deadlines by 50%",
                "Positive feedback from beta testers with 4.8/5 satisfaction",
              ],
            },
          }}
          isOpen={true}
          onClose={() => {}}
        />
      )} */}
    </section>
  );
};

export default Projects;
