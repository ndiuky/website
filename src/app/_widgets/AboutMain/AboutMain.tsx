import { Avatar } from "@/app/_components";

export const AboutMain = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:pt-40 max-w-7xl">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
        <div className="w-full max-w-[300px] md:max-w-none md:w-5/12 animate-fade-in">
          <Avatar />
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:w-5/12 animate-fade-in">
          <p className="text-2xl md:text-4xl font-bold mb-4 mt-14">
            Merlin Sparrow
          </p>
          <p className="text-base md:text-lg">
            I began my web development journey in 2023, choosing Node.js and
            TypeScript as my primary stack. My goal is to become a full-stack
            developer capable of creating complex and high-performing web
            applications. I am currently delving deeper into front-end
            frameworks (e.g., Next.js) and architectural patterns.
          </p>
          <div className="mt-10 w-full flex justify-center"></div>
        </div>
      </div>
    </main>
  );
};
