import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillsContainerProps {
  children: ReactNode;
}

export const SkillsContainer = ({ children }: SkillsContainerProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-white/5 relative overflow-hidden"
        whileHover={{
          boxShadow: "0 25px 50px rgba(20, 184, 166, 0.1)",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
};
