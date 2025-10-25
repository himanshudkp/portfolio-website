import { cn } from "@/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  name: string;
  icon?: LucideIcon;

  isSelected?: boolean;
  onClick?: (name: string) => void;

  mode?: "mobile" | "desktop" | "compact";

  className?: string;
  iconClassName?: string;
  textClassName?: string;

  variant?: "default" | "minimal" | "pill";
}

export const NavLink = ({
  href,
  name,
  icon: Icon,
  isSelected = false,
  onClick,
  mode = "mobile",
  className = "",
  iconClassName = "",
  textClassName = "",
  variant = "default",
}: NavLinkProps) => {
  const handleClick = () => {
    if (onClick) onClick(name);
  };

  const baseClasses =
    "group relative flex items-center transition-all duration-200";

  const modeClasses = {
    mobile: "gap-3 rounded-xl px-4 py-2.5 text-sm font-medium",
    desktop: "gap-2 rounded-xl px-4 py-2.5 text-sm font-medium",
    compact: "gap-2 rounded-xl px-3 py-2 text-sm font-medium",
  };

  const variantClasses = {
    default: isSelected
      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
      : "text-gray-300 hover:bg-gray-800/50 hover:text-teal-500",
    minimal: isSelected
      ? "text-teal-500 border-b-2 border-teal-500"
      : "text-gray-300 hover:text-teal-500 border-b-2 border-transparent",
    pill: isSelected
      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md"
      : "text-gray-300 hover:bg-teal-500/10 hover:text-teal-400",
  };

  const iconSizeClasses = {
    mobile: "h-5 w-5",
    desktop: "h-4 w-4",
    compact: "h-4 w-4",
  };

  const showText = {
    mobile: true,
    desktop: true,
    compact: false,
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        baseClasses,
        modeClasses[mode],
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon className={cn(iconSizeClasses[mode], iconClassName)} />}

      {showText[mode] && (
        <span
          className={cn(
            "font-medium",
            mode === "desktop" && "hidden xl:inline",
            textClassName
          )}
        >
          {name}
        </span>
      )}
    </Link>
  );
};

export const MobileNavLink = (props: Omit<NavLinkProps, "mode">) => (
  <NavLink {...props} mode="mobile" />
);

export const DesktopNavLink = (props: Omit<NavLinkProps, "mode">) => (
  <NavLink {...props} mode="desktop" />
);

export const CompactNavLink = (props: Omit<NavLinkProps, "mode">) => (
  <NavLink {...props} mode="compact" />
);
