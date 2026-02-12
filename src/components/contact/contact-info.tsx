import { CONTACT_INFO, SOCIALS } from "@/lib/constants";

export const ContactInfo = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
          <a
            key={text}
            href={href}
            className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#252525] px-4 py-2.5 text-gray-300 hover:border-teal-500/50 transition"
          >
            <Icon size={16} className="text-teal-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm">{text}</span>
          </a>
        ))}
      </div>

      <div className="flex gap-2.5 pt-1">
        {SOCIALS.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 p-2.5 text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
        Available for full-time roles, and collaborations across{" "}
        <span className="text-teal-400">Web, Mobile & AI</span>.
      </p>
    </div>
  );
};
