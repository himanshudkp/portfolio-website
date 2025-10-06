"use client";
import { Command, Zap } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn, getModifierKey } from "@/utils/utils";

export const CMDHintFooter = () => {
  const { isDark } = useTheme();

  const commandIconStyle = `h-4 w-4 ${
    isDark ? "text-blue-400" : "text-blue-600"
  }`;

  const textStyle = (light: string, dark: string) => (isDark ? dark : light);

  const kbdStyle = cn(
    "inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg px-2 text-xs font-bold shadow-md border transition-all duration-200 hover:scale-110",
    isDark
      ? "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600/50 text-gray-200 shadow-gray-900/50"
      : "bg-gradient-to-b from-white to-gray-100 border-gray-300/50 text-gray-700 shadow-gray-300/50"
  );

  const quickNavStyle = cn(
    "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm font-semibold transition-all",
    isDark
      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
      : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-300/50"
  );

  return (
    <div className="relative group">
      <div className="relative flex items-center gap-3 rounded-2xl border backdrop-blur-xl px-5 py-3">
        <div className="relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors">
          <Command className={commandIconStyle} />
        </div>

        <div className="flex items-center gap-2">
          <span className={textStyle("text-gray-700", "text-gray-300")}>
            Press
          </span>

          <div className="flex items-center gap-1.5">
            <kbd className={kbdStyle}>{getModifierKey}</kbd>
            <span className={textStyle("text-gray-400", "text-gray-600")}>
              +
            </span>
            <kbd className={kbdStyle}>K</kbd>
          </div>

          <span className={textStyle("text-gray-700", "text-gray-300")}>
            for
          </span>

          <span className={quickNavStyle}>
            <Zap className="h-3.5 w-3.5" />
            Quick Navigation
          </span>
        </div>
      </div>
    </div>
  );
};
