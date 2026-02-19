"use client";

import { motion } from "framer-motion";
import { TbBrain } from "react-icons/tb";
import RotatingRing from "./rotating-ring";
import { containerVariants } from "@/lib/utils";
import { INNER_RING, OUTER_RING, R1, R2, SIZE } from "@/lib/constants";

const RightAnimation = () => {
  return (
    <motion.div
      variants={containerVariants}
      className="relative w-full h-full min-h-[460px] lg:min-h-[520px] flex items-center justify-center lg:justify-end"
    >
      <div className="absolute" style={{ width: SIZE, height: SIZE }}>
        <RotatingRing items={OUTER_RING} radius={R1} duration={28} />
        <RotatingRing items={INNER_RING} radius={R2} duration={44} reverse />
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <TbBrain
            size={48}
            className="text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

RightAnimation.displayName = "RightAnimation";
export default RightAnimation;
