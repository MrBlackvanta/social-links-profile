import avatar from "assets/images/avatar-abdelrhman.webp";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/MrBlackvanta",
  },
  {
    label: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/MrBlackvanta",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelrhman-vanta",
  },
] as const;

export default function ProfileCard() {
  return (
    <article className="bg-grey-800 text-preset-2 grid place-items-center rounded-xl p-6 text-center text-white md:p-10">
      <figure>
        <img
          src={avatar}
          alt="Abdelrhman Abdelaal"
          className="mx-auto mb-6 size-22 rounded-full object-cover object-[50%_15%]"
        />
        <figcaption className="text-preset-1">Abdelrhman Abdelaal</figcaption>
      </figure>
      <p className="text-preset-2-bold text-green mt-1 mb-6">
        Beni Suef, Egypt
      </p>
      <p className="mb-6">&quot;Front-end developer and avid learner.&quot;</p>
      <ul className="grid w-full gap-4">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              className="social-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
