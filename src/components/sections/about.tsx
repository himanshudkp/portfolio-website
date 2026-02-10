"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import type { Tab, WorkProject } from "@/types";
import { ABOUT_CONTENT, EDUCATION_DATA, EXPERIENCE_DATA } from "@/data";
import { BadgeSingle } from "../ui/badge-single";
import { SectionHeader } from "../section-header";
import { Tabs } from "../ui/tabs";
import {
  cardVariants,
  containerVariants,
  itemVariants,
  tabContentVariants,
} from "@/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  projects: WorkProject[];
  technologies: string[];
}

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
}

const TABS: Tab[] = [
  { icon: User, id: "about", label: "About" },
  { icon: Briefcase, id: "experience", label: "Experience" },
  { icon: GraduationCap, id: "education", label: "Education" },
];

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="text-teal-400 font-medium"
    whileHover={{ scale: 1.02, color: "#5eead4" }}
    style={{ display: "inline-block" }}
  >
    {children}
  </motion.span>
);

const LocationPin = ({
  location,
  className = "",
}: {
  location: string;
  className?: string;
}) => (
  <p className={`flex items-center gap-1 ${className}`}>
    <MapPin className="w-3.5 h-3.5" />
    <span>{location}</span>
  </p>
);

const InfoCard = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "hover";
}) => (
  <motion.div
    className={`p-5 sm:p-6 rounded-xl border ${
      variant === "hover" ? "border-gray-700" : "border-gray-700"
    }`}
    variants={cardVariants}
    whileHover={
      variant === "hover"
        ? {
            scale: 1.01,
            borderColor: "rgba(20, 184, 166, 0.5)",
            boxShadow: "0 10px 40px rgba(20, 184, 166, 0.1)",
          }
        : undefined
    }
  >
    {children}
  </motion.div>
);

const SectionContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <motion.div
    className="border border-gray-700 rounded-lg p-4 sm:p-5 mt-5"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    {title && (
      <motion.h4
        className="text-teal-400 font-semibold text-base mb-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h4>
    )}
    {children}
  </motion.div>
);

const AboutSection = () => {
  const { paragraphs } = ABOUT_CONTENT;

  const renderParagraphWithHighlights = (text: string) => {
    const highlights = [
      "Himanshu Pandey",
      "ReactJS",
      "Next.js",
      "React Native",
      "clean code",
      "user experience",
      "Heaptrace Technology",
      "TanStack Query",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
    ];

    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      const isHighlight = highlights.some(
        (h) => h.toLowerCase() === part.toLowerCase(),
      );
      return isHighlight ? (
        <HighlightText key={idx}>{part}</HighlightText>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      );
    });
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start gap-6">
        <motion.div className="flex-1" variants={itemVariants}>
          {paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              className={`text-gray-300 leading-relaxed text-sm sm:text-base ${
                idx < paragraphs.length - 1 ? "mb-3.5" : ""
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {renderParagraphWithHighlights(paragraph)}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  isCurrent,
  description,
  projects,
  technologies,
}: ExperienceCardProps) => {
  const renderDescription = (text: string) => {
    const highlights = [
      "ReactJS",
      "Next.js",
      "React Native",
      "Heaptrace Technology",
    ];
    return text
      .split(new RegExp(`(${highlights.join("|")})`, "g"))
      .map((part, idx) =>
        highlights.includes(part) ? (
          <HighlightText key={idx}>{part}</HighlightText>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        ),
      );
  };

  return (
    <InfoCard variant={isCurrent ? "hover" : "default"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
              <motion.h3
                className="text-lg sm:text-xl font-bold text-teal-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {title}
              </motion.h3>
              <BadgeSingle text={duration} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <p>{company}</p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <LocationPin location={location} />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-gray-300 leading-relaxed mb-5 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {renderDescription(description)}
        </motion.p>

        <SectionContainer title="Key Projects">
          <motion.ul
            className="space-y-2.5 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, idx) => (
              <motion.li
                key={idx}
                className="leading-relaxed text-sm sm:text-base"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-teal-300">
                  {project.name}{" "}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-300 hover:text-teal-400 transition-colors cursor-pointer"
                    aria-label={`Open ${project.name} project`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 inline-block" />
                  </motion.a>{" "}
                  —{" "}
                </span>
                <span className="text-gray-300">{project.description}</span>
              </motion.li>
            ))}
          </motion.ul>
        </SectionContainer>

        <SectionContainer title="Technology Used">
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((tech, idx) => (
              <BadgeSingle text={tech} variant="glow" size="md" key={idx} />
            ))}
          </motion.div>
        </SectionContainer>
      </motion.div>
    </InfoCard>
  );
};

const ExperienceSection = () => (
  <motion.div
    className="space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {EXPERIENCE_DATA.map((experience) => (
      <ExperienceCard key={experience.id} {...experience} />
    ))}
  </motion.div>
);

const EducationCard = ({
  degree,
  institution,
  location,
}: EducationCardProps) => (
  <InfoCard>
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <div className="pl-5">
        <motion.h3
          className="text-lg sm:text-xl font-bold text-teal-300 mb-1.5"
          whileHover={{ scale: 1.02, x: 5 }}
        >
          {degree}
        </motion.h3>
        <motion.p
          className="text-gray-300 font-medium mb-1 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {institution}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <LocationPin
            location={location}
            className="text-gray-500 text-xs sm:text-sm"
          />
        </motion.div>
      </div>
    </motion.div>
  </InfoCard>
);

const EducationSection = () => (
  <motion.div
    className="space-y-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {EDUCATION_DATA.map((education) => (
      <EducationCard key={education.id} {...education} />
    ))}
  </motion.div>
);

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
      default:
        return null;
    }
  };

  return (
    <div
      id="about"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About me"
          description="Transforming ideas into powerful digital solutions with precision and creativity"
        />

        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

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
