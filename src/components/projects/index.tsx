"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { containerVariants } from "@/lib/utils";
import { SectionHeader } from "../ui/section-header";
import { Tabs } from "../ui/tabs";
import { CustomButton } from "../ui/custom-button";
import { useProjects } from "@/hooks/useProjects";
import { PROJECTS_TABS } from "@/lib/constants";
import { ProjectCard } from "./project-card";
import { EmptyState } from "./empty-projects";
import { ProjectModal } from "./project-modal";

export const Projects = () => {
  const {
    selectedProject,
    activeTab,
    filteredProjects,
    handleTabChange,
    handleCloseModal,
    handleViewProject,
  } = useProjects();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projects"
          description="Building innovative solutions with modern technology"
        />

        <Tabs
          tabs={PROJECTS_TABS}
          activeTab={activeTab}
          onChange={handleTabChange}
        />

        <motion.div
          className="rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-white/5 mt-11"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
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

          {filteredProjects.length === 0 && <EmptyState />}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CustomButton
            variant="primary"
            className="rounded-full px-8 py-3"
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
