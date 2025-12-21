"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils";
import { CustomButton } from "../ui/custom-button";
import { SocialLinks } from "../ui/social-links";
import { MainHeading } from "./main-heading";
import { Description } from "./description";
import { RightAnimation } from "./right-animation";

export const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen items-center justify-center bg-[#1E1E1E] px-5 sm:px-6 lg:px-8 xl:px-[8%] pt-20 sm:pt-24 lg:pt-28 scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="relative z-10 grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex flex-col justify-center space-y-6 text-center lg:text-left"
          variants={containerVariants}
        >
          <MainHeading />
          <Description />
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6 lg:items-start w-full"
          >
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 flex-wrap">
              <CustomButton
                href={"#projects"}
                variant={"primary"}
                size="md"
                className="w-full sm:flex-1"
              >
                My Work
              </CustomButton>
              <CustomButton
                href={"#contact"}
                variant={"secondary"}
                size="md"
                className="w-full sm:flex-1"
              >
                Connect
              </CustomButton>
              <CustomButton
                href={"/Himanshu_Pandey_Resume.pdf"}
                variant={"outline"}
                size="md"
                icon={Download}
                download={true}
                className="w-full sm:flex-1"
              >
                Resume
              </CustomButton>
            </div>

            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xs font-medium text-teal-300/60">OR</span>
              <SocialLinks variant="hero" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center">
          <RightAnimation />
        </div>
      </div>
    </motion.section>
  );
};
