import { easeOut } from "framer-motion";
import { motion } from "framer-motion";

const statusBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const StatusBadge = ({ text }: { text: string }) => {
  return (
    <motion.div
      variants={statusBadgeVariants}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-teal-500/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="w-2 h-2 bg-teal-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-sm font-medium text-teal-300 relative z-10">
        {text}
      </span>
    </motion.div>
  );
};
