import { easeOut, motion } from "framer-motion";

export const Separator = () => {
  return (
    <motion.div
      className="my-20 flex items-center justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="h-1 w-full max-w-md bg-gradient-to-r from-transparent via-teal-500/50 to-transparent rounded-full" />
    </motion.div>
  );
};
