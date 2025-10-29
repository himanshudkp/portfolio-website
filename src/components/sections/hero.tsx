import React, { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import { Code2, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { containerVariants, itemVariants } from "@/utils";
import { BUTTON_TEXT, HERO_CONTENT } from "@/content";
import { StatusBadge } from "../ui/status-badge";
import { CustomButton } from "../ui/custom-button";
import { SocialLinks } from "../ui/social-links";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const RoleAndSkillBadge = () => (
  <motion.div
    variants={itemVariants}
    className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 bg-gradient-to-r from-teal-600/20 to-teal-200/20 backdrop-blur-sm border border-teal-600/30 relative overflow-hidden group"
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-teal-200/30"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    />
    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
      <Code2 className="h-5 w-5 text-teal-400 relative z-10" />
    </motion.div>
    <span className="text-base font-bold sm:text-xl text-gray-100 relative z-10">
      {HERO_CONTENT.role}
      <span className="mx-2 text-xs font-normal text-teal-300">•</span>
      <span className="text-sm font-normal text-teal-300">
        {HERO_CONTENT.skill}
      </span>
    </span>
  </motion.div>
);

const MainHeading = () => (
  <motion.div variants={headingVariants} className="space-y-5">
    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-gray-100">
      {HERO_CONTENT.iam}
      <motion.span
        className="relative inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ backgroundSize: "200% 200%" }}
      >
        {HERO_CONTENT.full_name}
        <motion.span
          className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.span>
    </h1>
    <RoleAndSkillBadge />
    <motion.p
      className="text-base font-medium text-teal-300/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {HERO_CONTENT.experience}
    </motion.p>
  </motion.div>
);

const Description = () => (
  <motion.p
    variants={itemVariants}
    className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 text-gray-100/90"
  >
    {HERO_CONTENT.desc_1}
    <motion.span
      className="font-semibold text-teal-400"
      whileHover={{ scale: 1.05, color: "#5eead4" }}
      style={{ display: "inline-block" }}
    >
      {HERO_CONTENT.desc_2}
    </motion.span>
    {HERO_CONTENT.desc_3}
    <motion.span
      className="font-semibold text-teal-400"
      whileHover={{ scale: 1.05, color: "#5eead4" }}
      style={{ display: "inline-block" }}
    >
      {HERO_CONTENT.desc_4}
    </motion.span>
    {HERO_CONTENT.desc_5}
    <motion.span
      className="font-semibold text-teal-400"
      whileHover={{ scale: 1.05, color: "#5eead4" }}
      style={{ display: "inline-block" }}
    >
      {HERO_CONTENT.desc_6}
    </motion.span>
    {HERO_CONTENT.desc_7}
  </motion.p>
);

const AnimatedIllustration = () => {
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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8 xl:px-[8%] bg-[#1E1E1E]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative z-10 mt-10 grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex flex-col justify-center space-y-5 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center lg:justify-start"
          >
            <StatusBadge text="Open to Opportunities" />
          </motion.div>

          <MainHeading />
          <Description />

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-5 lg:hidden"
          >
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto"
              variants={buttonContainerVariants}
            >
              <CustomButton
                href="#projects"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.work}
              </CustomButton>

              <CustomButton
                href="#contact"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.connect}
              </CustomButton>

              <CustomButton
                icon={Download}
                href="/resume.pdf"
                download
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.resume_web}
              </CustomButton>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 w-full sm:w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-px flex-1 sm:flex-none sm:w-12 bg-gradient-to-r from-transparent via-teal-600/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
              <span className="text-xs text-teal-300/60 font-medium">OR</span>
              <motion.div
                className="h-px flex-1 sm:flex-none sm:w-12 bg-gradient-to-r from-transparent via-teal-600/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </motion.div>

            <SocialLinks variant="hero" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-start gap-3 flex-wrap"
          >
            <motion.div
              className="flex gap-3"
              variants={buttonContainerVariants}
            >
              <CustomButton
                href="#projects"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.work}
              </CustomButton>
              <CustomButton
                href="#contact"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.connect}
              </CustomButton>
              <CustomButton
                icon={Download}
                href="/resume.pdf"
                download
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                {BUTTON_TEXT.resume_web}
              </CustomButton>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-transparent via-teal-600/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9 }}
              />
              <span className="text-xs text-teal-300/60 font-medium">OR</span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-transparent via-teal-600/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9 }}
              />
            </motion.div>

            <SocialLinks variant="hero" />
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-6 justify-center">
          <AnimatedIllustration />
        </div>
      </div>
    </motion.section>
  );
};
