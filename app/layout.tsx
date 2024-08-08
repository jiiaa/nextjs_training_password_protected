import { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./ui/globals.css";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | VowDanger",
    default: "VowDanger",
  },
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
        <div className="container">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
