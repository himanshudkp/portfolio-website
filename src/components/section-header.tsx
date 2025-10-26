import { Sparkles } from "lucide-react";
import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="relative mb-16">
      <div className="relative">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-teal-400 mr-2" size={24} />
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
            {badge}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="text-xl sm:text-2xl text-center text-teal-200 mb-4 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
