import { containerVariants } from "@/utils";
import { easeOut, motion } from "framer-motion";
import React from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-teal-300 mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      <motion.p className="text-gray-400 text-lg" variants={itemVariants}>
        {description}
      </motion.p>
    </motion.div>
  );
};
