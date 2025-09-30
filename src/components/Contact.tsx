import {
  CONTACT_INFO,
  getThemeClasses,
  SOCIAL_LINKS,
} from "@/data/cantact-data";
import { useTheme } from "@/hooks/useTheme";
import { ContactInfo, FormData } from "@/types";
import { Send, Sparkles } from "lucide-react";
import { useState, FormEvent } from "react";

const SectionHeader = ({ isDark }: { isDark: boolean }) => {
  const theme = getThemeClasses(isDark);

  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-blue-500" />
        <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
          Get In Touch
        </span>
        <Sparkles className="w-5 h-5 text-blue-500" />
      </div>
      <h2
        className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${theme.heading}`}
      >
        Let&apos;s Work Together
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
      <p className={`text-lg max-w-2xl mx-auto ${theme.subheading}`}>
        Have a project in mind? Let&apos;s discuss how I can help bring your
        ideas to life
      </p>
    </div>
  );
};

const ContactInfoCard = ({
  info,
  isDark,
}: {
  info: ContactInfo;
  isDark: boolean;
}) => {
  const theme = getThemeClasses(isDark);
  const Icon = info.icon;

  const content = (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`font-semibold text-sm mb-1 ${theme.contactTitle}`}>
          {info.title}
        </h3>
        <p className={`font-medium truncate ${theme.contactValue}`}>
          {info.value}
        </p>
      </div>
    </div>
  );

  return info.href ? (
    <a
      href={info.href}
      className={`block rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 ${theme.contactCard}`}
    >
      {content}
    </a>
  ) : (
    <div className={`rounded-2xl p-4 ${theme.contactCardStatic}`}>
      {content}
    </div>
  );
};

const SocialLinks = ({ isDark }: { isDark: boolean }) => {
  const theme = getThemeClasses(isDark);

  return (
    <div className={`rounded-2xl p-6 ${theme.socialContainer}`}>
      <h3 className={`font-bold text-lg mb-4 ${theme.heading}`}>
        Connect With Me
      </h3>
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex-1 flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${theme.socialButton}`}
            >
              <Icon className={`w-5 h-5 ${theme.socialIcon}`} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const AvailabilityBadge = ({ isDark }: { isDark: boolean }) => {
  const theme = getThemeClasses(isDark);

  return (
    <div className={`rounded-2xl p-4 text-center ${theme.availabilityBadge}`}>
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className={`font-semibold text-sm ${theme.availabilityText}`}>
          Available for Work
        </span>
      </div>
      <p className={`text-xs ${theme.availabilitySubtext}`}>
        Open to new opportunities
      </p>
    </div>
  );
};

const ContactForm = ({
  isDark,
  formData,
  onFormChange,
  onSubmit,
}: {
  isDark: boolean;
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}) => {
  const theme = getThemeClasses(isDark);

  return (
    <div
      className={`rounded-3xl p-8 shadow-xl relative overflow-hidden ${theme.formContainer}`}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-0" />

      <form onSubmit={onSubmit} className="relative z-10 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-semibold mb-2 ${theme.label}`}
            >
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${theme.input}`}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-semibold mb-2 ${theme.label}`}
            >
              Your Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => onFormChange("email", e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${theme.input}`}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-semibold mb-2 ${theme.label}`}
          >
            Your Message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => onFormChange("message", e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${theme.input}`}
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        <p className="text-xs text-center text-gray-500">
          I&apos;ll respond within 24 hours
        </p>
      </form>
    </div>
  );
};

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const theme = getThemeClasses(isDark);

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${theme.section}`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeader isDark={isDark} />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((info) => (
              <ContactInfoCard key={info.title} info={info} isDark={isDark} />
            ))}

            <SocialLinks isDark={isDark} />
            <AvailabilityBadge isDark={isDark} />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm
              isDark={isDark}
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
