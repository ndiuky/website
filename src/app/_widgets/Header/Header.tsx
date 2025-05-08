import Link from "next/link";
import { Navbar, MobileMenu } from "@/app/_components";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <div className="pl-2 lg:pl-48 md:flex">
        <p className="text-2xl font-semibold">
          <Link href="/">ndiuky</Link>
        </p>
      </div>
      <Navbar />
      <MobileMenu />
    </header>
  );
};
