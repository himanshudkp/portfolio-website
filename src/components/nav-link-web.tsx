import { NAV_LINKS } from "@/data";
import { useTheme } from "@/hooks";
import { cn } from "@/utils";
import Link from "next/link";

interface NavLinkWebProps {
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

export const NavLinkWeb = ({ onLinkClick, selectedLink }: NavLinkWebProps) => {
  const { isDark } = useTheme();

  return (
    <ul
      className={cn(
        "hidden items-center gap-1 rounded-2xl border px-2 py-2 backdrop-blur-xl lg:flex",
        isDark
          ? "border-white/5 bg-[#1E1E1E]/60"
          : "border-gray-900/5 bg-white/60 shadow-sm"
      )}
    >
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;
        const isSelected = selectedLink === link.name;

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => onLinkClick(link.name)}
              className={cn(
                "group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                isSelected
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                  : isDark
                  ? "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden xl:inline">{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
