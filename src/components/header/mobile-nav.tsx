"use client";

import { NAV_LINKS, SOCIAL_LINKS } from "@/data";
import type { NavigationProps } from "@/types";
import { Download } from "lucide-react";

export const MobileNavigation = ({
  isOpen,
  selectedLink,
  onLinkClick,
}: NavigationProps & { isOpen: boolean }) => {
  return (
    <>
      {isOpen && (
        <div className="bg-[#252525] border-b border-gray-700/50 shadow-2xl mx-4 rounded-xl overflow-hidden">
          <div className="p-3 space-y-1.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = selectedLink === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => onLinkClick(link.name)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                      : "text-gray-400 hover:text-teal-300 hover:bg-gray-800"
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-3 border-t border-gray-700 flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="p-2 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-gray-800 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              <a
                href="/Himanshu_Pandey_Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold text-xs shadow-lg shadow-teal-500/30 hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
