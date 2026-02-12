import { motion } from "framer-motion";
import { Database } from "lucide-react";

export const SkillsEmptyState = () => {
  return (
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
      <p className="text-gray-400 text-base">
        No skills found in this category
      </p>
    </motion.div>
  );
};
