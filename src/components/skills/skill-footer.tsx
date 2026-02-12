import { motion } from "framer-motion";

export const SkillsFooter = () => {
  return (
    <motion.div
      className="mt-6 pt-5 border-t border-gray-700 flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="flex justify-center items-center rounded-lg px-4 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.p
          className="text-gray-100 text-xs sm:text-sm text-center max-w-xl"
          whileHover={{ scale: 1.02 }}
        >
          Continuously learning and expanding my skill set to stay at the
          forefront of technology
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
