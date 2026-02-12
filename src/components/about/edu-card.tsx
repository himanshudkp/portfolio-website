import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { LocationPin } from "../ui/location-pin";
import { InfoCard } from "../ui/info-card";
import { HighlightText } from "../ui/highlight-text";
import { Fragment } from "react";

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  highlights: readonly string[];
}

export const EducationCard = ({
  degree,
  institution,
  location,
  duration,
  description,
  highlights,
}: EducationCardProps) => {
  const renderDescriptionWithHighlights = (text: string) => {
    if (!highlights || highlights.length === 0) return text;

    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
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
    <InfoCard>
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <div className="pl-5">
          <motion.h3
            className="text-lg sm:text-xl font-bold text-teal-300 mb-1.5"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            {degree}
          </motion.h3>
          <motion.p
            className="text-gray-300 font-medium mb-1 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {institution}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <LocationPin
              location={location}
              className="text-gray-500 text-xs sm:text-sm"
            />
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>{duration}</span>
            </div>
          </motion.div>

          {description && (
            <motion.p
              className="text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {renderDescriptionWithHighlights(description)}
            </motion.p>
          )}
        </div>
      </motion.div>
    </InfoCard>
  );
};
