import { SOCIAL_LINKS } from "@/data";
import { IconLinks } from "./ui";

export const SocialLinks = () => {
  return (
    <>
      {SOCIAL_LINKS.map((social) => {
        return <IconLinks key={crypto.randomUUID()} social={social} />;
      })}
    </>
  );
};
