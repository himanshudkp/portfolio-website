import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { cardVariants, containerVariants } from "@/lib/utils";
import { BadgeGroup } from "../ui/badge-group";
import { CustomButton } from "../ui/custom-button";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      id="projects"
      className="group relative rounded-xl border border-gray-700 overflow-hidden"
      variants={cardVariants}
      whileHover={{
        y: -6,
        borderColor: "rgba(20, 184, 166, 0.5)",
        boxShadow: "0 15px 35px rgba(20, 184, 166, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.div className="relative h-44 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
        />
      </motion.div>

      <div className="p-5">
        <motion.h3
          className="text-xl font-bold text-teal-300 mb-1.5"
          whileHover={{ x: 5, color: "#5eead4" }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        <div className="mb-5">
          <p className="text-teal-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            Tech Stack
          </p>
          <BadgeGroup
            badges={project.topTools}
            variant="glow"
            size="md"
            maxDisplay={5}
          />
        </div>

        <motion.div className="flex gap-2" variants={containerVariants}>
          <CustomButton
            onClick={onViewDetails}
            variant="primary"
            className="flex-1"
          >
            View Project
          </CustomButton>
          <CustomButton
            href={project.githubUrl}
            icon={Github}
            variant="secondary"
          />
          <CustomButton
            href={project.liveUrl}
            icon={ExternalLink}
            variant="outline"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
