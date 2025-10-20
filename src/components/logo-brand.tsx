"use client";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { LOGO_CONTENT } from "@/content";

export const LogoBrand = () => {
  return (
    <Link href="#home" className="group flex items-center gap-2.5">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center rounded-xl font-bold h-12 w-12 text-base bg-teal-500">
          <span className="relative z-10 text-white">
            {LOGO_CONTENT.name_initials}
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="hidden sm:block overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="block font-bold text-xl text-gray-900 dark:text-white">
              {LOGO_CONTENT.full_name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Code2 className="w-4 h-4 text-teal-500" />
            <span className="block font-semibold text-xs tracking-wide uppercase text-gray-600 dark:text-gray-400">
              {LOGO_CONTENT.role}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
