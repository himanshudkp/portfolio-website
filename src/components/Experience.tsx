import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/data/experience-data";
import { useTheme } from "@/hooks/useTheme";
import { Certification, Education, WorkExperience } from "@/types";
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
} from "lucide-react";
import { memo } from "react";
interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  isDark: boolean;
  iconBgClasses: string;
  iconColorClasses: string;
}

const SectionHeader = memo<SectionHeaderProps>(
  ({ icon: Icon, title, isDark, iconBgClasses, iconColorClasses }) => (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-2xl ${iconBgClasses}`}>
          <Icon className={`w-8 h-8 ${iconColorClasses}`} />
        </div>
        <h3
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  )
);

SectionHeader.displayName = "SectionHeader";

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  isDark: boolean;
}

const ExperienceCard = memo<ExperienceCardProps>(
  ({ experience, index, isDark }) => (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
          : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
      }`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {experience.role}
            </h4>
            <p
              className={`text-lg font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {experience.company}
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "bg-blue-50 text-blue-600 border border-blue-100"
            }`}
          >
            Experience #{index + 1}
          </div>
        </div>

        {/* Meta Info */}
        <div
          className={`flex flex-wrap gap-6 mb-6 text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span className="font-medium">{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-base leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {experience.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Code2
              className={`w-4 h-4 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h5
              className={`text-sm font-semibold uppercase tracking-wide ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Technologies Used
            </h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-blue-500"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 hover:border-blue-400"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div>
          <h5
            className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Key Projects
          </h5>
          <div className="flex flex-wrap gap-3">
            {experience.projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                className={`group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {project.name}
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
);

ExperienceCard.displayName = "ExperienceCard";

interface EducationCardProps {
  education: Education;
  isDark: boolean;
}

const EducationCard = memo<EducationCardProps>(({ education, isDark }) => (
  <div
    className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
      isDark
        ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
        : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
    }`}
  >
    {/* Decorative corner accent */}
    <div
      className={`absolute top-0 right-0 w-32 h-32 ${
        isDark ? "opacity-10" : "opacity-5"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-full" />
    </div>

    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h4
            className={`text-2xl font-bold mb-2 ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                : "text-purple-600"
            }`}
          >
            {education.degree}
          </h4>
          <p
            className={`text-lg font-semibold ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {education.institution}
          </p>
        </div>
      </div>

      {/* Meta Info */}
      <div
        className={`flex flex-wrap gap-6 mb-6 text-sm ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-purple-500" />
          <span className="font-medium">{education.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-pink-500" />
          <span className="font-medium">{education.location}</span>
        </div>
      </div>
    </div>

    {/* Bottom accent line */}
    <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </div>
));

EducationCard.displayName = "EducationCard";

interface CertificationCardProps {
  certification: Certification;
  isDark: boolean;
}

const CertificationCard = memo<CertificationCardProps>(
  ({ certification, isDark }) => (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
          : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
      }`}
    >
      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${
          isDark ? "opacity-10" : "opacity-5"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-bl-full" />
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        {/* Badge Icon */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${
              certification.color
            } ${isDark ? "bg-opacity-20" : "bg-opacity-10"}`}
          >
            {certification.verified ? (
              <ShieldCheck className="w-6 h-6 text-blue-500" />
            ) : (
              <Award className="w-6 h-6 text-cyan-500" />
            )}
          </div>
          {certification.verified && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                isDark
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              Verified
            </span>
          )}
        </div>

        {/* Title & Issuer */}
        <h4
          className={`text-xl font-bold mb-2 ${
            isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              : "text-blue-600"
          }`}
        >
          {certification.title}
        </h4>
        <p
          className={`text-base font-semibold mb-4 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {certification.issuer}
        </p>

        {/* Meta Info */}
        <div
          className={`flex flex-wrap gap-4 mb-4 text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{certification.date}</span>
          </div>
          {certification.credentialId && (
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-500" />
              <span className="font-medium text-xs">
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
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
);

CertificationCard.displayName = "CertificationCard";

// Main component
export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
              My Journey
            </span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience Section */}
          <div>
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              isDark={isDark}
              iconBgClasses={
                isDark
                  ? "bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-blue-500/30"
                  : "bg-gradient-to-br from-blue-100 to-blue-100"
              }
              iconColorClasses={isDark ? "text-blue-400" : "text-blue-600"}
            />
            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard
                  key={exp.company}
                  experience={exp}
                  index={index}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div className="flex flex-col gap-15">
            {/* Education */}
            <div>
              <SectionHeader
                icon={GraduationCap}
                title="Education"
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
              <div className="space-y-8">
                {EDUCATION.map((edu) => (
                  <EducationCard
                    key={edu.institution}
                    education={edu}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeader
                icon={Award}
                title="Certifications & Courses"
                isDark={isDark}
                iconBgClasses={
                  isDark
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                    : "bg-gradient-to-br from-blue-100 to-cyan-100"
                }
                iconColorClasses={isDark ? "text-blue-400" : "text-blue-600"}
              />
              <div className="grid md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert) => (
                  <CertificationCard
                    key={cert.title}
                    certification={cert}
                    isDark={isDark}
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
