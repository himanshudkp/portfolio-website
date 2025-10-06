import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/utils/utils";
import React from "react";

interface ContactLinkProps {
  href: string;
  label?: string;
  icon: React.ElementType;
  title: string;
  text: string;
  className?: string;
}

export const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  label,
  icon: Icon,
  title,
  text,
  className,
}) => {
  const { isDark } = useTheme();

  const iconWrapperClasses = cn(
    "flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl border transition-all",
    isDark
      ? "border-gray-800 bg-gray-900 group-hover:border-blue-600/50 group-hover:bg-gray-800"
      : "border-gray-200 bg-white group-hover:border-blue-500 group-hover:bg-gray-50"
  );

  const iconClasses = cn(
    "h-5 w-5 transition-colors",
    isDark
      ? "text-gray-400 group-hover:text-blue-400"
      : "text-gray-600 group-hover:text-blue-600"
  );

  const titleClasses =
    "text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1 text-gray-500";

  const textClasses = cn(
    "text-xs sm:text-sm font-medium transition-colors break-words",
    isDark
      ? "text-gray-300 group-hover:text-white"
      : "text-gray-700 group-hover:text-gray-900"
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || title}
      className={cn(
        "group flex items-start gap-2.5 sm:gap-3 transition-colors",
        className
      )}
    >
      <div className={iconWrapperClasses}>
        <Icon className={iconClasses} />
      </div>
      <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
        <p className={titleClasses}>{title}</p>
        <p className={textClasses}>{text}</p>
      </div>
    </a>
  );
};
