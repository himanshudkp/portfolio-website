"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/utils/utils";

interface StatusBadgeProps {
  text: string;
  color?: "green" | "blue";
  showSparkle?: boolean;
  gradient?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  text,
  color = "green",
  showSparkle = false,
  gradient = false,
  className,
}) => {
  const { isDark } = useTheme();

  const colorMap = {
    green: {
      lightBg: "bg-green-100 border-green-300",
      darkBg: "bg-green-600/20 border-green-600/30",
      dot: "bg-green-500",
      textLight: "text-green-700",
      textDark: "text-green-400",
      gradientLight:
        "from-green-50 to-emerald-50 border-green-200 text-green-700",
      gradientDark:
        "from-green-600/20 to-emerald-600/20 border-green-500/30 text-green-300",
    },
    blue: {
      lightBg: "bg-blue-50 border-blue-200",
      darkBg: "bg-blue-600/20 border-blue-500/30",
      dot: "bg-blue-500",
      textLight: "text-blue-700",
      textDark: "text-blue-300",
      gradientLight: "from-blue-50 to-purple-50 border-blue-200 text-blue-700",
      gradientDark:
        "from-blue-600/20 to-purple-600/20 border-blue-500/30 text-blue-300",
    },
  } as const;

  const theme = colorMap[color];

  const baseStyles = gradient
    ? cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 border transition-all duration-300 transform hover:scale-105 cursor-default",
        "bg-gradient-to-r",
        isDark ? theme.gradientDark : theme.gradientLight
      )
    : cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 cursor-default",
        isDark ? theme.darkBg : theme.lightBg
      );

  return (
    <div className="inline-flex items-center justify-center">
      <div className={cn(baseStyles, className)}>
        <div className={cn("h-2 w-2 rounded-full animate-pulse", theme.dot)} />
        <span
          className={cn(
            "text-xs sm:text-sm font-semibold whitespace-nowrap",
            isDark ? theme.textDark : theme.textLight
          )}
        >
          {text}
        </span>
        {showSparkle && (
          <Sparkles className="h-3.5 w-3.5 animate-pulse flex-shrink-0" />
        )}
      </div>
    </div>
  );
};
