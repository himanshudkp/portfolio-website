"use client";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { LOGO_CONTENT } from "@/content";
import { cn } from "@/utils";
import { useTheme } from "@/hooks";

export const LogoBrand = () => {
  const {isDark} = useTheme()
  return (
    <Link href="#home" className="group flex items-center">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center rounded-xl font-bold h-12 w-12 bg-teal-500">
          <span className="relative z-10 text-white">
            {LOGO_CONTENT.name_initials}
          </span>
        </div>

        <div>
          <div className="flex items-center">
            <span className={cn("block font-bold text-xl text-gray-900 dark:",isDark ? "text-white":"text-black")}>
              {LOGO_CONTENT.full_name}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Code2 className="w-4 h-4 text-teal-500" />
            <span className={cn("block font-semibold text-xs tracking-wide uppercase",isDark?"text-gray-400":"text-gray-600")}>
              {LOGO_CONTENT.role}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
