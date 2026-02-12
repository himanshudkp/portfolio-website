import { motion } from "framer-motion";
import { Code, X } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectModalHeaderProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModalHeader = ({
  project,
  onClose,
}: ProjectModalHeaderProps) => {
  return (
    <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-5 flex items-center justify-between z-10">
      <motion.div
        className="flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <Code size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-teal-300">{project.title}</h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            {project.shortDesc}
          </p>
        </div>
      </motion.div>
      <motion.button
        onClick={onClose}
        className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={20} className="text-gray-300" />
      </motion.button>
    </div>
  );
};
