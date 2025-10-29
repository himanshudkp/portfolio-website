import { easeOut, motion } from "framer-motion";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

type BadgeVariant = "default" | "outline" | "glow";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeSingleProps {
  text: string;
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
  { container: string; icon: number; text: string }
> = {
  sm: {
    container: "px-3 py-1.5 text-xs",
    icon: 14,
    text: "text-xs",
  },
  md: {
    container: "px-4 py-2 text-sm",
    icon: 16,
    text: "text-sm",
  },
  lg: {
    container: "px-5 py-2.5 text-base",
    icon: 18,
    text: "text-base",
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

export const BadgeSingle = ({
  text,
  variant = "default",
  size = "md",
}: BadgeSingleProps) => {
  const showPulse = variant === "glow";
  const showShimmer = variant === "default" || variant === "glow";

  return (
    <motion.span
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size].container}
        rounded-full font-medium relative overflow-hidden group cursor-default inline-block
      `}
      variants={badgeVariants}
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
          }}
        />
      )}

      <span
        className={`relative z-10 font-semibold tracking-wide ${sizeStyles[size].text}`}
      >
        {text}
      </span>
    </motion.span>
  );
};
