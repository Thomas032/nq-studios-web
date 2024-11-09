"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import the Button from Shadcn

const Footer = ({ links }: { links: { href: string; label: string }[] }) => {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };
  return (
    <footer className="bg-black text-white py-10 px-6 mt-auto flex flex-col relative lg:px-24 lg:py-12 overflow-hidden">
      <Image
        src="/images/smudge.svg"
        alt="footer smudge"
        className={"absolute -left-10 top-0 z-0"}
        width={300}
        height={300}
      />
      <section className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-start justify-start z-10">
        <div className="flex flex-col space-y-8 lg:mr-auto items-center w-full lg:w-auto lg:items-start lg:justify-start">
          <Image src="/images/logo_v2.svg" alt="logo" width={66} height={66} />
          <p className="font-medium">
            Empower your business with <br />a bold digital presence.
          </p>

          {/* Shadcn Button */}
          <Button className="bg-black text-white border border-white hover:bg-white hover:text-black w-1/2 lg:w-auto">
            Get in touch
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex-col lg:mr-auto lg:flex">
          <span className="font-bold text-xl mb-12">Navigation</span>
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
          <span className="font-bold text-xl mb-12">Contact us</span>
          <div className="flex flex-col space-y-3">
            <p>+420 608 985 459</p>
            <a href="mailto:empowero@nq-studios.com" className=" underline">
              empowero@nq-studios.com
            </a>
            <p>Mo-Fr:8-17</p>
            <p className="text-zinc-500">
              Arminova 459/43, 102 00 Prague
              <br />
              Czech Republic
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between mt-12 lg:mt-24 items-center z-10">
        <span>
          © 2024 Empowero. <br className="lg:hidden" /> All Rights Reserved.
        </span>
        <a href="#">Back to top ↑</a>
      </section>
    </footer>
  );
};

export default Footer;
