import { CONTACT_INFO } from "@/lib/constants";

export const FooterContact = () => {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
        Contact
      </h4>
      <ul className="space-y-3">
        {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
          <li key={text}>
            <a
              href={href}
              className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Icon size={14} className="text-teal-400 flex-shrink-0" />
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
