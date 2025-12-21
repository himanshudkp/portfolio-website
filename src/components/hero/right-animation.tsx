"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const RightAnimation = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    import("../../../public/web-dev.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) {
    return null;
  }
  return (
    <motion.div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="h-auto w-full"
        />
      </div>
    </motion.div>
  );
};
