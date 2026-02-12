import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { containerVariants, itemVariants } from "@/lib/utils";
import { CustomButton } from "../ui/custom-button";

interface ProjectModalSidebarProps {
  project: Project;
}

export const ProjectModalSidebar = ({ project }: ProjectModalSidebarProps) => {
  return (
    <motion.aside
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-2.5" variants={itemVariants}>
        <CustomButton
          href={project.liveUrl}
          variant="primary"
          className="w-full"
          icon={ExternalLink}
        >
          View Live Project
        </CustomButton>
        <CustomButton
          href={project.githubUrl}
          variant="secondary"
          className="w-full"
          icon={Github}
        >
          View Source Code
        </CustomButton>
      </motion.div>
    </motion.aside>
  );
};
