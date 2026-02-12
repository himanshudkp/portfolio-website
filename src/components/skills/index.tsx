"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Tabs } from "../ui/tabs";
import { tabContentVariants } from "@/lib/utils";
import { useSkills } from "@/hooks/useSkills";
import { SKILLS_TABS } from "@/lib/constants";
import { SkillsContainer } from "./skill-container";
import { SkillCategory } from "./skill-category";
import { SkillBadges } from "./skill-badges";
import { SkillsFooter } from "./skill-footer";
import { SkillsEmptyState } from "./empty-skills";

export const Skills = () => {
  const { activeCategory, setActiveCategory, visibleSkills, getCategoryName } =
    useSkills();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16">
          <SectionHeader
            title="Skills"
            description="Mastering modern technologies for exceptional results"
          />
        </div>

        <div className="mb-11">
          <Tabs
            activeTab={activeCategory}
            onChange={setActiveCategory}
            tabs={SKILLS_TABS}
          />
        </div>

        <SkillsContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {visibleSkills.length > 0 ? (
                <>
                  <SkillCategory
                    categoryName={getCategoryName()}
                    count={visibleSkills.length}
                  />

                  <SkillBadges skills={visibleSkills} />

                  <SkillsFooter />
                </>
              ) : (
                <SkillsEmptyState />
              )}
            </motion.div>
          </AnimatePresence>
        </SkillsContainer>
      </div>
    </div>
  );
};
