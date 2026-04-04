import { profile } from "data";

export default function ProfileCard() {
  const { name, location, bio, links, avatarSrc } = profile;

  return (
    <article className="bg-grey-800 text-preset-2 grid place-items-center rounded-xl p-6 text-center text-white md:p-10">
      <figure>
        <img
          src={avatarSrc}
          alt={name}
          className="mx-auto mb-6 size-22 rounded-full object-cover object-[50%_15%]"
        />
        <figcaption className="text-preset-1">{name}</figcaption>
      </figure>
      <p className="text-preset-2-bold text-green mt-1 mb-6">{location}</p>
      <p className="mb-6">&quot;{bio}&quot;</p>
      <ul className="grid w-full gap-4">
        {links.map(({ label, href }) => (
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
