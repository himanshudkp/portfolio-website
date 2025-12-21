/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Database,
  Cloud,
  AppWindow,
  Code,
  X,
} from "lucide-react";
import type { Project, Tab } from "@/types";
import { cardVariants, containerVariants, itemVariants } from "@/utils";
import { BadgeGroup } from "../ui/badge-group";
import { SectionHeader } from "../section-header";
import { Tabs } from "../ui/tabs";
import { CustomButton } from "../ui/custom-button";

const TABS: Tab[] = [
  { icon: AppWindow, id: "all", label: "All" },
  { icon: Code, id: "frontend", label: "Frontend" },
  { icon: Cloud, id: "backend", label: "Backend" },
  { icon: Smartphone, id: "mobile", label: "Mobile" },
  { icon: Database, id: "fullstack", label: "Fullstack" },
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Jobbrella",
    shortDesc: "AI-Powered Recruitment Platform for modern hiring",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    topTools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
    ],
    fullDescription:
      "Built and maintained responsive, brand-aligned UIs for a comprehensive recruitment platform.",
    features: [
      "Dynamic job ad creation with AI-powered content generation",
      "Real-time candidate tracking and management system",
      "Optimistic UI updates with TanStack Query",
    ],
    allTech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
    ],
    githubUrl: "#",
    liveUrl: "#",
    categories: ["frontend", "fullstack"],
  },
  {
    id: 2,
    title: "Motkraft",
    shortDesc: "Real-time Electricity Consumption Tracking Platform",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    topTools: [
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
    ],
    fullDescription:
      "Developed comprehensive mobile and web applications enabling 30K+ users.",
    features: [
      "Multi-meter onboarding system",
      "Real-time electricity consumption monitoring",
      "Interactive visualizations",
    ],
    allTech: [
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
    ],
    githubUrl: "#",
    liveUrl: "#",
    categories: ["mobile", "fullstack"],
  },
  {
    id: 3,
    title: "GreenFlex",
    shortDesc: "EV Charging & Scheduling Dashboard Solution",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    topTools: [
      "React.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Chart.js",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
      "React Native",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Expo",
    ],
    fullDescription:
      "Developed the GreenFlex EV Charging Dashboard with dynamic data visualizations.",
    features: [
      "Real-time EV charging status monitoring",
      "Dynamic data visualization",
      "Intelligent scheduling system",
    ],
    allTech: [
      "React.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Chart.js",
    ],
    githubUrl: "#",
    liveUrl: "#",
    categories: ["mobile", "fullstack"],
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectCard = ({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: () => void;
}) => {
  return (
    <motion.div
      id="projects"
      className="group relative rounded-2xl border border-gray-700 overflow-hidden"
      variants={cardVariants}
      whileHover={{
        y: -8,
        borderColor: "rgba(20, 184, 166, 0.5)",
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
        />
      </motion.div>

      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold text-teal-300 mb-2"
          whileHover={{ x: 5, color: "#5eead4" }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        <div className="mb-6">
          <p className="text-teal-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            Tech Stack
          </p>
          <BadgeGroup
            badges={project.topTools}
            variant="glow"
            size="md"
            maxDisplay={5}
          />
        </div>

        <motion.div className="flex gap-2" variants={containerVariants}>
          <CustomButton
            onClick={onViewDetails}
            variant="primary"
            className="flex-1"
          >
            View Project
          </CustomButton>
          <CustomButton
            href={project.githubUrl}
            icon={Github}
            variant="secondary"
          />
          <CustomButton
            href={project.liveUrl}
            icon={ExternalLink}
            variant="outline"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl border border-teal-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between z-10">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-teal-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm">{project.shortDesc}</p>
              </div>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} className="text-gray-300" />
            </motion.button>
          </div>

          <motion.div
            className="p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                className="lg:col-span-2 space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-teal-500 rounded-full" />
                    Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {project.fullDescription}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-teal-500 rounded-full" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-teal-400 mt-1">▸</span>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-teal-500 rounded-full" />
                    Technologies Used
                  </h3>
                  <BadgeGroup
                    badges={project.allTech}
                    variant="glow"
                    size="lg"
                  />
                </motion.div>
              </motion.div>

              <motion.aside
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="space-y-3" variants={itemVariants}>
                  <CustomButton
                    href={project.liveUrl}
                    variant="primary"
                    className="w-full"
                    icon={ExternalLink}
                  >
                    View Live Project
                  </CustomButton>
                  <CustomButton
                    href={project.githubUrl}
                    variant="secondary"
                    className="w-full"
                    icon={Github}
                  >
                    View Source Code
                  </CustomButton>
                </motion.div>
              </motion.aside>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(activeTab));
  }, [activeTab]);

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleViewProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projects"
          description="Building innovative solutions with modern technology"
        />

        <Tabs tabs={TABS} activeTab={activeTab} onChange={handleTabChange} />

        <motion.div
          className="rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/5 mt-11"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={() => handleViewProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="flex justify-center mt-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CustomButton
            variant="primary"
            className="rounded-full px-10 py-4"
            icon={ExternalLink}
          >
            View all projects
          </CustomButton>
        </motion.div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};
