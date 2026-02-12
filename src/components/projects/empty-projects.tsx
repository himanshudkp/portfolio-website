import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({
  message = "No projects found in this category.",
}: EmptyStateProps) => {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <FolderOpen size={32} className="text-gray-500" />
      </motion.div>
      <p className="text-gray-400 text-base">{message}</p>
    </motion.div>
  );
};
