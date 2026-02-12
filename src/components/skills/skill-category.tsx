import { motion } from "framer-motion";

export interface SkillCategoryProps {
  categoryName: string;
  count: number;
}

export const SkillCategory = ({ categoryName, count }: SkillCategoryProps) => {
  return (
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
        <span className="text-xs font-medium text-teal-300">
          {count} skills
        </span>
      </motion.div>
    </motion.div>
  );
};
