import { QUICK_LINKS } from "@/lib/constants";

export const FooterNavigation = () => {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
        Navigation
      </h4>
      <ul className="space-y-2.5">
        {QUICK_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs sm:text-sm text-gray-400 hover:text-teal-400 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
