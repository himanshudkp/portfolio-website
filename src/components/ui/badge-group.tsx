import { containerVariants, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "outline" | "glow";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeGroupProps {
  badges: string[];
  maxDisplay?: number;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[#1E1E1E] border border-teal-500/30 text-teal-300 shadow-lg shadow-teal-500/5",
  outline:
    "bg-transparent border-2 border-teal-500/50 text-teal-400 shadow-none",
  glow: "bg-teal-500/10 border border-teal-500/50 text-teal-200 shadow-xl shadow-teal-500/20",
};

const sizeStyles: Record<
  BadgeSize,
  { container: string; text: string; gap: string }
> = {
  sm: {
    container: "px-2 py-0.5",
    text: "text-xs",
    gap: "gap-1.5",
  },
  md: {
    container: "px-2.5 py-1",
    text: "text-xs",
    gap: "gap-2",
  },
  lg: {
    container: "px-3 py-1.5",
    text: "text-sm",
    gap: "gap-2",
  },
};

const hoverEffects: Record<
  BadgeVariant,
  {
    scale: number;
    borderColor: string;
    boxShadow?: string;
    backgroundColor?: string;
  }
> = {
  default: {
    scale: 1.05,
    borderColor: "rgba(20, 184, 166, 0.6)",
    boxShadow: "0 0 20px rgba(20, 184, 166, 0.15)",
  },
  outline: {
    scale: 1.05,
    borderColor: "rgba(20, 184, 166, 0.8)",
    backgroundColor: "rgba(20, 184, 166, 0.05)",
  },
  glow: {
    scale: 1.05,
    borderColor: "rgba(20, 184, 166, 0.8)",
    boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)",
  },
};

const remainingStyles: Record<BadgeVariant, string> = {
  default: "bg-[#1E1E1E]/50 border border-gray-700 text-gray-400",
  outline: "bg-transparent border-2 border-gray-600 text-gray-400",
  glow: "bg-teal-500/5 border border-teal-500/20 text-teal-400/60",
};

export const BadgeGroup = ({
  badges,
  maxDisplay,
  variant = "default",
  size = "md",
}: BadgeGroupProps) => {
  const displayBadges = maxDisplay ? badges.slice(0, maxDisplay) : badges;
  const remaining =
    maxDisplay && badges.length > maxDisplay ? badges.length - maxDisplay : 0;

  const showPulse = variant === "glow";
  const showShimmer = variant === "default" || variant === "glow";

  return (
    <motion.div
      className={`flex flex-wrap ${sizeStyles[size].gap}`}
      variants={containerVariants}
    >
      {displayBadges.map((badge, index) => (
        <motion.span
          key={index}
          className={`
            ${variantStyles[variant]}
            ${sizeStyles[size].container}
            ${sizeStyles[size].text}
            rounded-full font-medium relative overflow-hidden group cursor-default
          `}
          variants={itemVariants}
          whileHover={hoverEffects[variant]}
          whileTap={{ scale: 0.98 }}
        >
          {showShimmer && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}

          <motion.div
            className={`absolute inset-0 rounded-full ${
              variant === "glow" ? "bg-teal-500/10" : "bg-teal-500/5"
            }`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {showPulse && (
            <motion.div
              className="absolute inset-0 border border-teal-500/30 rounded-full"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          )}

          <span className="relative z-10 font-semibold tracking-wide">
            {badge}
          </span>
        </motion.span>
      ))}

      {remaining > 0 && (
        <motion.span
          className={`
            ${remainingStyles[variant]}
            ${sizeStyles[size].container}
            ${sizeStyles[size].text}
            rounded-full font-medium cursor-default
          `}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-semibold tracking-wide">+{remaining} more</span>
        </motion.span>
      )}
    </motion.div>
  );
};
