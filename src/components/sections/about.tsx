import React, { useState } from "react";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { SectionHeader } from "../section-header";
import { Tabs } from "../ui/tabs";
import { Tab } from "@/types";

const TABS: Tab[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6 flex items-center gap-3">
            About Me
            <div className="h-1 flex-grow bg-gradient-to-r from-teal-500 to-transparent rounded"></div>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 sm:text-lg">
            I’m{" "}
            <span className="text-teal-400 font-semibold">Himanshu Pandey</span>
            , a Frontend Developer with 2+ years of experience building
            responsive web and mobile applications using{" "}
            <span className="text-teal-400">ReactJS</span>,
            <span className="text-teal-400"> Next.js</span>, and{" "}
            <span className="text-teal-400">React Native</span>. I focus on
            crafting performant, scalable, and visually consistent interfaces
            with a strong emphasis on{" "}
            <span className="text-teal-400">clean code</span> and{" "}
            <span className="text-teal-400">user experience</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8 text-base sm:text-lg">
            At <span className="text-teal-400">Heaptrace Technology</span>, I
            contributed to projects spanning cross-platform mobile apps, EV
            charging dashboards, and AI-powered recruitment platforms. I enjoy
            turning complex problems into intuitive digital experiences and
            collaborating with backend and design teams to deliver reliable,
            production-ready solutions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8 text-base sm:text-lg">
            Beyond code, I’m passionate about continuous learning and exploring
            emerging tools in the JavaScript ecosystem — from{" "}
            <span className="text-teal-400">TanStack Query</span> and
            <span className="text-teal-400"> Redux Toolkit</span> to modern UI
            libraries like
            <span className="text-teal-400"> Tailwind CSS</span> and{" "}
            <span className="text-teal-400">Shadcn UI</span>. My goal is to
            build interfaces that not only look great but also perform
            flawlessly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-8 flex items-center gap-3">
        Work Experience
        <div className="h-1 flex-grow bg-gradient-to-r from-teal-500 to-transparent rounded"></div>
      </h2>

      {/* Current Role */}
      <div className="p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">
              Associate Software Developer
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Heaptrace Technology Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-teal-500/30">
              03/2023 - 03/2025
            </span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4">📍 Pune, India</p>

        <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
          As an Associate Software Developer at{" "}
          <span className="text-teal-400 font-medium">
            Heaptrace Technology
          </span>
          , I worked on modern frontend and mobile ecosystems — primarily using
          <span className="text-teal-400"> ReactJS</span>,{" "}
          <span className="text-teal-400">Next.js</span>, and{" "}
          <span className="text-teal-400">React Native</span>. I focused on
          building scalable, maintainable applications with optimized
          performance and responsive UIs across platforms.
        </p>

        {/* Key Projects */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4 sm:p-6 mt-6">
          <h4 className="text-teal-400 font-semibold text-lg mb-3">
            Key Projects
          </h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="font-semibold text-teal-300">Jobbrella – </span>
              Built a responsive AI-powered recruitment platform using Next.js,
              TypeScript, and Tailwind CSS. Integrated OpenAI APIs for automatic
              job listing and ad generation, improving efficiency and brand
              consistency.
            </li>
            <li>
              <span className="font-semibold text-teal-300">Motkraft – </span>
              Developed cross-platform electricity tracking app (30K+ users)
              using React Native, Redux Toolkit, and TypeScript. Added real-time
              charts and secure guest access features for multi-user
              collaboration.
            </li>
            <li>
              <span className="font-semibold text-teal-300">GreenFlex – </span>
              Built an EV charging and scheduling dashboard with ReactJS, Redux
              Toolkit, and Chart.js. Integrated REST APIs for real-time
              optimization and enhanced energy management analytics.
            </li>
          </ul>
        </div>
      </div>

      {/* Previous Role */}
      <div className="bg-[var(--dark)] p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">
              Software Developer Trainee
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Heaptrace Technology Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-700 text-gray-400 px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-gray-600">
              12/2022 - 03/2023
            </span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4">📍 Pune, India</p>

        <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
          Joined Heaptrace as a trainee focused on gaining hands-on experience
          with modern frontend technologies and development workflows,
          contributing to internal projects and assisting in feature development
          under mentorship.
        </p>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-8 flex items-center gap-3">
        Education
        <div className="h-1 flex-grow bg-gradient-to-r from-teal-500 to-transparent rounded"></div>
      </h2>

      {/* PG Diploma */}
      <div className="relative group">
        <div className="relative  p-6 sm:p-8 rounded-2xl border-l-4 border-teal-500 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">
                  PG Diploma in Mobile Computing
                </h3>
                <p className="text-gray-300 font-medium mb-1 text-sm sm:text-base">
                  Centre for Development of Advanced Computing (C-DAC)
                </p>
                <p className="text-gray-500 text-sm">📍 Pune, India</p>
              </div>
            </div>
            <span className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-teal-500/30 self-start">
              03/2022 - 08/2022
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Completed an intensive post-graduate program at C-DAC with a focus
            on{" "}
            <span className="text-teal-400">
              mobile application development
            </span>
            , <span className="text-teal-400">cross-platform technologies</span>
            , and{" "}
            <span className="text-teal-400">modern JavaScript frameworks</span>.
            Built and deployed hands-on projects using React Native, TypeScript,
            and backend APIs, laying a strong foundation for real-world frontend
            and mobile app engineering.
          </p>
        </div>
      </div>

      {/* Bachelor's Degree */}
      <div className="relative group">
        <div className="relative  p-6 sm:p-8 rounded-2xl border-l-4 border-teal-600 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">
                  BE (Computer Science & Engineering)
                </h3>
                <p className="text-gray-300 font-medium mb-1 text-sm sm:text-base">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)
                </p>
                <p className="text-gray-500 text-sm">📍 Bhopal, India</p>
              </div>
            </div>
            <span className="bg-teal-600/20 text-teal-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-teal-600/30 self-start">
              07/2013 - 06/2017
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Earned a Bachelor’s degree in{" "}
            <span className="text-teal-400">
              Computer Science & Engineering
            </span>
            with a solid foundation in software development principles,
            algorithms, and database systems. Developed academic projects
            focusing on <span className="text-teal-400">web technologies</span>{" "}
            and <span className="text-teal-400">problem-solving</span> that
            inspired my transition into full-stack and frontend engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[var(--dark)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Who I Am"
          description="Transforming ideas into powerful digital solutions with precision
              and creativity"
          title="About me"
        />

        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
          variant="simple"
          className="mb-10"
        />

        <div className="relative ">
          <div className="rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/5">
            {/* About Tab */}
            {activeTab === "about" && <AboutSection />}

            {/* Experience Tab */}
            {activeTab === "experience" && <ExperienceSection />}

            {/* Education Tab */}
            {activeTab === "education" && <EducationSection />}
          </div>
        </div>
      </div>
    </div>
  );
};
