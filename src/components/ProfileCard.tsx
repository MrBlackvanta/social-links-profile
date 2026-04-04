import avatar from "assets/images/avatar-abdelrhman.webp";

export default function ProfileCard() {
  return (
    <article className="bg-grey-800 text-preset-2 grid w-full max-w-96 place-items-center rounded-xl p-6 text-white md:p-10">
      <figure>
        <img
          src={avatar}
          alt="Abdelrhman Abdelaal"
          className="mx-auto mb-6 size-22 rounded-full object-cover object-[50%_20%]"
        />
        <figcaption className="text-preset-1">Abdelrhman Abdelaal</figcaption>
      </figure>
      <p className="text-preset-2-bold text-green mt-1 mb-6">
        Beni Suef, Egypt
      </p>
      <p className="mb-6">&quot;Front-end developer and avid learner.&quot;</p>
      <ul className="grid w-full gap-4">
        <li className="social-link">
          <a
            href="https://github.com/MrBlackvanta"
            target="_blank"
            rel="noopener noreferrer"
          />
          GitHub
        </li>
        <li className="social-link">
          <a
            href="https://www.frontendmentor.io/profile/MrBlackvanta"
            target="_blank"
            rel="noopener noreferrer"
          />
          Frontend Mentor
        </li>
        <li className="social-link">
          <a
            href="https://www.linkedin.com/in/abdelrhman-vanta"
            target="_blank"
            rel="noopener noreferrer"
          />
          LinkedIn
        </li>
      </ul>
    </article>
  );
}
