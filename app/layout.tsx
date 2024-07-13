import type { Metadata } from "next";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import "./ui/globals.css";
import Navigation from "./ui/navigation";

export const metadata: Metadata = {
  title: "Guide for Visitors",
  description: "Ohjeita johtajan tiluksilla vieraileville",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
