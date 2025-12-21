"use client";

import { itemVariants } from "@/utils";
import { motion } from "framer-motion";

export const Description = () => (
  <motion.p
    variants={itemVariants}
    className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 text-gray-100/90 pb-3"
  >
    Full-stack developer focused on building scalable web and mobile
    applications using&nbsp;
    <span className="font-semibold text-teal-400">React, Next.js</span>, and
    &nbsp;
    <span className="font-semibold text-teal-400 inline-block">Node.js</span>. I
    also build cross-platform mobile apps with&nbsp;
    <span className="font-semibold text-teal-400 inline-block">
      React Native
    </span>
    , integrating&nbsp;
    <span className="font-semibold text-teal-400 inline-block">
      AI-powered features&nbsp;
    </span>
    to deliver clean, performant, and user-focused digital experiences.
  </motion.p>
);
