import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";

  href?: string;
  download?: boolean | string;
  onClick?: () => void;

  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;

  ariaLabel?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  icon: Icon,
  iconPosition = "left",
  href,
  download,
  onClick,
  variant = "outline",
  size = "md",
  className = "",
  ariaLabel,
  disabled = false,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
  };

  const variantClasses = {
    primary:
      "border-2 border-teal-500 bg-teal-500 text-white hover:bg-teal-600 hover:border-teal-600",
    secondary:
      "border-2 border-[#AED4CE]/30 bg-[#AED4CE]/10 text-[#F5F5F5] hover:border-[#AED4CE] hover:bg-[#AED4CE]/20 hover:text-[#AED4CE]",
    outline:
      "border-2 border-gray-700 text-gray-300 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400",
    ghost:
      "border-2 border-transparent text-gray-300 hover:bg-teal-500/10 hover:text-teal-400",
  };

  const baseClasses = `
    group inline-flex items-center justify-center 
    font-semibold transition-all duration-200 rounded-lg
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `.trim();

  const IconComponent = Icon && (
    <Icon
      className={`${iconSizeClasses[size]} transition-transform ${
        iconPosition === "right" ? "group-hover:translate-x-1" : ""
      }`}
    />
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && IconComponent}
      {children && <span>{children}</span>}
      {Icon && iconPosition === "right" && IconComponent}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={baseClasses}
        aria-label={
          ariaLabel || (typeof children === "string" ? children : undefined)
        }
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
    >
      {content}
    </button>
  );
};
