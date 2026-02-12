import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { containerVariants, itemVariants } from "@/lib/utils";
import { BadgeGroup } from "../ui/badge-group";

interface ProjectModalContentProps {
  project: Project;
}

export const ProjectModalContent = ({ project }: ProjectModalContentProps) => {
  return (
    <motion.div
      className="lg:col-span-2 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
          <div className="w-1 h-5 bg-teal-500 rounded-full" />
          Overview
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {project.fullDescription}
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
          <div className="w-1 h-5 bg-teal-500 rounded-full" />
          Key Features
        </h3>
        <ul className="space-y-2.5">
          {project.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-2.5 text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <span className="text-teal-400 mt-0.5">▸</span>
              <span className="text-xs sm:text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center gap-2">
          <div className="w-1 h-5 bg-teal-500 rounded-full" />
          Technologies Used
        </h3>
        <BadgeGroup badges={project.allTech} variant="glow" size="lg" />
      </motion.div>
    </motion.div>
  );
};
