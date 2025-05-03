import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

import type { LayoutProps } from "@/interfaces";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blog",
  keywords: ["blog", "ndiuky", "website"],
  description: "Blog of ndiuky",
};

export default function BlogLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
