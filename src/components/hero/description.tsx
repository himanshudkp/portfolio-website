"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/utils";

const Description = () => (
  <motion.p
    variants={itemVariants}
    className="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base lg:mx-0 text-gray-100/80"
  >
    I build and ship scalable{" "}
    <span className="font-semibold text-teal-400">
      web and mobile applications
    </span>{" "}
    using{" "}
    <span className="font-semibold text-teal-400">
      React, Next.js, React Native, and Node.js
    </span>{" "}
    — integrating{" "}
    <span className="font-semibold text-teal-400">LLM-driven features</span>{" "}
    into{" "}
    <span className="font-semibold text-teal-400">
      secure, high-performance systems
    </span>{" "}
    across{" "}
    <span className="font-semibold text-teal-400">
      healthcare, energy, and recruitment platforms
    </span>
    .
  </motion.p>
);

Description.displayName = "Description";
export default Description;
