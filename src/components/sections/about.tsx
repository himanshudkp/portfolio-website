import React, { useState } from "react";
import { SectionHeader } from "../section-header";
import { Tabs } from "../ui/tabs";
import { ABOUT_CONTENT, EDUCATION_DATA, EXPERIENCE_DATA, TABS } from "@/data";
import { ExternalLink, MapPin } from "lucide-react";
import type { Project } from "@/types";

const AboutSection: React.FC = () => {
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
        (h) => h.toLowerCase() === part.toLowerCase()
      );
      return isHighlight ? (
        <HighlightText key={idx}>{part}</HighlightText>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      );
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-gray-300 leading-relaxed text-base sm:text-lg ${
                idx < paragraphs.length - 1 ? "mb-4" : ""
              }`}
            >
              {renderParagraphWithHighlights(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="space-y-10">
      {EXPERIENCE_DATA.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="space-y-10">
      {EDUCATION_DATA.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </div>
  );
};

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
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[var(--dark)]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          description="Transforming ideas into powerful digital solutions with precision and creativity"
          title="About me"
        />

        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
          variant="simple"
          className="mb-10"
        />

        <div className="relative">
          <div className="rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/5">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
}

const EducationCard = ({
  degree,
  institution,
  location,
  duration,
  description,
  highlights,
}: EducationCardProps) => {
  const renderDescriptionWithHighlights = () => {
    const parts = description.split(
      new RegExp(`(${highlights.join("|")})`, "gi")
    );

    return parts.map((part, idx) => {
      const isHighlight = highlights.some(
        (h) => h.toLowerCase() === part.toLowerCase()
      );
      return isHighlight ? (
        <HighlightText key={idx}>{part}</HighlightText>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      );
    });
  };

  return (
    <div className="relative group">
      <div className="relative p-6 sm:p-8 rounded-2xl border-l-4 border-teal-500 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">
                {degree}
              </h3>
              <p className="text-gray-300 font-medium mb-1 text-sm sm:text-base">
                {institution}
              </p>
              <LocationPin location={location} className="text-gray-500" />
            </div>
          </div>
          <Badge variant="education" className="self-start py-2">
            {duration}
          </Badge>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {renderDescriptionWithHighlights()}
        </p>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  description: string;
  projects: Project[];
  technologies: string[];
}

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
  return (
    <InfoCard variant={isCurrent ? "hover" : "default"}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-teal-300">
              {title}
            </h3>
            <Badge variant={isCurrent ? "current" : "past"}>{duration}</Badge>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400 text-sm sm:text-base">
            <p>{company}</p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <LocationPin location={location} />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
        {description
          .split(/(ReactJS|Next\.js|React Native|Heaptrace Technology)/g)
          .map((part, idx) => {
            const highlights = [
              "ReactJS",
              "Next.js",
              "React Native",
              "Heaptrace Technology",
            ];
            return highlights.includes(part) ? (
              <HighlightText key={idx}>{part}</HighlightText>
            ) : (
              <React.Fragment key={idx}>{part}</React.Fragment>
            );
          })}
      </p>

      {/* Projects Section */}
      <SectionContainer title="Key Projects">
        <ul className="space-y-3 text-gray-300">
          {projects.map((project, idx) => (
            <li key={idx} className="mb-3 leading-relaxed">
              <span className="font-semibold text-teal-300">
                {project.name}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-300 hover:text-teal-400 transition-colors cursor-pointer"
                  aria-label={`Open ${project.name} project`}
                >
                  <ExternalLink className="w-4 h-4 inline-block" />
                </a>{" "}
                —{" "}
              </span>
              <span className="text-gray-300">{project.description}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>

      {/* Technologies Section */}
      <SectionContainer title="Technology Used">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <TechBadge key={idx} technology={tech} />
          ))}
        </div>
      </SectionContainer>
    </InfoCard>
  );
};

interface InfoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover";
}

const InfoCard = ({
  children,
  className = "",
  variant = "default",
}: InfoCardProps) => {
  const baseStyles = "p-6 sm:p-8 rounded-xl border";
  const variantStyles = {
    default: "border-gray-700",
    hover:
      "border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: "current" | "past" | "education";
  className?: string;
}

const Badge = ({
  children,
  variant = "current",
  className = "",
}: BadgeProps) => {
  const variants = {
    current: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    past: "bg-gray-700 text-gray-400 border-gray-600",
    education: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

interface TechBadgeProps {
  technology: string;
}

const TechBadge = ({ technology }: TechBadgeProps) => {
  return (
    <span className="bg-gray-900 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
      {technology}
    </span>
  );
};

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightText = ({ children, className = "" }: HighlightTextProps) => {
  return <span className={`text-teal-400 ${className}`}>{children}</span>;
};

interface LocationPinProps {
  location: string;
  className?: string;
}

const LocationPin = ({ location, className = "" }: LocationPinProps) => {
  return (
    <p className={`flex items-center gap-1 ${className}`}>
      <MapPin className="w-4 h-4" />
      <span>{location}</span>
    </p>
  );
};

interface SectionContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const SectionContainer = ({
  children,
  title,
  className = "",
}: SectionContainerProps) => {
  return (
    <div
      className={`bg-gray-800/30 border border-gray-700 rounded-xl p-4 sm:p-6 mt-6 ${className}`}
    >
      {title && (
        <h4 className="text-teal-400 font-semibold text-lg mb-3">{title}</h4>
      )}
      {children}
    </div>
  );
};
