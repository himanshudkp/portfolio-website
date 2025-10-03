import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Sparkles,
  Filter,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Zap,
  Search,
  X,
  Moon,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/utils";
import { useTheme } from "@/hooks/useTheme";

// Type definitions
export type ColorKey =
  | "blue"
  | "purple"
  | "pink"
  | "cyan"
  | "green"
  | "orange"
  | "emerald";

export interface ColorClasses {
  gradient: string;
  bg: string;
  border: string;
  text: string;
  hover: string;
  tag: string;
  tagDark: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: ColorKey | string;
}

export interface Highlight {
  icon: LucideIcon;
  text: string;
}

interface Skill {
  name: string;
  level: number;
  hot?: boolean;
}

interface SkillWithCategory extends Skill {
  category: string;
  categoryId: string;
  color: ColorKey;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  color: ColorKey;
  skills: Skill[];
}

interface Stats {
  totalSkills: number;
  avgLevel: number;
  expertSkills: number;
}

type ProficiencyLevel = "all" | "expert" | "advanced" | "intermediate";

// Sample data
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "React", level: 95, hot: true },
      { name: "TypeScript", level: 90, hot: true },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92, hot: true },
      { name: "Vue.js", level: 75 },
      { name: "Redux", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "Webpack", level: 78 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "purple",
    skills: [
      { name: "Node.js", level: 90, hot: true },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 82, hot: true },
      { name: "REST APIs", level: 92 },
      { name: "Microservices", level: 78 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "green",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88, hot: true },
      { name: "Redis", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Prisma", level: 85 },
      { name: "ElasticSearch", level: 72 },
    ],
  },
  {
    id: "design",
    title: "Design & Tools",
    icon: Palette,
    color: "pink",
    skills: [
      { name: "Figma", level: 88, hot: true },
      { name: "Git", level: 95 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 85 },
      { name: "Kubernetes", level: 70 },
    ],
  },
];

const getColorClasses = (color: ColorKey, isDark: boolean): ColorClasses => {
  const colorMap: Record<ColorKey, ColorClasses> = {
    blue: {
      gradient: "from-blue-500 to-sky-500",
      bg: isDark ? "bg-blue-950/30" : "bg-blue-50",
      border: isDark ? "border-blue-800" : "border-blue-200",
      text: isDark ? "text-blue-300" : "text-blue-700",
      hover: isDark
        ? "hover:bg-blue-900/50 hover:border-blue-600"
        : "hover:bg-blue-100 hover:border-blue-300",
      tag: "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-700 border-blue-200/60",
      tagDark:
        "bg-gradient-to-br from-blue-950/40 to-sky-950/40 text-blue-300 border-blue-700/60",
    },
    purple: {
      gradient: "from-purple-500 to-fuchsia-500",
      bg: isDark ? "bg-purple-950/30" : "bg-purple-50",
      border: isDark ? "border-purple-800" : "border-purple-200",
      text: isDark ? "text-purple-300" : "text-purple-700",
      hover: isDark
        ? "hover:bg-purple-900/50 hover:border-purple-600"
        : "hover:bg-purple-100 hover:border-purple-300",
      tag: "bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-700 border-purple-200/60",
      tagDark:
        "bg-gradient-to-br from-purple-950/40 to-fuchsia-950/40 text-purple-300 border-purple-700/60",
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      bg: isDark ? "bg-green-950/30" : "bg-green-50",
      border: isDark ? "border-green-800" : "border-green-200",
      text: isDark ? "text-green-300" : "text-green-700",
      hover: isDark
        ? "hover:bg-green-900/50 hover:border-green-600"
        : "hover:bg-green-100 hover:border-green-300",
      tag: "bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 border-green-200/60",
      tagDark:
        "bg-gradient-to-br from-green-950/40 to-emerald-950/40 text-green-300 border-green-700/60",
    },
    pink: {
      gradient: "from-pink-500 to-rose-500",
      bg: isDark ? "bg-pink-950/30" : "bg-pink-50",
      border: isDark ? "border-pink-800" : "border-pink-200",
      text: isDark ? "text-pink-300" : "text-pink-700",
      hover: isDark
        ? "hover:bg-pink-900/50 hover:border-pink-600"
        : "hover:bg-pink-100 hover:border-pink-300",
      tag: "bg-gradient-to-br from-pink-50 to-rose-50 text-pink-700 border-pink-200/60",
      tagDark:
        "bg-gradient-to-br from-pink-950/40 to-rose-950/40 text-pink-300 border-pink-700/60",
    },
    cyan: {
      gradient: "from-cyan-500 to-teal-500",
      bg: isDark ? "bg-cyan-950/30" : "bg-cyan-50",
      border: isDark ? "border-cyan-800" : "border-cyan-200",
      text: isDark ? "text-cyan-300" : "text-cyan-700",
      hover: isDark
        ? "hover:bg-cyan-900/50 hover:border-cyan-600"
        : "hover:bg-cyan-100 hover:border-cyan-300",
      tag: "bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-700 border-cyan-200/60",
      tagDark:
        "bg-gradient-to-br from-cyan-950/40 to-teal-950/40 text-cyan-300 border-cyan-700/60",
    },
    orange: {
      gradient: "from-orange-500 to-amber-500",
      bg: isDark ? "bg-orange-950/30" : "bg-orange-50",
      border: isDark ? "border-orange-800" : "border-orange-200",
      text: isDark ? "text-orange-300" : "text-orange-700",
      hover: isDark
        ? "hover:bg-orange-900/50 hover:border-orange-600"
        : "hover:bg-orange-100 hover:border-orange-300",
      tag: "bg-gradient-to-br from-orange-50 to-amber-50 text-orange-700 border-orange-200/60",
      tagDark:
        "bg-gradient-to-br from-orange-950/40 to-amber-950/40 text-orange-300 border-orange-700/60",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-500",
      bg: isDark ? "bg-emerald-950/30" : "bg-emerald-50",
      border: isDark ? "border-emerald-800" : "border-emerald-200",
      text: isDark ? "text-emerald-300" : "text-emerald-700",
      hover: isDark
        ? "hover:bg-emerald-900/50 hover:border-emerald-600"
        : "hover:bg-emerald-100 hover:border-emerald-300",
      tag: "bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200/60",
      tagDark:
        "bg-gradient-to-br from-emerald-950/40 to-teal-950/40 text-emerald-300 border-emerald-700/60",
    },
  };
  return colorMap[color];
};

const getProficiencyLabel = (level: number): string => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  return "Intermediate";
};

const getProficiencyColor = (level: number, isDark: boolean): string => {
  if (level >= 90) return isDark ? "text-emerald-400" : "text-emerald-600";
  if (level >= 75) return isDark ? "text-blue-400" : "text-blue-600";
  return isDark ? "text-amber-400" : "text-amber-600";
};

export const Skills = () => {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<ProficiencyLevel>("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSkills = useMemo<SkillWithCategory[]>(() => {
    let allSkills: SkillWithCategory[] = [];

    if (selectedCategory === "all") {
      SKILL_CATEGORIES.forEach((cat) => {
        allSkills = [
          ...allSkills,
          ...cat.skills.map((skill) => ({
            ...skill,
            category: cat.title,
            categoryId: cat.id,
            color: cat.color,
          })),
        ];
      });
    } else {
      const category = SKILL_CATEGORIES.find(
        (cat) => cat.id === selectedCategory
      );
      if (category) {
        allSkills = category.skills.map((skill) => ({
          ...skill,
          category: category.title,
          categoryId: category.id,
          color: category.color,
        }));
      }
    }

    if (searchQuery) {
      allSkills = allSkills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLevel !== "all") {
      if (selectedLevel === "expert") {
        allSkills = allSkills.filter((skill) => skill.level >= 90);
      } else if (selectedLevel === "advanced") {
        allSkills = allSkills.filter(
          (skill) => skill.level >= 75 && skill.level < 90
        );
      } else if (selectedLevel === "intermediate") {
        allSkills = allSkills.filter((skill) => skill.level < 75);
      }
    }

    return allSkills.sort((a, b) => b.level - a.level);
  }, [selectedCategory, searchQuery, selectedLevel]);

  const stats = useMemo<Stats>(() => {
    const totalSkills = SKILL_CATEGORIES.reduce(
      (acc, cat) => acc + cat.skills.length,
      0
    );
    const avgLevel = Math.round(
      SKILL_CATEGORIES.reduce((acc, cat) => {
        const catAvg =
          cat.skills.reduce((sum, skill) => sum + skill.level, 0) /
          cat.skills.length;
        return acc + catAvg;
      }, 0) / SKILL_CATEGORIES.length
    );
    const expertSkills = SKILL_CATEGORIES.reduce(
      (acc, cat) => acc + cat.skills.filter((s) => s.level >= 90).length,
      0
    );

    return { totalSkills, avgLevel, expertSkills };
  }, []);

  return (
    <section
      className={cn(
        "min-h-screen px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300",
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-50"
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2.5 rounded-xl border transition-all duration-300 group shadow-sm",
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-white border-slate-200 hover:bg-slate-50"
            )}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6 shadow-lg",
              isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/20"
                : "bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/25"
            )}
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            Technical Expertise
          </div>

          <h2
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent mb-4",
              isDark
                ? "bg-gradient-to-br from-white to-slate-300"
                : "bg-gradient-to-br from-slate-900 to-slate-700"
            )}
          >
            Skills & Technologies
          </h2>

          <p
            className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-slate-400" : "text-slate-600"
            )}
          >
            Comprehensive expertise across modern tech stack with focus on
            delivering scalable, production-ready solutions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Card: Total Skills */}
          <div
            className={cn(
              "group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              isDark
                ? "bg-slate-800/80 border-slate-700 hover:shadow-blue-950/30"
                : "bg-white border-slate-200 hover:shadow-blue-100"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    "text-sm mb-1",
                    isDark ? "text-slate-400" : "text-slate-600"
                  )}
                >
                  Total Skills
                </p>
                <p
                  className={cn(
                    "text-3xl font-bold bg-clip-text text-transparent",
                    isDark
                      ? "bg-gradient-to-r from-white to-slate-200"
                      : "bg-gradient-to-r from-slate-900 to-slate-700"
                  )}
                >
                  {stats.totalSkills}+
                </p>
              </div>
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                  isDark
                    ? "bg-gradient-to-br from-blue-900/40 to-sky-900/40"
                    : "bg-gradient-to-br from-blue-100 to-sky-100"
                )}
              >
                <Zap
                  className={cn(
                    "h-6 w-6",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Card: Average Proficiency */}
          <div
            className={cn(
              "group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              isDark
                ? "bg-slate-800/80 border-slate-700 hover:shadow-green-950/30"
                : "bg-white border-slate-200 hover:shadow-green-100"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    "text-sm mb-1",
                    isDark ? "text-slate-400" : "text-slate-600"
                  )}
                >
                  Average Proficiency
                </p>
                <p
                  className={cn(
                    "text-3xl font-bold bg-clip-text text-transparent",
                    isDark
                      ? "bg-gradient-to-r from-white to-slate-200"
                      : "bg-gradient-to-r from-slate-900 to-slate-700"
                  )}
                >
                  {stats.avgLevel}%
                </p>
              </div>
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                  isDark
                    ? "bg-gradient-to-br from-green-900/40 to-emerald-900/40"
                    : "bg-gradient-to-br from-green-100 to-emerald-100"
                )}
              >
                <TrendingUp
                  className={cn(
                    "h-6 w-6",
                    isDark ? "text-green-400" : "text-green-600"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Card: Expert Level */}
          <div
            className={cn(
              "group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              isDark
                ? "bg-slate-800/80 border-slate-700 hover:shadow-purple-950/30"
                : "bg-white border-slate-200 hover:shadow-purple-100"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    "text-sm mb-1",
                    isDark ? "text-slate-400" : "text-slate-600"
                  )}
                >
                  Expert Level
                </p>
                <p
                  className={cn(
                    "text-3xl font-bold bg-clip-text text-transparent",
                    isDark
                      ? "bg-gradient-to-r from-white to-slate-200"
                      : "bg-gradient-to-r from-slate-900 to-slate-700"
                  )}
                >
                  {stats.expertSkills}
                </p>
              </div>
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                  isDark
                    ? "bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40"
                    : "bg-gradient-to-br from-purple-100 to-fuchsia-100"
                )}
              >
                <Award
                  className={cn(
                    "h-6 w-6",
                    isDark ? "text-purple-400" : "text-purple-600"
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div
          className={cn(
            "backdrop-blur-sm rounded-2xl p-6 mb-8 border shadow-sm",
            isDark
              ? "bg-slate-800/80 border-slate-700"
              : "bg-white/80 border-slate-200"
          )}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full pl-10 pr-10 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all",
                    isDark
                      ? "border-slate-700 bg-slate-900/50 text-white placeholder-slate-400 focus:ring-blue-400"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-500 focus:ring-blue-500"
                  )}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X
                      className={cn(
                        "h-5 w-5",
                        isDark
                          ? "text-slate-400 hover:text-slate-300"
                          : "text-slate-400 hover:text-slate-600"
                      )}
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory("all")}
                className={cn(
                  "px-4 py-2.5 rounded-xl font-medium transition-all",
                  selectedCategory === "all"
                    ? isDark
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : isDark
                    ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                All Categories
              </button>

              {SKILL_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const colors = getColorClasses(cat.color, isDark);
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2",
                      selectedCategory === cat.id
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                        : isDark
                        ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) =>
                setSelectedLevel(e.target.value as ProficiencyLevel)
              }
              className={cn(
                "px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 cursor-pointer transition-all",
                isDark
                  ? "border-slate-700 bg-slate-900/50 text-white focus:ring-blue-400"
                  : "border-slate-200 bg-slate-50 text-slate-900 focus:ring-blue-500"
              )}
            >
              <option value="all">All Levels</option>
              <option value="expert">Expert (90%+)</option>
              <option value="advanced">Advanced (75-89%)</option>
              <option value="intermediate">Intermediate (&lt;75%)</option>
            </select>
          </div>
        </div>

        {/* Skills Pills */}
        <div className="min-h-[300px]">
          {filteredSkills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {filteredSkills.map((skill, index) => {
                const colors = getColorClasses(skill.color, isDark);
                return (
                  <div
                    key={`${skill.categoryId}-${skill.name}`}
                    className={cn(
                      "group relative transition-all duration-500",
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 30}ms` }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={cn(
                        "relative px-5 py-3 rounded-2xl transition-all duration-300 border shadow-sm hover:shadow-md hover:scale-105 cursor-default",
                        isDark ? colors.tagDark : colors.tag,
                        colors.hover,
                        skill.hot &&
                          (isDark
                            ? "ring-2 ring-offset-2 ring-amber-500 ring-offset-slate-900"
                            : "ring-2 ring-offset-2 ring-amber-400 ring-offset-white")
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">
                          {skill.name}
                        </span>

                        {/* Level Badge */}
                        <div className="flex items-center gap-1.5">
                          <div
                            className={cn(
                              "relative h-1.5 w-12 rounded-full overflow-hidden",
                              isDark ? "bg-slate-700/50" : "bg-slate-200"
                            )}
                          >
                            <div
                              className={cn(
                                "absolute inset-y-0 left-0 bg-gradient-to-r rounded-full transition-all duration-1000",
                                colors.gradient
                              )}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span
                            className={cn(
                              "text-xs font-bold",
                              getProficiencyColor(skill.level, isDark)
                            )}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Hot Badge */}
                        {skill.hot && (
                          <div
                            className={cn(
                              "flex items-center gap-1 px-2 py-0.5 rounded-full border",
                              isDark
                                ? "bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border-amber-700/50"
                                : "bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-200/50"
                            )}
                          >
                            <Star
                              className={cn(
                                "h-3 w-3 fill-current animate-pulse",
                                isDark ? "text-amber-400" : "text-amber-600"
                              )}
                            />
                            <span
                              className={cn(
                                "text-xs font-medium",
                                isDark ? "text-amber-300" : "text-amber-700"
                              )}
                            >
                              Hot
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Hover Tooltip */}
                      {hoveredSkill === skill.name && (
                        <div
                          className={cn(
                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-xl",
                            isDark ? "bg-slate-700" : "bg-slate-900"
                          )}
                        >
                          <div className="font-medium mb-1">
                            {skill.category}
                          </div>
                          <div
                            className={cn(
                              isDark ? "text-slate-400" : "text-slate-300"
                            )}
                          >
                            Proficiency: {getProficiencyLabel(skill.level)}
                          </div>
                          <div
                            className={cn(
                              "absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 rotate-45",
                              isDark ? "bg-slate-700" : "bg-slate-900"
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Filter
                className={cn(
                  "h-12 w-12 mb-4 animate-pulse",
                  isDark ? "text-slate-600" : "text-slate-400"
                )}
              />
              <p
                className={cn(
                  "text-lg font-medium mb-2",
                  isDark ? "text-slate-400" : "text-slate-600"
                )}
              >
                No skills found
              </p>
              <p
                className={cn(
                  "text-sm",
                  isDark ? "text-slate-500" : "text-slate-500"
                )}
              >
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className={cn(
              "inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full backdrop-blur-sm border",
              isDark
                ? "text-slate-400 bg-slate-800/50 border-slate-700"
                : "text-slate-600 bg-white/50 border-slate-200"
            )}
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Always learning and expanding skillset</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
