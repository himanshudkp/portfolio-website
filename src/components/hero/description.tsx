"use client";

import { itemVariants } from "@/utils";
import { motion } from "framer-motion";

// I build and ship scalable applications using React, Next.js, Node.js, and React Native — integrating LLM-driven features into secure, high-performance systems across healthcare, energy, and recruitment platforms.

export const Description = () => (
  <motion.p
    variants={itemVariants}
    className="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base lg:mx-0 text-gray-100/80"
  >
    I build and ship scalable applications using{" "}
    <span className="font-semibold text-teal-400">
      React, Next.js, Node.js, and React Native{" "}
    </span>
    — integrating{" "}
    <span className="font-semibold text-teal-400">LLM-driven features</span>{" "}
    into secure, high-performance systems across healthcare, energy, and
    recruitment platforms.
  </motion.p>
);
