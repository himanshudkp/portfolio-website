import { useState, useEffect, useMemo, FC } from "react";
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
} from "lucide-react";

// Type definitions
interface Skill {
  name: string;
  level: number;
  hot?: boolean;
}

interface SkillWithCategory extends Skill {
  category: string;
  categoryId: string;
  color: ColorTheme;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  color: ColorTheme;
  skills: Skill[];
}

interface Stats {
  totalSkills: number;
  avgLevel: number;
  expertSkills: number;
}

type ColorTheme = "blue" | "purple" | "green" | "pink";
type ProficiencyLevel = "all" | "expert" | "advanced" | "intermediate";

interface ColorClasses {
  bg: string;
  border: string;
  text: string;
  pill: string;
  hover: string;
  gradient: string;
  glow?: string;
}

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

export const Skills: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<ProficiencyLevel>("all");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
    // Check for system dark mode preference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Filter skills based on category, search, and level
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

    // Apply search filter
    if (searchQuery) {
      allSkills = allSkills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply level filter
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

    // Sort by level (highest first)
    return allSkills.sort((a, b) => b.level - a.level);
  }, [selectedCategory, searchQuery, selectedLevel]);

  // Calculate stats
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

  const getColorClasses = (color: ColorTheme): ColorClasses => {
    const colorMap: Record<ColorTheme, ColorClasses> = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-700 dark:text-blue-300",
        pill: "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/40 dark:to-sky-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/60 shadow-sm dark:shadow-blue-900/20",
        hover:
          "hover:from-blue-100 hover:to-sky-100 dark:hover:from-blue-900/50 dark:hover:to-sky-900/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:shadow-blue-200/50 dark:hover:shadow-blue-800/30",
        gradient: "from-blue-500 to-sky-500 dark:from-blue-400 dark:to-sky-400",
        glow: "hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-950/30",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-700 dark:text-purple-300",
        pill: "bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/60 shadow-sm dark:shadow-purple-900/20",
        hover:
          "hover:from-purple-100 hover:to-fuchsia-100 dark:hover:from-purple-900/50 dark:hover:to-fuchsia-900/50 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md hover:shadow-purple-200/50 dark:hover:shadow-purple-800/30",
        gradient:
          "from-purple-500 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400",
        glow: "hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] dark:hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-700 dark:text-green-300",
        pill: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 text-green-700 dark:text-green-300 border border-green-200/60 dark:border-green-700/60 shadow-sm dark:shadow-green-900/20",
        hover:
          "hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/50 dark:hover:to-emerald-900/50 hover:border-green-300 dark:hover:border-green-600 hover:shadow-md hover:shadow-green-200/50 dark:hover:shadow-green-800/30",
        gradient:
          "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400",
        glow: "hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] dark:hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]",
      },
      pink: {
        bg: "bg-pink-50 dark:bg-pink-950/30",
        border: "border-pink-200 dark:border-pink-800",
        text: "text-pink-700 dark:text-pink-300",
        pill: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/40 dark:to-rose-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/60 dark:border-pink-700/60 shadow-sm dark:shadow-pink-900/20",
        hover:
          "hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-900/50 dark:hover:to-rose-900/50 hover:border-pink-300 dark:hover:border-pink-600 hover:shadow-md hover:shadow-pink-200/50 dark:hover:shadow-pink-800/30",
        gradient:
          "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400",
        glow: "hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] dark:hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]",
      },
    };
    return colorMap[color];
  };

  const getProficiencyLabel = (level: number): string => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    return "Intermediate";
  };

  const getProficiencyColor = (level: number): string => {
    if (level >= 90) return "text-emerald-600 dark:text-emerald-400";
    if (level >= 75) return "text-blue-600 dark:text-blue-400";
    return "text-amber-600 dark:text-amber-400";
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd want to persist this preference
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>
          </div>

          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 px-4 py-1.5 text-white text-sm font-medium mb-6 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Technical Expertise
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive expertise across modern tech stack with focus on
              delivering scalable, production-ready solutions
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Total Skills
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                    {stats.totalSkills}+
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/40 dark:to-sky-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-green-100 dark:hover:shadow-green-950/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Average Proficiency
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                    {stats.avgLevel}%
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-purple-100 dark:hover:shadow-purple-950/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Expert Level
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                    {stats.expertSkills}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-900/40 dark:to-fuchsia-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-200 dark:border-slate-700">
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
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <X className="h-5 w-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50"
                  }`}
                >
                  All Categories
                </button>
                {SKILL_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const colors = getColorClasses(cat.color);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                        selectedCategory === cat.id
                          ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                          : "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50"
                      }`}
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
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer transition-all"
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
                  const colors = getColorClasses(skill.color);
                  return (
                    <div
                      key={`${skill.categoryId}-${skill.name}`}
                      className={`group relative transition-all duration-500 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 30}ms` }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={`
                        relative px-5 py-3 rounded-2xl transition-all duration-300
                        ${colors.pill} ${colors.hover}
                        hover:scale-105 cursor-default ${colors.glow}
                        ${
                          skill.hot
                            ? "ring-2 ring-offset-2 ring-amber-400 dark:ring-amber-500 ring-offset-white dark:ring-offset-slate-900"
                            : ""
                        }
                      `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-sm">
                            {skill.name}
                          </span>

                          {/* Level Badge */}
                          <div className="flex items-center gap-1.5">
                            <div className="relative h-1.5 w-12 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                              <div
                                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <span
                              className={`text-xs font-bold ${getProficiencyColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          {/* Hot Badge */}
                          {skill.hot && (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/40 dark:to-yellow-900/40 border border-amber-200/50 dark:border-amber-700/50">
                              <Star className="h-3 w-3 text-amber-600 dark:text-amber-400 fill-current animate-pulse" />
                              <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
                                Hot
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Hover Tooltip */}
                        {hoveredSkill === skill.name && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-xl">
                            <div className="font-medium mb-1">
                              {skill.category}
                            </div>
                            <div className="text-slate-300">
                              Proficiency: {getProficiencyLabel(skill.level)}
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Filter className="h-12 w-12 text-slate-400 dark:text-slate-600 mb-4 animate-pulse" />
                <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">
                  No skills found
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Always learning and expanding skillset</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
