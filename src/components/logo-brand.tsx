import { LOGO_CONTENT } from "@/content";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const LogoBrand = () => {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-2.5 group"
      variants={logoVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur-md opacity-75"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="relative w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white font-bold text-lg">
            {LOGO_CONTENT.initials}
          </span>
        </motion.div>
      </div>
      <motion.span
        className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent hidden sm:block"
        whileHover={{ scale: 1.05 }}
      >
        {LOGO_CONTENT.name}
      </motion.span>
    </motion.a>
  );
};
