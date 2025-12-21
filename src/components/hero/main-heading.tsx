"use client";

import { easeOut, motion } from "framer-motion";
import { Code2 } from "lucide-react";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
} as const;

export const MainHeading = () => (
  <motion.div variants={headingVariants} className="space-y-5">
    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-gray-100">
      Hi, I&apos;m{" "}
      <span className="relative inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
        Himanshu Pandey
      </span>
    </h1>
    <p className="text-base font-medium text-teal-300/80 flex items-center gap-2 pt-2 justify-center text-center lg:justify-start lg:text-left ">
      <Code2 className="hidden sm:inline-block h-5 w-5 text-teal-400 relative z-10" />
      Full-Stack Developer • Web, Mobile & AI • 2+ Years
    </p>
  </motion.div>
);
