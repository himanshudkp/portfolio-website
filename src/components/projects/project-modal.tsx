import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";
import { backdropVariants, modalVariants } from "@/lib/utils";
import { ProjectModalHeader } from "./modal-header";
import { ProjectModalContent } from "./modal-content";
import { ProjectModalSidebar } from "./modal-sidebar";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl border border-teal-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <ProjectModalHeader project={project} onClose={onClose} />

          <motion.div
            className="p-5 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="relative h-56 sm:h-72 rounded-xl overflow-hidden mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              <ProjectModalContent project={project} />
              <ProjectModalSidebar project={project} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
