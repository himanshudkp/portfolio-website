import { motion } from "framer-motion";

const LOGO_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
} as const;

export const PortfolioLogo = () => {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-2.5 group"
      variants={LOGO_VARIANTS}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur-md opacity-75"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">HP</span>
        </div>
      </div>
    </motion.a>
  );
};
