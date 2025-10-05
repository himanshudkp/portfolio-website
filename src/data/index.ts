import {
  AboutSectionData,
  Certification,
  ColorClasses,
  ColorKey,
  Education,
  Link,
  NavLink,
  Project,
  SkillCategory,
  WorkExperience,
} from "@/types";
import {
  AppWindow,
  Brain,
  Briefcase,
  Code2,
  Github,
  House,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Settings,
  Sparkles,
  TrendingUp,
  Trophy,
  User,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const ABOUT_SECTION_DATA: AboutSectionData = {
  stats: [
    {
      icon: Briefcase,
      value: "2+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: "30K+",
      label: "App Users",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      value: "8+",
      label: "Projects Built",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      value: "4+",
      label: "Technologies",
      color: "from-orange-500 to-red-500",
    },
  ],
  colorMap: {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    cyan: "from-cyan-500 to-blue-500",
    pink: "from-pink-500 to-rose-500",
    green: "from-green-500 to-emerald-500",
    orange: "",
    emerald: "",
  },
  highlights: [
    { icon: Zap, text: "Performance Optimization Expert" },
    { icon: Code2, text: "Clean & Maintainable Code" },
    { icon: TrendingUp, text: "Continuous Learning Mindset" },
  ],
  topTools: [
    { name: "React", level: 95, color: "blue" },
    { name: "Next.js", level: 90, color: "purple" },
    { name: "TypeScript", level: 88, color: "cyan" },
    { name: "Tailwind CSS", level: 92, color: "pink" },
    { name: "React Native", level: 85, color: "green" },
  ],
} as const;

export const RESUME_LINK =
  "https://drive.google.com/file/d/1ZuqfZxDznWVRvt970dEjX4bCEdfb3Xew/view?usp=sharing";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: AppWindow },
] as const;

export const TOP_5_TECH_STACK: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Redux",
] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "ReactJS", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Shadcn UI", level: 88 },
      { name: "Shadcn UI", level: 88 },
    ],
  },
  {
    title: "State & Data Management",
    icon: Settings,
    color: "purple",
    skills: [
      { name: "Redux Toolkit", level: 92 },
      { name: "Redux", level: 90 },
      { name: "TanStack Query", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.IO", level: 78 },
      { name: "Socket.IO", level: 78 },
      { name: "Socket.IO", level: 78 },
      { name: "Socket.IO", level: 78 },
      { name: "Socket.IO", level: 78 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Brain,
    color: "emerald",
    skills: [
      { name: "ChatGPT/Claude API", level: 85 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Integration", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "Vector Databases", level: 65 },
      { name: "ChatGPT/Claude API", level: 85 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Integration", level: 75 },
      { name: "LangChain", level: 70 },
      { name: "Vector Databases", level: 65 },
    ],
  },
];

export const COLOR_CLASSES: Record<ColorKey, ColorClasses> = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500",
    tag: "from-blue-50 to-cyan-50",
    tagDark: "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500",
    tag: "from-purple-50 to-pink-50",
    tagDark: "bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    hover: "hover:border-pink-500",
    tag: "from-pink-50 to-rose-50",
    tagDark: "bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20",
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  cyan: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  green: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  emerald: {
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500",
    tag: "from-orange-50 to-amber-50",
    tagDark: "bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "Jobbrella – AI-Powered Recruitment",
    description:
      "Built responsive UIs for recruitment platform with dynamic job ad creation, candidate tracking, and AI-driven features using OpenAI APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
    stats: { users: "10K+", impact: "50% faster hiring" },
    links: {
      demo: "https://demo.jobbrella.com",
      github: "https://github.com/yourusername/jobbrella",
    },
    caseStudy: {
      overview:
        "Jobbrella is an AI-powered recruitment platform that revolutionizes the hiring process by automating job ad creation, candidate tracking, and matching using advanced AI algorithms.",
      problem:
        "Traditional recruitment processes are time-consuming, with recruiters spending hours creating job postings, screening candidates, and managing applications. Companies struggle with high time-to-hire rates and often miss qualified candidates.",
      solution:
        "Developed an intelligent platform that uses OpenAI APIs to automatically generate compelling job listings, track candidates through the hiring pipeline, and provide real-time collaboration features for hiring teams.",
      features: [
        "AI-powered job ad generation with brand alignment",
        "Real-time candidate tracking and status updates",
        "Automated candidate screening and ranking",
        "Socket.IO integration for instant notifications",
        "Advanced analytics dashboard for hiring metrics",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Socket.IO",
        "OpenAI API",
        "PostgreSQL",
      ],
      challenges: [
        {
          title: "Real-time Collaboration",
          solution:
            "Implemented Socket.IO for instant updates across multiple users viewing the same candidate pipeline",
        },
        {
          title: "API Performance",
          solution:
            "Used TanStack Query for intelligent caching and optimistic updates, reducing API calls by 60%",
        },
      ],
      results: [
        "50% reduction in time-to-hire",
        "10K+ active users within 6 months",
        "95% user satisfaction rating",
        "3x increase in quality candidate matches",
      ],
      screenshots: [
        { title: "Dashboard", color: "from-blue-400 to-cyan-400" },
        { title: "AI Job Creator", color: "from-purple-400 to-pink-400" },
        { title: "Candidate Pipeline", color: "from-green-400 to-emerald-400" },
      ],
    },
  },
  {
    title: "Motkraft – Energy Tracking App",
    description:
      "Developed electricity consumption tracking app for 30K+ users with real-time monitoring, multi-meter management, and admin panel.",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Expo"],
    gradient: "from-green-500 to-emerald-500",
    icon: Users,
    stats: { users: "30K+", impact: "Real-time tracking" },
    links: {
      demo: "https://demo.motkraft.com",
      github: "https://github.com/yourusername/motkraft",
    },
    caseStudy: {
      overview:
        "Motkraft is a comprehensive energy management platform that enables users to monitor electricity consumption across multiple meters in real-time, helping reduce energy costs and promote sustainable usage.",
      problem:
        "Consumers lack visibility into their real-time electricity consumption, making it difficult to identify energy waste and optimize usage. Managing multiple meters across different locations was cumbersome.",
      solution:
        "Built a cross-platform mobile app using React Native that provides real-time energy monitoring, multi-meter management, guest access sharing, and detailed analytics with interactive visualizations.",
      features: [
        "Real-time electricity consumption tracking",
        "Multi-meter onboarding and management",
        "Interactive line and bar chart visualizations",
        "Guest user management with secure sharing",
        "Push notifications for usage alerts",
        "Back office admin panel for customer support",
      ],
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Redux Toolkit",
        "Chart.js",
        "React.js",
        "Tailwind CSS",
      ],
      challenges: [
        {
          title: "Real-time Data Sync",
          solution:
            "Implemented efficient Redux state management with optimized API polling to provide near-real-time updates without draining battery",
        },
        {
          title: "Cross-platform Performance",
          solution:
            "Used React Native best practices and memoization to ensure smooth 60fps animations on both iOS and Android",
        },
      ],
      results: [
        "30K+ active users",
        "25% average reduction in electricity costs",
        "4.7/5 app store rating",
        "500K+ meters monitored daily",
      ],
      screenshots: [
        { title: "Home Dashboard", color: "from-green-400 to-emerald-400" },
        { title: "Usage Analytics", color: "from-blue-400 to-cyan-400" },
        { title: "Admin Panel", color: "from-purple-400 to-pink-400" },
      ],
    },
  },
  {
    title: "GreenFlex – EV Charging Dashboard",
    description:
      "Built EV charging dashboard with dynamic data visualizations, bidding, optimization, and scheduling features.",
    tags: ["ReactJS", "Redux Toolkit", "Chart.js", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
    icon: Sparkles,
    stats: { users: "5K+", impact: "Smart optimization" },
    links: {
      demo: "https://demo.greenflex.com",
      github: "https://github.com/yourusername/greenflex",
    },
    caseStudy: {
      overview:
        "GreenFlex is an intelligent EV charging management system that optimizes charging schedules based on electricity prices, grid demand, and user preferences, helping EV owners save costs while supporting grid stability.",
      problem:
        "EV owners face high charging costs during peak hours and lack tools to optimize charging schedules. Grid operators struggle with managing increased load from EV charging.",
      solution:
        "Developed a comprehensive dashboard and mobile app that provides real-time pricing data, automated bidding for optimal charging slots, smart scheduling algorithms, and seamless EV onboarding.",
      features: [
        "Real-time electricity pricing visualization",
        "Automated bidding system for charging slots",
        "AI-powered charging optimization",
        "Flexible scheduling with user preferences",
        "Multi-EV management",
        "Mobile app for remote control",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Chart.js",
        "TypeScript",
        "React Native",
        "Expo",
        "Axios",
      ],
      challenges: [
        {
          title: "Complex Data Visualization",
          solution:
            "Leveraged Chart.js with custom plugins to create interactive, real-time charts showing pricing trends and optimization recommendations",
        },
        {
          title: "Optimization Algorithms",
          solution:
            "Collaborated closely with backend team to integrate complex optimization algorithms with intuitive UI controls",
        },
      ],
      results: [
        "5K+ EVs managed",
        "40% reduction in charging costs",
        "Peak load reduced by 30%",
        "99.8% scheduling accuracy",
      ],
      screenshots: [
        { title: "Pricing Dashboard", color: "from-purple-400 to-pink-400" },
        { title: "Optimization View", color: "from-blue-400 to-indigo-400" },
        { title: "Mobile App", color: "from-green-400 to-teal-400" },
      ],
    },
  },
];

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

export const CONTACT_LINKS: Link[] = [
  {
    icon: Mail,
    href: "mailto:himanshudkp@gmail.com",
    label: "Mail",
    title: "Email",
    text: "himanshudkp@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    title: "Phone",
    href: "tel:+919522498034",
    text: "+91-9522498034",
  },
  {
    icon: MapPin,
    label: "Location",
    title: "LOcation",
    text: "Pune, India",
    href: "https://www.google.com/maps/place/Pune,+Maharashtra/@18.5248706,73.6981531,50315m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5246091!4d73.8786239!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const APP_TECH_STACK: string[] = [
  "Next",
  "TypeScript",
  "Vercel",
] as const;

export const CERTIFICATIONS: Certification[] = [
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
];

export const EXPERIENCES: WorkExperience[] = [
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

export const EDUCATION: Education[] = [
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

export const EMAIL = "your.email@example.com"; // Your actual email address
