"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { memo } from "react";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = memo(({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="relative lg:hidden rounded-lg border p-2 border-gray-700/50 text-white hover:bg-gray-800 cursor-pointer overflow-hidden"
      aria-label="Toggle menu"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative h-5 w-5"
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isOpen ? 90 : 0,
            scale: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Menu className="absolute inset-0" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isOpen ? 0 : -90,
            scale: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <X className="absolute inset-0" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
});
