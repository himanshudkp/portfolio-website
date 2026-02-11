import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data";
import { containerVariants } from "@/utils";
import { ExperienceCard } from "./exp-card";

export const ExperienceSection = () => (
  <motion.div
    className="space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {EXPERIENCE_DATA.map((experience) => (
      <ExperienceCard key={experience.id} {...experience} />
    ))}
  </motion.div>
);
