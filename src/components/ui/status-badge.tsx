import React from "react";

interface StatusBadgeProps {
  text: string;
}

export const StatusBadge = ({ text }: StatusBadgeProps) => {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border transition-all duration-300 transform cursor-default bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/40 text-emerald-300">
        <div className="h-2 w-2 rounded-full animate-pulse bg-emerald-400 shadow-lg shadow-emerald-500/50" />
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};
