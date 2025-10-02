"use client";
import React from "react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import Link from "next/link";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "selected"
  | "icon"
  | "glass";

type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "icon"
  | "iconSm"
  | "nav"
  | "navMobile"
  | "contact";

interface BtnLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  target?: string;
  download?: boolean | string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isSelected?: boolean;
  fullWidth?: boolean;
  "aria-label"?: string;
}

const BtnLink: React.FC<BtnLinkProps> = ({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  target,
  rel,
  download,
  onClick,
  isSelected = false,
  fullWidth = false,
  "aria-label": ariaLabel,
  ...props
}) => {
  const { isDark } = useTheme();
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-xl";

  const variants: Record<Variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: isDark
      ? "border-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
      : "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
    outline: isDark
      ? "border-2 border-gray-700 text-gray-300 hover:border-blue-600 hover:bg-blue-600/10 hover:text-white"
      : "border-2 border-gray-300 text-gray-700 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700",
    ghost: isDark
      ? "text-gray-300 hover:bg-gray-700/60 hover:text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
    link: isDark
      ? "text-gray-400 hover:text-white"
      : "text-gray-600 hover:text-gray-900",
    selected: isDark ? "bg-blue-600 text-white" : "bg-blue-700 text-white",
    icon: isDark
      ? "border border-gray-700 bg-gray-800 hover:bg-gray-700"
      : "border border-gray-200 bg-white hover:bg-gray-100",
    glass: isDark
      ? "border border-gray-700 bg-gray-900/50 backdrop-blur-xl text-white hover:bg-gray-800"
      : "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-5 py-2.5",
    lg: "px-6 py-3",
    xl: "px-8 py-4 font-bold",
    icon: "h-12 w-12 p-0",
    iconSm: "h-9 w-9 p-0",
    nav: "px-4 py-2.5 xl:px-5 rounded-lg",
    navMobile: "px-4 py-3.5",
    contact: "gap-3 px-0 py-0",
  };

  let computedVariant: Variant = variant;
  if (isSelected) {
    computedVariant = "selected";
  }

  const buttonClassName = cn(
    baseStyles,
    variants[computedVariant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const IconComponent = icon;
  const getIconSize = (): string => {
    if (size === "xl") return "h-5 w-5";
    if (size === "sm") return "h-3.5 w-3.5";
    return "h-4 w-4";
  };

  const renderIcon = IconComponent && (
    <IconComponent className={getIconSize()} />
  );

  const content = (
    <>
      {iconPosition === "left" && renderIcon}
      {children}
      {iconPosition === "right" && renderIcon}
    </>
  );

  return (
    <Link
      href={href}
      className={buttonClassName}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </Link>
  );
};

export default BtnLink;
