import { AnimatedText } from "@/app/_ui";
import { Terminal } from "@/app/_components";

export const Main = () => {
  return (
    <main className="flex-1 animate-fade-in flex flex-col lg:flex-row items-start justify-center lg:justify-between px-2 sm:px-4 md:px-20 xl:px-32 pt-20 lg:pt-36">
      <div className="flex flex-col w-full lg:max-w-[50%] mb-12 lg:mb-0 lg:mr-14">
        <h1 className="text-3xl font-bold md:text-6xl lg:mt-10 ml-1 sm:ml-0">
          Hi, <br /> I am{" "}
          <span className="bg-linear-to-r from-cyan-300 to-violet-600 bg-clip-text text-transparent">
            ndiuky
          </span>
        </h1>
        <AnimatedText />
      </div>
      <div className="w-full lg:w-[45%] mt-8 lg:mt-0 min-h-[320px] -mr-3 sm:mr-0 overflow-hidden">
        <Terminal />
      </div>
    </main>
  );
};
