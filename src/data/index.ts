import {
  AboutContent,
  CoursesCertification,
  ExperienceData,
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
] as const;

export const TABS: Tab[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

export const ABOUT_CONTENT: AboutContent = {
  highlights: [
    "Full-Stack Engineer",
    "2+ years of experience",
    "web",
    "mobile",
    "AI-powered products",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Native",
    "healthcare",
    "energy",
    "recruitment",
    "30,000+ users",
    "AI-native products",
    "scalable SaaS platforms",
    "Heaptrace Technology",
    "cross-platform mobile apps",
    "real-time dashboards",
    "backend APIs",
    "LLM-powered features",
  ],
  paragraphs: [
    "I’m a Full-Stack Engineer with 2+ years of experience building and shipping scalable web, mobile, and AI-powered products using React, Next.js, Node.js, FastAPI, and React Native.",
    "At Heaptrace Technology, I worked across healthcare, energy, and recruitment platforms, contributing to systems serving 30,000+ users. I’ve built cross-platform mobile apps, real-time dashboards, backend APIs, and LLM-powered features driving automation and intelligent workflows.",
    "I thrive in fast-moving environments where ownership matters—taking features from idea to production with clean architecture, optimized performance, and secure delivery.",
    "I’m particularly interested in building AI-native products and scalable SaaS platforms where technology directly drives business impact.",
  ],
} as const;

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    id: "associate",
    title: "Associate Software Developer",
    company: "Heaptrace Technology",
    location: "Pune, India",
    duration: "Dec 2022 - Mar 2025",
    isCurrent: true,
    highlights: [
      "Full-stack engineer",
      "web",
      "mobile",
      "AI-driven platforms",
      "healthcare",
      "energy",
      "recruitment",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "OpenAI API",
      "Native",
      "LLM-powered features",
      "secure backend APIs",
      "production systems",
      "30,000+ users",
      "AI-powered recruitment SaaS ",
    ],
    description:
      "Full-stack engineer contributing to scalable web, mobile, and AI-driven platforms across healthcare, energy, and recruitment domains. Built and shipped production systems using React, Next.js, Node.js, and React Native, integrating LLM-powered features and secure backend APIs serving 30,000+ users.",
    projects: [
      {
        name: "Jobbrella",
        description:
          "Built and scaled an AI-powered recruitment SaaS using Next.js, TypeScript, and Node.js. Integrated OpenAI APIs for automated job ad generation and intelligent candidate targeting, reducing ad creation time by 70% and streamlining hiring workflows.",
        link: "#",
      },
      {
        name: "Aevai Health (Alva)",
        description:
          "Developed LLM-integrated healthcare chatbot using SvelteKit, TypeScript, and secure backend services. Enabled structured patient guidance, device setup support, and GDPR-compliant conversational workflows in collaboration with a leading European biobank.",
        link: "#",
      },
      {
        name: "Motkraft",
        description:
          "Engineered cross-platform electricity management app using React Native, Expo, and TypeScript. Built real-time consumption dashboards and secure API integrations, supporting 30,000+ active users with a 4.4/5 satisfaction rating.",
        link: "#",
      },
      {
        name: "GreenFlex",
        description:
          "Developed EV charging and scheduling dashboard using React, Redux Toolkit, and Chart.js. Built dynamic data visualizations and intelligent scheduling system with REST API integration for real-time energy optimization.",
        link: "#",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "OpenAI API",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Docker",
      "AWS",
      "Expo",
    ],
  },
] as const;

export const EDUCATION_DATA = [
  {
    id: "pgdmc",
    degree: "Post Graduate Diploma in Mobile Computing (PG-DMC)",
    institution: "Centre for Development of Advanced Computing (CDAC)",
    location: "Pune, India",
    duration: "Mar 2022 - Aug 2022",
    description:
      "Completed intensive post-graduate program focused on mobile application development, cross-platform technologies, and modern JavaScript frameworks. Built hands-on projects using React Native, TypeScript, and backend APIs.",
    highlights: [
      "mobile application development",
      "cross-platform technologies",
      "modern JavaScript frameworks",
    ],
  },
  {
    id: "be",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    location: "Bhopal, India",
    duration: "Jul 2013 - Jun 2017",
    description:
      "Earned Bachelor's degree in Computer Science & Engineering with solid foundation in software development principles, algorithms, and database systems. Developed academic projects focusing on web technologies and problem-solving.",
    highlights: [
      "Computer Science & Engineering",
      "web technologies",
      "problem-solving",
    ],
  },
] as const;

export const COURSES_CERTIFICATIONS_DATA: CoursesCertification[] = [
  {
    id: "react-advanced",
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    issueDate: "Jan 2024",
    credentialId: "FM-2024-001",
    credentialUrl: "#",
    skills: ["React", "TypeScript", "Performance Optimization"],
    description:
      "Advanced patterns and best practices for building scalable React applications.",
  },
  {
    id: "nextjs-mastery",
    title: "Next.js Complete Developer Course",
    provider: "Udemy",
    issueDate: "Nov 2023",
    credentialId: "UC-NEXT-2023",
    credentialUrl: "#",
    skills: ["Next.js", "Server Components", "API Routes"],
    description:
      "Comprehensive course covering Next.js 14, server components, and modern web development.",
  },
  {
    id: "nodejs-backend",
    title: "Node.js Backend Development",
    provider: "Coursera",
    issueDate: "Sep 2023",
    credentialId: "COURSERA-NODE-2023",
    credentialUrl: "#",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description:
      "Building scalable backend services with Node.js, Express, and database integration.",
  },
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    issueDate: "Jul 2023",
    credentialId: "AWS-CCP-2023-789",
    credentialUrl: "#",
    skills: ["AWS", "Cloud Computing", "Deployment"],
    description:
      "Foundational understanding of AWS Cloud services and deployment strategies.",
  },
  {
    id: "openai-api",
    title: "Building AI Apps with OpenAI API",
    provider: "DeepLearning.AI",
    issueDate: "May 2023",
    credentialId: "DL-AI-2023-456",
    credentialUrl: "#",
    skills: ["OpenAI API", "LLM Integration", "AI Development"],
    description:
      "Integrating OpenAI APIs to build intelligent, AI-powered applications.",
  },
  {
    id: "react-native",
    title: "React Native - The Practical Guide",
    provider: "Udemy",
    issueDate: "Mar 2023",
    credentialId: "UC-RN-2023-123",
    credentialUrl: "#",
    skills: ["React Native", "Expo", "Mobile Development"],
    description:
      "Complete guide to building cross-platform mobile applications with React Native.",
  },
] as const;
