import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/data/experience-data";
import { useTheme } from "@/hooks/useTheme";
import { Certification, Education, WorkExperience } from "@/types";
import { ButtonLink } from "@/ui/ButtonLink";
import { cn } from "@/utils";
import {
  Briefcase,
  CalendarDays,
  GraduationCap,
  MapPin,
  ExternalLink,
  Code2,
  Award,
  Sparkles,
  ShieldCheck,
  FileText,
  LucideIcon,
  Building2,
  Rocket,
  Star,
} from "lucide-react";
import { memo, useState, useEffect } from "react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  isDark: boolean;
  iconBgClasses: string;
  iconColorClasses: string;
}

const SectionHeader = memo<SectionHeaderProps>(
  ({
    icon: Icon,
    title,
    subtitle,
    isDark,
    iconBgClasses,
    iconColorClasses,
  }) => (
    <div className="mb-8 lg:mb-10">
      <div className="flex items-center gap-4">
        <div className="relative">
          {/* Glow effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-50 blur-lg transition-opacity duration-300",
              iconBgClasses
            )}
          />
          <div
            className={cn("relative p-3 rounded-2xl shadow-lg", iconBgClasses)}
          >
            <Icon className={cn("w-7 h-7 sm:w-8 sm:h-8", iconColorClasses)} />
          </div>
        </div>
        <div>
          <h3
            className={cn(
              "text-2xl sm:text-3xl font-bold transition-colors duration-300",
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
  )
);

SectionHeader.displayName = "SectionHeader";

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  isDark: boolean;
  delay?: number;
}

const ExperienceCard = memo<ExperienceCardProps>(
  ({ experience, index, isDark, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-700",
          "hover:-translate-y-2 hover:scale-[1.01]",
          isDark
            ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-2xl shadow-blue-900/10"
            : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top accent line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-2xl">
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
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              )}
            >
              <Star className="h-4 w-4" />
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
              <CalendarDays className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-500" />
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
                    "group/tech rounded-lg px-3 py-1.5 text-xs font-medium backdrop-blur-xl transition-all duration-300 hover:scale-105",
                    isDark
                      ? "bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-blue-500 hover:bg-gray-700"
                      : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:border-blue-400 hover:shadow-md"
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
                  isDark ? "text-purple-400" : "text-purple-600"
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
                <ButtonLink
                  key={project.name}
                  href={project.link}
                  variant="gradient"
                  size="lg"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  {project.name}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

interface EducationCardProps {
  education: Education;
  isDark: boolean;
  delay?: number;
}

const EducationCard = memo<EducationCardProps>(
  ({ education, isDark, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-700",
          "hover:-translate-y-2 hover:scale-[1.01]",
          isDark
            ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-2xl shadow-purple-900/10"
            : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Decorative corner accent */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top accent line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h4
              className={cn(
                "mb-2 text-xl font-bold sm:text-2xl",
                isDark
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  : "text-purple-600"
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
              <CalendarDays className="h-4 w-4 text-purple-500" />
              <span className="font-medium">{education.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pink-500" />
              <span className="font-medium">{education.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
      </div>
    );
  }
);

EducationCard.displayName = "EducationCard";

interface CertificationCardProps {
  certification: Certification;
  isDark: boolean;
  delay?: number;
}

const CertificationCard = memo<CertificationCardProps>(
  ({ certification, isDark, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-700",
          "hover:-translate-y-2 hover:scale-[1.01]",
          isDark
            ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-2xl shadow-blue-900/10"
            : "border border-gray-200/50 bg-white/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Decorative corner accent */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top accent line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

        <div className="relative p-5 sm:p-6">
          {/* Badge Icon & Verified Tag */}
          <div className="mb-4 flex items-start justify-between">
            <div className="relative">
              <div
                className={cn(
                  "absolute inset-0 rounded-xl opacity-50 blur-lg",
                  `bg-gradient-to-br ${certification.color}`
                )}
              />
              <div
                className={cn(
                  "relative p-3 rounded-xl shadow-lg",
                  `bg-gradient-to-br ${certification.color}`,
                  isDark ? "bg-opacity-20" : "bg-opacity-10"
                )}
              >
                {certification.verified ? (
                  <ShieldCheck className="h-6 w-6 text-blue-500" />
                ) : (
                  <Award className="h-6 w-6 text-cyan-500" />
                )}
              </div>
            </div>
            {certification.verified && (
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl",
                  isDark
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
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
              isDark
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                : "text-blue-600"
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
              <CalendarDays className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{certification.date}</span>
            </div>
            {certification.credentialId && (
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-500" />
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
                    "rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-xl transition-colors duration-300",
                    isDark
                      ? "bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-blue-500"
                      : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-400"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
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
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000 delay-300",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header
          className={cn(
            "mb-12 text-center transition-all duration-1000 lg:mb-16",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse text-blue-500" />
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            >
              My Journey
            </span>
            <Sparkles className="h-4 w-4 animate-pulse text-purple-500" />
          </div>

          <h2
            className={cn(
              "mb-4 text-4xl font-bold transition-colors duration-300 [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
              isDark
                ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
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

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        </header>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Work Experience Section */}
          <div>
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              subtitle="Professional roles & achievements"
              isDark={isDark}
              iconBgClasses={
                isDark
                  ? "bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-blue-500/30"
                  : "bg-gradient-to-br from-blue-100 to-pink-100"
              }
              iconColorClasses={isDark ? "text-blue-400" : "text-blue-600"}
            />
            <div className="space-y-6 lg:space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard
                  key={exp.company}
                  experience={exp}
                  index={index}
                  isDark={isDark}
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
                isDark={isDark}
                iconBgClasses={
                  isDark
                    ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                    : "bg-gradient-to-br from-purple-100 to-pink-100"
                }
                iconColorClasses={
                  isDark ? "text-purple-400" : "text-purple-600"
                }
              />
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <EducationCard
                    key={edu.institution}
                    education={edu}
                    isDark={isDark}
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
                isDark={isDark}
                iconBgClasses={
                  isDark
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                    : "bg-gradient-to-br from-blue-100 to-cyan-100"
                }
                iconColorClasses={isDark ? "text-blue-400" : "text-blue-600"}
              />
              <div className="grid gap-6 sm:grid-cols-2">
                {CERTIFICATIONS.map((cert, index) => (
                  <CertificationCard
                    key={cert.title}
                    certification={cert}
                    isDark={isDark}
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
