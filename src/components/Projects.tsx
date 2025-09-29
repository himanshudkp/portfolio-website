import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  FileText,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import CaseStudyModal from "./CaseStydyModal";

// Case Study Data Structure
export const projectsData = [
  {
    title: "Jobbrella – AI-Powered Recruitment",
    description:
      "Built responsive UIs for recruitment platform with dynamic job ad creation, candidate tracking, and AI-driven features using OpenAI APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
    stats: { users: "10K+", impact: "50% faster hiring" },
    links: {
      demo: "https://demo.jobbrella.com",
      github: "https://github.com/yourusername/jobbrella",
    },
    caseStudy: {
      overview:
        "Jobbrella is an AI-powered recruitment platform that revolutionizes the hiring process by automating job ad creation, candidate tracking, and matching using advanced AI algorithms.",
      problem:
        "Traditional recruitment processes are time-consuming, with recruiters spending hours creating job postings, screening candidates, and managing applications. Companies struggle with high time-to-hire rates and often miss qualified candidates.",
      solution:
        "Developed an intelligent platform that uses OpenAI APIs to automatically generate compelling job listings, track candidates through the hiring pipeline, and provide real-time collaboration features for hiring teams.",
      features: [
        "AI-powered job ad generation with brand alignment",
        "Real-time candidate tracking and status updates",
        "Automated candidate screening and ranking",
        "Socket.IO integration for instant notifications",
        "Advanced analytics dashboard for hiring metrics",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Socket.IO",
        "OpenAI API",
        "PostgreSQL",
      ],
      challenges: [
        {
          title: "Real-time Collaboration",
          solution:
            "Implemented Socket.IO for instant updates across multiple users viewing the same candidate pipeline",
        },
        {
          title: "API Performance",
          solution:
            "Used TanStack Query for intelligent caching and optimistic updates, reducing API calls by 60%",
        },
      ],
      results: [
        "50% reduction in time-to-hire",
        "10K+ active users within 6 months",
        "95% user satisfaction rating",
        "3x increase in quality candidate matches",
      ],
      screenshots: [
        { title: "Dashboard", color: "from-blue-400 to-cyan-400" },
        { title: "AI Job Creator", color: "from-purple-400 to-pink-400" },
        { title: "Candidate Pipeline", color: "from-green-400 to-emerald-400" },
      ],
    },
  },
  {
    title: "Motkraft – Energy Tracking App",
    description:
      "Developed electricity consumption tracking app for 30K+ users with real-time monitoring, multi-meter management, and admin panel.",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Expo"],
    gradient: "from-green-500 to-emerald-500",
    icon: Users,
    stats: { users: "30K+", impact: "Real-time tracking" },
    links: {
      demo: "https://demo.motkraft.com",
      github: "https://github.com/yourusername/motkraft",
    },
    caseStudy: {
      overview:
        "Motkraft is a comprehensive energy management platform that enables users to monitor electricity consumption across multiple meters in real-time, helping reduce energy costs and promote sustainable usage.",
      problem:
        "Consumers lack visibility into their real-time electricity consumption, making it difficult to identify energy waste and optimize usage. Managing multiple meters across different locations was cumbersome.",
      solution:
        "Built a cross-platform mobile app using React Native that provides real-time energy monitoring, multi-meter management, guest access sharing, and detailed analytics with interactive visualizations.",
      features: [
        "Real-time electricity consumption tracking",
        "Multi-meter onboarding and management",
        "Interactive line and bar chart visualizations",
        "Guest user management with secure sharing",
        "Push notifications for usage alerts",
        "Back office admin panel for customer support",
      ],
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Redux Toolkit",
        "Chart.js",
        "React.js",
        "Tailwind CSS",
      ],
      challenges: [
        {
          title: "Real-time Data Sync",
          solution:
            "Implemented efficient Redux state management with optimized API polling to provide near-real-time updates without draining battery",
        },
        {
          title: "Cross-platform Performance",
          solution:
            "Used React Native best practices and memoization to ensure smooth 60fps animations on both iOS and Android",
        },
      ],
      results: [
        "30K+ active users",
        "25% average reduction in electricity costs",
        "4.7/5 app store rating",
        "500K+ meters monitored daily",
      ],
      screenshots: [
        { title: "Home Dashboard", color: "from-green-400 to-emerald-400" },
        { title: "Usage Analytics", color: "from-blue-400 to-cyan-400" },
        { title: "Admin Panel", color: "from-purple-400 to-pink-400" },
      ],
    },
  },
  {
    title: "GreenFlex – EV Charging Dashboard",
    description:
      "Built EV charging dashboard with dynamic data visualizations, bidding, optimization, and scheduling features.",
    tags: ["ReactJS", "Redux Toolkit", "Chart.js", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
    icon: Sparkles,
    stats: { users: "5K+", impact: "Smart optimization" },
    links: {
      demo: "https://demo.greenflex.com",
      github: "https://github.com/yourusername/greenflex",
    },
    caseStudy: {
      overview:
        "GreenFlex is an intelligent EV charging management system that optimizes charging schedules based on electricity prices, grid demand, and user preferences, helping EV owners save costs while supporting grid stability.",
      problem:
        "EV owners face high charging costs during peak hours and lack tools to optimize charging schedules. Grid operators struggle with managing increased load from EV charging.",
      solution:
        "Developed a comprehensive dashboard and mobile app that provides real-time pricing data, automated bidding for optimal charging slots, smart scheduling algorithms, and seamless EV onboarding.",
      features: [
        "Real-time electricity pricing visualization",
        "Automated bidding system for charging slots",
        "AI-powered charging optimization",
        "Flexible scheduling with user preferences",
        "Multi-EV management",
        "Mobile app for remote control",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Chart.js",
        "TypeScript",
        "React Native",
        "Expo",
        "Axios",
      ],
      challenges: [
        {
          title: "Complex Data Visualization",
          solution:
            "Leveraged Chart.js with custom plugins to create interactive, real-time charts showing pricing trends and optimization recommendations",
        },
        {
          title: "Optimization Algorithms",
          solution:
            "Collaborated closely with backend team to integrate complex optimization algorithms with intuitive UI controls",
        },
      ],
      results: [
        "5K+ EVs managed",
        "40% reduction in charging costs",
        "Peak load reduced by 30%",
        "99.8% scheduling accuracy",
      ],
      screenshots: [
        { title: "Pricing Dashboard", color: "from-purple-400 to-pink-400" },
        { title: "Optimization View", color: "from-blue-400 to-indigo-400" },
        { title: "Mobile App", color: "from-green-400 to-teal-400" },
      ],
    },
  },
  {
    title: "Jobbrella – AI-Powered Recruitment",
    description:
      "Built responsive UIs for recruitment platform with dynamic job ad creation, candidate tracking, and AI-driven features using OpenAI APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
    stats: { users: "10K+", impact: "50% faster hiring" },
    links: {
      demo: "https://demo.jobbrella.com",
      github: "https://github.com/yourusername/jobbrella",
    },
    caseStudy: {
      overview:
        "Jobbrella is an AI-powered recruitment platform that revolutionizes the hiring process by automating job ad creation, candidate tracking, and matching using advanced AI algorithms.",
      problem:
        "Traditional recruitment processes are time-consuming, with recruiters spending hours creating job postings, screening candidates, and managing applications. Companies struggle with high time-to-hire rates and often miss qualified candidates.",
      solution:
        "Developed an intelligent platform that uses OpenAI APIs to automatically generate compelling job listings, track candidates through the hiring pipeline, and provide real-time collaboration features for hiring teams.",
      features: [
        "AI-powered job ad generation with brand alignment",
        "Real-time candidate tracking and status updates",
        "Automated candidate screening and ranking",
        "Socket.IO integration for instant notifications",
        "Advanced analytics dashboard for hiring metrics",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Socket.IO",
        "OpenAI API",
        "PostgreSQL",
      ],
      challenges: [
        {
          title: "Real-time Collaboration",
          solution:
            "Implemented Socket.IO for instant updates across multiple users viewing the same candidate pipeline",
        },
        {
          title: "API Performance",
          solution:
            "Used TanStack Query for intelligent caching and optimistic updates, reducing API calls by 60%",
        },
      ],
      results: [
        "50% reduction in time-to-hire",
        "10K+ active users within 6 months",
        "95% user satisfaction rating",
        "3x increase in quality candidate matches",
      ],
      screenshots: [
        { title: "Dashboard", color: "from-blue-400 to-cyan-400" },
        { title: "AI Job Creator", color: "from-purple-400 to-pink-400" },
        { title: "Candidate Pipeline", color: "from-green-400 to-emerald-400" },
      ],
    },
  },
  {
    title: "Jobbrella – AI-Powered Recruitment",
    description:
      "Built responsive UIs for recruitment platform with dynamic job ad creation, candidate tracking, and AI-driven features using OpenAI APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
    stats: { users: "10K+", impact: "50% faster hiring" },
    links: {
      demo: "https://demo.jobbrella.com",
      github: "https://github.com/yourusername/jobbrella",
    },
    caseStudy: {
      overview:
        "Jobbrella is an AI-powered recruitment platform that revolutionizes the hiring process by automating job ad creation, candidate tracking, and matching using advanced AI algorithms.",
      problem:
        "Traditional recruitment processes are time-consuming, with recruiters spending hours creating job postings, screening candidates, and managing applications. Companies struggle with high time-to-hire rates and often miss qualified candidates.",
      solution:
        "Developed an intelligent platform that uses OpenAI APIs to automatically generate compelling job listings, track candidates through the hiring pipeline, and provide real-time collaboration features for hiring teams.",
      features: [
        "AI-powered job ad generation with brand alignment",
        "Real-time candidate tracking and status updates",
        "Automated candidate screening and ranking",
        "Socket.IO integration for instant notifications",
        "Advanced analytics dashboard for hiring metrics",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Socket.IO",
        "OpenAI API",
        "PostgreSQL",
      ],
      challenges: [
        {
          title: "Real-time Collaboration",
          solution:
            "Implemented Socket.IO for instant updates across multiple users viewing the same candidate pipeline",
        },
        {
          title: "API Performance",
          solution:
            "Used TanStack Query for intelligent caching and optimistic updates, reducing API calls by 60%",
        },
      ],
      results: [
        "50% reduction in time-to-hire",
        "10K+ active users within 6 months",
        "95% user satisfaction rating",
        "3x increase in quality candidate matches",
      ],
      screenshots: [
        { title: "Dashboard", color: "from-blue-400 to-cyan-400" },
        { title: "AI Job Creator", color: "from-purple-400 to-pink-400" },
        { title: "Candidate Pipeline", color: "from-green-400 to-emerald-400" },
      ],
    },
  },
];

export default function Projects() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseStudy = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

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
          <div className="text-center mb-16">
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
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A showcase of my recent work and contributions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
              const IconComponent = project.icon;

              return (
                <div
                  key={index}
                  className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    isDark
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl"
                      : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
                  }`}
                >
                  {/* Project Banner with Icon */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-gray-800">
                      {project.stats.users}
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
                      {project.stats.impact}
                    </div>
                    <p
                      className={`mb-4 text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2.5 py-1 text-xs rounded-lg font-medium ${
                            isDark
                              ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                              : "bg-gray-100 text-gray-700 border border-gray-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span
                          className={`px-2.5 py-1 text-xs rounded-lg font-medium ${
                            isDark ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          +{project.tags.length - 3} more
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
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => openCaseStudy(project)}
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                          isDark
                            ? "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        }`}
                        title="Read Case Study"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
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
