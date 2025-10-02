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
  Sparkles,
  TrendingUp,
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
      <div className="mb-10">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-4 rounded-2xl shadow-lg",
              "bg-gradient-to-br from-blue-600 to-purple-600"
            )}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-bold mb-1",
                isDark
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  : "text-gray-900"
              )}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={cn(
                  "text-sm font-medium",
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
          "group rounded-3xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]",
          isDark
            ? "border border-white/10 bg-gray-800/50"
            : "border border-gray-200 bg-white shadow-xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="relative p-8">
          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={cn(
                    "p-2 rounded-xl",
                    "bg-gradient-to-br from-blue-600 to-purple-600"
                  )}
                >
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                    isDark
                      ? "bg-blue-600/20 text-blue-400 border border-blue-600/50"
                      : "bg-blue-50 text-blue-600 border border-blue-200"
                  )}
                >
                  Position #{index + 1}
                </span>
              </div>
              <h4
                className={cn(
                  "mb-3 text-2xl font-bold sm:text-3xl",
                  isDark
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    : "text-gray-900"
                )}
              >
                {experience.role}
              </h4>
              <div className="flex items-center gap-2">
                <Building2
                  className={cn(
                    "h-5 w-5",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                />
                <p
                  className={cn(
                    "text-lg font-bold",
                    isDark ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {experience.company}
                </p>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div
            className={cn(
              "mb-6 flex flex-wrap gap-4 p-4 rounded-2xl border",
              isDark
                ? "bg-gray-900/50 border-white/5"
                : "bg-gray-50 border-gray-200"
            )}
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <CalendarDays className="h-4 w-4 text-white" />
              </div>
              <span
                className={cn(
                  "font-semibold text-sm",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                {experience.period}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span
                className={cn(
                  "font-semibold text-sm",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className={cn(
              "mb-8 text-base leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            {experience.description}
          </p>

          {/* Technologies Used */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Code2
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <h5
                className={cn(
                  "text-sm font-bold uppercase tracking-wider",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Technologies Used
              </h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all hover:scale-105",
                    isDark
                      ? "bg-gray-900/50 text-gray-300 border border-gray-700 hover:border-blue-600/50"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-600/50 shadow-sm"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Rocket
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-purple-400" : "text-purple-600"
                )}
              />
              <h5
                className={cn(
                  "text-sm font-bold uppercase tracking-wider",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Key Deliverables
              </h5>
            </div>
            <div className="flex flex-wrap gap-3">
              {experience.projects.map((project) => (
                <BtnLink
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={ExternalLink}
                  iconPosition="right"
                  className="group/btn"
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
        "group rounded-3xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]",
        isDark
          ? "border border-white/10 bg-gray-800/50"
          : "border border-gray-200 bg-white shadow-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="relative p-7">
        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-green-600 to-emerald-600" />

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          </div>
          <h4
            className={cn(
              "mb-3 text-xl font-bold sm:text-2xl",
              isDark
                ? "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                : "text-gray-900"
            )}
          >
            {education.degree}
          </h4>
          <p
            className={cn(
              "text-base font-bold flex items-center gap-2",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            {education.institution}
          </p>
        </div>

        {/* Meta Info */}
        <div
          className={cn(
            "flex flex-wrap gap-4 p-4 rounded-2xl border",
            isDark
              ? "bg-gray-900/50 border-white/5"
              : "bg-gray-50 border-gray-200"
          )}
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600">
              <CalendarDays className="h-4 w-4 text-white" />
            </div>
            <span
              className={cn(
                "font-semibold text-sm",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              {education.period}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span
              className={cn(
                "font-semibold text-sm",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              {education.location}
            </span>
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
          "group rounded-3xl backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-105",
          isDark
            ? "border border-white/10 bg-gray-800/50"
            : "border border-gray-200 bg-white shadow-xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="relative p-6">
          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-amber-600 to-orange-600" />

          {/* Badge Icon & Verified Tag */}
          <div className="mb-5 flex items-start justify-between">
            <div className="p-3 rounded-2xl shadow-lg bg-gradient-to-br from-amber-600 to-orange-600">
              {certification.verified ? (
                <ShieldCheck className="h-6 w-6 text-white" />
              ) : (
                <Award className="h-6 w-6 text-white" />
              )}
            </div>
            {certification.verified && (
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-xl shadow-md",
                  "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
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
              "mb-2 text-lg font-bold",
              isDark
                ? "bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
                : "text-gray-900"
            )}
          >
            {certification.title}
          </h4>
          <p
            className={cn(
              "mb-5 text-sm font-bold",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            {certification.issuer}
          </p>

          {/* Meta Info */}
          <div
            className={cn(
              "mb-5 p-3 rounded-xl border",
              isDark
                ? "bg-gray-900/50 border-white/5"
                : "bg-gray-50 border-gray-200"
            )}
          >
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <CalendarDays
                  className={cn(
                    "h-3.5 w-3.5",
                    isDark ? "text-amber-400" : "text-amber-600"
                  )}
                />
                <span
                  className={cn(
                    "font-semibold",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {certification.date}
                </span>
              </div>
              {certification.credentialId && (
                <div className="flex items-center gap-2">
                  <FileText
                    className={cn(
                      "h-3.5 w-3.5",
                      isDark ? "text-amber-400" : "text-amber-600"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-[10px] font-semibold",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}
                  >
                    {certification.credentialId}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Skills Tags */}
          {certification.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold backdrop-blur-xl",
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
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500" : "bg-blue-300"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500" : "bg-purple-300"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-16 text-center transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-sm",
                isDark
                  ? "border-blue-500/30 bg-blue-500/10"
                  : "border-blue-200 bg-blue-50"
              )}
            >
              <TrendingUp
                className={cn(
                  "h-3.5 w-3.5",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <span
                className={cn(
                  "text-sm font-semibold",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              >
                Career Journey
              </span>
            </div>
          </div>

          <h2
            className={cn(
              "mb-6 text-4xl font-bold tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark
                ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                : "text-gray-900"
            )}
          >
            Experience & Credentials
          </h2>

          <p
            className={cn(
              "mx-auto max-w-2xl text-base sm:text-lg",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Professional experience, academic foundation, and industry
            certifications that showcase my expertise
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience Section */}
          <div>
            <SectionHeader
              icon={Briefcase}
              title="Professional Experience"
              subtitle="Delivering results in production environments"
            />
            <div className="space-y-8">
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
          <div className="flex flex-col gap-12">
            {/* Education */}
            <div>
              <SectionHeader
                icon={GraduationCap}
                title="Academic Background"
                subtitle="Foundation in computer science"
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
                title="Professional Certifications"
                subtitle="Industry-recognized credentials"
              />
              <div className="grid gap-6">
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
