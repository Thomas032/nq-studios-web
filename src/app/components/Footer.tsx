"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import footerData from "@/data/footerData.json";

const Footer = ({ links }: { links: { href: string; label: string }[] }) => {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-12 px-6 mt-auto flex flex-col relative lg:px-24 lg:py-16 overflow-hidden">
      <Image
        src="/images/smudge.svg"
        alt="footer smudge"
        className="absolute -left-10 top-0 z-0"
        width={300}
        height={300}
        loading="lazy"
        quality={80}
      />
      <div className="max-w-7xl mx-auto w-full z-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-6 items-start">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={90}
              height={90}
              loading="lazy"
            />
            <p className="font-medium text-gray-300 max-w-xs">
              {footerData.tagline}
            </p>

            <Button
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 mt-4"
              onClick={openContactDialog}
            >
              {footerData.contactButtonText}
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-6">
              {footerData.navigationTitle}
            </span>
            <nav className="flex flex-col space-y-3">
              {links.map((link) =>
                link.href === "#contact" ? (
                  <span
                    key={link.href}
                    onClick={openContactDialog}
                    className="text-gray-300 hover:text-[#01A7E1] transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </span>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-[#01A7E1] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xl mb-6">
              {footerData.contactTitle}
            </span>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-300">{footerData.hours}</p>
              <a
                href={`mailto:${footerData.email}`}
                className="text-[#01A7E1] hover:text-[#018DBF] transition-colors duration-300"
              >
                {footerData.email}
              </a>
              <div className="text-gray-400 mt-2">
                <p>{footerData.addressLine1}</p>
                <p>{footerData.addressLine2}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gray-800 my-10"></div>

        <section className="flex flex-col md:flex-row justify-between items-center gap-4 z-10">
          <span className="text-gray-400 text-sm">
            © {currentYear} NQ Studios. {footerData.rightsReserved}
          </span>
          <button
            onClick={scrollToTop}
            className="text-[#01A7E1] hover:text-[#018DBF] transition-colors duration-300"
          >
            {footerData.backToTopText}
          </button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
