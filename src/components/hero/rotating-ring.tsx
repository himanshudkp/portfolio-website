"use client";

import { motion } from "framer-motion";
import { SIZE } from "@/lib/constants";
import { polarToXY } from "@/lib/utils";
import type { TechItem } from "@/lib/types";

interface RingProps {
  items: readonly TechItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}

const RotatingRing = ({
  items,
  radius,
  duration,
  reverse = false,
}: RingProps) => {
  const rotation = reverse ? -360 : 360;
  const counterRotation = reverse ? 360 : -360;

  return (
    <motion.div
      className="absolute"
      style={{ width: SIZE, height: SIZE }}
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((tech, i) => {
        const { x, y } = polarToXY(i, items.length, radius);
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.label}
            className="group absolute flex flex-col items-center"
            style={{ left: x - 20, top: y - 20 }}
            animate={{ rotate: counterRotation }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.4 }}
          >
            <Icon
              size={28}
              className={`transition-all duration-300 ${tech.color} ${tech.glow}`}
            />
            <span
              className={`mt-1 text-[10px] tracking-wide transition-all duration-300 ${tech.color}`}
            >
              {tech.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

RotatingRing.displayName = "RotatingRing";
export default RotatingRing;
