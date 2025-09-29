import { useTheme } from "@/hooks/useTheme";
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
} from "lucide-react";

export const Experience = () => {
  const { isDark } = useTheme();
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Jan 2024",
      credentialId: "AWS-123456",
      verified: true,
      color: "from-blue-500 to-cyan-500",
      skills: ["Cloud Architecture", "AWS", "DevOps"],
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "Dec 2023",
      verified: false,
      color: "from-cyan-500 to-teal-500",
      skills: ["React", "TypeScript", "State Management"],
    },
    // Add more certifications...
  ];
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2023 - Present",
      location: "Remote",
      description:
        "Led the development of multiple high-impact web applications using React and Next.js, collaborating with cross-functional teams to deliver pixel-perfect, responsive interfaces. Implemented advanced state management solutions and optimized application performance, resulting in significantly improved user engagement and load times. Mentored junior developers and established best practices for code quality and component architecture.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      projects: [
        { name: "E-Commerce Platform", link: "#projects" },
        { name: "Dashboard Analytics", link: "#projects" },
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Digital Innovations",
      period: "Jun 2022 - Dec 2022",
      location: "Hybrid",
      description:
        "Developed and maintained responsive web applications using modern JavaScript frameworks, working closely with designers to transform Figma designs into functional, accessible interfaces. Contributed to the migration of legacy codebases to React, improving application maintainability and performance. Participated in code reviews and implemented automated testing strategies to ensure code quality.",
      tech: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
      projects: [
        { name: "Corporate Website", link: "#projects" },
        { name: "Booking System", link: "#projects" },
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      location: "New York, USA",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "President of Coding Club",
      ],
      coursework: [
        "Data Structures",
        "Web Development",
        "Machine Learning",
        "Database Systems",
      ],
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      period: "2016 - 2018",
      location: "Boston, USA",
      gpa: "4.0/4.0",
      achievements: [
        "Valedictorian",
        "Mathematics Olympiad Gold Medal",
        "Science Fair First Place",
      ],
      coursework: [
        "Advanced Mathematics",
        "Physics",
        "Computer Science",
        "Chemistry",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-2xl ${
                    isDark
                      ? "bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-blue-500/30"
                      : "bg-gradient-to-br from-blue-100 to-blue-100"
                  }`}
                >
                  <Briefcase
                    className={`w-8 h-8 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <h3
                  className={`text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Work Experience
                </h3>
              </div>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    isDark
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                      : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
                  }`}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h4
                          className={`text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}
                        >
                          {exp.role}
                        </h4>
                        <p
                          className={`text-lg font-semibold ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {exp.company}
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
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-500" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p
                      className={`text-base leading-relaxed mb-6 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {exp.description}
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
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
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

                    {/* Important Projects */}
                    <div>
                      <h5
                        className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Key Projects
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.projects.map((project, i) => (
                          <a
                            key={i}
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
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-15">
            {/* Section Header */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-2xl ${
                      isDark
                        ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                        : "bg-gradient-to-br from-purple-100 to-pink-100"
                    }`}
                  >
                    <GraduationCap
                      className={`w-8 h-8 ${
                        isDark ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Education
                  </h3>
                </div>
              </div>

              {/* Education Cards */}
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-full"></div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative p-8">
                      {/* Header with degree badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4
                            className={`text-2xl font-bold mb-2 ${
                              isDark
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                                : "text-purple-600"
                            }`}
                          >
                            {edu.degree}
                          </h4>
                          <p
                            className={`text-lg font-semibold ${
                              isDark ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            {edu.institution}
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
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-pink-500" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Courses */}
            <div>
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-2xl ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                        : "bg-gradient-to-br from-blue-100 to-cyan-100"
                    }`}
                  >
                    <Award
                      className={`w-8 h-8 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Certifications & Courses
                  </h3>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-bl-full"></div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative p-6">
                      {/* Badge Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${
                            cert.color
                          } ${isDark ? "bg-opacity-20" : "bg-opacity-10"}`}
                        >
                          {cert.verified ? (
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                          ) : (
                            <Award className="w-6 h-6 text-cyan-500" />
                          )}
                        </div>
                        {cert.verified && (
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
                        {cert.title}
                      </h4>
                      <p
                        className={`text-base font-semibold mb-4 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {cert.issuer}
                      </p>

                      {/* Meta Info */}
                      <div
                        className={`flex flex-wrap gap-4 mb-4 text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{cert.date}</span>
                        </div>
                        {cert.credentialId && (
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-cyan-500" />
                            <span className="font-medium text-xs">
                              ID: {cert.credentialId}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Skills/Topics Tags */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
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
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
