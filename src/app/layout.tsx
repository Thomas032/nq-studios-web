import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Empowero",
  description: "Empowr your business with next level technology",
};

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
      <body className="flex flex-col min-h-screen">
        {" "}
        {/* Set body to flex column and full height */}
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>{" "}
        {/* Allow main to grow */}
        <Footer />
      </body>
    </html>
  );
}
