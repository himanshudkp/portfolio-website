"use client";

import { motion } from "framer-motion";

export const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="text-teal-400 font-medium"
    whileHover={{ scale: 1.02, color: "#5eead4" }}
    style={{ display: "inline-block" }}
  >
    {children}
  </motion.span>
);
