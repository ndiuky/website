import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import type { LayoutProps } from "@/interfaces";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ndiuky.ts",
  description: "ndiuky's website",
  applicationName: "ndiuky.ts",
  authors: [
    {
      name: "Farid Tipayev",
      url: "github.com/ndiuky",
    },
  ],
  keywords: [
    "ndiuky",
    "Farid Tipayev",
    "Azerbaijan",
    "developer",
    "nextjs",
    "javascript",
    "typescript",
    "react",
    "web development",
    "frontend",
    "backend",
    "fullstack",
    "full stack",
  ],
  creator: "Farid Tipayev",
  publisher: "Farid Tipayev",
  robots: {
    index: true,
  },
  openGraph: {
    title: "ndiuky.ts",
    description: "ndiuky's website",
    url: "https://ndiuky.vercel.app",
    siteName: "ndiuky.ts",
    images: [
      {
        url: "https://ndiuky.vercel.app/avatar.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ndiuky.ts",
    description: "ndiuky's website",
    images: ["https://ndiuky.vercel.app/avatar.jpg"],
    creator: "@ndiuky_dev",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
