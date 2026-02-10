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
    <motion.div
      className="relative w-full h-full min-h-[350px] lg:min-h-[400px] flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
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
