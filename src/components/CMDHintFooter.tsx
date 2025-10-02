"use client";
import { getPlatform } from "@/utils";
import { Command } from "lucide-react";

export const CMDHintFooter = () => {
  return (
    <div className="flex items-center gap-2 rounded-xl border backdrop-blur-xl px-4 py-2 border-gray-700/50 bg-gray-800/50">
      <Command className="h-4 w-4 text-blue-600" />
      <span className="text-sm text-white">
        Press{" "}
        <span className="mx-1 rounded px-1.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-600">
          {getPlatform() === "mac" ? "⌘" : "Ctrl"}
        </span>
        <span className="mx-1 rounded px-1.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-600">
          K
        </span>{" "}
        for quick navigation
      </span>
    </div>
  );
};
