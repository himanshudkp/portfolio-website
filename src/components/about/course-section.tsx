import { motion } from "framer-motion";
import { COURSES_CERTIFICATIONS_DATA } from "@/data";
import { containerVariants } from "@/utils";
import { CoursesCertificationsCard } from "./course-card";

export const CoursesCertificationsSection = () => (
  <motion.div
    className="space-y-6"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {COURSES_CERTIFICATIONS_DATA.map((course) => (
      <CoursesCertificationsCard key={course.id} {...course} />
    ))}
  </motion.div>
);
