import { NAV_LINKS } from "@/data";
import { cn } from "@/utils";
import Link from "next/link";
import { Fragment } from "react";

interface NavLinkWebProps {
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

export const NavLinkWeb = ({ onLinkClick, selectedLink }: NavLinkWebProps) => {

  return (
    <ul
      className="hidden items-center gap-2 rounded-2xl border px-2 py-2 backdrop-blur-xl lg:flex shadow-sm border-white/5 bg-[var(--dark)]/70"
    >
      {NAV_LINKS.map((link, index) => {
        const Icon = link.icon;
        const isSelected = selectedLink === link.name;

        return (
          <Fragment key={link.name}>
            {/* <li > */}
              <Link
                href={link.href}
                onClick={() => onLinkClick(link.name)}
                className={cn(
                  "group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  isSelected
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25" 
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-teal-500"
                )}
              >
                <Icon className="h-4 w-4 " />
                <span className="hidden xl:inline">{link.name}</span>
              </Link>
            {/* </li> */}
            
            {/* Vertical Divider - show between items, but not after last item */}
            {index < NAV_LINKS.length - 1 && (
              <div className="h-6 w-px bg-white/10" />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};