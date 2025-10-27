import {
  AboutContent,
  Education,
  Experience,
  Link,
  NavLink,
  Tab,
} from "@/types";
import {
  AppWindow,
  Briefcase,
  Github,
  GraduationCap,
  House,
  Linkedin,
  Mail,
  User,
  Wrench,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: AppWindow },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Contact", href: "#contact", icon: Mail },
] as const;

export const SOCIAL_LINKS: Link[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/himanshudkp",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/himanshudkp",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    label: "Email",
  },
] as const;

export const TABS: Tab[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

export const ABOUT_CONTENT: AboutContent = {
  introduction: {
    name: "Himanshu Pandey",
    role: "Frontend Developer",
    experience: "2+ years",
    technologies: ["ReactJS", "Next.js", "React Native"],
    highlights: ["clean code", "user experience"],
  },
  paragraphs: [
    "I'm a Frontend Developer with 2+ years of experience building responsive web and mobile applications using ReactJS, Next.js, and React Native. I focus on crafting performant, scalable, and visually consistent interfaces with a strong emphasis on clean code and user experience.",
    "At Heaptrace Technology, I contributed to projects spanning cross-platform mobile apps, EV charging dashboards, and AI-powered recruitment platforms. I enjoy turning complex problems into intuitive digital experiences and collaborating with backend and design teams to deliver reliable, production-ready solutions.",
    "Beyond code, I'm passionate about continuous learning and exploring emerging tools in the JavaScript ecosystem — from TanStack Query and Redux Toolkit to modern UI libraries like Tailwind CSS and Shadcn UI. My goal is to build interfaces that not only look great but also perform flawlessly across all devices.",
  ],
} as const;

export const EXPERIENCE_DATA: readonly Experience[] = [
  {
    id: "associate",
    title: "Associate Software Developer",
    company: "Heaptrace Technology Pvt. Ltd.",
    location: "Pune, India",
    duration: "03/2023 - 03/2025",
    isCurrent: true,
    description:
      "As an Associate Software Developer at Heaptrace Technology, I worked on modern frontend and mobile ecosystems — primarily using ReactJS, Next.js, and React Native. I focused on building scalable, maintainable applications with optimized performance and responsive UIs across platforms.",
    projects: [
      {
        name: "Jobbrella",
        description:
          "Built a responsive AI-powered recruitment platform using Next.js, TypeScript, and Tailwind CSS. Integrated OpenAI APIs for automatic job listing and ad generation, improving efficiency and brand consistency.",
        link: "https://google.com",
      },
      {
        name: "Motkraft",
        description:
          "Developed cross-platform electricity tracking app (30K+ users) using React Native, Redux Toolkit, and TypeScript. Added real-time charts and secure guest access features for multi-user collaboration.",
        link: "https://google.com",
      },
    ],
    technologies: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Chart.js",
      "Axios",
    ],
  },
  {
    id: "trainee",
    title: "Software Developer Trainee",
    company: "Heaptrace Technology Pvt. Ltd.",
    location: "Pune, India",
    duration: "12/2022 - 03/2023",
    isCurrent: false,
    description:
      "Joined Heaptrace as a trainee focused on gaining hands-on experience with modern frontend technologies and development workflows, contributing to internal projects and assisting in feature development under mentorship.",
    projects: [
      {
        name: "GreenFlex",
        description:
          "Built an EV charging and scheduling dashboard with ReactJS, Redux Toolkit, and Chart.js. Integrated REST APIs for real-time optimization and enhanced energy management analytics.",
        link: "https://google.com",
      },
    ],
    technologies: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Chart.js",
      "Axios",
    ],
  },
] as const;

export const EDUCATION_DATA: readonly Education[] = [
  {
    id: "pgdmc",
    degree: "PG Diploma in Mobile Computing",
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Pune, India",
    duration: "03/2022 - 08/2022",
    description:
      "Completed an intensive post-graduate program at C-DAC with a focus on mobile application development, cross-platform technologies, and modern JavaScript frameworks. Built and deployed hands-on projects using React Native, TypeScript, and backend APIs, laying a strong foundation for real-world frontend and mobile app engineering.",
    highlights: [
      "mobile application development",
      "cross-platform technologies",
      "modern JavaScript frameworks",
    ],
  },
  {
    id: "be",
    degree: "BE (Computer Science & Engineering)",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)",
    location: "Bhopal, India",
    duration: "07/2013 - 06/2017",
    description:
      "Earned a Bachelor's degree in Computer Science & Engineering with a solid foundation in software development principles, algorithms, and database systems. Developed academic projects focusing on web technologies and problem-solving that inspired my transition into full-stack and frontend engineering.",
    highlights: [
      "Computer Science & Engineering",
      "web technologies",
      "problem-solving",
    ],
  },
] as const;
