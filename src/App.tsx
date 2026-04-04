import { ProfileCard } from "components";

export default function App() {
  return (
    <div className="bg-grey-900 relative grid h-dvh w-full grid-cols-1 place-content-center px-6.75">
      <main className="mx-auto w-full max-w-96">
        <ProfileCard />
      </main>
      <footer className="text-preset-2 absolute bottom-4 w-full text-center font-light text-white">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-green font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="text-green font-bold"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </div>
  );
}
