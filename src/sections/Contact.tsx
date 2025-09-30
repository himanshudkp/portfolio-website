import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact-data";
import { useTheme } from "@/hooks/useTheme";
import { ContactInfo, FormData } from "@/types";
import { ButtonLink } from "@/ui/ButtonLink";
import { SocialLink } from "@/ui/SocialLink";
import { cn } from "@/utils";
import {
  Send,
  Sparkles,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useState, FormEvent, useEffect } from "react";

const SectionHeader = ({
  isDark,
  isVisible,
}: {
  isDark: boolean;
  isVisible: boolean;
}) => {
  return (
    <div
      className={cn(
        "mb-12 text-center transition-all duration-1000 lg:mb-16",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
        <Sparkles className="h-4 w-4 animate-pulse text-blue-500" />
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            isDark ? "text-blue-400" : "text-blue-600"
          )}
        >
          Get In Touch
        </span>
        <Sparkles className="h-4 w-4 animate-pulse text-purple-500" />
      </div>

      <h2
        className={cn(
          "mb-4 text-4xl font-bold transition-colors duration-300 [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
          isDark
            ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
        )}
      >
        {"Let's"} Work Together
      </h2>

      <p
        className={cn(
          "mx-auto max-w-2xl text-sm sm:text-base lg:text-lg",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Have a project in mind? {"Let's"} discuss how I can help bring your
        ideas to life
      </p>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
    </div>
  );
};

const ContactInfoCard = ({
  info,
  isDark,
  delay = 0,
}: {
  info: ContactInfo;
  isDark: boolean;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const Icon = info.icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <ButtonLink
      href={info.href || ""}
      variant="default"
      size="lg"
      className={cn(
        "group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-700 hover:scale-[1.02]",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-xl hover:border-gray-600/50"
          : "border border-gray-200/50 bg-white/80 shadow-lg hover:shadow-xl",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          info.gradient.replace("from-", "from-").replace("to-", "to-") + "/5"
        )}
      />

      <div className="relative flex items-center gap-4 p-4">
        <div className="relative">
          {/* Glow */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-100",
              `bg-gradient-to-r ${info.gradient}`
            )}
          />
          <div
            className={cn(
              "relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              `bg-gradient-to-r ${info.gradient}`
            )}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "mb-1 text-sm font-semibold",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {info.title}
          </h3>
          <p
            className={cn(
              "truncate font-semibold transition-colors duration-300",
              isDark
                ? "text-gray-200 group-hover:text-white"
                : "text-gray-800 group-hover:text-gray-900"
            )}
          >
            {info.value}
          </p>
        </div>

        <ArrowRight
          className={cn(
            "h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1",
            isDark ? "text-gray-600" : "text-gray-400"
          )}
        />
      </div>
    </ButtonLink>
  );
};

const SocialLinks = ({
  isDark,
  delay = 0,
}: {
  isDark: boolean;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl p-6 backdrop-blur-xl transition-all duration-700",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80"
          : "border border-gray-200/50 bg-white/80 shadow-lg",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <h3
        className={cn(
          "mb-4 text-lg font-bold",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Connect With Me
      </h3>
      <div className="flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((social) => {
          const IconComponent = social.icon;
          return (
            <SocialLink
              key={social.label}
              href={social.href}
              label={social.label}
              icon={
                <IconComponent
                  className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    isDark
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-900"
                  )}
                />
              }
              color={social.color}
              className={cn(
                "group relative h-12 w-12 backdrop-blur-xl",
                isDark
                  ? "border border-gray-700/50 bg-gray-800/50"
                  : "border border-gray-200/50 bg-white/50"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

const AvailabilityBadge = ({
  isDark,
  delay = 0,
}: {
  isDark: boolean;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const locations = [
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Noida",
    "Gurugram",
    "Indore",
    "Delhi",
  ];
  const workModes = ["Hybrid", "Remote", "On-site"];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl p-6 backdrop-blur-xl transition-all duration-700",
        isDark
          ? "border border-green-500/30 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"
          : "border border-green-200/50 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 shadow-lg",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <span
            className={cn(
              "text-sm font-bold",
              isDark ? "text-green-400" : "text-green-600"
            )}
          >
            Available for Work
          </span>
        </div>
        <CheckCircle2 className="h-5 w-5 text-green-500" />
      </div>

      {/* Work Mode */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase
            className={cn(
              "h-4 w-4",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-wide",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Work Mode
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {workModes.map((mode) => (
            <span
              key={mode}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold",
                isDark
                  ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                  : "bg-white text-gray-700 border border-gray-200"
              )}
            >
              {mode}
            </span>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <MapPin
            className={cn(
              "h-4 w-4",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-wide",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Preferred Locations
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <span
              key={location}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold",
                isDark
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              )}
            >
              {location}
            </span>
          ))}
        </div>
      </div>

      <p
        className={cn(
          "mt-4 text-xs",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Open to new opportunities and exciting projects
      </p>
    </div>
  );
};

const ContactForm = ({
  isDark,
  formData,
  onFormChange,
  onSubmit,
  delay = 0,
}: {
  isDark: boolean;
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: FormEvent) => void;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl shadow-2xl transition-all duration-1000 sm:p-8 lg:p-10",
        isDark
          ? "border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80"
          : "border border-gray-200/50 bg-white/80 shadow-gray-200/50",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      {/* Decorative gradient */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />

      <form onSubmit={onSubmit} className="relative z-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className={cn(
                "mb-2 block text-sm font-semibold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              className={cn(
                "w-full rounded-xl border-2 px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
                isDark
                  ? "border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-200 bg-white/50 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              )}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={cn(
                "mb-2 block text-sm font-semibold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              Your Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => onFormChange("email", e.target.value)}
              className={cn(
                "w-full rounded-xl border-2 px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
                isDark
                  ? "border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-blue-500"
                  : "border-gray-200 bg-white/50 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              )}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className={cn(
              "mb-2 block text-sm font-semibold",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            Your Message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => onFormChange("message", e.target.value)}
            className={cn(
              "w-full resize-none rounded-xl border-2 px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
              isDark
                ? "border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-blue-500"
                : "border-gray-200 bg-white/50 text-gray-900 placeholder-gray-400 focus:border-blue-500"
            )}
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-pos-100 hover:shadow-blue-500/50"
        >
          {" "}
          <span>Send Message</span>{" "}
          <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />{" "}
          {/* Shimmer */}{" "}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />{" "}
        </button>

        <p className="text-center text-xs text-gray-500">
          {"I'll"} respond within 24 hours
        </p>
      </form>
    </div>
  );
};

export default function Contact() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section
      id="contact"
      className={cn(
        "relative flex min-h-screen items-center px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl transition-opacity duration-1000 delay-300",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SectionHeader isDark={isDark} isVisible={isVisible} />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            {CONTACT_INFO.map((info, index) => (
              <ContactInfoCard
                key={info.title}
                info={info}
                isDark={isDark}
                delay={index * 150}
              />
            ))}

            <SocialLinks isDark={isDark} delay={CONTACT_INFO.length * 150} />
            <AvailabilityBadge
              isDark={isDark}
              delay={(CONTACT_INFO.length + 1) * 150}
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm
              isDark={isDark}
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
              delay={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
