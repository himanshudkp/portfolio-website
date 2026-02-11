import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data";
import { containerVariants, itemVariants } from "@/utils";
import { HighlightText } from "../highlight-text";
import { Fragment } from "react";

export const AboutSection = () => {
  const { paragraphs, highlights } = ABOUT_CONTENT;

  const escapeRegExp = (string: string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const renderParagraphWithHighlights = (text: string) => {
    const escapedHighlights = highlights.map(escapeRegExp);
    const regex = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

    const parts = text.split(regex);

    return parts.map((part, idx) => {
      const isHighlight = highlights.some(
        (h) => h.toLowerCase() === part.toLowerCase(),
      );

      return isHighlight ? (
        <HighlightText key={idx}>{part}</HighlightText>
      ) : (
        <Fragment key={idx}>{part}</Fragment>
      );
    });
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start gap-6">
        <motion.div className="flex-1" variants={itemVariants}>
          {paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              className={`text-gray-300 leading-relaxed text-sm sm:text-base ${
                idx < paragraphs.length - 1 ? "mb-3.5" : ""
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {renderParagraphWithHighlights(paragraph)}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
