"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Tabs } from "../ui/tabs";
import { tabContentVariants } from "@/lib/utils";
import { AboutSection } from "./about-section";
import { ExperienceSection } from "./exp-section";
import { EducationSection } from "./edu-section";
import { CoursesCertificationsSection } from "./course-section";
import { ABOUT_TABS } from "@/lib/constants";

export const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "courses":
        return <CoursesCertificationsSection />;
      default:
        return null;
    }
  };

  return (
    <div
      id="about"
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About me"
          description="Transforming ideas into powerful digital solutions with precision and creativity"
        />

        <Tabs tabs={ABOUT_TABS} activeTab={activeTab} onChange={setActiveTab} />

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-white/5"
            whileHover={{ boxShadow: "0 25px 50px rgba(20, 184, 166, 0.1)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
