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

  return (
    <footer className="bg-black text-white py-10 px-6 mt-auto flex flex-col relative lg:px-24 lg:py-12 overflow-hidden">
      <Image
        src="/images/smudge.svg"
        alt="footer smudge"
        className={"absolute -left-10 top-0 z-0"}
        width={300}
        height={300}
        quality={100}
      />
      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-start justify-start z-10">
        <div className="flex flex-col space-y-8 lg:mr-auto items-center w-full lg:w-auto lg:items-start lg:justify-start">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={100}
            height={100}
            quality={100}
          />
          <p className="font-medium">{footerData.tagline}</p>

          {/* Shadcn Button */}
          <Button
            className="bg-black text-white border border-white hover:bg-white hover:text-black w-1/2 lg:w-auto"
            onClick={openContactDialog}
          >
            {footerData.contactButtonText}
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex-col lg:mr-auto lg:flex">
          <span className="font-bold text-xl mb-12">
            {footerData.navigationTitle}
          </span>
          <nav className="flex flex-col space-y-2">
            {links.map((link) =>
              link.href === "#contact" ? (
                <span
                  key={link.href}
                  onClick={openContactDialog}
                  className="hover:text-zinc-300 duration-500 cursor-pointer"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-zinc-300 duration-500"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="hidden lg:flex lg:flex-col">
          <span className="font-bold text-xl mb-12">
            {footerData.contactTitle}
          </span>
          <div className="flex flex-col space-y-3">
            <p>{footerData.hours}</p>
            <a href={`mailto:${footerData.email}`} className=" underline">
              {footerData.email}
            </a>
            <p className="text-zinc-500">
              {footerData.addressLine1}
              <br />
              {footerData.addressLine2}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between mt-12 lg:mt-24 items-center z-10">
        <span>
          © {currentYear} NQ Studios. <br className="lg:hidden" />{" "}
          {footerData.rightsReserved}
        </span>
        <a href="#">{footerData.backToTopText}</a>
      </section>
    </footer>
  );
};

export default Footer;
