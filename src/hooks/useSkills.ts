"use client";

import { SKILLS, SKILLS_TABS } from "@/lib/constants";
import { Skill } from "@/lib/types";
import { useState, useMemo } from "react";

export const useSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills = useMemo(
    () => SKILLS.filter((s) => s.category.includes(activeCategory)),
    [activeCategory],
  );

  const getCategoryName = () => {
    const tab = SKILLS_TABS.find((t) => t.id === activeCategory);
    return tab ? tab.label : "All";
  };

  const getSkillsByCategory = (category: string): Skill[] => {
    return SKILLS.filter((s) => s.category.includes(category));
  };

  const getTotalSkillsCount = () => {
    return SKILLS.length;
  };

  const getCategoryCount = (category: string) => {
    return SKILLS.filter((s) => s.category.includes(category)).length;
  };

  return {
    activeCategory,
    setActiveCategory,
    visibleSkills,
    getCategoryName,
    getSkillsByCategory,
    getTotalSkillsCount,
    getCategoryCount,
  };
};
