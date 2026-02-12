import { motion } from "framer-motion";
import { EDUCATION_DATA } from "@/lib/constants";
import { containerVariants } from "@/lib/utils";
import { EducationCard } from "./edu-card";

export const EducationSection = () => (
  <motion.div
    className="space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {EDUCATION_DATA.map((education) => (
      <EducationCard key={education.id} {...education} />
    ))}
  </motion.div>
);
