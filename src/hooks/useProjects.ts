"use client";

import { useState, useMemo, useCallback } from "react";
import type { Project } from "@/lib/types";
import { PROJECTS } from "@/lib/constants";

export const useProjects = () => {
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

  return {
    selectedProject,
    activeTab,
    filteredProjects,
    handleTabChange,
    handleCloseModal,
    handleViewProject,
  };
};
