import ReactLogo from "@/assets/react.svg";
import ReactRouterLogo_Light from "@/assets/rr_logo_light.svg";
import ReactRouterLogo_Dark from "@/assets/rr_logo_dark.svg";
import TailwindLogo from "@/assets/tailwindcss-mark.d52e9897.svg";
import TypeScriptLogo from "@/assets/ts_logo.svg";
import ViteLogo from "@/assets/vite.svg";

export default function Home() {
  const radius = 100; // Size of the icons in pixels
  const angles = [0, 72, 144, 216, 216, 288]; // Angles for each icon in degrees

  const iconsList = [
    { alt: "react", src: ReactLogo, klass: "" },
    { alt: "typescript", src: TypeScriptLogo, klass: "" },
    { alt: "tailwind", src: TailwindLogo, klass: "" },
    // React Router：深/淺色兩張圖，利用 dark: 切換
    {
      alt: "react-router-light",
      src: ReactRouterLogo_Light,
      klass: "opacity-100 dark:opacity-0",
    },
    {
      alt: "react-router-dark",
      src: ReactRouterLogo_Dark,
      klass: "opacity-0 dark:opacity-100",
    },
    { alt: "vite", src: ViteLogo, klass: "" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center min-h-screen gap-20">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to rttn!</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          rttn is a blazing-fast Vite starter kit with React, TypeScript,
          Tailwind CSS, and React Router.
          <br />
          Preconfigured for modern frontend development, it provides a clean,
          minimal, and opinionated setup.
          <br />
          Skip the boilerplate and focus on building your next project!
        </p>
        <ul className="mt-4 text-left inline-block text-xl text-gray-600 dark:text-gray-400">
          <li>⚡ Vite + React + TypeScript for fast, type-safe development</li>
          <li>🎨 Tailwind CSS for utility-first styling</li>
          <li>🗺 React Router for effortless navigation</li>
          <li>
            🧹 Preconfigured project structure for scalability and
            maintainability
          </li>
        </ul>
      </div>
      <div
        className="relative size-52 mx-auto rounded"
        style={{ ["--r" as any]: `${radius}px`, ["--dur" as any]: "12s" }}
      >
        <div
          className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          animate-[spin_var(--dur)_linear_infinite]
          motion-reduce:animate-none
          group"
        >
          {angles.map((a, index) => (
            <div
              key={index}
              className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              rotate-[var(--a)]
            "
              style={{ ["--a" as any]: `${a}deg` }}
            >
              <img
                src={iconsList[index].src}
                alt={iconsList[index].alt}
                className={[
                  iconsList[index].klass,
                  "size-20 -translate-y-[var(--r)] -rotate-[var(--a)] animate-[spin_var(--dur)_linear_infinite_reverse] motion-reduce:animate-none",
                ].join(" ")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
