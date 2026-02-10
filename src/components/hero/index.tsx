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
      <div className="relative z-10 grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          variants={containerVariants}
        >
          <MainHeading />
          <Description />
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 lg:items-start w-full pt-2"
          >
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:gap-3">
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

            <div className="flex items-center gap-3 w-full pt-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
              <SocialLinks variant="hero" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center lg:justify-end">
          <RightAnimation />
        </div>
      </div>
    </motion.section>
  );
};
