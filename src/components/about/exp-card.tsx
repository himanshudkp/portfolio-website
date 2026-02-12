import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { WorkProject } from "@/lib/types";
import { containerVariants, itemVariants } from "@/lib/utils";
import { BadgeSingle } from "../ui/badge-single";
import { HighlightText } from "../ui/highlight-text";
import { LocationPin } from "../ui/location-pin";
import { InfoCard } from "../ui/info-card";
import { SectionContainer } from "../ui/section-container";
import { Fragment } from "react";
import { EXPERIENCE_DATA } from "@/lib/constants";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  projects: WorkProject[];
  technologies: string[];
}

const DESCRIPTION_HIGHLIGHTS = [
  "React",
  "Next.js",
  "React Native",
  "Heaptrace Technology",
  "AI-powered features",
  "TypeScript",
  "modern state management",
  "production-ready solutions",
  "healthcare",
  "recruitment",
  "energy management platforms",
];

export const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  isCurrent,
  description,
  projects,
  technologies,
}: ExperienceCardProps) => {
  const { highlights } = EXPERIENCE_DATA[0];
  const renderDescription = (text: string) => {
    return text
      .split(new RegExp(`(${highlights.join("|")})`, "g"))
      .map((part, idx) =>
        highlights.includes(part) ? (
          <HighlightText key={idx}>{part}</HighlightText>
        ) : (
          <Fragment key={idx}>{part}</Fragment>
        ),
      );
  };

  return (
    <InfoCard variant={isCurrent ? "hover" : "default"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
              <motion.h3
                className="text-lg sm:text-xl font-bold text-teal-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {title}
              </motion.h3>
              <BadgeSingle text={duration} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <p>{company}</p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <LocationPin location={location} />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-gray-300 leading-relaxed mb-5 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {renderDescription(description)}
        </motion.p>

        <SectionContainer title="Key Projects">
          <motion.ul
            className="space-y-2.5 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, idx) => (
              <motion.li
                key={idx}
                className="leading-relaxed text-sm sm:text-base"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-teal-300">
                  {project.name}{" "}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-300 hover:text-teal-400 transition-colors cursor-pointer"
                    aria-label={`Open ${project.name} project`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 inline-block" />
                  </motion.a>{" "}
                  —{" "}
                </span>
                <span className="text-gray-300">{project.description}</span>
              </motion.li>
            ))}
          </motion.ul>
        </SectionContainer>

        <SectionContainer title="Technology Used">
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((tech, idx) => (
              <BadgeSingle text={tech} variant="glow" size="md" key={idx} />
            ))}
          </motion.div>
        </SectionContainer>
      </motion.div>
    </InfoCard>
  );
};
