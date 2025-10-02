import { useTheme } from "@/hooks/useTheme";
import { Certification, Education, WorkExperience } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";
import {
  Briefcase,
  CalendarDays,
  GraduationCap,
  MapPin,
  ExternalLink,
  Code2,
  Award,
  ShieldCheck,
  FileText,
  LucideIcon,
  Building2,
  Rocket,
} from "lucide-react";
import { memo, useState, useEffect } from "react";
import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/data";
import BtnLink from "@/ui/BtnLink";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionHeader = memo<SectionHeaderProps>(
  ({ icon: Icon, title, subtitle }) => {
    const { isDark } = useTheme();
    return (
      <div className="mb-8 lg:mb-10">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-3 rounded-xl",
              isDark ? "bg-blue-600" : "bg-blue-700"
            )}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-bold",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={cn(
                  "text-sm",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  delay?: number;
}

const ExperienceCard = memo<ExperienceCardProps>(
  ({ experience, index, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={cn(
          "rounded-2xl backdrop-blur-xl transition-all duration-700",
          isDark
            ? "border border-gray-700 bg-gray-800/80"
            : "border border-gray-200 bg-white shadow-lg",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h4
                className={cn(
                  "mb-2 text-xl font-bold sm:text-2xl",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                {experience.role}
              </h4>
              <div className="flex items-center gap-2">
                <Building2
                  className={cn(
                    "h-5 w-5",
                    isDark ? "text-gray-400" : "text-gray-500"
                  )}
                />
                <p
                  className={cn(
                    "text-base font-semibold sm:text-lg",
                    isDark ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {experience.company}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-xl",
                isDark
                  ? "bg-blue-600/20 text-blue-400 border border-blue-600/50"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              )}
            >
              <span>Role #{index + 1}</span>
            </div>
          </div>

          {/* Meta Info */}
          <div
            className={cn(
              "mb-6 flex flex-wrap gap-4 text-sm sm:gap-6",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={cn(
              "mb-6 text-sm leading-relaxed sm:text-base",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            {experience.description}
          </p>

          {/* Technologies Used */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <Code2
                className={cn(
                  "h-4 w-4",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <h5
                className={cn(
                  "text-xs font-bold uppercase tracking-wide sm:text-sm",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Tech Stack
              </h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-medium backdrop-blur-xl",
                    isDark
                      ? "bg-gray-900/50 text-gray-300 border border-gray-700"
                      : "bg-gray-50 text-gray-700 border border-gray-200"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Rocket
                className={cn(
                  "h-4 w-4",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <h5
                className={cn(
                  "text-xs font-bold uppercase tracking-wide sm:text-sm",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Key Projects
              </h5>
            </div>
            <div className="flex flex-wrap gap-3">
              {experience.projects.map((project) => (
                <BtnLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={ExternalLink}
                >
                  {project.name}
                </BtnLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

interface EducationCardProps {
  education: Education;
  delay?: number;
}

const EducationCard = memo<EducationCardProps>(({ education, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-xl transition-all duration-700",
        isDark
          ? "border border-gray-700 bg-gray-800/80"
          : "border border-gray-200 bg-white shadow-lg",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h4
            className={cn(
              "mb-2 text-xl font-bold sm:text-2xl",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {education.degree}
          </h4>
          <div className="flex items-center gap-2">
            <GraduationCap
              className={cn(
                "h-5 w-5",
                isDark ? "text-gray-400" : "text-gray-500"
              )}
            />
            <p
              className={cn(
                "text-base font-semibold sm:text-lg",
                isDark ? "text-gray-200" : "text-gray-800"
              )}
            >
              {education.institution}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div
          className={cn(
            "flex flex-wrap gap-4 text-sm sm:gap-6",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-600" />
            <span className="font-medium">{education.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="font-medium">{education.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

EducationCard.displayName = "EducationCard";

interface CertificationCardProps {
  certification: Certification;
  delay?: number;
}

const CertificationCard = memo<CertificationCardProps>(
  ({ certification, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={cn(
          "rounded-2xl backdrop-blur-xl transition-all duration-700",
          isDark
            ? "border border-gray-700 bg-gray-800/80"
            : "border border-gray-200 bg-white shadow-lg",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="relative p-5 sm:p-6">
          {/* Badge Icon & Verified Tag */}
          <div className="mb-4 flex items-start justify-between">
            <div
              className={cn(
                "p-3 rounded-xl",
                isDark ? "bg-blue-600" : "bg-blue-700"
              )}
            >
              {certification.verified ? (
                <ShieldCheck className="h-6 w-6 text-white" />
              ) : (
                <Award className="h-6 w-6 text-white" />
              )}
            </div>
            {certification.verified && (
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl",
                  isDark
                    ? "bg-blue-600/20 text-blue-400 border border-blue-600/50"
                    : "bg-blue-100 text-blue-600 border border-blue-200"
                )}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified
              </span>
            )}
          </div>

          {/* Title & Issuer */}
          <h4
            className={cn(
              "mb-2 text-lg font-bold sm:text-xl",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {certification.title}
          </h4>
          <p
            className={cn(
              "mb-4 text-sm font-semibold sm:text-base",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            {certification.issuer}
          </p>

          {/* Meta Info */}
          <div
            className={cn(
              "mb-4 flex flex-wrap gap-3 text-xs sm:text-sm",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{certification.date}</span>
            </div>
            {certification.credentialId && (
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="font-medium">
                  ID: {certification.credentialId}
                </span>
              </div>
            )}
          </div>

          {/* Skills Tags */}
          {certification.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-xl",
                    isDark
                      ? "bg-gray-900/50 text-gray-300 border border-gray-700"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

CertificationCard.displayName = "CertificationCard";

// Main component
export const Experience = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-12 text-center transition-all duration-700 lg:mb-16",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm",
              isDark
                ? "border-blue-600/50 bg-blue-600/10"
                : "border-blue-200 bg-blue-50"
            )}
          >
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            >
              My Journey
            </span>
          </div>

          <h2
            className={cn(
              "mb-4 text-4xl font-bold [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Experience & Education
          </h2>

          <p
            className={cn(
              "mx-auto max-w-2xl text-sm sm:text-base lg:text-lg",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            My professional journey and academic background in technology
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-600" />
        </header>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Work Experience Section */}
          <div>
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              subtitle="Professional roles & achievements"
            />
            <div className="space-y-6 lg:space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard
                  key={exp.company}
                  experience={exp}
                  index={index}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Education */}
            <div>
              <SectionHeader
                icon={GraduationCap}
                title="Education"
                subtitle="Academic foundation"
              />
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <EducationCard
                    key={edu.institution}
                    education={edu}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeader
                icon={Award}
                title="Certifications"
                subtitle="Professional credentials"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                {CERTIFICATIONS.map((cert, index) => (
                  <CertificationCard
                    key={cert.title}
                    certification={cert}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
