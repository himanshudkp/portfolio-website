import { FC, useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/utils";
import Image from "next/image";

interface Screenshot {
  title: string;
  url: string; // Image URL
  description?: string;
}

interface PortfolioCarouselModalProps {
  screenshots: Screenshot[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  projectTitle?: string;
}

export const PortfolioCarouselModal: FC<PortfolioCarouselModalProps> = ({
  screenshots,
  initialIndex = 0,
  isOpen,
  onClose,
  isDark,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, currentIndex, screenshots.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsZoomed(false);
  }, [screenshots.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
    setIsZoomed(false);
  }, [screenshots.length]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const toggleZoom = useCallback(() => {
    setIsZoomed((prev) => !prev);
  }, []);

  if (!isOpen || screenshots.length === 0) return null;

  const currentScreenshot = screenshots[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleBackdropClick}
      />

      {/* Modal Container */}
      <div
        className={cn(
          "relative flex h-full w-full flex-col transition-all duration-500 sm:h-auto sm:max-h-[95vh] sm:max-w-6xl sm:rounded-3xl",
          isDark
            ? "sm:border sm:border-gray-800/50 sm:bg-gray-900/50"
            : "sm:border sm:border-gray-200/50 sm:bg-white/50",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Header */}
        <header
          className={cn(
            "flex items-center justify-between gap-4 border-b px-4 py-4 backdrop-blur-xl sm:px-6 sm:rounded-t-3xl",
            isDark
              ? "border-gray-800/50 bg-gray-900/95"
              : "border-gray-200/50 bg-white/95"
          )}
        >
          <div className="min-w-0 flex-1">
            {projectTitle && (
              <p
                className={cn(
                  "mb-1 text-xs font-semibold uppercase tracking-wider",
                  isDark ? "text-gray-500" : "text-gray-500"
                )}
              >
                {projectTitle}
              </p>
            )}
            <h2
              className={cn(
                "truncate text-lg font-bold sm:text-xl",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              {currentScreenshot.title}
            </h2>
            {currentScreenshot.description && (
              <p
                className={cn(
                  "mt-1 truncate text-sm",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {currentScreenshot.description}
              </p>
            )}
          </div>

          {/* Counter */}
          <div
            className={cn(
              "flex h-10 items-center gap-2 rounded-xl border px-3 backdrop-blur-xl",
              isDark
                ? "border-gray-700/50 bg-gray-800/50 text-gray-300"
                : "border-gray-200 bg-white text-gray-700"
            )}
          >
            <span className="text-sm font-bold">{currentIndex + 1}</span>
            <span className="text-xs text-gray-500">/</span>
            <span className="text-sm text-gray-500">{screenshots.length}</span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:rotate-90",
              isDark
                ? "border border-gray-700/50 bg-gray-800/50 text-gray-400 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
            )}
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Image Container */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8">
          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                disabled={screenshots.length <= 1}
                className={cn(
                  "absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 disabled:opacity-30 sm:left-4 sm:h-14 sm:w-14",
                  isDark
                    ? "border border-gray-700/50 bg-gray-900/80 text-white hover:bg-gray-800"
                    : "border border-gray-200 bg-white/90 text-gray-900 hover:bg-gray-50"
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                disabled={screenshots.length <= 1}
                className={cn(
                  "absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 disabled:opacity-30 sm:right-4 sm:h-14 sm:w-14",
                  isDark
                    ? "border border-gray-700/50 bg-gray-900/80 text-white hover:bg-gray-800"
                    : "border border-gray-200 bg-white/90 text-gray-900 hover:bg-gray-50"
                )}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Zoom Button */}
          <button
            onClick={toggleZoom}
            className={cn(
              "absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12",
              isDark
                ? "border border-gray-700/50 bg-gray-900/80 text-white hover:bg-gray-800"
                : "border border-gray-200 bg-white/90 text-gray-900 hover:bg-gray-50"
            )}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
          >
            {isZoomed ? (
              <ZoomOut className="h-5 w-5" />
            ) : (
              <ZoomIn className="h-5 w-5" />
            )}
          </button>

          {/* Image */}
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={currentScreenshot.url}
              alt={currentScreenshot.title}
              className={cn(
                "max-h-full max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-500",
                isZoomed
                  ? "cursor-zoom-out scale-150 sm:scale-125"
                  : "cursor-zoom-in scale-100"
              )}
              onClick={toggleZoom}
            />
          </div>
        </div>

        {/* Thumbnail Strip */}
        {screenshots.length > 1 && (
          <div
            className={cn(
              "border-t px-4 py-4 backdrop-blur-xl sm:rounded-b-3xl",
              isDark
                ? "border-gray-800/50 bg-gray-900/95"
                : "border-gray-200/50 bg-white/95"
            )}
          >
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsZoomed(false);
                  }}
                  className={cn(
                    "group relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 sm:h-20 sm:w-32",
                    index === currentIndex
                      ? "border-blue-500 ring-2 ring-blue-500/50"
                      : isDark
                      ? "border-gray-700 hover:border-gray-600"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-blue-500/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage component
export const ExampleUsage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isDark = true; // Get from your theme context

  const screenshots = [
    {
      title: "Homepage Design",
      url: "https://via.placeholder.com/1200x800/3b82f6/ffffff?text=Homepage",
      description: "Modern landing page with hero section",
    },
    {
      title: "Dashboard View",
      url: "https://via.placeholder.com/1200x800/8b5cf6/ffffff?text=Dashboard",
      description: "Analytics dashboard with charts",
    },
    {
      title: "Mobile Responsive",
      url: "https://via.placeholder.com/800x1200/ec4899/ffffff?text=Mobile",
      description: "Fully responsive mobile design",
    },
    {
      title: "User Profile",
      url: "https://via.placeholder.com/1200x800/10b981/ffffff?text=Profile",
      description: "User profile and settings page",
    },
  ];

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Click any image to view in carousel
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
            className="group overflow-hidden rounded-xl border border-gray-700 transition-all hover:scale-105 hover:border-blue-500"
          >
            <Image
              src={screenshot.url}
              alt={screenshot.title}
              className="aspect-video w-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="bg-gray-800 p-2">
              <p className="text-sm font-semibold text-white">
                {screenshot.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <PortfolioCarouselModal
        screenshots={screenshots}
        initialIndex={selectedIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDark={isDark}
        projectTitle="My Awesome Project"
      />
    </div>
  );
};
