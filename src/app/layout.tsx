import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import navigationData from "@/data/navigationData.json";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NQ Studios s.r.o. | Web Development & Digital Solutions",
  description:
    "Empower your business with next level technology. Professional web development, digital marketing and technology solutions tailored for your growth.",
  keywords:
    "web development, digital solutions, technology services, NQ Studios, empowero",
  metadataBase: new URL("https://nqstudios.com"),
  openGraph: {
    title: "NQ Studios s.r.o. | Web Development & Digital Solutions",
    description: "Empower your business with next level technology",
    url: "https://nqstudios.com",
    siteName: "NQ Studios s.r.o.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "NQ Studios - Web Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NQ Studios s.r.o. | Web Development & Digital Solutions",
    description: "Empower your business with next level technology",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/logo.ico",
    shortcut: "/icons/logo.ico",
    apple: "/icons/logo.ico",
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://nqstudios.com",
    languages: {
      en: "https://nqstudios.com",
    },
  },
};

const links = navigationData.map((link) => ({
  label: link.label,
  href: link.href,
}));

function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nqstudios.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NQ Studios s.r.o.",
            url: "https://nqstudios.com",
            logo: "https://nqstudios.com/images/logo.svg",
            description:
              "Empower your business with next level technology. Professional web development and digital solutions.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CZ",
            },
            sameAs: [
              // Add your social media profiles when available
              // "https://www.linkedin.com/company/nqstudios",
              // "https://twitter.com/nqstudios",
              // "https://www.facebook.com/nqstudios"
            ],
          }}
        />
      </head>
      <body className={`flex flex-col ${poppins.className}`}>
        <Header links={links} />
        <main>{children}</main>
        <Footer links={links} />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
