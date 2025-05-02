"use client";

import { TypeAnimation } from "react-type-animation";

export const AnimatedText = () => {
  return (
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
  );
};
