import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Palette,
  Database,
  Cloud,
  GitBranch,
  AppWindow,
  Code2,
} from "lucide-react";
import { Tab } from "@/lib/types";
import { SectionHeader } from "../ui/section-header";
import { Tabs } from "../ui/tabs";
import { BadgeSingle } from "../ui/badge-single";
import { tabContentVariants } from "@/lib/utils";

interface Skill {
  category: string[];
  skill: string;
}

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const TABS: Tab[] = [
  { id: "all", label: "All", icon: AppWindow },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "styling", label: "Styling", icon: Palette },
  { id: "state", label: "State Management", icon: Database },
  { id: "backend", label: "Backend & Database", icon: Cloud },
  { id: "tools", label: "Tools & DevOps", icon: GitBranch },
];

const SKILLS: Skill[] = [
  { category: ["frontend", "all"], skill: "ReactJS" },
  { category: ["frontend", "all"], skill: "Next.js" },
  { category: ["frontend", "all"], skill: "TypeScript" },
  { category: ["frontend", "all"], skill: "JavaScript" },
  { category: ["frontend", "all"], skill: "HTML/CSS" },
  { category: ["mobile", "all"], skill: "React Native" },
  { category: ["mobile", "all"], skill: "Expo" },
  { category: ["mobile", "all"], skill: "iOS Development" },
  { category: ["mobile", "all"], skill: "Android Development" },
  { category: ["styling", "all"], skill: "Tailwind CSS" },
  { category: ["styling", "all"], skill: "SCSS" },
  { category: ["styling", "all"], skill: "Material UI" },
  { category: ["styling", "all"], skill: "Shadcn UI" },
  { category: ["styling", "all"], skill: "Responsive Design" },
  { category: ["state", "all"], skill: "Redux Toolkit" },
  { category: ["state", "all"], skill: "TanStack Query" },
  { category: ["state", "all"], skill: "Context API" },
  { category: ["backend", "all"], skill: "Node.js" },
  { category: ["backend", "all"], skill: "PostgreSQL" },
  { category: ["backend", "all"], skill: "Supabase" },
  { category: ["backend", "all"], skill: "REST APIs" },
  { category: ["backend", "all"], skill: "Socket.IO" },
  { category: ["tools", "all"], skill: "Git/GitHub" },
  { category: ["tools", "all"], skill: "VS Code" },
  { category: ["tools", "all"], skill: "Postman" },
  { category: ["tools", "all"], skill: "Vercel" },
  { category: ["tools", "all"], skill: "Performance Optimization" },
];

const SkillCategory = ({
  categoryName,
  count,
}: {
  categoryName: string;
  count: number;
}) => (
  <motion.div
    id="skills"
    className="flex items-center justify-between mb-5 pb-3 border-b border-gray-700"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <motion.h3
      className="text-lg font-semibold text-teal-400"
      whileHover={{ x: 5, color: "#5eead4" }}
    >
      {categoryName}
    </motion.h3>
    <motion.div
      className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full"
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-xs font-medium text-teal-300">{count} skills</span>
    </motion.div>
  </motion.div>
);

const EmptyState = () => (
  <motion.div
    className="text-center py-12"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
  >
    <motion.div
      className="w-20 h-20 mx-auto mb-5 bg-gray-800 rounded-full flex items-center justify-center"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Database size={36} className="text-gray-600" />
    </motion.div>
    <p className="text-gray-400 text-base">No skills found in this category</p>
  </motion.div>
);

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills = SKILLS.filter((s) =>
    s.category.includes(activeCategory),
  );

  const getCategoryName = () => {
    const tab = TABS.find((t) => t.id === activeCategory);
    return tab ? tab.label : "All";
  };

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
            tabs={TABS}
          />
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-white/5 relative overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px rgba(20, 184, 166, 0.1)",
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10"
              >
                {visibleSkills.length > 0 ? (
                  <>
                    <SkillCategory
                      categoryName={getCategoryName()}
                      count={visibleSkills.length}
                    />

                    <motion.div
                      className="flex flex-wrap gap-2.5"
                      variants={badgeContainerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {visibleSkills.map((s) => (
                        <BadgeSingle
                          text={s.skill}
                          variant="glow"
                          size="md"
                          key={s.skill}
                        />
                      ))}
                    </motion.div>

                    <motion.div
                      className="mt-6 pt-5 border-t border-gray-700 flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className="flex justify-center items-center rounded-lg px-4 py-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <motion.p
                          className="text-gray-100 text-xs sm:text-sm text-center max-w-xl"
                          whileHover={{ scale: 1.02 }}
                        >
                          Continuously learning and expanding my skill set to
                          stay at the forefront of technology
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </>
                ) : (
                  <EmptyState />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
