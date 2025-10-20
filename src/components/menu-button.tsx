"use client";
import { useTheme } from "@/hooks";
import { cn } from "@/utils";
import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  const { isDark } = useTheme();

  console.log("MenuButton - isOpen:", isOpen); // Debug log

  return (
    <button
      onClick={onToggle}
      className={cn(
        "rounded-xl border p-2.5 transition-all duration-300 lg:hidden hover:scale-105",
        isDark
          ? "border-gray-700/50 bg-[#1E1E1E] text-white hover:bg-gray-800"
          : "border-gray-200/60 bg-white/60 text-gray-700 hover:bg-gray-50"
      )}
      aria-label="Toggle menu"
    >
      <div className="relative h-5 w-5">
        <Menu
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        <X
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
};
