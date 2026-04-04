import avatarSrc from "assets/images/avatar-abdelrhman.webp";

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  location: string;
  bio: string;
  links: readonly SocialLink[];
  avatarSrc: string;
};

export const profile: Profile = {
  name: "Abdelrhman Abdelaal",
  location: "Beni Suef, Egypt",
  bio: "Front-end developer and avid learner.",
  avatarSrc,
  links: [
    { label: "GitHub", href: "https://github.com/MrBlackvanta" },
    {
      label: "Frontend Mentor",
      href: "https://www.frontendmentor.io/profile/MrBlackvanta",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdelrhman-vanta" },
  ],
};
