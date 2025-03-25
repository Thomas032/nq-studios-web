import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import navigationData from "@/data/navigationData.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NQ Studios",
  description: "Empower your business with next level technology",
};

const links = navigationData.map((link) => ({
  label: link.label,
  href: link.href,
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.ico" />
      </head>
      <body className={`flex flex-col ${poppins.className}`}>
        <Header links={links} />
        <main>{children}</main>
        <Footer links={links} />
        <Toaster />
      </body>
    </html>
  );
}
