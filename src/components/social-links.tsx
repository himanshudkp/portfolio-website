import { SOCIAL_LINKS } from "@/data";
import { Button } from "./ui/button";

export const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-2.5">
      {SOCIAL_LINKS.map((social) => {
        return (
          <Button
            key={crypto.randomUUID()}
            icon={social.icon}
            href={social.href}
            variant="outline"
            size="lg"
            ariaLabel={social.label}
          />
        );
      })}
    </div>
  );
};
