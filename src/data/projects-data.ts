import { Project } from "@/types";
import { Sparkles, TrendingUp, Users } from "lucide-react";

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
