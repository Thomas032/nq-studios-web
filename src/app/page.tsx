"use client";
import { Button } from "@/components/ui/button"; // Import the Button from Shadcn
import Image from "next/image";
import ProcessDropdown from "./components/ProcessDropdown";
import ReferenceCarousel from "./components/ReferenceCarousel";
import LinkStrip from "./components/LinkStrip";
import PriceList from "./components/PriceList";
import Link from "next/link";
import TeamCarousel from "./components/TeamCarousel";
import ContactCard from "./components/ContactCard";

export default function Home() {
  const openContactDialog = () => {
    // Create and dispatch a custom event
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  return (
    <div className="flex flex-col">
      {/* Contact box */}
      <ContactCard />
      {/* Hero Section */}
      <section className="flex flex-col-reverse justify-end bg-black min-h-screen text-white lg:flex-row">
        <div className="w-full px-6 space-y-10 lg:space-y-5 flex flex-col justify-center pb-10 lg:w-2/3 lg:px-20">
          <h1 className="font-medium text-5xl">
            Empower your business <br /> with{" "}
            <span className="relative">
              <span className="z-10 text-white relative">bold</span>
              <span className="absolute left-0 top-2 text-red-600 z-0 blur-md font-bold">
                bold
              </span>
            </span>{" "}
            digital presence.
          </h1>
          <p className="hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar rutrum hendrerit. Maecenas eu ligula at velit ullamcorper
            suscipit. Mauris eu condimentum sapien.
          </p>
          <div className="flex flex-row space-x-4 w-full">
            <Button
              className="bg-[#01A7E1] text-white border border-black hover:bg-[#018DBF] text-xl font-thin lg:text-sm"
              onClick={openContactDialog}
            >
              Contact us
            </Button>
            <Link href="#references">
              <Button className="bg-black text-white border border-white hover:bg-white hover:text-black text-xl font-thin lg:text-sm">
                References
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-black">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={500}
            height={500}
            className=" mix-blend-hard-light w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our process section */}
      <section
        className="bg-white py-10 px-6 lg:px-20 flex flex-col"
        id="processes"
      >
        <div className="flex flex-row justify-between text-black mb-10 lg:mb-5">
          <h3 className="text-3xl">Our process</h3>
          <span className="text-right flex flex-col lg:block">
            4 easy steps to take your business to the next level <br /> Any
            questions?{" "}
            <span
              onClick={openContactDialog}
              className="text-[#01A7E1] underline cursor-pointer"
            >
              Give us a call
            </span>
          </span>
        </div>

        {/* CARD dropdown component */}
        <ProcessDropdown />
      </section>

      {/* References section */}
      <section
        className="bg-white flex flex-col px-6 lg:px-20 py-10 items-center justify-center"
        id="references"
      >
        <h3 className="text-3xl mb-10">References</h3>
        <ReferenceCarousel />
      </section>
      {/* LinkStrip component */}
      <LinkStrip
        message="Do you want to see more?"
        buttonText="Discover our portfolio"
        link="/porfolio"
      />
      {/* PriceList section */}
      <section
        className="bg-black py-20 px-6 lg:px-20 flex flex-col relative overflow-hidden"
        id="pricelist"
      >
        <Image
          src="/images/smudge.svg"
          alt="footer smudge"
          className={"absolute -left-10 -bottom-32 z-0"}
          width={300}
          height={300}
        />
        <div className="flex flex-row justify-between text-white mb-10">
          <h3 className="text-3xl">Pricelist</h3>
          <span className="text-right flex flex-col lg:block">
            Individual price?{" "}
            <span
              onClick={openContactDialog}
              className="text-[#01A7E1] underline cursor-pointer"
            >
              Contact us
            </span>
          </span>
        </div>
        <PriceList />
      </section>
      {/* Our Team section */}
      <section
        className="bg-white flex flex-col mx-20 my-10 items-center justify-center"
        id="team"
      >
        <h3 className="text-3xl mb-10">Our Team</h3>
        <TeamCarousel />
      </section>
      <LinkStrip
        message="Do you want to join us?"
        buttonText="Check our job offers"
        link="/careers"
      />
    </div>
  );
}
