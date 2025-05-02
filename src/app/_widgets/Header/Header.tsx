"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b-current border-b-2 flex items-center justify-between w-full bg-clip-padding py-4 px-2 md:px-0 lg:px-0 sticky top-0 z-50">
      <div className="pl-2 lg:pl-48 md:flex">
        <p className="text-2xl font-semibold">ndiuky</p>
      </div>
      <div className="hidden md:flex space-x-4 pr-10 lg:pr-48">
        <Link
          href="/"
          className={`text-xl font-semibold hover:text-purple-600 transition-colors duration-500 ${
            pathname === "/" ? "border-b-2 border-purple-600" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={`text-xl font-semibold hover:text-purple-600 transition-colors duration-500 ${
            pathname.startsWith("/blog") ? "border-b-2 border-purple-600" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`text-xl font-semibold hover:text-purple-600 transition-colors duration-500 ${
            pathname === "/about" ? "border-b-2 border-purple-600" : ""
          }`}
        >
          About
        </Link>
      </div>
    </header>
  );
};
