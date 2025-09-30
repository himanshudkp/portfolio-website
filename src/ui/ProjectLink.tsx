import { cn } from "@/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLinkProps {
  demoUrl: string;
  githubUrl: string;
  gradient: string; // e.g. "from-blue-600 to-purple-600"
  isDark?: boolean;
}

export function ProjectLink({
  demoUrl,
  githubUrl,
  gradient,
  isDark,
}: ProjectLinkProps) {
  return (
    <div className="flex gap-3">
      {/* Demo Button */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5",
          isDark
            ? `bg-gradient-to-r ${gradient} text-white shadow-lg hover:shadow-xl`
            : `bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg`
        )}
      >
        <ExternalLink className="w-4 h-4" />
        Demo
      </a>

      {/* GitHub Button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
        className={cn(
          "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5",
          isDark
            ? "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
        )}
      >
        <Github className="w-4 h-4" />
        Code
      </a>
    </div>
  );
}
