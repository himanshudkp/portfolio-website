import { itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";

export const Description = () => (
  <motion.p
    variants={itemVariants}
    className="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base lg:mx-0 text-gray-100/80"
  >
    I build and ship scalable applications using{" "}
    <span className="font-semibold text-teal-400">
      React, Next.js, Node.js, FastAPI and React Native{" "}
    </span>
    — integrating{" "}
    <span className="font-semibold text-teal-400">LLM-driven features</span>{" "}
    into secure, high-performance systems across healthcare, energy, and
    recruitment platforms.
  </motion.p>
);
