"use client";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { LOGO_CONTENT } from "@/data/content";

export const LogoBrand = () => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <Link href="#home" className="group flex items-center gap-2.5">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center rounded-xl font-bold h-12 w-12 text-base bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
          <span className="relative z-10 text-white">
            {LOGO_CONTENT.name_initials}
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0" />
        </div>

        <div className="hidden sm:block overflow-hidden">
          <div className="flex items-center gap-2">
            <span className={cn("block font-bold text-xl", textColor)}>
              {LOGO_CONTENT.full_name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Code2 className={cn("w-4 h-4", subTextColor)} />
            <span
              className={cn(
                "block font-semibold text-xs tracking-wide uppercase",
                subTextColor
              )}
            >
              {LOGO_CONTENT.full_name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
