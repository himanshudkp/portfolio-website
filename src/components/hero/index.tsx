"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { CustomButton } from "../ui/custom-button";
import { SocialLinks } from "../ui/social-links";
import Description from "./description";
import MainHeading from "./main-heading";
import RightAnimation from "./right-animation";
import { containerVariants, itemVariants } from "@/lib/utils";

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen items-center bg-[#1E1E1E] px-5 sm:px-6 lg:px-[8%] pt-20 sm:pt-24 lg:pt-28 overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:gap-12 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            <MainHeading />
            <Description />

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 pt-2"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CustomButton
                  href="#projects"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  My Work
                </CustomButton>

                <CustomButton
                  href="#contact"
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  Connect
                </CustomButton>

                <CustomButton
                  href="/Himanshu_Pandey_Resume.pdf"
                  variant="outline"
                  size="md"
                  icon={Download}
                  download
                  className="w-full sm:w-auto sm:flex-1"
                >
                  Resume
                </CustomButton>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
                <SocialLinks variant="hero" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          <div className="flex items-center justify-center lg:justify-end lg:pr-6 mt-6 lg:mt-0 scale-[0.85] sm:scale-100">
            <RightAnimation />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

Hero.displayName = "Hero";
export default Hero;
