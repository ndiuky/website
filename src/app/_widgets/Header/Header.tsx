import { Navbar } from "@/app/_components";

export const Header = () => {
  return (
    <header className="border-b-current border-b-2 flex items-center justify-between w-full bg-clip-padding py-4 px-2 md:px-0 lg:px-0 sticky top-0 z-50">
      <div className="pl-2 lg:pl-48 md:flex">
        <p className="text-2xl font-semibold">ndiuky</p>
      </div>
      <Navbar />
    </header>
  );
};
