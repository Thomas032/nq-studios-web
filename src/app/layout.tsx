import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Empowero",
  description: "Empower your business with next level technology",
};

const links = [
  { href: "#processes", label: "Our Processes" },
  { href: "#references", label: "References" },
  { href: "#pricelist", label: "Pricelist" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo_v2.ico" />
      </head>
      <body className={`flex flex-col ${poppins.className}`}>
        <Header links={links} />
        <main>{children}</main>
        <Footer links={links} />
      </body>
    </html>
  );
}
