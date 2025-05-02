"use client";

import { TypeAnimation } from "react-type-animation";

export const Main = () => {
  return (
    <main className="flex-1 min-h-screen animate-fade-in flex flex-col lg:flex-row items-start justify-center lg:justify-between px-2 sm:px-4 md:px-20 xl:px-32 pt-20 lg:pt-36">
      <div className="flex flex-col w-full lg:max-w-[50%] mb-12 lg:mb-0 lg:mr-14">
        <h1 className="text-3xl font-bold md:text-6xl lg:mt-10 ml-1 sm:ml-0">
          Hi, <br /> I am{" "}
          <span className="bg-linear-to-r from-cyan-300 to-violet-600 bg-clip-text text-transparent">
            ndiuky
          </span>
        </h1>
        <h2 className="text-lg md:text-4xl font-bold text-gray-600 dark:text-gray-400 mt-4 ml-1 sm:ml-0">
          <TypeAnimation
            sequence={[
              "i am a Full-Stack Developer",
              1000,
              "i am a JavaScript Developer",
              1000,
              "and TypeScript also",
              1000,
              "i write code :3",
              1000,
              "love building things <3",
              1000,
            ]}
            repeat={Infinity}
            wrapper="span"
            speed={1}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "95vw",
              lineHeight: "1.2em",
              minHeight: "1.2em",
            }}
          />
        </h2>
      </div>
    </main>
  );
};
