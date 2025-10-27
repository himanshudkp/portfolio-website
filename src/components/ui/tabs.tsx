import { Tab } from "@/types";
import React from "react";

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "simple" | "pills" | "scrollable";
  showAllOption?: boolean;
  allOptionLabel?: string;
  allOptionIcon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = "simple",
  showAllOption = false,
  allOptionLabel = "All",
  allOptionIcon: AllIcon,
  className = "",
}: TabsProps) => {
  if (variant === "simple") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="inline-flex rounded-full p-1.5 shadow-xl border border-white/5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-teal-300"
                }`}
              >
                {Icon && <Icon size={18} />}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "pills") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="inline-flex bg-gray-800 rounded-full p-1.5 shadow-xl border border-gray-700 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-teal-300"
                }`}
              >
                {Icon && <Icon size={18} />}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "scrollable") {
    return (
      <div className={className}>
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-800 rounded-full p-1.5 shadow-xl border border-gray-700 gap-1 min-w-min">
              {showAllOption && AllIcon && (
                <button
                  onClick={() => onChange("all")}
                  className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105"
                      : "text-gray-400 hover:text-teal-300"
                  }`}
                >
                  <AllIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline sm:inline">
                    {allOptionLabel}
                  </span>
                </button>
              )}
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105"
                        : "text-gray-400 hover:text-teal-300"
                    }`}
                  >
                    {Icon && (
                      <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    )}
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
