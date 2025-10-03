import { CONTACT_LINKS, SOCIAL_LINKS } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { FormData, Link } from "@/types";
import BtnLink from "@/ui/BtnLink";
import { cn } from "@/utils";
import { Send, Mail, Sparkles, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

const SectionHeader = () => {
  const { isDark } = useTheme();
  return (
    <div className="mb-16 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-sm",
            isDark
              ? "border-blue-500/30 bg-blue-500/10"
              : "border-blue-200 bg-blue-50"
          )}
        >
          <Mail
            className={cn(
              "h-3.5 w-3.5",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
          <span
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          >
            Get In Touch
          </span>
        </div>
      </div>

      <h2
        className={cn(
          "mb-6 text-4xl font-bold tracking-tight [font-family:var(--font-ovo)] sm:text-5xl lg:text-6xl",
          isDark
            ? "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            : "text-gray-900"
        )}
      >
        Let's Work Together
      </h2>

      <p
        className={cn(
          "mx-auto max-w-2xl text-base sm:text-lg",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Have a project in mind or looking to hire? I'm available for freelance
        work, full-time positions, and exciting collaborations.
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
      rel="noopener noreferrer"
      className={cn(
        "group block rounded-3xl border p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105",
        isDark
          ? "border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border-gray-200 bg-white shadow-xl"
      )}
    >
      <div className="flex items-center gap-5">
        <div
          className={cn(
            "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110",
            "bg-gradient-to-br from-blue-600 to-purple-600"
          )}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "mb-2 text-xs font-bold uppercase tracking-wider",
              isDark ? "text-gray-400" : "text-gray-500"
            )}
          >
            {info.title}
          </h3>
          <p
            className={cn(
              "truncate text-lg font-bold",
              isDark
                ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                : "text-gray-900"
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
        "rounded-3xl border p-7 transition-all duration-300",
        isDark
          ? "border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border-gray-200 bg-white shadow-xl"
      )}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <h3
          className={cn(
            "text-xl font-bold",
            isDark
              ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              : "text-gray-900"
          )}
        >
          Connect on Social
        </h3>
      </div>
      <p
        className={cn(
          "text-sm mb-5",
          isDark ? "text-gray-400" : "text-gray-600"
        )}
      >
        Follow me for updates, insights, and more
      </p>
      <div className="flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={cn(
                "group flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl",
                isDark
                  ? "border-gray-700 bg-gray-900/50 hover:border-blue-600/50"
                  : "border-gray-200 bg-white hover:border-blue-600/50"
              )}
            >
              <IconComponent
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isDark
                    ? "text-gray-400 group-hover:text-blue-400"
                    : "text-gray-600 group-hover:text-blue-600"
                )}
              />
            </a>
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
        "rounded-3xl border p-8 lg:p-10 transition-all duration-300",
        isDark
          ? "border-white/10 bg-gray-800/50 backdrop-blur-xl"
          : "border-gray-200 bg-white shadow-xl"
      )}
    >
      {/* Form Header */}
      <div className="mb-8">
        <h3
          className={cn(
            "text-2xl font-bold mb-3",
            isDark
              ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              : "text-gray-900"
          )}
        >
          Send Me a Message
        </h3>
        <p
          className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}
        >
          Fill out the form below and I'll get back to you as soon as possible
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className={cn(
                "mb-3 block text-sm font-bold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              className={cn(
                "w-full rounded-2xl border px-5 py-4 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
                isDark
                  ? "border-gray-700 bg-gray-900/50 text-white placeholder-gray-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              )}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={cn(
                "mb-3 block text-sm font-bold",
                isDark ? "text-gray-300" : "text-gray-700"
              )}
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => onFormChange("email", e.target.value)}
              className={cn(
                "w-full rounded-2xl border px-5 py-4 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
                isDark
                  ? "border-gray-700 bg-gray-900/50 text-white placeholder-gray-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
              )}
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className={cn(
              "mb-3 block text-sm font-bold",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            Your Message *
          </label>
          <textarea
            id="message"
            required
            rows={7}
            value={formData.message}
            onChange={(e) => onFormChange("message", e.target.value)}
            className={cn(
              "w-full resize-none rounded-2xl border px-5 py-4 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
              isDark
                ? "border-gray-700 bg-gray-900/50 text-white placeholder-gray-500"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
            )}
            placeholder="Tell me about your project, position, or collaboration opportunity..."
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <span>Send Message</span>
          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <div
          className={cn(
            "flex items-center justify-center gap-2 rounded-2xl p-4 border",
            isDark
              ? "bg-blue-600/10 border-blue-600/30"
              : "bg-blue-50 border-blue-200"
          )}
        >
          <Clock
            className={cn(
              "h-4 w-4",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          />
          <p
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-blue-400" : "text-blue-600"
            )}
          >
            Response time: Within 24 hours
          </p>
        </div>
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
        "relative px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 xl:px-[8%]",
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500" : "bg-blue-300"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500" : "bg-purple-300"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeader />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-8 lg:col-span-2">
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
