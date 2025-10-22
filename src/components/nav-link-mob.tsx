import { NAV_LINKS, RESUME_LINK } from "@/data";
import { useTheme } from "@/hooks";
import { cn } from "@/utils";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

interface NavLinkMobileProps {
  isOpen: boolean;
  selectedLink: string;
  onClose: () => void;
  onLinkClick: (linkName: string) => void;
}

export const NavLinkMobile = ({
  isOpen,
  selectedLink,
  onClose,
  onLinkClick,
}: NavLinkMobileProps) => {
  const { isDark } = useTheme();

  const handleLinkClick = (linkName: string) => {
    onLinkClick(linkName);
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full overflow-hidden backdrop-blur-xl transition-all duration-300 lg:hidden",
        isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0",
        isDark
          ? "border-b border-white/5 bg-gray-900/95"
          : "border-b border-gray-900/5 bg-white/95 shadow-xl"
      )}
    >
      <div className="px-4 py-6 sm:px-6">
        <ul className="mb-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isSelected = selectedLink === link.name;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
                    isSelected
                      ? isDark
                        ? "bg-teal-500 text-white shadow-lg"
                        : "bg-teal-500 text-white shadow-lg"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="font-medium">{link.name}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3">
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-5 py-2.5",
              isDark
                ? "border-2 border-gray-700 text-gray-300 hover:border-blue-600 hover:bg-blue-600/10 hover:text-white"
                : "border-2 border-gray-300 text-gray-700 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
            )}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};
