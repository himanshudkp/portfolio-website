"use client";

import { motion } from "framer-motion";

export const SectionContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <motion.div
    className="border border-gray-700 rounded-lg p-4 sm:p-5 mt-5"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    {title && (
      <motion.h4
        className="text-teal-400 font-semibold text-base mb-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h4>
    )}
    {children}
  </motion.div>
);
