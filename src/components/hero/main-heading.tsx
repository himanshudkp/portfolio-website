"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/utils";

const MainHeading = () => {
  return (
    <div className="space-y-2.5">
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight pt-5"
      >
        Hi, I'm{" "}
      </motion.h1>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
      >
        <span className="">Himanshu Pandey</span>
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-base sm:text-lg lg:text-xl font-medium text-teal-300/80"
      >
        Full-Stack Engineer • Web, Mobile & AI
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base text-gray-400/90 pt-1"
      >
        Building AI-powered products serving{" "}
        <span className="text-teal-400 font-semibold">30,000+ users</span>
      </motion.p>
    </div>
  );
};

MainHeading.displayName = "MainHeading";
export default MainHeading;
