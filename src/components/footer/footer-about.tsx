import { LogoBrand } from "../ui/logo-brand";
import SocialLinks from "../ui/social-links";

export const FooterAbout = () => {
  return (
    <div className="space-y-4">
      <LogoBrand />

      <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-gray-400">
        Full-Stack Developer crafting scalable Web, Mobile & AI-powered products
        with a focus on performance, clean architecture, and real-world impact.
      </p>

      <SocialLinks variant="hero" />
    </div>
  );
};
