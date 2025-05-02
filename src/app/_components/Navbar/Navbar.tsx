"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-4 pr-10 lg:pr-48">
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
    </nav>
  );
};
