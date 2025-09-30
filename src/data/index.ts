import { AboutSectionData } from "@/types";
import { Briefcase, Code2, TrendingUp, Trophy, Users, Zap } from "lucide-react";

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
