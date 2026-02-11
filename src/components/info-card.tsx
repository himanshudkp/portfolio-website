"use client";

import { motion } from "framer-motion";
import { cardVariants } from "@/utils";

export const InfoCard = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "hover";
}) => (
  <motion.div
    className={`p-5 sm:p-6 rounded-xl border ${
      variant === "hover" ? "border-gray-700" : "border-gray-700"
    }`}
    variants={cardVariants}
    whileHover={
      variant === "hover"
        ? {
            scale: 1.01,
            borderColor: "rgba(20, 184, 166, 0.5)",
            boxShadow: "0 10px 40px rgba(20, 184, 166, 0.1)",
          }
        : undefined
    }
  >
    {children}
  </motion.div>
);
