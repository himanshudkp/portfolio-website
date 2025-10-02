import { CONTACT_LINKS, SOCIAL_LINKS } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { FormData, Link } from "@/types";
import BtnLink from "@/ui/BtnLink";
import { cn } from "@/utils";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

const SectionHeader = () => {
  const { isDark } = useTheme();
  return (
    <div className="mb-12 text-center lg:mb-16">
      <h2
        className={cn(
          "mb-4 text-4xl font-bold [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-gray-900"
        )}
      >
        Get In Touch
      </h2>
      <p
        className={cn(
          "mx-auto max-w-2xl text-base lg:text-lg",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Have a project in mind? {"Let's"} discuss how I can help bring your
        ideas to life
      </p>
    </div>
  );
};

const ContactInfoCard = ({ info }: { info: Link }) => {
  const { isDark } = useTheme();
  const Icon = info.icon;

  return (
    <a
      href={info.href || "#"}
      target="_blank"
      className={cn(
        "block rounded-lg border p-4 transition-colors hover:border-blue-500",
        isDark
          ? "border-gray-700 bg-gray-800 hover:bg-gray-750"
          : "border-gray-200 bg-white hover:bg-gray-50"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg",
            isDark ? "bg-gray-700" : "bg-gray-100"
          )}
        >
          <Icon
            className={cn(
              "h-6 w-6",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "mb-1 text-sm font-medium",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {info.title}
          </h3>
          <p
            className={cn(
              "truncate font-medium",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            {info.value}
          </p>
        </div>
      </div>
    </a>
  );
};

const SocialLinks = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={cn(
        "rounded-lg border p-6",
        isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
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
            <BtnLink
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              variant="icon"
              size="icon"
              className="h-12 w-12 rounded-lg"
            >
              <IconComponent
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              />
            </BtnLink>
          );
        })}
      </div>
    </div>
  );
};

const ContactForm = ({
  formData,
  onFormChange,
  onSubmit,
}: {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={cn(
        "rounded-lg border p-6 sm:p-8 lg:p-10",
        isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
      )}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className={cn(
                "mb-2 block text-sm font-medium",
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
                "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                isDark
                  ? "border-gray-700 bg-gray-900 text-white placeholder-gray-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              )}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={cn(
                "mb-2 block text-sm font-medium",
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
                "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                isDark
                  ? "border-gray-700 bg-gray-900 text-white placeholder-gray-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              )}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className={cn(
              "mb-2 block text-sm font-medium",
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
              "w-full resize-none rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
              isDark
                ? "border-gray-700 bg-gray-900 text-white placeholder-gray-500"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
            )}
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <span>Send Message</span>
          <Send className="h-5 w-5" />
        </button>

        <p className="text-center text-xs text-gray-500">
          {"I'll"} respond within 24 hours
        </p>
      </form>
    </div>
  );
};

export const Contact = () => {
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

  return (
    <section
      id="contact"
      className={cn(
        "px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-6 lg:col-span-2">
            {CONTACT_LINKS.map((info) => (
              <ContactInfoCard key={info.title} info={info} />
            ))}

            <SocialLinks />
          </div>

          <div className="lg:col-span-3">
            <ContactForm
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
